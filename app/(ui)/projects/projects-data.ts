export const projectsData = [
  {
    name: "Surfsense - Chrome extension to track time spent on website.",
    description:
      "Created a Chrome extension to monitor internet usage, distinguishing between productive and non-productive website time. \nUtilized Chrome APIs alongside HTML and JavaScript for the development of the application",
    tech: ["HTML5", "CSS", "JavaScript", "ChromeAPI"],
    year: "May 2024",
  },
  {
    name: "Unhealthy Tree Detection through Video Stream Segmentation",
    description:
      "Developed and implemented machine learning models (Logistic Regression and Convolutional Neural Network) for segmenting and detecting unhealthy trees in drone footage, enhancing automated environmental monitoring capabilities.",
    tech: ["Pytorch", "OpenCV"],
    year: "Nov 2023",
  },
  {
    name: "Platform migration to AWS",
    description:
      "Architected and executed the migration of Tigermed's on-premise infrastructure to AWS, leveraging VPC, EC2, RDS, and Auto Scaling for enhanced scalability and security.\n Designed a multi-AZ deployment with secure, highly available cloud services and integrated monitoring through CloudWatch",
    tech: ["AWS"],
    year: "Sept 2023",
  },
  {
    name: "Defense System against Black-Box Attacks",
    description:
      'Implemented a system inspired by the paper "Blacklight: Scalable Defense for Neural Networks against Query-Based Black-Box Attacks." This system will detect and mitigate black-box attacks on neural networks. It involves stages such as data preprocessing, computing probabilistic fingerprints, and matching fingerprints. The effectiveness of the system was evaluated against state-of-the-art attacks using datasets, including ImageNet, MNIST, and CIFAR-10.',
    tech: ["Python", "Keras"],
    year: "May 2023",
  },
  {
    name: "Decentralization of Genome Storage",
    description:
      "Developed a ReactJS-based web application utilizing blockchain technology to enable decentralized storage and retrieval of genomic data. Emphasizing data security and privacy, the application integrates IPFS for reliable storage and employs Metamask and Truffle Framework for secure user authentication. This project provides an innovative solution at the intersection of genomics and blockchain technology.",
    tech: ["ReactJS", "Solidity", "IPFS"],
    year: "Feb 2021",
  },
  {
    name: "This website :)",
    description:
      "Crafted this personal website using Next.js and Framer Motion, showcasing a blend of technologies. Used Next.js for efficient, React applications, ensuring optimal performance and a seamless user experience. User Framer Motion to add fluid animations, enhancing the visual appeal of the website. The project shows the intersection of creativity and technology, offering a platform to showcase personal achievements and insights.",
    tech: ["NextJS", "Framer-Motion"],
    year: "Dec 2023",
  },
];

export type projectDataType = typeof projectsData;
