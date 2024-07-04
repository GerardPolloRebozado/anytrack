import { Router } from "express";
import { deleteOneShowReview, deleteOneUserShow, getManyFutureEpisode, getManyMarkedShows, getManyShowReviews, getOneMarkedShow, markShow, postShowReview, searchShow } from "../controllers/showController";
import joiMiddleware from "../middlewares/joiMiddleware";
import { userMiddleware } from "../middlewares/userMiddleware";
import { getOneMarkedShowQuerySchema, getShowSchema, markShowSchema, mediaIdSchema, seaonsAndEpisodeSchema, updateReviewSchema } from "@anytrack/joi";

const showRouter = Router();

showRouter.post("/mark", userMiddleware, joiMiddleware(markShowSchema, 'body'), markShow);
showRouter.get("/mark", userMiddleware, getManyMarkedShows);
showRouter.get('/future', userMiddleware, getManyFutureEpisode);
showRouter.post('/review', userMiddleware, joiMiddleware(updateReviewSchema, 'body'), postShowReview);
showRouter.get('/:mediaId/review', userMiddleware, joiMiddleware(mediaIdSchema, 'params'), getManyShowReviews);
showRouter.delete('/:mediaId/review', userMiddleware, joiMiddleware(mediaIdSchema, 'params'), deleteOneShowReview);
showRouter.get('/:mediaId/mark', userMiddleware, joiMiddleware(mediaIdSchema, 'params'), joiMiddleware(getOneMarkedShowQuerySchema, 'query'), getOneMarkedShow);
showRouter.delete('/:mediaId/mark', userMiddleware, joiMiddleware(mediaIdSchema, 'params'), joiMiddleware(seaonsAndEpisodeSchema, 'query'), deleteOneUserShow);
showRouter.get("/", userMiddleware, joiMiddleware(getShowSchema, "query"), searchShow);

export default showRouter;

