const ServicePriceDisplay = ({ 
  price, 
  label = "Prezzo finale", 
  className = "",
  containerClassName = ""
}) => {
  // Format currency in Italian style
  const formatCurrency = (amount) => {
    return `${amount.toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}€`;
  };

  return (
    <div className={`bg-[#eff2f7] rounded-xl p-2 flex items-center justify-end gap-4 h-10 ${containerClassName}`}>
      <div className="flex items-center justify-end gap-2">
        <span 
          className="text-[#272c34] text-sm font-bold leading-[21px] font-enel-bold"
        >
          {label}
        </span>
        <div className="flex flex-col items-start justify-start">
          <span 
            className="text-[#272c34] text-lg font-bold leading-[27px] text-right font-enel-bold"
          >
            {formatCurrency(price)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServicePriceDisplay;
