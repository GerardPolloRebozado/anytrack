import Cookies from 'js-cookie';
import buildUrl from '../buildUrl';

export const getShow = async (query: string) => {
  return await fetch(`/api/v1/show?term=${query}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Cookies.get('token')}`,
    },
  });
}

export const markShow = async (data: { tmdbId: number, watched: boolean, watchedDate?: string, season?: number, episode?: number }) => {
  return await fetch(`/api/v1/show/mark`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Cookies.get('token')}`,
    },
    body: JSON.stringify(data)
  });
}

export const getManyMarkedShows = async (data: { watched?: boolean, groupBy?: string }) => {
  const url = buildUrl('/api/v1/show/mark', data)
  return await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Cookies.get('token')}`,
    },
  })
}

export const getOneMarkedShow = async (data: { mediaId: number, watched?: boolean, seasonNumber?: number }) => {
  const url = buildUrl(`/api/v1/show/${data.mediaId}/mark`, { watched: data?.watched, seasonNumber: data?.seasonNumber })
  return await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Cookies.get('token')}`,
    },
  })
}

export const postShowReview = async (data: { mediaId: number, rating: number, review?: string }) => {
  return await fetch(`/api/v1/show/review`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${Cookies.get('token')}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
}

export const getManyShowReviews = async (mediaId: number) => {
  return await fetch(`/api/v1/show/${mediaId}/review`, {
    headers: {
      Authorization: `Bearer ${Cookies.get('token')}`,
      'Content-Type': 'application/json'
    },
  });
}

export const deleteOneShowReview = async (mediaId: number) => {
  return await fetch(`/api/v1/show/${mediaId}/review`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${Cookies.get('token')}`,
      'Content-Type': 'application/json'
    },
  });
}

export const deleteOneUserShow = async (mediaId: number, data: { season?: number, episode?: number }) => {
  const url = buildUrl(`/api/v1/show/${mediaId}/mark`, data)
  return await fetch(url, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${Cookies.get('token')}`,
      'Content-Type': 'application/json'
    },
  })
}

export const getManyFutureEpisode = async () => {
  return await fetch(`api/v1/show/future`, {
    headers: {
      Authorization: `Bearer ${Cookies.get('token')}`,
      'Content-Type': 'application/json'
    },
  })
}
