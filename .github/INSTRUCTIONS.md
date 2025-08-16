# ENEL Lumiè Clima - AI Development Instructions

## 🎯 Project Context

**ENEL Lumiè Clima** is a React-based air conditioning configurator application with Zustand state management, Tailwind CSS styling, and JSON-driven component configuration. The application follows strict architectural patterns and ENEL design system guidelines.

## 🏗️ Core Architecture Patterns

### **Component Architecture**
```
src/components/
├── ui/                  # Pure UI components (no state)
├── layout/              # Layout and structural components  
├── icons/               # SVG icon components
├── Stateful*.jsx        # State-connected wrappers
├── ComponentRegistry.jsx # Component mapping registry
└── LeftPanelRenderer.jsx # Dynamic component renderer
```

### **State Management (Zustand)**
```javascript
// ✅ CORRECT: Access store data
const store = useAppStore();
const value = store.formData[stateProperty] || '';
const setValue = (newValue) => store.setFormValue(stateProperty, newValue);

// ❌ INCORRECT: Don't use local state for form data
const [value, setValue] = useState('');
```

### **Component Creation Process**

1. **Create Pure UI Component** in `/src/components/ui/`
2. **Create Stateful Wrapper** in `/src/components/Stateful*.jsx`
3. **Register in ComponentRegistry** 
4. **Configure in pages.json**

```jsx
// 1. Pure UI Component
const NewComponent = ({ value, onChange, placeholder, className = '' }) => (
  <div className={`base-classes ${className}`}>
    {/* Component JSX */}
  </div>
);

// 2. Stateful Wrapper
const StatefulNewComponent = ({ stateProperty, ...props }) => {
  const store = useAppStore();
  const value = store.formData[stateProperty] || '';
  const setValue = (newValue) => store.setFormValue(stateProperty, newValue);
  
  return <NewComponent value={value} onChange={setValue} {...props} />;
};

// 3. Registry Entry
const componentRegistry = {
  NewComponent: (props) => <StatefulNewComponent {...props} />,
};

// 4. JSON Configuration
{
  "type": "NewComponent",
  "props": {
    "placeholder": "Enter value",
    "stateProperty": "newComponentValue"
  }
}
```

## 🎨 ENEL Design System

### **Typography System**
```css
/* ✅ USE THESE CSS CLASSES */
.font-enel          /* Roobert ENEL Regular - standard text */
.font-enel-light    /* Roobert ENEL Light - subtle text */
.font-enel-bold     /* Roobert ENEL Bold - headings, prices, buttons */

/* ❌ NEVER USE INLINE STYLES */
style={{ fontFamily: 'Roobert' }}        /* Replace with font-enel */
style={{ fontFamily: 'Roobert Bold' }}   /* Replace with font-enel-bold */
font-['Roobert']                         /* Replace with font-enel */
```

### **Color Palette**
```css
#002466  /* ENEL Primary Blue - main brand color */
#5738ff  /* Purple - selected states, highlights */
#667790  /* Gray - secondary text, borders */
#c2cddd  /* Light Gray - dividers, backgrounds */
#ffffff  /* White - text on blue backgrounds */
```

### **Component Standards**
```jsx
// ✅ Standard heights and spacing
className="h-10"     // 40px - inputs, buttons
className="h-6"      // 24px - standard icons
className="space-y-2" // 8px vertical spacing
className="px-3"     // 12px horizontal padding

// ✅ Input pattern
<input
  className="h-10 px-3 pt-3 pb-1 text-sm border rounded focus:outline-none focus:ring-2 font-enel"
  placeholder={placeholder}
/>
```

## 📋 Code Quality Standards

### **Import Organization**
```jsx
import React from 'react';                    // React imports first
import useAppStore from '../store/useAppStore'; // Store imports
import ComponentName from './ComponentName';    // Local components
```

### **Component Structure**
```jsx
const ComponentName = ({ 
  prop1, 
  prop2 = 'defaultValue',
  className = '',
  ...props 
}) => {
  // 1. Hooks at the top
  const store = useAppStore();
  
  // 2. Event handlers
  const handleClick = useCallback(() => {
    // Handle click
  }, []);
  
  // 3. Early returns for conditions
  if (!prop1) return null;
  
  // 4. Main render
  return (
    <div className={`base-classes ${className}`} {...props}>
      {/* JSX content */}
    </div>
  );
};
```

### **Error Handling**
```jsx
// ✅ CORRECT: Defensive programming
const value = store.formData?.[stateProperty] || '';
const Component = componentRegistry[type];

if (!Component) {
  console.warn(`Component type "${type}" not found`);
  return null;
}
```

## 🔧 File Placement Rules

### **Component Files**
- **Pure UI**: `/src/components/ui/ComponentName.jsx`
- **Stateful**: `/src/components/StatefulComponentName.jsx`
- **Layout**: `/src/components/layout/LayoutName.jsx`
- **Icons**: `/src/components/icons/IconName.jsx`

### **Configuration Files**
- **Pages**: `/src/config/pages.json`
- **Steps**: `/src/config/steps.json`
- **Registry**: `/src/components/ComponentRegistry.jsx`

### **Store Files**
- **Main Store**: `/src/store/useAppStore.js`
- **Slices**: `/src/store/slices/sliceName.js`

## 🚨 Common Mistakes to Avoid

### **State Management**
```jsx
// ❌ INCORRECT: Local state for form data
const [inputValue, setInputValue] = useState('');

// ✅ CORRECT: Store for form data
const store = useAppStore();
const inputValue = store.formData.inputProperty || '';
```

### **Component Registration**
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

### **Typography**
```jsx
// ❌ INCORRECT: Inconsistent fonts
style={{ fontFamily: 'Arial' }}
className="font-sans"

// ✅ CORRECT: ENEL fonts
className="font-enel"
className="font-enel-bold"
```

## 🔄 Development Workflow

### **When Adding New Components**
1. Check if similar component exists
2. Create pure UI component first
3. Add stateful wrapper if needed
4. Register in ComponentRegistry
5. Test with pages.json configuration
6. Verify design system compliance

### **When Modifying Existing Components**
1. Read current implementation
2. Check ComponentRegistry entry
3. Review pages.json usage
4. Test conditional rendering
5. Maintain design consistency

### **Before Making Changes**
- [ ] Read component and wrapper files
- [ ] Check registry integration
- [ ] Review JSON configuration
- [ ] Understand state dependencies

### **After Making Changes**
- [ ] No console errors or warnings
- [ ] Component renders correctly
- [ ] State persists across navigation
- [ ] Design system compliance verified

## 📦 Key Dependencies

- **React 19.1.0** - Core framework
- **Zustand 5.0.7** - State management
- **Tailwind CSS 4.1.7** - Styling system
- **Vite 6.3.5** - Build tool

## 🎯 Success Criteria

### **Code Quality**
- No console errors or warnings
- Consistent patterns with existing code
- Proper error handling
- Clean component separation

### **Design Compliance**
- ENEL typography system (font-enel classes)
- Correct color palette usage
- Standard component sizing
- Consistent spacing patterns

### **Functionality**
- Proper state management via Zustand
- Correct component registration
- Working conditional rendering
- Data persistence across steps

---

**Critical**: Always maintain consistency with existing patterns. The application architecture is designed for maintainability and must be preserved across all modifications.
