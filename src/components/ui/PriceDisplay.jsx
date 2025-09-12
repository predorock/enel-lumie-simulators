import { priceFormatter } from '../../utils/priceFormatter';

function PriceDisplay({ value, currency = 'EUR', locale = 'it-IT', className }) {
    const price = priceFormatter(value, currency, locale);
    return (
        <div className={`${className}`}>
            {price}
        </div>
    );
}

export default PriceDisplay;
