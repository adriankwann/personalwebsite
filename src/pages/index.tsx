import {
  ChakraProvider,
  extendTheme,
  Center,
  Heading,
  Spinner,
  Divider,
  Flex,
  Box,
} from "@chakra-ui/react";
import Header from "../components/header";
import HeroSection from "../components/HeroSection";
import React, { useState, useEffect } from "react";
import About from "../components/about";
import Projects from "../components/projects";
import Footer from "../components/footer";
import "@fontsource/lato/100.css";
import "@fontsource/lato/300.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import "@fontsource-variable/space-grotesk";

const theme = extendTheme({
  fonts: {
    heading: "'Space Grotesk', sans-serif",
    body: "'Lato', sans-serif",
  },
  components: {
    Text: {
      baseStyle: {
        mark: {
          bg: "green.200", // Set the background color for the highlight
          borderRadius: "4px",
        },
      },
    },
  },
});
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust the duration as needed
  }, []);

  return (
    <ChakraProvider theme={theme}>
      {isLoading ? (
        <Center height="100vh" flexDirection="column">
          <Heading
            as="h1"
            size="lg"
            mb={4}
            fontWeight="300"
            color="transparent"
            bgGradient="linear(to-r, purple.500, cyan.500)"
            bgClip="text"
            animation="gradient-animation 3s ease-in-out infinite alternate"
          >
            Adrian Kwan
          </Heading>
          <Spinner color="purple.500" size="xl" />
        </Center>
      ) : (
        <>
          <Box maxWidth="100%" overflowX="hidden">
            <Header />
            <HeroSection />
            <div id="about-section">
              <About />
            </div>
            <Flex flexDirection="column" alignItems="center">
              <Divider orientation="horizontal" width="80%" />
            </Flex>
            <div id="projects-section">
              <Projects />
            </div>
          </Box>
          <Footer />
        </>
      )}
    </ChakraProvider>
  );
}
