import { Request, Response } from "express";
import { getVGameByIdService, getManyVGameGenreService, getVGameGenreByIdService } from "../services/igdbService";

export const getVGameById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const game = await getVGameByIdService(Number(id));
    res.json(await game);
  } catch (error) {
    console.log(error);
  }
}

export const getVGameGenreById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const genre = await getVGameGenreByIdService(Number(id));
    res.json(await genre);
  } catch (error) {
    console.log(error);
  }
}

export const getVGameManyGenre = async (req: Request, res: Response) => {
  try {
    const manyGenre = await getManyVGameGenreService();
    res.json(await manyGenre);
  } catch (error) {
    console.log(error);
  }
}
