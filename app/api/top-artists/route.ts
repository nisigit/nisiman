import { topArtists } from "@/app/lib/spotify";

export async function GET() {
  const response = await topArtists();
  const { items } = await response.json();

  if (response.status !== 200 || items === null) {
    return Response.json({}, { status: response.status });
  }

  const artists = items.map((artist: any) => ({
    name: artist.name,
    url: artist.external_urls.spotify,
  }));

  return Response.json({ artists: artists }, { status: 200 });
}
