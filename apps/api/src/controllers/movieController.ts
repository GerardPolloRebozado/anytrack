import { Request, Response } from "express";
import { searchMovieService, searchMoviebyIdService } from "../services/tmdbService";
import prisma from "../services/prisma";
import { genre } from "@prisma/client";

export const getMovieByTerm = async (req: Request, res: Response) => {
  try {
    const query = req.query.query as string;
    const data = await searchMovieService(query);
    data.results.forEach((movie: any) => {
      movie.poster = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getMoviebyId = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const data = await searchMoviebyIdService(id);
    if (data.status_code === 34) return res.status(404).json({ error: "Movie not found" });
    data.poster = `https://image.tmdb.org/t/p/original/${data.poster_path}`;
    const localId = await prisma.movie.findUnique({
      where: {
        tmdbId: id,
      }
    });
    if (localId) {
      data.localId = localId.id;
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const markMovie = async (req: Request, res: Response) => {
  try {
    let watchedDate = req.body.watchedDate;
    const watched = Boolean(req.body.watched);
    const tmdbId = Number(req.body.tmdbId);
    const userId = res.locals.user.id;
    const rating = Number(req.body.rating);
    const review = req.body.text;

    let movieItem = await prisma.movie.findFirst({
      where: {
        tmdbId
      }
    });
    if (!movieItem) {
      const movie = await searchMoviebyIdService(tmdbId);
      const genreData = await Promise.all(await movie.genres.map((genre: genre) => prisma.genre.upsert({ where: { name: genre.name }, update: { name: genre.name }, create: { name: genre.name } })));
      if (movie.status_code === 34) throw new Error("Movie not found");
      movieItem = await prisma.movie.create({
        data: {
          tmdbId: movie.id,
          title: movie.title,
          overview: movie.overview,
          poster: `https://image.tmdb.org/t/p/original/${movie.poster_path}`,
          tmdbRating: movie.vote_average,
          releaseDate: new Date(movie.release_date),
          runtime: movie.runtime,
          genre: {
            connect: genreData.map((genre) => ({ name: genre.name }))
          }
        }
      });
    }

    if (watchedDate) watchedDate = new Date(watchedDate);
    let userMovie = await prisma.userMovie.findFirst({
      where: {
        userId,
        movieId: movieItem.id,
      },
    });

    if (!userMovie) {
      userMovie = await prisma.userMovie.create({
        data: {
          userId,
          movieId: movieItem.id,
          watched,
          watchedDate,
          rating,
          review,
        }
      });
    } else {
      userMovie = await prisma.userMovie.update({
        where: {
          id: userMovie.id
        },
        data: {
          watched,
          watchedDate
        }
      })
    }
    return res.status(200).json(userMovie);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
}

export const getMarkedMovies = async (req: Request, res: Response) => {
  try {
    const userId = res.locals.user.id;
    const groupBy = req.query.groupBy as string;
    const movies = await prisma.userMovie.findMany({
      where: {
        userId,
      },
      include: {
        movie: {
          include: {
            genre: true,
          }
        },
      }
    })
    if (groupBy === "month") {
      const groupedMedia: { month: string, totalRuntime: number, movies: any[] }[] = [];

      movies.forEach((movie: any) => {
        const date = new Date(movie.watchedDate);
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const group = `${year}-${month}`;
        const existingIndex = groupedMedia.findIndex(item => item.month === group);
        if (existingIndex !== -1) {
          groupedMedia[existingIndex].totalRuntime += movie.movie.runtime;
          groupedMedia[existingIndex].movies.push(movie);
        } else {
          groupedMedia.push({ month: group, totalRuntime: movie.movie.runtime, movies: [movie] });
        }
      });
      const statsOverview: { totalRuntime: number, mediaCount: number } = groupedMedia.reduce((acc, item) => {
        acc.totalRuntime += item.totalRuntime;
        acc.mediaCount += item.movies.length;
        return acc;
      }, { totalRuntime: 0, mediaCount: 0 });
      res.status(200).json({ groupedMedia, statsOverview });
      return;
    }
    return res.status(200).json(movies);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export const removeMarkedMovie = async (req: Request, res: Response) => {
  const movieId = Number(req.params.id);
  const userId = res.locals.user.id;
  try {
    const userMediaItem = await prisma.userMovie.delete({
      where: {
        userId_movieId: {
          userId,
          movieId
        }
      }
    });
    return res.status(200).json(userMediaItem);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
