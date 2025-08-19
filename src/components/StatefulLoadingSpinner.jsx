import useAppStore from '../store/useAppStore';
import LoadingSpinner from './ui/LoadingSpinner';

const StatefulLoadingSpinner = ({
    text,
    size = "large",
    centered = false,
    stateProperty = null,
    showWhen = null,
    className = "",
    ...props
}) => {
    const { formData } = useAppStore();

    // If showWhen is specified, only show when that condition is met
    if (showWhen && !formData[showWhen]) {
        return null;
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

export default StatefulLoadingSpinner;
