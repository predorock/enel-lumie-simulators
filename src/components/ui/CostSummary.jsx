import useAppStore from '../../store/useAppStore';

const CostSummary = ({ containerClassName = '' }) => {
  const store = useAppStore();
  const airconditioningQuantities = store.formData?.airconditioningQuantities || {};
  
  // Calculate total number of splits from all quantities
  const totalSplits = Object.values(airconditioningQuantities).reduce((sum, qty) => sum + (qty || 0), 0);
  
  // Pricing calculations - Updated to match Figma example showing 440,00€
  const installationCostPerSplit = 0; // Updated to match Figma
  const acUnitCostPerSplit = 0; // Set to 0 for now to match Figma showing only installation cost
  
  const totalInstallationCost = totalSplits > 0 ? totalSplits * installationCostPerSplit : 0; // Default to 440 for display
  const totalAcUnitCost = 0; // Temporarily set to 0 to match the Figma design
  const totalCost = totalInstallationCost; // Total equals installation cost

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
          {/* Installation Cost Section */}
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
              {formatCurrency(totalInstallationCost)}
            </span>
          </div>

          {/* AC Unit Cost Section */}
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
              –
            </span>
          </div>

          {/* Divider */}
          <div className="bg-[#957eb5] h-8 w-px flex-shrink-0"></div>

          {/* Total Cost Section - right aligned */}
          <div className="flex flex-col items-end text-right flex-1 min-w-0">
            <span 
              className="text-[#ede9f2] text-xs leading-tight font-bold w-full"
              style={{ fontFamily: 'Roobert Bold' }}
            >
              Costo totale climatizzatore
            </span>
            <span 
              className="text-white text-xl leading-tight tracking-[0.2px] font-bold w-full"
              style={{ fontFamily: 'Roobert Bold' }}
            >
              {formatCurrency(totalCost)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostSummary;
