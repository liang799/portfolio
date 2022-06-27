import {
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function SplitScreen() {
  return (
    <Stack
      minH={"80vh"}
      bg="black.main"
      direction={{ base: "column", md: "row" }}
    >
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={1} w={"full"} maxW={"lg"}>
          <Text textStyle="heroXS"> A developer</Text>
          <Text textStyle="hero">
            That{" "}
            <Text as="span" color="primary.300">
              Designs
            </Text>{" "}
            and{" "}
            <Text as="span" color="primary.300">
              Programs
            </Text>{" "}
            Websites
          </Text>
          <Stack direction={{ base: "column", md: "row" }} pt={30} spacing={4}>
            <Button colorScheme="primary" size={["sm", "md", "lg"]} borderRadius="full">View My Work</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Hero Image"}
          objectFit={"contain"}
          src={"/images/hero.svg"}
        />
      </Flex>
    </Stack>
  );
}
