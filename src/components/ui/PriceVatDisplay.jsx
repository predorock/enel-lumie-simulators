function PriceDisplay({ value, showVAT = true, size = 'large', className = '' }) {
    // Format price: split integer and decimal parts
    const formattedValue = typeof value === 'number' ? value.toFixed(2) : '0.00';
    const [integerPart, decimalPart] = formattedValue.split('.');

    // Format integer part with thousands separator
    const formattedInteger = parseInt(integerPart).toLocaleString('it-IT');

    // Size configurations
    const sizeConfig = {
        small: {
            integer: { text: 'text-2xl', leading: 'leading-6' },
            decimal: { text: 'text-[12px]', leading: 'leading-3' },
            vat: { text: 'text-[10px]', leading: 'leading-3' }
        },
        medium: {
            integer: { text: 'text-4xl', leading: 'leading-8' },
            decimal: { text: 'text-[15px]', leading: 'leading-4' },
            vat: { text: 'text-[12px]', leading: 'leading-4' }
        },
        large: {
            integer: { text: 'text-5xl', leading: 'leading-10' },
            decimal: { text: 'text-[18px]', leading: 'leading-5' },
            vat: { text: 'text-[14px]', leading: 'leading-5' }
        }
    };

    const currentSize = sizeConfig[size] || sizeConfig.large;

    return (
        <div className={`flex flex-col gap-2 items-end ${className}`}>
            <div className="flex items-end justify-end relative w-full">
                {/* Integer part */}
                <div className={`flex flex-col font-enel-bold leading-none ${currentSize.integer.text}`}>
                    <p className={`${currentSize.integer.leading} whitespace-pre`}>{formattedInteger}</p>
                </div>

                {/* Decimal part and VAT text */}
                <div className="flex flex-row items-end self-stretch">
                    <div className="flex flex-col h-full items-start justify-between">
                        {/* Decimal + currency */}
                        <div className={`flex flex-col font-enel-bold leading-none ${currentSize.decimal.text}`}>
                            <p className={`${currentSize.decimal.leading} whitespace-pre`}>,{decimalPart}€</p>
                        </div>

                        {/* IVA inclusa text */}
                        {showVAT && (
                            <div className="flex gap-2 items-center justify-center pl-1 relative">
                                <div className={`flex flex-col font-enel-bold leading-none ${currentSize.vat.text}`}>
                                    <p className={`${currentSize.vat.leading} whitespace-pre`}>IVA inclusa</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div >
    );
}

export default PriceDisplay;
