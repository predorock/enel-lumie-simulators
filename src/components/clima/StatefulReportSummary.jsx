import useAppStore from "../../store/useAppStore";
import { ReportSummary } from "../ui/summary";

import SummaryPriceDisplay from "../ui/summary/SummaryPriceDisplay";
import SummaryProductCardContainer from "../ui/summary/SummaryProductCardContainer";

const StatefulReportSummary = () => {

    const store = useAppStore();
    const configs = store.report.getSummary() || {};

    // Prepare entries for the climatizzatore tab
    const entries = configs.climatizzatore || [];

    const tabs = [
        {
            id: 'climatizzatore',
            label: 'Climatizzatore',
            component: <SummaryProductCardContainer entries={entries} />
        },
        {
            id: 'installazione',
            label: 'Spese installazione',
            component: <SummaryPriceDisplay value={configs.installazione?.prezzo || 0} />
        }
    ];
    return <ReportSummary tabs={tabs} activeTab={tabs[0].id} onTabChange={(ev) => { console.log(ev); }} />;
};

export default StatefulReportSummary;
