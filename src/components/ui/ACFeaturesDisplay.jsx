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
    "Schermo LED",
    "Connettività Wi-Fi",
    "Voice control",
    "Funzione risparmio energetico",
    "Programmazione timer giornaliera",
    "Programmazione timer settimanale",
    "Funzionalità Sleep",
    "Funzionalità Turbo",
    "Anti muffa, anti batteri, anti polvere, anti allergeni",
    "Ionizzatore",
    "Autodiagnosi (Funzione Smart Diagnosis)"
  ],
  showRecommendationBadge = true,
  showCheckbox = true,
  checkboxLabel = "Scegli questa soluzione",
  detailsLink = "Visualizza la scheda dettagli del prodotto",
  className = ""
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden ${className}`}>
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
          <div className="flex items-baseline">
            <span className="text-3xl font-bold text-[#002466] font-roobert">
              {price}
            </span>
            <span className="text-lg text-[#002466] font-roobert ml-1">
              {currency}*
            </span>
          </div>
          <p className="text-sm text-[#002466] font-roobert">
            {priceNote}
          </p>
        </div>

        {/* Features Section */}
        <div className="mb-6">
          <h3 className="text-base font-bold text-gray-900 font-roobert mb-4">
            Funzionalità del prodotto
          </h3>
          <div className="space-y-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#002466] flex items-center justify-center mt-0.5 mr-3">
                  <svg 
                    className="w-3 h-3 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={3} 
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-sm text-gray-700 font-roobert leading-relaxed">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Details Link */}
        <div className="mb-6">
          <button className="text-[#D3135A] text-sm font-medium font-roobert hover:underline flex items-center">
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
          <div className="flex items-center">
            <input
              type="checkbox"
              id="product-selection"
              className="w-4 h-4 text-[#002466] bg-gray-100 border-gray-300 rounded focus:ring-[#002466] focus:ring-2"
            />
            <label 
              htmlFor="product-selection" 
              className="ml-3 text-sm font-medium text-gray-900 font-roobert"
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
