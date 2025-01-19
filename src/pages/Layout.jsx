import React from "react";
import { Box, Heading, Text, Stack } from "@chakra-ui/react";
import BackButton from "../components/BackButton";
import Navigation from "../components/Navigation";

function Layout() {
  return (
    <>
      <Navigation />
      <Box p={5}>
        <Heading as="h2" size="xl" mb={4}>
          Layout
        </Heading>
        <Text mb={4}>Chakra UI provides components for creating layouts.</Text>
        <Stack spacing={4}>
          <Box bg="gray.100" p={4}>
            <Text>Box 1</Text>
          </Box>
          <Box bg="gray.200" p={4}>
            <Text>Box 2</Text>
          </Box>
          <Box bg="gray.300" p={4}>
            <Text>Box 3</Text>
          </Box>
        </Stack>
        <BackButton />
      </Box>

      <Box
        bgImage="url('/public/Typography.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="contain"
        height="1000px"
      >
        <Text fontWeight="bold"> Layout Code </Text>
      </Box>
    </>
  );
}

export default Layout;
