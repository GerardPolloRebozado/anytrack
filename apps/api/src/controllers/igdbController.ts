import { Request, Response } from "express";
import { getManyVGameGenreService, getVGameGenreByIdService, getVGameByIdService, getVGameByNameService } from "../services/igdbService";
import { parseBoolean } from "@anytrack/utils";

export const getVGameById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const lessData = parseBoolean(String(req.query.lessData));
    const game = await getVGameByIdService(Number(id), lessData);
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

export const getVGameByName = async (req: Request, res: Response) => {
  try {
    const { name } = req.params;
    const manyGames = await getVGameByNameService(name)
    res.status(200).json(await manyGames)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error })
  }
}