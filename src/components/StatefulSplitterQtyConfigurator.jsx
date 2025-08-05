import { useState } from 'react';
import SplitterQtyConfigurator from './ui/SplitterQtyConfigurator';
import useAppStore from '../store/useAppStore';

// Stateful wrapper for SplitterQtyConfigurator that integrates with the store
const StatefulSplitterQtyConfigurator = ({ 
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
    <SplitterQtyConfigurator
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

export default StatefulSplitterQtyConfigurator;
