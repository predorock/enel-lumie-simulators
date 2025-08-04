# InfoIcon Component with Popover Enhancement

## Overview

The `InfoIcon` component has been enhanced with popover capabilities to display additional information when clicked. This matches the design patterns shown in Figma and provides a flexible way to add contextual help or information throughout the application.

## Features

- ✅ **Basic Icon Display**: Shows info or warning icons
- ✅ **Popover Functionality**: Click to show/hide popover with custom content
- ✅ **Multiple Positions**: Top, bottom, left, right positioning
- ✅ **Custom Content**: Support for both string and JSX content
- ✅ **Click Outside to Close**: Automatically closes when clicking outside
- ✅ **ENEL Design System**: Proper fonts, colors, and styling
- ✅ **Accessibility**: Proper hover states and transitions
- ✅ **Flexible Styling**: Custom classes and positioning

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"info" \| "warning"` | `"info"` | Icon variant to display |
| `className` | `string` | `"w-6 h-6"` | CSS classes for the icon |
| `popoverContent` | `string \| ReactNode \| null` | `null` | Content to show in popover |
| `popoverPosition` | `"top" \| "bottom" \| "left" \| "right"` | `"top"` | Position of popover relative to icon |
| `popoverClassName` | `string` | `""` | Additional CSS classes for popover |
| `disabled` | `boolean` | `false` | Disable popover interaction |
| `onClick` | `function \| null` | `null` | Custom click handler (called before popover) |

## Usage Examples

### Basic Text Popover

```jsx
import InfoIcon from '../icons/InfoIcon';

<InfoIcon
  variant="info"
  popoverContent="This is helpful information about this feature."
  popoverPosition="top"
/>
```

### Custom JSX Content

```jsx
const customContent = (
  <div>
    <h4 className="font-semibold mb-2" style={{ fontFamily: 'Roobert Bold' }}>
      Canalizzazioni Info
    </h4>
    <p className="text-sm mb-2">
      Le canalizzazioni sono necessarie per collegare le unità.
    </p>
    <ul className="text-xs space-y-1">
      <li>• 3m-9m: Per distanze brevi</li>
      <li>• 9m-15m: Per distanze medie</li>
      <li>• 15m-25m: Per distanze lunghe</li>
    </ul>
  </div>
);

<InfoIcon
  variant="info"
  popoverContent={customContent}
  popoverPosition="bottom"
  popoverClassName="max-w-[350px]"
/>
```

### Different Positions

```jsx
{/* Top positioned (default) */}
<InfoIcon popoverContent="Top popover" popoverPosition="top" />

{/* Bottom positioned */}
<InfoIcon popoverContent="Bottom popover" popoverPosition="bottom" />

{/* Left positioned */}
<InfoIcon popoverContent="Left popover" popoverPosition="left" />

{/* Right positioned */}
<InfoIcon popoverContent="Right popover" popoverPosition="right" />
```

### Warning Variant

```jsx
<InfoIcon
  variant="warning"
  popoverContent="This is a warning message with important information."
  popoverPosition="top"
/>
```

### With Custom Click Handler

```jsx
<InfoIcon
  popoverContent="Click handler + popover"
  onClick={(e) => {
    console.log('InfoIcon clicked!');
    // Your custom logic here
  }}
/>
```

### Disabled Popover

```jsx
<InfoIcon
  variant="info"
  popoverContent="This won't show"
  disabled={true}
/>
```

## Styling

The component follows ENEL design system guidelines:

- **Fonts**: Uses `Roobert` font family
- **Colors**: 
  - Text: `#131416` (main text)
  - Secondary text: `#667790`
  - Border: `#c2cddd`
  - Background: `white`
- **Spacing**: Consistent padding and margins
- **Shadow**: Subtle shadow for popover depth
- **Transitions**: Smooth hover effects

## Integration with Existing Components  

The enhanced InfoIcon can be easily integrated into existing components:

```jsx
// In form fields
<div className="flex items-center gap-2">
  <label>Canalizzazioni</label>
  <InfoIcon
    popoverContent="Informazioni sulle canalizzazioni necessarie"
    popoverPosition="right"
  />
</div>

// In descriptive sections
<div className="flex items-start gap-2">
  <h3>Important Section</h3>
  <InfoIcon
    popoverContent={<DetailedHelp />}
    popoverPosition="bottom"
  />
</div>
```

## Design System Compliance

- ✅ Uses correct ENEL Roobert fonts
- ✅ Follows color palette guidelines
- ✅ Consistent sizing and spacing
- ✅ Proper hover states and interactions
- ✅ Accessible design patterns

## Future Enhancements

The component is designed to be extensible for future needs:

- Additional positioning options (corner positions)
- Animation customization
- Trigger options (hover vs click)
- Maximum content width controls
- Theme variants

## Notes

- The popover automatically positions itself to stay within viewport bounds
- Content can be plain text or complex JSX components
- The component maintains ENEL design system consistency
- Click outside behavior ensures good UX
- All interactions respect the disabled state
