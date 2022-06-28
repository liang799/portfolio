import React from "react";
import {
  Center,
  Heading,
  Container,
  Image,
  SimpleGrid,
  Box,
  VStack,
  Flex,
  Text,
  Skeleton,
} from "@chakra-ui/react";

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
        <SimpleGrid columns={{ sm: 2, md: 3 }} spacingX="40px" spacingY="40px">
          {PROJECTS.map(({ src, alt }) => (
            <Image
              key={src}
              src={src}
              alt={alt}
              fallback={<Skeleton />}
              width="400px"
              height="400px"
              rounded="xl"
              objectFit="cover"
              opacity={0.5}
              _hover={{ opacity: 1 }}
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
    alt: "Vigour Project showcase",
  },
  {
    src: "/images/bellcurvehero.png",
    alt: "BellCurveHero Internship showcase",
  },
  {
    src: "/images/tree.png",
    alt: "CSAD Project showcase",
  },
  {
    src: "/images/poketeams.png",
    alt: "Hobby Project showcase",
  },
  {
    src: "/images/bot.png",
    alt: "Discord bot showcase",
  },
  {
    src: "/images/website.png",
    alt: "This website",
  },
];
