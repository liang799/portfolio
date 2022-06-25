import Header from "../components/header";
import { ChakraProvider } from "@chakra-ui/react";

export default function Home() {
  return (
    <ChakraProvider>
      <Header />
    </ChakraProvider>
  );
}
