import React from 'react';
import { userMovie, movie, episode, userShow } from "@prisma/client"
import { WatchProviderCountry, WatchProviderResponse } from "moviedb-promise"

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

export interface WatchProviderResponseList extends WatchProviderResponse {
  results: {
    [key: string]: WatchProviderCountry;
  };
}
