import Dualsplit from "./Dualsplit";
import Monosplit from "./Monosplit";
import Trialsplit from "./Trialsplit";
// Generic Air Conditioning Icon (fallback)
export const AirConditioningIcon = ({
  type = "mono",
  className = "w-6 h-6",
  fillClass = "fill-black"
}) => {
  switch (type) {
    case "dual":
      return <Dualsplit className={className} fillClass={fillClass} />;
    case "trial":
      return <Trialsplit className={className} fillClass={fillClass} />;
    case "mono":
    default:
      return <Monosplit className={className} fillClass={fillClass} />;
  }
};

export default AirConditioningIcon;
