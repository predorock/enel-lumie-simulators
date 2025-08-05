import useAppStore from '../../store/useAppStore';

const CostSummary = ({ containerClassName = '' }) => {

  const { getInstallationTotal, getProductsTotal, getGrandTotal } = useAppStore();

  const installPrice = getInstallationTotal();
  const productsTotal = getProductsTotal();
  const grandTotal = getGrandTotal();

  // Format currency in Italian style
  const formatCurrency = (amount) => {
    return `${amount.toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}€`;
  };

  return (
    <div className={`${containerClassName}`}>
      {/* Main container with blue transparent background to match Figma */}
      <div className="bg-[rgba(0,62,179,0.4)] rounded-xl p-4">
        {/* Title section */}
        <div className="mb-3">
          <h3
            className="text-white text-[20px] font-bold leading-[30px] tracking-[0.4px]"
            style={{ fontFamily: 'Roobert Bold' }}
          >
            PREVENTIVO DEL CLIMATIZZATORE
          </h3>
        </div>

        {/* Cost breakdown - horizontal layout to match Figma */}
        <div className="flex flex-row gap-4 items-center justify-start">
          {/* AC Unit Cost Section */}
          <div className="flex flex-col items-start min-w-0 flex-shrink-0">
            <span
              className="text-[#ede9f2] text-xs leading-tight font-bold"
              style={{ fontFamily: 'Roobert Bold' }}
            >
              Spese installazione
            </span>
            <span
              className="text-white text-lg leading-tight tracking-[0.2px] font-bold"
              style={{ fontFamily: 'Roobert Bold' }}
            >
              {installPrice > 0 ? formatCurrency(installPrice) : '–'}
            </span>
          </div>

          {/* Services Cost Section */}
          <div className="flex flex-col items-start min-w-0 flex-shrink-0">
            <span
              className="text-[#ede9f2] text-xs leading-tight font-bold"
              style={{ fontFamily: 'Roobert Bold' }}
            >
              Costo climatizzatore
            </span>
            <span
              className="text-white text-lg leading-tight tracking-[0.2px] font-bold"
              style={{ fontFamily: 'Roobert Bold' }}
            >
              {productsTotal > 0 ? formatCurrency(productsTotal) : '–'}
            </span>
          </div>

          {/* Divider */}
          <div className="bg-[#957eb5] h-8 w-px flex-shrink-0"></div>

          {/* Total Cost Section - right aligned */}
          <div className="flex flex-col items-end text-right flex-1 min-w-0">
            <span
              className="text-[#ede9f2] text-xs leading-tight font-bold w-full text-nowrap"
              style={{ fontFamily: 'Roobert Bold' }}
            >
              Costo totale climatizzatore
            </span>
            <span
              className="text-white text-xl leading-tight tracking-[0.2px] font-bold w-full"
              style={{ fontFamily: 'Roobert Bold' }}
            >
              {grandTotal > 0 ? formatCurrency(grandTotal) : '–'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostSummary;
