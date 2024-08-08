import { IdAppendToResponseRequest, IdRequestParams, MovieDb, SearchMovieRequest, SearchTvRequest, TvSeasonRequest } from 'moviedb-promise';
const moviedb = new MovieDb(process.env.TMDB_API_KEY);

export const searchMovieService = async (query: SearchMovieRequest) => {
  return await moviedb.searchMovie(query);
}

export const searchMoviebyIdService = async (query: IdRequestParams) => {
  return await moviedb.movieInfo(query);
}

export const searchShowService = async (query: SearchTvRequest) => {
  return await moviedb.searchTv(query);
}

export const searchShowTmdbIdService = async (query: IdAppendToResponseRequest) => {
  return await moviedb.tvInfo(query);
}

export const searchShowSeasonsService = async (query: TvSeasonRequest) => {
  return await moviedb.seasonInfo(query);
}

export const getAgregatedShowCreditsService = async (query: IdRequestParams) => {
  return await moviedb.tvAggregateCredits(query);
}

export const getMovieCredits = async (query: IdAppendToResponseRequest) => {
  return await moviedb.movieCredits(query);
}

export const getOnePeopleService = async (query: IdAppendToResponseRequest) => {
  return await moviedb.personInfo(query)
}

export const getMovieProvidersService = async (query: IdRequestParams) => {
  return await moviedb.movieWatchProviders(query);
}

export const getShowProvidersService = async (query: IdRequestParams) => {
  return await moviedb.tvWatchProviders(query);
}

export const getMovieVideosService = async (query: IdRequestParams) => {
  return await moviedb.movieVideos(query);
}

export const getShowVideosService = async (query: IdRequestParams) => {
  return await moviedb.tvVideos(query);
}
