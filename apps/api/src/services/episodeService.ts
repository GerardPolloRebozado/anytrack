import { type Episode, type Prisma } from "@prisma/client";
import prisma from "./prisma";

export const saveEpisodeService = async (episode: Prisma.EpisodeCreateInput) => {
    return await prisma.episode.create({
        data: episode
    })
}

export const getEpisodesService = async (seasonId: number) => {
    return await prisma.episode.findMany({
        where: {
            seasonId
        }
    })
}

export const getEpisodeService = async (where: Prisma.EpisodeWhereInput) => {
    return await prisma.episode.findFirst({
        where
    })
}

export const markEpisodeService = async ({ episode, userId, watched, watchedDate, mediaId }: { episode: Episode, userId: string, watched: boolean, watchedDate: Date | undefined, mediaId: number }) => {
    const userEpisode = await prisma.userMediaItem.upsert({
        where: {
            unique_user_media_series: {
                userId,
                mediaId,
                seasonId: episode.seasonId,
                episodeId: episode.id
            },
        },
        update: {
            watched,
            watchedDate
        },
        create: {
            userId,
            mediaId,
            seasonId: episode.seasonId,
            episodeId: episode.id,
            watched,
            watchedDate,
        },
    })
    return userEpisode
}

export const upsertEpisodeService = async (where: Prisma.EpisodeWhereUniqueInput, episode: Prisma.EpisodeCreateInput) => {
    return await prisma.episode.upsert({
        where,
        update: episode,
        create: episode
    })
}
