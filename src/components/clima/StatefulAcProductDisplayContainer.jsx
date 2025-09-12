import useAppStore from '../../store/useAppStore';
import AcProductDisplayContainer from '../ui/AcProductDisplayContainer';

/**
 * StatefulAcProductDisplayContainer - Stateful wrapper for AcProductDisplayContainer
 * Integrates with the global store and handles state management
 */
const StatefulAcProductDisplayContainer = ({
  stateProperty = 'airConditioningConfigs',
  configKey = null,
  autoFetch = true,
  maxSelections = 1,
  alwaysOn = null,
  ...props
}) => {

  const { formData, setFormValue, calculatePricing } = useAppStore();

  const products = useAppStore(state => state.products);
  const loading = useAppStore(state => state.products.loading);
  const error = useAppStore(state => state.products.error);

  const splitType = configKey ? configKey.split('_')[0] : null;

  // Get all ac configurations
  const configurations = formData[stateProperty] || {};

  // Get current configuration
  const currentConfig = configurations[configKey] || {};

  // Get current selected product and store data using proper Zustand selectors
  const selectedProduct = currentConfig?.selected || null;

  // Handle product selection changes - now works with single product ID
  const handleProductSelectionChange = (productId, selected) => {

    // Update the form data in the store
    setFormValue(stateProperty, {
      ...configurations,
      [configKey]: {
        ...configurations[configKey],
        selected: selected ? productId : null
      }
    });

    if (calculatePricing) {
      calculatePricing();
    }
  };

  const monoSplitFilter = (p) => {
    if (splitType?.toLowerCase() === 'monosplit') {
      const roomSize = parseInt(currentConfig.roomSize) || 0;
      if (roomSize <= 0) {
        return true; // No filtering if room size is not set
      }

      const limit = (capacity) => {
        if (roomSize <= 32) {
          return capacity <= 32;
        } else if (roomSize >= 33 && roomSize <= 38) {
          return capacity >= 33 && capacity <= 38;
        } else {
          return capacity > 38;
        }
      };
      return limit(p.capacity);
    }
    return true;
  }

  let items = products.getFilteredProducts()
    // filtro per la tipologia di split
    .filter(p => p.type.toLowerCase() === splitType?.toLowerCase())
    // filtro se monosplit per la capacità in base alla metratura
    .filter(monoSplitFilter);

  if (alwaysOn !== null) {
    // Filter only alwaysOn products if specified
    if (alwaysOn) {
      items = items.filter(p => !!p.alwaysOn);
    } else {
      items = items.filter(p => !p.alwaysOn);
    }
  }

  // Enhanced product display props with state integration
  const enhancedProps = {
    ...props,
    items,
    loading,
    error,
    onProductSelectionChange: handleProductSelectionChange,
    selectedProducts: selectedProduct ? [selectedProduct] : [] // Convert single ID to array for UI
  };

  return <AcProductDisplayContainer {...enhancedProps} />;
};

export default StatefulAcProductDisplayContainer;
