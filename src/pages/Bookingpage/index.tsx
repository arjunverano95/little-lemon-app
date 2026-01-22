import { useReducer, FC, ReactElement } from "react";
import { Box } from "@chakra-ui/react";
import Header from "../../components/Header";
import BookingForm from "../../components/BookingForm";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
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
