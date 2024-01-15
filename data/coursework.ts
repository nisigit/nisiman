import { Course } from "@/interfaces/interfaces";

const courses2023_24: Course[] = [
  { id: "INFR11249", name: "Applied Cloud Programming" },
  {
    id: "INFR11225",
    name: "Natural Language Understanding, Generation, and Machine Translation",
  },
  { id: "INFR11239", name: "Principles and Design of IoT Systems" },
  { id: "INFR11088", name: "Extreme Computing" },
  { id: "INFR11223", name: "Machine Learning Practical" },
];

const courses2022_23: Course[] = [
  { id: "INFR10067", name: "Computer Security" },
  { id: "INFR10078", name: "Foundations of Natural Language Processing" },
  { id: "INFR11132", name: "System Design Project" },
  { id: "INFR09051", name: "Informatics Large Practical" },
  { id: "INFR10022", name: "Professional Issues" },
  { id: "INFR10085", name: "Introduction to Mobile Robotics" },
];

const courses2021_22: Course[] = [
  { id: "INFR08010", name: "Informatics 2D - Reasoning and Agents" },
  {
    id: "INFR08026",
    name: "Informatics 2 - Introduction to Algorithms and Data Structures",
  },
  {
    id: "INFR08027",
    name: "Informatics 2C - Introduction to Computer Systems",
  },
  { id: "INFR08030", name: "Foundations of Data Science" },
  { id: "INFR08031", name: "Discrete Mathematics and Probability" },
  {
    id: "INFR08032",
    name: "Informatics 2 - Software Engineering and Professional Practice",
  },
];

const courses2020_21: Course[] = [
  { id: "BUST08026", name: "Introduction to Business" },
  { id: "INFR08025", name: "Informatics 1A - Introduction to Computation" },
  { id: "INFR08029", name: "Informatics 1B - Object Oriented Programming" },
  { id: "MATH08057", name: "Introduction to Linear Algebra" },
  { id: "MATH08058", name: "Calculus and its Applications" },
];

export const allSemesters = [
  { semesterName: "2023-24", courses: courses2023_24 },
  { semesterName: "2022-23", courses: courses2022_23 },
  { semesterName: "2021-22", courses: courses2021_22 },
  { semesterName: "2020-21", courses: courses2020_21 },
];
