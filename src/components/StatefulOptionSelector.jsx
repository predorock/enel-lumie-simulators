import OptionSelector from './ui/OptionSelector';
import useAppStore from '../store/useAppStore';

export default function StatefulOptionSelector({ 
  stateProperty = 'selectedOption',
  options = [],
  title = "",
  className = "",
  ...props 
}) {
  const { getFormValue, setFormValue } = useAppStore();
  
  const selectedOption = getFormValue(stateProperty);
  
  const handleOptionChange = (optionId) => {
    setFormValue(stateProperty, optionId);
  };

  return (
    <OptionSelector
      options={options}
      selectedOption={selectedOption}
      onOptionChange={handleOptionChange}
      title={title}
      className={className}
      {...props}
    />
  );
}
