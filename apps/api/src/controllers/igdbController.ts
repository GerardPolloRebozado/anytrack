import { Request, Response } from "express";
import { getVGameByIdService, getManyVGameGenreService, getVGameGenreByIdService, getVGameCoverService } from "../services/igdbService";
import { Game } from "igdb-api-types";
import { gameGenre } from "@prisma/client";

export const getVGameById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const game = await getVGameByIdService(Number(id));
    const gameWithCover: Game & { coverUrl?: string, genreDb?: gameGenre[] } = game;
    if (gameWithCover.cover && typeof gameWithCover.cover === 'number') {
      gameWithCover.coverUrl = await getVGameCoverService(gameWithCover.cover);
    }
    if (gameWithCover.genres && gameWithCover.genres.length > 0) {
      gameWithCover.genreDb = await Promise.all(gameWithCover.genres.map(async (genre) => {
        if (typeof genre !== 'number') return genre;
        return await getVGameGenreByIdService(genre);
      }));
    }
    res.json(gameWithCover);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
}

export const getVGameGenreById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const genre = await getVGameGenreByIdService(Number(id));
    res.json(await genre);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
}

export const getVGameManyGenre = async (req: Request, res: Response) => {
  try {
    const manyGenre = await getManyVGameGenreService();
    res.json(await manyGenre);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
}
