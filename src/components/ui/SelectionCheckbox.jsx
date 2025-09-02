
/**
 * SelectionCheckbox component that matches the ENEL design system
 * with proper styling for selected/unselected states.
 */
const SelectionCheckbox = ({
  id,
  checked = false,
  onChange,
  label = "Scegli questa soluzione",
  className = ""
}) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={(e) => onChange && onChange(e.target.checked)}
          className="sr-only"
        />
        <label
          htmlFor={id}
          className="cursor-pointer flex items-center gap-2"
        >
          {/* Custom checkbox */}
          <div className={`w-4 h-4 rounded flex items-center justify-center border-2 transition-colors ${checked
            ? 'bg-secondary border-secondary'
            : 'bg-white border-gray-300 hover:border-gray-400'
            }`}>
            {checked && (
              <svg
                className="w-3 h-3 text-white"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M2.5 6.5L4.5 8.5L9.5 3.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>

          {/* Label */}
          <span className="font-roobert text-black text-[16px] leading-[24px]">
            {label}
          </span>
        </label>
      </div>
    </div>
  );
};

export default SelectionCheckbox;
