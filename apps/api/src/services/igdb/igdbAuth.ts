import igdb from 'igdb-api-node';

export const bearerToken = {
  token: null,
  expiresDate: new Date(),

  checkToken : async function() {
    if (this.token && new Date() < this.expiresDate) {
      return;
    }
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
}
