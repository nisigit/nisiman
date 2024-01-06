"use client";
import React, { useEffect, useState } from "react";
import { FaSpotify } from "react-icons/fa";

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

function TopSongs() {
  const [topTracks, setTopTracks] = useState<Track[]>([]);
  const [recentTracks, setRecentTracks] = useState<Track[]>([]);
  const [topArtists, setTopArtists] = useState<Artist[]>([]);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);

  useEffect(() => {
    function fetchRecentTracks() {
      fetch("/api/recent-tracks")
        .then((res) => res.json())
        .then((data) => {
          const tracks: Track[] = data
            .splice(0, listLimit)
            .map((track: any) => ({
              title: track.title,
              artist: track.artist,
              url: track.url,
            }));
          setRecentTracks(tracks);
        })
        .catch((err) => console.log(err));
    }

    function fetchTopTracks() {
      fetch("/api/top-tracks")
        .then((res) => res.json())
        .then((data) => {
          const tracks: Track[] = data
            .splice(0, listLimit)
            .map((track: any) => ({
              title: track.title,
              artist: track.artist,
              url: track.url,
              coverImage: track.coverImage,
            }));
          setTopTracks(tracks);
        })
        .catch((err) => console.log(err));
    }

    function fetchTopArtists() {
      fetch("/api/top-artists")
        .then((res) => res.json())
        .then((data) => {
          const artists: Artist[] = data
            .splice(0, listLimit + 1)
            .map((artist: any) => ({
              name: artist.name,
              url: artist.url,
              coverImage: artist.coverImage,
            }));
          setTopArtists(artists);
        })
        .catch((err) => console.log(err));
    }

    function fetchCurrentTrack() {
      fetch("/api/currently-playing")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.isPlaying) {
            setCurrentTrack({
              title: data.title,
              artist: data.artist,
              url: data.url,
            });
          } else {
            setCurrentTrack(null);
          }
        })
        .catch((err) => console.log(err));
    }

    fetchTopTracks();
    fetchRecentTracks();
    fetchTopArtists();
    fetchCurrentTrack();
  }, []);

  return (
    <>
      <div className="w-full flex mt-2">
        <div className="mr-2">
          <FaSpotify className="inline-block text-green-500 align-middle text-2xl" />
        </div>
        <div className="align-text-bottom">
          <p className="font-semibold">
            {"Spotify - "}
            {currentTrack ? (
              <a href={currentTrack.url}>
                {`Playing ${currentTrack?.title} by ${currentTrack?.artist}`}
              </a>
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
                <h1 className="self-center text-xl select-none mr-2">
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
                <h1 className="self-center text-xl select-none mr-2">
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
                <h1 className="self-center text-xl select-none mr-2">
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

export default TopSongs;
