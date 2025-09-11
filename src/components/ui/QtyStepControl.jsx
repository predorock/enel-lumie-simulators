import cn from 'classnames';

// Simple icons using SVG instead of localhost images
const MinusIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 8H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const PlusIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 4V12M4 8H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const QtyStepControl = ({
    value = 0,
    min = 0,
    max = 10,
    onIncrement,
    onDecrement,
    disabled = false,
    className = "",
    buttonClassName = "",
    displayClassName = "",
    ...props
}) => {
    const canDecrement = value > min && !disabled;
    const canIncrement = value < max && !disabled;

    const handleIncrement = () => {
        if (canIncrement && onIncrement) {
            onIncrement(value + 1);
        }
    };

    const handleDecrement = () => {
        if (canDecrement && onDecrement) {
            onDecrement(value - 1);
        }
    };

    return (
        <div
            className={cn(
                "box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0",
                className
            )}
            {...props}
        >
            {/* Decrement Button */}
            <button
                type="button"
                disabled={!canDecrement}
                onClick={handleDecrement}
                className={cn(
                    "text-white box-border content-stretch flex flex-row items-center justify-center p-3 relative shrink-0 size-10",
                    "rounded transition-all duration-200 ease-in-out",
                    "hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2",
                    {
                        "bg-[#c2cddd] cursor-not-allowed": !canDecrement,
                        "bg-secondary hover:bg-secondary focus:ring-secondary": canDecrement
                    },
                    buttonClassName
                )}
            >
                <MinusIcon />
            </button>

            {/* Quantity Display */}
            <div
                className={cn(
                    "box-border content-stretch flex flex-row gap-3 h-10 items-center justify-center min-w-10 p-0 relative rounded shrink-0 w-32",
                    displayClassName
                )}
            >
                <div className="basis-0 box-border content-stretch flex flex-col gap-0.5 grow h-full items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
                    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded shrink-0 w-full border border-grey-light">
                        <div className="box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip p-0 relative size-full">
                            <div className="basis-0 font-enel grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-black text-[16px] text-center text-nowrap">
                                <p className="block leading-[16px]">
                                    {value}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Increment Button */}
            <button
                type="button"
                disabled={!canIncrement}
                onClick={handleIncrement}
                className={cn(
                    "text-white box-border content-stretch flex flex-row items-center justify-center p-3 relative shrink-0 size-10",
                    "rounded transition-all duration-200 ease-in-out",
                    "hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2",
                    {
                        "bg-[#c2cddd] cursor-not-allowed": !canIncrement,
                        "bg-secondary hover:bg-secondary focus:ring-secondary": canIncrement
                    },
                    buttonClassName
                )}
            >
                <PlusIcon />
            </button>
        </div>
    );
};

export default QtyStepControl;
