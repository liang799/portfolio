import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import content from "./ContactData";
import React from "react";

interface SocialButtonProps {
    children: React.ReactNode; // Type for children
    label: string;              // Type for label
    href: string;               // Type for href
}

const SocialButton: React.FC<SocialButtonProps> = ({ children, label, href }) => {
  return (
    <chakra.button
      bg= "whiteAlpha.100"
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
    <Box bg="gray.900" color="gray.200">
      <Container
        id="contact"
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "center" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>Copyright © 2022 Neoh Tian Pok</Text>
        <Stack
          direction={"row"}
          spacing={6}
          display={{ base: "inline-block", md: "none" }}
        >
          {content.map(({ icon, href }, index) => (
            <SocialButton key={index} label={"Email"} href={href}>
              <Box className={icon} />
            </SocialButton>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
