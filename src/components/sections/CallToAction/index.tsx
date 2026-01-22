import { FC, ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import restaurant_food from "../../../assets/restaurantfood.jpg";

/**
 * CallToAction Component
 *
 * Hero section component that displays the restaurant name, location,
 * description, and a call-to-action button to reserve a table.
 * Includes a restaurant food image on larger screens.
 *
 * @returns {ReactElement} The call-to-action hero section component
 */
const CallToAction: FC = (): ReactElement => {
  const navigate = useNavigate();

  return (
    <Box
      position="relative"
      mt="140px"
      bgGradient="linear(135deg, brand.500 0%, brand.600 100%)"
      py={20}
      px={4}
      boxShadow="xl"
    >
      <Container maxW="container.xl">
        <Flex
          direction={{ base: "column", md: "row" }}
          align={{ base: "center", md: "flex-start" }}
          justify="space-between"
          gap={8}
        >
          <Box
            flex="1"
            color="white"
            textAlign={{ base: "center", md: "left" }}
            maxW={{ base: "100%", md: "400px" }}
          >
            <Heading
              as="h1"
              size="4xl"
              color="accent.500"
              mb={2}
              fontFamily="heading"
            >
              Little Lemon
            </Heading>
            <Heading
              as="h2"
              size="lg"
              mb={4}
              fontFamily="heading"
              fontWeight="normal"
            >
              Chicago
            </Heading>
            <Text fontSize="md" mb={6} lineHeight="tall">
              We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </Text>
            <Button
              variant="primary"
              size="md"
              onClick={() => navigate("/bookings")}
              aria-label="Go to reservation table page"
              width={{ base: "100%", md: "auto" }}
            >
              Reserve a Table
            </Button>
          </Box>

          <Box
            flex="1"
            display="flex"
            justifyContent={{ base: "center", md: "flex-end" }}
          >
            <Image
              src={restaurant_food}
              alt="Restaurant Food"
              borderRadius="xl"
              boxShadow="2xl"
              maxW={{ base: "100%", md: "400px" }}
              height={{ base: "auto", md: "400px" }}
              objectFit="cover"
              _hover={{
                transform: "scale(1.02)",
                transition: "transform 0.3s",
              }}
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default CallToAction;
