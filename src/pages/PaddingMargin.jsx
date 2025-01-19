import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import BackButton from "../components/BackButton";
import Navigation from "../components/Navigation";

function PaddingMargin() {
  return (
    <>
      <Navigation />
      <Box p={5}>
        <Heading as="h2" size="xl" mb={4}>
          Padding and Margin
        </Heading>
        <Text mb={4}>
          Padding adds space within an element, while margin adds space around
          an element.
        </Text>
        <Box bg="blue.100" p={4} m={4}>
          <Text>This box has padding of 4 and margin of 4.</Text>
        </Box>
        <Box
          bg="green.100"
          pt={8}
          pr={4}
          pb={2}
          pl={6}
          mt={2}
          mr={4}
          mb={6}
          ml={55}
        >
          <Text>
            This box has different padding and margin values for each side.
          </Text>
        </Box>
        <BackButton />
      </Box>
      <Box
        bgImage="url('./public/Padding.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="contain"
        height="1000px"
      >
        <Text fontWeight="bold">Padding Code </Text>
      </Box>
      ;
    </>
  );
}

export default PaddingMargin;
