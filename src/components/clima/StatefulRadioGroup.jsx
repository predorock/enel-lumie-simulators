import useAppStore from '../../store/useAppStore';
import RadioGroup from '../ui/RadioGroup';

/**
 * Stateful RadioGroup wrapper that integrates with the app store
 * Follows the project's stateful wrapper pattern for form components
 * 
 * @param {string} stateProperty - The property name in formData to bind to
 * @param {Array} options - Array of option objects with value and label
 * @param {string} name - Form field name (optional, defaults to stateProperty)
 * @param {boolean} disabled - Whether the radio group is disabled
 * @param {string} className - Additional CSS classes
 * @param {object} props - Additional props passed to the RadioGroup
 */
export default function StatefulRadioGroup({
    stateProperty,
    options = [],
    name,
    disabled = false,
    className = "",
    ...props
}) {
    const { formData, setFormValue } = useAppStore();

    if (!stateProperty) {
        console.warn('StatefulRadioGroup: stateProperty is required');
        return null;
    }

    const value = formData[stateProperty];
    const fieldName = name || stateProperty;

    const handleValueChange = (selectedValue) => {
        setFormValue(stateProperty, selectedValue);
    };

    return (
        <RadioGroup
            value={value}
            onValueChange={handleValueChange}
            options={options}
            name={fieldName}
            disabled={disabled}
            className={className}
            {...props}
        />
    );
}