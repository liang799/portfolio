import React from "react";
import { SimpleGrid, Heading, Container } from "@chakra-ui/react";
import Skill from "./Skill";

export default function Skills() {
  return (
    <Container maxWidth="full" bg="purple.800" p={0}>
      <Container maxWidth="container.xl" py={4} px={8}>
        <Heading
          pt={10}
          id="proj"
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
          Skills
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing="40px">
          <Skill />
          <Skill />
          <Skill />
        </SimpleGrid>
      </Container>
    </Container>
  );
}
