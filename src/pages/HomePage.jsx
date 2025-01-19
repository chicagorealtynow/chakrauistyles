import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import Navigation from "../components/Navigation";

function HomePage() {
  return (
    <>
      <Navigation />
      <Box p={5}>
        <Heading as="h1" size="2xl" textAlign="center" mb={4}>
          Chakra UI Styling Examples
        </Heading>
        <Text textAlign="center" mb={8}>
          Welcome to the Chakra UI styling examples. Use the navigation below to
          explore different styling options.
        </Text>
      </Box>

      <Box
        bgImage="url('/public/HomePage.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="contain"
        height="1000px"
      >
        <Text fontWeight="bold"> Code </Text>
      </Box>
      <br />
      <Box
        bgImage="url('Navigation.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="contain"
        height="1000px"
      >
        <Text fontWeight="bold"> Navigation Code Component </Text>
      </Box>
      <br />
      <Box
        bgImage="url('BackButton.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="contain"
        height="832px"
      >
        <Text fontWeight="bold"> BackButton Code Component</Text>
      </Box>

      <Box
        bgImage="url('MainApp.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="contain"
        height="965px"
        mt={5}
      >
        <Text fontWeight="bold"> Main and App Code Component</Text>
      </Box>
    </>
  );
}

export default HomePage;
