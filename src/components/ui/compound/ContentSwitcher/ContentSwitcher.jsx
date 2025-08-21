import React from 'react';
import { ContentSwitcherContext, useContentSwitcher } from './ContentSwitcherContext';
import { useContentSwitcherLogic } from './useContentSwitcher';

export function ContentSwitcher({
    activeTab = null,
    onTabChange = () => { },
    tabs = [],
    defaultTab = null,
    children
}) {
    const switcherLogic = useContentSwitcherLogic({
        activeTab,
        onTabChange,
        tabs,
        defaultTab
    });

    const contextValue = {
        ...switcherLogic
    };

    // Render prop pattern - completely headless
    if (typeof children === 'function') {
        return children(contextValue);
    }

    // Compound component pattern with context
    return (
        <ContentSwitcherContext.Provider value={contextValue}>
            {children}
        </ContentSwitcherContext.Provider>
    );
}

// Headless subcomponents (no UI, just logic)
ContentSwitcher.TabList = function ContentSwitcherTabList({ children }) {
    const { tabs } = useContentSwitcher();

    if (typeof children === 'function') {
        return children({ tabs });
    }

    // Map over tabs and clone each child for each tab
    return tabs.map((tab) =>
        children ? React.cloneElement(children, { key: tab.id, tab }) : null
    );
};

ContentSwitcher.Tab = function ContentSwitcherTab({ tab, children }) {
    const { getTabProps, isTabActive } = useContentSwitcher();

    if (typeof children === 'function') {
        return children({
            tab,
            isActive: isTabActive(tab.id),
            tabProps: getTabProps(tab)
        });
    }

    // If children is a component, pass props to it
    return children ? React.cloneElement(children, {
        tab,
        isActive: isTabActive(tab.id),
        ...getTabProps(tab)
    }) : null;
};

ContentSwitcher.Content = function ContentSwitcherContent({ children }) {
    const { getActiveContent, activeTab } = useContentSwitcher();

    if (typeof children === 'function') {
        return children({
            activeContent: getActiveContent(),
            activeTab
        });
    }

    // Default behavior: render the active content
    return getActiveContent();
};

export default ContentSwitcher;
