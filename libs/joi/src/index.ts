import Joi from "joi";
import { tlds } from "@hapi/tlds";
export { Joi };

export const createUserSchema = Joi.object({
    confirmPassword: Joi.ref("password"),
    email: Joi.string().email({ tlds: { allow: tlds } }).required(),
    name: Joi.string().required(),
    password: Joi.string().min(6).required(),
});

export const loginUserSchema = Joi.object({
    email: Joi.string().email({ tlds: { allow: tlds } }).required(),
    password: Joi.string().min(6).required(),
});

export const searchMoviesSchema = Joi.object({
    query: Joi.string().required(),
});

export const searchMovieByIdSchema = Joi.object({
    id: Joi.string().required(),
});

export const deleteMediaSchema = Joi.object({
    id: Joi.number().required(),
})

export const markMediaSchema = Joi.object({
    tmdbId: Joi.alternatives(Joi.string(), Joi.number()).required(),
    watched: Joi.boolean().required(),
    watchedDate: Joi.date().optional(),
    mediaType: Joi.string().valid("movie", "show").required
        (),
})

export const getMarkedMediaSchema = Joi.object({
    mediaType: Joi.string().valid("movie", "show").optional(),
    watched: Joi.boolean().optional(),
    groupBy: Joi.string().valid('month').optional(),
})

export const getShowSchema = Joi.object({
    term: Joi.string().required(),
})

export const markShowSchema = Joi.object({
    watchedDate: Joi.date().optional().max("now"),
    watched: Joi.boolean().required(),
    season: Joi.number().required(),
    episode: Joi.number().optional()
})

export const markMovieSchema = Joi.object({
    tmdbId: Joi.string().required(),
    watchedDate: Joi.date().max("now").optional(),
    watched: Joi.boolean().required()
})

export const markMovieSchemaForm = Joi.object({
    watchedDate: Joi.date().max("now").required(),
    watched: Joi.boolean().required()
})

export const getShowSeasonsSchema = Joi.object({
    tmdbId: Joi.string().required(),
    season: Joi.number().optional()
})

export const getMarkedMoviesSchema = Joi.object({
    groupBy: Joi.string().valid('month').optional()
})

export const removeMarkedMovieSchema = Joi.object({
    id: Joi.number().required()
})
