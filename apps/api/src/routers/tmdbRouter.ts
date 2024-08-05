import { Router } from "express";
import { getCredits, getMediaVideo, getOnePeople, getShowSeasons, getWatchProviders } from "../controllers/tmdbController";
import joiMiddleware from "../middlewares/joiMiddleware";
import { userMiddleware } from "../middlewares/userMiddleware";
import { getCreditsSchema, getShowSeasonsSchema, getByTmdbId, getWatchProvidersQuerySchema, getByMediaType } from "@anytrack/joi";

const tmdbRouter = Router();

tmdbRouter.get("/show/seasons", userMiddleware, joiMiddleware(getShowSeasonsSchema, 'query'), getShowSeasons);
tmdbRouter.get('/credits', userMiddleware, joiMiddleware(getCreditsSchema, 'query'), getCredits)
tmdbRouter.get('/people/:peopleId', userMiddleware, getOnePeople)
tmdbRouter.get("/providers/:tmdbId", userMiddleware, joiMiddleware(getByTmdbId, 'params'), joiMiddleware(getWatchProvidersQuerySchema, 'query'), getWatchProviders)
tmdbRouter.get("/videos/:tmdbId", userMiddleware, joiMiddleware(getByTmdbId, 'params'), joiMiddleware(getByMediaType, 'query'), getMediaVideo)

export default tmdbRouter;
