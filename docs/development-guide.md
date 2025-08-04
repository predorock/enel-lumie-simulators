# Development Guide

## 🚀 Getting Started

### **Prerequisites**
- Node.js (version specified in `.nvmrc`)
- npm (comes with Node.js)
- Git for version control
- VS Code (recommended) with extensions:
  - ES7+ React/Redux/React-Native snippets
  - Tailwind CSS IntelliSense
  - Auto Rename Tag
  - Prettier - Code formatter

### **Project Setup**
```bash
# Clone the repository
git clone <repository-url>
cd enel-lumie-vericale-clima

# Use correct Node.js version
nvm use

# Install dependencies
npm install

# Start development server
npm run dev
```

### **Development Server**
- **URL**: `http://localhost:5173`
- **Hot Reload**: Automatic browser refresh on file changes
- **Error Overlay**: Development errors shown in browser
- **Fast Refresh**: Preserves component state during development

## 🏗️ Project Structure Explained

### **`/src` Directory Structure**
```
src/
├── components/              # All React components
│   ├── ui/                 # Pure UI components (no state)
│   │   ├── TextInput.jsx   # Form input component
│   │   ├── CostSummary.jsx # Cost calculation display
│   │   ├── CustomSelect.jsx # Dropdown component
│   │   └── ...
│   ├── layout/             # Layout components
│   │   └── PageLayout.jsx  # Main page structure
│   ├── icons/              # SVG icon components
│   │   ├── AirConditioningIcons.jsx
│   │   └── InfoIcon.jsx
│   ├── StatefulInput.jsx   # State-connected input wrapper
│   ├── StatefulToggle.jsx  # State-connected toggle wrapper
│   ├── ComponentRegistry.jsx # Maps component names to components
│   └── LeftPanelRenderer.jsx # Renders dynamic left panel content
├── config/                 # JSON configuration files
│   ├── pages.json         # Page definitions and component configs
│   └── steps.json         # Step progression configuration
├── store/                 # State management
│   └── useAppStore.js     # Zustand store configuration
├── assets/                # Static assets
│   ├── fonts/             # Roobert ENEL font files
│   ├── images/            # SVG images and illustrations
│   └── icons/             # Icon assets
├── App.jsx                # Root application component
├── main.jsx               # Application entry point
└── index.css              # Global styles and font definitions
```

### **Configuration Files**
```
root/
├── package.json           # Dependencies and scripts
├── vite.config.js        # Build tool configuration
├── tailwind.config.js    # Styling framework config
├── eslint.config.js      # Code quality rules
├── .nvmrc                # Node.js version specification
├── .gitignore            # Git ignore patterns
└── index.html            # HTML template
```

## 🔧 Development Workflow

### **1. Adding New Components**

#### **Step 1: Create Pure UI Component**
```jsx
// src/components/ui/NewComponent.jsx
import React from 'react';

const NewComponent = ({ 
  value, 
  onChange, 
  placeholder = '', 
  className = '',
  ...props 
}) => {
  return (
    <div className={`new-component-base ${className}`} {...props}>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-10 px-3 text-sm border rounded"
        style={{ fontFamily: 'Roobert' }}
      />
    </div>
  );
};

export default NewComponent;
```

#### **Step 2: Create Stateful Wrapper (if needed)**
```jsx
// src/components/StatefulNewComponent.jsx
import React from 'react';
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

#### **Step 3: Register Component**
```jsx
// src/components/ComponentRegistry.jsx
import StatefulNewComponent from './StatefulNewComponent';

const componentRegistry = {
  // ... existing components
  NewComponent: (props) => <StatefulNewComponent {...props} />,
};
```

#### **Step 4: Configure in JSON**
```json
// src/config/pages.json
{
  "type": "NewComponent",
  "props": {
    "placeholder": "Enter value",
    "stateProperty": "newComponentValue"
  }
}
```

### **2. Modifying Existing Components**

#### **Before Making Changes**
1. **Read the component** and understand its current structure
2. **Check for stateful wrapper** in the same component directory
3. **Verify component registry** entry in `ComponentRegistry.jsx`
4. **Review usage** in `pages.json` to understand configuration

#### **Making Changes**
1. **Update pure UI component** with new functionality
2. **Modify stateful wrapper** if state logic changes
3. **Test component** in isolation first
4. **Update pages.json** if new props are needed
5. **Test integration** with the full application

### **3. Working with State**

#### **Reading State**
```jsx
// Subscribe to specific state slice
const currentStep = useAppStore(state => state.currentStep);
const storeLocation = useAppStore(state => state.formData.storeLocation);

// Subscribe to multiple values (less performant)
const { currentStep, formData } = useAppStore();
```

#### **Updating State**
```jsx
// Update form data
const setFormValue = useAppStore(state => state.setFormValue);
setFormValue('storeLocation', 'Milano Centro');

// Update navigation
const nextStep = useAppStore(state => state.nextStep);
nextStep();
```

#### **Adding New State Properties**
```jsx
// src/store/useAppStore.js
const useAppStore = create(
  devtools(
    (set, get) => ({
      formData: {
        // ... existing properties
        newProperty: '', // Add new property with default value
      },
      
      // Add getter if needed
      getNewPropertyStatus: () => {
        const { formData } = get();
        return formData.newProperty ? 'filled' : 'empty';
      },
    })
  )
);
```

## 🎨 Styling Guidelines

### **Using Tailwind CSS**
```jsx
// ✅ GOOD: Use utility classes
<div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">

