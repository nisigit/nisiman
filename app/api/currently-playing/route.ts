import { NextApiRequest, NextApiResponse } from "next";
import { currentlyPlaying } from "../../lib/spotify";

export async function GET(_req: NextApiRequest, res: NextApiResponse) {
  const response = await currentlyPlaying();

  if (response.status === 204 || response.status > 400) {
    return Response.json({ status: 200, isPlaying: false });
  }

  const song = await response.json();

  if (song.item === null) {
    return Response.json({ status: 200, isPlaying: false });
  }

  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists.map((artist: any) => artist.name).join(", ");
  const album = song.item.album.name;
  const songUrl = song.item.external_urls.spotify;

  return Response.json({
    status: 200,
    album,
    artist,
    isPlaying,
    songUrl,
    title,
  });
}
