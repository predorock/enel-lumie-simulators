import enelLogo from '../../assets/images/enel-logo-white.svg';
import italy from '../../assets/images/italy.svg';
import tondo from '../../assets/images/mezzo-tondo.svg';
import Stepper from '../ui/stepper/Stepper';
import NavigationBar from '../ui/NavigationBar';

export default function PageLayout({ 
  children,
  currentStep = 0,
  title = "Chiedi al cliente di raccontarti qualcosa sulla sua casa",
  showStepper = true,
  showItalyImage = true,
  showNavigation = true,
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
        <div className="col-span-2 bg-primary p-16 relative" role="banner" aria-label="Enel Lumiè Clima Header">
          {/* Logo Section */}
          <div className="flex items-stretch h-6">
            <img src={enelLogo} alt="Enel Lumiè Clima Logo" className="w-auto" />
            <div className="text-white ml-4 border-l"></div>
            <div className="text-white ml-4">Lumiè Clima</div>
          </div>
          
          {/* Title Section */}
          <div className="mt-16 text-white">
            <h1 className="text-white text-2xl mt-4">{title}</h1>
          </div>
          
          {/* Stepper Section */}
          {showStepper && (
            <div className="mt-16">
              <Stepper current={currentStep} />
            </div>
          )}
          
          {/* Italy Image Section */}
          {showItalyImage && (
            <div className="flex mt-32 justify-center items-center">
              <img src={italy} alt="Italy" className="z-10 relative"/>
            </div>
          )}
          
          {/* Background Decoration */}
          <img src={tondo} alt="Tondo" className="absolute bottom-0 right-0 -z-0" />
        </div>
        
        {/* RIGHT CONTENT AREA */}
        <div className="col-span-4 flex flex-col">
          {/* Main Content */}
          <div className={`flex-1 p-16 overflow-y-auto ${className}`}>
            {children}
          </div>
          
          {/* Navigation Bar */}
          {showNavigation && (
            <NavigationBar
              onBack={onBack}
              onNext={onNext}
              backLabel={backLabel}
              nextLabel={nextLabel}
            />
          )}
        </div>
      </div>
    </main>
  );
}
