import PromotionalBanner from '../ui/PromotionalBanner';

export default function PromotionalBannerDemo() {
    return (
        <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
            <h1 className="text-2xl font-bold mb-6">PromotionalBanner Demo</h1>

            {/* Full Lumiè Discovery banner */}
            <div>
                <h2 className="text-lg font-semibold mb-4 text-gray-700">Lumiè Discovery Banner (Full)</h2>
                <PromotionalBanner
                    title="Il cliente vuole ricevere dei dati più precisi sulle performance della sua abitazione?"
                    description="Le proiezioni relative ai benefici economici e ambientali visualizzate rappresentano delle stime indicative. Per un'analisi comparativa più precisa delle performance della sua abitazione consiglia di effettuare una simulazione con Lumiè Discovery."
                    buttonText="Effettua il check-up energetico con Lumiè"
                    buttonUrl="https://example.com/lumie-discovery"
                />
            </div>

            {/* Minimal version */}
            <div>
                <h2 className="text-lg font-semibold mb-4 text-gray-700">Minimal Banner</h2>
                <PromotionalBanner
                    title="Scopri le nostre soluzioni energetiche"
                    description="Ottieni analisi dettagliate per migliorare l'efficienza della tua casa."
                    buttonText="Scopri di più"
                    buttonUrl="https://example.com"
                />
            </div>

            {/* Custom styling */}
            <div>
                <h2 className="text-lg font-semibold mb-4 text-gray-700">With Custom Styling</h2>
                <PromotionalBanner
                    title="Banner con styling personalizzato"
                    description="Questo banner mostra come aggiungere classi personalizzate per modifiche specifiche."
                    buttonText="Call to Action"
                    buttonUrl="https://example.com"
                    className="max-w-4xl mx-auto"
                />
            </div>

            {/* Usage information */}
            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-3">Usage in pages.json</h3>
                <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
                    {`{
  "type": "PromotionalBanner",
  "props": {
    "title": "Il cliente vuole ricevere dei dati più precisi?",
    "description": "Le proiezioni rappresentano delle stime indicative...",
    "buttonText": "Effettua il check-up energetico con Lumiè",
    "buttonUrl": "https://example.com/lumie-discovery"
  }
}`}
                </pre>

                <div className="mt-4">
                    <h4 className="font-semibold mb-2">Available Props:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        <li><code>title</code> - Main banner title text</li>
                        <li><code>description</code> - Secondary description text</li>
                        <li><code>buttonText</code> - CTA button text (default: "Scopri di più")</li>
                        <li><code>buttonUrl</code> - External URL to open on button click</li>
                        <li><code>className</code> - Additional CSS classes</li>
                    </ul>
                </div>

                <div className="mt-4">
                    <h4 className="font-semibold mb-2">Features:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        <li>✅ Purple gradient background matching ENEL brand</li>
                        <li>✅ House 3D illustration with decorative background</li>
                        <li>✅ White CTA button with Radix UI chevron icon</li>
                        <li>✅ Opens external URLs in new tab</li>
                        <li>✅ Responsive text sizing</li>
                        <li>✅ Shadow and rounded corners</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
