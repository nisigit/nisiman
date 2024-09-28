import Link from "next/link";
import Image from "next/image";
import { Track, Artist, MusicListProps } from "@/interfaces/music";

const renderRelevantRow = (item: Track | Artist, type: string) => {
  if (type === "artist") {
    const artist = item as Artist;
    return (
      <h4 className="text-sm lg:text-lg line-clamp-1 justify-self-center">
        {artist.name}
      </h4>
    );
  } else {
    const track = item as Track;
    return (
      <>
        <h4 className="text-sm lg:text-lg line-clamp-1">{track.title}</h4>
        <h5 className="text-xs line-clamp-1">{track.artist}</h5>
      </>
    );
  }
};

export default function MusicList({ type, list }: MusicListProps) {
  return (
    <div className="w-full">
      {list.map((item: Track | Artist, index: number) => (
        <Link
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-full flex items-center gap-4 h-[68px] px-2 rounded-sm font-semibold group hover:bg-green-200 dark:hover:bg-green-900 hover:bg-opacity-30 dark:hover:bg-opacity-20 hover:text-green-600 dark:hover:text-green-500">
            <div className="flex items-center gap-1 shrink-0">
              <span className="text-lg select-none w-6 text-right">
                {index + 1}.
              </span>
              <Image
                src={item.image}
                width={40}
                height={40}
                alt="item logo"
                className="rounded-md group-hover:opacity-70"
              />
            </div>
            <div className="flex flex-col justify-center transition-transform duration-500 sm:group-hover:translate-x-2 overflow-hidden flex-grow">
              {renderRelevantRow(item, type)}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
