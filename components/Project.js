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
          _hover={{ opacity: 0.5 }}
        />
      </Link>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.alt}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {props.desc}
            <Image mt={2} fallback={<Skeleton />} src={props.src} alt={props.alt} />
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
