import { render, screen } from "../../../utils/tests-ts";
import SpecialCard from ".";

const mockProps = {
  imageUrl: "https://example.com/greek-salad.jpg",
  title: "Greek Salad",
  description: "Fresh vegetables with feta cheese",
  price: 12.99,
};

describe("SpecialCard", () => {
  test("Renders food card with all props", () => {
    render(<SpecialCard {...mockProps} />);

    expect(screen.getByText("Greek Salad")).toBeInTheDocument();
    expect(screen.getByText("Fresh vegetables with feta cheese")).toBeInTheDocument();
    expect(screen.getByText("$12.99")).toBeInTheDocument();
  });

  test("Renders food image with correct alt text", () => {
    render(<SpecialCard {...mockProps} />);

    const image = screen.getByAltText("Greek Salad");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "https://example.com/greek-salad.jpg");
  });

  test("Renders Book now button", () => {
    render(<SpecialCard {...mockProps} />);

    const button = screen.getByRole("button", { name: /book now/i });
    expect(button).toBeInTheDocument();
  });

  test("Renders delivery icon", () => {
    render(<SpecialCard {...mockProps} />);

    const deliveryIcon = screen.getByAltText("Delivery");
    expect(deliveryIcon).toBeInTheDocument();
  });

  test("Displays price with correct formatting", () => {
    render(<SpecialCard {...mockProps} price={7.5} />);

    expect(screen.getByText("$7.50")).toBeInTheDocument();
  });

  test("Displays price with two decimal places", () => {
    render(<SpecialCard {...mockProps} price={10} />);

    expect(screen.getByText("$10.00")).toBeInTheDocument();
  });
});
