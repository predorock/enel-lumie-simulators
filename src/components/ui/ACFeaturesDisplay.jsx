import React from 'react';

/**
 * ACFeaturesDisplay component displays air conditioning unit product information and features
 * following the ENEL design system specifications from Figma.
 */

const ACFeaturesDisplay = ({
  productName = "Daikin Clima Siesta Super Plus 12000",
  productDescription = "Per climatizzare stanze fino a 38m²",
  price = "657.00",
  currency = "€",
  priceNote = "IVA inclusa",
  features = [
    { key: "Led", name: "Schermo LED", enabled: true },
    { key: "Wifi", name: "Connettività Wi-Fi", enabled: true },
    { key: "Voice", name: "Voice control", enabled: false },
    { key: "RispEn", name: "Funzione risparmio energetico", enabled: true },
    { key: "ProgGiorn", name: "Programmazione timer giornaliera", enabled: true },
    { key: "ProgSett", name: "Programmazione timer settimanale", enabled: false },
    { key: "Sleep", name: "Funzionalità Sleep", enabled: true },
    { key: "Turbo", name: "Funzionalità Turbo", enabled: true },
    { key: "Muffa", name: "Anti muffa, anti batteri, anti polvere, anti allergeni", enabled: false },
    { key: "Ionizzazione", name: "Ionizzatore", enabled: false },
    { key: "Autodiagnosi", name: "Autodiagnosi (Funzione Smart Diagnosis)", enabled: true }
  ],
  showRecommendationBadge = true,
  showCheckbox = true,
  checkboxLabel = "Scegli questa soluzione",
  detailsLink = "Visualizza la scheda dettagli del prodotto",
  onCheckboxChange = null,
  isSelected = false,
  onDetailsClick = null,
  className = ""
}) => {
  return (
    <div className={`bg-white rounded-lg border border-gray-200 shadow-sm ${className}`}>
      {/* Recommendation Badge */}
      {showRecommendationBadge && (
        <div className="bg-[#002466] text-white px-4 py-2 flex items-center">
          <span className="text-white mr-2">⭐</span>
          <span className="text-sm font-medium font-roobert">
            Consigliata - Top di gamma
          </span>
        </div>
      )}

      {/* Product Image Placeholder */}
      <div className="bg-gray-100 p-8 flex justify-center items-center">
        <div className="w-64 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
          <svg 
            className="w-16 h-16 text-gray-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900 font-roobert mb-2">
          {productName}
        </h2>
        <p className="text-sm text-gray-600 font-roobert mb-4">
          {productDescription}
        </p>

        {/* Price */}
        <div className="mb-6">
          <div className="flex items-end">
            {/* Main price number */}
            <div 
              className="bg-clip-text bg-gradient-to-r from-[#0047cc] to-[#3b80ff] font-bold font-roobert text-[48px] leading-[42px] tracking-[-1px]"
              style={{ WebkitTextFillColor: "transparent" }}
            >
              {price.split('.')[0]}
            </div>
            
            {/* Currency and decimal part */}
            <div className="flex flex-col justify-between h-full ml-1">
              <div 
                className="bg-clip-text bg-gradient-to-r from-[#0047cc] to-[#1f6cf9] font-bold font-roobert text-[18px] leading-[14px]"
                style={{ WebkitTextFillColor: "transparent" }}
              >
                ,{price.split('.')[1] || '00'}{currency}*
              </div>
              <div className="flex items-center pl-1 mt-2">
                <div 
                  className="bg-clip-text bg-gradient-to-r from-[#0047cc] to-[#1f6cf9] font-bold font-roobert text-[14px] leading-[14px]"
                  style={{ WebkitTextFillColor: "transparent" }}
                >
                  {priceNote}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-6">
          <div className="bg-[#f4f8ff] rounded-lg p-3">
            {/* Title */}
            <div className="font-bold font-roobert text-[#272c34] text-[12px] leading-[18px] mb-3">
              Funzionalità del prodotto
            </div>
            
            {/* Divider */}
            <div className="w-full h-px bg-[#cbdaf6] mb-3"></div>
            
            {/* Features List */}
            <div className="flex flex-col gap-2">
              {features.map((feature, index) => {
                const isEnabled = typeof feature === 'object' ? feature.enabled : true;
                const featureName = typeof feature === 'object' ? feature.name : feature;
                const featureKey = typeof feature === 'object' ? feature.key : `feature-${index}`;
                
                return (
                  <div key={featureKey} className="flex items-start gap-[5px]">
                    {/* Feature Icon */}
                    <div className="flex-shrink-0 w-4 h-4 flex items-center justify-center">
                      {isEnabled ? (
                        // Check circle icon
                        <svg 
                          className="w-4 h-4" 
                          viewBox="0 0 16 16" 
                          fill="none"
                        >
                          <circle cx="8" cy="8" r="8" fill="#0047cc"/>
                          <path 
                            d="M6.5 8.5L7.5 9.5L10.5 6.5" 
                            stroke="white" 
                            strokeWidth="1.5" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : (
                        // Cancel/X circle icon
                        <svg 
                          className="w-4 h-4" 
                          viewBox="0 0 16 16" 
                          fill="none"
                        >
                          <circle cx="8" cy="8" r="8" fill="#667790"/>
                          <path 
                            d="M6 6L10 10M10 6L6 10" 
                            stroke="white" 
                            strokeWidth="1.5" 
                            strokeLinecap="round"
                          />
                        </svg>
                      )}
                    </div>
                    
                    {/* Feature Text */}
                    <div className={`flex-1 text-[#272c34] text-[12px] leading-[18px] ${
                      isEnabled 
                        ? 'font-bold font-roobert' 
                        : 'font-normal font-roobert line-through'
                    }`}>
                      {featureName}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Details Link */}
        <div className="mb-6">
          <button 
            onClick={onDetailsClick}
            className="text-[#5738ff] text-[12px] font-roobert hover:underline flex items-center leading-[12px]"
          >
            {detailsLink}
            <svg 
              className="w-4 h-4 ml-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </button>
        </div>

        {/* Selection Checkbox */}
        {showCheckbox && (
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id={`product-selection-${productName.replace(/\s+/g, '-').toLowerCase()}`}
              checked={isSelected}
              onChange={(e) => onCheckboxChange && onCheckboxChange(e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
            <label 
              htmlFor={`product-selection-${productName.replace(/\s+/g, '-').toLowerCase()}`}
              className="text-sm font-medium text-gray-900 font-roobert"
            >
              {checkboxLabel}
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default ACFeaturesDisplay;
