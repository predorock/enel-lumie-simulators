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
  maxSelections = 1,
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

  // Handle product selection changes with limit enforcement
  const handleProductSelectionChange = (productId, selected) => {
    const currentSelected = selectedProducts;
    let selectionChanged = false;

    if (selected) {
      // When selecting a product, check if we've reached the limit
      if (currentSelected.length >= maxSelections) {
        // If maxSelections is 1, replace the current selection
        // If maxSelections > 1, don't allow more selections
        if (maxSelections === 1) {
          setFormValue(stateProperty, [productId]);
          selectionChanged = true;
        }
        // For maxSelections > 1, do nothing (selection blocked)
      } else {
        // Add the new selection
        const newSelected = [...currentSelected, productId];
        setFormValue(stateProperty, newSelected);
        selectionChanged = true;
      }
    } else {
      // When deselecting, simply remove from the array
      const newSelected = currentSelected.filter(id => id !== productId);
      setFormValue(stateProperty, newSelected);
      selectionChanged = true;
    }

    // Trigger pricing recalculation after product selection changes
    if (selectionChanged) {
      const { calculatePricing } = useAppStore.getState();
      if (calculatePricing) {
        calculatePricing();
      }
    }
  };  // Handle retry functionality
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
