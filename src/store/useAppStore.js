import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import pagesConfig from '../config/pages.json';

const useAppStore = create(
  devtools(
    (set, get) => ({
      // Step counter state - now based on pages config
      currentStep: 1, // Start from step 1 instead of 0
      totalSteps: pagesConfig.pages.length,
      
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
    }),
    {
      name: 'enel-clima-store', // for Redux DevTools
    }
  )
);

export default useAppStore;
