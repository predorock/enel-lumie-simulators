# City-Based Product Loading Implementation

## Overview

This implementation adds automatic product loading from an external API when a city is selected in the ENEL Lumiè Clima application.

## Architecture

### Environment Configuration

The API endpoint is configured via environment variables:

```bash
# .env
VITE_LUMIE_API_BASE_URL=https://greenovationdashboard.azurewebsites.net/api/lumie
VITE_MOCK_API=false
```

### API Integration

#### URL Structure
- **Base URL**: `https://greenovationdashboard.azurewebsites.net/api/lumie`
- **Endpoint**: `/clima?comune={cityName}`
- **Example**: `https://greenovationdashboard.azurewebsites.net/api/lumie/clima?comune=Roma`

#### Request Flow
1. User selects a city via `AsyncSelect` component
2. `storeCity` value changes in formData
3. Store watcher detects the change
4. `loadProductsByCity` action is triggered
5. API request is made to fetch products for the city
6. Products are transformed and stored in the products slice

### State Management

#### Products Slice Enhancement

```javascript
products: {
  items: [],           // Product array
  loading: false,      // Loading state for UI
  error: null,         // Error message if API fails
  selectedBrand: null, // Currently selected brand filter
  selectedCity: null,  // Currently selected city
  
  // New action
  loadProductsByCity: async (cityName) => { ... }
}
```

#### Store Integration

The main store now watches for city changes and automatically triggers product loading:

```javascript
// In setFormValue action
if (property === 'storeCity' && value && value !== previousValue) {
  console.log(`City changed to: ${value}, loading products...`);
  setTimeout(() => {
    const currentState = get();
    if (currentState.products && currentState.products.loadProductsByCity) {
      currentState.products.loadProductsByCity(value);
    }
  }, 0);
}
```

### API Utilities

#### `src/utils/api.js`

- **`buildProductsApiUrl(cityName)`** - Builds the complete API URL
- **`fetchProductsByCity(cityName)`** - Fetches products from the API
- **`isValidProductData(data)`** - Validates API response structure

#### Error Handling

- Network timeouts (30 seconds)
- Invalid API responses
- Missing environment variables
- Empty or malformed data

#### Mock Data Support

For development, you can enable mock data by setting:
```bash
VITE_MOCK_API=true
```

This will use the existing mock data instead of making real API calls.

## Product Data Transformation

The API response is transformed to match the existing product structure:

```javascript
// API Product -> Application Product
{
  id: `${apiProduct.Brand}-${apiProduct.Name}`.toLowerCase().replace(/\s+/g, '-'),
  name: apiProduct.Name,
  brand: apiProduct.Brand,
  price: apiProduct.Price.toFixed(2),
  image: apiProduct.Image,
  url: apiProduct.Url,
  features: transformProductFeatures(apiProduct.Features),
  rawFeatures: apiProduct.Features
}
```

## Usage

### Automatic Loading

Products are automatically loaded when:
1. A city is selected from the AsyncSelect dropdown
2. The city value changes (different city selected)

### Programmatic Loading

You can manually trigger product loading:

```javascript
const store = useAppStore();
await store.products.loadProductsByCity('Roma');
```

### Component Integration

Product components will automatically display:
- Loading states while fetching
- Error messages if the API fails
- Empty states if no products are available
- The fetched products once loaded

### Accessing Products

```javascript
const store = useAppStore();
const { items: products, loading, error, selectedCity } = store.products;

// Get products for specific brand
const filteredProducts = store.products.getFilteredProducts();

// Get available brands from current products
const brands = store.products.getAvailableBrands();
```

## Testing

### Development Mode

1. Set `VITE_MOCK_API=true` to use mock data
2. Select a city from the dropdown
3. Check console logs for loading messages
4. Verify products appear in the UI

### Production Mode

1. Set `VITE_MOCK_API=false` and configure `VITE_LUMIE_API_BASE_URL`
2. Select a city from the dropdown  
3. Monitor network requests in DevTools
4. Verify API responses and error handling

## Configuration Files

### Environment Variables

- `.env` - Local environment configuration
- `.env.example` - Example configuration template

### City Selection Configuration

The city selection is configured in `src/config/pages.json`:

```json
{
  "type": "AsyncSelect",
  "props": {
    "placeholder": "Città",
    "label": "Città", 
    "stateProperty": "storeCity",
    "loadDataAction": "loadCities",
    "stateSlice": "cityState",
    "searchable": true,
    "searchPlaceholder": "Cerca città...",
    "maxHeight": "250px"
  }
}
```

## Security Considerations

- Environment variables are prefixed with `VITE_` to be accessible in the browser
- The API endpoint should handle CORS properly for browser requests
- Error messages are sanitized to prevent XSS attacks
- Request timeout prevents hanging connections

## Future Enhancements

1. **Caching**: Implement city-based product caching to reduce API calls
2. **Offline Support**: Store products locally for offline usage
3. **Retry Logic**: Add automatic retry for failed requests
4. **Pagination**: Handle large product datasets with pagination
5. **Filters**: Add more product filtering options beyond city and brand
