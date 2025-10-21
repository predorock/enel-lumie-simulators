/**
 * Report slice for handling simulation API requests and responses
 */
import { isValidSimulationData, printTrackingAPI, submitSimulationToApi } from '../../utils/api';
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
        case 'ductwork':
            return `Canalizzazione aggiuntiva 6 metri x${amount}`;
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

// Funzione per calcolare la rata mensile corretta
const calculateMonthlyRate = (principal, annualTaeg, months) => {
    if (annualTaeg === 0) {
        // Se TAEG è 0 (cliente Enel), rata = capitale / mesi
        return principal / months;
    }

    const monthlyTaeg = annualTaeg / 100 / 12; // TAEG mensile in decimale
    const monthlyRate = principal *
        (monthlyTaeg * Math.pow(1 + monthlyTaeg, months)) /
        (Math.pow(1 + monthlyTaeg, months) - 1);

    return monthlyRate;
};

const getWarningMessages = (configurations) => {
    const warnings = [];
    configurations.forEach((config, index) => {
        if (config.hasWarning) {
            warnings.push({
                Title: "Hai scelto una taglia di climatizzatore troppo piccolo per una stanza da climatizzare!",
                Message: `Una delle tue stanze misura ${config.roomSize}mq e la taglia ${config.splitType} selezionata non riuscirà a climatizzarla interamente.`
            });
        }
    });
    return warnings
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
                    const product = state.products.items.find(p => p.id === config.selected);
                    acc.push({
                        ...config,
                        product,
                        productName: product?.productName || '',
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
                if (installationType === 'nuova_senza_predisposizione') {
                    summary.expenses.push({
                        description: getInstallationTypeDescription(installationType, amount),
                        price: state.getPurchaseTotal()
                    });
                }
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


            const ductworkQtyTotal = Object.values(state.formData.ductworkQuantities || {}).reduce((acc, val) => acc + val, 0)
            if (ductworkQtyTotal > 0) {
                summary.expenses.push({
                    description: getOperationDescription('ductwork', null, ductworkQtyTotal),
                    price: state.pricingState.calculations.ductwork.total || 0
                });
            }

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

            // Build the payload according to API specification

            const summary = state.report.getSummary();

            const payload = {
                Comune: comune,
                //Numero_Macchine: numeroMacchine,
                // NUMERO MACCHINE PER ORA E' IL NUMERO DI STANZE DA CLIMATIZZARE
                Numero_Macchine: formData.rooms || 0,
                M2: formData.coverageArea || 0,
                Warning: getWarningMessages(expandedConfigs),
                Products: summary.clima.map((item) => ({
                    ...state.products.getRawProductsByName(item.product.productName)[0],
                    Name: item.count > 1 ? `${item.count} x ${item.product.productName}` : item.product.productName,
                    Price: item.totalPrice,
                })),
                Configurations: summary.expenses.map((item) => ({
                    Name: item.description,
                    Price: item.price
                })),
                Financing: state.report.getFinancingPlans()
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

        getFinancingPlans: () => {
            const state = get();
            const isEnelCustomer = state.formData.isEnelCustomer || false;
            const grandTotal = state.getGrandTotal() || 0;
            const planConfig = [
                {
                    duration: 6,
                    tan: isEnelCustomer ? 0 : 6.75,
                    taeg: isEnelCustomer ? 0 : 6.96,
                },
                {
                    duration: isEnelCustomer ? 24 : 120,
                    tan: isEnelCustomer ? 0 : 6.75,
                    taeg: isEnelCustomer ? 0 : 6.96,
                }
            ]
            const plans = planConfig.map((config) => {
                const monthlyRate = calculateMonthlyRate(grandTotal, config.taeg, config.duration);
                const totalToRepay = monthlyRate * config.duration;
                return {
                    id: `${config.duration}months`,
                    name: `Finanziamento a ${config.duration} mesi*`,
                    duration: config.duration,
                    monthlyRate: totalToRepay / config.duration,
                    currency: '€',
                    frequency: '/mese',
                    tan: config.tan,
                    taeg: config.taeg,
                    totalToRepay: totalToRepay
                };
            });

            return plans;

        },

        trackPrint: () => {
            const state = get();
            const userId = state.getFormValue('userId') || null;
            const accountName = state.getFormValue('accountName') || null;

            if (!userId || !accountName) {
                console.warn('⚠️ Missing userId or accountName for print tracking');
                return;
            }
            printTrackingAPI(userId, accountName);
        }
    }
});
