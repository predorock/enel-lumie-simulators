# Application Architecture

## 🏗️ System Architecture Overview

The ENEL Lumiè Clima application follows a modern React architecture with clear separation of concerns, dynamic component loading, and JSON-driven configuration.

## 📊 Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                        App.jsx                              │
│  ┌─────────────────────┐  ┌─────────────────────────────────┤
│  │    PageLayout       │  │         useAppStore            │
│  │  ┌─────────────────┐│  │  ┌─────────────────────────────┤
│  │  │ LeftPanelRenderer││  │  │     - currentStep           │
│  │  │ ┌─────────────────┤│  │  │     - formData             │
│  │  │ │ComponentRegistry││  │  │     - shouldRenderComponent│
│  │  │ └─────────────────┤│  │  └─────────────────────────────┤
│  │  └─────────────────┘│  │                                │
│  │  ┌─────────────────┐│  │  ┌─────────────────────────────┤
│  │  │  PageRenderer   ││  │  │      pages.json             │
│  │  │ ┌─────────────────┤│  │  │  ┌─────────────────────────┤
│  │  │ │ComponentRegistry││  │  │  │ - Page definitions      │
│  │  │ └─────────────────┤│  │  │  │ - Component configs     │
│  │  └─────────────────┘│  │  │  │ - Conditional rendering │
│  └─────────────────────┘  │  │  └─────────────────────────┤
└─────────────────────────────────────────────────────────────┘
```

## 🎯 Core Architecture Principles

### **1. Separation of Concerns**
- **UI Components**: Pure, reusable presentation components
- **Stateful Wrappers**: State management logic separated from UI
- **Configuration**: Business logic defined in JSON, not code
- **Store**: Centralized state management with Zustand

### **2. Dynamic Component System**
```jsx
// Component Registry maps string names to components
const componentRegistry = {
  TextInput: (props) => <StatefulInput inputType="TextInput" {...props} />,
  Toggle: (props) => <StatefulToggle {...props} />,
  CostSummary: (props) => <CostSummary {...props} />,
  // ... more components
};

// Pages.json defines which components to render
{
  "type": "TextInput",
  "props": {
    "placeholder": "Nome punto vendita",
    "stateProperty": "storeLocation"
  }
}
```

### **3. JSON-Driven Configuration**
Pages and components are defined declaratively in JSON files:

**pages.json Structure:**
```json
{
  "pages": [
    {
      "id": "client-selection",
      "title": "Page Title",
      "step": 1,
      "leftPanelComponents": [...],
      "components": [...]
    }
  ]
}
```

### **4. Conditional Rendering System**
Components can be conditionally rendered based on state:

```json
{
  "type": "CostSummary",
  "renderConditions": {
    "hasQuantities": "airconditioningQuantities"
  }
}
```

## 🗂️ Directory Structure & Responsibilities

### **`/src/components/`**

#### **`/ui/` - Pure UI Components**
- **Purpose**: Presentation-only components
- **Characteristics**: No state management, pure functions
- **Examples**: `Button.jsx`, `TextInput.jsx`, `CostSummary.jsx`
- **Props**: Receive data and callbacks, no internal state

#### **`/layout/` - Layout Components**
- **Purpose**: Page structure and layout
- **Examples**: `PageLayout.jsx`
- **Responsibilities**: Grid layout, navigation, branding

#### **`Stateful*.jsx` - State Wrappers**
- **Purpose**: Connect UI components to Zustand store
- **Pattern**: Wrap pure UI components with state logic
- **Examples**: `StatefulInput.jsx`, `StatefulToggle.jsx`
- **Responsibilities**: State management, store integration

#### **`ComponentRegistry.jsx`**
- **Purpose**: Map component type strings to actual components
- **Pattern**: Object mapping for dynamic component resolution
- **Usage**: Used by renderers to instantiate components from JSON

### **`/config/` - Configuration Files**

#### **`pages.json`**
- **Purpose**: Define page structure and components
- **Structure**: Array of page objects with component definitions
- **Features**: Conditional rendering, left panel configuration

#### **`steps.json`**
- **Purpose**: Define step progression and labels
- **Structure**: Array of step objects with copy text

### **`/store/` - State Management**

#### **`useAppStore.js`**
- **Purpose**: Centralized application state
- **Technology**: Zustand store with devtools
- **Features**: Form data, step navigation, conditional rendering helpers

## 🔄 Data Flow Architecture

### **1. Component Rendering Flow**
```
pages.json → PageRenderer → ComponentRegistry → Component Instance
     ↓              ↓              ↓                    ↓
