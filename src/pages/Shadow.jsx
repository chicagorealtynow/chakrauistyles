import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import BackButton from "../components/BackButton";

function Shadow() {
  return (
    <Box p={5}>
      <Heading as="h2" size="xl" mb={4}>
        Shadow
      </Heading>
      <Text mb={4}>Chakra UI allows you to add shadows to elements.</Text>
      <Box bg="gray.100" p={4} mb={2} shadow="md">
        <Text>Medium Shadow</Text>
      </Box>
      <Box bg="gray.200" p={4} mb={2} shadow="lg">
        <Text>Large Shadow</Text>
      </Box>
      <Box bg="gray.300" p={4} mb={2} shadow="xl">
        <Text>Extra Large Shadow</Text>
      </Box>
      <BackButton />
    </Box>
  );
}

export default Shadow;
