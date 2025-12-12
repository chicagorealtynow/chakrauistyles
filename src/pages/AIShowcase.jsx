import React, { useMemo, useState } from 'react';
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
  Select,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
  useBoolean,
} from '@chakra-ui/react';
import {
  RiBarChart2Line,
  RiCalendarCheckLine,
  RiCellphoneLine,
  RiChatSmile3Line,
  RiRefreshLine,
  RiSparklingLine,
  RiToggleLine,
} from 'react-icons/ri';
import { properties } from '../data/properties';

function ContentGenerator() {
  const [loading, setLoading] = useBoolean();
  const [output, setOutput] = useState('AI will create compelling, on-brand copy right here.');

  const generate = (type) => {
    setLoading.on();
    setTimeout(() => {
      const samples = {
        description: 'A sun-splashed living room opens to a rooftop deck with skyline views. Optimized to highlight commute, schools, and financing.',
        social: 'Just listed: Skyline Terrace in Austin! Tour-worthy rooftop, smart climate, and walkable vibes. DM for AI-scheduled tours.',
        email: 'Hi there! Here are 2 tour slots for Skyline Terrace this week. AI concierge included for neighborhood intel + financing.',
        promo: 'Spring Upgrade Event: AI-crafted tours with instant follow-ups. Save time while we keep leads engaged 24/7.',
      };
      setOutput(samples[type]);
      setLoading.off();
    }, 800);
  };

  return (
    <Box bg="white" borderWidth={1} rounded="xl" p={5} shadow="sm">
      <Flex justify="space-between" align="center" mb={3}>
        <Heading size="sm">AI Content Generator</Heading>
        <Badge colorScheme="purple">Live demo</Badge>
      </Flex>
      <Text fontSize="sm" color="gray.600" mb={3}>
        Generate ready-to-use content across channels in seconds.
      </Text>
      <SimpleGrid columns={{ base: 2, sm: 4 }} gap={2} mb={3}>
        <Button size="sm" onClick={() => generate('description')} colorScheme="teal" variant="outline">
          Property description
        </Button>
        <Button size="sm" onClick={() => generate('social')} variant="outline">
          Social post
        </Button>
        <Button size="sm" onClick={() => generate('email')} variant="outline">
          Email newsletter
        </Button>
        <Button size="sm" onClick={() => generate('promo')} variant="outline">
          Promotional
        </Button>
      </SimpleGrid>
      <Box borderWidth={1} borderStyle="dashed" rounded="lg" p={3} minH="120px" bg="gray.50">
        {loading ? (
          <HStack>
            <Spinner size="sm" />
            <Text>AI is crafting copy…</Text>
          </HStack>
        ) : (
          <Text fontSize="sm" color="gray.700">
            {output}
          </Text>
        )}
      </Box>
    </Box>
  );
}

function Upgrader() {
  const [mode, setMode] = useState('standard');
  const current = useMemo(
    () =>
      mode === 'standard'
        ? {
            headline: 'Basic property page',
            cta: 'Contact agent',
            bullets: ['Limited details', 'Manual scheduling', 'Generic copy'],
          }
        : {
            headline: 'AI-upgraded experience',
            cta: 'Book an AI-guided tour',
            bullets: ['Dynamic highlights per visitor', 'Instant scheduling + reminders', 'SEO-tuned content'],
          },
    [mode],
  );

  return (
    <Box bg="gray.900" color="white" rounded="xl" p={5} borderWidth={1} borderColor="gray.700" shadow="lg">
      <Flex justify="space-between" align="center" mb={4}>
        <Heading size="sm">AI Website Upgrader</Heading>
        <Button size="sm" onClick={() => setMode((prev) => (prev === 'standard' ? 'ai' : 'standard'))} leftIcon={<RiToggleLine />}>
          Toggle {mode === 'standard' ? 'AI-enhanced' : 'Standard'}
        </Button>
      </Flex>
      <Text color="gray.300" mb={3}>
        See how AI transforms layout, messaging, and conversion moments in real time.
      </Text>
      <Stack spacing={3}>
        <Heading size="md">{current.headline}</Heading>
        <Button colorScheme="teal" alignSelf="flex-start">
          {current.cta}
        </Button>
        <Stack spacing={2}>
          {current.bullets.map((item) => (
            <Text key={item} display="flex" alignItems="center" gap={2} color="gray.200">
              <RiSparklingLine /> {item}
            </Text>
          ))}
        </Stack>
        <Divider borderColor="gray.700" />
        <Text fontSize="sm" color="gray.400">
          AI improved engagement by 42% with optimized CTAs, live chat, and automated follow-ups.
        </Text>
      </Stack>
    </Box>
  );
}

function SchedulingDemo() {
  const [selection, setSelection] = useState('p1');
  const property = useMemo(() => properties.find((p) => p.id === selection) || properties[0], [selection]);

  return (
    <Box bg="white" rounded="xl" borderWidth={1} p={5} shadow="sm">
      <Flex justify="space-between" align="center" mb={4}>
        <Heading size="sm">AI Scheduling Assistant</Heading>
        <Badge colorScheme="green" variant="subtle">
          Live availability
        </Badge>
      </Flex>
      <Text fontSize="sm" color="gray.600" mb={3}>
        AI reviews your calendar and proposes the best times automatically.
      </Text>
      <Select value={selection} onChange={(e) => setSelection(e.target.value)} mb={3}>
        {properties.map((p) => (
          <option key={p.id} value={p.id}>
            {p.title}
          </option>
        ))}
      </Select>
      <SimpleGrid columns={{ base: 1, sm: 2 }} gap={3}>
        {['Thu 10:30 AM', 'Thu 1:00 PM', 'Fri 9:00 AM', 'Fri 2:30 PM'].map((slot) => (
          <Button key={slot} variant="outline" colorScheme="teal">
            {slot}
          </Button>
        ))}
      </SimpleGrid>
      <Divider my={4} />
      <Text fontSize="sm" color="gray.600">
        Confirmation preview: "Tour booked for {property.title}. AI will text directions, parking, and follow-up questions."
      </Text>
    </Box>
  );
}

