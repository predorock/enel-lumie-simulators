import React, { useEffect } from 'react';
import AcProductDisplayContainer from './ui/AcProductDisplayContainer';
import useAppStore from '../store/useAppStore';

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
    setFormValue, 
    getFormValue,
    products: { fetchProducts, items }
  } = useAppStore();

  // Auto-fetch products on mount if enabled
  useEffect(() => {
    if (autoFetch && items.length === 0) {
      fetchProducts();
    }
  }, [autoFetch, items.length, fetchProducts]);

  // Get current selected products from store
  const selectedProducts = getFormValue(stateProperty) || [];

  // Handle product selection changes
  const handleProductSelectionChange = (productId, selected) => {
    const currentSelected = selectedProducts;
    const newSelected = selected
      ? [...currentSelected, productId]
      : currentSelected.filter(id => id !== productId);
    
    setFormValue(stateProperty, newSelected);
  };

  // Enhanced product display props with state integration
  const enhancedProps = {
    ...props,
    onProductSelectionChange: handleProductSelectionChange,
    selectedProducts
  };

  return <AcProductDisplayContainer {...enhancedProps} />;
};

export default StatefulAcProductDisplayContainer;
