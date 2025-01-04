import {
  Flex,
  Container,
  Box,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useContext } from "react";
import { ScrollToRefContext } from "../pages";

export default function Hero() {
  const portfolioSectionRef = useContext(ScrollToRefContext);

  const scrollToPortfolio = () => {
    if (portfolioSectionRef.current) {
      const targetPosition = portfolioSectionRef.current.getBoundingClientRect().top + window.scrollY;
      smoothScrollTo(targetPosition, 1000); // 1000ms for the scroll duration
    }
  };

  const smoothScrollTo = (target, duration) => {
    const start = window.scrollY;
    const distance = target - start;
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1); // Ensure progress doesn't exceed 1
      const ease = easeInOutQuad(progress); // Easing function
      window.scrollTo(0, start + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const easeInOutQuad = (t) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  return (
    <Container bg="black.main" maxWidth="full">
      <Container
        maxWidth="container.xl"
        py={{ base: "1.5em", sm: "4em", md: "0em", lg: "0em", xl: "4em" }}
        px={{ base: 8, lg: 12 }}
        pr={{ base: "2em", lg: "0em" }}
      >
        <Stack minH={{ base: "80vh", md: "75vh", lg: "80vh" }} direction={{ base: "column", lg: "row" }}>
          <Flex
            flex={1}
            align={"center"}
            justify={{ base: "center", lg: "left" }}
          >
            <Stack
              spacing={1}
              w={"full"}
              maxW={"lg"}
              justify={{ base: "center", lg: "flex-start" }}
              align={{ base: "center", lg: "flex-start" }}
            >
              <Text textStyle="heroXS"> A developer</Text>
              <Text textStyle="hero" align={{ base: "center", lg: "left" }}>
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
              <Stack direction={{ base: "column", lg: "row" }} pt={30}>
                <Box display={{ sm: "inline-block", lg: "none" }}>
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
                  onClick={scrollToPortfolio}
                >
                  View My Work
                </Button>
              </Stack>
            </Stack>
          </Flex>
          <Flex flex={1} display={{ base: "none", lg: "flex" }} pl={10} pr={0}>
            <Image
              alt={"Hero Image"}
              objectFit={"contain"}
              src={"/images/hero.svg"}
              p={{ base: "50px", lg: "0px" }}
            />
          </Flex>
        </Stack>
      </Container>
    </Container>
  );
}
