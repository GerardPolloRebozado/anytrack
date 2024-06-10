import { Response, Request } from "express";
import { getEpisodeService, markEpisodeService, saveEpisodeService } from "../services/episodeService";
import { createMediaService, searchMediaService } from "../services/mediaService";
import { getSeasonByNumberService, getSeasonService, getSeasonsService, saveSeasonService } from "../services/seasonService";
import { searchShowSeasonsService, searchShowService, searchShowTmdbIdService } from "../services/tmdbService";
import prisma from "../services/prisma";
import { upsertGenreService } from "../services/genresService";
import { genre } from "@prisma/client";

export const searchShow = async (req: Request, res: Response) => {
  try {
    const term = req.query.term as string;
    let data: any = {};
    if (term.startsWith("tmdb:")) {
      data = await searchShowTmdbIdService(term.split(":")[1]);
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
    const tmdbId = req.body.tmdbId;
    const userId = res.locals.user.id;
    const season = req.body.season;
    const episode = req.body.episode;
    const watchedDate = req.body.watchedDate ? new Date(req.body.watchedDate) : undefined;
    const watched: boolean = req.body.watched;

    let show = await searchMediaService({
      tmdbId: String(tmdbId),
      mediaType: 'show'
    })

    if (!show) {
      const tmdbShow = await searchShowTmdbIdService(tmdbId);
      if (tmdbShow.status_code === 34) throw new Error("Show not found");
      show = await createMediaService({
        tmdbId: String(tmdbShow.id),
        mediaType: "show",
        title: tmdbShow.name,
        overview: tmdbShow.overview,
        poster: `https://image.tmdb.org/t/p/original/${tmdbShow.poster_path}`,
        tmdbRating: tmdbShow.vote_average,
        releaseDate: new Date(tmdbShow.first_air_date),
        url: `https://www.themoviedb.org/tv/${tmdbShow.id}`,
        seasons: tmdbShow.number_of_seasons,
        genres: {
          connect: await Promise.all(tmdbShow.genres.map(async (genre: any) => {
            return {
              id: (await upsertGenreService(genre.name)).id
            }
          })),
        }
      });

      const seasonsTmdb = await Promise.all(tmdbShow.seasons.map(async (season: any) => {
        return await searchShowSeasonsService(tmdbId, season.season_number);
      }));

      const seasonPromises = seasonsTmdb.map(async (season: any) => {
        const seasonDb = await saveSeasonService({
          seasonNumber: season.season_number,
          title: season.name,
          poster: `https://image.tmdb.org/t/p/original/${season.poster_path}`,
          releaseDate: new Date(season.air_date),
          overview: season.overview,
          mediaItem: {
            connect: {
              id: show?.id
            }
          }
        });

        const episodePromises = season.episodes.map(async (episode: any) => {
          await saveEpisodeService({
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
          });
        });

        await Promise.all(episodePromises);
      });

      await Promise.all(seasonPromises);
    }

    if (season && season !== -1 && episode && episode !== -1) {
      const episodeFromDB = await getEpisodeService({
        episodeNumber: episode,
        season: {
          seasonNumber: season,
          mediaItem: {
            id: show.id
          },
        }
      })
      if (!episodeFromDB) throw new Error("Episode not found");
      const userEpisode = await markEpisodeService({
        episode: episodeFromDB,
        userId,
        watched,
        watchedDate,
        mediaId: show.id
      });
      res.status(200).json(userEpisode);
    } else if (season !== -1) {
      const episodes = await getSeasonByNumberService({
        mediaItem: {
          id: show.id
        },
        seasonNumber: season
      }, true);
      episodes?.episodes.forEach(async (episode) => {
        await markEpisodeService({
          episode,
          userId,
          watched,
          watchedDate,
          mediaId: show.id
        });
      })
      res.status(200).json(episodes);
    } else {
      const seasons = await getSeasonsService({
        mediaItemId: show.id
      });
      seasons.forEach(async (season) => {
        const episodes = await getSeasonService({
          mediaItemId_seasonNumber: {
            mediaItemId: show.id,
            seasonNumber: season.seasonNumber,
          }
        }, true);
        episodes?.episodes.forEach(async (episode) => {
          await markEpisodeService({
            episode,
            userId,
            watched,
            watchedDate,
            mediaId: show.id
          });
        })
      })
      res.status(200).json(seasons);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
