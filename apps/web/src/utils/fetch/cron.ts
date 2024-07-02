import Cookies from "js-cookie"

export const triggerUpdateMovies = async () => {
  const response = await fetch('/api/v1/cron/update/movie', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Cookies.get('token')}`
    }
  }
  )
  return {
    status: response.status,
    body: response.json()
  }
}

export const triggerUpdateShows = async () => {
  const response = await fetch('/api/v1/cron/update/show', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Cookies.get('token')}`
    }
  })
  return {
    status: response.status,
    body: response.json()
  }
}
