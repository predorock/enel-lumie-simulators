import MonoIcon from '../../assets/icons/air-conditioning-mono.svg';
import DualsplitIcon from '../../assets/icons/air-conditioning-dual.svg';
import TrialsplitIcon from '../../assets/icons/air-conditioning-trial.svg';


// Generic Air Conditioning Icon (fallback)
export const AirConditioningIcon = ({ type = "mono", className = "w-6 h-6", color = "currentColor" }) => {
  switch (type) {
    case "dual":
      return <img src={DualsplitIcon} className={className} alt="Dual Split Air Conditioning Icon" />;
    case "trial":
      return <img src={TrialsplitIcon} className={className} alt="Trial Split Air Conditioning Icon" />;
    case "mono":
    default:
      return <img src={MonoIcon} className={className} alt="Air Conditioning Icon" />;
  }
};

export default AirConditioningIcon;
