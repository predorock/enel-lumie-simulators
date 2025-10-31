import * as API from '../../utils/api';

const IS_PROD = import.meta.env.VITE_ENVIRONMENT === 'prod';

export const createLeadSlice = (set, get) => ({
    // Sidebar state
    sidebar: {
        isOpen: false,
        customerData: {
            cap: '',
            nome: '',
            cognome: '',
            telefono: '',
            email: ''
        },
        noValidationFields: []
    },
    lead: {
        isLoading: false,
        error: null,
        data: null
    },


    // SIDEBAR ACTIONS ---
    openSidebar: () => {
        set((state) => ({
            ...state,
            sidebar: {
                ...state.sidebar,
                noValidationFields: [],
                isOpen: true
            }
        }));
    },
    openPrintSidebar: () => {
        set((state) => ({
            ...state,
            sidebar: {
                ...state.sidebar,
                noValidationFields: ['email'],
                isOpen: true
            }
        }));
    },
    closeSidebar: () => set((state) => ({
        ...state,
        sidebar: {
            ...state.sidebar,
            noValidationFields: [],
            isOpen: false
        }
    })),

    updateCustomerData: (field, value) => set((state) => ({
        ...state,
        sidebar: {
            ...state.sidebar,
            customerData: {
                ...state.sidebar.customerData,
                [field]: value
            }
        }
    })),

    setCustomerData: (customerData) => set((state) => ({
        ...state,
        sidebar: {
            ...state.sidebar,
            customerData: {
                ...state.sidebar.customerData,
                ...customerData
            }
        }
    })),

    setLeadData: (data) => set((state) => ({
        ...state,
        lead: {
            ...state.lead,
            data
        }
    })),

    getLeadData: () => get((state) => state.lead.data),

    setLeadLoading: (isLoading) => set((state) => ({
        ...state,
        lead: {
            ...state.lead,
            isLoading
        }
    })),

    setLeadError: (error) => set((state) => ({
        ...state,
        lead: {
            ...state.lead,
            error
        }
    })),

    confirmLead: () => {
        const state = get();
        state.closeSidebar();
        state.nextStep();
        setTimeout(() => {
            state.submitLead();
        }, 200);
    },

    buildLeadPayload: () => {
        const state = get();
        const customerData = state.sidebar.customerData;
        const city = state.formData.storeCity;

        return {
            "UserID": state.getFormValue('userId') || state.getFormValue('userid') || '',
            "AccountName": state.getFormValue('accountName') || state.getFormValue('accountname') || '',
            "negozi": true,
            "C14": city,
            "CAP": customerData.cap,
            "Email": customerData.email,
            "ProjectUrl": state.report.getReportUrl(),
            "Nome": customerData.nome,
            "Cognome": customerData.cognome,
            "Telefono": customerData.telefono,
            "prd": IS_PROD,
            "isEnelIT": true,
            "Token": customerData.token || ''
        }
    },

    submitLead: async () => {

        const state = get();

        try {
            state.setLeadLoading(true);

            const payload = state.buildLeadPayload();

            const response = await API.submitSimulationLeadAPI(payload);

            state.setLeadData(response);

            state.nextStep();

            return state.getLeadData();

            // Submit the payload to the API or any other service
        } catch (error) {
            console.error('❌ Simulation LEAD error:', error);
            // Fallback in case of error remove later
            state.nextStep();

            state.setLeadError(error);
        }
        state.setLeadLoading(false);
    }
})