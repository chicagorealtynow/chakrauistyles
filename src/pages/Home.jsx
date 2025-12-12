import React from 'react';
import {
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { RiBuildingLine, RiFlashlightLine, RiMapPin2Line, RiSearchLine, RiTeamLine } from 'react-icons/ri';
import PropertyCard from '../components/PropertyCard';
import { properties } from '../data/properties';

function Home() {
  return (
    <Box>
      <Box bgGradient="linear(to-r, teal.500, teal.700)" color="white" py={{ base: 12, md: 20 }}>
        <Container maxW="7xl">
          <Grid templateColumns={{ base: '1fr', md: '1.2fr 1fr' }} gap={10} alignItems="center">
            <GridItem>
              <Badge colorScheme="whiteAlpha" mb={3} px={3} py={1} rounded="full" fontWeight="semibold">
                Live AI Demo • Real Estate Ready
              </Badge>
              <Heading as="h1" size="2xl" mb={4} lineHeight="1.1">
                Modern listings with AI concierges that work 24/7.
              </Heading>
              <Text fontSize="lg" color="teal.50" mb={6}>
                Give prospects a premium experience: instant answers, smart scheduling, and on-brand content built on OpenAI +
                Claude.
              </Text>
              <HStack spacing={4} mb={6}>
                <Button as={Link} to="/ai-features" colorScheme="white" color="teal.700">
                  Explore AI features
                </Button>
                <Button as={Link} to="/listings" variant="outline" colorScheme="white" borderColor="teal.100" color="white">
                  View listings
                </Button>
              </HStack>
              <Stack spacing={3} color="teal.50">
                <HStack>
                  <Icon as={RiFlashlightLine} />
                  <Text>Instant chat, scheduling, and content powered by OpenAI</Text>
                </HStack>
                <HStack>
                  <Icon as={RiTeamLine} />
                  <Text>Ready for clients—showcase ROI, engagement, and speed</Text>
                </HStack>
              </Stack>
            </GridItem>
            <GridItem>
              <Box bg="white" color="gray.800" rounded="2xl" p={6} shadow="xl">
                <Text fontWeight="bold" mb={2} color="teal.600">
                  Search properties
                </Text>
                <InputGroup mb={3}>
                  <InputLeftElement pointerEvents="none">
                    <RiSearchLine color="gray.400" />
                  </InputLeftElement>
                  <Input placeholder="City, neighborhood, or MLS #" bg="gray.50" />
                </InputGroup>
                <SimpleGrid columns={{ base: 1, sm: 2 }} gap={3} mb={4}>
                  <Input placeholder="Price max" bg="gray.50" />
                  <Input placeholder="Beds" bg="gray.50" />
                  <Input placeholder="Tours this week" bg="gray.50" />
                  <Input placeholder="Financing options" bg="gray.50" />
                </SimpleGrid>
                <Button w="full" colorScheme="teal" mb={3}>
                  Find homes with AI help
                </Button>
                <Divider my={4} />
                <Stack spacing={2} fontSize="sm" color="gray.600">
                  <HStack>
                    <Icon as={RiMapPin2Line} />
                    <Text>AI concierge can answer neighborhood questions and schedule showings</Text>
                  </HStack>
                  <HStack>
                    <Icon as={RiBuildingLine} />
                    <Text>Demo-ready listing search built for client walkthroughs</Text>
                  </HStack>
                </Stack>
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </Box>

      <Container maxW="7xl" py={12}>
        <Flex align="center" justify="space-between" mb={6}>
          <Heading size="lg">Featured listings</Heading>
          <Button as={Link} to="/listings" variant="ghost" colorScheme="teal" size="sm">
            Browse all
          </Button>
        </Flex>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
          {properties.slice(0, 6).map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </SimpleGrid>
      </Container>

      <Box bg="gray.900" color="white" py={12}>
        <Container maxW="7xl">
          <Grid templateColumns={{ base: '1fr', md: '1.1fr 1fr' }} gap={10} alignItems="center">
            <GridItem>
              <Heading size="lg" mb={3}>
                AI services built for property teams
              </Heading>
              <Text color="gray.300" mb={5}>
                Show buyers how AI elevates every touchpoint: chat that knows the inventory, scheduling that syncs with calendars,
                and content that auto-optimizes for lead quality.
              </Text>
              <SimpleGrid columns={{ base: 1, sm: 2 }} gap={4}>
                {["AI Concierge", "Scheduling assistant", "Website upgrader", "Content generator"].map((item) => (
                  <Box key={item} bg="gray.800" p={4} rounded="xl" borderWidth={1} borderColor="gray.700">
                    <Text fontWeight="bold">{item}</Text>
                    <Text color="gray.400" fontSize="sm" mt={2}>
                      See it live—crafted for demos with clear value stories.
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            </GridItem>
            <GridItem>
              <Box bg="gray.800" rounded="2xl" p={6} borderWidth={1} borderColor="gray.700" shadow="lg">
                <Heading size="md" mb={4}>
                  Ready-to-run demo journey
                </Heading>
                <Stack spacing={4}>
                  {[
                    'Visitor lands, AI greets and answers property questions',
                    'Scheduling assistant proposes times pulled from your calendar',
                    'AI upgrades the site copy and CTAs live',
                    'Analytics panel shows lift in engagement and conversion',
                  ].map((step) => (
                    <HStack key={step} align="flex-start" spacing={3}>
                      <Badge colorScheme="teal" variant="solid" borderRadius="full">
                        Live
                      </Badge>
                      <Text color="gray.200">{step}</Text>
                    </HStack>
                  ))}
                </Stack>
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </Box>

      <Container maxW="7xl" py={12}>
        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={8}>
          <GridItem>
            <Heading size="md" mb={3}>
              About Lumina Realty AI Studio
            </Heading>
            <Text mb={4} color="gray.600">
              We build AI-first experiences that elevate every client conversation. The real estate demo you see here can be
              rebranded for hotels, retail, or any service business in minutes.
            </Text>
            <Stack spacing={3} color="gray.700">
              <HStack>
                <Badge colorScheme="teal">24/7</Badge>
                <Text>Always-on AI concierge that never misses a lead</Text>
              </HStack>
              <HStack>
                <Badge colorScheme="purple">+40%</Badge>
                <Text>Higher engagement from optimized copy and CTAs</Text>
              </HStack>
              <HStack>
                <Badge colorScheme="orange">30 sec</Badge>
                <Text>Time to launch new content with AI generators</Text>
              </HStack>
            </Stack>
          </GridItem>
          <GridItem>
            <Box bg="white" rounded="xl" p={6} shadow="md" borderWidth={1}>
              <Heading size="sm" mb={3}>
                Contact our AI team
              </Heading>
              <Stack spacing={3}>
                <Input placeholder="Your name" />
                <Input placeholder="Business email" />
                <Input placeholder="What do you want to automate?" />
                <Button colorScheme="teal">Schedule a strategy call</Button>
                <Text fontSize="sm" color="gray.500">
                  We respond with a tailored demo deck within 1 business day.
                </Text>
              </Stack>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

export default Home;
