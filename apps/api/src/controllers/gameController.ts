import { Request, Response } from "express";
import prisma from "../services/prisma";
import { getVGameByIdService } from "../services/igdbService";
import { Game } from "igdb-api-types";
import { gameCategoryConverter, gameStatusConverter } from "@anytrack/type";

export const markVGame = async (req: Request, res: Response) => {
    try {
        const { gameId, startedTime, finalTime } = req.body
        const userId = res.locals.user.id
        const gameDb = await prisma.game.findUnique({
            where: {
                id: gameId
            }
        })

        if (!gameDb) {
            const igdbGame: Game = await getVGameByIdService(gameId, true)
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
                            totalRating: parentIgdbGame.total_rating,
                            totalRatingCount: parentIgdbGame.total_rating_count,
                            firstReleaseDate: new Date(parentIgdbGame.first_release_date),
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
                    totalRating: igdbGame.total_rating,
                    totalRatingCount: igdbGame.total_rating_count,
                    firstReleaseDate: new Date(igdbGame.first_release_date),
                    parentGame: typeof igdbGame.parent_game === 'number' ? { connect: { id: igdbGame.parent_game } } : undefined
                }
            })
        }
        const markedGame = await prisma.userGame.create({
            data: {
                userId,
                gameId,
                startedTime,
                finalTime,
            }
        })
        res.status(200).json(markedGame)
    } catch (error) {
        res.status(500).json({ message: "An unexpected error occurred while marking the game.", error: error.message || error });
    }

}