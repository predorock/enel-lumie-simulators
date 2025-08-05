# Pricing Slice Implementation Documentation

## 📊 Overview

The pricing slice has been successfully implemented to handle air conditioning unit price calculations according to the PRICES.md specification.

## 🏗️ Implementation Details

### **Pricing Structure**
```javascript
const UNIT_PRICES = {
  monosplit: 100,   // €100 per unit
  dualsplit: 100,   // €100 per unit
  trialsplit: 150,  // €150 per unit
};
```

### **State Structure**
```javascript
pricingState: {
  unitPrices: {
    monosplit: 100,
    dualsplit: 100,
    trialsplit: 150
  },
  calculations: {
    monosplitTotal: 0,
    dualsplitTotal: 0,
    trialsplitTotal: 0,
    grandTotal: 0
  }
}
```

## 🔧 Files Modified/Created

### **1. Created: `src/store/slices/pricingSlice.js`**
- **Purpose**: Dedicated pricing state slice
- **Features**:
  - Unit price constants
  - Total calculation logic
  - Cost breakdown functions
  - Price update methods

### **2. Updated: `src/store/useAppStore.js`**
- **Changes**:
  - Imported `createPricingSlice`
  - Integrated pricing slice into main store
  - Added automatic pricing calculation trigger when quantities change

### **3. Updated: `src/components/ui/CostSummary.jsx`**
- **Changes**:
  - Replaced manual calculations with pricing slice data
  - Uses `getGrandTotal()` for total cost display
  - Shows AC unit costs in "Costo climatizzatore" section

## 🎯 How It Works

### **Automatic Calculation**
1. When `airconditioningQuantities` changes in the store
2. `setFormValue` triggers `calculatePricing()`
3. Pricing slice calculates individual and total costs
4. CostSummary component displays the updated total

### **Calculation Logic**
```javascript
// For each AC type:
const monosplitTotal = (quantities.monosplit || 0) * unitPrices.monosplit;
const dualsplitTotal = (quantities.dualsplit || 0) * unitPrices.dualsplit;
const trialsplitTotal = (quantities.trialsplit || 0) * unitPrices.trialsplit;

// Grand total:
const grandTotal = monosplitTotal + dualsplitTotal + trialsplitTotal;
```

## 📋 Available Actions

### **Core Actions**
- `calculatePricing()` - Recalculates all totals based on current quantities
- `getGrandTotal()` - Returns current total cost
- `getCostBreakdown()` - Returns itemized cost breakdown
- `resetPricing()` - Resets all calculations to zero

### **Utility Actions**
- `updateUnitPrice(type, price)` - Updates price for specific AC type
- `setPricingState(updates)` - Direct state updates

## 🎨 Display Integration

### **CostSummary Component**
- **"Costo climatizzatore"**: Shows total AC unit cost from pricing slice
- **"Spese installazione"**: Shows "–" (for future implementation)
- **"Costo totale climatizzatore"**: Shows grand total

### **Real-time Updates**
- Prices update automatically when quantities change
- No manual refresh required
- Consistent with existing component architecture

## 🔍 Testing

### **How to Test**
1. Navigate to Step 2 (checklist-configuratore)
2. Increment/decrement AC quantities using SplitterQtyConfigurator
3. Observe CostSummary updates in real-time

### **Expected Results**
- **1 Monosplit**: €100,00
- **1 Dualsplit**: €100,00
- **1 Trialsplit**: €150,00
- **2 Monosplit + 1 Trialsplit**: €350,00 (200 + 150)

## 🚀 Future Extensions

### **Ready for Enhancement**
The pricing slice is designed to easily accommodate:
- **Installation costs** (when ready to implement)
- **Service costs** (removal, cleaning)
- **Ductwork costs** (from DuctworkConfigurator)
- **Dynamic pricing** (based on installation type, room size)

### **Extension Points**
```javascript
// Example future enhancement:
const calculateTotalWithServices = () => {
  const acCost = getGrandTotal();
  const installationCost = calculateInstallationCost();
  const serviceCost = calculateServiceCost();
  const ductworkCost = calculateDuctworkCost();
  
  return acCost + installationCost + serviceCost + ductworkCost;
};
```

## ✅ Implementation Status

- ✅ **Pricing Slice Created** - Complete with all required functionality
- ✅ **Store Integration** - Seamlessly integrated into main Zustand store
- ✅ **Automatic Calculations** - Triggers on quantity changes
- ✅ **UI Integration** - CostSummary displays calculated totals
- ✅ **Error-Free** - No compilation or runtime errors
- ✅ **Architecture Compliant** - Follows existing slice pattern

## 📚 Related Documentation

- **[PRICES.md](/docs/prices/PRICES.md)** - Original pricing specification
- **[State Slice Architecture](/docs/architecture/State-Slice-Architecture.md)** - Slice pattern documentation
- **[State Management Guide](/docs/architecture/state-management.md)** - Store architecture

---

*The pricing slice implementation successfully provides automatic AC unit cost calculations while maintaining the existing application architecture and user experience.*
