# Navigation Bar Glossary Integration

## Changes Made

### 1. Created Glossary Data Configuration
**File**: `src/config/glossaryData.js`
- Centralized glossary content with 5 main sections:
  - Tipologia di installazione
  - BTU
  - Lavaggio dell'impianto
  - Canalizzazioni
  - Funzionalità climatizzatori
- Exportable for use throughout the application

### 2. Updated NavigationBar Component
**File**: `src/components/ui/NavigationBar.jsx`

**Added imports**:
```jsx
import { useState } from 'react';
import GlossaryModal from './GlossaryModal';
import glossaryData from '../../config/glossaryData';
```

**Added state management**:
```jsx
const [glossaryOpen, setGlossaryOpen] = useState(false);
```

**Updated layout**:
- Changed container from `justify-end` to `justify-between`
- Added left-side glossary trigger button
- Kept navigation buttons on the right side

**Glossary trigger button**:
```jsx
<button
  onClick={() => setGlossaryOpen(true)}
  className="flex items-center gap-2 text-secondary hover:underline transition-all font-enel-bold text-sm"
>
  Vai al glossario
  <IconRenderer icon="info" className="w-5 h-5" />
</button>
```

**Integrated modal**:
```jsx
<GlossaryModal
  open={glossaryOpen}
  onOpenChange={setGlossaryOpen}
  items={glossaryData}
/>
```

## Design Compliance

✅ **Figma Design**: Matches the provided Figma screenshot
- "Vai al glossario" text in secondary color (pink/red)
- Info icon on the right of text
- Bold font (font-enel-bold)
- Positioned on the left side of navigation bar
- Underline on hover

✅ **ENEL Patterns**: Follows project architecture
- Uses IconRenderer for consistent icon rendering
- Uses theme colors (text-secondary)
- Uses ENEL font classes (font-enel-bold)
- Integrates with existing GlossaryModal component

## User Experience

1. **Accessibility**: Users can access glossary from any page with navigation bar
2. **Visual feedback**: Hover underline indicates clickability
3. **Modal behavior**: Clicking opens modal, easy to close with X button or outside click
4. **Content organization**: Accordion structure makes glossary easy to navigate

## Files Modified

- `src/components/ui/NavigationBar.jsx` - Added glossary trigger and modal
- `src/config/glossaryData.js` - NEW: Centralized glossary data

## Files Referenced

- `src/components/ui/GlossaryModal.jsx` - Existing modal component
- `src/components/icons/IconRenderer.jsx` - Icon rendering
- `src/components/ui/Button.jsx` - Navigation buttons

## Testing Checklist

- [ ] Glossary link appears on left side of navigation bar
- [ ] Clicking "Vai al glossario" opens modal
- [ ] Modal displays all 5 glossary sections
- [ ] Accordion items expand/collapse correctly
- [ ] Modal closes with X button
- [ ] Modal closes when clicking outside
- [ ] Hover effect on glossary link works
- [ ] No errors in console
- [ ] Works on all pages with NavigationBar

## Notes

- Glossary data is now centralized in `src/config/glossaryData.js` for easy maintenance
- Can be extended to support opening modal with specific accordion item by passing `defaultOpenItem` prop
- Modal state is local to NavigationBar component (doesn't persist across navigation)
