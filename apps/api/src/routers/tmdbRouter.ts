import { Router } from "express";
import { getCredits, getShowSeasons } from "../controllers/tmdbController";
import joiMiddleware from "../middlewares/joiMiddleware";
import { userMiddleware } from "../middlewares/userMiddleware";
import { getCreditsSchema, getShowSeasonsSchema } from "@anytrack/joi";

const tmdbRouter = Router();

tmdbRouter.get("/show/seasons", userMiddleware, joiMiddleware(getShowSeasonsSchema, 'query'), getShowSeasons);
tmdbRouter.get('/credits', userMiddleware, joiMiddleware(getCreditsSchema, 'query'), getCredits)

export default tmdbRouter;
