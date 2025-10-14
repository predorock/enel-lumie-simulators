import useAppStore from '../../store/useAppStore';
import SliderComponent from '../ui/Slider';

const StatefulSlider = ({
  stateProperty = null,
  min = 0,
  max = 100,
  step = 1,
  marks = {},
  initialValue = null,
  ...props
}) => {
  const { formData, setFormValue } = useAppStore();

  const handleChange = (newValue) => {
    if (stateProperty) {
      setFormValue(stateProperty, newValue);
    }
  };

  const currentValue = stateProperty && formData && formData[stateProperty] !== undefined
    ? formData[stateProperty]
    : initialValue;

  return (
    <SliderComponent
      value={currentValue}
      min={min}
      max={max}
      step={step}
      marks={marks}
      onChange={handleChange}
      {...props}
    />
  );
};

export default StatefulSlider;
