# ENEL Lumiè Clima - Project Documentation

## 📋 Overview

**ENEL Lumiè Clima** is a React-based web application designed for ENEL's climate control configurator system. The application provides a step-by-step interface for configuring air conditioning installations with dynamic pricing calculations.

## 🏗️ Architecture

### **Technology Stack**
- **Frontend Framework**: React 19.1.0 with Vite 6.3.5
- **State Management**: Zustand 5.0.7 (lightweight state management)
- **Styling**: Tailwind CSS 4.1.7 with custom ENEL design system
- **Typography**: Roobert ENEL font family (Regular, Light, Bold variants)
- **Build Tool**: Vite with ESLint configuration
- **Package Manager**: npm

### **Core Architecture Patterns**
- **Component-Driven Design**: Modular, reusable components
- **JSON-Driven Configuration**: Pages and steps configured via JSON files
- **Dynamic Component Registry**: Runtime component resolution system
- **Conditional Rendering**: Smart component visibility based on state
- **Stateful Wrappers**: Pure UI components wrapped with state logic

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Pure UI components
│   ├── layout/          # Layout components
│   ├── icons/           # SVG icon components
│   └── Stateful*.jsx   # State-connected wrappers
├── config/              # JSON configuration files
│   ├── pages.json       # Page definitions and component configurations
│   └── steps.json       # Step progression configuration
├── store/               # Zustand store configuration
├── assets/              # Static assets (fonts, images, icons)
└── utils/               # Utility functions
```

## 🚀 Key Features

### **1. Multi-Step Wizard Interface**
- **Step 1**: Store and consultant information collection
- **Step 2**: Air conditioning configuration with pricing
- **Step 3**: Final selection and cost summary

### **2. Dynamic Component System**
- Components defined in `pages.json`
- Runtime resolution via `ComponentRegistry`
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
