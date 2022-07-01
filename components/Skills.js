import React from "react";
import { SimpleGrid, Heading, Container } from "@chakra-ui/react";
import Skill from "./Skill";

export default function Skills() {
  return (
    <Container maxWidth="full" bg="purple.800" p={0}>
      <Container maxWidth="container.xl" py={4} px={8}>
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
          Skills
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing="40px" pb={9}>
          {SKILLS.map(({ index, title, desc, icon }) => (
            <Skill key={index} title={title} desc={desc} icon={icon} />
          ))}
        </SimpleGrid>
      </Container>
    </Container>
  );
}

const SKILLS = [
  {
    icon: "fas fa-object-ungroup fa-3x",
    title: "UI/UX Design",
    desc: "I design visually appealing and easy to use apps and websites using Adobe XD",
  },
  {
    icon: "fab fa-react fa-3x",
    title: "React.js",
    desc: "Using Next.js, a React framework, I developed websites such as this portfolio and BellCurveHero's copyright page",
  },
  {
    icon: "fab fa-git-alt fa-3x",
    title: "Git CLI",
    desc: "I managed most of my projects using Git and utilised features such as Git Bisect to assist me in debugging",
  },
];
