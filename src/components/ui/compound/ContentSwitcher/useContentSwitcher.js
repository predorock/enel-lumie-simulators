import { useCallback, useState } from 'react';

export const useContentSwitcherLogic = ({
    activeTab: controlledActiveTab = null,
    onTabChange = () => { },
    tabs = [],
    defaultTab = null
}) => {
    // Internal state for uncontrolled mode
    const [internalActiveTab, setInternalActiveTab] = useState(
        defaultTab || tabs[0]?.id || null
    );

    // Use controlled or uncontrolled mode
    const activeTab = controlledActiveTab !== null ? controlledActiveTab : internalActiveTab;

    // Handle tab changes
    const handleTabChange = useCallback((tabId) => {
        if (controlledActiveTab === null) {
            setInternalActiveTab(tabId);
        }
        onTabChange(tabId);
    }, [controlledActiveTab, onTabChange]);

    // Get tab props for click handlers and active state
    const getTabProps = useCallback((tab) => ({
        key: tab.id,
        onClick: () => handleTabChange(tab.id),
        'data-active': activeTab === tab.id,
        'data-tab-id': tab.id,
        role: 'tab',
        'aria-selected': activeTab === tab.id,
        tabIndex: activeTab === tab.id ? 0 : -1,
        onKeyDown: (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleTabChange(tab.id);
            }
        }
    }), [activeTab, handleTabChange]);

    // Check if tab is active
    const isTabActive = useCallback((tabId) => activeTab === tabId, [activeTab]);

    // Get active tab content
    const getActiveContent = useCallback(() => {
        const activeTabData = tabs.find(tab => tab.id === activeTab);
        return activeTabData?.content || null;
    }, [activeTab, tabs]);

    return {
        activeTab,
        tabs,
        handleTabChange,
        getTabProps,
        isTabActive,
        getActiveContent
    };
};
