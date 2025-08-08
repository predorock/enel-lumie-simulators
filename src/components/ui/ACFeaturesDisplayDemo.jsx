import React from 'react';
import ACFeaturesDisplay from './ACFeaturesDisplay';

const ACFeaturesDisplayDemo = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">AC Features Display - Figma Design</h1>
      
      <div className="max-w-md mx-auto space-y-8">
        {/* Default Configuration */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Default Product Card</h2>
          <ACFeaturesDisplay />
        </div>

        {/* Custom Configuration */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Custom Product</h2>
          <ACFeaturesDisplay
            productName="LG Dual Cool 18000"
            productDescription="Per ambienti fino a 50m²"
            price="789.00"
            features={[
              "Display digitale",
              "Inverter technology", 
              "Controllo app mobile",
              "Filtro PM 1.0",
              "Modalità eco",
              "Auto pulizia"
            ]}
            showRecommendationBadge={false}
          />
        </div>

        {/* Without Checkbox */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Information Only</h2>
          <ACFeaturesDisplay
            productName="Samsung WindFree 12000"
            price="599.00"
            showCheckbox={false}
            className="shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ACFeaturesDisplayDemo;
