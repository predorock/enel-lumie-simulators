import cn from 'classnames';
import { useState } from 'react';

export default function TextInput({
  placeholder = "Enter text",
  value = "",
  onChange,
  className = "",
  disabled = false,
  type = "text",
  warning = false,
  numericOnly = false,
  digitsOnly = false,
  ...props
}) {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value && value.length > 0;
  const shouldFloatLabel = isFocused || hasValue;

  // Determine input type - use 'tel' for numeric inputs to show numeric keypad on mobile
  const inputType = (numericOnly || digitsOnly) ? 'tel' : type;

  const handleFocus = (e) => {
    setIsFocused(true);
    if (props.onFocus) {
      props.onFocus(e);
    }
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    if (props.onBlur) {
      props.onBlur(e);
    }
  };

  const handleChange = (e) => {
    let newValue = e.target.value;

    // Apply numeric filtering if enabled
    if (digitsOnly) {
      // Only allow digits 0-9
      newValue = newValue.replace(/[^0-9]/g, '');
    } else if (numericOnly) {
      // Allow digits, decimal point, and negative sign with proper formatting
      // Remove any characters that aren't digits, decimal, or minus
      newValue = newValue.replace(/[^0-9.-]/g, '');

      // Ensure only one decimal point
      const decimalCount = (newValue.match(/\./g) || []).length;
      if (decimalCount > 1) {
        const firstDecimalIndex = newValue.indexOf('.');
        newValue = newValue.substring(0, firstDecimalIndex + 1) +
          newValue.substring(firstDecimalIndex + 1).replace(/\./g, '');
      }

      // Ensure minus sign only at the beginning
      if (newValue.includes('-')) {
        const minusCount = (newValue.match(/-/g) || []).length;
        if (minusCount > 1 || newValue.indexOf('-') !== 0) {
          newValue = (newValue.charAt(0) === '-' ? '-' : '') +
            newValue.replace(/-/g, '');
        }
      }
    }

    // Create synthetic event with filtered value
    const syntheticEvent = {
      ...e,
      target: {
        ...e.target,
        value: newValue
      }
    };

    if (onChange) {
      onChange(syntheticEvent);
    }
  };

  return (
    <div
      className={cn(
        "text-input",
        "transition-all duration-200 ease-in-out",
        className
      )}
    >
      <div className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-start max-w-inherit min-w-inherit overflow-clip px-2 py-2 relative w-full">
        <div className="basis-0 box-border content-stretch flex flex-row gap-2 grow h-full items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
          <div className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
            {/* Floating Label */}
            <label
              className={cn(
                "absolute left-0 font-enel pointer-events-none transition-all duration-200 ease-in-out text-[#667790]",
                {
                  "text-[12px] top-1": shouldFloatLabel,
                  "text-[13px]  top-1/2 -translate-y-1/2": !shouldFloatLabel
                }
              )}
            >
              {placeholder}
            </label>
            <input
              type={inputType}
              value={value}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              disabled={disabled}
              inputMode={(numericOnly || digitsOnly) ? "numeric" : undefined}
              className={cn(
                "basis-0 grow min-h-px min-w-px relative shrink-0",
                "text-black text-[13px] text-left",
                "font-enel leading-[15px]",
                "bg-transparent border-none outline-none",
                "placeholder:text-transparent",
                {
                  "pt-5 pb-1": shouldFloatLabel,
                  "pt-0": !shouldFloatLabel,
                  "cursor-not-allowed opacity-50": disabled
                }
              )}
              {...props}
            />
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className={cn(
          "absolute border border-solid inset-0 pointer-events-none rounded transition-all duration-200 ease-in-out",
          {
            "border-primary-light border-2": isFocused,
            "border-grey-light": !isFocused,
            "border-warning": warning
          }
        )}
      />
    </div>
  );
}
