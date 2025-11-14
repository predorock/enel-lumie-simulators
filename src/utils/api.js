/**
 * API utilities for ENEL Lumiè Clima application
 */

const MOCKS_ACTIVE = import.meta.env.VITE_MOCK_API === 'true';
const MOCKS_DELAY = 2000;

const API_TIMEOUT = import.meta.env.VITE_API_TIMEOUT ? parseInt(import.meta.env.VITE_API_TIMEOUT) : 30000; // Default to 30 seconds

const buildApiUrl = (path) => {
  const baseUrl = import.meta.env.VITE_LUMIE_API_BASE_URL;
  if (!baseUrl) {
    throw new Error('VITE_LUMIE_API_BASE_URL environment variable is not configured');
  }
  return `${baseUrl}/${path}`;
};

const API_URLS = {
  products: (cityName, partnership) => `https://greenovationdashboard.azurewebsites.net/api/lumie/clima?comune=${encodeURIComponent(cityName)}&partnership=${encodeURIComponent(partnership)}`,
  simulation: () => "https://greenovationdashboard.azurewebsites.net/api/lumie/clima",
  lead: () => "https://greenovationdashboard.azurewebsites.net/api/Lumie/EnelClimaLead",
  printTracking: (userId, accountName, channel) => `https://greenovationdashboard.azurewebsites.net/api/EnelClima/TrackDownload?id=${encodeURIComponent(userId)}&accountName=${encodeURIComponent((accountName || "").replaceAll("&", "e"))}&channel=${encodeURIComponent(channel)}`,
}

/**
 * drd
 * Fetch products from the external API for a specific city
 * @param {string} cityName - The name of the city to get products for
 * @returns {Promise<Array>} - Array of product objects
 */
export const fetchProducts = async (cityName, partnership) => {
  if (!cityName) {
    throw new Error('City name is required');
  }

  if (MOCKS_ACTIVE) {
    console.log(`🔧 Using mock data for products`);
    // Return mock data for development
    const { default: mockData } = await import('../assets/mocks/products.response.json');
    await new Promise(resolve => setTimeout(resolve, 800)); // Simulate network delay
    return m∫[];
  }

  const apiUrl = API_URLS.products(cityName, partnership);
  console.log(`🌐 Fetching products from API: ${apiUrl}`);

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      // Add timeout to prevent hanging requests
      signal: AbortSignal.timeout(API_TIMEOUT),
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
 * Submit simulation data to the external API
 * @param {Object} payload - The simulation payload object
 * @returns {Promise<Object>} - The API response data
 */
export const submitSimulationToApi = async (payload) => {
  if (!payload) {
    throw new Error('Simulation payload is required');
  }

  const apiUrl = API_URLS.simulation();
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
      signal: AbortSignal.timeout(API_TIMEOUT), // 30 seconds timeout
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
 * Submit simulation data to the external API
 * @param {Object} payload - The simulation lead payload object
 * @returns {Promise<Object>} - The API response data
 */
export const submitSimulationLeadAPI = async (payload) => {
  if (!payload) {
    throw new Error('Simulation lead payload is required');
  }

  const apiUrl = API_URLS.lead();
  console.log(`🚀 Submitting simulation lead to API: ${apiUrl}`, payload);

  if (MOCKS_ACTIVE) {
    console.log(`🔧 Using mock data for simulation lead`);
    // Return mock data for development
    await new Promise(resolve => setTimeout(resolve, MOCKS_DELAY)); // Simulate network delay
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
      signal: AbortSignal.timeout(API_TIMEOUT),
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log('✅ Simulation LEAD API response:', data);
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


export const printTrackingAPI = async (userId, accountName, channel) => {

  const apiUrl = API_URLS.printTracking(userId, accountName, channel);

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {},
      // Add timeout to prevent hanging requests
      signal: AbortSignal.timeout(API_TIMEOUT),
    });

    console.log('✅ Print Tracking API ok', response);
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error('Request timed out. Please try again.');
    }
    throw error;
  }
}