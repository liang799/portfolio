import { Heading, Box, Stack, Text, Center } from "@chakra-ui/react";

export default function Skill(props) {
  return (
    <Box
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
          className={props.icon}
        />
        <Heading as="h3" size="md" textTransform="uppercase">{props.title}</Heading>
        <Center wordWrap="break-word">
          <Text>{props.desc}</Text>
        </Center>
      </Stack>
    </Box>
  );
}
