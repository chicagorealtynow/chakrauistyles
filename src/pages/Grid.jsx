import React from "react";
import { Box, Heading, Text, Grid } from "@chakra-ui/react";
import BackButton from "../components/BackButton";
import Navigation from "../components/Navigation";

function GridComponent() {
  return (
    <>
      <Navigation />
      <Box p={5}>
        <Heading as="h2" size="xl" mb={4}>
          Grid Layout
        </Heading>
        <Text mb={4}>
          Chakra UI provides a Grid component for creating grid layouts.
        </Text>
        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
          <Box bg="gray.100" p={4}>
            <Text>Item 1</Text>
          </Box>
          <Box bg="gray.200" p={4}>
            <Text>Item 2</Text>
          </Box>
          <Box bg="gray.300" p={4}>
            <Text>Item 3</Text>
          </Box>
          <Box bg="gray.400" p={4}>
            <Text>Item 4</Text>
          </Box>
          <Box bg="gray.500" p={4}>
            <Text>Item 5</Text>
          </Box>
          <Box bg="gray.600" p={4}>
            <Text>Item 6</Text>
          </Box>
        </Grid>
        <BackButton />
      </Box>

      <Box
        bgImage="url('/public/Grid.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="contain"
        height="1000px"
      >
        <Text fontWeight="bold"> Grid Code </Text>
      </Box>
    </>
  );
}

export default GridComponent;
