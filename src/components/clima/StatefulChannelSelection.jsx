import useAppStore from '../../store/useAppStore';
import ChannelSelection from '../ui/ChannelSelection';

/**
 * Stateful ChannelSelection wrapper
 * Integrates with the app store to save the selected channel
 * 
 * @param {string} stateProperty - Property in formData to store the channel value
 * @param {string} className - Additional CSS classes
 */
export default function StatefulChannelSelection({
    stateProperty = 'selectedChannel',
    className = "",
    ...props
}) {
    const { setFormValue, nextStep } = useAppStore();

    const handleChannelSelect = (channelValue) => {
        setFormValue(stateProperty, channelValue);
        nextStep();
    };

    return (
        <ChannelSelection
            onChannelSelect={handleChannelSelect}
            className={className}
            {...props}
        />
    );
}