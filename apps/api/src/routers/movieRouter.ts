import { Router } from "express";

import { getMarkedMovies, markMovie, removeMarkedMovie, getMovieByTerm, getMoviebyId } from "../controllers/movieController";
import joiMiddleware from "../middlewares/joiMiddleware";
import { userMiddleware } from "../middlewares/userMiddleware";
import {getUserMediaItemSchema, markMovieSchema, removeMarkedMovieSchema, searchMovieByIdSchema, searchMoviesSchema } from "@anytrack/joi";

const movieRouter = Router();

movieRouter.get("/search", userMiddleware, joiMiddleware(searchMoviesSchema, "query"), getMovieByTerm);
movieRouter.get("/mark", userMiddleware, joiMiddleware(getUserMediaItemSchema, 'query'), getMarkedMovies);
movieRouter.post("/mark", userMiddleware, joiMiddleware(markMovieSchema, 'body'), markMovie);
movieRouter.delete("/mark/:id", userMiddleware, joiMiddleware(removeMarkedMovieSchema, 'params'), removeMarkedMovie);
movieRouter.get("/:id", userMiddleware, joiMiddleware(searchMovieByIdSchema, "params"), getMoviebyId);

export default movieRouter;
