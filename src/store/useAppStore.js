import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import testData from '../assets/mocks/testData.js';
import { createCitySlice } from './slices/citySlice';
import { createNavigationSlice } from './slices/navigationSlice';
import { createPricingSlice } from './slices/pricingSlice';
import { createProductsSlice } from './slices/productsSlice';
import createRendererSlice from './slices/rendererSlice.js';
import { createReportSlice } from './slices/reportSlice';
import { createValidationSlice } from './slices/validationSlice.js';

const useAppStore = create(
  devtools(
    (set, get) => ({
      // Initialize store
      _initialized: false,
      initializeStore: () => {
        const state = get();
        if (!state._initialized) {
          // Load test data in development if URL parameter is present
          if (import.meta.env.DEV && typeof window !== 'undefined' && window.location.search.includes('test=')) {
            const params = new URLSearchParams(window.location.search);
            const testScenario = params.get('test');
            if (testScenario === 'true' || testScenario === 'default') {
              setTimeout(() => state.loadTestData('default'), 0);
            }
          }

          // Initialize validation for the first page
          setTimeout(() => {
            const currentState = get();
            currentState.validation.validateCurrentPage();
          }, 0);
          set({ _initialized: true });
        }
      },

      // Form data state
      formData: {},

      // Form data actions
      setFormValue: (property, value) => {
        const previousValue = get().formData[property];

        set((state) => ({
          formData: {
            ...state.formData,
            [property]: value
          }
        }));

        // Trigger validation after form value change
        const state = get();
        state.validation.validateCurrentPage();

        // Trigger pricing calculation when quantities change
        if (property === 'airconditioningQuantities' ||
          property === 'removalQuantities' ||
          property === 'cleaningQuantities') {
          setTimeout(() => get().calculatePricing(), 0);
        }

        // Load products when city is selected or changed
        if (property === 'storeCity' && value && value !== previousValue) {
          console.log(`🏙️ City changed from "${previousValue}" to "${value}", loading products...`);
          setTimeout(() => {
            const currentState = get();
            if (currentState.products && currentState.products.loadProductsByCity) {
              currentState.products.loadProductsByCity(value);
            } else {
              console.warn('Products slice or loadProductsByCity method not available');
            }
          }, 0);
        }
      },

      getFormValue: (property) => get().formData[property] || '',

      clearFormData: () => set({ formData: {} }),

      resetFormData: () => set({ formData: {} }),

      // Test data loading
      loadTestData: (scenarioName = 'default') => {
        if (testData && testData.formData) {
          const state = get();
          set({
            formData: testData.formData,
            currentStep: testData.currentStep || 1,
            currentPageId: testData.currentPageId || null,
            dynamicPages: testData.dynamicPages || [],
          });

          state.report.setReportLoading(true);

          // Trigger all side effects
          setTimeout(async () => {
            const _state = get();
            _state.validation.validateCurrentPage();

            if (_state.generateSplitPages && !testData.dynamicPages?.length) {
              _state.generateSplitPages();
            }

            await _state.products.loadProductsByCity(_state.formData.storeCity || _state.formData.selectedCity || '');

            if (_state.calculatePricing) _state.calculatePricing();

            _state.report.setReportData(testData.report.data.result || {});
          }, 0);

          console.log(`Test data loaded:`, testData.formData);
        } else {
          console.warn(`Test data not found or invalid format`);
        }
      },

      getAvailableTestScenarios: () => testData ? ['default'] : [],

      // Renderer slice integration
      ...createRendererSlice(set, get),

      // Navigation slice integration
      ...createNavigationSlice(set, get),

      // City slice integration
      ...createCitySlice(set, get),

      // Pricing slice integration
      ...createPricingSlice(set, get),

      // Products slice integration
      ...createProductsSlice(set, get),

      // Report slice integration
      ...createReportSlice(set, get),

      // Validation slice integration
      ...createValidationSlice(set, get),
    }),
    {
      name: 'enel-clima-store', // for Redux DevTools
    }
  )
);

export default useAppStore;
