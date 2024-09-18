import Cookies from 'js-cookie';
import buildUrl from '../buildUrl';
import { MediaReviewForm, getMarkedMoviesType } from '@anytrack/types';

export async function searchMoviebyId(id: number) {
  return await fetch(`/api/v1/movie/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Cookies.get('token')}`,
    },
  });
}

export async function searchMovies(query: string) {
  return await fetch(`/api/v1/movie/search?query=${query}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Cookies.get('token')}`,
    },
  });
}

export async function markMovie(data: { tmdbId: number, watched?: boolean, watchedDate?: string, rating?: number, review?: string }) {
  const response = await fetch('/api/v1/movie/mark', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Cookies.get('token')}`,
    },
    body: JSON.stringify(data)
  })
  return {
    status: response.status,
    body: await response.json()
  }
}

export async function removeMarkedMovie(id: number) {
  const response = await fetch(`/api/v1/movie/mark/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Cookies.get('token')}`,
    }
  });
  return {
    status: response.status,
    body: await response.json()
  }
}

export async function getMarkedMovies(data: getMarkedMoviesType) {
  const url = buildUrl('/api/v1/movie/mark', data)
  return await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Cookies.get('token')}`,
    },
  })
}

export async function updateMovieReview(data: MediaReviewForm) {
  return await fetch('/api/v1/movie/review', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Cookies.get('token')}`,
    },
    body: JSON.stringify(data)
  })
}

export async function getReview(mediaId: number) {
  return await fetch(`/api/v1/movie/${mediaId}/review`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Cookies.get('token')}`,
    },
  })
}

export async function removeReview(mediaId: number) {
  return await fetch(`/api/v1/movie/${mediaId}/review`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Cookies.get('token')}`,
    },
  })
}

export async function getManyFutureMovies() {
  return await fetch(`/api/v1/movie/future`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Cookies.get('token')}`,
    },
  })
}
