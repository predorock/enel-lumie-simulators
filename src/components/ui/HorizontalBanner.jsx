import IconRenderer from '../icons/IconRenderer';

/**
 * HorizontalBanner Component
 * 
 * Individual banner card with icon, title, and content
 * Matches the exact Figma design with white background and subtle shadow
 * 
 * @param {string} title - Banner title (e.g., "Benefici economici")
 * @param {string|JSX} content - Description text content
 * @param {string} icon - Icon type for IconRenderer (e.g., 'savings', 'eco')
 * @param {string} className - Additional CSS classes
 */
export default function HorizontalBanner({
    title = "",
    content = "",
    icon = "",
    className = ""
}) {
    // Don't render if no content
    if (!title && !content) {
        return null;
    }

    return (
        <div className={`bg-white rounded-2xl shadow-[0px_2px_8px_0px_rgba(102,119,144,0.2)] w-full ${className}`}>
            <div className="flex gap-4 items-center p-4">
                {/* Icon container */}
                {icon && (
                    <div className="flex items-center justify-center p-2 rounded-lg shrink-0">
                        <IconRenderer
                            icon={icon}
                            className="w-6 h-6"
                        />
                    </div>
                )}

                {/* Content container */}
                <div className="flex flex-col gap-1 flex-grow min-w-0">
                    {/* Title */}
                    {title && (
                        <h3 className="font-enel-bold text-base leading-4 text-secondary">
                            {title}
                        </h3>
                    )}

                    {/* Content */}
                    {content && (
                        <div className="font-enel text-[#272c34] text-sm leading-[21px]">
                            {typeof content === 'string' ? (
                                <div
                                    dangerouslySetInnerHTML={{ __html: content }}
                                />
                            ) : (
                                content
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
