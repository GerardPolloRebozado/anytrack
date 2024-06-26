import { Router, query } from "express";
import { userMiddleware } from "../middlewares/userMiddleware";
import { deleteReview, getReviews, upsertReview } from "../controllers/reviewsController";
import joiMiddleware from "../middlewares/joiMiddleware";
import { getReviewsSchema, upsertReviewSchema } from "@anytrack/joi";


const reviewRouter = Router();

reviewRouter.get("/:mediaId", userMiddleware, joiMiddleware(getReviewsSchema, 'params'), getReviews);
reviewRouter.put("/", userMiddleware, joiMiddleware(upsertReviewSchema, 'body'), upsertReview);
reviewRouter.delete('/:mediaId', userMiddleware, joiMiddleware(getReviewsSchema, 'params'), deleteReview)

export default reviewRouter;
