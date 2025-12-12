import React, { useMemo } from 'react';
import {
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { RiCalendarCheckLine, RiCheckLine, RiFlashlightLine, RiMapPinLine, RiSmartphoneLine } from 'react-icons/ri';
import { properties } from '../data/properties';

function PropertyDetail() {
  const { id } = useParams();
  const property = useMemo(() => properties.find((item) => item.id === id) || properties[0], [id]);

  return (
    <Box py={12}>
      <Container maxW="6xl">
        <Grid templateColumns={{ base: '1fr', md: '1.1fr 1fr' }} gap={8}>
          <GridItem>
            <Image src={property.image} alt={property.title} rounded="xl" shadow="lg" />
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={4} mt={4}>
              {[property.image, property.image, property.image].map((src, idx) => (
                <Image key={idx} src={src} alt={`${property.title}-${idx}`} rounded="lg" borderWidth={1} />
              ))}
            </SimpleGrid>
          </GridItem>
          <GridItem>
            <Stack spacing={4}>
              <Badge colorScheme="teal" w="fit-content">
                AI-ready listing
              </Badge>
              <Heading>{property.title}</Heading>
              <Stack spacing={1} color="gray.600">
                <Text fontWeight="bold" fontSize="2xl">
                  {property.price}
                </Text>
                <Text display="flex" alignItems="center" gap={2}>
                  <Icon as={RiMapPinLine} /> {property.location}
                </Text>
                <Text>
                  {property.beds} beds • {property.baths} baths • {property.area}
                </Text>
              </Stack>
              <Text color="gray.700">
                AI-enhanced copy: floor-to-ceiling glass, tech-forward climate control, and wellness spaces crafted for modern
                buyers. Shareable with one click for social and newsletters.
              </Text>
              <Stack spacing={2}>
                {property.highlights.map((item) => (
                  <Text key={item} display="flex" gap={2} alignItems="center" color="gray.700">
                    <RiCheckLine color="#0BC5EA" /> {item}
                  </Text>
                ))}
              </Stack>
              <Button colorScheme="teal" leftIcon={<RiCalendarCheckLine />}>
                Request a tour with AI scheduling
              </Button>
              <Box bg="gray.50" borderWidth={1} rounded="lg" p={4}>
                <Text fontWeight="semibold" mb={2}>
                  How the AI assistant sells this property
                </Text>
                <VStack align="stretch" spacing={2} fontSize="sm" color="gray.600">
                  <Text>• Auto-surfaces school, commute, and walkability data.</Text>
                  <Text>• Proposes available times from your calendar in the chat.</Text>
                  <Text>• Sends recap email + SMS instantly after the tour is booked.</Text>
                </VStack>
              </Box>
              <Divider />
              <Stack spacing={3}>
                <Heading size="sm">Contact</Heading>
                <SimpleGrid columns={{ base: 1, sm: 2 }} gap={3}>
                  <Button variant="outline" colorScheme="teal" leftIcon={<RiSmartphoneLine />}>
                    Call concierge
                  </Button>
                  <Button colorScheme="teal" leftIcon={<RiFlashlightLine />}>
                    Chat about financing
                  </Button>
                </SimpleGrid>
              </Stack>
            </Stack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

export default PropertyDetail;
