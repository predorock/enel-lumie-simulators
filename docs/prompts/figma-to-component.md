# Figma to Component Creation Prompt

## 🎯 **AI Agent Instructions**

Create React components from Figma designs for ENEL Lumiè Verticale Clima, prioritizing **component reuse** over new creation.

---

## 📋 **Step 1: Analyze & Reuse First**

```prompt
Before creating a new component:

1. **Extract Figma design** using MCP tools:
   - `mcp_figma_dev_mod_get_code` (clientFrameworks: "react", clientLanguages: "javascript") 
   - `mcp_figma_dev_mod_get_image` for visual reference

2. **Check existing components** in:
   - `src/components/ui/` - Pure UI components
   - `src/components/clima/` - Stateful wrappers
   - `src/components/simulator/ComponentRegistry.jsx` - All registered components

3. **Determine reuse strategy:**
   - [ ] **Exact match**: Use existing component as-is
   - [ ] **Style variant**: Extend existing component with className props
   - [ ] **Minor modification**: Update existing component to support new props
   - [ ] **New component needed**: No suitable existing component found
```

## 🔄 **Step 2: Implementation Strategy**

### **If Reusing Existing Component:**
```prompt
1. **Identify base component** that matches functionality
2. **Extend with props** for visual differences:
   ```jsx
   // Use existing component with additional styling
   <ExistingComponent 
     className="custom-variant-styles" 
     variant="newType"
     {...props} 
   />
   ```
3. **Update ComponentRegistry** if new variant needed:
   ```javascript
   NewComponentName: (props) => <ExistingComponent variant="new" {...props} />
   ```
```

### **If Creating New Component:**

#### **Pure UI Component** (`src/components/ui/ComponentName.jsx`)
```prompt
Follow ENEL patterns from `.github/copilot-instructions.md`:

- **Typography**: `font-enel`, `font-enel-light`, `font-enel-bold`
- **Colors**: `bg-primary`, `text-purple-600`, `text-gray-600` (NO arbitrary values)
- **Sizing**: `h-10` (inputs), `w-6 h-6` (icons)
- **Keep pure**: No state management, props in/events out

```javascript
const ComponentName = ({ value, onChange, className = '', ...props }) => (
  <div className={`base-styles ${className}`} {...props}>
    {/* Implementation */}
  </div>
);
export default ComponentName;
```
```

#### **Stateful Wrapper** (if form component) (`src/components/clima/StatefulComponentName.jsx`)
```prompt
```javascript
import useAppStore from '../../store/useAppStore';
import ComponentName from '../ui/ComponentName';

const StatefulComponentName = ({ stateProperty, ...props }) => {
  const { formData, setFormValue } = useAppStore();
  return (
    <ComponentName 
      value={formData[stateProperty]} 
      onChange={(v) => setFormValue(stateProperty, v)} 
      {...props} 
    />
  );
};
export default StatefulComponentName;
```
```

#### **Register Component** (`src/components/simulator/ComponentRegistry.jsx`)
```prompt
```javascript
// Add import
import StatefulComponentName from '../clima/StatefulComponentName';

// Add to registry
const componentRegistry = {
  // ... existing
  ComponentName: (props) => <StatefulComponentName {...props} />,
};
```
```

## ✅ **Step 3: Validation**

```prompt
Verify:
- [ ] **Reuse checked**: Existing components analyzed first
- [ ] **Architecture compliance**: Follows stateful wrapper pattern
- [ ] **Design system**: Uses theme colors and font classes
- [ ] **Registration**: Added to ComponentRegistry.jsx
- [ ] **Testing**: Works in demo mode (`?demo=componentName`)

**Critical Anti-Patterns to Avoid:**
- ❌ Creating new component when existing one could be extended
- ❌ Using arbitrary colors `bg-[#002466]` instead of theme colors
- ❌ Using `useState` for form data
- ❌ Skipping ComponentRegistry registration
```

---

## 🎯 **Usage Template**

```
I need to implement this Figma design: [URL/Node ID: 123:456]

Please follow the ENEL component creation process:
1. Extract design using Figma MCP tools
2. **First check for existing components to reuse**
3. If reuse possible: extend existing component
4. If new component needed: follow the stateful wrapper pattern
5. Register in ComponentRegistry.jsx

**Priority: Reuse existing components whenever possible before creating new ones.**

Component purpose: [describe functionality]
Form component: [yes/no]
```

For complete architecture details, see `.github/copilot-instructions.md`
