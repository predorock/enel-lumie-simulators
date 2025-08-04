import useAppStore from '../store/useAppStore';
import CustomSelect from './ui/CustomSelect';

const StatefulCustomSelect = ({ 
  stateProperty, 
  initialValue = '',
  options = [],
  placeholder = 'Select an option',
  label = '',
  className = '',
  ...props 
}) => {
  const store = useAppStore();
  const value = store.formData[stateProperty] || initialValue;
  
  const handleChange = (newValue) => {
    store.setFormValue(stateProperty, newValue);
  };

  return (
    <CustomSelect
      value={value}
      onChange={handleChange}
      options={options}
      placeholder={placeholder}
      label={label}
      className={className}
      {...props}
    />
  );
};

export default StatefulCustomSelect;
