import { topTracks } from "@/app/lib/spotify";

export async function GET() {
  const response = await topTracks();
  const { items } = await response.json();

  if (items === null) {
    return Response.json({}, { status: response.status });
  }

  const tracks = items
    .filter((track: any) => !track.name.includes("Abrar"))
    .map((track: any) => ({
      title: track.name,
      artist: track.artists.map((_artist: any) => _artist.name).join(", "),
      url: track.external_urls.spotify,
    }));

  return Response.json({ tracks: tracks }, { status: 200 });
}
