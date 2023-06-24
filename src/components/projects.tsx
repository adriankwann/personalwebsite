import React, { useEffect } from "react";
import { VStack, HStack, Box, Heading, Text } from "@chakra-ui/react";
import ProjectCard from "./projectcard";
import dBridge from "./assets/dbridge.png";
import babpoll from "./assets/babpoll.png";
import AOS from "aos";
import "aos/dist/aos.css";
import saas from "./assets/saas.png";
import zetta from "./assets/zetta.png";

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const delayStep = 100;

  const projects = [
    {
      title: "dBridge",
      description:
        "Allows users to find the best conversion rates and trading strategies between two tokens of their choice.",
      image: dBridge, // Update the image value here
      technologies: ["React", "Solidity", "JavaScript"],
    },
    {
      title: "B@BPoll",
      description:
        "A zero-knowledge anonymous voting protocol deployed on polygon, using Semaphore's zkSNARKs library.",
      image: babpoll,
      technologies: ["React", "Solidity", "TypeScript", "Chakra"],
    },
    {
      title: "Zettablock's AI Assistant",
      description:
        "A chatbot that allows users to use natural language to setup an API automatically with required blockchain data.",
      image: zetta,
      technologies: ["Golang", "Gin", "AWS", "GPT API"],
    },
    {
      title: "Gitlet",
      description:
        "A git-like version control system, allowing users to create, add, commit, checkout, merge, and reset files in a local repository.",
      image:
        "https://cloudstudio.com.au/wp-content/uploads/2021/06/GitWorkflow-4.png",
      technologies: ["Java"],
    },
    {
      title: "SAAS Website",
      description:
        "Built the SAAS website. This website serves as a landing page for clients and prospective applicants.",
      image: saas,
      technologies: ["React", "Django", "Chakra"],
    },
  ];

  return (
    <Box
      display="flex"
      alignItems="flex-start" // Align items to the top
      justifyContent="center"
      height="auto"
      marginTop="50px"
    >
      <VStack spacing="20px" align="center">
        <Heading
          size="lg"
          color="transparent"
          bgGradient="linear(to-r, #3e64ff, #1dd3bd)"
          bgClip="text"
          data-aos="fade-up"
        >
          Projects
        </Heading>

        <HStack spacing="20px">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
            />
          ))}
        </HStack>
        <HStack spacing="20px">
          {projects.slice(3, 6).map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              data-aos="fade-in"
              data-aos-delay={index * delayStep}
            />
          ))}
        </HStack>
      </VStack>
    </Box>
  );
}
