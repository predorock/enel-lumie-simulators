import { useRef } from 'react';
import IconPopover from '../popover/IconPopover';
import { getPopoverConfig } from '../popover/PopoverContentRegistry';

export default function TextPopover({
    text = null,
    popoverIcon = null,
    popoverConfig = null,
}) {
    const iconPopoverRef = useRef(null);

    const handleTextClick = () => {
        if (iconPopoverRef.current) {
            iconPopoverRef.current.toggle();
        }
    };

    return (
        <div className='flex flex-row items-center justify-start gap-1'>
            <div
                className='font-enel text-base text-secondary underline cursor-pointer'
                onClick={handleTextClick}
            >
                {text}
            </div>
            <IconPopover
                ref={iconPopoverRef}
                icon={popoverIcon || 'info'}
                iconClassName='fill-secondary'
                {...getPopoverConfig(popoverConfig)}
            />
        </div>
    );
}
