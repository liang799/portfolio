import { Flex, Stack, Heading, Container } from "@chakra-ui/react";
import Form from "./Form";
import ContactAlt from "./ContactAlt";

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
      <ContactAlt flex={1}/>
    </Flex>
  );
}
