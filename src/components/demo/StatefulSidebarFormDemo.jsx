import StatefulSidebarForm from '../clima/StatefulSidebarForm';
import Button from '../ui/Button';

/**
 * Demo for StatefulSidebarForm with store integration
 * Tests the store integration and sidebar functionality
 */
export default function StatefulSidebarFormDemo() {
    const { openSidebar, closeSidebar, report: { sidebar } } = useAppStore();

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-2xl font-enel-bold text-gray-900 mb-8">
                    StatefulSidebarForm Store Integration Demo
                </h1>

                <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                    <h2 className="text-lg font-enel-bold text-gray-800 mb-4">
                        Store State Debug
                    </h2>
                    <div className="space-y-2 text-sm">
                        <p><strong>Sidebar Open:</strong> {sidebar.isOpen ? 'Yes' : 'No'}</p>
                        <p><strong>Customer Data:</strong></p>
                        <pre className="bg-gray-50 p-2 rounded text-xs overflow-auto">
                            {JSON.stringify(sidebar.customerData, null, 2)}
                        </pre>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-lg font-enel-bold text-gray-800 mb-4">
                        Controls
                    </h2>
                    <div className="flex gap-4">
                        <Button
                            variant="primary"
                            onClick={openSidebar}
                        >
                            Open Sidebar
                        </Button>
                        <Button
                            variant="secondary"
                            onClick={closeSidebar}
                        >
                            Close Sidebar
                        </Button>
                    </div>
                </div>

                <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-enel-bold text-blue-800 mb-2">Testing Instructions:</h3>
                    <ul className="text-blue-700 text-sm space-y-1">
                        <li>• Click "Open Sidebar" to show the form</li>
                        <li>• Fill out the form fields and watch store state update</li>
                        <li>• Try submitting with empty required fields to see validation</li>
                        <li>• Submit with valid data to see success behavior</li>
                        <li>• Click backdrop or close button to close sidebar</li>
                    </ul>
                </div>
            </div>

            {/* The sidebar component */}
            <StatefulSidebarForm />
        </div>
    );
}
