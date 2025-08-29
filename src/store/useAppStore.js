import { create } from 'zustand';
import { devtools, subscribeWithSelector } from 'zustand/middleware';
import { createCitySlice } from './slices/citySlice';
import { createFormDataSlice } from './slices/formDataSlice.js';
import { createLeadSlice } from './slices/leadSlice.js';
import { createNavigationSlice } from './slices/navigationSlice';
import { createPricingSlice } from './slices/pricingSlice';
import { createProductsSlice, createProductSubscriptions } from './slices/productsSlice';
import { createRendererSlice } from './slices/rendererSlice.js';
import { createReportSlice } from './slices/reportSlice';
import { createTestingSlice } from './slices/testingSlice.js';
import { createValidationSlice, createValidationSubscriptions } from './slices/validationSlice.js';

const store = (set, get) => ({
  // Initialize store
  _initialized: false,
  initializeStore: () => {
    const state = get();
    if (!state._initialized) {
      // Load test data in development if URL parameter is present
      if (import.meta.env.DEV && typeof window !== 'undefined' && window.location.search.includes('test=')) {
        const params = new URLSearchParams(window.location.search);
        const testScenario = params.get('test');
        if (testScenario) {
          setTimeout(() => state.testing.loadTestData(testScenario), 0);
        }
      }


      // Load allowed URL parameters into formData
      state.loadUrlParams();

      set({ _initialized: true });
    }
  },

  // Renderer slice integration
  ...createRendererSlice(set, get),

  // Navigation slice integration
  ...createNavigationSlice(set, get),

  // Form data slice integration
  ...createFormDataSlice(set, get),

  // City slice integration
  ...createCitySlice(set, get),

  // Pricing slice integration
  ...createPricingSlice(set, get),

  // Products slice integration
  ...createProductsSlice(set, get),

  // Report slice integration
  ...createReportSlice(set, get),

  ...createLeadSlice(set, get),

  // Validation slice integration
  ...createValidationSlice(set, get),

  // Testing slice integration
  ...createTestingSlice(set, get)
})

const useAppStore = create(
  devtools(
    subscribeWithSelector(store),
    {
      name: 'enel-clima-store', // for Redux DevTools
    }
  )
);

createValidationSubscriptions(useAppStore);
createProductSubscriptions(useAppStore);
export default useAppStore;
