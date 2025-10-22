import useAppStore from '../useAppStore';

export const useProductFilterHook = (configKey, enabledFilters) => {
    const {
        products: {
            getProducts,
            getFilterValue,
            filters,
        },
        formData: {
            airConditioningConfigs
        }
    } = useAppStore();

    if (!configKey || airConditioningConfigs[configKey] === undefined) {
        console.warn('useProductFilters: configKey is required and must exist in formData');
        return {
            items: []
        };
    }

    const currentConfig = airConditioningConfigs[configKey];
    const splitType = configKey ? configKey.split('_')[0] : null;

    let allProducts = getProducts();
    let filteredProducts = [...allProducts];
    let excludedProducts = [];

    // First apply type filter to both sets (this filter applies to all products)
    const typeFilterEnabled = (enabledFilters || []).includes('type');
    if (typeFilterEnabled) {
        allProducts = allProducts.filter(p => filters.type(p, splitType));
        filteredProducts = [...allProducts];
    }

    // Apply other filters and track excluded products
    (enabledFilters || []).forEach((filter) => {
        switch (filter) {
            case 'type':
                // Already handled above
                break;
            case 'brand':
                const brand = getFilterValue('brand')
                if (brand !== null && brand !== undefined && brand !== '') {
                    const newFiltered = filteredProducts.filter(p => filters.brand(p, brand));
                    const newExcluded = filteredProducts.filter(p => !filters.brand(p, brand));
                    excludedProducts.push(...newExcluded);
                    filteredProducts = newFiltered;
                }
                break;
            case 'category':
                const category = getFilterValue('category')
                if (category !== null && category !== undefined && category !== '') {
                    const newFiltered = filteredProducts.filter(p => filters.category(p, category));
                    const newExcluded = filteredProducts.filter(p => !filters.category(p, category));
                    excludedProducts.push(...newExcluded);
                    filteredProducts = newFiltered;
                }
                break;
            case 'monosplit':
                if (!currentConfig.roomSize) {
                    break;
                }
                const roomSize = parseInt(currentConfig.roomSize);
                const newFiltered = filteredProducts.filter(p => filters.monosplit(p, roomSize));
                const newExcluded = filteredProducts.filter(p => !filters.monosplit(p, roomSize));
                excludedProducts.push(...newExcluded);
                filteredProducts = newFiltered;
                break;
            case 'isAlwaysOn':
                const newFilteredAlwaysOn = filteredProducts.filter(p => filters.isAlwaysOn(p));
                const newExcludedAlwaysOn = filteredProducts.filter(p => !filters.isAlwaysOn(p));
                excludedProducts.push(...newExcludedAlwaysOn);
                filteredProducts = newFilteredAlwaysOn;
                break;
            case 'isNotAlwaysOn':
                const newFilteredNotAlwaysOn = filteredProducts.filter(p => filters.isNotAlwaysOn(p));
                const newExcludedNotAlwaysOn = filteredProducts.filter(p => !filters.isNotAlwaysOn(p));
                excludedProducts.push(...newExcludedNotAlwaysOn);
                filteredProducts = newFilteredNotAlwaysOn;
                break;
            default:
                // No action for unknown filters
                break;
        }
    });

    // Remove duplicates from excluded products
    const uniqueExcludedProducts = excludedProducts.filter((product, index, self) =>
        index === self.findIndex(p => p.id === product.id)
    );

    return {
        items: filteredProducts,
        excludedItems: uniqueExcludedProducts
    };
};