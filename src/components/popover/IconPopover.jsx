import { arrow, autoUpdate, flip, offset, shift, useClick, useDismiss, useFloating, useInteractions } from '@floating-ui/react';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import IconRenderer from '../icons/IconRenderer';


const IconPopover = forwardRef(function IconPopover({
    icon = "info",
    iconClassName = "fill-current",
    popoverContent = null,
    popoverPosition = "top",
    popoverClassName = "",
    disabled = false,
    onClick = null,
    className = "",
}, ref) {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const arrowRef = useRef(null);

    // Expose methods to parent components
    useImperativeHandle(ref, () => ({
        open: () => setIsPopoverOpen(true),
        close: () => setIsPopoverOpen(false),
        toggle: () => setIsPopoverOpen(prev => !prev),
        isOpen: isPopoverOpen
    }));

    // Convert popoverPosition to Floating UI placement
    const getPlacement = (position) => {
        const placements = {
            'top': 'top',
            'bottom': 'bottom',
            'left': 'left',
            'right': 'right'
        };
        return placements[position] || 'top';
    };

    const {
        x,
        y,
        strategy,
        refs,
        context,
        middlewareData,
        placement
    } = useFloating({
        open: isPopoverOpen,
        onOpenChange: setIsPopoverOpen,
        placement: getPlacement(popoverPosition),
        middleware: [
            offset(8), // 8px gap between trigger and popover
            flip(), // Flip to opposite side if no space
            shift({ padding: 8 }), // Shift within viewport with 8px padding
            arrow({ element: arrowRef }) // Arrow positioning
        ],
        whileElementsMounted: autoUpdate
    });

    // Handle clicks and dismiss behavior
    const click = useClick(context);
    const dismiss = useDismiss(context);

    const { getReferenceProps, getFloatingProps } = useInteractions([
        click,
        dismiss
    ]);

    const handleIconClick = (e) => {
        e.stopPropagation();

        if (onClick) {
            onClick(e);
        }

        if (!popoverContent || disabled) {
            return;
        }
    };

    // Get arrow position and styling based on Floating UI's calculations
    const getArrowStyle = () => {
        if (!middlewareData.arrow) return {};

        const { x: arrowX, y: arrowY } = middlewareData.arrow;
        const staticSide = {
            top: 'bottom',
            right: 'left',
            bottom: 'top',
            left: 'right',
        }[placement.split('-')[0]];

        return {
            left: arrowX != null ? `${arrowX}px` : '',
            top: arrowY != null ? `${arrowY}px` : '',
            right: '',
            bottom: '',
            [staticSide]: '-4px', // Half of arrow size (8px / 2)
        };
    };

    const getArrowBorderClasses = () => {
        const side = placement.split('-')[0];
        const borderClasses = {
            top: 'border-b border-r',
            bottom: 'border-t border-l',
            left: 'border-t border-r',
            right: 'border-b border-l',
        };
        return borderClasses[side] || 'border-b border-r';
    };

    return (
        <div className={`relative inline-block ${className}`}>
            <div
                onClick={handleIconClick}
                ref={refs.setReference}
                className={`flex flex-row items-center justify-start cursor-pointer gap-1 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                {...getReferenceProps()}
            >
                <IconRenderer icon={icon} fillClass={iconClassName} onClick={() => console.log('Icon clicked')} />
            </div>

            {/* Popover */}
            {popoverContent && isPopoverOpen && (
                <div
                    ref={refs.setFloating}
                    style={{
                        position: strategy,
                        top: y ?? 0,
                        left: x ?? 0,
                        width: 'max-content',
                    }}
                    className={`z-50 bg-white border border-[#c2cddd] rounded-lg shadow-lg p-3 min-w-[200px] ${popoverClassName}`}
                    {...getFloatingProps()}
                >
                    {/* Arrow */}
                    <div
                        ref={arrowRef}
                        style={getArrowStyle()}
                        className={`absolute w-2 h-2 bg-white border-[#c2cddd] transform rotate-45 ${getArrowBorderClasses()}`}
                    />

                    {/* Content */}
                    <div className="text-sm font-enel">
                        <div className='absolute top-4 right-4 cursor-pointer' onClick={() => setIsPopoverOpen(false)}>
                            <IconRenderer icon="cross" />
                        </div>
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
});

export default IconPopover;