import useAppStore from '../../store/useAppStore';
import ErrorMessage from '../ui/ErrorMessage';

const StatefulErrorMessage = ({
    title,
    stateProperty = null,
    showWhen = null,
    actionButtonText = "Riprova",
    actionButtonAction = null,
    ...props
}) => {
    const { formData, report, submitSimulation } = useAppStore();

    // Check if component should be shown
    if (showWhen) {
        const shouldShow = checkShowCondition(showWhen, { formData, report });
        if (!shouldShow) {
            return null;
        }
    }

    // Get error message from state if stateProperty is specified
    const message = stateProperty ? getNestedProperty(formData, stateProperty) || report?.error : '';

    // Handle action button click
    const handleActionClick = actionButtonAction ? getActionHandler(actionButtonAction, { submitSimulation }) : null;

    return (
        <ErrorMessage
            title={title}
            message={message}
            actionButtonText={actionButtonText}
            onActionClick={handleActionClick}
            {...props}
        />
    );
};

// Helper function to check show conditions
const checkShowCondition = (condition, { formData, report }) => {
    switch (condition) {
        case 'reportHasError':
            return report?.error !== null && report?.error !== undefined;
        case 'reportLoading':
            return report?.loading === true;
        case 'reportHasData':
            return report?.data !== null && report?.data !== undefined;
        default:
            // Check if it's a formData property
            return !!formData[condition];
    }
};

// Helper function to get nested properties
const getNestedProperty = (obj, path) => {
    return path.split('.').reduce((current, key) => current?.[key], obj);
};

// Helper function to get action handlers
const getActionHandler = (action, { submitSimulation }) => {
    switch (action) {
        case 'retrySimulation':
            return () => {
                if (submitSimulation) {
                    submitSimulation().catch(error => {
                        console.error('Retry simulation failed:', error);
                    });
                }
            };
        default:
            return null;
    }
};

export default StatefulErrorMessage;
