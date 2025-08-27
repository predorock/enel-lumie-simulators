import { useState } from "react";
import useAppStore from "../../store/useAppStore";
import { ReportSummary } from "../ui/summary";

import SummaryPriceDisplay from "../ui/summary/SummaryPriceDisplay";
import SummaryProductCardContainer from "../ui/summary/SummaryProductCardContainer";

const StatefulReportSummary = () => {

    const store = useAppStore();
    const summary = store.report.getSummary() || {};

    if (summary?.clima?.length < 0 || summary?.expenses?.length < 0) {
        return null;
    }

    const tabs = [
        {
            id: 'climatizzatore',
            label: 'Climatizzatore',
            component: <SummaryProductCardContainer entries={summary?.clima} />
        },
        {
            id: 'installazione',
            label: 'Spese installazione',
            component: <SummaryPriceDisplay items={summary?.expenses} total="100" />
        }
    ];
    const [activeTab, setActiveTab] = useState(tabs[0].id);
    return <ReportSummary tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />;
};

export default StatefulReportSummary;
