import { Request, Response } from 'express';
import { getAgregatedShowCreditsService, getMovieCredits, getMovieProviders, getOnePeopleService, getShowProviders, searchShowSeasonsService, searchShowTmdbIdService } from '../services/tmdbService';
import { MediaType } from '@anytrack/type';

export const getShowSeasons = async (req: Request, res: Response) => {
  try {
    const tmdbId = Number(req.query.tmdbId);
    const seasonNumber: number | undefined = req.query.season as unknown as number | undefined;
    const show = await searchShowTmdbIdService(tmdbId);
    let seasons: any
    if (!show || show.status_code === 34) {
      throw new Error("Show not found");
    }
    if (seasonNumber) {
      seasons = await searchShowSeasonsService(tmdbId, seasonNumber)
      seasons.poster_path = `https://image.tmdb.org/t/p/original/${seasons.poster_path}`
      seasons.episodes.map((episode: any) => {
        episode.still_path = `https://image.tmdb.org/t/p/original/${episode.still_path}`
      })
      if (seasons.status_code === 34) {
        throw new Error("Show or season not found");
      } null
    } else {
      seasons = await Promise.all(show.seasons.map(async (season: any) => {
        return await searchShowSeasonsService(tmdbId, season.season_number);
      }));
      seasons.map((season: any) => season.poster_path = `https://image.tmdb.org/t/p/original/${season.poster_path}`)
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
      response = await getAgregatedShowCreditsService(tmdbId)
    } else if (mediaType === 'movie') {
      response = await getMovieCredits(tmdbId)
    }
    if (await response.status_code === 34) {
      throw new Error(`${mediaType} not found`);
    }
    await Promise.all(response.cast.map(async (credit: any) => {
      credit.profile_path = `https://image.tmdb.org/t/p/original${credit.profile_path}`
    }));
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}

export const getOnePeople = async (req: Request, res: Response) => {
  try {
    const peopleId = Number(req.params.peopleId);
    const response = await getOnePeopleService(peopleId);
    const people = await response.json();
    if (await people.status_code === 34) {
      throw new Error("People not found");
    }
    people.profile_path = `https://image.tmdb.org/t/p/original${people.profile_path}`;
    people.combined_credits.cast.map((media: any) => {
      media.poster_path = `https://image.tmdb.org/t/p/original${media.poster_path}`;
    });
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
        const responseMovie = await getMovieProviders(tmdbId)
        providers = await responseMovie.json()
        break;
      }
      case MediaType.show: {
        const responseShow = await getShowProviders(tmdbId)
        providers = await responseShow.json()
        break;
      }
      default:
        res.status(500).json('Only shows and movies can be used to check watch providers')
        return
    }
    Object.values(await providers.results).map((provider: any) => {
      console.log(provider);
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
    res.status(200).json(providers)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}
