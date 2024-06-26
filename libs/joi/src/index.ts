import Joi from "joi";
import { tlds } from "@hapi/tlds";
export { Joi };
import { MediaType } from '@prisma/client';
import { watch } from "fs";

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
  tmdbId: Joi.number().required(),
  watched: Joi.boolean().required(),
  watchedDate: Joi.date().optional(),
  mediaType: Joi.string().valid("movie", "show").required
    (),
})

export const getUserMediaItemSchema = Joi.object({
  mediaType: Joi.string().valid(...Object.values(MediaType)).optional(),
  watched: Joi.boolean().optional(),
  groupBy: Joi.string().optional().when('mediaType', {
    is: MediaType.show,
    then: Joi.valid('mediaItem', 'month'),
    otherwise: Joi.valid('month')
  }
  )
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

export const markMovieSchema = Joi.object({
  tmdbId: Joi.number().required(),
  watchedDate: Joi.date().max("now").optional(),
  watched: Joi.boolean().required()
})

export const markMovieSchemaForm = Joi.object({
  watchedDate: Joi.date().max("now").required(),
  watched: Joi.boolean().required()
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
  mediaType: Joi.string().valid(...Object.values(MediaType)).required(),
  season: Joi.number().when('mediaType', {
    is: MediaType.show,
    then: Joi.optional(),
    otherwise: Joi.forbidden()
  })
})

export const getWatchedEpisodesFromUserSchema = Joi.object({
  tmdbId: Joi.number().required(),
  season: Joi.number().optional()
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

export const upsertReviewSchema = Joi.object({
  review: Joi.string().optional(),
  rating: Joi.alternatives().try(
    Joi.number().min(0).max(9.9).precision(1),
    Joi.number().valid(10)
  ),
  mediaId: Joi.number().required()
})

export const getReviewsSchema = Joi.object({
  mediaId: Joi.number().required()
})
