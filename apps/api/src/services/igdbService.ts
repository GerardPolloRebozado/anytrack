import igdb from "igdb-api-node";
import { Cover } from "igdb-api-types";
import prisma from "./prisma";

const bearerToken = {
  token: null,
  expiresDate: new Date(),
};

const renewToken = async () => {
  try {
    const response = await fetch(`https://id.twitch.tv/oauth2/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        'client_id': process.env.TWITCH_CLIENT_ID,
        'client_secret': process.env.TWITCH_CLIENT_SECRET,
        'grant_type': 'client_credentials',
      }),
    })
    const data = await response.json();
    if (data.access_token) {
      bearerToken.token = await data.access_token;
      process.env.TWITCH_APP_ACCESS_TOKEN = await data.access_token;
      bearerToken.expiresDate = new Date(new Date().getTime() + data.expires_in * 1000);
      igdb(process.env.TWITCH_CLIENT_ID, process.env.TWITCH_APP_ACCESS_TOKEN);
    } else {
      console.log('Error renewing token');
    }
  } catch (error) {
    console.log(error);
  }
}

const checkExpiration = async () => {
  if (bearerToken.expiresDate < new Date()) {
    await renewToken();
  }
}

export const getManyVGameGenreService = async () => {
  await checkExpiration();
  const genre = await igdb().fields(['id', 'name']).request('/genres');
  return genre.data;
}

export const getVGameGenreByIdService = async (id: number) => {
  const genreDb = await prisma.gameGenre.findUnique({
    where: {
      id,
    }
  });
  if (genreDb) {
    return genreDb;
  }
  await checkExpiration();
  const genre = await igdb().fields(['id', 'name']).where(`id = ${id}`).request('/genres');
  const newGenreDb = await prisma.gameGenre.create({
    data: {
      id: genre.data[0].id,
      name: genre.data[0].name,
    }
  });
  return newGenreDb;
}

export const getVGameCoverService = async (id: number) => {
  await checkExpiration();
  const res = await igdb().fields(['image_id']).where(`id = ${id}`).request('/covers');
  const cover = res.data[0] as Cover
  cover.url = `https://images.igdb.com/igdb/image/upload/t_cover_big_2x/${await cover.image_id}.jpg`
  return cover
}

export const getVGameByIdService = async (id: number, lessData = false) => {
  await checkExpiration()
  let gamesQuery
  switch (lessData) {
    case false: {
      gamesQuery = igdb().query('games', 'games-expanded')
        .fields(['name', 'cover.image_id', 'cover.height', 'cover.width', 'summary', 'genres.id', 'genres.name', 'first_release_date', 'total_rating', 'total_rating_count', 'category', 'parent_game', 'status', 'updated_at',
          'dlcs.name', 'dlcs.cover.image_id', 'dlcs.cover.height', 'dlcs.cover.width', 'dlcs.summary', 'dlcs.first_release_date', 'dlcs.total_rating', 'dlcs.total_rating_count', 'dlcs.category', 'dlcs.parent_game', 'dlcs.status', 'dlcs.updated_at', 'dlcs.involved_companies', 'dlcs.expansions', 'dlcs.dlcs',
          'involved_companies.company', 'involved_companies.developer', 'involved_companies.porting', 'involved_companies.publisher', 'involved_companies.supporting',
          'involved_companies.company.name', 'involved_companies.company.logo.image_id', 'involved_companies.company.logo.height', 'involved_companies.company.logo.width',
          'expansions.name', 'expansions.cover.image_id', 'expansions.cover.height', 'expansions.cover.width', 'expansions.summary', 'expansions.first_release_date', 'expansions.total_rating', 'expansions.total_rating_count', 'expansions.category', 'expansions.parent_game', 'expansions.status', 'expansions.updated_at', 'expansions.involved_companies', 'expansions.dlcs', 'expansions.expansions',
        ])
        .where(`id = ${id}`);
      break;
    }
    case true: {
      gamesQuery = igdb().query('games', 'games-expanded')
        .fields(['name', 'summary', 'genres.id', 'genres.name', 'first_release_date', 'total_rating', 'total_rating_count', 'category', 'parent_game', 'status']).where(`id = ${id}`);
      break;
    }
  }
  const res = await igdb().multi([gamesQuery]).request('/multiquery');
  return await res.data[0].result[0];
}

export const getVGameByNameService = async (search: string) => {
  await checkExpiration()
  const res = await igdb().search(search).fields(['name', 'cover.image_id', 'first_release_date']).request('/games');
  const manyGames = await res.data
  return await manyGames
}