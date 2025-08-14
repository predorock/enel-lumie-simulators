import cn from 'classnames';
import { useState } from 'react';
import checkmarkIcon from '../../assets/icons/checkmark.svg';

export default function Checkbox({ 
  label = "",
  checked = false,
  onChange,
  className = "",
  disabled = false,
  size = "md",
  variant = "primary",
  ...props 
}) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    if (disabled) return;
    
    const newValue = !isChecked;
    setIsChecked(newValue);
    
    if (onChange) {
      onChange(newValue);
    }
  };

  const sizeClasses = {
    sm: {
      box: "w-4 h-4",
      text: "text-sm",
      icon: "w-2.5 h-2.5"
    },
    md: {
      box: "w-5 h-5", 
      text: "text-base",
      icon: "w-3 h-3"
    },
    lg: {
      box: "w-6 h-6",
      text: "text-lg", 
      icon: "w-5 h-5"
    }
  };

  const variantClasses = {
    primary: {
      checked: "bg-primary border-primary",
      unchecked: "bg-white border-[#667790]",
      hover: "hover:border-primary"
    },
    secondary: {
      checked: "bg-secondary border-secondary",
      unchecked: "bg-white border-[#667790]", 
      hover: "hover:border-secondary"
    }
  };

  const currentSize = sizeClasses[size];
  const currentVariant = variantClasses[variant];

  return (
    <div
      className={cn(
        "flex items-center gap-3",
        className
      )}
      {...props}
    >
      {/* Checkbox */}
      <div
        className={cn(
          "relative flex items-center justify-center rounded border-2 cursor-pointer transition-all duration-200 ease-in-out",
          currentSize.box,
          {
            [currentVariant.checked]: isChecked,
            [currentVariant.unchecked]: !isChecked,
            [currentVariant.hover]: !disabled && !isChecked,
            "cursor-not-allowed opacity-50": disabled,
            "hover:shadow-sm": !disabled
          }
        )}
        onClick={handleChange}
        role="checkbox"
        aria-checked={isChecked}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        onKeyDown={(e) => {
          if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            handleChange();
          }
        }}
      >
        {/* Checkmark */}
        {isChecked && (
          <img 
            src={checkmarkIcon} 
            alt="Checked" 
            className={cn(
              "filter brightness-0 invert transition-opacity duration-150",
              currentSize.icon
            )}
          />
        )}
      </div>

      {/* Label */}
      {label && (
        <label
          className={cn(
            "font-enel text-[#131416] cursor-pointer select-none",
            currentSize.text,
            {
              "opacity-50 cursor-not-allowed": disabled
            }
          )}
          onClick={handleChange}
        >
          {label}
        </label>
      )}
    </div>
  );
}
