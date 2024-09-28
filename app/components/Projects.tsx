"use client";
import { useState, useEffect, useRef } from "react";
import { Project } from "@/interfaces/interfaces";
import { projects } from "@/data/projects";
import { FiArrowDown } from "react-icons/fi";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [initialMaxHeight, setInitialMaxHeight] = useState("0px");
  const projectsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    calculateInitialMaxHeight();
  }, []);

  const calculateInitialMaxHeight = () => {
    const projectsDiv = projectsContainerRef.current;
    if (!projectsDiv?.children) return;
    const children = Array.from(projectsDiv?.children);
    if (children.length > 1) {
      const totalHeight = children.slice(0, 1).reduce((sum, child) => {
        return (
          sum +
          (child as HTMLElement).offsetHeight +
          parseInt(window.getComputedStyle(child).marginBottom, 10)
        );
      }, 0);
      setInitialMaxHeight(`${totalHeight}px`);
      projectsDiv.style.maxHeight = `${totalHeight}px`;
    }
  };

  const expandDiv = () => {
    const projectsDiv = projectsContainerRef.current;
    if (!projectsDiv) return;
    if (!isExpanded) {
      projectsDiv.style.maxHeight = "4000px";
    } else {
      projectsDiv.style.maxHeight = initialMaxHeight;
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
          className="p-2 font-bold text-black dark:text-white text-lg cursor-pointer transform transition-colors duration-600 rounded-md bg-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700 dark:bg-slate-800 bg-opacity-25 duration-200"
          aria-label="Expand projects"
        >
          <FiArrowDown
            className={`fa-lg transform transition-transform ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>
      <div
        className="projects-cards w-full flex flex-wrap justify-center overflow-hidden transition-max-height duration-500 ease-in-out gap-5"
        ref={projectsContainerRef}
      >
        {projects.map((project: Project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
      <div className="flex justify-center w-full m-2">
        <button
          onClick={expandDiv}
          className="expand text-black font-semibold dark:text-white text-sm w-fit rounded p-2 mt-2 cursor-pointer bg-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700 dark:bg-slate-800 bg-opacity-25 duration-200"
        >
          {isExpanded ? "Show less" : "Show more..."}
        </button>
      </div>
    </div>
  );
}
