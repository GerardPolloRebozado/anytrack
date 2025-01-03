import igdb from 'igdb-api-node';
import { Cover, Genre } from 'igdb-api-types';
import prisma from '../prisma';
import { VGameExpanded } from '@anytrack/types';
import { bearerToken } from './igdbAuth';

export const getManyVGameGenreService = async () => {
  await bearerToken.checkToken();
  const genre = await igdb().fields(['id', 'name']).request('/genres');
  return genre.data;
};

export const getVGameGenreByIdService = async (id: number) => {
  const genreDb = await prisma.gameGenre.findUnique({
    where: {
      id,
    },
  });
  if (genreDb) {
    return genreDb;
  }
  await bearerToken.checkToken();
  const genre = await igdb()
    .fields(['id', 'name'])
    .where(`id = ${id}`)
    .request('/genres');
  return await prisma.gameGenre.create({
    data: {
      id: genre.data[0].id,
      name: genre.data[0].name,
    },
  });
};

export const getVGameCoverService = async (id: number) => {
  await bearerToken.checkToken();
  const res = await igdb()
    .fields(['image_id'])
    .where(`id = ${id}`)
    .request('/covers');
  const cover = res.data[0] as Cover;
  cover.url = `https://images.igdb.com/igdb/image/upload/t_cover_big_2x/${await cover.image_id}.jpg`;
  return cover;
};

export const getVGameByIdService = async (
  id: number,
  lessData
): Promise<VGameExpanded> => {
  await bearerToken.checkToken();
  let gamesQuery;
  switch (lessData) {
    case false: {
      gamesQuery = igdb()
        .query('games', 'games-expanded')
        .fields([
          'name',
          'cover.image_id',
          'cover.height',
          'cover.width',
          'summary',
          'genres.id',
          'genres.name',
          'first_release_date',
          'total_rating',
          'total_rating_count',
          'category',
          'parent_game',
          'status',
          'updated_at',
          'dlcs.name',
          'dlcs.cover.image_id',
          'dlcs.cover.height',
          'dlcs.cover.width',
          'dlcs.summary',
          'dlcs.first_release_date',
          'dlcs.total_rating',
          'dlcs.total_rating_count',
          'dlcs.category',
          'dlcs.parent_game',
          'dlcs.status',
          'dlcs.updated_at',
          'dlcs.involved_companies',
          'dlcs.expansions',
          'dlcs.dlcs',
          'involved_companies.company',
          'involved_companies.developer',
          'involved_companies.porting',
          'involved_companies.publisher',
          'involved_companies.supporting',
          'involved_companies.company.name',
          'involved_companies.company.slug',
          'involved_companies.company.logo.image_id',
          'involved_companies.company.logo.height',
          'involved_companies.company.logo.width',
          'expansions.name',
          'expansions.cover.image_id',
          'expansions.cover.height',
          'expansions.cover.width',
          'expansions.summary',
          'expansions.first_release_date',
          'expansions.total_rating',
          'expansions.total_rating_count',
          'expansions.category',
          'expansions.parent_game',
          'expansions.status',
          'expansions.updated_at',
          'expansions.involved_companies',
          'expansions.dlcs',
          'expansions.expansions',
        ])
        .where(`id = ${id}`);
      break;
    }
    case true: {
      gamesQuery = igdb()
        .query('games', 'games-expanded')
        .fields([
          'name',
          'summary',
          'genres.id',
          'genres.name',
          'first_release_date',
          'total_rating',
          'total_rating_count',
          'category',
          'parent_game',
          'status',
          'cover.image_id',
          'cover.height',
          'cover.width',
        ])
        .where(`id = ${id}`);
      break;
    }
  }
  const res = await igdb().multi([gamesQuery]).request('/multiquery');
  const game: VGameExpanded = res.data[0].result[0];
  game.genresDb = [];

  for (let i = 0; i < game.genres.length; i++) {
    const genre: Genre = game.genres[i] as Genre;
    if (genre.id) {
      game.genresDb.push(await getVGameGenreByIdService(genre.id));
    }
  }
  return await res.data[0].result[0];
};

export const getVGameByNameService = async (search: string) => {
  await bearerToken.checkToken();
  const res = await igdb()
    .search(search)
    .fields(['name', 'cover.image_id', 'first_release_date'])
    .request('/games');
  const manyGames = await res.data;
  return await manyGames;
};
