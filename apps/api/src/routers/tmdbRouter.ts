import { Router } from "express";
import { getCredits, getOnePeople, getShowSeasons } from "../controllers/tmdbController";
import joiMiddleware from "../middlewares/joiMiddleware";
import { userMiddleware } from "../middlewares/userMiddleware";
import { getCreditsSchema, getShowSeasonsSchema } from "@anytrack/joi";

const tmdbRouter = Router();

tmdbRouter.get("/show/seasons", userMiddleware, joiMiddleware(getShowSeasonsSchema, 'query'), getShowSeasons);
tmdbRouter.get('/credits', userMiddleware, joiMiddleware(getCreditsSchema, 'query'), getCredits)
tmdbRouter.get('/people/:peopleId', userMiddleware, getOnePeople)

export default tmdbRouter;
