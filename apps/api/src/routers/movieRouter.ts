import { Router } from "express";

import { getMarkedMovies, markMovie, removeMarkedMovie, getMovieByTerm, getMoviebyId, getReviews, deleteReview, upsertReview, getManyFutureMovies } from "../controllers/movieController";
import joiMiddleware from "../middlewares/joiMiddleware";
import { userMiddleware } from "../middlewares/userMiddleware";
import { mediaIdSchema, getUserMediaItemSchema, markMovieSchema, removeMarkedMovieSchema, searchMovieByIdSchema, searchMoviesSchema, updateReviewSchema } from "@anytrack/joi";

const movieRouter = Router();

movieRouter.get("/search", userMiddleware, joiMiddleware(searchMoviesSchema, "query"), getMovieByTerm);
movieRouter.get("/mark", userMiddleware, joiMiddleware(getUserMediaItemSchema, 'query'), getMarkedMovies);
movieRouter.post("/mark", userMiddleware, joiMiddleware(markMovieSchema, 'body'), markMovie);
movieRouter.delete("/mark/:id", userMiddleware, joiMiddleware(removeMarkedMovieSchema, 'params'), removeMarkedMovie);
movieRouter.get('/future', userMiddleware, getManyFutureMovies);
movieRouter.put("/review", userMiddleware, joiMiddleware(updateReviewSchema, 'body'), upsertReview);
movieRouter.get("/:mediaId/review", userMiddleware, joiMiddleware(mediaIdSchema, 'params'), getReviews);
movieRouter.delete("/:mediaId/review", userMiddleware, joiMiddleware(mediaIdSchema, 'params'), deleteReview);
movieRouter.get("/:movieId", userMiddleware, joiMiddleware(searchMovieByIdSchema, "params"), getMoviebyId);

export default movieRouter;

