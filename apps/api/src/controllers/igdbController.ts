import { Request, Response } from "express";
import { getManyVGameGenreService, getVGameGenreByIdService, getGameById } from "../services/igdbService";

export const getVGameById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const game = await getGameById(Number(id));
    res.json(game);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
}

export const getVGameGenreById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const genre = await getVGameGenreByIdService(Number(id));
    res.json(genre);
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