# ACFeaturesDisplay Component

## 📋 Overview

The `ACFeaturesDisplay` component showcases air conditioning features and benefits using the ENEL design system. It displays a configurable list of features with icons, titles, descriptions, and highlight badges in a visually appealing layout.

## 🎯 Features

### **Design Compliance**
- **ENEL Typography** - Uses Roobert font family (Regular, Light, Bold)
- **Brand Colors** - Consistent with InfoBanner variant styling
- **Responsive Layout** - Flexbox-based responsive design
- **Icon Integration** - Uses existing AirConditioningIcon components

### **Feature Display**
- **Custom Icons** - Six built-in feature icons (energy, temperature, timer, quiet, airflow, smart)
- **Highlight Badges** - Optional highlight values (e.g., "A++", "24h", "<35dB")
- **Flexible Content** - Configurable features list or smart defaults
- **AC Type Integration** - Shows appropriate AC icon based on type

### **Visual Variants**
- **Info** - Blue theme for standard information
- **Success** - Green theme for positive highlights
- **Warning** - Red theme for important notices

## 🔧 Props API

```typescript
interface ACFeaturesDisplayProps {
  acType?: 'monosplit' | 'dualsplit' | 'trialsplit'; // AC unit type (default: 'monosplit')
  features?: Feature[];                               // Custom features array
  variant?: 'info' | 'success' | 'warning';         // Visual theme (default: 'info')
  showACIcon?: boolean;                              // Show AC type icon (default: true)
  title?: string;                                    // Custom title
  className?: string;                                // Additional CSS classes
}

interface Feature {
  iconType: 'energy' | 'temperature' | 'timer' | 'quiet' | 'airflow' | 'smart';
  title: string;                                     // Feature title
  description: string;                               // Feature description
  highlight?: string;                                // Optional highlight badge text
}
```

## 📚 Usage Examples

### **Basic Usage**
```jsx
<ACFeaturesDisplay 
  acType="monosplit"
  variant="info"
/>
```

### **Custom Features**
```jsx
<ACFeaturesDisplay 
  acType="dualsplit"
  variant="success"
  features={[
    {
      iconType: 'energy',
      title: 'Alta Efficienza',
      description: 'Classe energetica A+++',
      highlight: 'A+++'
    },
    {
      iconType: 'smart',
      title: 'Controllo WiFi',
      description: 'App mobile inclusa',
      highlight: 'WiFi'
    }
  ]}
/>
```

### **JSON Configuration**
```json
{
  "type": "ACFeaturesDisplay",
  "props": {
    "acType": "trialsplit",
    "variant": "success",
    "title": "Caratteristiche Premium",
    "className": "mb-6"
  }
}
```

## 🎨 Default Features

When no custom features are provided, the component displays these defaults:

| Icon | Title | Description | Highlight |
|------|-------|-------------|-----------|
| ⚡ | Efficienza Energetica | Classe energetica A++ per massimo risparmio | A++ |
| 🌡️ | Controllo Temperatura | Controllo preciso della temperatura ambiente | ±1°C |
| ⏲️ | Timer Programmabile | Programmazione automatica 24h | 24h |
| 🔇 | Silenzioso | Funzionamento ultra-silenzioso | <35dB |
| 💨 | Purificazione Aria | Filtro HEPA integrato per aria pulita | HEPA |
| 📱 | Controllo Smart | Controllo da app smartphone e WiFi | WiFi |

## 🎨 Visual Variants

### **Info Variant** (Default)
- Background: `#f4f8ff` (Light blue)
- Border: `#1f6cf9` (Blue)
- Icons: Blue theme

### **Success Variant**
- Background: `#f0f9f4` (Light green)
- Border: `#10b981` (Green)  
- Icons: Green theme

### **Warning Variant**
- Background: `#fff8f0` (Light orange)
- Border: `#D3135A` (Red)
- Icons: Red theme

## 💡 Styling Details

### **Typography**
- **Title**: 16px, Roobert Bold, #131416
- **Feature Titles**: 14px, Roobert Regular, #131416
- **Descriptions**: 13px, Roobert Light, #667790
- **Highlights**: 12px, Roobert Bold, variant color

### **Layout**
- **Container**: Rounded corners, 16px padding
- **Feature Spacing**: 12px vertical gap between features
- **Icon Size**: 20px for feature icons, 24px for AC icon
- **Responsive**: Full width with flexible content

## 🔧 Integration

### **Component Registry**
The component is registered as `ACFeaturesDisplay` in the ComponentRegistry:

```javascript
ACFeaturesDisplay: (props) => <ACFeaturesDisplay {...props} />
```

### **Page Configuration**
Add to pages.json:

```json
{
  "type": "ACFeaturesDisplay",
  "props": {
    "acType": "monosplit",
    "variant": "info"
  }
}
```

## 🎯 Use Cases

### **Product Information**
- Display AC unit specifications and features
- Highlight energy efficiency and performance
- Show technical capabilities and benefits

### **Marketing Content**
- Showcase product advantages
- Compare different AC types
- Emphasize premium features

### **Configuration Context**
- Show features based on selected AC type
- Dynamic content based on user selections
- Contextual information display

## 🔄 Customization

### **Custom Icons**
Add new icon types to the `FEATURE_ICONS` object:

```javascript
const FEATURE_ICONS = {
  energy: EnergyIcon,
  // ... existing icons
  newIcon: CustomIcon
};
```

### **Custom Variants**
Extend the `variantStyles` object:

```javascript
const variantStyles = {
  // ... existing variants
  custom: {
    bg: 'bg-purple-50',
    border: 'border-purple-500',
    iconColor: 'text-purple-600'
  }
};
```

## ✅ Accessibility

- **Semantic HTML** - Proper heading and content structure
- **ARIA Labels** - Meaningful content descriptions
- **Color Contrast** - WCAG-compliant color combinations
- **Screen Readers** - Text alternatives for all icons

## 📱 Responsive Behavior

- **Mobile First** - Optimized for mobile devices
- **Flexible Layout** - Adapts to container width
- **Icon Scaling** - Consistent icon proportions
- **Text Wrapping** - Proper text flow on small screens

---

*The ACFeaturesDisplay component provides a flexible, brand-compliant way to showcase air conditioning features while maintaining consistency with the ENEL design system.*
