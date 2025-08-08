import BrandSelector from '../ui/BrandSelector';

export default function BrandSelectorDemo() {
  return (
    <div className="p-8 space-y-8 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">Brand Selector Demo</h1>
      
      {/* Basic Brand Selector */}
      <div>
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Brand Selection</h2>
        <BrandSelector 
          onBrandChange={(brandId) => console.log('Selected brand:', brandId)}
        />
      </div>

      {/* With initial selection */}
      <div>
        <h2 className="text-lg font-semibold mb-4 text-gray-700">With Initial Selection (Daikin)</h2>
        <BrandSelector 
          selectedBrand="daikin"
          onBrandChange={(brandId) => console.log('Selected brand:', brandId)}
        />
      </div>

      {/* Disabled state */}
      <div>
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Disabled State</h2>
        <BrandSelector 
          selectedBrand="lg"
          disabled={true}
          onBrandChange={(brandId) => console.log('Selected brand:', brandId)}
        />
      </div>
    </div>
  );
}
