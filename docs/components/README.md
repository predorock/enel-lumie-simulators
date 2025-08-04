# Component Documentation

## 📋 Component Overview

The ENEL Lumiè Clima application uses a component architecture that separates pure UI components from stateful logic, enabling maximum reusability and maintainability.

## 🎯 Component Categories

### **1. Pure UI Components (`/ui/`)**
- **Purpose**: Presentation-only components
- **Characteristics**: No internal state, receive props only
- **Testing**: Easy to test with static props
- **Reusability**: Can be used across different contexts

### **2. Stateful Wrappers (`Stateful*.jsx`)**
- **Purpose**: Connect UI components to application state
- **Pattern**: Higher-order components that inject state
- **Store Integration**: Use Zustand store for state management

### **3. Layout Components (`/layout/`)**
- **Purpose**: Page structure and navigation
- **Responsibilities**: Grid layout, branding, step progression

## 📚 Component Reference

### **Form Input Components**

#### **TextInput**
```jsx
// Pure UI Component
<TextInput 
  value={value}
  onChange={handleChange}
  placeholder="Enter text"
  type="text"
  className="custom-class"
/>

// Stateful Wrapper Usage (via JSON)
{
  "type": "TextInput",
  "props": {
    "placeholder": "Nome punto vendita",
    "stateProperty": "storeLocation"
  }
}
```

**Props:**
- `value`: Current input value
- `onChange`: Change handler function
- `placeholder`: Input placeholder text
- `type`: Input type (text, email, tel, etc.)
- `className`: Additional CSS classes

**Features:**
- Floating label animation
- Consistent h-10 height
- ENEL design system styling
- Focus and validation states

#### **SearchInput**
Similar to TextInput but with search-specific styling and behavior.

#### **CustomSelect**
```jsx
<CustomSelect
  options={[
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" }
  ]}
  value={selectedValue}
  onChange={handleChange}
  placeholder="Select option"
/>
```

**Features:**
- Custom dropdown design matching Figma
- Scrollable options with max height
- Selected state with checkmark
- Hover and focus states
- Click outside to close

#### **ToggleSwitch**
```jsx
<ToggleSwitch
  checked={isChecked}
  onChange={handleToggle}
  label="Enable feature"
/>
```

### **Display Components**

#### **CostSummary**
```jsx
<CostSummary containerClassName="mt-auto" />
```

**Features:**
- Dynamic pricing calculation
- Italian currency formatting
- ENEL typography (Roobert fonts)
- Responsive layout

**Data Source:**
- Reads from `airconditioningQuantities` in store
- Calculates installation and unit costs
- Displays formatted totals

#### **Image**
```jsx
<Image
  src="italy"           // Asset key from registry
  alt="Italy"
  className="w-auto h-auto"
  containerClassName="flex justify-center"
/>
```

**Features:**
- Dynamic asset loading from registry
- Async image resolution
- Container wrapper support
- Responsive image handling

#### **InfoBanner**
```jsx
<InfoBanner
  title="Information Title"
  description="Detailed information text"
  variant="info"        // info, warning, success
/>
```

### **Configuration Components**

#### **SplitterQtyConfigurator**
```jsx
// Via ComponentRegistry
{
  "type": "SplitterQtyConfigurator",
  "props": {
    "items": [
      { "key": "monosplit", "label": "Monosplit" },
      { "key": "dualsplit", "label": "Dualsplit" },
      { "key": "trialsplit", "label": "Trialsplit" }
    ],
    "min": 0,
    "max": 3,
    "totalMax": 3,
    "stateProperty": "airconditioningQuantities"
  }
}
```

**Features:**
- Quantity stepper controls
- Total quantity validation
- Individual and global limits
- State persistence

#### **AirConditioningConfigurator**
```jsx
{
  "type": "AirConditioningConfigurator",
  "props": {
    "stateProperty": "airConditioningConfigs",
    "installationTypes": [...],
    "roomSizes": [...]
  },
  "renderConditions": {
    "hasQuantities": "airconditioningQuantities"
  }
}
```

**Features:**
- Dynamic configuration rows
- Conditional rendering based on quantities
- Configurable options via props
- Custom select components

### **Layout Components**

#### **PageLayout**
```jsx
<PageLayout
  currentStep={2}
  title="Page Title"
  showStepper={true}
  showNavigation={true}
  leftPanelComponents={[...]}
>
  {children}
</PageLayout>
```

**Features:**
- CSS Grid layout (2/3 split)
- ENEL branding and logo
- Dynamic left panel content
- Step progression indicator
- Navigation controls

**Layout Structure:**
- **Left Panel**: ENEL branding, title, stepper, dynamic content
- **Right Panel**: Main content area with navigation

#### **NavigationBar**
```jsx
<NavigationBar
  onBack={handleBack}
  onNext={handleNext}
  backLabel="Indietro"
  nextLabel="Avanti"
/>
```

### **Icon Components**

