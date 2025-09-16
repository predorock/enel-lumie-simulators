import { useState } from 'react';
import { priceFormatter } from '../../utils/priceFormatter';
import IconRenderer from '../icons/IconRenderer';
import CustomSelect from './CustomSelect';
const DuctworkConfigurator = ({
  items = [],
  values = {},
  onChange,
  ductworkOptions = [],
  getUnitTotal = () => { console.log('getUnitTotal not provided'); return 0; },
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

  const getSelectedOption = (itemKey, itemType) => {
    const selectedValue = selections[itemKey];
    return ductworkOptions[itemType].find(option => option.value === selectedValue);
  };

  return (
    <div className={`flex flex-col gap-6 w-full ${className}`} {...props}>
      {items.map((item) => {
        const selectedOption = getSelectedOption(item.key, item.type);
        const hasSelection = !!selectedOption;

        const options = ductworkOptions[item.type] || [];

        return (
          <div
            key={item.key}
            className="flex flex-row h-10 items-center justify-between w-[80%]"
          >
            {/* Left side - Type and Dropdown */}
            <div className="flex flex-row gap-6 h-full items-center">
              {/* Air conditioning type */}
              <div className="flex flex-row gap-2 h-full items-center w-[130px]">
                <div className="relative shrink-0 size-6">
                  <IconRenderer icon={item.type} className="w-6 h-6" fillClass="fill-black" />
                </div>
                <div
                  className="text-[18px] leading-[27px] text-black text-nowrap font-enel"
                >
                  {item.label}
                </div>
              </div>

              {/* Dropdown using CustomSelect */}
              <div className="w-[280px]">
                <CustomSelect
                  value={selections[item.type] || ''}
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

            {/* Price Display */}
            {hasSelection && (
              <div className="flex flex-row justify-between bg-gray-100 font-enel px-3 py-2 rounded-2xl ml-4 w-[200px]">
                <span className="font-enel-bold">Prezzo finale {" "}</span>
                <span className="font-enel-bold">
                  {priceFormatter(getUnitTotal(item.type, item.key))}
                </span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default DuctworkConfigurator;
