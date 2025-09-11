import { CaretDownIcon } from '@radix-ui/react-icons';
import { useEffect, useRef, useState } from 'react';
import IconRenderer from '../icons/IconRenderer';

const CustomSelect = ({
  options = [],
  value = '',
  onChange,
  placeholder = 'Select an option',
  label = '',
  className = '',
  maxHeight = '250px' // Made shorter by default
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);
  const dropdownRef = useRef(null);
  const containerRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Update selected value when prop changes
  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  const handleSelect = (optionValue) => {
    setSelectedValue(optionValue);
    setIsOpen(false);
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

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      {/* Floating Label */}
      {displayLabel && (
        <label
          className={`absolute left-2 text-sm transition-all duration-200 pointer-events-none font-enel ${hasValue || isOpen
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
        className={`box-border content-stretch flex flex-row gap-2 h-10 items-center justify-start w-full px-2 border border-grey-light rounded text-sm text-black bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent cursor-pointer font-enel ${hasValue || isOpen ? 'pt-4 pb-1' : 'py-2'
          }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="basis-0 grow leading-[15px] text-left truncate">
          {getSelectedLabel()}
        </span>
        <div className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          <CaretDownIcon className='w-6 h-6 fill-secondary text-secondary' />
        </div>
      </button>

      {/* Dropdown List */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 z-10 mt-1">
          <div
            ref={dropdownRef}
            className="bg-white box-border border border-grey-light rounded shadow-[0px_2px_8px_0px_rgba(102,119,144,0.2)] py-1 w-full"
            style={{ maxHeight }}
          >
            <div className="overflow-y-auto" style={{ maxHeight }}>
              {options.map((option, index) => (
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
                      className="leading-[15px] text-[13px] text-left truncate w-full font-enel"
                    >
                      {option.label}
                    </div>
                  </div>
                  {isSelected(option.value) && (
                    <div className="relative rounded-[3px] shrink-0 w-4 h-4 flex items-center justify-center text-secondary">
                      <IconRenderer icon="checkMark" fillClass="fill-secondary" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
