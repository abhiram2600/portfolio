export const experienceData = [
  {
    organization: "Clemson University",
    title: "Graduate Student Assistant",
    from: "Feb 2023",
    to: "May 2024",
    dutiesPerformed: [
      "Led the digitization of archived theses and dissertations, utilizing Python tools like PyPDF2 and Tesseract OCR to automate data extraction, cleaning, and transformation from PDFs with 99% accuracy.",
      "Automated data cataloging with OpenPyXL, streamlining the data generation from PDFs in Box and enhancing data accessibility for academic systems.",
      "Delivered exceptional customer service and support while ensuring the organization and optimal management of library resources.",
    ],
  },
  {
    organization: "Mutual Mobile Solutions Pvt Ltd",
    title: "Associate Software Engineer",
    from: "Sept 2021",
    to: "June 2022",
    dutiesPerformed: [
      "Developed cross-platform applications using React and React Native and integrated existing code with Nextjs for web compatibility. Leveraged Nest.js(Node.js) for the backend. Used MobX-state-tree for state management.",
      "Integrated an existing GraphQL schema with WunderGraph, implementing over 20 GraphQL queries and mutations, which streamlined data handling and reduced query response time by 15%.",
      "Worked on migrating a mobile app and its packages from legacy React Native to the latest version, enhancing security and expanding compatibility to all iOS versions, which increased app coverage by 65%.",
    ],
  },
  {
    organization: "Mutual Mobile Solutions Pvt Ltd",
    title: "Software Engineering Intern",
    from: "March 2021",
    to: "Aug 2021",
    dutiesPerformed: [
      "Engineered and optimized the entire front-end architecture for a high-traffic SaaS product using React. Leveraged React Hooks and Context API to improve performance and user experience.",
      "Played a pivotal role in designing and scaling the database architecture, focusing on high availability and performance. Optimized real-time data retrieval and external API integrations ",
    ],
  },
];

export type experienceDataType = typeof experienceData;
