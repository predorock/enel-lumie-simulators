import GlossaryLink from '../ui/GlossaryLink';
import DemoWrapper from './DemoWrapper';

export default function GlossaryLinkDemo() {
    return (
        <DemoWrapper title="GlossaryLink Component Demo">
            <div className="flex flex-col gap-8 p-8 bg-white rounded-lg">

                {/* Default usage */}
                <div className="flex flex-col gap-2">
                    <h3 className="font-enel-bold text-lg">Default (no section)</h3>
                    <GlossaryLink text="Vai al glossario" />
                </div>

                {/* With specific section */}
                <div className="flex flex-col gap-2">
                    <h3 className="font-enel-bold text-lg">Opens BTU section</h3>
                    <GlossaryLink
                        text="Scopri cosa sono i BTU"
                        sectionId="btu"
                    />
                </div>

                {/* Different sections */}
                <div className="flex flex-col gap-2">
                    <h3 className="font-enel-bold text-lg">Different sections</h3>
                    <div className="flex flex-col gap-3">
                        <GlossaryLink
                            text="Tipologia di installazione"
                            sectionId="tipologia-installazione"
                        />
                        <GlossaryLink
                            text="Info sul lavaggio dell'impianto"
                            sectionId="lavaggio-impianto"
                        />
                        <GlossaryLink
                            text="Cosa sono le canalizzazioni?"
                            sectionId="canalizzazioni"
                        />
                        <GlossaryLink
                            text="Funzionalità climatizzatori"
                            sectionId="funzionalita-climatizzatori"
                        />
                    </div>
                </div>

                {/* Custom icon */}
                <div className="flex flex-col gap-2">
                    <h3 className="font-enel-bold text-lg">With different icons</h3>
                    <div className="flex flex-col gap-3">
                        <GlossaryLink
                            text="Glossario con icona help"
                            icon="help"
                            sectionId="btu"
                        />
                        <GlossaryLink
                            text="Glossario con icona question"
                            icon="question"
                            sectionId="canalizzazioni"
                        />
                    </div>
                </div>

                {/* Without icon */}
                <div className="flex flex-col gap-2">
                    <h3 className="font-enel-bold text-lg">Without icon</h3>
                    <GlossaryLink
                        text="Solo testo, nessuna icona"
                        icon={null}
                        sectionId="btu"
                    />
                </div>

                {/* Custom styling */}
                <div className="flex flex-col gap-2">
                    <h3 className="font-enel-bold text-lg">Custom styling</h3>
                    <GlossaryLink
                        text="Testo più grande"
                        sectionId="btu"
                        className="text-xl"
                    />
                </div>

                {/* Inline usage example */}
                <div className="flex flex-col gap-2">
                    <h3 className="font-enel-bold text-lg">Inline in paragraph</h3>
                    <p className="font-enel text-base">
                        Per maggiori informazioni sui BTU,{' '}
                        <GlossaryLink
                            text="consulta il glossario"
                            sectionId="btu"
                            className="inline"
                        />
                        {' '}per una spiegazione dettagliata.
                    </p>
                </div>

            </div>
        </DemoWrapper>
    );
}
