import {
  Heading,
  Link,
  Text,
  Textarea,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Stack,
  Button,
} from "@chakra-ui/react";
import { useForm, ValidationError } from "@formspree/react";
import React from "react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xbjwvlql");

  if (state.succeeded) {
    return (
      <Stack spacing={6} pb={7}>
        <Heading size="md" color="white">
          Thank You!
        </Heading>
        <Stack spacing={4}>
          <Text color="white">
            An email has been sent to{" "}
            <Link color="primary.200" href="mailto: hello@tianpok.com">
              hello@tianpok.com
            </Link>
            . I&apos;ll try to get back to you within 24 hours.
          </Text>
          <Text color="white">
            In the meantime, you can click the link below to find out more about
            this website!
          </Text>
        </Stack>
        <Button
          colorScheme="primary"
          size="lg"
          style={{ marginLeft: "0!important" }}
        >
          <Link
            href="https://github.com/liang799/portfolio"
            _hover={{ textDecoration: "none" }}
            isExternal
          >
            Source Code
          </Link>
        </Button>
      </Stack>
    );
  }

  return (
    <Stack>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl color="white" id="name">
            <FormLabel> Name</FormLabel>
            <Input bg={"black.form"} border={0} name="name" />
          </FormControl>
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <FormControl color="white" id="email">
            <FormLabel>Email</FormLabel>
            <Input bg={"black.form"} border={0} type="email" name="email" />
          </FormControl>
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <FormControl color="white" id="message">
            <FormLabel>Message</FormLabel>
            <Textarea
              bg={"black.form"}
              border={0}
              h={40}
              type="message"
              name="message"
            />
          </FormControl>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <Stack pt={2} pb={10}>
            <Button
              colorScheme="primary"
              type="submit"
              isLoading={state.submitting}
            >
              Send Message
            </Button>
          </Stack>
          <ValidationError errors={state.errors} />
        </Stack>
      </form>
    </Stack>
  );
}
