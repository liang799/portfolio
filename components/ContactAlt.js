import {
  Flex,
  Box,
  Stack,
  HStack,
  Text,
  Link,
} from "@chakra-ui/react";
import OTHER from "./ContactData";
export default function ContactAlt() {
  return(
      <Flex
        bg="black.alt"
        flex={1.2}
        align="center"
        justify={"center"}
        display={{ base: "none", md: "flex" }}
      >
        <Stack pl={{ base: 10, lg: 20 }} pr={{ base: 10, lg: 20 }}>
          <Text color="white" pb={5}>
            Like what you see? Have any queries? Feel free to contact me! I am
            usually active on email and LinkedIn.
          </Text>
          {OTHER.map(({ index, icon, href, text }) => (
            <HStack key={index} spacing={5}>
              <Box color="white" className={icon} />
              <Link color="white" href={href} isExternal>
                {text}
              </Link>
            </HStack>
          ))}
        </Stack>
      </Flex>
  );
}
