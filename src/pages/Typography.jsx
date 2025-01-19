import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import BackButton from "../components/BackButton";

function Typography() {
  return (
    <Box p={5}>
      <Heading as="h2" size="xl" mb={4}>
        Typography
      </Heading>
      <Text mb={4}>Chakra UI provides various components for typography.</Text>
      <Heading as="h3" size="lg" mb={2}>
        Heading 3
      </Heading>
      <Text fontSize="lg" mb={2}>
        This is a large text.
      </Text>
      <Text fontSize="md" mb={2}>
        This is a medium text.
      </Text>
      <Text fontSize="sm" mb={2}>
        This is a small text.
      </Text>
      <Text fontWeight="bold" mb={2}>
        This is bold text.
      </Text>
      <Text fontStyle="italic" mb={2}>
        This is italic text.
      </Text>
      <BackButton />
    </Box>
  );
}

export default Typography;
