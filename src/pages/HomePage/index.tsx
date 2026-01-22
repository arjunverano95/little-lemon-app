import { FC, ReactElement } from "react";
import { Box } from "@chakra-ui/react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import CallToAction from "../../components/sections/CallToAction";
import WeeklySpecials from "../../components/sections/WeeklySpecials";
import Testimonials from "../../components/sections/Testimonials";
import About from "../../components/sections/About";
import Contact from "../../components/sections/Contact";
import ScrollToTop from "../../components/ui/ScrollToTop";

/**
 * HomePage Component
 *
 * Main landing page that displays all sections of the restaurant website:
 * - Header with navigation
 * - Call to action hero section
 * - Weekly specials
 * - Customer testimonials
 * - About section
 * - Contact information
 * - Footer
 * - Scroll to top button
 *
 * @returns {ReactElement} The home page component
 */
const HomePage: FC = (): ReactElement => {
  return (
    <Box>
      <Header />
      <CallToAction />
      <WeeklySpecials />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
      <ScrollToTop />
    </Box>
  );
};

export default HomePage;
