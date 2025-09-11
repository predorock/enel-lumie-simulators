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
  ...props
}) => {

  const { formData, setFormValue, calculatePricing } = useAppStore();

  const products = useAppStore(state => state.products);
  const loading = useAppStore(state => state.products.loading);
  const error = useAppStore(state => state.products.error);

  const splitType = configKey ? configKey.split('_')[0] : null;

  // Get current configurations
  const configurations = formData[stateProperty] || {};

  // Get current selected product and store data using proper Zustand selectors
  const selectedProduct = configurations[configKey]?.selected || null;

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

  // Enhanced product display props with state integration
  const enhancedProps = {
    ...props,
    items: products.getFilteredProducts().filter(p => p.type.toLowerCase() === splitType?.toLowerCase()),
    loading,
    error,
    onProductSelectionChange: handleProductSelectionChange,
    selectedProducts: selectedProduct ? [selectedProduct] : [] // Convert single ID to array for UI
  };

  return <AcProductDisplayContainer {...enhancedProps} />;
};

export default StatefulAcProductDisplayContainer;
