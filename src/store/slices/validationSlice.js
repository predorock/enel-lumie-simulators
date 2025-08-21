import { validatePage } from '../../utils/validation.js';

/**
 * Lightweight validation slice for better performance
 * @param {Function} set - Zustand set function
 * @param {Function} get - Zustand get function
 * @returns {Object} Validation slice
 */
export const createValidationSlice = (set, get) => ({
  validation: {
    // Current validation errors
    errors: [],

    // Whether current page can proceed to next step
    canProceed: false, // Start pessimistic - require validation to pass

    /**
     * Validate current page and update state
     */
    validateCurrentPage: () => {
      const state = get();
      const currentPage = state.getCurrentPage();

      if (!currentPage || !currentPage.validationRules) {
        set((state) => ({
          validation: {
            ...state.validation,
            errors: [],
            canProceed: true
          }
        }));
        return { isValid: true, errors: [] };
      }

      const validationResult = validatePage(currentPage, state);

      set((state) => ({
        validation: {
          ...state.validation,
          errors: validationResult.errors,
          canProceed: validationResult.isValid
        }
      }));

      return validationResult;
    },

    /**
     * Check if current page can proceed to next step (cached)
     */
    canProceedToNextStep: () => {
      const state = get();
      return state.validation.canProceed;
    },

    /**
     * Clear validation errors
     */
    clearValidationErrors: () => {
      set((state) => ({
        validation: {
          ...state.validation,
          errors: [],
          canProceed: false // Reset to false when clearing
        }
      }));
    }
  }
});
