import { StaticImageData } from "next/image";

export interface Course {
  id: string;
  name: string;
}

export interface Project {
  title: string;
  description: string;
  image: StaticImageData;
  tools: string[];
  github?: string;
  preview?: string;
}
