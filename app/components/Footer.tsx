import Link from "next/link";
import ScrollToTop from "./ScrollToTop";

export default function Footer() {
  return (
    <footer className="p-3 m-3 sm:m-6 lg:mx-8 lg:my-4 text-center border-t-4 border-neutral-300 dark:border-slate-700">
      <span className=" text-md underline text-blue-600 cursor-pointer block mb-3">
        <Link
          href="https://drive.google.com/file/d/1wNBd0Fis1hNJSgiGqouNyU3Oc7QJYHzu/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </Link>
      </span>
      <p className="text-xs text-slate-700 dark:text-slate-400">
        © Nisiman 2024. All Rights Reserved
      </p>
      <Link
        href="https://github.com/nisigit/nisigit.github.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="text-sm">Built with ❤️ using Next.js and Tailwind CSS</p>
      </Link>
      <ScrollToTop />
    </footer>
  );
}
