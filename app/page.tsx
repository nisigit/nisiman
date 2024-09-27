import Image from "next/image";
import Link from "next/link";
import Socials from "./components/Socials";
import Music from "./components/Music";
import Projects from "./components/Projects";
import dp from "@/public/android-chrome-384x384.png";

export default function Home() {
  return (
    <>
      {/* About Section */}
      <section className="p-4 m-4 sm:m-6 lg:mx-8 lg:my-4 my-2">
        <h2 className="text-lg font-bold leading-tight sm:text-2xl">
          About Me
        </h2>
        <p className="mt-4 text-base">
          Hi there! I&apos;m Nisiman. I&apos;m a Software Engineer from New
          Delhi, currently based in London. I have a demonstrated history of
          working with distributed systems, microservices and financial data
          feeds. My interests are in the fields of Machine Learning, Distributed
          Systems and building scaleable applications. You can download my
          resume{" "}
          <Link
            href="https://drive.google.com/file/d/1wNBd0Fis1hNJSgiGqouNyU3Oc7QJYHzu/view?usp=drive_link"
            className="text-blue-500 underline hover:text-blue-600 duration-100"
            target="_blank"
          >
            here
          </Link>
          .
        </p>

        <p className="mt-4 text-base">
          I graduated from The University of Edinburgh in July 2024 with a
          degree in Computer Science. Before going to Edinburgh, I was a student
          at The Mother&apos;s International School, New Delhi. In my free time,
          I like working out and playing chess. I also enjoy music and can play
          the <i>Bansuri</i> and a bit of guitar. My favourite musicians include
          Daft Punk
          <Image className="inline m-0" src={dp} alt="dp" height={25} /> and
          Foster The People.
        </p>
      </section>

      {/* Projects */}
      <section className="p-4 m-4 sm:m-6 lg:mx-8 lg:my-4">
        <Projects />
      </section>

      {/* Contact */}
      <section className="px-4 py-6 m-4 sm:m-6 lg:mx-8 lg:my-4 my-2">
        <h2 className="text-xl font-bold leading-tight sm:text-2xl">Contact</h2>
        <p className="mt-2 text-base">
          The best way to reach me is to send me an email at{" "}
          <a
            href="mailto:nisimanbhardwaj29@gmail.com"
            className="text-blue-500 underline hover:text-blue-600 duration-100"
            target="_blank"
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
