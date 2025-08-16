
/**
 * InfoIcon Popover Content Registry
 * Centralized registry for all InfoIcon popover contents across the application
 */

export const infoIconRegistry = {
    // Air Conditioning Configurator
    airConditioningInfo: {
        variant: "warning",
        popoverPosition: "left",
        popoverClassName: "w-[550px]",
        content: (
            <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-4 items-center justify-center p-[16px] relative rounded-2xl">
                <div className="box-border content-stretch flex flex-col gap-3 items-center justify-start p-0 relative shrink-0 w-full">
                    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0 w-full">
                        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                            <div className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow h-full items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
                                <div className="basis-0 grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#131416] text-[14px] text-left font-enel-bold">
                                    <p className="block leading-[21px]">
                                        Come scegliere la potenza del climatizzatore?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="leading-[21px] not-italic relative shrink-0 text-[#272c34] text-[14px] text-left w-full font-enel">
                        <p className="block mb-7">
                            Per scegliere correttamente i BTU del climatizzatore basta effettuare un calcolo moltiplicando le dimensioni della stanza da climatizzare con un coefficiente standard (K) di 340.
                        </p>
                        <p className="block">Di seguito un esempio:</p>
                    </div>
                </div>
                <div className="bg-[#eff2f7] box-border content-stretch flex flex-col gap-3 items-center justify-start p-[8px] relative shrink-0 w-full">
                    <div className="leading-[0] not-italic relative shrink-0 text-[#272c34] text-[0px] text-left w-full font-enel-bold">
                        <p>
                            <span className="leading-[21px] text-[14px]">30m</span>
                            <span className="leading-[21px] not-italic text-[9.03px] align-super font-enel-bold">2 </span>
                            <span className="leading-[18px] not-italic text-[12px] font-enel">
                                (metratura stanza)
                            </span>
                            <span className="leading-[21px] text-[14px]"> x 340 </span>
                            <span className="leading-[18px] not-italic text-[12px] font-enel">(K) </span>
                            <span className="leading-[21px] text-[14px]">= 10.200 BTU</span>
                        </p>
                    </div>
                </div>
            </div>
        )
    },

    // Ductwork Configurator
    ductworkInfo: {
        variant: "info",
        popoverPosition: "top",
        popoverClassName: "max-w-[300px]",
        content: (
            <div>
                <h4 className="text-[#131416] font-semibold mb-2 font-enel-bold">
                    Come si sceglie la tipologia di installazione?
                </h4>
                <p className="text-[#667790] text-sm">
                    Seleziona la lunghezza delle canalizzazioni necessarie per il collegamento tra le unità.
                </p>
            </div>
        )
    },

    // Splitter Quantity Configurator
    splitterQuantityInfo: {
        variant: "info",
        popoverPosition: "top",
        popoverClassName: "max-w-[320px]",
        content: (
            <div>
                <h4 className="text-[#131416] font-semibold mb-2" style={{ fontFamily: 'Roobert Bold' }}>
                    Numero di Split
                </h4>
                <p className="text-[#667790] text-sm mb-2">
                    Indica il numero di split interni necessari per la tua installazione.
                </p>
                <p className="text-[#667790] text-xs">
                    Ogni split può climatizzare un ambiente di circa 20-30 mq.
                </p>
            </div>
        )
    },

    // Energy Efficiency Info
    energyEfficiencyInfo: {
        variant: "info",
        popoverPosition: "top",
        popoverClassName: "max-w-[400px]",
        content: (
            <div>
                <h4 className="text-[#131416] font-semibold mb-2" style={{ fontFamily: 'Roobert Bold' }}>
                    Efficienza Energetica
                </h4>
                <p className="text-[#667790] text-sm mb-2">
                    I nostri climatizzatori rispettano le più alte classi energetiche per garantire risparmio e sostenibilità.
                </p>
                <ul className="text-[#667790] text-xs space-y-1">
                    <li>• Classe A+++: Massima efficienza</li>
                    <li>• Inverter Technology: Risparmio fino al 30%</li>
                    <li>• Controllo intelligente della temperatura</li>
                </ul>
            </div>
        )
    },

    // Installation Warning
    installationWarning: {
        variant: "warning",
        popoverPosition: "top",
        popoverClassName: "max-w-[350px]",
        content: (
            <div>
                <h4 className="text-[#131416] font-semibold mb-2" style={{ fontFamily: 'Roobert Bold' }}>
                    Attenzione Installazione
                </h4>
                <p className="text-[#667790] text-sm mb-2">
                    L'installazione deve essere eseguita da personale qualificato.
                </p>
                <ul className="text-[#667790] text-xs space-y-1">
                    <li>• Verifica delle normative locali</li>
                    <li>• Controllo della struttura portante</li>
                    <li>• Rispetto delle distanze di sicurezza</li>
                </ul>
            </div>
        )
    }
};

/**
 * Get InfoIcon configuration by key
 * @param {string} key - The registry key
 * @returns {object|null} InfoIcon configuration or null if not found
 */
export const getInfoIconConfig = (key) => {
    return infoIconRegistry[key] || null;
};

/**
 * Get all available InfoIcon keys
 * @returns {string[]} Array of available keys
 */
export const getAvailableInfoIconKeys = () => {
    return Object.keys(infoIconRegistry);
};
