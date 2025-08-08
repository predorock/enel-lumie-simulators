# Products System Implementation

This document describes the implementation of the products system for the ENEL Lumiè Verticale Clima application.

## 🏗️ Architecture

### Store Integration
- **Products Slice**: `src/store/slices/productsSlice.js`
- **Main Store**: Updated `useAppStore.js` to include products functionality
- **Mock Data**: Uses existing `src/assets/mocks/products.response.json`

### Components
- **AcProductDisplayContainer**: Main container component for displaying products
- **ACFeaturesDisplay**: Updated with product data support and selection handling
- **StatefulAcProductDisplayContainer**: Stateful wrapper integrated with global store

## 🔧 Implementation Details

### Products Store Slice
```javascript
// Key features:
- fetchProducts(): Async product fetching with loading states
- setSelectedBrand(): Brand filtering functionality  
- getFilteredProducts(): Returns filtered products based on selected brand
- getAvailableBrands(): Returns unique brands from products
- Feature mapping from API keys to display names
```

### Feature Mapping
API feature keys are mapped to user-friendly display names, and ALL features are displayed with their enabled/disabled state:
```javascript
const FEATURE_MAPPING = {
  Led: "Schermo LED",
  Wifi: "Connettività Wi-Fi", 
  Voice: "Voice control",
  RispEn: "Funzione risparmio energetico",
  ProgGiorn: "Programmazione timer giornaliera",
  ProgSett: "Programmazione timer settimanale",
  Sleep: "Funzionalità Sleep",
  Turbo: "Funzionalità Turbo",
  Muffa: "Anti muffa, anti batteri, anti polvere, anti allergeni",
  Ionizzazione: "Ionizzatore",
  Autodiagnosi: "Autodiagnosi (Funzione Smart Diagnosis)"
};

// Features are transformed to objects with enabled state
const transformedFeature = {
  key: "Led",
  name: "Schermo LED", 
  enabled: true // or false
};
```

## 🎯 Usage

### Basic Usage
```jsx
import AcProductDisplayContainer from './components/ui/AcProductDisplayContainer';

<AcProductDisplayContainer
  showLoadingStates={true}
  maxProducts={6}
/>
```

### Via Component Registry (JSON Configuration)
```json
{
  "type": "AcProductDisplayContainer",
  "props": {
    "showLoadingStates": true,
    "maxProducts": 6,
    "gridClassName": "grid grid-cols-1 md:grid-cols-2 gap-6"
  }
}
```

### Stateful Integration
```jsx
// Automatically integrated with global store
<StatefulAcProductDisplayContainer
  stateProperty="selectedProducts"
  autoFetch={true}
/>
```

## 📊 Props API

### AcProductDisplayContainer
```typescript
interface AcProductDisplayContainerProps {
  showLoadingStates?: boolean;         // Show loading/error states (default: true)
  maxProducts?: number | null;         // Limit displayed products
  className?: string;                  // Container CSS classes
  gridClassName?: string;              // Grid layout CSS classes
  onProductSelectionChange?: function; // Product selection callback
  selectedProducts?: string[];         // Externally controlled selection
}
```

### Enhanced ACFeaturesDisplay
```typescript
// New props added:
interface ACFeaturesDisplayProps {
  // ... existing props
  onCheckboxChange?: (selected: boolean) => void;
  isSelected?: boolean;
  onDetailsClick?: () => void;
}
```

## 🔄 Data Flow

1. **Initialization**: `fetchProducts()` called on component mount
2. **Data Transform**: API products transformed to display format
3. **Display**: Products rendered using ACFeaturesDisplay components
4. **Selection**: User selections managed through callbacks
5. **State Sync**: Selections synced with global store (stateful version)

## 🎨 Features

### Loading States
- Loading spinner with skeleton placeholders
- Error handling with retry functionality
- Empty state messaging

### Feature Display System
- **All Features Shown**: Both enabled and disabled features are displayed
- **Visual Differentiation**: 
  - Enabled features: Blue checkmark icon, normal text
  - Disabled features: Gray X icon, grayed text with strikethrough
- **Fixed Feature List**: Consistent 11 features across all products
- **Dynamic State**: Feature states loaded from API product data

### Product Selection
- Checkbox selection with visual feedback
- Multiple product selection support
- Selection count display

### Responsive Design
- Configurable grid layouts
- Mobile-first responsive design
- Flexible container sizing

## 🧪 Testing

### Demo Components
- `AcProductDisplayContainerDemo.jsx`: Comprehensive demo with various configurations
- `ACFeaturesDisplayDemo.jsx`: Updated with new product props

### Test Data Integration
Updated `testData.js` at line 123 to use the new product display system.

## 🎯 Integration Points

### Component Registry
Both components are registered for JSON configuration:
- `AcProductDisplayContainer`: Direct UI component
- `AcProductDisplayContainer` (via registry): Stateful wrapper

### Store Integration
- Products slice integrated into main Zustand store
- Automatic state management for selections
- Form data integration for persistence

### Existing Components
- **BrandSelector**: Reused for brand filtering
- **InfoBanner**: Used for loading/error states
- **ACFeaturesDisplay**: Enhanced for product display

## 📈 Performance

### Optimization Features
- Lazy loading of product data
- Efficient filtering algorithms  
- Memoized component renders
- Selective re-renders on state changes

### Memory Management
- Cleanup of event listeners
- Proper dependency arrays in useEffect
- Minimal re-renders through selective subscriptions

---

*The products system provides a complete solution for displaying, filtering, and selecting AC products while maintaining consistency with the existing ENEL design system and architecture patterns.*
