# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**ENEL Lumiè Verticale Clima** is a React-based air conditioning configurator featuring a unique JSON-driven component system and slice-based Zustand state management. The application guides users through a multi-step wizard to configure, price, and purchase ENEL air conditioning systems.

## Essential Commands

```bash
# Development
npm run dev      # Start Vite dev server on localhost:5173
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint code analysis

# Special URL Parameters
?test=<scenario>           # Load test data in development
?demo=<componentName>      # Demo mode for isolated component testing
?userId=<id>               # URL params: userId, accountName auto-load into formData
```

## Critical Architecture Patterns

### 1. JSON-Driven Component System

The entire application UI is defined in `src/config/pages.json`. Components are never hardcoded in page files - they're rendered dynamically through the registry system.

**Flow:** `pages.json` → `PageRenderer.jsx` → `DynamicComponent.jsx` → `ComponentRegistry.jsx` → Actual Component

Example from pages.json:
```json
{
  "type": "AutocompleteInput",
  "props": {
    "placeholder": "Città",
    "stateProperty": "storeCity",
    "loadDataAction": "loadCities",
    "stateSlice": "cityState"
  },
  "renderConditions": {
    "equals": {
      "property": "formData.needsRemoval",
      "value": true
    }
  }
}
```

### 2. Stateful Wrapper Pattern (CRITICAL)

All form/interactive components follow a strict three-layer pattern:

**Layer 1 - Pure UI Component** (`src/components/ui/`)
```javascript
const TextInput = ({ value, onChange, placeholder, ...props }) => (
  <input value={value} onChange={onChange} placeholder={placeholder} {...props} />
);
```

**Layer 2 - Stateful Wrapper** (`src/components/clima/`)
```javascript
const StatefulInput = ({ stateProperty, ...props }) => {
  const { formData, setFormValue } = useAppStore();
  return <TextInput
    value={formData[stateProperty] || ''}
    onChange={(e) => setFormValue(stateProperty, e.target.value)}
    {...props}
  />;
};
```

**Layer 3 - Registry Entry** (`src/components/simulator/ComponentRegistry.jsx`)
```javascript
const componentRegistry = {
  TextInput: (props) => <StatefulInput inputType="TextInput" {...props} />
};
```

### 3. Slice-Based State Management

Zustand store composed from domain-specific slices in `src/store/useAppStore.js`:

```javascript
const store = (set, get) => ({
  ...createFormDataSlice(set, get),      // Form state
  ...createNavigationSlice(set, get),    // Page navigation
  ...createCitySlice(set, get),          // Async city data (33K+ cities)
  ...createPricingSlice(set, get),       // Price calculations
  ...createProductsSlice(set, get),      // Product catalog
  ...createReportSlice(set, get),        // Report generation
  ...createValidationSlice(set, get),    // Form validation
  ...createLeadSlice(set, get),          // Lead submission
  ...createRendererSlice(set, get),      // Conditional rendering
  ...createTestingSlice(set, get)        // Test data loading
});
```

Each slice manages its own domain independently. State updates in one slice can trigger side effects through subscriptions (see `createValidationSubscriptions`, `createProductSubscriptions`).

### 4. Conditional Rendering System

Components can be conditionally rendered based on application state using `renderConditions` in pages.json:

```json
{
  "type": "InfoBanner",
  "renderConditions": {
    "equals": { "property": "formData.needsRemoval", "value": true }
  }
}
```

Supported conditions: `equals`, `hasQuantities`, `isDefined`, `atLeastOneOf`

## Key File Locations

### Configuration (JSON-Driven UI)
- `src/config/pages.json` - All page definitions, component configurations, validation rules
- `src/config/steps.json` - Navigation flow definition
- `src/config/infoIconRegistry.jsx` - InfoIcon tooltip content management

### State Management
- `src/store/useAppStore.js` - Main store composition with Redux DevTools
- `src/store/slices/` - Domain-specific state slices:
  - `formDataSlice.js` - Form data, URL param loading
  - `navigationSlice.js` - Step navigation, page transitions
  - `citySlice.js` - Async city loading (33K+ Italian cities)
  - `pricingSlice.js` - Real-time price calculations
  - `productsSlice.js` - Product catalog, filtering
  - `reportSlice.js` - Report generation API calls
  - `validationSlice.js` - Form validation rules
  - `rendererSlice.js` - Conditional rendering logic

### Component Architecture
- `src/components/ui/` - Pure presentation components (no state)
- `src/components/clima/` - Stateful wrappers (connect to store)
- `src/components/simulator/` - Core rendering engine:
  - `ComponentRegistry.jsx` - Component type → implementation mapping
  - `PageRenderer.jsx` - Renders components from pages.json
  - `DynamicComponent.jsx` - Handles conditional rendering
  - `PageLayout.jsx` - Layout wrapper with left/right panels

## Design System (ENEL Branding)

### Typography - Roobert ENEL Font
```jsx
className="font-enel"        // Regular - standard text
className="font-enel-light"  // Light - subtle text
className="font-enel-bold"   // Bold - headings, emphasis
```

### Standard Component Patterns
```jsx
// Input height standard: 40px
className="h-10 px-3 pt-3 pb-1"

// Icon sizes
className="w-6 h-6"      // 24px standard
className="w-4 h-4"      // 16px small

// ENEL brand colors (defined in Tailwind config)
className="bg-primary text-white"    // Primary blue (#002466)
className="text-secondary"           // Secondary purple (#5738ff)
className="text-gray-600"            // Gray accent
```

