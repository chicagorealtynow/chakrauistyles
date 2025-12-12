import React from 'react';
import { Badge, Box, Button, Flex, HStack, Image, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { RiMapPin2Line } from 'react-icons/ri';

function PropertyCard({ property, ctaLabel = 'View details' }) {
  return (
    <Box borderWidth={1} borderRadius="lg" overflow="hidden" bg="white" shadow="sm">
      <Image src={property.image} alt={property.title} h={56} w="full" objectFit="cover" />
      <Stack spacing={3} p={4}>
        <Flex justify="space-between" align="center">
          <Text fontWeight="bold" fontSize="lg">
            {property.title}
          </Text>
          <Badge colorScheme={property.status === 'Available' ? 'green' : 'orange'}>{property.status}</Badge>
        </Flex>
        <HStack spacing={2} color="gray.500" fontSize="sm">
          <RiMapPin2Line />
          <Text>{property.location}</Text>
        </HStack>
        <Text fontSize="sm" color="gray.600">
          {property.beds} beds • {property.baths} baths • {property.area}
        </Text>
        <Text fontWeight="bold" fontSize="xl">
          {property.price}
        </Text>
        <Flex wrap="wrap" gap={2}>
          {property.highlights.slice(0, 3).map((item) => (
            <Badge key={item} colorScheme="purple" variant="subtle">
              {item}
            </Badge>
          ))}
        </Flex>
        <Button as={Link} to={`/properties/${property.id}`} colorScheme="teal" variant="solid" size="sm">
          {ctaLabel}
        </Button>
      </Stack>
    </Box>
  );
}

export default PropertyCard;
