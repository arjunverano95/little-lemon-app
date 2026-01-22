import { FC, ReactElement } from "react";
import {
  Box,
  Container,
  Heading,
  VStack,
  Text,
  Link,
  Icon,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Contact: FC = (): ReactElement => {
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Box as="section" id="contact" py={20} px={4} bg="gray.50">
      <Container maxW="container.xl">
        <VStack spacing={12} align="stretch">
          <Box textAlign="center">
            <Heading
              as="h1"
              size="2xl"
              fontFamily="heading"
              color="brand.500"
              mb={4}
            >
              Contact Us
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="600px" mx="auto">
              We'd love to hear from you! Get in touch with us through any of
              the following ways.
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
            {/* Phone */}
            <Box
              bg={cardBg}
              p={6}
              borderRadius="xl"
              boxShadow="md"
              borderWidth="1px"
              borderColor={borderColor}
              textAlign="center"
              transition="all 0.3s"
              _hover={{
                transform: "translateY(-4px)",
                boxShadow: "xl",
                borderColor: "brand.500",
              }}
            >
              <Icon
                as={FaPhone}
                boxSize={8}
                color="brand.500"
                mb={4}
              />
              <Heading as="h3" size="md" mb={2} fontFamily="heading">
                Phone
              </Heading>
              <Link
                href="tel:+551199999999"
                color="brand.500"
                _hover={{ color: "brand.600", textDecoration: "underline" }}
                transition="all 0.2s" fontSize={"xs"}
              >
                +55 11 9999-9999
              </Link>
            </Box>

            {/* Email */}
            <Box
              bg={cardBg}
              p={6}
              borderRadius="xl"
              boxShadow="md"
              borderWidth="1px"
              borderColor={borderColor}
              textAlign="center"
              transition="all 0.3s"
              _hover={{
                transform: "translateY(-4px)",
                boxShadow: "xl",
                borderColor: "brand.500",
              }}
            >
              <Icon
                as={FaEnvelope}
                boxSize={8}
                color="brand.500"
                mb={4}
              />
              <Heading as="h3" size="md" mb={2} fontFamily="heading">
                Email
              </Heading>
              <Link
                href="mailto:contact@littlelemon.com"
                color="brand.500"
                _hover={{ color: "brand.600", textDecoration: "underline" }}
                transition="all 0.2s" fontSize={"xs"}
              >
                contact@littlelemon.com
              </Link>
            </Box>

            {/* Address */}
            <Box
              bg={cardBg}
              p={6}
              borderRadius="xl"
              boxShadow="md"
              borderWidth="1px"
              borderColor={borderColor}
              textAlign="center"
              transition="all 0.3s"
              _hover={{
                transform: "translateY(-4px)",
                boxShadow: "xl",
                borderColor: "brand.500",
              }}
            >
              <Icon
                as={FaMapMarkerAlt}
                boxSize={8}
                color="brand.500"
                mb={4}
              />
              <Heading as="h3" size="md" mb={2} fontFamily="heading">
                Address
              </Heading>
              <Text as="address" fontStyle="normal" fontSize="xs" color="gray.600">
                331 E Chicago
                <br />
                LaSalle Street Chicago,
                <br />
                Illinois 60602, USA
              </Text>
            </Box>

            {/* Hours */}
            <Box
              bg={cardBg}
              p={6}
              borderRadius="xl"
              boxShadow="md"
              borderWidth="1px"
              borderColor={borderColor}
              textAlign="center"
              transition="all 0.3s"
              _hover={{
                transform: "translateY(-4px)",
                boxShadow: "xl",
                borderColor: "brand.500",
              }}
            >
              <Icon
                as={FaClock}
                boxSize={8}
                color="brand.500"
                mb={4}
              />
              <Heading as="h3" size="md" mb={2} fontFamily="heading">
                Hours
              </Heading>
              <Text fontSize="xs" color="gray.600">
                Mon - Thu: 11:00 AM - 10:00 PM
                <br />
                Fri - Sat: 11:00 AM - 11:00 PM
                <br />
                Sun: 12:00 PM - 9:00 PM
              </Text>
            </Box>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Contact;
