import React from 'react';
import { OptionSelectorContext, useOptionSelectorContext } from './OptionSelectorContext';
import { useOptionSelector } from './useOptionSelector';

export function OptionSelector({
    options = [],
    selectedOption = null,
    onOptionChange = () => { },
    disabled = false,
    children
}) {
    const selectorLogic = useOptionSelector({
        selectedOption,
        onOptionChange,
        disabled
    });

    const contextValue = {
        options,
        ...selectorLogic
    };

    // Render prop pattern - completely headless
    if (typeof children === 'function') {
        return children(contextValue);
    }

    // Compound component pattern with context
    return (
        <OptionSelectorContext.Provider value={contextValue}>
            {children}
        </OptionSelectorContext.Provider>
    );
}

// Headless subcomponents (no UI, just logic)
OptionSelector.Options = function OptionSelectorOptions({ children }) {
    const { options } = useOptionSelectorContext();

    if (typeof children === 'function') {
        return children({ options });
    }

    // Map over options and clone each child for each option
    return options.map((option) =>
        children ? React.cloneElement(children, { key: option.id, option }) : null
    );
};

OptionSelector.Option = function OptionSelectorOption({ option, children }) {
    const { getOptionProps, isSelected } = useOptionSelectorContext();

    if (typeof children === 'function') {
        return children({
            option,
            isSelected: isSelected(option.id),
            optionProps: getOptionProps(option)
        });
    }

    // If children is a component, pass props to it
    return children ? React.cloneElement(children, {
        option,
        isSelected: isSelected(option.id),
        ...getOptionProps(option)
    }) : null;
};