const Image = ({
  src,
  alt = '',
  className = '',
  width,
  height,
  style = {},
  containerClassName = '',
  ...props
}) => {

  const content = (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      style={style}
      {...props}
    />
  );

  // If there's a container class, wrap in a div
  if (containerClassName) {
    return (
      <div className={containerClassName}>
        {content}
      </div>
    );
  }

  return content;
};

export default Image;
