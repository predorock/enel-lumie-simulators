import { useEffect, useRef } from 'react';
import useAppStore from '../store/useAppStore';
import OptionSelector from './ui/OptionSelector';

export default function StatefulOptionSelector({
  stateProperty = 'selectedOption',
  brandProperty = 'selectedBrand',
  options = [],
  title = "",
  className = "",
  ...props
}) {
  const { getFormValue, setFormValue } = useAppStore();
  const lastOptionChange = useRef(null);

  const selectedOption = getFormValue(stateProperty);
  const selectedBrand = getFormValue(brandProperty);

  const handleOptionChange = (optionId) => {
    lastOptionChange.current = Date.now();
    setFormValue(stateProperty, optionId);
  };

  // Handle mutual exclusion: clear brand when investment option is selected
  useEffect(() => {
    if (selectedOption && selectedBrand && brandProperty) {
      // Only clear if this component made the change recently
      if (lastOptionChange.current && Date.now() - lastOptionChange.current < 100) {
        setFormValue(brandProperty, null);
      }
    }
  }, [selectedOption, selectedBrand, brandProperty, setFormValue]);

  return (
    <OptionSelector
      options={options}
      selectedOption={selectedOption}
      onOptionChange={handleOptionChange}
      title={title}
      className={className}
      {...props}
    />
  );
}
