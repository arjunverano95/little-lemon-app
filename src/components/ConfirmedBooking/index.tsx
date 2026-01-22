import { FC, ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";

const ConfirmedBooking: FC = (): ReactElement => {
  const navigate = useNavigate();
  const booking = (() => {
    const bookingData = localStorage.getItem("Bookings");
    if (bookingData) {
      return JSON.parse(bookingData);
    }
    return undefined;
  })();

  return (
    <Box py={20} px={4} mt="140px">
      <Container maxW="container.md">
        <VStack spacing={8} align="stretch">
          <VStack spacing={4} textAlign="center">
            <Heading
              as="h1"
              size="2xl"
              fontFamily="heading"
              color="brand.500"
            >
              Thank you for your reservation!
            </Heading>
            <Text fontSize="lg" fontWeight="medium">
              We look forward to seeing you at Little Lemon.
            </Text>
          </VStack>

          {booking && (
            <Box
              bgGradient="linear(135deg, brand.500 0%, brand.600 100%)"
              color="white"
              p={8}
              borderRadius="xl"
              boxShadow="xl"
            >
              <VStack spacing={4} align="stretch">
                <Heading
                  as="h2"
                  size="lg"
                  fontFamily="heading"
                  color="accent.500"
                  textAlign="center"
                >
                  Confirmation details
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                  <Box
                    bg="whiteAlpha.200"
                    p={4}
                    borderRadius="md"
                    _hover={{ bg: "whiteAlpha.300", transform: "translateX(4px)" }}
                    transition="all 0.2s"
                  >
                    <Text fontWeight="bold" mb={1}>Occasion:</Text>
                    <Text textTransform="capitalize">{booking.occasion}</Text>
                  </Box>
                  <Box
                    bg="whiteAlpha.200"
                    p={4}
                    borderRadius="md"
                    _hover={{ bg: "whiteAlpha.300", transform: "translateX(4px)" }}
                    transition="all 0.2s"
                  >
                    <Text fontWeight="bold" mb={1}>Guests:</Text>
                    <Text>{booking.guests}</Text>
                  </Box>
                  <Box
                    bg="whiteAlpha.200"
                    p={4}
                    borderRadius="md"
                    _hover={{ bg: "whiteAlpha.300", transform: "translateX(4px)" }}
                    transition="all 0.2s"
                  >
                    <Text fontWeight="bold" mb={1}>Date:</Text>
                    <Text>{booking.date}</Text>
                  </Box>
                  <Box
                    bg="whiteAlpha.200"
                    p={4}
                    borderRadius="md"
                    _hover={{ bg: "whiteAlpha.300", transform: "translateX(4px)" }}
                    transition="all 0.2s"
                  >
                    <Text fontWeight="bold" mb={1}>Time:</Text>
                    <Text>{booking.time}</Text>
                  </Box>
                </SimpleGrid>
              </VStack>
            </Box>
          )}

          <Button
            variant="primary"
            size="md"
            onClick={() => navigate("/")}
            aria-label="Go back to the home page"
            width="100%"
            maxW="400px"
            mx="auto"
          >
            Back to home
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default ConfirmedBooking;
