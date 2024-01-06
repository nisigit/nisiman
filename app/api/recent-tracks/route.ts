import { recentTracks } from "@/app/lib/spotify";

export async function GET(_req: Request, res: Response) {
  const response = await recentTracks();
  const data = await response.json();

  if (!data || !data.items) {
    return Response.json({}, { status: response.status });
  }

  const tracks = data.items.map((track: any) => {
    const title = track?.track?.name;
    const artist = track?.track?.artists
      ?.map((_artist: any) => _artist.name)
      .splice(0, 2)
      .join(", ");
    const url = track?.context?.external_urls?.spotify;

    return {
      title,
      artist,
      url,
    };
  });

  return Response.json({ tracks: tracks }, { status: 200 });
}
