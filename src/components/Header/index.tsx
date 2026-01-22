import { useState, useRef, useEffect, FC, ReactElement } from "react";
import {
  Box,
  Container,
} from "@chakra-ui/react";
import Nav from "../Nav";
import MobileNav from "../MobileNav";

const Header: FC = (): ReactElement => {
  const headerRef = useRef<HTMLElement>(null);
  const [, setLastScrollPosition] = useState(window.pageYOffset || document.documentElement.scrollTop);

  const handleScroll = () => {
    const header = headerRef.current;
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    setLastScrollPosition((prevState) => {
      if (!header) return scrollPosition > 0 ? scrollPosition : 0;

      if (scrollPosition > prevState) {
        header.style.transform = "translateY(-200px)";
      } else {
        header.style.transform = "translateY(0)";
      }
      return scrollPosition > 0 ? scrollPosition : 0;
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bg = "white";
  const shadow = "sm";

  return (
    <Box
      as="header"
      ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      bg={bg}
      boxShadow={shadow}
      transition="transform 0.3s ease-in-out"
      backdropFilter="blur(10px)"
      bgGradient="linear(to-b, white, rgba(255, 255, 255, 0.95))"
    >
      <Container maxW="container.xl" py={4}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Nav />
          <MobileNav />
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
