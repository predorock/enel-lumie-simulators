# AsyncSelect Component Documentation

## Overview

The `AsyncSelect` component is a sophisticated dropdown selection component that loads its options asynchronously from external data sources. It's designed to handle large datasets (like city lists) efficiently with search functionality and loading states.

## Architecture

### Components Involved
- **AsyncSelect** (`/src/components/ui/AsyncSelect.jsx`): Pure UI component
- **StatefulAsyncSelect** (`/src/components/StatefulAsyncSelect.jsx`): Stateful wrapper
- **ComponentRegistry**: Registered as `AsyncSelect`
- **Store Actions**: Async data loading in `useAppStore.js`

## Features

### ✅ **Async Data Loading**
- Loads data on demand when dropdown is opened
- Caches loaded data to prevent unnecessary API calls
- Loading states with spinner indicators
- Error handling with user-friendly messages

### ✅ **Search Functionality**
- Real-time search filtering
- Searches both labels and values
- Customizable search placeholder
- Auto-focus on search input when dropdown opens

### ✅ **ENEL Design System Compliance**
- Uses Roobert font family
- ENEL color palette (`#002466`, `#667790`, `#5738ff`)
- Consistent sizing (`h-10` standard height)
- Proper floating label pattern

### ✅ **User Experience**
- Click outside to close
- Keyboard navigation ready
- Visual selected state indicators
- Smooth animations and transitions

## Implementation

### Store Integration

```javascript
// In useAppStore.js
cities: [],
citiesLoading: false,
citiesError: null,

loadCities: async () => {
  // Prevents duplicate API calls
  if (state.cities.length > 0 || state.citiesLoading) return;
  
  set({ citiesLoading: true, citiesError: null });
  
  try {
    const response = await fetch('/comuni.json');
    const cittaData = await response.json();
    
    // Transform to select options format
    const cityOptions = cittaData.map(city => ({
      value: city.comune,
      label: `${city.comune} (${city.cap})`
    }));
    
    set({ cities: cityOptions, citiesLoading: false });
  } catch (error) {
    set({ citiesError: error.message, citiesLoading: false });
  }
}
```

### Component Props

```jsx
<AsyncSelect
  value=""                              // Current selected value
  onChange={handleChange}               // Change handler
  placeholder="Select an option"       // Placeholder text
  label="Label"                        // Floating label
  className=""                         // Additional CSS classes
  maxHeight="200px"                    // Max dropdown height
  loadDataAction="loadCities"          // Store action to load data
  dataSelector="cities"                // Store data property
  searchable={true}                    // Enable search
  searchPlaceholder="Search..."        // Search input placeholder
/>
```

### JSON Configuration

```json
{
  "type": "AsyncSelect",
  "props": {
    "placeholder": "Città",
    "label": "Città", 
    "stateProperty": "storeCity",
    "loadDataAction": "loadCities",
    "dataSelector": "cities",
    "searchable": true,
    "searchPlaceholder": "Cerca città...",
    "maxHeight": "250px"
  }
}
```

## Data Format

### Expected API Response Format
```json
[
  {
    "comune": "Milano",
    "cap": "20100"
  },
  {
    "comune": "Roma", 
    "cap": "00100"
  }
]
```

### Transformed Select Options
```javascript
[
  {
    "value": "Milano",
    "label": "Milano (20100)"
  },
  {
    "value": "Roma",
    "label": "Roma (00100)"
  }
]
```

## Extension Pattern

### Adding New Async Data Sources

#### 1. Add Store State
```javascript
// Add to useAppStore.js
newDataset: [],
newDatasetLoading: false,
newDatasetError: null,
```

#### 2. Add Store Action
```javascript
loadNewDataset: async () => {
  if (state.newDataset.length > 0 || state.newDatasetLoading) return;
  
  set({ newDatasetLoading: true, newDatasetError: null });
  
  try {
    const response = await fetch('/api/new-dataset');
    const data = await response.json();
    
    const options = data.map(item => ({
      value: item.id,
      label: item.name
    }));
    
    set({ newDataset: options, newDatasetLoading: false });
  } catch (error) {
    set({ newDatasetError: error.message, newDatasetLoading: false });
  }
}
```

#### 3. Use in Component
```json
{
  "type": "AsyncSelect",
  "props": {
    "loadDataAction": "loadNewDataset",
    "dataSelector": "newDataset",
    "placeholder": "Select item"
  }
}
```

## Performance Considerations

### ✅ **Optimizations Implemented**
- **Data Caching**: Loaded data is cached in store
- **Lazy Loading**: Data loads only when needed (dropdown opens)
- **Search Debouncing**: Real-time search with efficient filtering
- **Virtual Scrolling Ready**: Dropdown height limits with scroll

### ✅ **Memory Management**
- Options are stored once in global store
- Components reference same data instance
- No memory leaks from event listeners (proper cleanup)

## Testing Scenarios

### 1. **Initial Load**
- [ ] Dropdown shows loading spinner
- [ ] API call is made when opened first time
- [ ] Loading state updates correctly

### 2. **Data Display**
- [ ] Options render with correct labels
- [ ] Selected state shows properly
- [ ] Search filtering works

### 3. **Error Handling**
- [ ] Network errors show user message
- [ ] Component remains functional after errors
- [ ] Retry mechanism available

### 4. **User Interaction**
- [ ] Click outside closes dropdown
- [ ] Search input gets focus
- [ ] Selection updates form state

## Troubleshooting

### Common Issues

#### **Data Not Loading**
```javascript
// Check if API endpoint is accessible
await fetch('/comuni.json') // Should return 200

// Verify store action is called
console.log('Loading cities...', loadCities);

// Check store state
console.log(store.cities, store.citiesLoading, store.citiesError);
```

#### **Search Not Working**
```javascript
// Verify searchable prop is true
<AsyncSelect searchable={true} />

// Check data format has label and value
options.forEach(opt => console.log(opt.label, opt.value));
```

#### **Selection Not Persisting**
```javascript
// Verify stateProperty is correct
stateProperty="storeCity"

// Check store integration
const value = store.formData.storeCity;
```

## Future Enhancements

### Planned Features
1. **Multi-select Support**: Select multiple options
2. **Server-side Search**: Search on backend API
3. **Infinite Scroll**: Load large datasets progressively  
4. **Keyboard Navigation**: Full a11y keyboard support
5. **Custom Templates**: Customizable option rendering

### Integration Opportunities
- **Geolocation**: Auto-detect user city
- **Favorites**: Remember recently selected cities
- **Localization**: Multi-language city names
- **API Integration**: Real-time data updates

---

*The AsyncSelect component provides a robust foundation for handling large datasets with excellent user experience and performance characteristics.*
