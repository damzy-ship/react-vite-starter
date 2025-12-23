# React + Vite + TypeScript + Tailwind CSS Starter

A production-ready starter template for building modern web applications.

## Features

- **React 18** - Latest React with modern hooks and features
- **Vite 5** - Lightning-fast development with HMR
- **TypeScript** - Full type safety with strict mode
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting with recommended rules
- **Lucide Icons** - Beautiful icon library

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   │   ├── Button.tsx
│   │   └── FeatureCard.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   └── Footer.tsx
├── utils/              # Utility functions
│   └── cn.ts          # Class name utility
├── App.tsx            # Main app component
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Type Check

```bash
npm run typecheck
```

## Customization

### Colors

The template uses a blue color scheme by default. To customize:

1. Edit `tailwind.config.js` to add your color palette
2. Update components to use your new colors

### Components

The template includes example components in `src/components/`:
- `Hero` - Hero section with call-to-action
- `Features` - Feature grid with cards
- `Footer` - Footer with social links

### Utilities

- `cn()` utility in `src/utils/cn.ts` for conditional class names

## Tech Stack Details

- **Build Tool**: Vite 5.4
- **Framework**: React 18.3
- **Language**: TypeScript 5.5
- **Styling**: Tailwind CSS 3.4
- **Icons**: Lucide React

## License

MIT
