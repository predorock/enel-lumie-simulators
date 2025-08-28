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
        <div className={`flex flex-row gap-4`}>
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
