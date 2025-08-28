import SummaryResultsContainer from '../ui/summary/SummaryResultsContainer';

export default function SummaryResultsDemo() {
    // Sample benefits data
    const benefits = [
        {
            id: 'comfort',
            icon: 'house',
            variant: 'green',
            title: 'Migliore comfort abitativo',
            content: 'Le nuove soluzioni potrebbero migliorare il benessere in casa, garantendo una temperatura più stabile in estate e inverno con minori sprechi.'
        },
        {
            id: 'energy',
            icon: 'lightning',
            variant: 'blue',
            title: 'Classe energetica superiore',
            content: 'Il miglioramento dell\'efficienza energetica può portare a una certificazione energetica più alta, rendendo l\'immobile più sostenibile.'
        }
    ];

    // Sample financing plans
    const samplePlans = [
        {
            id: '12months',
            name: 'Finanziamento a 12 mesi',
            duration: 12,
            monthlyRate: 226.25,
            currency: '€',
            frequency: '/mese',
            tan: 0,
            taeg: 0,
            totalToRepay: 2715.00
        },
        {
            id: '24months',
            name: 'Finanziamento a 24 mesi',
            duration: 24,
            monthlyRate: 113.13,
            currency: '€',
            frequency: '/mese',
            tan: 0,
            taeg: 0,
            totalToRepay: 2715.00
        }
    ];

    // Sample product summary
    const productSummary = {
        title: "Il clima di casa? Finalmente perfetto",
        description: "Con un nuovo climatizzatore puoi dire addio agli sprechi e vivere la casa con il massimo comfort in ogni stagione. Più efficienza, più benessere e un risparmio intelligente che valorizza ogni ambiente, estate e inverno."
    };

    // Sample pricing data
    const pricing = {
        investmentAmount: 2715.00,
        recoveryTime: 5
    };

    // Sample financing data
    const financing = {
        title: "Il cliente vuole pagare in comode rate?",
        plans: samplePlans,
        disclaimer: "* I dati sono indicativi e potrebbero variare in base alla scelta della finanziaria"
    };

    return (
        <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
            <h1 className="text-2xl font-bold mb-6">SummaryResults Demo</h1>

            {/* Full summary with all sections */}
            <div>
                <h2 className="text-lg font-semibold mb-4 text-gray-700">Complete Summary Results</h2>
                <SummaryResultsContainer
                    productSummary={productSummary}
                    benefits={benefits}
                    pricing={pricing}
                    financing={financing}
                />
            </div>

            {/* Usage information */}
            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-3">Usage in pages.json</h3>
                <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
                    {`{
  "type": "SummaryResults",
  "props": {}
}`}
                </pre>

                <div className="mt-4">
                    <h4 className="font-semibold mb-2">Component Breakdown:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        <li><code>ProductSummary</code> - Left side product description with icon</li>
                        <li><code>BenefitsCardsContainer</code> - Green benefit cards (reused component)</li>
                        <li><code>PricingEstimate</code> - Blue economic estimate banner</li>
                        <li><code>FinancingComparison</code> - Two financing option cards</li>
                        <li><code>PriceDisplay</code> - Reusable price formatting</li>
                    </ul>
                </div>

                <div className="mt-4">
                    <h4 className="font-semibold mb-2">Features:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        <li>✅ Connects to pricing store for real investment amounts</li>
                        <li>✅ Gets financing plans from report slice</li>
                        <li>✅ Modular, reusable component structure</li>
                        <li>✅ Radix UI icons where possible</li>
                        <li>✅ ENEL design system compliance</li>
                        <li>✅ No responsive concerns (desktop focused)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
