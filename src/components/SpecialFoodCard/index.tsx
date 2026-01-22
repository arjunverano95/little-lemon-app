import { FC, ReactElement } from "react";
import {
  Box,
  Image,
  Heading,
  Text,
  HStack,
  Button,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import deliveryIcon from "../../assets/deliveryIcon.svg";

interface SpecialFoodCardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
}

const SpecialFoodCard: FC<SpecialFoodCardProps> = ({
  imageUrl,
  title,
  price,
  description,
}): ReactElement => {
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Box
      bg={cardBg}
      borderRadius="xl"
      overflow="hidden"
      boxShadow="md"
      borderWidth="1px"
      borderColor={borderColor}
      transition="all 0.3s"
      _hover={{
        transform: "translateY(-4px)",
        boxShadow: "xl",
        borderColor: "brand.500",
      }}
      maxW="400px"
      w="100%"
      display="flex"
      flexDirection="column"
      height="100%"
    >
      <Image
        src={imageUrl}
        alt={title}
        width="100%"
        height="250px"
        objectFit="cover"
        transition="transform 0.3s"
        _groupHover={{
          transform: "scale(1.05)",
        }}
      />

      <VStack align="stretch" p={6} spacing={4} flex="1">
        <HStack justify="space-between" align="center">
          <Heading
            as="h3"
            size="md"
            fontFamily="heading"
            fontWeight="bold"
            color="brand.500"
          >
            {title}
          </Heading>
          <Text
            fontSize="lg"
            fontWeight="bold"
            color="tertiary.500"
          >
            ${price.toFixed(2)}
          </Text>
        </HStack>

        <Text
          color="brand.500"
          fontSize="md"
          lineHeight="tall"
          flex="1"
        >
          {description}
        </Text>

        <HStack spacing={4} mt="auto">
          <Button
            variant="secondary"
            size="sm"
            leftIcon={<Image src={deliveryIcon} alt="Delivery" height="20px" />}
            _hover={{
              bg: "brand.600",
              transform: "translateY(-1px)",
            }}
            width="100%"
            paddingY={5}
          >
            Book now
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default SpecialFoodCard;
