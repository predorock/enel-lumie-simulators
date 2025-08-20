/**
 * Pricing State Slice
 * Dedicated slice for managing pricing calculations and unit costs
 */

// Unit prices for different AC types and services
export const UNIT_PRICES = {
  // AC Units (purchase)
  purchase: {
    monosplit: 100,
    dualsplit: 100,
    trialsplit: 150,
  },
  // Removal/Dismount Service
  removal: {
    monosplit: 60,
    dualsplit: 90,
    trialsplit: 120,
  },
  // Cleaning Service
  cleaning: {
    monosplit: 75,
    dualsplit: 150,
    trialsplit: 220,
  },
};

export const initialCalculations = {
  purchase: {
    monosplit: 0,
    dualsplit: 0,
    trialsplit: 0,
    total: 0,
  },
  removal: {
    monosplit: 0,
    dualsplit: 0,
    trialsplit: 0,
    total: 0,
  },
  cleaning: {
    monosplit: 0,
    dualsplit: 0,
    trialsplit: 0,
    total: 0,
  },
  // Total cost of installation
  installationTotal: 0,
  // Total cost of chosen products
  productsTotal: 0,
  // installationTotal + productsTotal
  grandTotal: 0,
}

// Initial state for pricing slice
export const initialPricingState = {
  unitPrices: UNIT_PRICES,
  calculations: {
    // Purchase calculations
    ...initialCalculations
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
    const { unitPrices } = state.pricingState;

    // get quantities from form data
    const quantities = state.formData.airconditioningQuantities || {};
    const removalQuantities = state.formData.removalQuantities || {};
    const cleaningQuantities = state.formData.cleaningQuantities || {};

    // configs
    const configs = state.formData.airConditioningConfigs || {};

    // Calculate purchase totals
    const purchaseMonosplitTotal = (quantities.monosplit || 0) * unitPrices.purchase.monosplit;
    const purchaseDualsplitTotal = (quantities.dualsplit || 0) * unitPrices.purchase.dualsplit;
    const purchaseTrialsplitTotal = (quantities.trialsplit || 0) * unitPrices.purchase.trialsplit;
    const purchaseTotal = purchaseMonosplitTotal + purchaseDualsplitTotal + purchaseTrialsplitTotal;

    // Calculate removal totals
    const removalMonosplitTotal = (removalQuantities.monosplit || 0) * unitPrices.removal.monosplit;
    const removalDualsplitTotal = (removalQuantities.dualsplit || 0) * unitPrices.removal.dualsplit;
    const removalTrialsplitTotal = (removalQuantities.trialsplit || 0) * unitPrices.removal.trialsplit;
    const removalTotal = removalMonosplitTotal + removalDualsplitTotal + removalTrialsplitTotal;

    // Calculate cleaning totals
    const cleaningMonosplitTotal = (cleaningQuantities.monosplit || 0) * unitPrices.cleaning.monosplit;
    const cleaningDualsplitTotal = (cleaningQuantities.dualsplit || 0) * unitPrices.cleaning.dualsplit;
    const cleaningTrialsplitTotal = (cleaningQuantities.trialsplit || 0) * unitPrices.cleaning.trialsplit;
    const cleaningTotal = cleaningMonosplitTotal + cleaningDualsplitTotal + cleaningTrialsplitTotal;

    // Calculate grand total
    const installationTotal = purchaseTotal + removalTotal + cleaningTotal;

    // Calculate products total based on all configuration-specific selected products
    const availableProducts = state.products?.items || [];


    const productsTotal = Object.values(configs).reduce((total, config) => {
      if (config?.selected === null) return total; // Skip if no product selected

      const product = availableProducts.find(p => p.id === config.selected);
      if (!product?.price) return total;

      // Parse price if it's a string, otherwise use as number
      const price = typeof product.price === 'string'
        ? parseFloat(product.price.replace(/[^\d.,]/g, '').replace(',', '.'))
        : product.price;
      return total + (isNaN(price) ? 0 : price);
    }, 0);    // Grand total

    const grandTotal = installationTotal + productsTotal;

    // Update pricing state
    get().setPricingState({
      calculations: {
        purchase: {
          monosplit: purchaseMonosplitTotal,
          dualsplit: purchaseDualsplitTotal,
          trialsplit: purchaseTrialsplitTotal,
          total: purchaseTotal
        },
        removal: {
          monosplit: removalMonosplitTotal,
          dualsplit: removalDualsplitTotal,
          trialsplit: removalTrialsplitTotal,
          total: removalTotal
        },
        cleaning: {
          monosplit: cleaningMonosplitTotal,
          dualsplit: cleaningDualsplitTotal,
          trialsplit: cleaningTrialsplitTotal,
          total: cleaningTotal
        },
        installationTotal,
        productsTotal,
        grandTotal
      }
    });

    return installationTotal;
  },
  // Get current total cost
  getGrandTotal: () => {
    const state = get();
    return state.pricingState.calculations.grandTotal;
  },
  // Get current products total
  getProductsTotal: () => {
    const state = get();
    return state.pricingState.calculations.productsTotal;
  },
  // Get current installation total
  getInstallationTotal: () => {
    const state = get();
    return state.pricingState.calculations.installationTotal;
  },
  // Get purchase total
  getPurchaseTotal: () => {
    const state = get();
    return state.pricingState.calculations.purchase.total;
  },

  // Get removal total
  getRemovalTotal: () => {
    const state = get();
    return state.pricingState.calculations.removal.total;
  },

  // Get cleaning total
  getCleaningTotal: () => {
    const state = get();
    return state.pricingState.calculations.cleaning.total;
  },

  // Get unit prices for all services and types
  getUnitPrices: () => {
    const state = get();
    return state.pricingState.unitPrices;
  },

  getUnitTotal: (type, unit) => {
    const state = get();
    if (!type || !unit) return 0;
    if (type in state.pricingState.calculations) {
      return state.pricingState.calculations[type][unit] || 0;
    }
    console.warn('Unknown type:', type);
    return 0; // Fallback if type is not recognized
  },

  // Get products total for a specific configuration
  getConfigurationProductsTotal: (configType, configIndex) => {
    const state = get();
    const stateProperty = `selectedProducts_${configType}_${configIndex}`;
    const selectedProducts = state.formData[stateProperty] || [];
    const availableProducts = state.products?.items || [];

    return selectedProducts.reduce((total, productId) => {
      const product = availableProducts.find(p => p.id === productId);
      if (product && product.price) {
        const price = typeof product.price === 'string'
          ? parseFloat(product.price.replace(/[^\d.,]/g, '').replace(',', '.'))
          : product.price;
        return total + (isNaN(price) ? 0 : price);
      }
      return total;
    }, 0);
  },

  // Get all configuration-specific selected products
  getAllConfigurationProducts: () => {
    const state = get();
    const configProducts = {};

    Object.keys(state.formData)
      .filter(key => key.startsWith('selectedProducts_'))
      .forEach(key => {
        const products = state.formData[key] || [];
        configProducts[key] = products;
      });

    return configProducts;
  },

  // Reset pricing calculations
  resetPricing: () => {
    get().setPricingState({
      calculations: {
        ...initialCalculations
      }
    });
  },

  resetRemoval: () => {
    const state = get();
    state.setFormValue('removalQuantities', {});
    state.calculatePricing();
    return state;
  },

  resetCleaning: () => {
    const state = get();
    state.setFormValue('cleaningQuantities', {});
    state.calculatePricing();
    return state;
  },

  checkRemoval: (property, value) => {
    const state = get();
    state.setFormValue(property, value);
    if (!value) {
      state.resetRemoval();
    }
  },

  checkCleaning: (property, value) => {
    const state = get();
    state.setFormValue(property, value);
    if (!value) {
      state.resetCleaning();
    }
  },
});
