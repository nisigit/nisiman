import Link from "next/link";
import {
  getCurrentlyPlaying,
  getRecentTracks,
  getTopArtists,
  getTopTracks,
} from "@/app/lib/spotify";
import { Track, Artist } from "@/interfaces/music";
import MusicWithTabs from "./MusicWithTabs";
import { FaSpotify } from "react-icons/fa";

const listLimit = 5;

export default async function Music() {
  const results = await Promise.allSettled([
    getTopTracks(listLimit).catch((error) => {
      console.error("Error fetching top tracks:", error);
      return [];
    }),
    getRecentTracks(listLimit).catch((error) => {
      console.error("Error fetching recent tracks:", error);
      return [];
    }),
    getTopArtists(listLimit).catch((error) => {
      console.error("Error fetching top artists:", error);
      return [];
    }),
    getCurrentlyPlaying().catch((error) => {
      console.error("Error fetching currently playing track:", error);
      return null;
    }),
  ]);

  const topTracks: Track[] =
    results[0].status === "fulfilled" ? results[0].value : [];

  const recentTracks: Track[] =
    results[1].status === "fulfilled" ? results[1].value : [];

  const topArtists: Artist[] =
    results[2].status === "fulfilled" ? results[2].value : [];

  const currentTrack: Track | null =
    results[3].status === "fulfilled" ? results[3].value : null;

  return (
    <>
      <div className="w-full flex mt-2 text-sm text-slate-200">
        <div className="mr-2">
          <FaSpotify className="inline-block text-green-600 dark:text-green-600 align-middle text-xl" />
        </div>
        <div className="align-text-bottom">
          <p className="text-gray-700 dark:text-gray-200">
            {"Spotify — "}
            {currentTrack ? (
              <>
                <span>Listening to </span>
                <Link
                  href={currentTrack.url}
                  className="underline text-green-600 hover:text-green-500 dark:text-green-500 dark:hover:text-green-600 transition duration-200"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="font-semibold">{currentTrack.title}</span> by{" "}
                  <span className="font-semibold">{currentTrack.artist}</span>
                </Link>
              </>
            ) : (
              "Not playing"
            )}
          </p>
        </div>
      </div>
      <div className="mt-3 w-full flex flex-col items-center text-start">
        <MusicWithTabs {...{ topTracks, recentTracks, topArtists }} />
      </div>
    </>
  );
}
