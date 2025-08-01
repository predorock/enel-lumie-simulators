import cn from 'classnames';
import { useState } from 'react';

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

// Air conditioning icons (simplified versions)
const AirConditioningIcon = ({ type = "mono" }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="8" width="16" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M6 16V18M10 16V18M14 16V18M18 16V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      {type === "dual" && <rect x="2" y="6" width="20" height="2" rx="1" fill="currentColor"/>}
      {type === "trial" && (
        <>
          <rect x="2" y="5" width="20" height="1.5" rx="0.75" fill="currentColor"/>
          <rect x="2" y="7" width="20" height="1.5" rx="0.75" fill="currentColor"/>
        </>
      )}
    </svg>
  );
};

export default function QuantityStepper({ 
  items = [],
  values = {},
  onChange,
  min = 0,
  max = 10,
  totalMax = null, // New prop for total constraint
  className = "",
  ...props 
}) {
  const [quantities, setQuantities] = useState(values || {});

  // Calculate current total
  const getCurrentTotal = (quantities) => {
    return Object.values(quantities).reduce((sum, value) => sum + (value || 0), 0);
  };

  const handleQuantityChange = (itemKey, newValue) => {
    const clampedValue = Math.max(min, newValue);
    const updatedQuantities = {
      ...quantities,
      [itemKey]: clampedValue
    };
    
    // If there's a total limit, check if we exceed it
    if (totalMax && getCurrentTotal(updatedQuantities) > totalMax) {
      // Don't allow the change if it would exceed the total limit
      return;
    }
    
    setQuantities(updatedQuantities);
    
    if (onChange) {
      onChange(updatedQuantities);
    }
  };

  const increment = (itemKey) => {
    const currentValue = quantities[itemKey] || 0;
    handleQuantityChange(itemKey, currentValue + 1);
  };

  const decrement = (itemKey) => {
    const currentValue = quantities[itemKey] || 0;
    handleQuantityChange(itemKey, currentValue - 1);
  };

  const getIconType = (itemKey) => {
    if (itemKey.toLowerCase().includes('dual')) return 'dual';
    if (itemKey.toLowerCase().includes('trial')) return 'trial';
    return 'mono';
  };

  return (
    <div
      className={cn(
        "box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative w-full",
        className
      )}
      {...props}
    >
      {items.map((item, index) => {
        const itemKey = item.key || item.label.toLowerCase().replace(/\s+/g, '_');
        const currentValue = quantities[itemKey] || 0;
        const currentTotal = getCurrentTotal(quantities);
        
        const canDecrement = currentValue > min;
        const canIncrement = totalMax 
          ? (currentValue < max && currentTotal < totalMax)
          : currentValue < max;

        return (
          <div
            key={itemKey}
            className="box-border content-stretch flex flex-row gap-6 h-10 items-start justify-start p-0 relative shrink-0 w-full"
          >
            <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0 w-[354px]">
              {/* Icon and Label */}
              <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-[130px]">
                <div className="relative shrink-0 size-6 text-[#131416]">
                  <AirConditioningIcon type={getIconType(itemKey)} />
                </div>
                <div className="font-['Roobert'] leading-[0] not-italic relative shrink-0 text-[#131416] text-[18px] text-left text-nowrap">
                  <p className="block leading-[27px] whitespace-pre">{item.label}</p>
                </div>
              </div>

              {/* Stepper Controls */}
              <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
                {/* Decrement Button */}
                <button
                  type="button"
                  disabled={!canDecrement}
                  onClick={() => decrement(itemKey)}
                  className={cn(
                    "box-border content-stretch flex flex-row items-center justify-center p-3 relative shrink-0 size-10",
                    "rounded transition-all duration-200 ease-in-out",
                    "hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2",
                    {
                      "bg-[#c2cddd] text-white cursor-not-allowed": !canDecrement,
                      "bg-secondary text-white hover:bg-[#b8114f] focus:ring-secondary": canDecrement
                    }
                  )}
                >
                  <MinusIcon />
                </button>

                {/* Quantity Display */}
                <div className="box-border content-stretch flex flex-row gap-3 h-10 items-center justify-center min-w-10 p-0 relative rounded shrink-0 w-32">
                  <div className="basis-0 box-border content-stretch flex flex-col gap-0.5 grow h-full items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
                    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded shrink-0 w-full border border-[#667790]">
                      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip p-0 relative size-full">
                        <div className="basis-0 font-['Roobert'] grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#131416] text-[16px] text-center text-nowrap">
                          <p className="block leading-[16px]">
                            {currentValue}
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
                  onClick={() => increment(itemKey)}
                  className={cn(
                    "box-border content-stretch flex flex-row items-center justify-center p-3 relative shrink-0 size-10",
                    "rounded transition-all duration-200 ease-in-out",
                    "hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2",
                    {
                      "bg-[#c2cddd] text-white cursor-not-allowed": !canIncrement,
                      "bg-secondary text-white hover:bg-[#b8114f] focus:ring-secondary": canIncrement
                    }
                  )}
                >
                  <PlusIcon />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
