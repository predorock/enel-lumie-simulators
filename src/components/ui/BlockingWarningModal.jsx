import * as Dialog from '@radix-ui/react-dialog';

/**
 * BlockingWarningModal - Modal di blocco per accesso non autorizzato
 * 
 * Mostra un messaggio di avviso quando l'applicazione non può essere avviata
 * perché mancano i parametri URL obbligatori (userId e accountName).
 * 
 * @component
 * @param {Object} props
 * @param {boolean} props.open - Controlla la visibilità del modal
 * @param {string} [props.title="Attenzione!"] - Titolo del modal
 * @param {string} [props.message] - Messaggio personalizzato da mostrare
 * @param {string} [props.redirectUrl="https://enelxconsumer.enel.it/partnersso"] - URL di reindirizzamento
 * @param {string} [props.buttonText="Vai a X-Customer"] - Testo del pulsante
 * 
 * @example
 * <BlockingWarningModal 
 *   open={!hasRequiredParams}
 *   message="È necessario ripartire da X-Customer per accedere ad Enel Lumiè"
 * />
 */
const BlockingWarningModal = ({
    open = true,
    title = "Attenzione!",
    message = "Non è consentito procedere. È necessario ripartire da X-Customer per accedere ad Enel Lumiè",
    redirectUrl = "https://enelxconsumer.enel.it/partnersso",
    buttonText = "Vai a X-Customer"
}) => {
    return (
        <Dialog.Root open={open}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50" />
                <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white rounded-lg shadow-lg max-w-md w-full p-6">
                    <Dialog.Title className="text-xl font-roobert-bold text-gray-900 mb-4">
                        {title}
                    </Dialog.Title>
                    <Dialog.Description className="text-gray-700 font-roobert mb-6">
                        {message}
                    </Dialog.Description>
                    <div className="flex justify-end gap-3">
                        <a
                            href={redirectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-6 py-3 bg-[#0066CC] text-white font-roobert-bold rounded-lg hover:bg-[#0052A3] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:ring-offset-2"
                        >
                            {buttonText}
                        </a>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default BlockingWarningModal;
