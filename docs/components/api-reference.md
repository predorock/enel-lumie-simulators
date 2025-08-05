# Component API Reference

## 📋 Component Props Documentation

This document provides a comprehensive reference for all component props, their types, default values, and usage examples.

## 🎯 Form Input Components

### **TextInput**
```typescript
interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: 'text' | 'email' | 'tel' | 'password';
  className?: string;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
}
```

**Usage Example:**
```jsx
<TextInput
  value={inputValue}
  onChange={setInputValue}
  placeholder="Enter your name"
  type="text"
  className="mb-4"
/>
```

### **SearchInput**
```typescript
interface SearchInputProps extends TextInputProps {
  onSearch?: (query: string) => void;
  showSearchIcon?: boolean;
  clearable?: boolean;
}
```

### **CustomSelect**
```typescript
interface CustomSelectProps {
  options: Array<{
    value: string;
    label: string;
    disabled?: boolean;
  }>;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  maxHeight?: string;
  error?: boolean;
}
```

**Usage Example:**
```jsx
<CustomSelect
  options={[
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' }
  ]}
  value={selectedValue}
  onChange={setSelectedValue}
  placeholder="Select an option"
  maxHeight="160px"
/>
```

### **AsyncSelect**
```typescript
interface AsyncSelectProps {
  placeholder?: string;           // Placeholder text
  label?: string;                // Field label
  stateProperty: string;         // Zustand store property name
  loadDataAction: string;        // Action name to load data
  stateSlice: string;           // State slice name (e.g., 'cityState')
  searchable?: boolean;         // Enable search functionality (default: true)
  searchPlaceholder?: string;   // Search input placeholder
  maxHeight?: string;           // Maximum dropdown height
  className?: string;           // Additional CSS classes
}
```

**Usage Examples:**
```jsx
// City selection with search
<AsyncSelect
  placeholder="Città"
  label="Città"
  stateProperty="storeCity"
  loadDataAction="loadCities"
  stateSlice="cityState"
  searchable={true}
  searchPlaceholder="Cerca città..."
  maxHeight="250px"
/>
```

**Features:**
- **Async Data Loading** - Loads data from state slice actions
- **Search Functionality** - Real-time filtering of options
- **Professional Loading States** - Custom spinners and animations
- **Error Handling** - Displays error messages and retry options
- **State Integration** - Seamless Zustand store integration
- **Large Dataset Support** - Efficient handling of 33,850+ cities
- **Enhanced UX** - Loading indicators and visual feedback

**JSON Configuration:**
```json
{
  "type": "AsyncSelect",
  "props": {
    "placeholder": "Città",
    "label": "Città",
    "stateProperty": "storeCity",
    "loadDataAction": "loadCities",
    "stateSlice": "cityState",
    "searchable": true,
    "searchPlaceholder": "Cerca città...",
    "maxHeight": "250px"
  }
}
```

**State Slice Integration:**
The AsyncSelect component integrates with dedicated state slices for domain-specific data management:

```javascript
// citySlice.js
export const createCitySlice = (set, get) => ({
  cityState: {
    cities: [],
    loading: false,
    error: null
  },
  loadCities: async () => {
    // Async data loading logic
  }
});
```

### **ToggleSwitch**
```typescript
interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  className?: string;
}
```

## 🎨 Display Components

### **RoomBanner**
```typescript
interface RoomBannerProps {
  roomSize?: number;              // Room size in square meters (default: 22)
  unit?: string;                  // Size unit (default: 'm²')
  variant?: 'info' | 'warning' | 'success' | 'error'; // Visual variant (default: 'info')
  className?: string;             // Additional CSS classes
}
```

**Usage Examples:**
```jsx
// Default banner (22 m²)
<RoomBanner />

// Custom room size
<RoomBanner roomSize={35} />

// Warning variant with custom size
<RoomBanner roomSize={40} variant="warning" />

// Success variant with additional styling
<RoomBanner 
  roomSize={18} 
  variant="success" 
  className="shadow-lg" 
/>
```

**Features:**
- **Figma-Accurate Design** - Matches original design specifications
- **Custom Room Icon** - SVG icon component for room visualization
- **Multiple Variants** - Support for different visual states
- **ENEL Design System** - Uses brand colors and typography
- **Dynamic Content** - Room size and text updates reactively

