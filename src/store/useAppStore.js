import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import pagesConfig from '../config/pages.json';
import stepsConfig from '../config/steps.json';
import { createCitySlice } from './slices/citySlice';
import { createPricingSlice } from './slices/pricingSlice';
import { createValidationSlice } from './slices/validationSlice.simple';

const useAppStore = create(
  devtools(
    (set, get) => ({
      // Step counter state - now based on pages config
      currentStep: 1, // Start from step 1 instead of 0
      currentPageId: pagesConfig.pages[0]?.id || null, // Track current page by ID
      totalSteps: pagesConfig.pages.length,
      
      // Initialize store
      _initialized: false,
      initializeStore: () => {
        const state = get();
        if (!state._initialized) {
          // Initialize validation for the first page
          setTimeout(() => {
            const currentState = get();
            currentState.validation.validateCurrentPage();
          }, 0);
          set({ _initialized: true });
        }
      },
      
      // Steps configuration
      steps: stepsConfig.steps,
      
      // Step counter actions
      setCurrentStep: (step) => set({ currentStep: step }),
      setCurrentPageId: (pageId) => {
        const page = pagesConfig.pages.find(p => p.id === pageId);
        if (page) {
          set({ currentPageId: pageId, currentStep: page.step });
          // Reset and initialize validation for the new page
          const state = get();
          state.validation.clearValidationErrors();
          setTimeout(() => {
            const newState = get();
            newState.validation.validateCurrentPage();
          }, 0);
        }
      },
      nextStep: () => {
        const state = get();
        
        // Validate current page before proceeding
        const validationResult = state.validation.validateCurrentPage();
        
        if (!validationResult.isValid) {
          // Don't proceed if validation fails
          return false;
        }
        
        const currentPageIndex = pagesConfig.pages.findIndex(p => p.id === state.currentPageId);
        const nextPageIndex = currentPageIndex + 1;
        if (nextPageIndex < pagesConfig.pages.length) {
          const nextPage = pagesConfig.pages[nextPageIndex];
          set({ 
            currentStep: nextPage.step,
            currentPageId: nextPage.id
          });
          // Reset validation state for the new page
          state.validation.clearValidationErrors();
          // Validate the new page after a short delay
          setTimeout(() => {
            const newState = get();
            newState.validation.validateCurrentPage();
          }, 0);
          return true;
        }
        return false;
      },
      prevStep: () => {
        const state = get();
        const currentPageIndex = pagesConfig.pages.findIndex(p => p.id === state.currentPageId);
        const prevPageIndex = currentPageIndex - 1;
        if (prevPageIndex >= 0) {
          const prevPage = pagesConfig.pages[prevPageIndex];
          set({ 
            currentStep: prevPage.step,
            currentPageId: prevPage.id
          });
          // Reset validation state for the new page
          state.validation.clearValidationErrors();
          // Validate the new page after a short delay
          setTimeout(() => {
            const newState = get();
            newState.validation.validateCurrentPage();
          }, 0);
        }
      },
      resetSteps: () => set({ 
        currentStep: 1, 
        currentPageId: pagesConfig.pages[0]?.id || null 
      }),
      
      // Helper getters
      isFirstStep: () => {
        const state = get();
        const currentPageIndex = pagesConfig.pages.findIndex(p => p.id === state.currentPageId);
        return currentPageIndex === 0;
      },
      isLastStep: () => {
        const state = get();
        const currentPageIndex = pagesConfig.pages.findIndex(p => p.id === state.currentPageId);
        return currentPageIndex === pagesConfig.pages.length - 1;
      },
      canGoNext: () => {
        const state = get();
        const currentPageIndex = pagesConfig.pages.findIndex(p => p.id === state.currentPageId);
        const hasNextPage = currentPageIndex < pagesConfig.pages.length - 1;
        
        // Check if current page is valid
        const canProceed = state.validation.canProceedToNextStep();
        
        return hasNextPage && canProceed;
      },
      canGoPrev: () => {
        const state = get();
        const currentPageIndex = pagesConfig.pages.findIndex(p => p.id === state.currentPageId);
        return currentPageIndex > 0;
      },
      
      // Page-related helpers
      getCurrentPage: () => {
        const state = get();
        return pagesConfig.pages.find(page => page.id === state.currentPageId);
      },
      getPageById: (id) => pagesConfig.pages.find(page => page.id === id),
      getAllPages: () => pagesConfig.pages,
      
      // Step-related helpers
      getSteps: () => get().steps,
      getStepByIndex: (index) => get().steps[index],
      getCurrentStepInfo: () => get().steps[get().currentStep - 1], // -1 because steps are 0-indexed but currentStep is 1-indexed
      
      // Form data state
      formData: {},
      
      // Form data actions
      setFormValue: (property, value) => {
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
      },
      
      getFormValue: (property) => get().formData[property] || '',
      
      clearFormData: () => set({ formData: {} }),
      
      resetFormData: () => set({ formData: {} }),
      
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
      
      // City slice integration
      ...createCitySlice(set, get),
      
      // Pricing slice integration
      ...createPricingSlice(set, get),
      
      // Validation slice integration
      ...createValidationSlice(set, get),
    }),
    {
      name: 'enel-clima-store', // for Redux DevTools
    }
  )
);

export default useAppStore;
