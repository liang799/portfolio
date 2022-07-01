import { Heading, Box, Stack, Text, Center } from "@chakra-ui/react";

export default function Skill() {
  return (
    <Box
      maxW={"330px"}
      w={"full"}
      bg="white"
      boxShadow={"2xl"}
      rounded={"md"}
      overflow={"hidden"}
    >
      <Stack textAlign={"center"} p={8} spacing={4} align={"center"}>
        <Box
          pt={3}
          color="primary.500"
          className="fas fa-envelope fa-3x"
        />
        <Heading as="h3" size="md">
          React.js
        </Heading>
        <Center wordWrap="break-word">
          <Text>I design visually appealing and 
          easy to use apps and websites 
          using Adobe XD</Text>
        </Center>
      </Stack>
    </Box>
  );
}
