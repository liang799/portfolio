import React from "react";
import { Container, VStack, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Hero() {
  return (
    <Container maxWidth="full" bg="black.main" p={0}>
      <Container maxWidth="container.xl">
        <Flex h="100vh" py={20}>
          <VStack w="full" h="full" spacing={10} alignItems="flex-start">
            <Text textStyle="heroXS">A developer</Text>
            <Text textStyle="hero">That Designs and Programs Websites</Text>
          </VStack>
          <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
            <Image priority src="/images/hero.svg" height={144} width={144} />
          </VStack>
        </Flex>
      </Container>
    </Container>
  );
}
