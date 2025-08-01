import { useState } from 'react';
import SplitterConfigurator from './ui/SplitterConfigurator';
import useAppStore from '../store/useAppStore';

// Stateful wrapper for SplitterConfigurator that integrates with the store
const StatefulSplitterConfigurator = ({ 
  items = [],
  initialValues = {},
  stateProperty = null,
  min = 0,
  max = 10,
  totalMax = null, // Pass through totalMax prop
  ...props 
}) => {
  const [localValues, setLocalValues] = useState(initialValues);
  
  // Get the store and its methods
  const store = useAppStore();
  const setStoreValue = store.setFormValue || (() => {});

  const handleChange = (newValues) => {
    setLocalValues(newValues);
    
    // Update store if stateProperty is specified
    if (stateProperty) {
      setStoreValue(stateProperty, newValues);
    }
    
    // If there's an onChange prop passed from parent, call it too
    if (props.onChange) {
      props.onChange(newValues);
    }
  };

  // Get current values from store if stateProperty is specified
  const currentValues = stateProperty && store.formData && store.formData[stateProperty] 
    ? store.formData[stateProperty] 
    : localValues;

  return (
    <SplitterConfigurator
      items={items}
      values={currentValues}
      onChange={handleChange}
      min={min}
      max={max}
      totalMax={totalMax}
      {...props}
    />
  );
};

export default StatefulSplitterConfigurator;
