const PricingDisclaimer = ({ className = '' }) => {
    return (
        <div className={`text-sm space-y-3 ${className}`}>
            <p className="font-enel text-gray-700 leading-relaxed">
                <span className="font-enel-bold">* Il prezzo visualizzato può variare in base alla regione in cui si trova la tua casa.</span>{' '}
                Non preoccuparti: il sopralluogo tecnico-commerciale (per la verifica di fattibilità dell'installazione) e l'installazione sono inclusi nel prezzo.
            </p>

            <p className="font-enel text-gray-700 leading-relaxed">
                <span className="font-enel-bold">** Sono disponibili diverse modalità di finanziamento.</span>{' '}
                Assicurati di informare il cliente sui requisiti di accesso alle agevolazioni, il periodo di validità e le spese ammissibili. Consulta la normativa di riferimento e offrigli un supporto diretto, fornendogli tutte le informazioni necessarie, INCLUSI EVENTUALI IVA E TAEG APPLICATI AL FINANZIAMENTO. Ricorda di suggerire al cliente di richiedere il documento informazioni europee di base sul credito ai consumatori (SECCI) e una copia del contratto, così potrà prendere una decisione informata sui costi e sulle condizioni.
            </p>
        </div>
    );
};

export default PricingDisclaimer;
