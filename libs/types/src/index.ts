import React from 'react';
import { userMovie, movie, episode, userShow } from "@prisma/client"

export type signupForm = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string | undefined;
};

export type loginForm = {
  email: string;
  password: string;
};

export type markShowType = {
  watchedDate: string,
  watched: boolean,
  season: number,
  episode?: number,
}

export type markMovieType = {
  watchedDate: string,
  watched: boolean,
}

export type ButtonProps = {
  id?: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  refs?: React.RefObject<HTMLButtonElement>;
};

export type InfoProps = {
  type: 'error' | 'warning' | 'info' | 'success';
  children: React.ReactNode;
  onClick?: () => void;
};

export type Notification = {
  type: 'error' | 'warning' | 'info' | 'success';
  message: string;
};

export enum state {
  watched = 'watched',
  watchlist = 'watchlist',
  none = 'none'
}

export enum MediaType {
  show = 'show',
  movie = 'movie'
}

export type MediaReviewForm = {
  review?: string;
  rating: number;
  mediaId: number;
}

export type getMarkedMoviesType = {
  watched?: boolean;
  groupBy?: string;
}

export type groupedFutureMedia = {
  mediaType: MediaType;
  tmdbId: number;
  title: string;
  poster: string;
  releaseDate: Date;
}

export type updateUserForm = {
  email?: string;
  name?: string;
  password?: string;
}

export type changePassword = {
  password: string;
}

export type MediaRuntimeChartData = {
  chartData: {
    date: string,
    show: number,
    movie: number,
  }[];
  mediaStats: {
    episodeCount: number;
    movieCount: number;
    showRuntime: number;
    movieRuntime: number;
  };
}

export type userMovieWithMovie = userMovie & { movie: movie }

export type userShowWithEpisode = userShow & { episode: episode }

export type discoverMovies = discoverOptions & {
  certification?: string;
  'certification.gte'?: string;
  'certification.lte'?: string;
  certification_country?: string;
  include_video?: boolean;
  primary_release_year?: number;
  'primary_release_date.gte'?: string;
  'primary_release_date.lte'?: string;
  region?: string;
  'release_date.get'?: string;
  'release_date.lte'?: string;
  watch_region?: string;
  with_cast?: string;
  with_companies?: string;
  with_crew?: string;
  with_genres?: string;
  with_people?: string;
  with_release_type?: number;
  year?: number;
}

export type discoverShows = discoverOptions & {
  'air_date.gte'?: string;
  'air_date.lte'?: string;
  first_air_date_year?: number;
  'first_air_date.gte'?: string;
  'first_air_date.lte'?: string;
  include_null_first_air_dates?: boolean;
  screened_theatrically?: boolean;
  with_keywords?: string;
  with_networks?: string;
  with_status?: string;
  without_watch_providers?: string;
  with_type?: string;
}


type discoverOptions = {
  include_adult?: boolean;
  page?: number;
  sort_by?: string;
  'vote_average.gte'?: number;
  'vote_average.lte'?: number;
  'vote_count.gte'?: number;
  'vote_count.lte'?: number;
  watch_region?: string;
  with_genres?: string;
  with_keywords?: string;
  with_origin_country?: string;
  wiht_original_language?: string;
  with_companies?: string;
  'with_runtime.gte'?: number;
  'with_runtime.lte'?: number;
  with_watch_monetization_types?: string;
  with_watch_providers?: string;
  without_companies?: string;
  without_genres?: string;
  without_keywords?: string;
  without_watch_providers?: string;
}
