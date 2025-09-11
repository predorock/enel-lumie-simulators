import CheckMarkIcon from "../icons/CheckMarkIcon";
/**
 * Checkbox component following ENEL design system specifications
 */
const Checkbox = ({
  checked = false,
  onChange = null,
  label = "",
  disabled = false,
  className = "",
  id = null,
  ...props
}) => {
  const handleChange = (e) => {
    if (disabled) return;
    if (onChange) {
      onChange(e.target.checked);
    }
  };

  const checkboxId = id || `checkbox-${label.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className={`flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 ${className}`} {...props}>
      <div className={`relative rounded shrink-0 size-5 border-2 ${checked
        ? 'bg-secondary border-secondary'
        : 'bg-white border-grey-light'
        } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}>
        <input
          type="checkbox"
          id={checkboxId}
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
        />
        {checked && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <CheckMarkIcon fillClass="fill-white" className="size-4" />
          </div>
        )}
      </div>
      {
        label && (
          <label
            htmlFor={checkboxId}
            className={`font-enel leading-[0] not-italic relative shrink-0 text-black text-[16px] text-left ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
              }`}
          >
            <p className="block leading-[24px]">{label}</p>
          </label>
        )
      }
    </div >
  );
};

export default Checkbox;
