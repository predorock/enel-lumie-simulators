import useAppStore from '../../store/useAppStore';
import ReportDisplay from '../ui/ReportDisplay';

const StatefulReportDisplay = ({
    showWhen = null,
    className = "",
    ...props
}) => {
    const { formData, report } = useAppStore();

    // Check if component should be shown
    if (showWhen) {
        const shouldShow = checkShowCondition(showWhen, { formData, report });
        if (!shouldShow) {
            return null;
        }
    }

    // Get report data
    const reportData = report?.data;

    return (
        <ReportDisplay
            data={reportData}
            className={className}
            {...props}
        />
    );
};

// Helper function to check show conditions
const checkShowCondition = (condition, { formData, report }) => {
    switch (condition) {
        case 'reportHasData':
            return report?.data !== null && report?.data !== undefined;
        case 'reportLoading':
            return report?.loading === true;
        case 'reportHasError':
            return report?.error !== null && report?.error !== undefined;
        default:
            // Check if it's a formData property
            return !!formData[condition];
    }
};

export default StatefulReportDisplay;
