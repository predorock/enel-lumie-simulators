# Copilot Development Instructions for ENEL Lumiè Verticale Clima

## Repository Summary

**ENEL Lumiè Verticale Clima** is a sophisticated React-based air conditioning configurator application built for ENEL sales consultants. It provides a multi-step wizard interface for customers to configure and price air conditioning systems for their homes. The application features dynamic component rendering, JSON-driven configuration, and a comprehensive ENEL design system.

## High Level Repository Information

### Technology Stack
- **React 19.1.0** - Modern React with latest features
- **Vite 6.3.5** - Lightning-fast build tool and development server  
- **Zustand 5.0.7** - Lightweight state management with slice-based architecture
- **Tailwind CSS 4.1.7** - Utility-first CSS with custom ENEL design system
- **JavaScript ES2022+** - Modern JavaScript without TypeScript
- **ESLint 9.25.0** - Code quality and consistency enforcement

### Repository Size & Scope
- **~180 npm dependencies** - Medium-sized React application
- **Multi-step wizard application** - Client-side only, no backend services
- **Component-driven architecture** - Reusable UI components with state wrappers
- **JSON-driven configuration** - Pages and components defined in configuration files
- **Custom design system** - ENEL brand colors, Roobert font family, design tokens

### Runtime Requirements
- **Node.js v20.19.0** (specified in .nvmrc)
- **npm** (package manager)
- **Modern browser with ES2022+ support**
- **No backend dependencies** - Pure frontend application

## Build Instructions & Commands

### Prerequisites
**ALWAYS** use Node.js v20.19.0 before any operations:
```bash
# If using nvm
nvm use
```

### Dependency Installation  
**ALWAYS** run npm install before any development work:
```bash
npm install
# Takes approximately 45-60 seconds
# Installs ~181 packages with 0 vulnerabilities (as of last check)
```

### Development Server
```bash
npm run dev
# Starts Vite development server on http://localhost:5173
# Hot Module Replacement (HMR) enabled
# Startup time: ~1 second
# Leave running during development
```

### Code Quality & Linting
```bash
npm run lint
# Runs ESLint on all JavaScript files
# Currently shows 17 issues (12 errors, 5 warnings) - these are existing issues
# Focus only on fixing NEW errors you introduce
# Build will succeed despite existing ESLint warnings
```

### Production Build
```bash
npm run build
# Creates optimized production build in dist/ folder
# Build time: ~2-3 seconds
# Generates minified JS/CSS, optimized images, font files
# Produces warnings about dynamic imports (normal behavior)
```

### Preview Production Build
```bash
npm run preview
# Serves production build locally for testing
# Use this to validate changes work in production mode
```

### Command Sequencing
**For new changes, always run in this order:**
1. `npm install` (if dependencies changed)
2. `npm run dev` (start development)
3. Make changes and test in browser
4. `npm run lint` (check for new issues)
5. `npm run build` (validate production build)
6. `npm run preview` (test production build)

### Common Build Issues & Solutions

**Issue: ESLint errors prevent build**
- Solution: The project currently has 17 existing ESLint issues that don't prevent builds
- Only fix NEW errors you introduce, not existing ones
- Use `// eslint-disable-next-line` for temporary workarounds if needed

**Issue: Font loading errors**
- Solution: Fonts are in src/assets/fonts/ and properly configured in tailwind.config.js
- Use font-enel, font-enel-light, font-enel-bold CSS classes

**Issue: Import errors for components**
- Solution: All components must be registered in src/components/ComponentRegistry.jsx
- Follow the stateful wrapper pattern for form components

**Issue: Dev server port conflicts**  
- Solution: Vite uses port 5173 by default
- Kill existing processes or use `--port` flag if needed

### Environment Variables
No environment variables required for basic development. Application runs entirely client-side with mock data.

## Project Layout & Architecture

