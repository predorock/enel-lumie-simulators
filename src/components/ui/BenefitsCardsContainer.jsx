import BenefitsCard from './BenefitsCard';

/**
 * BenefitsCardsContainer Component
 * 
 * Container for multiple benefit cards with the gray background
 * Matches the exact Figma design layout
 * 
 * @param {Array} benefits - Array of benefit objects with {title, content, icon}
 * @param {string} className - Additional CSS classes
 */
export default function BenefitsCardsContainer({
    benefits = [],
    className = ""
}) {
    // Don't render if no benefits
    if (!benefits || benefits.length === 0) {
        return null;
    }

    return (
        <div className={`bg-gray-100 box-border content-stretch flex flex-col gap-4 items-start justify-start p-4 relative rounded-3xl w-full ${className}`}>
            {benefits.map((benefit, index) => (
                <BenefitsCard
                    key={benefit.id || index}
                    title={benefit.title}
                    content={benefit.content}
                    icon={benefit.icon}
                />
            ))}
        </div>
    );
}
