import { useState } from 'react';
import GlossaryModal from '../ui/GlossaryModal';

const glossaryData = [
    {
        id: 'tipologia-installazione',
        title: 'Tipologia di installazione',
        content: [
            {
                question: 'Cos\'è la predisposizione?',
                answer: 'La predisposizione è la preparazione dell\'impianto per l\'installazione del climatizzatore.'
            },
            {
                question: 'Quando serve la predisposizione?',
                answer: 'Serve quando si installa un nuovo climatizzatore in una stanza non ancora predisposta.'
            }
        ]
    },
    {
        id: 'btu',
        title: 'BTU',
        content: [
            {
                question: 'Cos\'è il BTU?',
                answer: 'Il BTU (British Thermal Unit) è l\'unità di misura della potenza di raffreddamento/riscaldamento di un climatizzatore.'
            }
        ]
    },
    {
        id: 'lavaggio-impianto',
        title: 'Lavaggio dell\'impianto',
        content: [
            {
                question: 'Cos\'è il lavaggio dell\'impianto?',
                answer: 'È un servizio di pulizia e sanificazione completa dell\'impianto di climatizzazione.'
            }
        ]
    },
    {
        id: 'canalizzazioni',
        title: 'Canalizzazioni',
        content: [
            {
                question: 'Cosa sono le canalizzazioni?',
                answer: 'Le canalizzazioni sono condotti che distribuiscono l\'aria condizionata in più ambienti da un\'unica unità.'
            }
        ]
    },
    {
        id: 'funzionalita-climatizzatori',
        title: 'Funzionalità climatizzatori',
        content: [
            {
                question: 'Cos\'è il voice control?',
                answer: 'È la possibilità di controllare l\'attivazione e regolazione del clima con comandi vocali.'
            },
            {
                question: 'Cos\'è la funzionalità sleep?',
                answer: 'Prevede un funzionamento del clima a bassissimo rumore, conciliabile con le ore del sonno.'
            },
            {
                question: 'Cos\'è la funzionalità turbo?',
                answer: 'La funzionalità permette un rinfrescamento/riscaldamento dell\'ambiente più rapidamente.'
            },
            {
                question: 'Cos\'è lo ionizzatore?',
                answer: 'Funzionalità per purificare l\'aria e migliorarne la qualità diminuendo la presenza di allergeni.'
            },
            {
                question: 'Cos\'è la funzione smart diagnosis?',
                answer: 'Consente la verifica delle impostazioni di configurazione e installazione del climatizzatore, aiuta a tenere sotto controllo eventuali malfunzionamenti e a visualizzare i relativi codici errore, rendendo ancora più immediato il contatto con l\'assistenza.'
            }
        ]
    }
];

const GlossaryModalDemo = () => {
    const [open, setOpen] = useState(true);
    const [defaultOpenItem, setDefaultOpenItem] = useState(null);

    const openWithSpecificItem = (itemId) => {
        setDefaultOpenItem(itemId);
        setOpen(true);
    };

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-enel-bold mb-8">Glossary Modal Demo</h1>

                <div className="bg-white p-6 rounded-lg shadow mb-6">
                    <h2 className="text-xl font-enel-bold mb-4">Open Modal with Specific Accordion</h2>
                    <div className="flex flex-wrap gap-3">
                        <button
                            onClick={() => openWithSpecificItem('tipologia-installazione')}
                            className="bg-primary-light text-white px-4 py-2 rounded hover:bg-primary-lighter transition-colors"
                        >
                            Open: Tipologia di installazione
                        </button>
                        <button
                            onClick={() => openWithSpecificItem('btu')}
                            className="bg-primary-light text-white px-4 py-2 rounded hover:bg-primary-lighter transition-colors"
                        >
                            Open: BTU
                        </button>
                        <button
                            onClick={() => openWithSpecificItem('funzionalita-climatizzatori')}
                            className="bg-primary-light text-white px-4 py-2 rounded hover:bg-primary-lighter transition-colors"
                        >
                            Open: Funzionalità climatizzatori
                        </button>
                        <button
                            onClick={() => setOpen(true)}
                            className="bg-secondary text-white px-4 py-2 rounded hover:opacity-90 transition-opacity"
                        >
                            Open: No Default Accordion
                        </button>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-xl font-enel-bold mb-4">Component Props</h2>
                    <pre className="bg-gray-100 p-4 rounded overflow-auto">
                        {`<GlossaryModal 
    open={open}
    onOpenChange={setOpen}
    defaultOpenItem="funzionalita-climatizzatori"
    items={glossaryData}
/>`}
                    </pre>
                </div>
            </div>

            <GlossaryModal
                open={open}
                onOpenChange={setOpen}
                defaultOpenItem={defaultOpenItem}
                items={glossaryData}
            />
        </div>
    );
};

export default GlossaryModalDemo;
