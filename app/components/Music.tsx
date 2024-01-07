import { FaSpotify } from "react-icons/fa";
import {
  getCurrentlyPlaying,
  getRecentTracks,
  getTopArtists,
  getTopTracks,
} from "../lib/spotify";

interface Track {
  title: string;
  artist: string;
  url: string;
}

interface Artist {
  name: string;
  url: string;
}

const listLimit = 3;

export default async function Music() {
  const topTracks: Track[] = await getTopTracks(listLimit);
  const topArtists: Artist[] = await getTopArtists(listLimit + 1);
  const recentTracks: Track[] = await getRecentTracks(listLimit);
  const currentTrack: Track | null = await getCurrentlyPlaying();

  return (
    <>
      <div className="w-full flex mt-2 text-sm text-slate-200">
        <div className="mr-2">
          <FaSpotify className="inline-block text-green-500 align-middle text-xl" />
        </div>
        <div className="align-text-bottom">
          <p className="">
            {"Spotify — "}
            {currentTrack ? (
              <>
                <span>Playing </span>
                <a
                  href={currentTrack.url}
                  className="underline"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="font-semibold">{currentTrack.title}</span> by{" "}
                  <span className="font-semibold">{currentTrack.artist}</span>
                </a>
              </>
            ) : (
              "Not playing"
            )}
          </p>
        </div>
      </div>
      <div className="mt-3 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
        {/* Recently played */}
        <div className="w-full">
          <h1 className="text-xl my-1">Recently Played</h1>
          {recentTracks.map((track: Track, index) => (
            <a key={index} href={track.url} target="_blank" rel="noreferrer">
              <div className="w-full p-2 rounded-sm flex font-semibold group hover:bg-green-300 hover:bg-opacity-90 hover:text-green-900">
                <h1 className="self-center text-xl select-none mr-3">
                  {index + 1}
                </h1>
                <div className="transition-transform duration-500 group-hover:translate-x-2">
                  <h4 className="text-md line-clamp-1">{track.title}</h4>
                  <h5 className="text-xs font-normal">{track.artist}</h5>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Top Songs */}
        <div className="w-full">
          <h1 className="text-xl my-1">Top Tracks (Month)</h1>
          {topTracks.map((track: Track, index) => (
            <a key={index} href={track.url} target="_blank" rel="noreferrer">
              <div className="w-full p-2 rounded-sm flex font-semibold group hover:bg-green-300 hover:bg-opacity-90 hover:text-green-900">
                <h1 className="self-center text-xl select-none mr-3">
                  {index + 1}
                </h1>
                <div className="transition-transform duration-500 group-hover:translate-x-2">
                  <h4 className="text-md line-clamp-1">{track.title}</h4>
                  <h5 className="text-xs font-normal">{track.artist}</h5>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Top Artists */}
        <div className="w-full">
          <h1 className="text-xl my-1">Top Artists (Month)</h1>
          {topArtists.map((artist: Artist, index) => (
            <a key={index} href={artist.url} target="_blank" rel="noreferrer">
              <div className="w-full p-2 rounded-sm flex font-semibold group hover:bg-green-300 hover:bg-opacity-90 hover:text-green-900">
                <h1 className="self-center text-xl select-none mr-3">
                  {index + 1}
                </h1>
                <div className="transition-transform duration-500 group-hover:translate-x-2">
                  <h4 className="text-md line-clamp-1">{artist.name}</h4>
                  <h5 className="text-xs font-normal">{}</h5>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
