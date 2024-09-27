import { markedGameResponse } from "@anytrack/types";
import { userGame } from "@prisma/client";
import prisma from "../services/prisma";

export async function groupUserGameByGame(games: userGame[]): Promise<Map<number, markedGameResponse>> {
    const markedGames = new Map<number, markedGameResponse>();
    for (const markedGame of games) {
        if (!markedGames.has(markedGame.gameId)) {
            const game = await prisma.game.findUnique({
                where: {
                    id: markedGame.gameId
                }
            })
            game.firstReleaseDate = new Date(game.firstReleaseDate)
            markedGames.set(markedGame.gameId, { game, playHistory: [], playTime: 0 });
        }
        if (markedGame.finishedTime && markedGame.startedTime) {
            markedGames.get(markedGame.gameId).playHistory.push(markedGame)
            markedGames.get(markedGame.gameId).playTime += (markedGame.finishedTime.getTime() - markedGame.startedTime.getTime())
        }
    }
    return markedGames
}