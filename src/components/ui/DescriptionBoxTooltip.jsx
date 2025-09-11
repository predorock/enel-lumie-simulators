import IconPopover from '../icons/IconPopover';
import DescriptionBox from './DescriptionBox';
import Divider from './Divider';

import { getPopoverConfig } from '../icons/PopoverContentRegistry';

export default function DescriptionBoxTooltip({
  popoverIcon = null,
  popoverConfig = null,
  ...props
}) {

  const { popoverIcon: pIcon, popoverConfig: pConfig, ...boxProps } = props;

  return (
    <div className="flex flex-row">
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
