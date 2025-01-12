import React from "react";
import {
  Box,
  Link,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure, Text,
} from "@chakra-ui/react";
import { CldImage } from 'next-cloudinary';
import {ProjectData} from "@/components/Portfolio";
import {motion} from "framer-motion";

interface ProjectProps {
  project: ProjectData;
}

export default function Project({ project }: ProjectProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        as={motion.div}
        borderRadius={5}
        lineHeight="0"
        _hover={{ boxShadow: "dark-lg" }}
        overflow="hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <Link onClick={onOpen}>
          <CldImage
            src={project.src}
            alt={project.alt}
            width={400}
            height={400}
            objectFit="cover"
          />
        </Link>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="blackAlpha.800"/>
        <ModalContent bg="white">
          <ModalHeader>{project.alt}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb={4}>{project.desc}</Text>
            <Box borderRadius="lg" overflow="hidden">
              <CldImage
                objectFit={"contain"}
                width={400}
                loading="lazy"
                height={300}
                src={project.src}
                alt={project.alt}
              />
            </Box>
          </ModalBody>

          <ModalFooter>
            <Link href={project.link} isExternal>
              <Button colorScheme="primary" mr={3}>
                Visit
              </Button>
            </Link>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
