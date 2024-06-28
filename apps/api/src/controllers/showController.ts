import { Response, Request } from "express";
import { searchShowSeasonsService, searchShowService, searchShowTmdbIdService } from "../services/tmdbService";
import prisma from "../services/prisma";

export const searchShow = async (req: Request, res: Response) => {
  try {
    const term = req.query.term as string;
    let data: any = {};
    if (term.startsWith("tmdb:")) {
      data = await searchShowTmdbIdService(Number(term.split(":")[1]));
      const localId = await prisma.show.findUnique({
        where: {
          tmdbId: await data.id
        }
      });
      if (localId) {
        data.localId = localId.id;
      }
    } else {
      data = await searchShowService(term);
    }
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}

export const markShow = async (req: Request, res: Response) => {
  try {
    const tmdbId = Number(req.body.tmdbId);
    const userId = res.locals.user.id;
    const season = req.body.season;
    const episode = req.body.episode;
    const watchedDate = req.body.watchedDate ? new Date(req.body.watchedDate) : undefined;
    const watched: boolean = req.body.watched;

    let show = await prisma.show.findFirst({
      where: {
        tmdbId: tmdbId,
      }
    });

    if (!show) {
      const tmdbShow = await searchShowTmdbIdService(tmdbId);
      if (tmdbShow.status_code === 34) throw new Error("Show not found");
      show = await prisma.show.create({
        data: {
          tmdbId: tmdbShow.id,
          title: tmdbShow.name,
          overview: tmdbShow.overview,
          poster: `https://image.tmdb.org/t/p/original/${tmdbShow.poster_path}`,
          tmdbRating: tmdbShow.vote_average,
          releaseDate: new Date(tmdbShow.first_air_date),
          genre: {
            connect: await Promise.all(tmdbShow.genres.map(async (genre: any) => {
              return {
                id: (await prisma.genre.upsert({ where: { name: genre.name }, create: { name: genre.name }, update: { name: genre.name } })).id
              }
            })),
          }
        }
      });
      const seasonsTmdb = await Promise.all(tmdbShow.seasons.map(async (season: any) => {
        return await searchShowSeasonsService(tmdbId, season.season_number);
      }));

      const seasonPromises = seasonsTmdb.map(async (season: any) => {
        const seasonDb = await prisma.season.create({
          data: {
            seasonNumber: season.season_number,
            title: season.name,
            poster: `https://image.tmdb.org/t/p/original/${season.poster_path}`,
            releaseDate: new Date(season.air_date),
            overview: season.overview,
            show: {
              connect: {
                id: show.id
              }
            }
          }
        });

        const episodePromises = season.episodes.map(async (episode: any) => {
          await prisma.episode.create({
            data: {
              episodeNumber: episode.episode_number,
              title: episode.name,
              overview: episode.overview,
              runtime: episode.runtime,
              releaseDate: new Date(episode.air_date),
              season: {
                connect: {
                  id: seasonDb.id
                }
              }
            }
          });
        });

        await Promise.all(episodePromises);
      });

      await Promise.all(seasonPromises);
    }

    if (season && season !== -1 && episode && episode !== -1) {
      const episodeFromDB = await prisma.episode.findFirst({
        where: {
          episodeNumber: episode,
          season: {
            seasonNumber: season,
          }
        }
      })
      if (!episodeFromDB) throw new Error("Episode not found");

      const userEpisode = await prisma.userShow.upsert({
        where: {
          userId_showId_episodeId: {
            userId,
            showId: show.id,
            episodeId: episodeFromDB.id
          }
        },
        update: {
          watched,
          watchedDate,
        },
        create: {
          userId,
          showId: show.id,
          episodeId: episodeFromDB.id,
          watched,
          watchedDate,
        },
      })
      res.status(200).json(userEpisode);
    } else if (season !== -1) {
      const episodes = await prisma.season.findUnique({
        where: {
          showId_seasonNumber: {
            showId: show.id,
            seasonNumber: season
          }
        },
        include: {
          episode: true
        },
      });

      episodes?.episode.forEach(async (episode) => {
        await prisma.userShow.upsert({
          where: {
            userId_showId_episodeId: {
              userId,
              showId: show.id,
              episodeId: episode.id
            }
          },
          update: {
            watched,
            watchedDate,
          },
          create: {
            userId,
            showId: show.id,
            episodeId: episode.id,
            watched,
            watchedDate,
          },
        })
      })
      res.status(200).json(episodes);
    } else {
      const seasons = await prisma.season.findMany({
        where: {
          showId: show.id
        },
        include: {
          episode: true
        },
      });
      seasons.forEach(async (season) => {
        season.episode.forEach(async (episode) => {
          await prisma.userShow.upsert({
            where: {
              userId_showId_episodeId: {
                userId,
                showId: show.id,
                episodeId: episode.id
              }
            },
            update: {
              watched,
              watchedDate,
            },
            create: {
              userId,
              showId: show.id,
              episodeId: episode.id,
              watched,
              watchedDate,
            },
          })
        })
      })
      res.status(200).json(seasons);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}

export const getManyMarkedShows = async (req: Request, res: Response) => {
  try {
    const watched = req.query.watched as string | undefined
    const userId = res.locals.user.id
    const groupBy = req.query.groupBy as string | undefined
    const shows = await prisma.userShow.findMany({
      where: {
        userId,
        watched: watched !== undefined ? watched !== 'true' ? false : true : undefined,
      },
      include: {
        show: {
          include: {
            genre: true
          }
        },
        episode: true,
      },
      orderBy: {
        watchedDate: 'desc',
      }
    })
    switch (groupBy) {
      case "month": {
        const groupedShows: { groupedMedia: { month: string, totalRuntime: number, media: any[] }[], statsOverview: { totalRuntime: number, episodeCount: number } } = {
          groupedMedia: [],
          statsOverview: {
            totalRuntime: 0,
            episodeCount: 0
          }
        };
        shows.forEach((show) => {
          const month = show.watchedDate?.toISOString().slice(0, 7);
          const monthIndex = groupedShows.groupedMedia.findIndex((group) => group.month === month);
          if (monthIndex === -1) {
            groupedShows.groupedMedia.push({
              month,
              totalRuntime: show.episode.runtime,
              media: [show]
            });
          } else {
            groupedShows.groupedMedia[monthIndex].totalRuntime += show.episode.runtime;
            groupedShows.groupedMedia[monthIndex].media.push(show);
          }
          groupedShows.statsOverview.totalRuntime += show.episode.runtime;
          groupedShows.statsOverview.episodeCount++;
        });
        res.status(200).json(groupedShows);
        return;
      }
      case "show": {
        const groupedShows: { show: any, episodes: any[], watchTime: number, title: string }[] = [];
        shows.forEach((show) => {
          const existingIndex = groupedShows.findIndex(item => item.show.id === show.show.id);
          if (existingIndex !== -1) {
            groupedShows[existingIndex].episodes.push(show);
            groupedShows[existingIndex].watchTime += show.episode.runtime;
          } else {
            groupedShows.push({ show: show.show, episodes: [show], watchTime: show.episode.runtime, title: show.show.title });
          }
        });
        res.status(200).json(groupedShows);
        return;
      }
    }
    res.status(200).json(shows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }

}
