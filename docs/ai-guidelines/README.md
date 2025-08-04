# AI Development Guidelines for ENEL Lumiè Clima

## 🎯 Project Overview

**ENEL Lumiè Clima** is a React-based configurator application for air conditioning installations. The application follows specific architectural patterns, design guidelines, and coding standards that must be maintained when making modifications or additions.

## 🏗️ Core Architecture Principles

### **1. Component-Driven Architecture**
- **Pure UI Components**: Create presentation-only components in `/src/components/ui/`
- **Stateful Wrappers**: Use `Stateful*.jsx` pattern for state integration
- **Dynamic Registry**: All components must be registered in `ComponentRegistry.jsx`
- **JSON Configuration**: Page structure defined in `src/config/pages.json`

### **2. State Management Pattern**
```javascript
// ✅ CORRECT: Use Zustand store for shared state
const store = useAppStore();
const value = store.formData[stateProperty] || '';
const setValue = (newValue) => store.setFormValue(stateProperty, newValue);

// ❌ INCORRECT: Don't use local state for form data
const [value, setValue] = useState('');
```

### **3. File Organization Rules**
```
src/components/
├── ui/                  # Pure UI components only
├── layout/              # Layout and structural components  
├── icons/               # SVG icon components
├── Stateful*.jsx        # State-connected wrappers
├── ComponentRegistry.jsx # Component mapping registry
└── LeftPanelRenderer.jsx # Dynamic component renderer
```

## 🎨 ENEL Design System Compliance

### **Typography Standards**
```jsx
// ✅ CORRECT: Use Roobert ENEL fonts
style={{ fontFamily: 'Roobert' }}        // Regular weight
style={{ fontFamily: 'Roobert Light' }}  // Light weight  
style={{ fontFamily: 'Roobert Bold' }}   // Bold weight

// Font sizes (Tailwind classes)
text-xs   // 12px - Small labels, captions
text-sm   // 14px - Standard UI text
text-base // 16px - Body text
text-lg   // 18px - Emphasized text
text-xl   // 20px - Headings
```

### **Color Palette**
```css
/* Primary Colors */
#002466  /* ENEL Primary Blue - main brand color */
#ffffff  /* White - text on blue backgrounds */

/* Secondary Colors */
#5738ff  /* Purple - selected states, highlights */
#667790  /* Gray - secondary text, borders */
#c2cddd  /* Light Gray - dividers, backgrounds */
```

### **Component Sizing Standards**
```jsx
// ✅ CORRECT: Standardized component heights
className="h-10"  // 40px - Standard height for inputs, buttons
className="h-6"   // 24px - Standard height for icons
className="h-4"   // 16px - Small icons

// ✅ CORRECT: Consistent spacing
className="space-y-1"  // 4px vertical spacing
className="space-y-2"  // 8px vertical spacing  
className="space-y-4"  // 16px vertical spacing
```

### **Input Component Standards**
```jsx
// ✅ CORRECT: All form inputs must follow this pattern
<input
  className="h-10 px-3 pt-3 pb-1 text-sm border rounded focus:outline-none focus:ring-2"
  style={{ fontFamily: 'Roobert' }}
  // ... other props
/>

// Floating label pattern
<div className="relative">
  <input className="h-10 px-3 pt-3 pb-1" />
  <label className="absolute left-3 top-0.5 text-xs text-gray-500">
    {placeholder}
  </label>
</div>
```

## 🔧 Development Guidelines

### **1. Component Creation Process**

#### **Step 1: Create Pure UI Component**
```jsx
// src/components/ui/NewComponent.jsx
const NewComponent = ({ 
  value, 
  onChange, 
  placeholder, 
  className = '',
  ...props 
}) => {
  return (
    <div className={`base-classes ${className}`} {...props}>
      {/* Component JSX */}
    </div>
  );
};

export default NewComponent;
```

