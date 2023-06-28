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
    sm: "65vh",
    md: "55vh",
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
  minHeight="320px"
maxHeight="fit-content"
  height="fit-content"
  overflow="none"
  position="relative"
  boxShadow="lg"
>
  <Flex direction="column" align="center" justify="center">
    <Image
      src={logo}
      alt={`${name} logo`}
      width={imageSize}
      mb="2"
      mt="1em"
    />

    <Heading
      size={headingSize}
      mb="2"
      fontWeight="400"
      // textAlign="center"
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