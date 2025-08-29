import deafultTestData from '../../assets/mocks/testData.js';
import testDataCanalizzazioni from '../../assets/mocks/testDataCanalizzazioni.js';

function getTestData(scenarioName) {
    switch (scenarioName) {
        case 'canalizzazioni':
            return testDataCanalizzazioni;
        default:
            return deafultTestData;
    }
}

export const createTestingSlice = (set, get) => ({

    testing: {
        // Test data loading
        loadTestData: (scenarioName = 'default') => {
            const state = get();

            const testData = getTestData(scenarioName);

            set({
                formData: testData.formData || {},
                currentStep: testData.currentStep || 1,
                currentPageId: testData.currentPageId || null,
                dynamicPages: testData.dynamicPages || [],
                sidebar: testData.sidebar || {},
                lead: testData.lead || {},
            });

            state.report.setReportData(testData.report.data.result || {});

            // Trigger all side effects
            setTimeout(async () => {
                const _state = get();
                _state.validation.validateCurrentPage();

                if (_state.generateSplitPages && !testData.dynamicPages?.length) {
                    _state.generateSplitPages();
                }

                await _state.products.loadProductsByCity(_state.formData.storeCity || _state.formData.selectedCity || '');

                if (_state.calculatePricing) _state.calculatePricing();
                state.report.generateFinancialPlan();

                //_state.report.setReportData(testData.report.data.result || {});
            }, 0);

            console.log(`Test data loaded:`, testData.formData);
        }
    }
});