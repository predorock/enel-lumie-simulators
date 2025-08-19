import useAppStore from '../../store/useAppStore';

const ReportDemo = () => {
    const {
        submitSimulation,
        report,
        buildSimulationPayload,
        setFormValue
    } = useAppStore();

    // Set up some test data
    const setupTestData = () => {
        setFormValue('storeCity', 'Roma');
        setFormValue('airconditioningQuantities', {
            monosplit: 1,
            dualsplit: 1,
            trialsplit: 1
        });
        setFormValue('airConditioningConfigs', {
            monosplit_0: { roomSize: '25' },
            dualsplit_0: { roomSize: '35' },
            trialsplit_0: { roomSize: '45' }
        });
        setFormValue('selectedProducts_monosplit_0', 'daikin-clima-siesta-12000');
        setFormValue('selectedProducts_dualsplit_0', 'daikin-clima-siesta-dual-18000');
        setFormValue('selectedProducts_trialsplit_0', 'daikin-clima-siesta-trial-24000');
    };

    const handleTestPayload = () => {
        setupTestData();
        const payload = buildSimulationPayload();
        console.log('Generated payload:', payload);
        alert('Check console for generated payload');
    };

    const handleTestSimulation = () => {
        setupTestData();
        submitSimulation().catch(error => {
            console.error('Simulation test failed:', error);
        });
    };

    return (
        <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-2xl font-enel-bold mb-6">Report System Demo</h1>

            {/* Test Controls */}
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h2 className="text-lg font-enel-bold mb-4">Test Controls</h2>
                <div className="flex gap-4">
                    <button
                        onClick={setupTestData}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Setup Test Data
                    </button>
                    <button
                        onClick={handleTestPayload}
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    >
                        Generate Payload
                    </button>
                    <button
                        onClick={handleTestSimulation}
                        className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
                    >
                        Test API Call
                    </button>
                </div>
            </div>

            {/* Report Status */}
            <div className="bg-white border rounded-lg p-6 mb-6">
                <h2 className="text-lg font-enel-bold mb-4">Report Status</h2>
                <div className="grid grid-cols-3 gap-4">
                    <div className={`p-4 rounded ${report?.loading ? 'bg-yellow-100' : 'bg-gray-100'}`}>
                        <div className="font-semibold">Loading</div>
                        <div>{report?.loading ? 'Yes' : 'No'}</div>
                    </div>
                    <div className={`p-4 rounded ${report?.error ? 'bg-red-100' : 'bg-gray-100'}`}>
                        <div className="font-semibold">Error</div>
                        <div>{report?.error ? 'Yes' : 'No'}</div>
                    </div>
                    <div className={`p-4 rounded ${report?.data ? 'bg-green-100' : 'bg-gray-100'}`}>
                        <div className="font-semibold">Data</div>
                        <div>{report?.data ? 'Yes' : 'No'}</div>
                    </div>
                </div>
            </div>

            {/* Error Display */}
            {report?.error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                    <h3 className="text-lg font-semibold text-red-800 mb-2">Error</h3>
                    <p className="text-red-700">{report.error}</p>
                </div>
            )}

            {/* Data Display */}
            {report?.data && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-green-800 mb-4">Report Data</h3>
                    <pre className="bg-white p-4 rounded border overflow-auto text-sm">
                        {JSON.stringify(report.data, null, 2)}
                    </pre>
                </div>
            )}

            {/* Loading State */}
            {report?.loading && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-blue-700 font-semibold">Submitting simulation...</p>
                </div>
            )}

            {/* Instructions */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Instructions</h3>
                <ol className="list-decimal list-inside space-y-2 text-yellow-700">
                    <li>Click "Setup Test Data" to populate form with test values</li>
                    <li>Click "Generate Payload" to see the API payload that would be sent</li>
                    <li>Click "Test API Call" to make an actual API request to the simulation endpoint</li>
                    <li>Watch the Report Status section to see loading/error/success states</li>
                </ol>
            </div>
        </div>
    );
};

export default ReportDemo;
