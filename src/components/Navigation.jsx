import React from 'react';
    import { Link } from 'react-router-dom';
    import { Box, Button, Flex } from '@chakra-ui/react';

    function Navigation() {
      return (
        <Flex as="nav" justifyContent="center" p={4} bg="gray.100">
          <Link to="/">
            <Button mr={2}>Home</Button>
          </Link>
          <Link to="/padding-margin">
            <Button mr={2}>Padding & Margin</Button>
          </Link>
          <Link to="/color">
            <Button mr={2}>Color</Button>
          </Link>
          <Link to="/gradients">
            <Button mr={2}>Gradients</Button>
          </Link>
          <Link to="/typography">
            <Button mr={2}>Typography</Button>
          </Link>
          <Link to="/layout">
            <Button mr={2}>Layout</Button>
          </Link>
          <Link to="/display">
            <Button mr={2}>Display</Button>
          </Link>
          <Link to="/flexbox">
            <Button mr={2}>Flexbox</Button>
          </Link>
          <Link to="/grid">
            <Button mr={2}>Grid</Button>
          </Link>
          <Link to="/background">
            <Button mr={2}>Background</Button>
          </Link>
          <Link to="/borders">
            <Button mr={2}>Borders</Button>
          </Link>
          <Link to="/border-radius">
            <Button mr={2}>Border Radius</Button>
          </Link>
          <Link to="/position">
            <Button mr={2}>Position</Button>
          </Link>
          <Link to="/shadow">
            <Button mr={2}>Shadow</Button>
          </Link>
          <Link to="/filter">
            <Button mr={2}>Filter</Button>
          </Link>
          <Link to="/pseudo-props">
            <Button>Pseudo Props</Button>
          </Link>
        </Flex>
      );
    }

    export default Navigation;
