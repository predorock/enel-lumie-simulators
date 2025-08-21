import OptionSelector from './compound/OptionSelector';

export default function BrandSelector({
  options = [],
  selectedBrand = null,
  onBrandChange = () => { },
  title = "",
  className = "",
  disabled = false
}) {
  // Convert BRANDS object to options array format

  return (
    <OptionSelector
      options={options}
      selectedOption={selectedBrand}
      onOptionChange={onBrandChange}
      disabled={disabled}
      className={`flex flex-col gap-4 ${className}`}
    >
      {/* Title section */}
      {title && (
        <div className="font-enel-bold font-bold text-[#131416] text-[20px] tracking-[0.4px] leading-[30px]">
          {title}
        </div>
      )}

      {/* Brand options grid */}
      <div className="grid grid-cols-3 gap-4">
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
                    relative flex flex-col items-center justify-center 
                    p-1 rounded-3xl border-2 transition-all duration-100
                    hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500
                    disabled:cursor-not-allowed disabled:opacity-50
                    ${isSelected
                      ? 'border-[#b8114f] bg-[#fdf2f8] shadow-md'
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
                    }
                  `}
                >
                  {/* Brand logo */}
                  <div className="flex items-center justify-center h-10">
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
