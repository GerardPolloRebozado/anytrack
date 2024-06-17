import { Router } from "express";
import { deleteOneUserMediaItemShow, getUserMediaItem, getWatchedEpisodesFromUser } from "../controllers/userMediaItemController";
import { userMiddleware } from "../middlewares/userMiddleware";

const userMediaRouter = Router();

userMediaRouter.get('/:tmdbId/:season?', userMiddleware, getWatchedEpisodesFromUser);
userMediaRouter.get('/', userMiddleware, getUserMediaItem);
userMediaRouter.delete('/', userMiddleware, deleteOneUserMediaItemShow);

export default userMediaRouter;
