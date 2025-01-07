import React from "react";
import {
  Box,
  Link,
  Button,
  Skeleton,
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

export default function Project(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        borderRadius={5}
        lineHeight="0"
        _hover={{ boxShadow: "dark-lg" }}
        overflow="hidden"
      >
        <Link onClick={onOpen}>
          <CldImage
            src={props.src}
            alt={props.alt}
            loading="lazy"
            width={400}
            height={400}
            rounded="xl"
            objectFit="cover"
          />
        </Link>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.alt}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb={4}>{props.desc}</Text>
            <Box borderRadius="lg" overflow="hidden">
              <CldImage
                objectFit={"contain"}
                width={400}
                height={300}
                src={props.src}
                alt={props.alt}
              />
            </Box>
          </ModalBody>

          <ModalFooter align="left">
            <Link href={props.link} isExternal>
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
