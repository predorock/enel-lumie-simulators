import useAppStore from '../../store/useAppStore';
import Slider from '../ui/Slider';

/**
 * Stateful wrapper for Slider component that connects to the Zustand store
 *
 * @param {string} stateProperty - Property name in formData to bind to (required)
 * @param {number} min - Minimum value (default: 0)
 * @param {number} max - Maximum value (default: 100)
 * @param {number} step - Step increment (default: 1)
 * @param {string} unit - Unit to display after value (e.g., "m²", "°C")
 * @param {function} formatValue - Optional function to format the display value
 * @param {string} storeAction - Optional custom store action to call instead of setFormValue
 * @param {boolean} showLabels - Show min/max labels (default: true)
 */
const StatefulSlider = ({
  stateProperty,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  formatValue = null,
  storeAction = null,
  showLabels = true,
  ...props
}) => {
  // Get store and its methods
  const store = useAppStore();
  const { formData, setFormValue } = store;

  // Get current value from store, fallback to min if not set
  const currentValue = stateProperty && formData?.[stateProperty] !== undefined
    ? formData[stateProperty]
    : min;

  const handleChange = (newValue) => {
    if (!stateProperty) {
      console.warn('StatefulSlider: stateProperty is required');
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

  return (
    <Slider
      value={currentValue}
      min={min}
      max={max}
      step={step}
      unit={unit}
      formatValue={formatValue}
      showLabels={showLabels}
      onChange={handleChange}
      {...props}
    />
  );
};

export default StatefulSlider;
