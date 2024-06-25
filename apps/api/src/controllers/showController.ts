import { Response, Request } from "express";
import { searchShowSeasonsService, searchShowService, searchShowTmdbIdService } from "../services/tmdbService";
import prisma from "../services/prisma";

export const searchShow = async (req: Request, res: Response) => {
  try {
    const term = req.query.term as string;
    let data: any = {};
    if (term.startsWith("tmdb:")) {
      data = await searchShowTmdbIdService(Number(term.split(":")[1]));
      const localId = await prisma.mediaItem.findUnique({
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

    let show = await prisma.mediaItem.findFirst({
      where: {
        tmdbId: tmdbId,
        mediaType: 'show'
      }
    });

    if (!show) {
      const tmdbShow = await searchShowTmdbIdService(tmdbId);
      if (tmdbShow.status_code === 34) throw new Error("Show not found");
      show = await prisma.mediaItem.create({
        data: {
          tmdbId: tmdbShow.id,
          mediaType: "show",
          title: tmdbShow.name,
          overview: tmdbShow.overview,
          poster: `https://image.tmdb.org/t/p/original/${tmdbShow.poster_path}`,
          tmdbRating: tmdbShow.vote_average,
          releaseDate: new Date(tmdbShow.first_air_date),
          seasons: tmdbShow.number_of_seasons,
          genres: {
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
            mediaItem: {
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
            mediaItem: {
              id: show.id
            },
          }
        }
      })
      if (!episodeFromDB) throw new Error("Episode not found");

      const userEpisode = await prisma.userMediaItem.upsert({
        where: {
          unique_user_media_series: {
            userId,
            mediaId: show.id,
            seasonId: episodeFromDB.seasonId,
            episodeId: episodeFromDB.id
          }
        },
        update: {
          watched,
          watchedDate,
        },
        create: {
          userId,
          mediaId: show.id,
          seasonId: episodeFromDB.seasonId,
          episodeId: episodeFromDB.id,
          watched,
          watchedDate,
        },
      })
      res.status(200).json(userEpisode);
    } else if (season !== -1) {
      const episodes = await prisma.season.findUnique({
        where: {
          mediaItemId_seasonNumber: {
            mediaItemId: show.id,
            seasonNumber: season
          },
        },
        include: {
          episodes: true
        },
      });

      episodes?.episodes.forEach(async (episode) => {
        await prisma.userMediaItem.upsert({
          where: {
            unique_user_media_series: {
              userId,
              mediaId: show.id,
              seasonId: episode.seasonId,
              episodeId: episode.id
            }
          },
          update: {
            watched,
            watchedDate,
          },
          create: {
            userId,
            mediaId: show.id,
            seasonId: episode.seasonId,
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
          mediaItemId: show.id
        },
        include: {
          episodes: true
        },
      });
      seasons.forEach(async (season) => {
        season.episodes.forEach(async (episode) => {
          await prisma.userMediaItem.upsert({
            where: {
              unique_user_media_series: {
                userId,
                mediaId: show.id,
                seasonId: episode.seasonId,
                episodeId: episode.id
              }
            },
            update: {
              watched,
              watchedDate,
            },
            create: {
              userId,
              mediaId: show.id,
              seasonId: episode.seasonId,
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
    res.status(500).json({ error: error.message });
  }
}
