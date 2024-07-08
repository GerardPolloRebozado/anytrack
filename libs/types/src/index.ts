import React from 'react';

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
