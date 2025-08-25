# ENEL Lumiè Verticale Clima

> **Modern React Application for Air Conditioning Configuration and Sales**

A sophisticated, component-driven React application built with Vite, Tailwind CSS, and Zustand for configuring and pricing ENEL air conditioning systems. Features dynamic component rendering, JSON-driven configuration, and a comprehensive design system.

---

## 🚀 **Quick Start**

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📚 **Documentation**

All documentation has been unified in the `docs/` folder:

- **[📖 Complete Documentation](./docs/README.md)** - Main documentation hub
- **[🏗️ Architecture Guide](./docs/architecture/README.md)** - Technical overview  
- **[🧩 Component Library](./docs/components/README.md)** - UI components
- **[🔧 Development Utilities](./docs/development-utilities.md)** - Scripts and tools
- **[🎨 Font System](./docs/font-refactor.md)** - Typography guide

## 🏗️ **Technology Stack**

### **Core Framework**
- **React 19.1.0** - Latest React with enhanced performance
- **Vite 6.3.5** - Lightning-fast build tool and dev server
- **JavaScript (ES2022+)** - Modern JavaScript features

### **State Management**
- **Zustand 5.0.7** - Lightweight, flexible state management
- **Slice-based Architecture** - Domain-separated state organization
- **Reactive State Updates** - Automatic UI synchronization

### **Styling & Design**
- **Tailwind CSS 4.1.7** - Utility-first CSS framework with custom ENEL design system
- **Roobert ENEL Font Family** - Custom typography (Regular, Light, Bold, Black variants)
- **Custom Color Palette** - ENEL brand colors and design tokens
- **Responsive Design** - Mobile-first, adaptive layouts

### **Development Tools**
- **ESLint 9.25.0** - Code quality and consistency
- **PostCSS & Autoprefixer** - Enhanced CSS processing
- **Redux DevTools Integration** - State debugging and inspection

---

## 🎯 **Core Features**

### **🔧 Dynamic Component System**
- **Component Registry** - Runtime component resolution from string identifiers
- **JSON-Driven Configuration** - Pages and layouts defined in JSON files
- **Conditional Rendering** - Smart component visibility based on application state
- **Stateful Wrappers** - Pure UI components enhanced with state management

### **📊 Multi-Step Configuration Wizard**
- **Store Information** - Point of sale and consultant data collection
- **Product Selection** - Air conditioning unit type and quantity selection
- **Service Configuration** - Installation, removal, and maintenance services
- **Dynamic Pricing** - Real-time cost calculation and summary

### **🎨 ENEL Design System**
- **Brand-Compliant Styling** - Consistent visual language
- **Custom Icons** - SVG icon library with air conditioning components
- **Typography System** - Roobert ENEL font implementation
- **Color Standards** - Primary, secondary, and semantic color palettes

### **⚡ Advanced State Management**
- **Zustand Store** - Centralized application state
- **City Selection** - Async loading of 33,850+ Italian cities
- **Form Persistence** - Data retained across navigation
- **Slice Architecture** - Domain-separated state organization

---

## 📁 **Project Structure**

```
src/
├── components/
│   ├── ui/                    # Pure UI components
│   │   ├── AsyncSelect.jsx         # Enhanced async dropdown
│   │   ├── RoomBanner.jsx          # Room size info banner
│   │   ├── InfoBanner.jsx          # Information alerts
│   │   ├── TextInput.jsx           # Form input component
│   │   ├── CustomSelect.jsx        # Dropdown component
│   │   ├── CostSummary.jsx         # Price display
│   │   └── *.jsx                   # Other UI components
│   ├── icons/                 # SVG icon components
│   │   ├── RoomIcon.jsx            # Room visualization icon
│   │   ├── InfoIcon.jsx            # Information icon
│   │   └── AirConditioningIcons.jsx # AC unit icons
│   ├── layout/                # Layout components
│   │   └── PageLayout.jsx          # Main page structure
│   ├── demo/                  # Demo/showcase components
│   │   └── RoomBannerDemo.jsx      # Component demonstrations
│   ├── Stateful*.jsx          # State-connected wrappers
│   ├── ComponentRegistry.jsx  # Component mapping registry
│   └── PageRenderer.jsx       # Dynamic component renderer
├── store/
│   ├── useAppStore.js         # Main Zustand store
│   └── slices/
│       └── citySlice.js       # City-related state management
├── config/
│   ├── pages.json             # Page and component configurations
│   ├── steps.json             # Step progression definitions
│   └── infoIconRegistry.jsx   # InfoIcon content management
├── assets/
│   ├── fonts/                 # Roobert ENEL font files
│   ├── icons/                 # SVG icon assets
│   └── images/                # Application images
└── utils/                     # Utility functions
```

