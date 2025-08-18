import { useEffect } from 'react';
import useAppStore from '../../store/useAppStore';
import AcProductDisplayContainer from '../ui/AcProductDisplayContainer';

import { useState } from 'react';

const AcProductDisplayContainerDemo = () => {
  const products = useAppStore((state) => state.products);
  const loadProductsByCity = useAppStore((state) => state.products.loadProductsByCity);
  const isLoading = useAppStore((state) => state.products.loading);

  const [selectedProducts, setSelectedProducts] = useState([]);

  const onProductSelectionChange = (productId, selected) => {
    if (selected) {
      setSelectedProducts((prev) => [...prev, productId]);
    } else {
      setSelectedProducts((prev) => prev.filter((id) => id !== productId));
    }
  };

  useEffect(() => {
    // Load products for Milano on component mount
    loadProductsByCity('Milano');
  }, [loadProductsByCity]);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          AC Product Display Container Demo - Milano
        </h1>
        <p className="text-gray-600 mb-8">
          Showcase of the AC Product Display Container with products from Milano using loadProductsByCity
        </p>

        {/* Loading State Display */}
        {products.loading && (
          <div className="mb-8 p-4 bg-blue-100 border border-blue-300 rounded-lg">
            <p className="text-blue-800">Loading products for Milano...</p>
          </div>
        )}

        {/* Error State Display */}
        {products.error && (
          <div className="mb-8 p-4 bg-red-100 border border-red-300 rounded-lg">
            <p className="text-red-800">Error loading products: {products.error}</p>
          </div>
        )}

        {/* Full Featured Display */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            Full Featured Display - Milano Products
          </h2>
          <AcProductDisplayContainer
            items={products.items}
            loading={isLoading}
            showLoadingStates={true}
            selectedProducts={selectedProducts}
            onProductSelectionChange={onProductSelectionChange}
          />
        </div>

        {/* Compact Display - Max 4 Products */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            Compact Display (Max 4 Products) - Milano
          </h2>
          <AcProductDisplayContainer
            items={products.items}
            loading={isLoading}
            showLoadingStates={true}
            maxProducts={4}
            gridClassName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          />
        </div>

        {/* Limited Products Display */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            Limited Products Display (Max 6) - Milano
          </h2>
          <AcProductDisplayContainer
            items={products.items}
            loading={isLoading}
            showLoadingStates={true}
            maxProducts={6}
            gridClassName="grid grid-cols-1 md:grid-cols-3 gap-6"
          />
        </div>

        {/* Custom Grid Layout */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            Custom Grid Layout - Single Column - Milano
          </h2>
          <AcProductDisplayContainer
            items={products.items}
            loading={isLoading}
            showLoadingStates={true}
            maxProducts={3}
            gridClassName="grid grid-cols-1 gap-8"
            className="max-w-2xl mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default AcProductDisplayContainerDemo;
