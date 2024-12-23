import { Router } from "express";
import { userMiddleware } from "../middlewares/userMiddleware";
import {
  getVGameById,
  getVGameByName,
  getVGameGenreById,
  getVGameManyGenre
} from '../controllers/igdb/igdbGameController';
import joiMiddleware from "../middlewares/joiMiddleware";
import { getVGameByNameSchema, idSchema } from "@anytrack/joi";
import { getVGameCompanyInfo } from '../controllers/igdb/igdbCompanyController';

const igdbRouter = Router();
igdbRouter.get('/genre', userMiddleware, getVGameManyGenre);
igdbRouter.get('/game/search/:name', userMiddleware, joiMiddleware(getVGameByNameSchema, 'params'), getVGameByName);
igdbRouter.get('/game/:id', userMiddleware, joiMiddleware(idSchema, 'params'), getVGameById);
igdbRouter.get('/genre/:id', userMiddleware, joiMiddleware(idSchema, 'params'), getVGameGenreById);
igdbRouter.get('/company/:slug', userMiddleware, getVGameCompanyInfo)
export default igdbRouter;
