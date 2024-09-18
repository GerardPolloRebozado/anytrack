import { Response, Request } from "express";
import { searchShowSeasonsService, searchShowService, searchShowTmdbIdService } from "../services/tmdbService";
import prisma from "../services/prisma";

export const searchShow = async (req: Request, res: Response) => {
  try {
    const term = req.query.term as string;
    if (term.startsWith("tmdb:")) {
      const data = await searchShowTmdbIdService({ id: Number(term.split(":")[1]) });
      data.poster_path = `https://image.tmdb.org/t/p/original${data.poster_path}`;
      const show = await prisma.show.findUnique({
        where: {
          tmdbId: await data.id
        }
      });
      res.status(200).json({ show: data, localId: show?.id });
    } else {
      const data = await searchShowService({ query: term });
      data.results.forEach((show: any) => {
        show.poster_path = `https://image.tmdb.org/t/p/original${show.poster_path}`;
      });
      res.status(200).json({ show: data });
    }
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
      const tmdbShow = await searchShowTmdbIdService({ id: tmdbId });
      show = await prisma.show.create({
        data: {
          tmdbId: tmdbShow.id,
          title: tmdbShow.name,
          overview: tmdbShow.overview,
          poster: `https://image.tmdb.org/t/p/original${tmdbShow.poster_path}`,
          tmdbRating: tmdbShow.vote_average,
          releaseDate: new Date(tmdbShow.first_air_date),
          genre: {
            connect: await Promise.all(tmdbShow.genres.map(async (genre: any) => {
              return {
                id: (await prisma.movieGenre.upsert({ where: { name: genre.name }, create: { name: genre.name }, update: { name: genre.name } })).id
              }
            })),
          }
        }
      });
      const seasonsTmdb = await Promise.all(tmdbShow.seasons.map(async (season: any) => {
        return await searchShowSeasonsService({ id: tmdbId, season_number: season.season_number });
      }));

      const seasonPromises = seasonsTmdb.map(async (season: any) => {
        const seasonDb = await prisma.season.create({
          data: {
            seasonNumber: season.season_number,
            title: season.name,
            poster: `https://image.tmdb.org/t/p/original${season.poster_path}`,
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
        const groupedShows: { groupedMedia: { month: string, totalRuntime: number, show: any[] }[], statsOverview: { totalRuntime: number, episodeCount: number } } = {
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
              show: [show]
            });
          } else {
            groupedShows.groupedMedia[monthIndex].totalRuntime += show.episode.runtime;
            groupedShows.groupedMedia[monthIndex].show.push(show);
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

export const postShowReview = async (req: Request, res: Response) => {
  try {
    const userId = res.locals.user.id;
    const showId = req.body.mediaId;
    const rating = req.body.rating;
    const review = req.body.review;
    const userReview = await prisma.userShowReview.upsert({
      where: {
        userId_showId: {
          userId,
          showId
        }
      },
      update: {
        rating,
        review,
      },
      create: {
        userId,
        showId,
        rating,
        review,
      }
    })
    res.status(200).json(userReview);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}

export const getManyShowReviews = async (req: Request, res: Response) => {
  try {
    const showId = Number(req.params.mediaId);
    const reviews = await prisma.userShowReview.findMany({
      where: {
        showId,
        rating: {
          not: null
        },
        OR: [
          {
            user: {
              setting: {
                public: true
              }
            }
          },
          {
            userId: res.locals.user.id
          }
        ]
      },
      include: {
        user: {
          select: {
            name: true,
            id: true
          }
        }
      }
    });
    res.status(200).json(reviews);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}

export const deleteOneShowReview = async (req: Request, res: Response) => {
  try {
    const userId = res.locals.user.id;
    const showId = Number(req.params.mediaId);
    await prisma.userShowReview.delete({
      where: {
        userId_showId: {
          userId,
          showId
        }
      }
    });
    res.status(200).json(showId);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}

export const getOneMarkedShow = async (req: Request, res: Response) => {
  try {
    const userId = res.locals.user.id
    const showId = Number(req.params.mediaId)
    const seasonNumber = Number(req.query.seasonNumber) as number | undefined;
    let watched: boolean | undefined;
    if (String(req.query.watched) === 'true') {
      watched = true
    } else if (String(req.query.watched) === 'false') {
      watched = false
    }
    const userShow = await prisma.userShow.findMany({
      where: {
        userId,
        showId,
        watched,
        // add seasonNumber to the query only if seasonNumber is defined
        ...(seasonNumber ? {
          episode: {
            season: {
              seasonNumber
            }
          }
        } : {})
      },
      include: {
        episode: {
          include: {
            season: true
          }
        }
      },
      orderBy: {
        episode: {
          episodeNumber: 'asc'
        }
      }
    })
    if (userShow.length === 0) {
      res.status(200).json("No watched episodes found")
      return
    }
    const groupedBySeason: { season: number, episodes: any[], count: number }[] = [];
    userShow.forEach((episode) => {
      if (episode.episode.season.seasonNumber) {
        if (groupedBySeason[episode.episode.season.seasonNumber]) {
          groupedBySeason[episode.episode.season.seasonNumber].episodes.push(episode);
          groupedBySeason[episode.episode.season.seasonNumber].count++;
        } else {
          groupedBySeason[episode.episode.season.seasonNumber] = {
            season: episode.episode.season.seasonNumber,
            episodes: [episode],
            count: 1
          }
        }
      }
    })
    res.status(200).json(groupedBySeason)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message })
  }
}

export const deleteOneUserShow = async (req: Request, res: Response) => {
  try {
    const userId = res.locals.user.id
    const showId = Number(req.params.mediaId)
    const season = req.query.season
    const episode = req.query.episode
    if (season && episode) {
      const episodeFromDB = await prisma.episode.findFirst({
        where: {
          episodeNumber: Number(episode),
          season: {
            seasonNumber: Number(season)
          }
        }
      })
      if (!episodeFromDB) throw new Error("Episode not found");
      const deletedUserShow = await prisma.userShow.delete({
        where: {
          userId_showId_episodeId: {
            userId,
            showId,
            episodeId: episodeFromDB.id
          }
        }
      })
      res.status(200).json(deletedUserShow)
    } else if (season) {
      const episodes = await prisma.episode.findMany({
        where: {
          season: {
            seasonNumber: Number(season)
          }
        }
      })
      const deletedUserShow = await prisma.userShow.deleteMany({
        where: {
          userId,
          showId,
          episodeId: {
            in: episodes.map((episode) => episode.id)
          }
        }
      })
      res.status(200).json(deletedUserShow)
    } else {
      const deletedUserShow = await prisma.userShow.deleteMany({
        where: {
          userId,
          showId
        }
      })
      res.status(200).json(deletedUserShow)
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const getManyFutureEpisode = async (req: Request, res: Response) => {
  try {
    const userId = res.locals.user.id
    const futureEpisodes = await prisma.episode.findMany({
      where: {
        userShow: {
          some: {
            userId
          }
        },
        releaseDate: {
          gte: new Date()
        }
      },
      include: {
        season: {
          include: {
            show: true
          }
        }
      },
      orderBy: {
        releaseDate: 'asc'
      }
    })
    res.status(200).json(futureEpisodes)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