**Visual Variants:**
- `info` - Blue theme (#1f6cf9) for standard information
- `warning` - Red theme (#D3135A) for warnings
- `success` - Green theme (#10b981) for confirmations
- `error` - Red theme (#ef4444) for errors

**JSON Configuration:**
```json
{
  "type": "RoomBanner",
  "props": {
    "roomSize": 25,
    "variant": "info"
  }
}
```

### **InfoBanner**
```typescript
interface InfoBannerProps {
  title?: string;                 // Banner title
  description?: string;           // Banner description
  variant?: 'info' | 'warning' | 'success' | 'error'; // Visual variant (default: 'info')
  className?: string;             // Additional CSS classes
}
```

**Usage Examples:**
```jsx
<InfoBanner 
  title="Important Information"
  description="This is an important message for the user."
  variant="info"
/>
```

### **CostSummary**
```typescript
interface CostSummaryProps {
  containerClassName?: string;
}
```

**Features:**
- Automatically calculates costs from store data
- Reads `airconditioningQuantities` from Zustand store
- Displays installation costs, unit costs, and totals
- Uses Italian currency formatting (100,00€)

### **Image**
```typescript
interface ImageProps {
  src: string;                    // Asset key from registry
  alt: string;
  className?: string;
  containerClassName?: string;    // Wrapper div classes
  width?: number;
  height?: number;
  style?: React.CSSProperties;
}
```

**Asset Registry Keys:**
- `'italy'` - Italy map SVG
- `'enel-logo-white'` - ENEL logo
- `'mezzo-tondo'` - Decorative element
- `'condizionatore-big'` - AC unit illustration

### **InfoBanner**
```typescript
interface InfoBannerProps {
  title: string;
  description: string;
  variant?: 'info' | 'warning' | 'success' | 'error';
  className?: string;
  icon?: React.ReactNode;
}
```

### **Divider**
```typescript
interface DividerProps {
  color?: string;           // Hex color (e.g., "#c2cddd")
  spacing?: string;         // CSS spacing value (e.g., "40px")
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}
```

### **DescriptionBox**
```typescript
interface DescriptionBoxProps {
  title: string;
  description: string;
  className?: string;
}
```

## ⚙️ Configuration Components

### **SplitterQtyConfigurator**
```typescript
interface SplitterQtyConfiguratorProps {
  items: Array<{
    key: string;              // 'monosplit', 'dualsplit', 'trialsplit'
    label: string;
  }>;
  min?: number;               // Minimum quantity per item
  max?: number;               // Maximum quantity per item  
  totalMax?: number;          // Maximum total across all items
  values?: Record<string, number>;
  onChange?: (values: Record<string, number>) => void;
}
```

**Usage Example:**
```jsx
<SplitterQtyConfigurator
  items={[
    { key: 'monosplit', label: 'Monosplit' },
    { key: 'dualsplit', label: 'Dualsplit' },
    { key: 'trialsplit', label: 'Trialsplit' }
  ]}
  min={0}
  max={3}
  totalMax={3}
  values={quantities}
  onChange={setQuantities}
/>
```

### **AirConditioningConfigurator**
```typescript
interface AirConditioningConfiguratorProps {
  stateProperty?: string;     // Store property for configurations
  showOnlyWhenQuantitiesExist?: boolean;
  installationTypes: Array<{
    value: string;
    label: string;
  }>;
  roomSizes: Array<{
    value: string;
    label: string;
  }>;
}
```

**Installation Types:**
- `'nuova_con_predisposizione'` - New installation with predisposition
- `'nuova_senza_predisposizione'` - New installation without predisposition
- `'sostituzione_monosplit'` - Monosplit replacement
- `'sostituzione_dualsplit'` - Dualsplit replacement
- `'sostituzione_trialsplit'` - Trialsplit replacement

## 🏗️ Layout Components

### **PageLayout**
```typescript
interface PageLayoutProps {
  children: React.ReactNode;
  currentStep?: number;
  title?: string;
  showStepper?: boolean;
  showNavigation?: boolean;
  leftPanelComponents?: ComponentConfig[];
  onBack?: () => void;
  onNext?: () => void;
  backLabel?: string;
  nextLabel?: string;
  className?: string;
}
```

### **NavigationBar**
```typescript
interface NavigationBarProps {
  onBack?: () => void;
  onNext?: () => void;
  backLabel?: string;
  nextLabel?: string;
  disabled?: {
    back?: boolean;
    next?: boolean;
  };
}
```

### **Stepper**
```typescript
interface StepperProps {
  current: number;          // Current step (1-based)
  steps?: Array<{
    copy: string;          // Step label
  }>;
  className?: string;
}
```

## 🔧 Stateful Wrapper Components

### **StatefulInput**
```typescript
interface StatefulInputProps {
  stateProperty: string;      // Store property to bind to
  inputType: 'TextInput' | 'SearchInput';
  initialValue?: string;
  placeholder?: string;
  type?: string;
  className?: string;
}
```

**Usage in pages.json:**
```json
{
  "type": "TextInput",
  "props": {
    "placeholder": "Nome punto vendita",
    "stateProperty": "storeLocation",
    "type": "text"
  }
}
```

### **StatefulToggle**
```typescript
interface StatefulToggleProps {
  stateProperty: string;
  label?: string;
  initialValue?: boolean;
  className?: string;
}
```

### **StatefulSplitterQtyConfigurator**
```typescript
interface StatefulSplitterQtyConfiguratorProps {
  stateProperty: string;      // Store property (e.g., 'airconditioningQuantities')
  items: Array<{
    key: string;
    label: string;
  }>;
  min?: number;
  max?: number;
  totalMax?: number;
  initialValues?: Record<string, number>;
}
```

## 📋 Configuration Types

### **ComponentConfig**
```typescript
interface ComponentConfig {
  type: string;               // Component type from registry
  props?: Record<string, any>; // Component-specific props
  renderConditions?: {
    hasQuantities?: string;   // State property with quantities
    hasValues?: string[];     // Array of required state properties
    equals?: {                // Exact value match
      property: string;
      value: any;
    };
    custom?: (formData: any, state: any) => boolean;
  };
}
```

### **PageConfig**
```typescript
interface PageConfig {
  id: string;                 // Unique page identifier
  title: string;             // Page title
  step: number;              // Step number (1-based)
  leftPanelComponents: ComponentConfig[];
  components: ComponentConfig[];
}
```

### **RenderConditions**
```typescript
interface RenderConditions {
  hasQuantities?: string;     // Check if quantities > 0
  hasValues?: string[];       // Check if values are non-empty
  equals?: {                  // Check exact value match
    property: string;
    value: any;
  };
  custom?: (formData: any, state: any) => boolean;
}
```

## 🎯 Store Types

### **AppState**
```typescript
interface AppState {
  // Navigation
  currentStep: number;
  totalSteps: number;
  
  // Configuration
  steps: StepConfig[];
  
  // Form Data
  formData: {
    // Store Information
    storeLocation: string;
    consultantName: string;
    storePhone: string;
    
    // AC Configuration
    airconditioningQuantities: Record<string, number>;
    airConditioningConfigs: Record<string, AirConditioningConfig>;
    
    // Extensible for additional form fields
    [key: string]: any;
  };
  
  // Actions
  setCurrentStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  resetSteps: () => void;
  
  setFormValue: (property: string, value: any) => void;
  getFormValue: (property: string) => any;
  clearFormData: () => void;
  
  // Helpers
  isFirstStep: () => boolean;
  isLastStep: () => boolean;
  canGoNext: () => boolean;
  canGoPrev: () => boolean;
  
  getCurrentPage: () => PageConfig | undefined;
  getPageById: (id: string) => PageConfig | undefined;
  getAllPages: () => PageConfig[];
  
  shouldRenderComponent: (conditions?: RenderConditions) => boolean;
}
```

### **AirConditioningConfig**
```typescript
interface AirConditioningConfig {
  installationType: string;   // Installation type value
  roomSize: string;          // Room size value
  unitType: 'monosplit' | 'dualsplit' | 'trialsplit';
  index: number;             // Unit index for this type
}
```

## 🎨 Icon Component Types

### **AirConditioningIcons**
```typescript
interface IconProps {
  className?: string;
  size?: number;
  color?: string;
}

// Available Icons
MonosplitIcon: React.FC<IconProps>;
DualsplitIcon: React.FC<IconProps>;
TrialsplitIcon: React.FC<IconProps>;
AirConditioningIcon: React.FC<IconProps & { 
  type: 'monosplit' | 'dualsplit' | 'trialsplit' 
}>;
```

### **InfoIcon**
```typescript
interface InfoIconProps {
  variant?: 'default' | 'blue';
  className?: string;
}
```

## 🔄 Component Registry Type

### **ComponentRegistry**
```typescript
interface ComponentRegistry {
  [componentType: string]: (props: any) => React.ReactElement;
}

// Example Registry
const componentRegistry: ComponentRegistry = {
  TextInput: (props) => <StatefulInput inputType="TextInput" {...props} />,
  Toggle: (props) => <StatefulToggle {...props} />,
  CostSummary: (props) => <CostSummary {...props} />,
  // ... more components
};
```

## ✅ Type Safety Guidelines

### **PropTypes Validation**
```jsx
import PropTypes from 'prop-types';

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'tel', 'password']),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
};

TextInput.defaultProps = {
  type: 'text',
  className: '',
  disabled: false,
  error: false,
};
```

### **TypeScript Integration**
For full type safety, consider migrating to TypeScript and using the interfaces provided above.

---

*This API reference provides complete prop documentation for all components in the ENEL Lumiè Clima application.*
