import { useMemo } from 'react';
import AcProductDisplayContainerDemo from './AcProductDisplayContainerDemo';
import BenefitsCardsDemo from './BenefitsCardsDemo';
import BrandSelectorDemo from './BrandSelectorDemo';
import DescriptionBoxDemo from './DescriptionBoxDemo';
import LoadingSpinnerDemo from './LoadingSpinnerDemo';
import ReportDemo from './ReportDemo';
import ReportSummaryDemo from './ReportSummaryDemo';

const DemoWrapper = () => {
    // Get demo parameter from URL
    const demoParam = useMemo(() => {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('demo');
    }, []);

    // Demo component registry
    const demoComponents = {
        products: AcProductDisplayContainerDemo,
        benefits: BenefitsCardsDemo,
        brandselector: BrandSelectorDemo,
        description: DescriptionBoxDemo,
        loading: LoadingSpinnerDemo,
        report: ReportDemo,
        reportsummary: ReportSummaryDemo
    };

    // Get the component to render
    const DemoComponent = demoComponents[demoParam];

    // If no valid demo param, show demo selector
    if (!DemoComponent) {
        return (
            <div className="min-h-screen bg-[#f7f8fb] p-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-enel-bold text-[#002466] mb-8">
                        🛠️ Demo Components
                    </h1>
                    <p className="text-lg font-enel text-[#667790] mb-8">
                        Available demo components for development and testing
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Object.keys(demoComponents).map((demoKey) => (
                            <a
                                key={demoKey}
                                href={`?demo=${demoKey}`}
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-[#c2cddd]"
                            >
                                <h3 className="text-xl font-enel-bold text-[#002466] mb-2 capitalize">
                                    {demoKey.replace(/([A-Z])/g, ' $1').trim()}
                                </h3>
                                <p className="text-sm font-enel text-[#667790] mb-4">
                                    {getDemoDescription(demoKey)}
                                </p>
                                <div className="text-[#5738ff] font-enel text-sm">
                                    View Demo →
                                </div>
                            </a>
                        ))}
                    </div>

                    <div className="mt-12 p-6 bg-white rounded-lg border border-[#c2cddd]">
                        <h3 className="text-lg font-enel-bold text-[#002466] mb-4">
                            🚀 Quick Access
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h4 className="font-enel-bold text-[#002466] mb-2">URL Parameters:</h4>
                                <ul className="text-sm font-enel text-[#667790] space-y-1">
                                    {Object.keys(demoComponents).map((key) => (
                                        <li key={key} className="font-mono">
                                            ?demo={key}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-enel-bold text-[#002466] mb-2">Development Mode:</h4>
                                <p className="text-sm font-enel text-[#667790]">
                                    Demo components are only available in development mode.
                                    In production, these will not be accessible.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Render the selected demo component
    return <DemoComponent />;
};

// Helper function to get demo descriptions
const getDemoDescription = (demoKey) => {
    const descriptions = {
        products: 'Air conditioning product display with configurations and pricing',
        benefits: 'Benefits cards container with economic and environmental advantages',
        brandselector: 'Brand selection interface with filtering capabilities',
        description: 'Description box component with various content types',
        loading: 'Loading spinner animations and states',
        report: 'Report summary with content switcher and product cards',
        reportsummary: 'Interactive report summary with tab switching and detailed product cards'
    };

    return descriptions[demoKey] || 'Demo component for development and testing';
};

export default DemoWrapper;
