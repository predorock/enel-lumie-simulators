/**
 * Report slice for handling simulation API requests and responses
 */
import { isValidSimulationData, submitSimulationToApi } from '../../utils/api';
import { getInstallationTypeDescription } from './pricingSlice';

export const getOperationDescription = (operationType, splitType, amount) => {

    const splitDesc = (sType) => {
        switch (sType) {
            case 'monosplit':
                return 'mono';
            case 'dualsplit':
                return 'dual';
            case 'trialsplit':
                return 'trial';
            default:
                return '';
        }
    }

    switch (operationType) {
        case 'removal':
            return `Smontaggio clima ${splitDesc(splitType)} x${amount}`;
        case 'cleaning':
            return `Lavaggio impianto clima ${splitDesc(splitType)} x${amount}`;
        default:
            return ``;
    }
};

export const getProductShortDescription = (splitType) => {
    switch (splitType) {
        case 'monosplit':
            return '1 unità esterna + 1 unità interna';
        case 'dualsplit':
            return '1 unità esterna + 2 unità interne';
        case 'trialsplit':
            return '1 unità esterna + 3 unità interne';
        default:
            return '';
    }
}

export const createReportSlice = (set, get) => ({
    // Report state
    report: {
        data: {
            loading: false,
            error: null,
            result: null,
            lastRequestTimestamp: null,
        },

        // SETTERS --
        setReportLoading: (loading) => set((state) => ({
            report: {
                ...state.report,
                data: {
                    ...state.report.data,
                    loading,
                    error: loading ? null : state.report.data.error
                }
            }
        })),

        setReportError: (error) => set((state) => ({
            report: {
                ...state.report,
                data: {
                    ...state.report.data,
                    error,
                    loading: false
                }
            }
        })),

        setReportData: (result) => set((state) => ({
            report: {
                ...state.report,
                data: {
                    ...state.report.data,
                    result,
                    loading: false,
                    error: null,
                    lastRequestTimestamp: Date.now()
                }
            }
        })),

        getReportUrl: () => {
            const state = get();
            return state.report.data.result.body.ProjectUrl;
        },

        openReport: () => {
            const state = get();
            const reportUrl = state.report.getReportUrl();
            if (reportUrl) {
                window.open(reportUrl, '_blank');
            }
        },

        // GETTERS ---
        getReportStatus: () => {
            const state = get();
            return {
                isLoading: state.report.data.loading,
                hasError: !!state.report.data.error,
                hasData: !!state.report.data.result,
                error: state.report.data.error,
                data: state.report.data.result
            };
        },

        // CUSTOM ACTIONS ---
        clearReport: () => set((state) => ({
            report: {
                ...state.report,
                data: {
                    loading: false,
                    error: null,
                    result: null,
                    lastRequestTimestamp: null
                }
            }
        })),

        // TRANSFORMERS ---

        getInstallationConfigsByType: () => {
            const state = get();
            const qty = state.formData.airConditioningConfigs || {};

            return Object.values(qty).reduce((acc, config) => {
                if (config && config.installationType) {
                    const type = config.installationType;
                    acc[type] = (acc[type] || 0) + 1;
                }
                return acc;
            }, {});

        },

        expandedConfigs: () => {
            const state = get();
            const configs = state.formData.airConditioningConfigs || {};
            return Object.keys(configs).reduce((acc, key) => {
                const config = configs[key];
                if (config && config.roomSize) {
                    const splitType = key.split('_')[0];
                    acc.push({
                        ...config,
                        productName: state.products.items.find(p => p.id === config.selected)?.productName || '',
                        splitType
                    });
                }
                return acc;
            }, []);
        },

        getSummary: () => {
            const state = get();
            const summary = {
                clima: [],
                expenses: []
            }
            const configs = state.formData.airConditioningConfigs || {};

            Object.keys(configs).forEach((key) => {
                const config = configs[key];
                const product = state.products.items.find(p => p.id === config.selected);
                const splitType = key.split('_')[0];

                const existing = summary.clima.find(item => item.id === product?.id);
                const price = parseFloat(product?.price || 0);
                if (existing) {
                    existing.count += 1;
                    existing.totalPrice += price;
                } else {
                    summary.clima.push({
                        id: product?.id,
                        product,
                        splitType,
                        count: 1,
                        totalPrice: price,
                        shortDescription: getProductShortDescription(splitType),
                    });
                }
            });

            const installationTypesAmount = state.report.getInstallationConfigsByType();

            Object.keys(installationTypesAmount).forEach((installationType) => {
                const amount = installationTypesAmount[installationType];
                summary.expenses.push({
                    description: getInstallationTypeDescription(installationType, amount),
                    price: installationType === 'nuova_senza_predisposizione' ? state.getPurchaseTotal() : 0
                });
            });

            [
                { op: 'removal', data: state.formData.removalQuantities || {} },
                { op: 'cleaning', data: state.formData.cleaningQuantities || {} }
            ].forEach(({ op, data }) => {
                Object.keys(data).forEach((splitType) => {
                    const amount = data[splitType];
                    if (amount <= 0) return;
                    summary.expenses.push({
                        description: getOperationDescription(op, splitType, amount),
                        price: state.pricingState.calculations[op][splitType] || 0
                    });
                });
            });

            return summary;

        },

        // Build the simulation payload from current state
        buildSimulationPayload: () => {
            const state = get();
            const { formData } = state;

            // Get basic data
            const comune = formData.storeCity || formData.selectedCity || '';
            const quantities = formData.airconditioningQuantities || {};

            const expandedConfigs = state.report.expandedConfigs();

            // Calculate total machines (sum of all split types)
            const numeroMacchine = (quantities.monosplit || 0) +
                (quantities.dualsplit || 0) +
                (quantities.trialsplit || 0);


            // Get removal quantities (default to 0 if not present)
            const removalQuantities = formData.removalQuantities || {};

            // Build the payload according to API specification
            const payload = {
                Comune: comune,
                Numero_Macchine: numeroMacchine,
                Clima1: expandedConfigs[0]?.productName || '',
                Clima2: expandedConfigs[1]?.productName || '',
                Clima3: expandedConfigs[2]?.productName || '',
                Numero_Predisposizioni_Mono: quantities.monosplit || 0,
                Numero_Predisposizioni_Dual: quantities.dualsplit || 0,
                Numero_Predisposizioni_Trial: quantities.trialsplit || 0,
                Numero_Predisposizioni_Canalizzazione: 0, // TBD - keep 0 for now
                Numero_Smontaggi_Mono: removalQuantities.monosplit || 0,
                Numero_Smontaggi_Dual: removalQuantities.dualsplit || 0,
                Numero_Smontaggi_Trial: removalQuantities.trialsplit || 0,
                Stanza1_mq: expandedConfigs[0]?.roomSize || 0,
                Stanza2_mq: expandedConfigs[1]?.roomSize || 0,
                Stanza3_mq: expandedConfigs[2]?.roomSize || 0
            };

            return payload;
        },

        //APIS -------------

        // Submit simulation request to API
        submitSimulation: async () => {
            const state = get();

            try {
                // Set loading state
                state.report.setReportLoading(true);

                // Build the payload
                const payload = state.report.buildSimulationPayload();

                // Make the API request using the centralized API utility
                const data = await submitSimulationToApi(payload);

                // Validate the response data
                if (!isValidSimulationData(data)) {
                    throw new Error('Invalid response data from simulation API');
                }

                // Store the response data
                state.report.setReportData(data);

                // Auto-advance to next step after successful submission
                const nextStepResult = state.nextStep();

                if (!nextStepResult) {
                    console.warn('⚠️ Could not advance to next step after successful simulation');
                }

                return data;

            } catch (error) {
                console.error('❌ Simulation API error:', error);

                let errorMessage = 'Errore durante la generazione del preventivo';

                if (error.message.includes('timed out') || error.message.includes('timeout')) {
                    errorMessage = 'Richiesta interrotta per timeout. Riprova.';
                } else if (error.message.includes('Failed to fetch')) {
                    errorMessage = 'Errore di connessione. Verifica la tua connessione internet.';
                } else if (error.message.includes('API request failed')) {
                    errorMessage = 'Errore del server. Riprova più tardi.';
                } else if (error.message.includes('Invalid response data')) {
                    errorMessage = 'Risposta non valida dal server. Riprova.';
                }

                state.report.setReportError(errorMessage);
                throw error;
            }
        },

        // FINANCING DATA ---
        financing: {
            plans: [
                {
                    id: '12months',
                    name: 'Finanziamento a 12 mesi*',
                    duration: 12,
                    monthlyRate: 226.25,
                    currency: '€',
                    frequency: '/mese',
                    tan: 0,
                    taeg: 0,
                    totalToRepay: 2715.00
                },
                {
                    id: '24months',
                    name: 'Finanziamento a 24 mesi*',
                    duration: 24,
                    monthlyRate: 113.13,
                    currency: '€',
                    frequency: '/mese',
                    tan: 0,
                    taeg: 0,
                    totalToRepay: 2715.00
                }
            ]
        },

        // Get financing plans
        getFinancingPlans: () => {
            const state = get();
            return state.report.financing.plans;
        },

        // Get financing disclaimer
        getFinancingDisclaimer: () => {
            const state = get();
            return state.report.financing.disclaimer;
        }
    }
});
