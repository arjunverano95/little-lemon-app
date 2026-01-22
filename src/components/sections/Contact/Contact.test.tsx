import { render, screen } from "../../../utils/tests-ts";
import Contact from ".";

describe("Contact", () => {
  test("Renders contact section heading", () => {
    render(<Contact />);

    expect(screen.getByText("Contact Us")).toBeInTheDocument();
  });

  test("Renders contact description", () => {
    render(<Contact />);

    expect(
      screen.getByText(/We'd love to hear from you! Get in touch with us through any of the following ways./i)
    ).toBeInTheDocument();
  });

  test("Renders phone contact card", () => {
    render(<Contact />);

    expect(screen.getByText("Phone")).toBeInTheDocument();
    const phoneLink = screen.getByText("+55 11 9999-9999");
    expect(phoneLink).toHaveAttribute("href", "tel:+551199999999");
  });

  test("Renders email contact card", () => {
    render(<Contact />);

    expect(screen.getByText("Email")).toBeInTheDocument();
    const emailLink = screen.getByText("contact@littlelemon.com");
    expect(emailLink).toHaveAttribute("href", "mailto:contact@littlelemon.com");
  });

  test("Renders address contact card", () => {
    render(<Contact />);

    expect(screen.getByText("Address")).toBeInTheDocument();
    expect(screen.getByText(/331 E Chicago/i)).toBeInTheDocument();
    expect(screen.getByText(/Illinois 60602, USA/i)).toBeInTheDocument();
  });

  test("Renders hours contact card", () => {
    render(<Contact />);

    expect(screen.getByText("Hours")).toBeInTheDocument();
    expect(screen.getByText(/Mon - Thu: 11:00 AM - 10:00 PM/i)).toBeInTheDocument();
    expect(screen.getByText(/Fri - Sat: 11:00 AM - 11:00 PM/i)).toBeInTheDocument();
    expect(screen.getByText(/Sun: 12:00 PM - 9:00 PM/i)).toBeInTheDocument();
  });

  test("Contact section has correct id for anchor links", () => {
    const { container } = render(<Contact />);
    const section = container.querySelector("#contact");
    expect(section).toBeInTheDocument();
  });
});
