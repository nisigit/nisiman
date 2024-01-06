import { recentTracks } from "@/app/lib/spotify";

export async function GET() {
  const response = await recentTracks();
  const { items } = await response.json();

  const tracks = items.map((track: any) => ({
    title: track.track.name,
    artist: track.track.artists
      .map((_artist: any) => _artist.name)
      .splice(0, 2)
      .join(", "),
    url: track.context.external_urls.spotify,
  }));

  return Response.json(tracks);
}
