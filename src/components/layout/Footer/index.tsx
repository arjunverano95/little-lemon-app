import { FC, ReactElement } from "react";
import { HashLink } from "react-router-hash-link";
import {
  Box,
  Container,
  Heading,
  VStack,
  HStack,
  Link,
  Text,
  Image,
  SimpleGrid,
  Icon,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import logoImg from "../../../assets/logo/Asset 18@4x - White.png";

/**
 * Footer Component
 *
 * Displays a 3-column footer layout with:
 * - Column 1: Logo and social media icons (Facebook, Instagram, Twitter)
 * - Column 2: Quick navigation links (Home, Menu, Contact us, Book Now, Login)
 * - Column 3: Contact information (address, phone, email)
 * Also includes developer credit and copyright notice.
 *
 * @returns {ReactElement} The footer component
 */
const Footer: FC = (): ReactElement => {
  return (
    <Box
      as="footer"
      bgGradient="linear(135deg, brand.500 0%, brand.600 100%)"
      color="white"
      py={12}
      px={4}
      boxShadow="xl"
    >
      <Container maxW="container.xl">
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          spacing={8}
          mb={8}
        >
          {/* Column 1: Logo and Social Icons */}
          <VStack align={{ base: "center", md: "flex-start" }} spacing={4}>
            <Image
              src={logoImg}
              alt="Little Lemon Logo"
              height="80px"
              mb={2}
              objectFit="contain"
            />
            <HStack spacing={4} mt={2}>
              <Link
                href="https://www.facebook.com/littlelemon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                _hover={{
                  color: "accent.500",
                  transform: "scale(1.1)",
                }}
                transition="all 0.2s"
                color="white"
              >
                <Icon as={FaFacebook} boxSize={6} />
              </Link>
              <Link
                href="https://www.instagram.com/littlelemon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                _hover={{
                  color: "accent.500",
                  transform: "scale(1.1)",
                }}
                transition="all 0.2s"
                color="white"
              >
                <Icon as={FaInstagram} boxSize={6} />
              </Link>
              <Link
                href="https://twitter.com/littlelemon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                _hover={{
                  color: "accent.500",
                  transform: "scale(1.1)",
                }}
                transition="all 0.2s"
                color="white"
              >
                <Icon as={FaTwitter} boxSize={6} />
              </Link>
            </HStack>
          </VStack>

          {/* Column 2: Quick Links */}
          <VStack align={{ base: "center", md: "flex-start" }} spacing={4}>
            <Heading as="h4" size="md" fontFamily="heading" fontWeight="bold">
              Quick Links
            </Heading>
            <VStack align={{ base: "center", md: "flex-start" }} spacing={3}>
              <Link
                as={HashLink}
                to="/"
                _hover={{ color: "accent.500", transform: "translateX(4px)" }}
                transition="all 0.2s"
              >
                Home
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
                _hover={{ color: "accent.500", transform: "translateX(4px)" }}
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
                _hover={{ color: "accent.500", transform: "translateX(4px)" }}
                transition="all 0.2s"
              >
                Contact us
              </Link>
              <Link
                as={HashLink}
                to="/bookings"
                _hover={{ color: "accent.500", transform: "translateX(4px)" }}
                transition="all 0.2s"
              >
                Book Now
              </Link>
              <Link
                as={HashLink}
                to="#"
                _hover={{ color: "accent.500", transform: "translateX(4px)" }}
                transition="all 0.2s"
              >
                Login
              </Link>
            </VStack>
          </VStack>

          {/* Column 3: Contact Info */}
          <VStack align={{ base: "center", md: "flex-start" }} spacing={4}>
            <Heading as="h4" size="md" fontFamily="heading" fontWeight="bold">
              Contact Info
            </Heading>
            <VStack align={{ base: "center", md: "flex-start" }} spacing={3} fontSize="sm">
              <Text as="address" fontStyle="normal" lineHeight="tall" textAlign={{ base: "center", md: "left" }}>
                Little Lemon
                <br />
                331 E Chicago
                <br />
                LaSalle Street Chicago,
                <br />
                Illinois 60602
                <br />
                USA
              </Text>
              <Link
                href="tel:+551199999999"
                target="_blank"
                rel="noopener noreferrer"
                _hover={{ color: "accent.500" }}
                transition="all 0.2s"
              >
                +55 11 9999-9999
              </Link>
              <Link
                href="mailto:contact@littlelemon.com"
                target="_blank"
                rel="noopener noreferrer"
                _hover={{ color: "accent.500" }}
                transition="all 0.2s"
              >
                contact@littlelemon.com
              </Link>
            </VStack>
          </VStack>
        </SimpleGrid>

        <Box
          borderTop="1px solid"
          borderColor="whiteAlpha.300"
          pt={6}
          textAlign="center"
        >
          <Text fontSize="sm" mb={2}>
            Developed by{" "}
            <Link
              href="https://github.com/arjunverano95"
              target="_blank"
              rel="noopener noreferrer"
              _hover={{ color: "accent.500", textDecoration: "underline" }}
              transition="all 0.2s"
              fontWeight="bold"
            >
              Arjun Verano
            </Link>
          </Text>
          <Text fontSize="sm">
            © 2023 Little Lemon. All rights reserved.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
