import React from 'react';
    import { Box, Heading, Text } from '@chakra-ui/react';
    import Navigation from '../components/Navigation';

    function HomePage() {
      return (
        <Box p={5}>
          <Heading as="h1" size="2xl" textAlign="center" mb={4}>
            Chakra UI Styling Examples
          </Heading>
          <Text textAlign="center" mb={8}>
            Welcome to the Chakra UI styling examples. Use the navigation below to explore different styling options.
          </Text>
          <Navigation />
        </Box>
      );
    }

    export default HomePage;
