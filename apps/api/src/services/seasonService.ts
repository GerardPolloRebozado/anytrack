
import { type Prisma } from "@prisma/client";
import prisma from "./prisma";

export const saveSeasonService = async (season: Prisma.SeasonCreateInput) => {
  return await prisma.season.create({
    data: season
  })
}

export const getSeasonsService = async (where: Prisma.SeasonWhereInput) => {
  return await prisma.season.findMany({
    where,
  })
}

export const getSeasonService = async (where: Prisma.SeasonWhereUniqueInput, includeEpisodes = false) => {
  return await prisma.season.findUnique({
    where,
    include: {
      episodes: includeEpisodes ? true : false,
      mediaItem: true
    }
  })
}

export const getSeasonByNumberService = async (where: Prisma.SeasonWhereInput, includeEpisodes = false) => {
  return await prisma.season.findFirst({
    where,
    include: {
      episodes: includeEpisodes
    }
  })
}

export const upsertSeason = async (where: Prisma.SeasonWhereUniqueInput, update: Prisma.SeasonUpdateInput, create: Prisma.SeasonCreateInput) => {
  return await prisma.season.upsert({
    where,
    update,
    create,
  })
}
