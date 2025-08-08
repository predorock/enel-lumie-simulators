import React from 'react';
import ACFeaturesDisplay from '../ui/ACFeaturesDisplay';

export default function ACFeaturesDisplayDemo() {
  // Custom features examples
  const premiumFeatures = [
    {
      iconType: 'energy',
      title: 'Efficienza Superiore',
      description: 'Classe energetica A+++ certificata',
      highlight: 'A+++'
    },
    {
      iconType: 'smart',
      title: 'Controllo Avanzato',
      description: 'App mobile con geolocalizzazione',
      highlight: 'GPS'
    },
    {
      iconType: 'quiet',
      title: 'Ultra Silenzioso',
      description: 'Tecnologia inverter per minimo rumore',
      highlight: '28dB'
    }
  ];

  const basicFeatures = [
    {
      iconType: 'temperature',
      title: 'Controllo Base',
      description: 'Controllo temperatura semplice',
      highlight: '±2°C'
    },
    {
      iconType: 'timer',
      title: 'Timer Semplice',
      description: 'Programmazione base on/off',
      highlight: '12h'
    }
  ];

  return (
    <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">ACFeaturesDisplay Demo</h1>
        <p className="text-gray-600 mb-8">Showcase of the AC Features Display component with different configurations</p>

        {/* Default Features */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Default Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ACFeaturesDisplay 
              acType="monosplit"
              variant="info"
            />
            <ACFeaturesDisplay 
              acType="dualsplit"
              variant="success"
            />
            <ACFeaturesDisplay 
              acType="trialsplit"
              variant="warning"
            />
          </div>
        </div>

        {/* Custom Features */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Custom Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ACFeaturesDisplay 
              acType="trialsplit"
              variant="success"
              title="Modello Premium"
              features={premiumFeatures}
            />
            <ACFeaturesDisplay 
              acType="monosplit"
              variant="info"
              title="Modello Base"
              features={basicFeatures}
            />
          </div>
        </div>

        {/* Different Variants */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Visual Variants</h2>
          <div className="space-y-4">
            <ACFeaturesDisplay 
              acType="dualsplit"
              variant="info"
              title="Informazioni (Info Variant)"
              features={[
                {
                  iconType: 'airflow',
                  title: 'Purificazione',
                  description: 'Filtro multi-strato per aria pulita',
                  highlight: 'Multi'
                }
              ]}
            />
            <ACFeaturesDisplay 
              acType="dualsplit"
              variant="success"
              title="Caratteristiche Eccellenti (Success Variant)"
              features={[
                {
                  iconType: 'energy',
                  title: 'Massima Efficienza',
                  description: 'Risparmio energetico garantito',
                  highlight: '90%'
                }
              ]}
            />
            <ACFeaturesDisplay 
              acType="dualsplit"
              variant="warning"
              title="Requisiti Importanti (Warning Variant)"
              features={[
                {
                  iconType: 'temperature',
                  title: 'Temperatura Minima',
                  description: 'Funzionamento garantito fino a -15°C',
                  highlight: '-15°C'
                }
              ]}
            />
          </div>
        </div>

        {/* Without AC Icon */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Senza Icona AC</h2>
          <div className="max-w-md">
            <ACFeaturesDisplay 
              showACIcon={false}
              variant="info"
              title="Caratteristiche Generali"
              features={[
                {
                  iconType: 'smart',
                  title: 'Controllo Intelligente',
                  description: 'Sistema di controllo automatico',
                  highlight: 'AI'
                },
                {
                  iconType: 'quiet',
                  title: 'Funzionamento Silenzioso',
                  description: 'Ideale per ambienti residenziali'
                }
              ]}
            />
          </div>
        </div>

        {/* All Feature Types */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Tutti i Tipi di Caratteristiche</h2>
          <div className="max-w-2xl">
            <ACFeaturesDisplay 
              acType="trialsplit"
              variant="info"
              title="Set Completo di Caratteristiche"
              // Uses default features which includes all icon types
            />
          </div>
        </div>

        {/* Responsive Demo */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Responsive Layout</h2>
          <p className="text-sm text-gray-600 mb-4">Il componente si adatta alla larghezza del container</p>
          <div className="grid grid-cols-1 gap-4">
            <div className="w-full">
              <ACFeaturesDisplay acType="dualsplit" variant="success" />
            </div>
            <div className="w-3/4">
              <ACFeaturesDisplay acType="dualsplit" variant="info" />
            </div>
            <div className="w-1/2">
              <ACFeaturesDisplay acType="monosplit" variant="warning" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
