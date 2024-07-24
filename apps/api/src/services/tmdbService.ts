const token = process.env.TMDB_API_KEY;

export const searchMovieService = async (query: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=true&language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  data.poster_path = `https://image.tmdb.org/t/p/original${data.poster_path}`;
  return data;
}

export const searchMoviebyIdService = async (id: number) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  data.poster_path = `https://image.tmdb.org/t/p/original${data.poster_path}`;
  return data;
}

export const searchShowService = async (query: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=true&language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  data.results.forEach((show: any) => {
    show.poster_path = `https://image.tmdb.org/t/p/original${show.poster_path}`;
  });
  return data;
}

export const searchShowTmdbIdService = async (id: number) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  data.poster_path = `https://image.tmdb.org/t/p/original${data.poster_path}`;
  return data;
}

export const searchShowSeasonsService = async (tmdbId: number, season: number) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${tmdbId}/season/${season}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return await response.json();
}

export const getAgregatedShowCreditsService = async (tmdbId: number) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${tmdbId}/aggregate_credits`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return await response.json()
}

export const getMovieCredits = async (tmdbId: number) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${tmdbId}/credits`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return await response.json()
}

export const getOnePeopleService = async (id: number) => {
  return await fetch(
    `https://api.themoviedb.org/3/person/${id}?append_to_response=combined_credits`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
}

export const getMovieProviders = async (tmdbId: number) => {
  return await fetch(
    `https://api.themoviedb.org/3/movie/${tmdbId}/watch/providers`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
}

export const getShowProviders = async (tmdbId: number) => {
  return await fetch(
    `https://api.themoviedb.org/3/tv/${tmdbId}/watch/providers`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
}

