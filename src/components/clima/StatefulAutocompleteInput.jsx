import useAppStore from '../../store/useAppStore';
import AutocompleteInput from '../ui/AutocompleteInput';

const StatefulAutocompleteInput = ({
    stateProperty,
    loadDataAction = 'loadCities',
    stateSlice = 'cityState',
    ...props
}) => {
    const { formData, setFormValue } = useAppStore();
    const value = formData[stateProperty] || '';

    const handleChange = (newValue) => {
        setFormValue(stateProperty, newValue);
    };

    return (
        <AutocompleteInput
            value={value}
            onChange={handleChange}
            loadDataAction={loadDataAction}
            stateSlice={stateSlice}
            {...props}
        />
    );
};

export default StatefulAutocompleteInput;
