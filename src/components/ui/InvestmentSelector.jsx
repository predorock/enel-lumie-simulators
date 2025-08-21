
import cn from 'classnames';
import StarIcon from '../icons/StarIcon';
import OptionSelector from './compound/OptionSelector';

export default function InvestimentSelector({
    options = [],
    selectedOption = null,
    onOptionChange,
    title = '',
    className = '',
    disabled = false
}) {
    return (
        <OptionSelector
            title={title}
            selectedOption={selectedOption}
            onOptionChange={onOptionChange}
            options={options}
            disabled={disabled}
            className={`flex flex-col gap-4 ${className}`}>
            {/* Title section */}
            {title && (
                <div className="font-enel-bold font-bold text-[#131416] text-[20px] tracking-[0.4px] leading-[30px]">
                    {title}
                </div>
            )}
            <div className="grid grid-cols-3 gap-4">
                <OptionSelector.Options>
                    <OptionSelector.Option>
                        {({ option, isSelected, optionProps }) => {
                            // Extract key from optionProps if present
                            const { key, ...restProps } = optionProps;
                            return (
                                <div
                                    key={option.id}
                                    {...restProps}
                                    type="button"
                                    disabled={disabled}
                                    className={`
                                        relative flex flex-row items-center justify-center 
                                        p-2 rounded-3xl border-2 transition-all duration-200
                                        hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500
                                        disabled:cursor-not-allowed disabled:opacity-50
                                        ${isSelected
                                            ? 'border-[#b8114f] bg-[#fdf2f8] shadow-md'
                                            : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
                                        }
                                    `}
                                >
                                    {/* Option icon/image */}
                                    {option.icon && (
                                        <div className="flex items-center justify-center h-6">
                                            <StarIcon variant={isSelected ? 'pink' : 'black'} type={option.icon} className="object-contain" />
                                        </div>
                                    )}
                                    {/* Option text */}
                                    <span className={cn("font-enel font-medium text-sm text-center", {
                                        "text-[#131416]": !isSelected,
                                        "text-secondary": isSelected
                                    })}>
                                        {option.name}
                                    </span>
                                </div>
                            );
                        }}
                    </OptionSelector.Option>
                </OptionSelector.Options>
            </div>
        </OptionSelector>
    );
}
