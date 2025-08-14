import cn from 'classnames';
import { useState } from 'react';

export default function SearchInput({ 
  placeholder = "Nome punto vendita", 
  value = "", 
  onChange, 
  className = "",
  disabled = false,
  ...props 
}) {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value && value.length > 0;
  const shouldFloatLabel = isFocused || hasValue;

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
                "absolute left-0 font-enel pointer-events-none transition-all duration-200 ease-in-out",
                {
                  "text-[12px] text-[#667790] top-0": shouldFloatLabel,
                  "text-[13px] text-[#667790] top-1/2 -translate-y-1/2": !shouldFloatLabel
                }
              )}
            >
              {placeholder}
            </label>
            <input
              type="text"
              value={value}
              onChange={onChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              disabled={disabled}
              className={cn(
                "basis-0 grow min-h-px min-w-px relative shrink-0",
                "text-[#000000] text-[13px] text-left",
                "font-enel leading-[15px]",
                "bg-transparent border-none outline-none",
                {
                  "pt-3": shouldFloatLabel,
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
            "border-[#0047cc] border-2": isFocused,
            "border-[#667790]": !isFocused
          }
        )}
      />
    </div>
  );
}
