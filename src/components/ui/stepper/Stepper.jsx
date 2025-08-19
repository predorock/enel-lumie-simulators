import useAppStore from "../../../store/useAppStore";
import Step from "./Step";

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
          active={currentIndex === index}
          first={index === 0}
          past={currentIndex > index}
          last={index === steps.length - 1}
        />
      ))}
    </ul>
  );
}