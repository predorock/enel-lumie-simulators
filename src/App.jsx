import PageLayout from './components/layout/PageLayout';
import PageRenderer from './components/PageRenderer';
import useAppStore from './store/useAppStore';

function App() {
  // Get current page data from Zustand store
  const { currentStep, getCurrentPage } = useAppStore();
  const currentPage = getCurrentPage();

  return (
    <PageLayout 
      currentStep={currentStep}
      title={currentPage?.title || "Applicazione ENEL"}
      showStepper={true}
      showNavigation={true}
      leftPanelComponents={currentPage?.leftPanelComponents || []}
    >
      <PageRenderer step={currentStep} />
    </PageLayout>
  );
}

export default App;
