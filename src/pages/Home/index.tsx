import { FC, ReactElement } from "react";
import { Box } from "@chakra-ui/react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CallToAction from "../../components/CallToAction";
import Specials from "../../components/Specials";
import CustomersSay from "../../components/CustomersSay";
import Chicago from "../../components/Chicago";
import Contact from "../../components/Contact";
import ScrollToTop from "../../components/ScrollToTop";

const Home: FC = (): ReactElement => {
  return (
    <Box>
      <Header />
      <CallToAction />
      <Specials />
      <CustomersSay />
      <Chicago />
      <Contact />
      <Footer />
      <ScrollToTop />
    </Box>
  );
};

export default Home;
