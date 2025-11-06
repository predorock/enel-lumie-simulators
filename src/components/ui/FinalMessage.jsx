
import cn from "classnames";
import IconRenderer from "../icons/IconRenderer";
import Button from "./Button";


import { ClimaImage } from "../clima/ClimaImageRegistry";

export default function FinalMessage({
    title = "",
    email = "",
    className,
    onSend = () => { },
    onPrint = () => { }
}) {


    return (
        <div className={cn("grid grid-cols-2 mx-64 my-auto", className)}>
            <div className="flex flex-col align-center justify-center text-left text-white gap-8">
                <h1 className="text-4xl">{title}</h1>
                <div className="">
                    Il preventivo finale è stato inviato direttamente nella sua casella di posta elettronica all'indirizzo email: <span className="text-base font-enel-bold">{email}</span>
                </div>
                <div className="flex flex-col items-start justify-start gap-2">
                    <div className="">
                        Il cliente necessita di <span className="font-enel-bold">effettuare una nuova simulazione?</span>
                    </div>
                    <Button
                        variant="secondary"
                        icon={<IconRenderer icon="envelope" className="w-4 h-4" />}
                        iconPosition="right"
                        onClick={onSend}
                    >
                        Effettua una nuova simulazione
                    </Button>
                </div>
                <div className="flex flex-col items-start justify-start gap-2">
                    <div className="whitespace-normal md:whitespace-nowrap">
                        Il cliente desidera anche una <span className="font-enel-bold">copia cartacea del preventivo finale?</span>
                    </div>
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
            <ClimaImage src="condizionatore-fuochi" alt="Condizionatore con fuochi" className="w-full h-auto place-self-center" />


        </div>
    );
}
