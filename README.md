# Header Module

This branch contains the complete implementation of the `Header` section of the Bookmark landing page, refactored using **React + TypeScript** and applying **Atomic Design** principles.

## Features

- Responsive Header with logo, navigation menu and login button
- Mobile Menu with toggle logic (open/close)
- `no-scroll` class is added to `<body>` when menu is open
- Clean component structure: Atoms, Molecules, Organisms
- CSS modularized per component for better maintainability

## Notes

- Toggle behavior is handled via `useState` and `useEffect`
- Clicking on any nav link automatically closes the mobile menu
- All styles were refactored to vanilla CSS (Tailwind removed)

## Structure Overview
In this section i'll show the files structure for the header only. You can see all structure in the README.md file at the `main` branch.
```
📁 src/components
├── atoms/
│ └── ButtonAtom.tsx
│ └── BannerDecorationAtom.tsx
├── molecules/
│ └── MobileMenuToggleMolecule.tsx
├── organisms/
│ └── HeaderOrganism.tsx
│ └── MobileMenuOrganism.tsx
│ └── HeroSectionOrganism.tsx
├── templates/
│ └── NavBarTemplate.tsx
```

## Status

Completed and merged into `develop`
