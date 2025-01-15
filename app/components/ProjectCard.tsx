import Image from "next/image";
import Link from "next/link";
import { Project } from "@/interfaces/interfaces";
import { FaGithub } from "react-icons/fa";
import { FiLink } from "react-icons/fi";

export default function ProjectCard(project: Project) {
  return (
    <div className="flex flex-col lg:flex-row lg:min-h-[280px] lg:items-center bg-slate-200 text-slate-900 dark:bg-gray-800 dark:text-white p-4 lg:p-6 rounded-lg my-1 overflow-hidden w-full gap-4 transition-all duration-300 ease-in-out">
      <div className="flex-shrink-0 flex justify-center items-center lg:justify-start lg:items-start lg:w-2/5">
        <Image
          src={project.image}
          alt={project.title}
          className="rounded-lg overflow-hidden max-h-[300px] max-w-[350px]"
        />
      </div>
      <div className="flex-1">
        <h2 className="text-xl font-bold mb-2">{project.title}</h2>
        <p className="text-gray-700 dark:text-gray-400 mb-4 text-sm">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tools.map((tag) => (
            <span
              key={tag}
              className="bg-gray-300 dark:bg-gray-900 text-sm dark:text-gray-300 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4 my-2">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-5 h-5"
              aria-label={`View ${project.title} on GitHub`}
            >
              <FaGithub className="w-5 h-5 text-gray-700 hover:text-black dark:text-gray-400 dark:hover:text-white hover:scale-105 transition-all duration-300 ease-in-out" />
            </Link>
          )}
          {project.preview && (
            <Link
              href={project.preview}
              target="_blank"
              rel="noopener noreferrer"
              className="w-5 h-5"
              aria-label={`View ${project.title} on GitHub`}
            >
              <FiLink className="w-5 h-5 text-gray-700 hover:text-black dark:text-gray-400 dark:hover:text-white hover:scale-105 transition-all duration-300 ease-in-out" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
