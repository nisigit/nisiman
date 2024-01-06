import { currentlyPlaying } from "@/app/lib/spotify";

export async function GET() {
  const response = await currentlyPlaying();
  const song = await response.json();

  if (response.status === 204 || response.status > 400 || !song) {
    return Response.json({ isPlaying: false }, { status: 200 });
  }

  if (song.item === null) {
    return Response.json({ isPlaying: false }, { status: 200 });
  }

  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists.map((artist: any) => artist.name).join(", ");
  const album = song.item.album.name;
  const songUrl = song.item.external_urls.spotify;

  return Response.json(
    {
      album,
      artist,
      isPlaying,
      songUrl,
      title,
    },
    { status: 200 }
  );
}
