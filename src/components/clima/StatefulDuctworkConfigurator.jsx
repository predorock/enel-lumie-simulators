import useAppStore from '../../store/useAppStore';
import DuctworkConfigurator from '../ui/DuctworkConfigurator';

const StatefulDuctworkConfigurator = ({
  stateProperty,
  initialValue = {},
  items = [],
  ductworkOptions = [],
  ...props
}) => {
  const store = useAppStore();
  const value = store.formData[stateProperty] || initialValue;

  const handleChange = (newValue) => {
    store.setFormValue(stateProperty, newValue);
  };

  const getUnitTotal = (splitType) => {
    return store.getUnitTotal('ductwork', splitType);
  };

  const configTypes = [...new Set(Object.keys(store.formData.airConditioningConfigs || {}).map(k => k.split('_')[0]))];

  const filteredItems = items.filter(item => configTypes.includes(item.key));

  return (
    <DuctworkConfigurator
      values={value}
      onChange={handleChange}
      items={filteredItems}
      ductworkOptions={ductworkOptions}
      getUnitTotal={getUnitTotal}
      {...props}
    />
  );
};

export default StatefulDuctworkConfigurator;
