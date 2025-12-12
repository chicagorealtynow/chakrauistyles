import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const theme = extendTheme({
  fonts: {
    heading: '"Inter", system-ui, -apple-system, sans-serif',
    body: '"Inter", system-ui, -apple-system, sans-serif',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.800',
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
);
