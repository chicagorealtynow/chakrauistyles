import React from 'react';
    import { Box, Heading, Text } from '@chakra-ui/react';
    import BackButton from '../components/BackButton';

    function BorderRadius() {
      return (
        <Box p={5}>
          <Heading as="h2" size="xl" mb={4}>
            Border Radius
          </Heading>
          <Text mb={4}>
            Chakra UI allows you to set border radius.
          </Text>
          <Box bg="gray.100" p={4} mb={2} borderRadius="md">
            <Text>Medium Border Radius</Text>
          </Box>
          <Box bg="gray.200" p={4} mb={2} borderRadius="lg">
            <Text>Large Border Radius</Text>
          </Box>
          <Box bg="gray.300" p={4} mb={2} borderRadius="full">
            <Text>Full Border Radius</Text>
          </Box>
          <BackButton />
        </Box>
      );
    }

    export default BorderRadius;
