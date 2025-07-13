# AY Group Corporate Website

## Overview

This is a full-stack React application for AY Group, a corporate services company. The application features a modern, futuristic design with a dark theme and animated elements. It includes sections for services, about information, and contact functionality with a backend API for storing contact messages.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Design**: RESTful API with JSON responses
- **Validation**: Zod schemas for request validation
- **Session Management**: Built-in session handling (setup for future auth)

### Development Setup
- **Runtime**: Node.js with ESM modules
- **Development Server**: Vite dev server with HMR
- **Production Build**: Vite build + esbuild for server bundling
- **Database Migrations**: Drizzle Kit for schema management

## Key Components

### Frontend Components
- **Navigation**: Fixed header with smooth scrolling navigation
- **Hero Section**: Animated landing section with company logo and branding
- **Services Section**: Interactive service cards with hover effects
- **About Section**: Company information with animated reveals
- **Contact Section**: Contact form with validation and submission
- **Footer**: Company branding and credits
- **Particle System**: Animated background particles for visual appeal
- **Globe Component**: Interactive globe visualization for location display

### Backend Components
- **Express Server**: Main application server with middleware
- **Route Handlers**: API endpoints for contact form and data retrieval
- **Storage Layer**: Abstracted storage interface (currently in-memory, ready for database)
- **Database Schema**: Drizzle ORM schemas for users and contact messages
- **Validation**: Zod schemas for API request validation

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form in frontend
   - Form data validated using Zod schema
   - POST request sent to `/api/contact` endpoint
   - Backend validates data and stores in database
   - Success/error response sent back to frontend
   - Toast notification displayed to user

2. **Static Content**:
   - Company information and services rendered from static data
   - Images served from attached assets directory
   - Animated elements triggered by intersection observers

3. **Development Flow**:
   - Vite dev server handles frontend with HMR
   - Express server handles API requests
   - Database changes managed through Drizzle migrations

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Router (wouter)
- **UI/UX**: Radix UI components, Tailwind CSS, Lucide React icons
- **Forms**: React Hook Form, Hookform Resolvers
- **Data Fetching**: TanStack React Query
- **Animations**: CSS animations and transitions
- **Utilities**: clsx, tailwind-merge, date-fns

### Backend Dependencies
- **Server**: Express.js
- **Database**: Drizzle ORM, @neondatabase/serverless
- **Validation**: Zod, drizzle-zod
- **Development**: tsx for TypeScript execution
- **Build**: esbuild for production bundling

### Development Dependencies
- **Build Tools**: Vite, TypeScript, PostCSS
- **Database Tools**: Drizzle Kit for migrations
- **Replit Integration**: Vite plugins for Replit environment

## Deployment Strategy

### Development Environment
- **Local Development**: `npm run dev` starts both frontend and backend
- **Database**: Uses DATABASE_URL environment variable for PostgreSQL connection
- **Hot Reload**: Vite HMR for frontend, tsx for backend restart

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Database**: Drizzle migrations applied via `npm run db:push`
- **Deployment**: Single command `npm start` runs production server

### Environment Configuration
- **Database**: PostgreSQL connection via DATABASE_URL
- **Build**: NODE_ENV determines development/production behavior
- **Assets**: Static assets served from attached_assets directory
- **Replit**: Special configuration for Replit hosting environment

### Key Features
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Dark Theme**: Futuristic design with gold/purple/aqua color scheme
- **Animations**: Smooth transitions and particle effects
- **Form Validation**: Client and server-side validation
- **Type Safety**: Full TypeScript coverage
- **Performance**: Optimized builds and code splitting