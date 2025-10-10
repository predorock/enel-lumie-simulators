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
  // ITEMS IS IGNORE SINCE WE CREATE IT DYNAMICALLY BASED ON AC CONFIGS
  items = [],
  ...props
}) => {

  /**
   * Local state to manage ductwork configurations
   * Keyed by type and index, e.g., "monosplit_0", "dualsplit_1", etc.
   * Value is the quantity in meters for that specific configuration
   */
  const [configurations, setConfigurations] = useState({});

  /**
   * Getters and setters from the global store
   * We use these to sync the total quantities back to the global store
   * whenever local configurations change.
   */
  const { getFormValue, setFormValue, getUnitPrices, getDuctworkMountsMeters } = useAppStore();

  const metersPerUnit = getDuctworkMountsMeters();

  const convertMetersToTotal = (value, type) => {
    const includedMeters = metersPerUnit[type] || 1;
    return Math.ceil(Math.max(0, value - includedMeters) / metersPerUnit.extra);
  };

  /**
   * Get total ductwork length by split type
   * @param {*} configs - the local configurations state
   * @returns the total quantities by split type
   */
  const getTotalBySplitType = (configs) => {
    return Object.keys(configs)
      .filter(k => !!configs[k] && configs[k] !== '')
      .reduce((acc, curr) => {
        const quantity = configs[curr] || 0;
        const type = curr.split('_')[0]; // monosplit, dualsplit, trialsplit
        acc[type] = (acc[type] || 0) + convertMetersToTotal(quantity, type);
        return acc;
      }, {});
  }

  /**
   * Handle quantity change for a specific configuration entry
   * and converts the local meters to total quantities by type
   * Updates both local state and global store totals
   */
  const handleChange = (itemKey, newValue) => {
    // Local state update in meters
    const updatedValue = {
      ...configurations,
      [itemKey]: newValue
    };
    setConfigurations(updatedValue);

    // Update global store with quantities from local meters
    const quantities = getTotalBySplitType(updatedValue);
    setFormValue(stateProperty, quantities);
  };

  const getUnitTotal = (type, key) => {
    const pricePerType = getUnitPrices().ductwork[type] || 0;
    const quantity = convertMetersToTotal(configurations[key] || 0, type);
    return {
      units: quantity,
      unitsTotal: pricePerType * quantity
    }
  };

  const newItems = Object.keys(getFormValue('airConditioningConfigs') || {})
    .map(k => k.split('_')[0])
    .map(key => itemTemplate[key])
    // Ensure unique keys if multiple of same type
    .map((item, index) => {
      const itemKey = `${item.key}_${index}`;
      return { ...item, key: itemKey, value: configurations[itemKey] || 0 };
    });


  return (
    <DuctworkConfigurator
      values={configurations}
      onChange={handleChange}
      items={newItems}
      showPrice={true}
      getUnitTotal={getUnitTotal}
      {...props}
    />
  );
};

export default StatefulDuctworkConfigurator;
