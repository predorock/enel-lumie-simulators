import infoIcon from '../../assets/icons/info-icon.svg';

export default function InfoIcon({ className = "w-6 h-6" }) {
    return <img src={infoIcon} className={className} alt="Info Icon" />;
}