#### **AirConditioningIcons**
```jsx
import { MonosplitIcon, DualsplitIcon, TrialsplitIcon } from './AirConditioningIcons';

<MonosplitIcon className="w-6 h-6" />
<DualsplitIcon className="w-6 h-6" />
<TrialsplitIcon className="w-6 h-6" />
```

## 🔧 Component Registry System

### **How It Works**
```jsx
// ComponentRegistry.jsx
const componentRegistry = {
  TextInput: (props) => <StatefulInput inputType="TextInput" {...props} />,
  Toggle: (props) => <StatefulToggle {...props} />,
  CostSummary: (props) => <CostSummary {...props} />,
  // ... more components
};

// Usage in renderers
const Component = componentRegistry[type];
return <Component {...props} />;
```

### **Adding New Components**
1. **Create Pure UI Component**:
   ```jsx
   // src/components/ui/NewComponent.jsx
   const NewComponent = ({ prop1, prop2, ...props }) => {
     return <div {...props}>Content</div>;
   };
   ```

2. **Create Stateful Wrapper (if needed)**:
   ```jsx
   // src/components/StatefulNewComponent.jsx
   const StatefulNewComponent = ({ stateProperty, ...props }) => {
     const store = useAppStore();
     // State logic here
     return <NewComponent {...props} />;
   };
   ```

3. **Register Component**:
   ```jsx
   // ComponentRegistry.jsx
   NewComponent: (props) => <StatefulNewComponent {...props} />
   ```

4. **Use in Configuration**:
   ```json
   {
     "type": "NewComponent",
     "props": { ... }
   }
   ```

## 🎨 Styling Guidelines

### **Design System**
- **Font Family**: Roobert ENEL (Regular, Light, Bold)
- **Primary Color**: #002466 (ENEL blue)
- **Text Sizes**: text-sm (14px), text-base (16px), text-lg (18px)
- **Spacing**: Tailwind scale (4px increments)

### **Component Sizing**
- **Input Height**: h-10 (40px) for all form inputs
- **Button Height**: h-10 for consistency
- **Icon Size**: w-6 h-6 (24px) for standard icons

### **Layout Principles**
- **Grid System**: CSS Grid for main layout
- **Flexbox**: For component internal layout
- **Responsive**: Mobile-first approach
- **Spacing**: Consistent margin/padding patterns

## 🔄 State Integration

### **Stateful Wrapper Pattern**
```jsx
const StatefulComponent = ({ 
  stateProperty,     // Store property to bind to
  inputType,         // UI component type
  ...props          // Additional props passed through
}) => {
  const store = useAppStore();
  const value = store.formData[stateProperty] || '';
  const setValue = (newValue) => store.setFormValue(stateProperty, newValue);
  
  const UIComponent = componentRegistry[inputType];
  return (
    <UIComponent 
      value={value}
      onChange={setValue}
      {...props}
    />
  );
};
```

### **Store Integration**
```jsx
// Reading from store
const { formData, currentStep } = useAppStore();
const value = formData[stateProperty];

// Writing to store
const setFormValue = useAppStore(state => state.setFormValue);
setFormValue('propertyName', newValue);
```

## 🎯 Conditional Rendering

### **Render Conditions**
```json
{
  "type": "Component",
  "renderConditions": {
    "hasQuantities": "airconditioningQuantities",
    "hasValues": ["storeLocation", "consultantName"],
    "equals": { "property": "step", "value": 2 }
  }
}
```

### **Condition Types**
- **`hasQuantities`**: Check if quantity object has values > 0
- **`hasValues`**: Check if properties have non-empty values
- **`equals`**: Check if property equals specific value
- **`custom`**: Custom function evaluation

## 🧪 Testing Guidelines

### **Pure Components**
```jsx
// Easy to test - just pass props
test('TextInput renders with placeholder', () => {
  render(<TextInput placeholder="Test" value="" onChange={() => {}} />);
  expect(screen.getByPlaceholderText('Test')).toBeInTheDocument();
});
```

### **Stateful Components**
```jsx
// Test with mocked store
test('StatefulInput updates store', () => {
  const mockStore = createMockStore();
  render(<StatefulInput stateProperty="testProp" />);
  // Test interactions
});
```

## 📋 Best Practices

### **Component Design**
1. **Single Responsibility**: Each component has one clear purpose
2. **Pure Functions**: UI components are pure when possible
3. **Prop Validation**: Use PropTypes or TypeScript for prop validation
4. **Accessibility**: Include ARIA labels and keyboard navigation

### **State Management**
1. **Minimal State**: Keep component state minimal
2. **Store Integration**: Use store for shared state only
3. **Derived State**: Calculate derived values in render
4. **Performance**: Use selective subscriptions

### **Styling**
1. **Utility Classes**: Prefer Tailwind utilities over custom CSS
2. **Consistent Spacing**: Use design system spacing scale
3. **Responsive**: Consider mobile-first design
4. **Brand Compliance**: Follow ENEL design guidelines

---

*For specific component implementations, see individual component files in the source code.*
