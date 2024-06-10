import Cookies from 'js-cookie'
import buildUrl from '../buildUrl';
import { MediaType } from '@prisma/client';

export const getManyUserMediaItem = async ({ mediaType, watched, includeMediaItem, groupBy }: { mediaType?: MediaType, watched?: boolean, includeMediaItem?: boolean, groupBy?: string }) => {
    const url = buildUrl('/api/v1/userMediaItem', { mediaType, watched, includeMediaItem, groupBy })
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
