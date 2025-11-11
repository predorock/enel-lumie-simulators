
async function getTestData(scenarioName) {
    switch (scenarioName) {
        case 'canalizzazioni':
            return (await import('../../assets/mocks/testDataCanalizzazioni.js')).default;
        case 'loader':
            return (await import('../../assets/mocks/testDataLoader.js')).default;
        case 'reportFisico':
            return (await import('../../assets/mocks/testDataReportFisico.js')).default;
        case 'reportWeb':
            return (await import('../../assets/mocks/testDataReportWeb.js')).default;
        case 'products':
            return (await import('../../assets/mocks/testDataProducts.js')).default;
        case 'noProducts':
            return (await import('../../assets/mocks/testDataNoProducts.js')).default;
        case 'finale':
            return (await import('../../assets/mocks/testDataFinale.js')).default;
        default:
            return (await import('../../assets/mocks/testData.js')).default
    }
}

export const createTestingSlice = (set, get) => ({

    testing: {
        // Test data loading
        loadTestData: async (scenarioName = 'default') => {
            const state = get();

            const testData = await getTestData(scenarioName);

            set({
                formData: { ...state.formData, ...testData.formData },
                currentStep: testData.currentStep || 1,
                currentPageId: testData.currentPageId || null,
                dynamicPages: testData.dynamicPages || [],
                sidebar: testData.sidebar || {},
                lead: testData.lead || {},
            });

            state.report.setReportData(testData?.report?.data?.result || {});

            // Trigger all side effects
            setTimeout(async () => {
                const _state = get();
                _state.validation.validateCurrentPage();

                if (_state.generateSplitPages && !testData.dynamicPages?.length) {
                    _state.generateSplitPages();
                }

                await _state.products.loadProducts(_state.formData.storeCity, _state.formData.partnership);

                if (_state.calculatePricing) _state.calculatePricing();

                //_state.report.setReportData(testData.report.data.result || {});
            }, 0);

            console.log(`Test data loaded:`, testData.formData);
        }
    }
});