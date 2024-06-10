import buildUrl from "../buildUrl";
import Cookies from "js-cookie";

const getSeasons = async ({ tmdbId, season }: { tmdbId: string, season?: number }) => {
    const url = buildUrl('/api/v1/tmdb/show/seasons', { tmdbId, season })
    const response = await fetch(url, {
        headers: {
            Authorization: `Bearer ${Cookies.get('token')}`
        }
    });
    return {
        status: response.status,
        body: await response.json()
    }
}

export { getSeasons }