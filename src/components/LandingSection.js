import React from "react";
import { Text, Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import miprofile from "../images/Sofi profile photo.jpg"

const greeting = "Hello, I am Sophonias!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack >
      <Avatar src={miprofile} name="Sophonias" size="2xl" bgSize="cover" />
      <Text>Hello, I am Sophonias!</Text>
        <VStack>
        <Heading as="h2" size="md"> {bio1} </Heading>
        <Heading as="h2" size="md"> {bio2} </Heading>
        </VStack>
  
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
