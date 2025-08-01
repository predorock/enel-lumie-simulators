export default function DescriptionBox({ 
  title = "", 
  description = "", 
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
      {/* Title - only show if present */}
      {title && (
        <div
          className="flex flex-col font-['Roobert'] font-bold justify-center min-w-full relative shrink-0 text-[#131416] text-[20px] tracking-[0.4px]"
          style={{ width: "min-content" }}
        >
          <p className="block leading-[30px]">
            {title}
          </p>
        </div>
      )}
      
      {/* Description - only show if present */}
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
