import React from 'react';
import {
  Badge,
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';
import { analyticsSamples } from '../data/properties';

const heatmapData = [
  { name: 'Waterfront', interest: 86 },
  { name: 'Urban core', interest: 74 },
  { name: 'Suburbs', interest: 64 },
  { name: 'Mountain', interest: 58 },
  { name: 'Historic', interest: 44 },
];

function AnalyticsDashboard() {
  return (
    <Box py={12}>
      <Container maxW="7xl">
        <Flex justify="space-between" align="center" mb={6}>
          <Box>
            <Heading size="lg">AI Analytics Dashboard</Heading>
            <Text color="gray.600">Visitor behavior, lead quality, and predictive insights.</Text>
          </Box>
          <Badge colorScheme="teal">Live demo</Badge>
        </Flex>

        <Grid templateColumns={{ base: '1fr', lg: '1.1fr 0.9fr' }} gap={6}>
          <GridItem>
            <Box bg="white" rounded="xl" borderWidth={1} p={5} shadow="sm">
              <Heading size="sm" mb={4}>
                Traffic & conversions
              </Heading>
              <Box h="280px">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={analyticsSamples.traffic}>
                    <XAxis dataKey="name" stroke="#A0AEC0" />
                    <YAxis stroke="#A0AEC0" />
                    <Tooltip />
                    <Line type="monotone" dataKey="visitors" stroke="#0BC5EA" strokeWidth={3} dot={false} />
                    <Line type="monotone" dataKey="conversions" stroke="#805AD5" strokeWidth={3} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Stack spacing={4}>
              <Box bg="white" rounded="xl" borderWidth={1} p={4} shadow="sm">
                <Heading size="sm" mb={2}>
                  Automated insights
                </Heading>
                <Stack spacing={2} color="gray.700" fontSize="sm">
                  {analyticsSamples.recommendations.map((rec) => (
                    <Text key={rec}>• {rec}</Text>
                  ))}
                </Stack>
              </Box>
              <Box bg="white" rounded="xl" borderWidth={1} p={4} shadow="sm">
                <Heading size="sm" mb={2}>
                  Lead quality scoring
                </Heading>
                <Text color="gray.600" fontSize="sm" mb={2}>
                  AI predicts likely buyers and best time to follow up.
                </Text>
                <ResponsiveContainer width="100%" height={180}>
                  <BarChart data={heatmapData}>
                    <XAxis dataKey="name" stroke="#A0AEC0" />
                    <YAxis stroke="#A0AEC0" />
                    <Tooltip />
                    <Bar dataKey="interest" fill="#0BC5EA" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </Stack>
          </GridItem>
        </Grid>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap={4} mt={8}>
          {[{ label: 'Hot properties', value: 'Waterfront + Virtual Tours', detail: '45% more inquiries' }, { label: 'Best time to post', value: 'Tue/Thu 9 AM', detail: 'Predictive traffic spikes' }, { label: 'Likely buyer score', value: '92/100', detail: 'Based on chat + viewing intent' }].map((metric) => (
            <Box key={metric.label} bg="white" rounded="lg" borderWidth={1} p={4} shadow="sm">
              <Text fontSize="sm" color="gray.500">
                {metric.label}
              </Text>
              <Text fontWeight="bold" fontSize="xl">
                {metric.value}
              </Text>
              <Text fontSize="sm" color="gray.600">
                {metric.detail}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default AnalyticsDashboard;
