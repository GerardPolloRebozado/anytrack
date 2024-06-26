import { Request, Response } from "express";
import { searchMovieService, searchMoviebyIdService } from "../services/tmdbService";
import prisma from "../services/prisma";
import { Genre, MediaType } from "@prisma/client";

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
    // const movieLocal = await prisma.mediaItem.findFirst({
    //     where: { tmdbId: id },
    // });
    // if (movieLocal) {
    //     res.status(200).json(movieLocal);
    //     return;
    // }
    const data = await searchMoviebyIdService(id);
    if (data.status_code === 34) return res.status(404).json({ error: "Movie not found" });
    data.poster = `https://image.tmdb.org/t/p/original/${data.poster_path}`;
    const localId = await prisma.mediaItem.findUnique({
      where: {
        tmdbId: id
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
    const watched = req.body.watched;
    const tmdbId = Number(req.body.tmdbId);
    const userId = res.locals.user.id;
    let mediaItem = await prisma.mediaItem.findFirst({
      where: {
        tmdbId
      }
    });
    if (!mediaItem) {
      const movie = await searchMoviebyIdService(tmdbId);
      const genreData = await Promise.all(await movie.genres.map((genre: Genre) => prisma.genre.upsert({ where: { name: genre.name }, update: { name: genre.name }, create: { name: genre.name } })));
      if (movie.status_code === 34) throw new Error("Movie not found");
      mediaItem = await prisma.mediaItem.create({
        data: {
          tmdbId: movie.id,
          mediaType: "movie",
          title: movie.title,
          overview: movie.overview,
          poster: `https://image.tmdb.org/t/p/original/${movie.poster_path}`,
          tmdbRating: movie.vote_average,
          releaseDate: new Date(movie.release_date),
          runtime: movie.runtime,
          genres: {
            connect: genreData.map((genre) => ({ name: genre.name }))
          }
        }
      });
    }
    if (watchedDate) watchedDate = new Date(watchedDate);
    let userMediaItem = await prisma.userMediaItem.findFirst({
      where: {
        userId,
        mediaId: mediaItem.id,
        mediaItem: {
          mediaType: MediaType.movie
        },
      },
    });

    if (!userMediaItem) {
      userMediaItem = await prisma.userMediaItem.create({
        data: {
          userId,
          watched,
          watchedDate,
          mediaId: mediaItem.id
        }
      });
    }
    return res.status(200).json(userMediaItem);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
}

export const getMarkedMovies = async (req: Request, res: Response) => {
  try {
    const userId = res.locals.user.id;
    const groupBy = req.query.groupBy as string;
    const movies = await prisma.userMediaItem.findMany({
      where: {
        userId,
        mediaItem: {
          mediaType: "movie"
        },
      },
      include: {
        mediaItem: {
          select: {
            seasons: false
          },
          include: {
            genres: true,
          }
        },
        episode: false
      }
    })
    if (groupBy === "month") {
      const grouped: { month: string, totalRuntime: number, movies: any[] }[] = [];
      movies.forEach((movie: any) => {
        const date = new Date(movie.watchedDate);
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const group = `${year}-${month}`;
        const existingIndex = grouped.findIndex(item => item.month === group);
        if (existingIndex !== -1) {
          grouped[existingIndex].totalRuntime += movie.mediaItem.runtime;
          grouped[existingIndex].movies.push(movie);
        } else {
          grouped.push({ month: group, totalRuntime: movie.mediaItem.runtime, movies: [movie] });
        }
      });
      res.status(200).json(grouped);
      return;
    }


    return res.status(200).json(movies);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export const removeMarkedMovie = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const userMediaItem = await prisma.userMediaItem.delete({
      where: {
        id
      }
    });
    return res.status(200).json(userMediaItem);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
