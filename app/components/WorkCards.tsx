import React from "react";
import { FaLink } from "react-icons/fa";

interface WorkCardProps {
  head: string;
  description: string;
  color: string;
  link: string;
}

const colorToClassname: { [key: string]: string } = {
  sky: "bg-sky-900",
  orange: "bg-orange-700",
  green: "bg-green-500",
};

const WorkCard: React.FC<WorkCardProps> = ({
  color,
  head,
  description,
  link,
}) => (
  <div
    className={`w-full h-[120px] lg:text-xs lg:w-full lg:h-[150px] my-3 ${color} rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-500 hover:-translate-y-1.5`}
  >
    <div className="px-6 py-4">
      <p className="text-white text-base">
        <a href={link}>
          <span className="font-bold underline inline-block">{head}</span>
          <FaLink className="inline-block m-1" />
        </a>
        <br />
        {description}
      </p>
    </div>
  </div>
);

export default function WorkCards() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-4 m-auto place-items-start hover:place-items-center">
      <WorkCard
        color={colorToClassname["sky"]}
        head="addepar"
        link="https://addepar.com/"
        description="software engineer intern in the feeds infrastructure & tooling team."
      />

      <WorkCard
        color={colorToClassname["orange"]}
        head="EUFS"
        link="https://eufs.co"
        description="Part of the Simulation team for the driverless car"
      />

      <WorkCard
        color={colorToClassname["green"]}
        head="Addepar"
        link="https://addepar.com/"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil."
      />

      <WorkCard
        color={colorToClassname["sky"]}
        head="Addepar"
        link="https://addepar.com/"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,"
      />

      <WorkCard
        color={colorToClassname["orange"]}
        head="Edinburgh University Formula Student"
        link="https://eufs.co"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,"
      />

      <WorkCard
        color={colorToClassname["green"]}
        head="Addepar"
        link="https://addepar.com/"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,"
      />
    </div>
  );
}
