import cn from "classnames";
import Divider from "../Divider";
import PriceDisplay from "../price/PriceDisplay";

const SummaryPriceDisplay = ({
    title = "Riepilogo spesa componenti aggiuntivi",
    items = [],
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
            <h3 className="text-lg font-enel-bold text-black mb-4">
                {title}
            </h3>

            {/* Line Items */}
            <div className="space-y-4">
                {items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                        <span className="text-md font-enel-light flex-1">
                            {item.description}
                        </span>
                        <PriceDisplay value={item.price} />
                    </div>
                ))}
            </div>

            {/* Divider */}
            {total && (
                <Divider
                    className="my-4"
                    spacing="0"
                />
            )}

            {/* Total */}
            {total && (
                <div className="flex justify-between items-center text-xl">
                    <span className="font-enel-bold text-black">
                        Totale Spese (IVA Inclusa)
                    </span>
                    <span className="font-enel-bold text-black">
                        <PriceDisplay value={total} />
                    </span>
                </div>
            )}
        </div>
    );
};

export default SummaryPriceDisplay;
