# State Slice Architecture Documentation

## Overview

The application has been refactored to use a **slice-based state architecture** for better organization, maintainability, and separation of concerns. This approach groups related state and actions into dedicated slices that can be composed into the main store.

## Architecture Benefits

### ✅ **Domain Separation**
- Related state and actions are grouped together
- Clear boundaries between different data domains
- Easier to reason about specific functionality

### ✅ **Maintainability**  
- Each slice can be developed and tested independently
- Reduced coupling between different parts of the state
- Easier to add new features without affecting existing code

### ✅ **Reusability**
- Slices can be easily reused across different stores
- Consistent patterns for similar data types
- Standardized action and selector patterns

### ✅ **Performance**
- Selective subscriptions to specific slices
- Reduced re-renders for unrelated state changes
- Better optimization opportunities

## Current Implementation

### Slice Structure

```
src/store/
├── useAppStore.js          # Main store composition
├── slices/
│   └── citySlice.js        # City-related state and actions
└── selectors/              # (Future: dedicated selectors)
    └── citySelectors.js
```

## City Slice Implementation

### State Structure
```javascript
cityState: {
  cities: [],              // Array of city options
  loading: false,          // Loading state for async operations
  error: null,            // Error message if loading fails
  lastLoadTime: null      // Timestamp of last successful load
}
```

### Available Actions

#### **Core Actions**
```javascript
// Set partial state updates
setCityState(updates)

// Load cities from API
loadCities()

// Get cities with auto-loading
getCities()

// Clear cached cities
clearCitiesCache()

// Force refresh cities
refreshCities()
```

#### **Helper Actions**
```javascript
// Get city by value
getCityByValue(value)

// Search cities by term
searchCities(searchTerm) 

// Get current city state
getCityState()

// Check if cities are loaded
areCitiesLoaded()
```

### Usage Examples

#### **In Components**
```jsx
import useAppStore from '../store/useAppStore';

const MyComponent = () => {
  const store = useAppStore();
  
  // Access city state
  const { cities, loading, error } = store.cityState;
  
  // Use city actions
  const loadCities = store.loadCities;
  const searchResults = store.searchCities('Milano');
  const milanCity = store.getCityByValue('Milano');
  
  // ...component logic
};
```

#### **In AsyncSelect Component**
```jsx
// Get data from slice
const stateSliceData = store[stateSlice] || {};
const options = stateSliceData.cities || [];
const isLoading = stateSliceData.loading || false;
const error = stateSliceData.error || null;
```

## Store Composition

### Main Store Integration
```javascript
// useAppStore.js
import { createCitySlice } from './slices/citySlice';

const useAppStore = create(
  devtools(
    (set, get) => ({
      // Form data state
      formData: {},
      
      // City slice integration
      ...createCitySlice(set, get),
      
      // Other store functionality...
    })
  )
);
```

### Slice Factory Pattern
```javascript
// citySlice.js
export const createCitySlice = (set, get) => ({
  cityState: initialCityState,
  
  // Actions that use set and get from parent store
  setCityState: (updates) => set((state) => ({
    cityState: { ...state.cityState, ...updates }
  })),
  
  loadCities: async () => {
    // Async action implementation
  },
  
  // ...other actions
});
```

## Extension Pattern

### Adding New Slices

#### 1. Create Slice File
```javascript
// src/store/slices/newSlice.js
export const initialNewState = {
  data: [],
  loading: false,
  error: null
};

export const createNewSlice = (set, get) => ({
  newState: initialNewState,
  
  setNewState: (updates) => set((state) => ({
    newState: { ...state.newState, ...updates }
  })),
  
  loadNewData: async () => {
    // Implementation
  }
});

export const newSelectors = {
  getData: (state) => state.newState.data,
  isLoading: (state) => state.newState.loading,
  getError: (state) => state.newState.error
};
```

