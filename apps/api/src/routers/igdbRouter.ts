import { Router } from "express";
import { userMiddleware } from "../middlewares/userMiddleware";
import { getGameById, getGenreById, getManyGenre } from "../controllers/igdbController";


const igdbRouter = Router();

igdbRouter.get('/genre', userMiddleware, getManyGenre)
igdbRouter.get('/game/:id', userMiddleware, getGameById);
igdbRouter.get('/genre/:id', userMiddleware, getGenreById);

export default igdbRouter;
