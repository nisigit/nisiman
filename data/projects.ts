import { Project } from "@/interfaces/interfaces";
import har_app from "@/public/assets/har-app.png";
import venus_mars from "@/public/assets/vnm.png";
import eduplot_interface from "@/public/assets/eduplot-interface.png";
import dronz from "@/public/assets/dronz.png";

export const projects: Project[] = [
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
  {
    title: "Venus & Mars",
    github: "https://github.com/nisigit/vm-website",
    preview: "https://vnmwebsite.surge.sh/",
    description:
      "Promotional website for a dating app startup (now defunct). I also created React Native components for the app and took part in business meetings and financial model discussions.",
    image: venus_mars,
    tools: ["React"],
  },
  {
    title: "Drone Delivery System",
    github: "https://github.com/nisigit/informatics-large-practical",
    description:
      "A Java application to simulate a drone delivery system for pizzas. I implemented a weighted A* search algorithm to plan an efficient delivery route.",
    image: dronz,
    tools: ["Java", "Maven", "GeoJSON", "GitHub Actions"],
  },
];
