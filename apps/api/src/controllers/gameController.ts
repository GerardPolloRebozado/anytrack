import { Request, Response } from "express";
import prisma from "../services/prisma";
import { getVGameByIdService } from "../services/igdbService";
import { Game } from "igdb-api-types";
import { gameCategoryConverter, gameStatusConverter, markedGameResponse } from '@anytrack/types';

export const markVGame = async (req: Request, res: Response) => {
    try {
        const { startedTime, finishedTime } = req.body
        const id = Number(req.body.id)
        const userId = res.locals.user.id
        const gameDb = await prisma.game.findUnique({
            where: {
                id,
            }
        })

        if (!gameDb) {
            const igdbGame: Game = await getVGameByIdService(id, true)
            if (!igdbGame) {
                return res.status(404).json({ message: "Game not found" })
            }
            if (igdbGame.parent_game && igdbGame.parent_game && typeof igdbGame.parent_game === "number") {
                const parentGame = await prisma.game.findUnique({
                    where: {
                        id: igdbGame.parent_game
                    }
                })
                if (!parentGame) {
                    const parentIgdbGame: Game = await getVGameByIdService(igdbGame.parent_game, true)
                    if (!parentIgdbGame) {
                        return res.status(404).json({ message: "Parent game not found" })
                    }
                    await prisma.game.create({
                        data: {
                            id: parentIgdbGame.id,
                            name: parentIgdbGame.name,
                            status: gameStatusConverter(parentIgdbGame.status).toString(),
                            genres: {
                                connectOrCreate: parentIgdbGame.genres.map((genre: any) => ({
                                    where: { id: genre.id },
                                    create: { id: genre.id, name: genre.name }
                                }))
                            },
                            category: gameCategoryConverter(parentIgdbGame.category).toString(),
                            coverId: typeof parentIgdbGame.cover === 'object' && parentIgdbGame.cover.image_id ? parentIgdbGame.cover.image_id : undefined,
                            totalRating: parentIgdbGame.total_rating,
                            totalRatingCount: parentIgdbGame.total_rating_count,
                            firstReleaseDate: new Date(parentIgdbGame.first_release_date * 1000),
                        }
                    })
                }
            }
            await prisma.game.create({
                data: {
                    id: igdbGame.id,
                    name: igdbGame.name,
                    status: gameStatusConverter(igdbGame.status).toString(),
                    genres: {
                        connectOrCreate: igdbGame.genres.map((genre: any) => ({
                            where: { id: genre.id },
                            create: { id: genre.id, name: genre.name }
                        }))
                    },
                    category: gameCategoryConverter(igdbGame.category).toString(),
                    coverId: typeof igdbGame.cover === 'object' && igdbGame.cover.image_id ? igdbGame.cover.image_id : undefined,
                    totalRating: igdbGame.total_rating,
                    totalRatingCount: igdbGame.total_rating_count,
                    firstReleaseDate: new Date(igdbGame.first_release_date * 1000),
                    parentGame: typeof igdbGame.parent_game === 'number' ? { connect: { id: igdbGame.parent_game } } : undefined
                }
            })
        }
        if (!startedTime && !finishedTime) {
            const checkMarkedGame = await prisma.userGame.findFirst({
                where: {
                    userId,
                    gameId: id,
                    startedTime: null,
                    finishedTime: null
                }
            })
            if (checkMarkedGame) {
                res.status(409).json({ message: "Game already marked as pending" })
                return
            }
        } else {
            await prisma.userGame.deleteMany({
                where: {
                    userId,
                    gameId: id,
                    startedTime: null,
                    finishedTime: null
                }
            })
        }
        const markedGame = await prisma.userGame.create({
            data: {
                userId,
                gameId: id,
                startedTime,
                finishedTime,
            }
        })
        res.status(200).json(markedGame)
    } catch (error) {
        res.status(500).json({ message: "An unexpected error occurred while marking the game.", error: error.message || error });
    }

}

export const getMarkedVGames = async (req: Request, res: Response) => {
    try {
        const userId = res.locals.user.id
        const markedGames = new Map<number, markedGameResponse>();
        const markedGamesDb = await prisma.userGame.findMany({
            where: {
                userId,
            },
        })
        if (!markedGamesDb) {
            res.status(404).json({ message: "No marked games found" })
            return
        }
        for (const markedGame of markedGamesDb) {
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
        res.status(200).json(Array.from(markedGames.values()))
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "An unexpected error occurred while marking the game.", error: error.message || error });
    }
}