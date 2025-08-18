import { useEffect, useRef } from 'react';
import useAppStore from '../store/useAppStore';
import BrandSelector from './ui/BrandSelector';

export default function StatefulBrandSelector({
  stateProperty = 'selectedBrand',
  investmentOptionProperty = 'investmentOption',
  className = "",
  ...props
}) {
  const { getFormValue, setFormValue } = useAppStore();
  const lastBrandChange = useRef(null);

  const selectedBrand = getFormValue(stateProperty);
  const investmentOption = getFormValue(investmentOptionProperty);

  const handleBrandChange = (brandId) => {
    lastBrandChange.current = Date.now();
    setFormValue(stateProperty, brandId);
  };

  // Handle mutual exclusion: clear investment option when brand is selected
  useEffect(() => {
    if (selectedBrand && investmentOption && investmentOptionProperty) {
      // Only clear if this component made the change recently
      if (lastBrandChange.current && Date.now() - lastBrandChange.current < 100) {
        setFormValue(investmentOptionProperty, null);
      }
    }
  }, [selectedBrand, investmentOption, investmentOptionProperty, setFormValue]);

  return (
    <BrandSelector
      selectedBrand={selectedBrand}
      onBrandChange={handleBrandChange}
      className={className}
      {...props}
    />
  );
}
