import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import testData from '../assets/mocks/testData.js';
import { createCitySlice } from './slices/citySlice';
import { createNavigationSlice } from './slices/navigationSlice';
import { createPricingSlice } from './slices/pricingSlice';
import { createProductsSlice } from './slices/productsSlice';
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
          set({
            formData: testData.formData,
            currentStep: testData.currentStep || 1,
            currentPageId: testData.currentPageId || null,
            dynamicPages: testData.dynamicPages || [],
          });

          // Trigger all side effects
          setTimeout(() => {
            const state = get();
            state.validation.validateCurrentPage();
            if (state.calculatePricing) state.calculatePricing();
            if (state.generateSplitPages && !testData.dynamicPages?.length) {
              state.generateSplitPages();
            }
            state.products.loadProductsByCity(state.formData.storeCity || state.formData.selectedCity || '');

          }, 0);

          console.log(`Test data loaded:`, testData.formData);
        } else {
          console.warn(`Test data not found or invalid format`);
        }
      },

      getAvailableTestScenarios: () => testData ? ['default'] : [],

      // Component visibility helpers
      shouldRenderComponent: (conditions) => {
        if (!conditions) return true;

        const state = get();
        const formData = state.formData;

        // Handle different condition types
        if (conditions.hasValues) {
          // Check if any of the specified state properties have values
          return conditions.hasValues.some(property => {
            const value = formData[property];
            if (Array.isArray(value)) return value.length > 0;
            if (typeof value === 'object' && value !== null) {
              return Object.values(value).some(v => v && v !== 0);
            }
            return value !== undefined && value !== null && value !== '' && value !== 0;
          });
        }

        if (conditions.hasQuantities) {
          // Check if any quantities are greater than 0
          const quantities = formData[conditions.hasQuantities] || {};
          return Object.values(quantities).some(qty => qty > 0);
        }

        if (conditions.equals) {
          // Check if a state property equals a specific value
          return formData[conditions.equals.property] === conditions.equals.value;
        }

        if (conditions.custom) {
          // Custom function evaluation
          return conditions.custom(formData, state);
        }

        return true;
      },

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
