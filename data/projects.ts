import { Project } from "@/interfaces/interfaces";
import har_app from "@/public/assets/har-app.png";
import venus_mars from "@/public/assets/vnm.png";
import eduplot_interface from "@/public/assets/eduplot-interface.png";
import dronz from "@/public/assets/dronz.png";
import schoolseeker from "@/public/assets/schoolseeker.svg";

export const projects: Project[] = [
  {
    title: "SchoolSeeker.in",
    preview: "https://schoolseeker.in",
    description: "Building an all-in-one, AI-powered school admissions portal.",
    image: schoolseeker,
    tools: ["Next.js", "Node.js", "PostgreSQL", "AWS", "TensorFlow"],
  },
  {
    title: "Human Activity Recognition App",
    github: "https://github.com/nisigit/HAR-App",
    description:
      "Android application to parse live movement data from Nordic Thingy and Respeck sensors using Bluetooth. The app also classifies 44 stationary and dynamic activities, including running, hyperventilation, coughing etc., with a 97% accuracy. The TensorFlow classification models use Convolutional Neural Networks and were deployed using TFLite. The app is intended to be used in a hospital setting to record and store activities on multiple patient accounts.",
    image: har_app,
    tools: ["Android", "TensorFlow", "Python", "SQL"],
  },
  {
    title: "EduPlot",
    preview:
      "https://drive.google.com/file/d/146SCOIkLFP_fy7PF2nuTWvkp3_y5F_Hi/view",
    description:
      "EduPlot is a robot that plots SVGs and inputs from a drawing tablet onto a whiteboard. I used React, Flask and Firebase to develop the full-stack web interface, with an interactive canvas, which also sends data to the robot using web sockets.",
    image: eduplot_interface,
    tools: ["React", "Flask", "Python", "Firebase", "Web Sockets"],
  },
];
