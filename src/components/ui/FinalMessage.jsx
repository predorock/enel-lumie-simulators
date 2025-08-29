import tondo from '../../assets/images/tondo-completo.svg';
import IconRenderer from "../icons/IconRenderer";
import Button from "./Button";

import acFuochi from '../../assets/images/condizionatore-fuochi.svg';

export default function FinalMessage({ title = "", onSend = () => { }, onPrint = () => { } }) {
    return (
        <div className="grid grid-cols-2 mx-64">
            <img src={tondo} alt="Tondo" className="absolute bottom-0 left-50 -z-0" />
            <div className="flex flex-col align-center justify-center text-left text-white">
                <h1 className="text-4xl">{title}</h1>
                <div className="mt-8 flex justify-center gap-4">
                    Se si decide di inviare al cliente il preventivo finale, questi verranno recapitati direttamente nella sua casella di posta elettronica. Il risultato del preventivo sarà inviato all'indirizzo email: mario.rossi@email.com.
                </div>
                <div className="flex items-center justify-start my-4">
                    <Button
                        variant="secondary"
                        icon={<IconRenderer icon="envelope" className="w-4 h-4" />}
                        iconPosition="right"
                        onClick={onSend}
                    >
                        Invia Preventivo finale al cliente
                    </Button>
                </div>
                <div className="mt-8">
                    Il cliente desidera anche una copia cartacea del preventivo finale?
                </div>
                <div className="flex items-center justify-start my-4">
                    <Button
                        variant="outline-white"
                        icon={<IconRenderer icon="reader" className="w-4 h-4" />}
                        iconPosition="right"
                        onClick={onPrint}
                    >
                        Stampa preventivo finale
                    </Button>
                </div>
            </div>
            <div>
                <img src={acFuochi} alt="Condizionatore Fuochi" className="w-full h-auto" />
            </div>


        </div>
    );
}