---

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js 18+ and npm
- Modern browser with ES2022+ support

### **Installation**
```bash
# Clone the repository
git clone <repository-url>
cd enel-lumie-vericale-clima

# Install dependencies
npm install

# Start development server
npm run dev
```

### **Available Scripts**
```bash
npm run dev      # Start development server (localhost:5173)
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint code analysis
```

---

## 🏗️ **Architecture Overview**

### **Component-Driven Architecture**
The application follows a pure component architecture with clear separation of concerns:

- **Pure UI Components** (`/ui/`) - Presentation-only, no state management
- **Stateful Wrappers** (`Stateful*.jsx`) - Connect UI components to application state
- **Dynamic Registry** (`ComponentRegistry.jsx`) - Maps component names to implementations
- **JSON Configuration** (`pages.json`) - Declarative page and component definitions

### **State Management Pattern**
```javascript
// Zustand store with slice architecture
const useAppStore = create(
  devtools((set, get) => ({
    // Navigation state
    currentStep: 1,
    currentPageId: 'client-selection',
    
    // Form data (persistent)
    formData: { /* user inputs */ },
    
    // Actions
    setFormValue: (property, value) => { /* update state */ },
    nextStep: () => { /* navigate forward */ },
    
    // Domain-specific slices
    ...createCitySlice(set, get),
  }))
);
```

### **Conditional Rendering System**
Components can be conditionally rendered based on application state:

```json
{
  "type": "CostSummary",
  "renderConditions": {
    "hasQuantities": "airconditioningQuantities"
  }
}
```

### **Slice-Based State Architecture**
Domain-specific state is organized into dedicated slices:

```javascript
// citySlice.js - City selection functionality
export const createCitySlice = (set, get) => ({
  cityState: { cities: [], loading: false, error: null },
  loadCities: async () => { /* async city loading */ },
  setCityState: (updates) => { /* state updates */ }
});
```

---

## 📋 **Component System**

### **Core Components**

| Component | Purpose | Key Features |
|-----------|---------|--------------|
| `AsyncSelect` | City selection dropdown | Search, loading states, 33K+ cities |
| `RoomBanner` | Room size display | Configurable size, variant styling |
| `InfoBanner` | Information alerts | Multiple variants, rich content |
| `AirConditioningConfigurator` | AC unit configuration | Dynamic forms, conditional rendering |
| `CostSummary` | Price calculation | Real-time updates, formatting |
| `SplitterQtyConfigurator` | Quantity selection | Min/max validation, total limits |

### **Registry System**
All components are registered for dynamic instantiation:

```javascript
const componentRegistry = {
  AsyncSelect: (props) => <StatefulAsyncSelect {...props} />,
  RoomBanner: (props) => <RoomBanner {...props} />,
  InfoBanner: (props) => <InfoBanner {...props} />,
  // ... more components
};
```

### **Configuration Example**
```json
{
  "type": "AsyncSelect",
  "props": {
    "placeholder": "Città",
    "stateProperty": "storeCity",
    "loadDataAction": "loadCities",
    "stateSlice": "cityState",
    "searchable": true
  }
}
```

---

## 🎨 **Design System**

### **Color Palette**
```css
/* Primary Colors */
--enel-primary: #002466;
--enel-secondary: #5738ff;
--enel-accent: #667790;

/* Semantic Colors */
--info: #1f6cf9;
--warning: #D3135A;
--success: #10b981;
--error: #ef4444;

/* Background Shades */
--bg-info: #f4f8ff;
--bg-warning: #fff8f0;
--bg-success: #f0f9f4;
--bg-error: #fef2f2;
```

### **Typography**
```css
/* Roobert ENEL Font Family */
font-family: 'Roobert', sans-serif;

/* Font Weights */
.font-light { font-family: 'Roobert_Light'; }
.font-regular { font-family: 'Roobert'; }
.font-bold { font-family: 'Roobert_Bold'; }
.font-black { font-family: 'Roobert_Black'; }
```

