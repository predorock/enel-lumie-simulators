export default {
  _initialized: true,
  currentStep: 4,
  currentPageId: 'preventivo-risultato',
  steps: [
    {
      copy: 'Informazioni'
    },
    {
      copy: 'Checklist Configuratore'
    },
    {
      copy: 'Scelta del clima'
    }
  ],
  dynamicPages: [
    {
      id: 'scelta-climatizzatore-monosplit-0',
      title: 'Scegliete insieme il climatizzatore adatto!',
      step: 3,
      isDynamic: true,
      validationRules: {
        required: [
          'formData.airConditioningConfigs.monosplit_0.selected'
        ]
      },
      navigationHooks: {
        beforeNext: '',
        afterNext: '',
        beforePrevious: '',
        afterPrevious: ''
      },
      leftPanelComponents: [
        {
          type: 'Image',
          props: {
            src: 'cubo-condizionatore',
            alt: 'Condizionatore Cubo',
            className: 'z-10 relative w-auto h-auto max-w-[325px] mt-8',
            containerClassName: 'flex justify-center items-center flex-1'
          }
        },
        {
          type: 'CostSummary',
          props: {
            containerClassName: 'mt-auto mb-4 self-end'
          }
        }
      ],
      components: [
        {
          type: 'DescriptionBox',
          props: {
            title: 'Scelta del clima',
            description: 'Nuova installazione senza predisposizione',
            icon: 'monosplit',
            step: '1/3',
            stepColor: 'purple',
            layout: 'horizontal'
          }
        },
        {
          type: 'RoomBanner',
          props: {
            roomSize: '12'
          }
        },
        {
          type: 'BrandSelector',
          props: {
            title: 'Quale brand di climatizzatore preferisce?'
          }
        },
        {
          type: 'InvestmentSelector',
          props: {
            title: 'Qual è l\'investimento più adatto al cliente?'
          }
        },
        {
          type: 'AcProductDisplayContainer',
          props: {
            showLoadingStates: true,
            maxProducts: 100,
            gridClassName: 'grid grid-cols-1 md:grid-cols-2 gap-6',
            className: 'mb-8',
            configKey: 'monosplit_0',
            stateProperty: 'airConditioningConfigs'
          }
        },
        {
          type: 'DisclaimerContainer',
          props: {
            className: 'mt-6 mb-4',
            sections: [
              '<b>* Il prezzo visualizzato può variare in base alla regione in cui si trova la tua casa.</b> Non preoccuparti, il sopralluogo tecnico-commerciale (per la verifica di fattibilità dell’installazione) e l\'installazione sono inclusi nel prezzo.',
              '<b>**Sono disponibili diverse modalità di finanziamento.</b> Assicurati di informare il cliente sui requisiti di accesso alle agevolazioni, il periodo di validità e le spese ammissibili. Consulta la normativa di riferimento o offrigli un supporto diretto, fornendogli tutte le informazioni necessarie, INCLUSI EVENTUALI TAN E TAEG APPLICATI AL FINANZIAMENTO. Ricorda di suggerire al cliente di richiedere il documento \'Informazioni europee di base sul credito ai consumatori\' (SECCI) e una copia del contratto, così potrà avere tutto il necessario per prendere una decisione informata sui costi e sulle condizioni.'
            ]
          }
        }
      ]
    },
    {
      id: 'scelta-climatizzatore-dualsplit-1',
      title: 'Scegliete insieme il climatizzatore adatto!',
      step: 3,
      isDynamic: true,
      validationRules: {
        required: [
          'formData.airConditioningConfigs.dualsplit_0.selected'
        ]
      },
      navigationHooks: {
        beforeNext: '',
        afterNext: '',
        beforePrevious: '',
        afterPrevious: ''
      },
      leftPanelComponents: [
        {
          type: 'Image',
          props: {
            src: 'cubo-condizionatore',
            alt: 'Condizionatore Cubo',
            className: 'z-10 relative w-auto h-auto max-w-[325px] mt-8',
            containerClassName: 'flex justify-center items-center flex-1'
          }
        },
        {
          type: 'CostSummary',
          props: {
            containerClassName: 'mt-auto mb-4 self-end'
          }
        }
      ],
      components: [
        {
          type: 'DescriptionBox',
          props: {
            title: 'Scelta del clima',
            description: 'Nuova installazione con predisposizione',
            icon: 'dualsplit',
            step: '2/3',
            stepColor: 'purple',
            layout: 'horizontal'
          }
        },
        {
          type: 'RoomBanner',
          props: {
            roomSize: '44'
          }
        },
        {
          type: 'BrandSelector',
          props: {
            title: 'Quale brand di climatizzatore preferisce?'
          }
        },
        {
          type: 'InvestmentSelector',
          props: {
            title: 'Qual è l\'investimento più adatto al cliente?'
          }
        },
        {
          type: 'AcProductDisplayContainer',
          props: {
            showLoadingStates: true,
            maxProducts: 100,
            gridClassName: 'grid grid-cols-1 md:grid-cols-2 gap-6',
            className: 'mb-8',
            configKey: 'dualsplit_0',
            stateProperty: 'airConditioningConfigs'
          }
        },
        {
          type: 'DisclaimerContainer',
          props: {
            className: 'mt-6 mb-4',
            sections: [
              '<b>* Il prezzo visualizzato può variare in base alla regione in cui si trova la tua casa.</b> Non preoccuparti, il sopralluogo tecnico-commerciale (per la verifica di fattibilità dell’installazione) e l\'installazione sono inclusi nel prezzo.',
              '<b>**Sono disponibili diverse modalità di finanziamento.</b> Assicurati di informare il cliente sui requisiti di accesso alle agevolazioni, il periodo di validità e le spese ammissibili. Consulta la normativa di riferimento o offrigli un supporto diretto, fornendogli tutte le informazioni necessarie, INCLUSI EVENTUALI TAN E TAEG APPLICATI AL FINANZIAMENTO. Ricorda di suggerire al cliente di richiedere il documento \'Informazioni europee di base sul credito ai consumatori\' (SECCI) e una copia del contratto, così potrà avere tutto il necessario per prendere una decisione informata sui costi e sulle condizioni.'
            ]
          }
        }
      ]
    },
    {
      id: 'scelta-climatizzatore-trialsplit-2',
      title: 'Scegliete insieme il climatizzatore adatto!',
      step: 3,
      isDynamic: true,
      validationRules: {
        required: [
          'formData.airConditioningConfigs.trialsplit_0.selected'
        ]
      },
      navigationHooks: {
        beforeNext: '',
        afterNext: 'report.submitSimulation',
        beforePrevious: '',
        afterPrevious: ''
      },
      leftPanelComponents: [
        {
          type: 'Image',
          props: {
            src: 'cubo-condizionatore',
            alt: 'Condizionatore Cubo',
            className: 'z-10 relative w-auto h-auto max-w-[325px] mt-8',
            containerClassName: 'flex justify-center items-center flex-1'
          }
        },
        {
          type: 'CostSummary',
          props: {
            containerClassName: 'mt-auto mb-4 self-end'
          }
        }
      ],
      components: [
        {
          type: 'DescriptionBox',
          props: {
            title: 'Scelta del clima',
            description: 'Nuova installazione senza predisposizione',
            icon: 'trialsplit',
            step: '3/3',
            stepColor: 'purple',
            layout: 'horizontal'
          }
        },
        {
          type: 'RoomBanner',
          props: {
            roomSize: '55'
          }
        },
        {
          type: 'BrandSelector',
          props: {
            title: 'Quale brand di climatizzatore preferisce?'
          }
        },
        {
          type: 'InvestmentSelector',
          props: {
            title: 'Qual è l\'investimento più adatto al cliente?'
          }
        },
        {
          type: 'AcProductDisplayContainer',
          props: {
            showLoadingStates: true,
            maxProducts: 100,
            gridClassName: 'grid grid-cols-1 md:grid-cols-2 gap-6',
            className: 'mb-8',
            configKey: 'trialsplit_0',
            stateProperty: 'airConditioningConfigs'
          }
        },
        {
          type: 'DisclaimerContainer',
          props: {
            className: 'mt-6 mb-4',
            sections: [
              '<b>* Il prezzo visualizzato può variare in base alla regione in cui si trova la tua casa.</b> Non preoccuparti, il sopralluogo tecnico-commerciale (per la verifica di fattibilità dell’installazione) e l\'installazione sono inclusi nel prezzo.',
              '<b>**Sono disponibili diverse modalità di finanziamento.</b> Assicurati di informare il cliente sui requisiti di accesso alle agevolazioni, il periodo di validità e le spese ammissibili. Consulta la normativa di riferimento o offrigli un supporto diretto, fornendogli tutte le informazioni necessarie, INCLUSI EVENTUALI TAN E TAEG APPLICATI AL FINANZIAMENTO. Ricorda di suggerire al cliente di richiedere il documento \'Informazioni europee di base sul credito ai consumatori\' (SECCI) e una copia del contratto, così potrà avere tutto il necessario per prendere una decisione informata sui costi e sulle condizioni.'
            ]
          }
        }
      ]
    }
  ],
  formData: {
    storeLocation: '111',
    consultantName: '123',
    storePhone: '2323',
    storeCity: 'Albiano d\'Ivrea',
    airconditioningQuantities: {
      monosplit: 1,
      dualsplit: 1,
      trialsplit: 1
    },
    airConditioningConfigs: {
      monosplit_0: {
        installationType: 'nuova_senza_predisposizione',
        roomSize: '12',
        selected: 'daikin-clima-siesta-super-plus-12000'
      },
      dualsplit_0: {
        installationType: 'nuova_con_predisposizione',
        roomSize: '44',
        selected: 'daikin-clima-siesta-super-plus-9000'
      },
      trialsplit_0: {
        installationType: 'nuova_senza_predisposizione',
        roomSize: '55',
        selected: 'daikin-clima-siesta-dual-classic---9000+12000'
      }
    },
    needsRemoval: true,
    removalQuantities: {
      monosplit: 1,
      dualsplit: 1,
      trialsplit: 1
    },
    wantsCleaning: true,
    cleaningQuantities: {
      monosplit: 2,
      dualsplit: 1,
      trialsplit: 0
    }
  },
  cityState: {
    cities: [],
    loading: false,
    error: null,
    lastLoadTime: null
  },
  pricingState: {
    unitPrices: {
      purchase: {
        monosplit: 120,
        dualsplit: 190,
        trialsplit: 290
      },
      removal: {
        monosplit: 60,
        dualsplit: 90,
        trialsplit: 120
      },
      cleaning: {
        monosplit: 75,
        dualsplit: 150,
        trialsplit: 220
      }
    },
    calculations: {
      purchase: {
        monosplit: 120,
        dualsplit: 0,
        trialsplit: 290,
        total: 410
      },
      removal: {
        monosplit: 60,
        dualsplit: 90,
        trialsplit: 120,
        total: 270
      },
      cleaning: {
        monosplit: 150,
        dualsplit: 150,
        trialsplit: 0,
        total: 300
      },
      installationTotal: 1125,
      productsTotal: 5351.280000000001,
      grandTotal: 6476.280000000001
    }
  },
  products: {
    items: [
      {
        id: 'daikin-clima-siesta-super-plus-12000',
        hash: 'ZGFpa2luLWNsaW1hLXNpZXN0YS1zdXBlci1wbHVzLTEyMDAw',
        productName: 'Daikin Clima Siesta Super Plus 12000',
        productBrand: 'Daikin',
        productImage: 'https://greenovationdashboard.azurewebsites.net/Content/climatizzatore-daikin-siesta-super-plus-12000-btu.webp',
        productImageAlt: 'Daikin Clima Siesta Super Plus 12000',
        productUrl: 'https://www.enel.it/it-it/condizionatori/daikin-siesta-super-plus-12000-btu',
        productDescription: 'Per climatizzare stanze fino a 38m²',
        features: [
          {
            key: 'Led',
            name: 'Schermo LED',
            enabled: true
          },
          {
            key: 'Wifi',
            name: 'Connettività Wi-Fi',
            enabled: false
          },
          {
            key: 'Voice',
            name: 'Voice control',
            enabled: false
          },
          {
            key: 'RispEn',
            name: 'Funzione risparmio energetico',
            enabled: true
          },
          {
            key: 'ProgGiorn',
            name: 'Programmazione timer giornaliera',
            enabled: true
          },
          {
            key: 'ProgSett',
            name: 'Programmazione timer settimanale',
            enabled: false
          },
          {
            key: 'Sleep',
            name: 'Funzionalità Sleep',
            enabled: true
          },
          {
            key: 'Turbo',
            name: 'Funzionalità Turbo',
            enabled: true
          },
          {
            key: 'Muffa',
            name: 'Anti muffa, anti batteri, anti polvere, anti allergeni',
            enabled: false
          },
          {
            key: 'Ionizzazione',
            name: 'Ionizzatore',
            enabled: false
          },
          {
            key: 'Autodiagnosi',
            name: 'Autodiagnosi (Funzione Smart Diagnosis)',
            enabled: true
          }
        ],
        price: '1487.76',
        currency: '€',
        priceNote: 'IVA inclusa',
        checkboxLabel: 'Scegli questa soluzione',
        detailsLink: 'Visualizza la scheda dettagli del prodotto',
        category: 'Premium',
        recommendationLevel: 'full',
        recommendationText: 'Top di gamma',
        showRecommendationBadge: true
      },
      {
        id: 'daikin-clima-siesta-super-plus-9000',
        hash: 'ZGFpa2luLWNsaW1hLXNpZXN0YS1zdXBlci1wbHVzLTkwMDA=',
        productName: 'Daikin Clima Siesta Super Plus 9000',
        productBrand: 'Daikin',
        productImage: 'https://greenovationdashboard.azurewebsites.net/Content/climatizzatore-daikin-siesta-super-plus-9000-btu.webp',
        productImageAlt: 'Daikin Clima Siesta Super Plus 9000',
        productUrl: 'https://www.enel.it/it-it/condizionatori/daikin-siesta-super-plus-9000-btu',
        productDescription: 'Per climatizzare stanze fino a 32m²',
        features: [
          {
            key: 'Led',
            name: 'Schermo LED',
            enabled: true
          },
          {
            key: 'Wifi',
            name: 'Connettività Wi-Fi',
            enabled: false
          },
          {
            key: 'Voice',
            name: 'Voice control',
            enabled: false
          },
          {
            key: 'RispEn',
            name: 'Funzione risparmio energetico',
            enabled: true
          },
          {
            key: 'ProgGiorn',
            name: 'Programmazione timer giornaliera',
            enabled: true
          },
          {
            key: 'ProgSett',
            name: 'Programmazione timer settimanale',
            enabled: false
          },
          {
            key: 'Sleep',
            name: 'Funzionalità Sleep',
            enabled: true
          },
          {
            key: 'Turbo',
            name: 'Funzionalità Turbo',
            enabled: true
          },
          {
            key: 'Muffa',
            name: 'Anti muffa, anti batteri, anti polvere, anti allergeni',
            enabled: false
          },
          {
            key: 'Ionizzazione',
            name: 'Ionizzatore',
            enabled: false
          },
          {
            key: 'Autodiagnosi',
            name: 'Autodiagnosi (Funzione Smart Diagnosis)',
            enabled: true
          }
        ],
        price: '1367.76',
        currency: '€',
        priceNote: 'IVA inclusa',
        checkboxLabel: 'Scegli questa soluzione',
        detailsLink: 'Visualizza la scheda dettagli del prodotto',
        category: 'Premium',
        recommendationLevel: 'full',
        recommendationText: 'Top di gamma',
        showRecommendationBadge: true
      },
      {
        id: 'daikin-clima-siesta-dual-classic---9000+12000',
        hash: 'ZGFpa2luLWNsaW1hLXNpZXN0YS1kdWFsLWNsYXNzaWMtLS05MDAwKzEyMDAw',
        productName: 'Daikin Clima Siesta Dual Classic - 9000+12000',
        productBrand: 'Daikin',
        productImage: 'https://greenovationdashboard.azurewebsites.net/Content/climatizzatore-daikin-siesta-classic-dual-9000-12000-btu.webp',
        productImageAlt: 'Daikin Clima Siesta Dual Classic - 9000+12000',
        productUrl: 'https://www.enel.it/it-it/condizionatori/daikin-siesta-classic-dual-9000-12000-btu',
        productDescription: 'Per climatizzare stanze fino a 45m²',
        features: [
          {
            key: 'Led',
            name: 'Schermo LED',
            enabled: true
          },
          {
            key: 'Wifi',
            name: 'Connettività Wi-Fi',
            enabled: false
          },
          {
            key: 'Voice',
            name: 'Voice control',
            enabled: false
          },
          {
            key: 'RispEn',
            name: 'Funzione risparmio energetico',
            enabled: true
          },
          {
            key: 'ProgGiorn',
            name: 'Programmazione timer giornaliera',
            enabled: true
          },
          {
            key: 'ProgSett',
            name: 'Programmazione timer settimanale',
            enabled: false
          },
          {
            key: 'Sleep',
            name: 'Funzionalità Sleep',
            enabled: true
          },
          {
            key: 'Turbo',
            name: 'Funzionalità Turbo',
            enabled: true
          },
          {
            key: 'Muffa',
            name: 'Anti muffa, anti batteri, anti polvere, anti allergeni',
            enabled: false
          },
          {
            key: 'Ionizzazione',
            name: 'Ionizzatore',
            enabled: false
          },
          {
            key: 'Autodiagnosi',
            name: 'Autodiagnosi (Funzione Smart Diagnosis)',
            enabled: true
          }
        ],
        price: '2495.76',
        currency: '€',
        priceNote: 'IVA inclusa',
        checkboxLabel: 'Scegli questa soluzione',
        detailsLink: 'Visualizza la scheda dettagli del prodotto',
        category: 'Premium',
        recommendationLevel: 'full',
        recommendationText: 'Top di gamma',
        showRecommendationBadge: true
      },
      {
        id: 'daikin-clima-siesta-trial-classic---9000+9000+12000',
        hash: 'ZGFpa2luLWNsaW1hLXNpZXN0YS10cmlhbC1jbGFzc2ljLS0tOTAwMCs5MDAwKzEyMDAw',
        productName: 'Daikin Clima Siesta Trial Classic - 9000+9000+12000',
        productBrand: 'Daikin',
        productImage: 'https://greenovationdashboard.azurewebsites.net/Content/climatizzatore-daikin-siesta-classic-trial-9000-12000-btu.webp',
        productImageAlt: 'Daikin Clima Siesta Trial Classic - 9000+9000+12000',
        productUrl: 'https://www.enel.it/it-it/condizionatori/daikin-siesta-classic-trial-9000-12000-btu',
        productDescription: 'Per climatizzare stanze fino a 57m²',
        features: [
          {
            key: 'Led',
            name: 'Schermo LED',
            enabled: true
          },
          {
            key: 'Wifi',
            name: 'Connettività Wi-Fi',
            enabled: false
          },
          {
            key: 'Voice',
            name: 'Voice control',
            enabled: false
          },
          {
            key: 'RispEn',
            name: 'Funzione risparmio energetico',
            enabled: true
          },
          {
            key: 'ProgGiorn',
            name: 'Programmazione timer giornaliera',
            enabled: true
          },
          {
            key: 'ProgSett',
            name: 'Programmazione timer settimanale',
            enabled: false
          },
          {
            key: 'Sleep',
            name: 'Funzionalità Sleep',
            enabled: true
          },
          {
            key: 'Turbo',
            name: 'Funzionalità Turbo',
            enabled: true
          },
          {
            key: 'Muffa',
            name: 'Anti muffa, anti batteri, anti polvere, anti allergeni',
            enabled: false
          },
          {
            key: 'Ionizzazione',
            name: 'Ionizzatore',
            enabled: false
          },
          {
            key: 'Autodiagnosi',
            name: 'Autodiagnosi (Funzione Smart Diagnosis)',
            enabled: true
          }
        ],
        price: '3599.76',
        currency: '€',
        priceNote: 'IVA inclusa',
        checkboxLabel: 'Scegli questa soluzione',
        detailsLink: 'Visualizza la scheda dettagli del prodotto',
        category: 'Premium',
        recommendationLevel: 'full',
        recommendationText: 'Top di gamma',
        showRecommendationBadge: true
      },
      {
        id: 'lg-libero-smart-12000-btu/h',
        hash: 'bGctbGliZXJvLXNtYXJ0LTEyMDAwLWJ0dS9o',
        productName: 'LG Libero SMART 12000 btu/h',
        productBrand: 'LG',
        productImage: 'https://greenovationdashboard.azurewebsites.net/Content/climatizzatore-lg-libero-smart-12000-btu.webp',
        productImageAlt: 'LG Libero SMART 12000 btu/h',
        productUrl: 'https://www.enel.it/it-it/condizionatori/lg-libero-smart-12000-btu',
        productDescription: 'Per climatizzare stanze fino a 38m²',
        features: [
          {
            key: 'Led',
            name: 'Schermo LED',
            enabled: true
          },
          {
            key: 'Wifi',
            name: 'Connettività Wi-Fi',
            enabled: true
          },
          {
            key: 'Voice',
            name: 'Voice control',
            enabled: true
          },
          {
            key: 'RispEn',
            name: 'Funzione risparmio energetico',
            enabled: true
          },
          {
            key: 'ProgGiorn',
            name: 'Programmazione timer giornaliera',
            enabled: true
          },
          {
            key: 'ProgSett',
            name: 'Programmazione timer settimanale',
            enabled: true
          },
          {
            key: 'Sleep',
            name: 'Funzionalità Sleep',
            enabled: true
          },
          {
            key: 'Turbo',
            name: 'Funzionalità Turbo',
            enabled: true
          },
          {
            key: 'Muffa',
            name: 'Anti muffa, anti batteri, anti polvere, anti allergeni',
            enabled: true
          },
          {
            key: 'Ionizzazione',
            name: 'Ionizzatore',
            enabled: false
          },
          {
            key: 'Autodiagnosi',
            name: 'Autodiagnosi (Funzione Smart Diagnosis)',
            enabled: true
          }
        ],
        price: '911.76',
        currency: '€',
        priceNote: 'IVA inclusa',
        checkboxLabel: 'Scegli questa soluzione',
        detailsLink: 'Visualizza la scheda dettagli del prodotto',
        category: 'Medium',
        recommendationLevel: 'half',
        recommendationText: 'Miglio rapporto qualità/prezzo',
        showRecommendationBadge: true
      },
      {
        id: 'lg-libero-smart-9000-btu/h',
        hash: 'bGctbGliZXJvLXNtYXJ0LTkwMDAtYnR1L2g=',
        productName: 'LG Libero SMART 9000 btu/h',
        productBrand: 'LG',
        productImage: 'https://greenovationdashboard.azurewebsites.net/Content/climatizzatore-lg-libero-smart-9000-btu.webp',
        productImageAlt: 'LG Libero SMART 9000 btu/h',
        productUrl: 'https://www.enel.it/it-it/condizionatori/lg-libero-smart-9000-btu',
        productDescription: 'Per climatizzare stanze fino a 32m²',
        features: [
          {
            key: 'Led',
            name: 'Schermo LED',
            enabled: true
          },
          {
            key: 'Wifi',
            name: 'Connettività Wi-Fi',
            enabled: true
          },
          {
            key: 'Voice',
            name: 'Voice control',
            enabled: true
          },
          {
            key: 'RispEn',
            name: 'Funzione risparmio energetico',
            enabled: true
          },
          {
            key: 'ProgGiorn',
            name: 'Programmazione timer giornaliera',
            enabled: true
          },
          {
            key: 'ProgSett',
            name: 'Programmazione timer settimanale',
            enabled: true
          },
          {
            key: 'Sleep',
            name: 'Funzionalità Sleep',
            enabled: true
          },
          {
            key: 'Turbo',
            name: 'Funzionalità Turbo',
            enabled: true
          },
          {
            key: 'Muffa',
            name: 'Anti muffa, anti batteri, anti polvere, anti allergeni',
            enabled: true
          },
          {
            key: 'Ionizzazione',
            name: 'Ionizzatore',
            enabled: false
          },
          {
            key: 'Autodiagnosi',
            name: 'Autodiagnosi (Funzione Smart Diagnosis)',
            enabled: true
          }
        ],
        price: '863.76',
        currency: '€',
        priceNote: 'IVA inclusa',
        checkboxLabel: 'Scegli questa soluzione',
        detailsLink: 'Visualizza la scheda dettagli del prodotto',
        category: 'Medium',
        recommendationLevel: 'half',
        recommendationText: 'Miglio rapporto qualità/prezzo',
        showRecommendationBadge: true
      },
      {
        id: 'lg-libero-smart-9+12-btu/h',
        hash: 'bGctbGliZXJvLXNtYXJ0LTkrMTItYnR1L2g=',
        productName: 'LG Libero SMART  9+12 btu/h',
        productBrand: 'LG',
        productImage: 'https://greenovationdashboard.azurewebsites.net/Content/climatizzatore-lg-libero-smart-dual-9000-12000-btu.webp',
        productImageAlt: 'LG Libero SMART  9+12 btu/h',
        productUrl: 'https://www.enel.it/it-it/condizionatori/lg-libero-smart-dual-9000-12000-btu',
        productDescription: 'Per climatizzare stanze fino a 45m²',
        features: [
          {
            key: 'Led',
            name: 'Schermo LED',
            enabled: true
          },
          {
            key: 'Wifi',
            name: 'Connettività Wi-Fi',
            enabled: true
          },
          {
            key: 'Voice',
            name: 'Voice control',
            enabled: true
          },
          {
            key: 'RispEn',
            name: 'Funzione risparmio energetico',
            enabled: true
          },
          {
            key: 'ProgGiorn',
            name: 'Programmazione timer giornaliera',
            enabled: true
          },
          {
            key: 'ProgSett',
            name: 'Programmazione timer settimanale',
            enabled: true
          },
          {
            key: 'Sleep',
            name: 'Funzionalità Sleep',
            enabled: true
          },
          {
            key: 'Turbo',
            name: 'Funzionalità Turbo',
            enabled: true
          },
          {
            key: 'Muffa',
            name: 'Anti muffa, anti batteri, anti polvere, anti allergeni',
            enabled: true
          },
          {
            key: 'Ionizzazione',
            name: 'Ionizzatore',
            enabled: false
          },
          {
            key: 'Autodiagnosi',
            name: 'Autodiagnosi (Funzione Smart Diagnosis)',
            enabled: true
          }
        ],
        price: '1799.76',
        currency: '€',
        priceNote: 'IVA inclusa',
        checkboxLabel: 'Scegli questa soluzione',
        detailsLink: 'Visualizza la scheda dettagli del prodotto',
        category: 'Medium',
        recommendationLevel: 'half',
        recommendationText: 'Miglio rapporto qualità/prezzo',
        showRecommendationBadge: true
      },
      {
        id: 'lg-libero-smart-9+9+12-btu/h',
        hash: 'bGctbGliZXJvLXNtYXJ0LTkrOSsxMi1idHUvaA==',
        productName: 'LG Libero SMART 9+9+12 btu/h',
        productBrand: 'LG',
        productImage: 'https://greenovationdashboard.azurewebsites.net/Content/climatizzatore-lg-libero-smart-trial-9000-12000-btu.webp',
        productImageAlt: 'LG Libero SMART 9+9+12 btu/h',
        productUrl: 'https://www.enel.it/it-it/condizionatori/lg-libero-smart-trial-9000-12000-btu',
        productDescription: 'Per climatizzare stanze fino a 57m²',
        features: [
          {
            key: 'Led',
            name: 'Schermo LED',
            enabled: true
          },
          {
            key: 'Wifi',
            name: 'Connettività Wi-Fi',
            enabled: true
          },
          {
            key: 'Voice',
            name: 'Voice control',
            enabled: true
          },
          {
            key: 'RispEn',
            name: 'Funzione risparmio energetico',
            enabled: true
          },
          {
            key: 'ProgGiorn',
            name: 'Programmazione timer giornaliera',
            enabled: true
          },
          {
            key: 'ProgSett',
            name: 'Programmazione timer settimanale',
            enabled: true
          },
          {
            key: 'Sleep',
            name: 'Funzionalità Sleep',
            enabled: true
          },
          {
            key: 'Turbo',
            name: 'Funzionalità Turbo',
            enabled: true
          },
          {
            key: 'Muffa',
            name: 'Anti muffa, anti batteri, anti polvere, anti allergeni',
            enabled: true
          },
          {
            key: 'Ionizzazione',
            name: 'Ionizzatore',
            enabled: false
          },
          {
            key: 'Autodiagnosi',
            name: 'Autodiagnosi (Funzione Smart Diagnosis)',
            enabled: true
          }
        ],
        price: '2495.69',
        currency: '€',
        priceNote: 'IVA inclusa',
        checkboxLabel: 'Scegli questa soluzione',
        detailsLink: 'Visualizza la scheda dettagli del prodotto',
        category: 'Medium',
        recommendationLevel: 'half',
        recommendationText: 'Miglio rapporto qualità/prezzo',
        showRecommendationBadge: true
      },
      {
        id: 'lg-libero-smart-18000-btu/h',
        hash: 'bGctbGliZXJvLXNtYXJ0LTE4MDAwLWJ0dS9o',
        productName: 'LG Libero SMART 18000 btu/h',
        productBrand: 'LG',
        productImage: 'https://greenovationdashboard.azurewebsites.net',
        productImageAlt: 'LG Libero SMART 18000 btu/h',
        productUrl: 'non c\'è sul sito!',
        productDescription: 'Per climatizzare stanze fino a 40m²',
        features: [
          {
            key: 'Led',
            name: 'Schermo LED',
            enabled: true
          },
          {
            key: 'Wifi',
            name: 'Connettività Wi-Fi',
            enabled: true
          },
          {
            key: 'Voice',
            name: 'Voice control',
            enabled: true
          },
          {
            key: 'RispEn',
            name: 'Funzione risparmio energetico',
            enabled: true
          },
          {
            key: 'ProgGiorn',
            name: 'Programmazione timer giornaliera',
            enabled: true
          },
          {
            key: 'ProgSett',
            name: 'Programmazione timer settimanale',
            enabled: true
          },
          {
            key: 'Sleep',
            name: 'Funzionalità Sleep',
            enabled: true
          },
          {
            key: 'Turbo',
            name: 'Funzionalità Turbo',
            enabled: true
          },
          {
            key: 'Muffa',
            name: 'Anti muffa, anti batteri, anti polvere, anti allergeni',
            enabled: true
          },
          {
            key: 'Ionizzazione',
            name: 'Ionizzatore',
            enabled: false
          },
          {
            key: 'Autodiagnosi',
            name: 'Autodiagnosi (Funzione Smart Diagnosis)',
            enabled: true
          }
        ],
        price: '1103.76',
        currency: '€',
        priceNote: 'IVA inclusa',
        checkboxLabel: 'Scegli questa soluzione',
        detailsLink: 'Visualizza la scheda dettagli del prodotto',
        category: 'Medium',
        recommendationLevel: 'half',
        recommendationText: 'Miglio rapporto qualità/prezzo',
        showRecommendationBadge: true
      },
      {
        id: 'comfee-clima-cfw09a-9000-btu/h-by-midea',
        hash: 'Y29tZmVlLWNsaW1hLWNmdzA5YS05MDAwLWJ0dS9oLWJ5LW1pZGVh',
        productName: 'Comfee Clima CFW09A 9000 btu/h by Midea',
        productBrand: 'Comfee',
        productImage: 'https://greenovationdashboard.azurewebsites.net/Content/climatizzatore-comfee-cfw09a-9000-btu.webp',
        productImageAlt: 'Comfee Clima CFW09A 9000 btu/h by Midea',
        productUrl: 'https://www.enel.it/it-it/condizionatori/comfee-cfw09a-9000-btu',
        productDescription: 'Per climatizzare stanze fino a 32m²',
        features: [
          {
            key: 'Led',
            name: 'Schermo LED',
            enabled: true
          },
          {
            key: 'Wifi',
            name: 'Connettività Wi-Fi',
            enabled: true
          },
          {
            key: 'Voice',
            name: 'Voice control',
            enabled: false
          },
          {
            key: 'RispEn',
            name: 'Funzione risparmio energetico',
            enabled: true
          },
          {
            key: 'ProgGiorn',
            name: 'Programmazione timer giornaliera',
            enabled: true
          },
          {
            key: 'ProgSett',
            name: 'Programmazione timer settimanale',
            enabled: false
          },
          {
            key: 'Sleep',
            name: 'Funzionalità Sleep',
            enabled: true
          },
          {
            key: 'Turbo',
            name: 'Funzionalità Turbo',
            enabled: true
          },
          {
            key: 'Muffa',
            name: 'Anti muffa, anti batteri, anti polvere, anti allergeni',
            enabled: true
          },
          {
            key: 'Ionizzazione',
            name: 'Ionizzatore',
            enabled: false
          },
          {
            key: 'Autodiagnosi',
            name: 'Autodiagnosi (Funzione Smart Diagnosis)',
            enabled: true
          }
        ],
        price: '815.76',
        currency: '€',
        priceNote: 'IVA inclusa',
        checkboxLabel: 'Scegli questa soluzione',
        detailsLink: 'Visualizza la scheda dettagli del prodotto',
        category: 'Entry',
        recommendationLevel: 'empty',
        recommendationText: 'Più conveniente',
        showRecommendationBadge: true
      },
      {
        id: 'comfee-clima-cfw18b-18000-btu/h-by-midea',
        hash: 'Y29tZmVlLWNsaW1hLWNmdzE4Yi0xODAwMC1idHUvaC1ieS1taWRlYQ==',
        productName: 'Comfee Clima CFW18B 18000 btu/h by Midea',
        productBrand: 'Comfee',
        productImage: 'https://greenovationdashboard.azurewebsites.net/Content/climatizzatore-comfee-cfw18a-18000-btu.webp',
        productImageAlt: 'Comfee Clima CFW18B 18000 btu/h by Midea',
        productUrl: 'https://www.enel.it/it-it/condizionatori/comfee-cfw18a-18000-btu',
        productDescription: 'Per climatizzare stanze fino a 40m²',
        features: [
          {
            key: 'Led',
            name: 'Schermo LED',
            enabled: true
          },
          {
            key: 'Wifi',
            name: 'Connettività Wi-Fi',
            enabled: true
          },
          {
            key: 'Voice',
            name: 'Voice control',
            enabled: false
          },
          {
            key: 'RispEn',
            name: 'Funzione risparmio energetico',
            enabled: true
          },
          {
            key: 'ProgGiorn',
            name: 'Programmazione timer giornaliera',
            enabled: true
          },
          {
            key: 'ProgSett',
            name: 'Programmazione timer settimanale',
            enabled: false
          },
          {
            key: 'Sleep',
            name: 'Funzionalità Sleep',
            enabled: true
          },
          {
            key: 'Turbo',
            name: 'Funzionalità Turbo',
            enabled: true
          },
          {
            key: 'Muffa',
            name: 'Anti muffa, anti batteri, anti polvere, anti allergeni',
            enabled: true
          },
          {
            key: 'Ionizzazione',
            name: 'Ionizzatore',
            enabled: false
          },
          {
            key: 'Autodiagnosi',
            name: 'Autodiagnosi (Funzione Smart Diagnosis)',
            enabled: true
          }
        ],
        price: '1103.76',
        currency: '€',
        priceNote: 'IVA inclusa',
        checkboxLabel: 'Scegli questa soluzione',
        detailsLink: 'Visualizza la scheda dettagli del prodotto',
        category: 'Entry',
        recommendationLevel: 'empty',
        recommendationText: 'Più conveniente',
        showRecommendationBadge: true
      },
      {
        id: 'comfee-clima-cfw12a-12000-btu/h-by-midea',
        hash: 'Y29tZmVlLWNsaW1hLWNmdzEyYS0xMjAwMC1idHUvaC1ieS1taWRlYQ==',
        productName: 'Comfee Clima CFW12A 12000 btu/h by Midea',
        productBrand: 'Comfee',
        productImage: 'https://greenovationdashboard.azurewebsites.net/Content/climatizzatore-comfee-cfw12a-12000-btu.webp',
        productImageAlt: 'Comfee Clima CFW12A 12000 btu/h by Midea',
        productUrl: 'https://www.enel.it/it-it/condizionatori/comfee-cfw12a-12000-btu',
        productDescription: 'Per climatizzare stanze fino a 38m²',
        features: [
          {
            key: 'Led',
            name: 'Schermo LED',
            enabled: true
          },
          {
            key: 'Wifi',
            name: 'Connettività Wi-Fi',
            enabled: true
          },
          {
            key: 'Voice',
            name: 'Voice control',
            enabled: false
          },
          {
            key: 'RispEn',
            name: 'Funzione risparmio energetico',
            enabled: true
          },
          {
            key: 'ProgGiorn',
            name: 'Programmazione timer giornaliera',
            enabled: true
          },
          {
            key: 'ProgSett',
            name: 'Programmazione timer settimanale',
            enabled: false
          },
          {
            key: 'Sleep',
            name: 'Funzionalità Sleep',
            enabled: true
          },
          {
            key: 'Turbo',
            name: 'Funzionalità Turbo',
            enabled: true
          },
          {
            key: 'Muffa',
            name: 'Anti muffa, anti batteri, anti polvere, anti allergeni',
            enabled: true
          },
          {
            key: 'Ionizzazione',
            name: 'Ionizzatore',
            enabled: false
          },
          {
            key: 'Autodiagnosi',
            name: 'Autodiagnosi (Funzione Smart Diagnosis)',
            enabled: true
          }
        ],
        price: '887.76',
        currency: '€',
        priceNote: 'IVA inclusa',
        checkboxLabel: 'Scegli questa soluzione',
        detailsLink: 'Visualizza la scheda dettagli del prodotto',
        category: 'Entry',
        recommendationLevel: 'empty',
        recommendationText: 'Più conveniente',
        showRecommendationBadge: true
      },
      {
        id: 'comfee-clima-9+12-btu/h-2fb-18k-+-cfw09a-+-12a-by-midea',
        hash: 'Y29tZmVlLWNsaW1hLTkrMTItYnR1L2gtMmZiLTE4ay0rLWNmdzA5YS0rLTEyYS1ieS1taWRlYQ==',
        productName: 'Comfee Clima 9+12 btu/h 2FB-18K + CFW09A + 12A by Midea',
        productBrand: 'Comfee',
        productImage: 'https://greenovationdashboard.azurewebsites.net/Content/climatizzatore-comfee-cfw-dual-9000-12000-btu.webp',
        productImageAlt: 'Comfee Clima 9+12 btu/h 2FB-18K + CFW09A + 12A by Midea',
        productUrl: 'https://www.enel.it/it-it/condizionatori/comfee-cfw-dual-9000-12000-btu',
        productDescription: 'Per climatizzare stanze fino a 45m²',
        features: [
          {
            key: 'Led',
            name: 'Schermo LED',
            enabled: true
          },
          {
            key: 'Wifi',
            name: 'Connettività Wi-Fi',
            enabled: true
          },
          {
            key: 'Voice',
            name: 'Voice control',
            enabled: false
          },
          {
            key: 'RispEn',
            name: 'Funzione risparmio energetico',
            enabled: true
          },
          {
            key: 'ProgGiorn',
            name: 'Programmazione timer giornaliera',
            enabled: true
          },
          {
            key: 'ProgSett',
            name: 'Programmazione timer settimanale',
            enabled: false
          },
          {
            key: 'Sleep',
            name: 'Funzionalità Sleep',
            enabled: true
          },
          {
            key: 'Turbo',
            name: 'Funzionalità Turbo',
            enabled: true
          },
          {
            key: 'Muffa',
            name: 'Anti muffa, anti batteri, anti polvere, anti allergeni',
            enabled: true
          },
          {
            key: 'Ionizzazione',
            name: 'Ionizzatore',
            enabled: false
          },
          {
            key: 'Autodiagnosi',
            name: 'Autodiagnosi (Funzione Smart Diagnosis)',
            enabled: true
          }
        ],
        price: '1439.76',
        currency: '€',
        priceNote: 'IVA inclusa',
        checkboxLabel: 'Scegli questa soluzione',
        detailsLink: 'Visualizza la scheda dettagli del prodotto',
        category: 'Entry',
        recommendationLevel: 'empty',
        recommendationText: 'Più conveniente',
        showRecommendationBadge: true
      },
      {
        id: 'comfee-clima-9-+-9-+-12-btu/h-3fb-27k-+-cfw09a-x2-+-12a-by-midea',
        hash: 'Y29tZmVlLWNsaW1hLTktKy05LSstMTItYnR1L2gtM2ZiLTI3ay0rLWNmdzA5YS14Mi0rLTEyYS1ieS1taWRlYQ==',
        productName: 'Comfee Clima 9 + 9 + 12 btu/h 3FB-27K + CFW09A x2 + 12A by Midea',
        productBrand: 'Comfee',
        productImage: 'https://greenovationdashboard.azurewebsites.net/Content/climatizzatore-comfee-cfw-trial-9000-12000-btu.webp',
        productImageAlt: 'Comfee Clima 9 + 9 + 12 btu/h 3FB-27K + CFW09A x2 + 12A by Midea',
        productUrl: 'https://www.enel.it/it-it/condizionatori/comfee-cfw-trial-9000-12000-btu',
        productDescription: 'Per climatizzare stanze fino a 57m²',
        features: [
          {
            key: 'Led',
            name: 'Schermo LED',
            enabled: true
          },
          {
            key: 'Wifi',
            name: 'Connettività Wi-Fi',
            enabled: true
          },
          {
            key: 'Voice',
            name: 'Voice control',
            enabled: false
          },
          {
            key: 'RispEn',
            name: 'Funzione risparmio energetico',
            enabled: true
          },
          {
            key: 'ProgGiorn',
            name: 'Programmazione timer giornaliera',
            enabled: true
          },
          {
            key: 'ProgSett',
            name: 'Programmazione timer settimanale',
            enabled: false
          },
          {
            key: 'Sleep',
            name: 'Funzionalità Sleep',
            enabled: true
          },
          {
            key: 'Turbo',
            name: 'Funzionalità Turbo',
            enabled: true
          },
          {
            key: 'Muffa',
            name: 'Anti muffa, anti batteri, anti polvere, anti allergeni',
            enabled: true
          },
          {
            key: 'Ionizzazione',
            name: 'Ionizzatore',
            enabled: false
          },
          {
            key: 'Autodiagnosi',
            name: 'Autodiagnosi (Funzione Smart Diagnosis)',
            enabled: true
          }
        ],
        price: '1823.76',
        currency: '€',
        priceNote: 'IVA inclusa',
        checkboxLabel: 'Scegli questa soluzione',
        detailsLink: 'Visualizza la scheda dettagli del prodotto',
        category: 'Entry',
        recommendationLevel: 'empty',
        recommendationText: 'Più conveniente',
        showRecommendationBadge: true
      },
      {
        id: 'lg-libero-s-12000-btu/h',
        hash: 'bGctbGliZXJvLXMtMTIwMDAtYnR1L2g=',
        productName: 'LG Libero S 12000 btu/h',
        productBrand: 'LG',
        productImage: 'https://greenovationdashboard.azurewebsites.net/Content/climatizzatore-lg-libero-s-12000-btu.webp',
        productImageAlt: 'LG Libero S 12000 btu/h',
        productUrl: 'https://www.enel.it/it-it/condizionatori/lg-libero-s-12000-btu',
        productDescription: 'Per climatizzare stanze fino a 38m²',
        features: [
          {
            key: 'Led',
            name: 'Schermo LED',
            enabled: true
          },
          {
            key: 'Wifi',
            name: 'Connettività Wi-Fi',
            enabled: false
          },
          {
            key: 'Voice',
            name: 'Voice control',
            enabled: false
          },
          {
            key: 'RispEn',
            name: 'Funzione risparmio energetico',
            enabled: true
          },
          {
            key: 'ProgGiorn',
            name: 'Programmazione timer giornaliera',
            enabled: true
          },
          {
            key: 'ProgSett',
            name: 'Programmazione timer settimanale',
            enabled: false
          },
          {
            key: 'Sleep',
            name: 'Funzionalità Sleep',
            enabled: true
          },
          {
            key: 'Turbo',
            name: 'Funzionalità Turbo',
            enabled: true
          },
          {
            key: 'Muffa',
            name: 'Anti muffa, anti batteri, anti polvere, anti allergeni',
            enabled: true
          },
          {
            key: 'Ionizzazione',
            name: 'Ionizzatore',
            enabled: false
          },
          {
            key: 'Autodiagnosi',
            name: 'Autodiagnosi (Funzione Smart Diagnosis)',
            enabled: true
          }
        ],
        price: '887.76',
        currency: '€',
        priceNote: 'IVA inclusa',
        checkboxLabel: 'Scegli questa soluzione',
        detailsLink: 'Visualizza la scheda dettagli del prodotto',
        category: '',
        showRecommendationBadge: false
      },
      {
        id: 'lg-libero-s-9000-btu/h',
        hash: 'bGctbGliZXJvLXMtOTAwMC1idHUvaA==',
        productName: 'LG Libero S 9000 btu/h',
        productBrand: 'LG',
        productImage: 'https://greenovationdashboard.azurewebsites.net/Content/climatizzatore-lg-libero-s-9000-btu.webp',
        productImageAlt: 'LG Libero S 9000 btu/h',
        productUrl: 'https://www.enel.it/it-it/condizionatori/lg-libero-s-9000-btu',
        productDescription: 'Per climatizzare stanze fino a 32m²',
        features: [
          {
            key: 'Led',
            name: 'Schermo LED',
            enabled: true
          },
          {
            key: 'Wifi',
            name: 'Connettività Wi-Fi',
            enabled: false
          },
          {
            key: 'Voice',
            name: 'Voice control',
            enabled: false
          },
          {
            key: 'RispEn',
            name: 'Funzione risparmio energetico',
            enabled: true
          },
          {
            key: 'ProgGiorn',
            name: 'Programmazione timer giornaliera',
            enabled: true
          },
          {
            key: 'ProgSett',
            name: 'Programmazione timer settimanale',
            enabled: false
          },
          {
            key: 'Sleep',
            name: 'Funzionalità Sleep',
            enabled: true
          },
          {
            key: 'Turbo',
            name: 'Funzionalità Turbo',
            enabled: true
          },
          {
            key: 'Muffa',
            name: 'Anti muffa, anti batteri, anti polvere, anti allergeni',
            enabled: true
          },
          {
            key: 'Ionizzazione',
            name: 'Ionizzatore',
            enabled: false
          },
          {
            key: 'Autodiagnosi',
            name: 'Autodiagnosi (Funzione Smart Diagnosis)',
            enabled: true
          }
        ],
        price: '815.76',
        currency: '€',
        priceNote: 'IVA inclusa',
        checkboxLabel: 'Scegli questa soluzione',
        detailsLink: 'Visualizza la scheda dettagli del prodotto',
        category: '',
        showRecommendationBadge: false
      },
      {
        id: 'comfee-clima-maestrale-abw09a-9000-btu/h-by-midea',
        hash: 'Y29tZmVlLWNsaW1hLW1hZXN0cmFsZS1hYncwOWEtOTAwMC1idHUvaC1ieS1taWRlYQ==',
        productName: 'Comfee Clima Maestrale ABW09A  9000 btu/h by Midea',
        productBrand: 'Comfee',
        productImage: 'https://greenovationdashboard.azurewebsites.net/Content/climatizzatore-comfee-maestrale-abw09a-9000-btu.webp',
        productImageAlt: 'Comfee Clima Maestrale ABW09A  9000 btu/h by Midea',
        productUrl: 'https://www.enel.it/it-it/condizionatori/comfee-maestrale-abw09a-9000-btu',
        productDescription: 'Per climatizzare stanze fino a 32m²',
        features: [
          {
            key: 'Led',
            name: 'Schermo LED',
            enabled: true
          },
          {
            key: 'Wifi',
            name: 'Connettività Wi-Fi',
            enabled: true
          },
          {
            key: 'Voice',
            name: 'Voice control',
            enabled: false
          },
          {
            key: 'RispEn',
            name: 'Funzione risparmio energetico',
            enabled: true
          },
          {
            key: 'ProgGiorn',
            name: 'Programmazione timer giornaliera',
            enabled: true
          },
          {
            key: 'ProgSett',
            name: 'Programmazione timer settimanale',
            enabled: false
          },
          {
            key: 'Sleep',
            name: 'Funzionalità Sleep',
            enabled: true
          },
          {
            key: 'Turbo',
            name: 'Funzionalità Turbo',
            enabled: true
          },
          {
            key: 'Muffa',
            name: 'Anti muffa, anti batteri, anti polvere, anti allergeni',
            enabled: true
          },
          {
            key: 'Ionizzazione',
            name: 'Ionizzatore',
            enabled: false
          },
          {
            key: 'Autodiagnosi',
            name: 'Autodiagnosi (Funzione Smart Diagnosis)',
            enabled: true
          }
        ],
        price: '959.76',
        currency: '€',
        priceNote: 'IVA inclusa',
        checkboxLabel: 'Scegli questa soluzione',
        detailsLink: 'Visualizza la scheda dettagli del prodotto',
        category: '',
        showRecommendationBadge: false
      },
      {
        id: 'comfee-clima-maestrale-abw12a-12000-btu/h-by-midea',
        hash: 'Y29tZmVlLWNsaW1hLW1hZXN0cmFsZS1hYncxMmEtMTIwMDAtYnR1L2gtYnktbWlkZWE=',
        productName: 'Comfee Clima Maestrale ABW12A 12000 btu/h by Midea',
        productBrand: 'Comfee',
        productImage: 'https://greenovationdashboard.azurewebsites.net/Content/climatizzatore-comfee-maestrale-abw12a-12000-btu.webp',
        productImageAlt: 'Comfee Clima Maestrale ABW12A 12000 btu/h by Midea',
        productUrl: 'https://www.enel.it/it-it/condizionatori/comfee-maestrale-abw12a-12000-btu',
        productDescription: 'Per climatizzare stanze fino a 38m²',
        features: [
          {
            key: 'Led',
            name: 'Schermo LED',
            enabled: true
          },
          {
            key: 'Wifi',
            name: 'Connettività Wi-Fi',
            enabled: true
          },
          {
            key: 'Voice',
            name: 'Voice control',
            enabled: false
          },
          {
            key: 'RispEn',
            name: 'Funzione risparmio energetico',
            enabled: true
          },
          {
            key: 'ProgGiorn',
            name: 'Programmazione timer giornaliera',
            enabled: true
          },
          {
            key: 'ProgSett',
            name: 'Programmazione timer settimanale',
            enabled: false
          },
          {
            key: 'Sleep',
            name: 'Funzionalità Sleep',
            enabled: true
          },
          {
            key: 'Turbo',
            name: 'Funzionalità Turbo',
            enabled: true
          },
          {
            key: 'Muffa',
            name: 'Anti muffa, anti batteri, anti polvere, anti allergeni',
            enabled: true
          },
          {
            key: 'Ionizzazione',
            name: 'Ionizzatore',
            enabled: false
          },
          {
            key: 'Autodiagnosi',
            name: 'Autodiagnosi (Funzione Smart Diagnosis)',
            enabled: true
          }
        ],
        price: '1007.76',
        currency: '€',
        priceNote: 'IVA inclusa',
        checkboxLabel: 'Scegli questa soluzione',
        detailsLink: 'Visualizza la scheda dettagli del prodotto',
        category: '',
        showRecommendationBadge: false
      },
      {
        id: 'comfee-clima-maestrale-9-+-12-btu/h-2fb-18k-+-abw09a-+-12a-by-midea',
        hash: 'Y29tZmVlLWNsaW1hLW1hZXN0cmFsZS05LSstMTItYnR1L2gtMmZiLTE4ay0rLWFidzA5YS0rLTEyYS1ieS1taWRlYQ==',
        productName: 'Comfee Clima Maestrale 9 + 12 btu/h 2FB-18K + ABW09A + 12A by Midea',
        productBrand: 'Comfee',
        productImage: 'https://greenovationdashboard.azurewebsites.net/Content/climatizzatore-comfee-maestrale-abw-dual-9000-12000-btu.webp',
        productImageAlt: 'Comfee Clima Maestrale 9 + 12 btu/h 2FB-18K + ABW09A + 12A by Midea',
        productUrl: 'https://www.enel.it/it-it/condizionatori/comfee-maestrale-abw-dual-9000-12000-btu',
        productDescription: 'Per climatizzare stanze fino a 45m²',
        features: [
          {
            key: 'Led',
            name: 'Schermo LED',
            enabled: true
          },
          {
            key: 'Wifi',
            name: 'Connettività Wi-Fi',
            enabled: true
          },
          {
            key: 'Voice',
            name: 'Voice control',
            enabled: false
          },
          {
            key: 'RispEn',
            name: 'Funzione risparmio energetico',
            enabled: true
          },
          {
            key: 'ProgGiorn',
            name: 'Programmazione timer giornaliera',
            enabled: true
          },
          {
            key: 'ProgSett',
            name: 'Programmazione timer settimanale',
            enabled: false
          },
          {
            key: 'Sleep',
            name: 'Funzionalità Sleep',
            enabled: true
          },
          {
            key: 'Turbo',
            name: 'Funzionalità Turbo',
            enabled: true
          },
          {
            key: 'Muffa',
            name: 'Anti muffa, anti batteri, anti polvere, anti allergeni',
            enabled: true
          },
          {
            key: 'Ionizzazione',
            name: 'Ionizzatore',
            enabled: false
          },
          {
            key: 'Autodiagnosi',
            name: 'Autodiagnosi (Funzione Smart Diagnosis)',
            enabled: true
          }
        ],
        price: '1511.76',
        currency: '€',
        priceNote: 'IVA inclusa',
        checkboxLabel: 'Scegli questa soluzione',
        detailsLink: 'Visualizza la scheda dettagli del prodotto',
        category: '',
        showRecommendationBadge: false
      }
    ],
    loading: false,
    error: null,
    selectedCity: 'Albiano d\'Ivrea',
    filterBy: null
  },
  report: {
    data: {
      loading: false,
      error: null,
      result: {
        Comune: 'Albiano d\'Ivrea',
        Numero_Macchine: 3,
        Clima1: 'Daikin Clima Siesta Super Plus 12000',
        Clima2: 'Daikin Clima Siesta Super Plus 9000',
        Clima3: 'Daikin Clima Siesta Dual Classic - 9000+12000',
        Numero_Predisposizioni_Mono: 1,
        Numero_Predisposizioni_Dual: 1,
        Numero_Predisposizioni_Trial: 1,
        Numero_Predisposizioni_Canalizzazione: 0,
        Numero_Smontaggi_Mono: 1,
        Numero_Smontaggi_Dual: 1,
        Numero_Smontaggi_Trial: 1,
        Stanza1_mq: '12',
        Stanza2_mq: '44',
        Stanza3_mq: '55'
      },
      lastRequestTimestamp: 1756309782390
    }
  },
  validation: {
    errors: [],
    canProceed: true
  },
  testing: {}
}