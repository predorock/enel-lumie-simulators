
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
            disabled={disabled}>
            {/* Title section */}
            {title && (
                <div className="font-enel-bold font-bold text-black text-lg tracking-[0.4px] leading-[30px]">
                    {title}
                </div>
            )}
            <div className={`flex flex-col gap-4 ${className}`}>
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
                                        mr-4
                                        relative flex flex-row items-center justify-center 
                                        rounded-3xl border-1 transition-all duration-200
                                        hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500
                                        disabled:cursor-not-allowed disabled:opacity-50
                                        ${isSelected
                                            ? 'border-[#b8114f] bg-[#fdf2f8] shadow-md'
                                            : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
                                        }
                                    `}
                                >
                                    <div className='flex items-center justify-center h-10 p-2 px-6'>
                                        {/* Option icon/image */}
                                        {option.icon && (
                                            <StarIcon variant={isSelected ? 'pink' : 'black'} type={option.icon} className="object-contain" />
                                        )}
                                        {/* Option text */}
                                        <span className={cn("font-enel font-medium text-sm text-center", {
                                            "text-black": !isSelected,
                                            "text-secondary": isSelected
                                        })}>
                                            {option.name}
                                        </span>
                                    </div>
                                </div>
                            );
                        }}
                    </OptionSelector.Option>
                </OptionSelector.Options>
            </div>
        </OptionSelector>
    );
}
