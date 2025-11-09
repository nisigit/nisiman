import Image from "next/image";
import Link from "next/link";
import Socials from "./components/Socials";
import Music from "./components/Music";
import Projects from "./components/Projects";
import nisi from "@/public/assets/nisi.jpeg";
import dp from "@/public/android-chrome-384x384.png";

export default function Home() {
  return (
    <>
      {/* About Section */}
      <section className="p-4 m-4 sm:m-6 lg:mx-8 lg:my-4 my-2">
        <h2 className="text-lg font-bold leading-tight sm:text-2xl">
          About Me
        </h2>

        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="lg:w-2/5 flex justify-start items-center">
            <Image
              src={nisi}
              alt="Nisiman's Picture"
              className="rounded-full lg:rounded-md w-[150px] lg:w-[250px] my-3"
            />
          </div>
          <div className="lg:w-3/5">
            <p className="mt-4 text-base">
              Hi there! I&apos;m Nisiman. I&apos;m a Software Engineer at
              PolyAI, based in London. I graduated from The University of
              Edinburgh in July 2024 with a first-class honours degree in
              Computer Science. Before Edinburgh, I was a student at The
              Mother&apos;s International School, New Delhi. You can read about
              my experiences in my{" "}
              <Link
                href="https://drive.google.com/file/d/1wNBd0Fis1hNJSgiGqouNyU3Oc7QJYHzu/view?usp=drive_link"
                className="text-blue-500 underline hover:text-blue-600 duration-100"
                rel="noopener noreferrer"
                target="_blank"
              >
                resume
              </Link>
              .
            </p>

            <p className="mt-4 text-base">
              In my free time, you can find me playing a sport or chess. I also
              enjoy music and can play the <i>Bansuri</i> and a bit of guitar.
              My favourite musicians include Daft Punk
              <Image className="inline m-0" src={dp} alt="dp" height={25} /> and
              Foster The People.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-4 py-6 m-4 sm:m-6 lg:mx-8 lg:my-4 my-2">
        <h2 className="text-xl font-bold leading-tight sm:text-2xl">Contact</h2>
        <p className="mt-2 text-base">
          The best way to reach me is to send me an email at{" "}
          <Link
            href="mailto:nisiman2002@gmail.com"
            className="text-blue-500 underline hover:text-blue-600 duration-100"
            rel="noopener noreferrer"
            target="_blank"
          >
            nisiman2002@gmail.com
          </Link>
          .<br></br>
          Alternatively, you can connect with me on any of my socials:{" "}
        </p>
        <Socials />
      </section>

      {/* Projects */}
      <section className="p-4 m-4 sm:m-6 lg:mx-8 lg:my-4">
        <Projects />
      </section>

      {/* Music */}
      <section className="px-4 py-6 m-4 sm:m-6 lg:mx-8 lg:my-4 my-2">
        <h2 className="text-xl font-bold leading-tight sm:text-2xl">Music</h2>
        <p className="mt-2 text-base">
          {"Here's my listening activity on Spotify in the last month:"}
        </p>
        <Music />
      </section>
    </>
  );
}