#### 2. Integrate in Main Store
```javascript
// useAppStore.js
import { createNewSlice } from './slices/newSlice';

const useAppStore = create(
  devtools(
    (set, get) => ({
      // Existing state...
      
      // New slice integration
      ...createNewSlice(set, get),
      
      // Other functionality...
    })
  )
);
```

#### 3. Use in Components
```javascript
const MyComponent = () => {
  const store = useAppStore();
  const { data, loading, error } = store.newState;
  
  useEffect(() => {
    store.loadNewData();
  }, []);
  
  // Component implementation...
};
```

## Best Practices

### ✅ **Slice Design Guidelines**

1. **Single Responsibility**: Each slice should handle one domain
2. **State Shape**: Keep state flat and normalized when possible
3. **Action Naming**: Use consistent naming conventions (`load`, `set`, `clear`, etc.)
4. **Error Handling**: Always include error states and handling
5. **Loading States**: Provide loading indicators for async operations

### ✅ **Action Design Patterns**

```javascript
// ✅ GOOD: Specific action name
setCityState: (updates) => { /* implementation */ }

// ❌ BAD: Generic action name  
setState: (updates) => { /* implementation */ }

// ✅ GOOD: Async with proper error handling
loadCities: async () => {
  try {
    set({ cityState: { ...state, loading: true } });
    const data = await api.getCities();
    set({ cityState: { ...state, cities: data, loading: false } });
  } catch (error) {
    set({ cityState: { ...state, error: error.message, loading: false } });
  }
}
```

### ✅ **Component Integration**

```javascript
// ✅ GOOD: Use specific slice data
const { cities, loading } = store.cityState;

// ❌ BAD: Access entire store
const store = useAppStore();
// Then accessing store.cities, store.loading everywhere
```

## Migration Guide

### From Flat State to Slices

#### Before (Flat State)
```javascript
const store = create((set, get) => ({
  cities: [],
  citiesLoading: false,
  citiesError: null,
  
  loadCities: async () => {
    set({ citiesLoading: true });
    // ... implementation
  }
}));
```

#### After (Slice-Based)
```javascript
// citySlice.js
export const createCitySlice = (set, get) => ({
  cityState: {
    cities: [],
    loading: false,
    error: null
  },
  
  setCityState: (updates) => set((state) => ({
    cityState: { ...state.cityState, ...updates }
  })),
  
  loadCities: async () => {
    get().setCityState({ loading: true });
    // ... implementation
  }
});

// useAppStore.js
const store = create((set, get) => ({
  formData: {},
  ...createCitySlice(set, get)
}));
```

## Future Enhancements

### Planned Improvements

1. **Selector Libraries**: Dedicated selector functions for computed state
2. **Persistence**: Slice-specific persistence configuration
3. **Middleware**: Slice-specific middleware (logging, analytics)
4. **Type Safety**: TypeScript definitions for each slice
5. **Testing**: Isolated testing utilities for each slice

### Additional Slices

Potential future slices based on application needs:

- **Product Slice**: Air conditioning products and specifications
- **Configuration Slice**: User selections and configurations  
- **Pricing Slice**: Pricing calculations and rules
- **User Slice**: User preferences and settings
- **API Slice**: General API state management

## Development Workflow

### When Adding New Features

1. **Identify Domain**: Determine if feature belongs to existing slice or needs new one
2. **Design State**: Plan state shape and required actions
3. **Create/Update Slice**: Implement slice with proper patterns
4. **Integrate**: Add slice to main store
5. **Test**: Verify slice works independently and with existing functionality
6. **Document**: Update documentation with new slice information

### When Modifying Existing Slices

1. **Review Current State**: Understand existing slice structure
2. **Plan Changes**: Ensure changes don't break existing usage
3. **Update Actions**: Modify or add actions as needed
4. **Update Components**: Adjust components using the slice
5. **Test Integration**: Verify all dependent components work correctly

---

*This slice-based architecture provides a scalable foundation for managing complex application state while maintaining clear separation of concerns and excellent developer experience.*
