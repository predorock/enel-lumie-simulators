import IconPopover from '../icons/IconPopover';
import IconRenderer from '../icons/IconRenderer';
import { getPopoverConfig } from '../icons/PopoverContentRegistry';

const InfoBanner = ({
  title,
  description,
  icon = 'info',
  variant = 'info', // 'info', 'warning', 'success', 'error'
  popoverConfigKey = null,
  className = ''
}) => {
  // Define variant styles based on your project's color palette
  const variantStyles = {
    info: {
      bg: 'bg-blue-50',
      border: 'border-primary-lighter',
      iconColor: 'fill-primary-lighter'
    },
    warning: {
      bg: 'bg-warning-light',
      border: 'border-warning',
      iconColor: 'fill-warning'
    },
    success: {
      bg: 'bg-tertiary-light',
      border: 'border-tertiary',
      iconColor: 'fill-tertiary'
    },
    error: {
      bg: 'bg-error-light',
      border: 'border-error',
      iconColor: 'fill-error'
    }
  };

  const currentVariant = variantStyles[variant] || variantStyles.info;

  const popoverConfig = getPopoverConfig(popoverConfigKey);

  return (
    <div
      className={`${currentVariant.bg} box-border content-stretch flex flex-col gap-4 items-start justify-center px-4 py-3 relative rounded-lg w-full ${className}`}
    >
      {/* Border overlay */}
      <div
        className={`absolute border-2 ${currentVariant.border} border-solid inset-0 pointer-events-none rounded-lg`}
      />

      {/* Content */}
      <div className="box-border content-stretch flex flex-col gap-4 items-start justify-center p-0 relative shrink-0 w-full">
        <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0 w-full">
          <div className="basis-0 box-border content-stretch flex flex-row gap-4 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">

            {/* Icon */}
            {icon && (
              <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0">
                <div className={`relative shrink-0 w-6 h-6 ${currentVariant.iconColor}`}>
                  {
                    popoverConfig ? (
                      <IconPopover icon={icon} {...popoverConfig} />
                    ) : (
                      <IconRenderer icon={icon} fillClass={currentVariant.iconColor} />
                    )
                  }
                </div>
              </div>
            )}

            {/* Text Content */}
            <div className="basis-0 box-border content-stretch flex flex-col gap-4 grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0">
              <div className="box-border content-stretch flex flex-col gap-0.5 items-start justify-center p-0 relative shrink-0 w-full">
                <div className="flex flex-col font-enel justify-center leading-none not-italic relative shrink-0 text-black text-sm text-left w-full">
                  <p className="leading-[21px]">
                    {title && (
                      <span className="font-enel-bold font-bold not-italic">
                        {title}
                        {description && <br />}
                      </span>
                    )}
                    {description && (
                      <span className="font-enel font-normal">
                        {description}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBanner;
