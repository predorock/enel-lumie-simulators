import * as RadixSlider from '@radix-ui/react-slider';
import cn from 'classnames';

const Slider = ({
  value = 0,
  min = 0,
  max = 100,
  step = 1,
  unit = 'mt',
  onChange,
  disabled = false,
  className = "",
  showLabels = true,
  formatValue = null,
  ...props
}) => {
  // Calculate percentage for the filled portion of the slider
  const percentage = ((value - min) / (max - min)) * 100;

  // Format the display value
  const displayValue = formatValue ? formatValue(value) : value;

  // Handle value change from Radix slider
  const handleValueChange = (newValues) => {
    const newValue = newValues[0];
    if (onChange && newValue !== value) {
      onChange(newValue);
    }
  };

  return (
    <div
      className={cn(
        "content-stretch flex flex-col items-start relative w-full",
        { "opacity-50 cursor-not-allowed": disabled },
        className
      )}
      {...props}
    >
      {/* Value Display Card */}
      <div className="flex flex-row items-center justify-center shadow-[0px_2px_8px_0px_rgba(102,119,144,0.2)] w-full p-4 rounded-lg border-1 border-slate-300">
        <p className="font-roobert-bold leading-4 relative text-secondary text-base">
          {displayValue}
        </p>
        {unit && (
          <p className="font-roobert leading-4 relative text-[#272c34] text-base">
            {unit}
          </p>
        )}
      </div>
      {/* Tip pointing down - CSS triangle with border */}
      <div
        className="relative w-5 h-5 -top-[1px]"
        style={{
          left: `${percentage > 97 ? 'calc(100% - 2rem)' : `${percentage}%`}`
        }}
      >
        {/* Border triangle (slate-300) */}
        <div
          className="absolute w-5 h-4 top-0 left-0"
          style={{
            clipPath: 'polygon(50% 100%, 0 0, 100% 0)',
            backgroundColor: 'rgb(203 213 225)', // slate-300
          }}
        />
        {/* Inner white triangle */}
        <div
          className="absolute w-5 h-4 -top-[2px]"
          style={{
            clipPath: 'polygon(50% 100%, 0 0, 100% 0)',
            backgroundColor: 'white',
          }}
        />
      </div>

      {/* Radix UI Slider */}
      <div className="flex items-center justify-center relative w-full">
        <RadixSlider.Root
          className={cn(
            "relative flex items-center select-none touch-none w-full",
            { "opacity-50 cursor-not-allowed": disabled }
          )}
          value={[value]}
          onValueChange={handleValueChange}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          {...props}
        >
          {/* Track - 24px height rounded pill */}
          <RadixSlider.Track className="bg-slate-300 relative grow rounded-full h-6">
            {/* Filled Range - inset with 4px padding (1 = 4px in Tailwind) */}
            <RadixSlider.Range className="absolute bg-secondary rounded-full h-6" />
          </RadixSlider.Track>

          {/* Thumb (Handle) - 20px circle positioned at the end of filled range */}
          <RadixSlider.Thumb
            style={{ left: percentage > 97 ? 'calc(100% - 2rem)' : `${percentage}%` }}
            className={cn(
              "block w-5 h-5 bg-white rounded-full shadow-md border border-slate-300 relative transition-transform",
              { "cursor-grab": !disabled, "hover:cursor-grab": !disabled }
            )}
            aria-label="Slider thumb"
          >
          </RadixSlider.Thumb>
        </RadixSlider.Root>
      </div>

      {/* Min/Max Labels */}
      {showLabels && (
        <div className="content-stretch flex items-start justify-between relative w-full mt-1">
          <div className="content-stretch flex flex-col gap-1 items-center relative">
            <div className="w-px h-2 bg-[#667790]" />
            <p className="font-roobert-bold leading-3 not-italic relative text-[#667790] text-xs text-center text-nowrap whitespace-pre">
              {min}
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-1 items-center relative">
            <div className="w-px h-2 bg-[#667790]" />
            <p className="font-roobert leading-3 not-italic relative text-[#667790] text-xs text-center text-nowrap whitespace-pre">
              {max}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Slider;
