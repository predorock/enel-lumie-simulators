import { useState } from 'react';
import useAppStore from '../../store/useAppStore';
import DuctworkConfigurator from '../ui/DuctworkConfigurator';

const itemTemplate = {
  monosplit: {
    "key": "monosplit",
    "label": "Monosplit",
    "type": "monosplit"
  },
  dualsplit: {
    "key": "dualsplit",
    "label": "Dualsplit",
    "type": "dualsplit"
  },
  trialsplit: {
    "key": "trialsplit",
    "label": "Trialsplit",
    "type": "trialsplit"
  }
}

/**
  * I kept the local store as original so it doesn't track every single config of the ductwork in the global store
  * but only the final quantities of each type (mono, dual, trial).
  * The actual configurations are built dynamically based on the air conditioning configurations in the global store.
  * The local state is an object where keys are like "monosplit_0", "dualsplit_1", etc. and values are quantities.
  * The global store only keeps the total quantities for each type.
  */
const StatefulDuctworkConfigurator = ({
  stateProperty,
  initialValue = {},
  // ITEMS IS IGNORE SINCE WE CREATE IT DYNAMICALLY BASED ON AC CONFIGS
  items = [],
  ductworkOptions = [],
  ...props
}) => {
  const [configurations, setConfigurations] = useState(initialValue || {});

  const store = useAppStore();

  const unitPrices = store.getUnitPrices();

  const getQuantities = (configs) => {
    return Object.keys(configs)
      .filter(k => !!configs[k] && configs[k] !== '')
      .reduce((acc, curr) => {
        const quantity = configs[curr];
        const type = curr.split('_')[0]; // monosplit, dualsplit, trialsplit
        acc[type] = (acc[type] || 0) + quantity;
        return acc;
      }, {});
  }

  const handleChange = (newValue) => {
    // Local state update
    const updatedValue = { ...configurations, ...newValue };
    setConfigurations(updatedValue);
    // Update global store with quantities
    const quantities = getQuantities(updatedValue);
    store.setFormValue(stateProperty, quantities);
  };

  const getUnitTotal = (type, key) => {
    return unitPrices.ductwork[type] * (configurations[key] || 0);
  };

  const newItems = Object.keys(store.formData.airConditioningConfigs || {})
    .map(k => k.split('_')[0])
    .map(key => itemTemplate[key])
    // Ensure unique keys if multiple of same type
    .map((item, index) => ({ ...item, key: `${item.key}_${index}` }));


  return (
    <DuctworkConfigurator
      values={configurations}
      onChange={handleChange}
      items={newItems}
      ductworkOptions={ductworkOptions}
      getUnitTotal={getUnitTotal}
      {...props}
    />
  );
};

export default StatefulDuctworkConfigurator;
