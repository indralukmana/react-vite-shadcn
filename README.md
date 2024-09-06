# React + Vite + Shadcn Template

This template provides a minimal setup to get React working in Vite with HMR, TypeScript, and shadcn/ui components. It's designed to give a quick start for building modern React applications with a beautiful UI out of the box.

## Features

- React 18
- Vite for fast development and building
- TypeScript for type safety
- shadcn/ui components for a sleek UI
- Tailwind CSS for styling
- Dark mode support
- Biome for linting and formatting
- Lefthook for Git hooks

## Getting Started

1. Clone this repository
2. Install dependencies:

   ```shell
   pnpm install
   ```

3. Start the development server:

   ```shell
   pnpm dev
   ```

## Available Scripts

- `pnpm dev`: Start the development server
- `pnpm build`: Build for production
- `pnpm preview`: Preview the production build
- `pnpm fix`: Run Biome to check and fix issues
- `pnpm fix:all`: Run Biome on all files
- `pnpm type-check`: Run TypeScript type checking

## Project Structure

- `src/`: Source files
  - `components/`: React components
  - `lib/`: Utility functions
  - `App.tsx`: Main application component
  - `main.tsx`: Application entry point
- `public/`: Static assets
- `index.html`: HTML entry point

## Configuration Files

- `vite.config.ts`: Vite configuration
- `tailwind.config.js`: Tailwind CSS configuration
- `tsconfig.json`: TypeScript configuration
- `biome.json`: Biome configuration
- `lefthook.yml`: Lefthook configuration

## Customization

This template is set up with a basic structure and some example components. The `App.tsx` file contain basic kitchen sink of components.

## Expanding the Biome configuration

The project uses Biome for linting and formatting. You can expand the configuration in the `biome.json` file. Then expand as needed based on <https://biomejs.dev/>
