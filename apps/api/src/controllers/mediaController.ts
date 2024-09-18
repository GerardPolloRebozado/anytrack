import { Request, Response } from "express";
import prisma from "../services/prisma";
import { MediaType, groupedFutureMedia } from "@anytrack/types";

export const getManyFutureMedia = async (req: Request, res: Response) => {
  try {
    const userId = res.locals.user.id
    const futureEpisodes = await prisma.episode.findMany({
      where: {
        userShow: {
          some: {
            userId
          }
        },
        releaseDate: {
          gte: new Date()
        }
      },
      include: {
        season: {
          include: {
            show: true
          }
        }
      },
      orderBy: {
        releaseDate: 'asc'
      }
    })
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
    const futureGames = await prisma.game.findMany({
      where: {
        userGame: {
          some: {
            userId
          }
        },
        firstReleaseDate: {
          gte: new Date()
        }
      },
    });
    const groupedFutureMedia: groupedFutureMedia[] = futureEpisodes.map((episode) => ({
      mediaType: MediaType.show,
      tmdbId: episode.season.show.tmdbId,
      title: `${episode.season.show.title} S${episode.season.seasonNumber} E${episode.episodeNumber} - ${episode.title}`,
      poster: episode.season.poster,
      releaseDate: episode.releaseDate
    }))

    futureMovie.forEach((movie) => {
      groupedFutureMedia.push({
        mediaType: MediaType.movie,
        tmdbId: movie.tmdbId,
        title: movie.title,
        poster: movie.poster,
        releaseDate: movie.releaseDate
      })
    })
    futureGames.forEach((game) => {
      groupedFutureMedia.push({
        mediaType: MediaType.vgame,
        igdbId: game.id,
        title: game.name,
        poster: game.coverId && `https://images.igdb.com/igdb/image/upload/t_cover_big_2x/${game.coverId}.jpg` || undefined,
        releaseDate: game.firstReleaseDate
      })
    })


    groupedFutureMedia.sort((a, b) => b.releaseDate.getTime() - a.releaseDate.getTime());
    res.status(200).json(groupedFutureMedia)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch upcoming releases' })
  }
}
