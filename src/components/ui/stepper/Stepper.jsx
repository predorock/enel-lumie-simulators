import Step from "./Step";
import checkmark from "../../../assets/icons/checkmark.svg";

const defaultSteps = [
    {
        copy: "La casa",
    },
    {
        copy: "Scelta del modello",
    },
    {
        copy: "Informazioni sull'installazione",
    },
    {
        copy: "Componenti aggiuntivi",
    }
]



export default function Stepper({ current }) {
  return (
    <ul className="flex flex-wrap">
      {defaultSteps.map((step, index) => (
        <Step
          key={index}
          number={index + 1}
          copy={step.copy}
          icon={current > index ? checkmark : undefined}
          active={current === index}
          past={current > index}
          last={index === defaultSteps.length - 1}
        />
      ))}
    </ul>
  );
}