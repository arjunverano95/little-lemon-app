import { FC, ReactElement } from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import Mario_and_Adrian_A from "../../../assets/Mario_and_Adrian_A.jpg";
import Mario_and_Adrian_B from "../../../assets/Mario_and_Adrian_B.jpg";

/**
 * About Component
 *
 * About section component that displays information about Little Lemon restaurant
 * and its owners (Mario and Adrian). Includes stacked images of the owners on
 * larger screens. Has id="about" for anchor navigation.
 *
 * @returns {ReactElement} The about section component
 */
const About: FC = (): ReactElement => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box as="section" id="about" py={20} px={4}>
      <Container maxW="container.xl">
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          gap={8}
        >
          <Box flex="1" maxW={{ base: "100%", md: "400px" }} textAlign={{ base: "center", md: "left" }}>
            <Heading
              as="h1"
              size="2xl"
              fontFamily="heading"
              color="brand.500"
              mb={2}
            >
              Little Lemon
            </Heading>
            <Heading
              as="h2"
              size="lg"
              fontFamily="heading"
              fontWeight="normal"
              color="tertiary.500"
              mb={4}
            >
              Chicago
            </Heading>
            <Text fontSize="md" color="brand.500" mb={4} lineHeight="tall">
              Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.
            </Text>
            <Text fontSize="md" color="brand.500" lineHeight="tall">
              To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.
            </Text>
          </Box>

          {!isMobile && (
            <Box
              position="relative"
              flex="1"
              display="flex"
              justifyContent="flex-end"
              alignItems="flex-start"
              minH="400px"
            >
              <Image
                src={Mario_and_Adrian_B}
                alt="Mario and Adrian"
                width="250px"
                height="350px"
                objectFit="cover"
                borderRadius="xl"
                boxShadow="2xl"
                zIndex={1}
                position="relative"
                _hover={{
                  transform: "translateX(10px) translateY(10px) scale(1.02)",
                  transition: "transform 0.3s",
                }}
              />
              <Image
                src={Mario_and_Adrian_A}
                alt="Mario and Adrian"
                width="250px"
                height="350px"
                objectFit="cover"
                borderRadius="xl"
                boxShadow="2xl"
                position="absolute"
                right="150px"
                top="120px"
                zIndex={2}
                _hover={{
                  transform: "translateX(-10px) translateY(-10px) scale(1.02)",
                  transition: "transform 0.3s",
                }}
              />
            </Box>
          )}
        </Flex>
      </Container>
    </Box>
  );
};

export default About;
