import StepIndicator from '../ui/StepIndicator';
import DemoWrapper from './DemoWrapper';

const StepIndicatorDemo = () => {
    const sampleSteps = [
        { id: 'step1', label: 'Scegli prodotto #1' },
        { id: 'step2', label: 'Step 2' },
        { id: 'step3', label: 'Step 3' }
    ];

    return (
        <DemoWrapper title="Step Indicator Demo">
            <div className="space-y-8">
                {/* Step 1 Selected (from Figma) */}
                <div>
                    <h3 className="text-lg font-enel-bold mb-4">Step 1 Selected (Figma Design)</h3>
                    <StepIndicator
                        steps={sampleSteps}
                        currentStep={1}
                        selectedStep={1}
                        showConnectors={true}
                        containerBackground={true}
                    />
                </div>

                {/* Active on step 1 */}
                <div>
                    <h3 className="text-lg font-enel-bold mb-4">Step 1 Active</h3>
                    <StepIndicator steps={sampleSteps} currentStep={1} />
                </div>

                {/* Active on step 2 */}
                <div>
                    <h3 className="text-lg font-enel-bold mb-4">Step 2 Active</h3>
                    <StepIndicator steps={sampleSteps} currentStep={2} />
                </div>

                {/* Selected step with past steps */}
                <div>
                    <h3 className="text-lg font-enel-bold mb-4">Step 2 Selected with Past Step</h3>
                    <StepIndicator
                        steps={sampleSteps}
                        currentStep={2}
                        selectedStep={2}
                        showConnectors={true}
                        containerBackground={true}
                    />
                </div>                {/* With different labels */}
                <div>
                    <h3 className="text-lg font-enel-bold mb-4">Custom Labels</h3>
                    <StepIndicator
                        steps={[
                            { id: 'config', label: 'Configurazione' },
                            { id: 'product', label: 'Scegli prodotto' },
                            { id: 'summary', label: 'Riepilogo' }
                        ]}
                        currentStep={2}
                    />
                </div>

                {/* More steps */}
                <div>
                    <h3 className="text-lg font-enel-bold mb-4">More Steps</h3>
                    <StepIndicator
                        steps={[
                            { id: '1', label: 'Inizio' },
                            { id: '2', label: 'Configurazione' },
                            { id: '3', label: 'Prodotto' },
                            { id: '4', label: 'Servizi' },
                            { id: '5', label: 'Riepilogo' }
                        ]}
                        currentStep={3}
                    />
                </div>
            </div>
        </DemoWrapper>
    );
};

export default StepIndicatorDemo;