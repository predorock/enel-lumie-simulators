import { useState } from 'react';
import Button from '../ui/Button';
import SidebarForm from '../ui/SidebarForm';

export default function SidebarFormDemo() {
    const [showSidebar, setShowSidebar] = useState(false);

    const handleOpenSidebar = () => {
        setShowSidebar(true);
    };

    const handleCloseSidebar = () => {
        setShowSidebar(false);
    };

    const handleSubmit = (formData) => {
        console.log('Form submitted:', formData);
        alert('Form submitted! Check console for data.');
        setShowSidebar(false);
    };

    const handleBack = () => {
        console.log('Back button clicked');
        alert('Back button clicked!');
    };

    return (
        <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
            <h1 className="text-2xl font-bold mb-6">SidebarForm Demo</h1>

            <div className="space-y-4">
                <p className="text-gray-600">
                    Click the button below to open the sidebar form. The sidebar will appear on the right side of the screen
                    with absolute positioning, regardless of where this component is placed.
                </p>

                <Button
                    variant="primary"
                    onClick={handleOpenSidebar}
                >
                    Open Sidebar Form
                </Button>

                {showSidebar && (
                    <SidebarForm
                        onClose={handleCloseSidebar}
                        onSubmit={handleSubmit}
                        onBack={handleBack}
                        showBackdrop={true}
                    />
                )}
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-3">Features</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                    <li>✅ Fixed positioning on right side of screen</li>
                    <li>✅ Semi-transparent backdrop overlay</li>
                    <li>✅ 520px width sidebar</li>
                    <li>✅ Click backdrop to close</li>
                    <li>✅ Close button in header</li>
                    <li>✅ Form validation and state management</li>
                    <li>✅ Responsive form fields</li>
                </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-3">Usage in pages.json</h3>
                <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
                    {`{
  "type": "SidebarForm",
  "props": {
    "onClose": "handleCloseSidebar",
    "onSubmit": "handleFormSubmit",
    "onBack": "handleGoBack",
    "showBackdrop": true
  }
}`}
                </pre>
            </div>

            {/* Content to demonstrate positioning */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold">Page Content</h2>
                <p className="text-gray-600">
                    This content demonstrates that the sidebar appears on top of existing page content
                    with absolute positioning. The sidebar will always appear on the right side of the screen,
                    regardless of the scroll position or where this component is placed in the DOM.
                </p>

                {Array.from({ length: 10 }, (_, i) => (
                    <div key={i} className="bg-white p-4 rounded shadow">
                        <h3 className="font-semibold">Content Block {i + 1}</h3>
                        <p className="text-gray-600">
                            This is sample content to show how the sidebar overlays on top of existing content.
                            The backdrop provides a clear visual separation between the sidebar and the main content.
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
