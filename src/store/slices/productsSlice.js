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
    filterBy: null,

    setProducts: (rawProducts) => {
      // Transform API response to match our product structure
      const items = rawProducts
        .map(transformProduct)
        .sort(sortProductsByCategory);

      set((state) => ({
        products: {
          ...state.products,
          items,
          loading: false,
          error: null
        }
      }));
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

    getFilteredProducts: () => {
      const { items, filterBy } = get().products;
      if (!filterBy || !filterBy?.prop || !filterBy?.value) return items;
      const prop = filterBy.prop;
      const value = filterBy.value.toLowerCase();
      return items.filter((item) => {
        return item[prop]?.toLowerCase().includes(value);
      });
    },

    setFilter: (prop, value) => {
      set((state) => ({
        products: {
          ...state.products,
          filterBy: { prop, value }
        }
      }));
    },

    resetFilter: () => {
      set((state) => ({
        products: {
          ...state.products,
          filterBy: null
        }
      }));
    },

    getFilter: () => {
      const { filterBy } = get().products;
      return filterBy;
    }

  }
});
