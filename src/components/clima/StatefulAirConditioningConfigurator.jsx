import useAppStore from '../../store/useAppStore';
import { getInfoIconConfig } from '../icons/infoIconRegistry';
import AirConditioningConfigurator from '../ui/AirConditioningConfigurator';

const StatefulAirConditioningConfigurator = ({
  stateProperty = 'airConditioningConfigs',
  installationTypes = [],
  infoIconKey = null,
  ...props
}) => {
  const { formData, setFormValue } = useAppStore();

  // Room size limits for each splitter type  
  const ROOM_SIZE_LIMITS = {
    monosplit: 38,
    dualsplit: 45,
    trialsplit: 57
  };

  // Get InfoIcon configuration from registry
  const infoIconConfig = infoIconKey ? getInfoIconConfig(infoIconKey) : null;

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
    const newConfigurations = {
      ...configurations,
      [entryKey]: {
        ...configurations[entryKey],
        roomSize: value
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
      infoIconConfig={infoIconConfig}
      onInstallationChange={handleInstallationChange}
      onRoomSizeChange={handleRoomSizeChange}
      hasWarning={hasWarning}
      {...props}
    />
  );
};

export default StatefulAirConditioningConfigurator;
