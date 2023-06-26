import React, { useEffect } from "react";
import {
  Box,
  Heading,
  Stack,
  Text,
  Link,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import ClassCard from "./classcard";
import { motion } from "framer-motion";
import ResumeModal from "./resumemodal";
import Wave from "react-wavify";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure();

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
      link: "https://eecs70.org/",
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
      <Wave mask="url(#mask)" fill="url(#gradient)">
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0" stopColor="rgba(255, 255, 255, 1)" />
            <stop offset="0.3" stopColor="rgba(62, 100, 255, 0.4)" />
            <stop offset="0.7" stopColor="rgba(29, 211, 189, 0.4)" />
            <stop offset="1" stopColor="rgba(255, 255, 255, 1)" />
          </linearGradient>
          <mask id="mask">
            <rect x="0" y="0" width="2000" height="200" fill="url(#gradient)" />
          </mask>
        </defs>
      </Wave>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="auto"
        marginTop="10vh"
        marginBottom="15px"
        data-aos="fade-in"
      >
        <Heading
          size="lg"
          color="transparent"
          bgGradient="linear-gradient(to right, rgba(29, 211, 189, 0.5), rgba(62, 100, 255, 0.5))"
          bgClip="text"
          fontWeight="700"
        >
          About
        </Heading>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        marginBottom="25px"
        data-aos="fade-up"
        marginTop="50px"
        maxWidth="40%"
        marginLeft="auto"
        marginRight="auto"
      >
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <Text fontSize="2xl" fontWeight="300">
            My name is Adrian Kwan and I&apos;m currently studying Computer
            Science @{" "}
            <Text as="em" className="highlight">
              UC Berkeley
            </Text>
            . <br></br>I am an aspiring full-stack{" "}
            <Text as="em" className="highlight">
              software engineer
            </Text>{" "}
            and tech{" "}
            <Text as="em" className="highlight">
              entrepreneur
            </Text>
            .
          </Text>
          <Text fontSize="2xl" fontWeight="300">
            I&apos;m interested in LLMs, computer vision, zero knowledge proofs,
            and decentralized finance.
          </Text>
        </div>

        <Box textAlign="center" marginTop="25px">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              background:
                "linear-gradient(to right, rgba(29, 211, 189, 0.3), rgba(62, 100, 255, 0.3))",
              display: "flex",
              borderRadius: "25px",
              padding: "10px 20px",
              justifyContent: "center",
            }}
            onClick={onOpen}
          >
            <Text fontSize="xl" fontWeight="400">
              {" "}
              View Resume{" "}
            </Text>
          </motion.button>
        </Box>
      </Box>

      <Box
        display="flex"
        alignItems="flex-start"
        justifyContent="center"
        height="auto"
        marginBottom="25px"
        data-aos="fade-up"
        marginTop="15vh"
      >
        <Heading size="md" color="black" textAlign="center" fontWeight="100">
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
        <Stack
          direction="row"
          data-aos="fade-in"
          spacing={8}
          align="center"
          fontWeight="300"
        >
          {/* Logos with captions */}
          {companies.map((company) => (
            <motion.button
              key={company.logo}
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
                <Box textAlign="center">
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

      {/* <Box data-aos="fade-up" marginBottom="25px">
  <Heading size="md" textAlign="center" fontWeight="100">
    Campus Involvements
  </Heading>
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    marginBottom="25px"
    marginTop="20px"
  >
    <Stack
      direction="row"
      data-aos="fade-in"
      spacing={8}
      align="center"
      fontWeight="300"
    >
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
          href="https://saas.berkeley.edu/"
          isExternal
          _hover={{ textDecoration: "none" }}
        >
          <Box textAlign="center">
            <Image
              src="https://i.ibb.co/s9fVp2p/new-logo.png"
              alt="SAAS logo"
              height="50px"
              width = "100px"
            />
            <Text fontSize="sm" textAlign="center" marginTop="10px">
              SAAS Berkeley
            </Text>
          </Box>
        </Link>
      </motion.button>
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
          href="https://blockchain.berkeley.edu/"
          isExternal
          _hover={{ textDecoration: "none" }}
        >
          <Box textAlign="center">
            <Image
              src="https://i.ibb.co/dQdstSH/1519869642581.jpg"
              alt="SAAS logo"
              height="50px"
            />
            <Text fontSize="sm" textAlign="center" marginTop="10px">
              Blockchain at Berkeley
            </Text>
          </Box>
        </Link>
      </motion.button>
    </Stack>
  </Box> */}
{/* </Box> */}

      <Box data-aos="fade-up">
        <Heading size="md" textAlign="center" fontWeight="100">
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
        <ResumeModal isOpen={isOpen} onClose={onClose} />
      </Box>
    </Box>
  );
}
