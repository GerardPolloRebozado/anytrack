import Cookies from 'js-cookie';

export const getShow = async (query: string) => {
    const response = await fetch(`/api/v1/show?term=${query}`, {
        headers: {
            Authorization: `Bearer ${Cookies.get('token')}`
        }
    });
    return {
        status: response.status,
        body: await response.json()
    }
}

export const markShow = async (data: { tmdbId: string, watched: boolean, watchedDate?: string, season?: number, episode?: number }) => {
    const response = await fetch(`/api/v1/show/mark`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${Cookies.get('token')}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return {
        status: response.status,
        body: await response.json()
    }
}