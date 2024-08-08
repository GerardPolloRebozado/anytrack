import { Request, Response } from 'express';
import { getAgregatedShowCreditsService, getMovieCredits, getMovieProvidersService, getMovieVideosService, getOnePeopleService, getShowProvidersService, getShowVideosService, searchShowSeasonsService, searchShowTmdbIdService } from '../services/tmdbService';
import { MediaType } from '@anytrack/type';
import { Cast, VideosResponse } from 'moviedb-promise';

export const getShowSeasons = async (req: Request, res: Response) => {
  try {
    const tmdbId = Number(req.query.tmdbId);
    const seasonNumber: number | undefined = req.query.season as unknown as number | undefined;
    const show = await searchShowTmdbIdService({ id: tmdbId });
    let seasons: any
    if (!show) {
      throw new Error("Show not found");
    }
    if (seasonNumber) {
      seasons = await searchShowSeasonsService({ id: tmdbId, season_number: seasonNumber })
      seasons.poster_path = `https://image.tmdb.org/t/p/original${seasons.poster_path}`;
      seasons.episodes.map((episode: any) => {
        episode.still_path = `https://image.tmdb.org/t/p/original${episode.still_path}`;
      });
    } else {
      seasons = await Promise.all(show.seasons.map(async (season: any) => {
        return await searchShowSeasonsService({ id: tmdbId, season_number: season.season_number });
      }));
      seasons.map((season: any) => {
        season.poster_path = `https://image.tmdb.org/t/p/original${season.poster_path}`;
      });
    }

    res.status(200).json(seasons);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message })
  }
}

export const getCredits = async (req: Request, res: Response) => {
  try {
    const mediaType = req.query.mediaType as MediaType;
    const tmdbId = Number(req.query.tmdbId);
    let response;
    if (mediaType === 'show') {
      response = await getAgregatedShowCreditsService({ id: tmdbId })
    } else if (mediaType === 'movie') {
      response = await getMovieCredits({ id: tmdbId })
    }
    response.cast.map((cast: Cast) => {
      cast.profile_path = `https://image.tmdb.org/t/p/original${cast.profile_path}`
    })
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}

export const getOnePeople = async (req: Request, res: Response) => {
  try {
    const peopleId = Number(req.params.peopleId);
    const people = await getOnePeopleService({ id: peopleId, append_to_response: 'combined_credits' });
    res.status(200).json(people);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}

export const getWatchProviders = async (req: Request, res: Response) => {
  try {
    const tmdbId = Number(req.params.tmdbId)
    const mediaType = req.query.mediaType
    let providers
    switch (mediaType) {
      case MediaType.movie: {
        providers = await getMovieProvidersService({ id: tmdbId })
        break;
      }
      case MediaType.show: {
        providers = await getShowProvidersService({ id: tmdbId })
        break;
      }
      default:
        res.status(500).json('Only shows and movies can be used to check watch providers')
        return
    }
    Object.values(await providers.results).map((provider: any) => {
      if (provider.flatrate) (
        provider.flatrate.map((flatrate: any) => {
          flatrate.logo_path = `https://image.tmdb.org/t/p/original${flatrate.logo_path}`
        })
      )
      if (provider.rent) (
        provider.rent.map((rent: any) => {
          rent.logo_path = `https://image.tmdb.org/t/p/original${rent.logo_path}`
        })
      )
      if (provider.buy) (
        provider.buy.map((buy: any) => {
          buy.logo_path = `https://image.tmdb.org/t/p/original${buy.logo_path}`
        })
      )
    })
    res.status(200).json(providers.results)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}

export const getMediaVideo = async (req: Request, res: Response) => {
  try {
    const mediaType: MediaType = req.query.mediaType as MediaType
    const tmdbId = Number(req.params.tmdbId)
    let trailers: VideosResponse
    if (mediaType === MediaType.movie) {
      trailers = await getMovieVideosService({ id: tmdbId })
    } else if (mediaType === MediaType.show) {
      trailers = await getShowVideosService({ id: tmdbId })
    }
    res.status(200).json(trailers)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}
