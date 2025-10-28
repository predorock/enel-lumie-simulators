import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import cn from 'classnames';

/**
 * RadioGroup Component based on Radix UI primitives
 * Follows ENEL design system with card-style options
 * 
 * @param {Array} options - Array of option objects with value and label
 * @param {string} value - Currently selected value
 * @param {function} onValueChange - Callback when selection changes
 * @param {string} name - Form field name
 * @param {boolean} disabled - Whether the entire radio group is disabled
 * @param {string} className - Additional CSS classes for the container
 * @param {object} props - Additional props passed to the RadioGroup root
 */
export default function RadioGroup({
    options = [],
    value,
    onValueChange,
    name,
    disabled = false,
    className = "",
    label = "",
    ...props
}) {
    return (
        <div className={cn(className)}>
            {label && <div className='text-base font-enel-bold mb-4'>
                {label}
            </div>}
            <RadioGroupPrimitive.Root
                value={value}
                onValueChange={onValueChange}
                name={name}
                disabled={disabled}
                className={cn("flex flex-col gap-0 w-full max-w-[365px]", className)}
                {...props}
            >
                {options.map((option, index) => {
                    const isFirst = index === 0;
                    const isLast = index === options.length - 1;
                    const isSelected = value === option.value;

                    return (
                        <RadioGroupPrimitive.Item
                            key={option.value}
                            value={option.value}
                            disabled={disabled || option.disabled}
                            className={cn(
                                // Base card styles
                                "box-border flex items-center justify-between relative shrink-0 w-full py-6 px-4 transition-all duration-200",
                                "border-[#c2cddd] border",
                                // First item gets top border
                                isFirst && "border-t",
                                // Selected state
                                isSelected ? "bg-[#f7f8fb] border-black" : "bg-white",
                                // Border radius for first/last items
                                isFirst && "rounded-tl-xl rounded-tr-xl",
                                isLast && "rounded-bl-xl rounded-br-xl",
                                // Hover state (only when not disabled)
                                !disabled && !option.disabled && "hover:bg-[#f7f8fb] cursor-pointer",
                                // Disabled state
                                (disabled || option.disabled) && "opacity-50 cursor-not-allowed"
                            )}
                        >
                            <div className="flex items-center gap-4 w-full">
                                {/* Custom Radio Indicator */}
                                <div className="relative flex items-center justify-start">
                                    <div
                                        className={cn(
                                            "w-5 h-5 rounded-full border-2 transition-all duration-200",
                                            isSelected
                                                ? "border-secondary bg-secondary"
                                                : "border-[#c2cddd] bg-white"
                                        )}
                                    >
                                        {isSelected && (
                                            <div className="w-2 h-2 rounded-full bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                                        )}
                                    </div>
                                    <RadioGroupPrimitive.Indicator className="absolute inset-0" />
                                </div>

                                {/* Label */}
                                <label
                                    className={cn(
                                        "font-enel-bold text-base leading-6 cursor-pointer select-none",
                                        isSelected ? "text-secondary" : "text-[#131416]",
                                        (disabled || option.disabled) && "cursor-not-allowed"
                                    )}
                                >
                                    {option.label}
                                </label>
                            </div>
                        </RadioGroupPrimitive.Item>
                    );
                })}
            </RadioGroupPrimitive.Root>
        </div>
    );
}

/**
 * Individual RadioGroupItem component for more granular control
 */
export function RadioGroupItem({
    value,
    disabled = false,
    children,
    className = "",
    ...props
}) {
    return (
        <RadioGroupPrimitive.Item
            value={value}
            disabled={disabled}
            className={cn(
                "box-border flex items-center justify-between relative shrink-0 w-full p-4 transition-all duration-200",
                "bg-white border-[#c2cddd] border-r border-l border-b border-t",
                "hover:bg-[#f7f8fb] cursor-pointer",
                "data-[state=checked]:bg-[#f7f8fb] data-[state=checked]:border-[#272c34]",
                "disabled:opacity-50 disabled:cursor-not-allowed",
                className
            )}
            {...props}
        >
            {children}
        </RadioGroupPrimitive.Item>
    );
}

/**
 * RadioGroupIndicator component for custom styling
 */
export function RadioGroupIndicator({ className = "", ...props }) {
    return (
        <div className="relative flex items-center justify-center">
            <div
                className={cn(
                    "w-5 h-5 rounded-full border-2 transition-all duration-200",
                    "border-[#c2cddd] bg-white",
                    "group-data-[state=checked]:border-secondary group-data-[state=checked]:bg-secondary",
                    className
                )}
            >
                <div className="w-2 h-2 rounded-full bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-data-[state=checked]:opacity-100 transition-opacity duration-200" />
            </div>
            <RadioGroupPrimitive.Indicator className="absolute inset-0" {...props} />
        </div>
    );
}