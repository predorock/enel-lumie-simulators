import { useEffect, useRef, useState } from 'react';
import useAppStore from '../../store/useAppStore';

// Checkmark icon for selected items
const CheckmarkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Expand More Icon for dropdown arrow
const ExpandMoreIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6l4 4 4-4" stroke="#667790" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Loading Spinner Icon
const LoadingIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-spin">
    <path d="M8 1.5A6.5 6.5 0 108 14.5" stroke="#667790" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const AsyncSelect = ({
  value = '',
  onChange,
  placeholder = 'Select an option',
  label = '',
  className = '',
  maxHeight = '200px',
  loadDataAction = 'loadCities', // Default action to load data
  stateSlice = 'cityState', // Default state slice
  searchable = true, // Enable search functionality
  searchPlaceholder = 'Cerca città...'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef(null);
  const containerRef = useRef(null);
  const searchInputRef = useRef(null);

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
        setSearchTerm('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Update selected value when prop changes
  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  // Load data when component mounts or dropdown opens
  useEffect(() => {
    if (isOpen && options.length === 0 && !isLoading && store[loadDataAction]) {
      store[loadDataAction]();
    }
  }, [isOpen, options.length, isLoading, store, loadDataAction]);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen && searchable && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen, searchable]);

  const handleSelect = (optionValue) => {
    setSelectedValue(optionValue);
    setIsOpen(false);
    setSearchTerm('');
    if (onChange) {
      onChange(optionValue);
    }
  };

  const getSelectedLabel = () => {
    const selectedOption = options.find(opt => opt.value === selectedValue);
    return selectedOption ? selectedOption.label : '';
  };

  const isSelected = (optionValue) => selectedValue === optionValue;
  const hasValue = selectedValue && selectedValue !== '';
  const displayLabel = label || placeholder;

  // Filter options based on search term
  const filteredOptions = searchable && searchTerm
    ? options.filter(option =>
      option.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
      option.value.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : options;

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setSearchTerm('');
    }
  };

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      {/* Floating Label */}
      {displayLabel && (
        <label
          className={`absolute font-enel left-2 text-sm transition-all duration-200 pointer-events-none ${hasValue || isOpen
            ? 'top-0.5 text-grey-light text-xs'
            : 'top-2.5 text-grey-light'
            }`}

        >
          {displayLabel}
        </label>
      )}

      {/* Select Button */}
      <button
        type="button"
        className={`font-enel box-border content-stretch flex flex-row gap-2 h-10 items-center justify-start w-[383px] px-2 border border-grey-light rounded text-sm text-black bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent cursor-pointer ${hasValue || isOpen ? 'pt-4 pb-1' : 'py-2'
          } ${isLoading ? 'opacity-75' : ''}`}

        onClick={handleDropdownToggle}
        disabled={isLoading}
      >
        <span className="basis-0 grow leading-[15px] text-left truncate">
          {!isLoading && getSelectedLabel()}
        </span>
        <div className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          {!isLoading && <ExpandMoreIcon />}
        </div>
      </button>

      {/* Dropdown List */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 z-10 mt-1 w-[383px]">
          <div
            ref={dropdownRef}
            className="bg-white box-border border border-grey-light rounded shadow-[0px_2px_8px_0px_rgba(102,119,144,0.2)] py-1 w-full transition-all duration-200"
            style={{ maxHeight }}
          >
            {/* Search Input */}
            {searchable && (
              <div className="px-3 py-2 border-b border-[#e0e6ed]">
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder={searchPlaceholder}
                  className="w-full px-2 py-1 text-sm border border-[#c2cddd] rounded focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"

                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            )}

            <div className="overflow-y-auto" style={{ maxHeight: searchable ? `calc(${maxHeight} - 50px)` : maxHeight }}>
              {error ? (
                <div className="px-3 py-4 text-sm text-red-600 flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M8 4v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="8" cy="11" r="0.5" fill="currentColor" />
                  </svg>
                  Errore nel caricamento: {error}
                </div>
              ) : isLoading ? (
                <div className="px-3 py-6 flex flex-col items-center justify-center gap-3">
                  <div className="relative">
                    <div className="w-8 h-8 border-2 border-[#e0e6ed] rounded-full"></div>
                    <div className="absolute top-0 left-0 w-8 h-8 border-2 border-secondary border-t-transparent rounded-full animate-spin"></div>
                  </div>
                  <div className="text-sm text-grey-light text-center">
                    <div className="font-medium">Caricamento città...</div>
                    <div className="text-xs mt-1 opacity-75">Attendere prego</div>
                  </div>
                </div>
              ) : filteredOptions.length === 0 ? (
                <div className="px-3 py-4 flex flex-col items-center justify-center gap-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#c2cddd]">
                    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
                    <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="text-sm text-grey-light text-center">
                    <div className="font-medium">
                      {searchTerm ? 'Nessun risultato trovato' : 'Nessuna città disponibile'}
                    </div>
                    {searchTerm && (
                      <div className="text-xs mt-1 opacity-75">
                        Prova con un termine di ricerca diverso
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                filteredOptions.map((option) => (
                  <div
                    key={option.value}
                    onClick={() => handleSelect(option.value)}
                    className={`
                      box-border flex flex-row gap-4 h-10 items-center justify-start px-3 py-2 cursor-pointer transition-colors
                      ${isSelected(option.value)
                        ? 'bg-white-light text-secondary'
                        : 'bg-white text-black hover:bg-white-light'
                      }
                    `}
                  >
                    <div className="basis-0 grow flex flex-col gap-0.5 items-start justify-center">
                      <div
                        className="leading-[15px] text-[13px] text-left truncate w-full"

                      >
                        {option.label}
                      </div>
                    </div>
                    {isSelected(option.value) && (
                      <div className="relative rounded-[3px] shrink-0 w-4 h-4 flex items-center justify-center text-secondary">
                        <CheckmarkIcon />
                      </div>
                    )}
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

export default AsyncSelect;
