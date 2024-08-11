import { CronJob } from "cron";
import { searchMoviebyIdService, searchShowSeasonsService, searchShowTmdbIdService } from "../services/tmdbService";
import prisma from "../services/prisma";

export const updateMovies = new CronJob("0 0 */2 * *", async () => {
  const movieItems = await prisma.movie.findMany({
    where: {
      updatedAt: {
        lte: new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 2),
      },
    },
  });
  console.log(`Found ${movieItems.length} movies to update`);
  movieItems.forEach(async (movie) => {
    const movieTmdb = await searchMoviebyIdService({ id: movie.tmdbId });
    const updatedMovie = await prisma.movie.update({
      where: { id: movie.id },
      data: {
        title: movieTmdb.original_title,
        overview: movieTmdb.overview,
        poster: `https://image.tmdb.org/t/p/original${movieTmdb.poster_path}`,
        tmdbRating: movieTmdb.vote_average,
        releaseDate: new Date(movieTmdb.release_date),
        runtime: movieTmdb.runtime,
        genre: {
          connect: movieTmdb.genres.map((genre: any) => ({ name: genre.name }))
        }
      }
    });
    console.log(`Updated movie ${updatedMovie.title}`);
  });
}, null, true, "Europe/Madrid");

export const updateShows = new CronJob("0 0 * * *", async () => {
  const showItems = await prisma.show.findMany({
    where: {
      updatedAt: {
        lte: new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 2),
      },
    },
    include: {
      season: true
    }
  });
  console.log(`Found ${showItems.length} shows to update`);
  showItems.forEach(async (show) => {
    const showTmdb = await searchShowTmdbIdService({ id: show.tmdbId });
    const updatedShow = await prisma.show.update({
      where: { id: show.id },
      data: {
        title: showTmdb.name,
        overview: showTmdb.overview,
        poster: `https://image.tmdb.org/t/p/original${showTmdb.poster_path}`,
        tmdbRating: showTmdb.vote_average,
        releaseDate: new Date(showTmdb.first_air_date),
        genre: {
          connect: showTmdb.genres.map((genre: any) => ({ name: genre.name }))
        }
      }
    });
    showTmdb.seasons.forEach(async (season) => {
      const seasonDb = await prisma.season.upsert({
        where: {
          showId_seasonNumber: {
            showId: show.id,
            seasonNumber: season.season_number
          }
        },
        update: {
          title: season.name,
          poster: `https://image.tmdb.org/t/p/original${season.poster_path}`,
          releaseDate: new Date(season.air_date),
          overview: season.overview,
        },
        create: {
          seasonNumber: season.season_number,
          title: season.name,
          poster: `https://image.tmdb.org/t/p/original${season.poster_path}`,
          releaseDate: new Date(season.air_date),
          overview: season.overview,
          show: {
            connect: {
              id: show.id
            }
          }
        }
      });
      const seasonTmdb = await searchShowSeasonsService({ id: show.tmdbId, season_number: season.season_number });
      seasonTmdb.episodes.forEach(async episode => {
        await prisma.episode.upsert({
          where: {
            seasonId_episodeNumber: {
              seasonId: seasonDb.id,
              episodeNumber: episode.episode_number
            }
          },
          update: {
            title: episode.name,
            overview: episode.overview,
            releaseDate: new Date(episode.air_date),
          },
          create: {
            episodeNumber: episode.episode_number,
            title: episode.name,
            overview: episode.overview,
            releaseDate: new Date(episode.air_date),
            season: {
              connect: {
                id: seasonDb.id
              }
            }
          }
        });
      });
    });
    console.log(`Updated show ${updatedShow.title}`);
  });
}, null, true, "Europe/Madrid");
