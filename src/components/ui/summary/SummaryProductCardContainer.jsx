import SummaryProductCard from './SummaryProductCard';

export default function SummaryProductCardContainer({ entries }) {
    console.log(entries);
    return (
        <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full">
            {
                entries.map((entry, index) => (
                    <SummaryProductCard
                        key={entry.id || index}
                        data={entry}
                    />
                ))
            }
        </div>
    );
}
