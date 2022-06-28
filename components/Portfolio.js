import React from "react";
import {
  Center,
  Heading,
  Container,
  Image,
  SimpleGrid,
  Link,
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
          pb={8}
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
        <SimpleGrid
          columns={{ sm: 2, md: 3 }}
          spacingX="40px"
          spacingY="40px"
          pb={10}
        >
          {PROJECTS.map(({ link, src, alt }) => (
            <Link href={link} isExternal>
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
            </Link>
          ))}
        </SimpleGrid>
      </Container>
    </Container>
  );
}

const PROJECTS = [
  {
    link: "https://github.com/liang799/Vigour",
    src: "/images/vigour.png",
    alt: "Vigour Project showcase",
  },
  {
    link: "https://www.bellcurvehero.com/copyright",
    src: "/images/bellcurvehero.png",
    alt: "BellCurveHero Internship showcase",
  },
  {
    link: "https://github.com/liang799/CSAD-Project",
    src: "/images/tree.png",
    alt: "CSAD Project showcase",
  },
  {
    link: "https://xd.adobe.com/view/0dccdb83-fb9c-49de-bc8d-34652a9a20e9-589f/",
    src: "/images/poketeams.png",
    alt: "Hobby Project showcase",
  },
  {
    link: "https://github.com/liang799/mental-health-sol",
    src: "/images/bot.png",
    alt: "Discord bot showcase",
  },
  {
    link: "https://github.com/liang799/portfolio",
    src: "/images/website.png",
    alt: "This website",
  },
];
