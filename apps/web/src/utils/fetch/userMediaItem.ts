import Cookies from 'js-cookie'
import buildUrl from '../buildUrl';
import { MediaType } from '@prisma/client';

export const getManyUserMediaItem = async ({ mediaType, watched, groupBy }: { mediaType?: MediaType, watched?: boolean, groupBy?: string }) => {
  const url = buildUrl('/api/v1/userMediaItem', { mediaType, watched, groupBy })
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${Cookies.get('token')}`
    }
  })
  return {
    status: response.status,
    body: await response.json()
  }
}

export const deleteUserMediaItem = async ({ tmdbId, season, episode }: { tmdbId: number, season?: number, episode?: number }) => {
  const url = buildUrl('/api/v1/userMediaItem', { tmdbId, season, episode })
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${Cookies.get('token')}`
    },
  })
  return {
    status: response.status,
    body: await response.json()
  }
}

export const getWatchedEpisodes = async (tmdbId: string, season?: number) => {
  const response = await fetch(`/api/v1/userMediaItem/${tmdbId}${season !== undefined ? `/${season}` : ''}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get('token')}`
    }
  })
  return {
    status: response.status,
    body: await response.json()
  }
}

export const getCredits = async (data: { tmdbId: string, mediaType: MediaType, season?: number }) => {
  const url = buildUrl('/api/v1/tmdb/credits', { tmdbId: data.tmdbId, mediaType: data.mediaType, season: data.season })
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${Cookies.get('token')}`
    },
  })
  return {
    status: response.status,
    body: await response.json()
  }
}
