import cn from 'classnames';

export default function SelectionIndicator({
  selected = false,
  size = "sm",
  variant = "primary",
  className = "",
  onClick,
  disabled = false,
  ...props
}) {
  const sizeClasses = {
    xs: "w-2 h-2",
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5"
  };

  const variantClasses = {
    primary: {
      selected: "bg-primary border-primary",
      unselected: "bg-white border-grey-light"
    },
    secondary: {
      selected: "bg-secondary border-secondary",
      unselected: "bg-white border-grey-light"
    },
    white: {
      selected: "bg-white border-white",
      unselected: "bg-transparent border-white"
    }
  };

  const currentVariant = variantClasses[variant];
  const colorClass = selected ? currentVariant.selected : currentVariant.unselected;

  return (
    <div
      className={cn(
        "rounded-full border-2 transition-all duration-200 ease-in-out",
        "cursor-pointer hover:scale-110",
        sizeClasses[size],
        colorClass,
        {
          "cursor-not-allowed opacity-50 hover:scale-100": disabled,
          "shadow-sm": selected
        },
        className
      )}
      onClick={disabled ? undefined : onClick}
      role="radio"
      aria-checked={selected}
      tabIndex={disabled ? -1 : 0}
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && !disabled && onClick) {
          e.preventDefault();
          onClick(e);
        }
      }}
      {...props}
    />
  );
}
