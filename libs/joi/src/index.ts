import Joi from "joi";
export { Joi };
import { tlds } from "@hapi/tlds";
import { MediaType } from "@anytrack/type";
import { group } from "console";

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
  movieId: Joi.string().required(),
});

export const deleteMediaSchema = Joi.object({
  id: Joi.number().required(),
})

export const markMediaSchema = Joi.object({
  tmdbId: Joi.number().required(),
  watched: Joi.boolean().required(),
  watchedDate: Joi.date().optional(),
  mediaType: Joi.string().valid("movie", "show").required
    (),
})

export const getUserMediaItemSchema = Joi.object({
  watched: Joi.boolean().optional(),
  groupBy: Joi.string().optional(),
})

export const getShowSchema = Joi.object({
  term: Joi.string().required(),
})

export const markShowSchema = Joi.object({
  tmdbId: Joi.number().required(),
  watchedDate: Joi.date().optional().max("now"),
  watched: Joi.boolean().required(),
  season: Joi.number().optional(),
  episode: Joi.number().optional()
})

export const markMovieSchemaForm = Joi.object({
  watchedDate: Joi.date().max("now").required(),
  watched: Joi.boolean().required(),
})

export const markMovieSchema = markMovieSchemaForm.keys({
  tmdbId: Joi.number().required()
})

export const markShowSchemaForm = Joi.object({
  watchedDate: Joi.date().optional().max("now"),
  watched: Joi.boolean().required(),
  season: Joi.number().optional(),
  episode: Joi.number().optional()
})

export const getShowSeasonsSchema = Joi.object({
  tmdbId: Joi.number().required(),
  season: Joi.number().optional()
})

export const removeMarkedMovieSchema = Joi.object({
  id: Joi.number().required()
})

export const getCreditsSchema = Joi.object({
  tmdbId: Joi.number().required(),
  season: Joi.number().optional(),
  mediaType: Joi.string().valid(...Object.values(MediaType)).required()
})

export const getOneUserMediaItemSchema = Joi.object({
  tmdbId: Joi.number().required(),
  season: Joi.number().optional(),
})

export const deleteOneUserMediaItemShowSchema = Joi.object({
  tmdbId: Joi.number().required(),
  season: Joi.number().when('episode', {
    is: Joi.exist(),
    then: Joi.number().required(),
    otherwise: Joi.number().optional()
  }),
  episode: Joi.number().optional()
})

export const updateSettingsSchema = Joi.object({
  public: Joi.boolean().required(),
});

export const updateReviewSchema = Joi.object({
  review: Joi.string().optional(),
  rating: Joi.alternatives().try(
    Joi.number().min(0).max(9.9).precision(1),
    Joi.number().valid(10)
  ),
  mediaId: Joi.number().required()
})

export const mediaIdSchema = Joi.object({
  mediaId: Joi.number().required()
})

export const getOneMarkedShowQuerySchema = Joi.object({
  watched: Joi.bool().optional(),
  seasonNumber: Joi.number().optional()
})

export const seaonsAndEpisodeSchema = Joi.object({
  season: Joi.number().when('episode', {
    is: Joi.exist(),
    then: Joi.required(),
    otherwise: Joi.optional()
  }),
  episode: Joi.number().optional()
})

export const updateUserSchema = Joi.object({
  email: Joi.string().email({ tlds: { allow: tlds } }).optional(),
  name: Joi.string().optional(),
  password: Joi.string().min(6).optional(),
})

export const updateUserSchemaForm = Joi.object({
  email: Joi.string().email({ tlds: { allow: tlds } }).optional(),
  name: Joi.string().optional(),
})

export const changePasswordSchema = Joi.object({
  password: Joi.string().min(6).required(),
})

export const getMediaRuntimeChartSchema = Joi.object({
  groupBy: Joi.string().valid("month", "year").required()
})

export const getWatchProvidersQuerySchema = Joi.object({
  mediaType: Joi.string().valid('show', 'movie').required()
})

export const getWatchProvidersParamsSchema = Joi.object({
  tmdbId: Joi.number().required()
})
