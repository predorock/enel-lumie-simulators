
import { priceFormatter } from './priceFormatter';

export const PriceDisplay = ({ value, currency = 'EUR', locale = 'it-IT', className }) => {

    const price = priceFormatter(value, currency, locale);

    return (
        <div className={`font-enel-bold ${className}`}>
            {price}
        </div>
    );
};
