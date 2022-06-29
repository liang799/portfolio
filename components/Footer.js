import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallWithSocial() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        id="contact"
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>Copyright © 2022 Neoh Tian Pok</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Email"} href={"mailto:hello@tianpok.com"}>
            <Box className="fas fa-envelope" />
          </SocialButton>
          <SocialButton label={"Linkedin"} href={"https://www.linkedin.com/in/tianpok"}>
            <Box className="fab fa-linkedin-in" />
          </SocialButton>
          <SocialButton label={"Github"} href={"https://github.com/liang799"}>
            <Box className="fab fa-github" />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
