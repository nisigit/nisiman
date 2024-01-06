import { currentlyPlaying } from "@/app/lib/spotify";

export async function GET() {
  const response = await currentlyPlaying();

  if (response.status === 204 || response.status > 400) {
    return Response.json({ isPlaying: false }, { status: 200 });
  }
  var albumImageUrl = "";
  var songUrl = "";
  const song = await response.json();
  const isPlaying = song?.is_playing;
  const title = song?.item.name;
  const artist = song?.item.artists
    .map((_artist: any) => _artist.name)
    .join(", ");
  const album = song?.item.album.name;

  if (song?.item.album.images.length > 0) {
    albumImageUrl = song?.item?.album?.images[0]?.url;
  }
  if (song?.item.external_urls) {
    songUrl = song?.item?.external_urls?.spotify;
  }

  if (isPlaying) {
    return Response.json(
      {
        album,
        artist,
        isPlaying,
        songUrl,
        title,
        albumImageUrl,
      },
      { status: 200 }
    );
  } else {
    return Response.json({ isPlaying: false }, { status: 200 });
  }
}
