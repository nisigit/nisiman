import Link from "next/link";
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
    color: "bg-gradient-to-br from-pink-700 to-purple-600",
    Icon: FaInstagram,
    text: "Instagram",
    href: "https://www.instagram.com/nisigrit",
  },
  {
    color: "bg-green-600",
    Icon: FaSpotify,
    text: "Spotify",
    href: "https://open.spotify.com/user/nd1vzwwybrvjr7e7q9s52qwsn",
  },
];

export default function Socials() {
  return (
    <>
      <div className="mt-6 lg:my-3 flex-wrap flex-row">
        {socialButtons.map((button, index) => (
          <Link
            href={button.href}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className={`${button.color} bg-opacity-90 mr-4 mb-2 p-2 text-white inline-flex items-center space-x-2 rounded transform transition-transform duration-200 hover:-translate-y-1`}
            >
              <button.Icon className="w-5 h-5 fill-current" />
              <span>{button.text}</span>
            </button>
          </Link>
        ))}
      </div>
    </>
  );
}
