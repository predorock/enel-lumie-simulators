
import { priceFormatter } from './priceFormatter';

const PriceDisplay = ({ value }) => {

    const price = priceFormatter(value);

    return (
        <div className="text-lg font-enel-bold text-black">
            {price}
        </div>
    );
};

export default PriceDisplay;
