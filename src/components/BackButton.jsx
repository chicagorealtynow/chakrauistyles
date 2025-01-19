import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

function BackButton() {
  return (
    <Link to="/">
      <Button mt={4}>Back to Home</Button>
    </Link>
  );
}

export default BackButton;
