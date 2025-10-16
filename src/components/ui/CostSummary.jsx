import cn from "classnames";
import useAppStore from '../../store/useAppStore';
import { priceFormatter } from '../../utils/priceFormatter';

const CostSection = ({ description, amount, position = "left" }) => {
  const right = position === "right";
  return (
    <div className={cn("flex flex-col lg:items-center min-w-0", { "xl:items-start": !right, "xl:items-end": right, "text-right": right })}>
      <span
        className="text-primary-opaque text-xs leading-tight font-bold font-enel-bold"
      >
        {description}
      </span>
      <span
        className={cn("text-white text-lg leading-tight tracking-[0.2px] font-bold font-enel-bold", { "text-right": right })}
      >
        {amount > 0 ? priceFormatter(amount) : '-'}
      </span>
    </div>
  );
};


const CostSummary = ({ containerClassName = '' }) => {

  const { getInstallationTotal, getProductsTotal, getGrandTotal } = useAppStore();

  const installPrice = getInstallationTotal();
  const productsTotal = getProductsTotal();
  const grandTotal = getGrandTotal();

  return (
    <div className={`${containerClassName}`}>
      {/* Main container with blue gradient background to match Figma */}
      <div className="bg-gradient-to-r from-[#0047cc] to-[#3b80ff] rounded-xl p-4">
        {/* Title section */}
        <div className="mb-3">
          <h3
            className="text-white text-center xl:text-left leading-tight tracking-1 font-enel-bold xl:whitespace-nowrap md:text-md lg:text-lg xl:text-xl origin-center xl:origin-left"
            style={{
              width: 'fit-content',
              maxWidth: '100%',
              transform: 'scale(min(1, 100% / max-content))',
              margin: '0 auto',
            }}
          >
            PREVENTIVO DEL CLIMATIZZATORE
          </h3>
        </div>

        {/* Cost breakdown - horizontal layout to match Figma */}
        <div className="flex xl:flex-row lg:flex-col gap-4 items-center lg:justify-center lg:align-center xl:justify-start">
          {/* AC Unit Cost Section */}
          <CostSection description="Spese installazione" amount={installPrice} />

          {/* Services Cost Section */}
          <CostSection description="Costo climatizzatore" amount={productsTotal} />

          {/* Divider */}
          <div className="bg-[#B6CEFB] h-12 w-px xl:block lg:hidden"></div>

          {/* Total Cost Section - right aligned */}
          <CostSection description="Costo totale climatizzatore" amount={grandTotal} position="right" />
        </div>
      </div>
    </div>
  );
};

export default CostSummary;
