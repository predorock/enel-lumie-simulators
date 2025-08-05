import pagesConfig from '../../config/pages.json';
import stepsConfig from '../../config/steps.json';

export const createNavigationSlice = (set, get) => ({
  // Navigation state
  currentStep: 1, // Start from step 1 instead of 0
  currentPageId: pagesConfig.pages[0]?.id || null, // Track current page by ID
  totalSteps: pagesConfig.pages.length,
  steps: stepsConfig.steps,
  
  // Navigation actions
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
});
