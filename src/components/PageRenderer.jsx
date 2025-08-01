import { useMemo } from 'react';
import componentRegistry from './ComponentRegistry';
import pagesConfig from '../config/pages.json';

// Component that dynamically renders components based on type and props
const DynamicComponent = ({ type, props = {}, key }) => {
  const Component = componentRegistry[type];
  
  if (!Component) {
    console.warn(`Component type "${type}" not found in registry`);
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-red-600">Component "{type}" not found</p>
      </div>
    );
  }
  
  return <Component key={key} {...props} />;
};

// Hook to get page configuration by step or ID
export const usePageConfig = (identifier) => {
  return useMemo(() => {
    if (typeof identifier === 'number') {
      // Find by step number
      return pagesConfig.pages.find(page => page.step === identifier);
    } else {
      // Find by page ID
      return pagesConfig.pages.find(page => page.id === identifier);
    }
  }, [identifier]);
};

// Hook to get all pages configuration
export const usePagesConfig = () => {
  return useMemo(() => pagesConfig.pages, []);
};

// Main page renderer component
export default function PageRenderer({ pageId, step, className = "" }) {
  const pageConfig = usePageConfig(pageId || step);
  
  if (!pageConfig) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Pagina non trovata
        </h2>
        <p className="text-gray-600">
          {pageId ? `Pagina con ID "${pageId}"` : `Pagina step ${step}`} non è stata configurata.
        </p>
      </div>
    );
  }
  
  return (
    <div className={`space-y-6 ${className}`}>
      {/* Page Title */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 font-['Roobert']">
          {pageConfig.title}
        </h1>
      </div>
      
      {/* Dynamic Components */}
      <div className="space-y-4">
        {pageConfig.components.map((componentConfig, index) => (
          <DynamicComponent
            key={`${pageConfig.id}-component-${index}`}
            type={componentConfig.type}
            props={componentConfig.props}
          />
        ))}
      </div>
    </div>
  );
}
