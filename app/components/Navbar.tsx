"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeSwitch from "./ThemeSwitch";

export default function Navbar() {
  const [nav, setNav] = useState<Boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const toggleBodyScroll = (nav: Boolean) => {
      if (nav) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    };

    toggleBodyScroll(nav);

    // Cleanup function to reset the overflow when the component unmounts
    return () => {
      toggleBodyScroll(false);
    };
  }, [nav]);

  const links = [
    { name: "home", link: "/" },
    { name: "coursework", link: "/coursework" },
    { name: "cv (web)", link: "/cv" },
  ];

  return (
    <>
      <div className="flex justify-between items-center w-full h-20 px-4 text-white nav">
        <div className="md:hidden">
          <ThemeSwitch />
        </div>
        <ul className="hidden md:flex">
          {links.map((link: any, index: number) => (
            <li
              key={index}
              className={`${
                pathname === link.link
                  ? "underline text-black dark:text-white scale-105"
                  : "text-gray-700 dark:text-gray-400"
              } nav-links px-4 cursor-pointer text-md hover:scale-105 hover:text-black dark:hover:text-white duration-200`}
            >
              <Link href={link.link} rel="canonical noopener noreferrer">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer px-2 z-20 text-black dark:text-white md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul className="z-10 flex flex-col justify-center items-center fixed top-0 left-0 w-full h-screen bg-sky-300 dark:bg-slate-900 text-black dark:text-white">
            {links.map((link: any, index: number) => (
              <li
                key={index}
                className={`${
                  pathname === link.link
                    ? "underline text-black dark:text-white"
                    : "text-gray-800 dark:text-gray-400"
                } px-4 cursor-pointer py-6 text-2xl`}
              >
                <Link
                  onClick={() => setNav(!nav)}
                  href={link.link}
                  rel="canonical noopener noreferrer"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
        <div className="hidden md:block">
          <ThemeSwitch />
        </div>
      </div>
    </>
  );
}
