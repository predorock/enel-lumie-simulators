import { useEffect } from 'react';
import useAppStore from '../store/useAppStore';
import AcProductDisplayContainer from './ui/AcProductDisplayContainer';

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

  const items = useAppStore(state => state.products.items);
  const loading = useAppStore(state => state.products.loading);
  const error = useAppStore(state => state.products.error);

  // Get current configurations
  const configurations = formData[stateProperty] || {};

  // Get current selected product and store data using proper Zustand selectors
  const selectedProduct = configurations[configKey]?.selected || null;

  // Auto-fetch products on mount if enabled
  useEffect(() => {
    if (autoFetch && items.length === 0) {
      // Access fetchProducts directly from store when needed
      const { products: { fetchProducts } } = useAppStore.getState();
      fetchProducts();
    }
  }, [autoFetch, items.length]);

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

  // Handle retry functionality
  const handleRetry = () => {
    const { products: { fetchProducts } } = useAppStore.getState();
    fetchProducts();
  };

  // Enhanced product display props with state integration
  const enhancedProps = {
    ...props,
    items,
    loading,
    error,
    onRetry: handleRetry,
    onProductSelectionChange: handleProductSelectionChange,
    selectedProducts: selectedProduct ? [selectedProduct] : [] // Convert single ID to array for UI
  };

  return <AcProductDisplayContainer {...enhancedProps} />;
};

export default StatefulAcProductDisplayContainer;
