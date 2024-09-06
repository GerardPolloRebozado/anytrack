import Cookies from "js-cookie";

export const getVGameById = async (id: number) => {
  return await fetch(`/api/v1/igdb/game/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Cookies.get('token')}`,
    },
  })
}

export const getVGameByName = async (name: string) => {
  return await fetch(`/api/v1/igdb/game/search/${name}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Cookies.get('token')}`,
    },
  })
}