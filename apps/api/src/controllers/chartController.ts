import { Request, Response } from "express"
import prisma from "../services/prisma"
import { MediaRuntimeChartData } from '@anytrack/types'

export const getMediaRuntimeChart = async (req: Request, res: Response) => {
  try {
    const userId = res.locals.user.id
    const groupBy = req.query.groupBy as string

    const movies = await prisma.userMovie.findMany({
      where: {
        userId,
        watched: true
      },
      include: {
        movie: true
      },
      orderBy: {
        watchedDate: 'desc',
      }
    })
    const shows = await prisma.userShow.findMany({
      where: {
        userId,
        watched: true
      },
      include: {
        episode: true
      },
      orderBy: {
        watchedDate: 'desc',
      }
    })
    const groupedMedia: MediaRuntimeChartData = {
      chartData: [],
      mediaStats: {
        episodeCount: 0,
        movieCount: 0,
        showRuntime: 0,
        movieRuntime: 0,
      }
    }
    movies.forEach((userMovie) => {
      let date = String(userMovie.watchedDate)
      if (groupBy === 'month') {
        date = userMovie.watchedDate?.toISOString().slice(0, 7)
      } else if (groupBy === 'year') {
        date = userMovie.watchedDate?.toISOString().slice(0, 4)
      }
      const existingIndex = groupedMedia.chartData.findIndex(item => item.date === date)
      groupedMedia.mediaStats.movieCount += 1
      groupedMedia.mediaStats.movieRuntime += userMovie.movie.runtime
      if (existingIndex !== -1) {
        groupedMedia.chartData[existingIndex].movie += userMovie.movie.runtime
      } else {
        groupedMedia.chartData.push({
          date,
          show: 0,
          movie: userMovie.movie.runtime,
        })
      }
    })
    shows.forEach((userShow) => {
      const date = userShow.watchedDate?.toISOString().slice(0, 7);
      const existingIndex = groupedMedia.chartData.findIndex(item => item.date === date)
      groupedMedia.mediaStats.episodeCount += 1
      groupedMedia.mediaStats.showRuntime += userShow.episode.runtime
      if (existingIndex !== -1) {
        groupedMedia.chartData[existingIndex].show += userShow.episode.runtime
      } else {
        groupedMedia.chartData.push({
          date,
          show: userShow.episode.runtime,
          movie: 0,
        })
      }
    })
    return res.status(200).json(groupedMedia)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: error.message })
  }
}
