export const createFormDataSlice = (set, get) => ({
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
    },

    getFormValue: (property) => get().formData[property] || '',

    clearFormData: () => set({ formData: {} }),

    resetFormData: () => set({ formData: {} }),
})