import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    python,
    django,
    mysql,
    hotelbooking,
    covidtest,
    chatapp,
    kareai,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "NodeJS Developer",
      icon: backend,
    },
    {
      title: "Python Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Django",
      icon: django,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Web Developer Intern",
      company_name: "KareAI",
      icon: kareai,
      iconBg: "#E6DEDD",
      date: "Jul 2023 - Nov 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related web technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    }
  ];
  
  
  const projects = [
    {
      name: "Chat App",
      description:
        "The project centers around the development of a dynamic web-based platform facilitating real-time communication between users through a chat application.",
      tags: [
        {
          name: "Node",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "React",
          color: "pink-text-gradient",
        },
      ],
      image: chatapp,
      source_code_link: "https://github.com/Swarup7377/Chat-App",
    },
    {
      name: "Hotel Booking",
      description:
        "This project is centered around the development of an online platform that simplifies the hotel booking system, offering users a seamless and efficient experience.",
      tags: [
        {
          name: "Django",
          color: "blue-text-gradient",
        },
        {
          name: "SQLite",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: hotelbooking,
      source_code_link: "https://github.com/Swarup7377/Hotel-Booking-System",
    },
    {
      name: "Covid-19 Testing",
      description:
        "The project focuses on the development of an efficient online platform designed to simplify the management of the COVID testing process.",
      tags: [
        {
          name: "Django",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: covidtest,
      source_code_link: "https://github.com/Swarup7377/Covid-19-Testing-Management-System",
    },
  ];
  
  export { services, technologies, experiences, projects };