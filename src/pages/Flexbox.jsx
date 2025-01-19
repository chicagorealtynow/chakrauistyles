import React from "react";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import BackButton from "../components/BackButton";

function Flexbox() {
  return (
    <Box p={5}>
      <Heading as="h2" size="xl" mb={4}>
        Flexbox
      </Heading>
      <Text mb={4}>
        Chakra UI provides a Flex component for creating flexible layouts.
      </Text>
      <Flex bg="gray.100" p={4} mb={4} justifyContent="center">
        <Box bg="gray.200" p={4}>
          <Text>Item 1</Text>
        </Box>
        <Box bg="gray.300" p={4}>
          <Text>Item 2</Text>
        </Box>
      </Flex>
      <Flex bg="gray.100" p={4} mb={4} alignItems="center">
        <Box bg="gray.200" p={4} mr={2}>
          <Text>Item 1</Text>
        </Box>
        <Box bg="gray.300" p={4}>
          <Text>Item 2</Text>
        </Box>
      </Flex>
      <BackButton />
    </Box>
  );
}

export default Flexbox;
