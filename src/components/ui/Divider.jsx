export default function Divider({ 
  className = "",
  color = "#c2cddd",
  thickness = "1px",
  orientation = "horizontal",
  spacing = "20px"
}) {
  const isHorizontal = orientation === "horizontal";
  
  return (
    <div 
      className={`shrink-0 ${className}`}
      style={{
        margin: isHorizontal ? `${spacing} 0` : `0 ${spacing}`,
      }}
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
