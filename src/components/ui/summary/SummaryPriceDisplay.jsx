import cn from "classnames";
import Divider from "../Divider";

const SummaryPriceDisplay = ({
    title = "Riepilogo spesa componenti aggiuntivi",
    lineItems = [],
    total = "",
    className = "",
    ...props
}) => {
    return (
        <div
            className={cn(
                "bg-white rounded-lg shadow-md p-6 font-enel",
                className
            )}
            {...props}
        >
            {/* Title */}
            <h3 className="text-lg font-enel-bold text-[#002466] mb-6">
                {title}
            </h3>

            {/* Line Items */}
            <div className="space-y-4">
                {lineItems.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                        <span className="text-sm font-enel text-[#667790] flex-1">
                            {item.description}
                        </span>
                        <span className="text-sm font-enel-bold text-[#002466] ml-4">
                            {item.price}
                        </span>
                    </div>
                ))}
            </div>

            {/* Divider */}
            {lineItems.length > 0 && total && (
                <Divider
                    className="my-6"
                    color="#c2cddd"
                    spacing="0"
                />
            )}

            {/* Total */}
            {total && (
                <div className="flex justify-between items-center">
                    <span className="text-lg font-enel-bold text-[#002466]">
                        Totale (IVA Inclusa)
                    </span>
                    <span className="text-xl font-enel-bold text-[#002466]">
                        {total}
                    </span>
                </div>
            )}
        </div>
    );
};

export default SummaryPriceDisplay;
