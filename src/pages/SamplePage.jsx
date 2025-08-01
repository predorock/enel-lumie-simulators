import { useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import SearchInput from '../components/ui/SearchInput';
import ToggleSwitch from '../components/ui/ToggleSwitch';

export default function SamplePage() {
  const [searchValue, setSearchValue] = useState("");
  const [isEnelClient, setIsEnelClient] = useState(false);

  return (
    <PageLayout 
      currentStep={0}
      title="Chiedi al cliente di raccontarti qualcosa sulla sua casa"
      showStepper={true}
      showItalyImage={true}
    >
      <div className="space-y-8">
        <h2 className="text-2xl font-bold mb-8">Cerca punto vendita</h2>
        
        <SearchInput 
          placeholder="Nome punto vendita"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        
        {/* Toggle Switch */}
        <div className="mt-12">
          <ToggleSwitch
            label="Si tratta di un cliente Enel?"
            checked={isEnelClient}
            onChange={setIsEnelClient}
            size="md"
          />
        </div>
        
        {/* Additional content can go here */}
        <div className="mt-16">
          <p className="text-gray-600">
            This is a sample page using the reusable PageLayout component.
            Add your page-specific content here.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
