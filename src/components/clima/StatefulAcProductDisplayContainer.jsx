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
  filters = [],
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

  let items = products.getProducts();

  (filters || []).forEach((filter) => {
    switch (filter) {
      case 'type':
        items = items.filter(p => products.filters.type(p, splitType));
        break;
      case 'brand':
        const brand = products.getFilterValue('brand')
        if (brand !== null && brand !== undefined && brand !== '') {
          items = items.filter(p => products.filters.brand(p, brand));
        }
        break;
      case 'category':
        const category = products.getFilterValue('category')
        if (category !== null && category !== undefined && category !== '') {
          items = items.filter(p => products.filters.category(p, category));
        }
        break;
      case 'monosplit':
        if (!currentConfig.roomSize) {
          break;
        }
        const roomSize = parseInt(currentConfig.roomSize);
        items = items.filter(p => products.filters.monosplit(p, roomSize));
        break;
      case 'isAlwaysOn':
        items = items.filter(p => products.filters.isAlwaysOn(p));
        break;
      case 'isNotAlwaysOn':
        items = items.filter(p => products.filters.isNotAlwaysOn(p));
        break;
      default:
        // No action for unknown filters
        break;
    }
  });

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