#### **Step 2: Create Stateful Wrapper (if needed)**
```jsx
// src/components/StatefulNewComponent.jsx
import useAppStore from '../store/useAppStore';
import NewComponent from './ui/NewComponent';

const StatefulNewComponent = ({ 
  stateProperty, 
  initialValue = '',
  ...props 
}) => {
  const store = useAppStore();
  const value = store.formData[stateProperty] || initialValue;
  const setValue = (newValue) => store.setFormValue(stateProperty, newValue);
  
  return (
    <NewComponent
      value={value}
      onChange={setValue}
      {...props}
    />
  );
};

export default StatefulNewComponent;
```

#### **Step 3: Register in ComponentRegistry**
```jsx
// src/components/ComponentRegistry.jsx
import NewComponent from './ui/NewComponent';
import StatefulNewComponent from './StatefulNewComponent';

const componentRegistry = {
  // ... existing components
  NewComponent: (props) => <StatefulNewComponent {...props} />,
};
```

#### **Step 4: Configure in pages.json**
```json
{
  "type": "NewComponent",
  "props": {
    "placeholder": "Enter value",
    "stateProperty": "newComponentValue"
  },
  "renderConditions": {
    "hasValues": ["requiredField"]
  }
}
```

### **2. State Management Rules**

#### **Form Data Storage**
```javascript
// ✅ CORRECT: Store form data in Zustand store
const setFormValue = useAppStore(state => state.setFormValue);
setFormValue('propertyName', value);

// ✅ CORRECT: Read form data from store
const { formData } = useAppStore();
const value = formData.propertyName || '';

// ❌ INCORRECT: Don't use local state for persistent data
const [formValue, setFormValue] = useState('');
```

#### **Conditional Rendering Logic**
```javascript
// ✅ CORRECT: Use store's helper method
const shouldRender = store.shouldRenderComponent({
  hasQuantities: 'airconditioningQuantities'
});

// ✅ CORRECT: Define conditions in JSON
"renderConditions": {
  "hasQuantities": "airconditioningQuantities",
  "hasValues": ["storeLocation", "consultantName"]
}
```

### **3. Layout and Styling Rules**

#### **Left Panel Configuration**
```json
// ✅ CORRECT: Configure left panel in pages.json
"leftPanelComponents": [
  {
    "type": "Image",
    "props": {
      "src": "italy",
      "containerClassName": "flex justify-center items-center mt-16"
    }
  },
  {
    "type": "CostSummary",
    "props": {
      "containerClassName": "mt-auto"
    },
    "renderConditions": {
      "hasQuantities": "airconditioningQuantities"
    }
  }
]
```

#### **CSS Class Guidelines**
```jsx
// ✅ CORRECT: Use Tailwind utility classes
className="flex justify-between items-center space-y-2"

// ✅ CORRECT: Combine utilities for complex layouts
className="relative h-10 px-3 pt-3 pb-1 border rounded focus:ring-2"

// ❌ INCORRECT: Don't write custom CSS unless absolutely necessary
style={{ padding: '12px', margin: '8px' }}
```

## 📋 Code Quality Standards

### **1. Import Organization**
```jsx
// ✅ CORRECT: Import order
import React from 'react';           // React imports first
import useAppStore from '../store/useAppStore';  // Store imports
import ComponentName from './ComponentName';     // Local components
import './styles.css';              // Styles last
```

### **2. Component Structure**
```jsx
// ✅ CORRECT: Component structure
const ComponentName = ({ 
  prop1, 
  prop2 = 'defaultValue',
  className = '',
  ...props 
}) => {
  // 1. Hooks at the top
  const store = useAppStore();
  const [localState, setLocalState] = useState(null);
  
  // 2. Derived values
  const computedValue = useMemo(() => {
    return someCalculation(prop1, prop2);
  }, [prop1, prop2]);
  
  // 3. Event handlers
  const handleClick = useCallback(() => {
    // Handle click
  }, []);
  
  // 4. Early returns for conditional rendering
  if (!prop1) return null;
  
  // 5. Main render
  return (
    <div className={`base-classes ${className}`} {...props}>
      {/* JSX content */}
    </div>
  );
};

export default ComponentName;
```

