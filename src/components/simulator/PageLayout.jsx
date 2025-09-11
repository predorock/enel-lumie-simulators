import enelLogo from '../../assets/images/enel-logo-white.svg';
import tondo from '../../assets/images/mezzo-tondo.svg';
import NavigationBar from '../ui/NavigationBar';
import Stepper from '../ui/stepper/Stepper';
import LeftPanelRenderer from './LeftPanelRenderer';

import cn from 'classnames';

export default function PageLayout({
  children,
  currentStep = 0,
  title = "",
  showStepper = true,
  showNavigation = true,
  showBackgroundDecoration = true,
  leftPanelComponents = [],
  navigationOverride,
  onBack,
  onNext,
  backLabel,
  nextLabel,
  className = "",
  fullPage = false
}) {

  return (
    <main>
      <div className="grid grid-cols-6 w-full h-screen relative z-10">
        {/* LEFT PANEL - Blue Header */}
        <div className={cn('bg-primary p-8 relative flex flex-col', { 'col-span-2': !fullPage, 'col-span-6': fullPage })} role="banner" aria-label="Enel Lumiè Clima Header">
          {/* Logo Section */}
          <div className="flex items-stretch h-6 z-1">
            <img src={enelLogo} alt="Enel Lumiè Clima Logo" className="w-auto" />
            <div className="text-white ml-4 border-l"></div>
            <div className="text-white ml-4 text-2xl">Lumiè Clima</div>
          </div>

          {/* Title Section */}
          <div className="mt-8 text-white z-1">
            <h1 className="text-white text-2xl mt-4">{title}</h1>
          </div>

          {/* Stepper Section */}
          {showStepper && (
            <div className="mt-8 z-1">
              <Stepper current={currentStep} />
            </div>
          )}

          {/* Dynamic Content Section */}
          <div className="flex flex-col flex-1 overflow-hidden">
            <LeftPanelRenderer components={leftPanelComponents} />
          </div>
          {/* END Dynamic Content Section */}

          {/* Background Decoration */}
          {showBackgroundDecoration && (
            <img src={tondo} alt="Tondo" className="absolute bottom-0 right-0 -z-0" />
          )}
        </div>

        {/* RIGHT CONTENT AREA */}
        {!fullPage &&
          <div className="col-span-4 flex flex-col h-screen">
            {/* Main Content - Scrollable */}
            <div className={`flex-1 p-12 overflow-y-auto ${className}`}>
              {children}
            </div>

            {/* Validation Errors - Fixed above navigation */}
            {/* <div className="flex-shrink-0 px-16">
            <ValidationErrors />
          </div> */}

            {/* Navigation Bar - Fixed at bottom */}
            {showNavigation && (
              <div className="flex-shrink-0">
                <NavigationBar
                  navigationOverride={navigationOverride}
                  onBack={onBack}
                  onNext={onNext}
                  backLabel={backLabel}
                  nextLabel={nextLabel}
                />
              </div>
            )}
          </div>
        }
      </div>
    </main>
  );
}
