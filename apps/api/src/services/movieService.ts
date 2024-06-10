import prisma from "./prisma";
import type { MediaItem, Prisma, UserMediaItem } from "@prisma/client";


export const markMovieService = async (movie: MediaItem, userId: string, watched: boolean, watchedDate: Date | undefined): Promise<UserMediaItem> => {
  const userMediaItem = await prisma.userMediaItem.findFirst({
    where: {
      userId,
      mediaItem: movie,
    },
  })
  if (userMediaItem) {
    return await prisma.userMediaItem.update({
      where: {
        id: userMediaItem.id
      },
      data: {
        watched,
        watchedDate
      }
    })
  } else {
    return await prisma.userMediaItem.create({
      data: {
        userId,
        watched,
        watchedDate,
        mediaId: movie.id
      }
    })
  }
}

export const getMarkedMoviesService = async (userId: string): Promise<UserMediaItem[]> => {
  return await prisma.userMediaItem.findMany({
    where: {
      userId,
      mediaItem: {
        mediaType: "movie"
      }
    },
    include: {
      mediaItem: true
    }
  })
}

export const searchMovieBytmdbIdService = async (tmdbId: string) => {
  const movie = await prisma.mediaItem.findFirst({
    where: {
      tmdbId
    }
  });
  return movie;
}



export const removeMarkedMovieService = async (where: Prisma.UserMediaItemWhereUniqueInput) => {
  return await prisma.userMediaItem.delete({
    where
  })
}
