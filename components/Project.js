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
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";

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
          <Image
            src={props.src}
            alt={props.alt}
            loading="lazy"
            fallback={<Skeleton />}
            width="400px"
            height="400px"
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
            {props.desc}
              <Image
                mt={2}
                objectFit={"contain"}
                fallback={<Skeleton />}
                width={400}
                height={300}
                src={props.src}
                alt={props.alt}
              />
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
