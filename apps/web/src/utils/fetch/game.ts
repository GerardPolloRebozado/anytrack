import { markedGameResponse, markVGameType } from '@anytrack/types';
import Cookies from "js-cookie";
import buildUrl from '../buildUrl';

export const markVGame = async (id: number, data: markVGameType) => {
    return await fetch(`/api/v1/vgame/mark`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Cookies.get('token')}`,
        },
        body: JSON.stringify({ id, ...data })
    })
}

export const getMarkedVGames = async (params: { played?: boolean }): Promise<markedGameResponse[]> => {
    const url = buildUrl(`/api/v1/vgame/mark`, params)
    const res = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Cookies.get('token')}`,
        },
    })
    return await res.json()
}

export const removeMarkedVGame = async (id: number) => {
    const res = await fetch(`/api/v1/vgame/mark/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Cookies.get('token')}`,
        },
    })
    return await res.json()
}
