/**
 * API utilities for ENEL Lumiè Clima application
 */

const MOCKS_ACTIVE = import.meta.env.VITE_MOCK_API === 'true';

/**
 * Build the products API URL for a specific city
 * @param {string} cityName - The name of the city to get products for
 * @returns {string} - The complete API URL
 */
export const buildProductsApiUrl = (cityName) => {
  const baseUrl = import.meta.env.VITE_LUMIE_API_BASE_URL;
  if (!baseUrl) {
    throw new Error('VITE_LUMIE_API_BASE_URL environment variable is not configured');
  }
  return `${baseUrl}/clima?comune=${encodeURIComponent(cityName)}`;
};

/**
 * Fetch products from the external API for a specific city
 * @param {string} cityName - The name of the city to get products for
 * @returns {Promise<Array>} - Array of product objects
 */
export const fetchProductsByCity = async (cityName) => {
  if (!cityName) {
    throw new Error('City name is required');
  }

  if (MOCKS_ACTIVE) {
    console.log(`🔧 Using mock data for city: ${cityName}`);
    // Return mock data for development
    const { default: mockData } = await import('../assets/mocks/products.response.json');
    await new Promise(resolve => setTimeout(resolve, 800)); // Simulate network delay
    return mockData.products || [];
  }

  const apiUrl = buildProductsApiUrl(cityName);
  console.log(`🌐 Fetching products from API: ${apiUrl}`);

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      // Add timeout to prevent hanging requests
      signal: AbortSignal.timeout(30000), // 30 seconds timeout
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    // Handle different response formats
    if (data && Array.isArray(data.products)) {
      return data.products;
    } else if (Array.isArray(data)) {
      return data;
    } else {
      console.warn('Unexpected API response format:', data);
      return [];
    }
  } catch (error) {
    if (error.name === 'TimeoutError') {
      throw new Error('Request timed out. Please try again.');
    }
    throw error;
  }
};

/**
 * Validate if the API response contains valid product data
 * @param {any} data - The API response data
 * @returns {boolean} - True if the data is valid
 */
export const isValidProductData = (data) => {
  if (!data) return false;

  // Check if it's an array of products or an object with a products array
  const products = Array.isArray(data) ? data : data.products;

  if (!Array.isArray(products)) return false;

  // Basic validation of product structure
  return products.every(product =>
    product &&
    typeof product === 'object' &&
    (product.Name || product.name) &&
    (product.Brand || product.brand)
  );
};

/**
 * Build the simulation API URL
 * @returns {string} - The complete API URL for simulation
 */
export const buildSimulationApiUrl = () => {
  const baseUrl = import.meta.env.VITE_LUMIE_API_BASE_URL;
  if (!baseUrl) {
    throw new Error('VITE_LUMIE_API_BASE_URL environment variable is not configured');
  }
  return `${baseUrl}/clima`;
};

/**
 * Submit simulation data to the external API
 * @param {Object} payload - The simulation payload object
 * @returns {Promise<Object>} - The API response data
 */
export const submitSimulationToApi = async (payload) => {
  if (!payload) {
    throw new Error('Simulation payload is required');
  }

  const apiUrl = buildSimulationApiUrl();
  console.log(`🚀 Submitting simulation to API: ${apiUrl}`, payload);

  if (MOCKS_ACTIVE) {
    console.log(`🔧 Using mock data for simulation `);
    // Return mock data for development
    await new Promise(resolve => setTimeout(resolve, 800)); // Simulate network delay
    return payload;
  }

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
      // Add timeout to prevent hanging requests
      signal: AbortSignal.timeout(30000), // 30 seconds timeout
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log('✅ Simulation API response:', data);
    return data;

  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error('Request timed out. Please try again.');
    }
    throw error;
  }
};

/**
 * Validate if the simulation response contains valid data
 * @param {any} data - The API response data
 * @returns {boolean} - True if the data is valid
 */
export const isValidSimulationData = (data) => {
  if (!data || typeof data !== 'object') return false;

  // Basic validation - check if response has expected structure
  // Adjust validation rules based on actual API response format
  return true; // For now, accept any object response
};
