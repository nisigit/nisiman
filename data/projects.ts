import { Project } from "@/interfaces/interfaces";
import nisi from "@/public/nisi.jpeg";
import har_app from "@/public/assets/har-app.png";
import venus_mars from "@/public/assets/vnm.png";
import eduplot_interface from "@/public/assets/eduplot-interface.png";
import dronz from "@/public/assets/dronz.png";


export const projects: Project[] = [
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
