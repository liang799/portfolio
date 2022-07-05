import { Flex, Stack, Heading, Container } from "@chakra-ui/react";
import Form from "./Form";
import ContactAlt from "./ContactAlt";

export default function Contact() {
  return (
    <Container maxWidth="full" bg="black.main" p={0}>
      <Container
        maxWidth="container.xl"
        px={{ base: 8, lg: 14 }}
      >
        <Flex>
        <Stack flex={1}>
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
      <ContactAlt/>
        </Flex>
      </Container>
    </Container>
  );
}
