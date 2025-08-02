import infoWarnIcon from '../../assets/icons/info-icon.svg';
import infoIcon from '../../assets/icons/info-icon-blue.svg';

const ICONS = {
    info: infoIcon,
    warning: infoWarnIcon,
};

export default function InfoIcon({
    variant = "info",
    className = "w-6 h-6"
}) {
    const icon = ICONS[variant] || infoIcon;

    return (
        <img
            src={icon}
            className={className}
            alt={`${variant.charAt(0).toUpperCase() + variant.slice(1)} Icon`}
        />
    );
}