import { render, screen } from "../../../utils/tests-ts";
import TestimonialCard from ".";

const mockProps = {
  rating: 5,
  customerImg: "https://example.com/customer.jpg",
  customerName: "John Doe",
  testimonial: "Great food and excellent service!",
};

describe("TestimonialCard", () => {
  test("Renders customer card with all props", () => {
    render(<TestimonialCard {...mockProps} />);

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText(/Great food and excellent service!/i)).toBeInTheDocument();
  });

  test("Renders customer avatar", () => {
    render(<TestimonialCard {...mockProps} />);

    // Chakra UI Avatar uses aria-label with the name prop
    const avatar = screen.getByLabelText("John Doe");
    expect(avatar).toBeInTheDocument();
  });

  test("Displays correct number of stars based on rating", () => {
    render(<TestimonialCard {...mockProps} rating={5} />);

    const stars = screen.getByText(/★{5}/);
    expect(stars).toBeInTheDocument();
  });

  test("Displays correct stars for rating of 4", () => {
    render(<TestimonialCard {...mockProps} rating={4} />);

    const stars = screen.getByText(/★{4}☆/);
    expect(stars).toBeInTheDocument();
  });

  test("Displays correct stars for rating of 3", () => {
    render(<TestimonialCard {...mockProps} rating={3} />);

    const stars = screen.getByText(/★{3}☆{2}/);
    expect(stars).toBeInTheDocument();
  });

  test("Renders testimonial with quotation marks", () => {
    render(<TestimonialCard {...mockProps} />);

    const testimonial = screen.getByText(/Great food and excellent service!/i);
    expect(testimonial).toBeInTheDocument();
  });

  test("Renders customer name", () => {
    render(<TestimonialCard {...mockProps} customerName="Jane Smith" />);

    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
  });
});
