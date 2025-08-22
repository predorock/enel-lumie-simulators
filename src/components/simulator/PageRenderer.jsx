import { useMemo } from 'react';
import useAppStore from '../../store/useAppStore';
import DynamicComponent from './DynamicComponent';

// Hook to get page configuration by step or ID
export const usePageConfig = (identifier) => {
  const getAllPages = useAppStore(state => state.getAllPages);

  return useMemo(() => {
    const allPages = getAllPages();

    if (typeof identifier === 'number') {
      // Find by step number
      return allPages.find(page => page.step === identifier);
    } else {
      // Find by page ID
      return allPages.find(page => page.id === identifier);
    }
  }, [identifier, getAllPages]);
};

// Hook to get all pages configuration
export const usePagesConfig = () => {
  const getAllPages = useAppStore(state => state.getAllPages);

  return useMemo(() => getAllPages(), [getAllPages]);
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
          {pageId ? `Pagina con id "${pageId}"` : `Pagina step ${step}`} non è stata trovata.
        </p>
      </div>
    );
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Dynamic Components */}
      <div className="space-y-4">
        {pageConfig.components.map((componentConfig, index) => (
          <DynamicComponent
            key={`${pageConfig.id}-component-${index}`}
            type={componentConfig.type}
            props={componentConfig.props}
            renderConditions={componentConfig.renderConditions}
          />
        ))}
      </div>
    </div>
  );
}
