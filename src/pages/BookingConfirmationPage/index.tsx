import { FC, ReactElement } from "react";
import { Box } from "@chakra-ui/react";
import Header from "../../components/layout/Header";
import BookingConfirmation from "../../components/booking/BookingConfirmation";
import Footer from "../../components/layout/Footer";
import ScrollToTop from "../../components/ui/ScrollToTop";

/**
 * BookingConfirmationPage Component
 *
 * Booking confirmation page that displays the confirmation message and booking details.
 * Includes header, footer, and scroll-to-top button.
 *
 * @returns {ReactElement} The booking confirmation page component
 */
const BookingConfirmationPage: FC = (): ReactElement => {
  return (
    <Box>
      <Header />
      <BookingConfirmation />
      <Footer />
      <ScrollToTop />
    </Box>
  );
};

export default BookingConfirmationPage;
