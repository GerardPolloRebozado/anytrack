import igdb from "igdb-api-node";
import { Game } from "igdb-api-types";
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


export const getVGameByIdService = async (id: number) => {
  await checkExpiration();
  const res = await igdb().fields(['name', 'cover', 'summary', 'platforms', 'genres', 'release_dates']).where(`id = ${id}`).request('/games');
  const game: Game = await res.data[0];
  return game
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
  const cover = await igdb().fields(['image_id']).where(`id = ${id}`).request('/covers');
  const url = `https://images.igdb.com/igdb/image/upload/t_cover_big_2x/${await cover.data[0].image_id}.jpg`
  return url;
}
