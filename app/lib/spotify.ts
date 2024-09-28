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
    cache: "no-store",
  });

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return response.json();
};

export const getRecentTracks = async (listLimit: Number) => {
  const { access_token } = await getAccessToken();
  const url = new URL("https://api.spotify.com/v1/me/player/recently-played");
  const params = { limit: "5" };
  url.search = new URLSearchParams(params).toString();

  const response = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    cache: "no-store",
  });

  const data = await response.json();

  return data.items.slice(0, listLimit).map((item: any) => {
    return {
      artist: item.track.artists
        .slice(0, 2)
        .map((artist: any) => artist.name)
        .join(", "),
      title: item.track.name,
      image: item.track.album.images[0].url,
      url: item.track.external_urls.spotify,
    };
  });
};

export const getTopTracks = async (listLimit: Number) => {
  const { access_token } = await getAccessToken();

  const url = new URL("https://api.spotify.com/v1/me/top/tracks");
  const params = {
    time_range: "short_term",
    limit: "5",
  };
  url.search = new URLSearchParams(params).toString();

  const response = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const data = await response.json();

  return data.items.slice(0, listLimit).map((track: any) => {
    return {
      title: track.name,
      artist: track.artists.map((_artist: any) => _artist.name).join(", "),
      image: track.album.images[0].url,
      url: track.external_urls.spotify,
    };
  });
};

export const getTopArtists = async (listLimit: Number) => {
  const { access_token } = await getAccessToken();

  const url = new URL("https://api.spotify.com/v1/me/top/artists");
  const params = {
    time_range: "short_term",
    limit: "5",
  };
  url.search = new URLSearchParams(params).toString();

  const response = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const data = await response.json();

  return data.items.slice(0, listLimit).map((artist: any) => {
    return {
      name: artist.name,
      image: artist.images[0].url,
      url: artist.external_urls.spotify,
    };
  });
};

export const getCurrentlyPlaying = async () => {
  const { access_token } = await getAccessToken();

  const url = new URL("https://api.spotify.com/v1/me/player/currently-playing");

  const response = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    cache: "no-store",
  });

  if (response.status === 204 || response.status > 400) {
    return null;
  }

  const data = await response.json();

  if (!data.is_playing) {
    return null;
  }

  return {
    artist: data.item.artists.map((artist: any) => artist.name).join(", "),
    title: data.item.name,
    image: data.item.album.images[0].url,
    url: data.item.external_urls.spotify,
  };
};
