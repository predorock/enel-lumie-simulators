# Figma to Component Creation Prompt

## AI Agent Instructions for Creating Components from Figma MCP

Use this structured prompt when creating new components from Figma designs using the Model Context Protocol (MCP).

---

## 🎯 **Task Overview**

You are creating a new React component for the ENEL Lumiè Verticale Clima application from a Figma design. Follow the project's unique architecture patterns exactly.

## 📋 **Prerequisites**

Before starting, ensure you have:
- [ ] Figma MCP tools available (`mcp_figma_dev_mod_get_code`, `mcp_figma_dev_mod_get_image`)
- [ ] Access to the Figma node ID or URL
- [ ] Understanding of the component's purpose in the application flow

## 🔧 **Step-by-Step Process**

### Step 1: Extract Design Information
```prompt
Using the Figma MCP tools, please:

1. **Get the component code** from Figma node ID: `[NODE_ID]`
   - Use `mcp_figma_dev_mod_get_code` with clientFrameworks: "react" and clientLanguages: "javascript"
   - Extract design tokens (colors, spacing, typography)
   - Identify interactive elements and states

2. **Get component image** for visual reference
   - Use `mcp_figma_dev_mod_get_image` with the same node ID
   - Use for implementation verification

3. **Get variable definitions** if the component uses design tokens
   - Use `mcp_figma_dev_mod_get_variable_defs` to extract CSS variables
```

### Step 2: Analyze Component Requirements
```prompt
Based on the Figma design, determine:

**Component Type:**
- [ ] Pure UI component (display only)
- [ ] Form component (requires state management)
- [ ] Interactive component (buttons, toggles)
- [ ] Layout component (containers, grids)

**Data Requirements:**
- [ ] Static content only
- [ ] Form state binding needed (`stateProperty`)
- [ ] External data integration
- [ ] Conditional rendering logic

**Design System Compliance:**
- [ ] Uses ENEL Roobert font family
- [ ] Uses brand colors (primary: #002466, purple: #5738ff, gray: #667790)
- [ ] Follows standard sizing (h-10 for inputs, w-6 h-6 for icons)
- [ ] Responsive design considerations
```

### Step 3: Create Pure UI Component
```prompt
Create the pure UI component following ENEL design system:

**File Location:** `src/components/ui/[ComponentName].jsx`

**Requirements:**
- Export as default
- Accept props: `{ value, onChange, className, ...props }` (for form components)
- Use Tailwind classes with ENEL design tokens:
  - Typography: `font-enel`, `font-enel-light`, `font-enel-bold`
  - Colors: `bg-primary`, `text-purple-600`, `text-gray-600` (NO arbitrary values)
  - Sizing: `h-10` for inputs, `w-6 h-6` for icons
  - Spacing: 4px-based scale (`p-3`, `space-y-4`, etc.)
- Ensure proper focus states and accessibility
- Keep component pure (no state management)

**Example Structure:**
```javascript
const ComponentName = ({ 
  value, 
  onChange, 
  placeholder, 
  className = '',
  ...props 
}) => {
  return (
    <div className={`[base-classes] ${className}`} {...props}>
      {/* Component implementation */}
    </div>
  );
};

export default ComponentName;
```

### Step 4: Create Stateful Wrapper (if needed)
```prompt
If the component handles form data or application state:

**File Location:** `src/components/clima/Stateful[ComponentName].jsx`

**Requirements:**
- Import useAppStore and the pure UI component
- Use `stateProperty` prop for state binding
- Handle state updates via `setFormValue`
- Pass through all other props to UI component

**Template:**
```javascript
import useAppStore from '../../store/useAppStore';
import ComponentName from '../ui/ComponentName';

const StatefulComponentName = ({ stateProperty, ...props }) => {
  const store = useAppStore();
  const value = store.formData[stateProperty] || '';
  const setValue = (newValue) => store.setFormValue(stateProperty, newValue);
  
  return (
    <ComponentName 
      value={value} 
      onChange={setValue} 
      {...props} 
    />
  );
};

export default StatefulComponentName;
```
```

### Step 5: Register Component
```prompt
Register the component in the ComponentRegistry:

