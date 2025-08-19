import { useEffect } from 'react';
import AcProductDisplayContainerDemo from './components/demo/AcProductDisplayContainerDemo';
import LoadingSpinnerDemo from './components/demo/LoadingSpinnerDemo';
import PageLayout from './components/layout/PageLayout';
import PageRenderer from './components/PageRenderer';
import useAppStore from './store/useAppStore';

function App() {
  // Get current page data from Zustand store
  const { currentStep, currentPageId, getCurrentPage, initializeStore } = useAppStore();
  const currentPage = getCurrentPage();

  // Initialize store and validation on app start
  useEffect(() => {
    initializeStore();
  }, []); // Empty dependency array - only run once

  // demo trick
  if (window.location.search.includes('demo=products')) {
    return <AcProductDisplayContainerDemo />;
  }

  if (window.location.search.includes('demo=loading')) {
    return <LoadingSpinnerDemo />;
  }

  return (
    <PageLayout
      currentStep={currentStep}
      title={currentPage?.title || "Enel Lumié Verticale Clima"}
      showStepper={true}
      showNavigation={true}
      leftPanelComponents={currentPage?.leftPanelComponents || []}
    >
      <PageRenderer pageId={currentPageId} />
    </PageLayout>
  );
}

export default App;
