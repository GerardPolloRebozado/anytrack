import { Router } from "express";
import { forceUpdateMovies, forceUpdateShows } from "../controllers/cronController";
import { userMiddleware } from "../middlewares/userMiddleware";

const cronRouter = Router();

cronRouter.get('/update/show', userMiddleware, forceUpdateShows);
cronRouter.get('/update/movie', userMiddleware, forceUpdateMovies);

export default cronRouter
