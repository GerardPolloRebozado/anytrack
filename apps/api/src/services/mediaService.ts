import { type Prisma } from "@prisma/client";
import prisma from "./prisma";

export const createMediaService = async (movie: Prisma.MediaItemCreateInput) => {
    return await prisma.mediaItem.create({
        data: movie
    })
}

export const searchMediaService = async (where: Prisma.MediaItemWhereInput) => {
    return await prisma.mediaItem.findFirst({
        where,
    })
}

export const findUniqueMediaService = async (where: Prisma.MediaItemWhereUniqueInput) => {
    return await prisma.mediaItem.findUnique({
        where,
    })
}
