
// Spinner SVG components based on Figma design
const SpinnerBackground = () => (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle
            cx="40"
            cy="40"
            r="36"
            stroke="#e5e7eb"
            strokeWidth="8"
            fill="none"
        />
    </svg>
);

const SpinnerArc = () => (
    <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-spin"
    >
        <path
            d="M40 4C59.33 4 76 20.67 76 40"
            stroke="#0047cc"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
        />
    </svg>
);

/**
 * Loading Spinner Component following ENEL design system
 * Replicates the exact Figma design with animated spinner and customizable text
 */
const LoadingSpinner = ({
    text = "Attendi ancora qualche secondo",
    size = "large", // small, medium, large
    centered = false, // New prop to center in full page
    className = "",
    ...props
}) => {
    // Size variants
    const sizeClasses = {
        small: "size-12", // 48px
        medium: "size-16", // 64px  
        large: "size-20" // 80px (default from Figma)
    };

    const textSizeClasses = {
        small: "text-lg", // 18px
        medium: "text-2xl", // 24px
        large: "text-[32px]" // 32px (from Figma)
    };

    const gapClasses = {
        small: "gap-4", // 16px
        medium: "gap-6", // 24px
        large: "gap-8" // 32px (from Figma)
    };

    // Base container classes
    const baseClasses = `box-border content-stretch flex flex-col ${gapClasses[size]} items-center p-0 relative`;

    // Conditional centering classes
    const containerClasses = centered
        ? `${baseClasses} justify-center min-h-150 w-full fixed inset-0 bg-white z-50`
        : `${baseClasses} justify-start w-full`;

    return (
        <div
            className={`${containerClasses} ${className}`}
            {...props}
        >
            {/* Spinner Container */}
            <div className={`relative shrink-0 ${sizeClasses[size]}`}>
                {/* Background Circle */}
                <div className="absolute inset-0">
                    <SpinnerBackground />
                </div>
                {/* Animated Arc */}
                <div className="absolute inset-0">
                    <SpinnerArc />
                </div>
            </div>

            {/* Loading Text */}
            {text && (
                <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full">
                    <div className={`font-enel-bold leading-[0] not-italic relative shrink-0 text-[#272c34] ${textSizeClasses[size]} text-center tracking-[0.4px] w-full`}>
                        <p className={`block ${size === 'large' ? 'leading-[40px]' : size === 'medium' ? 'leading-[30px]' : 'leading-[24px]'}`}>
                            {text}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LoadingSpinner;
