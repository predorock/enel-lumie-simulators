import { useState } from 'react';
import TextInput from './ui/TextInput';
import SearchInput from './ui/SearchInput';
import useAppStore from '../store/useAppStore';

// Wrapper component that adds state management to input components
const StatefulInput = ({ 
  type = 'text', 
  placeholder = '', 
  initialValue = '',
  inputType = 'TextInput',
  stateProperty = null, // Property name in the store to update
  storeAction = null,   // Custom store action to call
  ...props 
}) => {
  const [localValue, setLocalValue] = useState(initialValue);
  
  // Get the store and its methods
  const store = useAppStore();
  const setStoreValue = store.setFormValue || (() => {}); // Fallback if method doesn't exist

  const handleChange = (e) => {
    const newValue = e.target.value;
    setLocalValue(newValue);
    
    // Update store if stateProperty is specified
    if (stateProperty) {
      if (storeAction && typeof store[storeAction] === 'function') {
        // Use custom store action if specified
        store[storeAction](stateProperty, newValue);
      } else {
        // Use generic setFormValue method
        setStoreValue(stateProperty, newValue);
      }
    }
    
    // If there's an onChange prop passed from parent, call it too
    if (props.onChange) {
      props.onChange(e);
    }
  };

  // Get current value from store if stateProperty is specified
  const currentValue = stateProperty && store.formData && store.formData[stateProperty] 
    ? store.formData[stateProperty] 
    : localValue;

  // Choose the right input component
  const InputComponent = inputType === 'SearchInput' ? SearchInput : TextInput;

  return (
    <InputComponent
      type={type}
      placeholder={placeholder}
      value={currentValue}
      onChange={handleChange}
      {...props}
    />
  );
};

export default StatefulInput;
