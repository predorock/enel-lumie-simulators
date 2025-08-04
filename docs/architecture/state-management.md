# State Management Documentation

## 🎯 Zustand Store Architecture

The application uses **Zustand** for centralized state management with a clean, predictable structure.

## 🏗️ Store Structure

### **Core State Properties**
```javascript
{
  // Navigation State
  currentStep: 1,           // Current step in the wizard (1-3)
  totalSteps: 3,           // Total number of steps
  
  // Configuration
  steps: [...],            // Step labels from steps.json
  
  // Form Data (Persistent)
  formData: {
    // Step 1: Store Information
    storeLocation: "",
    consultantName: "",
    storePhone: "",
    
    // Step 2: Air Conditioning Configuration  
    airconditioningQuantities: {
      monosplit: 0,
      dualsplit: 0,
      trialsplit: 0
    },
    airConditioningConfigs: {
      // Dynamic keys like "monosplit_0", "dualsplit_1"
    }
  }
}
```

### **Action Methods**
```javascript
{
  // Navigation Actions
  setCurrentStep: (step) => void,
  nextStep: () => void,
  prevStep: () => void,
  resetSteps: () => void,
  
  // Form Data Actions  
  setFormValue: (property, value) => void,
  getFormValue: (property) => string,
  clearFormData: () => void,
  
  // Helper Methods
  isFirstStep: () => boolean,
  isLastStep: () => boolean,
  canGoNext: () => boolean,
  canGoPrev: () => boolean,
  
  // Page Helpers
  getCurrentPage: () => object,
  getPageById: (id) => object,
  
  // Conditional Rendering
  shouldRenderComponent: (conditions) => boolean
}
```

## 🔄 State Flow Patterns

### **Form Data Management**
```javascript
// Setting values
const setFormValue = useAppStore(state => state.setFormValue);
setFormValue('storeLocation', 'Milano Centro');

// Reading values  
const { formData } = useAppStore();
const storeLocation = formData.storeLocation || '';

// Reactive updates
const storeLocation = useAppStore(state => state.formData.storeLocation || '');
```

### **Step Navigation**
```javascript
// Navigation controls
const { currentStep, nextStep, prevStep, canGoNext, canGoPrev } = useAppStore();

// Step validation before navigation
if (canGoNext()) {
  nextStep();
}

// Direct step setting
setCurrentStep(2);
```

### **Conditional Rendering Logic**
```javascript
// Check if component should render
const shouldRender = useAppStore(state => 
  state.shouldRenderComponent({
    hasQuantities: 'airconditioningQuantities'
  })
);

// Multiple conditions
const shouldRender = useAppStore(state => 
  state.shouldRenderComponent({
    hasValues: ['storeLocation', 'consultantName'],
    hasQuantities: 'airconditioningQuantities'
  })
);
```

## 🎯 Store Integration Patterns

### **Stateful Component Pattern**
```javascript
const StatefulInput = ({ stateProperty, ...props }) => {
  const store = useAppStore();
  
  // Read current value
  const value = store.formData[stateProperty] || '';
  
  // Create update handler
  const handleChange = useCallback((newValue) => {
    store.setFormValue(stateProperty, newValue);
  }, [stateProperty, store.setFormValue]);
  
  return (
    <TextInput
      value={value}
      onChange={handleChange}
      {...props}
    />
  );
};
```

### **Selective Subscription Pattern**
```javascript
// Subscribe to specific state slice for performance
const currentStep = useAppStore(state => state.currentStep);
const storeLocation = useAppStore(state => state.formData.storeLocation);

// Avoid subscribing to entire store
const store = useAppStore(); // Re-renders on any state change
```

## 🎨 Conditional Rendering System

### **Supported Condition Types**

#### **`hasQuantities`**
```javascript
// Check if quantity object has values > 0
{
  "renderConditions": {
    "hasQuantities": "airconditioningQuantities"
  }
}

// Implementation
const quantities = formData[conditions.hasQuantities] || {};
return Object.values(quantities).some(qty => qty > 0);
```

#### **`hasValues`**
```javascript
// Check if properties have non-empty values
{
  "renderConditions": {
    "hasValues": ["storeLocation", "consultantName"]
  }
}

// Implementation
return conditions.hasValues.some(property => {
  const value = formData[property];
  return value !== undefined && value !== null && value !== '';
});
```

