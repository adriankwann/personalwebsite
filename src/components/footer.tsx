import React from "react";
import { Divider, Box, HStack, Link } from "@chakra-ui/react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <Box marginTop="35px">
      <Divider orientation="horizontal" />
      <footer style={footerStyle}>
        <HStack justifyContent="center" spacing={4}>
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
        <p style={footerText}>© 2023 Adrian Kwan. All rights reserved.</p>
      </footer>
    </Box>
  );
};

const footerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white",
  color: "black",
  height: "80px",
};

const footerText = {
  fontFamily: "Roboto, sans-serif",
  fontWeight: 300,
  fontSize: "0.875rem",
  marginLeft: "10px",
};

export default Footer;
