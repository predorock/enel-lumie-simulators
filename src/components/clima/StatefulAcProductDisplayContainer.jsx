import { useProductFilterHook } from '../../store/hooks/useProductFilterHook';
import useAppStore from '../../store/useAppStore';
import AcProductDisplayContainer from '../ui/AcProductDisplayContainer';

/**
 * StatefulAcProductDisplayContainer - Stateful wrapper for AcProductDisplayContainer
 * Integrates with the global store and handles state management
 */
const StatefulAcProductDisplayContainer = ({
  stateProperty = 'airConditioningConfigs',
  configKey = null,
  filters = [],
  excluded = false,
  ...props
}) => {

  const { formData, setFormValue, calculatePricing } = useAppStore();
  const loading = useAppStore(state => state.products.loading);
  const error = useAppStore(state => state.products.error);

  // Get all ac configurations
  const configurations = formData[stateProperty] || {};

  // Get current configuration
  const currentConfig = configurations[configKey] || {};

  // Get current selected product and store data using proper selectors
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

  const { items, excludedItems } = useProductFilterHook(configKey, filters);

  // Enhanced product display props with state integration
  const enhancedProps = {
    ...props,
    items: excluded ? excludedItems : items,
    loading,
    error,
    onProductSelectionChange: handleProductSelectionChange,
    selectedProducts: selectedProduct ? [selectedProduct] : [] // Convert single ID to array for UI
  };

  return <AcProductDisplayContainer {...enhancedProps} />;
};

export default StatefulAcProductDisplayContainer;
