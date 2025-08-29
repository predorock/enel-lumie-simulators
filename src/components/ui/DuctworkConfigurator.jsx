import { useState } from 'react';
import { AirConditioningIcon } from '../icons/AirConditioningIcons';
import CustomSelect from './CustomSelect';

const DuctworkConfigurator = ({
  items = [],
  values = {},
  onChange,
  ductworkOptions = [],
  getUnitTotal = () => { },
  className = "",
  ...props
}) => {
  const [selections, setSelections] = useState(values || {});

  const handleSelectionChange = (itemKey, optionValue) => {
    const newSelections = {
      ...selections,
      [itemKey]: optionValue
    };
    setSelections(newSelections);
    if (onChange) {
      onChange(newSelections);
    }
  };

  const getSelectedOption = (itemKey) => {
    const selectedValue = selections[itemKey];
    return ductworkOptions[itemKey].find(option => option.value === selectedValue);
  };

  const formatCurrency = (amount) => {
    return `${amount.toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}€`;
  };

  return (
    <div className={`flex flex-col gap-6 w-full ${className}`} {...props}>
      {items.map((item) => {
        const selectedOption = getSelectedOption(item.key, item.type);
        const hasSelection = !!selectedOption;

        const options = ductworkOptions[item.key] || [];

        return (
          <div
            key={item.key}
            className="flex flex-row h-10 items-center justify-between w-full"
          >
            {/* Left side - Type and Dropdown */}
            <div className="flex flex-row gap-6 h-full items-center">
              {/* Air conditioning type */}
              <div className="flex flex-row gap-2 h-full items-center w-[130px]">
                <div className="relative shrink-0 size-6">
                  <AirConditioningIcon type={item.type} className="w-6 h-6" />
                </div>
                <div
                  className="text-[18px] leading-[27px] text-[#131416] text-nowrap font-enel"
                >
                  {item.label}
                </div>
              </div>

              {/* Dropdown using CustomSelect */}
              <div className="w-[280px]">
                <CustomSelect
                  value={selections[item.key] || ''}
                  onChange={(value) => handleSelectionChange(item.key, value)}
                  options={options.map(option => ({
                    value: option.value,
                    label: `${option.range} ${option.description}`
                  }))}
                  placeholder="Canalizzazioni"
                  label="Canalizzazioni"
                  className="h-10"
                />
              </div>
            </div>

            {/* Right side - Price display */}
            {hasSelection && (
              <div className="bg-[#eff2f7] flex flex-row gap-4 h-full items-center justify-end px-2 rounded-xl">
                <div className="flex flex-row gap-2 items-center justify-end">
                  <div
                    className="text-[14px] leading-[21px] text-[#272c34] text-right font-enel-bold"
                  >
                    Prezzo finale
                  </div>
                  <div
                    className="text-[18px] leading-[27px] text-[#272c34] text-right font-enel-bold"
                  >
                    {formatCurrency(getUnitTotal(item.key))}
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default DuctworkConfigurator;
