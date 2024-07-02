import { Router } from "express";
import { deleteOneShowReview, getManyMarkedShows, getManyShowReviews, markShow, postShowReview, searchShow } from "../controllers/showController";
import joiMiddleware from "../middlewares/joiMiddleware";
import { userMiddleware } from "../middlewares/userMiddleware";
import { getReviewsSchema, getShowSchema, markShowSchema, updateReviewSchema } from "@anytrack/joi";

const showRouter = Router();

showRouter.post("/mark", userMiddleware, joiMiddleware(markShowSchema, 'body'), markShow);
showRouter.get("/mark", userMiddleware,  getManyMarkedShows)
showRouter.get("/", userMiddleware, joiMiddleware(getShowSchema, "query"), searchShow);
showRouter.post('/review', userMiddleware, joiMiddleware(updateReviewSchema, 'body'), postShowReview)
showRouter.get('/:mediaId/review', userMiddleware, joiMiddleware(getReviewsSchema, 'params'), getManyShowReviews)
showRouter.delete('/:mediaId/review', userMiddleware, joiMiddleware(getReviewsSchema, 'params'), deleteOneShowReview)

export default showRouter;

