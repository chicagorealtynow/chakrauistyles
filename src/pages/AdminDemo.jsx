import React, { useState } from 'react';
import { Box, Button, Container, Grid, GridItem, Heading, SimpleGrid, Stack, Switch, Text } from '@chakra-ui/react';
import { RiRefreshLine, RiShieldCheckLine, RiToggleLine } from 'react-icons/ri';

function AdminDemo() {
  const [enabled, setEnabled] = useState({
    chat: true,
    scheduling: true,
    content: true,
    analytics: true,
  });

  const toggle = (key) => setEnabled((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <Box py={12}>
      <Container maxW="6xl">
        <Heading size="lg" mb={6}>
          Admin / Demo control panel
        </Heading>
        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6}>
          <GridItem>
            <Box bg="white" borderWidth={1} rounded="xl" p={5} shadow="sm">
              <Heading size="sm" mb={3}>
                Toggle features
              </Heading>
              <Stack spacing={3}>
                {[{ key: 'chat', label: 'AI chat concierge' }, { key: 'scheduling', label: 'Scheduling assistant' }, { key: 'content', label: 'Content generator' }, { key: 'analytics', label: 'Analytics dashboards' }].map((item) => (
                  <Box key={item.key} display="flex" justifyContent="space-between" alignItems="center" p={3} bg="gray.50" rounded="lg" borderWidth={1}>
                    <Text>{item.label}</Text>
                    <Switch isChecked={enabled[item.key]} onChange={() => toggle(item.key)} />
                  </Box>
                ))}
              </Stack>
              <Button mt={4} colorScheme="teal" leftIcon={<RiToggleLine />}>
                Switch to AI-powered version
              </Button>
            </Box>
          </GridItem>
          <GridItem>
            <Box bg="gray.900" color="white" rounded="xl" p={5} borderWidth={1} borderColor="gray.700" shadow="lg">
              <Heading size="sm" mb={3}>
                Branding + metrics
              </Heading>
              <Text color="gray.300" mb={4}>
                Swap logos, colors, and messaging instantly for client walk-throughs.
              </Text>
              <SimpleGrid columns={{ base: 1, sm: 2 }} gap={3}>
                {[{ label: 'Time saved per listing', value: '30 min' }, { label: 'Engagement lift', value: '+40%' }, { label: 'Leads captured after-hours', value: '96%' }, { label: 'Calls handled by AI', value: '100/day' }].map((metric) => (
                  <Box key={metric.label} bg="gray.800" p={4} rounded="lg" borderWidth={1} borderColor="gray.700">
                    <Text fontSize="sm" color="gray.400">
                      {metric.label}
                    </Text>
                    <Text fontWeight="bold">{metric.value}</Text>
                  </Box>
                ))}
              </SimpleGrid>
              <Button mt={4} colorScheme="teal" leftIcon={<RiShieldCheckLine />}>
                Reset demo
              </Button>
              <Button mt={2} variant="outline" colorScheme="gray" leftIcon={<RiRefreshLine />}>
                Show basic site
              </Button>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

export default AdminDemo;
