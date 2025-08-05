import { validatePage } from '../../utils/validation.js';

/**
 * Validation slice for managing form validation state
 * @param {Function} set - Zustand set function
 * @param {Function} get - Zustand get function
 * @returns {Object} Validation slice
 */
export const createValidationSlice = (set, get) => ({
  validation: {
    // Current validation state for each page
    pageValidation: {},
    
    // Current validation errors
    errors: [],
    
    // Whether current page can proceed to next step
    canProceed: false,
    
    /**
     * Validate a specific page
     * @param {string} pageId - Page ID to validate
     * @param {Object} pageConfig - Page configuration from pages.json
     */
    validatePage: (pageId, pageConfig) => {
      const state = get();
      const formData = state.formData || {};
      
      const validationResult = validatePage(pageConfig, formData);
      
      set((state) => ({
        validation: {
          ...state.validation,
          pageValidation: {
            ...state.validation.pageValidation,
            [pageId]: validationResult
          },
          errors: validationResult.errors,
          canProceed: validationResult.isValid
        }
      }));
      
      return validationResult;
    },
    
    /**
     * Validate current page
     */
    validateCurrentPage: () => {
      const state = get();
      const currentPage = state.getCurrentPage();
      
      if (!currentPage) {
        return { isValid: true, errors: [] };
      }
      
      return state.validation.validatePage(currentPage.id, currentPage);
    },
    
    /**
     * Check if current page can proceed to next step
     */
    canProceedToNextStep: () => {
      const state = get();
      // Use cached validation result instead of re-validating every time
      return state.validation.canProceed;
    },
    
    /**
     * Get validation errors for a specific field
     * @param {string} fieldName - Field name to get errors for
     * @returns {string[]} Array of error messages for the field
     */
    getFieldErrors: (fieldName) => {
      const state = get();
      return state.validation.errors
        .filter(error => error.field === fieldName)
        .map(error => error.message);
    },
    
    /**
     * Clear validation errors
     */
    clearValidationErrors: () => {
      set((state) => ({
        validation: {
          ...state.validation,
          errors: [],
          canProceed: false
        }
      }));
    },
    
    /**
     * Get all validation errors for current page
     */
    getCurrentPageErrors: () => {
      const state = get();
      return state.validation.errors;
    },
    
    /**
     * Initialize validation for current page
     */
    initializeValidation: () => {
      const state = get();
      const currentPage = state.getCurrentPage();
      if (currentPage) {
        state.validation.validatePage(currentPage.id, currentPage);
      }
    }
  }
});
