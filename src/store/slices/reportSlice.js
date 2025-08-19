/**
 * Report slice for handling simulation API requests and responses
 */
export const createReportSlice = (set, get) => ({
    // Report state
    report: {
        loading: false,
        error: null,
        data: null,
        lastRequestTimestamp: null,
    },

    // Report actions
    setReportLoading: (loading) => set((state) => ({
        report: { ...state.report, loading, error: loading ? null : state.report.error }
    })),

    setReportError: (error) => set((state) => ({
        report: { ...state.report, error, loading: false }
    })),

    setReportData: (data) => set((state) => ({
        report: {
            ...state.report,
            data,
            loading: false,
            error: null,
            lastRequestTimestamp: Date.now()
        }
    })),

    clearReport: () => set((state) => ({
        report: { loading: false, error: null, data: null, lastRequestTimestamp: null }
    })),

    // Build the simulation payload from current state
    buildSimulationPayload: () => {
        const state = get();
        const { formData } = state;

        // Get basic data
        const comune = formData.storeCity || formData.selectedCity || '';
        const quantities = formData.airconditioningQuantities || {};
        const configs = formData.airConditioningConfigs || {};
        const products = state.products.items || [];

        const expandedConfigs = Object.keys(configs).reduce((acc, key) => {
            const config = configs[key];
            if (config && config.roomSize) {
                acc.push({
                    ...config,
                    productName: products.find(p => p.id === config.selected)?.productName || '',
                    splitType: key.split('_')[0], // Use the first part of the key as ID
                });
            }
            return acc;
        }, []);

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

    // Submit simulation request to API
    submitSimulation: async () => {
        const state = get();

        try {
            // Set loading state
            state.setReportLoading(true);

            // Build the payload
            const payload = state.buildSimulationPayload();

            console.log('🚀 Submitting simulation payload:', payload);

            // Make the API request
            const response = await fetch('https://greenovationdashboard.azurewebsites.net/api/lumie/clima', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(payload),
                // Add timeout to prevent hanging requests
                signal: AbortSignal.timeout(30000), // 30 seconds timeout
            });

            if (!response.ok) {
                throw new Error(`API request failed: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();

            console.log('✅ Simulation API response:', data);

            // Store the response data
            state.setReportData(data);

            // Auto-advance to next step after successful submission
            const nextStepResult = state.nextStep();

            if (!nextStepResult) {
                console.warn('⚠️ Could not advance to next step after successful simulation');
            }

            return data;

        } catch (error) {
            console.error('❌ Simulation API error:', error);

            let errorMessage = 'Errore durante la generazione del preventivo';

            if (error.name === 'AbortError') {
                errorMessage = 'Richiesta interrotta per timeout. Riprova.';
            } else if (error.message.includes('Failed to fetch')) {
                errorMessage = 'Errore di connessione. Verifica la tua connessione internet.';
            } else if (error.message.includes('API request failed')) {
                errorMessage = 'Errore del server. Riprova più tardi.';
            }

            state.setReportError(errorMessage);
            throw error;
        }
    },

    // Get current report status
    getReportStatus: () => {
        const state = get();
        return {
            isLoading: state.report.loading,
            hasError: !!state.report.error,
            hasData: !!state.report.data,
            error: state.report.error,
            data: state.report.data
        };
    }
});
