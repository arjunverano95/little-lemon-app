import { render, screen } from "../../../utils/tests-ts";
import userEvent from "@testing-library/user-event";
import CallToAction from ".";

// Mock useNavigate
const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("CallToAction", () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  test("Renders heading and subheading", () => {
    render(<CallToAction />);

    expect(screen.getByText("Little Lemon")).toBeInTheDocument();
    expect(screen.getByText("Chicago")).toBeInTheDocument();
  });

  test("Renders description text", () => {
    render(<CallToAction />);

    expect(
      screen.getByText(
        /We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist/i
      )
    ).toBeInTheDocument();
  });

  test("Renders Reserve a Table button", () => {
    render(<CallToAction />);

    const button = screen.getByLabelText("Go to reservation table page");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Reserve a Table");
  });

  test("Button has correct aria-label", () => {
    render(<CallToAction />);

    const button = screen.getByLabelText("Go to reservation table page");
    expect(button).toBeInTheDocument();
  });

  test("Navigates to bookings page when button is clicked", async () => {
    const user = userEvent.setup();
    render(<CallToAction />);

    const button = screen.getByLabelText("Go to reservation table page");
    await user.click(button);

    expect(mockNavigate).toHaveBeenCalledWith("/bookings");
  });

  test("Renders restaurant food image", () => {
    render(<CallToAction />);

    const image = screen.getByAltText("Restaurant Food");
    expect(image).toBeInTheDocument();
  });
});