### **3. Error Handling**
```jsx
// ✅ CORRECT: Defensive programming
const value = store.formData?.[stateProperty] || '';
const quantities = airconditioningQuantities || {};
const Component = componentRegistry[type];

if (!Component) {
  console.warn(`Component type "${type}" not found in registry`);
  return null;
}
```

## 🎯 Figma Integration Guidelines

### **When Using Figma Integration**
1. **Always call `get_image` after `get_code`** to see visual context
2. **Match exact typography**: Use Roobert fonts with correct weights
3. **Preserve spacing**: Match padding, margins, and layout exactly
4. **Color accuracy**: Use exact hex values from design
5. **Responsive considerations**: Ensure design works on different screen sizes

### **Figma to Code Translation**
```jsx
// ✅ CORRECT: Translate Figma styles accurately
// Figma: 14px font, 400 weight, #ffffff color
className="text-sm font-normal text-white"
style={{ fontFamily: 'Roobert' }}

// Figma: 16px spacing, centered alignment
className="px-4 text-center"

// Figma: Flex layout with space between
className="flex justify-between items-center"
```

## 🚨 Common Mistakes to Avoid

### **1. State Management Mistakes**
```jsx
// ❌ INCORRECT: Using local state for form data
const [inputValue, setInputValue] = useState('');

// ✅ CORRECT: Using store for form data
const store = useAppStore();
const inputValue = store.formData.inputProperty || '';
```

### **2. Component Registration Mistakes**
```jsx
// ❌ INCORRECT: Direct component reference
const componentRegistry = {
  TextInput: TextInput  // Missing stateful wrapper
};

// ✅ CORRECT: With stateful wrapper
const componentRegistry = {
  TextInput: (props) => <StatefulInput inputType="TextInput" {...props} />
};
```

### **3. Styling Mistakes**
```jsx
// ❌ INCORRECT: Inconsistent font usage
style={{ fontFamily: 'Arial' }}

// ✅ CORRECT: Use project fonts
style={{ fontFamily: 'Roobert' }}

// ❌ INCORRECT: Custom heights
className="h-12"

// ✅ CORRECT: Standard height
className="h-10"
```

### **4. Import Path Mistakes**
```jsx
// ❌ INCORRECT: Wrong store import
import { useStore } from '../../store';

// ✅ CORRECT: Correct store import
import useAppStore from '../../store/useAppStore';
```

## 🔄 Modification Workflow

### **When Modifying Existing Components**
1. **Understand current implementation** by reading component and its stateful wrapper
2. **Check ComponentRegistry** to see how component is registered
3. **Review pages.json** to understand component usage
4. **Test conditional rendering** if component has renderConditions
5. **Maintain design system compliance** with fonts, colors, and spacing

### **When Adding New Features**
1. **Follow component creation process** (UI → Stateful → Registry → JSON)
2. **Extend store** if new state properties are needed
3. **Update pages.json** to configure new components
4. **Test integration** with existing components and workflow

### **When Fixing Bugs**
1. **Check terminal output** for errors and warnings
2. **Verify import paths** are correct and files exist
3. **Ensure state consistency** between components and store
4. **Test conditional rendering** logic if applicable

## 📋 File Modification Checklist

### **Before Making Changes**
- [ ] Read current component implementation
- [ ] Check for existing stateful wrapper
- [ ] Verify component registry entry
- [ ] Review pages.json configuration
- [ ] Check store integration

### **After Making Changes**
- [ ] Verify no import errors in terminal
- [ ] Test component renders correctly
- [ ] Check state persistence across steps
- [ ] Verify design system compliance
- [ ] Test conditional rendering (if applicable)

## 🎯 Success Criteria

### **Code Quality**
- No console errors or warnings
- Consistent coding patterns
- Proper error handling
- Clean component separation

### **Design Compliance**
- Exact Figma design match
- Correct Roobert font usage
- ENEL color palette adherence
- Consistent component sizing

### **Functionality**
- Proper state management
- Working conditional rendering
- Smooth step navigation
- Data persistence

---

**Remember**: Always prioritize consistency with existing patterns over introducing new approaches. The application architecture is designed for maintainability and should be preserved.

*Last updated: August 4, 2025*
