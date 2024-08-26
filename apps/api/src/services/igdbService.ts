import igdb from "igdb-api-node";

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


export const getGameByIdService = async (id: number) => {
  await checkExpiration();
  const game = await igdb().fields(['name', 'cover', 'summary', 'platforms', 'genres', 'release_dates', 'screenshots', 'videos', 'websites']).where(`id = ${id}`).request('/games');
  return game.data;
}

export const getManyGenreService = async () => {
  await checkExpiration();
  const genre = await igdb().fields(['id', 'name']).request('/genres');
  return genre.data;
}

export const getGenreByIdService = async (id: number) => {
  await checkExpiration();
  const genre = await igdb().fields(['id', 'name']).where(`id = ${id}`).request('/genres');
  return genre.data;
}
