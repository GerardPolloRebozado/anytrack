import prisma from "./prisma";

export const upsertGenreService = async (genre: string) => {
    const genreData = await prisma.genre.upsert({
        where: {
            name: genre
        },
        update: {},
        create: {
            name: genre
        }
    });
    return genreData;
}
