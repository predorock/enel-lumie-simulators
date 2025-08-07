import DescriptionBox from '../ui/DescriptionBox';

export default function DescriptionBoxDemo() {
  return (
    <div className="p-8 space-y-8 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">Enhanced DescriptionBox Demo</h1>
      
      {/* Original usage (backward compatible) */}
      <div>
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Original Usage (Backward Compatible)</h2>
        <DescriptionBox 
          title="Original DescriptionBox" 
          description="This shows the component works exactly as before with existing props."
        />
      </div>

      {/* With icon only */}
      <div>
        <h2 className="text-lg font-semibold mb-4 text-gray-700">With Icon</h2>
        <DescriptionBox 
          title="Air Conditioning Configuration" 
          description="Choose your air conditioning system type and configuration."
          icon="mono"
        />
      </div>

      {/* With step only */}
      <div>
        <h2 className="text-lg font-semibold mb-4 text-gray-700">With Step Indicator</h2>
        <DescriptionBox 
          title="Step 3: Product Selection" 
          description="Select the right product for your needs."
          step="3"
          stepColor="blue"
        />
      </div>

      {/* With icon and step */}
      <div>
        <h2 className="text-lg font-semibold mb-4 text-gray-700">With Icon and Step</h2>
        <DescriptionBox 
          title="Dual Split Configuration" 
          description="Configure your dual split air conditioning system with proper room sizing."
          icon="dual"
          step="2"
          stepColor="green"
        />
      </div>

      {/* Horizontal layout */}
      <div>
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Horizontal Layout</h2>
        <DescriptionBox 
          title="Trial Split System" 
          description="Perfect for larger spaces requiring multiple zones."
          icon="trial"
          step="1"
          stepColor="orange"
          layout="horizontal"
        />
      </div>

      {/* Different step colors */}
      <div>
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Step Color Variations</h2>
        <div className="space-y-4">
          <DescriptionBox title="Blue Step" description="Default blue color" step="1" stepColor="blue" />
          <DescriptionBox title="Green Step" description="Success green color" step="2" stepColor="green" />
          <DescriptionBox title="Orange Step" description="Warning orange color" step="3" stepColor="orange" />
          <DescriptionBox title="Gray Step" description="Neutral gray color" step="4" stepColor="gray" />
          <DescriptionBox title="Red Step" description="Error red color" step="5" stepColor="red" />
        </div>
      </div>
    </div>
  );
}
