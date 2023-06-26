import React from "react";
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Button,
  Image,
  Divider,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import { StaticImageData } from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ProjectModal from "./projectmodal";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string | StaticImageData;
  technologies: string[];
  github: string;
  association: string;
  longDescription: string;
  demo: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  github,
  association,
  longDescription,
  demo,
}) => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Card maxW="sm" data-aos="fade-up">
        <CardBody>
          <Stack mt="6" spacing="3" align="center" justifyContent="center">
            <Image
              src={typeof image === "string" ? image : image.src}
              alt="Project Image"
              borderRadius="lg"
              maxHeight="150px"
              maxWidth="35vh"
            />
            <Heading size="md" marginTop="15px" fontWeight="700">
              {title}
            </Heading>
            <Text textAlign="center">{description}</Text>
            <Box textAlign="center" className="15px">
              <Text fontSize="sm" fontWeight="400" mb="2">
                Technologies/Languages:
              </Text>
              <Stack
                direction="row"
                flexWrap="wrap"
                spacing="2"
                justifyContent={
                  technologies.length === 1 ? "center" : "flex-start"
                }
              >
                {technologies.map((tech) => (
                  <Box
                    key={tech}
                    border="1px solid gray"
                    borderRadius="md"
                    p="1"
                    fontSize="sm"
                    fontWeight="300"
                  >
                    {tech}
                  </Box>
                ))}
              </Stack>
            </Box>
            <Button
              color="blue.600"
              fontSize="l"
              width="50%"
              marginTop="10px"
              fontWeight="500"
              onClick={onOpen}
            >
              Learn More
            </Button>
          </Stack>
        </CardBody>
        <Divider />
      </Card>
      <ProjectModal
        isOpen={isOpen}
        onClose={onClose}
        title={title}
        description={description}
        thumbnailURL={image}
        technologies={technologies}
        github={github}
        association={association}
        longDescription={longDescription}
        demo={demo}
      />
    </Box>
  );
};

export default ProjectCard;
