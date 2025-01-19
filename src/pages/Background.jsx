import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import BackButton from "../components/BackButton";

function Background() {
  return (
    <Box p={5}>
      <Heading as="h2" size="xl" mb={4}>
        Background
      </Heading>
      <Text mb={4}>Chakra UI allows you to set background properties.</Text>
      <Box
        position="relative" // Enables positioning for overlay
        bgImage="url('https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22')"
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPosition="center"
        h="300px"
        mb={2}
        p={4}
        borderRadius="md"
      >
        {/* Overlay Layer */}
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bg="rgba(0, 0, 0, 0.5)" // Semi-transparent black
          borderRadius="md"
        ></Box>

        {/* Text Layer */}
        <Box position="relative" color="white" zIndex="1">
          <Text fontWeight="bold" fontSize="lg">
            Background Image with Overlay
          </Text>
        </Box>
      </Box>
      <Box bg="blue.200" p={4} mb={2}>
        <Text>Background Color</Text>
      </Box>
      <BackButton />
    </Box>
  );
}

export default Background;
