import enelLogo from './assets/images/enel-logo-white.svg'
import italy from './assets/images/italy.svg'
import tondo from './assets/images/mezzo-tondo.svg'

import Stepper from './components/ui/stepper/Stepper';

function App() {

  const page = 0;

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
          <div className='mt-32'>
            <img src={italy} alt="Italy" className='z-10 relative'/>
          </div>
          <img src={tondo} alt="Tondo" className='absolute bottom-0 right-0 -z-0' />
        </div>
        {/* RIGHT CONTENT */}
        <div className="col-span-4">
          CONTENT
        </div>
      </div>
    </main>
  )
}

export default App
