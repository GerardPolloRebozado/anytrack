import Cookies from 'js-cookie';

async function searchMoviebyId(id: string) {
    const response = await fetch(`/api/v1/movie/${id}`, {
        headers: {
            Authorization: `Bearer ${Cookies.get('token')}`
        }
    });
    return {
        status: response.status,
        body: await response.json()
    }
}

async function searchMovies(query: string) {
    const response = await fetch(`/api/v1/movie/search?query=${query}`, {
        headers: {
            Authorization: `Bearer ${Cookies.get('token')}`
        }
    });
    return {
        status: response.status,
        body: await response.json()
    }
}

async function markMovie(data: { tmdbId: string, watched: boolean, watchedDate?: string }) {
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

async function removeMarkedMovie(id: string) {
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

export { searchMoviebyId, searchMovies, markMovie, removeMarkedMovie }