import EcoIcon from '../icons/EcoIcon';
import SavingsIcon from '../icons/SavingsIcon';

// Icon registry for benefits
const BENEFIT_ICONS = {
    savings: SavingsIcon,
    eco: EcoIcon,
};

/**
 * BenefitsCard Component
 * 
 * Displays a benefit card with icon, title, and rich text content
 * Matches the exact Figma design with proper ENEL styling
 * 
 * @param {string} title - Card title (e.g., "Benefici economici")
 * @param {string|JSX} content - Rich text content with highlighting support
 * @param {string} icon - Icon type ('savings' or 'eco')
 * @param {string} className - Additional CSS classes
 */
export default function BenefitsCard({
    title = "",
    content = "",
    icon = null,
    className = ""
}) {
    // Don't render if no content
    if (!title && !content) {
        return null;
    }

    // Get icon component
    const IconComponent = icon ? BENEFIT_ICONS[icon] : null;

    return (
        <div className={`bg-white relative rounded-2xl shrink-0 w-full ${className}`}>
            {/* Card content */}
            <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start overflow-clip p-4 relative w-full">
                <div className="bg-white content-stretch flex gap-4 items-center justify-start relative shrink-0 w-full">
                    <div className="basis-0 content-stretch flex gap-4 grow items-center justify-start min-h-px min-w-px relative shrink-0">

                        {/* Icon container */}
                        {IconComponent && (
                            <div className="box-border content-stretch flex gap-2 items-center justify-center p-2 relative rounded-lg shrink-0">
                                <IconComponent className="size-6" />
                            </div>
                        )}

                        {/* Title and content container */}
                        <div className="basis-0 content-stretch flex flex-col gap-1 grow items-start justify-start leading-[0] min-h-px min-w-px not-italic relative shrink-0">

                            {/* Title */}
                            {title && (
                                <div className="font-enel-bold relative shrink-0 text-secondary text-base w-full">
                                    <p className="leading-4">{title}</p>
                                </div>
                            )}

                            {/* Content */}
                            {content && (
                                <div className="font-enel relative shrink-0 text-gray-700 text-sm w-full">
                                    <div className="leading-[21px]">
                                        {typeof content === 'string' ? (
                                            <span dangerouslySetInnerHTML={{ __html: content }} />
                                        ) : (
                                            content
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Card shadow */}
            <div
                aria-hidden="true"
                className="absolute border-0 border-transparent border-solid inset-0 pointer-events-none rounded-2xl shadow-[0px_2px_8px_0px_rgba(102,119,144,0.2)]"
            />
        </div>
    );
}
