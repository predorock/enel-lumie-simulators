import useAppStore from "../../store/useAppStore";
import IconRenderer from "../icons/IconRenderer";
import Divider from "../ui/Divider";
import PriceDisplay from "../ui/PriceDisplay";
import PriceVatDisplay from "../ui/PriceVatDisplay";
import SummaryProductCard from "../ui/summary/SummaryProductCard";
import SummaryExpensesAccordion from "../ui/SummaryExpensesAccordion";

const StatefulReportSummary = () => {

    const store = useAppStore();
    const summary = store.report.getSummary() || {};
    const installationTotal = store.getInstallationTotal() || 0;
    const productsTotal = store.getProductsTotal() || 0;
    const grandTotal = store.getGrandTotal() || 0;

    if (summary?.clima?.length < 0 || summary?.expenses?.length < 0) {
        return null;
    }

    return (
        <div className={`bg-white-light box-border content-stretch flex flex-col gap-6 items-start justify-start p-[16px] relative rounded-3xl size-full`}>

            <div className="bg-gradient-to-r from-[#0047cc] to-[#3b80ff] rounded-xl p-6 flex flex-row gap-1 items-center justify-start w-full">
                <div className='rounded-full bg-[rgba(255,255,255,0.1)] w-fit p-2'>
                    <IconRenderer icon="fattura" className="w-6 h-6 text-white inline-block mr-2" fillClass="fill-white" />
                </div>
                <div className="font-enel-bold text-slate-200 text-xl ml-2 tracking-wider">
                    Costo totale dell’investimento
                </div>
                <div className="font-enel-bold text-white text-4xl ml-auto">
                    <PriceVatDisplay value={grandTotal} currency="EUR" />
                </div>
            </div>

            <Divider className='w-full' label='di cui' />

            <SummaryExpensesAccordion
                title="Riepilogo spesa climatizzatori"
                summaryLabel="Totale spese climatizzatori"
                summarySubLabel="IVA inclusa"
                totalPrice={productsTotal}
                className="w-full"
            >
                {summary?.clima?.map((item, index) => <SummaryProductCard key={index} data={item} className="mt-2" />)}

            </SummaryExpensesAccordion>

            <SummaryExpensesAccordion
                title="Riepilogo spesa componenti aggiuntivi"
                summaryLabel="Totale spese componenti aggiuntivi"
                summarySubLabel="IVA inclusa"
                totalPrice={installationTotal}
                className="w-full"
            >
                {/* Dynamic expandable content */}
                <div className="space-y-4">
                    {summary?.expenses?.map((item, index) => (
                        <div key={index} className="flex justify-between items-center">
                            <span className="text-md font-enel-light flex-1">
                                {item.description}
                            </span>
                            <PriceDisplay value={item.price} />
                        </div>
                    ))}
                </div>
            </SummaryExpensesAccordion>


        </div>
    )
};

export default StatefulReportSummary;
