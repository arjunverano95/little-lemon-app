import { FC, ReactElement } from "react";
import { Box } from "@chakra-ui/react";
import Header from "../../components/Header";
import ConfirmedBooking from "../../components/ConfirmedBooking";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";

const ConfirmationPage: FC = (): ReactElement => {
  return (
    <Box>
      <Header />
      <ConfirmedBooking />
      <Footer />
      <ScrollToTop />
    </Box>
  );
};

export default ConfirmationPage;
