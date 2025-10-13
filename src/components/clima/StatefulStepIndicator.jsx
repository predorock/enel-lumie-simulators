import useAppStore from '../../store/useAppStore';
import StepIndicator from '../ui/StepIndicator';
const StatefulStepIndicator = ({
    acConfigurationKey,
    ...props
}) => {
    const { getDynamicPages, getCurrentPage, getFormValue } = useAppStore();

    const dynamicPages = getDynamicPages();
    const acConfigs = getFormValue('airConditioningConfigs') || {};
    const currentPage = getCurrentPage();

    const steps = dynamicPages.map((page, index) => ({
        id: page.id,
        label: `Scegli prodotto #${index + 1}`,
        isSelected: !!acConfigs[acConfigurationKey]?.selected
    }));

    const currentStep = steps.findIndex(step => step.id === currentPage.id) + 1;

    return (
        <StepIndicator
            steps={steps}
            currentStep={currentStep}
            {...props}
        />
    );
}; export default StatefulStepIndicator;