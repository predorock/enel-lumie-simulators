import { priceFormatter } from '../../utils/priceFormatter';
import IconRenderer from '../icons/IconRenderer';
import QtyStepControl from './QtyStepControl';

const DuctworkConfigurator = ({
  items = [],
  onChange,
  showPrice = false,
  getUnitTotal = () => { console.log('getUnitTotal not provided'); return 0; },
  className = "",
  ...props
}) => {

  const handleQtyChange = (itemKey, newValue) => {
    if (onChange) {
      console.log("Qty change for", itemKey, "to", newValue);
      onChange(itemKey, newValue);
    }
  }

  return (
    <div className={`flex flex-col gap-6 w-full ${className}`} {...props}>
      {items.map((item) => {

        const { units, unitsTotal } = getUnitTotal(item.type, item.key);

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

              <QtyStepControl
                value={item.value || 0}
                onIncrement={(value) => handleQtyChange(item.key, value)}
                onDecrement={(value) => handleQtyChange(item.key, value)}
                min={0}
                max={50}
                unit="mt"
              />

            </div>

            {/* Price Display */}
            {showPrice && units > 0 && (
              <div className="flex flex-row justify-between items-center bg-gray-100 font-enel px-3 py-2 rounded-2xl ml-4">
                {
                  units == 1 && <span className="font-enel-light text-sm leading-5">1 modulo aggiuntivo</span>
                }
                {
                  units > 1 && <span className="font-enel-light text-sm leading-5">{units} moduli aggiuntivi</span>
                }
                &nbsp;&nbsp;
                <span className="font-enel-bold leading-5">
                  {priceFormatter(unitsTotal)}
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
