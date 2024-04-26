import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Tedros from "../images/TEDROS-ADHANOM-1.png"
import Card from "./Card";

const projects = [
  {
    title: "React Space",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    getImageSrc: () => require("../images/TEDROS-ADHANOM-1.png"),
    link: "https://example.com/react-space" // Replace with the actual link
  },
  {
    title: "React Infinite Scroll",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    getImageSrc: () => require("../images/photo2.jpg"),
    link: "https://typicalethiopian.com/haile-gebreselassie-biography-profile-achievement-net-worth/" // Replace with the actual link
  },
  {
    title: "Photo Gallery",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    getImageSrc: () => require("../images/photo3.jpg"),
    link: "https://example.com/photo-gallery" // Replace with the actual link
  },
  {
    title: "Event planner",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    getImageSrc: () => require("../images/photo4.jpg"),
    link: "https://example.com/event-planner" // Replace with the actual link
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
        <Heading as="h2" fontSize="lg" mb={4} textAlign="center">
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
        <Heading as="h2" fontSize="lg" mb={4} textAlign="center">
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