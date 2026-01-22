import { render, screen } from "../../../utils/tests-ts";
import userEvent from "@testing-library/user-event";
import BookingConfirmation from ".";

// Mock useNavigate
const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("BookingConfirmation", () => {
  beforeEach(() => {
    localStorage.clear();
    mockNavigate.mockClear();
  });

  test("Renders confirmation message", () => {
    render(<BookingConfirmation />);

    expect(screen.getByText("Thank you for your reservation!")).toBeInTheDocument();
    expect(
      screen.getByText("We look forward to seeing you at Little Lemon.")
    ).toBeInTheDocument();
  });

  test("Renders back to home button", () => {
    render(<BookingConfirmation />);

    const backButton = screen.getByLabelText("Go back to the home page");
    expect(backButton).toBeInTheDocument();
  });

  test("Navigates to home when back button is clicked", async () => {
    const user = userEvent.setup();
    render(<BookingConfirmation />);

    const backButton = screen.getByLabelText("Go back to the home page");
    await user.click(backButton);

    expect(mockNavigate).toHaveBeenCalledWith("/");
  });

  test("Displays booking details when booking data exists", () => {
    const bookingData = {
      date: "2024-01-15",
      time: "19:00",
      guests: 4,
      occasion: "birthday",
    };

    localStorage.setItem("Bookings", JSON.stringify(bookingData));

    render(<BookingConfirmation />);

    expect(screen.getByText("Confirmation details")).toBeInTheDocument();
    expect(screen.getByText("2024-01-15")).toBeInTheDocument();
    expect(screen.getByText("19:00")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
    expect(screen.getByText("birthday")).toBeInTheDocument();
  });

  test("Does not display booking details when no booking data exists", () => {
    render(<BookingConfirmation />);

    expect(screen.queryByText("Confirmation details")).not.toBeInTheDocument();
  });
});
