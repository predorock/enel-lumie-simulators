import { useCallback } from 'react';

export function useOptionSelector({
    selectedOption = null,
    onOptionChange = () => { console.log("Option changed") },
    disabled = false
}) {
    const handleOptionSelect = useCallback((optionId) => {
        if (disabled) return;

        const newSelection = selectedOption === optionId ? null : optionId;
        onOptionChange(newSelection);
    }, [selectedOption, onOptionChange, disabled]);

    const isSelected = useCallback((optionId) => {
        return selectedOption === optionId;
    }, [selectedOption]);

    const getOptionProps = useCallback((option) => ({
        key: option.id,
        onClick: () => handleOptionSelect(option.id),
        disabled,
        'data-selected': isSelected(option.id),
        'data-option-id': option.id,
        'aria-pressed': isSelected(option.id),
        role: 'button',
        tabIndex: disabled ? -1 : 0,
        onKeyDown: (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleOptionSelect(option.id);
            }
        }
    }), [handleOptionSelect, disabled, isSelected]);

    return {
        selectedOption,
        handleOptionSelect,
        disabled,
        isSelected,
        getOptionProps,
        // Helper methods
        hasSelection: selectedOption !== null,
        clearSelection: () => onOptionChange(null)
    };
}