import React from "react";
import { Box, Heading, Text, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";

type ClassCardProps = {
  name: string;
  description: string;
  link: string;
};

const ClassCard: React.FC<ClassCardProps> = ({ name, description, link }) => {
  return (
    <Link
      href={link}
      isExternal
      _hover={{ textDecoration: "none" }}
      display="block"
    >
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Box
          borderWidth="1px"
          border="1px solid white"
          borderRadius="md"
          p="4"
          mb="4"
          width="35vh"
          minHeight="150px"
          maxHeight="fit-content"
          height="fit-content"
          fontWeight="300"
          boxShadow="lg" // added shadow
          fontSize="md"
        >
          <Heading size="md" mb="2" fontWeight="400">
            {name}
          </Heading>
          <Text fontWeight="300">{description}</Text>
        </Box>
      </motion.button>
    </Link>
  );
};

export default ClassCard;
