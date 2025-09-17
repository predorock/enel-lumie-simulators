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
                <div className="bg-white box-border content-stretch grid grid-cols-32 items-center justify-start px-0 py-4 relative w-full">

                    {/* Product Image */}
                    <div className="lg:col-span-5 xl:col-span-4 bg-white-light relative lg:size-25 xl:size-auto flex items-center justify-center">
                        {product?.productImage ? (
                            <img
                                src={product?.productImage}
                                alt={product?.productImageAlt}
                                className="h-auto w-auto object-contain mix-blend-multiply"
                            />
                        ) : (
                            <div className="h-auto w-auto bg-gray-300 rounded flex items-center justify-center">
                                <span className="text-gray-500 text-xs">IMG</span>
                            </div>
                        )}
                    </div>

                    {/* Product Details - Middle Section */}
                    <div className="lg:col-span-11 xl:col-span-12 content-stretch flex flex-col gap-2 items-evenly justify-center relative px-2 h-full">

                        {/* Category Tag Row */}
                        <div className="flex items-start justify-between relative">
                            <div className="bg-[#f4f8ff] box-border content-stretch flex gap-2 items-center justify-start px-2 py-1 relative rounded-xl border border-primary-lighter">
                                <div className="font-enel not-italic relative text-black text-xs text-center text-nowrap">
                                    <p className="leading-2 whitespace-pre">Climatizzatore a pompa di calore</p>
                                </div>
                            </div>
                        </div>

                        {/* Product Name */}
                        <div className="font-enel-bold leading-4 not-italic relative text-black text-sm">
                            {product?.productName}
                        </div>

                        {/* Description and Quantity */}
                        <div className="content-stretch flex gap-2 items-center justify-between relative w-full">
                            <div className="font-enel not-italic relative text-grey-light text-xs">
                                <p className="leading-4">{data?.shortDescription || ""}</p>
                            </div>
                            <div className="flex flex-col items-start justify-start text-grey-light text-xs">
                                <p className="leading-4 whitespace-nowrap">Quantità: {data.count}</p>
                            </div>
                        </div>
                    </div>

                    {/* Price Section - Right Side */}
                    <div className="col-span-16 bg-[#eff2f7] box-border content-stretch flex items-center justify-between px-4 py-6 relative rounded-xl">
                        <div className="content-stretch flex flex-col items-start justify-start leading-[0] not-italic relative text-sm text-nowrap">
                            <div className="font-enel-bold relative text-black">
                                <p className="leading-[21px] text-nowrap whitespace-pre">Totale</p>
                            </div>
                            <div className="font-enel relative text-grey-light">
                                <p className="leading-[21px] text-nowrap whitespace-pre">IVA inclusa</p>
                            </div>
                        </div>
                        <div className="content-stretch flex flex-col justify-between text-right">
                            <div className="flex flex-row justify-end font-enel-bold whitespace-nowrap">
                                <PriceDisplay value={data.totalPrice} className="text-right" />*
                            </div>
                            <div className="font-enel relative text-black text-[14px] w-[233px]">
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
