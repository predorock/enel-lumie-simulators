import BrandSelector from './ui/BrandSelector';
import useAppStore from '../store/useAppStore';

export default function StatefulBrandSelector({ 
  stateProperty = 'selectedBrand',
  className = "",
  ...props 
}) {
  const { getFormValue, setFormValue } = useAppStore();
  
  const selectedBrand = getFormValue(stateProperty);
  
  const handleBrandChange = (brandId) => {
    setFormValue(stateProperty, brandId);
  };

  return (
    <BrandSelector
      selectedBrand={selectedBrand}
      onBrandChange={handleBrandChange}
      className={className}
      {...props}
    />
  );
}
