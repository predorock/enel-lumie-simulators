import PriceDisplay from '../PriceDisplay';

const SummaryProductCard = ({
    data = {},
    className = ''
}) => {

    const { product } = data;

    if (!product) {
        return null;
    }

    return (
        <div className={`bg-white relative rounded-2xl shrink-0 w-full shadow-[0px_2px_8px_0px_rgba(102,119,144,0.2)] ${className}`}>
            <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start overflow-clip px-4 py-0 relative w-full">
                <div className="bg-white box-border content-stretch flex gap-4 items-center justify-start px-0 py-4 relative shrink-0 w-full">

                    {/* Product Image */}
                    <div className="bg-white-light relative rounded-[5.125px] shrink-0 size-[82px] flex items-center justify-center">
                        {product?.productImage ? (
                            <img
                                src={product?.productImage}
                                alt={product?.productImageAlt}
                                className="h-9 w-auto max-w-[80px] object-contain mix-blend-multiply"
                            />
                        ) : (
                            <div className="h-9 w-[80px] bg-gray-300 rounded flex items-center justify-center">
                                <span className="text-gray-500 text-xs">IMG</span>
                            </div>
                        )}
                    </div>

                    {/* Product Details - Middle Section */}
                    <div className="basis-0 content-stretch flex flex-col gap-2 grow items-start justify-start min-h-px min-w-px relative shrink-0">

                        {/* Category Tag Row */}
                        <div className="content-stretch flex h-[22px] items-start justify-between relative shrink-0 w-full">
                            <div className="bg-[#f4f8ff] box-border content-stretch flex gap-2 items-center justify-start px-2 py-1 relative rounded-xl shrink-0 border border-[#1f6cf9]">
                                <div className="font-enel leading-[0] not-italic relative shrink-0 text-black text-[14px] text-center text-nowrap">
                                    <p className="leading-[14px] whitespace-pre">Climatizzatore a pompa di calore</p>
                                </div>
                            </div>
                        </div>

                        {/* Product Name */}
                        <div className="font-enel-bold leading-[0] not-italic relative shrink-0 text-black text-[16px] w-full">
                            <p className="leading-[16px]">{product?.productName}</p>
                        </div>

                        {/* Description and Quantity */}
                        <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full">
                            <div className="basis-0 font-enel grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-grey-light text-[12px]">
                                <p className="leading-[18px]">{data?.shortDescription || ""}</p>
                            </div>
                            <div className="content-stretch flex gap-1 items-start justify-start leading-[0] not-italic relative shrink-0 text-grey-light text-[12px] text-nowrap">
                                <div className="font-enel-bold relative shrink-0">
                                    <p className="leading-[18px] text-nowrap whitespace-pre">Quantità:</p>
                                </div>
                                <div className="font-enel relative shrink-0">
                                    <p className="leading-[18px] text-nowrap whitespace-pre">{data.count}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Price Section - Right Side */}
                    <div className="bg-[#eff2f7] box-border content-stretch flex gap-4 items-center justify-between px-4 py-6 relative rounded-xl shrink-0">
                        <div className="content-stretch flex flex-col items-start justify-start leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap w-[121.976px]">
                            <div className="font-enel-bold relative shrink-0 text-[#272c34] tracking-[0.4px]">
                                <p className="leading-[21px] text-nowrap whitespace-pre">Totale</p>
                            </div>
                            <div className="font-enel relative shrink-0 text-grey-light">
                                <p className="leading-[21px] text-nowrap whitespace-pre">IVA inclusa</p>
                            </div>
                        </div>
                        <div className="content-stretch flex flex-col justify-between text-right">
                            <div className="flex flex-row justify-end font-enel-bold whitespace-nowrap">
                                <PriceDisplay value={data.totalPrice} className="text-right" />*
                            </div>
                            <div className="font-enel relative shrink-0 text-black text-[14px] w-[233px]">
                                <p className="leading-[21px]">oppure paga a rate**</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SummaryProductCard;
