import {
  Stack,
  Image,
  Text,
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
import NImage from "next/image";

export default function Project(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Link onClick={onOpen}>
        <NImage
          src={props.src}
          alt={props.alt}
          loading="lazy"
          fallback={<Skeleton />}
          width="400px"
          height="400px"
          rounded="xl"
          objectFit="cover"
          _hover={{ opacity: 0.5 }}
        />
      </Link>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.alt}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{props.desc}</Text>
            <Image
              mt={2}
              fallback={<Skeleton />}
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
