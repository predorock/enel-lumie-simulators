const DisclaimerSection = ({ text }) => {
    return (
        <p
            className="font-enel text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: text }}
        />
    );
};

const DisclaimerContainer = ({ className = '', sections = [] }) => {
    return (
        <div className={`text-xs space-y-3 ${className}`}>
            {sections.map((section, index) => (
                <DisclaimerSection key={index} text={section} />
            ))}
        </div>
    );
};

export default DisclaimerContainer;
