import React, { useEffect, useState } from 'react';
import useAppStore from '../../store/useAppStore';
import ACFeaturesDisplay from './ACFeaturesDisplay';
import InfoBanner from './InfoBanner';

/**
 * AcProductDisplayContainer - Container component that displays AC products from the store
 * with filtering, loading states, and error handling
 */
const AcProductDisplayContainer = ({
  showLoadingStates = true,
  maxProducts = null,
  className = "",
  gridClassName = "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6",
  onProductSelectionChange = null,
  selectedProducts: externalSelectedProducts = [],
  ...props
}) => {
  const { 
    products: { 
      items, 
      loading, 
      error, 
      fetchProducts
    } 
  } = useAppStore();
  
  const [selectedProducts, setSelectedProducts] = useState(externalSelectedProducts);

  // Sync with external selected products
  useEffect(() => {
    setSelectedProducts(externalSelectedProducts);
  }, [externalSelectedProducts]);

  // Fetch products on mount
  useEffect(() => {
    if (items.length === 0 && !loading && !error) {
      fetchProducts();
    }
  }, [items.length, loading, error, fetchProducts]);

  // Get products to display
  const displayProducts = maxProducts 
    ? items.slice(0, maxProducts)
    : items;

  // Handle product selection
  const handleProductSelection = (productId, selected) => {
    const newSelection = selected 
      ? [...selectedProducts, productId]
      : selectedProducts.filter(id => id !== productId);
    
    setSelectedProducts(newSelection);
    
    // Call external handler if provided
    if (onProductSelectionChange) {
      onProductSelectionChange(productId, selected);
    }
  };

  // Convert product data to ACFeaturesDisplay props
  const getProductDisplayProps = (product) => ({
    productName: product.name,
    productDescription: `${product.brand} - Climatizzatore professionale`,
    price: product.price,
    currency: "€",
    priceNote: "IVA inclusa",
    features: product.features,
    showRecommendationBadge: product.brand === 'Daikin', // Show badge for Daikin products
    showCheckbox: true,
    detailsLink: "Visualizza scheda prodotto",
    className: "h-full",
    // Add selection handling
    onCheckboxChange: (selected) => handleProductSelection(product.id, selected),
    isSelected: selectedProducts.includes(product.id)
  });

  if (showLoadingStates && loading) {
    return (
      <div className={`flex flex-col gap-4 ${className}`}>
        <InfoBanner
          title="Caricamento prodotti..."
          description="Stiamo caricando i prodotti disponibili."
          variant="info"
        />
        {/* Loading skeleton */}
        <div className={gridClassName}>
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-100 rounded-lg h-96 animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  if (showLoadingStates && error) {
    return (
      <div className={`flex flex-col gap-4 ${className}`}>
        <InfoBanner
          title="Errore nel caricamento"
          description={`Si è verificato un errore: ${error}`}
          variant="error"
        />
        <button
          onClick={fetchProducts}
          className="bg-[#002466] text-white px-4 py-2 rounded hover:bg-[#001a4d] transition-colors"
        >
          Riprova
        </button>
      </div>
    );
  }

  if (displayProducts.length === 0) {
    return (
      <div className={`flex flex-col gap-4 ${className}`}>
        <InfoBanner
          title="Nessun prodotto trovato"
          description="Nessun prodotto disponibile al momento."
          variant="warning"
        />
      </div>
    );
  }

  return (
    <div className={`flex flex-col gap-6 ${className}`} {...props}>
      {/* Products Count */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-900 font-roobert">
          Prodotti disponibili ({displayProducts.length})
        </h3>
        
        {/* Selected products indicator */}
        {selectedProducts.length > 0 && (
          <div className="text-sm text-[#002466] font-roobert">
            <strong>{selectedProducts.length}</strong> prodotto{selectedProducts.length !== 1 ? 'i' : ''} selezionato{selectedProducts.length !== 1 ? 'i' : ''}
          </div>
        )}
      </div>

      {/* Products Grid */}
      <div className={gridClassName}>
        {displayProducts.map((product) => (
          <ACFeaturesDisplay
            key={product.id}
            {...getProductDisplayProps(product)}
          />
        ))}
      </div>

      {/* Show more indicator */}
      {maxProducts && items.length > maxProducts && (
        <div className="text-center">
          <InfoBanner
            description={`Visualizzati ${displayProducts.length} di ${items.length} prodotti disponibili.`}
            variant="info"
          />
        </div>
      )}
    </div>
  );
};

export default AcProductDisplayContainer;
