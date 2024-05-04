import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
    return (
      <Box
        backgroundColor="white"
        borderRadius="md"
        p={4}
        boxShadow="md"
        transition="all 0.3s"
        _hover={{
          boxShadow: "lg",
          transform: "scale(1.05)",
        }}
      >
        <Image src={imageSrc} alt={title} borderRadius="md" mb={3} />
        <VStack align="start" textAlign="left"ss>
          <Heading as="h3" fontSize="xl" color="black">
            {title}
          </Heading>
          <Text color="black">{description}</Text>
    <HStack>
      <Text fontWeight="bold" color="black">See More</Text>
        <FontAwesomeIcon color="black" icon={faArrowRight} size="1x" />
    </HStack>
        
    
        </VStack>
      </Box>
    );

  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
};

export default Card;
