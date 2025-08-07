import AirConditioningIcon from '../icons/AirConditioningIcons';

export default function DescriptionBox({ 
  title = "", 
  description = "", 
  icon = null,
  step = null,
  className = "" 
}) {
  // Don't render anything if both title and description are empty
  if (!title && !description) {
    return null;
  }

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
            <div className="font-['Roobert'] font-bold text-[#131416] text-2xl tracking-[0.4px] leading-[30px]">
              {title}
            </div>
          )}
          
          {/* Step indicator - right after title */}
          {step && (
            <div className="font-['Roobert'] font-bold text-[#b8114f] text-2xl tracking-[0.4px] leading-[30px]">
              {step}
            </div>
          )}
        </div>
      )}
      
      {/* Description */}
      {description && (
        <div
          className="flex flex-col font-['Roobert'] font-normal justify-center relative shrink-0 text-[#667790] text-[14px] max-w-[588px]"
        >
          <p className="block leading-[21px]">
            {description}
          </p>
        </div>
      )}
    </div>
  );
}
