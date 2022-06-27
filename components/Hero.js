import React from "react";
import {
  Center,
  Heading,
  Container,
  VStack,
  Flex,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Button from "./Button";

export default function Hero() {
  return (
    <Container maxWidth="full" bg="black.main" p={0}>
      <Container maxWidth="container.xl" pr={0}>
        <Flex h="80vh">
          <VStack w="full" h="full" pt={["20px", "50px", "147px"]} alignItems="flex-start">
            <Text textStyle="heroXS">A developer</Text>
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
            <Button text="View My Work"/>
          </VStack>
          <VStack w="full" h="full" alignItems="right">
            <Image priority src="/images/hero.svg" height={900} width={903} />
          </VStack>
        </Flex>
      </Container>
    </Container>
  );
}
