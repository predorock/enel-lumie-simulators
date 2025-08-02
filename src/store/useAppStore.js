import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import pagesConfig from '../config/pages.json';
import stepsConfig from '../config/steps.json';

const useAppStore = create(
  devtools(
    (set, get) => ({
      // Step counter state - now based on pages config
      currentStep: 1, // Start from step 1 instead of 0
      totalSteps: pagesConfig.pages.length,
      
      // Steps configuration
      steps: stepsConfig.steps,
      
      // Step counter actions
      setCurrentStep: (step) => set({ currentStep: step }),
      nextStep: () => set((state) => ({ 
        currentStep: Math.min(state.currentStep + 1, state.totalSteps) 
      })),
      prevStep: () => set((state) => ({ 
        currentStep: Math.max(1, state.currentStep - 1) 
      })),
      resetSteps: () => set({ currentStep: 1 }),
      
      // Helper getters
      isFirstStep: () => get().currentStep === 1,
      isLastStep: () => get().currentStep === get().totalSteps,
      canGoNext: () => get().currentStep < get().totalSteps,
      canGoPrev: () => get().currentStep > 1,
      
      // Page-related helpers
      getCurrentPage: () => pagesConfig.pages.find(page => page.step === get().currentStep),
      getPageById: (id) => pagesConfig.pages.find(page => page.id === id),
      getAllPages: () => pagesConfig.pages,
      
      // Step-related helpers
      getSteps: () => get().steps,
      getStepByIndex: (index) => get().steps[index],
      getCurrentStepInfo: () => get().steps[get().currentStep - 1], // -1 because steps are 0-indexed but currentStep is 1-indexed
      
      // Form data state
      formData: {},
      
      // Form data actions
      setFormValue: (property, value) => set((state) => ({
        formData: {
          ...state.formData,
          [property]: value
        }
      })),
      
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
    }),
    {
      name: 'enel-clima-store', // for Redux DevTools
    }
  )
);

export default useAppStore;
