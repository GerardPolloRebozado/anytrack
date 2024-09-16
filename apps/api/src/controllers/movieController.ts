import { Request, Response } from "express";
import { searchMovieService, searchMoviebyIdService } from "../services/tmdbService";
import prisma from "../services/prisma";
import { movieGenre } from "@anytrack/types";
import { SearchMovieRequest } from "moviedb-promise";

export const getMovieByTerm = async (req: Request, res: Response) => {
  try {
    const query = req.query as unknown as SearchMovieRequest;
    const data = await searchMovieService(query);
    data.results.forEach((movie: any) => {
      movie.poster_path = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
    });
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getMoviebyId = async (req: Request, res: Response) => {
  try {
    const movieId = Number(req.params.movieId);
    const data = await searchMoviebyIdService({ id: movieId });
    data.poster_path = `https://image.tmdb.org/t/p/original${data.poster_path}`;
    const localMovie = await prisma.movie.findUnique({
      where: {
        tmdbId: movieId,
      }
    });
    res.status(200).json({ movie: data, localId: localMovie?.id });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const markMovie = async (req: Request, res: Response) => {
  try {
    let watchedDate = req.body.watchedDate;
    const watched = Boolean(req.body.watched);
    const tmdbId = Number(req.body.tmdbId);
    const userId = res.locals.user.id;

    let movieItem = await prisma.movie.findFirst({
      where: {
        tmdbId
      }
    });
    if (!movieItem) {
      const movie = await searchMoviebyIdService({ id: tmdbId });
      const genreData = await Promise.all(await movie.genres.map((genre: movieGenre) => prisma.movieGenre.upsert({ where: { name: genre.name }, update: { name: genre.name }, create: { name: genre.name } })));
      movieItem = await prisma.movie.create({
        data: {
          tmdbId: movie.id,
          title: movie.title,
          overview: movie.overview,
          poster: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
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
        }
      });
    } else {
      userMovie = await prisma.userMovie.update({
        where: {
          id: userMovie.id
        },
        data: {
          watched,
          watchedDate,
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
    let watched: boolean | undefined;
    if (req.query.watched) watched = req.query.watched === "true";
    if (req.query.watched === 'false') watched = false;
    const movies = await prisma.userMovie.findMany({
      where: {
        userId,
        watched
      },
      include: {
        movie: {
          include: {
            genre: true,
          }
        },
      }
    })
    switch (groupBy) {
      case "month": {
        const groupedMedia: { month: string, totalRuntime: number, movies: any[] }[] = [];
        movies.forEach((movie: any) => {
          const date = movie.watchedDate?.toISOString().slice(0, 7);
          const existingIndex = groupedMedia.findIndex(item => item.month === date);
          if (existingIndex !== -1) {
            groupedMedia[existingIndex].totalRuntime += movie.movie.runtime;
            groupedMedia[existingIndex].movies.push(movie);
          } else {
            groupedMedia.push({ month: date, totalRuntime: movie.movie.runtime, movies: [movie] });
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
      case "genre": {
        const tempAgrupation: { id: number, name: string, runtime: number, mediaItems: any[] }[] = [];
        movies.forEach((movie) => {
          movie.movie.genre.forEach(genre => {
            if (tempAgrupation[genre.id]) {
              tempAgrupation[genre.id].runtime += movie.movie.runtime;
              tempAgrupation[genre.id].mediaItems.push(movie.movie);
            } else {
              tempAgrupation[genre.id] = { id: genre.id, name: genre.name, runtime: movie.movie.runtime, mediaItems: [movie.movie] };
            }
          });
        })
        const agrupation = tempAgrupation.filter((genre) => genre);
        res.status(200).json(agrupation);
        return;
      }
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

export const getReviews = async (req: Request, res: Response) => {
  try {
    const movieId = Number(req.params.mediaId);
    const reviews = await prisma.userMovieReview.findMany({
      where: {
        movieId,
        OR: [
          {
            user: {
              setting: {
                public: true
              }
            }
          },
          {
            userId: res.locals.user.id
          }
        ]
      },
      include: {
        user: {
          select: {
            name: true,
            id: true
          }
        },
        movie: true
      }
    });
    return res.status(200).json(reviews);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export const upsertReview = async (req: Request, res: Response) => {
  try {
    const userId = res.locals.user.id;
    const { rating, review, mediaId } = req.body;
    const userMovie = await prisma.userMovieReview.upsert({
      where: {
        userId_movieId: {
          userId,
          movieId: mediaId,
        }
      },
      update: {
        rating,
        review
      },
      create: {
        rating,
        review,
        userId,
        movieId: mediaId
      }
    });
    return res.status(200).json(userMovie);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export const deleteReview = async (req: Request, res: Response) => {
  try {
    const userId = res.locals.user.id;
    const mediaId = Number(req.params.mediaId);
    const userMovie = await prisma.userMovieReview.delete({
      where: {
        userId_movieId: {
          userId,
          movieId: mediaId
        }
      },
    });
    return res.status(200).json(userMovie);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export const getManyFutureMovies = async (req: Request, res: Response) => {
  try {
    const userId = res.locals.user.id
    const futureMovie = await prisma.movie.findMany({
      where: {
        userMovie: {
          some: {
            userId
          }
        },
        releaseDate: {
          gte: new Date()
        }
      },
    });
    res.status(200).json(futureMovie)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
