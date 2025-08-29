import { useEffect } from 'react';
import DemoWrapper from './components/demo/DemoWrapper';
import PageLayout from './components/simulator/PageLayout';
import PageRenderer from './components/simulator/PageRenderer';
import useAppStore from './store/useAppStore';

function App() {
  // Get current page data from Zustand store
  const { currentStep, currentPageId, getCurrentPage, initializeStore } = useAppStore();
  const currentPage = getCurrentPage();

  // Initialize store and validation on app start
  useEffect(() => {
    initializeStore();
  }, []); // Empty dependency array - only run once

  // Demo mode - only available in development
  //drd
  if (import.meta.env.DEV && window.location.search.includes('demo=')) {
    return <DemoWrapper />;
  }

  return (
    <PageLayout
      currentStep={currentStep}
      title={currentPage?.title}
      showStepper={currentPage?.showStepper}
      showBackgroundDecoration={currentPage?.showBackgroundDecoration}
      showNavigation={currentPage?.showNavigation}
      leftPanelComponents={currentPage?.leftPanelComponents || []}
      navigationOverride={currentPage?.navigationOverride}
      fullPage={currentPage?.fullPage || false}
    >
      <PageRenderer pageId={currentPageId} />
    </PageLayout>
  );
}

export default App;
