import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import BackButton from "../components/BackButton";

function PseudoProps() {
  return (
    <Box p={5}>
      <Heading as="h2" size="xl" mb={4}>
        Pseudo Props
      </Heading>
      <Text mb={4}>Chakra UI allows you to use pseudo props for styling.</Text>
      <Box
        bg="gray.100"
        p={4}
        mb={2}
        _hover={{ bg: "blue.200", color: "white" }}
      >
        <Text>Hover Effect</Text>
      </Box>
      <Box bg="gray.200" p={4} mb={2} _focus={{ border: "2px solid green" }}>
        <Text>Focus Effect</Text>
      </Box>
      <Box bg="gray.300" p={4} mb={2} _active={{ bg: "red.200" }}>
        <Text>Active Effect</Text>
      </Box>
      <BackButton />
    </Box>
  );
}

export default PseudoProps;
