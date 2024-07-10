import Cookies from "js-cookie"
import buildUrl from "../buildUrl"

export const getMediaRuntimeChart = async (groupBy: string) => {
  const url = buildUrl("/api/v1/chart/mediaRuntime", { groupBy })
  return await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Cookies.get('token')}`,
    },
  })
}
