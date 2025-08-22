import useAppStore from '../../store/useAppStore';
import componentRegistry from './ComponentRegistry';

/**
 * DynamicComponent - Shared component for dynamic rendering
 * 
 * Renders components dynamically based on type and props configuration.
 * Handles conditional rendering and component registry lookup.
 * Used by both PageRenderer and LeftPanelRenderer for consistency.
 */
const DynamicComponent = ({
    type,
    props = {},
    renderConditions,
    showError = true,
    ...otherProps
}) => {
    const { shouldRenderComponent } = useAppStore();

    // Check if component should be rendered based on conditions
    if (renderConditions && !shouldRenderComponent(renderConditions)) {
        return null;
    }

    const Component = componentRegistry[type];

    if (!Component) {
        console.warn(`Component type "${type}" not found in registry`);

        // Show visual error in development, just log in production
        if (showError && import.meta.env.DEV) {
            return (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600 font-enel text-sm">
                        Component "{type}" not found in registry
                    </p>
                </div>
            );
        }

        return null;
    }

    return <Component {...props} {...otherProps} />;
};

export default DynamicComponent;
