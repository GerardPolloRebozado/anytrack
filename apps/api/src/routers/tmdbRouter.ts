import { Router } from "express";
import { getShowSeasons } from "../controllers/tmdbController";
import joiMiddleware from "../middlewares/joiMiddleware";
import { userMiddleware } from "../middlewares/userMiddleware";
import { getShowSeasonsSchema } from "@anytrack/joi";

const tmdbRouter = Router();

tmdbRouter.get("/show/seasons", userMiddleware, joiMiddleware(getShowSeasonsSchema, 'query'), getShowSeasons);

export default tmdbRouter;
