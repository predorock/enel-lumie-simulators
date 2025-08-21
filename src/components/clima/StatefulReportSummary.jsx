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

    const tabs = [
        {
            id: 'climatizzatore',
            label: 'Climatizzatore',
            component: <SummaryProductCardContainer entries={configs} />
        },
        {
            id: 'installazione',
            label: 'Spese installazione',
            component: <SummaryPriceDisplay value={configs.installazione?.prezzo || 0} />
        }
    ];
    console.log(configs)
    const [activeTab, setActiveTab] = useState(tabs[0].id);
    return <ReportSummary tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />;
};

export default StatefulReportSummary;
