import { useState } from 'react';
import enelLogo from './assets/images/enel-logo-white.svg'
import italy from './assets/images/italy.svg'
import tondo from './assets/images/mezzo-tondo.svg'

import Stepper from './components/ui/stepper/Stepper';
import SearchInput from './components/ui/SearchInput';
import SelectionIndicator from './components/ui/SelectionIndicator';
import ToggleSwitch from './components/ui/ToggleSwitch';

function App() {

  const page = 0;
  const [searchValue, setSearchValue] = useState("");
  const [selectedOption, setSelectedOption] = useState(0);
  const [isEnelClient, setIsEnelClient] = useState(false);

  const options = [
    "Opzione 1",
    "Opzione 2", 
    "Opzione 3"
  ];

  return (
    <main className='bg-red'>
      <div className="grid grid-cols-6 w-full h-screen relative z-10">
        {/* LEFT HEADER */}
        <div className="col-span-2 bg-primary p-16 relative" role="banner" aria-label="Enel Lumiè Clima Header">
          <div className="flex items-stretch h-6">
            <img src={enelLogo} alt="Enel Lumiè Clima Logo" className="w-auto" />
            <div className="text-white ml-4 border-l"></div>
            <div className="text-white ml-4">Lumiè Clima</div>
          </div>
          <div className="mt-16 text-white">
            <h1 className="text-white text-2xl mt-4">Chiedi al cliente di raccontarti qualcosa sulla sua casa</h1>
          </div>
          <div className='mt-16'>
            <Stepper current={0} />
          </div>
          <div className='flex mt-32 justify-center items-center'>
            <img src={italy} alt="Italy" className='z-10 relative'/>
          </div>
          <img src={tondo} alt="Tondo" className='absolute bottom-0 right-0 -z-0' />
        </div>
        {/* RIGHT CONTENT */}
        <div className="col-span-4 p-16">
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
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
