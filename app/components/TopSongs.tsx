"use client";
import React, { useEffect, useState } from "react";

interface Track {
  title: string;
  artist: string;
  url: string;
  coverImage: Object;
}

function TopSongs() {
  const [tracks, setTracks] = useState<Track[]>([]);

  useEffect(() => {
    fetch("/api/spotify")
      .then((res) => res.json())
      .then((data) => {
        const tracks: Track[] = data.map((track: any) => ({
          title: track.title,
          artist: track.artist,
          url: track.url,
          coverImage: track.coverImage,
        }));
        setTracks(tracks);
      });
  }, []);

  return (
    <div>
      <h1>Top Songs</h1>
      <ul>
        {tracks.map((track: any, index) => (
          <li key={index}>
            <a href={track.url} target="_blank" rel="noopener noreferrer">
              {track.title} by {track.artist}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopSongs;
