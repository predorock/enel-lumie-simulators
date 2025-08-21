import { createContext, useContext } from 'react';

export const OptionSelectorContext = createContext(null);

export function useOptionSelectorContext() {
    const context = useContext(OptionSelectorContext);
    if (!context) {
        throw new Error('OptionSelector components must be used within OptionSelector');
    }
    return context;
}