
import cn from 'classnames';
import { executeAction } from '../../store/executeAction';
import useAppStore from '../../store/useAppStore';
import IconRenderer from '../icons/IconRenderer';
import Button from './Button';
import GlossaryLink from './GlossaryLink';
/**
 * NavigationBar Component with Override Support
 * 
 * Provides navigation buttons with configurable behavior per page.
 * Supports validation bypass for custom actions and icons.
 * 
 * @param {function} onBack - Custom back button action (overrides default)
 * @param {function} onNext - Custom next button action (overrides default)
 * @param {string} backLabel - Default back button label
 * @param {string} nextLabel - Default next button label
 * @param {boolean} showBack - Show/hide back button (default behavior)
 * @param {boolean} showNext - Show/hide next button (default behavior)
 * @param {object} navigationOverride - Per-page navigation configuration
 * @param {string} className - Additional CSS classes
 * 
 * navigationOverride structure:
 * {
 *   backButton: {
 *     label?: string,              // Button text
 *     icon?: string | ReactElement, // Icon name from registry or custom element
 *     iconPosition?: 'left' | 'right', // Icon position
 *     variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'primary-light',
 *     action?: function | string,   // Custom action function or string identifier
 *     show?: boolean,              // Override visibility
 *     disabled?: boolean,          // Override disabled state
 *     className?: string,          // Additional CSS classes
 *     disableValidation?: boolean  // Skip validation for icon/variant
 *   },
 *   nextButton: { ...same structure }
 * }
 * 
 * Usage examples:
 * 
 * // Basic usage (uses defaults)
 * <NavigationBar />
 * 
 * // Custom labels and callbacks
 * <NavigationBar 
 *   backLabel="Annulla" 
 *   nextLabel="Salva"
 *   onNext={() => saveForm()}
 * />
 * 
 * // Complete override with validation
 * <NavigationBar 
 *   navigationOverride={{
 *     backButton: {
 *       label: "Chiudi",
 *       icon: "close",
 *       variant: "outline",
 *       action: () => closeSidebar()
 *     },
 *     nextButton: {
 *       label: "Conferma",
 *       icon: "checkMark",
 *       action: () => submitData()
 *     }
 *   }}
 * />
 * 
 * // Override with validation disabled
 * <NavigationBar 
 *   navigationOverride={{
 *     nextButton: {
 *       label: "Custom Action",
 *       action: "customStringAction",
 *       disableValidation: true
 *     }
 *   }}
 * />
 */

// Back arrow icon component
const BackIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9.5 3L5.5 8L9.5 13"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function NavigationBar({
  onBack,
  onNext,
  backLabel = "Indietro",
  nextLabel = "Avanti",
  showBack = true,
  showNext = true,
  navigationOverride = null,
  className = "",
  ...props
}) {
  // Use specific selectors to avoid unnecessary re-renders
  const canGoPrev = useAppStore(state => state.canGoPrev());
  const canGoNext = useAppStore(state => state.canGoNext());
  const prevStep = useAppStore(state => state.prevStep);
  const nextStep = useAppStore(state => state.nextStep);
  const store = useAppStore();

  // Function to get nested action from store using dot notation
  const getActionFromStore = (actionPath) => {
    if (!actionPath || typeof actionPath !== 'string') return null;

    return actionPath.split('.').reduce((obj, key) => {
      return obj && obj[key] !== undefined ? obj[key] : null;
    }, store);
  };

  // Button configuration resolver
  const resolveButtonConfig = (overrideConfig, defaultConfig) => {
    if (!overrideConfig) return defaultConfig;

    const shouldValidate = !overrideConfig.disableValidation;

    if (overrideConfig.disableValidation) {
      console.warn('⚠️ Navigation validation disabled for button:', overrideConfig);
    }

    return {
      label: overrideConfig.label !== undefined ? overrideConfig.label : defaultConfig.label,
      icon: overrideConfig.icon !== undefined ? overrideConfig.icon : defaultConfig.icon,
      iconPosition: overrideConfig.iconPosition !== undefined ? overrideConfig.iconPosition : defaultConfig.iconPosition,
      variant: overrideConfig.variant !== undefined ? overrideConfig.variant : defaultConfig.variant,
      action: overrideConfig.action !== undefined ? overrideConfig.action : defaultConfig.action,
      show: overrideConfig.show !== undefined ? overrideConfig.show : defaultConfig.show,
      disabled: overrideConfig.disabled !== undefined ? overrideConfig.disabled : defaultConfig.disabled,
      className: overrideConfig.className || defaultConfig.className
    };
  };

  // Resolve button configurations
  const backConfig = resolveButtonConfig(
    navigationOverride?.backButton,
    {
      label: backLabel,
      icon: 'back',
      iconPosition: 'left',
      variant: 'secondary',
      action: onBack || prevStep,
      show: showBack && canGoPrev,
      disabled: !canGoPrev,
      className: ''
    }
  );

  const nextConfig = resolveButtonConfig(
    navigationOverride?.nextButton,
    {
      label: nextLabel,
      icon: null,
      iconPosition: 'right',
      variant: 'primary',
      action: onNext || nextStep,
      show: showNext,
      disabled: !canGoNext,
      className: 'px-24'
    }
  );

  const handleBack = () => {
    executeAction(store, backConfig.action);
  };

  const handleNext = () => {
    executeAction(store, nextConfig.action);
  };

  // Helper function to render icon
  const renderIcon = (iconConfig) => {
    if (!iconConfig) return null;

    if (iconConfig === 'back') {
      return <BackIcon />;
    }

    if (typeof iconConfig === 'string') {
      return <IconRenderer icon={iconConfig} className="w-4 h-4" />;
    }

    return iconConfig; // Assume it's a React element
  };

  return (
    <div
      className={cn(
        "bg-white border-t border-[#c2cddd] px-16 py-6",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-between gap-4 max-w-[9999px] w-full">
        {/* Left side - Glossary link */}
        <GlossaryLink text="Vai al glossario" icon="info" />

        {/* Right side - Navigation buttons */}
        <div className="flex items-center gap-4">
          {backConfig.show && (
            <Button
              variant={backConfig.variant}
              size="md"
              disabled={backConfig.disabled}
              onClick={handleBack}
              icon={renderIcon(backConfig.icon)}
              iconPosition={backConfig.iconPosition}
              className={backConfig.className}
            >
              {backConfig.label}
            </Button>
          )}

          {nextConfig.show && (
            <Button
              variant={nextConfig.variant}
              size="md"
              disabled={nextConfig.disabled}
              onClick={handleNext}
              icon={renderIcon(nextConfig.icon)}
              iconPosition={nextConfig.iconPosition}
              className={nextConfig.className}
            >
              {nextConfig.label}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