function PhoneAssistant() {
  const scenarios = [
    'Property inquiry',
    'Schedule viewing',
    'General info',
    'After-hours',
  ];

  return (
    <Box bg="white" rounded="xl" borderWidth={1} p={5} shadow="sm">
      <Flex justify="space-between" align="center" mb={3}>
        <Heading size="sm">AI Phone Assistant</Heading>
        <Badge colorScheme="orange" variant="subtle">
          Sample call
        </Badge>
      </Flex>
      <Text fontSize="sm" color="gray.600" mb={3}>
        Simulated phone interface with live transcription and AI answers.
      </Text>
      <SimpleGrid columns={{ base: 2, sm: 4 }} gap={2} mb={3}>
        {scenarios.map((scenario) => (
          <Button key={scenario} size="sm" variant="outline" colorScheme="gray">
            {scenario}
          </Button>
        ))}
      </SimpleGrid>
      <Box bg="gray.900" color="gray.50" rounded="lg" p={4} minH="140px">
        <Text fontWeight="bold" mb={2}>
          Transcript (demo)
        </Text>
        <Stack spacing={2} fontSize="sm">
          <Text>Caller: "Can I see Lakeside Villa on Saturday?"</Text>
          <Text color="teal.200">AI: "Absolutely! 10:30 AM and 1:00 PM are open. I’ll text directions and confirm."</Text>
          <Text color="teal.100">AI routes: Sends lead to agent, logs in CRM, transcribes voicemail.</Text>
        </Stack>
      </Box>
      <Button mt={3} colorScheme="teal" w="full" leftIcon={<RiCellphoneLine />}>
        Try a sample call
      </Button>
    </Box>
  );
}

function AIShowcase() {
  return (
    <Box py={12}>
      <Container maxW="7xl">
        <Grid templateColumns={{ base: '1fr', md: '1fr 0.9fr' }} gap={8}>
          <GridItem>
            <Heading size="lg" mb={3}>
              AI features showcase
            </Heading>
            <Text color="gray.600" mb={6}>
              Explore how OpenAI and Claude power concierge chat, scheduling, content, analytics, and even phone support—all in
              one demo site.
            </Text>
            <Stack spacing={4}>
              <Box bg="white" rounded="xl" borderWidth={1} p={4} shadow="sm">
                <HStack justify="space-between" mb={2}>
                  <Heading size="sm">AI Customer Service Chatbot</Heading>
                  <Badge colorScheme="teal">Always on</Badge>
                </HStack>
                <Text color="gray.600" fontSize="sm" mb={2}>
                  Floating on every page, able to answer property details, availability, financing, and neighborhood intel with
                  typing indicators and demo conversations.
                </Text>
                <Stack direction={{ base: 'column', sm: 'row' }} spacing={3}>
                  <Button size="sm" colorScheme="teal" leftIcon={<RiChatSmile3Line />}>
                    Try live chat
                  </Button>
                  <Button size="sm" variant="outline" leftIcon={<RiRefreshLine />}>
                    Demo conversation
                  </Button>
                </Stack>
              </Box>

              <SchedulingDemo />
              <Upgrader />
              <ContentGenerator />
              <PhoneAssistant />
            </Stack>
          </GridItem>
          <GridItem>
            <Box bg="gray.900" color="white" rounded="2xl" p={6} shadow="xl" borderWidth={1} borderColor="gray.700">
              <Heading size="md" mb={3}>
                ROI + Packaging
              </Heading>
              <Text color="gray.300" mb={4}>
                Show clients the business impact instantly.
              </Text>
              <Stack spacing={4}>
                {[{ label: 'Lead response time', value: '30 sec', lift: '+9x faster' }, { label: 'Engagement', value: '+40%', lift: 'from optimized CTAs' }, { label: 'Availability', value: '24/7', lift: 'Always-on AI team' }].map((item) => (
                  <Flex key={item.label} align="center" justify="space-between" bg="gray.800" p={4} rounded="lg">
                    <Box>
                      <Text fontSize="sm" color="gray.400">
                        {item.label}
                      </Text>
                      <Text fontWeight="bold">{item.value}</Text>
                    </Box>
                    <Badge colorScheme="teal">{item.lift}</Badge>
                  </Flex>
                ))}
              </Stack>
              <Divider my={4} borderColor="gray.700" />
              <Text fontWeight="bold" mb={2}>
                Demo journey
              </Text>
              <Stack spacing={2} fontSize="sm" color="gray.200">
                <Text>• Start on listings with AI chat ready.</Text>
                <Text>• Book a tour via AI scheduler.</Text>
                <Text>• See upgraded layouts and content.</Text>
                <Text>• Review analytics for proof of ROI.</Text>
              </Stack>
              <Button mt={4} colorScheme="teal" leftIcon={<RiBarChart2Line />} w="full">
                Open analytics demo
              </Button>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

export default AIShowcase;
