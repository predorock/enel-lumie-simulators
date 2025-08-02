# AirConditioningConfigurator Component

## Overview
The `AirConditioningConfigurator` component is a reusable component that provides configuration options for air conditioning units. It appears conditionally based on quantities selected in the `SplitterQtyConfigurator` and uses a custom dropdown design based on Figma specifications.

## Features

### 1. **Conditional Rendering**
- Only appears when air conditioning quantities are selected
- Uses the new `renderConditions` system to show/hide based on state
- Automatically generates configuration rows based on selected quantities

### 2. **Dynamic Configuration Generation**
- Creates configuration rows for each selected air conditioning unit
- Supports Monosplit, Dualsplit, and Trialsplit types
- Each unit gets individual configuration options

### 3. **Custom Select Component**
- **CustomSelect**: Styled dropdown component matching Figma design
- Scrollable options list with max height
- Selected items highlighted in purple (#5738ff) with checkmark
- Hover states and smooth transitions
- Click outside to close functionality

### 4. **Configuration Options**
- **Installation Types**: Configurable via pages.json props
  - Nuova installazione con predisposizione
  - Nuova installazione senza predisposizione  
  - Sostituzione monosplit/dualsplit/trialsplit
- **Room Sizes**: Configurable via pages.json props
  - 10-20m², 20-30m², 30-40m², 40-50m², 50-60m², 60+m²

### 5. **State Management**
- Stores configurations in the Zustand store under a configurable state property
- Default state property: `airConditioningConfigs`
- Configuration keys follow pattern: `{type}_{index}` (e.g., "monosplit_0", "dualsplit_1")

## Implementation Details

### Component Registry
```jsx
AirConditioningConfigurator: (props) => <StatefulAirConditioningConfigurator {...props} />
```

### Page Configuration
```json
{
    "type": "AirConditioningConfigurator",
    "props": {
        "stateProperty": "airConditioningConfigs",
        "showOnlyWhenQuantitiesExist": true,
        "installationTypes": [
            { "value": "nuova_con_predisposizione", "label": "Nuova installazione con predisposizione" },
            { "value": "nuova_senza_predisposizione", "label": "Nuova installazione senza predisposizione" },
            { "value": "sostituzione_monosplit", "label": "Sostituzione monosplit" },
            { "value": "sostituzione_dualsplit", "label": "Sostituzione dualsplit" },
            { "value": "sostituzione_trialsplit", "label": "Sostituzione trialsplit" }
        ],
        "roomSizes": [
            { "value": "10-20", "label": "10-20 m²" },
            { "value": "20-30", "label": "20-30 m²" },
            { "value": "30-40", "label": "30-40 m²" },
            { "value": "40-50", "label": "40-50 m²" },
            { "value": "50-60", "label": "50-60 m²" },
            { "value": "60+", "label": "60+ m²" }
        ]
    },
    "renderConditions": {
        "hasQuantities": "airconditioningQuantities"
    }
}
```

### Enhanced Store Features
New `shouldRenderComponent(conditions)` helper supports:
- `hasValues`: Check if properties have any values
- `hasQuantities`: Check if quantity objects have values > 0
- `equals`: Check if property equals specific value
- `custom`: Custom function evaluation

## Custom Components

### CustomSelect
- **Features**: Custom dropdown with Figma-accurate design
- **Props**: `options`, `value`, `onChange`, `placeholder`, `className`, `maxHeight`
- **Styling**: Matches ENEL design system with proper colors and typography
- **Interactions**: Click to open/close, hover states, keyboard accessible

### AirConditioningIcons
- **MonosplitIcon**: SVG icon for single split units
- **DualsplitIcon**: SVG icon for dual split units  
- **TrialsplitIcon**: SVG icon for trial split units
- **AirConditioningIcon**: Generic wrapper that selects appropriate icon based on type

## Usage Example

The component automatically:
1. Reads quantities from `airconditioningQuantities` state
2. Generates configuration rows for each selected unit
3. Only shows when quantities exist (if `showOnlyWhenQuantitiesExist: true`)
4. Uses dropdown options from pages.json configuration
5. Stores configurations in the specified state property

## Design System Compliance

- Uses ENEL color palette (#002466, #D3135A, #667790, #131416, #f7f8fb, #c2cddd, #5738ff)
- Follows Roobert font family conventions
- Custom dropdown design matches Figma specifications exactly
- Selected state highlights in purple with checkmark icon
- Responsive design with proper spacing and layout
- Smooth transitions and hover effects

## Testing

To test the component:
1. Navigate to step 2 in the application
2. Select quantities in the `SplitterQtyConfigurator`
3. The `AirConditioningConfigurator` should appear below
4. Each selected unit should have custom dropdown selectors
5. Click dropdowns to see scrollable option lists with selection states
6. Changes should be saved to the store under `airConditioningConfigs`

## Integration Points

- **SplitterQtyConfigurator**: Source of quantity data
- **Zustand Store**: State management and conditional rendering
- **PageRenderer**: Dynamic component rendering with conditions
- **ComponentRegistry**: Component type mapping
- **CustomSelect**: Reusable dropdown component for form inputs
- **AirConditioningIcons**: SVG icon components matching design
