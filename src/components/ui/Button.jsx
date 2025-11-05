import cn from 'classnames';

export default function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  icon = null,
  iconPosition = "left",
  className = "",
  onClick,
  type = "button",
  ...props
}) {
  const variants = {
    primary: {
      base: "bg-secondary text-white border-2 border-secondary",
      hover: "hover:bg-secondary hover:border-secondary",
      focus: "focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2",
      disabled: "disabled:bg-gray-300 disabled:border-gray-300 disabled:text-gray-500"
    },
    "primary-light": {
      base: "bg-white text-primary-light",
      hover: "",
      focus: "",
      disabled: "disabled:bg-gray-300 disabled:border-gray-300 disabled:text-gray-500"
    },
    secondary: {
      base: "bg-white text-secondary border-2 border-secondary",
      hover: "hover:bg-[#fdf2f8] hover:border-secondary hover:text-secondary",
      focus: "focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2",
      disabled: "disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400"
    },
    outline: {
      base: "bg-transparent text-secondary border-2 border-secondary",
      hover: "hover:bg-[#fdf2f8] hover:border-secondary hover:text-secondary",
      focus: "focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2",
      disabled: "disabled:border-gray-300 disabled:text-gray-400"
    },
    "outline-white": {
      base: "bg-transparent text-white border-2 border-white",
      hover: "hover:bg-[#fdf2f8] hover:border-white hover:text-black",
      focus: "focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2",
      disabled: "disabled:border-gray-300 disabled:text-gray-400"
    },
    ghost: {
      base: "bg-transparent text-secondary border-2 border-transparent",
      hover: "hover:bg-[#fdf2f8] hover:text-secondary",
      focus: "focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2",
      disabled: "disabled:text-gray-400"
    }
  };

  const sizes = {
    sm: "px-4 py-2 h-8 text-sm",
    md: "px-6 py-4 h-12 text-base",
    lg: "px-8 py-4 h-14 text-lg"
  };

  const currentVariant = variants[variant];
  const currentSize = sizes[size];

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={cn(
        // Base styles
        "relative inline-flex items-center justify-center gap-2 rounded-sm font-enel font-regular transition-all duration-200 ease-out",
        "disabled:cursor-not-allowed hover:cursor-pointer",

        // Size
        currentSize,

        // Variant
        currentVariant.base,
        !disabled && !loading && currentVariant.hover,
        currentVariant.focus,
        currentVariant.disabled,

        className
      )}
      {...props}
    >
      {/* Loading spinner */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* Content */}
      <div className={cn("flex items-center gap-2", { "opacity-0": loading })}>
        {icon && iconPosition === "left" && (
          <span className="w-4 h-4 flex items-center justify-center">
            {icon}
          </span>
        )}

        {children && (
          <span className="leading-4 whitespace-nowrap">
            {children}
          </span>
        )}

        {icon && iconPosition === "right" && (
          <span className="w-4 h-4 flex items-center justify-center">
            {icon}
          </span>
        )}
      </div>
    </button>
  );
}
