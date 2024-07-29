import { Router } from "express";
import { getCredits, getDiscover, getOnePeople, getShowSeasons, getWatchProviders } from "../controllers/tmdbController";
import joiMiddleware from "../middlewares/joiMiddleware";
import { userMiddleware } from "../middlewares/userMiddleware";
import { getCreditsSchema, getShowSeasonsSchema, getWatchProvidersParamsSchema, getWatchProvidersQuerySchema } from "@anytrack/joi";

const tmdbRouter = Router();

tmdbRouter.get("/show/seasons", userMiddleware, joiMiddleware(getShowSeasonsSchema, 'query'), getShowSeasons);
tmdbRouter.get('/credits', userMiddleware, joiMiddleware(getCreditsSchema, 'query'), getCredits);
tmdbRouter.get('/people/:peopleId', userMiddleware, getOnePeople);
tmdbRouter.get("/providers/:tmdbId", userMiddleware, joiMiddleware(getWatchProvidersParamsSchema, 'params'), joiMiddleware(getWatchProvidersQuerySchema, 'query'), getWatchProviders);
tmdbRouter.get("/discover", userMiddleware, getDiscover);

export default tmdbRouter;
