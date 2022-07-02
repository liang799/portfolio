import React from "react"
import {
  Image,
  Box,
  Text,
  Link,
  Button,
  Skeleton,
  SkeletonText,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import NextImage from "next/image";

export default function Project(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <>
      <Box
        borderRadius={5}
        lineHeight="0"
        _hover={{ boxShadow: "dark-lg" }}
        overflow="hidden"
      >
        <Link onClick={onOpen}>
          <NextImage
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
            <SkeletonText isLoaded={isLoaded}>{props.desc}</SkeletonText>
            <Skeleton isLoaded={isLoaded}>
              <Image
                mt={2}
                objectFit={"contain"}
                layout="responsive"
                src={props.src}
                alt={props.alt}
              />
            </Skeleton>
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
                    <Button onClick={() => setIsLoaded((v) => !v)}>toggle</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
