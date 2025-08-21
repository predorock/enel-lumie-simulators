import useAppStore from '../../store/useAppStore';
import Checkbox from '../ui/Checkbox';

const StatefulCheckbox = ({ stateProperty, ...props }) => {
    const store = useAppStore();
    const value = store.formData[stateProperty] || false;
    const setValue = (newValue) => store.setFormValue(stateProperty, newValue);

    return <Checkbox checked={value} onChange={setValue} {...props} />;
};

export default StatefulCheckbox;
