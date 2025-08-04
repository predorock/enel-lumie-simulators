# InfoIcon Registry System

## Overview

The InfoIcon Registry System provides a centralized way to manage InfoIcon popover content across the application. Instead of defining popover content inline, all InfoIcon configurations are stored in a single registry file, making them easier to maintain, reuse, and localize.

## Architecture

### Registry File: `/src/config/infoIconRegistry.jsx`

The registry exports:
- `infoIconRegistry`: Object containing all InfoIcon configurations
- `getInfoIconConfig(key)`: Function to retrieve configuration by key
- `getAvailableInfoIconKeys()`: Function to list all available keys

### Registry Structure

Each registry entry contains:

```jsx
{
  variant: "info" | "warning",           // Icon variant
  popoverPosition: "top" | "bottom" | "left" | "right", // Popover position
  popoverClassName: "string",            // Custom CSS classes
  content: JSX.Element | string,         // Popover content (JSX or string)
  disabled: boolean,                     // Optional: disable popover
  onClick: function                      // Optional: custom click handler
}
```

## Usage in Components

### 1. Import the Registry Function

```jsx
import { getInfoIconConfig } from '../../config/infoIconRegistry';
```

### 2. Accept InfoIcon Key as Prop

```jsx
const MyComponent = ({ infoIconKey = null }) => {
  const infoIconConfig = infoIconKey ? getInfoIconConfig(infoIconKey) : null;
  // ...
}
```

### 3. Render InfoIcon Conditionally

```jsx
{infoIconConfig && (
  <InfoIcon 
    variant={infoIconConfig.variant || 'info'}
    popoverContent={infoIconConfig.content}
    popoverPosition={infoIconConfig.popoverPosition || 'top'}
    popoverClassName={infoIconConfig.popoverClassName || ''}
    disabled={infoIconConfig.disabled || false}
    onClick={infoIconConfig.onClick || null}
  />
)}
```

## Configuration in pages.json

Components using InfoIcon registry are configured in `pages.json`:

```json
{
  "type": "AirConditioningConfigurator",
  "props": {
    "infoIconKey": "airConditioningInfo"
  }
}
```

## Available Registry Keys

### Current Registry Entries

1. **airConditioningInfo**: Information about air conditioning ductwork and connections
2. **ductworkInfo**: Basic ductwork selection guidance
3. **splitterQuantityInfo**: Split unit quantity information
4. **energyEfficiencyInfo**: Energy efficiency details with class information
5. **installationWarning**: Installation warnings and requirements

### Custom Content Examples

The registry supports rich JSX content:

```jsx
content: (
  <div>
    <h4 className="text-[#131416] font-semibold mb-2" style={{ fontFamily: 'Roobert Bold' }}>
      Informazioni sui Canalizzazioni
    </h4>
    <p className="text-[#667790] mb-2">
      Le canalizzazioni sono necessarie per collegare l'unità interna con quella esterna.
    </p>
    <ul className="text-[#667790] text-xs space-y-1">
      <li>• 3m-9m: Per distanze brevi</li>
      <li>• 9m-15m: Per distanze medie</li>
      <li>• 15m-25m: Per distanze lunghe</li>
    </ul>
  </div>
)
```

## Benefits

### 1. Centralized Management
- All InfoIcon content in one place
- Easy to update and maintain
- Consistent styling across components

### 2. Reusability
- Registry entries can be shared across multiple components
- Reduces code duplication
- Standardizes help content

### 3. Localization Ready
- Easy to implement multi-language support
- Content separated from component logic
- Structured for translation workflows

### 4. Type Safety
- Clear interface for configuration objects
- Validation through registry functions
- Compile-time checks for available keys

## Adding New Registry Entries

### 1. Add to Registry

```jsx
// In /src/config/infoIconRegistry.jsx
export const infoIconRegistry = {
  // ... existing entries
  
  newInfoKey: {
    variant: "info",
    popoverPosition: "top",
    popoverClassName: "max-w-[300px]",
    content: (
      <div>
        <h4 className="font-semibold mb-2">New Info Title</h4>
        <p>Your content here...</p>
      </div>
    )
  }
};
```

### 2. Use in Component

```jsx
// Component accepts infoIconKey prop
const MyComponent = ({ infoIconKey }) => {
  const infoIconConfig = infoIconKey ? getInfoIconConfig(infoIconKey) : null;
  // ...
}
```

### 3. Configure in pages.json

```json
{
  "type": "MyComponent",
  "props": {
    "infoIconKey": "newInfoKey"
  }
}
```

## Design Guidelines

### Styling Consistency

Use consistent styling patterns:

```jsx
// Headers
<h4 className="text-[#131416] font-semibold mb-2" style={{ fontFamily: 'Roobert Bold' }}>

// Body text
<p className="text-[#667790] mb-2">

// Lists
<ul className="text-[#667790] text-xs space-y-1">
  <li>• Item text</li>
</ul>
```

### Content Guidelines

- Keep content concise and focused
- Use bullet points for lists
- Include relevant technical details
- Maintain consistent tone and language

### Popover Sizing

- Use `max-w-[300px]` for basic content
- Use `max-w-[350px]` for medium content
- Use `max-w-[400px]` for detailed content

## Migration from Inline Configuration

### Before (Inline)
```json
{
  "infoIcon": {
    "variant": "warning",
    "popoverContent": "Inline content...",
    "popoverPosition": "top"
  }
}
```

### After (Registry)
```json
{
  "infoIconKey": "registryEntryKey"
}
```

## Future Enhancements

### Planned Features

1. **Multi-language Support**: Registry entries with language keys
2. **Dynamic Content**: Registry entries with dynamic data binding
3. **Theme Support**: Registry entries with theme-aware styling
4. **Validation**: Schema validation for registry entries
5. **Hot Reloading**: Development-time registry updates

### Extension Points

The registry system can be extended to support:
- Conditional content based on user context
- Analytics tracking for popover interactions
- A/B testing for different content versions
- User preference-based content customization

---

*This registry system provides a scalable foundation for managing InfoIcon content across the ENEL Verticale Clima application.*
