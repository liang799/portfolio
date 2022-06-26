import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: false,
  global: {
    "html, body": {
      color: "black.main",
    },
  },
  fonts: {
    icon: 'Rage'
  },
  colors: {
    primary: {
      50: "#f3e5f5",
      100: "#e1bee7",
      200: "#ce93d8",
      300: "#ba68c8",
      400: "#ab47bc",
      500: "#9c27b0",
      600: "#8e24aa",
      700: "#7b1fa2",
      800: "#6a1b9a",
      900: "#4a148c",
    },
    black: {
      main: "#181818",
      alt: "#151F24",
      form: "#303030",
      pure: "#000000",
    },
    white: {
      txt: "#FFFFFF",
      bg: "#EFEFEF",
    },
  },
});

export default theme;
