import React from 'react';
import { Box, Container, Flex, Icon, Text } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import { RiSparklingLine } from 'react-icons/ri';
import Home from './pages/Home';
import Listings from './pages/Listings';
import PropertyDetail from './pages/PropertyDetail';
import AIShowcase from './pages/AIShowcase';
import AnalyticsDashboard from './pages/AnalyticsDashboard';
import AdminDemo from './pages/AdminDemo';
import SiteHeader from './components/SiteHeader';
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <Flex direction="column" minH="100vh">
      <SiteHeader />
      <Box as="main" flex="1" pb={20}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/properties/:id" element={<PropertyDetail />} />
          <Route path="/ai-features" element={<AIShowcase />} />
          <Route path="/analytics" element={<AnalyticsDashboard />} />
          <Route path="/demo-controls" element={<AdminDemo />} />
        </Routes>
      </Box>
      <Box as="footer" bg="gray.900" color="gray.100" py={6} mt={10}>
        <Container maxW="7xl">
          <Flex justify="space-between" align={{ base: 'flex-start', md: 'center' }} direction={{ base: 'column', md: 'row' }} gap={3}>
            <Flex align="center" gap={2}>
              <Icon as={RiSparklingLine} color="teal.300" boxSize={5} />
              <Text fontWeight="bold">Lumina Realty AI Studio</Text>
            </Flex>
            <Text fontSize="sm" color="gray.400">
              Crafted to showcase AI-powered real estate experiences that adapt to any industry.
            </Text>
          </Flex>
        </Container>
      </Box>
      <ChatWidget />
    </Flex>
  );
}

export default App;
