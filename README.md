# ⚛️ Sprint 5 – Refactor Landing Page with Atomic Design

This project is a **refactor** of the [sprint 1](https://github.com/edison-r/S1-Web-Evolution-Project) landing page, built from scratch using **React + TypeScript** and following the **Atomic Design methodology**. 

## Objectives

- Technical migration from vanilla HTML/CSS into a fully modular React app
- Practice **Atomic Design**: atoms, molecules, organisms, templates
- Learn to manage UI state and interactivity with **React hooks**
- Apply **React best practices**: separation of concerns, scoped CSS, and component hierarchy
- Structure and scale the CSS for each component

## Technologies

- React + TypeScript
- React Router
- CSS3 (split per component)
- Vite (dev server and build tool)

## Structure

### Header

- Desktop and Mobile support
- Burger menu with open/close logic
- Scroll lock when menu is open
- Navigation links close the menu when clicked

### Main Section

- **Features (Articles)**: Tab navigation with dynamic content
- **Ads (Extensions)**: Card layout with download CTAs
- **FAQ**: Accordion component for questions
- **Join**: Input field with validation (email)

Each section follows Atomic Design:

- Atoms: buttons, inputs, icons
- Molecules: tab navigation, FAQ items, resume blocks
- Organisms: full sections (FeaturesSection, FaqSection, etc.)

### Footer

- Nothing special here, just a footer with some info.

## Project Structure

```
📁 src
├── assets/              ← images and icons
├── components/
│   ├── atoms/           ← smallest UI elements (Button, Input, Icon, etc.)
│   ├── molecules/       ← groups of atoms (TabNav, FAQ Item, Resume Block...)
│   ├── organisms/       ← full sections (Header, Main Sections)
│   ├── templates/       ← layout structure (optional for future)
│   └── pages/App.tsx    ← app entry point
├── data/                ← static data (features, FAQ...)
├── types/               ← TypeScript interfaces
├── styles/index.css     ← general CSS and variables
└── main.tsx             ← React + Vite entry file
```

## Features

- **Burger Menu**

  - Opens/closes smoothly
  - Adds/removes `no-scroll` class on `<body>`
  - Controlled by state via `useState` and `useEffect`

- **Features Section (Tabs)**

  - Uses `useState` to switch content
  - Each article is loaded dynamically from data

- **FAQ Section (Accordion)**

  - Only one item can be open at a time
  - Smooth transitions with max-height CSS

- **Email Validation**

  - On blur, validates input
  - Shows visual feedback with CSS classes

## My Dev Journal

This was a full React refactor from the first sprint, and my first time applying **Atomic Design** consistently. 

It was also a great practice to handle real UI decisions: toggles, accordion states, email validation, and layout decisions.

The fact that this is the exact same project as Sprint 1, but rebuilt with React, is a clear reminder of how far I've come. React doesn't feel extremely difficult to me, so I'm excited to keep learning aand building more with it! 🚀


