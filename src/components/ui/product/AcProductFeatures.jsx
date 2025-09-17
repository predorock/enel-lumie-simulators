import IconRenderer from "../../icons/IconRenderer";

const ACFeatureRow = ({ key, feature, isEnabled }) => {
    return (
        <div key={key} className="flex flex-row gap-[5px] items-start justify-start p-0 relative shrink-0 w-full">
            <div className="relative shrink-0 size-4">
                {isEnabled ? (
                    <div className='size-4 rounded-full bg-primary-light flex items-center justify-center'>
                        <IconRenderer icon="checkMark" className="w-3 h-3" fillClass="fill-white" />
                    </div>
                ) : (
                    <div className='size-4 rounded-full bg-slate-300 flex items-center justify-center'>
                        <IconRenderer icon="cross" className="w-3 h-3" fillClass="fill-white" />
                    </div>
                )}
            </div>
            <div className={`basis-0 grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#272c34] text-[12px] text-left ${isEnabled
                ? 'font-enel-bold'
                : 'font-enel line-through'
                }`}>
                <p className="block leading-[18px]">{feature}</p>
            </div>
        </div>
    );
}

export default function AcProductFeatures({ features }) {
    return (
        <div className="flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
            {features.map((feature, index) => {
                const isEnabled = typeof feature === 'object' ? feature.enabled : true;
                const featureName = typeof feature === 'object' ? feature.name : feature;
                const featureKey = typeof feature === 'object' ? feature.key : `feature-${index}`;

                return (
                    <ACFeatureRow key={featureKey} feature={featureName} isEnabled={isEnabled} />
                );
            })}
        </div>
    );
}