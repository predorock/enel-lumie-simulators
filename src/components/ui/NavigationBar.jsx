import cn from 'classnames';
import Button from './Button';
import useAppStore from '../../store/useAppStore';

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
  className = "",
  ...props 
}) {
  // Use specific selectors to avoid unnecessary re-renders
  const canGoPrev = useAppStore(state => state.canGoPrev());
  const canGoNext = useAppStore(state => state.canGoNext());
  const prevStep = useAppStore(state => state.prevStep);
  const nextStep = useAppStore(state => state.nextStep);

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      prevStep();
    }
  };

  const handleNext = () => {
    if (onNext) {
      onNext();
    } else {
      nextStep();
    }
  };

  return (
    <div
      className={cn(
        "bg-white border-t border-[#c2cddd] px-16 py-6",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-end gap-4 max-w-[9999px] w-full">
        {showBack && canGoPrev && (
          <Button
            variant="secondary"
            size="md"
            disabled={!canGoPrev}
            onClick={handleBack}
            icon={<BackIcon />}
            iconPosition="left"
          >
            {backLabel}
          </Button>
        )}
        
        {showNext && (
          <Button
            variant="primary"
            size="md"
            disabled={!canGoNext}
            onClick={handleNext}
            className="px-10"
          >
            {nextLabel}
          </Button>
        )}
      </div>
    </div>
  );
}
