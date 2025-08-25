# Copilot Instructions for ENEL Lumiè Verticale Clima

## Quick Start Architecture Overview

**ENEL Lumiè Verticale Clima** is a React-based air conditioning configurator with a unique JSON-driven component system and slice-based state management.

## Critical Architecture Patterns

### 1. JSON-Driven Component System
Components are defined in `src/config/pages.json` and rendered dynamically:
```javascript
// pages.json defines components and their props
{
  "type": "TextInput",
  "props": {
    "stateProperty": "customerName",
    "placeholder": "Nome cliente"
  }
}
// Rendered via ComponentRegistry.jsx → PageRenderer.jsx → DynamicComponent.jsx
```

### 2. Stateful Wrapper Pattern (CRITICAL)
All form components follow this pattern:
```javascript
// 1. Pure UI component (src/components/ui/)
const TextInput = ({ value, onChange, ...props }) => <input {...props} />

// 2. Stateful wrapper (src/components/clima/) 
const StatefulInput = ({ stateProperty, ...props }) => {
  const { formData, setFormValue } = useAppStore();
  return <TextInput 
    value={formData[stateProperty]} 
    onChange={(v) => setFormValue(stateProperty, v)} 
    {...props} 
  />;
};

// 3. Registry mapping (src/components/simulator/ComponentRegistry.jsx)
const componentRegistry = {
  TextInput: (props) => <StatefulInput inputType="TextInput" {...props} />
};
```

### 3. Slice-Based State Management
Zustand store composed of domain slices:
```javascript
// src/store/useAppStore.js
const store = (set, get) => ({
  ...createFormDataSlice(set, get),    // Form state
  ...createNavigationSlice(set, get),  // Page navigation
  ...createCitySlice(set, get),        // Async city data
  ...createPricingSlice(set, get),     // Price calculations
  // Each slice manages its domain independently
});
```

## Essential Development Workflows

### Quick Start Commands
```bash
nvm use                    # Use Node.js v20.19.0 (required)
npm install               # Install dependencies
npm run dev               # Start dev server on :5173
```

### Development URL Parameters
```bash
# Demo mode for isolated component testing
http://localhost:5173/?demo=componentName

# Preload test data for forms
http://localhost:5173/?test=true
```

### Component Creation Workflow
1. Create pure UI component in `src/components/ui/`
2. Create stateful wrapper in `src/components/clima/`
3. Register in `src/components/simulator/ComponentRegistry.jsx`
4. Configure usage in `src/config/pages.json`

## Key Files & Directories

### Critical Configuration
- `src/config/pages.json` - Page definitions and component configurations
- `src/config/steps.json` - Navigation flow
- `src/components/simulator/ComponentRegistry.jsx` - Component name mappings

### State Management
- `src/store/useAppStore.js` - Main store composition
- `src/store/slices/` - Domain-specific state slices

### Component Architecture
- `src/components/ui/` - Pure UI components (no state)
- `src/components/clima/` - Stateful wrappers
- `src/components/simulator/` - Core rendering engine

## Design System Essentials

### Typography (Roobert ENEL Font)
```jsx
// Use Tailwind font classes for ENEL branding
className="font-enel"          // Regular - standard text
className="font-enel-light"    // Light - subtle text
className="font-enel-bold"     // Bold - headings, emphasis
```

### Standard Patterns
```jsx
// Input height standard: 40px
className="h-10 px-3 pt-3 pb-1"

// Icon sizes: 24px standard, 16px small
className="w-6 h-6"

// ENEL brand colors - use theme colors, not arbitrary values
className="bg-primary text-white"       // Primary blue
className="text-purple-600"             // Purple accent
className="text-gray-600"               // Gray secondary
// Add new colors to tailwind.config.js theme instead of using arbitrary values
```

## Critical Anti-Patterns

### ❌ Never Do
- Use local React state for form data (`useState` for forms)
- Import components directly in PageRenderer
- Hardcode component rendering (use ComponentRegistry)
- Skip component registration step

### ✅ Always Do
- Use `stateProperty` pattern for form bindings
- Register all components in ComponentRegistry.jsx
- Keep UI components pure (props in, events out)
- Configure components through pages.json

## Documentation
- Complete docs in `docs/` folder
- Design system: `docs/architecture/design-system.md`
- Component patterns: `docs/components/README.md`

---

*This architecture enables dynamic, JSON-driven page composition with consistent state management across a complex multi-step wizard interface.*