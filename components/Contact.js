import {
  Box,
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";
import Form from "./Form";

export default function Contact() {
  return (
    <Flex maxWidth="full" bg="black.main" p={0}>
      <Container
        flex={1}
        maxWidth="container.xl"
        py={4}
        px={{ base: 8, lg: 14 }}
      >
        <Stack>
          <Heading
            pt={10}
            id="skills"
            pb={8}
            m="1px"
            color="white.bg"
            fontWeight="semibold"
            _before={{
              content: '""',
              marginBottom: "0.25rem",
              display: "block",
              height: "0.5rem",
              width: "3rem",
              borderRadius: "full",
              backgroundColor: "white.bg",
            }}
          >
            Contact
          </Heading>
          <Form />
        </Stack>
      </Container>
      <Flex bg="black.alt" flex={1.2} justify={"center"}>
        <Stack pt={40} pl={{base: 10, lg:20}} pr={{base:10, lg:20}}>
          <Text color="white">
            Like what you see? Have any queries? Feel free to contact me!
            I am usually active on email and LinkedIn.
          </Text>
          <Box color="white" className="fas fa-envelope" />
          <Box color="white" className="fab fa-linkedin-in" />
          <Box color="white" className="fab fa-github" />
        </Stack>
      </Flex>
    </Flex>
  );
}
