import {
  ChakraProvider,
  extendTheme,
  Center,
  Heading,
  Spinner,
  Divider
} from "@chakra-ui/react";
import Head from "next/head";
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
      <Head>
        <style>
          {`
          body {
            background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
            background-size: 400% 400%;
            height: 100vh;
            animation: gradient-animation 15s ease infinite;
          }
          
          @keyframes gradient-animation {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          `}
        </style>
      </Head>
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
          <Header />
          <HeroSection />
          <div id="content-wrapper">
            <div id="about-section">
              <About />
            </div>
            <Divider orientation="horizontal" />
            <div id="projects-section">
              <Projects />
            </div>
          </div>
          <Footer />
        </>
      )}
    </ChakraProvider>
  );
}
