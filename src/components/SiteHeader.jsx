import React from 'react';
import { Box, Button, Container, Flex, HStack, Icon, Text } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import { RiSparklingLine } from 'react-icons/ri';

const links = [
  { to: '/', label: 'Home' },
  { to: '/listings', label: 'Listings' },
  { to: '/ai-features', label: 'AI Features' },
  { to: '/analytics', label: 'Analytics' },
  { to: '/demo-controls', label: 'Demo Control' },
];

function SiteHeader() {
  const { pathname } = useLocation();

  return (
    <Box as="header" bg="white" boxShadow="sm" position="sticky" top={0} zIndex={10}>
      <Container maxW="7xl" py={4}>
        <Flex justify="space-between" align="center">
          <Flex align="center" gap={2}>
            <Icon as={RiSparklingLine} color="teal.400" boxSize={6} />
            <Box>
              <Text fontWeight="bold" fontSize="lg">
                Lumina Realty
              </Text>
              <Text fontSize="xs" color="gray.500">
                AI-powered experiences in real estate
              </Text>
            </Box>
          </Flex>
          <HStack spacing={2} display={{ base: 'none', md: 'flex' }}>
            {links.map((link) => (
              <Button
                key={link.to}
                as={Link}
                to={link.to}
                variant={pathname === link.to ? 'solid' : 'ghost'}
                colorScheme="teal"
                size="sm"
              >
                {link.label}
              </Button>
            ))}
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}

export default SiteHeader;
