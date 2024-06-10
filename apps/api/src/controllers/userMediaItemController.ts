import { Request, Response } from "express"
import { findUniqueMediaService } from "../services/mediaService"
import prisma from "../services/prisma"
import { getSeasonService } from "../services/seasonService"
import { deleteManyUserMediaItemService, deleteOneUserMediaItemService, findManyUserMediaItemService } from "../services/userMediaService"
import { MediaType } from "@anytrack/type"

export const getUserMediaItem = async (req: Request, res: Response) => {
  try {
    const mediaType = req.query.mediaType as MediaType | undefined
    const watched: string | undefined = req.query.watched as string | undefined
    const includeMediaItem = req.query.includeMediaItem as unknown as boolean | undefined
    const userId = res.locals.user.id
    const groupBy = req.query.groupBy as string | undefined
    const userMediaItem = await findManyUserMediaItemService({
      where: {
        userId,
        mediaItem: {
          mediaType,
        },
        watched: watched !== undefined ? watched !== 'true' ? false : true : undefined,
      },
      include: {
        mediaItem: includeMediaItem ? true : false,
        episode: includeMediaItem ? true : false,
      },
      orderBy: {
        watchedDate: 'desc',
      }
    });
    if (groupBy === 'month') {
      const grouped: { month: string, totalRuntime: number, media: any[] }[] = [];
      let mediaCount = 0;
      const showArray = []
      userMediaItem.forEach((userMediaItem: any) => {
        const date = new Date(userMediaItem.watchedDate);
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const group = `${year}-${month.toString().padStart(2, '0')}`;
        const existingIndex = grouped.findIndex(item => item.month === group);
        let runtime;
        if (userMediaItem.mediaItem.mediaType === 'show' && userMediaItem.episode) {
          runtime = userMediaItem.episode.runtime;
          let showRepeated = false
          showArray.forEach(id => {
            if (id === userMediaItem.mediaItem.tmdbId) {
              showRepeated = true
            }
          });
          if (!showRepeated) {
            showArray.push(userMediaItem.mediaItem.tmdbId)
            mediaCount++
          }
        } else if (userMediaItem.mediaItem.mediaType === 'movie') {
          runtime = userMediaItem.mediaItem.runtime;
        } else {
          return;
        }
        if (existingIndex !== -1) {
          grouped[existingIndex].totalRuntime += runtime;
          grouped[existingIndex].media.push(userMediaItem);
        } else {
          grouped.push({ month: group, totalRuntime: runtime, media: [userMediaItem] });
        }
      });
      if (mediaType === 'movie') {
        mediaCount = userMediaItem.length;
      }
      const totalRuntime = grouped.reduce((acc, item) => acc + item.totalRuntime, 0);
      grouped.sort((a, b) => new Date(a.month + '-01').getTime() - new Date(b.month + '-01').getTime());
      res.status(200).json({ media: grouped, statsOverview: { totalRuntime, mediaCount } });
      return;
    } else if (groupBy === 'mediaItem' && mediaType === 'show') {
      const grouped: { mediaItem: any, episodes: any[], watchTime: number, title: string }[] = [];
      userMediaItem.forEach((userMediaItem: any) => {
        const existingIndex = grouped.findIndex(item => item.mediaItem.id === userMediaItem.mediaId);
        if (existingIndex !== -1) {
          grouped[existingIndex].episodes.push(userMediaItem);
          grouped[existingIndex].watchTime += userMediaItem.episode.runtime;
          grouped[existingIndex].mediaItem.size = grouped[existingIndex].watchTime;
        } else {
          userMediaItem.mediaItem.size = userMediaItem.episode.runtime;
          grouped.push({ mediaItem: userMediaItem.mediaItem, episodes: [userMediaItem], watchTime: userMediaItem.episode.runtime, title: userMediaItem.mediaItem.title });
        }
      });
      res.status(200).json(grouped);
      return;
    }
    res.status(200).json(userMediaItem)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const deleteOneUserMediaItemShow = async (req: Request, res: Response) => {
  try {
    const tmdbId = req.query.tmdbId as string;
    const userId: string = res.locals.user.id;
    const season = Number(req.query.season);
    const episode = Number(req.query.episode);

    const show = await findUniqueMediaService({
      tmdbId,
      mediaType: 'show'
    });
    if (!show) throw new Error("Show not found");
    if (season && season !== -1 && episode && episode !== -1) {
      const seasonFromDB = await getSeasonService({
        mediaItemId_seasonNumber: {
          mediaItemId: show.id,
          seasonNumber: season
        }
      }, true);
      if (!seasonFromDB) throw new Error("Season not found");
      const episodeFromDB = seasonFromDB.episodes.find(episodeDB => episodeDB.episodeNumber === episode);
      if (!episodeFromDB) throw new Error("Episode not found");
      const deletedMark = await deleteOneUserMediaItemService({
        unique_user_media_series: {
          userId,
          mediaId: show.id,
          episodeId: episodeFromDB?.id,
          seasonId: seasonFromDB.id
        }
      },
        {
          mediaItem: true,
        });
      res.status(200).json(deletedMark);
    } else if (season !== -1) {
      const seasonFromDB = await getSeasonService({
        mediaItemId_seasonNumber: {
          mediaItemId: show.id,
          seasonNumber: season
        }
      }, true);
      if (!seasonFromDB) throw new Error("Season not found");
      const deletedMedia = await deleteManyUserMediaItemService({
        userId,
        seasonId: seasonFromDB.id,
        mediaId: show.id,
      })
      res.status(200).json(`Deleted episodes ${deletedMedia}`);
    } else {
      const deletedMedia = await deleteManyUserMediaItemService({
        userId,
        mediaId: show.id,
      })
      res.status(200).json(deletedMedia)
    }
  } catch (error) {
    res.status(500).json(error);
  }
}

export const getWatchedEpisodesFromUser = async (req: Request, res: Response) => {
  try {
    const tmdbId: string = req.params.tmdbId
    const userId: string = res.locals.user.id
    const season = req.params.season as string | undefined
    const userMediaItem = await prisma.$transaction([
      prisma.userMediaItem.findMany({
        where: {
          userId,
          mediaItem: {
            tmdbId,
          },
          season: season ? { seasonNumber: Number(season) } : undefined,
          watched: true,
        },
        include: {
          episode: true,
          season: true,
        },
        orderBy: {
          episode: {
            episodeNumber: 'asc'
          }
        }
      }),
      prisma.userMediaItem.groupBy({
        by: ['seasonId'],
        where: {
          userId,
          mediaItem: {
            tmdbId,
          },
          watched: true,
        },
        _count: {
          episodeId: true,
        },
        orderBy: undefined,
      }) as any
    ]);
    if (userMediaItem[0].length === 0) {
      res.status(404).json('No episodes found')
      return;
    }
    const groupedBySeason: { season: any, episodes: any[], count: number }[] = [];
    userMediaItem[0].forEach((markedItem: any) => {
      if (groupedBySeason[markedItem.season.seasonNumber]) {
        const markedItemWihoutSeason = { ...markedItem };
        delete markedItemWihoutSeason.season;
        groupedBySeason[markedItem.season.seasonNumber].episodes.push(markedItemWihoutSeason);
      } else {
        const markedItemWihoutSeason = { ...markedItem };
        delete markedItemWihoutSeason.season;
        const countEpisodes: any = userMediaItem[1].find((seasonCount: any) => seasonCount?.seasonId === markedItem.season.id)?._count
        groupedBySeason[markedItem.season.seasonNumber] = {
          season: markedItem.season,
          episodes: [markedItemWihoutSeason],
          count: countEpisodes?.episodeId
        };
      }
    })
    res.status(200).json(groupedBySeason)
  } catch (error) {
    res.status(500).json(error)
  }
}
