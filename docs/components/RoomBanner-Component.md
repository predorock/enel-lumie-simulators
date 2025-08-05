# RoomBanner Component Documentation

## 📋 Overview

The **RoomBanner** component is a Figma-generated React component that displays room size information in a visually appealing banner format. It was created from Figma designs with exact visual fidelity and follows the ENEL design system patterns.

## 🎨 Visual Design

### **Component Preview**
The RoomBanner displays the message "Questo Monosplit deve climatizzare una stanza di X m²" with a room icon and configurable styling variants.

### **Design Features**
- **Room Icon** - Custom SVG icon representing a room layout
- **Typography** - Roobert ENEL font with mixed font weights
- **Color Variants** - Multiple color schemes for different contexts
- **Responsive Layout** - Adapts to different container sizes
- **ENEL Branding** - Consistent with ENEL design system

## 🔧 Technical Implementation

### **Component Structure**
```jsx
// RoomBanner.jsx - Main component
import RoomIcon from '../icons/RoomIcon';

const RoomBanner = ({ 
  roomSize = 22,
  unit = 'm²',
  variant = 'info',
  className = '' 
}) => {
  // Component implementation
};
```

### **Dependencies**
- **RoomIcon.jsx** - Custom SVG icon component
- **ENEL Design System** - Color palette and typography
- **Tailwind CSS** - Utility classes for styling

## 📊 Props API

### **Props Interface**
```typescript
interface RoomBannerProps {
  roomSize?: number;              // Room size value (default: 22)
  unit?: string;                  // Unit of measurement (default: 'm²')
  variant?: 'info' | 'warning' | 'success' | 'error'; // Visual variant
  className?: string;             // Additional CSS classes
}
```

### **Prop Details**

#### **roomSize** (optional)
- **Type**: `number`
- **Default**: `22`
- **Description**: The room size value to display
- **Example**: `roomSize={35}` displays "35 m²"

#### **unit** (optional)
- **Type**: `string`
- **Default**: `'m²'`
- **Description**: The unit of measurement for the room size
- **Example**: `unit="sq ft"` for different measurement systems

