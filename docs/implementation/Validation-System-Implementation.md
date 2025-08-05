# Validation System Documentation

## 📋 Overview

The ENEL Lumiè Clima application now includes a comprehensive validation system that prevents users from proceeding to the next step until all required form fields are completed and validation rules are satisfied.

## 🏗️ Architecture

### **Validation Configuration (JSON-Driven)**

Validation rules are defined directly in `pages.json` for each page using a `validationRules` property:

```json
{
  "id": "client-selection",
  "title": "...",
  "step": 1,
  "validationRules": {
    "required": ["storeLocation", "consultantName", "storePhone", "storeCity"],
    "custom": [...],
    "conditional": [...]
  },
  "components": [...]
}
```

### **Validation Rule Types**

#### **1. Required Fields**
```json
"validationRules": {
  "required": ["storeLocation", "consultantName", "storePhone", "storeCity"]
}
```
- Validates that specified form fields are not empty
- Automatically generates user-friendly error messages

#### **2. Custom Rules**
```json
"validationRules": {
  "custom": [
    {
      "type": "minQuantity",
      "property": "airconditioningQuantities",
      "minTotal": 1,
      "errorMessage": "Almeno un climatizzatore deve essere selezionato"
    }
  ]
}
```
- `minQuantity`: Validates that quantity objects have a minimum total
- Supports custom error messages
- Extensible for future validation types

#### **3. Conditional Rules**
```json
"validationRules": {
  "conditional": [
    {
      "condition": {
        "property": "needsRemoval",
        "equals": true
      },
      "then": {
        "type": "minQuantity",
        "property": "removalQuantities",
        "minTotal": 1,
        "errorMessage": "Seleziona almeno un impianto da smontare"
      }
    }
  ]
}
```
- If/then validation logic
- Only applies validation rules when specific conditions are met
- Supports nested validation types

## 🔧 Implementation

### **Core Files**

1. **`src/utils/validation.js`** - Core validation logic
2. **`src/store/slices/validationSlice.js`** - Zustand validation state management
3. **`src/components/ui/ValidationErrors.jsx`** - Error display component
4. **Updated `src/store/useAppStore.js`** - Integration with main store

### **Validation Flow**

1. **Form Input Change** → Triggers validation via `setFormValue()`
2. **Validation Engine** → Processes page rules using `validatePage()`
3. **State Update** → Updates validation state in Zustand store
4. **UI Reaction** → Navigation buttons disabled, errors displayed
5. **Next Step Attempt** → Blocked if validation fails

### **Store Integration**

The validation system integrates with Zustand store through:

```javascript
// Validation state
validation: {
  pageValidation: {},      // Validation results by page
  errors: [],              // Current validation errors
  canProceed: false,       // Can proceed to next step
  
  // Methods
  validatePage(),          // Validate specific page
  validateCurrentPage(),   // Validate current page
  canProceedToNextStep(),  // Check if can proceed
  getFieldErrors(),        // Get errors for specific field
  clearValidationErrors()  // Clear all errors
}
```

## 🎯 Page-Specific Validation Rules

### **Page 1: Client Selection**
- **Required**: `storeLocation`, `consultantName`, `storePhone`, `storeCity`
- **Validation**: All text inputs must be filled

### **Page 2: Product Configuration**
- **Required**: At least one air conditioning unit must be selected
- **Rule**: `airconditioningQuantities` total ≥ 1

### **Page 3: Service Configuration**
- **Conditional**: If `needsRemoval` = true, then `removalQuantities` total ≥ 1
- **Conditional**: If `wantsCleaning` = true, then `cleaningQuantities` total ≥ 1

## 🎨 User Experience

### **Visual Feedback**
- **Navigation Button**: Disabled when validation fails
- **Error Messages**: Displayed above navigation bar
- **Real-time Validation**: Updates as user types/selects

### **Error Display Component**
```jsx
<ValidationErrors 
  className="custom-styling" 
  showFieldErrors={false} 
/>
```

### **User-Friendly Messages**
- Clear, actionable error messages in Italian
- Field-specific guidance
- Visual error indicators with icons

## 🔄 Automatic Validation Triggers

Validation automatically runs when:
- User changes any form field value
- User attempts to navigate to next step
- Page is initially loaded

## 🚀 Benefits

1. **User Experience**: Clear feedback prevents frustration
2. **Data Quality**: Ensures complete, valid form submissions
3. **Workflow Integrity**: Prevents incomplete configurations
4. **Maintainability**: JSON-driven rules are easy to modify
5. **Extensibility**: Easy to add new validation types
6. **Consistency**: Unified validation across all pages

## 🔧 Extending Validation

To add new validation types:

1. **Add validation logic** to `src/utils/validation.js`
2. **Update validation slice** to handle new rule types
3. **Add rule configuration** to `pages.json`
4. **Test validation behavior** across different scenarios

Example new validation type:
```json
{
  "type": "emailFormat",
  "property": "email",
  "errorMessage": "Inserisci un indirizzo email valido"
}
```

The validation system is designed to be flexible, maintainable, and user-friendly while ensuring data integrity throughout the application workflow.
