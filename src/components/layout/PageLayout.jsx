import enelLogo from '../../assets/images/enel-logo-white.svg';
import tondo from '../../assets/images/mezzo-tondo.svg';
import Stepper from '../ui/stepper/Stepper';
import NavigationBar from '../ui/NavigationBar';
import LeftPanelRenderer from '../LeftPanelRenderer';

export default function PageLayout({ 
  children,
  currentStep = 0,
  title = "Chiedi al cliente di raccontarti qualcosa sulla sua casa",
  showStepper = true,
  showNavigation = true,
  leftPanelComponents = [],
  onBack,
  onNext,
  backLabel,
  nextLabel,
  className = ""
}) {
  return (
    <main className="bg-red">
      <div className="grid grid-cols-6 w-full h-screen relative z-10">
        {/* LEFT PANEL - Blue Header */}
        <div className="col-span-2 bg-primary p-12 relative flex flex-col" role="banner" aria-label="Enel Lumiè Clima Header">
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
          <div className="flex-1 flex flex-col justify-between overflow-hidden">
            <LeftPanelRenderer components={leftPanelComponents} />
          </div>
          {/* END Dynamic Content Section */}
          
          {/* Background Decoration */}
          <img src={tondo} alt="Tondo" className="absolute bottom-0 right-0 -z-0" />
        </div>
        
        {/* RIGHT CONTENT AREA */}
        <div className="col-span-4 flex flex-col h-screen">
          {/* Main Content - Scrollable */}
          <div className={`flex-1 p-16 overflow-y-auto ${className}`}>
            {children}
          </div>
          
          {/* Navigation Bar - Fixed at bottom */}
          {showNavigation && (
            <div className="flex-shrink-0">
              <NavigationBar
                onBack={onBack}
                onNext={onNext}
                backLabel={backLabel}
                nextLabel={nextLabel}
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
