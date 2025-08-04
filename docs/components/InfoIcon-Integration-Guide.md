# InfoIcon Integration in Components

## Overview

The InfoIcon component has been successfully integrated into the AirConditioningConfigurator component and can be easily added to other components following the same pattern.

## AirConditioningConfigurator Integration

### Component Updates

The `AirConditioningConfigurator` component now accepts an `infoIcon` prop that allows full customization of the InfoIcon behavior:

```jsx
const AirConditioningConfigurator = ({ 
  stateProperty = 'airConditioningConfigs', 
  showOnlyWhenQuantitiesExist = true,
  installationTypes = [],
  infoIcon = null  // ✅ New InfoIcon configuration prop
}) => {
  // Component logic...
  
  return (
    // Component JSX...
    {infoIcon && (
      <InfoIcon 
        variant={infoIcon.variant || 'warning'}
        popoverContent={infoIcon.popoverContent}
        popoverPosition={infoIcon.popoverPosition || 'top'}
        popoverClassName={infoIcon.popoverClassName || ''}
        disabled={infoIcon.disabled || false}
        onClick={infoIcon.onClick || null}
      />
    )}
  );
};
```

### Pages.json Configuration

The InfoIcon can be configured directly in the pages.json file:

```json
{
  "type": "AirConditioningConfigurator",
  "props": {
    "stateProperty": "airConditioningConfigs",
    "installationTypes": [...],
    "infoIcon": {
      "variant": "warning",
      "popoverContent": "Detailed help text with installation guidance...",
      "popoverPosition": "left",
      "popoverClassName": "max-w-[350px]"
    }
  }
}
```

## Configuration Options

### Basic InfoIcon Configuration

```json
"infoIcon": {
  "variant": "info",
  "popoverContent": "Simple help text"
}
```

### Advanced InfoIcon Configuration

```json
"infoIcon": {
  "variant": "warning",
  "popoverContent": "Multi-line text with:\n\n• Bullet points\n• Additional information\n• Formatting options",
  "popoverPosition": "left",
  "popoverClassName": "max-w-[400px]",
  "disabled": false
}
```

### Complex Content Example

For more complex content, you can use escaped JSON strings or consider extending the component to accept JSX content templates:

```json
"infoIcon": {
  "variant": "info",
  "popoverContent": "Installazioni disponibili:\n\n✓ Nuova con predisposizione\n✓ Nuova senza predisposizione\n✓ Sostituzione esistente\n\nSeleziona la tipologia più adatta al cliente.",
  "popoverPosition": "bottom",
  "popoverClassName": "max-w-[320px]"
}
```

## Integration Pattern for Other Components

### Step 1: Add InfoIcon Prop

```jsx
const YourComponent = ({ 
  // existing props...
  infoIcon = null  // Add InfoIcon configuration prop
}) => {
```

### Step 2: Import InfoIcon

```jsx
import InfoIcon from '../icons/InfoIcon';
```

### Step 3: Add Conditional Rendering

```jsx
{infoIcon && (
  <div className="info-icon-container">
    <InfoIcon 
      variant={infoIcon.variant || 'info'}
      popoverContent={infoIcon.popoverContent}
      popoverPosition={infoIcon.popoverPosition || 'top'}
      popoverClassName={infoIcon.popoverClassName || ''}
      disabled={infoIcon.disabled || false}
      onClick={infoIcon.onClick || null}
    />
  </div>
)}
```

### Step 4: Update Pages.json

```json
{
  "type": "YourComponent",
  "props": {
    "existingProp": "value",
    "infoIcon": {
      "variant": "info",
      "popoverContent": "Help text for your component",
      "popoverPosition": "right"
    }
  }
}
```

## Common Use Cases

### Form Field Help

```json
"infoIcon": {
  "variant": "info",
  "popoverContent": "Inserisci la superficie della stanza in metri quadrati per calcolare la potenza necessaria.",
  "popoverPosition": "right",
  "popoverClassName": "max-w-[280px]"
}
```

### Warning Messages

```json
"infoIcon": {
  "variant": "warning",
  "popoverContent": "Attenzione: questa opzione comporta costi aggiuntivi per l'installazione.",
  "popoverPosition": "top",
  "popoverClassName": "max-w-[250px]"
}
```

### Complex Instructions

```json
"infoIcon": {
  "variant": "info",
  "popoverContent": "Guida alla selezione:\n\n1. Valuta lo spazio disponibile\n2. Considera le predisposizioni esistenti\n3. Calcola i costi di installazione\n4. Scegli l'opzione più conveniente",
  "popoverPosition": "left",
  "popoverClassName": "max-w-[320px]"
}
```

## Design Guidelines

### Positioning Rules

- **Right**: For form fields and inputs
- **Left**: For icons on the right side of containers
- **Top**: For icons in the middle of content
- **Bottom**: For header/title icons

### Content Guidelines

- Keep text concise but informative
- Use bullet points for lists
- Include line breaks (\n) for better readability
- Provide actionable guidance

### Styling Guidelines

- Use `max-w-[280px]` for simple text
- Use `max-w-[320px]` for moderate content
- Use `max-w-[400px]` for complex instructions
- Keep consistent with ENEL design system

## Benefits

✅ **Consistent UX**: Same InfoIcon behavior across all components
✅ **Configurable**: Easy to customize through JSON
✅ **Maintainable**: Single InfoIcon component for all use cases
✅ **Accessible**: Proper hover states and interactions
✅ **Design Compliant**: Follows ENEL design system guidelines

## Future Extensions

- Template-based content system
- Dynamic content based on user state
- Internationalization support
- Analytics tracking for help usage
