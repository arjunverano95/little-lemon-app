import { FC, ReactElement } from "react";
import {
  Box,
  VStack,
  HStack,
  Text,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

/**
 * Props for the TestimonialCard component.
 */
interface TestimonialCardProps {
  /** Rating from 1 to 5 stars */
  rating: number;
  /** URL of the customer's profile image */
  customerImg: string;
  /** Name of the customer */
  customerName: string;
  /** Customer's testimonial text */
  testimonial: string;
}

/**
 * TestimonialCard Component
 *
 * Displays a customer testimonial card with rating stars, customer avatar,
 * name, and testimonial text. Includes hover effects for better interactivity.
 *
 * @param {TestimonialCardProps} props - Component props
 * @param {number} props.rating - Rating from 1 to 5
 * @param {string} props.customerImg - URL of customer profile image
 * @param {string} props.customerName - Name of the customer
 * @param {string} props.testimonial - Testimonial text
 * @returns {ReactElement} The customer testimonial card component
 */
const TestimonialCard: FC<TestimonialCardProps> = ({
  rating,
  customerImg,
  customerName,
  testimonial,
}): ReactElement => {
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  const stars = "★".repeat(rating) + "☆".repeat(5 - rating);

  return (
    <Box
      bg={cardBg}
      borderRadius="xl"
      p={6}
      boxShadow="md"
      borderWidth="1px"
      borderColor={borderColor}
      transition="all 0.3s"
      _hover={{
        transform: "translateY(-4px)",
        boxShadow: "xl",
        borderColor: "brand.500",
      }}
      maxW="300px"
      w="100%"
    >
      <VStack align="stretch" spacing={4}>
        <Text fontSize="xl" color="accent.500">
          {stars}
        </Text>

        <HStack spacing={3}>
          <Avatar
            src={customerImg}
            name={customerName}
            size="md"
            borderWidth="3px"
            borderColor="brand.500"
            _hover={{
              borderColor: "accent.500",
              transform: "scale(1.05)",
            }}
            transition="all 0.2s"
          />
          <Text fontWeight="bold" fontSize="md">
            {customerName}
          </Text>
        </HStack>

        <Text
          fontSize="sm"
          lineHeight="tall"
          color="gray.600"
          fontStyle="italic"
          textAlign="left"
        >
          &ldquo;{testimonial}&rdquo;
        </Text>
      </VStack>
    </Box>
  );
};

export default TestimonialCard;
