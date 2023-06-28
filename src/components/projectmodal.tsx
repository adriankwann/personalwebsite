import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  Box,
  Link,
  Flex,
  Text,
  Heading,
  Tag,
  Wrap,
  Divider,
  Spinner,
  Image,
} from "@chakra-ui/react";
import { StaticImageData } from "next/image";
import { FaGithub } from "react-icons/fa";

type ProjectModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  thumbnailURL: string | StaticImageData;
  technologies: string[];
  github: string;
  association: string;
  longDescription: string;
  demo: string;
};

const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  thumbnailURL,
  technologies,
  github,
  association,
  longDescription,
  demo,
}) => {
  const [isIframeLoading, setIsIframeLoading] = useState(true);

  const handleIframeLoad = () => {
    setIsIframeLoading(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl">
      <ModalOverlay />
      <ModalContent maxHeight="85vh" overflowY="auto">
        <ModalHeader textAlign="center" fontWeight="400">
          Project Display
        </ModalHeader>
        <Flex justifyContent="center">
          <Divider orientation="horizontal" w="90%" />
        </Flex>
        <ModalCloseButton />
        <Box marginX={4} textAlign="left" marginTop="20px">
          <Heading size="md" fontWeight="400" marginBottom={2}>
            {title}
          </Heading>
          {association ? (
            <Text size="md" fontWeight="300">
              Project Associated with: {association}
            </Text>
          ) : (
            <Text size="md" fontWeight="300">
              Personal Project
            </Text>
          )}

          {typeof thumbnailURL === "string" ? (
            <Box marginTop="20px">
              <Image src={thumbnailURL} alt="proj image" />
            </Box>
          ) : null}

          {/* Embedded Video Section */}
          {demo ? (
            <Box my={4}>
              <Text size="md" fontWeight="300" marginBottom="3">
                Demo
              </Text>
              {isIframeLoading ? (
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  height="315px"
                >
                  <Spinner size="xl" />
                </Box>
              ) : null}
              <iframe
                width="100%"
                height="315"
                src={demo}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onLoad={handleIframeLoad}
                style={{ display: isIframeLoading ? "none" : "block" }}
              ></iframe>
            </Box>
          ) : null}

          {/* Bordered Box for Technologies */}
          <Box borderWidth="1px" borderRadius="lg" padding="4" marginTop="4">
            <Text fontWeight="500" marginBottom="2">
              Technologies Used:
            </Text>
            <Wrap spacing="2">
              {technologies.map((tech, index) => (
                <Tag key={index} colorScheme="blue" borderRadius="full">
                  {tech}
                </Tag>
              ))}
            </Wrap>
          </Box>

          {/* Description Section */}
          <Box marginTop="4" marginBottom="4">
            {/* <Text fontWeight="500" marginBottom="2">
              Description:
            </Text> */}
            <Text>{longDescription ? longDescription : description}</Text>
          </Box>
          <Divider orientation="horizontal" />
        </Box>
        <ModalFooter>
          {github ? (
            <Link href={github} isExternal>
              <Box as={FaGithub} size="24px" />
            </Link>
          ) : null}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProjectModal;
