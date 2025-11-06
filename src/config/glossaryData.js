// Glossary data for the ENEL Lumiè Verticale Clima application
// This data is used by the GlossaryModal component

export const glossaryData = [
    {
        id: 'tipologia-installazione',
        title: 'Tipologia di installazione',
        content: [
            {
                question: "Cos'è l'installazione con impianto già predisposto",
                answer: `<p>L'impianto è già predisposto quando sono presenti e funzionanti le seguenti voci:</p>
<ol>
<li>Collegamenti fra unità interna ed unità esterna di cavi elettrici, di segnale e tubazioni in rame con refrigerante (solitamente all'interno di canaline in PVC o sottotraccia);</li>
<li>Presenza di una presa di corrente per il collegamento dell'unità esterna.</li>
</ol>`
            },
            {
                question: "Cos'è l'installazione con impianto da predisporre",
                answer: `Caso in cui serve la posa in opera completa di quanto sopra o anche l'adattamento dell'impianto presente e consiste nell'esecuzione delle seguenti prestazioni:<br>
• Installazione dell'unità interna e della/e unità esterna/e fino ad una distanza di 3 metri tra le stesse;<br>
• Foro di diametro fino a 80 mm, su parete in laterizio di spessore fino a 400 mm;<br>
• Fornitura e posa in opera di canaline anti-UVA in PVC rigido antiurto per una distanza massima di 3 metri tra ogni unità interna e l'unità esterna;<br>
• Fornitura e posa in opera di tubazione frigorifera in rame coibentato per impianti di refrigerazione ad espansione diretta e scarico condensa per una lunghezza massima di 3 metri tra unità interna e unità esterna;<br>
• Fornitura e posa in opera eventuali curve ad angolo, compresi accessori in PVC;<br>
• Fornitura e posa in opera del cavo di segnale ed elettrico di collegamento tra unità interna ed esterna per una lunghezza massima di 3 metri.`
            }
        ]
    },
    {
        id: 'btu',
        title: 'BTU',
        content: [
            {
                question: 'Cosa sono i BTU?',
                answer: "È l'unità di misura per indicare la potenza di un sistema di riscaldamento o raffreddamento."
            },
            {
                question: 'Come scegliere la potenza del climatizzatore?',
                answer: `<p>Un valore più alto di BTU indica una maggiore capacità del dispositivo di riscaldare o raffreddare un ambiente, e viene calcolato in base alla sua superficie, esposizione solare, isolamento e numero di persone nell'ambiente. Per scegliere correttamente i BTU del climatizzatore basta effettuare un calcolo moltiplicando le dimensioni della stanza da climatizzare con un coefficiente standard (K) di 340.</p>
<p>Di seguito un esempio:</p>
<div style="background-color: rgba(194, 205, 221, 0.24); padding: 8px; margin-top: 8px;">
<p style="margin: 0;"><strong>30m<sup>2</sup></strong> <span style="font-size: 12px;">(metratura stanza)</span> <strong>x 340</strong> <span style="font-size: 12px;">(K)</span> <strong>= 10.200 BTU</strong></p>
</div>`
            }
        ]
    },
    {
        id: 'lavaggio-impianto',
        title: "Lavaggio dell'impianto",
        content: [
            {
                question: "Che cos'è il lavaggio dell'impianto?",
                answer: "Il lavaggio dell'impianto viene effettuato per eliminare tutti residui del vecchio gas refrigerante all'interno delle tubazioni in rame già presenti. Il lavaggio è composto da due fasi: la prima dove viene utilizzato un liquido detergente, mentre la successiva prevede l'impiego di azoto per rimuovere le impurità."
            },
            {
                question: "Perché è importante effettuare il lavaggio?",
                answer: "È importante per salvaguardare il funzionamento delle macchine."
            },
            {
                question: "Quando è importante effettuare il lavaggio?",
                answer: "È sempre consigliato soprattutto in caso di canalizzazioni installate da diversi anni."
            }
        ]
    },
    {
        id: 'canalizzazioni',
        title: 'Canalizzazioni',
        content: [
            {
                question: "Cosa sono le canalizzazioni?",
                answer: "Le canalizzazioni sono quelle tubazioni in rame che collegano le unità esterne con quelle interne e che permettono il passaggio del liquido refrigerante."
            },
            {
                question: "Quali sono le distanze massime per l'installazione dell'impianto?",
                answer: `<ul>
<li>Dualpslit: ogni unità interna (split) deve essere installata a una distanza massima di 17 metri dall'unità esterna (motore);</li>
<li>Trialsplit: ogni unità interna (split) deve essere installata a una distanza massima di 22 metri dall'unità esterna (motore).</li>
</ul>`
            },
            {
                question: "Come fare a calcolare quanti moduli occorrono?",
                answer: `<p>Ogni modulo prevede una canalizzazione extra di lunghezza pari a 6 m; per il calcolo dei moduli è quindi necessario:</p>
<ol>
<li>identificare il percorso delle canalizzazioni che uniscono unità esterne con quelle interne e relativa lunghezza (NB ogni curva da 90° deve essere considerata come un metro lineare);</li>
<li>Sottrarre le lunghezze previste nell'offerta (3 metri per i mono, 4 metri per i dual e 6 metri per i trial);</li>
<li>Dividere i metri rimanenti per 6, la lunghezza del modulo aggiuntivo.</li>
</ol>`
            },
            {
                question: "Quanti moduli/metri sono inclusi nel prezzo?",
                answer: `<p>All'interno del prezzo non sono compresi metri di canalizzazione. In caso sia necessario aggiungere dei metri rispetto all'impianto attuale è possibile selezionare:</p>
<ol>
<li>Moduli di predisposizione: 3 metri per offerta mono, 4 metri per le offerte dual e 6 metri trial;</li>
<li>Moduli di canalizzazione aggiuntiva da 6 metri ciascuno.</li>
</ol>`
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

export default glossaryData;
