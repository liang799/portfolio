import {
  Image,
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
  Lorem,
} from "@chakra-ui/react";

export default function Project(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Link onClick={onOpen}>
        <Image
          src={props.src}
          alt={props.alt}
          fallback={<Skeleton />}
          width="400px"
          height="400px"
          rounded="xl"
          objectFit="cover"
          opacity={0.5}
          _hover={{ opacity: 1 }}
        />
      </Link>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Testing 123
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
