import React, { useEffect } from "react";
import { VStack, HStack, Box, Heading, useDisclosure } from "@chakra-ui/react";
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
      image: "https://i.ibb.co/RvRLCSz/zetta.png",
      technologies: ["Golang", "Gin", "AWS", "GPT API"],
      association: "Zettablock",
      github: "",
      demo: "",
      longDescription: "Zettablock’s AI Assistant is an advanced feature integrated within its product suite, empowering users to seamlessly create SQL queries through natural language inputs. By employing GPT's 3.5 Turbo 16K model, the AI Assistant streamlines API setup, with a demonstrated 35% reduction in error rates and a remarkable 70% reduction in users’ API setup times. As part of the implementation, the AI Assistant utilizes a specially curated Text-to-SQL dataset comprising 20,000 inputs and GPT outputs from users and research papers, which facilitates efficient training. Additionally, Zettablock's AI Assistant is equipped with a customized test framework and evaluation metric, capable of testing among 10+ large language models (LLMs), which has proven to be a game-changer by reducing development time by 100%."
    },
    {
      title: "B@BPoll",
      description:
        "A zero-knowledge anonymous voting protocol deployed on polygon, using Semaphore's zkSNARKs library.",
      image: "https://i.ibb.co/XYVmHDz/babpoll.png",
      technologies: ["React", "Solidity", "TypeScript", "Chakra"],
      association: "Blockchain at Berkeley",
      github: "https://github.com/adriankwann/babpollfront",
      demo: "https://www.youtube.com/embed/Wcbaz2JtV-0&t=3s",
      longDescription:
        "B@BPoll, developed from February to May 2023, is an innovative voting platform that leverages Solidity, React, and JavaScript to ensure anonymous and secure voting in elections. By incorporating Semaphore's Zero-Knowledge Proof (ZKP) circuits, the platform establishes a new standard for voting privacy and security. B@BPoll’s voting contracts were meticulously crafted from the ground up and deployed on the Polygon network, with seamless integration with a custom-built React frontend through ABI connections. This project successfully enabled over 100 club members to participate in club elections, resulting in a 95% user satisfaction rate and a 25% increase in participation.",
    },
    {
      title: "dBridge",
      description:
        "Allows users to find the best conversion rates and trading strategies between two tokens of their choice.",
      image: "https://i.ibb.co/cxDvqZw/Screenshot-2023-04-24-at-3-30-59-PM.png",
      technologies: ["React", "Solidity", "JavaScript"],
      association: "",
      github: "https://github.com/adriankwann/dexapp",
      demo: "",
      longDescription:
        "dBridge is a cutting-edge DeFi exchange aggregator developed between March 2023 to present. It is engineered using React and JavaScript and efficiently calculates optimal trading rates and strategies for over 20 tokens across more than 15 exchanges. With a focus on user experience, the frontend is designed to be responsive and intuitive, featuring custom animations that have earned it a 90% user satisfaction rate. Moreover, dBridge ensures peak performance even under high traffic by employing caching and optimization strategies that have achieved a remarkable 25% increase in load times.",
    },
    {
      title: "Gitlet",
      description:
        "A git-like version control system, allowing users to create, add, commit, checkout, merge, and reset files in a local repository.",
      image:
        "https://cloudstudio.com.au/wp-content/uploads/2021/06/GitWorkflow-4.png",
      technologies: ["Java"],
      association: "",
      github: "https://github.com/adriankwann/61b/tree/main/gitlet",
      demo: "",
      longDescription:
        "Gitlet is a robust version control system akin to Git, developed in Java between April and May 2022. The system allows users to stage and commit files, merge changes, and restore and revert states, providing comprehensive control over file versions. Gitlet employs sophisticated data structures and SHA-1 hashing to enable efficient serialization and a tree-like file structure. It also features capabilities like maintaining chronological sequences of commits, initializing a Git workspace, and generating file log history, making it a powerful tool for managing project development.",
    },
    {
      title: "SAAS Website",
      description:
        "Built the SAAS website. This website serves as a landing page for clients and prospective applicants.",
      image: "https://i.ibb.co/px90hRH/saas.png",
      technologies: ["React", "Django", "Chakra"],
      association: "Students Association of Applied Statistics",
      github: "https://github.com/SUSA-org/usa-website",
      demo: "",
      longDescription: "",
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
              association={project.association}
              github={project.github}
              longDescription={project.longDescription}
              demo={project.demo}
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
              association={project.association}
              github={project.github}
              longDescription={project.longDescription}
              data-aos="fade-in"
              data-aos-delay={index * delayStep}
              demo={project.demo}
            />
          ))}
        </HStack>
      </VStack>
    </Box>
  );
}
