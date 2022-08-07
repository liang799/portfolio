import {
  Heading,
  Link,
  Text,
  Stack,
  Button,
} from "@chakra-ui/react";

export default function Submission() {
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
