import * as Tabs from '@radix-ui/react-tabs';
import React from 'react';
import Divider from '../Divider.jsx';

const SummaryContainer = ({
    tabs = [],
    activeTab = '',
    onTabChange = () => { },
}) => {
    return (
        <div className={`bg-[#f7f8fb] box-border content-stretch flex flex-col gap-6 items-start justify-start p-[16px] relative rounded-3xl size-full`}>

            {/* Radix UI Tabs */}
            <Tabs.Root
                value={activeTab}
                onValueChange={onTabChange}
                className="w-full"
            >
                <Tabs.List
                    className="bg-[#ffffff] box-border flex gap-1 items-center justify-start p-1 mb-6 relative rounded-lg shadow-[0px_2px_8px_0px_rgba(102,119,144,0.2)] shrink-0 w-fit"
                    aria-label="Seleziona la sezione del report"
                >
                    {tabs.map((tab, index) => (
                        <div key={tab.id} className="flex flex-row items-center self-stretch">
                            {index > 0 && (
                                <div className="content-stretch flex gap-1 items-center justify-center relative rounded shrink-0">
                                    <div className="h-6 relative shrink-0 w-0">
                                        <Divider
                                            orientation="vertical"
                                            spacing="0px"
                                            className="h-6"
                                        />
                                    </div>
                                </div>
                            )}
                            <div className="content-stretch flex gap-1 h-full items-center justify-center relative rounded shrink-0">
                                <Tabs.Trigger
                                    value={tab.id}
                                    className={`box-border content-stretch flex items-center justify-center px-6 py-3 relative rounded shrink-0 cursor-pointer transition-colors duration-200 
                                        ${activeTab === tab.id ? 'bg-secondary' : 'bg-[#ffffff] hover:bg-[#f7f8fb]'}
                                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2
                                    `}
                                >
                                    <div className={`font-enel leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap ${activeTab === tab.id ? 'text-[#ffffff]' : 'text-[#272c34]'}`}>
                                        <p className="leading-[16px] whitespace-pre">{tab.label}</p>
                                    </div>
                                </Tabs.Trigger>
                            </div>
                        </div>
                    ))}
                </Tabs.List>

                {/* Tab Content */}
                {tabs.map(tab => (
                    <Tabs.Content key={tab.id} value={tab.id} className="w-full">
                        {typeof tab.component === 'function'
                            ? React.createElement(tab.component)
                            : tab.component}
                    </Tabs.Content>
                ))}
            </Tabs.Root>
        </div>
    );
};

export default SummaryContainer;
