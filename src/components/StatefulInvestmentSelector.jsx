import useAppStore from '../store/useAppStore';
import InvestimentSelector from "./ui/InvestmentSelector";

const defaultOptions = [
    {
        id: "entry",
        name: "Più conveniente",
        value: "entry",
        icon: "empty"
    },
    {
        id: "medium",
        name: "Miglior rapporto qualità/prezzo",
        value: "medium",
        icon: "half"
    },
    {
        id: "premium",
        name: "Top di gamma",
        value: "premium",
        icon: "full"
    }
];

const StatefulInvestmentSelector = ({
    options = defaultOptions,
    ...props
}) => {
    const { products } = useAppStore();
    const { setFilter, resetFilter } = products;
    const properties = {
        ...props,
        options: options,
        selectedOption: products?.filterBy?.value,
        onOptionChange: (newValue) => {
            if (newValue) {
                setFilter('category', newValue);
            } else {
                resetFilter();
            }
        }
    }
    return <InvestimentSelector {...properties} />;
}

export default StatefulInvestmentSelector;