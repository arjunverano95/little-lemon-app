# Little Lemon Restaurant

A modern, responsive restaurant website for Little Lemon, a family-owned Mediterranean restaurant. This project is the capstone project for Meta's Front-End Developer Professional Certificate on Coursera.

## 🍋 About

Little Lemon is a restaurant website featuring a beautiful, modern design with smooth scrolling navigation, online reservations, customer testimonials, and contact information. The website showcases the restaurant's specials, story, and provides an easy way for customers to book a table.

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
├── assets/          # Images, logos, and other static assets
├── components/      # Reusable React components
│   ├── BookingForm/     # Reservation form component
│   ├── CallToAction/    # Hero section with CTA
│   ├── Chicago/         # About section
│   ├── Contact/         # Contact information section
│   ├── CustomersSay/    # Testimonials section
│   ├── Footer/         # Footer component
│   ├── Header/         # Header with navigation
│   ├── ScrollToTop/    # Scroll to top button
│   └── Specials/        # Weekly specials section
├── pages/           # Page components
│   ├── Home/            # Home page
│   ├── Bookingpage/     # Booking page
│   └── ConfirmationPage/# Booking confirmation page
├── styles/          # Theme and styling configuration
│   └── chakra-theme.ts  # Chakra UI theme customization
├── utils/           # Utility functions
├── routes.tsx       # Route configuration
└── main.tsx         # Application entry point
```

## 🎨 Design Features

- **Custom Theme**: Tailored color palette matching the Little Lemon brand
- **Smooth Animations**: Hover effects and transitions throughout
- **Accessibility**: Semantic HTML and ARIA labels for screen readers
- **Performance**: Optimized images and code splitting

## 🧪 Testing

The project includes unit tests for components. Run tests with:

```bash
npm test
```

## 📝 Development Notes

- The project uses React 19 with TypeScript for type safety
- Chakra UI provides a comprehensive component library with theming support
- Smooth scrolling is implemented for anchor links with offset for fixed header
- Form validation is handled by Formik and Yup
- The build process uses Vite for fast development and optimized production builds

## 👨‍💻 Developed By

**Arjun Verano**

- GitHub: [@arjunverano95](https://github.com/arjunverano95)

## 📄 License

This project is part of the Meta Front-End Developer Professional Certificate program.

---

<p align="center">
  Made with ❤️ for the Little Lemon restaurant
</p>
