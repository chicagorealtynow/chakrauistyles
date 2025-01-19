import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import BackButton from "../components/BackButton";
import Navigation from "../components/Navigation";

function Color() {
  return (
    <>
      <Navigation />
      <Box p={5}>
        <Heading as="h2" size="xl" mb={4}>
          Color
        </Heading>
        <Text mb={4}>Chakra UI provides a wide range of color options.</Text>
        <Box bg="red.200" color="red.800" p={4} mb={2}>
          <Text>This box has a red background and red text.</Text>
        </Box>
        <Box bg="teal.200" color="teal.800" p={4} mb={2}>
          <Text>This box has a teal background and teal text.</Text>
        </Box>
        <Box bg="gray.200" color="gray.800" p={4} mb={2}>
          <Text>This box has a gray background and gray text.</Text>
        </Box>
        <BackButton />
      </Box>
      <Box
        bgImage="url('./public/Color.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="contain"
        height="1000px"
      >
        <Text fontWeight="bold"> Color Code </Text>
      </Box>
    </>
  );
}

export default Color;
