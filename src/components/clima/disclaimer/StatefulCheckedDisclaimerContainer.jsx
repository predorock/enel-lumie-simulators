import useAppStore from '../../../store/useAppStore';
import CheckedDisclaimerContainer from '../../ui/disclaimer/CheckedDisclaimerContainer';

const StatefulCheckedDisclaimerContainer = ({ ...props }) => {

    const { setFormValue, getFormValue } = useAppStore();

    const onSectionChange = (event, section) => {
        if (section.stateProperty) {
            setFormValue(section.stateProperty, event);
        }
    };

    const sections = props.sections.map(section => ({
        ...section,
        onChange: onSectionChange,
        checked: getFormValue(section.stateProperty)
    }));

    return <CheckedDisclaimerContainer {...props} sections={sections} />;
};

export default StatefulCheckedDisclaimerContainer;
