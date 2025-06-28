# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development
- `npm run dev` - Start development server with Vite
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks

### Code Quality
- ESLint is configured with TypeScript, React hooks, and React refresh plugins
- Prettier is available for code formatting (version 3.5.3)
- Run `npm run lint` before commits to ensure code quality

## Architecture Overview

This is a React TypeScript portfolio website built with Vite, using a component-based architecture:

### Tech Stack
- **Build Tool**: Vite with React plugin
- **Framework**: React 18 with TypeScript
- **Styling**: TailwindCSS with custom theme and animations
- **Animations**: Framer Motion for smooth animations and transitions
- **Icons**: Lucide React for consistent iconography
- **Utilities**: react-intersection-observer for scroll-based animations

### Project Structure
- `src/App.tsx` - Main app component with navigation structure
- `src/pages/HomePage.tsx` - Home page layout (currently unused, App.tsx serves as main page)
- `src/components/` - Reusable UI components organized by section:
  - `Hero.tsx` - Landing section with intro
  - `Projects.tsx` - Portfolio projects showcase
  - `Experience.tsx` - Work experience timeline
  - `Skills.tsx` - Technical skills display
  - `Contact.tsx` - Contact form and information
  - `Navbar.tsx` - Navigation header
  - `Footer.tsx` - Site footer
- `src/assets/` - Project images and static assets

### Styling System
The project uses a custom TailwindCSS configuration with:
- Custom color palette including neon green (`#B4FE3B`) and dark theme colors
- Custom animations: gradient, float, fadeIn
- Space Grotesk font family
- Grid pattern background utilities

### Component Patterns
- All components use TypeScript with React.FC
- Framer Motion animations are extensively used for page transitions and scroll effects
- Components follow a consistent pattern of motion.div wrappers for animations
- Project data is defined as interfaces with typed objects

### Assets Management
- Project images are imported directly in components
- Assets are stored in `src/assets/` directory
- Image optimization is handled by Vite's asset pipeline

## Development Notes
- The project excludes 'lucide-react' from Vite's dependency optimization
- ESLint ignores the 'dist' directory
- The app uses React StrictMode for development
- All animations use consistent timing and easing patterns