#### **`equals`**
```javascript
// Check if property equals specific value
{
  "renderConditions": {
    "equals": { "property": "currentStep", "value": 2 }
  }
}

// Implementation
return formData[conditions.equals.property] === conditions.equals.value;
```

#### **`custom`**
```javascript
// Custom validation function
{
  "renderConditions": {
    "custom": (formData, state) => {
      // Custom logic here
      return someCondition;
    }
  }
}
```

## 🔧 Store Extension Guide

### **Adding New State Properties**
```javascript
// 1. Add to initial state
const useAppStore = create(
  devtools(
    (set, get) => ({
      formData: {
        // ... existing properties
        newProperty: '', // Add new property
      },
      
      // 2. Add computed properties if needed
      getNewPropertyStatus: () => {
        const { formData } = get();
        return formData.newProperty ? 'completed' : 'pending';
      }
    })
  )
);
```

### **Adding New Action Methods**
```javascript
// Add new actions
setNewProperty: (value) => set((state) => ({
  formData: {
    ...state.formData,
    newProperty: value
  }
})),

// Complex actions with validation
updateQuantities: (quantities) => set((state) => {
  // Validation logic
  const validatedQuantities = validateQuantities(quantities);
  
  return {
    formData: {
      ...state.formData,
      airconditioningQuantities: validatedQuantities
    }
  };
}),
```

### **Adding New Conditional Logic**
```javascript
shouldRenderComponent: (conditions) => {
  if (!conditions) return true;
  
  const state = get();
  const formData = state.formData;
  
  // Add new condition type
  if (conditions.hasMinimumQuantity) {
    const quantities = formData[conditions.hasMinimumQuantity] || {};
    const total = Object.values(quantities).reduce((sum, qty) => sum + qty, 0);
    return total >= conditions.minimumValue;
  }
  
  // ... existing conditions
  return true;
}
```

## 📊 State Debugging

### **Redux DevTools Integration**
```javascript
// Store is configured with devtools
const useAppStore = create(
  devtools(
    (set, get) => ({ ... }),
    {
      name: 'enel-clima-store', // DevTools name
    }
  )
);
```

### **Debugging Patterns**
```javascript
// Log state changes
const debugState = useAppStore(state => {
  console.log('Current state:', state);
  return state;
});

// Track specific value changes
const quantity = useAppStore(state => {
  const qty = state.formData.airconditioningQuantities;
  console.log('Quantities changed:', qty);
  return qty;
});
```

## 🚀 Performance Optimization

### **Selective Subscriptions**
```javascript
// ✅ GOOD: Subscribe to specific values
const currentStep = useAppStore(state => state.currentStep);
const storeLocation = useAppStore(state => state.formData.storeLocation);

// ❌ BAD: Subscribe to entire store
const store = useAppStore();
```

### **Memoized Selectors**
```javascript
// Create memoized selectors for computed values
const selectTotalQuantities = useMemo(() => 
  useAppStore(state => {
    const quantities = state.formData.airconditioningQuantities || {};
    return Object.values(quantities).reduce((sum, qty) => sum + qty, 0);
  }), []
);
```

### **Batched Updates**
```javascript
// Batch multiple updates
const updateMultipleValues = (updates) => set((state) => ({
  formData: {
    ...state.formData,
    ...updates // Apply all updates at once
  }
}));
```

## 🎯 Best Practices

### **State Organization**
1. **Group Related Data**: Keep related form fields together
2. **Flat Structure**: Avoid deep nesting when possible
3. **Consistent Naming**: Use descriptive, consistent property names
4. **Default Values**: Always provide sensible defaults

### **Action Design**
1. **Single Responsibility**: Each action has one clear purpose
2. **Validation**: Validate data before setting state
3. **Immutability**: Always return new objects, don't mutate
4. **Error Handling**: Handle edge cases gracefully

### **Component Integration**
1. **Minimal Subscriptions**: Subscribe only to needed data
2. **Callback Stability**: Use useCallback for event handlers
3. **Derived State**: Calculate computed values in components
4. **Cleanup**: Clear state when appropriate

---

*This state management system provides a robust foundation for the application's data flow and component reactivity.*
