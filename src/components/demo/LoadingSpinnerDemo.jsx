import LoadingSpinner from '../ui/LoadingSpinner';

const LoadingSpinnerDemo = () => {
    return (
        <div className="p-8 space-y-12 bg-white">
            <div className="space-y-4">
                <h2 className="text-2xl font-enel-bold text-black">LoadingSpinner Component Demo</h2>
                <p className="text-grey-light font-enel">
                    Based on Figma design with animated spinner and customizable text
                </p>
            </div>

            {/* Default Large Size */}
            <div className="space-y-4">
                <h3 className="text-xl font-enel-bold text-black">Large Size (Default)</h3>
                <div className="border border-[#c2cddd] rounded-lg p-8 flex justify-center">
                    <LoadingSpinner />
                </div>
            </div>

            {/* Custom Text */}
            <div className="space-y-4">
                <h3 className="text-xl font-enel-bold text-black">Custom Text</h3>
                <div className="border border-[#c2cddd] rounded-lg p-8 flex justify-center">
                    <LoadingSpinner text="Caricamento dati in corso..." />
                </div>
            </div>

            {/* Medium Size */}
            <div className="space-y-4">
                <h3 className="text-xl font-enel-bold text-black">Medium Size</h3>
                <div className="border border-[#c2cddd] rounded-lg p-6 flex justify-center">
                    <LoadingSpinner
                        size="medium"
                        text="Elaborazione richiesta..."
                    />
                </div>
            </div>

            {/* Small Size */}
            <div className="space-y-4">
                <h3 className="text-xl font-enel-bold text-black">Small Size</h3>
                <div className="border border-[#c2cddd] rounded-lg p-4 flex justify-center">
                    <LoadingSpinner
                        size="small"
                        text="Caricamento..."
                    />
                </div>
            </div>

            {/* No Text */}
            <div className="space-y-4">
                <h3 className="text-xl font-enel-bold text-black">Spinner Only (No Text)</h3>
                <div className="border border-[#c2cddd] rounded-lg p-8 flex justify-center">
                    <LoadingSpinner text="" />
                </div>
            </div>

            {/* Dark Background */}
            <div className="space-y-4">
                <h3 className="text-xl font-enel-bold text-black">On Dark Background</h3>
                <div className="bg-black rounded-lg p-8 flex justify-center">
                    <LoadingSpinner
                        text="Loading on dark background..."
                        className="text-white"
                    />
                </div>
            </div>

            {/* Usage Examples */}
            <div className="space-y-4">
                <h3 className="text-xl font-enel-bold text-black">Usage Examples</h3>
                <div className="bg-white-light rounded-lg p-6 space-y-4">
                    <h4 className="font-enel-bold text-black">JSON Configuration:</h4>
                    <pre className="bg-black text-white p-4 rounded text-sm overflow-x-auto">
                        {`{
  "type": "LoadingSpinner",
  "props": {
    "text": "Attendi ancora qualche secondo",
    "size": "large"
  }
}

// With state integration:
{
  "type": "LoadingSpinner", 
  "props": {
    "stateProperty": "loadingMessage",
    "size": "medium",
    "showWhen": "isLoading"
  }
}`}
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default LoadingSpinnerDemo;
