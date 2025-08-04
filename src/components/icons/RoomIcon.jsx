const RoomIcon = ({ className = "w-6 h-6", color = "currentColor" }) => {
  return (
    <svg 
      className={className}
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2h8v8H8V8z" 
        fill={color}
        fillRule="evenodd" 
        clipRule="evenodd"
      />
      <path 
        d="M10 10h4v4h-4v-4z" 
        fill={color}
        opacity="0.3"
      />
    </svg>
  );
};

export default RoomIcon;
