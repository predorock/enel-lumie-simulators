import React from 'react';

// Asset mapping for imported images
const assetMap = {
  'italy': () => import('../../assets/images/italy.svg'),
  'enel-logo-white': () => import('../../assets/images/enel-logo-white.svg'),
  'mezzo-tondo': () => import('../../assets/images/mezzo-tondo.svg'),
  'condizionatore-big': () => import('../../assets/images/condizionatore-big.svg'),
  'cubo-condizionatore': () => import('../../assets/images/cubo-condizionatore.svg'),
};

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
  const [imageSrc, setImageSrc] = React.useState('');

  React.useEffect(() => {
    if (assetMap[src]) {
      assetMap[src]().then(module => {
        setImageSrc(module.default);
      });
    } else {
      setImageSrc(src);
    }
  }, [src]);

  if (!imageSrc) {
    return null;
  }

  const content = (
    <img
      src={imageSrc}
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
