import cn from "classnames";

export default function Divider({
  className = "",
  color = "#c2cddd",
  thickness = "1px",
  orientation = "horizontal",
  label = "",
}) {
  const isHorizontal = orientation === "horizontal";

  // If label is provided, render with label in the middle
  if (label && isHorizontal) {
    return (
      <div className={cn("flex items-center shrink-0", className)}>
        {/* Left line */}
        <div
          className="flex-1"
          style={{
            backgroundColor: color,
            height: thickness,
          }}
        />
        {/* Label */}
        <span className="px-4 font-enel text-sm text-gray-600">{label}</span>
        {/* Right line */}
        <div
          className="flex-1"
          style={{
            backgroundColor: color,
            height: thickness,
          }}
        />
      </div>
    );
  }

  // Default divider without label
  return (
    <div
      className={cn(`shrink-0 ${className}`)}
    >
      <div
        className={`${isHorizontal ? 'w-full' : 'h-full'}`}
        style={{
          backgroundColor: color,
          width: isHorizontal ? '100%' : thickness,
          height: isHorizontal ? thickness : '100%',
        }}
      />
    </div>
  );
}
