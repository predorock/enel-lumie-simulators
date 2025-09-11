import AirConditioningIcon from '../icons/AirConditioningIcons';

export default function DescriptionBox({
  title = "",
  description = "",
  icon = null,
  step = null,
  titleSize = "2xl",
  className = ""
}) {
  // Don't render anything if both title and description are empty
  if (!title && !description) {
    return null;
  }

  // Title size variants
  const titleSizeClasses = {
    xs: "text-xs leading-4",      // 12px
    sm: "text-sm leading-5",      // 14px
    base: "text-base leading-6",  // 16px
    lg: "text-lg leading-7",      // 18px
    xl: "text-xl leading-7",      // 20px
    "2xl": "text-2xl tracking-[0.4px] leading-[30px]", // 24px (default)
    "3xl": "text-3xl leading-9",  // 30px
    "4xl": "text-4xl leading-10"  // 36px
  };

  const selectedTitleClass = titleSizeClasses[titleSize] || titleSizeClasses["2xl"];

  return (
    <div
      className={`box-border content-stretch flex flex-col gap-1 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full ${className}`}
    >
      {/* Icon, Title and Step on same line */}
      {(icon || title) && (
        <div className="flex items-center gap-2">
          {/* Icon */}
          {icon && (
            <AirConditioningIcon
              type={icon}
              className="w-8 h-8"
            />
          )}

          {/* Title */}
          {title && (
            <div className={`font-enel-bold font-bold text-black ${selectedTitleClass}`}>
              {title}
            </div>
          )}

          {/* Step indicator - right after title */}
          {step && (
            <div className={`font-enel-bold font-bold text-secondary ${selectedTitleClass}`}>
              {step}
            </div>
          )}
        </div>
      )}

      {/* Description */}
      {description && (
        <div
          className="flex flex-col font-enel font-normal justify-center relative shrink-0 text-[14px]"
        >
          <p className="block leading-[21px] text-grey-light">
            {description}
          </p>
        </div>
      )}
    </div>
  );
}
