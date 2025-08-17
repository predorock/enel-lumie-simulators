import checkIcon from "../../assets/icons/checkmark.svg";

const CheckMarkIcon = ({ className = "w-6 h-6" }) => {
    return <img src={checkIcon} className={className} alt="Checkmark Icon" />;
};

export default CheckMarkIcon;
