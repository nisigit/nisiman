import querystring from "querystring";

const getAccessToken = async () => {
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
      ).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  return response.json();
};

export const topTracks = async () => {
  const { access_token } = await getAccessToken();

  const url = new URL("https://api.spotify.com/v1/me/top/tracks");
  const params = { limit: "5" };
  url.search = new URLSearchParams(params).toString();

  return fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const topArtists = async () => {
  const { access_token } = await getAccessToken();

  const url = new URL("https://api.spotify.com/v1/me/top/artists");
  const params = { limit: "5" };
  url.search = new URLSearchParams(params).toString();

  return fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const recentTracks = async () => {
  const { access_token } = await getAccessToken();

  const url = new URL("https://api.spotify.com/v1/me/player/recently-played");
  const params = { limit: "5" };
  url.search = new URLSearchParams(params).toString();

  return fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const currentlyPlaying = async () => {
  const { access_token } = await getAccessToken();

  const url = new URL("https://api.spotify.com/v1/me/player/currently-playing");

  return fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
