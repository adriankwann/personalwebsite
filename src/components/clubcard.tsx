import React from "react";
import {
  Box,
  Heading,
  Text,
  Link,
  Flex,
  Image,
  UnorderedList,
  ListItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

type ClassCardProps = {
  name: string;
  description: string[];
  link: string;
  logo: string;
};

const ClubCard: React.FC<ClassCardProps> = ({
  name,
  description,
  link,
  logo,
}) => {
  const width = useBreakpointValue({
    base: "90vw",
    sm: "45vh",
    md: "40vh",
  });

  const imageSize = useBreakpointValue({
    base: "2em",
    sm: "2.5em",
    md: "3em",
  });

  const headingSize = useBreakpointValue({
    base: "sm",
    md: "md",
  });

  return (
    <Link
      href={link}
      isExternal
      _hover={{ textDecoration: "none" }}
      display="block"
    >
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Box
          border="1px solid white"
          borderRadius="md"
          p="4"
          mb="4"
          width={width}
          minHeight="13vh"
          maxHeight="13vh"
          overflow="none"
          position="relative"
          minH="35vh"
          boxShadow="lg"
        >
          <Flex direction="column" align="center">
            <Image
              src={logo}
              alt={`${name} logo`}
              width={imageSize}
              height={imageSize}
              objectFit="contain"
              mb="2"
              mt="1em"
            />

            <Heading
              size={headingSize}
              mb="2"
              fontWeight="400"
              textAlign="center"
            >
              {name}
            </Heading>
          </Flex>
          <Text fontWeight="300" mb="1">
            {description[0]}
          </Text>
          <UnorderedList textAlign="left">
            {description.slice(1).map((item, index) => (
              <ListItem key={index}>{item}</ListItem>
            ))}
          </UnorderedList>
        </Box>
      </motion.button>
    </Link>
  );
};

export default ClubCard;
