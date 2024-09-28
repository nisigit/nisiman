import { StaticImageData } from "next/image";

export interface Track {
  title: string;
  artist: string;
  url: string;
  image: StaticImageData;
}

export interface Artist {
  name: string;
  url: string;
  image: StaticImageData;
}

export interface MusicListProps {
  type: "top" | "recent" | "artist";
  list: Track[] | Artist[];
}
