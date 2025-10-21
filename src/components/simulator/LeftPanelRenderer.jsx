import DynamicComponent from './DynamicComponent';

const LeftPanelRenderer = ({ components = [] }) => {
  if (!components || components.length === 0) {
    return null;
  }

  return (
    <div className="left-panel-components flex flex-col h-full justify-between">
      {components.map((componentConfig, index) => {
        const isLastComponent = index === components.length - 1;

        return (
          <DynamicComponent
            type={componentConfig.type}
            props={componentConfig.props}
            renderConditions={componentConfig.renderConditions}
            showError={true}
            key={`left-panel-${index}`}
          />
        );
      })}
    </div>
  );
};

export default LeftPanelRenderer;