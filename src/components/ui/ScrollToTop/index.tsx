import { useState, useEffect, FC, ReactElement } from "react";
import { IconButton, Box } from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";

/**
 * ScrollToTop Component
 *
 * A floating button that appears when the user scrolls down the page.
 * Clicking it smoothly scrolls the page back to the top.
 *
 * @returns {ReactElement} The scroll-to-top button component
 */
const ScrollToTop: FC = (): ReactElement => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    /**
     * Toggles button visibility based on scroll position.
     * Shows button when scrolled more than 300px from top.
     */
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px or more
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  /**
   * Scrolls the page smoothly to the top.
   */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      position="fixed"
      bottom={8}
      right={8}
      zIndex={1000}
      opacity={isVisible ? 1 : 0}
      transform={isVisible ? "translateY(0)" : "translateY(20px)"}
      transition="all 0.3s ease-in-out"
      pointerEvents={isVisible ? "auto" : "none"}
    >
      <IconButton
        aria-label="Scroll to top"
        icon={<FaArrowUp />}
        onClick={scrollToTop}
        size="lg"
        colorScheme="brand"
        bg="brand.500"
        color="white"
        borderRadius="full"
        boxShadow="lg"
        _hover={{
          bg: "brand.600",
          transform: "scale(1.1)",
        }}
        _active={{
          transform: "scale(0.95)",
        }}
        transition="all 0.2s"
      />
    </Box>
  );
};

export default ScrollToTop;