### **Component Variants**
Components support multiple visual variants:
- `info` - Blue theme for information
- `warning` - Red theme for warnings
- `success` - Green theme for confirmations
- `error` - Red theme for errors

---

## 📊 **State Management**

### **Store Structure**
```javascript
{
  // Navigation
  currentStep: 1,
  currentPageId: 'client-selection',
  totalSteps: 4,
  
  // Form Data
  formData: {
    storeLocation: '',
    consultantName: '',
    storeCity: null,
    airconditioningQuantities: {},
    airConditioningConfigs: {}
  },
  
  // Domain Slices
  cityState: {
    cities: [],
    loading: false,
    error: null
  }
}
```

### **Key Actions**
- `setFormValue(property, value)` - Update form data
- `nextStep()` / `prevStep()` - Navigate between steps
- `loadCities()` - Async city data loading
- `shouldRenderComponent(conditions)` - Conditional rendering logic

---

## 🔧 **Development Guidelines**

### **Adding New Components**
1. Create pure UI component in `/ui/`
2. Create stateful wrapper if state management needed
3. Register in `ComponentRegistry.jsx`
4. Configure in `pages.json`

### **Extending State**
1. Add properties to store or create new slice
2. Update stateful wrappers to use new state
3. Add conditional rendering logic if needed

### **Design System Compliance**
- Use ENEL color palette and typography
- Follow component variant patterns
- Maintain accessibility standards
- Test responsive behavior

---

## 📚 **Documentation**

### **Available Documentation**
- **[Architecture Overview](/docs/architecture/README.md)** - System design and patterns
- **[State Management Guide](/docs/architecture/state-management.md)** - Zustand store documentation
- **[Component API Reference](/docs/components/api-reference.md)** - Component props and usage
- **[Design System Guide](/docs/architecture/design-system.md)** - Styling standards
- **[AI Development Guidelines](/docs/ai-guidelines/README.md)** - Development best practices
- **[InfoIcon Registry System](/docs/components/InfoIcon-Registry-System.md)** - Content management
- **[State Slice Architecture](/docs/architecture/State-Slice-Architecture.md)** - Domain separation patterns

### **Key Documentation Highlights**
- **Component Registry Pattern** - Dynamic component resolution
- **Conditional Rendering System** - State-based UI logic
- **Slice Architecture** - Domain-separated state management
- **JSON-Driven Configuration** - Declarative UI definitions

---

## 🌟 **Recent Enhancements**

### **v2024.8.5 - Latest Updates**
- ✅ **RoomBanner Component** - Figma-designed room size display banner
- ✅ **Enhanced AsyncSelect** - Improved loading states with custom spinners
- ✅ **City Slice Architecture** - Dedicated state slice for 33K+ Italian cities
- ✅ **InfoIcon Registry System** - Centralized content management
- ✅ **Component Demo System** - Showcase components with usage examples
- ✅ **Improved Documentation** - Comprehensive architecture and API guides

### **Key Features Added**
- **Figma Integration Workflow** - Generate React components from Figma designs
- **Professional Loading States** - Enhanced user experience with visual feedback
- **State Slice Pattern** - Scalable state management architecture
- **Component Demonstration** - Live examples and usage patterns

---

## 🚀 **Performance & Optimization**

### **Build Optimization**
- **Vite Tree Shaking** - Unused code elimination
- **Asset Optimization** - Font and image compression
- **Code Splitting** - Dynamic imports for efficiency

### **Runtime Performance**
- **Zustand Selective Subscriptions** - Minimal re-renders
- **Conditional Rendering** - Reduced DOM complexity
- **Lazy Asset Loading** - On-demand resource loading

### **Development Experience**
- **Hot Module Replacement** - Instant development updates
- **Redux DevTools** - State debugging and inspection
- **ESLint Integration** - Code quality enforcement

---

## 📄 **License**

This project is proprietary software developed for ENEL. All rights reserved.

---

## 👥 **Contributing**

This is a proprietary ENEL project. Development follows established patterns and guidelines documented in `/docs/ai-guidelines/README.md`.

### **Development Workflow**
1. Follow component-driven architecture patterns
2. Maintain design system compliance
3. Update documentation for new features
4. Test across different screen sizes and browsers

---

*Built with ❤️ using React, Vite, and modern web technologies for ENEL Lumiè Verticale Clima*



