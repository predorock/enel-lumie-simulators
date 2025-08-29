# Navigation Override - Page Level Configuration

The navigation override system has been moved from component level to page level, allowing for better organization and configuration of navigation behavior per page.

## Architecture Overview

```
pages.json → App.jsx → PageLayout → NavigationBar
     ↓           ↓          ↓           ↓
navigationOverride passed through the component chain
```

## Configuration Structure

Add `navigationOverride` to any page in `src/config/pages.json`:

```json
{
  "id": "example-page",
  "title": "Example Page",
  "step": 1,
  "navigationOverride": {
    "backButton": {
      "label": "Custom Back",
      "icon": "ChevronRightIcon",
      "iconPosition": "left",
      "variant": "secondary",
      "action": "customAction",
      "show": true,
      "disabled": false,
      "className": "extra-css-classes",
      "disableValidation": false
    },
    "nextButton": {
      "label": "Custom Next",
      "icon": "GlobeIcon", 
      "iconPosition": "right",
      "variant": "primary",
      "action": "openSidebar",
      "show": true,
      "disabled": false,
      "className": "px-8",
      "disableValidation": false
    }
  }
}
```

## Available Properties

### Button Configuration
- **`label`** _(string)_ - Button text
- **`icon`** _(string | ReactElement)_ - Icon name from registry or custom element
- **`iconPosition`** _("left" | "right")_ - Icon position relative to text
- **`variant`** _("primary" | "secondary" | "outline" | "ghost" | "primary-light")_ - Button style variant
- **`action`** _(function | string)_ - Custom action function or string identifier
- **`show`** _(boolean)_ - Override button visibility
- **`disabled`** _(boolean)_ - Override button disabled state
- **`className`** _(string)_ - Additional CSS classes
- **`disableValidation`** _(boolean)_ - Skip icon/variant validation

### String Actions
Built-in string actions that can be used in the `action` property:
- **`"openSidebar"`** - Opens the customer data sidebar form

### Icon Registry
Valid icon names (when not using `disableValidation`):
- `star`, `money`, `euro`, `checkMark`, `savings`
- `lightning`, `house`, `eco`, `airConditioning`
- `room`, `info`, `globe`, `chevronRight`, `fire`

### Variant Registry
Valid button variants (when not using `disableValidation`):
- `primary`, `primary-light`, `secondary`
- `outline`, `ghost`

## Usage Examples

### 1. Custom Labels with Icons
```json
"navigationOverride": {
  "nextButton": {
    "label": "Inizia la configurazione",
    "icon": "ChevronRightIcon",
    "iconPosition": "right",
    "variant": "primary"
  }
}
```

### 2. Special Actions
```json
"navigationOverride": {
  "nextButton": {
    "label": "Invia al cliente",
    "icon": "GlobeIcon",
    "iconPosition": "right",
    "variant": "primary",
    "action": "openSidebar"
  }
}
```

### 3. Hide Buttons
```json
"navigationOverride": {
  "backButton": {
    "show": false
  }
}
```

### 4. Custom Styling
```json
"navigationOverride": {
  "nextButton": {
    "label": "Finalizza",
    "variant": "primary",
    "className": "px-12 py-3"
  }
}
```

## Implementation Flow

1. **Page Definition**: Add `navigationOverride` to page configuration in `pages.json`
2. **App.jsx**: Reads current page and extracts `navigationOverride`
3. **PageLayout**: Receives override and passes it to NavigationBar
4. **NavigationBar**: Resolves configuration and applies overrides

## Code Changes Made

### 1. PageLayout.jsx
- Added `navigationOverride` prop
- Passes override to NavigationBar component

### 2. App.jsx  
- Reads `navigationOverride` from current page
- Passes it to PageLayout component

### 3. NavigationBar.jsx
- Enhanced action registry to support string actions
- Added `openSidebar` action support
- Improved action execution handling

### 4. pages.json
- Added example configurations for demonstration
- Shows override usage on different page types

## Benefits

✅ **Centralized Configuration**: All navigation behavior defined in page data  
✅ **Better Organization**: Page-specific navigation rules stay with page definition  
✅ **Maintainability**: Easier to manage navigation across different pages  
✅ **Flexibility**: Supports both function and string-based actions  
✅ **Validation**: Built-in validation for icons and variants with bypass option  

## Testing

Test the navigation override system at:
- **Demo**: http://localhost:5175/?demo=navoverride
- **Live Pages**: Navigate through the app to see configured overrides in action

The demo shows different override configurations and their effects on navigation buttons.
