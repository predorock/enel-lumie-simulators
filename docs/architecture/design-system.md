# Design System Documentation

## 🎨 ENEL Lumiè Clima Design System

This document outlines the complete design system used in the ENEL Lumiè Clima application, ensuring consistent visual language and user experience.

## 🎯 Brand Identity

### **Brand Colors**
```css
:root {
  --primary-blue: #002466;    /* ENEL Primary Brand Blue */
  --white: #ffffff;           /* Text on blue backgrounds */
  --purple-accent: #5738ff;   /* Interactive elements, selections */
  --gray-secondary: #667790;  /* Secondary text, borders */
  --gray-light: #c2cddd;      /* Dividers, subtle backgrounds */
  --gray-border: #e5e7eb;     /* Input borders, light dividers */
}
```

### **Color Usage Guidelines**
- **Primary Blue (#002466)**: Main backgrounds, headers, primary buttons
- **White (#ffffff)**: All text on blue backgrounds, card backgrounds
- **Purple (#5738ff)**: Selected states, active elements, focus states
- **Gray (#667790)**: Secondary text, placeholder text, icons
- **Light Gray (#c2cddd)**: Dividers, disabled states, subtle backgrounds

## 🔤 Typography System

### **Font Family: Roobert ENEL**
The application uses the Roobert ENEL font family with three weights:

```css
@font-face {
  font-family: "Roobert";
  src: url("./assets/fonts/WEB/RoobertENEL-Regular.woff2") format("woff2");
  font-weight: 400;
}

@font-face {
  font-family: "Roobert Light";
  src: url("./assets/fonts/WEB/RoobertENEL-Light.woff2") format("woff2");
  font-weight: 300;
}

@font-face {
  font-family: "Roobert Bold";
  src: url("./assets/fonts/WEB/RoobertENEL-Bold.woff2") format("woff2");
  font-weight: 700;
}
```

### **Typography Scale**
```jsx
// Text Sizes (Tailwind classes)
text-xs   // 12px - Small labels, captions, legal text
text-sm   // 14px - Standard UI text, form inputs
text-base // 16px - Body text, descriptions
text-lg   // 18px - Emphasized text, section headers
text-xl   // 20px - Page titles, major headings
text-2xl  // 24px - Primary headings

// Line Heights
leading-tight   // 1.25 - Headings, titles
leading-normal  // 1.5  - Body text
leading-relaxed // 1.625 - Long form content
```

### **Font Weight Mapping**
```jsx
// Component Usage Examples
font-light   // 300 - Roobert Light for subtle text
font-normal  // 400 - Roobert Regular for standard text  
font-medium  // 500 - Roobert Regular with medium weight
font-bold    // 700 - Roobert Bold for emphasis
```

### **Typography Usage Guidelines**
```jsx
// ✅ Page Titles
<h1 className="text-2xl font-normal text-white" style={{ fontFamily: 'Roobert' }}>
  Configurate insieme il climatizzatore!
</h1>

// ✅ Section Headers  
<h2 className="text-lg font-normal text-white" style={{ fontFamily: 'Roobert' }}>
  PREVENTIVO DEL CLIMATIZZATORE
</h2>

// ✅ Body Text
<p className="text-sm text-white" style={{ fontFamily: 'Roobert Light' }}>
  Standard interface text
</p>

// ✅ Emphasized Text
<span className="text-base font-bold text-white" style={{ fontFamily: 'Roobert Bold' }}>
  Important information
</span>
```

## 📐 Spacing System

### **Tailwind Spacing Scale**
The application uses Tailwind's 4px-based spacing scale:

```css
/* Spacing Values */
0.5  →  2px    /* Micro spacing */
1    →  4px    /* Tight spacing */
2    →  8px    /* Small spacing */ 
3    →  12px   /* Medium spacing */
4    →  16px   /* Standard spacing */
6    →  24px   /* Large spacing */
8    →  32px   /* Extra large spacing */
12   →  48px   /* Section spacing */
16   →  64px   /* Page spacing */
```

### **Spacing Application**
```jsx
// Component Internal Spacing
className="p-3"     // 12px padding
className="px-4"    // 16px horizontal padding  
className="py-2"    // 8px vertical padding

// Component External Spacing
className="mb-4"    // 16px bottom margin
className="mt-6"    // 24px top margin
className="space-y-2" // 8px vertical space between children

// Layout Spacing
className="p-16"    // 64px padding for main content areas
```

## 🎛️ Component Standards

### **Input Components**
```jsx
// Standard Input Height: 40px (h-10)
<input className="h-10 px-3 pt-3 pb-1 text-sm border rounded" />

// Floating Label Pattern
<div className="relative">
  <input className="h-10 px-3 pt-3 pb-1" />
  <label className="absolute left-3 top-0.5 text-xs text-gray-500">
    Label Text
  </label>
</div>
```

### **Button Components**
```jsx
// Primary Button
<button className="h-10 px-6 bg-primary text-white rounded font-medium">
  Button Text
</button>

// Secondary Button  
<button className="h-10 px-6 border border-gray-300 text-gray-700 rounded">
  Button Text
</button>
```

### **Icon Standards**
```jsx
// Standard Icon Size: 24px (w-6 h-6)
<IconComponent className="w-6 h-6 text-gray-600" />

// Small Icons: 16px (w-4 h-4)
<IconComponent className="w-4 h-4" />

// Large Icons: 32px (w-8 h-8)  
<IconComponent className="w-8 h-8" />
```

## 🏗️ Layout System

### **Grid Layout**
The main application uses CSS Grid for the primary layout:

```jsx
// Main Layout: 2/3 Split
<div className="grid grid-cols-6 w-full h-screen">
  {/* Left Panel: 2 columns */}
  <div className="col-span-2 bg-primary">
    {/* ENEL branding, navigation, dynamic content */}
  </div>
  
  {/* Right Panel: 4 columns */}
  <div className="col-span-4">
    {/* Main content area */}
  </div>
</div>
```

### **Flexbox Patterns**
```jsx
// Horizontal Layout with Space Between
<div className="flex justify-between items-center">
  <span>Label</span>
  <span>Value</span>
</div>

// Vertical Stack with Spacing
<div className="flex flex-col space-y-4">
  <Component1 />
  <Component2 />
</div>

// Centered Content
<div className="flex justify-center items-center h-full">
  <CenteredComponent />
</div>
```

### **Responsive Breakpoints**
```css
/* Tailwind Breakpoints */
sm:  640px   /* Small tablets */
md:  768px   /* Tablets */
lg:  1024px  /* Small laptops */  
xl:  1280px  /* Laptops */
2xl: 1536px  /* Large screens */
```

## 🎨 Visual Hierarchy

### **Information Hierarchy**
1. **Primary**: Page titles, main headings (text-2xl, font-normal)
2. **Secondary**: Section headers, important labels (text-lg, font-normal)  
3. **Tertiary**: Standard text, form inputs (text-sm, font-light)
4. **Supporting**: Captions, help text (text-xs, font-light)

### **Color Hierarchy**
1. **Highest Contrast**: White text on blue (#ffffff on #002466)
2. **Medium Contrast**: Gray text for secondary information (#667790)
3. **Accent**: Purple for interactive states (#5738ff)
4. **Subtle**: Light gray for borders and dividers (#c2cddd)

## 🎯 Interactive States

### **Form Input States**
```jsx
// Default State
className="border-gray-300 text-gray-900"

// Focus State
className="border-purple-500 ring-2 ring-purple-200"

// Error State  
className="border-red-500 text-red-900"

// Disabled State
className="border-gray-200 text-gray-400 bg-gray-50"
```

### **Button States**
```jsx
// Default
className="bg-primary text-white"

// Hover
className="bg-primary hover:bg-blue-700"

// Active/Pressed
className="bg-primary active:bg-blue-800"

// Disabled
className="bg-gray-300 text-gray-500 cursor-not-allowed"
```

### **Selection States**
```jsx
// Selected Item (Purple Theme)
className="bg-purple-50 border-purple-500 text-purple-900"

// Selected with Checkmark
<div className="flex items-center justify-between bg-purple-50">
  <span>Selected Item</span>
  <CheckmarkIcon className="w-4 h-4 text-purple-600" />
</div>
```

## 📱 Responsive Design

### **Mobile-First Approach**
```jsx
// Base styles for mobile, then scale up
<div className="p-4 md:p-8 lg:p-16">
  
// Text scaling
<h1 className="text-xl md:text-2xl lg:text-3xl">

// Layout adjustments  
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

### **Breakpoint Strategy**
- **Mobile (< 640px)**: Single column, stacked layout
- **Tablet (640px - 1024px)**: Adapted two-column layout
- **Desktop (> 1024px)**: Full two-column layout with sidebar

## 🎨 Brand Guidelines

### **Logo Usage**
```jsx
// ENEL Logo with Brand Text
<div className="flex items-stretch h-6">
  <img src={enelLogo} alt="Enel Lumiè Clima Logo" className="w-auto" />
  <div className="text-white ml-4 border-l"></div>
  <div className="text-white ml-4">Lumiè Clima</div>
</div>
```

### **Brand Voice**
- **Professional**: Clean, organized, trustworthy
- **Helpful**: Clear instructions, intuitive interface
- **Italian**: Localized content and formatting (e.g., "100,00€")

## 🔧 Implementation Guidelines

### **CSS Custom Properties**
```css
/* Define brand colors as CSS variables */
:root {
  --color-primary: #002466;
  --color-white: #ffffff;
  --color-purple: #5738ff;
  --color-gray: #667790;
}

/* Use in Tailwind config */
colors: {
  primary: 'var(--color-primary)',
  // ... other colors
}
```

### **Component Styling Patterns**
```jsx
// Consistent component wrapper
<div className={`component-base ${className}`} {...props}>
  
// Style object for fonts (when Tailwind classes aren't sufficient)
style={{ fontFamily: 'Roobert' }}

// Conditional styling
className={`base-classes ${isSelected ? 'selected-classes' : 'default-classes'}`}
```

## ✅ Design System Checklist

### **Before Implementing New Components**
- [ ] Font family specified (Roobert variants)
- [ ] Colors match brand palette
- [ ] Spacing follows 4px scale
- [ ] Interactive states defined
- [ ] Responsive behavior considered
- [ ] Accessibility standards met

### **Component Review Criteria**
- [ ] Visual consistency with existing components
- [ ] Proper typography hierarchy
- [ ] Appropriate color contrast
- [ ] Consistent spacing and sizing
- [ ] Proper hover and focus states

---

*This design system ensures visual consistency and maintains the ENEL brand identity throughout the application.*
