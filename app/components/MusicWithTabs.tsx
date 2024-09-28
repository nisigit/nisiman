"use client";
import { useState, useEffect, useRef } from "react";
import MusicList from "@/app/components/MusicList";
import { Track, Artist } from "@/interfaces/music";

interface TabInfo {
  id: string;
  name: string;
}

const allTabs: TabInfo[] = [
  { id: "recent", name: "Recently Played" },
  { id: "top", name: "Top Tracks" },
  { id: "artists", name: "Top Artists" },
];

interface MusicWithTabsProps {
  topTracks: Track[];
  recentTracks: Track[];
  topArtists: Artist[];
}

export default function MusicWithTabs({
  topTracks,
  recentTracks,
  topArtists,
}: MusicWithTabsProps) {
  const [activeTab, setActiveTab] = useState("recent");
  const tabsRef = useRef<(HTMLElement | null)[]>([]);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  useEffect(() => {
    const activeTabIndex = allTabs.findIndex((tab) => tab.id === activeTab);
    if (activeTabIndex === -1) return;

    const setTabPosition = () => {
      const currentTab = tabsRef.current[activeTabIndex] as HTMLElement;
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    };

    setTabPosition();

    const handleResize = () => {
      setTabPosition();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [activeTab]);

  const renderActiveList = () => {
    switch (activeTab) {
      case "recent":
        return <MusicList type="recent" list={recentTracks} />;
      case "top":
        return <MusicList type="top" list={topTracks} />;
      case "artists":
        return <MusicList type="artist" list={topArtists} />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="w-full md:px-2 flex flex-col items-center my-3">
        <div className="flew-row relative mx-auto flex h-12 rounded-3xl border border-white/40 bg-slate-300 dark:border-black/40 dark:bg-neutral-800 px-2 backdrop-blur-sm">
          <span
            className="absolute bottom-0 top-0 -z-10 flex overflow-hidden rounded-3xl py-1 transition-all duration-300"
            style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
          >
            <span className="h-full w-full rounded-3xl bg-green-700 dark:text-green-600" />
          </span>
          {allTabs.map((tab, index) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={index}
                ref={(el) => {
                  tabsRef.current[index] = el;
                }}
                className={`${
                  isActive
                    ? `text-white`
                    : `hover:text-neutral-600 dark:hover:text-neutral-300`
                } my-auto cursor-pointer select-none rounded-full px-4 text-center font-light text-xs md:text-md md:font-semibold transition duration-200`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.name}
              </button>
            );
          })}
        </div>
        <div className="mt-3 w-full">{renderActiveList()}</div>
      </div>
    </>
  );
}
