import React, { useMemo, useState } from 'react';
import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { properties } from '../data/properties';
import PropertyCard from '../components/PropertyCard';

function Listings() {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('all');
  const [priceCap, setPriceCap] = useState('');

  const filtered = useMemo(() => {
    return properties.filter((property) => {
      const matchesQuery = property.title.toLowerCase().includes(query.toLowerCase()) ||
        property.location.toLowerCase().includes(query.toLowerCase());
      const matchesType = type === 'all' || property.type === type;
      const matchesPrice = !priceCap || Number(property.price.replace(/[^0-9]/g, '')) <= Number(priceCap);
      return matchesQuery && matchesType && matchesPrice;
    });
  }, [priceCap, query, type]);

  return (
    <Box py={12}>
      <Container maxW="7xl">
        <Grid templateColumns={{ base: '1fr', md: '320px 1fr' }} gap={8}>
          <GridItem>
            <Box bg="white" rounded="xl" p={5} shadow="md" borderWidth={1}>
              <Heading size="md" mb={4}>
                Filter listings
              </Heading>
              <Stack spacing={3}>
                <Input placeholder="Search by city or property" value={query} onChange={(e) => setQuery(e.target.value)} />
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                  <option value="all">Any type</option>
                  <option value="Single Family">Single Family</option>
                  <option value="Luxury">Luxury</option>
                  <option value="Condo">Condo</option>
                  <option value="Townhome">Townhome</option>
                </Select>
                <InputGroup>
                  <InputLeftAddon>$</InputLeftAddon>
                  <Input type="number" placeholder="Max price" value={priceCap} onChange={(e) => setPriceCap(e.target.value)} />
                </InputGroup>
                <Box p={3} bg="gray.50" rounded="lg" borderWidth={1}>
                  <Text fontSize="sm" color="gray.600" mb={2}>
                    AI Scheduling Assistant
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    Ask the chat to reserve a tour. It proposes times, confirms, and logs the lead automatically.
                  </Text>
                </Box>
                <Button colorScheme="teal">Apply filters</Button>
              </Stack>
            </Box>
          </GridItem>
          <GridItem>
            <Flex justify="space-between" align="center" mb={4}>
              <Box>
                <Heading size="lg">All properties</Heading>
                <Text color="gray.500">Interactive demo inventory with AI-ready metadata.</Text>
              </Box>
              <Badge colorScheme="purple" variant="subtle" fontSize="xs">
                AI-enhanced copy + highlights
              </Badge>
            </Flex>
            {filtered.length === 0 ? (
              <Box bg="yellow.50" borderWidth={1} borderColor="yellow.200" rounded="lg" p={4}>
                <Text>No properties match that criteria. Try removing filters.</Text>
              </Box>
            ) : (
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
                {filtered.map((property) => (
                  <PropertyCard key={property.id} property={property} ctaLabel="View demo" />
                ))}
              </SimpleGrid>
            )}
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

export default Listings;
