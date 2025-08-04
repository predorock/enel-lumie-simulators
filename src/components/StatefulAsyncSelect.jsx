import React from 'react';
import useAppStore from '../store/useAppStore';
import AsyncSelect from './ui/AsyncSelect';

const StatefulAsyncSelect = ({ 
  stateProperty, 
  initialValue = '',
  loadDataAction = 'loadCities',
  stateSlice = 'cityState',
  ...props 
}) => {
  const store = useAppStore();
  const value = store.formData[stateProperty] || initialValue;
  const setValue = (newValue) => store.setFormValue(stateProperty, newValue);
  
  return (
    <AsyncSelect
      value={value}
      onChange={setValue}
      loadDataAction={loadDataAction}
      stateSlice={stateSlice}
      {...props}
    />
  );
};

export default StatefulAsyncSelect;
