import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Container,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
} from "@chakra-ui/icons";
import { useContext } from "react";
import { ScrollToRefContext } from "../pages";
import { smoothScrollToRef } from "../utils/scroll";

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();
  const scrollables = useContext(ScrollToRefContext);

  const NAV_ITEMS = [
    {
      label: "Projects",
      scrollToSection: () => smoothScrollToRef(scrollables.portfolio)
    },
    {
      label: "Skills",
      scrollToSection: () => smoothScrollToRef(scrollables.skills)
    },
    {
      label: "Contact",
      scrollToSection: () => smoothScrollToRef(scrollables.contact)
    },
  ];

  return (
    <Box bg="black.alt">
      <Container maxWidth="container.xl" p={0}>
        <Flex minH={"60px"} py={4} align={"center"} px={{ base: 8, lg: 12 }}>
          <Flex>
            <Text fontSize="2xl" fontFamily={"icon"} color="white" mt="2px">
              TP
            </Text>
          </Flex>

          <Flex
            display={{ base: "none", lg: "flex" }}
            flex={{ base: 1 }}
            justify={{ base: "auto", lg: "right" }}
          >
            <DesktopNav navItems={NAV_ITEMS} />
          </Flex>
          <Flex
            flex={{ base: 1, lg: "none" }}
            display={{ base: "flex", lg: "none" }}
            justify="right"
          >
            <IconButton
              onClick={onToggle}
              color="white"
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
              _hover={{ bg: "black.alt" }}
              _active={{
                bg: "black.alt",
              }}
            />
          </Flex>
        </Flex>
      </Container>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav navItems={NAV_ITEMS} onToggle={onToggle}/>
      </Collapse>
    </Box>
  );
}

const DesktopNav = ({ navItems }) => {
  const color = "gray.400";
  const linkHoverColor = "white";

  return (
    <Stack direction={"row"} spacing={4}>
      {navItems.map((navItem) => (
        <Box key={navItem.label}>
          <Button
            varaint="ghost"
            colorScheme="black"
            p={2}
            onClick={navItem.scrollToSection}
          >
            {navItem.label}
          </Button>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = ({ navItems, onToggle }) => {
  return (
    <Stack bg="gray.800" p={4} display={{ lg: "none" }}>
      {navItems.map((navItem) => (
        <MobileNavItem
          key={navItem.label}
          label={navItem.label}
          onClick={() => {
            onToggle()
            navItem.scrollToSection()
          }}
        />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, ...props }) => {
  return (
    <Stack spacing={4} onClick={props.onClick} pl={4}>
      <Flex
        py={2}
        justify={"space-between"}
        align={"left"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600} color="gray.200">
          {label}
        </Text>
      </Flex>
    </Stack >
  );
};
