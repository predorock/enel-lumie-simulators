import full from '../../assets/icons/star/full-star.svg';
import half from '../../assets/icons/star/half-star.svg';
import empty from '../../assets/icons/star/empty-star.svg';

function getIconSrc(type) {
    switch (type) {
        case 'half':
            return half;
        case 'empty':
            return empty;
        default:
            return full;
    }
}

export default function StarIcon({ type = 'full', className = '' }) {
    const iconSrc = getIconSrc(type);
    
    return (
        <img
        src={iconSrc}
        alt={`${type} star`}
        className={`w-6 h-6 ${className}`}
        />
    );
}
