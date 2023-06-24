import React, { useEffect } from "react";
import { Box, Heading, Stack, Text, Link, Image } from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import ClassCard from "./classcard";
import { motion } from "framer-motion";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

//   const languages = [
//     "Python",
//     "JavaScript",
//     "TypeScript",
//     "Solidity",
//     "C",
//     "Java",
//     "Go",
//     "GraphQL",
//     "SQL",
//   ];
//   const frameworks = [
//     "react",
//     "next",
//     "Gin",
//     "Flask",
//     "AWS",
//     "Supabase",
//     "MongoDB",
//     "Prisma",
//     "Git",
//     "Node",
//     "Vercel",
//     "tRPC",
//     "NextAuth",
//     "Tailwind",
//   ];

//   const splitLanguages = (arr) => {
//     const midpoint = Math.ceil(arr.length / 2);
//     const firstHalf = arr.slice(0, midpoint);
//     const secondHalf = arr.slice(midpoint);
//     return [firstHalf, secondHalf];
//   };

//   const [firstRow, secondRow] = splitLanguages(languages);
//   const [firstFrameworks, secondFrameworks] = splitLanguages(frameworks);

  const companies = [
    {
      logo: "https://pbs.twimg.com/profile_images/1587543750271811584/ZyZ6Zhg__400x400.jpg",
      caption: "Zettablock",
      link: "https://zettablock.com/",
    },
    {
      logo: "https://flowgpt.com/flowgpt.png",
      caption: "FlowGPT",
      link: "https://flowgpt.com",
    },
    {
      logo: "https://www.circle.com/hubfs/Circle%20logo%202020/circle-icon.png",
      caption: "Circle",
      link: "https://circle.com",
    },
    {
      logo: "https://www.augury.com/wp-content/uploads/2023/05/Augury-Logo-for-Author-page.png",
      caption: "Augury",
      link: "https://augury.com",
    },
  ];

  const classes = [
    {
      name: "CS 61A",
      description: "Structure and Interpretation of Computer Programs",
      link: "https://cs61a.org/",
    },
    {
      name: "CS 61B",
      description: "Data Structures and Algorithms",
      link: "https://inst.eecs.berkeley.edu/~cs61b/fa21/",
    },
    {
      name: "CS 61C",
      description: "Great Ideas in Computer Architecture",
      link: "https://cs61c.org/",
    },
    {
      name: "CS 70",
      description: "Discrete Mathematics and Probability Theory",
      link: "https://cs70.org/",
    },
    {
      name: "CS 170",
      description: "Efficient Algorithms and Intractable Problems",
      link: "https://cs170.org/",
    },
    {
      name: "Data 100",
      description: "Principles of Data Science",
      link: "https://ds100.org/su23/",
    },
  ];

  const rows = [];
  const rowSize = 2;

  for (let i = 0; i < classes.length; i += rowSize) {
    const row = classes.slice(i, i + rowSize);
    rows.push(row);
  }

  return (
    <Box>
      <Box
        display="flex"
        alignItems="flex-start"
        justifyContent="center"
        height="auto"
        marginTop="10vh"
        marginBottom="15px"
        data-aos="fade-in"
      >
        <Heading
          size="lg"
          color="transparent"
          bgGradient="linear(to-r, #3e64ff, #1dd3bd)"
          bgClip="text"
        >
          About
        </Heading>
      </Box>
      <Box
        display="flex"
        alignItems="flex-start"
        justifyContent="center"
        height="auto"
        marginBottom="25px"
        data-aos="fade-up"
        marginTop="50px"
      >
        <Heading size="md" color="black" textAlign="center">
          Previous Companies
        </Heading>
      </Box>
      <Box
        display="flex"
        alignItems="flex-start"
        justifyContent="center"
        height="auto"
        marginBottom="50px"
        data-aos="fade-up"
        marginTop="50px"
      >
        <Stack direction="row" data-aos="fade-in" spacing={8} align="center">
          {/* Logos with captions */}
          {companies.map((company) => (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                background: "none",
                border: "none",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Link
                href={company.link}
                isExternal
                _hover={{ textDecoration: "none" }}
              >
                <Box key={company.logo} textAlign="center">
                  <Image src={company.logo} alt="Company logo" height="50px" />
                  <Text fontSize="sm" textAlign="center" marginTop="10px">
                    {company.caption}
                  </Text>
                </Box>
              </Link>
            </motion.button>
          ))}
        </Stack>
      </Box>
      <Box data-aos="fade-up">
        <Heading size="md" textAlign="center">
          Previous Coursework
        </Heading>
      </Box>
      <Box
        display="flex"
        alignItems="flex-start"
        justifyContent="center"
        height="auto"
        marginBottom="25px"
        data-aos="fade-up"
        marginTop="50px"
      >
        <Stack direction="row" spacing={8} align="center">
          {/* Class cards */}
          {rows.map((row, index) => (
            <Stack key={index} direction="column" spacing={4}>
              {row.map((classItem) => (
                <ClassCard
                  key={classItem.name}
                  name={classItem.name}
                  description={classItem.description}
                  link={classItem.link}
                />
              ))}
            </Stack>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