### Core Architecture Pattern
```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   pages.json    │───▶│ ComponentRegistry │───▶│  UI Components  │
│  (Configuration)│    │   (Mapping)      │    │  (Pure UI)      │
└─────────────────┘    └──────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│  Page Renderer  │───▶│ Stateful Wrappers│───▶│  Zustand Store  │
│  (Dynamic)      │    │ (State Logic)    │    │ (State Mgmt)    │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

### Directory Structure
```
src/
├── components/              # React components (MAIN DEVELOPMENT AREA)
│   ├── ui/                 # Pure UI components - NO state management
│   │   ├── TextInput.jsx   # Form controls
│   │   ├── CustomSelect.jsx# Dropdowns  
│   │   ├── CostSummary.jsx # Price displays
│   │   └── ...            
│   ├── layout/             # Page structure components
│   │   └── PageLayout.jsx  # Main application layout
│   ├── icons/              # SVG icon components
│   ├── Stateful*.jsx       # State-connected component wrappers
│   ├── ComponentRegistry.jsx # Component name → component mapping
│   └── PageRenderer.jsx    # Dynamic page rendering engine
├── config/                 # JSON configuration files (CRITICAL)
│   ├── pages.json         # Page definitions, validation rules
│   ├── steps.json         # Navigation flow configuration  
│   └── comuni.json        # City data for location selection
├── store/                  # Zustand state management
│   ├── useAppStore.js     # Main store configuration
│   └── slices/            # State slices (navigation, pricing, etc.)
├── assets/                # Static resources
│   ├── fonts/             # Roobert ENEL font files (.woff, .woff2)
│   ├── images/            # SVG illustrations and logos
│   └── mocks/             # Test data and API mocks
├── utils/                 # Utility functions
│   ├── validation.js      # Form validation logic
│   └── api.js             # API communication (currently mocked)
├── App.jsx                # Root component with page routing
├── main.jsx               # Application entry point
└── index.css              # Global styles, font definitions
```

### Configuration Files (Root Level)
```
├── package.json           # Dependencies, scripts (MODIFY: when adding deps)
├── vite.config.js        # Build configuration (RARELY MODIFY)
├── tailwind.config.js    # Design system tokens (MODIFY: for styling changes)
├── eslint.config.js      # Code quality rules (RARELY MODIFY) 
├── .nvmrc                # Node version lock (DO NOT MODIFY)
├── .vscode/settings.json # VS Code configuration (HELPFUL FOR DEVELOPMENT)
└── index.html            # HTML template (RARELY MODIFY)
```

### Key Dependencies & Relationships

**Critical Files for Component Development:**
1. `src/components/ComponentRegistry.jsx` - Register ALL new components here
2. `src/config/pages.json` - Configure component usage and properties
3. `src/store/useAppStore.js` - State management integration

**State Management Flow:**
```javascript
User Input → Stateful Wrapper → useAppStore Hook → Zustand Store → UI Update
```

**Component Registration Flow:**
```javascript
UI Component → Stateful Wrapper → ComponentRegistry → pages.json → PageRenderer
```

### ENEL Design System (CRITICAL)

**Typography Classes (ALWAYS USE THESE):**
```css
.font-enel          /* Roobert ENEL Regular - standard text */
.font-enel-light    /* Roobert ENEL Light - subtle text */  
.font-enel-bold     /* Roobert ENEL Bold - headings, prices, buttons */
```

**Brand Colors:**
```css
#002466  /* ENEL Primary Blue - main brand color */
#5738ff  /* Purple - selected states, highlights */
#667790  /* Gray - secondary text, borders */
#c2cddd  /* Light Gray - dividers, backgrounds */
#ffffff  /* White - text on blue backgrounds */
```

**Standard Component Sizing:**
```css
.h-10    /* 40px - inputs, buttons */
.h-6     /* 24px - icons */
.space-y-2 /* 8px vertical spacing */
.px-3    /* 12px horizontal padding */
```

### Component Creation Pattern (FOLLOW EXACTLY)

**1. Create Pure UI Component** (`src/components/ui/NewComponent.jsx`):
```javascript
const NewComponent = ({ value, onChange, placeholder, className = '' }) => (
  <input
    className={`h-10 px-3 pt-3 pb-1 text-sm border rounded focus:outline-none focus:ring-2 font-enel ${className}`}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder}
  />
);
export default NewComponent;
```

**2. Create Stateful Wrapper** (`src/components/StatefulNewComponent.jsx`):
```javascript
import useAppStore from '../store/useAppStore';
import NewComponent from './ui/NewComponent';

