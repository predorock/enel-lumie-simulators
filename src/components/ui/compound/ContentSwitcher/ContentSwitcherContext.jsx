import { createContext, useContext } from 'react';

export const ContentSwitcherContext = createContext(null);

export const useContentSwitcher = () => {
    const context = useContext(ContentSwitcherContext);
    if (!context) {
        throw new Error('ContentSwitcher compound components must be used within a ContentSwitcher provider');
    }
    return context;
};
