import { topArtists } from "@/app/lib/spotify";

export async function GET() {
  const response = await topArtists();
  const { items } = await response.json();

  const artists = items.map((artist: any) => ({
    name: artist.name,
    url: artist.external_urls.spotify,
  }));

  return Response.json(artists);
}
