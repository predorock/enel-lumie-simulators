import ACFeaturesDisplay from './ACFeaturesDisplay';
import InfoBanner from './InfoBanner';
/**
 * AcProductDisplayContainer - Pure UI component that displays AC products
 * with filtering, loading states, and error handling
 */
const AcProductDisplayContainer = ({
  items = [],
  loading = false,
  error = null,
  onRetry = null,
  showLoadingStates = true,
  maxProducts = null,
  className = "",
  gridClassName = "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6",
  onProductSelectionChange = null,
  selectedProducts = [],
  ...props
}) => {

  // Get products to display
  const displayProducts = maxProducts
    ? items.slice(0, maxProducts)
    : items;

  // Handle product selection
  const handleProductSelection = (productId, selected) => {
    // Call external handler if provided
    if (onProductSelectionChange) {
      onProductSelectionChange(productId, selected);
    }
  };

  // Convert product data to ACFeaturesDisplay props
  const getProductDisplayProps = (product) => ({
    ...product,
    className: "h-full",
    // Add selection handling
    showCheckbox: true,
    onCheckboxChange: (selected) => handleProductSelection(product.id, selected),
    isSelected: selectedProducts.includes(product.id),
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
          onClick={onRetry}
          className="bg-primary text-white px-4 py-2 rounded hover:bg-[#001a4d] transition-colors font-enel"
          disabled={!onRetry}
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
        <h3 className="text-lg font-enel-bold text-gray-900">
          Prodotti disponibili ({displayProducts.length})
        </h3>

        {/* Selected products indicator */}
        {selectedProducts.length > 0 && (
          <div className="text-sm text-primary font-enel">
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
