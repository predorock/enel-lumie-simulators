import { useState } from 'react';
import useAppStore from '../../store/useAppStore';
import PageLayout from '../simulator/PageLayout';
import Button from '../ui/Button';

/**
 * Demo for Navigation Override at Page Level
 * Tests the page-level navigation override functionality
 */
export default function NavigationOverrideDemo() {
    const [currentExample, setCurrentExample] = useState(0);
    const { report: { sidebar } } = useAppStore();

    const examples = [
        {
            title: "Default Navigation",
            description: "Standard navigation with default labels and actions",
            override: undefined
        },
        {
            title: "Custom Labels & Icons",
            description: "Custom button labels with icons",
            override: {
                backButton: {
                    label: "Annulla",
                    icon: "ChevronRightIcon",
                    iconPosition: "left",
                    variant: "secondary"
                },
                nextButton: {
                    label: "Procedi",
                    icon: "ChevronRightIcon",
                    iconPosition: "right",
                    variant: "primary"
                }
            }
        },
        {
            title: "Special Actions",
            description: "Using string actions like 'openSidebar'",
            override: {
                backButton: {
                    label: "Modifica",
                    variant: "outline"
                },
                nextButton: {
                    label: "Invia al cliente",
                    icon: "GlobeIcon",
                    iconPosition: "right",
                    variant: "primary",
                    action: "openSidebar"
                }
            }
        },
        {
            title: "Hidden Back Button",
            description: "Hide back button and customize next",
            override: {
                backButton: {
                    show: false
                },
                nextButton: {
                    label: "Finalizza configurazione",
                    icon: "CheckMarkIcon",
                    iconPosition: "right",
                    variant: "primary",
                    className: "px-8"
                }
            }
        }
    ];

    const currentConfig = examples[currentExample];

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header Controls */}
            <div className="bg-white shadow-sm p-4">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-2xl font-enel-bold text-gray-900 mb-4">
                        Navigation Override Demo - Page Level
                    </h1>

                    {/* Example Selector */}
                    <div className="flex gap-2 mb-4">
                        {examples.map((example, index) => (
                            <Button
                                key={index}
                                variant={currentExample === index ? "primary" : "outline"}
                                onClick={() => setCurrentExample(index)}
                                className="text-sm"
                            >
                                {example.title}
                            </Button>
                        ))}
                    </div>

                    {/* Current Example Info */}
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-enel-bold text-blue-800 mb-2">
                            {currentConfig.title}
                        </h3>
                        <p className="text-blue-700 text-sm mb-3">
                            {currentConfig.description}
                        </p>
                        <div className="bg-white p-3 rounded border">
                            <h4 className="font-enel-bold text-gray-800 text-sm mb-2">Configuration:</h4>
                            <pre className="text-xs text-gray-600 overflow-auto">
                                {JSON.stringify(currentConfig.override, null, 2)}
                            </pre>
                        </div>
                    </div>

                    {/* Sidebar State Debug */}
                    <div className="mt-4 p-3 bg-yellow-50 rounded border">
                        <p className="text-sm text-yellow-800">
                            <strong>Sidebar State:</strong> {sidebar.isOpen ? 'Open' : 'Closed'}
                        </p>
                    </div>
                </div>
            </div>

            {/* Page Layout with Navigation Override */}
            <PageLayout
                title="Demo Page with Navigation Override"
                currentStep={2}
                showStepper={true}
                showNavigation={true}
                navigationOverride={currentConfig.override}
                leftPanelComponents={[
                    {
                        type: "Image",
                        props: {
                            src: "condizionatore-big",
                            alt: "Demo",
                            className: "z-10 relative w-auto h-auto",
                            containerClassName: "flex justify-center items-center mt-16"
                        }
                    }
                ]}
            >
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="text-xl font-enel-bold text-gray-900 mb-4">
                            Page Content
                        </h2>
                        <p className="text-gray-700 mb-4">
                            This page demonstrates how navigation override works at the page level.
                            The navigation configuration is defined in the page data and passed through
                            PageLayout to NavigationBar.
                        </p>

                        <div className="space-y-3">
                            <div className="p-3 bg-gray-50 rounded">
                                <h3 className="font-enel-bold text-gray-800 mb-2">How it works:</h3>
                                <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside">
                                    <li>Page configuration includes <code>navigationOverride</code> property</li>
                                    <li>App.jsx reads current page and passes override to PageLayout</li>
                                    <li>PageLayout forwards the override to NavigationBar component</li>
                                    <li>NavigationBar resolves the configuration and applies overrides</li>
                                </ol>
                            </div>

                            <div className="p-3 bg-green-50 rounded">
                                <h3 className="font-enel-bold text-green-800 mb-2">Try the examples:</h3>
                                <ul className="text-sm text-green-700 space-y-1 list-disc list-inside">
                                    <li>Switch between different override configurations above</li>
                                    <li>Click "Invia al cliente" in the Special Actions example to test sidebar opening</li>
                                    <li>Notice how button labels, icons, and behaviors change</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </PageLayout>
        </div>
    );
}
