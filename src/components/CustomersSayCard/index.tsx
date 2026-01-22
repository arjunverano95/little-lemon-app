import { FC, ReactElement } from "react";
import {
  Box,
  VStack,
  HStack,
  Text,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

interface CustomersSayCardProps {
  rating: number;
  customerImg: string;
  customerName: string;
  testimonial: string;
}

const CustomersSayCard: FC<CustomersSayCardProps> = ({
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

export default CustomersSayCard;
