import {
  HStack,
  Link,
  SimpleGrid,
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
    <Flex maxWidth="full" bg="black.main" p={0} pb={10}>
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
      <Flex bg="black.alt" flex={1.2} align="center" justify={"center"}>
        <Stack pl={{ base: 10, lg: 20 }} pr={{ base: 10, lg: 20 }}>
          <Text color="white" pb={5}>
            Like what you see? Have any queries? Feel free to contact me! I am
            usually active on email and LinkedIn.
          </Text>
          {OTHER.map(({ index, icon, href, text }) => (
            <HStack index={index} spacing={5}>
              <Box color="white" className={icon} />
              <Link color="white" href={href} isExternal>
                {text}
              </Link>
            </HStack>
          ))}
        </Stack>
      </Flex>
    </Flex>
  );
}

const OTHER = [
  {
    icon: "fas fa-envelope",
    href: "mailto:hello@tianpok.com",
    text: "hello@tianpok.com",
  },
  {
    icon: "fab fa-linkedin-in",
    href: "https://www.linkedin.com/in/tianpok",
    text: "linkedin.com/in/tianpok",
  },
  {
    icon: "fab fa-github",
    href: "https://github.com/liang799",
    text: "github.com/liang799",
  },
];
