import React from 'react';
import useAppStore from '../../store/useAppStore';
import DuctworkConfigurator from '../ui/DuctworkConfigurator';

const StatefulDuctworkConfigurator = ({ 
  stateProperty, 
  initialValue = {},
  items = [],
  ductworkOptions = [],
  pricePerUnit = 129,
  ...props 
}) => {
  const store = useAppStore();
  const value = store.formData[stateProperty] || initialValue;
  
  const handleChange = (newValue) => {
    store.setFormValue(stateProperty, newValue);
  };

  return (
    <DuctworkConfigurator
      values={value}
      onChange={handleChange}
      items={items}
      ductworkOptions={ductworkOptions}
      pricePerUnit={pricePerUnit}
      {...props}
    />
  );
};

export default StatefulDuctworkConfigurator;
