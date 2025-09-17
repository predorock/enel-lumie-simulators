import { useEffect } from 'react';
import useAppStore from '../../store/useAppStore';
import AirConditioningConfigurator from '../ui/AirConditioningConfigurator';

const StatefulAirConditioningConfigurator = ({
  stateProperty = 'airConditioningConfigs',
  installationTypes = [],
  ...props
}) => {
  const { formData, setFormValue } = useAppStore();

  // Room size limits for each splitter type  
  const ROOM_SIZE_LIMITS = {
    monosplit: 53,
    dualsplit: 45,
    trialsplit: 56
  };

  // Get quantities from the SplitterQtyConfigurator
  const quantities = formData.airconditioningQuantities || {};

  // Get current configurations
  const configurations = formData[stateProperty] || {};

  // Calculate total selected units across all types
  //const totalUnits = Object.values(quantities).reduce((sum, qty) => sum + (qty || 0), 0);

  // Don't render if no quantities are selected and showOnlyWhenQuantitiesExist is true
  //if (showOnlyWhenQuantitiesExist && totalUnits === 0) {
  //  return null;
  //}

  // Generate configuration entries based on selected quantities
  const configurationEntries = [];

  Object.entries(quantities).forEach(([type, quantity]) => {
    if (quantity > 0) {
      const typeLabels = {
        monosplit: 'Monosplit',
        dualsplit: 'Dualsplit',
        trialsplit: 'Trialsplit'
      };

      for (let i = 0; i < quantity; i++) {
        configurationEntries.push({
          key: `${type}_${i}`,
          type: typeLabels[type] || type,
          unitType: type,
          index: i
        });
      }
    }
  });

  // Clean up configurations when quantities change
  useEffect(() => {
    const validKeys = new Set(configurationEntries.map(entry => entry.key));
    const currentKeys = Object.keys(configurations);

    // Check if any cleanup is needed
    const keysToRemove = currentKeys.filter(key => !validKeys.has(key));

    if (keysToRemove.length > 0) {
      const cleanedConfigurations = { ...configurations };
      keysToRemove.forEach(key => {
        delete cleanedConfigurations[key];
      });
      setFormValue(stateProperty, cleanedConfigurations);
    }
  }, [configurationEntries.map(e => e.key).join(','), setFormValue, stateProperty]);

  const handleInstallationChange = (entryKey, value) => {
    const newConfigurations = {
      ...configurations,
      [entryKey]: {
        ...configurations[entryKey],
        installationType: value
      }
    };
    setFormValue(stateProperty, newConfigurations);
  };

  const handleRoomSizeChange = (entryKey, value) => {

    const unitType = entryKey.split('_')[0];
    const roomSize = parseInt(value);
    const limit = ROOM_SIZE_LIMITS[unitType];

    const hasWarning = limit && roomSize > limit;

    const newConfigurations = {
      ...configurations,
      [entryKey]: {
        ...configurations[entryKey],
        roomSize: value,
        hasWarning: hasWarning // Update warning status
      }
    };
    setFormValue(stateProperty, newConfigurations);
  };

  // Check if a configuration entry should show a warning
  const hasWarning = (entryKey, unitType) => {
    const config = configurations[entryKey];
    if (!config?.roomSize) return false;

    const roomSize = parseInt(config.roomSize);
    const limit = ROOM_SIZE_LIMITS[unitType];

    return limit && roomSize > limit;
  };

  return (
    <AirConditioningConfigurator
      configurationEntries={configurationEntries}
      configurations={configurations}
      installationTypes={installationTypes}
      onInstallationChange={handleInstallationChange}
      onRoomSizeChange={handleRoomSizeChange}
      hasWarning={hasWarning}
      {...props}
    />
  );
};

export default StatefulAirConditioningConfigurator;
