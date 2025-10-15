import cn from 'classnames';
import IconPopover from '../popover/IconPopover';
import DescriptionBox from './DescriptionBox';
import Divider from './Divider';

import { getPopoverConfig } from '../popover/PopoverContentRegistry';

export default function DescriptionBoxTooltip({
  popoverIcon = null,
  popoverConfig = null,
  ...props
}) {

  const { className, popoverIcon: pIcon, popoverConfig: pConfig, ...boxProps } = props;

  return (
    <div className={cn("flex flex-row", className)}>
      <DescriptionBox {...boxProps} />
      <Divider orientation="vertical" className='px-4' />
      <div className='flex flex-row justify-center'>
        <IconPopover
          icon={popoverIcon || pIcon || 'info'}
          iconClassName='fill-secondary'
          {...getPopoverConfig(popoverConfig)}
        />
      </div>
    </div>
  );
}
