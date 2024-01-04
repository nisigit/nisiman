import Image from "next/image";
import nisi from "../public/nisi.jpeg";
import WorkCards from "./components/WorkCards";
import Footer from "./components/Footer";
import Socials from "./components/Socials";

export default function Home() {
  return (
    <div className="bg-gray-700 min-h-screen p-4">
      <div className="mx-auto my-10 text-lg lg:w-[1000px] bg-gray-800 text-white rounded-xl shadow-2xl shadow-gray-800 overflow-hidden">
        <div className="p-4 m-4 sm:m-6 lg:m-8 border-slate-700 border-b">
          <div className="flex items-center">
            <Image
              src={nisi}
              alt="Nisiman's profile image"
              width={80}
              height={80}
              className="lg:block rounded-full mr-4"
            />
            <h1 className="text-xl font-bold leading-tight sm:text-4xl">
              Nisiman
            </h1>
          </div>
        </div>

        {/* About section */}
        <div className="p-4 m-4 lg:w-3/4 sm:m-6 lg:mx-8 lg:my-4">
          <h2 className="text-lg font-bold leading-tight sm:text-2xl">About</h2>
          <p className="mt-2">
            Hi there 👋🏼 ! I&apos;m Nisiman, a final year BEng(hons) Computer
            Science student at The University of Edinburgh. I am currently
            writing my dissertation on generating a synthetic email meta
            dataset.
          </p>

          <p className="mt-2">
            My interests lie in Software and Web Development, Machine Learning,
            Distributed/Parallel Computing and Natural Language Processing.
          </p>

          <p className="mt-2">
            In my free time, I like working out, playing chess and listen to
            French House music.
          </p>
        </div>

        {/* Work section */}
        <div className="p-4 m-4 sm:m-6 lg:mx-8 lg:my-4">
          <h2 className="text-lg font-bold leading-tight sm:text-2xl">Work</h2>
          <WorkCards />
        </div>

        {/* Learning */}
        <div className="p-4 m-4 sm:m-6 lg:mx-8 lg:my-4">
          <h2 className="text-lg font-bold leading-tight sm:text-2xl">
            Learning
          </h2>
          <p className="mt-2">
            I&apos;m currently taking modules on Extreme Computing, Principles
            and Designs of IoT Systems and Machine Learning Practical. I am also
            learning Rust in my spare time by working on a few side projects.
          </p>
        </div>

        {/* Contact */}
        <div className="p-4 m-4 sm:m-6 lg:mx-8 lg:my-4 border-slate-700 border-b">
          <h2 className="text-lg font-bold leading-tight sm:text-2xl">
            Contact
          </h2>
          <p className="mt-2">
            Feel free to contact or follow me on any of my socials:{" "}
          </p>
          <Socials />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
