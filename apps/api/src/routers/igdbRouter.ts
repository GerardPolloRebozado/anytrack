import { Router } from "express";
import { userMiddleware } from "../middlewares/userMiddleware";
import { getVGameById, getVGameGenreById, getVGameManyGenre } from "../controllers/igdbController";


const igdbRouter = Router();

igdbRouter.get('/genre', userMiddleware, getVGameManyGenre)
igdbRouter.get('/game/:id', userMiddleware, getVGameById);
igdbRouter.get('/genre/:id', userMiddleware, getVGameGenreById);

export default igdbRouter;