// ✅ GOOD: Combine with custom properties for fonts
<span 
  className="text-sm text-white"
  style={{ fontFamily: 'Roobert Light' }}
>

// ❌ AVOID: Custom CSS unless absolutely necessary
<div style={{ padding: '16px', display: 'flex' }}>
```

### **Font Usage**
```jsx
// Standard text
style={{ fontFamily: 'Roobert' }}

// Light text (secondary content)
style={{ fontFamily: 'Roobert Light' }}

// Bold text (emphasis)
style={{ fontFamily: 'Roobert Bold' }}
```

### **Component Sizing Standards**
```jsx
// Input heights - always use h-10 (40px)
className="h-10"

// Icon sizes - standard is w-6 h-6 (24px)
className="w-6 h-6"

// Spacing - use Tailwind scale (4px increments)
className="p-4 mb-2 space-y-1"
```

## 🧪 Testing Your Changes

### **1. Development Testing**
```bash
# Start dev server
npm run dev

# Check for errors in terminal
# Check browser console for runtime errors
# Test component interactions
# Verify state persistence across steps
```

### **2. Component Testing Checklist**
- [ ] Component renders without errors
- [ ] Props are passed correctly
- [ ] State updates work as expected
- [ ] Conditional rendering works
- [ ] Styling matches design system
- [ ] Responsive behavior is correct

### **3. Integration Testing**
- [ ] Component works in page context
- [ ] Navigation still functions
- [ ] State persists across steps
- [ ] Form data saves correctly
- [ ] Other components still work

## 🔍 Debugging Guide

### **Common Issues and Solutions**

#### **Import Errors**
```bash
# Error: Cannot resolve module
# Solution: Check file paths and case sensitivity
import useAppStore from '../store/useAppStore'; // ✅ Correct path
import useAppStore from '../store/useappstore'; // ❌ Wrong case
```

#### **Component Not Rendering**
```jsx
// Check ComponentRegistry
const Component = componentRegistry[type];
if (!Component) {
  console.warn(`Component type "${type}" not found in registry`);
  return null;
}
```

#### **State Not Updating**
```jsx
// Check if you're subscribing to the right state slice
const value = useAppStore(state => state.formData.propertyName);

// Check if setFormValue is being called correctly
const setFormValue = useAppStore(state => state.setFormValue);
setFormValue('propertyName', newValue);
```

#### **Styling Issues**
```jsx
// Check font family usage
style={{ fontFamily: 'Roobert' }} // ✅ Correct
style={{ fontFamily: 'Roobert_ENEL' }} // ❌ Old naming

// Check Tailwind class names
className="h-10" // ✅ Standard height
className="h-12" // ❌ Non-standard height
```

### **Development Tools**

#### **Browser DevTools**
- **React DevTools**: Inspect component state and props
- **Redux DevTools**: Monitor Zustand store changes
- **Console**: Check for errors and warnings
- **Network**: Monitor asset loading

#### **VS Code Extensions**
- **Tailwind CSS IntelliSense**: Class name suggestions
- **ES7+ React Snippets**: Quick component scaffolding
- **Auto Rename Tag**: Keep JSX tags in sync

## 📋 Code Quality

### **ESLint Configuration**
The project uses ESLint for code quality. Common rules:
- Use semicolons
- Prefer const/let over var
- No unused variables
- Consistent spacing and indentation

### **Code Formatting**
```jsx
// ✅ GOOD: Consistent formatting
const ComponentName = ({ 
  prop1, 
  prop2 = 'default',
  ...props 
}) => {
  return (
    <div className="component-wrapper" {...props}>
      <span>{prop1}</span>
    </div>
  );
};

// ❌ BAD: Inconsistent formatting
const ComponentName = ({prop1,prop2='default',...props}) => {
return <div className="component-wrapper" {...props}><span>{prop1}</span></div>
};
```

### **Best Practices**
1. **Component Naming**: Use PascalCase for components
2. **File Naming**: Match component name with file name
3. **Props Destructuring**: Destructure props in function signature
4. **Default Values**: Provide sensible defaults for optional props
5. **Export**: Use default exports for components

## 🚀 Build and Deployment

### **Development Build**
```bash
npm run dev    # Start development server with HMR
```

### **Production Build**
```bash
npm run build  # Create optimized production build
npm run preview # Preview production build locally
```

### **Code Quality Checks**
```bash
npm run lint   # Run ESLint on all files
```

## 📚 Learning Resources

### **Technologies Used**
- **React**: https://react.dev/
- **Vite**: https://vitejs.dev/
- **Zustand**: https://github.com/pmndrs/zustand
- **Tailwind CSS**: https://tailwindcss.com/
- **ESLint**: https://eslint.org/

### **Project-Specific Patterns**
- Read through existing components to understand patterns
- Study `ComponentRegistry.jsx` to see component mapping
- Review `pages.json` to understand configuration structure
- Examine store structure in `useAppStore.js`

---

*This development guide provides everything needed to work effectively with the ENEL Lumiè Clima codebase.*
