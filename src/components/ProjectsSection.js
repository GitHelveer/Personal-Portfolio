import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";


const projects = [
  {
    title: "React-powered Restaurant Website 🍽️✨",
    description:
      "Expertly crafted with React, this visually stunning and user-friendly restaurant website showcases seamless navigation, captivating design elements, and full responsiveness across all devices.",
    getImageSrc: () => require("../images/port22new.png"),
    link: "https://sophoniasportfolio1.netlify.app/" // Replace with the actual link
  },
  {
    title: "High Fidelity UX/UI Prototype | Figma",
    description:
      "This high-fidelity prototype offers a seamless user experience through its visually stunning interface. The inclusion of interactive elements allows for effortless navigation and an engaging experience.",
    getImageSrc: () => require("../images/pho9.jpg"),
    link: "https://www.figma.com/proto/CpMhhVlvI70CKMtN42mmEr/My-Figma-Portfolio?type=design&t=5Bm7otbzRungRKcf-1&scaling=scale-down&page-id=0%3A1&node-id=402-311&starting-point-node-id=402%3A311&mode=design" // Replace with the actual link
  },
  {
    title: "Liya Kebede Biography | Childhood, Achievement & FAQ",
    description:
      "Liya Kebede is a renowned Ethiopian-born fashion model who has achieved stardom in her modeling career. The fashion star Liya has appeared in many popular magazines, such as Vogue...",
    getImageSrc: () => require("../images/Liyakebede biography.webp"),
    link: "https://typicalethiopian.com/liya-kebede-biography-childhood-achievement-faq" // Replace with the actual link
  },
  {
    title: "Time and Date in Addis Ababa, Ethiopia",
    description:
      "In a time when scientists are working on how to travel back in time, a fiction seeming fact is under our nose. What if we tell you there is such a country with a calendar seven to eight years behind the rest of the world....",
    getImageSrc: () => require("../images/current-time-and-date-in-Ethiopia-980x551.jpg"),
    link: "https://typicalethiopian.com/time-and-date-in-addis-ababa-ethiopia" // Replace with the actual link
  },
];

const ProjectsSection = () => {
  const firstHeadingProjects = projects.slice(0, 2); // First two projects
  const secondHeadingProjects = projects.slice(2, 4); // Last two projects

  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
     <Heading as="h1" id="projects-section" mb={2}>
  Featured Projects
</Heading>

      <Box mb={8}>
        <Heading as="h2" fontSize="2xl" mb={4} textAlign="center">
          Web Development
        </Heading>
        <Box
          display="grid"
          gridTemplateColumns="repeat(2,minmax(0,1fr))"
          gridGap={8}
          mb={4} // Add margin bottom to create space between heading and cards
        >
          {firstHeadingProjects.map((project) => (
            <a href={project.link} key={project.title}>
              <Card
                title={project.title}
                description={project.description}
                imageSrc={project.getImageSrc()}
              />
            </a>
          ))}
        </Box>
      </Box>

      <Box>
        <Heading as="h2" fontSize="2xl" mb={4} textAlign="center">
          Content Writing
        </Heading>
        <Box
          display="grid"
          gridTemplateColumns="repeat(2,minmax(0,1fr))"
          gridGap={8}
          mb={4} // Add margin bottom to create space between heading and cards
        >
          {secondHeadingProjects.map((project) => (
            <a href={project.link} key={project.title}>
              <Card
                title={project.title}
                description={project.description}
                imageSrc={project.getImageSrc()}
              />
            </a>
          ))}
        </Box>
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;