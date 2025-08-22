import { useState } from "react";
import useAppStore from "../../store/useAppStore";
import { ReportSummary } from "../ui/summary";

import SummaryPriceDisplay from "../ui/summary/SummaryPriceDisplay";
import SummaryProductCardContainer from "../ui/summary/SummaryProductCardContainer";

const StatefulReportSummary = () => {

    const store = useAppStore();
    const configs = store.report.getSummary() || {};

    if (configs?.length < 0) {
        return null;
    }

    const prices = [
        {
            description: "Installazione",
            price: 100
        },
        {
            description: "Disoneste",
            price: 50
        },
        {
            description: "Massaggi",
            price: 50
        },
        {
            description: "Bomboloni",
            price: 50
        }
    ]

    const tabs = [
        {
            id: 'climatizzatore',
            label: 'Climatizzatore',
            component: <SummaryProductCardContainer entries={configs} />
        },
        {
            id: 'installazione',
            label: 'Spese installazione',
            component: <SummaryPriceDisplay items={prices} total="100" />
        }
    ];
    const [activeTab, setActiveTab] = useState(tabs[0].id);
    return <ReportSummary tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />;
};

export default StatefulReportSummary;
