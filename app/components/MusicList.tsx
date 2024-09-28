import Link from "next/link";
import { Track, Artist } from "@/interfaces/music";

interface MusicListProps {
  type: "top" | "recent" | "artist";
  list: Track[] | Artist[];
}

export default function MusicList({ type, list }: MusicListProps) {
  return (
    <div className="w-full">
      <h1 className="text-xl mt-1 text-green-700 dark:text-green-600">
        {type === "top"
          ? "Top Tracks (month)"
          : type === "recent"
          ? "Recently Played"
          : "Top Artists (month)"}
      </h1>
      {list.map((item: any, index: number) => (
        <Link
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-full p-2 rounded-sm flex font-semibold group hover:bg-green-200 dark:hover:bg-green-900 hover:bg-opacity-30 dark:hover:bg-opacity-20 hover:text-green-600 dark:hover:text-green-500">
            <h1 className="self-center text-xl select-none mr-3">
              {index + 1}
            </h1>
            <div className="transition-transform duration-500 group-hover:translate-x-2 overflow-hidden">
              {type === "artist" ? (
                <h4 className="text-md line-clamp-1">{item.name}</h4>
              ) : (
                <>
                  <h4 className="text-md line-clamp-1">{item.title}</h4>
                  <h5 className="text-xs line-clamp-1">{item.artist}</h5>
                </>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
