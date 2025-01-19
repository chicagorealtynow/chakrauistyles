import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import BackButton from "../components/BackButton";
import Navigation from "../components/Navigation";

function Filter() {
  return (
    <>
      <Navigation />
      <Box p={5}>
        <Heading as="h2" size="xl" mb={4}>
          Filter
        </Heading>
        <Text mb={4}>
          Chakra UI allows you to apply CSS filters to elements.
        </Text>
        <Box bg="gray.100" p={4} mb={2} filter="blur(2px)">
          <Text>Blur Filter</Text>
        </Box>
        <Box bg="gray.200" p={4} mb={2} filter="grayscale(1)">
          <Text>Grayscale Filter</Text>
        </Box>
        <Box bg="gray.300" p={4} mb={2} filter="brightness(0.5)">
          <Text>Brightness Filter</Text>
        </Box>
        <BackButton />
      </Box>
      <Box
        bgImage="url('./public/Shadow.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="contain"
        height="1000px"
      >
        <Text fontWeight="bold"> Filter Code </Text>
      </Box>
    </>
  );
}

export default Filter;
