import useAppStore from '../../store/useAppStore';
import getNestedValue from '../../utils/getNestedValue';
import SidebarForm from '../ui/SidebarForm';

/**
 * StatefulSidebarForm Component
 * 
 * Stateful wrapper for SidebarForm component with Zustand store integration
 * Manages sidebar open/close state and customer data through reportSlice
 * 
 * @param {string} className - Additional CSS classes
 * @param {object} ...props - Additional props passed to SidebarForm
 */
export default function StatefulSidebarForm({
    onSubmitAction,
    className = "",
    ...props
}) {
    // Get store state and actions
    const state = useAppStore();
    const {
        sidebar,
        closeSidebar,
        updateCustomerData,
        setCustomerData
    } = state;

    const submitAction = getNestedValue(state, onSubmitAction);

    const handleInputChange = (field, value) => {
        updateCustomerData(field, value);
    };

    const handleSubmit = async (formData) => {
        setCustomerData(formData);
        submitAction();
        closeSidebar();
    };

    return (
        <SidebarForm
            isOpen={sidebar.isOpen}
            customerData={sidebar.customerData}
            onInputChange={handleInputChange}
            onClose={() => closeSidebar()}
            onSubmit={handleSubmit}
            isSubmitting={state.lead.isLoading}
            submitError={state.lead.error}
            className={className}
            {...props}
        />
    );
}
