import ScrollToTop from "./ScrollToTop";

export default function Footer() {
  return (
    <div className="p-3 m-3 sm:m-6 lg:mx-8 lg:my-4 text-center border-t-4 border-slate-700">
      <span className=" text-md underline text-blue-600 cursor-pointer block mb-3">
        <a href="https://drive.google.com/file/d/1wNBd0Fis1hNJSgiGqouNyU3Oc7QJYHzu/view?usp=drive_link">
          Download Resume
        </a>
      </span>
      <p className="text-xs text-slate-400">
        © Nisiman 2024. All Rights Reserved
      </p>
      <a
        href="https://github.com/nisigit/nisigit.github.io"
        target="_blank"
        rel="noreferrer noopener"
      >
        <p className="text-sm">Built with ❤️ using Next.js and Tailwind CSS</p>
      </a>
      <ScrollToTop />
    </div>
  );
}
