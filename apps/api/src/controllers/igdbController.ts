import { Request, Response } from "express";
import { getGameByIdService, getManyGenreService } from "../services/igdbService";

export const getGameById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const game = await getGameByIdService(Number(id));
    res.json(await game);
  } catch (error) {
    console.log(error);
  }
}

export const getGenreById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const genre = await getGameByIdService(Number(id));
    res.json(await genre);
  } catch (error) {
    console.log(error);
  }
}

export const getManyGenre = async (req: Request, res: Response) => {
  try {
    const manyGenre = await getManyGenreService();
    res.json(await manyGenre);
  } catch (error) {
    console.log(error);
  }
}
