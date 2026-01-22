import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    brand: {
      50: "#F5F5F5",
      100: "#EDEDEE",
      200: "#E0E0E0",
      300: "#BDBDBD",
      400: "#9E9E9E",
      500: "#495E57", // primary
      600: "#3a4a44", // primaryDark
      700: "#2C2C2C",
      800: "#212121",
      900: "#000000",
    },
    accent: {
      50: "#FEF9E7",
      100: "#FDF4CF",
      200: "#FCE99F",
      300: "#FADE6F",
      400: "#F8D33F",
      500: "#F4CE14", // secondary
      600: "#C4A510",
      700: "#947C0C",
      800: "#645308",
      900: "#342A04",
    },
    tertiary: {
      500: "#EE9972",
      600: "#D6895F",
    },
    quaternary: {
      500: "#FBDABB",
    },
  },
  fonts: {
    heading: "'Markazi Text', serif",
    body: "'Karla', sans-serif",
  },
  fontSizes: {
    xs: "1.0rem",
    sm: "1.2rem",
    md: "1.4rem",
    lg: "1.6rem",
    xl: "1.8rem",
    "2xl": "2.2rem",
    "3xl": "2.8rem",
    "4xl": "3.4rem",
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
        borderRadius: "1.6rem",
      },
      variants: {
        primary: {
          bg: "accent.500",
          color: "black",
          _hover: {
            bg: "accent.600",
            transform: "translateY(-2px)",
            boxShadow: "lg",
          },
        },
        secondary: {
          bg: "brand.500",
          color: "white",
          _hover: {
            bg: "brand.600",
            transform: "translateY(-2px)",
            boxShadow: "lg",
          },
        },
      },
      defaultProps: {
        variant: "primary",
      },
    },
    Card: {
      baseStyle: {
        container: {
          borderRadius: "1.6rem",
          boxShadow: "md",
          _hover: {
            boxShadow: "xl",
            transform: "translateY(-4px)",
          },
        },
      },
    },
  },
  styles: {
    global: {
      html: {
        scrollBehavior: "smooth",
      },
      body: {
        bg: "white",
        color: "black",
        fontFamily: "body",
        fontSize: "sm",
      },
      h1: {
        fontFamily: "heading",
        fontSize: "2xl",
        fontWeight: "medium",
        letterSpacing: "-0.02em",
      },
      h2: {
        fontFamily: "heading",
        fontSize: "xl",
        fontWeight: "normal",
        letterSpacing: "-0.01em",
      },
      h3: {
        fontSize: "lg",
        fontWeight: "extrabold",
        textTransform: "uppercase",
        letterSpacing: "0.05em",
      },
      h4: {
        fontSize: "md",
        fontWeight: "extrabold",
        letterSpacing: "0.02em",
      },
    },
  },
});

export default theme;
