import { Heading, Box, Stack, Text, Center } from "@chakra-ui/react";
import { motion } from 'framer-motion'

export default function Skill({icon, title, desc}) {
  return (
    <Box
      as={motion.div}
      w={"full"}
      bg="white.bg"
      boxShadow={"2xl"}
      rounded={"md"}
      overflow={"hidden"}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, }}
    >
      <Stack textAlign={"center"} p={8} spacing={4} align={"center"}>
        <Box
          pt={3}
          color="primary.500"
          className={icon}
        />
        <Heading as="h3" size="md" textTransform="uppercase">{title}</Heading>
        <Center wordWrap="break-word">
          <Text>{desc}</Text>
        </Center>
      </Stack>
    </Box>
  );
}
