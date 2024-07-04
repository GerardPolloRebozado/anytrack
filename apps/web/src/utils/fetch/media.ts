import Cookies from "js-cookie"


export const getManyFutureMedia = async () => {
  return await fetch(`/api/v1/media/future`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Cookies.get('token')}`,
    },
  })
}
