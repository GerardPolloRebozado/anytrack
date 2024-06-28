// import { Router } from "express";
// import { deleteOneUserMediaItemShow, getManyUserMediaItem, getOneUserMediaItem } from "../controllers/userMediaItemController.ts";
// import { userMiddleware } from "../middlewares/userMiddleware";
// import joiMiddleware from "../middlewares/joiMiddleware";
// import { deleteOneUserMediaItemShowSchema, getUserMediaItemSchema, getOneUserMediaItemSchema } from "@anytrack/joi";

// const userMediaRouter = Router();

// userMediaRouter.get('/:tmdbId/:season?', userMiddleware, joiMiddleware(getOneUserMediaItemSchema, 'params'), getOneUserMediaItem);
// userMediaRouter.get('/', userMiddleware, joiMiddleware(getUserMediaItemSchema, 'query'), getManyUserMediaItem);
// userMediaRouter.delete('/', userMiddleware, joiMiddleware(deleteOneUserMediaItemShowSchema, 'query'), deleteOneUserMediaItemShow);

// export default userMediaRouter;
