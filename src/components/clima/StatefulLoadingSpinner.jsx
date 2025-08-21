import useAppStore from '../../store/useAppStore';
import LoadingSpinner from '../ui/LoadingSpinner';

const StatefulLoadingSpinner = ({
    text,
    size = "large",
    centered = false,
    stateProperty = null,
    showWhen = null,
    className = "",
    ...props
}) => {
    const { formData, report } = useAppStore();

    // Check if component should be shown based on showWhen condition
    if (showWhen) {
        const shouldShow = checkShowCondition(showWhen, { formData, report });
        if (!shouldShow) {
            return null;
        }
    }

    // Get text from state if stateProperty is specified
    const displayText = stateProperty ? formData[stateProperty] : text;

    return (
        <LoadingSpinner
            text={displayText}
            size={size}
            centered={centered}
            className={className}
            {...props}
        />
    );
};

// Helper function to check show conditions
const checkShowCondition = (condition, { formData, report }) => {
    switch (condition) {
        case 'reportLoading':
            return report?.loading === true;
        case 'reportHasError':
            return report?.error !== null && report?.error !== undefined;
        case 'reportHasData':
            return report?.data !== null && report?.data !== undefined;
        default:
            // Check if it's a formData property
            return !!formData[condition];
    }
};

export default StatefulLoadingSpinner;
