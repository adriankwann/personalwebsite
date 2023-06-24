import React, { useEffect } from "react";
import { VStack, HStack, Box, Heading } from "@chakra-ui/react";
import ProjectCard from "./projectcard";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const delayStep = 100;

  const projects = [
    {
      title: "Zettablock's AI Assistant",
      description:
        "A chatbot that allows users to use natural language to setup an API automatically with required blockchain data.",
      image: "https://photos.app.goo.gl/Krf7wc9xz1jeQ1D87",
      technologies: ["Golang", "Gin", "AWS", "GPT API"],
    },
    {
      title: "B@BPoll",
      description:
        "A zero-knowledge anonymous voting protocol deployed on polygon, using Semaphore's zkSNARKs library.",
      image: "https://photos.app.goo.gl/bdt7iAqV57gYWhhM8",
      technologies: ["React", "Solidity", "TypeScript", "Chakra"],
    },
    {
      title: "dBridge",
      description:
        "Allows users to find the best conversion rates and trading strategies between two tokens of their choice.",
      image: "https://photos.app.goo.gl/2CSmXQXtRXB5sR9T9",
      technologies: ["React", "Solidity", "JavaScript"],
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
      image: "https://photos.app.goo.gl/usdDpctiBZnZRCYz7",
      technologies: ["React", "Django", "Chakra"],
    },
  ];

  return (
    <Box
      display="flex"
      alignItems="flex-start" // Align items to the top
      justifyContent="center"
      height="auto"
      marginTop="10vh"
    >
      <VStack spacing="20px" align="center">
        <Heading
          size="lg"
          color="transparent"
          bgGradient="linear-gradient(to right, rgba(29, 211, 189, 0.5), rgba(62, 100, 255, 0.5))"
          bgClip="text"
          data-aos="fade-up"
          fontWeight="700"
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
