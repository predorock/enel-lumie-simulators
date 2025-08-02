import React from 'react';
import componentRegistry from './ComponentRegistry';
import useAppStore from '../store/useAppStore';

const LeftPanelRenderer = ({ components = [] }) => {
  const { formData } = useAppStore();

  // Helper function to check render conditions
  const shouldRenderComponent = (renderConditions) => {
    if (!renderConditions) return true;
    
    return Object.entries(renderConditions).every(([conditionType, stateKey]) => {
      switch (conditionType) {
        case 'hasQuantities':
          const quantities = formData[stateKey] || {};
          return Object.values(quantities).some(qty => qty > 0);
        default:
          return true;
      }
    });
  };

  const renderComponent = (componentConfig, index) => {
    const { type, props = {}, renderConditions } = componentConfig;
    
    // Check if component should be rendered
    if (!shouldRenderComponent(renderConditions)) {
      return null;
    }
    
    const Component = componentRegistry[type];
    
    if (!Component) {
      console.warn(`Component type "${type}" not found in registry`);
      return null;
    }

    return (
      <div key={`left-panel-${index}`} className="mb-4">
        <Component {...props} />
      </div>
    );
  };

  if (!components || components.length === 0) {
    return null;
  }

  return (
    <div className="left-panel-components">
      {components.map((component, index) => renderComponent(component, index))}
    </div>
  );
};

export default LeftPanelRenderer;