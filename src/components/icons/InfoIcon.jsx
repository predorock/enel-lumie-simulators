import { useEffect, useRef, useState } from 'react';
import infoIcon from '../../assets/icons/info-icon-blue.svg';
import infoWarnIcon from '../../assets/icons/info-icon.svg';

const ICONS = {
    info: infoIcon,
    warning: infoWarnIcon,
};

export default function InfoIcon({
    variant = "info",
    className = "w-6 h-6",
    popoverContent = null,
    popoverPosition = "top",
    popoverClassName = "",
    disabled = false,
    onClick = null
}) {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const iconRef = useRef(null);
    const popoverRef = useRef(null);

    const icon = ICONS[variant] || infoIcon;

    // Close popover when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                iconRef.current &&
                !iconRef.current.contains(event.target) &&
                popoverRef.current &&
                !popoverRef.current.contains(event.target)
            ) {
                setIsPopoverOpen(false);
            }
        };

        if (isPopoverOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isPopoverOpen]);

    const handleIconClick = (e) => {
        e.stopPropagation();

        if (onClick) {
            onClick(e);
        }

        if (popoverContent && !disabled) {
            setIsPopoverOpen(!isPopoverOpen);
        }
    };

    const getPopoverPositionClasses = () => {
        const baseClasses = "absolute z-50 bg-white border border-[#c2cddd] rounded-lg shadow-lg p-3 min-w-[200px] max-w-[300px]";

        switch (popoverPosition) {
            case "top":
                return `${baseClasses} bottom-full left-1/2 transform -translate-x-1/2 mb-2`;
            case "bottom":
                return `${baseClasses} top-full left-1/2 transform -translate-x-1/2 mt-2`;
            case "left":
                return `${baseClasses} right-full top-1/2 transform -translate-y-1/2 mr-2`;
            case "right":
                return `${baseClasses} left-full top-1/2 transform -translate-y-1/2 ml-2`;
            default:
                return `${baseClasses} bottom-full left-1/2 transform -translate-x-1/2 mb-2`;
        }
    };

    const getArrowClasses = () => {
        const arrowBase = "absolute w-3 h-3 bg-white border-[#c2cddd] transform rotate-45";

        switch (popoverPosition) {
            case "top":
                return `${arrowBase} top-full left-1/2 -translate-x-1/2 -mt-1.5 border-b border-r`;
            case "bottom":
                return `${arrowBase} bottom-full left-1/2 -translate-x-1/2 -mb-1.5 border-t border-l`;
            case "left":
                return `${arrowBase} left-full top-1/2 -translate-y-1/2 -ml-1.5 border-t border-r`;
            case "right":
                return `${arrowBase} right-full top-1/2 -translate-y-1/2 -mr-1.5 border-b border-l`;
            default:
                return `${arrowBase} top-full left-1/2 -translate-x-1/2 -mt-1.5 border-b border-r`;
        }
    };

    return (
        <div className="relative inline-block">
            <img
                ref={iconRef}
                src={icon}
                className={`${className} ${popoverContent && !disabled ? 'cursor-pointer hover:opacity-80 transition-opacity' : ''}`}
                alt={`${variant.charAt(0).toUpperCase() + variant.slice(1)} Icon`}
                onClick={handleIconClick}
            />

            {/* Popover */}
            {popoverContent && isPopoverOpen && (
                <div
                    ref={popoverRef}
                    className={`${getPopoverPositionClasses()} ${popoverClassName}`}
                >
                    {/* Arrow */}
                    <div className={getArrowClasses()}></div>

                    {/* Content */}
                    <div className="text-sm font-enel">
                        {typeof popoverContent === 'string' ? (
                            <p className="text-black leading-relaxed">{popoverContent}</p>
                        ) : (
                            popoverContent
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}