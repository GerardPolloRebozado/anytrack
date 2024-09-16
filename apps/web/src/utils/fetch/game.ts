import { markedGameResponse, markVGameType } from '@anytrack/types';
import Cookies from "js-cookie";

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

export const getMarkedVGames = async (): Promise<markedGameResponse[]> => {
    const res = await fetch(`/api/v1/vgame/mark`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Cookies.get('token')}`,
        },
    })
    return await res.json()
}