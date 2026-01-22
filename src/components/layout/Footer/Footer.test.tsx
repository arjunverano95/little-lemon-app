import { render, screen } from "../../../utils/tests-ts";
import Footer from ".";

describe("Footer", () => {
  test("Renders footer with logo", () => {
    render(<Footer />);

    const logo = screen.getByAltText("Little Lemon Logo");
    expect(logo).toBeInTheDocument();
  });

  test("Renders social media links", () => {
    render(<Footer />);

    expect(screen.getByLabelText("Facebook")).toBeInTheDocument();
    expect(screen.getByLabelText("Instagram")).toBeInTheDocument();
    expect(screen.getByLabelText("Twitter")).toBeInTheDocument();
  });

  test("Social media links have correct hrefs", () => {
    render(<Footer />);

    const facebookLink = screen.getByLabelText("Facebook");
    const instagramLink = screen.getByLabelText("Instagram");
    const twitterLink = screen.getByLabelText("Twitter");

    expect(facebookLink).toHaveAttribute("href", "https://www.facebook.com/littlelemon");
    expect(instagramLink).toHaveAttribute("href", "https://www.instagram.com/littlelemon");
    expect(twitterLink).toHaveAttribute("href", "https://twitter.com/littlelemon");
  });

  test("Renders Quick Links section", () => {
    render(<Footer />);

    expect(screen.getByText("Quick Links")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Menu")).toBeInTheDocument();
    expect(screen.getByText("Contact us")).toBeInTheDocument();
    expect(screen.getByText("Book Now")).toBeInTheDocument();
  });

  test("Renders Contact Info section", () => {
    render(<Footer />);

    expect(screen.getByText("Contact Info")).toBeInTheDocument();
    // Use getAllByText since "Little Lemon" appears multiple times
    const littleLemonTexts = screen.getAllByText(/Little Lemon/i);
    expect(littleLemonTexts.length).toBeGreaterThan(0);
    expect(screen.getByText(/331 E Chicago/i)).toBeInTheDocument();
  });

  test("Renders contact links", () => {
    render(<Footer />);

    const phoneLink = screen.getByText("+55 11 9999-9999");
    const emailLink = screen.getByText("contact@littlelemon.com");

    expect(phoneLink).toHaveAttribute("href", "tel:+551199999999");
    expect(emailLink).toHaveAttribute("href", "mailto:contact@littlelemon.com");
  });

  test("Renders developer credit", () => {
    render(<Footer />);

    expect(screen.getByText(/Developed by/i)).toBeInTheDocument();
    const developerLink = screen.getByText("Arjun Verano");
    expect(developerLink).toHaveAttribute("href", "https://github.com/arjunverano95");
  });

  test("Renders copyright notice", () => {
    render(<Footer />);

    expect(screen.getByText(/© 2023 Little Lemon. All rights reserved./i)).toBeInTheDocument();
  });
});
