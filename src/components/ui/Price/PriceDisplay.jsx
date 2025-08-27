
import { priceFormatter } from './priceFormatter';

const PriceDisplay = ({ value, className }) => {

    const price = priceFormatter(value);

    return (
        <div className={`font-enel-bold text-black ${className}`}>
            {price}
        </div>
    );
};

export default PriceDisplay;
