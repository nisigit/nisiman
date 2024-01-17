import Image from "next/image";
import Link from "next/link";
import Socials from "./components/Socials";
import Music from "./components/Music";
import dp from "@/public/android-chrome-512x512.png";

export default function Home() {
  return (
    <>
      {/* About Section */}
      <section className="p-4 m-4 sm:m-6 lg:mx-8 lg:my-4 my-2">
        <h2 className="text-lg font-bold leading-tight sm:text-2xl">
          About Me
        </h2>
        <p className="mt-4 text-base">
          Hi there! I&apos;m Nisiman, a final year BEng(Hons) Computer Science
          student at The University of Edinburgh and an ex-student of The
          Mother&apos;s International School, New Delhi.
        </p>
        <p className="mt-4 text-base">
          I&apos;m mainly interested in Software and Web Development, Machine
          Learning, Distributed Systems and Parallel Computing. I&apos;m
          currently doing my undergraduate honours project on using statistical
          methods for generating synthetic data.
        </p>
        <p className="mt-4 text-base">
          My favourite musicians are Daft Punk
          <Image className="inline m-1" src={dp} alt="dp" height={25} />, Pink
          Floyd and Portugal. The Man. In my free time, I like playing the{" "}
          <i>Bansuri</i>, playing chess, and exercising.
        </p>
      </section>

      {/* Learning */}
      <section className="px-4 py-6 m-4 sm:m-6 lg:mx-8 lg:my-4 my-2">
        <h2 className="text-xl font-bold leading-tight sm:text-2xl">
          Learning
        </h2>
        <p className="mt-2 text-base">
          I&apos;m currently taking modules on Extreme Computing, Principles and
          Design of IoT Systems and Machine Learning (coursework{" "}
          <Link
            href="/coursework"
            className="text-blue-500 underline hover:text-blue-600 duration-100"
          >
            here
          </Link>
          ). I am also learning Rust in my spare time by working on a few side
          projects.
        </p>
      </section>

      {/* Contact */}
      <section className="px-4 py-6 m-4 sm:m-6 lg:mx-8 lg:my-4 my-2">
        <h2 className="text-xl font-bold leading-tight sm:text-2xl">Contact</h2>
        <p className="mt-2 text-base">
          The best way to reach me is to send me an email at{" "}
          <a
            href="mailto:nisimanbhardwaj29@gmail.com"
            className="text-blue-600 underline"
          >
            nisimanbhardwaj29@gmail.com
          </a>
          .<br></br>
          Alternatively, you can connect with me on any of my socials:{" "}
        </p>
        <Socials />
      </section>

      {/* Music */}
      <section className="px-4 py-6 m-4 sm:m-6 lg:mx-8 lg:my-4 my-2">
        <h2 className="text-xl font-bold leading-tight sm:text-2xl">Music</h2>
        <p className="mt-2 text-base">
          Here&apos;s what I&apos;m listening to right now:
        </p>
        <Music />
      </section>
    </>
  );
}
