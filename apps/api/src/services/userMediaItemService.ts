import { Prisma } from "@prisma/client";
import prisma from "./prisma";

export const getManyUserMediaItemService = async (where: Prisma.UserMediaItemWhereInput) => {
    return await prisma.userMediaItem.findMany({
        where,
        include: {
            mediaItem: true
        }
    })
}

export const getOneUserMediaItemService = async (where: Prisma.UserMediaItemWhereUniqueInput) => {
    return await prisma.userMediaItem.findUnique({
        where,
    })
}

export const deleteOneUserMediaItemService = async (where: Prisma.UserMediaItemWhereUniqueInput) => {
    return await prisma.userMediaItem.delete({
        where,
    })
}