const StatefulNewComponent = ({ stateProperty, ...props }) => {
  const store = useAppStore();
  const value = store.formData[stateProperty] || '';
  const setValue = (newValue) => store.setFormValue(stateProperty, newValue);
  
  return <NewComponent value={value} onChange={setValue} {...props} />;
};
export default StatefulNewComponent;
```

**3. Register in ComponentRegistry** (`src/components/ComponentRegistry.jsx`):
```javascript
import StatefulNewComponent from './StatefulNewComponent';

const componentRegistry = {
  // ... existing components
  NewComponent: (props) => <StatefulNewComponent {...props} />,
};
```

**4. Configure in pages.json** (`src/config/pages.json`):
```json
{
  "type": "NewComponent",
  "props": {
    "placeholder": "Enter value",
    "stateProperty": "newComponentValue"
  }
}
```

### Validation System Integration

The application includes a comprehensive validation system. When adding form components:

**Add validation rules to pages.json:**
```json
{
  "validationRules": {
    "required": ["stateProperty"],
    "custom": [
      {
        "type": "minLength",
        "property": "stateProperty", 
        "value": 3,
        "errorMessage": "Minimum 3 characters required"
      }
    ]
  }
}
```

### Common Patterns & Anti-Patterns

**✅ CORRECT Patterns:**
- Use Zustand store for ALL form data: `const value = store.formData[stateProperty]`
- Register components in ComponentRegistry: `NewComponent: (props) => <StatefulWrapper {...props} />`
- Use ENEL font classes: `className="font-enel-bold"`
- Follow stateful wrapper pattern for form components
- Configure components in pages.json for dynamic rendering

**❌ AVOID These Patterns:**
- Local state for form data: `const [value, setValue] = useState('')`
- Direct component imports in PageRenderer: `import TextInput from './ui/TextInput'`
- Inline font styles: `style={{ fontFamily: 'Roobert' }}`
- Hardcoded component rendering without registry
- Modifying core files without understanding impact

### VS Code Configuration

The project includes comprehensive VS Code configuration in `.vscode/settings.json`:
- Auto-format on save with ESLint
- Tailwind CSS IntelliSense  
- Emmet abbreviations for React
- Debug configurations for Chrome/Edge
- File association settings

### Debugging & Testing

**Development Mode:**
- Use browser DevTools for component inspection
- Zustand DevTools integration available
- React Developer Tools recommended

**Test Data Loading:**
- Add `?test=true` to URL for mock data
- Add `?demo=acfeatures` for component demos
- Test data available in `src/assets/mocks/`

### Relationship to Existing Documentation

This repository already contains extensive AI development guidelines in `.github/INSTRUCTIONS.md` with detailed component patterns and best practices. **Always refer to both files:**

- **This file** - Build processes, architecture overview, command reference
- **`.github/INSTRUCTIONS.md`** - Detailed component creation patterns, design system specifics

Both files complement each other and should be used together for optimal development efficiency.

### Critical Success Factors

1. **Always use the stateful wrapper pattern** for form components
2. **Register ALL components** in ComponentRegistry.jsx
3. **Follow ENEL design system** typography and colors
4. **Test with npm run build** before finalizing changes
5. **Maintain consistency** with existing architectural patterns
6. **Use Zustand store** for all application state, never local state for form data
7. **Reference both instruction files** for complete development guidance

This architecture ensures maintainability, consistency, and proper separation of concerns across the application.