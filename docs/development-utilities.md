# Development Scripts & Utilities

This document describes the development automation scripts and utilities available for the ENEL air conditioning configurator project.

## 📝 Available Scripts

### **Package.json Scripts**
```json
{
  "dev": "vite",
  "build": "vite build", 
  "preview": "vite preview",
  "test": "vitest",
  "test:coverage": "vitest --coverage",
  "lint": "eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0",
  "lint:fix": "eslint src --ext js,jsx --fix"
}
```

### **VS Code Tasks** 
Located in `.vscode/tasks.json`:

- **Dev Server**: Start Vite development server
- **Build**: Production build with Vite  
- **Preview**: Preview production build
- **Lint**: Run ESLint code analysis
- **Lint Fix**: Auto-fix ESLint issues

## 🔧 Font System Management

The font refactoring has been completed and now uses unified CSS classes. See [font-refactor.md](./font-refactor.md) for complete details.

**Unified CSS Classes**:
```css
.font-enel       /* Roobert ENEL Regular */
.font-enel-light /* Roobert ENEL Light */  
.font-enel-bold  /* Roobert ENEL Bold */
```

**Migration Pattern**:
- `font-['Roobert']` → `font-enel`
- `font-['Roobert_Bold']` → `font-enel-bold`
- `style={{ fontFamily: 'Roobert' }}` → `font-enel`

## 🛠️ Development Workflow

### **Start Development**
```bash
npm run dev
# or use VS Code task: Ctrl+Shift+P → "Run Task" → "Dev Server"
```

### **Code Quality**
```bash
npm run lint        # Check for issues
npm run lint:fix    # Auto-fix issues
```

### **Testing**
```bash
npm run test                 # Run tests
npm run test:coverage        # Run with coverage
npm run test -- --watch      # Watch mode
```

### **Production Build**
```bash
npm run build    # Build for production
npm run preview  # Preview build locally
```

## 🐛 Debug Configurations

Available debug configurations in VS Code:

- **Chrome - Debug**: Main development debugging
- **Edge - Debug**: Alternative browser debugging
- **Demo Mode**: Debug with demo data loaded
- **Test Data Mode**: Debug with mock product data
- **Attach to Vite**: Attach to running dev server
- **Node.js Debug**: Server-side debugging

## 📦 Build & Deployment

### **Build Process**
```bash
npm run build
```

This creates an optimized production build in the `dist/` folder with:
- Minified JavaScript and CSS
- Optimized images and assets
- Source maps for debugging
- Font files properly bundled

### **Preview Build**
```bash
npm run preview
```

Serves the production build locally for testing before deployment.

## 🔍 Code Analysis

### **ESLint Configuration**
- Extends React and React Hooks rules
- Tailwind CSS class sorting
- Custom rules for code consistency
- Auto-fix capability for common issues

### **VS Code Integration**
- Auto-format on save
- ESLint integration with error highlighting
- Tailwind CSS IntelliSense
- Emmet abbreviations for React

## 🚀 Performance Optimization

### **Vite Configuration**
- Fast HMR (Hot Module Replacement)
- Tree shaking for smaller bundles
- Dynamic imports for code splitting
- Asset optimization and compression

### **Build Optimization**
- Component lazy loading
- Image optimization
- CSS purging with Tailwind
- Font loading optimization

## 📝 Notes

- All font-related automation has been consolidated into the unified CSS class system
- The `replace-fonts.sh` script has been removed as font refactoring is complete
- VS Code configuration provides comprehensive debugging and development support
- Build process is optimized for ENEL's production requirements

## 📚 Related Documentation

- [Font Refactoring Guide](./font-refactor.md) - Complete font system documentation
- [Development Guide](./development-guide.md) - General development information
- [Architecture Overview](./architecture/README.md) - Technical architecture details

For troubleshooting common development issues, check the relevant component documentation or VS Code debug configurations.
