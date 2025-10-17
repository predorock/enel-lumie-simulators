# GlossaryModal Component

A modal dialog component with accordion sections for displaying glossary terms and definitions, following ENEL design system.

## Features

- ✅ Radix UI Dialog for accessible modal behavior
- ✅ Radix UI Accordion for collapsible content sections
- ✅ ENEL design system compliance (colors, typography, spacing)
- ✅ Smooth animations for accordion expand/collapse
- ✅ Ability to open modal with specific accordion item expanded
- ✅ Responsive and accessible

## Usage

### Basic Usage

```jsx
import GlossaryModal from '../ui/GlossaryModal';

const glossaryData = [
    {
        id: 'item-1',
        title: 'Tipologia di installazione',
        content: [
            {
                question: 'Cos\'è la predisposizione?',
                answer: 'La predisposizione è la preparazione dell\'impianto...'
            }
        ]
    },
    // ... more items
];

function MyComponent() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button onClick={() => setOpen(true)}>
                Open Glossary
            </button>
            <GlossaryModal 
                open={open}
                onOpenChange={setOpen}
                items={glossaryData}
            />
        </>
    );
}
```

### Open with Specific Accordion Item

```jsx
function MyComponent() {
    const [open, setOpen] = useState(false);
    const [defaultItem, setDefaultItem] = useState(null);

    const openGlossaryAtItem = (itemId) => {
        setDefaultItem(itemId);
        setOpen(true);
    };

    return (
        <>
            <button onClick={() => openGlossaryAtItem('funzionalita-climatizzatori')}>
                View Climate Functions
            </button>
            <GlossaryModal 
                open={open}
                onOpenChange={setOpen}
                defaultOpenItem={defaultItem}
                items={glossaryData}
            />
        </>
    );
}
```

### Using Stateful Wrapper (ComponentRegistry)

```json
// In pages.json
{
  "type": "GlossaryModal",
  "props": {
    "initialOpen": false,
    "defaultOpenItem": "btu",
    "items": [...glossaryData]
  }
}
```

## Props

### GlossaryModal (Pure UI Component)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | `false` | Controls modal open/close state |
| `onOpenChange` | `function` | - | Callback when modal state changes |
| `defaultOpenItem` | `string` | `null` | ID of accordion item to open by default |
| `items` | `array` | `[]` | Array of glossary items |

### StatefulGlossaryModal (Stateful Wrapper)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `initialOpen` | `boolean` | `false` | Initial open state |
| `defaultOpenItem` | `string` | `null` | ID of accordion item to open by default |
| `items` | `array` | `[]` | Array of glossary items |
| `triggerComponent` | `ReactNode` | `null` | Optional trigger component |

## Data Structure

```javascript
const glossaryData = [
    {
        id: 'unique-id',           // Unique identifier for the accordion item
        title: 'Section Title',    // Title shown in accordion header
        content: [                 // Array of Q&A items
            {
                question: 'Question text?',
                answer: 'Answer text.'
            },
            // ... more Q&A pairs
        ]
    },
    // ... more sections
];
```

## Design Specifications

### Colors
- **Modal background**: White (`#ffffff`)
- **Overlay**: Black with 40% opacity
- **Accordion items**: Light gray background (`#eff2f7`)
- **Question text**: Purple (`#461e7d`)
- **Answer text**: Dark gray (`#1c1e20`)
- **Close button**: Light gray background (`#f7f8fb`)

### Typography
- **Modal title**: 24px, Bold, 34px line-height
- **Accordion titles**: 20px, Bold, 30px line-height
- **Questions**: 14px, Bold, 21px line-height
- **Answers**: 12px, Regular, 21px line-height

### Spacing
- **Modal padding**: 24px
- **Accordion item gap**: 8px
- **Content padding**: 24px horizontal, 24px bottom
- **Q&A gap**: 24px between pairs, 8px within pairs

## Files

- **Pure UI Component**: `src/components/ui/GlossaryModal.jsx`
- **Stateful Wrapper**: `src/components/clima/StatefulGlossaryModal.jsx`
- **Demo**: `src/components/demo/GlossaryModalDemo.jsx`
- **Registry**: Added to `src/components/simulator/ComponentRegistry.jsx`
- **Animations**: `src/index.css` (accordion-down, accordion-up)

## Dependencies

- `@radix-ui/react-dialog` - Modal dialog primitive
- `@radix-ui/react-accordion` - Accordion primitive
- `../icons/IconRenderer` - For close and chevron icons

## Demo

View the component in isolation:
```bash
npm run dev
# Navigate to the demo component or use URL parameter
```

## Notes

- Follows ENEL Lumiè Verticale Clima design patterns
- Uses Radix UI for accessibility and keyboard navigation
- Animations defined in `index.css` using Tailwind utilities
- Numbered accordion items (1., 2., 3., etc.)
- Single accordion can be open at a time (collapsible)
