import { useEffect, useRef, useState } from 'react';
import useAppStore from '../../store/useAppStore';

const AutocompleteInput = ({
    value = '',
    onChange,
    placeholder = 'Type to search...',
    label = '',
    className = '',
    maxHeight = '200px',
    loadDataAction = 'loadCities', // Default action to load data
    stateSlice = 'cityState', // Default state slice
    minSearchChars = 3, // Minimum characters before showing suggestions
    searchPlaceholder = 'Cerca città...'
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState(value);
    const [selectedValue, setSelectedValue] = useState(value);
    const [focusedIndex, setFocusedIndex] = useState(-1);
    const inputRef = useRef(null);
    const dropdownRef = useRef(null);
    const containerRef = useRef(null);
    const optionRefs = useRef([]);

    // Get data and loading state from store slice
    const store = useAppStore();
    const stateSliceData = store[stateSlice] || {};
    const options = stateSliceData.cities || [];
    const isLoading = stateSliceData.loading || false;
    const error = stateSliceData.error || null;

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false);
                setFocusedIndex(-1);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Update search term when value prop changes
    useEffect(() => {
        setSearchTerm(value);
        setSelectedValue(value);
    }, [value]);

    // Load data when search term meets minimum criteria
    useEffect(() => {
        if (searchTerm.length >= minSearchChars && options.length === 0 && !isLoading && store[loadDataAction]) {
            store[loadDataAction]();
        }
    }, [searchTerm, minSearchChars, options.length, isLoading, store, loadDataAction]);

    // Filter options based on search term
    const filteredOptions = searchTerm.length >= minSearchChars
        ? options.filter(option =>
            option.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
            option.value.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : [];

    // Show dropdown when there are filtered options and no valid selection is made
    useEffect(() => {
        // Don't show dropdown if we have a valid selected value that matches the current search term
        const hasValidSelection = selectedValue && searchTerm &&
            options.some(option => option.value === selectedValue && option.label === searchTerm);

        if (hasValidSelection) {
            setIsOpen(false);
            setFocusedIndex(-1);
            return;
        }

        const shouldShowDropdown = searchTerm.length >= minSearchChars && filteredOptions.length > 0;
        setIsOpen(shouldShowDropdown);
        if (!shouldShowDropdown) {
            setFocusedIndex(-1);
        }
    }, [searchTerm, filteredOptions.length, minSearchChars, selectedValue, options]); const handleInputChange = (e) => {
        const newValue = e.target.value;
        setSearchTerm(newValue);
        setSelectedValue(''); // Clear selection when typing
        setFocusedIndex(-1);

        // Call onChange with empty value when typing (since we only allow selection from suggestions)
        if (onChange) {
            onChange('');
        }
    };

    const handleSelect = (optionValue, optionLabel) => {
        setSearchTerm(optionLabel);
        setSelectedValue(optionValue);
        setIsOpen(false);
        setFocusedIndex(-1);

        if (onChange) {
            onChange(optionValue);
        }

        // Blur the input to remove focus
        if (inputRef.current) {
            inputRef.current.blur();
        }
    }; const handleKeyDown = (e) => {
        if (!isOpen || filteredOptions.length === 0) {
            return;
        }

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                setFocusedIndex(prev =>
                    prev < filteredOptions.length - 1 ? prev + 1 : 0
                );
                break;
            case 'ArrowUp':
                e.preventDefault();
                setFocusedIndex(prev =>
                    prev > 0 ? prev - 1 : filteredOptions.length - 1
                );
                break;
            case 'Enter':
                e.preventDefault();
                if (focusedIndex >= 0 && focusedIndex < filteredOptions.length) {
                    const selectedOption = filteredOptions[focusedIndex];
                    handleSelect(selectedOption.value, selectedOption.label);
                }
                break;
            case 'Escape':
                setIsOpen(false);
                setFocusedIndex(-1);
                if (inputRef.current) {
                    inputRef.current.blur();
                }
                break;
            default:
                break;
        }
    };

    // Scroll focused option into view
    useEffect(() => {
        if (focusedIndex >= 0 && optionRefs.current[focusedIndex]) {
            optionRefs.current[focusedIndex].scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
            });
        }
    }, [focusedIndex]);

    const hasValue = searchTerm && searchTerm !== '';
    const displayLabel = label || placeholder;
    const showMinCharsHint = searchTerm.length > 0 && searchTerm.length < minSearchChars;

    return (
        <div className={`text-input relative ${className}`} ref={containerRef}>
            {/* Floating Label */}
            {displayLabel && (
                <label
                    className={`absolute font-enel left-2 text-sm transition-all duration-200 pointer-events-none ${hasValue || inputRef.current === document.activeElement
                        ? 'top-0.5 text-grey-light text-xs'
                        : 'top-2.5 text-grey-light'
                        }`}
                >
                    {displayLabel}
                </label>
            )}

            {/* Input Field */}
            <input
                ref={inputRef}
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                className={`font-enel box-border w-full h-10 px-2 border border-grey-light rounded text-sm text-black bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${hasValue || inputRef.current === document.activeElement ? 'pt-4 pb-1' : 'py-2'
                    }`}
                placeholder=""
            />

            {/* Minimum characters hint */}
            {showMinCharsHint && (
                <div className="absolute top-full left-0 right-0 z-10 mt-1">
                    <div className="bg-white border border-grey-light rounded shadow-[0px_2px_8px_0px_rgba(102,119,144,0.2)] p-3">
                        <div className="text-xs text-grey-light text-center">
                            Digita almeno {minSearchChars} caratteri
                        </div>
                    </div>
                </div>
            )}

            {/* Dropdown List */}
            {isOpen && (
                <div className="absolute top-full left-0 right-0 z-10 mt-1">
                    <div
                        ref={dropdownRef}
                        className="bg-white box-border border border-grey-light rounded shadow-[0px_2px_8px_0px_rgba(102,119,144,0.2)] py-1 w-full transition-all duration-200"
                        style={{ maxHeight }}
                    >
                        <div className="overflow-y-auto" style={{ maxHeight }}>
                            {error ? (
                                <div className="px-3 py-4 text-sm text-red-600">
                                    Errore nel caricamento: {error}
                                </div>
                            ) : isLoading && searchTerm.length >= minSearchChars ? (
                                <div className="px-3 py-6 text-center">
                                    <div className="text-sm text-grey-light">
                                        <div className="font-medium">Caricamento città...</div>
                                        <div className="text-xs mt-1 opacity-75">Attendere prego</div>
                                    </div>
                                </div>
                            ) : filteredOptions.length === 0 ? (
                                <div className="px-3 py-4 text-center">
                                    <div className="text-sm text-grey-light">
                                        <div className="font-medium">Nessun risultato trovato</div>
                                        <div className="text-xs mt-1 opacity-75">
                                            Prova con un termine di ricerca diverso
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                filteredOptions.map((option, index) => (
                                    <div
                                        key={option.value}
                                        ref={(el) => (optionRefs.current[index] = el)}
                                        onClick={() => handleSelect(option.value, option.label)}
                                        className={`
                      box-border flex flex-row gap-4 h-10 items-center justify-start px-3 py-2 cursor-pointer transition-colors
                      ${index === focusedIndex
                                                ? 'bg-white-light text-secondary'
                                                : 'bg-white text-black hover:bg-white-light'
                                            }
                    `}
                                    >
                                        <div className="basis-0 grow flex flex-col gap-0.5 items-start justify-center">
                                            <div className="leading-[15px] text-[13px] text-left truncate w-full">
                                                {option.label}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AutocompleteInput;
