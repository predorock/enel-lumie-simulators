import React from 'react';
import AcProductDisplayContainer from '../ui/AcProductDisplayContainer';

const AcProductDisplayContainerDemo = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          AC Product Display Container Demo
        </h1>
        <p className="text-gray-600 mb-8">
          Showcase of the AC Product Display Container with products from the store
        </p>

        {/* Full Featured Display */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            Full Featured Display
          </h2>
          <AcProductDisplayContainer
            showLoadingStates={true}
          />
        </div>

        {/* Compact Display - Max 4 Products */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            Compact Display (Max 4 Products)
          </h2>
          <AcProductDisplayContainer
            showLoadingStates={false}
            maxProducts={4}
            gridClassName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          />
        </div>

        {/* Limited Products Display */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            Limited Products Display (Max 6)
          </h2>
          <AcProductDisplayContainer
            showLoadingStates={true}
            maxProducts={6}
            gridClassName="grid grid-cols-1 md:grid-cols-3 gap-6"
          />
        </div>

        {/* Custom Grid Layout */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            Custom Grid Layout - Single Column
          </h2>
          <AcProductDisplayContainer
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
