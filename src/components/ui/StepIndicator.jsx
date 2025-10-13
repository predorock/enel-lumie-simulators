import cn from 'classnames';
import IconRenderer from '../icons/IconRenderer';

// Connector line component
const ConnectorLine = () => (
    <div className="h-0 w-6 flex-shrink-0 relative">
        <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-dashed border-[#c2cddd]"></div>
        </div>
    </div>
);

const StepIndicator = ({
    steps = [],
    currentStep = 1,
    className = "",
    ...props
}) => {
    const containerClasses = cn(
        "flex flex-row items-center bg-[#f7f8fb] rounded-full p-2 gap-2 w-fit",
        className
    );

    return (
        <div className={containerClasses} {...props}>
            {steps.map((step, index) => {
                const stepNumber = index + 1;
                const isActive = stepNumber === currentStep;
                const isPast = stepNumber < currentStep;
                const isFuture = stepNumber > currentStep;

                const stepElement = (() => {
                    if (isActive) {
                        return (
                            <div
                                key={step.id || stepNumber}
                                className={cn("flex items-center rounded-full px-4 py-2 mr-2 h-10 font-enel-bold text-[18px] leading-[27px] tracking-[0.4px] border-1 border-primary-light text-primary-light bg-white")}
                            >
                                <span className="whitespace-nowrap">
                                    {step.label || `Step ${stepNumber}`}
                                </span>
                                {
                                    step.isSelected && (
                                        <IconRenderer
                                            icon="checkMark"
                                            className="w-6 h-6 ml-2"
                                            fillClass="fill-current"
                                        />
                                    )
                                }
                            </div>
                        );
                    } else {
                        // Inactive steps - numbered circles
                        return (
                            <div
                                key={step.id || stepNumber}
                                className={cn(
                                    "flex items-center justify-center w-10 h-10 mr-2 rounded-full border-1 font-enel text-[18px] leading-[27px] tracking-[0.4px] transition-colors duration-200",
                                    {
                                        // Past steps - filled blue
                                        "bg-primary-light border-primary-light": isPast,
                                        // Future steps - outlined gray
                                        "bg-white text-grey-light border-grey-light": isFuture
                                    }
                                )}
                            >
                                {
                                    isPast ?
                                        <IconRenderer
                                            icon="checkMark"
                                            className="w-6 h-6"
                                            fillClass="fill-white"
                                        />
                                        :
                                        stepNumber
                                }
                            </div>
                        );
                    }
                })();

                // Return step with connector (always show connectors)
                if (index < steps.length - 1) {
                    return (
                        <div key={step.id || stepNumber} className="flex items-center">
                            {stepElement}
                            <ConnectorLine />
                        </div>
                    );
                } else {
                    return stepElement;
                }
            })}
        </div>
    );
};

export default StepIndicator;