#### **variant** (optional)
- **Type**: `'info' | 'warning' | 'success' | 'error'`
- **Default**: `'info'`
- **Description**: Visual styling variant
- **Variants**:
  - `info` - Blue theme (#1f6cf9) for standard information
  - `warning` - Red theme (#D3135A) for warnings/alerts
  - `success` - Green theme (#10b981) for confirmations
  - `error` - Red theme (#ef4444) for error states

#### **className** (optional)
- **Type**: `string`
- **Default**: `''`
- **Description**: Additional CSS classes for custom styling
- **Example**: `className="shadow-lg mt-4"` for additional effects

## 💻 Usage Examples

### **Basic Usage**
```jsx
// Default banner (22 m², info variant)
<RoomBanner />
```

### **Custom Room Size**
```jsx
// Display 35 m² room
<RoomBanner roomSize={35} />
```

### **Different Variants**
```jsx
// Warning variant for large rooms
<RoomBanner roomSize={60} variant="warning" />

// Success variant for optimal rooms
<RoomBanner roomSize={25} variant="success" />

// Error variant for problematic configurations
<RoomBanner roomSize={80} variant="error" />
```

### **With Custom Styling**
```jsx
// Additional CSS classes
<RoomBanner 
  roomSize={30} 
  variant="info"
  className="shadow-lg border-2 border-gray-200"
/>
```

### **Different Units**
```jsx
// Alternative unit systems
<RoomBanner roomSize={250} unit="sq ft" />
```

## 🎯 JSON Configuration

### **Component Registry**
The RoomBanner is registered in the ComponentRegistry for dynamic rendering:

```jsx
// ComponentRegistry.jsx
const componentRegistry = {
  RoomBanner: (props) => <RoomBanner {...props} />,
  // ... other components
};
```

### **pages.json Configuration**
```json
{
  "type": "RoomBanner",
  "props": {
    "roomSize": 25,
    "variant": "info"
  }
}
```

### **Advanced Configuration**
```json
{
  "type": "RoomBanner",
  "props": {
    "roomSize": 40,
    "variant": "warning",
    "className": "mb-6"
  },
  "renderConditions": {
    "hasValues": ["roomConfiguration"]
  }
}
```

## 🎨 Visual Variants

### **Info Variant (Default)**
- **Background**: `#f4f8ff` (light blue)
- **Border**: `#1f6cf9` (ENEL blue)
- **Icon Color**: `#1f6cf9`
- **Use Case**: Standard room size information

### **Warning Variant**
- **Background**: `#fff8f0` (light orange)
- **Border**: `#D3135A` (ENEL red)
- **Icon Color**: `#D3135A`
- **Use Case**: Large rooms or potential issues

### **Success Variant**
- **Background**: `#f0f9f4` (light green)
- **Border**: `#10b981` (success green)
- **Icon Color**: `#10b981`
- **Use Case**: Optimal room configurations

### **Error Variant**
- **Background**: `#fef2f2` (light red)
- **Border**: `#ef4444` (error red)
- **Icon Color**: `#ef4444`
- **Use Case**: Invalid or problematic configurations

## 🔍 Room Icon Component

### **RoomIcon Implementation**
```jsx
// RoomIcon.jsx
const RoomIcon = ({ className = "w-6 h-6", color = "currentColor" }) => {
  return (
    <svg 
      className={className}
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2h8v8H8V8z" 
        fill={color}
        fillRule="evenodd" 
        clipRule="evenodd"
      />
      <path 
        d="M10 10h4v4h-4v-4z" 
        fill={color}
        opacity="0.3"
      />
    </svg>
  );
};
```

### **Icon Features**
- **Scalable SVG** - Clean scaling at any size
- **Color Inheritance** - Uses parent component's color
- **Simple Design** - Clear room representation
- **Optimized Path** - Minimal SVG markup

## 🏗️ Architecture Integration

### **Component Registry Pattern**
The RoomBanner follows the established component registry pattern:

```jsx
// 1. Pure UI Component
const RoomBanner = (props) => { /* implementation */ };

// 2. Registry Registration
const componentRegistry = {
  RoomBanner: (props) => <RoomBanner {...props} />,
};

// 3. JSON Configuration
{
  "type": "RoomBanner",
  "props": { /* component props */ }
}

// 4. Dynamic Rendering
<DynamicComponent type="RoomBanner" props={componentProps} />
```

### **State Integration**
While RoomBanner is a pure UI component, it can be integrated with state:

```jsx
// Stateful wrapper example
const StatefulRoomBanner = ({ stateProperty, ...props }) => {
  const roomSize = useAppStore(state => state.formData[stateProperty]);
  
  return (
    <RoomBanner 
      roomSize={roomSize} 
      {...props} 
    />
  );
};
```

## 📱 Responsive Behavior

### **Container Adaptation**
- **Flexible Width** - Adapts to parent container
- **Consistent Height** - Maintains proportional height
- **Mobile Friendly** - Works well on mobile devices
- **Grid Integration** - Fits seamlessly in grid layouts

### **Typography Scaling**
- **Responsive Text** - Uses relative units where appropriate
- **Icon Scaling** - Icon maintains proportion with text
- **Consistent Spacing** - Proportional spacing across screen sizes

## 🧪 Testing & Quality

### **Component Testing**
```jsx
// Example test cases
describe('RoomBanner', () => {
  it('renders default room size', () => {
    render(<RoomBanner />);
    expect(screen.getByText(/22 m²/)).toBeInTheDocument();
  });
  
  it('renders custom room size', () => {
    render(<RoomBanner roomSize={35} />);
    expect(screen.getByText(/35 m²/)).toBeInTheDocument();
  });
  
  it('applies variant styles', () => {
    render(<RoomBanner variant="warning" />);
    expect(container.firstChild).toHaveClass('bg-[#fff8f0]');
  });
});
```

### **Accessibility Features**
- **Semantic HTML** - Proper HTML structure
- **ARIA Labels** - Screen reader support
- **Color Contrast** - WCAG compliant color combinations
- **Focus Management** - Keyboard navigation support

## 🔄 Development Workflow

### **Creating from Figma**
1. **Extract Design** - Get component design from Figma
2. **Analyze Structure** - Identify layout, colors, typography
3. **Create Component** - Build React component with exact styling
4. **Add Variants** - Implement different visual states
5. **Register Component** - Add to ComponentRegistry
6. **Test Integration** - Verify in application context
7. **Document Usage** - Create comprehensive documentation

### **Maintenance Guidelines**
- **Design System Compliance** - Always follow ENEL design patterns
- **Backward Compatibility** - Maintain existing prop interfaces
- **Performance** - Keep component lightweight and efficient
- **Documentation** - Update docs with any changes

## 🚀 Future Enhancements

### **Planned Features**
- **Animation Support** - Entry/exit animations
- **Size Variants** - Different component sizes (small, medium, large)
- **Custom Icons** - Support for different room types
- **Multi-language** - Localization support for different languages
- **Theme Support** - Dark mode and alternative themes

### **Extension Points**
- **Custom Content** - Support for additional text content
- **Interactive Features** - Click handlers and user interaction
- **Data Binding** - Direct integration with configuration data
- **Validation Display** - Show validation states for room sizes

---

## 📚 Related Documentation

- **[Component API Reference](/docs/components/api-reference.md)** - All component props and interfaces
- **[Design System Guide](/docs/architecture/design-system.md)** - ENEL design system implementation
- **[Architecture Overview](/docs/architecture/README.md)** - System architecture and patterns
- **[ComponentRegistry Documentation](/docs/components/README.md)** - Dynamic component system

---

*The RoomBanner component exemplifies modern React development practices with Figma design integration, providing a reusable, well-documented, and maintainable solution for room size display in the ENEL Lumiè Verticale Clima application.*
