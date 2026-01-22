import { FC, ReactElement } from "react";
import { HashLink } from "react-router-hash-link";
import {
  HStack,
  Image,
  Link,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import logoImg from "../../../assets/Logo.svg";

/**
 * Navigation Component
 *
 * Desktop navigation component that displays the logo and navigation links.
 * Only renders on medium and larger screens. Returns empty fragment on mobile.
 * Includes smooth scrolling with offset for anchor links to account for fixed header.
 *
 * @returns {ReactElement} The desktop navigation component or empty fragment on mobile
 */
const Navigation: FC = (): ReactElement => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  if (isMobile) {
    return <></>;
  }

  return (
    <HStack
      as="nav"
      spacing={8}
      width="100%"
      justifyContent="space-between"
      alignItems="center"
    >
      <Image src={logoImg} alt="Little Lemon Logo" height="60px" />

      <HStack spacing={6}>
        <Link
          as={HashLink}
          to="/"
          fontWeight="bold"
          color="brand.500"
          _hover={{
            color: "brand.600",
            textDecoration: "underline",
          }}
          transition="all 0.2s"
        >
          Home
        </Link>
        <Link
          as={HashLink}
          to="/#about"
          scroll={(el) => {
            const headerHeight = 100;
            const elementPosition = el.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
          }}
          fontWeight="bold"
          color="brand.500"
          _hover={{
            color: "brand.600",
            textDecoration: "underline",
          }}
          transition="all 0.2s"
        >
          About
        </Link>
        <Link
          as={HashLink}
          to="/#menu"
          scroll={(el) => {
            const headerHeight = 100;
            const elementPosition = el.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
          }}
          fontWeight="bold"
          color="brand.500"
          _hover={{
            color: "brand.600",
            textDecoration: "underline",
          }}
          transition="all 0.2s"
        >
          Menu
        </Link>
        <Link
          as={HashLink}
          to="/#contact"
          scroll={(el) => {
            const headerHeight = 100;
            const elementPosition = el.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
          }}
          fontWeight="bold"
          color="brand.500"
          _hover={{
            color: "brand.600",
            textDecoration: "underline",
          }}
          transition="all 0.2s"
        >
          Contact us
        </Link>
        <Button
          as={HashLink}
          to="/bookings"
          variant="secondary"
          size="md"
        >
          Book Now
        </Button>
        
      </HStack>
    </HStack>
  );
};

export default Navigation;
