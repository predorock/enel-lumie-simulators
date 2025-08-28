import cn from 'classnames';
import IconRenderer from '../icons/IconRenderer';
/**
 * BenefitsCard Component
 * 
 * Custom implementation with variant support:
 * - Green and blue header variants
 * - White body with description text
 * - Rounded corners and proper spacing
 * 
 * @param {string} title - Card title (e.g., "Migliore comfort abitativo")
 * @param {string|JSX} content - Description text content (fallback if no children)
 * @param {React.ReactNode} children - Child components (takes precedence over content)
 * @param {string} icon - Icon type ('house', 'lightning', or 'euro')
 * @param {string} variant - Color variant ('green' or 'blue')
 * @param {string} className - Additional CSS classes
 */
export default function BenefitsCard({
    title = "",
    subtitle = "",
    content = "",
    children,
    icon = "",
    variant = "green",
    className = ""
}) {
    // Don't render if no content and no children
    if (!title && !content && !children) {
        return null;
    }

    // Define variant styles
    const variants = {
        green: {
            header: "bg-tertiary", // Green background
            iconBg: "bg-[rgba(255,255,255,0.1)]"
        },
        blue: {
            header: "bg-blue-600", // Blue background
            iconBg: "bg-[rgba(255,255,255,0.1)]"
        }
    };

    const currentVariant = variants[variant] || variants.green;

    return (
        <div className={cn(
            "w-full bg-white rounded-2xl shadow-sm overflow-hidden",
            className
        )}>
            {/* Header section with variant color */}
            <div className={cn("px-4 py-6 flex items-center gap-3", currentVariant.header)}>
                {/* White icon */}
                {icon && (
                    <div className={cn("flex items-center justify-center p-4 rounded-full", currentVariant.iconBg)}>
                        <IconRenderer icon={icon} className="w-6 h-6 text-white opacity-100" />
                    </div>
                )}

                {/* White title */}
                <div className='flex flex-col w-full'>
                    <h3 className="text-white font-enel-bold text-xl leading-tight">
                        {title}
                    </h3>
                    <p className="text-white font-enel-light text-md leading-relaxed">
                        {subtitle}
                    </p>
                </div>
            </div>

            {/* White body section */}
            <div className="px-4 py-3">
                {/* Children take precedence over content prop */}
                {children ? (
                    children
                ) : (
                    <p className="text-gray-900 font-enel text-sm leading-relaxed">
                        {typeof content === 'string' ? (
                            <span dangerouslySetInnerHTML={{ __html: content }} />
                        ) : (
                            content
                        )}
                    </p>
                )}
            </div>
        </div>
    );
}
