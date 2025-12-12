import React, { useEffect, useMemo, useState } from 'react';
import {
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Icon,
  IconButton,
  Input,
  Switch,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { RiChatSmile3Line, RiCloseLine, RiFlashlightLine } from 'react-icons/ri';

const uid = () => Math.random().toString(36).slice(2, 9);

const templates = {
  demo: [
    {
      role: 'assistant',
      text: 'Hi! I can help with properties, neighborhood intel, or schedule a tour. Which home caught your eye? 😊',
    },
    {
      role: 'user',
      text: 'Tell me about Skyline Terrace and if I can see it Friday',
    },
    {
      role: 'assistant',
      text: 'Skyline Terrace is a 4 bed with a rooftop deck in Austin. I can book you Friday at 10:30 AM or 1:00 PM—what works?',
    },
  ],
};

function ChatWidget() {
  const [open, setOpen] = useState(true);
  const [demoMode, setDemoMode] = useState(true);
  const [messages, setMessages] = useState(templates.demo);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);

  const bubbleBg = useColorModeValue('gray.100', 'gray.700');

  useEffect(() => {
    if (demoMode) {
      setMessages(templates.demo);
    }
  }, [demoMode]);

  const poweredBy = useMemo(
    () => (
      <HStack spacing={2} fontSize="xs" color="gray.500" pt={1}>
        <Badge colorScheme="teal" variant="subtle">
          Powered by AI
        </Badge>
        <Text>Real-time answers • Scheduling • Neighborhood intel</Text>
      </HStack>
    ),
    [],
  );

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessage = { role: 'user', text: input.trim(), id: uid() };
    setMessages((prev) => [...prev, newMessage]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          id: uid(),
          text: 'I reserved two times on Friday (10:30 AM and 1:00 PM) and shared school + commute details in your inbox.',
        },
      ]);
      setTyping(false);
    }, 900);
  };

  return (
    <Box position="fixed" right={4} bottom={4} zIndex={20}>
      <Flex align="center" justify="flex-end" mb={2}>
        <HStack
          spacing={3}
          px={3}
          py={1}
          rounded="full"
          bg="white"
          boxShadow="md"
          borderWidth={1}
        >
          <Text fontSize="xs" color="gray.600">
            Demo Mode
          </Text>
          <Switch size="sm" isChecked={demoMode} onChange={(e) => setDemoMode(e.target.checked)} />
          <Badge colorScheme="teal" variant="outline">
            OpenAI + Claude
          </Badge>
        </HStack>
      </Flex>
      <Box
        bg="white"
        w={{ base: 'full', sm: '380px' }}
        borderRadius="xl"
        boxShadow="xl"
        borderWidth={1}
        overflow="hidden"
      >
        <Flex align="center" justify="space-between" px={4} py={3} bg="teal.500" color="white">
          <HStack spacing={2}>
            <Icon as={RiChatSmile3Line} />
            <Box>
              <Text fontWeight="bold">AI Concierge</Text>
              <Text fontSize="xs" color="teal.50">
                Answers • Schedules • Guides
              </Text>
            </Box>
          </HStack>
          <IconButton
            size="sm"
            icon={<RiCloseLine />}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle chat"
            variant="ghost"
            colorScheme="whiteAlpha"
          />
        </Flex>
        {open && (
          <Box>
            <Box maxH="320px" overflowY="auto" px={4} py={3} bg={useColorModeValue('gray.50', 'gray.800')}>
              <VStack align="stretch" spacing={3}>
                {messages.map((message, idx) => (
                  <Flex key={message.id || idx} justify={message.role === 'assistant' ? 'flex-start' : 'flex-end'}>
                    <Box
                      bg={message.role === 'assistant' ? bubbleBg : 'teal.500'}
                      color={message.role === 'assistant' ? 'gray.800' : 'white'}
                      px={3}
                      py={2}
                      rounded="lg"
                      shadow="sm"
                      maxW="85%"
                      borderWidth={message.role === 'assistant' ? 1 : 0}
                    >
                      <Text fontSize="sm">{message.text}</Text>
                    </Box>
                  </Flex>
                ))}
                {typing && (
                  <HStack spacing={2} align="center" color="gray.500" fontSize="sm">
                    <Icon as={RiFlashlightLine} />
                    <Text>Assistant is typing…</Text>
                  </HStack>
                )}
              </VStack>
            </Box>
            <Divider />
            {poweredBy}
            <Divider />
            <Flex p={3} gap={2} align="center">
              <Input
                placeholder="Ask about pricing, tours, or the neighborhood"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                bg="white"
              />
              <Button colorScheme="teal" onClick={handleSend}>
                Send
              </Button>
            </Flex>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default ChatWidget;
