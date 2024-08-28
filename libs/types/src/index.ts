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

export enum gameAgeRating {
  THREE = 1,
  SEVEN = 2,
  TWELVE = 3,
  SIXTEEN = 4,
  EIGHTEEN = 5,
  RP = 6,
  EC = 7,
  E = 8,
  E10 = 9,
  T = 10,
  M = 11,
  AO = 12,
  CERO_A = 13,
  CERO_B = 14,
  CERO_C = 15,
  CERO_D = 16,
  CERO_Z = 17,
  USK_0 = 18,
  USK_6 = 19,
  USK_12 = 20,
  USK_16 = 21,
  USK_18 = 22,
  GRAC_ALL = 23,
  GRAC_TWELVE = 24,
  GRAC_FIFTEEN = 25,
  GRAC_EIGHTEEN = 26,
  GRAC_TESTING = 27,
  CLASS_IND_L = 28,
  CLASS_IND_TEN = 29,
  CLASS_IND_TWELVE = 30,
  CLASS_IND_FOURTEEN = 31,
  CLASS_IND_SIXTEEN = 32,
  CLASS_IND_EIGHTEEN = 33,
  ACB_G = 34,
  ACB_PG = 35,
  ACB_M = 36,
  ACB_MA15 = 37,
  ACB_R18 = 38,
  ACB_RC = 39
}


export enum gameCategory {
  main_game = 0,
  dlc_addon = 1,
  expansion = 2,
  bundle = 3,
  standalone_expansion = 4,
  mod = 5,
  episode = 6,
  season = 7,
  remake = 8,
  remaster = 9,
  expanded_game = 10,
  port = 11,
  fork = 12,
  pack = 13,
  update = 14,
}

export const gameStatusConverter = (status: number | string) => {
  if (typeof status === 'string') {
    switch (status) {
      case 'released':
        return 0;
      case 'alpha':
        return 2;
      case 'beta':
        return 3;
      case 'early_access':
        return 4;
      case 'offline':
        return 5;
      case 'cancelled':
        return 6;
      case 'rumored':
        return 7;
      case 'delisted':
        return 8;
      default:
        return 0;
    }
  } else {
    switch (status) {
      case 0:
        return 'released';
      case 2:
        return 'alpha';
      case 3:
        return 'beta';
      case 4:
        return 'early_access';
      case 5:
        return 'offline';
      case 6:
        return 'cancelled';
      case 7:
        return 'rumored';
      case 8:
        return 'delisted';
      default:
        return 'released';
    }
  }
}

export type tag = { id: number, name: string }