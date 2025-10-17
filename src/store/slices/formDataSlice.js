
const allowedUrlParams = ['userId', 'userid', 'accountName', 'accountname']

const calculatePricingTriggerProperties = [
    'airconditioningQuantities',
    'airConditioningConfigs',
    'removalQuantities',
    'cleaningQuantities',
    'ductworkQuantities'
];

const initialFormData = {
    isEnelCustomer: true,
    customerKnowsSplits: false
}

export const createFormDataSlice = (set, get) => ({
    // Form data state
    formData: { ...initialFormData },

    loadUrlParams: () => {
        const store = get();
        const urlParams = new URLSearchParams(window.location.search);
        const formData = { ...store.formData };
        for (const [key, value] of urlParams.entries()) {
            if (allowedUrlParams.includes(key)) {
                formData[key] = value;
            }
        }
        set({ formData });
    },

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
        if (calculatePricingTriggerProperties.includes(property)) {
            setTimeout(() => get().calculatePricing(), 0);
        }
    },

    getFormValue: (property) => get().formData[property] || '',

    clearFormData: () => set({ formData: {} }),

    resetFormData: () => set({ formData: {} }),

    generateSuggestions: () => {
        const state = get();
        const rooms = state.formData.rooms || 0;
        const mq = state.formData.coverageArea || 0;

        // Default suggestion
        let suggestion = { monosplit: 0, dualsplit: 0, trialsplit: 0 };

        if (rooms === 1) {
            suggestion.monosplit = 1;
        } else if (rooms === 2) {
            if (mq < 45) {
                suggestion.dualsplit = 1;
            } else {
                suggestion.monosplit = 2;
            }
        } else if (rooms === 3) {
            if (mq < 57) {
                suggestion.trialsplit = 1;
            } else if (mq >= 57 && mq <= 98) {
                suggestion.dualsplit = 1;
                suggestion.monosplit = 1;
            } else {
                suggestion.monosplit = 3;
            }
        } else if (rooms === 4) {
            if (mq < 110) {
                suggestion.trialsplit = 1;
                suggestion.monosplit = 1;
            } else if (mq >= 111 && mq <= 151) {
                suggestion.dualsplit = 1;
                suggestion.monosplit = 2;
            } else {
                suggestion.monosplit = 4;
            }
        } else if (rooms === 5) {
            if (mq < 101) {
                suggestion.trialsplit = 1;
                suggestion.dualsplit = 1;
            } else if (mq >= 101 && mq <= 204) {
                suggestion.dualsplit = 1;
                suggestion.monosplit = 3;
            } else {
                suggestion.monosplit = 5;
            }
        } else if (rooms === 6) {
            if (mq < 113) {
                suggestion.trialsplit = 2;
            } else if (mq >= 113 && mq <= 215) {
                suggestion.trialsplit = 1;
                suggestion.monosplit = 3;
            } else {
                suggestion.dualsplit = 1;
                suggestion.monosplit = 4;
            }
        } else if (rooms === 7) {
            if (mq < 165) {
                suggestion.trialsplit = 2;
                suggestion.monosplit = 1;
            } else {
                suggestion.trialsplit = 1;
                suggestion.monosplit = 4;
            }
        } else if (rooms === 8) {
            if (mq < 158) {
                suggestion.trialsplit = 2;
                suggestion.dualsplit = 1;
            } else {
                suggestion.trialsplit = 2;
                suggestion.monosplit = 2;
            }
        } else if (rooms === 9) {
            if (mq < 169) {
                suggestion.trialsplit = 3;
            } else {
                suggestion.trialsplit = 2;
                suggestion.monosplit = 3;
            }
        } else if (rooms === 10) {
            if (mq < 222) {
                suggestion.trialsplit = 3;
                suggestion.monosplit = 1;
            } else {
                suggestion.trialsplit = 2;
                suggestion.dualsplit = 1;
                suggestion.monosplit = 2;
            }
        } else if (rooms === 11) {
            if (mq < 214) {
                suggestion.trialsplit = 3;
                suggestion.dualsplit = 1;
            } else {
                suggestion.trialsplit = 3;
                suggestion.monosplit = 2;
            }
        } else if (rooms === 12) {
            if (mq < 225) {
                suggestion.trialsplit = 4;
            } else {
                suggestion.trialsplit = 3;
                suggestion.dualsplit = 1;
                suggestion.monosplit = 1;
            }
        } else if (rooms === 13) {
            suggestion.trialsplit = 4;
            suggestion.monosplit = 1;
        } else if (rooms === 14) {
            suggestion.trialsplit = 4;
            suggestion.dualsplit = 1;
        } else if (rooms === 15) {
            suggestion.trialsplit = 5;
        }

        console.log('Generated suggestion based on', { rooms, mq }, '=>', suggestion);

        set((state) => ({
            formData: {
                ...state.formData,
                suggestion: suggestion,
                airconditioningQuantities: suggestion
            }
        }));
    }
})