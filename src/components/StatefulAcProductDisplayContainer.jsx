import { useEffect } from 'react';
import useAppStore from '../store/useAppStore';
import AcProductDisplayContainer from './ui/AcProductDisplayContainer';

/**
 * StatefulAcProductDisplayContainer - Stateful wrapper for AcProductDisplayContainer
 * Integrates with the global store and handles state management
 */
const StatefulAcProductDisplayContainer = ({
  stateProperty = 'selectedProducts',
  autoFetch = true,
  ...props
}) => {
  const {
    setFormValue
  } = useAppStore();

  // Get current selected products and store data using proper Zustand selectors
  const selectedProducts = useAppStore(state => state.formData[stateProperty]) || [];
  const items = useAppStore(state => state.products.items);
  const loading = useAppStore(state => state.products.loading);
  const error = useAppStore(state => state.products.error);

  // Auto-fetch products on mount if enabled
  useEffect(() => {
    if (autoFetch && items.length === 0) {
      // Access fetchProducts directly from store when needed
      const { products: { fetchProducts } } = useAppStore.getState();
      fetchProducts();
    }
  }, [autoFetch, items.length]);

  // Handle product selection changes
  const handleProductSelectionChange = (productId, selected) => {
    const currentSelected = selectedProducts;
    const newSelected = selected
      ? [...currentSelected, productId]
      : currentSelected.filter(id => id !== productId);

    setFormValue(stateProperty, newSelected);
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
    selectedProducts
  };

  return <AcProductDisplayContainer {...enhancedProps} />;
};

export default StatefulAcProductDisplayContainer;
