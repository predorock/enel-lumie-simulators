import useAppStore from "../../store/useAppStore";


//capitalize the first letter that is not a number
// E.g. "2 monosplit" becomes "2 Monosplit"
const capitalizeFirstLetter = (str) => {
    return str.replace(/^\d*\s*[a-zA-Z]/, (match) => match.toUpperCase());
}

/**
 * Create suggestion text like "2 Monosplit e 1 dualsplit"
 * If a type has 0 quantity, it is omitted.
 * If all types are 0, the text is empty.
 * If the parts are 2, they are joined with " e ".
 * If more than 2, all but the last are joined with ", " and the last with " e ".
 */
const getSuggestionText = (suggestion) => {
    if (!suggestion) return '';

    const parts = [];
    if (suggestion.monosplit && suggestion.monosplit > 0) {
        parts.push(`${suggestion.monosplit} monosplit`);
    }
    if (suggestion.dualsplit && suggestion.dualsplit > 0) {
        parts.push(`${suggestion.dualsplit} dualsplit`);
    }
    if (suggestion.trialsplit && suggestion.trialsplit > 0) {
        parts.push(`${suggestion.trialsplit} trialsplit`);
    }

    parts[0] = capitalizeFirstLetter(parts[0]);

    if (parts.length === 0) return '';

    if (parts.length === 1) return parts[0];

    if (parts.length === 2) return parts.join(' e ');

    // More than 2 parts
    return parts.slice(0, -1).join(', ') + ' e ' + parts[parts.length - 1];
}


const AcAdviceBanner = ({ className }) => {

    const rooms = useAppStore((state) => state.formData.rooms);
    const coverageArea = useAppStore((state) => state.formData.coverageArea);
    /**
     * @suggestion is an object like { monosplit: 2, dualsplit: 1, trialsplit: 0 }
     */
    const suggestion = useAppStore((state) => state.formData.suggestion);

    if (!rooms || !coverageArea || !suggestion) return null;

    const suggestionText = getSuggestionText(suggestion);

    return (
        <div className={`flex flex-col items-start gap-2 p-4 border-2 rounded-md border-blue-500 bg-blue-50 text-base text-black ${className} font-enel`}>
            <div className="font-enel-bold">
                Il cliente deve climatizzare {rooms} stanze per un totale di {coverageArea}m² di superficie. Consiglia questa soluzione:
            </div>
            <div className="font-enel-bold text-primary-lighter">
                {suggestionText || ''}
            </div>
            <div className>
                Ricorda di controllare la fattibilità delle installazioni degli split e delle macchine esterne, analizzando la planimetria dell’abitazione del cliente e la possibilità di installazione dei motori.
            </div>
        </div>
    )
}

export default AcAdviceBanner;