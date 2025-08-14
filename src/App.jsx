import React, { useEffect } from 'react';
import PageLayout from './components/layout/PageLayout';
import PageRenderer from './components/PageRenderer';
import useAppStore from './store/useAppStore';
import ACFeaturesDisplayDemo from './components/demo/ACFeaturesDisplayDemo';

function App() {
  // Get current page data from Zustand store
  const { currentStep, currentPageId, getCurrentPage, initializeStore } = useAppStore();
  const currentPage = getCurrentPage();

  // Initialize store and validation on app start
  useEffect(() => {
    initializeStore();
  }, []); // Empty dependency array - only run once

  // Temporarily show the demo for testing
  if (window.location.search.includes('demo=acfeatures')) {
    return <ACFeaturesDisplayDemo />;
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
