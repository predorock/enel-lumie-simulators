import NavigationBar from '../ui/NavigationBar';

export default function NavigationBarDemo() {
    const handleCustomAction = () => {
        alert('Custom action executed!');
    };

    const handleSaveAction = () => {
        alert('Save action executed!');
    };

    const handleCloseAction = () => {
        alert('Close action executed!');
    };

    return (
        <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
            <h1 className="text-2xl font-bold mb-6">NavigationBar Override Demo</h1>

            {/* Default Navigation */}
            <div>
                <h2 className="text-lg font-semibold mb-4 text-gray-700">Default Navigation</h2>
                <NavigationBar />
            </div>

            {/* Custom Labels */}
            <div>
                <h2 className="text-lg font-semibold mb-4 text-gray-700">Custom Labels</h2>
                <NavigationBar
                    backLabel="Annulla"
                    nextLabel="Salva"
                />
            </div>

            {/* Complete Override with Validation */}
            <div>
                <h2 className="text-lg font-semibold mb-4 text-gray-700">Complete Override with Validation</h2>
                <NavigationBar
                    navigationOverride={{
                        backButton: {
                            label: "Chiudi",
                            icon: "house",
                            variant: "outline",
                            action: handleCloseAction
                        },
                        nextButton: {
                            label: "Conferma",
                            icon: "checkMark",
                            action: handleCustomAction
                        }
                    }}
                />
            </div>

            {/* Override with Invalid Icons (should fallback) */}
            <div>
                <h2 className="text-lg font-semibold mb-4 text-gray-700">Override with Invalid Icons (Check Console)</h2>
                <NavigationBar
                    navigationOverride={{
                        backButton: {
                            label: "Invalid Icon",
                            icon: "nonExistentIcon", // This should trigger validation warning
                            variant: "secondary"
                        },
                        nextButton: {
                            label: "Invalid Variant",
                            variant: "nonExistentVariant" // This should trigger validation warning
                        }
                    }}
                />
            </div>

            {/* Override with Validation Disabled */}
            <div>
                <h2 className="text-lg font-semibold mb-4 text-gray-700">Override with Validation Disabled</h2>
                <NavigationBar
                    navigationOverride={{
                        backButton: {
                            label: "No Validation",
                            icon: "anyStringHere",
                            variant: "customVariant",
                            disableValidation: true,
                            action: handleSaveAction
                        },
                        nextButton: {
                            label: "Custom Action",
                            action: "customStringAction", // String action (not implemented)
                            disableValidation: true
                        }
                    }}
                />
            </div>

            {/* Single Button Override */}
            <div>
                <h2 className="text-lg font-semibold mb-4 text-gray-700">Single Button Override</h2>
                <NavigationBar
                    navigationOverride={{
                        nextButton: {
                            label: "Solo Override",
                            icon: "lightning",
                            variant: "primary"
                        }
                    }}
                />
            </div>

            {/* Hidden Buttons */}
            <div>
                <h2 className="text-lg font-semibold mb-4 text-gray-700">Hidden Back Button</h2>
                <NavigationBar
                    navigationOverride={{
                        backButton: {
                            show: false
                        },
                        nextButton: {
                            label: "Solo Next",
                            variant: "primary"
                        }
                    }}
                />
            </div>

            {/* Usage information */}
            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-3">Usage in pages.json</h3>
                <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
                    {`{
  "type": "NavigationBar",
  "props": {
    "navigationOverride": {
      "backButton": {
        "label": "Chiudi",
        "icon": "house",
        "variant": "outline",
        "action": "closeSidebar"
      },
      "nextButton": {
        "label": "Conferma",
        "icon": "checkMark",
        "action": "submitForm"
      }
    }
  }
}`}
                </pre>
            </div>
        </div>
    );
}