JSON Config → Type String → React Component → Rendered UI
```

### **2. State Management Flow**
```
User Input → Stateful Wrapper → Store Update → Component Re-render
     ↓             ↓                ↓              ↓
Form Data → setFormValue() → Zustand State → Conditional Rendering
```

### **3. Navigation Flow**
```
Step Change → Store Update → Page Config → Component Re-render
     ↓             ↓             ↓              ↓
nextStep() → currentStep++ → pages.json → New Components
```

## 🎨 Component Architecture Patterns

### **1. Pure UI Component Pattern**
```jsx
// Pure component - no state, only props
const TextInput = ({ value, onChange, placeholder, className }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
  );
};
```

### **2. Stateful Wrapper Pattern**
```jsx
// Stateful wrapper - connects UI to store
const StatefulInput = ({ stateProperty, inputType, ...props }) => {
  const store = useAppStore();
  const value = store.formData[stateProperty] || '';
  const setValue = (newValue) => store.setFormValue(stateProperty, newValue);
  
  const Component = componentRegistry[inputType];
  return <Component value={value} onChange={setValue} {...props} />;
};
```

### **3. Dynamic Renderer Pattern**
```jsx
// Dynamic renderer - instantiates components from config
const renderComponent = (componentConfig) => {
  const { type, props, renderConditions } = componentConfig;
  
  if (!shouldRenderComponent(renderConditions)) return null;
  
  const Component = componentRegistry[type];
  return <Component {...props} />;
};
```

## 🔐 State Architecture

### **Zustand Store Structure**
```javascript
{
  // Navigation state
  currentStep: 1,
  totalSteps: 3,
  
  // Form data (persistent across steps)
  formData: {
    storeLocation: "",
    consultantName: "",
    airconditioningQuantities: {},
    airConditioningConfigs: {}
  },
  
  // Helper methods
  setCurrentStep: (step) => {...},
  setFormValue: (property, value) => {...},
  shouldRenderComponent: (conditions) => {...}
}
```

### **Conditional Rendering Logic**
```javascript
shouldRenderComponent: (conditions) => {
  if (conditions.hasQuantities) {
    const quantities = formData[conditions.hasQuantities] || {};
    return Object.values(quantities).some(qty => qty > 0);
  }
  if (conditions.hasValues) {
    return conditions.hasValues.some(property => 
      formData[property] && formData[property] !== ""
    );
  }
  return true;
}
```

## 🎯 Design Patterns Used

### **1. Registry Pattern**
- **Component Registry**: Maps strings to components
- **Asset Registry**: Maps asset names to imports
- **Benefit**: Dynamic component resolution

### **2. Observer Pattern**
- **Zustand Store**: Reactive state updates
- **Component Subscriptions**: Auto re-render on state change
- **Benefit**: Automatic UI synchronization

### **3. Configuration Pattern**
- **JSON-Driven UI**: Components defined in configuration
- **Declarative Setup**: What to render, not how
- **Benefit**: Easy content management without code changes

### **4. Wrapper Pattern**
- **Stateful Wrappers**: Add state to pure components
- **Higher-Order Components**: Enhance component functionality
- **Benefit**: Separation of concerns, reusability

## 🚀 Performance Considerations

### **1. Component Lazy Loading**
- Dynamic imports for assets
- On-demand component instantiation
- Memory efficient rendering

### **2. State Optimization**
- Zustand's selective subscriptions
- Conditional rendering reduces DOM nodes
- Form data persistence prevents re-computation

### **3. Build Optimization**
- Vite's tree shaking
- Code splitting by routes
- Asset optimization (fonts, images)

## 🔧 Extensibility Points

### **1. Adding New Components**
1. Create pure UI component in `/ui/`
2. Create stateful wrapper if needed
3. Register in `ComponentRegistry.jsx`
4. Configure in `pages.json`

### **2. Adding New Pages**
1. Define page structure in `pages.json`
2. Add step configuration in `steps.json`
3. Components automatically render via registry

### **3. Adding New State Logic**
1. Extend Zustand store in `useAppStore.js`
2. Add conditional rendering logic if needed
3. Update stateful wrappers to use new state

---

*This architecture supports maintainable, scalable development while keeping the codebase clean and organized.*
