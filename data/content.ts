import { title } from "process";

export const contentData = [
  {
    title: "Work Experience",
    items: [
      {
        title: "PolyAI",
        subTitle: "Software Engineer",
        skills: ["Python", "Go"],
        date: "06/2023 - 08/2023",
        description: "Runtime team",
        link: "https://www.poly.ai/",
      },
      {
        title: "Playtech",
        subTitle: "Software Developer",
        skills: ["Python", "Golang", "SQL", "Kafka", "Docker"],
        date: "07/2024 - present",
        description:
          "As a developer in the Sportsbook team, I worked on feature development and maintenance of Playtech's sports betting CMS.",
        link: "https://www.playtech.com/",
      },
      {
        title: "Addepar",
        subTitle: "Software Engineer Intern",
        skills: ["Python", "Java", "Spark", "MySQL"],
        date: "06/2023 - 08/2023",
        description:
          "Software Engineer Intern in the Feeds Infrastructure & Tooling team. I developed an environment, and its data feed, to generate synthetic portfolio positions and transactions based on configurations to demonstrate the platform's features to prospective clients.",
        link: "https://www.addepar.com/",
      },
      {
        title: "Edinburgh University Formula Student",
        subTitle: "Software Developer",
        skills: ["C++", "Python", "ROS", "Gazebo"],
        date: "08/2022 - 08/2023",
        description:
          "Software Developer in Edinburgh University Formula Student's simulation team, working on the open-source simulation software for Formula Student driverless cars (eufs_sim).",
        link: "https://eufs.co/",
      },
      {
        title: "The University of Edinburgh Information Services",
        subTitle: "Web Developer",
        date: "06/2022 - 04/2023",
        skills: ["Laravel", "Drupal", "JavaScript", "SQL", "Docker"],
        description:
          "As a part-time developer, I worked on migrating the university's Drupal CMS to the latest version and developed a full-stack live status dashboard for the University's websites using Laravel.",
        link: "https://www.ed.ac.uk/information-services",
      },
      {
        title: "Endeavour",
        subTitle: "Software Developer",
        skills: ["React", "C++"],
        date: "09/2021 - 05/2022",
        description:
          "Developer in the Darwin III rocket's software team, where I developed the local and online dashboards to read the rocket's telemetry data in real-time and update its state.",
        link: "https://www.endeavourockets.com/",
      },
      {
        title: "Tech Mahindra",
        subTitle: "Software Engineer Intern",
        skills: ["Java", "SpringBoot", "SQL"],
        date: "05/2021 - 08/2021",
        description:
          "Full-stack Software Engineer Intern (trainee) in Delhi Police's CCTNS portal project. I added new search pages on the Java SpringBoot application to dynamically generate MySQL queries and display data using JasperReports.",
        link: "https://www.techmahindra.com/",
      },
      {
        title: "The University of Edinburgh - Accommodation Services",
        subTitle: "Resident Assistant",
        skills: ["Leadership", "Communication", "Event Planning"],
        date: "09/2022 - 05/2024",
        description:
          "Resident Assistant in the University's accommodation services, facilitating over 300 students settle into university life by organising events and being students' first point of contact for any help.",
      },
    ],
  },

  {
    title: "Education",
    items: [
      {
        title: "The University of Edinburgh",
        subTitle: "BEng (Hons) Computer Science",
        date: "09/2020 - 05/2024",
        description:
          "Graduated with First Class Honours and received a first on my honours dissertation titled 'Generating Synthetic Data for Privacy Research'.",
      },
      {
        title: "The Mother's International School",
        subTitle:
          "Grade 12 (CBSE) — Physics, Chemistry, Mathematics, Computer Science, English",
        date: "04/2006 - 05/2020",
      },
    ],
  },

  //   {
  //     title: "Projects",
  //     items: [
  //       {
  //         title: "Human Activity Recognition App",
  //         subTitle: "Android Studio, Kotlin, Python, TensorFlow, Pandas",
  //         date: "2023",
  //         description:
  //           "Android app to parse live movement data from Nordic Thingy and Respeck sensors using Bluetooth Low Energy. Deployed a TensorFlow model using TFLite to classify 44 stationary and dynamic activities with 97% accuracy.",
  //         link: "https://github.com/nisigit/HAR-App",
  //       },
  //       {
  //         title: "EduPlot",
  //         subTitle: "React, Flask, Firebase, Python, WebSockets, MUI",
  //         date: "2023",
  //         description:
  //           "Robot that plots SVGs and inputs from a drawing tablet onto a whiteboard. I used React, Flask and Firebase to develop the full-stack web interface, with an interactive canvas, which also sends data to the robot using web sockets.",
  //         link: "https://drive.google.com/file/d/146SCOIkLFP_fy7PF2nuTWvkp3_y5F_Hi/view",
  //       },
  //       {
  //         title: "Drone Delivery System",
  //         subTitle: "Java, Maven, GitHub Actions",
  //         date: "2022",
  //         description:
  //           "Java application to simulate a drone delivery system for pizzas. I implemented a weighted A* search algorithm to plan an efficient delivery route.",
  //         link: "https://github.com/nisigit/Informatics-Large-Practical",
  //       },
  //       {
  //         title: "Venus & Mars",
  //         subTitle: "React, Font Awesome",
  //         date: "2021",
  //         description:
  //           "Promotional website for a dating app startup (now defunct). ",
  //         link: "https://vnmwebsite.surge.sh",
  //       },
  //     ],
  //   },
];

export type Content = {
  title: string;
  items: {
    title: string;
    subTitle: string;
    date: string;
    description?: string;
    link?: string;
    skills?: string[];
  }[];
};

export type ContentData = Content[];
