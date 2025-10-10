import OptionSelector from './compound/OptionSelector';

export default function BrandSelector({
  options = [],
  selectedBrand = null,
  onBrandChange = () => { },
  title = "",
  className = "",
  disabled = false
}) {
  return (
    <OptionSelector
      options={options}
      selectedOption={selectedBrand}
      onOptionChange={onBrandChange}
      disabled={disabled}
    >
      {/* Title section */}
      {title && (
        <div className="font-enel-bold font-bold text-black text-lg tracking-[0.4px] leading-[30px]">
          {title}
        </div>
      )}

      {/* Brand options grid */}
      <div className={`flex flex-col gap-4 ${className}`}>
        <OptionSelector.Options>
          <OptionSelector.Option>
            {({ option, isSelected, optionProps }) => {
              // Extract key from optionProps if present
              const { key, ...restProps } = optionProps;
              return (
                <button
                  key={option.id}
                  {...restProps}
                  type="button"
                  disabled={disabled}
                  className={`
                    mr-4
                    relative flex flex-col items-center justify-center 
                    rounded-3xl border-1 transition-all duration-100
                    hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500
                    disabled:cursor-not-allowed disabled:opacity-50
                    ${isSelected
                      ? 'border-secondary bg-white shadow-md'
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
                    }
                  `}
                >
                  {/* Brand logo */}
                  <div className="flex items-center justify-center h-10 p-2 px-6">
                    <img
                      src={option.logo}
                      alt={option.alt}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </button>
              );
            }}
          </OptionSelector.Option>
        </OptionSelector.Options>
      </div>
    </OptionSelector>
  );
}
