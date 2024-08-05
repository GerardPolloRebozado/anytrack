import { MediaType } from "@anytrack/type";
import buildUrl from "../buildUrl";
import Cookies from "js-cookie";

export const getSeasons = async ({ tmdbId, season }: { tmdbId: number, season?: number }) => {
  const url = buildUrl('/api/v1/tmdb/show/seasons', { tmdbId, season })
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Cookies.get('token')}`,
    },
  });
  return {
    status: response.status,
    body: await response.json()
  }
}

export const getCredits = async (data: { tmdbId: number, mediaType: string, season?: number }) => {
  const url = buildUrl('/api/v1/tmdb/credits', data)
  return await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Cookies.get('token')}`,
    },
  });
}

export const getOnePeople = async (peopleId: number) => {
  return await fetch(`/api/v1/tmdb/people/${peopleId}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Cookies.get('token')}`,
    },
  })
}

export const getWatchProviders = async (data: { tmdbId: number, mediaType: MediaType }) => {
  return await fetch(`/api/v1/tmdb/providers/${data.tmdbId}?mediaType=${data.mediaType}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Cookies.get('token')}`,
    },
  })
}

export const getMediaVideos = async (tmdbId: number, mediaType: MediaType) => {
  return await fetch(`/api/v1/tmdb/videos/${tmdbId}?mediaType=${mediaType}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Cookies.get('token')}`,
    },
  }
  )
}
