import cn from 'classnames';
import { useState } from 'react';
import useAppStore from '../../store/useAppStore';
import { AirConditioningIcon } from '../icons/AirConditioningIcons';
import QtyStepControl from './QtyStepControl';



const SplitterQtyConfigurator = ({
  items = [],
  values = {},
  onChange,
  min = 0,
  max = 10,
  totalMax = null,
  showPriceDisplay = true,
  title = "Configuratore Climatizzatori",
  className = "",
  stateProperty = null,
  calculationType = 'purchase',
  ...props
}) => {
  const [quantities, setQuantities] = useState(values);

  // Getters
  const { getUnitTotal } = useAppStore();

  const getDisplayPrice = (itemKey) => {
    return getUnitTotal(calculationType, itemKey);
  }

  // Calculate current total
  const getCurrentTotal = (quantities) => {
    return Object.values(quantities).reduce((sum, value) => sum + (value || 0), 0);
  };

  // Format currency in Italian style
  const formatCurrency = (amount) => {
    return `${amount.toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}€`;
  };

  const handleQuantityChange = (itemKey, newValue) => {
    const clampedValue = Math.max(min, newValue);
    const updatedQuantities = {
      ...quantities,
      [itemKey]: clampedValue
    };

    // If there's a total limit, check if we exceed it
    if (totalMax && getCurrentTotal(updatedQuantities) > totalMax) {
      // Don't allow the change if it would exceed the total limit
      return;
    }

    setQuantities(updatedQuantities);

    if (onChange) {
      onChange(updatedQuantities);
    }
  };

  const getIconType = (itemKey) => {
    if (itemKey.toLowerCase().includes('dual')) return 'dual';
    if (itemKey.toLowerCase().includes('trial')) return 'trial';
    return 'mono';
  };

  return (
    <div
      className={cn(
        "box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative w-full",
        className
      )}
      {...props}
    >
      {items.map((item, index) => {
        const itemKey = item.key || item.label.toLowerCase().replace(/\s+/g, '_');
        const currentValue = quantities[itemKey] || 0;
        const currentTotal = getCurrentTotal(quantities);

        return (
          <div key={itemKey} className="box-border content-stretch flex flex-row items-start justify-between p-0 relative shrink-0 w-[80%]">
            <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0">

              {/* Icon and Label */}
              <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-[130px]">
                <div className="relative shrink-0 size-6 text-black">
                  <AirConditioningIcon type={getIconType(itemKey)} fillClass='fill-black' />
                </div>
                <div className="font-enel leading-[0] not-italic relative shrink-0 text-black text-[18px] text-left text-nowrap">
                  <p className="block leading-[27px] whitespace-pre">{item.label}</p>
                </div>
              </div>

              {/* Stepper Controls */}
              <QtyStepControl
                value={currentValue}
                min={min}
                max={max}
                onIncrement={(newValue) => handleQuantityChange(itemKey, newValue)}
                onDecrement={(newValue) => handleQuantityChange(itemKey, newValue)}
                disabled={totalMax ? currentTotal >= totalMax && currentValue === 0 : false}
              />
            </div>

            {/* Price Display */}
            {showPriceDisplay && getDisplayPrice(itemKey) > 0 && currentValue > 0 && (
              <div className="flex flex-row justify-between bg-gray-100 font-enel px-3 py-2 rounded-2xl ml-4 w-[200px]">
                <span className="font-enel-bold">Prezzo finale {" "}</span>
                <span className="font-enel-bold">
                  {formatCurrency(getDisplayPrice(itemKey))}
                </span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SplitterQtyConfigurator;
