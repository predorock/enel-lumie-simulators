import cn from 'classnames';
import { useEffect, useState } from 'react';
import checkmarkIcon from '../../assets/icons/checkmark.svg';

export default function ToggleSwitch({ 
  label = "",
  checked = false,
  onChange,
  className = "",
  disabled = false,
  size = "md",
  ...props 
}) {
  const [isChecked, setIsChecked] = useState(checked);

  // Sync with parent prop
  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleToggle = () => {
    if (disabled) return;
    
    const newValue = !isChecked;
    setIsChecked(newValue);
    
    if (onChange) {
      onChange(newValue);
    }
  };

  const sizeClasses = {
    sm: {
      container: "h-6",
      switch: "w-12 h-6 p-1",
      toggle: "w-4 h-4",
      text: "text-sm"
    },
    md: {
      container: "h-8",
      switch: "w-14 h-7 p-1",
      toggle: "w-5 h-5",
      text: "text-base"
    },
    lg: {
      container: "h-10",
      switch: "w-18 h-9 p-1.5",
      toggle: "w-7 h-7", 
      text: "text-lg"
    }
  };

  const currentSize = sizeClasses[size];

  return (
    <div
      className={cn(
        "flex flex-row items-center justify-between relative",
        currentSize.container,
        className
      )}
      {...props}
    >
      {/* Label */}
      {label && (
        <div className="flex flex-col gap-1 items-start justify-center flex-grow">
          <label
            className={cn(
              "font-['Roobert'] font-bold text-[#131416] cursor-pointer select-none leading-6",
              currentSize.text,
              {
                "opacity-50 cursor-not-allowed": disabled
              }
            )}
            onClick={handleToggle}
          >
            {label}
          </label>
        </div>
      )}

      {/* Toggle Switch */}
      <div
        className={cn(
          "relative flex items-center rounded-full transition-all duration-300 ease-out cursor-pointer",
          currentSize.switch,
          {
            "bg-secondary": isChecked,
            "bg-[#e2e8f0]": !isChecked,
            "cursor-not-allowed opacity-50": disabled,
            "hover:shadow-md": !disabled
          }
        )}
        onClick={handleToggle}
        role="switch"
        aria-checked={isChecked}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        onKeyDown={(e) => {
          if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            handleToggle();
          }
        }}
      >
        {/* Toggle Circle */}
        <div
          className={cn(
            "bg-white rounded-full shadow-sm transition-all duration-300 ease-out flex items-center justify-center absolute transform",
            currentSize.toggle,
            {
              "left-1 scale-100": !isChecked,
              "right-1 scale-105": isChecked,
              "shadow-md": isChecked
            }
          )}
        >
          {/* Checkmark icon when checked */}
          {isChecked && (
            <img 
              src={checkmarkIcon} 
              alt="Checked" 
              className="w-3 h-3 filter brightness-0 invert transition-all duration-200 ease-out transform scale-100"
            />
          )}
        </div>
      </div>
    </div>
  );
}
