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
      <Container maxWidth="container.xl" py={4} px={8}>
        <Heading 
          pt={10}
          pb={5}
          m="1px"
          _before={{
            content: '""',
            marginBottom: "0.25rem",
            display: "block",
            height: "0.5rem",
            width: "3rem",
            borderRadius: "full",
            backgroundColor: "primary.300",
          }}
        >
          Portfolio
        </Heading>
        <SimpleGrid columns={2} spacingX="40px" spacingY="20px">
          {PROJECTS.map(({ src }) => (
            <Image
              src={src}
              key="{index}"
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
