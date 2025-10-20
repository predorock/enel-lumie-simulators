import Checkbox from "../Checkbox";

const DisclaimerSection = ({ text }) => {
    return (
        <p
            className="font-enel-light text-sm text-slate-900 leading-normal"
            dangerouslySetInnerHTML={{ __html: text }}
        />
    );
};

const CheckedDisclaimerContainer = ({ title, subtitle, note, className = '', sections = [] }) => {
    return (
        <div className={`${className}`}>
            <div className="flex flex-col gap-1 items-start mb-4">
                {title && <h3 className="font-enel-bold text-lg text-slate-900">{title}</h3>}
                {subtitle && <p className="font-enel text-sm text-slate-900">{subtitle}</p>}
            </div>
            <div className={`flex flex-col gap-4 text-base mb-4`}>
                {sections.map((section, index) => {

                    const isChecked = section.checked || false;
                    const isDisabled = section.disabled || false;
                    const onChange = section.onChange || (() => { console.log('Checkbox changed'); });

                    return (
                        <div key={index} className="flex items-center gap-6">
                            <Checkbox onChange={(event) => { onChange(event, section) }} checked={isChecked} disabled={isDisabled} />
                            <DisclaimerSection text={section.text} />
                        </div>
                    );
                })}
            </div>
            {note && <div className="font-enel-bold text-base text-secondary">
                {note}
            </div>}
        </div>
    );
};

export default CheckedDisclaimerContainer;
