import { FC, ReactElement } from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import SpecialFoodCard from "../SpecialFoodCard";
import greekSalad from "../../assets/greekSalad.jpg";
import bruchetta from "../../assets/bruchetta.svg";
import lemonDessert from "../../assets/lemonDessert.jpg";

const Specials: FC = (): ReactElement => {

  return (
    <Box as="section" id="menu" py={20} px={4}>
      <Container maxW="container.xl">
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "center", md: "flex-end" }}
          mb={12}
          gap={4}
        >
          <Heading
            as="h1"
            size="2xl"
            fontFamily="heading"
            textAlign={{ base: "center", md: "left" }}
          >
            This weeks specials!
          </Heading>
          <Button variant="primary" size="md" width={{ base: "100%", md: "auto" }}>
            Online Menu
          </Button>
        </Flex>

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={8}
          justifyItems="stretch"
        >
          <SpecialFoodCard
            imageUrl={greekSalad}
            title="Greek Salad"
            price={12.99}
            description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
          />
          <SpecialFoodCard
            imageUrl={bruchetta}
            title="Bruchetta"
            price={7.99}
            description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
          />
          <SpecialFoodCard
            imageUrl={lemonDessert}
            title="Lemon Dessert"
            price={6.99}
            description="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Specials;
