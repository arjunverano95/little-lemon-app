# Little Lemon Restaurant

A modern, responsive restaurant website for Little Lemon, a family-owned Mediterranean restaurant. This project is the capstone project for Meta's Front-End Developer Professional Certificate on Coursera.

## 🍋 About

Little Lemon is a restaurant website featuring a beautiful, modern design with smooth scrolling navigation, online reservations, customer testimonials, and contact information. The website showcases the restaurant's specials, story, and provides an easy way for customers to book a table.

**Developed by [Arjun Verano](https://github.com/arjunverano95)**

## ✨ Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Online Reservations**: Interactive booking form with date, time, guest count, and occasion selection
- **Smooth Scrolling**: Smooth anchor link navigation with scroll-to-top button
- **Restaurant Specials**: Showcase of weekly specials with pricing and descriptions
- **Customer Testimonials**: Reviews and ratings from satisfied customers
- **Contact Section**: Multiple ways to get in touch (phone, email, address, hours)
- **About Section**: Story of the restaurant owners, Mario and Adrian
- **Modern UI**: Built with Chakra UI for a clean, professional appearance

## 🚀 Technologies

This project was developed with the following technologies:

### Core
- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and development server

### UI & Styling
- **Chakra UI v2** - Component library for React
- **Emotion** - CSS-in-JS library (used by Chakra UI)
- **Framer Motion** - Animation library
- **React Icons** - Icon library

### Routing & Navigation
- **React Router DOM v7** - Client-side routing
- **React Router Hash Link** - Smooth scrolling hash links

### Forms & Validation
- **Formik** - Form management library
- **Yup** - Schema validation library

### Testing
- **Jest** - JavaScript testing framework
- **React Testing Library** - Testing utilities for React components
- **ts-jest** - TypeScript preprocessor for Jest

### Code Quality
- **ESLint 9** - Linting tool with flat config
- **TypeScript ESLint** - ESLint rules for TypeScript

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/arjunverano95/little-lemon.git
cd little-lemon
```

2. Install dependencies:
```bash
npm install
```

## 🛠️ Available Scripts

- `npm run dev` or `npm start` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm test` - Run tests with Jest
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
src/
├── assets/                    # Images, logos, and other static assets
│   └── logo/                  # Logo variations
├── components/                # Reusable React components (organized by category)
│   ├── booking/               # Booking-related components
│   │   ├── BookingForm/       # Reservation form with validation
│   │   └── BookingConfirmation/ # Booking confirmation page component
│   ├── cards/                 # Reusable card components
│   │   ├── SpecialCard/       # Food item card component
│   │   └── TestimonialCard/   # Customer testimonial card
│   ├── layout/                # Layout components
│   │   ├── Footer/            # Footer with links and contact info
│   │   ├── Header/            # Fixed header with scroll behavior
│   │   ├── Navigation/        # Desktop navigation
│   │   └── MobileNavigation/  # Mobile navigation drawer
│   ├── sections/              # Page section components
│   │   ├── About/             # About section (restaurant story)
│   │   ├── CallToAction/      # Hero section with CTA
│   │   ├── Contact/           # Contact information section
│   │   ├── Testimonials/      # Customer testimonials section
│   │   └── WeeklySpecials/    # Weekly specials showcase
│   └── ui/                    # UI utility components
│       └── ScrollToTop/       # Scroll to top button
├── pages/                     # Page components
│   ├── HomePage/              # Main landing page
│   ├── BookingPage/           # Booking form page
│   └── BookingConfirmationPage/ # Booking confirmation page
├── styles/                    # Theme and styling configuration
│   └── chakra-theme.ts        # Chakra UI theme customization
├── utils/                     # Utility functions
│   ├── temp.ts                # Mock API functions (fetchAPI, submitAPI)
│   └── tests-ts.tsx           # Test utilities and setup
├── routes.tsx                 # Route configuration
└── main.tsx                   # Application entry point
```

## 🎨 Design Features

- **Custom Theme**: Tailored color palette matching the Little Lemon brand
- **Smooth Animations**: Hover effects and transitions throughout
- **Accessibility**: Semantic HTML and ARIA labels for screen readers
- **Performance**: Optimized images and code splitting

## 🧪 Testing

The project includes comprehensive unit tests for components. Test coverage includes:

- **BookingForm**: Form rendering, validation (guests min/max), and submission
- **BookingConfirmation**: Confirmation message and booking details display
- **CallToAction**: Hero section rendering and navigation
- **Contact**: Contact information display and links
- **Footer**: Footer content, links, and social media icons
- **SpecialCard**: Food card rendering and price formatting
- **TestimonialCard**: Testimonial display and rating stars

Run tests with:

```bash
npm test
```

All 45 tests are currently passing.

## 📝 Development Notes

### Architecture & Organization
- **Component Organization**: Components are organized into logical folders:
  - `booking/` - Booking-related functionality
  - `cards/` - Reusable card components
  - `layout/` - Layout and navigation components
  - `sections/` - Page section components
  - `ui/` - UI utility components
- **Naming Convention**: All components and pages use PascalCase with descriptive names
- **TypeScript**: Full type safety with TypeScript throughout the project
- **JSDoc Comments**: Comprehensive documentation for all components and functions

### Key Features Implementation
- **React 19**: Latest React features with TypeScript for type safety
- **Chakra UI v2**: Comprehensive component library with custom theming
- **Smooth Scrolling**: Anchor links with offset calculation for fixed header
- **Form Validation**: Formik and Yup for robust form handling and validation
- **Responsive Design**: Mobile-first approach with Chakra UI breakpoints
- **Accessibility**: Semantic HTML, ARIA labels, and keyboard navigation support
- **Performance**: Vite for fast development and optimized production builds

### Code Quality
- **ESLint 9**: Flat config format with TypeScript and React rules
- **Jest**: Comprehensive test suite with React Testing Library
- **Type Safety**: Full TypeScript coverage with strict mode

## 👨‍💻 Author

**Arjun Verano**

- GitHub: [@arjunverano95](https://github.com/arjunverano95)
- Project: [Little Lemon Restaurant](https://github.com/arjunverano95/little-lemon)

## 📄 License

This project is part of the Meta Front-End Developer Professional Certificate program.

---

<p align="center">
  Made with ❤️ for the Little Lemon restaurant
</p>
