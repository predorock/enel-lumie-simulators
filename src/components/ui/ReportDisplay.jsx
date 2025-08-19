
const ReportDisplay = ({
    data = null,
    className = "",
    ...props
}) => {
    if (!data) {
        return (
            <div className={`p-6 bg-gray-100 rounded-lg ${className}`} {...props}>
                <p className="text-gray-500 font-enel">Nessun dato del report disponibile</p>
            </div>
        );
    }

    return (
        <div className={`p-6 bg-white border border-gray-200 rounded-lg ${className}`} {...props}>
            <h3 className="text-lg font-enel-bold text-[#131416] mb-4">
                Dati della Simulazione
            </h3>

            {/* Display raw JSON data for now - format can be improved when API response structure is defined */}
            <div className="bg-gray-50 p-4 rounded border overflow-auto">
                <pre className="text-xs font-mono text-gray-700 whitespace-pre-wrap">
                    {JSON.stringify(data, null, 2)}
                </pre>
            </div>

            <p className="text-xs text-gray-500 mt-4 font-enel">
                <strong>Nota:</strong> Il formato del report verrà migliorato quando la struttura della risposta API sarà definita.
            </p>
        </div>
    );
};

export default ReportDisplay;