**Important:** Add new colors to `tailwind.config.js` theme instead of using arbitrary values like `text-[#abc123]`

## Development Workflows

### Adding a New Component

1. **Create pure UI component** in `src/components/ui/NewComponent.jsx`
   ```javascript
   const NewComponent = ({ value, onChange, ...props }) => { /* pure UI */ };
   ```

2. **Create stateful wrapper** in `src/components/clima/StatefulNewComponent.jsx`
   ```javascript
   const StatefulNewComponent = ({ stateProperty, ...props }) => {
     const { formData, setFormValue } = useAppStore();
     return <NewComponent value={formData[stateProperty]} {...props} />;
   };
   ```

3. **Register in ComponentRegistry** `src/components/simulator/ComponentRegistry.jsx`
   ```javascript
   const componentRegistry = {
     NewComponent: (props) => <StatefulNewComponent {...props} />
   };
   ```

4. **Configure in pages.json** `src/config/pages.json`
   ```json
   {
     "type": "NewComponent",
     "props": { "stateProperty": "fieldName" }
   }
   ```

### Adding a New State Slice

1. Create slice file: `src/store/slices/myFeatureSlice.js`
   ```javascript
   export const createMyFeatureSlice = (set, get) => ({
     myFeature: { data: null, loading: false, error: null },
     loadMyFeatureData: async () => { /* async logic */ }
   });
   ```

2. Import and compose in `src/store/useAppStore.js`
   ```javascript
   import { createMyFeatureSlice } from './slices/myFeatureSlice';

   const store = (set, get) => ({
     ...createMyFeatureSlice(set, get),
     // ... other slices
   });
   ```

### Adding Validation Rules

Validation rules are defined in `pages.json` under `validationRules`:

```json
{
  "validationRules": {
    "required": ["formData.storeCity"],
    "custom": [
      {
        "type": "minQuantity",
        "property": "formData.airconditioningQuantities",
        "minTotal": 1,
        "errorMessage": "Seleziona almeno un climatizzatore"
      }
    ]
  }
}
```

Validation logic is in `src/store/slices/validationSlice.js`

## Critical Anti-Patterns

### ❌ NEVER Do These

1. **Use local React state for form data**
   ```javascript
   // ❌ WRONG
   const [city, setCity] = useState('');

   // ✅ CORRECT
   const { formData, setFormValue } = useAppStore();
   const city = formData.storeCity;
   ```

2. **Import components directly in PageRenderer**
   ```javascript
   // ❌ WRONG - hardcoded component
   return <TextInput {...props} />

   // ✅ CORRECT - use registry
   const Component = componentRegistry[type];
   return <Component {...props} />
   ```

3. **Skip component registration**
   - Every component used in pages.json MUST be registered in ComponentRegistry.jsx

4. **Modify formData directly**
   ```javascript
   // ❌ WRONG
   formData.city = 'Rome';

   // ✅ CORRECT
   setFormValue('city', 'Rome');
   ```

### ✅ ALWAYS Do These

1. Use `stateProperty` prop pattern for all form bindings
2. Keep UI components pure (props in, events out)
3. Register all components in ComponentRegistry.jsx
4. Configure UI through pages.json, not hardcoded JSX
5. Create new slices for complex domain logic
6. Use Redux DevTools (enabled in useAppStore) for debugging state

## Special Features

### Navigation Hooks

Pages can define hooks in pages.json that run before/after navigation:

```json
{
  "navigationHooks": {
    "beforeNext": "generateSplitPages",
    "afterNext": "",
    "beforePrevious": "",
    "afterPrevious": ""
  }
}
```

Hook functions are defined in the navigation slice.

### Navigation Override

Custom navigation buttons can be defined per-page:

```json
{
  "navigationOverride": {
    "backButton": {
      "label": "Stampa report",
      "icon": "reader",
      "action": "report.openReport"
    }
  }
}
```

### URL Parameter Loading

Allowed URL parameters (`userId`, `userid`, `accountName`, `accountname`) automatically load into `formData` on initialization (see `formDataSlice.js:16-25`).

### Test Data Loading

In development, use `?test=<scenario>` to auto-populate forms with test data. Test data loading logic is in `src/store/slices/testingSlice.js`.

## Multi-Step Wizard Flow

The application follows a stepped wizard pattern:

1. **Step 1:** Client information (city selection, ENEL customer status)
2. **Step 2:** Product configuration
   - AC quantity selection
   - Installation type per unit
   - Additional services (removal, cleaning, ductwork)
3. **Step 3:** Report generation & lead submission

Step progression is controlled by `navigationSlice` with validation checks from `validationSlice` before advancing.

## Redux DevTools Integration

The store is wrapped with Redux DevTools for state debugging:

```javascript
const useAppStore = create(
  devtools(
    subscribeWithSelector(store),
    { name: 'enel-clima-store' }
  )
);
```

Use browser Redux DevTools extension to inspect state changes, time-travel debug, and monitor slice updates.

## Documentation References

Comprehensive documentation is available in `/docs/`:
- `/docs/architecture/` - System design patterns
- `/docs/components/` - Component API reference
- `/docs/ai-guidelines/` - Development best practices
- `/docs/prompts/` - AI agent prompts
- `/docs/instructions/` - Project instructions

For more details, see `README.md`.
