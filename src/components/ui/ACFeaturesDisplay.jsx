
import cn from 'classnames';
import { useState } from 'react';
import GlobeIcon from '../icons/GlobeIcon';
import IconRenderer from '../icons/IconRenderer';
import StarIcon from '../icons/StarIcon';
import Checkbox from './Checkbox';
import AcProductFeatures from './product/AcProductFeatures';
/**
 * ACFeaturesDisplay component displays air conditioning unit product information and features
 * following the ENEL design system specifications from Figma.
 */

const ACFeaturesDisplay = ({
  id = null,
  productName = "",
  productDescription = "",
  productImage = null,
  productImageAlt = "",
  productUrl = null,
  // price
  price = "",
  currency = "€",
  priceNote = "IVA inclusa",
  // feature
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
  showFeatures = true,
  // recommendation
  showRecommendationBadge = true,
  recommendationLevel = "full",
  recommendationText = "Top di gamma",
  // selection
  showCheckbox = true,
  checkboxLabel = "Scegli questa soluzione",
  onCheckboxChange = null,
  isSelected = false,
  // details
  detailsLink = "Visualizza la scheda dettagli del prodotto",
  // style
  className = ""
}) => {
  const handleDetailsClick = () => {
    if (productUrl) {
      window.open(productUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const [displayFeatures, setDisplayFeatures] = useState(showFeatures);

  return (
    <div className={cn(`bg-white rounded-xl p-4 ${className}`, { 'blue-shadow': isSelected, 'shadow-[0px_2px_8px_0px_rgba(102,119,144,0.2)]': !isSelected })}>
      <div className="basis-0 flex flex-col gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">

        {/* Product Image with Badge */}
        <div className="bg-white-light flex flex-col-reverse h-[230px] items-center justify-center overflow-clip pb-8 pt-0 px-0 relative rounded-lg shrink-0 w-full">
          <div className="bg-center bg-fill bg-no-repeat mt-16 mix-blend-multiply order-2 shrink-0">
            {productImage ? (
              <img
                src={productImage}
                alt={productImageAlt || productName}
                className="w-full h-full object-fill"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
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
            )}
          </div>

          {/* Recommendation Badge */}
          {showRecommendationBadge && (
            <div className="absolute h-8 left-0 order-1 top-0 w-full">
              <div className="flex flex-row-reverse h-8 items-start justify-end overflow-clip p-0 relative w-full">
                <div className="basis-0 bg-primary flex flex-row gap-2 grow h-full items-center justify-start min-h-px min-w-px order-1 overflow-clip px-2 py-1 relative shadow-[0px_2px_1px_0px_rgba(77,71,0,0.6)] shrink-0">
                  <div className="flex flex-row gap-1 items-start justify-start p-0 relative shrink-0">
                    <div className="flex flex-row gap-2.5 items-start justify-start p-0 relative shrink-0">
                      <div className="relative shrink-0 size-6">
                        <StarIcon variant='white' type={recommendationLevel} className="text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="font-enel-bold leading-[0] not-italic relative shrink-0 text-white text-[12px] text-nowrap text-right">
                    <p className="block leading-[18px] whitespace-pre">Consigliata</p>
                  </div>
                  <div className="font-enel leading-[0] not-italic relative shrink-0 text-white text-[12px] text-nowrap text-right">
                    <p className="block leading-[18px] whitespace-pre">-</p>
                  </div>
                  <div className="font-enel leading-[0] not-italic relative shrink-0 text-white text-[12px] text-nowrap text-right">
                    <p className="block leading-[18px] whitespace-pre">{recommendationText}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full">
          <div className="flex flex-col gap-4 items-start justify-start pb-2 pt-0 px-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-full">
              <div className="flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                <div className="flex flex-row h-0.5 items-center justify-center p-0 shrink-0 w-full"></div>
                <div className="flex flex-row gap-1 items-center justify-start p-0 relative shrink-0 w-full">
                  <div className="basis-0 font-enel-bold grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#272c34] text-[18px] text-left">
                    <p className="block leading-[24px]">{productName}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-enel justify-center leading-[0] not-italic relative shrink-0 text-grey-light text-[0px] text-left w-full">
                <p className="leading-[21px]">
                  <span className="text-[14px]">{productDescription}</span>
                </p>
              </div>
            </div>

            {/* Price Section */}
            <div className="flex flex-col gap-2 items-end justify-start p-0 relative shrink-0">
              <div className="flex flex-row items-end justify-end p-0 relative shrink-0 w-full">
                <div className="bg-clip-text bg-gradient-to-r flex flex-col font-enel-bold from-primary-light justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-left text-nowrap to-[#3b80ff] tracking-[-1px] extra-thick-text"
                  style={{ WebkitTextFillColor: "transparent" }}>
                  <p className="adjustLetterSpacing block leading-[42px] whitespace-pre">{price.split('.')[0]}</p>
                </div>
                <div className="flex flex-row items-end self-stretch">
                  <div className="flex flex-col h-full items-start justify-between p-0 relative shrink-0">
                    <div className="bg-clip-text bg-gradient-to-r flex flex-col font-enel-bold from-primary-light justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-left text-nowrap to-[#1f6cf9] extra-thick-text"
                      style={{ WebkitTextFillColor: "transparent" }}>
                      <p className="block leading-[14px] whitespace-pre">,{price.split('.')[1] || '00'}{currency}*</p>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-center pl-1 pr-0 py-0 relative shrink-0">
                      <div className="bg-clip-text bg-gradient-to-r flex flex-col font-enel-bold from-primary-light justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap to-[#1f6cf9] extra-thick-text"
                        style={{ WebkitTextFillColor: "transparent" }}>
                        <p className="block leading-[14px] whitespace-pre">{priceNote}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="bg-[#f4f8ff] flex flex-col gap-3 items-start justify-start p-[12px] relative rounded-lg shrink-0 w-full">
            <div className="font-enel-bold leading-[0] not-italic relative shrink-0 text-[#272c34] text-[12px] text-left w-full">
              {displayFeatures && <p className="block leading-[18px]">Funzionalità del prodotto</p>}
              {!displayFeatures && <div className="flex flex-row justify-between items-center cursor-pointer" onClick={() => setDisplayFeatures(!displayFeatures)}>
                <p className="font-enel-bold text-md block leading-[18px]">Scopri le informazioni del prodotto</p>
                <IconRenderer icon="plus" fillClass="slate-300" className="w-6 h-6" />
              </div>}

            </div>

            {/* Divider */}
            {
              displayFeatures && <div className="h-px bg-[#cbdaf6] relative shrink-0 w-full"></div>
            }

            {/* Features List */}
            {
              displayFeatures && <AcProductFeatures features={features} />
            }
          </div>

          {/* Details Link */}
          <div className="flex flex-row gap-1 items-center justify-start overflow-clip px-0 py-0.5 relative rounded-sm shrink-0">
            <div className="flex flex-row items-center justify-start p-0 relative shrink-0">
              <div className="font-enel leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-secondary text-[12px] text-left text-nowrap cursor-pointer">
                <button
                  onClick={handleDetailsClick}
                  disabled={!productUrl}
                  className={`cursor-pointer block leading-[12px] overflow-inherit whitespace-pre hover:underline ${!productUrl ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                >
                  {detailsLink}
                </button>
              </div>
            </div>
            <div
              className={`relative shrink-0 size-4 ${productUrl ? 'cursor-pointer' : 'opacity-50'}`}
              onClick={handleDetailsClick}
            >
              <GlobeIcon className='size-4' />
            </div>
          </div>

          {/* Selection Checkbox */}
          {showCheckbox && (
            <Checkbox
              checked={isSelected}
              onChange={onCheckboxChange}
              label={checkboxLabel}
              id={id}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ACFeaturesDisplay;
