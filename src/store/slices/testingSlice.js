import testData from '../../assets/mocks/testData.js';

export const createTestingSlice = (set, get) => ({

    testing: {
        // Test data loading
        loadTestData: (scenarioName = 'default') => {
            if (testData && testData.formData) {
                const state = get();
                set({
                    formData: testData.formData,
                    currentStep: testData.currentStep || 1,
                    currentPageId: testData.currentPageId || null,
                    dynamicPages: testData.dynamicPages || [],
                });

                state.report.setReportLoading(true);

                // Trigger all side effects
                setTimeout(async () => {
                    const _state = get();
                    _state.validation.validateCurrentPage();

                    if (_state.generateSplitPages && !testData.dynamicPages?.length) {
                        _state.generateSplitPages();
                    }

                    await _state.products.loadProductsByCity(_state.formData.storeCity || _state.formData.selectedCity || '');

                    if (_state.calculatePricing) _state.calculatePricing();

                    _state.report.setReportData(testData.report.data.result || {});
                }, 0);

                console.log(`Test data loaded:`, testData.formData);
            } else {
                console.warn(`Test data not found or invalid format`);
            }
        }
    }
});