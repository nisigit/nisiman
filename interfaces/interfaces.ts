import { StaticImageData } from "next/image";

export interface Course {
  id: string;
  name: string;
}

export interface Project {
  title: string;
  description: string;
  link: string;
  image: StaticImageData;
  tools: string[];
}
