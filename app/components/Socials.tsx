import { IconType } from "react-icons";
import { FaInstagram, FaLinkedin, FaGithub, FaSpotify } from "react-icons/fa";

interface SocialButton {
  color: string;
  Icon: IconType;
  text: string;
  href: string;
}

const socialButtons: SocialButton[] = [
  {
    color: "bg-gray-700",
    Icon: FaGithub,
    text: "GitHub",
    href: "https://github.com/nisigit",
  },
  {
    color: "bg-blue-600",
    Icon: FaLinkedin,
    text: "LinkedIn",
    href: "https://www.linkedin.com/in/nisiman",
  },
  {
    color: "bg-pink-600",
    Icon: FaInstagram,
    text: "Instagram",
    href: "https://www.instagram.com/nisigrit",
  },
  {
    color: "bg-green-500",
    Icon: FaSpotify,
    text: "Spotify",
    href: "https://open.spotify.com/user/nd1vzwwybrvjr7e7q9s52qwsn",
  },
];

export default function Socials() {
  return (
    <>
      <p className="mt-2 w-4/5">
        The best way to reach me is to send me an email at{" "}
        <a className="underline text-blue-600" href="mailto:nisimanbhardwaj29@gmail.com">
          nisimanbhardwaj29@gmail.com
        </a>
        . Alternatively, you can connect with me on any of my socials:{" "}
      </p>
      <div className="my-6 lg:my-3 flex-wrap flex-row">
        {socialButtons.map((button, index) => (
          <a
            href={button.href}
            key={index}
            target="_black"
            rel="noopener noreferrer"
          >
            <button
              className={`${button.color} bg-opacity-80 mr-4 mb-2 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded transform transition-transform duration-200 hover:-translate-y-1`}
            >
              <button.Icon className="w-5 h-5 fill-current" />
              <span>{button.text}</span>
            </button>
          </a>
        ))}
      </div>
    </>
  );
}
