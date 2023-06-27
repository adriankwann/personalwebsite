import React from "react";
import { Box, Heading, Grid } from "@chakra-ui/react";
import ClubCard from "./clubcard"; // Make sure to import ClubCard component

const zbDescription = [
  "The First Full-stack Real-time Web3 Data Infrastructure.",
  "Su23: Software Engineering Intern",
  "Project: NL to SQL AI Assistant",
];

const flowDescription = [
  "A community for anyone to share and discover the best LLM prompts",
  "Su23: Full-Stack Software Engineering Intern",
  "Project: Building Collections Feature (Similar to Spotify Playlists, for Prompts)",
];

const circleDescription = [
  "Issuer of USDC, the world’s leading digital dollar stablecoin.",
  "Su22: Data Science Intern",
  "Project: Web app for visualizing and analyzing transactional data among stablecoins",
];

const auguryDescription = [
  "Predictive, prescriptive AI for industrial manufacturing.",
  "Su21: Product Strategy Intern",
];
const companies = [
  {
    logo: "https://pbs.twimg.com/profile_images/1587543750271811584/ZyZ6Zhg__400x400.jpg",
    caption: "Zettablock",
    link: "https://zettablock.com/",
    description: zbDescription,
  },
  {
    logo: "https://flowgpt.com/flowgpt.png",
    caption: "FlowGPT",
    link: "https://flowgpt.com",
    description: flowDescription,
  },
  {
    logo: "https://www.circle.com/hubfs/Circle%20logo%202020/circle-icon.png",
    caption: "Circle",
    link: "https://circle.com",
    description: circleDescription,
  },
  {
    logo: "https://www.augury.com/wp-content/uploads/2023/05/Augury-Logo-for-Author-page.png",
    caption: "Augury",
    link: "https://augury.com",
    description: auguryDescription,
  },
];

const CompaniesSection = () => {
  return (
    <Box data-aos="fade-right">
      <Heading size="md" textAlign="center" fontWeight="100">
        Previous Work
      </Heading>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        marginBottom="25px"
        marginTop="20px"
      >
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gap={8}
          data-aos="fade-in"
          alignItems="center"
          fontWeight="300"
        >
          {companies.map((company, index) => (
            <ClubCard
              key={index}
              name={company.caption}
              description={company.description}
              link={company.link}
              logo={company.logo}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default CompaniesSection;
