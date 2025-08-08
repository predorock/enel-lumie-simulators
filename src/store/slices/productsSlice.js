import productsResponse from '../../assets/mocks/products.response.json';

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

// Transform product features from API format to display format
const transformProductFeatures = (apiFeatures) => {
  return Object.entries(apiFeatures)
    .filter(([key, value]) => value === true)
    .map(([key]) => FEATURE_MAPPING[key] || key);
};

// Transform product from API format to display format
const transformProduct = (apiProduct) => ({
  id: `${apiProduct.Brand}-${apiProduct.Name}`.toLowerCase().replace(/\s+/g, '-'),
  name: apiProduct.Name,
  brand: apiProduct.Brand,
  price: apiProduct.Price.toFixed(2),
  image: apiProduct.Image,
  url: apiProduct.Url,
  features: transformProductFeatures(apiProduct.Features),
  rawFeatures: apiProduct.Features
});

export const createProductsSlice = (set, get) => ({
  products: {
    // State
    items: [],
    loading: false,
    error: null,
    selectedBrand: null,
    
    // Actions
    fetchProducts: async () => {
      set((state) => ({
        products: {
          ...state.products,
          loading: true,
          error: null
        }
      }));
      
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Transform products data
        const transformedProducts = productsResponse.products.map(transformProduct);
        
        set((state) => ({
          products: {
            ...state.products,
            items: transformedProducts,
            loading: false,
            error: null
          }
        }));
      } catch (error) {
        set((state) => ({
          products: {
            ...state.products,
            loading: false,
            error: error.message || 'Failed to fetch products'
          }
        }));
      }
    },
    
    // Filter products by brand
    setSelectedBrand: (brand) => {
      set((state) => ({
        products: {
          ...state.products,
          selectedBrand: brand
        }
      }));
    },
    
    // Get filtered products
    getFilteredProducts: () => {
      const { products } = get();
      if (!products.selectedBrand) {
        return products.items;
      }
      return products.items.filter(product => 
        product.brand.toLowerCase() === products.selectedBrand.toLowerCase()
      );
    },
    
    // Get available brands
    getAvailableBrands: () => {
      const { products } = get();
      const brands = [...new Set(products.items.map(product => product.brand))];
      return brands.sort();
    },
    
    // Get products by brand
    getProductsByBrand: (brand) => {
      const { products } = get();
      return products.items.filter(product => 
        product.brand.toLowerCase() === brand.toLowerCase()
      );
    }
  }
});
