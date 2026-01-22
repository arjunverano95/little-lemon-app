import { useState, FC, ReactElement } from "react";
import { HashLink } from "react-router-hash-link";
import {
  Box,
  HStack,
  Image,
  Link,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  useBreakpointValue,
  IconButton,
} from "@chakra-ui/react";
import logoImg from "../../../assets/Logo.svg";
import basketImg from "../../../assets/basket.svg";
import menuImg from "../../../assets/icon _hamburger_menu.svg";

/**
 * MobileNavigation Component
 *
 * Mobile navigation component that displays a hamburger menu icon and basket icon.
 * Opens a full-screen drawer with navigation links when the menu is clicked.
 * Only renders on mobile screens. Returns empty fragment on desktop.
 * Includes smooth scrolling with offset for anchor links.
 *
 * @returns {ReactElement} The mobile navigation component or empty fragment on desktop
 */
const MobileNavigation: FC = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  if (!isMobile) {
    return <></>;
  }

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  return (
    <>
      <HStack spacing={4}>
        <IconButton
          aria-label="Open menu"
          icon={<Image src={menuImg} alt="Open menu" height="35px" />}
          onClick={onOpen}
          variant="ghost"
        />
        <Box
          as="button"
          cursor="pointer"
          _hover={{ transform: "scale(1.1) rotate(5deg)" }}
          transition="all 0.2s"
        >
          <Image src={basketImg} alt="Basket" height="35px" />
        </Box>
      </HStack>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="full">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton size="lg" />
          <DrawerHeader>
            <Image src={logoImg} alt="Little Lemon Logo" height="60px" />
          </DrawerHeader>

          <DrawerBody>
            <VStack spacing={6} align="stretch" mt={8}>
              <Link
                as={HashLink}
                to="/"
                onClick={onClose}
                fontWeight="bold"
                fontSize="lg"
                color="brand.500"
                py={3}
                px={4}
                borderRadius="md"
                _hover={{
                  bg: "brand.500",
                  color: "white",
                  transform: "translateX(4px)",
                }}
                transition="all 0.2s"
              >
                Home
              </Link>
              <Link
                as={HashLink}
                to="#about"
                scroll={(el) => {
                  const headerHeight = 100;
                  const elementPosition = el.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                }}
                onClick={onClose}
                fontWeight="bold"
                fontSize="lg"
                color="brand.500"
                py={3}
                px={4}
                borderRadius="md"
                _hover={{
                  bg: "brand.500",
                  color: "white",
                  transform: "translateX(4px)",
                }}
                transition="all 0.2s"
              >
                About
              </Link>
              <Link
                as={HashLink}
                to="#menu"
                scroll={(el) => {
                  const headerHeight = 100;
                  const elementPosition = el.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                }}
                onClick={onClose}
                fontWeight="bold"
                fontSize="lg"
                color="brand.500"
                py={3}
                px={4}
                borderRadius="md"
                _hover={{
                  bg: "brand.500",
                  color: "white",
                  transform: "translateX(4px)",
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
                onClick={onClose}
                fontWeight="bold"
                fontSize="lg"
                color="brand.500"
                py={3}
                px={4}
                borderRadius="md"
                _hover={{
                  bg: "brand.500",
                  color: "white",
                  transform: "translateX(4px)",
                }}
                transition="all 0.2s"
              >
                Contact us
              </Link>
              <Button
                as={HashLink}
                to="/bookings"
                onClick={onClose}
                variant="secondary"
                size="lg"
                mt={4}
              >
                Book Now
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileNavigation;
