import React from "react";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import BackButton from "../components/BackButton";

function Display() {
  return (
    <Box p={5}>
      <Heading as="h2" size="xl" mb={4}>
        Display
      </Heading>
      <Text mb={4}>
        Chakra UI allows you to control the display property of elements.
      </Text>
      <Flex mb={4}>
        <Box bg="gray.100" p={4} mr={2} display="inline-block">
          <Text>Inline Block</Text>
        </Box>
        <Box bg="gray.200" p={4} display="inline-block">
          <Text>Inline Block</Text>
        </Box>
      </Flex>
      <Box bg="gray.300" p={4} display="block">
        <Text>Block</Text>
      </Box>
      <BackButton />
    </Box>
  );
}

export default Display;
