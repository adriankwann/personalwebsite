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
          borderRadius="md"
          p="4"
          mb="4"
          width="30vh"
          minHeight="13vh"
          overflow="scroll"
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
