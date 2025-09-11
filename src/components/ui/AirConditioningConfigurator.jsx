import cn from 'classnames';
import { AirConditioningIcon } from '../icons/AirConditioningIcons';
import IconPopover from '../icons/IconPopover';
import { getPopoverConfig } from '../icons/PopoverContentRegistry';
import CustomSelect from './CustomSelect';
import DescriptionBox from './DescriptionBox';
import Divider from './Divider';
import TextInput from './TextInput';

// Warning icon for room size alerts
const WarningIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" fill="#e67300" />
    <path d="M12 8v4m0 4h.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Warning message component based on Figma design
const RoomSizeWarning = () => (
  <div className="box-border content-stretch flex flex-col gap-2 items-start justify-center px-4 py-0 relative shrink-0 w-full">
    <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="basis-0 box-border content-stretch flex flex-row gap-4 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0">
          <div className="relative shrink-0 size-6">
            <WarningIcon />
          </div>
        </div>
        <div className="basis-0 box-border content-stretch flex flex-col gap-4 grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0">
          <div className="box-border content-stretch flex flex-col gap-0.5 items-start justify-center p-0 relative shrink-0 w-full">
            <div className="flex flex-col font-enel justify-center leading-[0] min-w-full not-italic relative shrink-0 text-black text-[14px] text-left">
              <p className="leading-[21px]">
                <span className="font-enel-bold not-italic text-warning">
                  La dimensione della stanza da climatizzare è troppo grande per la taglia di split selezionato
                </span>
                <br />
                <span>
                  Spiegagli che occorre acquistare uno split più grande per climatizzare una stanza così grande
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);



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
  installationTypes = [],
  warning = false
}) => {
  const iconType = getIconType(type);

  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      {/* Configuration Row */}
      <div className={cn('box-border content-stretch flex flex-row gap-6 items-center justify-start p-4 relative rounded-2xl shrink-0 w-full', {
        'bg-white-light': !warning,
        'bg-warning-light': warning
      })}>
        {/* AC Type Label */}
        <div className="flex flex-row items-center self-stretch">
          <div className="box-border content-stretch flex flex-row gap-2 h-full items-center justify-start p-0 relative shrink-0 w-36">
            <div className="relative shrink-0 w-6 h-6 text-grey-light">
              <AirConditioningIcon type={iconType} fillClass={warning ? 'fill-warning' : 'fill-black'} />
            </div>
            <div className={cn('font-enel font-normal leading-none not-italic relative shrink-0 text-lg text-left text-nowrap', {
              'text-black': !warning,
              'text-warning': warning
            })}>
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
              numericOnly={true}
              value={roomSize || ''}
              onChange={(e) => onRoomSizeChange(e.target.value)}
              placeholder="M² stanza da climatizzare"
              className={cn('w-full', {
                'border-warning': warning
              })}
            />
          </div>
        </div>
      </div>

      {/* Warning Message - Show when warning is true */}
      {warning && <RoomSizeWarning />}
    </div>
  );
};

const AirConditioningConfigurator = ({
  configurationEntries = [],
  configurations = {},
  installationTypes = [],
  infoIconConfig = null,
  onInstallationChange,
  onRoomSizeChange,
  hasWarning
}) => {

  return (
    <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative shrink-0 w-full">

      <div className='flex flex-row justfy-center'>
        <DescriptionBox
          title="Chiedi al cliente quale tipologia di installazione dovrà essere fatta"
          description="Per ogni impianto, indicare la tipologia di installazione associata e la metratura della stanza da climatizzare"
        />
        <Divider orientation="vertical" className='px-4' />

        <IconPopover
          {...getPopoverConfig('airConditioningInfo')}
        />
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
            onInstallationChange={(value) => onInstallationChange(entry.key, value)}
            onRoomSizeChange={(value) => onRoomSizeChange(entry.key, value)}
            warning={hasWarning(entry.key, entry.unitType)}
          />
        ))}
      </div>
    </div>
  );
};

export default AirConditioningConfigurator;
