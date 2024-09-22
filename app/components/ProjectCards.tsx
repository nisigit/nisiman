"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/interfaces/interfaces";
import { projects } from "@/data/projects";
import { FiArrowDown } from "react-icons/fi";

export default function ProjectCards() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [initialMaxHeight, setInitialMaxHeight] = useState("0px");
  const projectsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    calculateInitialMaxHeight();
  }, []);

  const calculateInitialMaxHeight = () => {
    const div = projectsContainerRef.current;
    if (!div) return;
    if (!div.children) return;
    const children = Array.from(div.children);
    if (children.length > 1) {
      const totalHeight = children.slice(0, 1).reduce((sum, child) => {
        return (
          sum +
          (child as HTMLElement).offsetHeight +
          parseInt(window.getComputedStyle(child).marginBottom, 10)
        );
      }, 0);
      setInitialMaxHeight(`${totalHeight}px`);
      div.style.maxHeight = `${totalHeight}px`;
    }
  };

  const expandDiv = () => {
    const div = projectsContainerRef.current;
    if (!div) return;
    if (!isExpanded) {
      div.style.maxHeight = "4000px"; // A very large max-height to accommodate all items
    } else {
      div.style.maxHeight = initialMaxHeight; // Collapse back to the initial calculated max-height
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="projects-container w-full">
      <div className="flex justify-between items-end h-8 mb-4">
        <h2 className="text-xl font-bold leading-tight sm:text-2xl">
          Projects
        </h2>
        <button
          onClick={expandDiv}
          className="p-2 font-bold text-black dark:text-white text-lg cursor-pointer transform transition-colors duration-600 rounded-md bg-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700 dark:bg-slate-800 bg-opacity-25"
        >
          <FiArrowDown
            className={`fa-lg transform transition-transform ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>
      <div
        className="projects-cards w-full flex flex-wrap justify-center overflow-hidden transition-max-height duration-500 ease-in-out"
        ref={projectsContainerRef}
      >
        {projects.map((project: Project) => (
          <Link
            key={project.title}
            href={project.link}
            className="cursor-pointer group"
          >
            <div className="overflow-hidden shadow-lg rounded-xl mt-4 lg:max-w-lg">
              <div className="dark:bg-gray-800 relative">
                <Image
                  className="h-[250px] object-contain opacity-40 bg-slate-300"
                  src={project.image}
                  alt={project.title}
                />
                <div className="absolute inset-0 dark:bg-black dark:opacity-0 dark:group-hover:opacity-50 transition-opacity duration-600"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="dark:text-white text-lg font-bold">
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
      <div className="flex justify-center w-full m-2">
        <p
          onClick={expandDiv}
          className="expand text-black font-semibold dark:text-white text-sm w-fit rounded p-2 mt-2 cursor-pointer bg-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700 dark:bg-slate-800 bg-opacity-25"
        >
          {isExpanded ? "Show Less" : "Show More"}
        </p>
      </div>
    </div>
  );
}
