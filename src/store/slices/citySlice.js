/**
 * City State Slice
 * Dedicated slice for managing city-related state and actions
 */

// Initial state for city slice
export const initialCityState = {
  cities: [],
  loading: false,
  error: null,
  lastLoadTime: null,
};

// City slice actions factory
export const createCitySlice = (set, get) => ({
  // City state
  cityState: initialCityState,
  
  // City actions
  setCityState: (updates) => set((state) => ({
    cityState: {
      ...state.cityState,
      ...updates
    }
  })),
  
  loadCities: async () => {
    const state = get();
    if (state.cityState.cities.length > 0 || state.cityState.loading) {
      return; // Cities already loaded or loading
    }
    
    get().setCityState({ loading: true, error: null });
    
    try {
      const response = await fetch('/comuni.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const cittaData = await response.json();
      
      const keys = new Set();
      // Transform data to select options format
      const cityOptions = cittaData
        .filter(city => city.comune && !keys.has(city.comune) && keys.add(city.comune))
        .map(city => ({
          value: city.comune,
          label: `${city.comune}`,
        }));
      
      get().setCityState({ 
        cities: cityOptions,
        loading: false,
        error: null,
        lastLoadTime: Date.now()
      });
    } catch (error) {
      console.error('Error loading cities:', error);
      get().setCityState({ 
        cities: [],
        loading: false,
        error: error.message
      });
    }
  },
  
  // Helper to get cities (triggers load if needed)
  getCities: async () => {
    const state = get();
    if (state.cityState.cities.length === 0 && !state.cityState.loading) {
      await state.loadCities();
    }
    return get().cityState.cities;
  },
  
  // Helper to clear cities cache (useful for refreshing data)
  clearCitiesCache: () => set((state) => ({
    cityState: {
      ...state.cityState,
      cities: [],
      error: null,
      lastLoadTime: null
    }
  })),
  
  // Helper to get city by value
  getCityByValue: (value) => {
    const state = get();
    return state.cityState.cities.find(city => city.value === value) || null;
  },
  
  // Helper to search cities
  searchCities: (searchTerm) => {
    const state = get();
    if (!searchTerm) return state.cityState.cities;
    
    const term = searchTerm.toLowerCase();
    return state.cityState.cities.filter(city => 
      city.label.toLowerCase().includes(term) ||
      city.value.toLowerCase().includes(term) ||
      city.cap.includes(term)
    );
  },
  
  // Helper to get city state selectors
  getCityState: () => get().cityState,
  
  // Helper to check if cities are loaded
  areCitiesLoaded: () => {
    const state = get();
    return state.cityState.cities.length > 0;
  },
  
  // Helper to refresh cities (force reload)
  refreshCities: async () => {
    get().clearCitiesCache();
    await get().loadCities();
  }
});

// City state selectors (for better performance and readability)
export const citySelectors = {
  getCities: (state) => state.cityState.cities,
  isLoading: (state) => state.cityState.loading,
  getError: (state) => state.cityState.error,
  getLastLoadTime: (state) => state.cityState.lastLoadTime,
  isLoaded: (state) => state.cityState.cities.length > 0,
};
