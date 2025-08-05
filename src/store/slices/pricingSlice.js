/**
 * Pricing State Slice
 * Dedicated slice for managing pricing calculations and unit costs
 */

// Unit prices for different AC types
export const UNIT_PRICES = {
  monosplit: 100,
  dualsplit: 100,
  trialsplit: 150,
};

// Initial state for pricing slice
export const initialPricingState = {
  unitPrices: UNIT_PRICES,
  calculations: {
    monosplitTotal: 0,
    dualsplitTotal: 0,
    trialsplitTotal: 0,
    grandTotal: 0,
  },
};

// Pricing slice actions factory
export const createPricingSlice = (set, get) => ({
  // Pricing state
  pricingState: initialPricingState,
  
  // Pricing actions
  setPricingState: (updates) => set((state) => ({
    pricingState: {
      ...state.pricingState,
      ...updates
    }
  })),
  
  // Calculate total cost based on quantities
  calculatePricing: () => {
    const state = get();
    const quantities = state.formData.airconditioningQuantities || {};
    const { unitPrices } = state.pricingState;
    
    // Calculate individual totals
    const monosplitTotal = (quantities.monosplit || 0) * unitPrices.monosplit;
    const dualsplitTotal = (quantities.dualsplit || 0) * unitPrices.dualsplit;
    const trialsplitTotal = (quantities.trialsplit || 0) * unitPrices.trialsplit;
    
    // Calculate grand total
    const grandTotal = monosplitTotal + dualsplitTotal + trialsplitTotal;
    
    // Update pricing state
    get().setPricingState({
      calculations: {
        monosplitTotal,
        dualsplitTotal,
        trialsplitTotal,
        grandTotal,
      }
    });
    
    return grandTotal;
  },
  
  // Get current grand total
  getGrandTotal: () => {
    const state = get();
    return state.pricingState.calculations.grandTotal;
  },
  
  // Get breakdown of costs
  getCostBreakdown: () => {
    const state = get();
    const quantities = state.formData.airconditioningQuantities || {};
    const { calculations, unitPrices } = state.pricingState;
    
    return {
      items: [
        {
          type: 'monosplit',
          quantity: quantities.monosplit || 0,
          unitPrice: unitPrices.monosplit,
          total: calculations.monosplitTotal,
          label: 'Monosplit'
        },
        {
          type: 'dualsplit',
          quantity: quantities.dualsplit || 0,
          unitPrice: unitPrices.dualsplit,
          total: calculations.dualsplitTotal,
          label: 'Dualsplit'
        },
        {
          type: 'trialsplit',
          quantity: quantities.trialsplit || 0,
          unitPrice: unitPrices.trialsplit,
          total: calculations.trialsplitTotal,
          label: 'Trialsplit'
        }
      ].filter(item => item.quantity > 0), // Only show items with quantity > 0
      grandTotal: calculations.grandTotal
    };
  },
  
  // Update unit prices (for future use)
  updateUnitPrice: (type, price) => {
    const state = get();
    const newUnitPrices = {
      ...state.pricingState.unitPrices,
      [type]: price
    };
    
    get().setPricingState({
      unitPrices: newUnitPrices
    });
    
    // Recalculate after price change
    get().calculatePricing();
  },
  
  // Reset pricing calculations
  resetPricing: () => {
    get().setPricingState({
      calculations: {
        monosplitTotal: 0,
        dualsplitTotal: 0,
        trialsplitTotal: 0,
        grandTotal: 0,
      }
    });
  },
});
