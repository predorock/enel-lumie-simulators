import { useEffect, useState } from 'react';
import PageLayout from './components/simulator/PageLayout';
import PageRenderer from './components/simulator/PageRenderer';
import BlockingWarningModal from './components/ui/BlockingWarningModal';
import useAppStore from './store/useAppStore';

function App() {
  // Get current page data from Zustand store drd
  const { currentStep, currentPageId, getCurrentPage, initializeStore } = useAppStore();
  const currentPage = getCurrentPage();

  // Check for required URL parameters
  const [hasRequiredParams, setHasRequiredParams] = useState(true);

  // Initialize store and validation on app start
  useEffect(() => {
    const environment = import.meta.env.VITE_ENVIRONMENT;

    // Check URL parameters only in production environments
    // Skip check if environment is 'dev' or 'test'
    if (environment !== 'dev' && environment !== 'test') {
      const urlParams = new URLSearchParams(window.location.search);
      const userId = urlParams.get('userId');
      const accountName = urlParams.get('accountName');

      // Block app if required parameters are missing
      if (!userId || !accountName) {
        setHasRequiredParams(false);
        return; // Don't initialize store if params are missing
      }
    }

    // Initialize store if params are present or if in dev/test mode
    initializeStore();
  }, []); // Empty dependency array - only run once

  // Show blocking modal if required params are missing
  if (!hasRequiredParams) {
    return (
      <BlockingWarningModal
        open={true}
        title="Attenzione!"
        message="Non è consentito procedere. È necessario ripartire da X-Customer per accedere ad Enel Lumiè"
        redirectUrl="https://enelxconsumer.enel.it/partnersso"
        buttonText="Vai a X-Customer"
      />
    );
  }

  return (
    <PageLayout
      pageId={currentPageId}
      currentStep={currentStep}
      title={currentPage?.title}
      showStepper={currentPage?.showStepper}
      showBackgroundDecoration={currentPage?.showBackgroundDecoration}
      showNavigation={currentPage?.showNavigation}
      leftPanelComponents={currentPage?.leftPanelComponents || []}
      navigationOverride={currentPage?.navigationOverride}
      fullPage={currentPage?.fullPage || false}
      autoScrollToTop={currentPage?.autoScrollToTop || false}
    >
      <PageRenderer pageId={currentPageId} />
    </PageLayout>
  );
}

export default App;
