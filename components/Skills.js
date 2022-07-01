import React from 'react';
import {render} from 'react-dom';
import  mobiscroll from 'path/to/mobiscroll/js/mobiscroll.react.min';
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

export default function Skills() {
  return (
    <Container maxWidth="full" bg="#3D0081" p={0}>
      <Container maxWidth="container.xl" py={4} px={8}>
        <Heading
          pt={10}
          id="proj"
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
                 <label>
                     /* Add Date component  */
                   Birthday
                 <mobiscroll.Date placeholder="Please Select..." />
            </label>
      </Container>
    </Container>
  );
}
