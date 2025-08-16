# ENEL Lumiè Clima - Project Documentation

## 📋 Overview

**ENEL Lumiè Clima** is a sophisticated React-based web application designed for ENEL's climate control configurator system. The application provides a comprehensive, step-by-step interface for configuring air conditioning installations with dynamic pricing calculations, city selection, and advanced state management.

## 📚 Documentation Index

### **🏗️ Architecture & Setup**
- [Development Guide](./development-guide.md) - Getting started with development
- [Architecture Overview](./architecture/README.md) - Technical architecture details
- [State Management](./architecture/state-management.md) - Zustand store patterns

### **🧩 Components & UI**
- [Component Library](./components/README.md) - Component documentation hub
- [Design System](./architecture/design-system.md) - ENEL design patterns
- [Font System](./font-refactor.md) - Typography and CSS classes

### **🔧 Development Tools**
- [Development Utilities](./development-utilities.md) - Scripts and automation
- [Implementation Guides](./implementation/) - Specific feature implementations
- [AI Guidelines](./ai-guidelines/README.md) - Development standards

### **📋 Status & Instructions**
- [Application Status](./APPLICATION_STATUS.md) - Current development state
- [Product Instructions](./instructions/products/PRODUCTS.md) - Product configuration
- [Price Instructions](./instructions/prices/PRICES.md) - Pricing system

## 🏗️ Architecture

### **Technology Stack**
- **Frontend Framework**: React 19.1.0 with Vite 6.3.5
- **State Management**: Zustand 5.0.7 with slice-based architecture
- **Styling**: Tailwind CSS 4.1.7 with custom ENEL design system
- **Typography**: Roobert ENEL font family (Regular, Light, Bold, Black variants)
- **Build Tool**: Vite with ESLint configuration and HMR
- **Package Manager**: npm

### **Core Architecture Patterns**
- **Component-Driven Design**: Modular, reusable components with pure UI separation
- **JSON-Driven Configuration**: Pages and steps configured via JSON files
- **Dynamic Component Registry**: Runtime component resolution system
- **Conditional Rendering**: Smart component visibility based on application state
- **Stateful Wrappers**: Pure UI components wrapped with state logic
- **Slice-Based State**: Domain-separated state management for scalability
- **Figma Integration**: Component generation from design files

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Pure UI components
│   │   ├── AsyncSelect.jsx       # Enhanced async dropdown
│   │   ├── RoomBanner.jsx        # Room size info banner
│   │   ├── InfoBanner.jsx        # Information alerts
│   │   ├── TextInput.jsx         # Form input component
│   │   ├── CostSummary.jsx       # Price calculation display
│   │   └── *.jsx                 # Other UI components
│   ├── layout/          # Layout components
│   ├── icons/           # SVG icon components
│   │   ├── RoomIcon.jsx          # Room visualization icon
│   │   ├── InfoIcon.jsx          # Information icon
│   │   └── AirConditioningIcons.jsx # AC unit icons
│   ├── demo/            # Component demonstrations
│   │   └── RoomBannerDemo.jsx    # Component showcase
│   ├── Stateful*.jsx   # State-connected wrappers
│   ├── ComponentRegistry.jsx     # Component mapping registry
│   └── PageRenderer.jsx          # Dynamic component renderer
├── config/              # JSON configuration files
│   ├── pages.json       # Page definitions and component configurations
│   ├── steps.json       # Step progression configuration
│   └── infoIconRegistry.jsx      # InfoIcon content management
├── store/               # Zustand store configuration
│   ├── useAppStore.js            # Main store with slice integration
│   └── slices/
│       └── citySlice.js          # City-related state management
├── assets/              # Static assets (fonts, images, icons)
│   ├── fonts/                    # Roobert ENEL font files
│   ├── icons/                    # SVG icon assets
│   └── images/                   # Application images
└── utils/               # Utility functions
```

## 🚀 Key Features

### **1. Multi-Step Configuration Wizard**
- **Step 1**: Store information and city selection (33,850+ Italian cities)
- **Step 2**: Air conditioning configuration with pricing
- **Step 3**: Service configuration (removal, cleaning)
- **Step 4**: Final selection and cost summary

### **2. Advanced Component System**
- **Dynamic Component Registry** - Runtime component resolution
- **JSON-Driven Configuration** - Declarative page definitions
- **Conditional Rendering** - State-based component visibility
- **Figma Integration** - Generate components from design files

### **3. Enhanced State Management**
- **Slice-Based Architecture** - Domain-separated state organization
- **City State Slice** - Dedicated city selection functionality
- **Async Data Handling** - Efficient loading and caching
- **Form State Persistence** - Data retained across navigation

### **4. Professional UI Components**
- **AsyncSelect** - Advanced dropdown with search and loading states
- **RoomBanner** - Figma-designed room size display
- **InfoBanner** - Multi-variant information alerts
- **AirConditioningConfigurator** - Dynamic AC unit configuration
- **CostSummary** - Real-time price calculation
- Conditional rendering based on state conditions
- Left panel and main content areas independently configurable

### **3. State Management**
- Centralized Zustand store (`useAppStore`)
- Form data persistence across steps
- Conditional component visibility
- Step navigation with validation

### **4. ENEL Design System**
- Roobert ENEL typography (Regular, Light, Bold)
- Custom color palette with primary blue (#002466)
- Consistent spacing and layout patterns
- Responsive design principles

## 📚 Documentation Structure

- **[Architecture](./architecture/)** - Technical architecture and design patterns
- **[Components](./components/)** - Individual component documentation
- **[AI Guidelines](./ai-guidelines/)** - Guidelines for AI-assisted development

## 🔧 Development

### **Prerequisites**
- Node.js (see `.nvmrc` for version)
- npm package manager

### **Getting Started**
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Lint code
npm run lint
```

### **Development Server**
- Local development: `http://localhost:5173`
- Hot module replacement (HMR) enabled
- ESLint integration for code quality

## 🎨 Design System

### **Typography**
- **Primary Font**: Roobert ENEL (Regular, Light, Bold)
- **Font Sizes**: Consistent text-sm, text-base, text-lg hierarchy
- **Line Heights**: Optimized for readability

### **Color Palette**
- **Primary Blue**: #002466 (ENEL brand color)
- **White**: Text and UI elements on primary background
- **Grays**: Various shades for borders and secondary elements

### **Component Sizing**
- **Input Height**: Consistent h-10 (40px) for all form inputs
- **Spacing**: Tailwind spacing scale (4px increments)
- **Layout**: CSS Grid and Flexbox for responsive layouts

## 📦 Dependencies

### **Core Dependencies**
- `react` & `react-dom`: UI framework
- `zustand`: State management
- `@tailwindcss/vite`: Styling system
- `classnames`: Conditional CSS class utility

### **Development Dependencies**
- `vite`: Build tool and dev server
- `eslint`: Code linting and quality
- `@vitejs/plugin-react`: React support for Vite
- `autoprefixer` & `postcss`: CSS processing

## 🔄 Build Process

- **Development**: Vite dev server with HMR
- **Production**: Optimized bundle with code splitting
- **Assets**: Font and image optimization
- **CSS**: Tailwind compilation with purging

## 📋 Configuration Files

- **`package.json`**: Project dependencies and scripts
- **`vite.config.js`**: Build tool configuration
- **`tailwind.config.js`**: Styling system configuration
- **`eslint.config.js`**: Code quality rules
- **`src/config/pages.json`**: Page and component definitions
- **`src/config/steps.json`**: Step progression configuration

---

*Last updated: August 4, 2025*
