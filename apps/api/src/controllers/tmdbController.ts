import { Request, Response } from 'express';
import { getAgregatedShowCreditsService, getMovieCredits, searchShowSeasonsService, searchShowTmdbIdService } from '../services/tmdbService';
import { MediaType } from '@prisma/client';

export const getShowSeasons = async (req: Request, res: Response) => {
  try {
    const tmdbId = req.query.tmdbId as string;
    const seasonNumber: number | undefined = req.query.season as unknown as number | undefined;
    const show = await searchShowTmdbIdService(tmdbId);
    let seasons: any
    if (!show || show.status_code === 34) {
      throw new Error("Show not found");
    }
    if (seasonNumber) {
      seasons = await searchShowSeasonsService(tmdbId, seasonNumber)
      if (seasons.status_code === 34) {
        throw new Error("Season not found");
      }
      seasons.poster_path = `https://image.tmdb.org/t/p/original/${seasons.poster_path}`
      seasons.episodes.map((episode: any) => {
        episode.still_path = `https://image.tmdb.org/t/p/original/${episode.still_path}`
      })
      if (seasons.status_code === 34) {
        throw new Error("Show or season not found");
      }
    } else {
      seasons = await Promise.all(show.seasons.map(async (season: any) => {
        return await searchShowSeasonsService(tmdbId, season.season_number);
      }));
      seasons.map((season: any) => season.poster_path = `https://image.tmdb.org/t/p/original/${season.poster_path}`)
    }
    res.status(200).json(seasons);
  } catch (error) {
    res.status(500).json(error);
  }
}

export const getCredits = async (req: Request, res: Response) => {
  try {
    const mediaType = req.query.mediaType as MediaType;
    const tmdbId = req.query.tmdbId as string;
    let response;
    if (mediaType === MediaType.show) {
      response = await getAgregatedShowCreditsService(tmdbId)
      await Promise.all(response.cast.map(async (credit: any) => {
        credit.profile_path = `https://image.tmdb.org/t/p/original/${credit.profile_path}`
      }))
    } else {
      response = await getMovieCredits(tmdbId)
    }
    res.status(200).json(response)
  } catch (error) {
    res.status(500).json(error)
  }
}
