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

  return (
    <DuctworkConfigurator
      values={value}
      onChange={handleChange}
      items={items}
      ductworkOptions={ductworkOptions}
      getUnitTotal={getUnitTotal}
      {...props}
    />
  );
};

export default StatefulDuctworkConfigurator;
