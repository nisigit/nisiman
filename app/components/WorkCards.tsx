import React from "react";
import { FaLink, FaCalendar } from "react-icons/fa";

interface WorkCardProps {
  head: string;
  dates: string;
  description: string;
  colour: string;
  link: string;
}

const workCards: WorkCardProps[] = [
  {
    colour: "#212d40",
    head: "Addepar",
    link: "https://addepar.com/",
    dates: "06/2023 - 08/2023",
    description:
      "Software Engineer Intern in the Feeds Infrastructure & Tooling team. I developed an environment, and its data feed, to synthesise dummy investment portfolios and transactions based on configurations to demonstrate the platform's features to prospective clients.",
  },
  {
    colour: "#bc4749",
    head: "EUFS",
    link: "https://eufs.co/",
    dates: "10/2022 - 08/2023",
    description:
      "Software Developer in Edinburgh University Formula Student's simulation team, working on the open-source simulation software for Formula Student driverless cars (eufs_sim). ",
  },
  {
    colour: "#1d3557",
    head: "University of Edinburgh ",
    link: "https://www.ed.ac.uk/information-services/about",
    dates: "06/2022 - 04/2023",
    description:
      "Web Developer in the Information Services Group, where I helped with CMS migration and developed a full-stack live status dashboard for the University's websites using Laravel.",
  },
  {
    colour: "#004e89",
    head: "Endeavour",
    link: "https://www.endeavourockets.com/",
    dates: "09/2021 - 05/2022",
    description:
      "Developer in the Darwin III rocket's software team, where I developed the local and online dashboards to read the rocket's telemetry data in real-time and update its state.",
  },
  {
    colour: "#bd632f",
    head: "Tech Mahindra",
    link: "https://www.techmahindra.com/",
    dates: "05/2021 - 08/2021",
    description:
      "Full-stack Software Engineer Intern (trainee) in Delhi Police's CCTNS portal project. I added new search pages on the Java EE application to dynamically generate MySQL queries and display data using JasperReports.",
  },
  {
    colour: "#720026",
    head: "University of Edinburgh ",
    link: "https://addepar.com/",
    dates: "08/2022-present",
    description:
      "Resident Assistant in the University's accommodation services, facilitating over 300 students settle into university life by organising events and being students' first point of contact for any help.",
  },
];

export default function WorkCards() {
  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-3 m-auto place-items-start">
      {workCards.map((card, index) => (
        <div
          key={index}
          className="w-full sm:h-[200px] py-3 md:py-2 px-4 md:px-3 lg:w-full rounded-xl overflow-hidden shadow-lg transform transition-transform duration-500 hover:-translate-y-1.5 hover:scale-105"
          style={{ backgroundColor: card.colour }}
        >
          <div className="w-full text-md flex flex-row justify-between align-center">
            <a
              target="_blank"
              rel="noreferrer"
              href={card.link}
              className="font-bold inline-block xl:w-3/5 mr-0.5"
            >
              <span>
                {card.head}
                <FaLink className="inline-block text-xs p-0 mx-1" />
              </span>
            </a>
            <div>
              <span className="text-xs p-0">{card.dates}</span>
            </div>
          </div>

          <div>
            <p className="py-2 text-sm">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
