import { Prisma } from "@prisma/client";
import prisma from "./prisma";

export const createShowService = async (show: Prisma.MediaItemCreateInput) => {
    return await prisma.mediaItem.create({
        data: show
    })
}
