import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const useAppStore = create(
  devtools(
    (set, get) => ({
      // Step counter state
      currentStep: 0,
      totalSteps: 5, // You can adjust this based on your workflow
      
      // Step counter actions
      setCurrentStep: (step) => set({ currentStep: step }),
      nextStep: () => set((state) => ({ 
        currentStep: Math.min(state.currentStep + 1, state.totalSteps - 1) 
      })),
      prevStep: () => set((state) => ({ 
        currentStep: Math.max(0, state.currentStep - 1) 
      })),
      resetSteps: () => set({ currentStep: 0 }),
      
      // Helper getters
      isFirstStep: () => get().currentStep === 0,
      isLastStep: () => get().currentStep === get().totalSteps - 1,
      canGoNext: () => get().currentStep < get().totalSteps - 1,
      canGoPrev: () => get().currentStep > 0,
    }),
    {
      name: 'enel-clima-store', // for Redux DevTools
    }
  )
);

export default useAppStore;
