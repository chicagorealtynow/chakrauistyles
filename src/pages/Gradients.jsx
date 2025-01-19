import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import BackButton from "../components/BackButton";
import Navigation from "../components/Navigation";

function Gradients() {
  return (
    <>
      <Navigation />
      <Box p={5}>
        <Heading as="h2" size="xl" mb={4}>
          Gradients
        </Heading>
        <Text mb={4}>
          Chakra UI allows you to use CSS gradients for backgrounds.
        </Text>
        <Box
          bgGradient="linear(to-r, green.200, blue.500)"
          color="white"
          p={4}
          mb={2}
        >
          <Text>This box has a linear gradient background.</Text>
        </Box>
        <Box
          bgGradient="radial(circle at top, yellow.200, red.500)"
          color="white"
          p={4}
          mb={2}
        >
          <Text>This box has a radial gradient background.</Text>
        </Box>
        <BackButton />
      </Box>
      <Box
        bgImage="url('Gradient.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="contain"
        height="1000px"
      >
        <Text fontWeight="bold"> Gradient Code </Text>
      </Box>
    </>
  );
}

export default Gradients;
