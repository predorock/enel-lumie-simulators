/**
 * Report slice for handling simulation API requests and responses
 */
import { isValidSimulationData, submitSimulationToApi } from '../../utils/api';

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

        expandedConfigs: () => {
            const state = get();
            const configs = state.formData.airConditioningConfigs || {};
            return Object.keys(configs).reduce((acc, key) => {
                const config = configs[key];
                if (config && config.roomSize) {
                    acc.push({
                        ...config,
                        productName: state.products.items.find(p => p.id === config.selected)?.productName || '',
                        splitType: key.split('_')[0], // Use the first part of the key as ID
                    });
                }
                return acc;
            }, []);
        },

        getSummary: () => {
            const state = get();
            const configs = state.formData.airConditioningConfigs || {};

            return Object.keys(configs).reduce((acc, key) => {
                const config = configs[key];
                const product = state.products.items.find(p => p.id === config.selected);
                const splitType = key.split('_')[0];

                const existing = acc.find(item => item.id === product?.id);
                const price = parseFloat(product?.price || 0);
                if (existing) {
                    existing.count += 1;
                    existing.totalPrice += price;
                } else {
                    acc.push({
                        id: product?.id,
                        product,
                        splitType,
                        count: 1,
                        totalPrice: price
                    });
                }
                return acc;
            }, []);
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
        }
    }
});
