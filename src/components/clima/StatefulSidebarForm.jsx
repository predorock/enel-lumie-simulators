import { executeAction } from '../../store/executeAction';
import useAppStore from '../../store/useAppStore';
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

    const handleInputChange = (field, value) => {
        updateCustomerData(field, value);
    };

    const handleSubmit = async (formData) => {
        setCustomerData(formData);
        executeAction(state, onSubmitAction);
        closeSidebar();
    };

    const title = sidebar?.noValidationFields?.includes('email') ?
        'Stampa il preventivo al cliente e genera lead in X-Costumer' :
        'Invia il preventivo al cliente e genera lead in X-Costumer';

    return (
        <SidebarForm
            title={title}
            isOpen={sidebar.isOpen}
            customerData={sidebar.customerData}
            onInputChange={handleInputChange}
            onClose={() => closeSidebar()}
            onSubmit={handleSubmit}
            isSubmitting={state.lead.isLoading}
            submitError={state.lead.error}
            className={className}
            noValidationFields={sidebar.noValidationFields || []}
            {...props}
        />
    );
}
