import { Router } from "express";
import { deleteOneUserMediaItemShow, getUserMediaItem, getWatchedEpisodesFromUser } from "../controllers/userMediaItemController";
import { userMiddleware } from "../middlewares/userMiddleware";
import joiMiddleware from "../middlewares/joiMiddleware";
import { deleteOneUserMediaItemShowSchema, getUserMediaItemSchema, getWatchedEpisodesFromUserSchema } from "@anytrack/joi";

const userMediaRouter = Router();

userMediaRouter.get('/:tmdbId/:season?', userMiddleware, joiMiddleware(getWatchedEpisodesFromUserSchema, 'params'), getWatchedEpisodesFromUser);
userMediaRouter.get('/', userMiddleware, joiMiddleware(getUserMediaItemSchema, 'query'), getUserMediaItem);
userMediaRouter.delete('/', userMiddleware, joiMiddleware(deleteOneUserMediaItemShowSchema, 'query'), deleteOneUserMediaItemShow);

export default userMediaRouter;