**File:** `src/components/simulator/ComponentRegistry.jsx`

**Add import:**
```javascript
import StatefulComponentName from '../clima/StatefulComponentName';
// OR for pure UI components:
import ComponentName from '../ui/ComponentName';
```

**Add to registry:**
```javascript
const componentRegistry = {
  // ... existing components
  ComponentName: (props) => <StatefulComponentName {...props} />,
  // OR for pure UI:
  ComponentName: (props) => <ComponentName {...props} />,
};
```
```

### Step 6: Configure Usage (if for pages.json)
```prompt
If the component will be used in the page configuration:

**File:** `src/config/pages.json`

**Add component configuration:**
```json
{
  "type": "ComponentName",
  "props": {
    "placeholder": "Enter value",
    "stateProperty": "componentValue",
    "className": "additional-styles"
  },
  "renderConditions": {
    // Optional: conditional rendering logic
  }
}
```

**Add validation rules (if form component):**
```json
{
  "validationRules": {
    "required": ["componentValue"],
    "custom": [
      {
        "type": "minLength",
        "property": "componentValue",
        "value": 3,
        "errorMessage": "Minimum 3 characters required"
      }
    ]
  }
}
```
```

### Step 7: Test Component
```prompt
Test the new component:

1. **Demo Mode Test:**
   ```bash
   # Navigate to demo mode
   http://localhost:5173/?demo=ComponentName
   ```

2. **Integration Test:**
   - Add component to a test page in pages.json
   - Test with form data using `?test=true`
   - Verify state management works correctly

3. **Design System Compliance:**
   - Verify font rendering (Roobert family)
   - Check color accuracy against Figma
   - Test responsive behavior
   - Validate accessibility (focus states, keyboard navigation)
```

## ✅ **Validation Checklist**

Before completing, verify:

### Architecture Compliance
- [ ] Component follows stateful wrapper pattern (if needed)
- [ ] Registered in ComponentRegistry.jsx
- [ ] Uses `stateProperty` for form bindings
- [ ] No local state for form data
- [ ] Pure UI component is kept separate from state logic

### Design System Compliance
- [ ] Uses Tailwind font classes (`font-enel`, `font-enel-light`, `font-enel-bold`)
- [ ] Uses theme colors, not arbitrary values
- [ ] Follows standard sizing patterns
- [ ] Matches Figma design visually
- [ ] Responsive design implemented

### Code Quality
- [ ] Component is accessible (proper ARIA attributes, focus management)
- [ ] Props are properly typed and documented
- [ ] Error states handled gracefully
- [ ] Performance optimized (no unnecessary re-renders)

## 🚫 **Critical Anti-Patterns to Avoid**

- ❌ Using `useState` for form data
- ❌ Importing components directly in PageRenderer
- ❌ Hardcoding component rendering
- ❌ Using arbitrary color values like `bg-[#002466]`
- ❌ Using inline styles for fonts
- ❌ Skipping component registration
- ❌ Mixing UI logic with state management

## 📚 **Reference Documentation**

- **Design System:** `docs/architecture/design-system.md`
- **Component Patterns:** `docs/components/README.md`
- **Architecture Overview:** `.github/copilot-instructions.md`

---

## 🎯 **Example Usage Prompt**

```
I need to create a new component from this Figma design:
[Figma URL or Node ID: 123:456]

The component is a [describe component - e.g., "custom dropdown for selecting air conditioning brands"]

Please follow the ENEL Lumiè Verticale Clima component creation process:
1. Extract the design using Figma MCP tools
2. Create the pure UI component in src/components/ui/
3. Create the stateful wrapper in src/components/clima/ (if needed)
4. Register in ComponentRegistry.jsx
5. Configure for pages.json usage (if applicable)

Ensure full compliance with the project's design system and architecture patterns.
```

This prompt ensures AI agents follow the exact architectural patterns and design system requirements of the ENEL Lumiè Verticale Clima project.
