export const contentData = [
  {
    title: "Education",
    items: [
      {
        title: "The University of Edinburgh",
        subTitle: "BEng (Hons) Computer Science",
        date: "09/2020 - 05/2024",
        description: "Classification: First Class Honours (expected)",
      },
      {
        title: "The Mother's International School",
        subTitle:
          "Grade 12 (CBSE) — Physics, Chemistry, Mathematics, Computer Science, English",
        date: "04/2008 - 05/2020",
        description: "94% aggregate",
      },
    ],
  },
  {
    title: "Work Experience",
    items: [
      {
        title: "Addepar",
        subTitle: "Software Engineer Intern",
        date: "06/2023 - 08/2023",
        description:
          "Software Engineer Intern in the Feeds Infrastructure & Tooling team. I developed an environment, and its data feed, to synthesise dummy investment portfolios and transactions based on configurations to demonstrate the platform's features to prospective clients.",
      },
      {
        title: "Edinburgh University Formula Student",
        subTitle: "Software Developer",
        date: "08/2023 - 08/2023",
        description:
          "Software Developer in Edinburgh University Formula Student's simulation team, working on the open-source simulation software for Formula Student driverless cars (eufs_sim).",
      },
      {
        title: "University of Edinburgh Information Services",
        subTitle: "Web Developer",
        date: "06/2022 - 04/2023",
        description:
          "Web Developer in the Information Services Group, where I helped with CMS migration and developed a full-stack live status dashboard for the University's websites using Laravel.",
      },
      {
        title: "Endeavour",
        subTitle: "Software Developer",
        date: "09/2021 - 05/2022",
        description:
          "Developer in the Darwin III rocket's software team, where I developed the local and online dashboards to read the rocket's telemetry data in real-time and update its state.",
      },
      {
        title: "Tech Mahindra",
        subTitle: "Software Engineer Intern",
        date: "05/2021 - 08/2021",
        description:
          "Full-stack Software Engineer Intern (trainee) in Delhi Police's CCTNS portal project. I added new search pages on the Java EE application to dynamically generate MySQL queries and display data using JasperReports.",
      },
    ],
  },

  {
    title: "Projects",
    items: [
      {
        title: "Human Activity Recognition App",
        subTitle: "Android Studio, Kotlin, Python, TensorFlow, Pandas",
        date: "2023",
        description:
          "Android app to parse live movement data from Nordic Thingy and Respeck sensors using Bluetooth Low Energy. Deployed a TensorFlow model using TFLite to classify 44 stationary and dynamic activities with 97% accuracy.",
      },
      {
        title: "EduPlot",
        subTitle: "React, Flask, Firebase, Python, WebSockets, MUI",
        date: "2023",
        description:
          "Robot that plots SVGs and inputs from a drawing tablet onto a whiteboard. I used React, Flask and Firebase to develop the full-stack web interface, with an interactive canvas, which also sends data to the robot using web sockets.",
      },
      {
        title: "Drone Delivery System",
        subTitle: "Java, Maven, GitHub Actions",
        date: "2022",
        description:
          "Java application to simulate a drone delivery system for pizzas. I implemented a weighted A* search algorithm to plan an efficient delivery route.",
      },
      {
        title: "Venus & Mars",
        subTitle: "React, Font Awesome",
        date: "2021",
        description:
          "Promotional website for a dating app startup (now defunct). ",
      },
    ],
  },
];

export type Content = {
  title: string;
  items: {
    title: string;
    subTitle: string;
    date: string;
    description: string;
  }[];
};

export type ContentData = Content[];