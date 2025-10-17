# GlossaryLink Component

A reusable link component that opens the glossary modal to a specific section. Maintains the same style as the navigation bar glossary link.

## Location
- **Pure UI Component**: `src/components/ui/GlossaryLink.jsx`
- **Stateful Wrapper**: `src/components/clima/StatefulGlossaryLink.jsx`
- **Demo Component**: `src/components/demo/GlossaryLinkDemo.jsx`

## Features
- ✅ Opens glossary modal with optional section pre-opened
- ✅ Customizable text and icon
- ✅ Maintains ENEL design system styling
- ✅ Follows stateful wrapper pattern
- ✅ Fully accessible with keyboard support

## Props

### GlossaryLink (Pure UI Component)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | `"Vai al glossario"` | The link text to display |
| `icon` | `string \| null` | `"info"` | Icon name from IconRenderer registry. Pass `null` to hide icon |
| `sectionId` | `string \| null` | `null` | Glossary section ID to open (e.g., 'btu', 'canalizzazioni') |
| `className` | `string` | `""` | Additional CSS classes |

### StatefulGlossaryLink (Stateful Wrapper)

Same props as `GlossaryLink`.

## Available Section IDs

Based on `src/config/glossaryData.js`:

- `tipologia-installazione` - Tipologia di installazione
- `btu` - BTU
- `lavaggio-impianto` - Lavaggio dell'impianto
- `canalizzazioni` - Canalizzazioni
- `funzionalita-climatizzatori` - Funzionalità climatizzatori

## Usage Examples

### Basic Usage

```jsx
import GlossaryLink from '../ui/GlossaryLink';

// Default link (opens glossary without specific section)
<GlossaryLink text="Vai al glossario" />
```

### Open Specific Section

```jsx
// Opens BTU section
<GlossaryLink 
  text="Scopri cosa sono i BTU" 
  sectionId="btu" 
/>

// Opens canalizzazioni section
<GlossaryLink 
  text="Info sulle canalizzazioni" 
  sectionId="canalizzazioni" 
/>
```

### Custom Icon

```jsx
// Different icon
<GlossaryLink 
  text="Aiuto" 
  icon="help" 
  sectionId="btu" 
/>

// No icon
<GlossaryLink 
  text="Solo testo" 
  icon={null}
  sectionId="btu" 
/>
```

### Inline Usage in Text

```jsx
<p className="font-enel text-base">
  Per maggiori informazioni sui BTU,{' '}
  <GlossaryLink 
    text="consulta il glossario" 
    sectionId="btu"
    className="inline"
  />
  {' '}per una spiegazione dettagliata.
</p>
```

### Custom Styling

```jsx
// Larger text
<GlossaryLink 
  text="Glossario" 
  sectionId="btu"
  className="text-xl font-enel-bold"
/>
```

### In JSON Configuration (pages.json)

```json
{
  "type": "GlossaryLink",
  "props": {
    "text": "Cosa sono i BTU?",
    "icon": "info",
    "sectionId": "btu"
  }
}
```

## Component Registry

The component is registered in `ComponentRegistry.jsx` as:

```javascript
GlossaryLink: (props) => <StatefulGlossaryLink {...props} />
```

## Styling

The component uses the same styling as the navigation bar glossary link:

```css
- Text color: text-secondary (ENEL secondary color)
- Font: font-enel (Roobert ENEL)
- Text size: text-base (16px)
- Underlined by default
- Icon size: w-5 h-5 (20px)
- Icon color: fill-secondary
- Gap between text and icon: gap-1 (4px)
- Cursor: pointer
- Transitions: transition-all
```

## Accessibility

- ✅ Uses semantic `<button>` element
- ✅ Keyboard accessible (Tab, Enter, Space)
- ✅ Focus visible states
- ✅ Screen reader friendly

## Demo

Run the demo to see all variations:

```bash
npm run dev
```

Navigate to: `http://localhost:5173/?demo=GlossaryLink`

## Integration with NavigationBar

The NavigationBar component uses the same pattern internally:

```jsx
// In NavigationBar.jsx
<button
  onClick={() => setGlossaryOpen(true)}
  className="flex items-center gap-1 text-secondary underline transition-all font-enel text-base cursor-pointer"
>
  Vai al glossario
  <IconRenderer icon="info" className="w-5 h-5" fillClass="fill-secondary" />
</button>
```

The `GlossaryLink` component extracts this pattern into a reusable component.

## Related Components

- **GlossaryModal** - The modal component that displays glossary content
- **NavigationBar** - Uses glossary link internally
- **IconRenderer** - Renders icons from registry

## Notes

- The component manages its own modal state internally
- Each instance creates its own GlossaryModal
- The `sectionId` prop uses the Radix UI Accordion `defaultValue` to open the specified section
- If no `sectionId` is provided, the modal opens with all sections collapsed
