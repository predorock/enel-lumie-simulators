import StarIcon from '../icons/StarIcon';

export default function OptionSelector({ 
  options = [],
  selectedOption = null,
  onOptionChange = () => {},
  title = "",
  className = "",
  disabled = false
}) {
  const handleOptionSelect = (optionId) => {
    if (disabled) return;
    
    const newSelection = selectedOption === optionId ? null : optionId;
    onOptionChange(newSelection);
  };

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {/* Title section */}
      {title && (
        <div className="font-enel-bold font-bold text-[#131416] text-[20px] tracking-[0.4px] leading-[30px]">
          {title}
        </div>
      )}

      {/* Options grid */}
      <div className="grid grid-cols-3 gap-4">
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            disabled={disabled}
            onClick={() => handleOptionSelect(option.id)}
            className={`
              relative flex flex-row items-center justify-center 
              p-2 rounded-3xl border-2 transition-all duration-200
              hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500
              disabled:cursor-not-allowed disabled:opacity-50
              ${selectedOption === option.id 
                ? 'border-[#b8114f] bg-[#fdf2f8] shadow-md' 
                : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
              }
            `}
          >
            {/* Option icon/image */}
            {option.icon && (
              <div className="flex items-center justify-center h-6">
                <StarIcon type={option.icon} className="object-contain" />
              </div>
            )}
            
            {/* Option text */}
            <span className="font-enel font-medium text-sm text-[#131416] text-center">
              {option.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
