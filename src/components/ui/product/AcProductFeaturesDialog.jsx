import * as Dialog from "@radix-ui/react-dialog";
import IconRenderer from "../../icons/IconRenderer";
import AcProductFeatures from "./AcProductFeatures";

export default function AcProductFeaturesDialog({
    isOpen = false,
    onClose = () => { },
    productName,
    features = [],
    productUrl = "",
}) {
    const onLinkClick = () => {
        if (productUrl) {
            window.open(productUrl, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40" />
                <Dialog.Title>{productName}</Dialog.Title>
                <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                    <div className="bg-white box-border flex flex-col gap-6 items-start justify-start p-6 relative rounded-2xl shadow-[0px_0px_16px_0px_rgba(102,119,144,0.4)] w-full">

                        {/* Header */}
                        <div className="flex items-center justify-between relative shrink-0 w-full">
                            <div className="flex flex-col gap-2 items-start justify-start relative shrink-0">
                                <h2 className="font-enel-bold leading-[34px] not-italic relative shrink-0 text-[#131416] text-2xl text-nowrap tracking-[0.4px]">
                                    Informazioni del prodotto
                                </h2>
                            </div>
                            <Dialog.Close asChild>
                                <button
                                    className="bg-[#f7f8fb] box-border cursor-pointer flex items-center justify-center overflow-hidden p-0 relative rounded-sm shrink-0 size-8 hover:bg-gray-200 transition-colors"
                                    aria-label="Close"
                                >
                                    <IconRenderer icon="cross" className="w-6 h-6 text-secondary" />
                                </button>
                            </Dialog.Close>
                        </div>

                        {/* Product Name */}
                        <div className="font-enel-bold leading-[30px] min-w-full not-italic relative shrink-0 text-[#667790] text-xl tracking-[0.4px]">
                            <p className="leading-[30px]">{productName}</p>
                        </div>

                        {/* Features Section */}
                        <div className="bg-[#f4f8ff] box-border flex flex-col gap-3 items-start justify-start p-3 relative rounded-lg shrink-0 w-full">
                            <div className="flex gap-2 items-start justify-start relative shrink-0 w-full">
                                <div className="basis-0 flex flex-col gap-2 grow items-start justify-start min-h-px min-w-px relative shrink-0">
                                    <AcProductFeatures features={features.slice(0, Math.ceil(features.length / 2))} />
                                </div>
                                <div className="basis-0 flex flex-col gap-2 grow items-start justify-start min-h-px min-w-px relative shrink-0">
                                    <AcProductFeatures features={features.slice(Math.ceil(features.length / 2))} />
                                </div>
                            </div>
                        </div>

                        {/* Link */}

                        <button
                            onClick={onLinkClick}
                            className="bg-transparent box-border flex gap-1 items-center justify-start overflow-hidden px-0 py-0.5 relative rounded-sm shrink-0 hover:bg-gray-50 transition-colors cursor-pointer"
                        >
                            <div className="flex items-center justify-start relative shrink-0">
                                <span className="font-enel leading-3 not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-secondary text-xs text-nowrap">
                                    Visualizza la scheda dettagli del prodotto
                                </span>
                            </div>
                            <div className="relative shrink-0 size-4">
                                <IconRenderer icon="globe" className="w-4 h-4 text-secondary" />
                            </div>
                        </button>

                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}