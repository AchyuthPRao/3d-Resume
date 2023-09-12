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
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    
  } from "../assets";

import praveen from '../assets/praveenkumar.png';
import achut from '../assets/achut.png';
import sahu from '../assets/sahu.png'
 
  
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
      title: "MERN Stack Developer",
      icon: web,
    },
    {
      title: "Freelancer",
      icon: mobile,
    },
    {
      title: "Python Developer",
      icon: backend,
    },
    {
      title: "React Developer",
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    
    {
      title: "Full stack Developer",
      company_name: "Genesis- Student Forum",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "MERN Developer",
      company_name: "fiverr",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2023",
      points: [
        "Freelancing on fiverr.",
        "maintaining web applications using React.js and other related technologies.",
        
      ],
    },
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but aditya proved me wrong.",
      name: "S Praveen Kumar",
      designation: "Director",
      company: "Strides arcolab ltd",
      image: praveen,
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like aditya does.",
      name: "Aditya Revankar",
      designation: "CFO",
      company: "GymGuru",
      image: achut,
    },
    {
      testimonial:
        "After aditya optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Aditya Kumar Sahu",
      designation: "CTO",
      company: "Tribal Welfare Assoc.",
      image: sahu,
    },
  ];
  
  const projects = [
    {
      name: "HACKMAN Website",
      description:
        "One of the best HACKATHONS conducted in DSCE, Contributed in developing this website",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/AchyuthPRao/hackmanv6-1",
    },
    {
      name: "GymGuru - AI chatbot",
      description:
        "A custom personalized fitness chatbot built with beautiful three.js",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "kaggle",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/AchyuthPRao/GymGuru",
    },
    {
      name: "OrderIT",
      description:
        "A MERN stack food ordering website , fully fledged with payment gateways also",
      tags: [
        {
          name: "REACT",
          color: "blue-text-gradient",
        },
        {
          name: "MERN",
          color: "green-text-gradient",
        },
        {
          name: "mongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/AchyuthPRao/OrderIT",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };