import cn from "classnames";

export default function Divider({
  className = "",
  color = "#c2cddd",
  thickness = "1px",
  orientation = "horizontal",
}) {
  const isHorizontal = orientation === "horizontal";

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
