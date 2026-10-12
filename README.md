This readme is 99% ai-generated

# Amazon Clone

A front-end e-commerce landing page clone inspired by Amazon, built with Vite and Tailwind CSS.

## Overview

This project recreates the look and feel of Amazon's storefront with a responsive header, search suggestions, product grid, cart interactions, and a checkout flow. It is a frontend-only exercise designed to practice modern JavaScript, DOM manipulation, and styling with utility classes.

## Features

- Amazon-inspired top navigation bar
- Search bar with live product filtering(only thing you can do is add the item searched to the cart)
- Product cards with pricing and add-to-cart actions
- Shopping cart state management in localStorage
- Cart preview and checkout experience (checkout is just a form)
- Responsive styling using Tailwind CSS
- Custom Amazon-like font and color palette

## Tech Stack

- HTML
- JavaScript
- Tailwind CSS v4
- Vite

## Project Structure

```bash
amazon-clone/
├── index.html
├── package.json
├── src/
│   ├── assets/
│   ├── cart/
│   ├── data/
│   ├── header/
│   ├── pages/
│   ├── utils/
│   ├── main.js
│   └── style.css
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Run the app locally

```bash
npm run dev
```

Then open the local Vite URL shown in the terminal in your browser.

### Production build

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Notes

This project is a front-end mockup and does not include a real backend or payment system. Cart data is stored locally in the browser to simulate a shopping experience.

## License

This project is for educational/demo purposes.
