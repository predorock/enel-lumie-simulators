
/**
 * InfoIcon Popover Content Registry
 * Centralized registry for all InfoIcon popover contents across the application
 */
import IconPopover from "./IconPopover";

export const popoverContentRegistry = {
    // Air Conditioning Configurator
    airConditioningInfo: {
        icon: "info",
        iconClassName: 'fill-secondary',
        popoverPosition: "bottom",
        popoverClassName: "max-w-[386px]",
        popoverContent: (
            <div className="bg-white box-border content-stretch flex flex-col gap-4 p-2 items-center justify-center relative rounded-2xl">
                <div className="box-border content-stretch flex flex-col gap-3 items-center justify-start p-0 relative shrink-0 w-full">
                    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0 w-full">
                        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                            <div className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow h-full items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
                                <div className="basis-0 grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-black text-[14px] text-left font-enel-bold">
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
        icon: "info",
        popoverPosition: "top",
        popoverClassName: "max-w-[350px]",
        popoverContent: (
            <div>
                <h4 className="text-black font-semibold mb-2 font-enel-bold">
                    Informazioni sulle distanze dell’impianto
                </h4>
                <p className="text-sm mb-6">
                    Dualsplit: ogni unità interna (split) deve essere installata a una distanza massima di 17 metri dall’unità esterna (motore)
                </p>
                <p className="text-sm mb-2">
                    Trialsplit: ogni unità interna (split) deve essere installata a una distanza massima di 22 metri dall’unità esterna (motore)
                </p>
            </div>
        )
    },

    // Splitter Quantity Configurator
    splitterQuantityInfo: {
        icon: "info",
        popoverPosition: "top",
        popoverClassName: "max-w-[320px]",
        popoverContent: (
            <div>
                <h4 className="text-black font-semibold mb-2" style={{ fontFamily: 'Roobert Bold' }}>
                    Numero di Split
                </h4>
                <p className="text-grey-light text-sm mb-2">
                    Indica il numero di split interni necessari per la tua installazione.
                </p>
                <p className="text-grey-light text-xs">
                    Ogni split può climatizzare un ambiente di circa 20-30 mq.
                </p>
            </div>
        )
    },

    // Energy Efficiency Info
    energyEfficiencyInfo: {
        icon: "info",
        popoverPosition: "top",
        popoverClassName: "max-w-[400px]",
        popoverContent: (
            <div>
                <h4 className="text-black font-semibold mb-2" style={{ fontFamily: 'Roobert Bold' }}>
                    Efficienza Energetica
                </h4>
                <p className="text-grey-light text-sm mb-2">
                    I nostri climatizzatori rispettano le più alte classi energetiche per garantire risparmio e sostenibilità.
                </p>
                <ul className="text-grey-light text-xs space-y-1">
                    <li>• Classe A+++: Massima efficienza</li>
                    <li>• Inverter Technology: Risparmio fino al 30%</li>
                    <li>• Controllo intelligente della temperatura</li>
                </ul>
            </div>
        )
    },

    // Installation Warning
    installationWarning: {
        icon: "warning",
        popoverPosition: "top",
        popoverClassName: "max-w-[350px]",
        popoverContent: (
            <div>
                <h4 className="text-black font-semibold mb-2" style={{ fontFamily: 'Roobert Bold' }}>
                    Attenzione Installazione
                </h4>
                <p className="text-grey-light text-sm mb-2">
                    L'installazione deve essere eseguita da personale qualificato.
                </p>
                <ul className="text-grey-light text-xs space-y-1">
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
export const getPopoverConfig = (key) => {
    return popoverContentRegistry[key] || null;
};

export const IconPopoverConfigurator = ({ popoverConfig, ...props }) => {
    const config = getPopoverConfig(popoverConfig);
    if (!config) return null;

    return (
        <IconPopover
            {...props}
            {...config}
        />
    );
};
