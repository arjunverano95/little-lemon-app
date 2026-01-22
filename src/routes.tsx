import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import BookingConfirmationPage from "./pages/BookingConfirmationPage";

/**
 * AppRoutes Component
 *
 * Defines the application routes using React Router.
 * Routes:
 * - "/" - Home page
 * - "/bookings" - Booking form page
 * - "/confirmation" - Booking confirmation page
 *
 * @returns {JSX.Element} The routes configuration
 */
function AppRoutes() {
  return (
    <Routes>
      <Route element={<HomePage/>} path="/"/>
      <Route element={<BookingPage/>} path="/bookings"/>
      <Route element={<BookingConfirmationPage/>} path="/confirmation"/>
    </Routes>
  );
}

export default AppRoutes;
