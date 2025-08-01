import Step from "./Step";
import checkmark from "../../../assets/icons/checkmark.svg";
import useAppStore from "../../../store/useAppStore";

export default function Stepper({ current }) {
  const steps = useAppStore(state => state.getSteps());
  
  // Convert 1-indexed currentStep to 0-indexed for array operations
  const currentIndex = current - 1;
  
  return (
    <ul className="flex flex-wrap">
      {steps.map((step, index) => (
        <Step
          key={index}
          number={index + 1}
          copy={step.copy}
          icon={currentIndex > index ? checkmark : undefined}
          active={currentIndex === index}
          past={currentIndex > index}
          last={index === steps.length - 1}
        />
      ))}
    </ul>
  );
}