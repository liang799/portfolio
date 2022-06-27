import {
  Flex,
  Box,
  Heading,
  Image,
  Stack,
  Text,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Hero() {
  return (
    <Stack
      minH={"80vh"}
      bg="black.main"
      direction={{ base: "column", md: "row" }}
    >
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack
          spacing={1}
          w={"full"}
          maxW={"lg"}
          justify={{ base: "center", md: "flex-start" }}
          align={{ base: "center", md: "flex-start" }}
        >
          <Text textStyle="heroXS"> A developer</Text>
          <Text textStyle="hero" align={{ base: "center", md: "left" }}>
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
          <Stack direction={{ base: "column", md: "row" }} pt={30}>
            <Box display={{ sm: "inline-block", md: "none" }}>
              <Image
                alt={"Hero Image"}
                objectFit={"contain"}
                src={"/images/hero.svg"}
                display="sm"
              />
            </Box>
            <Button
              colorScheme="primary"
              size="lg"
              borderRadius="full"
              style={{ marginLeft: "0!important" }}
            >
              View My Work
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} display={{ base: "none", md: "flex" }}>
        <Image
          alt={"Hero Image"}
          objectFit={"contain"}
          src={"/images/hero.svg"}
          p={{ base: "50px", md: "0px" }}
        />
      </Flex>
    </Stack>
  );
}
