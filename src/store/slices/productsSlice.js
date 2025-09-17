import { fetchProductsByCity, isValidProductData } from '../../utils/api';

// Feature mapping from API keys to display names
const FEATURE_MAPPING = {
  Led: "Schermo LED",
  Wifi: "Connettività Wi-Fi",
  Voice: "Voice control",
  RispEn: "Funzione risparmio energetico",
  ProgGiorn: "Programmazione timer giornaliera",
  ProgSett: "Programmazione timer settimanale",
  Sleep: "Funzionalità Sleep",
  Turbo: "Funzionalità Turbo",
  Muffa: "Anti muffa, anti batteri, anti polvere, anti allergeni",
  Ionizzazione: "Ionizzatore",
  Autodiagnosi: "Autodiagnosi (Funzione Smart Diagnosis)"
};

// Transform product features from API format to display format - showing ALL features
const transformProductFeatures = (apiFeatures) => {
  return Object.entries(FEATURE_MAPPING).map(([apiKey, displayName]) => ({
    key: apiKey,
    name: displayName,
    enabled: apiFeatures[apiKey] === true
  }));
};

const getSplitType = (product) => {
  if (!product || typeof product.NumSplit !== 'number') return null;

  switch (product.NumSplit) {
    case 1:
      return 'monosplit';
    case 2:
      return 'dualsplit';
    case 3:
      return 'trialsplit';
    default:
      return null;
  }
}

const recommendationProps = (product) => {
  if (!product || !product.Category) {
    return {
      showRecommendationBadge: false
    }
  }

  const category = product.Category.toLocaleLowerCase();

  switch (category) {
    case 'premium':
      return {
        recommendationLevel: "full",
        recommendationText: "Top di gamma",
        showRecommendationBadge: true
      }
    case 'medium':
      return {
        recommendationLevel: "half",
        recommendationText: "Miglio rapporto qualità/prezzo",
        showRecommendationBadge: true
      }
    case 'entry':
      return {
        recommendationLevel: "empty",
        recommendationText: "Più conveniente",
        showRecommendationBadge: true
      }
    default:
      return {
        showRecommendationBadge: false
      }
  }
}

// Transform product from API format to display format
const transformProduct = (apiProduct) => ({
  id: `${apiProduct.Name}`.toLowerCase().replace(/\s+/g, '-'),
  hash: btoa(`${apiProduct.Name}`.toLowerCase().replace(/\s+/g, '-')),
  numSplit: apiProduct.NumSplit,
  type: getSplitType(apiProduct),
  capacity: apiProduct.m2 || 0,
  productName: apiProduct.Name,
  productBrand: apiProduct.Brand,
  productImage: apiProduct.Image,
  productImageAlt: apiProduct.Name,
  productUrl: apiProduct.Url,
  productDescription: `Per climatizzare stanze fino a ${apiProduct.m2}m²`,
  features: transformProductFeatures(apiProduct.Features),
  price: apiProduct.Price.toFixed(2),
  currency: "€",
  priceNote: "IVA inclusa",
  checkboxLabel: "Scegli questa soluzione",
  detailsLink: "Visualizza la scheda dettagli del prodotto",
  category: apiProduct.Category,
  alwaysOn: apiProduct.Features['AlwaysOn'] === true,
  ...recommendationProps(apiProduct)
});

const CATEGORY_ORDER = {
  premium: 30,
  medium: 20,
  entry: 10,
  "": 0
};

const sortProductsByCategory = (a, b) => {
  const aCat = (a.category || "").toLowerCase();
  const bCat = (b.category || "").toLowerCase();
  return CATEGORY_ORDER[bCat] - CATEGORY_ORDER[aCat];
};

