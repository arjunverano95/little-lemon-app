import { useReducer, FC, ReactElement } from "react";
import { Box } from "@chakra-ui/react";
import Header from "../../components/layout/Header";
import BookingForm from "../../components/booking/BookingForm";
import Footer from "../../components/layout/Footer";
import ScrollToTop from "../../components/ui/ScrollToTop";
import { updateTimes, initializeTimes } from "../../utils/temp";

/**
 * Bookingpage Component
 *
 * Booking page that displays the booking form with header, footer, and scroll-to-top button.
 * Manages available times state using useReducer and passes it to the BookingForm component.
 *
 * @returns {ReactElement} The booking page component
 */
const Bookingpage: FC = (): ReactElement => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <Box>
      <Header />
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      <Footer />
      <ScrollToTop />
    </Box>
  );
};

export default Bookingpage;
