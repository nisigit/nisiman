import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import nisi from "@/public/nisi.jpeg";
import har_app from "@/public/har-app.png";
import venus_mars from "@/public/vnm.png";
import eduplot_interface from "@/public/eduplot-interface.png";
import dronz from "@/public/dronz.png";

interface Project {
  title: string;
  description: string;
  link: string;
  image: StaticImageData;
  tools: string[];
}

const projects: Project[] = [
  {
    title: "Activity Recognition App",
    link: "https://github.com/nisigit/HAR-App",
    description:
      "Android app to parse live movement data from Nordic Thingy and Respeck sensors using Bluetooth Low Energy. Deployed a TensorFlow model using TFLite to classify 44 stationary and dynamic activities with 97% accuracy.",
    image: har_app,
    tools: ["Android", "Kotlin", "TensorFlow", "Keras", "Python"],
  },
  {
    title: "EduPlot",
    link: "https://drive.google.com/file/d/146SCOIkLFP_fy7PF2nuTWvkp3_y5F_Hi/view",
    description:
      "Robot that plots SVGs and inputs from a drawing tablet onto a whiteboard. I used React, Flask and Firebase to develop the full-stack web interface, with an interactive canvas, which also sends data to the robot using web sockets.",
    image: eduplot_interface,
    tools: [
      "React",
      "Material UI",
      "Firebase",
      "Python (Flask)",
      "Web Sockets",
    ],
  },
  {
    title: "Drone Delivery System",
    link: "https://github.com/nisigit/informatics-large-practical",
    description:
      "Java application to simulate a drone delivery system for pizzas. I implemented a weighted A* search algorithm to plan an efficient delivery route.",
    image: dronz,
    tools: ["Java", "Jackson", "JUnit", "Maven", "GeoJSON", "GitHub Actions"],
  },
  {
    title: "Venus & Mars",
    link: "https://vnmwebsite.surge.sh/",
    description: "React webpage for a dating app startup.",
    image: venus_mars,
    tools: ["React", "HTML/CSS", "Font Awesome"],
  },
];

export default function ProjectCards() {
  return (
    <div className="my-2 grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-2 m-auto">
      {projects.map((project: Project) => (
        <Link
          key={project.title}
          href={project.link}
          className="cursor-pointer group"
        >
          <div className="overflow-hidden shadow-lg rounded-xl">
            <div className="bg-gray-800 relative">
              <Image
                className="h-[250px] object-contain opacity-40 bg-slate-300"
                src={project.image}
                alt="Project 1"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-600"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-white text-lg font-bold">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm hidden group-hover:block">
                  {project.description}
                </p>
              </div>
            </div>
            <div className="p-4 lg:h-[80px] bg-gray-700 text-sm flex flex-wrap">
              {project.tools.map((tool, index) => (
                <span key={index}>
                  {<span className="text-gray-300 mx-1">•</span>}
                  <span className="text-gray-300">{tool}</span>
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
