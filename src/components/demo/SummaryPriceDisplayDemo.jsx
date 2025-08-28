import SummaryPriceDisplay from "../ui/summary/SummaryPriceDisplay";

const SummaryPriceDisplayDemo = () => {
    const mockLineItems = [
        {
            description: "Nuova installazione senza predisposizione x2",
            price: "200,00€"
        },
        {
            description: "Sostituzione dualsplit x1",
            price: "150,00€"
        },
        {
            description: "Smontaggio clima dual x1",
            price: "90,00€"
        },
        {
            description: "Lavaggio impianto clima dual x1",
            price: "150,00€"
        },
        {
            description: "Canalizzazione aggiuntiva di 6 metri x6",
            price: "774,00€"
        }
    ];

    return (
        <div className="space-y-8 p-6">
            <div>
                <h2 className="text-2xl font-enel-bold text-[#002466] mb-6">
                    SummaryPriceDisplay Demo
                </h2>

                <div className="space-y-6">
                    {/* Complete Example */}
                    <div>
                        <h3 className="text-lg font-enel-bold text-[#002466] mb-4">
                            Complete Price Summary
                        </h3>
                        <div className="max-w-lg">
                            <SummaryPriceDisplay
                                title="Riepilogo spesa componenti aggiuntivi"
                                lineItems={mockLineItems}
                                total="1.364,00 €"
                            />
                        </div>
                    </div>

                    {/* Few Items Example */}
                    <div>
                        <h3 className="text-lg font-enel-bold text-[#002466] mb-4">
                            With Few Items
                        </h3>
                        <div className="max-w-lg">
                            <SummaryPriceDisplay
                                title="Riepilogo costi base"
                                lineItems={mockLineItems.slice(0, 2)}
                                total="350,00 €"
                            />
                        </div>
                    </div>

                    {/* Without Total Example */}
                    <div>
                        <h3 className="text-lg font-enel-bold text-[#002466] mb-4">
                            Items Only (No Total)
                        </h3>
                        <div className="max-w-lg">
                            <SummaryPriceDisplay
                                title="Componenti selezionati"
                                lineItems={mockLineItems.slice(0, 3)}
                            />
                        </div>
                    </div>

                    {/* Empty State */}
                    <div>
                        <h3 className="text-lg font-enel-bold text-[#002466] mb-4">
                            Empty State
                        </h3>
                        <div className="max-w-lg">
                            <SummaryPriceDisplay
                                title="Nessun componente aggiuntivo"
                                lineItems={[]}
                                total=""
                            />
                        </div>
                    </div>

                    {/* Custom Styling */}
                    <div>
                        <h3 className="text-lg font-enel-bold text-[#002466] mb-4">
                            Custom Styling
                        </h3>
                        <div className="max-w-md">
                            <SummaryPriceDisplay
                                title="Offerta speciale"
                                lineItems={[
                                    { description: "Pacchetto completo", price: "999,00€" },
                                    { description: "Sconto fedeltà", price: "-100,00€" }
                                ]}
                                total="899,00 €"
                                className="border-2 border-[#5738ff] shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SummaryPriceDisplayDemo;
