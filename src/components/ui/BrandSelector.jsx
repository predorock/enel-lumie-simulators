import { useState } from 'react';

// Import brand images
import comfeeLogo from '../../assets/images/brands/comfee.svg';
import daikinLogo from '../../assets/images/brands/daikin.svg';
import lgLogo from '../../assets/images/brands/lg.svg';

// Brand data mapping
const BRANDS = {
  comfee: {
    id: 'comfee',
    name: 'Comfee',
    logo: comfeeLogo,
    alt: 'Comfee Brand'
  },
  daikin: {
    id: 'daikin', 
    name: 'Daikin',
    logo: daikinLogo,
    alt: 'Daikin Brand'
  },
  lg: {
    id: 'lg',
    name: 'LG',
    logo: lgLogo,
    alt: 'LG Brand'
  }
};

export default function BrandSelector({ 
  selectedBrand = null,
  onBrandChange = () => {},
  title = "",
  className = "",
  disabled = false
}) {
  const [selected, setSelected] = useState(selectedBrand);

  const handleBrandSelect = (brandId) => {
    if (disabled) return;
    
    const newSelection = selected === brandId ? null : brandId;
    setSelected(newSelection);
    onBrandChange(newSelection);
  };

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {/* Title section */}
      {title && (
        <div className="font-enel-bold font-bold text-[#131416] text-[20px] tracking-[0.4px] leading-[30px]">
          {title}
        </div>
      )}

      {/* Brand options grid */}
      <div className="grid grid-cols-3 gap-4">
        {Object.values(BRANDS).map((brand) => (
          <button
            key={brand.id}
            type="button"
            disabled={disabled}
            onClick={() => handleBrandSelect(brand.id)}
            className={`
              relative flex flex-col items-center justify-center 
              p-1 rounded-3xl border-2 transition-all duration-200
              hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500
              disabled:cursor-not-allowed disabled:opacity-50
              ${selected === brand.id 
                ? 'border-[#b8114f] bg-[#fdf2f8] shadow-md' 
                : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
              }
            `}
          >
            {/* Brand logo */}
            <div className="flex items-center justify-center h-10">
              <img 
                src={brand.logo} 
                alt={brand.alt}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            
          </button>
        ))}
      </div>
    </div>
  );
}
