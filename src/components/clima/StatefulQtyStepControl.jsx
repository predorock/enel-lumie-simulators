import { useEffect } from 'react';
import useAppStore from '../../store/useAppStore';
import QtyStepControl from '../ui/QtyStepControl';
/**
 * Stateful wrapper for QtyStepControl component that connects to the Zustand store
 *
 * @param {string} stateProperty - Property name in formData to bind to (required)
 * @param {number} min - Minimum value (default: 0)
 * @param {number} max - Maximum value (default: 10)
 * @param {string} unit - Unit to display after value (e.g., "pz", "unit")
 * @param {string} label - Optional label text
 * @param {ReactNode} icon - Optional icon component
 * @param {string} storeAction - Optional custom store action to call instead of setFormValue
 * @param {boolean} disabled - Disable the control
 * @param {string} className - Additional classes for container
 * @param {string} buttonClassName - Additional classes for buttons
 * @param {string} displayClassName - Additional classes for display
 */
const StatefulQtyStepControl = ({
  stateProperty,
  min = 0,
  max = 10,
  initialValue = null,
  unit = null,
  label = "",
  icon = null,
  storeAction = null,
  disabled = false,
  className = "",
  buttonClassName = "",
  displayClassName = "",
  ...props
}) => {
  // Get store and its methods
  const store = useAppStore();
  const { formData, setFormValue } = store;

  // Get current value from store, fallback to min if not set
  const currentValue = stateProperty && formData?.[stateProperty] !== undefined
    ? formData[stateProperty]
    : min;

  const handleIncrement = (newValue) => {
    if (!stateProperty) {
      console.warn('StatefulQtyStepControl: stateProperty is required');
      return;
    }

    // Update store
    if (storeAction && typeof store[storeAction] === 'function') {
      // Use custom store action if specified
      store[storeAction](stateProperty, newValue);
    } else {
      // Use generic setFormValue method
      setFormValue(stateProperty, newValue);
    }
  };

  const handleDecrement = (newValue) => {
    if (!stateProperty) {
      console.warn('StatefulQtyStepControl: stateProperty is required');
      return;
    }

    // Update store
    if (storeAction && typeof store[storeAction] === 'function') {
      // Use custom store action if specified
      store[storeAction](stateProperty, newValue);
    } else {
      // Use generic setFormValue method
      setFormValue(stateProperty, newValue);
    }
  };

  if (initialValue != null) {
    useEffect(() => {
      setFormValue(stateProperty, initialValue);
    }, [stateProperty, initialValue]);
  }

  return (
    <QtyStepControl
      value={currentValue}
      min={min}
      max={max}
      unit={unit}
      label={label}
      icon={icon}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      disabled={disabled}
      className={className}
      buttonClassName={buttonClassName}
      displayClassName={displayClassName}
      {...props}
    />
  );
};

export default StatefulQtyStepControl;
