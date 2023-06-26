import React from "react";
import { Divider, Box, HStack, Link } from "@chakra-ui/react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import NextLink from "next/link";

const Header: React.FC = () => {
  return (
    <Box>
      <header style={headerStyle}>
        <HStack justifyContent="space-between" width="100%" paddingX={8}>
          <Box flex="1" textAlign="left">
            <Link href="/" _hover={{ textDecoration: "none" }}>
              <h1 style={headingStyle}>Adrian Kwan</h1>
            </Link>
          </Box>
          <HStack spacing={4}>
            <Link href="https://github.com/adriankwann" isExternal>
              <FaGithub size={24} />
            </Link>

            <Link href="https://twitter.com/adriankwann" isExternal>
              <FaTwitter size={24} />
            </Link>
            <Link href="https://www.linkedin.com/in/adrianzykwan/" isExternal>
              <FaLinkedin size={24} />
            </Link>
          </HStack>
        </HStack>
      </header>
      <Divider orientation="horizontal" />
    </Box>
  );
};

const headerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white",
  color: "black",
  height: "80px",
};

const headingStyle = {
  fontFamily: "Roboto, sans-serif",
  fontWeight: 300,
  fontSize: "1.5rem",
};

export default Header;
