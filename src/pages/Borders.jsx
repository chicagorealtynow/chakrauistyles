import React from 'react';
    import { Box, Heading, Text } from '@chakra-ui/react';
    import BackButton from '../components/BackButton';

    function Borders() {
      return (
        <Box p={5}>
          <Heading as="h2" size="xl" mb={4}>
            Borders
          </Heading>
          <Text mb={4}>
            Chakra UI allows you to set border properties.
          </Text>
          <Box border="2px solid black" p={4} mb={2}>
            <Text>Solid Border</Text>
          </Box>
          <Box border="2px dashed red" p={4} mb={2}>
            <Text>Dashed Border</Text>
          </Box>
          <Box border="2px dotted blue" p={4} mb={2}>
            <Text>Dotted Border</Text>
          </Box>
          <BackButton />
        </Box>
      );
    }

    export default Borders;
