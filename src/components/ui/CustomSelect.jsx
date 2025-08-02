import React, { useState, useRef, useEffect } from 'react';

// Checkmark icon for selected items
const CheckmarkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Expand More Icon for dropdown arrow
const ExpandMoreIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CustomSelect = ({ 
  options = [], 
  value = '', 
  onChange, 
  placeholder = 'Select an option',
  className = '',
  maxHeight = '200px'
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
    return selectedOption ? selectedOption.label : placeholder;
  };

  const isSelected = (optionValue) => selectedValue === optionValue;

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      {/* Select Button */}
      <button
        type="button"
        className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-start w-full px-2 py-2 border border-[#667790] rounded font-['Roobert'] text-base text-[#667790] bg-white focus:outline-none focus:ring-2 focus:ring-[#002466] focus:border-transparent cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="basis-0 grow leading-[16px] text-left truncate">
          {getSelectedLabel()}
        </span>
        <div className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          <ExpandMoreIcon />
        </div>
      </button>

      {/* Dropdown List */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 z-10 mt-1">
          <div 
            ref={dropdownRef}
            className="bg-white box-border border border-[#667790] rounded shadow-[0px_2px_8px_0px_rgba(102,119,144,0.2)] py-2 w-full"
            style={{ maxHeight }}
          >
            <div className="overflow-y-auto" style={{ maxHeight }}>
              {options.map((option, index) => (
                <div
                  key={option.value}
                  onClick={() => handleSelect(option.value)}
                  className={`
                    box-border flex flex-row gap-4 h-12 items-center justify-start px-4 py-3 cursor-pointer transition-colors
                    ${isSelected(option.value) 
                      ? 'bg-[#f7f8fb] text-[#5738ff]' 
                      : 'bg-white text-[#131416] hover:bg-[#f7f8fb]'
                    }
                  `}
                >
                  <div className="basis-0 grow flex flex-col gap-0.5 items-start justify-center">
                    <div className="font-['Roobert'] leading-[16px] text-[16px] text-left truncate w-full">
                      {option.label}
                    </div>
                  </div>
                  {isSelected(option.value) && (
                    <div className="relative rounded-[3px] shrink-0 w-6 h-6 flex items-center justify-center text-[#5738ff]">
                      <CheckmarkIcon />
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
