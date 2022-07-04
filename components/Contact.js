import {
  Flex,
  Link,
  Container,
  Box,
  Heading,
  Image,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Stack,
  Text,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Contact() {
  return (
    <Container maxWidth="full" bg="black.main" p={0}>
      <Container maxWidth="container.xl" py={4} px={{ base: 8, lg: 14 }}>
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
        <Stack>
          <Stack spacing={4}>
            <FormControl color="white" id="name">
              <FormLabel> Name</FormLabel>
              <Input bg={'black.form'} border={0} type="" />
            </FormControl>
            <FormControl color="white" id="email">
              <FormLabel>Email</FormLabel>
              <Input bg={"black.form"} border={0} type="email" />
            </FormControl>
            <FormControl color="white" id="msg">
              <FormLabel>Message</FormLabel>
              <Input bg={"black.form"} border={0} type="message" />
            </FormControl>
            <Stack spacing={10}>
              <Button colorScheme="primary" >
                Send Message
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Container>
  );
}