export const createProductsSlice = (set, get) => ({
  products: {
    // State
    items: [],
    loading: false,
    error: null,
    selectedCity: null,
    hasAlternativeProducts: true,

    setProducts: (rawProducts) => {
      // Transform API response to match our product structure
      const items = rawProducts
        .map(transformProduct)
        .sort(sortProductsByCategory);

      set((state) => ({
        products: {
          ...state.products,
          rawProducts,
          items,
          loading: false,
          error: null
        }
      }));
    },

    getProducts: () => {
      return get().products.items || [];
    },

    isLoading: () => {
      return get().products.loading;
    },

    getError: () => {
      return get().products.error;
    },

    getSelectedCity: () => {
      return get().products.selectedCity;
    },

    getRawProducts: () => {
      return get().products.rawProducts || [];
    },

    getRawProductsByName: (names) => {
      const { rawProducts } = get().products;
      const nameFilter = [].concat(names || []);
      if (!Array.isArray(rawProducts)) return [];
      return rawProducts.filter(product => nameFilter.includes(product.Name));
    },

    // Load products by city from external API
    loadProductsByCity: async (cityName) => {
      if (!cityName) {
        console.warn('City name is required to load products');
        return;
      }

      set((state) => ({
        products: {
          ...state.products,
          loading: true,
          error: null,
          selectedCity: cityName
        }
      }));

      try {
        console.log(`🛍️ Loading products for city: ${cityName}`);

        const apiProducts = await fetchProductsByCity(cityName);

        if (!isValidProductData(apiProducts)) {
          throw new Error('Invalid product data received from API');
        }

        // Transform API response to match our product structure
        get().products.setProducts(apiProducts);

        console.log(`✅ Successfully loaded ${apiProducts.length} products for city: ${cityName}`);

      } catch (error) {
        console.error('❌ Error loading products by city:', error);
        set((state) => ({
          products: {
            ...state.products,
            loading: false,
            error: error.message || 'Failed to load products for selected city',
            items: [] // Clear products on error
          }
        }));
      }
    },

    setHasAlternativeProducts: (hasAlternatives) => {
      set((state) => ({
        products: {
          ...state.products,
          hasAlternativeProducts: hasAlternatives === true
        }
      }));
    },

    getHasAlternativeProducts: () => {
      return get().products.hasAlternativeProducts === true;
    },

    // FILTERS

    filters: {
      monosplit: (product, roomSize) => {
        if (product.type.toLowerCase() !== 'monosplit') {
          return true;
        }
        const _roomSize = typeof roomSize === 'number' ? roomSize : parseInt(roomSize);
        if (isNaN(_roomSize) || _roomSize <= 0) {
          return true; // No filtering if room size is not set or invalid
        }
        const _capacity = typeof product.capacity === 'number' ? product.capacity : parseInt(product.capacity);
        if (isNaN(_capacity) || _capacity <= 0) {
          return false; // Exclude products with invalid capacity
        }
        if (_roomSize <= 27) {
          return _capacity <= 27;
        }
        if (_roomSize > 27 && _roomSize <= 35) {
          return _capacity > 27 && _capacity <= 35;
        }
        return _capacity > 35;
      },
      brand: (product, brand) => {
        if (!brand) return true;
        return product.productBrand.toLowerCase() === brand.toLowerCase();
      },
      category: (product, category) => {
        if (!category) return true;
        return product.category.toLowerCase() === category.toLowerCase();
      },
      type: (product, type) => {
        if (!type) return true;
        return product.type.toLowerCase() === type.toLowerCase();
      },
      isAlwaysOn: (product) => {
        return product.alwaysOn === true;
      },
      isNotAlwaysOn: (product) => {
        return product.alwaysOn === false;
      },
      exclusive: ['brand', 'category']
    },
    filterValues: {},

    setFilterValue: (filterName, value) => {
      const state = get();
      if (!filterName) return;
      const exclusive = state.products.filters.exclusive || [];
      const newFilterValues = {
        ...state.products.filterValues,
      }
      if (exclusive?.includes(filterName)) {
        // Exclusive filter - reset other exclusive filters
        exclusive.forEach((fname) => {
          if (fname !== filterName) {
            delete newFilterValues[fname];
          }
        });
      }

      set((state) => ({
        products: {
          ...state.products,
          filterValues: {
            ...newFilterValues,
            [filterName]: value
          }
        }
      }));
    },

    getFilterValue: (filterName) => {
      const { filterValues } = get().products;
      return filterValues[filterName] || null;
    },

    deleteFilterValue: (filterName) => {
      set((state) => {
        const newFilterValues = { ...state.products.filterValues };
        delete newFilterValues[filterName];
        return {
          products: {
            ...state.products,
            filterValues: newFilterValues
          }
        };
      });
    },

    resetAllFilters: () => {
      set((state) => ({
        products: {
          ...state.products,
          filterBy: null,
          filterValues: {}
        }
      }));
    }
  }
});

export const createProductSubscriptions = (store) => {

  store.subscribe(
    (state) => state.formData.storeCity,
    (newVal, prev) => {
      if (typeof newVal === 'string' && typeof prev === 'string') {
        if (newVal.toLocaleLowerCase() !== prev.toLocaleLowerCase()) {
          // City changed, trigger product loading
          const products = store.getState().products;
          products.loadProductsByCity(newVal);
        }
      }
    }
  );
};
