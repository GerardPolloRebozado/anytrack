import { Prisma } from "@prisma/client";
import prisma from "./prisma";

export const findManyUserMediaItemService = async ({ where, include, orderBy }: { where: Prisma.UserMediaItemWhereInput, include?: Prisma.UserMediaItemInclude, orderBy?: Prisma.UserMediaItemOrderByWithRelationInput }) => {
    return await prisma.userMediaItem.findMany({
        where,
        include,
        orderBy,
    })
}


export const deleteOneUserMediaItemService = async (where: Prisma.UserMediaItemWhereUniqueInput, include?: Prisma.UserMediaItemInclude) => {
    return await prisma.userMediaItem.delete({
        where,
        include,
    })
}

export const deleteManyUserMediaItemService = async (where: Prisma.UserMediaItemWhereInput) => {
    return await prisma.userMediaItem.deleteMany({
        where,
    })
}
