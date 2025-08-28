import HorizontalBanner from './HorizontalBanner';

/**
 * HorizontalBannerContainer Component
 * 
 * Container for multiple horizontal banners with gray background
 * Matches the exact Figma design layout with proper spacing and background
 * 
 * @param {Array} banners - Array of banner objects with {title, content, icon}
 * @param {string} className - Additional CSS classes
 */
export default function HorizontalBannerContainer({
    banners = [],
    className = ""
}) {
    // Don't render if no banners
    if (!banners || banners.length === 0) {
        return null;
    }

    return (
        <div className={`grey-box p-4 flex flex-col gap-4 w-full ${className}`}>
            {banners.map((banner, index) => (
                <HorizontalBanner
                    key={banner.id || index}
                    title={banner.title}
                    content={banner.content}
                    icon={banner.icon}
                />
            ))}
        </div>
    );
}
