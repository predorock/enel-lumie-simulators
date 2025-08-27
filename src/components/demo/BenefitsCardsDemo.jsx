import BenefitsCardsContainer from '../ui/BenefitsCardsContainer';

export default function BenefitsCardsDemo() {
    // Sample benefits data matching the Figma design
    const benefitsData = [
        {
            id: 'economic',
            title: 'Benefici economici',
            icon: 'savings',
            content: `Acquistare un climatizzatore di ultima generazione è una scelta economicamente vantaggiosa. Grazie alla tecnologia ad alta efficienza energetica, <strong>questi dispositivi consumano fino al 40% in meno</strong> rispetto ai modelli tradizionali, <strong>con un <span style="color: #d3135a;">risparmio annuo che può superare i 400 euro</span> sulla bolletta elettrica.</strong>`
        },
        {
            id: 'environmental',
            title: 'Benefici ambientali',
            icon: 'eco',
            content: `Questi modelli riducono notevolmente i consumi energetici, <strong style="color: #d3135a;">emettendo fino a 400 kg in meno di CO₂ all'anno</strong> <strong>rispetto</strong> ai vecchi impianti. <strong>È l'equivalente della quantità di CO₂ assorbita in un anno da circa 25 alberi</strong>. Utilizzando meno energia e refrigeranti a basso impatto ambientale, contribuiscono concretamente alla lotta contro il cambiamento climatico, <strong>migliorando la qualità dell'aria e proteggendo l'ambiente</strong>.`
        }
    ];

    return (
        <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
            <h1 className="text-2xl font-bold mb-6">BenefitsCardsContainer Demo</h1>

            {/* Full benefits container */}
            <div>
                <h2 className="text-lg font-semibold mb-4 text-gray-700">Complete Benefits Display</h2>
                <BenefitsCardsContainer benefits={benefitsData} />
            </div>

            {/* Single benefit test */}
            <div>
                <h2 className="text-lg font-semibold mb-4 text-gray-700">Single Benefit Card</h2>
                <BenefitsCardsContainer
                    benefits={[{
                        title: 'Test Benefit',
                        icon: 'savings',
                        content: 'This is a test benefit with <strong>bold text</strong> and <span style="color: #d3135a;">colored highlights</span>.'
                    }]}
                />
            </div>

            {/* Usage information */}
            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-3">Usage in pages.json</h3>
                <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
                    {`{
  "type": "BenefitsCardsContainer",
  "props": {
    "benefits": [
      {
        "title": "Benefici economici",
        "icon": "savings",
        "content": "Your content with <strong>HTML</strong> support"
      },
      {
        "title": "Benefici ambientali", 
        "icon": "eco",
        "content": "Environmental benefits content"
      }
    ]
  }
}`}
                </pre>

                <div className="mt-4">
                    <h4 className="font-semibold mb-2">Available Icons:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                        <li><code>savings</code> - For economic/financial benefits</li>
                        <li><code>eco</code> - For environmental benefits</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
