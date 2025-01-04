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
import Project from "./Project";

export default function Portfolio({ ...props }) {
  return (
    <Container maxWidth="full" bg="white.bg" p={0} ref={props.ref}>
      <Container maxWidth="container.xl" py={4} px={{base:8, lg: 14}}>
        <Heading
          pt={10}
          id="proj"
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
          {PROJECTS.map(({ index, link, src, alt, desc }) => (
            <Project key={index} link={link} src={src} alt={alt} desc={desc} />
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
    alt: "Vigour Project",
    desc: " An Android fitness app that rewards user with crypto after walking for a certain amount of steps",
  },
  {
    link: "https://www.bellcurvehero.com/copyright",
    src: "/images/bellcurvehero.png",
    alt: "BellCurveHero Internship",
    desc: "Identified that customers are unclear about BellCurveHero's copyright policy and created a page dedicated to explaining BellCurveHero's copyright policy using Next.js",
  },
  {
    link: "https://github.com/liang799/CSAD-Project",
    src: "/images/tree.png",
    alt: "CSAD Project",
    desc: "Converted a bootstrap template into a dynamic site using PHP",
  },
  {
    link: "https://xd.adobe.com/view/9d1e5b95-4673-45ea-be94-07db8f1edcc0-c84d/",
    src: "/images/poketeams.png",
    alt: "Hobby Project",
    desc: "Designed a Pokemon Teambuilder app using Adobe XD during my free time",
  },
  {
    link: "https://github.com/liang799/mental-health-sol",
    src: "/images/bot.png",
    alt: "MindfulHacks Discord bot",
    desc: " A python discord bot that sends some appropriate Music videos from YouTube when a keyword from the database is detected",
  },
  {
    link: "https://github.com/liang799/portfolio",
    src: "/images/website.png",
    alt: "This website",
    desc: "Designed and programmed a portfolio site from the ground up in Next.js, using the experience I have gained through working with BellCurveHero and Client-Server Applications Development module",
  },
];
