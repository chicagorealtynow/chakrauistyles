import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import BackButton from "../components/BackButton";
import Navigation from "../components/Navigation";

function Position() {
  return (
    <>
      <Navigation />
      <Box p={5}>
        <Heading as="h2" size="xl" mb={4}>
          Position
        </Heading>
        <Text mb={4}>
          Chakra UI allows you to set the position of elements.
        </Text>
        <Box position="relative" h="200px" bg="gray.100" mb={4}>
          <Box position="absolute" top="20px" left="20px" bg="blue.200" p={4}>
            <Text>Absolute Position</Text>
          </Box>
        </Box>
        <Box position="fixed" bottom="20px" right="20px" bg="green.200" p={4}>
          <Text>Fixed Position</Text>
        </Box>
        <BackButton />
      </Box>

      <Box
        bgImage="url('Position.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="contain"
        height="1000px"
      >
        <Text fontWeight="bold"> Position Code </Text>
      </Box>
    </>
  );
}

export default Position;
