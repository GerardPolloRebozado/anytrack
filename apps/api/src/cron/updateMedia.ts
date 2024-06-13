import { CronJob } from "cron";
import { findManyMediaService, updateMediaService } from "../services/mediaService";
import { MediaType } from "@prisma/client";
import { searchMoviebyIdService } from "../services/tmdbService";

export const updateMovies = new CronJob("0 0 */2 * *", async () => {
  const movieItems = await findManyMediaService({
    updatedAt: {
      lte: new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 2),
    },
    mediaType: MediaType.movie,
  });
  console.log(`Found ${movieItems.length} movies to update, ${movieItems}`);
  movieItems.forEach(async (movie) => {
    const movieTmdb = await searchMoviebyIdService(movie.tmdbId);
    const updatedMovie = await updateMediaService({ id: movie.id }, {
      title: movieTmdb.original_title,
      overview: movieTmdb.overview,
      poster: `https://image.tmdb.org/t/p/original/${movieTmdb.poster_path}`,
      tmdbRating: movieTmdb.vote_average,
      releaseDate: new Date(movieTmdb.release_date),
      runtime: movieTmdb.runtime,
      genres: {
        connect: movieTmdb.genres.map((genre: any) => ({ name: genre.name }))
      }
    });
    console.log(`Updated movie ${updatedMovie}`);
  });
}, null, true, "Europe/Madrid");
