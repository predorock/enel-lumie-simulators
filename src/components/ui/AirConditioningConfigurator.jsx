import useAppStore from '../../store/useAppStore';
import { AirConditioningIcon } from '../icons/AirConditioningIcons';
import InfoIcon from '../icons/InfoIcon';
import CustomSelect from './CustomSelect';
import TextInput from './TextInput';
import { getInfoIconConfig } from '../../config/infoIconRegistry';



// Helper function to get the correct icon type based on the AC type
const getIconType = (type) => {
  const lowerType = type.toLowerCase();
  if (lowerType.includes('dual')) return 'dual';
  if (lowerType.includes('trial')) return 'trial';
  return 'mono'; // default for monosplit
};

const ConfigurationRow = ({ 
  type, 
  index, 
  installationType, 
  roomSize, 
  onInstallationChange, 
  onRoomSizeChange,
  installationTypes = []
}) => {
  const iconType = getIconType(type);
  
  return (
    <div className="bg-[#f7f8fb] box-border content-stretch flex flex-row gap-6 items-center justify-start p-4 relative rounded-2xl shrink-0 w-full">
      {/* AC Type Label */}
      <div className="flex flex-row items-center self-stretch">
        <div className="box-border content-stretch flex flex-row gap-2 h-full items-center justify-start p-0 relative shrink-0 w-36">
          <div className="relative shrink-0 w-6 h-6 text-[#667790]">
            <AirConditioningIcon type={iconType} />
          </div>
          <div className="font-['Roobert'] font-normal leading-none not-italic relative shrink-0 text-[#131416] text-lg text-left text-nowrap">
            <p className="block leading-[27px] whitespace-pre">
              {type}
            </p>
          </div>
        </div>
      </div>

      {/* Installation Type Dropdown */}
      <div className="bg-transparent box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative rounded shrink-0 w-80">
        <div className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-center min-h-px min-w-px p-0 relative rounded shrink-0">
          <CustomSelect
            options={installationTypes}
            value={installationType || ''}
            onChange={onInstallationChange}
            label="Tipologia di installazione"
            maxHeight="140px"
            className='w-full'
          />
        </div>
      </div>

      {/* Room Size Input */}
      <div className="bg-transparent box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative rounded shrink-0 w-72">
        <div className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-center min-h-px min-w-px p-0 relative rounded shrink-0">
          <TextInput
            value={roomSize || ''}
            onChange={(e) => onRoomSizeChange(e.target.value)}
            placeholder="M² stanza da climatizzare"
            type="text"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

const AirConditioningConfigurator = ({ 
  stateProperty = 'airConditioningConfigs', 
  showOnlyWhenQuantitiesExist = true,
  installationTypes = [],
  infoIconKey = null
}) => {
  const { formData, setFormValue } = useAppStore();
  
  // Get InfoIcon configuration from registry
  const infoIconConfig = infoIconKey ? getInfoIconConfig(infoIconKey) : null;
  
  // Get quantities from the SplitterQtyConfigurator
  const quantities = formData.airconditioningQuantities || {};
  
  // Get current configurations
  const configurations = formData[stateProperty] || {};
  
  // Calculate total selected units across all types
  const totalUnits = Object.values(quantities).reduce((sum, qty) => sum + (qty || 0), 0);
  
  // Don't render if no quantities are selected and showOnlyWhenQuantitiesExist is true
  if (showOnlyWhenQuantitiesExist && totalUnits === 0) {
    return null;
  }
  
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
  
  return (
    <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative shrink-0 w-full">
      {/* Title Section */}
      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0 w-full">
        <div className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start leading-none not-italic p-0 relative shrink-0 text-left">
          <div className="flex flex-col font-['Roobert_Bold'] font-bold justify-center relative shrink-0 text-[#131416] text-xl tracking-[0.4px] w-full">
            <p className="block leading-[30px]">
              Chiedi al cliente quale tipologia di installazione dovrà essere fatta
            </p>
          </div>
          <div className="flex flex-col font-['Roobert'] font-normal justify-center relative shrink-0 text-[#667790] text-sm w-full">
            <p className="block leading-[21px]">
              Per ogni impianto, indicare la tipologia di installazione associata e la metratura della stanza da climatizzare
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center self-stretch">
          <div className="box-border content-stretch flex flex-row gap-6 h-full items-center justify-center p-0 relative shrink-0">
            {/* Divider */}
            <div className="h-full relative shrink-0 w-0">
              <div className="absolute bottom-0 left-0 right-full top-0">
                <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0 border-l border-[#c2cddd]" />
              </div>
            </div>
            {/* Info Icon */}
            {infoIconConfig && (
              <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0">
                <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-0 relative shrink-0">
                  <div className="relative shrink-0 w-6 h-6 text-[#D3135A]">
                    <InfoIcon 
                      variant={infoIconConfig.variant || 'info'}
                      popoverContent={infoIconConfig.content}
                      popoverPosition={infoIconConfig.popoverPosition || 'left'}
                      popoverClassName={infoIconConfig.popoverClassName || ''}
                      disabled={infoIconConfig.disabled || false}
                      onClick={infoIconConfig.onClick || null}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Configuration Rows */}
      <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full">
        {configurationEntries.map((entry) => (
          <ConfigurationRow
            key={entry.key}
            type={entry.type}
            index={entry.index}
            installationType={configurations[entry.key]?.installationType}
            roomSize={configurations[entry.key]?.roomSize}
            installationTypes={installationTypes}
            onInstallationChange={(value) => handleInstallationChange(entry.key, value)}
            onRoomSizeChange={(value) => handleRoomSizeChange(entry.key, value)}
          />
        ))}
      </div>
    </div>
  );
};

export default AirConditioningConfigurator;
