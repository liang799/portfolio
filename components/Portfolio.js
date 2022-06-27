import React from "react";
import {
  Center,
  Heading,
  Container,
  SimpleGrid,
  Box,
  VStack,
  Flex,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

export default function Hero() {
  return (
    <Container maxWidth="full" bg="white.bg" p={0}>
    <Container maxWidth="container.xl" pr={0}>
      <Heading>Portfolio</Heading>
      <SimpleGrid columns={2} spacingX="40px" spacingY="20px">
        {PROJECTS.map(({ src }) => (
          <Image
            src={src}
            borderRadius="20px"
            height="482px"
            width="723px"
          />
        ))}
      </SimpleGrid>
    </Container>
    </Container>
  );
}

const PROJECTS = [
  {
    src: "/images/vigour.png",
  },
  {
    src: "/images/bellcurvehero.png",
  },
  {
    src: "/images/tree.png",
  },
  {
    src: "/images/poketeams.png",
  },
];
