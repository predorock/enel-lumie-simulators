import React, { useState } from 'react';
import ACFeaturesDisplay from '../ui/ACFeaturesDisplay.jsx';

const ACFeaturesDisplayDemo = () => {
  const [isSelected, setIsSelected] = useState(false);

  const handleCheckboxChange = (checked) => {
    setIsSelected(checked);
    console.log('Checkbox changed:', checked);
  };

  const handleDetailsClick = () => {
    console.log('Details clicked');
  };

  const features = [
    { key: "Led", name: "Schermo LED", enabled: true },
    { key: "Wifi", name: "Connettività Wi-Fi", enabled: true },
    { key: "Voice", name: "Voice control", enabled: true },
    { key: "RispEn", name: "Funzione risparmio energetico", enabled: true },
    { key: "ProgGiorn", name: "Programmazione timer giornaliera", enabled: true },
    { key: "ProgSett", name: "Programmazione timer settimanale", enabled: true },
    { key: "Sleep", name: "Funzionalità Sleep", enabled: true },
    { key: "Turbo", name: "Funzionalità Turbo", enabled: true },
    { key: "Muffa", name: "Anti muffa, anti batteri, anti polvere, anti allergeni", enabled: true },
    { key: "Ionizzazione", name: "Ionizzatore", enabled: false },
    { key: "Autodiagnosi", name: "Autodiagnosi (Funzione Smart Diagnosis)", enabled: true }
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-sm mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">ACFeaturesDisplay Demo</h1>
        
        <ACFeaturesDisplay
          productName="Daikin Clima Siesta Super Plus 12000"
          productDescription="Per climatizzare stanze fino a 38m²"
          price="657.00"
          currency="€"
          priceNote="IVA inclusa"
          features={features}
          showRecommendationBadge={true}
          showCheckbox={true}
          checkboxLabel="Scegli questa soluzione"
          detailsLink="Visualizza la scheda dettagli del prodotto"
          onCheckboxChange={handleCheckboxChange}
          isSelected={isSelected}
          onDetailsClick={handleDetailsClick}
        />
      </div>
    </div>
  );
};

export default ACFeaturesDisplayDemo;
