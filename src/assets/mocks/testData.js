export default {
  _initialized: true,
  formData: {
    storeCity: 'Romans d\'Isonzo',
    storeLocation: 'Pizzeria Claudio',
    consultantName: 'Claudio',
    storePhone: '122345456780',
    airconditioningQuantities: {
      monosplit: 1,
      dualsplit: 1,
      trialsplit: 1
    },
    airConditioningConfigs: {
      monosplit_0: {
        installationType: 'nuova_con_predisposizione',
        roomSize: '35'
      },
      dualsplit_0: {
        installationType: 'nuova_senza_predisposizione',
        roomSize: '41'
      },
      trialsplit_0: {
        installationType: 'sostituzione_trialsplit',
        roomSize: '53'
      }
    },
    needsRemoval: true,
    removalQuantities: {
      monosplit: 1
    },
    wantsCleaning: true,
    cleaningQuantities: {
      trialsplit: 1
    },
    selectedProducts_monosplit_0: [
      'daikin-clima-siesta-super-plus-12000'
    ],
    selectedProducts_dualsplit_1: [
      'daikin-clima-siesta-dual-classic---9000+12000'
    ],
    selectedProducts_trialsplit_2: [
      'lg-libero-smart-9000-btu/h'
    ]
  },
  currentStep: 3,
  currentPageId: 'scelta-climatizzatore-trialsplit-2',
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
      splitType: 'monosplit',
      splitIndex: 0,
      validationRules: {
        required: [
          'selectedProducts_monosplit_0'
        ]
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
            icon: 'monosplit',
            step: '1/3',
            stepColor: 'purple',
            layout: 'horizontal'
          }
        },
        {
          type: 'RoomBanner',
          props: {
            roomSize: '35'
          }
        },
        {
          type: 'BrandSelector',
          props: {
            title: 'Quale brand di climatizzatore preferisce?',
            stateProperty: 'selectedBrand',
            investmentOptionProperty: 'investmentOption'
          }
        },
        {
          type: 'OptionSelector',
          props: {
            title: 'Qual è l\'investimento più adatto al cliente?',
            options: [
              {
                id: 'conveniente',
                name: 'Più conveniente',
                value: 'conveniente',
                icon: 'empty'
              },
              {
                id: 'qualita_prezzo',
                name: 'Miglior rapporto qualità/prezzo',
                value: 'qualita_prezzo',
                icon: 'half'
              },
              {
                id: 'top_di_gamma',
                name: 'Top di gamma',
                value: 'top_di_gamma',
                icon: 'full'
              }
            ],
            stateProperty: 'investmentOption',
            brandProperty: 'selectedBrand'
          }
        },
        {
          type: 'AcProductDisplayContainer',
          props: {
            showLoadingStates: true,
            maxProducts: 100,
            gridClassName: 'grid grid-cols-1 md:grid-cols-2 gap-6',
            className: 'mb-8',
            stateProperty: 'selectedProducts_monosplit_0'
          }
        },
        {
          type: 'PricingDisclaimer',
          props: {
            className: 'mt-6 mb-4'
          }
        }
      ]
    },
    {
      id: 'scelta-climatizzatore-dualsplit-1',
      title: 'Scegliete insieme il climatizzatore adatto!',
      step: 3,
      isDynamic: true,
      splitType: 'dualsplit',
      splitIndex: 1,
      validationRules: {
        required: [
          'selectedProducts_dualsplit_1'
        ]
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
            icon: 'dualsplit',
            step: '2/3',
            stepColor: 'purple',
            layout: 'horizontal'
          }
        },
        {
          type: 'RoomBanner',
          props: {
            roomSize: '41'
          }
        },
        {
          type: 'BrandSelector',
          props: {
            title: 'Quale brand di climatizzatore preferisce?',
            stateProperty: 'selectedBrand',
            investmentOptionProperty: 'investmentOption'
          }
        },
        {
          type: 'OptionSelector',
          props: {
            title: 'Qual è l\'investimento più adatto al cliente?',
            options: [
              {
                id: 'conveniente',
                name: 'Più conveniente',
                value: 'conveniente',
                icon: 'empty'
              },
              {
                id: 'qualita_prezzo',
                name: 'Miglior rapporto qualità/prezzo',
                value: 'qualita_prezzo',
                icon: 'half'
              },
              {
                id: 'top_di_gamma',
                name: 'Top di gamma',
                value: 'top_di_gamma',
                icon: 'full'
              }
            ],
            stateProperty: 'investmentOption',
            brandProperty: 'selectedBrand'
          }
        },
        {
          type: 'AcProductDisplayContainer',
          props: {
            showLoadingStates: true,
            maxProducts: 100,
            gridClassName: 'grid grid-cols-1 md:grid-cols-2 gap-6',
            className: 'mb-8',
            stateProperty: 'selectedProducts_dualsplit_1'
          }
        },
        {
          type: 'PricingDisclaimer',
          props: {
            className: 'mt-6 mb-4'
          }
        }
      ]
    },
    {
      id: 'scelta-climatizzatore-trialsplit-2',
      title: 'Scegliete insieme il climatizzatore adatto!',
      step: 3,
      isDynamic: true,
      splitType: 'trialsplit',
      splitIndex: 2,
      validationRules: {
        required: [
          'selectedProducts_trialsplit_2'
        ]
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
            description: 'Sostituzione trialsplit',
            icon: 'trialsplit',
            step: '3/3',
            stepColor: 'purple',
            layout: 'horizontal'
          }
        },
        {
          type: 'RoomBanner',
          props: {
            roomSize: '53'
          }
        },
        {
          type: 'BrandSelector',
          props: {
            title: 'Quale brand di climatizzatore preferisce?',
            stateProperty: 'selectedBrand',
            investmentOptionProperty: 'investmentOption'
          }
        },
        {
          type: 'OptionSelector',
          props: {
            title: 'Qual è l\'investimento più adatto al cliente?',
            options: [
              {
                id: 'conveniente',
                name: 'Più conveniente',
                value: 'conveniente',
                icon: 'empty'
              },
              {
                id: 'qualita_prezzo',
                name: 'Miglior rapporto qualità/prezzo',
                value: 'qualita_prezzo',
                icon: 'half'
              },
              {
                id: 'top_di_gamma',
                name: 'Top di gamma',
                value: 'top_di_gamma',
                icon: 'full'
              }
            ],
            stateProperty: 'investmentOption',
            brandProperty: 'selectedBrand'
          }
        },
        {
          type: 'AcProductDisplayContainer',
          props: {
            showLoadingStates: true,
            maxProducts: 100,
            gridClassName: 'grid grid-cols-1 md:grid-cols-2 gap-6',
            className: 'mb-8',
            stateProperty: 'selectedProducts_trialsplit_2'
          }
        },
        {
          type: 'PricingDisclaimer',
          props: {
            className: 'mt-6 mb-4'
          }
        }
      ]
    }
  ],
  cityState: {
    cities: [
      {
        value: 'Agliè',
        label: 'Agliè'
      },
      {
        value: 'Airasca',
        label: 'Airasca'
      },
      {
        value: 'Ala di Stura',
        label: 'Ala di Stura'
      },
      {
        value: 'Albiano d\'Ivrea',
        label: 'Albiano d\'Ivrea'
      },
      {
        value: 'Almese',
        label: 'Almese'
      },
      {
        value: 'Alpette',
        label: 'Alpette'
      },
      {
        value: 'Alpignano',
        label: 'Alpignano'
      },
      {
        value: 'Andezeno',
        label: 'Andezeno'
      },
      {
        value: 'Andrate',
        label: 'Andrate'
      },
      {
        value: 'Angrogna',
        label: 'Angrogna'
      },
      {
        value: 'Arignano',
        label: 'Arignano'
      },
      {
        value: 'Avigliana',
        label: 'Avigliana'
      },
      {
        value: 'Azeglio',
        label: 'Azeglio'
      },
      {
        value: 'Bairo',
        label: 'Bairo'
      },
      {
        value: 'Balangero',
        label: 'Balangero'
      },
      {
        value: 'Baldissero Canavese',
        label: 'Baldissero Canavese'
      },
      {
        value: 'Baldissero Torinese',
        label: 'Baldissero Torinese'
      },
      {
        value: 'Balme',
        label: 'Balme'
      },
      {
        value: 'Banchette',
        label: 'Banchette'
      },
      {
        value: 'Barbania',
        label: 'Barbania'
      },
      {
        value: 'Bardonecchia',
        label: 'Bardonecchia'
      },
      {
        value: 'Barone Canavese',
        label: 'Barone Canavese'
      },
      {
        value: 'Beinasco',
        label: 'Beinasco'
      },
      {
        value: 'Bibiana',
        label: 'Bibiana'
      },
      {
        value: 'Bobbio Pellice',
        label: 'Bobbio Pellice'
      },
      {
        value: 'Bollengo',
        label: 'Bollengo'
      },
      {
        value: 'Borgaro Torinese',
        label: 'Borgaro Torinese'
      },
      {
        value: 'Borgiallo',
        label: 'Borgiallo'
      },
      {
        value: 'Borgofranco d\'Ivrea',
        label: 'Borgofranco d\'Ivrea'
      },
      {
        value: 'Borgomasino',
        label: 'Borgomasino'
      },
      {
        value: 'Borgone Susa',
        label: 'Borgone Susa'
      },
      {
        value: 'Bosconero',
        label: 'Bosconero'
      },
      {
        value: 'Brandizzo',
        label: 'Brandizzo'
      },
      {
        value: 'Bricherasio',
        label: 'Bricherasio'
      },
      {
        value: 'Brosso',
        label: 'Brosso'
      },
      {
        value: 'Brozolo',
        label: 'Brozolo'
      },
      {
        value: 'Bruino',
        label: 'Bruino'
      },
      {
        value: 'Brusasco',
        label: 'Brusasco'
      },
      {
        value: 'Bruzolo',
        label: 'Bruzolo'
      },
      {
        value: 'Buriasco',
        label: 'Buriasco'
      },
      {
        value: 'Burolo',
        label: 'Burolo'
      },
      {
        value: 'Busano',
        label: 'Busano'
      },
      {
        value: 'Bussoleno',
        label: 'Bussoleno'
      },
      {
        value: 'Buttigliera Alta',
        label: 'Buttigliera Alta'
      },
      {
        value: 'Cafasse',
        label: 'Cafasse'
      },
      {
        value: 'Caluso',
        label: 'Caluso'
      },
      {
        value: 'Cambiano',
        label: 'Cambiano'
      },
      {
        value: 'Campiglione Fenile',
        label: 'Campiglione Fenile'
      },
      {
        value: 'Candia Canavese',
        label: 'Candia Canavese'
      },
      {
        value: 'Candiolo',
        label: 'Candiolo'
      },
      {
        value: 'Canischio',
        label: 'Canischio'
      },
      {
        value: 'Cantalupa',
        label: 'Cantalupa'
      },
      {
        value: 'Cantoira',
        label: 'Cantoira'
      },
      {
        value: 'Caprie',
        label: 'Caprie'
      },
      {
        value: 'Caravino',
        label: 'Caravino'
      },
      {
        value: 'Carema',
        label: 'Carema'
      },
      {
        value: 'Carignano',
        label: 'Carignano'
      },
      {
        value: 'Carmagnola',
        label: 'Carmagnola'
      },
      {
        value: 'Casalborgone',
        label: 'Casalborgone'
      },
      {
        value: 'Cascinette d\'Ivrea',
        label: 'Cascinette d\'Ivrea'
      },
      {
        value: 'Caselette',
        label: 'Caselette'
      },
      {
        value: 'Caselle Torinese',
        label: 'Caselle Torinese'
      },
      {
        value: 'Castagneto Po',
        label: 'Castagneto Po'
      },
      {
        value: 'Castagnole Piemonte',
        label: 'Castagnole Piemonte'
      },
      {
        value: 'Castellamonte',
        label: 'Castellamonte'
      },
      {
        value: 'Castelnuovo Nigra',
        label: 'Castelnuovo Nigra'
      },
      {
        value: 'Castiglione Torinese',
        label: 'Castiglione Torinese'
      },
      {
        value: 'Cavagnolo',
        label: 'Cavagnolo'
      },
      {
        value: 'Cavour',
        label: 'Cavour'
      },
      {
        value: 'Cercenasco',
        label: 'Cercenasco'
      },
      {
        value: 'Ceres',
        label: 'Ceres'
      },
      {
        value: 'Ceresole Reale',
        label: 'Ceresole Reale'
      },
      {
        value: 'Cesana Torinese',
        label: 'Cesana Torinese'
      },
      {
        value: 'Chialamberto',
        label: 'Chialamberto'
      },
      {
        value: 'Chianocco',
        label: 'Chianocco'
      },
      {
        value: 'Chiaverano',
        label: 'Chiaverano'
      },
      {
        value: 'Chieri',
        label: 'Chieri'
      },
      {
        value: 'Chiesanuova',
        label: 'Chiesanuova'
      },
      {
        value: 'Chiomonte',
        label: 'Chiomonte'
      },
      {
        value: 'Chiusa di San Michele',
        label: 'Chiusa di San Michele'
      },
      {
        value: 'Chivasso',
        label: 'Chivasso'
      },
      {
        value: 'Ciconio',
        label: 'Ciconio'
      },
      {
        value: 'Cintano',
        label: 'Cintano'
      },
      {
        value: 'Cinzano',
        label: 'Cinzano'
      },
      {
        value: 'Ciriè',
        label: 'Ciriè'
      },
      {
        value: 'Claviere',
        label: 'Claviere'
      },
      {
        value: 'Coassolo Torinese',
        label: 'Coassolo Torinese'
      },
      {
        value: 'Coazze',
        label: 'Coazze'
      },
      {
        value: 'Collegno',
        label: 'Collegno'
      },
      {
        value: 'Colleretto Castelnuovo',
        label: 'Colleretto Castelnuovo'
      },
      {
        value: 'Colleretto Giacosa',
        label: 'Colleretto Giacosa'
      },
      {
        value: 'Condove',
        label: 'Condove'
      },
      {
        value: 'Corio',
        label: 'Corio'
      },
      {
        value: 'Cossano Canavese',
        label: 'Cossano Canavese'
      },
      {
        value: 'Cuceglio',
        label: 'Cuceglio'
      },
      {
        value: 'Cumiana',
        label: 'Cumiana'
      },
      {
        value: 'Cuorgnè',
        label: 'Cuorgnè'
      },
      {
        value: 'Druento',
        label: 'Druento'
      },
      {
        value: 'Exilles',
        label: 'Exilles'
      },
      {
        value: 'Favria',
        label: 'Favria'
      },
      {
        value: 'Feletto',
        label: 'Feletto'
      },
      {
        value: 'Fenestrelle',
        label: 'Fenestrelle'
      },
      {
        value: 'Fiano',
        label: 'Fiano'
      },
      {
        value: 'Fiorano Canavese',
        label: 'Fiorano Canavese'
      },
      {
        value: 'Foglizzo',
        label: 'Foglizzo'
      },
      {
        value: 'Forno Canavese',
        label: 'Forno Canavese'
      },
      {
        value: 'Frassinetto',
        label: 'Frassinetto'
      },
      {
        value: 'Front',
        label: 'Front'
      },
      {
        value: 'Frossasco',
        label: 'Frossasco'
      },
      {
        value: 'Garzigliana',
        label: 'Garzigliana'
      },
      {
        value: 'Gassino Torinese',
        label: 'Gassino Torinese'
      },
      {
        value: 'Germagnano',
        label: 'Germagnano'
      },
      {
        value: 'Giaglione',
        label: 'Giaglione'
      },
      {
        value: 'Giaveno',
        label: 'Giaveno'
      },
      {
        value: 'Givoletto',
        label: 'Givoletto'
      },
      {
        value: 'Gravere',
        label: 'Gravere'
      },
      {
        value: 'Groscavallo',
        label: 'Groscavallo'
      },
      {
        value: 'Grosso',
        label: 'Grosso'
      },
      {
        value: 'Grugliasco',
        label: 'Grugliasco'
      },
      {
        value: 'Ingria',
        label: 'Ingria'
      },
      {
        value: 'Inverso Pinasca',
        label: 'Inverso Pinasca'
      },
      {
        value: 'Isolabella',
        label: 'Isolabella'
      },
      {
        value: 'Issiglio',
        label: 'Issiglio'
      },
      {
        value: 'Ivrea',
        label: 'Ivrea'
      },
      {
        value: 'La Cassa',
        label: 'La Cassa'
      },
      {
        value: 'La Loggia',
        label: 'La Loggia'
      },
      {
        value: 'Lanzo Torinese',
        label: 'Lanzo Torinese'
      },
      {
        value: 'Lauriano',
        label: 'Lauriano'
      },
      {
        value: 'Leini',
        label: 'Leini'
      },
      {
        value: 'Lemie',
        label: 'Lemie'
      },
      {
        value: 'Lessolo',
        label: 'Lessolo'
      },
      {
        value: 'Levone',
        label: 'Levone'
      },
      {
        value: 'Locana',
        label: 'Locana'
      },
      {
        value: 'Lombardore',
        label: 'Lombardore'
      },
      {
        value: 'Lombriasco',
        label: 'Lombriasco'
      },
      {
        value: 'Loranzè',
        label: 'Loranzè'
      },
      {
        value: 'Luserna San Giovanni',
        label: 'Luserna San Giovanni'
      },
      {
        value: 'Lusernetta',
        label: 'Lusernetta'
      },
      {
        value: 'Lusigliè',
        label: 'Lusigliè'
      },
      {
        value: 'Macello',
        label: 'Macello'
      },
      {
        value: 'Maglione',
        label: 'Maglione'
      },
      {
        value: 'Marentino',
        label: 'Marentino'
      },
      {
        value: 'Massello',
        label: 'Massello'
      },
      {
        value: 'Mathi',
        label: 'Mathi'
      },
      {
        value: 'Mattie',
        label: 'Mattie'
      },
      {
        value: 'Mazzè',
        label: 'Mazzè'
      },
      {
        value: 'Meana di Susa',
        label: 'Meana di Susa'
      },
      {
        value: 'Mercenasco',
        label: 'Mercenasco'
      },
      {
        value: 'Mezzenile',
        label: 'Mezzenile'
      },
      {
        value: 'Mombello di Torino',
        label: 'Mombello di Torino'
      },
      {
        value: 'Mompantero',
        label: 'Mompantero'
      },
      {
        value: 'Monastero di Lanzo',
        label: 'Monastero di Lanzo'
      },
      {
        value: 'Moncalieri',
        label: 'Moncalieri'
      },
      {
        value: 'Moncenisio',
        label: 'Moncenisio'
      },
      {
        value: 'Montaldo Torinese',
        label: 'Montaldo Torinese'
      },
      {
        value: 'Montalenghe',
        label: 'Montalenghe'
      },
      {
        value: 'Montalto Dora',
        label: 'Montalto Dora'
      },
      {
        value: 'Montanaro',
        label: 'Montanaro'
      },
      {
        value: 'Monteu da Po',
        label: 'Monteu da Po'
      },
      {
        value: 'Moriondo Torinese',
        label: 'Moriondo Torinese'
      },
      {
        value: 'Nichelino',
        label: 'Nichelino'
      },
      {
        value: 'Noasca',
        label: 'Noasca'
      },
      {
        value: 'Nole',
        label: 'Nole'
      },
      {
        value: 'Nomaglio',
        label: 'Nomaglio'
      },
      {
        value: 'None',
        label: 'None'
      },
      {
        value: 'Novalesa',
        label: 'Novalesa'
      },
      {
        value: 'Oglianico',
        label: 'Oglianico'
      },
      {
        value: 'Orbassano',
        label: 'Orbassano'
      },
      {
        value: 'Orio Canavese',
        label: 'Orio Canavese'
      },
      {
        value: 'Osasco',
        label: 'Osasco'
      },
      {
        value: 'Osasio',
        label: 'Osasio'
      },
      {
        value: 'Oulx',
        label: 'Oulx'
      },
      {
        value: 'Ozegna',
        label: 'Ozegna'
      },
      {
        value: 'Palazzo Canavese',
        label: 'Palazzo Canavese'
      },
      {
        value: 'Pancalieri',
        label: 'Pancalieri'
      },
      {
        value: 'Parella',
        label: 'Parella'
      },
      {
        value: 'Pavarolo',
        label: 'Pavarolo'
      },
      {
        value: 'Pavone Canavese',
        label: 'Pavone Canavese'
      },
      {
        value: 'Pecetto Torinese',
        label: 'Pecetto Torinese'
      },
      {
        value: 'Perosa Argentina',
        label: 'Perosa Argentina'
      },
      {
        value: 'Perosa Canavese',
        label: 'Perosa Canavese'
      },
      {
        value: 'Perrero',
        label: 'Perrero'
      },
      {
        value: 'Pertusio',
        label: 'Pertusio'
      },
      {
        value: 'Pessinetto',
        label: 'Pessinetto'
      },
      {
        value: 'Pianezza',
        label: 'Pianezza'
      },
      {
        value: 'Pinasca',
        label: 'Pinasca'
      },
      {
        value: 'Pinerolo',
        label: 'Pinerolo'
      },
      {
        value: 'Pino Torinese',
        label: 'Pino Torinese'
      },
      {
        value: 'Piobesi Torinese',
        label: 'Piobesi Torinese'
      },
      {
        value: 'Piossasco',
        label: 'Piossasco'
      },
      {
        value: 'Piscina',
        label: 'Piscina'
      },
      {
        value: 'Piverone',
        label: 'Piverone'
      },
      {
        value: 'Poirino',
        label: 'Poirino'
      },
      {
        value: 'Pomaretto',
        label: 'Pomaretto'
      },
      {
        value: 'Pont Canavese',
        label: 'Pont Canavese'
      },
      {
        value: 'Porte',
        label: 'Porte'
      },
      {
        value: 'Pragelato',
        label: 'Pragelato'
      },
      {
        value: 'Prali',
        label: 'Prali'
      },
      {
        value: 'Pralormo',
        label: 'Pralormo'
      },
      {
        value: 'Pramollo',
        label: 'Pramollo'
      },
      {
        value: 'Prarostino',
        label: 'Prarostino'
      },
      {
        value: 'Prascorsano',
        label: 'Prascorsano'
      },
      {
        value: 'Pratiglione',
        label: 'Pratiglione'
      },
      {
        value: 'Quagliuzzo',
        label: 'Quagliuzzo'
      },
      {
        value: 'Quassolo',
        label: 'Quassolo'
      },
      {
        value: 'Quincinetto',
        label: 'Quincinetto'
      },
      {
        value: 'Reano',
        label: 'Reano'
      },
      {
        value: 'Ribordone',
        label: 'Ribordone'
      },
      {
        value: 'Rivalba',
        label: 'Rivalba'
      },
      {
        value: 'Rivalta di Torino',
        label: 'Rivalta di Torino'
      },
      {
        value: 'Riva presso Chieri',
        label: 'Riva presso Chieri'
      },
      {
        value: 'Rivara',
        label: 'Rivara'
      },
      {
        value: 'Rivarolo Canavese',
        label: 'Rivarolo Canavese'
      },
      {
        value: 'Rivarossa',
        label: 'Rivarossa'
      },
      {
        value: 'Rivoli',
        label: 'Rivoli'
      },
      {
        value: 'Robassomero',
        label: 'Robassomero'
      },
      {
        value: 'Rocca Canavese',
        label: 'Rocca Canavese'
      },
      {
        value: 'Roletto',
        label: 'Roletto'
      },
      {
        value: 'Romano Canavese',
        label: 'Romano Canavese'
      },
      {
        value: 'Ronco Canavese',
        label: 'Ronco Canavese'
      },
      {
        value: 'Rondissone',
        label: 'Rondissone'
      },
      {
        value: 'Rorà',
        label: 'Rorà'
      },
      {
        value: 'Roure',
        label: 'Roure'
      },
      {
        value: 'Rosta',
        label: 'Rosta'
      },
      {
        value: 'Rubiana',
        label: 'Rubiana'
      },
      {
        value: 'Rueglio',
        label: 'Rueglio'
      },
      {
        value: 'Salassa',
        label: 'Salassa'
      },
      {
        value: 'Salbertrand',
        label: 'Salbertrand'
      },
      {
        value: 'Salerano Canavese',
        label: 'Salerano Canavese'
      },
      {
        value: 'Salza di Pinerolo',
        label: 'Salza di Pinerolo'
      },
      {
        value: 'Samone',
        label: 'Samone'
      },
      {
        value: 'San Benigno Canavese',
        label: 'San Benigno Canavese'
      },
      {
        value: 'San Carlo Canavese',
        label: 'San Carlo Canavese'
      },
      {
        value: 'San Colombano Belmonte',
        label: 'San Colombano Belmonte'
      },
      {
        value: 'San Didero',
        label: 'San Didero'
      },
      {
        value: 'San Francesco al Campo',
        label: 'San Francesco al Campo'
      },
      {
        value: 'Sangano',
        label: 'Sangano'
      },
      {
        value: 'San Germano Chisone',
        label: 'San Germano Chisone'
      },
      {
        value: 'San Gillio',
        label: 'San Gillio'
      },
      {
        value: 'San Giorgio Canavese',
        label: 'San Giorgio Canavese'
      },
      {
        value: 'San Giorio di Susa',
        label: 'San Giorio di Susa'
      },
      {
        value: 'San Giusto Canavese',
        label: 'San Giusto Canavese'
      },
      {
        value: 'San Martino Canavese',
        label: 'San Martino Canavese'
      },
      {
        value: 'San Maurizio Canavese',
        label: 'San Maurizio Canavese'
      },
      {
        value: 'San Mauro Torinese',
        label: 'San Mauro Torinese'
      },
      {
        value: 'San Pietro Val Lemina',
        label: 'San Pietro Val Lemina'
      },
      {
        value: 'San Ponso',
        label: 'San Ponso'
      },
      {
        value: 'San Raffaele Cimena',
        label: 'San Raffaele Cimena'
      },
      {
        value: 'San Sebastiano da Po',
        label: 'San Sebastiano da Po'
      },
      {
        value: 'San Secondo di Pinerolo',
        label: 'San Secondo di Pinerolo'
      },
      {
        value: 'Sant\'Ambrogio di Torino',
        label: 'Sant\'Ambrogio di Torino'
      },
      {
        value: 'Sant\'Antonino di Susa',
        label: 'Sant\'Antonino di Susa'
      },
      {
        value: 'Santena',
        label: 'Santena'
      },
      {
        value: 'Sauze di Cesana',
        label: 'Sauze di Cesana'
      },
      {
        value: 'Sauze d\'Oulx',
        label: 'Sauze d\'Oulx'
      },
      {
        value: 'Scalenghe',
        label: 'Scalenghe'
      },
      {
        value: 'Scarmagno',
        label: 'Scarmagno'
      },
      {
        value: 'Sciolze',
        label: 'Sciolze'
      },
      {
        value: 'Sestriere',
        label: 'Sestriere'
      },
      {
        value: 'Settimo Rottaro',
        label: 'Settimo Rottaro'
      },
      {
        value: 'Settimo Torinese',
        label: 'Settimo Torinese'
      },
      {
        value: 'Settimo Vittone',
        label: 'Settimo Vittone'
      },
      {
        value: 'Sparone',
        label: 'Sparone'
      },
      {
        value: 'Strambinello',
        label: 'Strambinello'
      },
      {
        value: 'Strambino',
        label: 'Strambino'
      },
      {
        value: 'Susa',
        label: 'Susa'
      },
      {
        value: 'Tavagnasco',
        label: 'Tavagnasco'
      },
      {
        value: 'Torino',
        label: 'Torino'
      },
      {
        value: 'Torrazza Piemonte',
        label: 'Torrazza Piemonte'
      },
      {
        value: 'Torre Canavese',
        label: 'Torre Canavese'
      },
      {
        value: 'Torre Pellice',
        label: 'Torre Pellice'
      },
      {
        value: 'Trana',
        label: 'Trana'
      },
      {
        value: 'Traversella',
        label: 'Traversella'
      },
      {
        value: 'Traves',
        label: 'Traves'
      },
      {
        value: 'Trofarello',
        label: 'Trofarello'
      },
      {
        value: 'Usseaux',
        label: 'Usseaux'
      },
      {
        value: 'Usseglio',
        label: 'Usseglio'
      },
      {
        value: 'Vaie',
        label: 'Vaie'
      },
      {
        value: 'Val della Torre',
        label: 'Val della Torre'
      },
      {
        value: 'Valgioie',
        label: 'Valgioie'
      },
      {
        value: 'Vallo Torinese',
        label: 'Vallo Torinese'
      },
      {
        value: 'Valperga',
        label: 'Valperga'
      },
      {
        value: 'Valprato Soana',
        label: 'Valprato Soana'
      },
      {
        value: 'Varisella',
        label: 'Varisella'
      },
      {
        value: 'Vauda Canavese',
        label: 'Vauda Canavese'
      },
      {
        value: 'Venaus',
        label: 'Venaus'
      },
      {
        value: 'Venaria Reale',
        label: 'Venaria Reale'
      },
      {
        value: 'Verolengo',
        label: 'Verolengo'
      },
      {
        value: 'Verrua Savoia',
        label: 'Verrua Savoia'
      },
      {
        value: 'Vestignè',
        label: 'Vestignè'
      },
      {
        value: 'Vialfrè',
        label: 'Vialfrè'
      },
      {
        value: 'Vidracco',
        label: 'Vidracco'
      },
      {
        value: 'Vigone',
        label: 'Vigone'
      },
      {
        value: 'Villafranca Piemonte',
        label: 'Villafranca Piemonte'
      },
      {
        value: 'Villanova Canavese',
        label: 'Villanova Canavese'
      },
      {
        value: 'Villarbasse',
        label: 'Villarbasse'
      },
      {
        value: 'Villar Dora',
        label: 'Villar Dora'
      },
      {
        value: 'Villareggia',
        label: 'Villareggia'
      },
      {
        value: 'Villar Focchiardo',
        label: 'Villar Focchiardo'
      },
      {
        value: 'Villar Pellice',
        label: 'Villar Pellice'
      },
      {
        value: 'Villar Perosa',
        label: 'Villar Perosa'
      },
      {
        value: 'Villastellone',
        label: 'Villastellone'
      },
      {
        value: 'Vinovo',
        label: 'Vinovo'
      },
      {
        value: 'Virle Piemonte',
        label: 'Virle Piemonte'
      },
      {
        value: 'Vische',
        label: 'Vische'
      },
      {
        value: 'Vistrorio',
        label: 'Vistrorio'
      },
      {
        value: 'Viù',
        label: 'Viù'
      },
      {
        value: 'Volpiano',
        label: 'Volpiano'
      },
      {
        value: 'Volvera',
        label: 'Volvera'
      },
      {
        value: 'Mappano',
        label: 'Mappano'
      },
      {
        value: 'Val di Chy',
        label: 'Val di Chy'
      },
      {
        value: 'Valchiusa',
        label: 'Valchiusa'
      },
      {
        value: 'Alagna Valsesia',
        label: 'Alagna Valsesia'
      },
      {
        value: 'Albano Vercellese',
        label: 'Albano Vercellese'
      },
      {
        value: 'Alice Castello',
        label: 'Alice Castello'
      },
      {
        value: 'Arborio',
        label: 'Arborio'
      },
      {
        value: 'Asigliano Vercellese',
        label: 'Asigliano Vercellese'
      },
      {
        value: 'Balmuccia',
        label: 'Balmuccia'
      },
      {
        value: 'Balocco',
        label: 'Balocco'
      },
      {
        value: 'Bianzè',
        label: 'Bianzè'
      },
      {
        value: 'Boccioleto',
        label: 'Boccioleto'
      },
      {
        value: 'Borgo d\'Ale',
        label: 'Borgo d\'Ale'
      },
      {
        value: 'Borgosesia',
        label: 'Borgosesia'
      },
      {
        value: 'Borgo Vercelli',
        label: 'Borgo Vercelli'
      },
      {
        value: 'Buronzo',
        label: 'Buronzo'
      },
      {
        value: 'Campertogno',
        label: 'Campertogno'
      },
      {
        value: 'Carcoforo',
        label: 'Carcoforo'
      },
      {
        value: 'Caresana',
        label: 'Caresana'
      },
      {
        value: 'Caresanablot',
        label: 'Caresanablot'
      },
      {
        value: 'Carisio',
        label: 'Carisio'
      },
      {
        value: 'Casanova Elvo',
        label: 'Casanova Elvo'
      },
      {
        value: 'San Giacomo Vercellese',
        label: 'San Giacomo Vercellese'
      },
      {
        value: 'Cervatto',
        label: 'Cervatto'
      },
      {
        value: 'Cigliano',
        label: 'Cigliano'
      },
      {
        value: 'Civiasco',
        label: 'Civiasco'
      },
      {
        value: 'Collobiano',
        label: 'Collobiano'
      },
      {
        value: 'Costanzana',
        label: 'Costanzana'
      },
      {
        value: 'Cravagliana',
        label: 'Cravagliana'
      },
      {
        value: 'Crescentino',
        label: 'Crescentino'
      },
      {
        value: 'Crova',
        label: 'Crova'
      },
      {
        value: 'Desana',
        label: 'Desana'
      },
      {
        value: 'Fobello',
        label: 'Fobello'
      },
      {
        value: 'Fontanetto Po',
        label: 'Fontanetto Po'
      },
      {
        value: 'Formigliana',
        label: 'Formigliana'
      },
      {
        value: 'Gattinara',
        label: 'Gattinara'
      },
      {
        value: 'Ghislarengo',
        label: 'Ghislarengo'
      },
      {
        value: 'Greggio',
        label: 'Greggio'
      },
      {
        value: 'Guardabosone',
        label: 'Guardabosone'
      },
      {
        value: 'Lamporo',
        label: 'Lamporo'
      },
      {
        value: 'Lenta',
        label: 'Lenta'
      },
      {
        value: 'Lignana',
        label: 'Lignana'
      },
      {
        value: 'Livorno Ferraris',
        label: 'Livorno Ferraris'
      },
      {
        value: 'Lozzolo',
        label: 'Lozzolo'
      },
      {
        value: 'Mollia',
        label: 'Mollia'
      },
      {
        value: 'Moncrivello',
        label: 'Moncrivello'
      },
      {
        value: 'Motta de\' Conti',
        label: 'Motta de\' Conti'
      },
      {
        value: 'Olcenengo',
        label: 'Olcenengo'
      },
      {
        value: 'Oldenico',
        label: 'Oldenico'
      },
      {
        value: 'Palazzolo Vercellese',
        label: 'Palazzolo Vercellese'
      },
      {
        value: 'Pertengo',
        label: 'Pertengo'
      },
      {
        value: 'Pezzana',
        label: 'Pezzana'
      },
      {
        value: 'Pila',
        label: 'Pila'
      },
      {
        value: 'Piode',
        label: 'Piode'
      },
      {
        value: 'Postua',
        label: 'Postua'
      },
      {
        value: 'Prarolo',
        label: 'Prarolo'
      },
      {
        value: 'Quarona',
        label: 'Quarona'
      },
      {
        value: 'Quinto Vercellese',
        label: 'Quinto Vercellese'
      },
      {
        value: 'Rassa',
        label: 'Rassa'
      },
      {
        value: 'Rimella',
        label: 'Rimella'
      },
      {
        value: 'Rive',
        label: 'Rive'
      },
      {
        value: 'Roasio',
        label: 'Roasio'
      },
      {
        value: 'Ronsecco',
        label: 'Ronsecco'
      },
      {
        value: 'Rossa',
        label: 'Rossa'
      },
      {
        value: 'Rovasenda',
        label: 'Rovasenda'
      },
      {
        value: 'Salasco',
        label: 'Salasco'
      },
      {
        value: 'Sali Vercellese',
        label: 'Sali Vercellese'
      },
      {
        value: 'Saluggia',
        label: 'Saluggia'
      },
      {
        value: 'San Germano Vercellese',
        label: 'San Germano Vercellese'
      },
      {
        value: 'Santhià',
        label: 'Santhià'
      },
      {
        value: 'Scopa',
        label: 'Scopa'
      },
      {
        value: 'Scopello',
        label: 'Scopello'
      },
      {
        value: 'Serravalle Sesia',
        label: 'Serravalle Sesia'
      },
      {
        value: 'Stroppiana',
        label: 'Stroppiana'
      },
      {
        value: 'Tricerro',
        label: 'Tricerro'
      },
      {
        value: 'Trino',
        label: 'Trino'
      },
      {
        value: 'Tronzano Vercellese',
        label: 'Tronzano Vercellese'
      },
      {
        value: 'Valduggia',
        label: 'Valduggia'
      },
      {
        value: 'Varallo',
        label: 'Varallo'
      },
      {
        value: 'Vercelli',
        label: 'Vercelli'
      },
      {
        value: 'Villarboit',
        label: 'Villarboit'
      },
      {
        value: 'Villata',
        label: 'Villata'
      },
      {
        value: 'Vocca',
        label: 'Vocca'
      },
      {
        value: 'Alto Sermenza',
        label: 'Alto Sermenza'
      },
      {
        value: 'Cellio con Breia',
        label: 'Cellio con Breia'
      },
      {
        value: 'Agrate Conturbia',
        label: 'Agrate Conturbia'
      },
      {
        value: 'Ameno',
        label: 'Ameno'
      },
      {
        value: 'Armeno',
        label: 'Armeno'
      },
      {
        value: 'Arona',
        label: 'Arona'
      },
      {
        value: 'Barengo',
        label: 'Barengo'
      },
      {
        value: 'Bellinzago Novarese',
        label: 'Bellinzago Novarese'
      },
      {
        value: 'Biandrate',
        label: 'Biandrate'
      },
      {
        value: 'Boca',
        label: 'Boca'
      },
      {
        value: 'Bogogno',
        label: 'Bogogno'
      },
      {
        value: 'Bolzano Novarese',
        label: 'Bolzano Novarese'
      },
      {
        value: 'Borgolavezzaro',
        label: 'Borgolavezzaro'
      },
      {
        value: 'Borgomanero',
        label: 'Borgomanero'
      },
      {
        value: 'Borgo Ticino',
        label: 'Borgo Ticino'
      },
      {
        value: 'Briga Novarese',
        label: 'Briga Novarese'
      },
      {
        value: 'Briona',
        label: 'Briona'
      },
      {
        value: 'Caltignaga',
        label: 'Caltignaga'
      },
      {
        value: 'Cameri',
        label: 'Cameri'
      },
      {
        value: 'Carpignano Sesia',
        label: 'Carpignano Sesia'
      },
      {
        value: 'Casalbeltrame',
        label: 'Casalbeltrame'
      },
      {
        value: 'Casaleggio Novara',
        label: 'Casaleggio Novara'
      },
      {
        value: 'Casalino',
        label: 'Casalino'
      },
      {
        value: 'Casalvolone',
        label: 'Casalvolone'
      },
      {
        value: 'Castellazzo Novarese',
        label: 'Castellazzo Novarese'
      },
      {
        value: 'Castelletto sopra Ticino',
        label: 'Castelletto sopra Ticino'
      },
      {
        value: 'Cavaglietto',
        label: 'Cavaglietto'
      },
      {
        value: 'Cavaglio d\'Agogna',
        label: 'Cavaglio d\'Agogna'
      },
      {
        value: 'Cavallirio',
        label: 'Cavallirio'
      },
      {
        value: 'Cerano',
        label: 'Cerano'
      },
      {
        value: 'Colazza',
        label: 'Colazza'
      },
      {
        value: 'Comignago',
        label: 'Comignago'
      },
      {
        value: 'Cressa',
        label: 'Cressa'
      },
      {
        value: 'Cureggio',
        label: 'Cureggio'
      },
      {
        value: 'Divignano',
        label: 'Divignano'
      },
      {
        value: 'Dormelletto',
        label: 'Dormelletto'
      },
      {
        value: 'Fara Novarese',
        label: 'Fara Novarese'
      },
      {
        value: 'Fontaneto d\'Agogna',
        label: 'Fontaneto d\'Agogna'
      },
      {
        value: 'Galliate',
        label: 'Galliate'
      },
      {
        value: 'Garbagna Novarese',
        label: 'Garbagna Novarese'
      },
      {
        value: 'Gargallo',
        label: 'Gargallo'
      },
      {
        value: 'Ghemme',
        label: 'Ghemme'
      },
      {
        value: 'Gozzano',
        label: 'Gozzano'
      },
      {
        value: 'Granozzo con Monticello',
        label: 'Granozzo con Monticello'
      },
      {
        value: 'Grignasco',
        label: 'Grignasco'
      },
      {
        value: 'Invorio',
        label: 'Invorio'
      },
      {
        value: 'Landiona',
        label: 'Landiona'
      },
      {
        value: 'Lesa',
        label: 'Lesa'
      },
      {
        value: 'Maggiora',
        label: 'Maggiora'
      },
      {
        value: 'Mandello Vitta',
        label: 'Mandello Vitta'
      },
      {
        value: 'Marano Ticino',
        label: 'Marano Ticino'
      },
      {
        value: 'Massino Visconti',
        label: 'Massino Visconti'
      },
      {
        value: 'Meina',
        label: 'Meina'
      },
      {
        value: 'Mezzomerico',
        label: 'Mezzomerico'
      },
      {
        value: 'Miasino',
        label: 'Miasino'
      },
      {
        value: 'Momo',
        label: 'Momo'
      },
      {
        value: 'Nebbiuno',
        label: 'Nebbiuno'
      },
      {
        value: 'Nibbiola',
        label: 'Nibbiola'
      },
      {
        value: 'Novara',
        label: 'Novara'
      },
      {
        value: 'Oleggio',
        label: 'Oleggio'
      },
      {
        value: 'Oleggio Castello',
        label: 'Oleggio Castello'
      },
      {
        value: 'Orta San Giulio',
        label: 'Orta San Giulio'
      },
      {
        value: 'Paruzzaro',
        label: 'Paruzzaro'
      },
      {
        value: 'Pella',
        label: 'Pella'
      },
      {
        value: 'Pettenasco',
        label: 'Pettenasco'
      },
      {
        value: 'Pisano',
        label: 'Pisano'
      },
      {
        value: 'Pogno',
        label: 'Pogno'
      },
      {
        value: 'Pombia',
        label: 'Pombia'
      },
      {
        value: 'Prato Sesia',
        label: 'Prato Sesia'
      },
      {
        value: 'Recetto',
        label: 'Recetto'
      },
      {
        value: 'Romagnano Sesia',
        label: 'Romagnano Sesia'
      },
      {
        value: 'Romentino',
        label: 'Romentino'
      },
      {
        value: 'San Maurizio d\'Opaglio',
        label: 'San Maurizio d\'Opaglio'
      },
      {
        value: 'San Nazzaro Sesia',
        label: 'San Nazzaro Sesia'
      },
      {
        value: 'San Pietro Mosezzo',
        label: 'San Pietro Mosezzo'
      },
      {
        value: 'Sillavengo',
        label: 'Sillavengo'
      },
      {
        value: 'Sizzano',
        label: 'Sizzano'
      },
      {
        value: 'Soriso',
        label: 'Soriso'
      },
      {
        value: 'Sozzago',
        label: 'Sozzago'
      },
      {
        value: 'Suno',
        label: 'Suno'
      },
      {
        value: 'Terdobbiate',
        label: 'Terdobbiate'
      },
      {
        value: 'Tornaco',
        label: 'Tornaco'
      },
      {
        value: 'Trecate',
        label: 'Trecate'
      },
      {
        value: 'Vaprio d\'Agogna',
        label: 'Vaprio d\'Agogna'
      },
      {
        value: 'Varallo Pombia',
        label: 'Varallo Pombia'
      },
      {
        value: 'Vespolate',
        label: 'Vespolate'
      },
      {
        value: 'Vicolungo',
        label: 'Vicolungo'
      },
      {
        value: 'Vinzaglio',
        label: 'Vinzaglio'
      },
      {
        value: 'Gattico-Veruno',
        label: 'Gattico-Veruno'
      },
      {
        value: 'Acceglio',
        label: 'Acceglio'
      },
      {
        value: 'Aisone',
        label: 'Aisone'
      },
      {
        value: 'Alba',
        label: 'Alba'
      },
      {
        value: 'Albaretto della Torre',
        label: 'Albaretto della Torre'
      },
      {
        value: 'Alto',
        label: 'Alto'
      },
      {
        value: 'Argentera',
        label: 'Argentera'
      },
      {
        value: 'Arguello',
        label: 'Arguello'
      },
      {
        value: 'Bagnasco',
        label: 'Bagnasco'
      },
      {
        value: 'Bagnolo Piemonte',
        label: 'Bagnolo Piemonte'
      },
      {
        value: 'Baldissero d\'Alba',
        label: 'Baldissero d\'Alba'
      },
      {
        value: 'Barbaresco',
        label: 'Barbaresco'
      },
      {
        value: 'Barge',
        label: 'Barge'
      },
      {
        value: 'Barolo',
        label: 'Barolo'
      },
      {
        value: 'Bastia Mondovì',
        label: 'Bastia Mondovì'
      },
      {
        value: 'Battifollo',
        label: 'Battifollo'
      },
      {
        value: 'Beinette',
        label: 'Beinette'
      },
      {
        value: 'Bellino',
        label: 'Bellino'
      },
      {
        value: 'Belvedere Langhe',
        label: 'Belvedere Langhe'
      },
      {
        value: 'Bene Vagienna',
        label: 'Bene Vagienna'
      },
      {
        value: 'Benevello',
        label: 'Benevello'
      },
      {
        value: 'Bergolo',
        label: 'Bergolo'
      },
      {
        value: 'Bernezzo',
        label: 'Bernezzo'
      },
      {
        value: 'Bonvicino',
        label: 'Bonvicino'
      },
      {
        value: 'Borgomale',
        label: 'Borgomale'
      },
      {
        value: 'Borgo San Dalmazzo',
        label: 'Borgo San Dalmazzo'
      },
      {
        value: 'Bosia',
        label: 'Bosia'
      },
      {
        value: 'Bossolasco',
        label: 'Bossolasco'
      },
      {
        value: 'Boves',
        label: 'Boves'
      },
      {
        value: 'Bra',
        label: 'Bra'
      },
      {
        value: 'Briaglia',
        label: 'Briaglia'
      },
      {
        value: 'Briga Alta',
        label: 'Briga Alta'
      },
      {
        value: 'Brondello',
        label: 'Brondello'
      },
      {
        value: 'Brossasco',
        label: 'Brossasco'
      },
      {
        value: 'Busca',
        label: 'Busca'
      },
      {
        value: 'Camerana',
        label: 'Camerana'
      },
      {
        value: 'Canale',
        label: 'Canale'
      },
      {
        value: 'Canosio',
        label: 'Canosio'
      },
      {
        value: 'Caprauna',
        label: 'Caprauna'
      },
      {
        value: 'Caraglio',
        label: 'Caraglio'
      },
      {
        value: 'Caramagna Piemonte',
        label: 'Caramagna Piemonte'
      },
      {
        value: 'Cardè',
        label: 'Cardè'
      },
      {
        value: 'Carrù',
        label: 'Carrù'
      },
      {
        value: 'Cartignano',
        label: 'Cartignano'
      },
      {
        value: 'Casalgrasso',
        label: 'Casalgrasso'
      },
      {
        value: 'Castagnito',
        label: 'Castagnito'
      },
      {
        value: 'Casteldelfino',
        label: 'Casteldelfino'
      },
      {
        value: 'Castelletto Stura',
        label: 'Castelletto Stura'
      },
      {
        value: 'Castelletto Uzzone',
        label: 'Castelletto Uzzone'
      },
      {
        value: 'Castellinaldo d\'Alba',
        label: 'Castellinaldo d\'Alba'
      },
      {
        value: 'Castellino Tanaro',
        label: 'Castellino Tanaro'
      },
      {
        value: 'Castelmagno',
        label: 'Castelmagno'
      },
      {
        value: 'Castelnuovo di Ceva',
        label: 'Castelnuovo di Ceva'
      },
      {
        value: 'Castiglione Falletto',
        label: 'Castiglione Falletto'
      },
      {
        value: 'Castiglione Tinella',
        label: 'Castiglione Tinella'
      },
      {
        value: 'Castino',
        label: 'Castino'
      },
      {
        value: 'Cavallerleone',
        label: 'Cavallerleone'
      },
      {
        value: 'Cavallermaggiore',
        label: 'Cavallermaggiore'
      },
      {
        value: 'Celle di Macra',
        label: 'Celle di Macra'
      },
      {
        value: 'Centallo',
        label: 'Centallo'
      },
      {
        value: 'Ceresole Alba',
        label: 'Ceresole Alba'
      },
      {
        value: 'Cerretto Langhe',
        label: 'Cerretto Langhe'
      },
      {
        value: 'Cervasca',
        label: 'Cervasca'
      },
      {
        value: 'Cervere',
        label: 'Cervere'
      },
      {
        value: 'Ceva',
        label: 'Ceva'
      },
      {
        value: 'Cherasco',
        label: 'Cherasco'
      },
      {
        value: 'Chiusa di Pesio',
        label: 'Chiusa di Pesio'
      },
      {
        value: 'Cigliè',
        label: 'Cigliè'
      },
      {
        value: 'Cissone',
        label: 'Cissone'
      },
      {
        value: 'Clavesana',
        label: 'Clavesana'
      },
      {
        value: 'Corneliano d\'Alba',
        label: 'Corneliano d\'Alba'
      },
      {
        value: 'Cortemilia',
        label: 'Cortemilia'
      },
      {
        value: 'Cossano Belbo',
        label: 'Cossano Belbo'
      },
      {
        value: 'Costigliole Saluzzo',
        label: 'Costigliole Saluzzo'
      },
      {
        value: 'Cravanzana',
        label: 'Cravanzana'
      },
      {
        value: 'Crissolo',
        label: 'Crissolo'
      },
      {
        value: 'Cuneo',
        label: 'Cuneo'
      },
      {
        value: 'Demonte',
        label: 'Demonte'
      },
      {
        value: 'Diano d\'Alba',
        label: 'Diano d\'Alba'
      },
      {
        value: 'Dogliani',
        label: 'Dogliani'
      },
      {
        value: 'Dronero',
        label: 'Dronero'
      },
      {
        value: 'Elva',
        label: 'Elva'
      },
      {
        value: 'Entracque',
        label: 'Entracque'
      },
      {
        value: 'Envie',
        label: 'Envie'
      },
      {
        value: 'Farigliano',
        label: 'Farigliano'
      },
      {
        value: 'Faule',
        label: 'Faule'
      },
      {
        value: 'Feisoglio',
        label: 'Feisoglio'
      },
      {
        value: 'Fossano',
        label: 'Fossano'
      },
      {
        value: 'Frabosa Soprana',
        label: 'Frabosa Soprana'
      },
      {
        value: 'Frabosa Sottana',
        label: 'Frabosa Sottana'
      },
      {
        value: 'Frassino',
        label: 'Frassino'
      },
      {
        value: 'Gaiola',
        label: 'Gaiola'
      },
      {
        value: 'Gambasca',
        label: 'Gambasca'
      },
      {
        value: 'Garessio',
        label: 'Garessio'
      },
      {
        value: 'Genola',
        label: 'Genola'
      },
      {
        value: 'Gorzegno',
        label: 'Gorzegno'
      },
      {
        value: 'Gottasecca',
        label: 'Gottasecca'
      },
      {
        value: 'Govone',
        label: 'Govone'
      },
      {
        value: 'Grinzane Cavour',
        label: 'Grinzane Cavour'
      },
      {
        value: 'Guarene',
        label: 'Guarene'
      },
      {
        value: 'Igliano',
        label: 'Igliano'
      },
      {
        value: 'Isasca',
        label: 'Isasca'
      },
      {
        value: 'Lagnasco',
        label: 'Lagnasco'
      },
      {
        value: 'La Morra',
        label: 'La Morra'
      },
      {
        value: 'Lequio Berria',
        label: 'Lequio Berria'
      },
      {
        value: 'Lequio Tanaro',
        label: 'Lequio Tanaro'
      },
      {
        value: 'Lesegno',
        label: 'Lesegno'
      },
      {
        value: 'Levice',
        label: 'Levice'
      },
      {
        value: 'Limone Piemonte',
        label: 'Limone Piemonte'
      },
      {
        value: 'Lisio',
        label: 'Lisio'
      },
      {
        value: 'Macra',
        label: 'Macra'
      },
      {
        value: 'Magliano Alfieri',
        label: 'Magliano Alfieri'
      },
      {
        value: 'Magliano Alpi',
        label: 'Magliano Alpi'
      },
      {
        value: 'Mango',
        label: 'Mango'
      },
      {
        value: 'Manta',
        label: 'Manta'
      },
      {
        value: 'Marene',
        label: 'Marene'
      },
      {
        value: 'Margarita',
        label: 'Margarita'
      },
      {
        value: 'Marmora',
        label: 'Marmora'
      },
      {
        value: 'Marsaglia',
        label: 'Marsaglia'
      },
      {
        value: 'Martiniana Po',
        label: 'Martiniana Po'
      },
      {
        value: 'Melle',
        label: 'Melle'
      },
      {
        value: 'Moiola',
        label: 'Moiola'
      },
      {
        value: 'Mombarcaro',
        label: 'Mombarcaro'
      },
      {
        value: 'Mombasiglio',
        label: 'Mombasiglio'
      },
      {
        value: 'Monastero di Vasco',
        label: 'Monastero di Vasco'
      },
      {
        value: 'Monasterolo Casotto',
        label: 'Monasterolo Casotto'
      },
      {
        value: 'Monasterolo di Savigliano',
        label: 'Monasterolo di Savigliano'
      },
      {
        value: 'Monchiero',
        label: 'Monchiero'
      },
      {
        value: 'Mondovì',
        label: 'Mondovì'
      },
      {
        value: 'Monesiglio',
        label: 'Monesiglio'
      },
      {
        value: 'Monforte d\'Alba',
        label: 'Monforte d\'Alba'
      },
      {
        value: 'Montà',
        label: 'Montà'
      },
      {
        value: 'Montaldo di Mondovì',
        label: 'Montaldo di Mondovì'
      },
      {
        value: 'Montaldo Roero',
        label: 'Montaldo Roero'
      },
      {
        value: 'Montanera',
        label: 'Montanera'
      },
      {
        value: 'Montelupo Albese',
        label: 'Montelupo Albese'
      },
      {
        value: 'Montemale di Cuneo',
        label: 'Montemale di Cuneo'
      },
      {
        value: 'Monterosso Grana',
        label: 'Monterosso Grana'
      },
      {
        value: 'Monteu Roero',
        label: 'Monteu Roero'
      },
      {
        value: 'Montezemolo',
        label: 'Montezemolo'
      },
      {
        value: 'Monticello d\'Alba',
        label: 'Monticello d\'Alba'
      },
      {
        value: 'Moretta',
        label: 'Moretta'
      },
      {
        value: 'Morozzo',
        label: 'Morozzo'
      },
      {
        value: 'Murazzano',
        label: 'Murazzano'
      },
      {
        value: 'Murello',
        label: 'Murello'
      },
      {
        value: 'Narzole',
        label: 'Narzole'
      },
      {
        value: 'Neive',
        label: 'Neive'
      },
      {
        value: 'Neviglie',
        label: 'Neviglie'
      },
      {
        value: 'Niella Belbo',
        label: 'Niella Belbo'
      },
      {
        value: 'Niella Tanaro',
        label: 'Niella Tanaro'
      },
      {
        value: 'Novello',
        label: 'Novello'
      },
      {
        value: 'Nucetto',
        label: 'Nucetto'
      },
      {
        value: 'Oncino',
        label: 'Oncino'
      },
      {
        value: 'Ormea',
        label: 'Ormea'
      },
      {
        value: 'Ostana',
        label: 'Ostana'
      },
      {
        value: 'Paesana',
        label: 'Paesana'
      },
      {
        value: 'Pagno',
        label: 'Pagno'
      },
      {
        value: 'Pamparato',
        label: 'Pamparato'
      },
      {
        value: 'Paroldo',
        label: 'Paroldo'
      },
      {
        value: 'Perletto',
        label: 'Perletto'
      },
      {
        value: 'Perlo',
        label: 'Perlo'
      },
      {
        value: 'Peveragno',
        label: 'Peveragno'
      },
      {
        value: 'Pezzolo Valle Uzzone',
        label: 'Pezzolo Valle Uzzone'
      },
      {
        value: 'Pianfei',
        label: 'Pianfei'
      },
      {
        value: 'Piasco',
        label: 'Piasco'
      },
      {
        value: 'Pietraporzio',
        label: 'Pietraporzio'
      },
      {
        value: 'Piobesi d\'Alba',
        label: 'Piobesi d\'Alba'
      },
      {
        value: 'Piozzo',
        label: 'Piozzo'
      },
      {
        value: 'Pocapaglia',
        label: 'Pocapaglia'
      },
      {
        value: 'Polonghera',
        label: 'Polonghera'
      },
      {
        value: 'Pontechianale',
        label: 'Pontechianale'
      },
      {
        value: 'Pradleves',
        label: 'Pradleves'
      },
      {
        value: 'Prazzo',
        label: 'Prazzo'
      },
      {
        value: 'Priero',
        label: 'Priero'
      },
      {
        value: 'Priocca',
        label: 'Priocca'
      },
      {
        value: 'Priola',
        label: 'Priola'
      },
      {
        value: 'Prunetto',
        label: 'Prunetto'
      },
      {
        value: 'Racconigi',
        label: 'Racconigi'
      },
      {
        value: 'Revello',
        label: 'Revello'
      },
      {
        value: 'Rifreddo',
        label: 'Rifreddo'
      },
      {
        value: 'Rittana',
        label: 'Rittana'
      },
      {
        value: 'Roaschia',
        label: 'Roaschia'
      },
      {
        value: 'Roascio',
        label: 'Roascio'
      },
      {
        value: 'Robilante',
        label: 'Robilante'
      },
      {
        value: 'Roburent',
        label: 'Roburent'
      },
      {
        value: 'Roccabruna',
        label: 'Roccabruna'
      },
      {
        value: 'Rocca Cigliè',
        label: 'Rocca Cigliè'
      },
      {
        value: 'Rocca de\' Baldi',
        label: 'Rocca de\' Baldi'
      },
      {
        value: 'Roccaforte Mondovì',
        label: 'Roccaforte Mondovì'
      },
      {
        value: 'Roccasparvera',
        label: 'Roccasparvera'
      },
      {
        value: 'Roccavione',
        label: 'Roccavione'
      },
      {
        value: 'Rocchetta Belbo',
        label: 'Rocchetta Belbo'
      },
      {
        value: 'Roddi',
        label: 'Roddi'
      },
      {
        value: 'Roddino',
        label: 'Roddino'
      },
      {
        value: 'Rodello',
        label: 'Rodello'
      },
      {
        value: 'Rossana',
        label: 'Rossana'
      },
      {
        value: 'Ruffia',
        label: 'Ruffia'
      },
      {
        value: 'Sale delle Langhe',
        label: 'Sale delle Langhe'
      },
      {
        value: 'Sale San Giovanni',
        label: 'Sale San Giovanni'
      },
      {
        value: 'Saliceto',
        label: 'Saliceto'
      },
      {
        value: 'Salmour',
        label: 'Salmour'
      },
      {
        value: 'Saluzzo',
        label: 'Saluzzo'
      },
      {
        value: 'Sambuco',
        label: 'Sambuco'
      },
      {
        value: 'Sampeyre',
        label: 'Sampeyre'
      },
      {
        value: 'San Benedetto Belbo',
        label: 'San Benedetto Belbo'
      },
      {
        value: 'San Damiano Macra',
        label: 'San Damiano Macra'
      },
      {
        value: 'Sanfrè',
        label: 'Sanfrè'
      },
      {
        value: 'Sanfront',
        label: 'Sanfront'
      },
      {
        value: 'San Michele Mondovì',
        label: 'San Michele Mondovì'
      },
      {
        value: 'Sant\'Albano Stura',
        label: 'Sant\'Albano Stura'
      },
      {
        value: 'Santa Vittoria d\'Alba',
        label: 'Santa Vittoria d\'Alba'
      },
      {
        value: 'Santo Stefano Belbo',
        label: 'Santo Stefano Belbo'
      },
      {
        value: 'Santo Stefano Roero',
        label: 'Santo Stefano Roero'
      },
      {
        value: 'Savigliano',
        label: 'Savigliano'
      },
      {
        value: 'Scagnello',
        label: 'Scagnello'
      },
      {
        value: 'Scarnafigi',
        label: 'Scarnafigi'
      },
      {
        value: 'Serralunga d\'Alba',
        label: 'Serralunga d\'Alba'
      },
      {
        value: 'Serravalle Langhe',
        label: 'Serravalle Langhe'
      },
      {
        value: 'Sinio',
        label: 'Sinio'
      },
      {
        value: 'Somano',
        label: 'Somano'
      },
      {
        value: 'Sommariva del Bosco',
        label: 'Sommariva del Bosco'
      },
      {
        value: 'Sommariva Perno',
        label: 'Sommariva Perno'
      },
      {
        value: 'Stroppo',
        label: 'Stroppo'
      },
      {
        value: 'Tarantasca',
        label: 'Tarantasca'
      },
      {
        value: 'Torre Bormida',
        label: 'Torre Bormida'
      },
      {
        value: 'Torre Mondovì',
        label: 'Torre Mondovì'
      },
      {
        value: 'Torre San Giorgio',
        label: 'Torre San Giorgio'
      },
      {
        value: 'Torresina',
        label: 'Torresina'
      },
      {
        value: 'Treiso',
        label: 'Treiso'
      },
      {
        value: 'Trezzo Tinella',
        label: 'Trezzo Tinella'
      },
      {
        value: 'Trinità',
        label: 'Trinità'
      },
      {
        value: 'Valdieri',
        label: 'Valdieri'
      },
      {
        value: 'Valgrana',
        label: 'Valgrana'
      },
      {
        value: 'Valloriate',
        label: 'Valloriate'
      },
      {
        value: 'Venasca',
        label: 'Venasca'
      },
      {
        value: 'Verduno',
        label: 'Verduno'
      },
      {
        value: 'Vernante',
        label: 'Vernante'
      },
      {
        value: 'Verzuolo',
        label: 'Verzuolo'
      },
      {
        value: 'Vezza d\'Alba',
        label: 'Vezza d\'Alba'
      },
      {
        value: 'Vicoforte',
        label: 'Vicoforte'
      },
      {
        value: 'Vignolo',
        label: 'Vignolo'
      },
      {
        value: 'Villafalletto',
        label: 'Villafalletto'
      },
      {
        value: 'Villanova Mondovì',
        label: 'Villanova Mondovì'
      },
      {
        value: 'Villanova Solaro',
        label: 'Villanova Solaro'
      },
      {
        value: 'Villar San Costanzo',
        label: 'Villar San Costanzo'
      },
      {
        value: 'Vinadio',
        label: 'Vinadio'
      },
      {
        value: 'Viola',
        label: 'Viola'
      },
      {
        value: 'Vottignasco',
        label: 'Vottignasco'
      },
      {
        value: 'Agliano Terme',
        label: 'Agliano Terme'
      },
      {
        value: 'Albugnano',
        label: 'Albugnano'
      },
      {
        value: 'Antignano',
        label: 'Antignano'
      },
      {
        value: 'Aramengo',
        label: 'Aramengo'
      },
      {
        value: 'Asti',
        label: 'Asti'
      },
      {
        value: 'Azzano d\'Asti',
        label: 'Azzano d\'Asti'
      },
      {
        value: 'Baldichieri d\'Asti',
        label: 'Baldichieri d\'Asti'
      },
      {
        value: 'Belveglio',
        label: 'Belveglio'
      },
      {
        value: 'Berzano di San Pietro',
        label: 'Berzano di San Pietro'
      },
      {
        value: 'Bruno',
        label: 'Bruno'
      },
      {
        value: 'Bubbio',
        label: 'Bubbio'
      },
      {
        value: 'Buttigliera d\'Asti',
        label: 'Buttigliera d\'Asti'
      },
      {
        value: 'Calamandrana',
        label: 'Calamandrana'
      },
      {
        value: 'Calliano Monferrato',
        label: 'Calliano Monferrato'
      },
      {
        value: 'Calosso',
        label: 'Calosso'
      },
      {
        value: 'Camerano Casasco',
        label: 'Camerano Casasco'
      },
      {
        value: 'Canelli',
        label: 'Canelli'
      },
      {
        value: 'Cantarana',
        label: 'Cantarana'
      },
      {
        value: 'Capriglio',
        label: 'Capriglio'
      },
      {
        value: 'Casorzo Monferrato',
        label: 'Casorzo Monferrato'
      },
      {
        value: 'Cassinasco',
        label: 'Cassinasco'
      },
      {
        value: 'Castagnole delle Lanze',
        label: 'Castagnole delle Lanze'
      },
      {
        value: 'Castagnole Monferrato',
        label: 'Castagnole Monferrato'
      },
      {
        value: 'Castel Boglione',
        label: 'Castel Boglione'
      },
      {
        value: 'Castell\'Alfero',
        label: 'Castell\'Alfero'
      },
      {
        value: 'Castellero',
        label: 'Castellero'
      },
      {
        value: 'Castelletto Molina',
        label: 'Castelletto Molina'
      },
      {
        value: 'Castello di Annone',
        label: 'Castello di Annone'
      },
      {
        value: 'Castelnuovo Belbo',
        label: 'Castelnuovo Belbo'
      },
      {
        value: 'Castelnuovo Calcea',
        label: 'Castelnuovo Calcea'
      },
      {
        value: 'Castelnuovo Don Bosco',
        label: 'Castelnuovo Don Bosco'
      },
      {
        value: 'Castel Rocchero',
        label: 'Castel Rocchero'
      },
      {
        value: 'Cellarengo',
        label: 'Cellarengo'
      },
      {
        value: 'Celle Enomondo',
        label: 'Celle Enomondo'
      },
      {
        value: 'Cerreto d\'Asti',
        label: 'Cerreto d\'Asti'
      },
      {
        value: 'Cerro Tanaro',
        label: 'Cerro Tanaro'
      },
      {
        value: 'Cessole',
        label: 'Cessole'
      },
      {
        value: 'Chiusano d\'Asti',
        label: 'Chiusano d\'Asti'
      },
      {
        value: 'Cinaglio',
        label: 'Cinaglio'
      },
      {
        value: 'Cisterna d\'Asti',
        label: 'Cisterna d\'Asti'
      },
      {
        value: 'Coazzolo',
        label: 'Coazzolo'
      },
      {
        value: 'Cocconato',
        label: 'Cocconato'
      },
      {
        value: 'Corsione',
        label: 'Corsione'
      },
      {
        value: 'Cortandone',
        label: 'Cortandone'
      },
      {
        value: 'Cortanze',
        label: 'Cortanze'
      },
      {
        value: 'Cortazzone',
        label: 'Cortazzone'
      },
      {
        value: 'Cortiglione',
        label: 'Cortiglione'
      },
      {
        value: 'Cossombrato',
        label: 'Cossombrato'
      },
      {
        value: 'Costigliole d\'Asti',
        label: 'Costigliole d\'Asti'
      },
      {
        value: 'Cunico',
        label: 'Cunico'
      },
      {
        value: 'Dusino San Michele',
        label: 'Dusino San Michele'
      },
      {
        value: 'Ferrere',
        label: 'Ferrere'
      },
      {
        value: 'Fontanile',
        label: 'Fontanile'
      },
      {
        value: 'Frinco',
        label: 'Frinco'
      },
      {
        value: 'Grana Monferrato',
        label: 'Grana Monferrato'
      },
      {
        value: 'Grazzano Badoglio',
        label: 'Grazzano Badoglio'
      },
      {
        value: 'Incisa Scapaccino',
        label: 'Incisa Scapaccino'
      },
      {
        value: 'Isola d\'Asti',
        label: 'Isola d\'Asti'
      },
      {
        value: 'Loazzolo',
        label: 'Loazzolo'
      },
      {
        value: 'Maranzana',
        label: 'Maranzana'
      },
      {
        value: 'Maretto',
        label: 'Maretto'
      },
      {
        value: 'Moasca',
        label: 'Moasca'
      },
      {
        value: 'Mombaldone',
        label: 'Mombaldone'
      },
      {
        value: 'Mombaruzzo',
        label: 'Mombaruzzo'
      },
      {
        value: 'Mombercelli',
        label: 'Mombercelli'
      },
      {
        value: 'Monale',
        label: 'Monale'
      },
      {
        value: 'Monastero Bormida',
        label: 'Monastero Bormida'
      },
      {
        value: 'Moncalvo',
        label: 'Moncalvo'
      },
      {
        value: 'Moncucco Torinese',
        label: 'Moncucco Torinese'
      },
      {
        value: 'Mongardino',
        label: 'Mongardino'
      },
      {
        value: 'Montabone',
        label: 'Montabone'
      },
      {
        value: 'Montafia',
        label: 'Montafia'
      },
      {
        value: 'Montaldo Scarampi',
        label: 'Montaldo Scarampi'
      },
      {
        value: 'Montechiaro d\'Asti',
        label: 'Montechiaro d\'Asti'
      },
      {
        value: 'Montegrosso d\'Asti',
        label: 'Montegrosso d\'Asti'
      },
      {
        value: 'Montemagno Monferrato',
        label: 'Montemagno Monferrato'
      },
      {
        value: 'Nizza Monferrato',
        label: 'Nizza Monferrato'
      },
      {
        value: 'Olmo Gentile',
        label: 'Olmo Gentile'
      },
      {
        value: 'Passerano Marmorito',
        label: 'Passerano Marmorito'
      },
      {
        value: 'Penango',
        label: 'Penango'
      },
      {
        value: 'Piea',
        label: 'Piea'
      },
      {
        value: 'Pino d\'Asti',
        label: 'Pino d\'Asti'
      },
      {
        value: 'Piovà Massaia',
        label: 'Piovà Massaia'
      },
      {
        value: 'Portacomaro',
        label: 'Portacomaro'
      },
      {
        value: 'Quaranti',
        label: 'Quaranti'
      },
      {
        value: 'Refrancore',
        label: 'Refrancore'
      },
      {
        value: 'Revigliasco d\'Asti',
        label: 'Revigliasco d\'Asti'
      },
      {
        value: 'Roatto',
        label: 'Roatto'
      },
      {
        value: 'Robella',
        label: 'Robella'
      },
      {
        value: 'Rocca d\'Arazzo',
        label: 'Rocca d\'Arazzo'
      },
      {
        value: 'Roccaverano',
        label: 'Roccaverano'
      },
      {
        value: 'Rocchetta Palafea',
        label: 'Rocchetta Palafea'
      },
      {
        value: 'Rocchetta Tanaro',
        label: 'Rocchetta Tanaro'
      },
      {
        value: 'San Damiano d\'Asti',
        label: 'San Damiano d\'Asti'
      },
      {
        value: 'San Giorgio Scarampi',
        label: 'San Giorgio Scarampi'
      },
      {
        value: 'San Martino Alfieri',
        label: 'San Martino Alfieri'
      },
      {
        value: 'San Marzano Oliveto',
        label: 'San Marzano Oliveto'
      },
      {
        value: 'San Paolo Solbrito',
        label: 'San Paolo Solbrito'
      },
      {
        value: 'Scurzolengo',
        label: 'Scurzolengo'
      },
      {
        value: 'Serole',
        label: 'Serole'
      },
      {
        value: 'Sessame',
        label: 'Sessame'
      },
      {
        value: 'Settime',
        label: 'Settime'
      },
      {
        value: 'Soglio',
        label: 'Soglio'
      },
      {
        value: 'Tigliole',
        label: 'Tigliole'
      },
      {
        value: 'Tonco',
        label: 'Tonco'
      },
      {
        value: 'Vaglio Serra',
        label: 'Vaglio Serra'
      },
      {
        value: 'Valfenera',
        label: 'Valfenera'
      },
      {
        value: 'Vesime',
        label: 'Vesime'
      },
      {
        value: 'Viale',
        label: 'Viale'
      },
      {
        value: 'Viarigi',
        label: 'Viarigi'
      },
      {
        value: 'Vigliano d\'Asti',
        label: 'Vigliano d\'Asti'
      },
      {
        value: 'Villafranca d\'Asti',
        label: 'Villafranca d\'Asti'
      },
      {
        value: 'Villanova d\'Asti',
        label: 'Villanova d\'Asti'
      },
      {
        value: 'Villa San Secondo',
        label: 'Villa San Secondo'
      },
      {
        value: 'Vinchio',
        label: 'Vinchio'
      },
      {
        value: 'Montiglio Monferrato',
        label: 'Montiglio Monferrato'
      },
      {
        value: 'Moransengo-Tonengo',
        label: 'Moransengo-Tonengo'
      },
      {
        value: 'Acqui Terme',
        label: 'Acqui Terme'
      },
      {
        value: 'Albera Ligure',
        label: 'Albera Ligure'
      },
      {
        value: 'Alessandria',
        label: 'Alessandria'
      },
      {
        value: 'Alfiano Natta',
        label: 'Alfiano Natta'
      },
      {
        value: 'Alice Bel Colle',
        label: 'Alice Bel Colle'
      },
      {
        value: 'Altavilla Monferrato',
        label: 'Altavilla Monferrato'
      },
      {
        value: 'Alzano Scrivia',
        label: 'Alzano Scrivia'
      },
      {
        value: 'Arquata Scrivia',
        label: 'Arquata Scrivia'
      },
      {
        value: 'Avolasca',
        label: 'Avolasca'
      },
      {
        value: 'Balzola',
        label: 'Balzola'
      },
      {
        value: 'Basaluzzo',
        label: 'Basaluzzo'
      },
      {
        value: 'Bassignana',
        label: 'Bassignana'
      },
      {
        value: 'Belforte Monferrato',
        label: 'Belforte Monferrato'
      },
      {
        value: 'Bergamasco',
        label: 'Bergamasco'
      },
      {
        value: 'Berzano di Tortona',
        label: 'Berzano di Tortona'
      },
      {
        value: 'Bistagno',
        label: 'Bistagno'
      },
      {
        value: 'Borghetto di Borbera',
        label: 'Borghetto di Borbera'
      },
      {
        value: 'Borgoratto Alessandrino',
        label: 'Borgoratto Alessandrino'
      },
      {
        value: 'Borgo San Martino',
        label: 'Borgo San Martino'
      },
      {
        value: 'Bosco Marengo',
        label: 'Bosco Marengo'
      },
      {
        value: 'Bosio',
        label: 'Bosio'
      },
      {
        value: 'Bozzole',
        label: 'Bozzole'
      },
      {
        value: 'Brignano-Frascata',
        label: 'Brignano-Frascata'
      },
      {
        value: 'Cabella Ligure',
        label: 'Cabella Ligure'
      },
      {
        value: 'Camagna Monferrato',
        label: 'Camagna Monferrato'
      },
      {
        value: 'Camino',
        label: 'Camino'
      },
      {
        value: 'Cantalupo Ligure',
        label: 'Cantalupo Ligure'
      },
      {
        value: 'Capriata d\'Orba',
        label: 'Capriata d\'Orba'
      },
      {
        value: 'Carbonara Scrivia',
        label: 'Carbonara Scrivia'
      },
      {
        value: 'Carentino',
        label: 'Carentino'
      },
      {
        value: 'Carezzano',
        label: 'Carezzano'
      },
      {
        value: 'Carpeneto',
        label: 'Carpeneto'
      },
      {
        value: 'Carrega Ligure',
        label: 'Carrega Ligure'
      },
      {
        value: 'Carrosio',
        label: 'Carrosio'
      },
      {
        value: 'Cartosio',
        label: 'Cartosio'
      },
      {
        value: 'Casal Cermelli',
        label: 'Casal Cermelli'
      },
      {
        value: 'Casaleggio Boiro',
        label: 'Casaleggio Boiro'
      },
      {
        value: 'Casale Monferrato',
        label: 'Casale Monferrato'
      },
      {
        value: 'Casalnoceto',
        label: 'Casalnoceto'
      },
      {
        value: 'Casasco',
        label: 'Casasco'
      },
      {
        value: 'Cassine',
        label: 'Cassine'
      },
      {
        value: 'Cassinelle',
        label: 'Cassinelle'
      },
      {
        value: 'Castellania Coppi',
        label: 'Castellania Coppi'
      },
      {
        value: 'Castellar Guidobono',
        label: 'Castellar Guidobono'
      },
      {
        value: 'Castellazzo Bormida',
        label: 'Castellazzo Bormida'
      },
      {
        value: 'Castelletto d\'Erro',
        label: 'Castelletto d\'Erro'
      },
      {
        value: 'Castelletto d\'Orba',
        label: 'Castelletto d\'Orba'
      },
      {
        value: 'Castelletto Merli',
        label: 'Castelletto Merli'
      },
      {
        value: 'Castelletto Monferrato',
        label: 'Castelletto Monferrato'
      },
      {
        value: 'Castelnuovo Bormida',
        label: 'Castelnuovo Bormida'
      },
      {
        value: 'Castelnuovo Scrivia',
        label: 'Castelnuovo Scrivia'
      },
      {
        value: 'Castelspina',
        label: 'Castelspina'
      },
      {
        value: 'Cavatore',
        label: 'Cavatore'
      },
      {
        value: 'Cella Monte',
        label: 'Cella Monte'
      },
      {
        value: 'Cereseto',
        label: 'Cereseto'
      },
      {
        value: 'Cerreto Grue',
        label: 'Cerreto Grue'
      },
      {
        value: 'Cerrina Monferrato',
        label: 'Cerrina Monferrato'
      },
      {
        value: 'Coniolo',
        label: 'Coniolo'
      },
      {
        value: 'Conzano',
        label: 'Conzano'
      },
      {
        value: 'Costa Vescovato',
        label: 'Costa Vescovato'
      },
      {
        value: 'Cremolino',
        label: 'Cremolino'
      },
      {
        value: 'Denice',
        label: 'Denice'
      },
      {
        value: 'Dernice',
        label: 'Dernice'
      },
      {
        value: 'Fabbrica Curone',
        label: 'Fabbrica Curone'
      },
      {
        value: 'Felizzano',
        label: 'Felizzano'
      },
      {
        value: 'Fraconalto',
        label: 'Fraconalto'
      },
      {
        value: 'Francavilla Bisio',
        label: 'Francavilla Bisio'
      },
      {
        value: 'Frascaro',
        label: 'Frascaro'
      },
      {
        value: 'Frassinello Monferrato',
        label: 'Frassinello Monferrato'
      },
      {
        value: 'Frassineto Po',
        label: 'Frassineto Po'
      },
      {
        value: 'Fresonara',
        label: 'Fresonara'
      },
      {
        value: 'Frugarolo',
        label: 'Frugarolo'
      },
      {
        value: 'Fubine Monferrato',
        label: 'Fubine Monferrato'
      },
      {
        value: 'Gabiano',
        label: 'Gabiano'
      },
      {
        value: 'Gamalero',
        label: 'Gamalero'
      },
      {
        value: 'Garbagna',
        label: 'Garbagna'
      },
      {
        value: 'Gavi',
        label: 'Gavi'
      },
      {
        value: 'Giarole',
        label: 'Giarole'
      },
      {
        value: 'Gremiasco',
        label: 'Gremiasco'
      },
      {
        value: 'Grognardo',
        label: 'Grognardo'
      },
      {
        value: 'Grondona',
        label: 'Grondona'
      },
      {
        value: 'Guazzora',
        label: 'Guazzora'
      },
      {
        value: 'Isola Sant\'Antonio',
        label: 'Isola Sant\'Antonio'
      },
      {
        value: 'Lerma',
        label: 'Lerma'
      },
      {
        value: 'Malvicino',
        label: 'Malvicino'
      },
      {
        value: 'Masio',
        label: 'Masio'
      },
      {
        value: 'Melazzo',
        label: 'Melazzo'
      },
      {
        value: 'Merana',
        label: 'Merana'
      },
      {
        value: 'Mirabello Monferrato',
        label: 'Mirabello Monferrato'
      },
      {
        value: 'Molare',
        label: 'Molare'
      },
      {
        value: 'Molino dei Torti',
        label: 'Molino dei Torti'
      },
      {
        value: 'Mombello Monferrato',
        label: 'Mombello Monferrato'
      },
      {
        value: 'Momperone',
        label: 'Momperone'
      },
      {
        value: 'Moncestino',
        label: 'Moncestino'
      },
      {
        value: 'Mongiardino Ligure',
        label: 'Mongiardino Ligure'
      },
      {
        value: 'Monleale',
        label: 'Monleale'
      },
      {
        value: 'Montacuto',
        label: 'Montacuto'
      },
      {
        value: 'Montaldeo',
        label: 'Montaldeo'
      },
      {
        value: 'Montaldo Bormida',
        label: 'Montaldo Bormida'
      },
      {
        value: 'Montecastello',
        label: 'Montecastello'
      },
      {
        value: 'Montechiaro d\'Acqui',
        label: 'Montechiaro d\'Acqui'
      },
      {
        value: 'Montegioco',
        label: 'Montegioco'
      },
      {
        value: 'Montemarzino',
        label: 'Montemarzino'
      },
      {
        value: 'Morano sul Po',
        label: 'Morano sul Po'
      },
      {
        value: 'Morbello',
        label: 'Morbello'
      },
      {
        value: 'Mornese',
        label: 'Mornese'
      },
      {
        value: 'Morsasco',
        label: 'Morsasco'
      },
      {
        value: 'Murisengo',
        label: 'Murisengo'
      },
      {
        value: 'Novi Ligure',
        label: 'Novi Ligure'
      },
      {
        value: 'Occimiano',
        label: 'Occimiano'
      },
      {
        value: 'Odalengo Grande',
        label: 'Odalengo Grande'
      },
      {
        value: 'Odalengo Piccolo',
        label: 'Odalengo Piccolo'
      },
      {
        value: 'Olivola',
        label: 'Olivola'
      },
      {
        value: 'Orsara Bormida',
        label: 'Orsara Bormida'
      },
      {
        value: 'Ottiglio',
        label: 'Ottiglio'
      },
      {
        value: 'Ovada',
        label: 'Ovada'
      },
      {
        value: 'Oviglio',
        label: 'Oviglio'
      },
      {
        value: 'Ozzano Monferrato',
        label: 'Ozzano Monferrato'
      },
      {
        value: 'Paderna',
        label: 'Paderna'
      },
      {
        value: 'Pareto',
        label: 'Pareto'
      },
      {
        value: 'Parodi Ligure',
        label: 'Parodi Ligure'
      },
      {
        value: 'Pasturana',
        label: 'Pasturana'
      },
      {
        value: 'Pecetto di Valenza',
        label: 'Pecetto di Valenza'
      },
      {
        value: 'Pietra Marazzi',
        label: 'Pietra Marazzi'
      },
      {
        value: 'Pomaro Monferrato',
        label: 'Pomaro Monferrato'
      },
      {
        value: 'Pontecurone',
        label: 'Pontecurone'
      },
      {
        value: 'Pontestura',
        label: 'Pontestura'
      },
      {
        value: 'Ponti',
        label: 'Ponti'
      },
      {
        value: 'Ponzano Monferrato',
        label: 'Ponzano Monferrato'
      },
      {
        value: 'Ponzone',
        label: 'Ponzone'
      },
      {
        value: 'Pozzol Groppo',
        label: 'Pozzol Groppo'
      },
      {
        value: 'Pozzolo Formigaro',
        label: 'Pozzolo Formigaro'
      },
      {
        value: 'Prasco',
        label: 'Prasco'
      },
      {
        value: 'Predosa',
        label: 'Predosa'
      },
      {
        value: 'Quargnento',
        label: 'Quargnento'
      },
      {
        value: 'Quattordio',
        label: 'Quattordio'
      },
      {
        value: 'Ricaldone',
        label: 'Ricaldone'
      },
      {
        value: 'Rivalta Bormida',
        label: 'Rivalta Bormida'
      },
      {
        value: 'Rivarone',
        label: 'Rivarone'
      },
      {
        value: 'Roccaforte Ligure',
        label: 'Roccaforte Ligure'
      },
      {
        value: 'Rocca Grimalda',
        label: 'Rocca Grimalda'
      },
      {
        value: 'Rocchetta Ligure',
        label: 'Rocchetta Ligure'
      },
      {
        value: 'Rosignano Monferrato',
        label: 'Rosignano Monferrato'
      },
      {
        value: 'Sala Monferrato',
        label: 'Sala Monferrato'
      },
      {
        value: 'Sale',
        label: 'Sale'
      },
      {
        value: 'San Cristoforo',
        label: 'San Cristoforo'
      },
      {
        value: 'San Giorgio Monferrato',
        label: 'San Giorgio Monferrato'
      },
      {
        value: 'San Salvatore Monferrato',
        label: 'San Salvatore Monferrato'
      },
      {
        value: 'San Sebastiano Curone',
        label: 'San Sebastiano Curone'
      },
      {
        value: 'Sant\'Agata Fossili',
        label: 'Sant\'Agata Fossili'
      },
      {
        value: 'Sardigliano',
        label: 'Sardigliano'
      },
      {
        value: 'Sarezzano',
        label: 'Sarezzano'
      },
      {
        value: 'Serralunga di Crea',
        label: 'Serralunga di Crea'
      },
      {
        value: 'Serravalle Scrivia',
        label: 'Serravalle Scrivia'
      },
      {
        value: 'Sezzadio',
        label: 'Sezzadio'
      },
      {
        value: 'Silvano d\'Orba',
        label: 'Silvano d\'Orba'
      },
      {
        value: 'Solero',
        label: 'Solero'
      },
      {
        value: 'Solonghello',
        label: 'Solonghello'
      },
      {
        value: 'Spigno Monferrato',
        label: 'Spigno Monferrato'
      },
      {
        value: 'Spineto Scrivia',
        label: 'Spineto Scrivia'
      },
      {
        value: 'Stazzano',
        label: 'Stazzano'
      },
      {
        value: 'Strevi',
        label: 'Strevi'
      },
      {
        value: 'Tagliolo Monferrato',
        label: 'Tagliolo Monferrato'
      },
      {
        value: 'Tassarolo',
        label: 'Tassarolo'
      },
      {
        value: 'Terruggia',
        label: 'Terruggia'
      },
      {
        value: 'Terzo',
        label: 'Terzo'
      },
      {
        value: 'Ticineto',
        label: 'Ticineto'
      },
      {
        value: 'Tortona',
        label: 'Tortona'
      },
      {
        value: 'Treville',
        label: 'Treville'
      },
      {
        value: 'Trisobbio',
        label: 'Trisobbio'
      },
      {
        value: 'Valenza',
        label: 'Valenza'
      },
      {
        value: 'Valmacca',
        label: 'Valmacca'
      },
      {
        value: 'Vignale Monferrato',
        label: 'Vignale Monferrato'
      },
      {
        value: 'Vignole Borbera',
        label: 'Vignole Borbera'
      },
      {
        value: 'Viguzzolo',
        label: 'Viguzzolo'
      },
      {
        value: 'Villadeati',
        label: 'Villadeati'
      },
      {
        value: 'Villalvernia',
        label: 'Villalvernia'
      },
      {
        value: 'Villamiroglio',
        label: 'Villamiroglio'
      },
      {
        value: 'Villanova Monferrato',
        label: 'Villanova Monferrato'
      },
      {
        value: 'Villaromagnano',
        label: 'Villaromagnano'
      },
      {
        value: 'Visone',
        label: 'Visone'
      },
      {
        value: 'Volpedo',
        label: 'Volpedo'
      },
      {
        value: 'Volpeglino',
        label: 'Volpeglino'
      },
      {
        value: 'Voltaggio',
        label: 'Voltaggio'
      },
      {
        value: 'Cassano Spinola',
        label: 'Cassano Spinola'
      },
      {
        value: 'Alluvioni Piovera',
        label: 'Alluvioni Piovera'
      },
      {
        value: 'Lu e Cuccaro Monferrato',
        label: 'Lu e Cuccaro Monferrato'
      },
      {
        value: 'Allein',
        label: 'Allein'
      },
      {
        value: 'Antey-Saint-André',
        label: 'Antey-Saint-André'
      },
      {
        value: 'Aosta',
        label: 'Aosta'
      },
      {
        value: 'Arnad',
        label: 'Arnad'
      },
      {
        value: 'Arvier',
        label: 'Arvier'
      },
      {
        value: 'Avise',
        label: 'Avise'
      },
      {
        value: 'Ayas',
        label: 'Ayas'
      },
      {
        value: 'Aymavilles',
        label: 'Aymavilles'
      },
      {
        value: 'Bard',
        label: 'Bard'
      },
      {
        value: 'Bionaz',
        label: 'Bionaz'
      },
      {
        value: 'Brissogne',
        label: 'Brissogne'
      },
      {
        value: 'Brusson',
        label: 'Brusson'
      },
      {
        value: 'Challand-Saint-Anselme',
        label: 'Challand-Saint-Anselme'
      },
      {
        value: 'Challand-Saint-Victor',
        label: 'Challand-Saint-Victor'
      },
      {
        value: 'Chambave',
        label: 'Chambave'
      },
      {
        value: 'Chamois',
        label: 'Chamois'
      },
      {
        value: 'Champdepraz',
        label: 'Champdepraz'
      },
      {
        value: 'Champorcher',
        label: 'Champorcher'
      },
      {
        value: 'Charvensod',
        label: 'Charvensod'
      },
      {
        value: 'Châtillon',
        label: 'Châtillon'
      },
      {
        value: 'Cogne',
        label: 'Cogne'
      },
      {
        value: 'Courmayeur',
        label: 'Courmayeur'
      },
      {
        value: 'Donnas',
        label: 'Donnas'
      },
      {
        value: 'Doues',
        label: 'Doues'
      },
      {
        value: 'Emarèse',
        label: 'Emarèse'
      },
      {
        value: 'Etroubles',
        label: 'Etroubles'
      },
      {
        value: 'Fénis',
        label: 'Fénis'
      },
      {
        value: 'Fontainemore',
        label: 'Fontainemore'
      },
      {
        value: 'Gaby',
        label: 'Gaby'
      },
      {
        value: 'Gignod',
        label: 'Gignod'
      },
      {
        value: 'Gressan',
        label: 'Gressan'
      },
      {
        value: 'Gressoney-La-Trinité',
        label: 'Gressoney-La-Trinité'
      },
      {
        value: 'Gressoney-Saint-Jean',
        label: 'Gressoney-Saint-Jean'
      },
      {
        value: 'Hône',
        label: 'Hône'
      },
      {
        value: 'Introd',
        label: 'Introd'
      },
      {
        value: 'Issime',
        label: 'Issime'
      },
      {
        value: 'Issogne',
        label: 'Issogne'
      },
      {
        value: 'Jovençan',
        label: 'Jovençan'
      },
      {
        value: 'La Magdeleine',
        label: 'La Magdeleine'
      },
      {
        value: 'La Salle',
        label: 'La Salle'
      },
      {
        value: 'La Thuile',
        label: 'La Thuile'
      },
      {
        value: 'Lillianes',
        label: 'Lillianes'
      },
      {
        value: 'Montjovet',
        label: 'Montjovet'
      },
      {
        value: 'Morgex',
        label: 'Morgex'
      },
      {
        value: 'Nus',
        label: 'Nus'
      },
      {
        value: 'Ollomont',
        label: 'Ollomont'
      },
      {
        value: 'Oyace',
        label: 'Oyace'
      },
      {
        value: 'Perloz',
        label: 'Perloz'
      },
      {
        value: 'Pollein',
        label: 'Pollein'
      },
      {
        value: 'Pontboset',
        label: 'Pontboset'
      },
      {
        value: 'Pontey',
        label: 'Pontey'
      },
      {
        value: 'Pont-Saint-Martin',
        label: 'Pont-Saint-Martin'
      },
      {
        value: 'Pré-Saint-Didier',
        label: 'Pré-Saint-Didier'
      },
      {
        value: 'Quart',
        label: 'Quart'
      },
      {
        value: 'Rhêmes-Notre-Dame',
        label: 'Rhêmes-Notre-Dame'
      },
      {
        value: 'Rhêmes-Saint-Georges',
        label: 'Rhêmes-Saint-Georges'
      },
      {
        value: 'Roisan',
        label: 'Roisan'
      },
      {
        value: 'Saint-Christophe',
        label: 'Saint-Christophe'
      },
      {
        value: 'Saint-Denis',
        label: 'Saint-Denis'
      },
      {
        value: 'Saint-Marcel',
        label: 'Saint-Marcel'
      },
      {
        value: 'Saint-Nicolas',
        label: 'Saint-Nicolas'
      },
      {
        value: 'Saint-Oyen',
        label: 'Saint-Oyen'
      },
      {
        value: 'Saint-Pierre',
        label: 'Saint-Pierre'
      },
      {
        value: 'Saint-Rhémy-en-Bosses',
        label: 'Saint-Rhémy-en-Bosses'
      },
      {
        value: 'Saint-Vincent',
        label: 'Saint-Vincent'
      },
      {
        value: 'Sarre',
        label: 'Sarre'
      },
      {
        value: 'Torgnon',
        label: 'Torgnon'
      },
      {
        value: 'Valgrisenche',
        label: 'Valgrisenche'
      },
      {
        value: 'Valpelline',
        label: 'Valpelline'
      },
      {
        value: 'Valsavarenche',
        label: 'Valsavarenche'
      },
      {
        value: 'Valtournenche',
        label: 'Valtournenche'
      },
      {
        value: 'Verrayes',
        label: 'Verrayes'
      },
      {
        value: 'Verrès',
        label: 'Verrès'
      },
      {
        value: 'Villeneuve',
        label: 'Villeneuve'
      },
      {
        value: 'Airole',
        label: 'Airole'
      },
      {
        value: 'Apricale',
        label: 'Apricale'
      },
      {
        value: 'Aquila d\'Arroscia',
        label: 'Aquila d\'Arroscia'
      },
      {
        value: 'Armo',
        label: 'Armo'
      },
      {
        value: 'Aurigo',
        label: 'Aurigo'
      },
      {
        value: 'Badalucco',
        label: 'Badalucco'
      },
      {
        value: 'Bajardo',
        label: 'Bajardo'
      },
      {
        value: 'Bordighera',
        label: 'Bordighera'
      },
      {
        value: 'Borghetto d\'Arroscia',
        label: 'Borghetto d\'Arroscia'
      },
      {
        value: 'Borgomaro',
        label: 'Borgomaro'
      },
      {
        value: 'Camporosso',
        label: 'Camporosso'
      },
      {
        value: 'Caravonica',
        label: 'Caravonica'
      },
      {
        value: 'Castellaro',
        label: 'Castellaro'
      },
      {
        value: 'Castel Vittorio',
        label: 'Castel Vittorio'
      },
      {
        value: 'Ceriana',
        label: 'Ceriana'
      },
      {
        value: 'Cervo',
        label: 'Cervo'
      },
      {
        value: 'Cesio',
        label: 'Cesio'
      },
      {
        value: 'Chiusanico',
        label: 'Chiusanico'
      },
      {
        value: 'Chiusavecchia',
        label: 'Chiusavecchia'
      },
      {
        value: 'Cipressa',
        label: 'Cipressa'
      },
      {
        value: 'Civezza',
        label: 'Civezza'
      },
      {
        value: 'Cosio d\'Arroscia',
        label: 'Cosio d\'Arroscia'
      },
      {
        value: 'Costarainera',
        label: 'Costarainera'
      },
      {
        value: 'Diano Arentino',
        label: 'Diano Arentino'
      },
      {
        value: 'Diano Castello',
        label: 'Diano Castello'
      },
      {
        value: 'Diano Marina',
        label: 'Diano Marina'
      },
      {
        value: 'Diano San Pietro',
        label: 'Diano San Pietro'
      },
      {
        value: 'Dolceacqua',
        label: 'Dolceacqua'
      },
      {
        value: 'Dolcedo',
        label: 'Dolcedo'
      },
      {
        value: 'Imperia',
        label: 'Imperia'
      },
      {
        value: 'Isolabona',
        label: 'Isolabona'
      },
      {
        value: 'Lucinasco',
        label: 'Lucinasco'
      },
      {
        value: 'Mendatica',
        label: 'Mendatica'
      },
      {
        value: 'Molini di Triora',
        label: 'Molini di Triora'
      },
      {
        value: 'Montegrosso Pian Latte',
        label: 'Montegrosso Pian Latte'
      },
      {
        value: 'Olivetta San Michele',
        label: 'Olivetta San Michele'
      },
      {
        value: 'Ospedaletti',
        label: 'Ospedaletti'
      },
      {
        value: 'Perinaldo',
        label: 'Perinaldo'
      },
      {
        value: 'Pietrabruna',
        label: 'Pietrabruna'
      },
      {
        value: 'Pieve di Teco',
        label: 'Pieve di Teco'
      },
      {
        value: 'Pigna',
        label: 'Pigna'
      },
      {
        value: 'Pompeiana',
        label: 'Pompeiana'
      },
      {
        value: 'Pontedassio',
        label: 'Pontedassio'
      },
      {
        value: 'Pornassio',
        label: 'Pornassio'
      },
      {
        value: 'Prelà',
        label: 'Prelà'
      },
      {
        value: 'Ranzo',
        label: 'Ranzo'
      },
      {
        value: 'Rezzo',
        label: 'Rezzo'
      },
      {
        value: 'Riva Ligure',
        label: 'Riva Ligure'
      },
      {
        value: 'Rocchetta Nervina',
        label: 'Rocchetta Nervina'
      },
      {
        value: 'San Bartolomeo al Mare',
        label: 'San Bartolomeo al Mare'
      },
      {
        value: 'San Biagio della Cima',
        label: 'San Biagio della Cima'
      },
      {
        value: 'San Lorenzo al Mare',
        label: 'San Lorenzo al Mare'
      },
      {
        value: 'Sanremo',
        label: 'Sanremo'
      },
      {
        value: 'Santo Stefano al Mare',
        label: 'Santo Stefano al Mare'
      },
      {
        value: 'Seborga',
        label: 'Seborga'
      },
      {
        value: 'Soldano',
        label: 'Soldano'
      },
      {
        value: 'Taggia',
        label: 'Taggia'
      },
      {
        value: 'Terzorio',
        label: 'Terzorio'
      },
      {
        value: 'Triora',
        label: 'Triora'
      },
      {
        value: 'Vallebona',
        label: 'Vallebona'
      },
      {
        value: 'Vallecrosia',
        label: 'Vallecrosia'
      },
      {
        value: 'Vasia',
        label: 'Vasia'
      },
      {
        value: 'Ventimiglia',
        label: 'Ventimiglia'
      },
      {
        value: 'Vessalico',
        label: 'Vessalico'
      },
      {
        value: 'Villa Faraldi',
        label: 'Villa Faraldi'
      },
      {
        value: 'Montalto Carpasio',
        label: 'Montalto Carpasio'
      },
      {
        value: 'Alassio',
        label: 'Alassio'
      },
      {
        value: 'Albenga',
        label: 'Albenga'
      },
      {
        value: 'Albissola Marina',
        label: 'Albissola Marina'
      },
      {
        value: 'Albisola Superiore',
        label: 'Albisola Superiore'
      },
      {
        value: 'Altare',
        label: 'Altare'
      },
      {
        value: 'Andora',
        label: 'Andora'
      },
      {
        value: 'Arnasco',
        label: 'Arnasco'
      },
      {
        value: 'Balestrino',
        label: 'Balestrino'
      },
      {
        value: 'Bardineto',
        label: 'Bardineto'
      },
      {
        value: 'Bergeggi',
        label: 'Bergeggi'
      },
      {
        value: 'Boissano',
        label: 'Boissano'
      },
      {
        value: 'Borghetto Santo Spirito',
        label: 'Borghetto Santo Spirito'
      },
      {
        value: 'Borgio Verezzi',
        label: 'Borgio Verezzi'
      },
      {
        value: 'Bormida',
        label: 'Bormida'
      },
      {
        value: 'Cairo Montenotte',
        label: 'Cairo Montenotte'
      },
      {
        value: 'Calice Ligure',
        label: 'Calice Ligure'
      },
      {
        value: 'Calizzano',
        label: 'Calizzano'
      },
      {
        value: 'Carcare',
        label: 'Carcare'
      },
      {
        value: 'Casanova Lerrone',
        label: 'Casanova Lerrone'
      },
      {
        value: 'Castelbianco',
        label: 'Castelbianco'
      },
      {
        value: 'Castelvecchio di Rocca Barbena',
        label: 'Castelvecchio di Rocca Barbena'
      },
      {
        value: 'Celle Ligure',
        label: 'Celle Ligure'
      },
      {
        value: 'Cengio',
        label: 'Cengio'
      },
      {
        value: 'Ceriale',
        label: 'Ceriale'
      },
      {
        value: 'Cisano sul Neva',
        label: 'Cisano sul Neva'
      },
      {
        value: 'Cosseria',
        label: 'Cosseria'
      },
      {
        value: 'Dego',
        label: 'Dego'
      },
      {
        value: 'Erli',
        label: 'Erli'
      },
      {
        value: 'Finale Ligure',
        label: 'Finale Ligure'
      },
      {
        value: 'Garlenda',
        label: 'Garlenda'
      },
      {
        value: 'Giustenice',
        label: 'Giustenice'
      },
      {
        value: 'Giusvalla',
        label: 'Giusvalla'
      },
      {
        value: 'Laigueglia',
        label: 'Laigueglia'
      },
      {
        value: 'Loano',
        label: 'Loano'
      },
      {
        value: 'Magliolo',
        label: 'Magliolo'
      },
      {
        value: 'Mallare',
        label: 'Mallare'
      },
      {
        value: 'Massimino',
        label: 'Massimino'
      },
      {
        value: 'Millesimo',
        label: 'Millesimo'
      },
      {
        value: 'Mioglia',
        label: 'Mioglia'
      },
      {
        value: 'Murialdo',
        label: 'Murialdo'
      },
      {
        value: 'Nasino',
        label: 'Nasino'
      },
      {
        value: 'Noli',
        label: 'Noli'
      },
      {
        value: 'Onzo',
        label: 'Onzo'
      },
      {
        value: 'Orco Feglino',
        label: 'Orco Feglino'
      },
      {
        value: 'Ortovero',
        label: 'Ortovero'
      },
      {
        value: 'Osiglia',
        label: 'Osiglia'
      },
      {
        value: 'Pallare',
        label: 'Pallare'
      },
      {
        value: 'Piana Crixia',
        label: 'Piana Crixia'
      },
      {
        value: 'Pietra Ligure',
        label: 'Pietra Ligure'
      },
      {
        value: 'Plodio',
        label: 'Plodio'
      },
      {
        value: 'Pontinvrea',
        label: 'Pontinvrea'
      },
      {
        value: 'Quiliano',
        label: 'Quiliano'
      },
      {
        value: 'Rialto',
        label: 'Rialto'
      },
      {
        value: 'Roccavignale',
        label: 'Roccavignale'
      },
      {
        value: 'Sassello',
        label: 'Sassello'
      },
      {
        value: 'Savona',
        label: 'Savona'
      },
      {
        value: 'Spotorno',
        label: 'Spotorno'
      },
      {
        value: 'Stella',
        label: 'Stella'
      },
      {
        value: 'Stellanello',
        label: 'Stellanello'
      },
      {
        value: 'Testico',
        label: 'Testico'
      },
      {
        value: 'Toirano',
        label: 'Toirano'
      },
      {
        value: 'Tovo San Giacomo',
        label: 'Tovo San Giacomo'
      },
      {
        value: 'Urbe',
        label: 'Urbe'
      },
      {
        value: 'Vado Ligure',
        label: 'Vado Ligure'
      },
      {
        value: 'Varazze',
        label: 'Varazze'
      },
      {
        value: 'Vendone',
        label: 'Vendone'
      },
      {
        value: 'Vezzi Portio',
        label: 'Vezzi Portio'
      },
      {
        value: 'Villanova d\'Albenga',
        label: 'Villanova d\'Albenga'
      },
      {
        value: 'Zuccarello',
        label: 'Zuccarello'
      },
      {
        value: 'Arenzano',
        label: 'Arenzano'
      },
      {
        value: 'Avegno',
        label: 'Avegno'
      },
      {
        value: 'Bargagli',
        label: 'Bargagli'
      },
      {
        value: 'Bogliasco',
        label: 'Bogliasco'
      },
      {
        value: 'Borzonasca',
        label: 'Borzonasca'
      },
      {
        value: 'Busalla',
        label: 'Busalla'
      },
      {
        value: 'Camogli',
        label: 'Camogli'
      },
      {
        value: 'Campo Ligure',
        label: 'Campo Ligure'
      },
      {
        value: 'Campomorone',
        label: 'Campomorone'
      },
      {
        value: 'Carasco',
        label: 'Carasco'
      },
      {
        value: 'Casarza Ligure',
        label: 'Casarza Ligure'
      },
      {
        value: 'Casella',
        label: 'Casella'
      },
      {
        value: 'Castiglione Chiavarese',
        label: 'Castiglione Chiavarese'
      },
      {
        value: 'Ceranesi',
        label: 'Ceranesi'
      },
      {
        value: 'Chiavari',
        label: 'Chiavari'
      },
      {
        value: 'Cicagna',
        label: 'Cicagna'
      },
      {
        value: 'Cogoleto',
        label: 'Cogoleto'
      },
      {
        value: 'Cogorno',
        label: 'Cogorno'
      },
      {
        value: 'Coreglia Ligure',
        label: 'Coreglia Ligure'
      },
      {
        value: 'Crocefieschi',
        label: 'Crocefieschi'
      },
      {
        value: 'Davagna',
        label: 'Davagna'
      },
      {
        value: 'Fascia',
        label: 'Fascia'
      },
      {
        value: 'Favale di Malvaro',
        label: 'Favale di Malvaro'
      },
      {
        value: 'Fontanigorda',
        label: 'Fontanigorda'
      },
      {
        value: 'Genova',
        label: 'Genova'
      },
      {
        value: 'Gorreto',
        label: 'Gorreto'
      },
      {
        value: 'Isola del Cantone',
        label: 'Isola del Cantone'
      },
      {
        value: 'Lavagna',
        label: 'Lavagna'
      },
      {
        value: 'Leivi',
        label: 'Leivi'
      },
      {
        value: 'Lorsica',
        label: 'Lorsica'
      },
      {
        value: 'Lumarzo',
        label: 'Lumarzo'
      },
      {
        value: 'Masone',
        label: 'Masone'
      },
      {
        value: 'Mele',
        label: 'Mele'
      },
      {
        value: 'Mezzanego',
        label: 'Mezzanego'
      },
      {
        value: 'Mignanego',
        label: 'Mignanego'
      },
      {
        value: 'Moconesi',
        label: 'Moconesi'
      },
      {
        value: 'Moneglia',
        label: 'Moneglia'
      },
      {
        value: 'Montebruno',
        label: 'Montebruno'
      },
      {
        value: 'Montoggio',
        label: 'Montoggio'
      },
      {
        value: 'Ne',
        label: 'Ne'
      },
      {
        value: 'Neirone',
        label: 'Neirone'
      },
      {
        value: 'Orero',
        label: 'Orero'
      },
      {
        value: 'Pieve Ligure',
        label: 'Pieve Ligure'
      },
      {
        value: 'Portofino',
        label: 'Portofino'
      },
      {
        value: 'Propata',
        label: 'Propata'
      },
      {
        value: 'Rapallo',
        label: 'Rapallo'
      },
      {
        value: 'Recco',
        label: 'Recco'
      },
      {
        value: 'Rezzoaglio',
        label: 'Rezzoaglio'
      },
      {
        value: 'Ronco Scrivia',
        label: 'Ronco Scrivia'
      },
      {
        value: 'Rondanina',
        label: 'Rondanina'
      },
      {
        value: 'Rossiglione',
        label: 'Rossiglione'
      },
      {
        value: 'Rovegno',
        label: 'Rovegno'
      },
      {
        value: 'San Colombano Certenoli',
        label: 'San Colombano Certenoli'
      },
      {
        value: 'Santa Margherita Ligure',
        label: 'Santa Margherita Ligure'
      },
      {
        value: 'Sant\'Olcese',
        label: 'Sant\'Olcese'
      },
      {
        value: 'Santo Stefano d\'Aveto',
        label: 'Santo Stefano d\'Aveto'
      },
      {
        value: 'Savignone',
        label: 'Savignone'
      },
      {
        value: 'Serra Riccò',
        label: 'Serra Riccò'
      },
      {
        value: 'Sestri Levante',
        label: 'Sestri Levante'
      },
      {
        value: 'Sori',
        label: 'Sori'
      },
      {
        value: 'Tiglieto',
        label: 'Tiglieto'
      },
      {
        value: 'Torriglia',
        label: 'Torriglia'
      },
      {
        value: 'Tribogna',
        label: 'Tribogna'
      },
      {
        value: 'Uscio',
        label: 'Uscio'
      },
      {
        value: 'Valbrevenna',
        label: 'Valbrevenna'
      },
      {
        value: 'Vobbia',
        label: 'Vobbia'
      },
      {
        value: 'Zoagli',
        label: 'Zoagli'
      },
      {
        value: 'Ameglia',
        label: 'Ameglia'
      },
      {
        value: 'Arcola',
        label: 'Arcola'
      },
      {
        value: 'Beverino',
        label: 'Beverino'
      },
      {
        value: 'Bolano',
        label: 'Bolano'
      },
      {
        value: 'Bonassola',
        label: 'Bonassola'
      },
      {
        value: 'Borghetto di Vara',
        label: 'Borghetto di Vara'
      },
      {
        value: 'Brugnato',
        label: 'Brugnato'
      },
      {
        value: 'Calice al Cornoviglio',
        label: 'Calice al Cornoviglio'
      },
      {
        value: 'Carro',
        label: 'Carro'
      },
      {
        value: 'Carrodano',
        label: 'Carrodano'
      },
      {
        value: 'Castelnuovo Magra',
        label: 'Castelnuovo Magra'
      },
      {
        value: 'Deiva Marina',
        label: 'Deiva Marina'
      },
      {
        value: 'Follo',
        label: 'Follo'
      },
      {
        value: 'Framura',
        label: 'Framura'
      },
      {
        value: 'La Spezia',
        label: 'La Spezia'
      },
      {
        value: 'Lerici',
        label: 'Lerici'
      },
      {
        value: 'Levanto',
        label: 'Levanto'
      },
      {
        value: 'Maissana',
        label: 'Maissana'
      },
      {
        value: 'Monterosso al Mare',
        label: 'Monterosso al Mare'
      },
      {
        value: 'Luni',
        label: 'Luni'
      },
      {
        value: 'Pignone',
        label: 'Pignone'
      },
      {
        value: 'Portovenere',
        label: 'Portovenere'
      },
      {
        value: 'Riccò del Golfo di Spezia',
        label: 'Riccò del Golfo di Spezia'
      },
      {
        value: 'Riomaggiore',
        label: 'Riomaggiore'
      },
      {
        value: 'Rocchetta di Vara',
        label: 'Rocchetta di Vara'
      },
      {
        value: 'Santo Stefano di Magra',
        label: 'Santo Stefano di Magra'
      },
      {
        value: 'Sarzana',
        label: 'Sarzana'
      },
      {
        value: 'Sesta Godano',
        label: 'Sesta Godano'
      },
      {
        value: 'Varese Ligure',
        label: 'Varese Ligure'
      },
      {
        value: 'Vernazza',
        label: 'Vernazza'
      },
      {
        value: 'Vezzano Ligure',
        label: 'Vezzano Ligure'
      },
      {
        value: 'Zignago',
        label: 'Zignago'
      },
      {
        value: 'Agra',
        label: 'Agra'
      },
      {
        value: 'Albizzate',
        label: 'Albizzate'
      },
      {
        value: 'Angera',
        label: 'Angera'
      },
      {
        value: 'Arcisate',
        label: 'Arcisate'
      },
      {
        value: 'Arsago Seprio',
        label: 'Arsago Seprio'
      },
      {
        value: 'Azzate',
        label: 'Azzate'
      },
      {
        value: 'Azzio',
        label: 'Azzio'
      },
      {
        value: 'Barasso',
        label: 'Barasso'
      },
      {
        value: 'Bedero Valcuvia',
        label: 'Bedero Valcuvia'
      },
      {
        value: 'Besano',
        label: 'Besano'
      },
      {
        value: 'Besnate',
        label: 'Besnate'
      },
      {
        value: 'Besozzo',
        label: 'Besozzo'
      },
      {
        value: 'Biandronno',
        label: 'Biandronno'
      },
      {
        value: 'Bisuschio',
        label: 'Bisuschio'
      },
      {
        value: 'Bodio Lomnago',
        label: 'Bodio Lomnago'
      },
      {
        value: 'Brebbia',
        label: 'Brebbia'
      },
      {
        value: 'Brenta',
        label: 'Brenta'
      },
      {
        value: 'Brezzo di Bedero',
        label: 'Brezzo di Bedero'
      },
      {
        value: 'Brinzio',
        label: 'Brinzio'
      },
      {
        value: 'Brissago-Valtravaglia',
        label: 'Brissago-Valtravaglia'
      },
      {
        value: 'Brunello',
        label: 'Brunello'
      },
      {
        value: 'Brusimpiano',
        label: 'Brusimpiano'
      },
      {
        value: 'Buguggiate',
        label: 'Buguggiate'
      },
      {
        value: 'Busto Arsizio',
        label: 'Busto Arsizio'
      },
      {
        value: 'Cadegliano-Viconago',
        label: 'Cadegliano-Viconago'
      },
      {
        value: 'Cairate',
        label: 'Cairate'
      },
      {
        value: 'Cantello',
        label: 'Cantello'
      },
      {
        value: 'Caravate',
        label: 'Caravate'
      },
      {
        value: 'Cardano al Campo',
        label: 'Cardano al Campo'
      },
      {
        value: 'Carnago',
        label: 'Carnago'
      },
      {
        value: 'Caronno Pertusella',
        label: 'Caronno Pertusella'
      },
      {
        value: 'Caronno Varesino',
        label: 'Caronno Varesino'
      },
      {
        value: 'Casale Litta',
        label: 'Casale Litta'
      },
      {
        value: 'Casalzuigno',
        label: 'Casalzuigno'
      },
      {
        value: 'Casciago',
        label: 'Casciago'
      },
      {
        value: 'Casorate Sempione',
        label: 'Casorate Sempione'
      },
      {
        value: 'Cassano Magnago',
        label: 'Cassano Magnago'
      },
      {
        value: 'Cassano Valcuvia',
        label: 'Cassano Valcuvia'
      },
      {
        value: 'Castellanza',
        label: 'Castellanza'
      },
      {
        value: 'Castello Cabiaglio',
        label: 'Castello Cabiaglio'
      },
      {
        value: 'Castelseprio',
        label: 'Castelseprio'
      },
      {
        value: 'Castelveccana',
        label: 'Castelveccana'
      },
      {
        value: 'Castiglione Olona',
        label: 'Castiglione Olona'
      },
      {
        value: 'Castronno',
        label: 'Castronno'
      },
      {
        value: 'Cavaria con Premezzo',
        label: 'Cavaria con Premezzo'
      },
      {
        value: 'Cazzago Brabbia',
        label: 'Cazzago Brabbia'
      },
      {
        value: 'Cislago',
        label: 'Cislago'
      },
      {
        value: 'Cittiglio',
        label: 'Cittiglio'
      },
      {
        value: 'Clivio',
        label: 'Clivio'
      },
      {
        value: 'Cocquio-Trevisago',
        label: 'Cocquio-Trevisago'
      },
      {
        value: 'Comabbio',
        label: 'Comabbio'
      },
      {
        value: 'Comerio',
        label: 'Comerio'
      },
      {
        value: 'Cremenaga',
        label: 'Cremenaga'
      },
      {
        value: 'Crosio della Valle',
        label: 'Crosio della Valle'
      },
      {
        value: 'Cuasso al Monte',
        label: 'Cuasso al Monte'
      },
      {
        value: 'Cugliate-Fabiasco',
        label: 'Cugliate-Fabiasco'
      },
      {
        value: 'Cunardo',
        label: 'Cunardo'
      },
      {
        value: 'Curiglia con Monteviasco',
        label: 'Curiglia con Monteviasco'
      },
      {
        value: 'Cuveglio',
        label: 'Cuveglio'
      },
      {
        value: 'Cuvio',
        label: 'Cuvio'
      },
      {
        value: 'Daverio',
        label: 'Daverio'
      },
      {
        value: 'Dumenza',
        label: 'Dumenza'
      },
      {
        value: 'Duno',
        label: 'Duno'
      },
      {
        value: 'Fagnano Olona',
        label: 'Fagnano Olona'
      },
      {
        value: 'Ferno',
        label: 'Ferno'
      },
      {
        value: 'Ferrera di Varese',
        label: 'Ferrera di Varese'
      },
      {
        value: 'Gallarate',
        label: 'Gallarate'
      },
      {
        value: 'Galliate Lombardo',
        label: 'Galliate Lombardo'
      },
      {
        value: 'Gavirate',
        label: 'Gavirate'
      },
      {
        value: 'Gazzada Schianno',
        label: 'Gazzada Schianno'
      },
      {
        value: 'Gemonio',
        label: 'Gemonio'
      },
      {
        value: 'Gerenzano',
        label: 'Gerenzano'
      },
      {
        value: 'Germignaga',
        label: 'Germignaga'
      },
      {
        value: 'Golasecca',
        label: 'Golasecca'
      },
      {
        value: 'Gorla Maggiore',
        label: 'Gorla Maggiore'
      },
      {
        value: 'Gorla Minore',
        label: 'Gorla Minore'
      },
      {
        value: 'Gornate Olona',
        label: 'Gornate Olona'
      },
      {
        value: 'Grantola',
        label: 'Grantola'
      },
      {
        value: 'Inarzo',
        label: 'Inarzo'
      },
      {
        value: 'Induno Olona',
        label: 'Induno Olona'
      },
      {
        value: 'Ispra',
        label: 'Ispra'
      },
      {
        value: 'Jerago con Orago',
        label: 'Jerago con Orago'
      },
      {
        value: 'Lavena Ponte Tresa',
        label: 'Lavena Ponte Tresa'
      },
      {
        value: 'Laveno-Mombello',
        label: 'Laveno-Mombello'
      },
      {
        value: 'Leggiuno',
        label: 'Leggiuno'
      },
      {
        value: 'Lonate Ceppino',
        label: 'Lonate Ceppino'
      },
      {
        value: 'Lonate Pozzolo',
        label: 'Lonate Pozzolo'
      },
      {
        value: 'Lozza',
        label: 'Lozza'
      },
      {
        value: 'Luino',
        label: 'Luino'
      },
      {
        value: 'Luvinate',
        label: 'Luvinate'
      },
      {
        value: 'Malnate',
        label: 'Malnate'
      },
      {
        value: 'Marchirolo',
        label: 'Marchirolo'
      },
      {
        value: 'Marnate',
        label: 'Marnate'
      },
      {
        value: 'Marzio',
        label: 'Marzio'
      },
      {
        value: 'Masciago Primo',
        label: 'Masciago Primo'
      },
      {
        value: 'Mercallo',
        label: 'Mercallo'
      },
      {
        value: 'Mesenzana',
        label: 'Mesenzana'
      },
      {
        value: 'Montegrino Valtravaglia',
        label: 'Montegrino Valtravaglia'
      },
      {
        value: 'Monvalle',
        label: 'Monvalle'
      },
      {
        value: 'Morazzone',
        label: 'Morazzone'
      },
      {
        value: 'Mornago',
        label: 'Mornago'
      },
      {
        value: 'Oggiona con Santo Stefano',
        label: 'Oggiona con Santo Stefano'
      },
      {
        value: 'Olgiate Olona',
        label: 'Olgiate Olona'
      },
      {
        value: 'Origgio',
        label: 'Origgio'
      },
      {
        value: 'Orino',
        label: 'Orino'
      },
      {
        value: 'Porto Ceresio',
        label: 'Porto Ceresio'
      },
      {
        value: 'Porto Valtravaglia',
        label: 'Porto Valtravaglia'
      },
      {
        value: 'Rancio Valcuvia',
        label: 'Rancio Valcuvia'
      },
      {
        value: 'Ranco',
        label: 'Ranco'
      },
      {
        value: 'Saltrio',
        label: 'Saltrio'
      },
      {
        value: 'Samarate',
        label: 'Samarate'
      },
      {
        value: 'Saronno',
        label: 'Saronno'
      },
      {
        value: 'Sesto Calende',
        label: 'Sesto Calende'
      },
      {
        value: 'Solbiate Arno',
        label: 'Solbiate Arno'
      },
      {
        value: 'Solbiate Olona',
        label: 'Solbiate Olona'
      },
      {
        value: 'Somma Lombardo',
        label: 'Somma Lombardo'
      },
      {
        value: 'Sumirago',
        label: 'Sumirago'
      },
      {
        value: 'Taino',
        label: 'Taino'
      },
      {
        value: 'Ternate',
        label: 'Ternate'
      },
      {
        value: 'Tradate',
        label: 'Tradate'
      },
      {
        value: 'Travedona-Monate',
        label: 'Travedona-Monate'
      },
      {
        value: 'Tronzano Lago Maggiore',
        label: 'Tronzano Lago Maggiore'
      },
      {
        value: 'Uboldo',
        label: 'Uboldo'
      },
      {
        value: 'Valganna',
        label: 'Valganna'
      },
      {
        value: 'Varano Borghi',
        label: 'Varano Borghi'
      },
      {
        value: 'Varese',
        label: 'Varese'
      },
      {
        value: 'Vedano Olona',
        label: 'Vedano Olona'
      },
      {
        value: 'Venegono Inferiore',
        label: 'Venegono Inferiore'
      },
      {
        value: 'Venegono Superiore',
        label: 'Venegono Superiore'
      },
      {
        value: 'Vergiate',
        label: 'Vergiate'
      },
      {
        value: 'Viggiù',
        label: 'Viggiù'
      },
      {
        value: 'Vizzola Ticino',
        label: 'Vizzola Ticino'
      },
      {
        value: 'Sangiano',
        label: 'Sangiano'
      },
      {
        value: 'Maccagno con Pino e Veddasca',
        label: 'Maccagno con Pino e Veddasca'
      },
      {
        value: 'Cadrezzate con Osmate',
        label: 'Cadrezzate con Osmate'
      },
      {
        value: 'Bardello con Malgesso e Bregano',
        label: 'Bardello con Malgesso e Bregano'
      },
      {
        value: 'Albavilla',
        label: 'Albavilla'
      },
      {
        value: 'Albese con Cassano',
        label: 'Albese con Cassano'
      },
      {
        value: 'Albiolo',
        label: 'Albiolo'
      },
      {
        value: 'Alserio',
        label: 'Alserio'
      },
      {
        value: 'Alzate Brianza',
        label: 'Alzate Brianza'
      },
      {
        value: 'Anzano del Parco',
        label: 'Anzano del Parco'
      },
      {
        value: 'Appiano Gentile',
        label: 'Appiano Gentile'
      },
      {
        value: 'Argegno',
        label: 'Argegno'
      },
      {
        value: 'Arosio',
        label: 'Arosio'
      },
      {
        value: 'Asso',
        label: 'Asso'
      },
      {
        value: 'Barni',
        label: 'Barni'
      },
      {
        value: 'Bene Lario',
        label: 'Bene Lario'
      },
      {
        value: 'Beregazzo con Figliaro',
        label: 'Beregazzo con Figliaro'
      },
      {
        value: 'Binago',
        label: 'Binago'
      },
      {
        value: 'Bizzarone',
        label: 'Bizzarone'
      },
      {
        value: 'Blessagno',
        label: 'Blessagno'
      },
      {
        value: 'Blevio',
        label: 'Blevio'
      },
      {
        value: 'Bregnano',
        label: 'Bregnano'
      },
      {
        value: 'Brenna',
        label: 'Brenna'
      },
      {
        value: 'Brienno',
        label: 'Brienno'
      },
      {
        value: 'Brunate',
        label: 'Brunate'
      },
      {
        value: 'Bulgarograsso',
        label: 'Bulgarograsso'
      },
      {
        value: 'Cabiate',
        label: 'Cabiate'
      },
      {
        value: 'Cadorago',
        label: 'Cadorago'
      },
      {
        value: 'Caglio',
        label: 'Caglio'
      },
      {
        value: 'Campione d\'Italia',
        label: 'Campione d\'Italia'
      },
      {
        value: 'Cantù',
        label: 'Cantù'
      },
      {
        value: 'Canzo',
        label: 'Canzo'
      },
      {
        value: 'Capiago Intimiano',
        label: 'Capiago Intimiano'
      },
      {
        value: 'Carate Urio',
        label: 'Carate Urio'
      },
      {
        value: 'Carbonate',
        label: 'Carbonate'
      },
      {
        value: 'Carimate',
        label: 'Carimate'
      },
      {
        value: 'Carlazzo',
        label: 'Carlazzo'
      },
      {
        value: 'Carugo',
        label: 'Carugo'
      },
      {
        value: 'Caslino d\'Erba',
        label: 'Caslino d\'Erba'
      },
      {
        value: 'Casnate con Bernate',
        label: 'Casnate con Bernate'
      },
      {
        value: 'Cassina Rizzardi',
        label: 'Cassina Rizzardi'
      },
      {
        value: 'Castelmarte',
        label: 'Castelmarte'
      },
      {
        value: 'Castelnuovo Bozzente',
        label: 'Castelnuovo Bozzente'
      },
      {
        value: 'Cavargna',
        label: 'Cavargna'
      },
      {
        value: 'Cerano d\'Intelvi',
        label: 'Cerano d\'Intelvi'
      },
      {
        value: 'Cermenate',
        label: 'Cermenate'
      },
      {
        value: 'Cernobbio',
        label: 'Cernobbio'
      },
      {
        value: 'Cirimido',
        label: 'Cirimido'
      },
      {
        value: 'Claino con Osteno',
        label: 'Claino con Osteno'
      },
      {
        value: 'Colonno',
        label: 'Colonno'
      },
      {
        value: 'Como',
        label: 'Como'
      },
      {
        value: 'Corrido',
        label: 'Corrido'
      },
      {
        value: 'Cremia',
        label: 'Cremia'
      },
      {
        value: 'Cucciago',
        label: 'Cucciago'
      },
      {
        value: 'Cusino',
        label: 'Cusino'
      },
      {
        value: 'Dizzasco',
        label: 'Dizzasco'
      },
      {
        value: 'Domaso',
        label: 'Domaso'
      },
      {
        value: 'Dongo',
        label: 'Dongo'
      },
      {
        value: 'Dosso del Liro',
        label: 'Dosso del Liro'
      },
      {
        value: 'Erba',
        label: 'Erba'
      },
      {
        value: 'Eupilio',
        label: 'Eupilio'
      },
      {
        value: 'Faggeto Lario',
        label: 'Faggeto Lario'
      },
      {
        value: 'Faloppio',
        label: 'Faloppio'
      },
      {
        value: 'Fenegrò',
        label: 'Fenegrò'
      },
      {
        value: 'Figino Serenza',
        label: 'Figino Serenza'
      },
      {
        value: 'Fino Mornasco',
        label: 'Fino Mornasco'
      },
      {
        value: 'Garzeno',
        label: 'Garzeno'
      },
      {
        value: 'Gera Lario',
        label: 'Gera Lario'
      },
      {
        value: 'Grandate',
        label: 'Grandate'
      },
      {
        value: 'Grandola ed Uniti',
        label: 'Grandola ed Uniti'
      },
      {
        value: 'Griante',
        label: 'Griante'
      },
      {
        value: 'Guanzate',
        label: 'Guanzate'
      },
      {
        value: 'Inverigo',
        label: 'Inverigo'
      },
      {
        value: 'Laglio',
        label: 'Laglio'
      },
      {
        value: 'Laino',
        label: 'Laino'
      },
      {
        value: 'Lambrugo',
        label: 'Lambrugo'
      },
      {
        value: 'Lasnigo',
        label: 'Lasnigo'
      },
      {
        value: 'Lezzeno',
        label: 'Lezzeno'
      },
      {
        value: 'Limido Comasco',
        label: 'Limido Comasco'
      },
      {
        value: 'Lipomo',
        label: 'Lipomo'
      },
      {
        value: 'Livo',
        label: 'Livo'
      },
      {
        value: 'Locate Varesino',
        label: 'Locate Varesino'
      },
      {
        value: 'Lomazzo',
        label: 'Lomazzo'
      },
      {
        value: 'Longone al Segrino',
        label: 'Longone al Segrino'
      },
      {
        value: 'Luisago',
        label: 'Luisago'
      },
      {
        value: 'Lurago d\'Erba',
        label: 'Lurago d\'Erba'
      },
      {
        value: 'Lurago Marinone',
        label: 'Lurago Marinone'
      },
      {
        value: 'Lurate Caccivio',
        label: 'Lurate Caccivio'
      },
      {
        value: 'Magreglio',
        label: 'Magreglio'
      },
      {
        value: 'Mariano Comense',
        label: 'Mariano Comense'
      },
      {
        value: 'Maslianico',
        label: 'Maslianico'
      },
      {
        value: 'Menaggio',
        label: 'Menaggio'
      },
      {
        value: 'Merone',
        label: 'Merone'
      },
      {
        value: 'Moltrasio',
        label: 'Moltrasio'
      },
      {
        value: 'Monguzzo',
        label: 'Monguzzo'
      },
      {
        value: 'Montano Lucino',
        label: 'Montano Lucino'
      },
      {
        value: 'Montemezzo',
        label: 'Montemezzo'
      },
      {
        value: 'Montorfano',
        label: 'Montorfano'
      },
      {
        value: 'Mozzate',
        label: 'Mozzate'
      },
      {
        value: 'Musso',
        label: 'Musso'
      },
      {
        value: 'Nesso',
        label: 'Nesso'
      },
      {
        value: 'Novedrate',
        label: 'Novedrate'
      },
      {
        value: 'Olgiate Comasco',
        label: 'Olgiate Comasco'
      },
      {
        value: 'Oltrona di San Mamette',
        label: 'Oltrona di San Mamette'
      },
      {
        value: 'Orsenigo',
        label: 'Orsenigo'
      },
      {
        value: 'Peglio',
        label: 'Peglio'
      },
      {
        value: 'Pianello del Lario',
        label: 'Pianello del Lario'
      },
      {
        value: 'Pigra',
        label: 'Pigra'
      },
      {
        value: 'Plesio',
        label: 'Plesio'
      },
      {
        value: 'Pognana Lario',
        label: 'Pognana Lario'
      },
      {
        value: 'Ponna',
        label: 'Ponna'
      },
      {
        value: 'Ponte Lambro',
        label: 'Ponte Lambro'
      },
      {
        value: 'Porlezza',
        label: 'Porlezza'
      },
      {
        value: 'Proserpio',
        label: 'Proserpio'
      },
      {
        value: 'Pusiano',
        label: 'Pusiano'
      },
      {
        value: 'Rezzago',
        label: 'Rezzago'
      },
      {
        value: 'Rodero',
        label: 'Rodero'
      },
      {
        value: 'Ronago',
        label: 'Ronago'
      },
      {
        value: 'Rovellasca',
        label: 'Rovellasca'
      },
      {
        value: 'Rovello Porro',
        label: 'Rovello Porro'
      },
      {
        value: 'Sala Comacina',
        label: 'Sala Comacina'
      },
      {
        value: 'San Bartolomeo Val Cavargna',
        label: 'San Bartolomeo Val Cavargna'
      },
      {
        value: 'San Fermo della Battaglia',
        label: 'San Fermo della Battaglia'
      },
      {
        value: 'San Nazzaro Val Cavargna',
        label: 'San Nazzaro Val Cavargna'
      },
      {
        value: 'Schignano',
        label: 'Schignano'
      },
      {
        value: 'Senna Comasco',
        label: 'Senna Comasco'
      },
      {
        value: 'Sorico',
        label: 'Sorico'
      },
      {
        value: 'Sormano',
        label: 'Sormano'
      },
      {
        value: 'Stazzona',
        label: 'Stazzona'
      },
      {
        value: 'Tavernerio',
        label: 'Tavernerio'
      },
      {
        value: 'Torno',
        label: 'Torno'
      },
      {
        value: 'Trezzone',
        label: 'Trezzone'
      },
      {
        value: 'Turate',
        label: 'Turate'
      },
      {
        value: 'Uggiate-Trevano',
        label: 'Uggiate-Trevano'
      },
      {
        value: 'Valbrona',
        label: 'Valbrona'
      },
      {
        value: 'Valmorea',
        label: 'Valmorea'
      },
      {
        value: 'Val Rezzo',
        label: 'Val Rezzo'
      },
      {
        value: 'Valsolda',
        label: 'Valsolda'
      },
      {
        value: 'Veleso',
        label: 'Veleso'
      },
      {
        value: 'Veniano',
        label: 'Veniano'
      },
      {
        value: 'Vercana',
        label: 'Vercana'
      },
      {
        value: 'Vertemate con Minoprio',
        label: 'Vertemate con Minoprio'
      },
      {
        value: 'Villa Guardia',
        label: 'Villa Guardia'
      },
      {
        value: 'Zelbio',
        label: 'Zelbio'
      },
      {
        value: 'San Siro',
        label: 'San Siro'
      },
      {
        value: 'Gravedona ed Uniti',
        label: 'Gravedona ed Uniti'
      },
      {
        value: 'Bellagio',
        label: 'Bellagio'
      },
      {
        value: 'Colverde',
        label: 'Colverde'
      },
      {
        value: 'Tremezzina',
        label: 'Tremezzina'
      },
      {
        value: 'Alta Valle Intelvi',
        label: 'Alta Valle Intelvi'
      },
      {
        value: 'Centro Valle Intelvi',
        label: 'Centro Valle Intelvi'
      },
      {
        value: 'Solbiate con Cagno',
        label: 'Solbiate con Cagno'
      },
      {
        value: 'Albaredo per San Marco',
        label: 'Albaredo per San Marco'
      },
      {
        value: 'Albosaggia',
        label: 'Albosaggia'
      },
      {
        value: 'Andalo Valtellino',
        label: 'Andalo Valtellino'
      },
      {
        value: 'Aprica',
        label: 'Aprica'
      },
      {
        value: 'Ardenno',
        label: 'Ardenno'
      },
      {
        value: 'Bema',
        label: 'Bema'
      },
      {
        value: 'Berbenno di Valtellina',
        label: 'Berbenno di Valtellina'
      },
      {
        value: 'Bianzone',
        label: 'Bianzone'
      },
      {
        value: 'Bormio',
        label: 'Bormio'
      },
      {
        value: 'Buglio in Monte',
        label: 'Buglio in Monte'
      },
      {
        value: 'Caiolo',
        label: 'Caiolo'
      },
      {
        value: 'Campodolcino',
        label: 'Campodolcino'
      },
      {
        value: 'Caspoggio',
        label: 'Caspoggio'
      },
      {
        value: 'Castello dell\'Acqua',
        label: 'Castello dell\'Acqua'
      },
      {
        value: 'Castione Andevenno',
        label: 'Castione Andevenno'
      },
      {
        value: 'Cedrasco',
        label: 'Cedrasco'
      },
      {
        value: 'Cercino',
        label: 'Cercino'
      },
      {
        value: 'Chiavenna',
        label: 'Chiavenna'
      },
      {
        value: 'Chiesa in Valmalenco',
        label: 'Chiesa in Valmalenco'
      },
      {
        value: 'Chiuro',
        label: 'Chiuro'
      },
      {
        value: 'Cino',
        label: 'Cino'
      },
      {
        value: 'Civo',
        label: 'Civo'
      },
      {
        value: 'Colorina',
        label: 'Colorina'
      },
      {
        value: 'Cosio Valtellino',
        label: 'Cosio Valtellino'
      },
      {
        value: 'Dazio',
        label: 'Dazio'
      },
      {
        value: 'Delebio',
        label: 'Delebio'
      },
      {
        value: 'Dubino',
        label: 'Dubino'
      },
      {
        value: 'Faedo Valtellino',
        label: 'Faedo Valtellino'
      },
      {
        value: 'Forcola',
        label: 'Forcola'
      },
      {
        value: 'Fusine',
        label: 'Fusine'
      },
      {
        value: 'Gerola Alta',
        label: 'Gerola Alta'
      },
      {
        value: 'Gordona',
        label: 'Gordona'
      },
      {
        value: 'Grosio',
        label: 'Grosio'
      },
      {
        value: 'Grosotto',
        label: 'Grosotto'
      },
      {
        value: 'Madesimo',
        label: 'Madesimo'
      },
      {
        value: 'Lanzada',
        label: 'Lanzada'
      },
      {
        value: 'Livigno',
        label: 'Livigno'
      },
      {
        value: 'Lovero',
        label: 'Lovero'
      },
      {
        value: 'Mantello',
        label: 'Mantello'
      },
      {
        value: 'Mazzo di Valtellina',
        label: 'Mazzo di Valtellina'
      },
      {
        value: 'Mello',
        label: 'Mello'
      },
      {
        value: 'Mese',
        label: 'Mese'
      },
      {
        value: 'Montagna in Valtellina',
        label: 'Montagna in Valtellina'
      },
      {
        value: 'Morbegno',
        label: 'Morbegno'
      },
      {
        value: 'Novate Mezzola',
        label: 'Novate Mezzola'
      },
      {
        value: 'Pedesina',
        label: 'Pedesina'
      },
      {
        value: 'Piantedo',
        label: 'Piantedo'
      },
      {
        value: 'Piateda',
        label: 'Piateda'
      },
      {
        value: 'Piuro',
        label: 'Piuro'
      },
      {
        value: 'Poggiridenti',
        label: 'Poggiridenti'
      },
      {
        value: 'Ponte in Valtellina',
        label: 'Ponte in Valtellina'
      },
      {
        value: 'Postalesio',
        label: 'Postalesio'
      },
      {
        value: 'Prata Camportaccio',
        label: 'Prata Camportaccio'
      },
      {
        value: 'Rasura',
        label: 'Rasura'
      },
      {
        value: 'Rogolo',
        label: 'Rogolo'
      },
      {
        value: 'Samolaco',
        label: 'Samolaco'
      },
      {
        value: 'San Giacomo Filippo',
        label: 'San Giacomo Filippo'
      },
      {
        value: 'Sernio',
        label: 'Sernio'
      },
      {
        value: 'Sondalo',
        label: 'Sondalo'
      },
      {
        value: 'Sondrio',
        label: 'Sondrio'
      },
      {
        value: 'Spriana',
        label: 'Spriana'
      },
      {
        value: 'Talamona',
        label: 'Talamona'
      },
      {
        value: 'Tartano',
        label: 'Tartano'
      },
      {
        value: 'Teglio',
        label: 'Teglio'
      },
      {
        value: 'Tirano',
        label: 'Tirano'
      },
      {
        value: 'Torre di Santa Maria',
        label: 'Torre di Santa Maria'
      },
      {
        value: 'Tovo di Sant\'Agata',
        label: 'Tovo di Sant\'Agata'
      },
      {
        value: 'Traona',
        label: 'Traona'
      },
      {
        value: 'Tresivio',
        label: 'Tresivio'
      },
      {
        value: 'Valdidentro',
        label: 'Valdidentro'
      },
      {
        value: 'Valdisotto',
        label: 'Valdisotto'
      },
      {
        value: 'Valfurva',
        label: 'Valfurva'
      },
      {
        value: 'Val Masino',
        label: 'Val Masino'
      },
      {
        value: 'Verceia',
        label: 'Verceia'
      },
      {
        value: 'Vervio',
        label: 'Vervio'
      },
      {
        value: 'Villa di Chiavenna',
        label: 'Villa di Chiavenna'
      },
      {
        value: 'Villa di Tirano',
        label: 'Villa di Tirano'
      },
      {
        value: 'Abbiategrasso',
        label: 'Abbiategrasso'
      },
      {
        value: 'Albairate',
        label: 'Albairate'
      },
      {
        value: 'Arconate',
        label: 'Arconate'
      },
      {
        value: 'Arese',
        label: 'Arese'
      },
      {
        value: 'Arluno',
        label: 'Arluno'
      },
      {
        value: 'Assago',
        label: 'Assago'
      },
      {
        value: 'Bareggio',
        label: 'Bareggio'
      },
      {
        value: 'Basiano',
        label: 'Basiano'
      },
      {
        value: 'Basiglio',
        label: 'Basiglio'
      },
      {
        value: 'Bellinzago Lombardo',
        label: 'Bellinzago Lombardo'
      },
      {
        value: 'Bernate Ticino',
        label: 'Bernate Ticino'
      },
      {
        value: 'Besate',
        label: 'Besate'
      },
      {
        value: 'Binasco',
        label: 'Binasco'
      },
      {
        value: 'Boffalora sopra Ticino',
        label: 'Boffalora sopra Ticino'
      },
      {
        value: 'Bollate',
        label: 'Bollate'
      },
      {
        value: 'Bresso',
        label: 'Bresso'
      },
      {
        value: 'Bubbiano',
        label: 'Bubbiano'
      },
      {
        value: 'Buccinasco',
        label: 'Buccinasco'
      },
      {
        value: 'Buscate',
        label: 'Buscate'
      },
      {
        value: 'Bussero',
        label: 'Bussero'
      },
      {
        value: 'Busto Garolfo',
        label: 'Busto Garolfo'
      },
      {
        value: 'Calvignasco',
        label: 'Calvignasco'
      },
      {
        value: 'Cambiago',
        label: 'Cambiago'
      },
      {
        value: 'Canegrate',
        label: 'Canegrate'
      },
      {
        value: 'Carpiano',
        label: 'Carpiano'
      },
      {
        value: 'Carugate',
        label: 'Carugate'
      },
      {
        value: 'Casarile',
        label: 'Casarile'
      },
      {
        value: 'Casorezzo',
        label: 'Casorezzo'
      },
      {
        value: 'Cassano d\'Adda',
        label: 'Cassano d\'Adda'
      },
      {
        value: 'Cassina de\' Pecchi',
        label: 'Cassina de\' Pecchi'
      },
      {
        value: 'Cassinetta di Lugagnano',
        label: 'Cassinetta di Lugagnano'
      },
      {
        value: 'Castano Primo',
        label: 'Castano Primo'
      },
      {
        value: 'Cernusco sul Naviglio',
        label: 'Cernusco sul Naviglio'
      },
      {
        value: 'Cerro al Lambro',
        label: 'Cerro al Lambro'
      },
      {
        value: 'Cerro Maggiore',
        label: 'Cerro Maggiore'
      },
      {
        value: 'Cesano Boscone',
        label: 'Cesano Boscone'
      },
      {
        value: 'Cesate',
        label: 'Cesate'
      },
      {
        value: 'Cinisello Balsamo',
        label: 'Cinisello Balsamo'
      },
      {
        value: 'Cisliano',
        label: 'Cisliano'
      },
      {
        value: 'Cologno Monzese',
        label: 'Cologno Monzese'
      },
      {
        value: 'Colturano',
        label: 'Colturano'
      },
      {
        value: 'Corbetta',
        label: 'Corbetta'
      },
      {
        value: 'Cormano',
        label: 'Cormano'
      },
      {
        value: 'Cornaredo',
        label: 'Cornaredo'
      },
      {
        value: 'Corsico',
        label: 'Corsico'
      },
      {
        value: 'Cuggiono',
        label: 'Cuggiono'
      },
      {
        value: 'Cusago',
        label: 'Cusago'
      },
      {
        value: 'Cusano Milanino',
        label: 'Cusano Milanino'
      },
      {
        value: 'Dairago',
        label: 'Dairago'
      },
      {
        value: 'Dresano',
        label: 'Dresano'
      },
      {
        value: 'Gaggiano',
        label: 'Gaggiano'
      },
      {
        value: 'Garbagnate Milanese',
        label: 'Garbagnate Milanese'
      },
      {
        value: 'Gessate',
        label: 'Gessate'
      },
      {
        value: 'Gorgonzola',
        label: 'Gorgonzola'
      },
      {
        value: 'Grezzago',
        label: 'Grezzago'
      },
      {
        value: 'Gudo Visconti',
        label: 'Gudo Visconti'
      },
      {
        value: 'Inveruno',
        label: 'Inveruno'
      },
      {
        value: 'Inzago',
        label: 'Inzago'
      },
      {
        value: 'Lacchiarella',
        label: 'Lacchiarella'
      },
      {
        value: 'Lainate',
        label: 'Lainate'
      },
      {
        value: 'Legnano',
        label: 'Legnano'
      },
      {
        value: 'Liscate',
        label: 'Liscate'
      },
      {
        value: 'Locate di Triulzi',
        label: 'Locate di Triulzi'
      },
      {
        value: 'Magenta',
        label: 'Magenta'
      },
      {
        value: 'Magnago',
        label: 'Magnago'
      },
      {
        value: 'Marcallo con Casone',
        label: 'Marcallo con Casone'
      },
      {
        value: 'Masate',
        label: 'Masate'
      },
      {
        value: 'Mediglia',
        label: 'Mediglia'
      },
      {
        value: 'Melegnano',
        label: 'Melegnano'
      },
      {
        value: 'Melzo',
        label: 'Melzo'
      },
      {
        value: 'Mesero',
        label: 'Mesero'
      },
      {
        value: 'Milano',
        label: 'Milano'
      },
      {
        value: 'Morimondo',
        label: 'Morimondo'
      },
      {
        value: 'Motta Visconti',
        label: 'Motta Visconti'
      },
      {
        value: 'Nerviano',
        label: 'Nerviano'
      },
      {
        value: 'Nosate',
        label: 'Nosate'
      },
      {
        value: 'Novate Milanese',
        label: 'Novate Milanese'
      },
      {
        value: 'Noviglio',
        label: 'Noviglio'
      },
      {
        value: 'Opera',
        label: 'Opera'
      },
      {
        value: 'Ossona',
        label: 'Ossona'
      },
      {
        value: 'Ozzero',
        label: 'Ozzero'
      },
      {
        value: 'Paderno Dugnano',
        label: 'Paderno Dugnano'
      },
      {
        value: 'Pantigliate',
        label: 'Pantigliate'
      },
      {
        value: 'Parabiago',
        label: 'Parabiago'
      },
      {
        value: 'Paullo',
        label: 'Paullo'
      },
      {
        value: 'Pero',
        label: 'Pero'
      },
      {
        value: 'Peschiera Borromeo',
        label: 'Peschiera Borromeo'
      },
      {
        value: 'Pessano con Bornago',
        label: 'Pessano con Bornago'
      },
      {
        value: 'Pieve Emanuele',
        label: 'Pieve Emanuele'
      },
      {
        value: 'Pioltello',
        label: 'Pioltello'
      },
      {
        value: 'Pogliano Milanese',
        label: 'Pogliano Milanese'
      },
      {
        value: 'Pozzo d\'Adda',
        label: 'Pozzo d\'Adda'
      },
      {
        value: 'Pozzuolo Martesana',
        label: 'Pozzuolo Martesana'
      },
      {
        value: 'Pregnana Milanese',
        label: 'Pregnana Milanese'
      },
      {
        value: 'Rescaldina',
        label: 'Rescaldina'
      },
      {
        value: 'Rho',
        label: 'Rho'
      },
      {
        value: 'Robecchetto con Induno',
        label: 'Robecchetto con Induno'
      },
      {
        value: 'Robecco sul Naviglio',
        label: 'Robecco sul Naviglio'
      },
      {
        value: 'Rodano',
        label: 'Rodano'
      },
      {
        value: 'Rosate',
        label: 'Rosate'
      },
      {
        value: 'Rozzano',
        label: 'Rozzano'
      },
      {
        value: 'San Colombano al Lambro',
        label: 'San Colombano al Lambro'
      },
      {
        value: 'San Donato Milanese',
        label: 'San Donato Milanese'
      },
      {
        value: 'San Giorgio su Legnano',
        label: 'San Giorgio su Legnano'
      },
      {
        value: 'San Giuliano Milanese',
        label: 'San Giuliano Milanese'
      },
      {
        value: 'Santo Stefano Ticino',
        label: 'Santo Stefano Ticino'
      },
      {
        value: 'San Vittore Olona',
        label: 'San Vittore Olona'
      },
      {
        value: 'San Zenone al Lambro',
        label: 'San Zenone al Lambro'
      },
      {
        value: 'Sedriano',
        label: 'Sedriano'
      },
      {
        value: 'Segrate',
        label: 'Segrate'
      },
      {
        value: 'Senago',
        label: 'Senago'
      },
      {
        value: 'Sesto San Giovanni',
        label: 'Sesto San Giovanni'
      },
      {
        value: 'Settala',
        label: 'Settala'
      },
      {
        value: 'Settimo Milanese',
        label: 'Settimo Milanese'
      },
      {
        value: 'Solaro',
        label: 'Solaro'
      },
      {
        value: 'Trezzano Rosa',
        label: 'Trezzano Rosa'
      },
      {
        value: 'Trezzano sul Naviglio',
        label: 'Trezzano sul Naviglio'
      },
      {
        value: 'Trezzo sull\'Adda',
        label: 'Trezzo sull\'Adda'
      },
      {
        value: 'Tribiano',
        label: 'Tribiano'
      },
      {
        value: 'Truccazzano',
        label: 'Truccazzano'
      },
      {
        value: 'Turbigo',
        label: 'Turbigo'
      },
      {
        value: 'Vanzago',
        label: 'Vanzago'
      },
      {
        value: 'Vaprio d\'Adda',
        label: 'Vaprio d\'Adda'
      },
      {
        value: 'Vernate',
        label: 'Vernate'
      },
      {
        value: 'Vignate',
        label: 'Vignate'
      },
      {
        value: 'Vimodrone',
        label: 'Vimodrone'
      },
      {
        value: 'Vittuone',
        label: 'Vittuone'
      },
      {
        value: 'Vizzolo Predabissi',
        label: 'Vizzolo Predabissi'
      },
      {
        value: 'Zibido San Giacomo',
        label: 'Zibido San Giacomo'
      },
      {
        value: 'Villa Cortese',
        label: 'Villa Cortese'
      },
      {
        value: 'Vanzaghello',
        label: 'Vanzaghello'
      },
      {
        value: 'Baranzate',
        label: 'Baranzate'
      },
      {
        value: 'Vermezzo con Zelo',
        label: 'Vermezzo con Zelo'
      },
      {
        value: 'Adrara San Martino',
        label: 'Adrara San Martino'
      },
      {
        value: 'Adrara San Rocco',
        label: 'Adrara San Rocco'
      },
      {
        value: 'Albano Sant\'Alessandro',
        label: 'Albano Sant\'Alessandro'
      },
      {
        value: 'Albino',
        label: 'Albino'
      },
      {
        value: 'Almè',
        label: 'Almè'
      },
      {
        value: 'Almenno San Bartolomeo',
        label: 'Almenno San Bartolomeo'
      },
      {
        value: 'Almenno San Salvatore',
        label: 'Almenno San Salvatore'
      },
      {
        value: 'Alzano Lombardo',
        label: 'Alzano Lombardo'
      },
      {
        value: 'Ambivere',
        label: 'Ambivere'
      },
      {
        value: 'Antegnate',
        label: 'Antegnate'
      },
      {
        value: 'Arcene',
        label: 'Arcene'
      },
      {
        value: 'Ardesio',
        label: 'Ardesio'
      },
      {
        value: 'Arzago d\'Adda',
        label: 'Arzago d\'Adda'
      },
      {
        value: 'Averara',
        label: 'Averara'
      },
      {
        value: 'Aviatico',
        label: 'Aviatico'
      },
      {
        value: 'Azzano San Paolo',
        label: 'Azzano San Paolo'
      },
      {
        value: 'Azzone',
        label: 'Azzone'
      },
      {
        value: 'Bagnatica',
        label: 'Bagnatica'
      },
      {
        value: 'Barbata',
        label: 'Barbata'
      },
      {
        value: 'Bariano',
        label: 'Bariano'
      },
      {
        value: 'Barzana',
        label: 'Barzana'
      },
      {
        value: 'Bedulita',
        label: 'Bedulita'
      },
      {
        value: 'Berbenno',
        label: 'Berbenno'
      },
      {
        value: 'Bergamo',
        label: 'Bergamo'
      },
      {
        value: 'Berzo San Fermo',
        label: 'Berzo San Fermo'
      },
      {
        value: 'Bianzano',
        label: 'Bianzano'
      },
      {
        value: 'Blello',
        label: 'Blello'
      },
      {
        value: 'Bolgare',
        label: 'Bolgare'
      },
      {
        value: 'Boltiere',
        label: 'Boltiere'
      },
      {
        value: 'Bonate Sopra',
        label: 'Bonate Sopra'
      },
      {
        value: 'Bonate Sotto',
        label: 'Bonate Sotto'
      },
      {
        value: 'Borgo di Terzo',
        label: 'Borgo di Terzo'
      },
      {
        value: 'Bossico',
        label: 'Bossico'
      },
      {
        value: 'Bottanuco',
        label: 'Bottanuco'
      },
      {
        value: 'Bracca',
        label: 'Bracca'
      },
      {
        value: 'Branzi',
        label: 'Branzi'
      },
      {
        value: 'Brembate',
        label: 'Brembate'
      },
      {
        value: 'Brembate di Sopra',
        label: 'Brembate di Sopra'
      },
      {
        value: 'Brignano Gera d\'Adda',
        label: 'Brignano Gera d\'Adda'
      },
      {
        value: 'Brumano',
        label: 'Brumano'
      },
      {
        value: 'Brusaporto',
        label: 'Brusaporto'
      },
      {
        value: 'Calcinate',
        label: 'Calcinate'
      },
      {
        value: 'Calcio',
        label: 'Calcio'
      },
      {
        value: 'Calusco d\'Adda',
        label: 'Calusco d\'Adda'
      },
      {
        value: 'Calvenzano',
        label: 'Calvenzano'
      },
      {
        value: 'Camerata Cornello',
        label: 'Camerata Cornello'
      },
      {
        value: 'Canonica d\'Adda',
        label: 'Canonica d\'Adda'
      },
      {
        value: 'Capizzone',
        label: 'Capizzone'
      },
      {
        value: 'Capriate San Gervasio',
        label: 'Capriate San Gervasio'
      },
      {
        value: 'Caprino Bergamasco',
        label: 'Caprino Bergamasco'
      },
      {
        value: 'Caravaggio',
        label: 'Caravaggio'
      },
      {
        value: 'Carobbio degli Angeli',
        label: 'Carobbio degli Angeli'
      },
      {
        value: 'Carona',
        label: 'Carona'
      },
      {
        value: 'Carvico',
        label: 'Carvico'
      },
      {
        value: 'Casazza',
        label: 'Casazza'
      },
      {
        value: 'Casirate d\'Adda',
        label: 'Casirate d\'Adda'
      },
      {
        value: 'Casnigo',
        label: 'Casnigo'
      },
      {
        value: 'Cassiglio',
        label: 'Cassiglio'
      },
      {
        value: 'Castelli Calepio',
        label: 'Castelli Calepio'
      },
      {
        value: 'Castel Rozzone',
        label: 'Castel Rozzone'
      },
      {
        value: 'Castione della Presolana',
        label: 'Castione della Presolana'
      },
      {
        value: 'Castro',
        label: 'Castro'
      },
      {
        value: 'Cavernago',
        label: 'Cavernago'
      },
      {
        value: 'Cazzano Sant\'Andrea',
        label: 'Cazzano Sant\'Andrea'
      },
      {
        value: 'Cenate Sopra',
        label: 'Cenate Sopra'
      },
      {
        value: 'Cenate Sotto',
        label: 'Cenate Sotto'
      },
      {
        value: 'Cene',
        label: 'Cene'
      },
      {
        value: 'Cerete',
        label: 'Cerete'
      },
      {
        value: 'Chignolo d\'Isola',
        label: 'Chignolo d\'Isola'
      },
      {
        value: 'Chiuduno',
        label: 'Chiuduno'
      },
      {
        value: 'Cisano Bergamasco',
        label: 'Cisano Bergamasco'
      },
      {
        value: 'Ciserano',
        label: 'Ciserano'
      },
      {
        value: 'Cividate al Piano',
        label: 'Cividate al Piano'
      },
      {
        value: 'Clusone',
        label: 'Clusone'
      },
      {
        value: 'Colere',
        label: 'Colere'
      },
      {
        value: 'Cologno al Serio',
        label: 'Cologno al Serio'
      },
      {
        value: 'Colzate',
        label: 'Colzate'
      },
      {
        value: 'Comun Nuovo',
        label: 'Comun Nuovo'
      },
      {
        value: 'Corna Imagna',
        label: 'Corna Imagna'
      },
      {
        value: 'Cortenuova',
        label: 'Cortenuova'
      },
      {
        value: 'Costa di Mezzate',
        label: 'Costa di Mezzate'
      },
      {
        value: 'Costa Valle Imagna',
        label: 'Costa Valle Imagna'
      },
      {
        value: 'Costa Volpino',
        label: 'Costa Volpino'
      },
      {
        value: 'Covo',
        label: 'Covo'
      },
      {
        value: 'Credaro',
        label: 'Credaro'
      },
      {
        value: 'Curno',
        label: 'Curno'
      },
      {
        value: 'Cusio',
        label: 'Cusio'
      },
      {
        value: 'Dalmine',
        label: 'Dalmine'
      },
      {
        value: 'Dossena',
        label: 'Dossena'
      },
      {
        value: 'Endine Gaiano',
        label: 'Endine Gaiano'
      },
      {
        value: 'Entratico',
        label: 'Entratico'
      },
      {
        value: 'Fara Gera d\'Adda',
        label: 'Fara Gera d\'Adda'
      },
      {
        value: 'Fara Olivana con Sola',
        label: 'Fara Olivana con Sola'
      },
      {
        value: 'Filago',
        label: 'Filago'
      },
      {
        value: 'Fino del Monte',
        label: 'Fino del Monte'
      },
      {
        value: 'Fiorano al Serio',
        label: 'Fiorano al Serio'
      },
      {
        value: 'Fontanella',
        label: 'Fontanella'
      },
      {
        value: 'Fonteno',
        label: 'Fonteno'
      },
      {
        value: 'Foppolo',
        label: 'Foppolo'
      },
      {
        value: 'Foresto Sparso',
        label: 'Foresto Sparso'
      },
      {
        value: 'Fornovo San Giovanni',
        label: 'Fornovo San Giovanni'
      },
      {
        value: 'Fuipiano Valle Imagna',
        label: 'Fuipiano Valle Imagna'
      },
      {
        value: 'Gandellino',
        label: 'Gandellino'
      },
      {
        value: 'Gandino',
        label: 'Gandino'
      },
      {
        value: 'Gandosso',
        label: 'Gandosso'
      },
      {
        value: 'Gaverina Terme',
        label: 'Gaverina Terme'
      },
      {
        value: 'Gazzaniga',
        label: 'Gazzaniga'
      },
      {
        value: 'Ghisalba',
        label: 'Ghisalba'
      },
      {
        value: 'Gorlago',
        label: 'Gorlago'
      },
      {
        value: 'Gorle',
        label: 'Gorle'
      },
      {
        value: 'Gorno',
        label: 'Gorno'
      },
      {
        value: 'Grassobbio',
        label: 'Grassobbio'
      },
      {
        value: 'Gromo',
        label: 'Gromo'
      },
      {
        value: 'Grone',
        label: 'Grone'
      },
      {
        value: 'Grumello del Monte',
        label: 'Grumello del Monte'
      },
      {
        value: 'Isola di Fondra',
        label: 'Isola di Fondra'
      },
      {
        value: 'Isso',
        label: 'Isso'
      },
      {
        value: 'Lallio',
        label: 'Lallio'
      },
      {
        value: 'Leffe',
        label: 'Leffe'
      },
      {
        value: 'Lenna',
        label: 'Lenna'
      },
      {
        value: 'Levate',
        label: 'Levate'
      },
      {
        value: 'Locatello',
        label: 'Locatello'
      },
      {
        value: 'Lovere',
        label: 'Lovere'
      },
      {
        value: 'Lurano',
        label: 'Lurano'
      },
      {
        value: 'Luzzana',
        label: 'Luzzana'
      },
      {
        value: 'Madone',
        label: 'Madone'
      },
      {
        value: 'Mapello',
        label: 'Mapello'
      },
      {
        value: 'Martinengo',
        label: 'Martinengo'
      },
      {
        value: 'Mezzoldo',
        label: 'Mezzoldo'
      },
      {
        value: 'Misano di Gera d\'Adda',
        label: 'Misano di Gera d\'Adda'
      },
      {
        value: 'Moio de\' Calvi',
        label: 'Moio de\' Calvi'
      },
      {
        value: 'Monasterolo del Castello',
        label: 'Monasterolo del Castello'
      },
      {
        value: 'Montello',
        label: 'Montello'
      },
      {
        value: 'Morengo',
        label: 'Morengo'
      },
      {
        value: 'Mornico al Serio',
        label: 'Mornico al Serio'
      },
      {
        value: 'Mozzanica',
        label: 'Mozzanica'
      },
      {
        value: 'Mozzo',
        label: 'Mozzo'
      },
      {
        value: 'Nembro',
        label: 'Nembro'
      },
      {
        value: 'Olmo al Brembo',
        label: 'Olmo al Brembo'
      },
      {
        value: 'Oltre il Colle',
        label: 'Oltre il Colle'
      },
      {
        value: 'Oltressenda Alta',
        label: 'Oltressenda Alta'
      },
      {
        value: 'Oneta',
        label: 'Oneta'
      },
      {
        value: 'Onore',
        label: 'Onore'
      },
      {
        value: 'Orio al Serio',
        label: 'Orio al Serio'
      },
      {
        value: 'Ornica',
        label: 'Ornica'
      },
      {
        value: 'Osio Sopra',
        label: 'Osio Sopra'
      },
      {
        value: 'Osio Sotto',
        label: 'Osio Sotto'
      },
      {
        value: 'Pagazzano',
        label: 'Pagazzano'
      },
      {
        value: 'Paladina',
        label: 'Paladina'
      },
      {
        value: 'Palazzago',
        label: 'Palazzago'
      },
      {
        value: 'Palosco',
        label: 'Palosco'
      },
      {
        value: 'Parre',
        label: 'Parre'
      },
      {
        value: 'Parzanica',
        label: 'Parzanica'
      },
      {
        value: 'Pedrengo',
        label: 'Pedrengo'
      },
      {
        value: 'Peia',
        label: 'Peia'
      },
      {
        value: 'Pianico',
        label: 'Pianico'
      },
      {
        value: 'Piario',
        label: 'Piario'
      },
      {
        value: 'Piazza Brembana',
        label: 'Piazza Brembana'
      },
      {
        value: 'Piazzatorre',
        label: 'Piazzatorre'
      },
      {
        value: 'Piazzolo',
        label: 'Piazzolo'
      },
      {
        value: 'Pognano',
        label: 'Pognano'
      },
      {
        value: 'Ponte Nossa',
        label: 'Ponte Nossa'
      },
      {
        value: 'Ponteranica',
        label: 'Ponteranica'
      },
      {
        value: 'Ponte San Pietro',
        label: 'Ponte San Pietro'
      },
      {
        value: 'Pontida',
        label: 'Pontida'
      },
      {
        value: 'Pontirolo Nuovo',
        label: 'Pontirolo Nuovo'
      },
      {
        value: 'Pradalunga',
        label: 'Pradalunga'
      },
      {
        value: 'Predore',
        label: 'Predore'
      },
      {
        value: 'Premolo',
        label: 'Premolo'
      },
      {
        value: 'Presezzo',
        label: 'Presezzo'
      },
      {
        value: 'Pumenengo',
        label: 'Pumenengo'
      },
      {
        value: 'Ranica',
        label: 'Ranica'
      },
      {
        value: 'Ranzanico',
        label: 'Ranzanico'
      },
      {
        value: 'Riva di Solto',
        label: 'Riva di Solto'
      },
      {
        value: 'Rogno',
        label: 'Rogno'
      },
      {
        value: 'Romano di Lombardia',
        label: 'Romano di Lombardia'
      },
      {
        value: 'Roncobello',
        label: 'Roncobello'
      },
      {
        value: 'Roncola',
        label: 'Roncola'
      },
      {
        value: 'Rota d\'Imagna',
        label: 'Rota d\'Imagna'
      },
      {
        value: 'Rovetta',
        label: 'Rovetta'
      },
      {
        value: 'San Giovanni Bianco',
        label: 'San Giovanni Bianco'
      },
      {
        value: 'San Paolo d\'Argon',
        label: 'San Paolo d\'Argon'
      },
      {
        value: 'San Pellegrino Terme',
        label: 'San Pellegrino Terme'
      },
      {
        value: 'Santa Brigida',
        label: 'Santa Brigida'
      },
      {
        value: 'Sarnico',
        label: 'Sarnico'
      },
      {
        value: 'Scanzorosciate',
        label: 'Scanzorosciate'
      },
      {
        value: 'Schilpario',
        label: 'Schilpario'
      },
      {
        value: 'Sedrina',
        label: 'Sedrina'
      },
      {
        value: 'Selvino',
        label: 'Selvino'
      },
      {
        value: 'Seriate',
        label: 'Seriate'
      },
      {
        value: 'Serina',
        label: 'Serina'
      },
      {
        value: 'Solto Collina',
        label: 'Solto Collina'
      },
      {
        value: 'Songavazzo',
        label: 'Songavazzo'
      },
      {
        value: 'Sorisole',
        label: 'Sorisole'
      },
      {
        value: 'Sotto il Monte Giovanni XXIII',
        label: 'Sotto il Monte Giovanni XXIII'
      },
      {
        value: 'Sovere',
        label: 'Sovere'
      },
      {
        value: 'Spinone al Lago',
        label: 'Spinone al Lago'
      },
      {
        value: 'Spirano',
        label: 'Spirano'
      },
      {
        value: 'Stezzano',
        label: 'Stezzano'
      },
      {
        value: 'Strozza',
        label: 'Strozza'
      },
      {
        value: 'Suisio',
        label: 'Suisio'
      },
      {
        value: 'Taleggio',
        label: 'Taleggio'
      },
      {
        value: 'Tavernola Bergamasca',
        label: 'Tavernola Bergamasca'
      },
      {
        value: 'Telgate',
        label: 'Telgate'
      },
      {
        value: 'Terno d\'Isola',
        label: 'Terno d\'Isola'
      },
      {
        value: 'Torre Boldone',
        label: 'Torre Boldone'
      },
      {
        value: 'Torre de\' Busi',
        label: 'Torre de\' Busi'
      },
      {
        value: 'Torre de\' Roveri',
        label: 'Torre de\' Roveri'
      },
      {
        value: 'Torre Pallavicina',
        label: 'Torre Pallavicina'
      },
      {
        value: 'Trescore Balneario',
        label: 'Trescore Balneario'
      },
      {
        value: 'Treviglio',
        label: 'Treviglio'
      },
      {
        value: 'Treviolo',
        label: 'Treviolo'
      },
      {
        value: 'Ubiale Clanezzo',
        label: 'Ubiale Clanezzo'
      },
      {
        value: 'Urgnano',
        label: 'Urgnano'
      },
      {
        value: 'Valbondione',
        label: 'Valbondione'
      },
      {
        value: 'Valbrembo',
        label: 'Valbrembo'
      },
      {
        value: 'Valgoglio',
        label: 'Valgoglio'
      },
      {
        value: 'Valleve',
        label: 'Valleve'
      },
      {
        value: 'Valnegra',
        label: 'Valnegra'
      },
      {
        value: 'Valtorta',
        label: 'Valtorta'
      },
      {
        value: 'Vedeseta',
        label: 'Vedeseta'
      },
      {
        value: 'Verdellino',
        label: 'Verdellino'
      },
      {
        value: 'Verdello',
        label: 'Verdello'
      },
      {
        value: 'Vertova',
        label: 'Vertova'
      },
      {
        value: 'Viadanica',
        label: 'Viadanica'
      },
      {
        value: 'Vigano San Martino',
        label: 'Vigano San Martino'
      },
      {
        value: 'Vigolo',
        label: 'Vigolo'
      },
      {
        value: 'Villa d\'Adda',
        label: 'Villa d\'Adda'
      },
      {
        value: 'Villa d\'Almè',
        label: 'Villa d\'Almè'
      },
      {
        value: 'Villa di Serio',
        label: 'Villa di Serio'
      },
      {
        value: 'Villa d\'Ogna',
        label: 'Villa d\'Ogna'
      },
      {
        value: 'Villongo',
        label: 'Villongo'
      },
      {
        value: 'Vilminore di Scalve',
        label: 'Vilminore di Scalve'
      },
      {
        value: 'Zandobbio',
        label: 'Zandobbio'
      },
      {
        value: 'Zanica',
        label: 'Zanica'
      },
      {
        value: 'Zogno',
        label: 'Zogno'
      },
      {
        value: 'Costa Serina',
        label: 'Costa Serina'
      },
      {
        value: 'Algua',
        label: 'Algua'
      },
      {
        value: 'Cornalba',
        label: 'Cornalba'
      },
      {
        value: 'Medolago',
        label: 'Medolago'
      },
      {
        value: 'Solza',
        label: 'Solza'
      },
      {
        value: 'Sant\'Omobono Terme',
        label: 'Sant\'Omobono Terme'
      },
      {
        value: 'Val Brembilla',
        label: 'Val Brembilla'
      },
      {
        value: 'Acquafredda',
        label: 'Acquafredda'
      },
      {
        value: 'Adro',
        label: 'Adro'
      },
      {
        value: 'Agnosine',
        label: 'Agnosine'
      },
      {
        value: 'Alfianello',
        label: 'Alfianello'
      },
      {
        value: 'Anfo',
        label: 'Anfo'
      },
      {
        value: 'Angolo Terme',
        label: 'Angolo Terme'
      },
      {
        value: 'Artogne',
        label: 'Artogne'
      },
      {
        value: 'Azzano Mella',
        label: 'Azzano Mella'
      },
      {
        value: 'Bagnolo Mella',
        label: 'Bagnolo Mella'
      },
      {
        value: 'Bagolino',
        label: 'Bagolino'
      },
      {
        value: 'Barbariga',
        label: 'Barbariga'
      },
      {
        value: 'Barghe',
        label: 'Barghe'
      },
      {
        value: 'Bassano Bresciano',
        label: 'Bassano Bresciano'
      },
      {
        value: 'Bedizzole',
        label: 'Bedizzole'
      },
      {
        value: 'Berlingo',
        label: 'Berlingo'
      },
      {
        value: 'Berzo Demo',
        label: 'Berzo Demo'
      },
      {
        value: 'Berzo Inferiore',
        label: 'Berzo Inferiore'
      },
      {
        value: 'Bienno',
        label: 'Bienno'
      },
      {
        value: 'Bione',
        label: 'Bione'
      },
      {
        value: 'Borgo San Giacomo',
        label: 'Borgo San Giacomo'
      },
      {
        value: 'Borgosatollo',
        label: 'Borgosatollo'
      },
      {
        value: 'Borno',
        label: 'Borno'
      },
      {
        value: 'Botticino',
        label: 'Botticino'
      },
      {
        value: 'Bovegno',
        label: 'Bovegno'
      },
      {
        value: 'Bovezzo',
        label: 'Bovezzo'
      },
      {
        value: 'Brandico',
        label: 'Brandico'
      },
      {
        value: 'Braone',
        label: 'Braone'
      },
      {
        value: 'Breno',
        label: 'Breno'
      },
      {
        value: 'Brescia',
        label: 'Brescia'
      },
      {
        value: 'Brione',
        label: 'Brione'
      },
      {
        value: 'Caino',
        label: 'Caino'
      },
      {
        value: 'Calcinato',
        label: 'Calcinato'
      },
      {
        value: 'Calvagese della Riviera',
        label: 'Calvagese della Riviera'
      },
      {
        value: 'Calvisano',
        label: 'Calvisano'
      },
      {
        value: 'Capo di Ponte',
        label: 'Capo di Ponte'
      },
      {
        value: 'Capovalle',
        label: 'Capovalle'
      },
      {
        value: 'Capriano del Colle',
        label: 'Capriano del Colle'
      },
      {
        value: 'Capriolo',
        label: 'Capriolo'
      },
      {
        value: 'Carpenedolo',
        label: 'Carpenedolo'
      },
      {
        value: 'Castegnato',
        label: 'Castegnato'
      },
      {
        value: 'Castelcovati',
        label: 'Castelcovati'
      },
      {
        value: 'Castel Mella',
        label: 'Castel Mella'
      },
      {
        value: 'Castenedolo',
        label: 'Castenedolo'
      },
      {
        value: 'Casto',
        label: 'Casto'
      },
      {
        value: 'Castrezzato',
        label: 'Castrezzato'
      },
      {
        value: 'Cazzago San Martino',
        label: 'Cazzago San Martino'
      },
      {
        value: 'Cedegolo',
        label: 'Cedegolo'
      },
      {
        value: 'Cellatica',
        label: 'Cellatica'
      },
      {
        value: 'Cerveno',
        label: 'Cerveno'
      },
      {
        value: 'Ceto',
        label: 'Ceto'
      },
      {
        value: 'Cevo',
        label: 'Cevo'
      },
      {
        value: 'Chiari',
        label: 'Chiari'
      },
      {
        value: 'Cigole',
        label: 'Cigole'
      },
      {
        value: 'Cimbergo',
        label: 'Cimbergo'
      },
      {
        value: 'Cividate Camuno',
        label: 'Cividate Camuno'
      },
      {
        value: 'Coccaglio',
        label: 'Coccaglio'
      },
      {
        value: 'Collebeato',
        label: 'Collebeato'
      },
      {
        value: 'Collio',
        label: 'Collio'
      },
      {
        value: 'Cologne',
        label: 'Cologne'
      },
      {
        value: 'Comezzano-Cizzago',
        label: 'Comezzano-Cizzago'
      },
      {
        value: 'Concesio',
        label: 'Concesio'
      },
      {
        value: 'Corte Franca',
        label: 'Corte Franca'
      },
      {
        value: 'Corteno Golgi',
        label: 'Corteno Golgi'
      },
      {
        value: 'Corzano',
        label: 'Corzano'
      },
      {
        value: 'Darfo Boario Terme',
        label: 'Darfo Boario Terme'
      },
      {
        value: 'Dello',
        label: 'Dello'
      },
      {
        value: 'Desenzano del Garda',
        label: 'Desenzano del Garda'
      },
      {
        value: 'Edolo',
        label: 'Edolo'
      },
      {
        value: 'Erbusco',
        label: 'Erbusco'
      },
      {
        value: 'Esine',
        label: 'Esine'
      },
      {
        value: 'Fiesse',
        label: 'Fiesse'
      },
      {
        value: 'Flero',
        label: 'Flero'
      },
      {
        value: 'Gambara',
        label: 'Gambara'
      },
      {
        value: 'Gardone Riviera',
        label: 'Gardone Riviera'
      },
      {
        value: 'Gardone Val Trompia',
        label: 'Gardone Val Trompia'
      },
      {
        value: 'Gargnano',
        label: 'Gargnano'
      },
      {
        value: 'Gavardo',
        label: 'Gavardo'
      },
      {
        value: 'Ghedi',
        label: 'Ghedi'
      },
      {
        value: 'Gianico',
        label: 'Gianico'
      },
      {
        value: 'Gottolengo',
        label: 'Gottolengo'
      },
      {
        value: 'Gussago',
        label: 'Gussago'
      },
      {
        value: 'Idro',
        label: 'Idro'
      },
      {
        value: 'Incudine',
        label: 'Incudine'
      },
      {
        value: 'Irma',
        label: 'Irma'
      },
      {
        value: 'Iseo',
        label: 'Iseo'
      },
      {
        value: 'Isorella',
        label: 'Isorella'
      },
      {
        value: 'Lavenone',
        label: 'Lavenone'
      },
      {
        value: 'Leno',
        label: 'Leno'
      },
      {
        value: 'Limone sul Garda',
        label: 'Limone sul Garda'
      },
      {
        value: 'Lodrino',
        label: 'Lodrino'
      },
      {
        value: 'Lograto',
        label: 'Lograto'
      },
      {
        value: 'Lonato del Garda',
        label: 'Lonato del Garda'
      },
      {
        value: 'Longhena',
        label: 'Longhena'
      },
      {
        value: 'Losine',
        label: 'Losine'
      },
      {
        value: 'Lozio',
        label: 'Lozio'
      },
      {
        value: 'Lumezzane',
        label: 'Lumezzane'
      },
      {
        value: 'Maclodio',
        label: 'Maclodio'
      },
      {
        value: 'Magasa',
        label: 'Magasa'
      },
      {
        value: 'Mairano',
        label: 'Mairano'
      },
      {
        value: 'Malegno',
        label: 'Malegno'
      },
      {
        value: 'Malonno',
        label: 'Malonno'
      },
      {
        value: 'Manerba del Garda',
        label: 'Manerba del Garda'
      },
      {
        value: 'Manerbio',
        label: 'Manerbio'
      },
      {
        value: 'Marcheno',
        label: 'Marcheno'
      },
      {
        value: 'Marmentino',
        label: 'Marmentino'
      },
      {
        value: 'Marone',
        label: 'Marone'
      },
      {
        value: 'Mazzano',
        label: 'Mazzano'
      },
      {
        value: 'Milzano',
        label: 'Milzano'
      },
      {
        value: 'Moniga del Garda',
        label: 'Moniga del Garda'
      },
      {
        value: 'Monno',
        label: 'Monno'
      },
      {
        value: 'Monte Isola',
        label: 'Monte Isola'
      },
      {
        value: 'Monticelli Brusati',
        label: 'Monticelli Brusati'
      },
      {
        value: 'Montichiari',
        label: 'Montichiari'
      },
      {
        value: 'Montirone',
        label: 'Montirone'
      },
      {
        value: 'Mura',
        label: 'Mura'
      },
      {
        value: 'Muscoline',
        label: 'Muscoline'
      },
      {
        value: 'Nave',
        label: 'Nave'
      },
      {
        value: 'Niardo',
        label: 'Niardo'
      },
      {
        value: 'Nuvolento',
        label: 'Nuvolento'
      },
      {
        value: 'Nuvolera',
        label: 'Nuvolera'
      },
      {
        value: 'Odolo',
        label: 'Odolo'
      },
      {
        value: 'Offlaga',
        label: 'Offlaga'
      },
      {
        value: 'Ome',
        label: 'Ome'
      },
      {
        value: 'Ono San Pietro',
        label: 'Ono San Pietro'
      },
      {
        value: 'Orzinuovi',
        label: 'Orzinuovi'
      },
      {
        value: 'Orzivecchi',
        label: 'Orzivecchi'
      },
      {
        value: 'Ospitaletto',
        label: 'Ospitaletto'
      },
      {
        value: 'Ossimo',
        label: 'Ossimo'
      },
      {
        value: 'Padenghe sul Garda',
        label: 'Padenghe sul Garda'
      },
      {
        value: 'Paderno Franciacorta',
        label: 'Paderno Franciacorta'
      },
      {
        value: 'Paisco Loveno',
        label: 'Paisco Loveno'
      },
      {
        value: 'Paitone',
        label: 'Paitone'
      },
      {
        value: 'Palazzolo sull\'Oglio',
        label: 'Palazzolo sull\'Oglio'
      },
      {
        value: 'Paratico',
        label: 'Paratico'
      },
      {
        value: 'Paspardo',
        label: 'Paspardo'
      },
      {
        value: 'Passirano',
        label: 'Passirano'
      },
      {
        value: 'Pavone del Mella',
        label: 'Pavone del Mella'
      },
      {
        value: 'San Paolo',
        label: 'San Paolo'
      },
      {
        value: 'Pertica Alta',
        label: 'Pertica Alta'
      },
      {
        value: 'Pertica Bassa',
        label: 'Pertica Bassa'
      },
      {
        value: 'Pezzaze',
        label: 'Pezzaze'
      },
      {
        value: 'Pian Camuno',
        label: 'Pian Camuno'
      },
      {
        value: 'Pisogne',
        label: 'Pisogne'
      },
      {
        value: 'Polaveno',
        label: 'Polaveno'
      },
      {
        value: 'Polpenazze del Garda',
        label: 'Polpenazze del Garda'
      },
      {
        value: 'Pompiano',
        label: 'Pompiano'
      },
      {
        value: 'Poncarale',
        label: 'Poncarale'
      },
      {
        value: 'Ponte di Legno',
        label: 'Ponte di Legno'
      },
      {
        value: 'Pontevico',
        label: 'Pontevico'
      },
      {
        value: 'Pontoglio',
        label: 'Pontoglio'
      },
      {
        value: 'Pozzolengo',
        label: 'Pozzolengo'
      },
      {
        value: 'Pralboino',
        label: 'Pralboino'
      },
      {
        value: 'Preseglie',
        label: 'Preseglie'
      },
      {
        value: 'Prevalle',
        label: 'Prevalle'
      },
      {
        value: 'Provaglio d\'Iseo',
        label: 'Provaglio d\'Iseo'
      },
      {
        value: 'Provaglio Val Sabbia',
        label: 'Provaglio Val Sabbia'
      },
      {
        value: 'Puegnago del Garda',
        label: 'Puegnago del Garda'
      },
      {
        value: 'Quinzano d\'Oglio',
        label: 'Quinzano d\'Oglio'
      },
      {
        value: 'Remedello',
        label: 'Remedello'
      },
      {
        value: 'Rezzato',
        label: 'Rezzato'
      },
      {
        value: 'Roccafranca',
        label: 'Roccafranca'
      },
      {
        value: 'Rodengo Saiano',
        label: 'Rodengo Saiano'
      },
      {
        value: 'Roè Volciano',
        label: 'Roè Volciano'
      },
      {
        value: 'Roncadelle',
        label: 'Roncadelle'
      },
      {
        value: 'Rovato',
        label: 'Rovato'
      },
      {
        value: 'Rudiano',
        label: 'Rudiano'
      },
      {
        value: 'Sabbio Chiese',
        label: 'Sabbio Chiese'
      },
      {
        value: 'Sale Marasino',
        label: 'Sale Marasino'
      },
      {
        value: 'Salò',
        label: 'Salò'
      },
      {
        value: 'San Felice del Benaco',
        label: 'San Felice del Benaco'
      },
      {
        value: 'San Gervasio Bresciano',
        label: 'San Gervasio Bresciano'
      },
      {
        value: 'San Zeno Naviglio',
        label: 'San Zeno Naviglio'
      },
      {
        value: 'Sarezzo',
        label: 'Sarezzo'
      },
      {
        value: 'Saviore dell\'Adamello',
        label: 'Saviore dell\'Adamello'
      },
      {
        value: 'Sellero',
        label: 'Sellero'
      },
      {
        value: 'Seniga',
        label: 'Seniga'
      },
      {
        value: 'Serle',
        label: 'Serle'
      },
      {
        value: 'Sirmione',
        label: 'Sirmione'
      },
      {
        value: 'Soiano del Lago',
        label: 'Soiano del Lago'
      },
      {
        value: 'Sonico',
        label: 'Sonico'
      },
      {
        value: 'Sulzano',
        label: 'Sulzano'
      },
      {
        value: 'Tavernole sul Mella',
        label: 'Tavernole sul Mella'
      },
      {
        value: 'Temù',
        label: 'Temù'
      },
      {
        value: 'Tignale',
        label: 'Tignale'
      },
      {
        value: 'Torbole Casaglia',
        label: 'Torbole Casaglia'
      },
      {
        value: 'Toscolano-Maderno',
        label: 'Toscolano-Maderno'
      },
      {
        value: 'Travagliato',
        label: 'Travagliato'
      },
      {
        value: 'Tremosine sul Garda',
        label: 'Tremosine sul Garda'
      },
      {
        value: 'Trenzano',
        label: 'Trenzano'
      },
      {
        value: 'Treviso Bresciano',
        label: 'Treviso Bresciano'
      },
      {
        value: 'Urago d\'Oglio',
        label: 'Urago d\'Oglio'
      },
      {
        value: 'Vallio Terme',
        label: 'Vallio Terme'
      },
      {
        value: 'Valvestino',
        label: 'Valvestino'
      },
      {
        value: 'Verolanuova',
        label: 'Verolanuova'
      },
      {
        value: 'Verolavecchia',
        label: 'Verolavecchia'
      },
      {
        value: 'Vestone',
        label: 'Vestone'
      },
      {
        value: 'Vezza d\'Oglio',
        label: 'Vezza d\'Oglio'
      },
      {
        value: 'Villa Carcina',
        label: 'Villa Carcina'
      },
      {
        value: 'Villachiara',
        label: 'Villachiara'
      },
      {
        value: 'Villanuova sul Clisi',
        label: 'Villanuova sul Clisi'
      },
      {
        value: 'Vione',
        label: 'Vione'
      },
      {
        value: 'Visano',
        label: 'Visano'
      },
      {
        value: 'Vobarno',
        label: 'Vobarno'
      },
      {
        value: 'Zone',
        label: 'Zone'
      },
      {
        value: 'Piancogno',
        label: 'Piancogno'
      },
      {
        value: 'Alagna',
        label: 'Alagna'
      },
      {
        value: 'Albonese',
        label: 'Albonese'
      },
      {
        value: 'Albuzzano',
        label: 'Albuzzano'
      },
      {
        value: 'Arena Po',
        label: 'Arena Po'
      },
      {
        value: 'Badia Pavese',
        label: 'Badia Pavese'
      },
      {
        value: 'Bagnaria',
        label: 'Bagnaria'
      },
      {
        value: 'Barbianello',
        label: 'Barbianello'
      },
      {
        value: 'Bascapè',
        label: 'Bascapè'
      },
      {
        value: 'Bastida Pancarana',
        label: 'Bastida Pancarana'
      },
      {
        value: 'Battuda',
        label: 'Battuda'
      },
      {
        value: 'Belgioioso',
        label: 'Belgioioso'
      },
      {
        value: 'Bereguardo',
        label: 'Bereguardo'
      },
      {
        value: 'Borgarello',
        label: 'Borgarello'
      },
      {
        value: 'Borgo Priolo',
        label: 'Borgo Priolo'
      },
      {
        value: 'Borgoratto Mormorolo',
        label: 'Borgoratto Mormorolo'
      },
      {
        value: 'Borgo San Siro',
        label: 'Borgo San Siro'
      },
      {
        value: 'Bornasco',
        label: 'Bornasco'
      },
      {
        value: 'Bosnasco',
        label: 'Bosnasco'
      },
      {
        value: 'Brallo di Pregola',
        label: 'Brallo di Pregola'
      },
      {
        value: 'Breme',
        label: 'Breme'
      },
      {
        value: 'Bressana Bottarone',
        label: 'Bressana Bottarone'
      },
      {
        value: 'Broni',
        label: 'Broni'
      },
      {
        value: 'Calvignano',
        label: 'Calvignano'
      },
      {
        value: 'Campospinoso Albaredo',
        label: 'Campospinoso Albaredo'
      },
      {
        value: 'Candia Lomellina',
        label: 'Candia Lomellina'
      },
      {
        value: 'Canneto Pavese',
        label: 'Canneto Pavese'
      },
      {
        value: 'Carbonara al Ticino',
        label: 'Carbonara al Ticino'
      },
      {
        value: 'Casanova Lonati',
        label: 'Casanova Lonati'
      },
      {
        value: 'Casatisma',
        label: 'Casatisma'
      },
      {
        value: 'Casei Gerola',
        label: 'Casei Gerola'
      },
      {
        value: 'Casorate Primo',
        label: 'Casorate Primo'
      },
      {
        value: 'Cassolnovo',
        label: 'Cassolnovo'
      },
      {
        value: 'Castana',
        label: 'Castana'
      },
      {
        value: 'Casteggio',
        label: 'Casteggio'
      },
      {
        value: 'Castelletto di Branduzzo',
        label: 'Castelletto di Branduzzo'
      },
      {
        value: 'Castello d\'Agogna',
        label: 'Castello d\'Agogna'
      },
      {
        value: 'Castelnovetto',
        label: 'Castelnovetto'
      },
      {
        value: 'Cava Manara',
        label: 'Cava Manara'
      },
      {
        value: 'Cecima',
        label: 'Cecima'
      },
      {
        value: 'Ceranova',
        label: 'Ceranova'
      },
      {
        value: 'Ceretto Lomellina',
        label: 'Ceretto Lomellina'
      },
      {
        value: 'Cergnago',
        label: 'Cergnago'
      },
      {
        value: 'Certosa di Pavia',
        label: 'Certosa di Pavia'
      },
      {
        value: 'Cervesina',
        label: 'Cervesina'
      },
      {
        value: 'Chignolo Po',
        label: 'Chignolo Po'
      },
      {
        value: 'Cigognola',
        label: 'Cigognola'
      },
      {
        value: 'Cilavegna',
        label: 'Cilavegna'
      },
      {
        value: 'Codevilla',
        label: 'Codevilla'
      },
      {
        value: 'Confienza',
        label: 'Confienza'
      },
      {
        value: 'Copiano',
        label: 'Copiano'
      },
      {
        value: 'Corana',
        label: 'Corana'
      },
      {
        value: 'Corvino San Quirico',
        label: 'Corvino San Quirico'
      },
      {
        value: 'Costa de\' Nobili',
        label: 'Costa de\' Nobili'
      },
      {
        value: 'Cozzo',
        label: 'Cozzo'
      },
      {
        value: 'Cura Carpignano',
        label: 'Cura Carpignano'
      },
      {
        value: 'Dorno',
        label: 'Dorno'
      },
      {
        value: 'Ferrera Erbognone',
        label: 'Ferrera Erbognone'
      },
      {
        value: 'Filighera',
        label: 'Filighera'
      },
      {
        value: 'Fortunago',
        label: 'Fortunago'
      },
      {
        value: 'Frascarolo',
        label: 'Frascarolo'
      },
      {
        value: 'Galliavola',
        label: 'Galliavola'
      },
      {
        value: 'Gambarana',
        label: 'Gambarana'
      },
      {
        value: 'Gambolò',
        label: 'Gambolò'
      },
      {
        value: 'Garlasco',
        label: 'Garlasco'
      },
      {
        value: 'Gerenzago',
        label: 'Gerenzago'
      },
      {
        value: 'Giussago',
        label: 'Giussago'
      },
      {
        value: 'Godiasco Salice Terme',
        label: 'Godiasco Salice Terme'
      },
      {
        value: 'Golferenzo',
        label: 'Golferenzo'
      },
      {
        value: 'Gravellona Lomellina',
        label: 'Gravellona Lomellina'
      },
      {
        value: 'Gropello Cairoli',
        label: 'Gropello Cairoli'
      },
      {
        value: 'Inverno e Monteleone',
        label: 'Inverno e Monteleone'
      },
      {
        value: 'Landriano',
        label: 'Landriano'
      },
      {
        value: 'Langosco',
        label: 'Langosco'
      },
      {
        value: 'Lardirago',
        label: 'Lardirago'
      },
      {
        value: 'Linarolo',
        label: 'Linarolo'
      },
      {
        value: 'Lirio',
        label: 'Lirio'
      },
      {
        value: 'Lomello',
        label: 'Lomello'
      },
      {
        value: 'Lungavilla',
        label: 'Lungavilla'
      },
      {
        value: 'Magherno',
        label: 'Magherno'
      },
      {
        value: 'Marcignago',
        label: 'Marcignago'
      },
      {
        value: 'Marzano',
        label: 'Marzano'
      },
      {
        value: 'Mede',
        label: 'Mede'
      },
      {
        value: 'Menconico',
        label: 'Menconico'
      },
      {
        value: 'Mezzana Bigli',
        label: 'Mezzana Bigli'
      },
      {
        value: 'Mezzana Rabattone',
        label: 'Mezzana Rabattone'
      },
      {
        value: 'Mezzanino',
        label: 'Mezzanino'
      },
      {
        value: 'Miradolo Terme',
        label: 'Miradolo Terme'
      },
      {
        value: 'Montalto Pavese',
        label: 'Montalto Pavese'
      },
      {
        value: 'Montebello della Battaglia',
        label: 'Montebello della Battaglia'
      },
      {
        value: 'Montecalvo Versiggia',
        label: 'Montecalvo Versiggia'
      },
      {
        value: 'Montescano',
        label: 'Montescano'
      },
      {
        value: 'Montesegale',
        label: 'Montesegale'
      },
      {
        value: 'Monticelli Pavese',
        label: 'Monticelli Pavese'
      },
      {
        value: 'Montù Beccaria',
        label: 'Montù Beccaria'
      },
      {
        value: 'Mornico Losana',
        label: 'Mornico Losana'
      },
      {
        value: 'Mortara',
        label: 'Mortara'
      },
      {
        value: 'Nicorvo',
        label: 'Nicorvo'
      },
      {
        value: 'Olevano di Lomellina',
        label: 'Olevano di Lomellina'
      },
      {
        value: 'Oliva Gessi',
        label: 'Oliva Gessi'
      },
      {
        value: 'Ottobiano',
        label: 'Ottobiano'
      },
      {
        value: 'Palestro',
        label: 'Palestro'
      },
      {
        value: 'Pancarana',
        label: 'Pancarana'
      },
      {
        value: 'Parona',
        label: 'Parona'
      },
      {
        value: 'Pavia',
        label: 'Pavia'
      },
      {
        value: 'Pietra de\' Giorgi',
        label: 'Pietra de\' Giorgi'
      },
      {
        value: 'Pieve Albignola',
        label: 'Pieve Albignola'
      },
      {
        value: 'Pieve del Cairo',
        label: 'Pieve del Cairo'
      },
      {
        value: 'Pieve Porto Morone',
        label: 'Pieve Porto Morone'
      },
      {
        value: 'Pinarolo Po',
        label: 'Pinarolo Po'
      },
      {
        value: 'Pizzale',
        label: 'Pizzale'
      },
      {
        value: 'Ponte Nizza',
        label: 'Ponte Nizza'
      },
      {
        value: 'Portalbera',
        label: 'Portalbera'
      },
      {
        value: 'Rea',
        label: 'Rea'
      },
      {
        value: 'Redavalle',
        label: 'Redavalle'
      },
      {
        value: 'Retorbido',
        label: 'Retorbido'
      },
      {
        value: 'Rivanazzano Terme',
        label: 'Rivanazzano Terme'
      },
      {
        value: 'Robbio',
        label: 'Robbio'
      },
      {
        value: 'Robecco Pavese',
        label: 'Robecco Pavese'
      },
      {
        value: 'Rocca de\' Giorgi',
        label: 'Rocca de\' Giorgi'
      },
      {
        value: 'Rocca Susella',
        label: 'Rocca Susella'
      },
      {
        value: 'Rognano',
        label: 'Rognano'
      },
      {
        value: 'Romagnese',
        label: 'Romagnese'
      },
      {
        value: 'Roncaro',
        label: 'Roncaro'
      },
      {
        value: 'Rosasco',
        label: 'Rosasco'
      },
      {
        value: 'Rovescala',
        label: 'Rovescala'
      },
      {
        value: 'San Cipriano Po',
        label: 'San Cipriano Po'
      },
      {
        value: 'San Damiano al Colle',
        label: 'San Damiano al Colle'
      },
      {
        value: 'San Genesio ed Uniti',
        label: 'San Genesio ed Uniti'
      },
      {
        value: 'San Giorgio di Lomellina',
        label: 'San Giorgio di Lomellina'
      },
      {
        value: 'San Martino Siccomario',
        label: 'San Martino Siccomario'
      },
      {
        value: 'Sannazzaro de\' Burgondi',
        label: 'Sannazzaro de\' Burgondi'
      },
      {
        value: 'Santa Cristina e Bissone',
        label: 'Santa Cristina e Bissone'
      },
      {
        value: 'Santa Giuletta',
        label: 'Santa Giuletta'
      },
      {
        value: 'Sant\'Alessio con Vialone',
        label: 'Sant\'Alessio con Vialone'
      },
      {
        value: 'Santa Margherita di Staffora',
        label: 'Santa Margherita di Staffora'
      },
      {
        value: 'Santa Maria della Versa',
        label: 'Santa Maria della Versa'
      },
      {
        value: 'Sant\'Angelo Lomellina',
        label: 'Sant\'Angelo Lomellina'
      },
      {
        value: 'San Zenone al Po',
        label: 'San Zenone al Po'
      },
      {
        value: 'Sartirana Lomellina',
        label: 'Sartirana Lomellina'
      },
      {
        value: 'Scaldasole',
        label: 'Scaldasole'
      },
      {
        value: 'Semiana',
        label: 'Semiana'
      },
      {
        value: 'Silvano Pietra',
        label: 'Silvano Pietra'
      },
      {
        value: 'Siziano',
        label: 'Siziano'
      },
      {
        value: 'Sommo',
        label: 'Sommo'
      },
      {
        value: 'Spessa',
        label: 'Spessa'
      },
      {
        value: 'Stradella',
        label: 'Stradella'
      },
      {
        value: 'Suardi',
        label: 'Suardi'
      },
      {
        value: 'Torrazza Coste',
        label: 'Torrazza Coste'
      },
      {
        value: 'Torre Beretti e Castellaro',
        label: 'Torre Beretti e Castellaro'
      },
      {
        value: 'Torre d\'Arese',
        label: 'Torre d\'Arese'
      },
      {
        value: 'Torre de\' Negri',
        label: 'Torre de\' Negri'
      },
      {
        value: 'Torre d\'Isola',
        label: 'Torre d\'Isola'
      },
      {
        value: 'Torrevecchia Pia',
        label: 'Torrevecchia Pia'
      },
      {
        value: 'Torricella Verzate',
        label: 'Torricella Verzate'
      },
      {
        value: 'Travacò Siccomario',
        label: 'Travacò Siccomario'
      },
      {
        value: 'Trivolzio',
        label: 'Trivolzio'
      },
      {
        value: 'Tromello',
        label: 'Tromello'
      },
      {
        value: 'Trovo',
        label: 'Trovo'
      },
      {
        value: 'Val di Nizza',
        label: 'Val di Nizza'
      },
      {
        value: 'Valeggio',
        label: 'Valeggio'
      },
      {
        value: 'Valle Lomellina',
        label: 'Valle Lomellina'
      },
      {
        value: 'Valle Salimbene',
        label: 'Valle Salimbene'
      },
      {
        value: 'Varzi',
        label: 'Varzi'
      },
      {
        value: 'Velezzo Lomellina',
        label: 'Velezzo Lomellina'
      },
      {
        value: 'Vellezzo Bellini',
        label: 'Vellezzo Bellini'
      },
      {
        value: 'Verretto',
        label: 'Verretto'
      },
      {
        value: 'Verrua Po',
        label: 'Verrua Po'
      },
      {
        value: 'Vidigulfo',
        label: 'Vidigulfo'
      },
      {
        value: 'Vigevano',
        label: 'Vigevano'
      },
      {
        value: 'Villa Biscossi',
        label: 'Villa Biscossi'
      },
      {
        value: 'Villanova d\'Ardenghi',
        label: 'Villanova d\'Ardenghi'
      },
      {
        value: 'Villanterio',
        label: 'Villanterio'
      },
      {
        value: 'Vistarino',
        label: 'Vistarino'
      },
      {
        value: 'Voghera',
        label: 'Voghera'
      },
      {
        value: 'Volpara',
        label: 'Volpara'
      },
      {
        value: 'Zavattarello',
        label: 'Zavattarello'
      },
      {
        value: 'Zeccone',
        label: 'Zeccone'
      },
      {
        value: 'Zeme',
        label: 'Zeme'
      },
      {
        value: 'Zenevredo',
        label: 'Zenevredo'
      },
      {
        value: 'Zerbo',
        label: 'Zerbo'
      },
      {
        value: 'Zerbolò',
        label: 'Zerbolò'
      },
      {
        value: 'Zinasco',
        label: 'Zinasco'
      },
      {
        value: 'Cornale e Bastida',
        label: 'Cornale e Bastida'
      },
      {
        value: 'Corteolona e Genzone',
        label: 'Corteolona e Genzone'
      },
      {
        value: 'Colli Verdi',
        label: 'Colli Verdi'
      },
      {
        value: 'Acquanegra Cremonese',
        label: 'Acquanegra Cremonese'
      },
      {
        value: 'Agnadello',
        label: 'Agnadello'
      },
      {
        value: 'Annicco',
        label: 'Annicco'
      },
      {
        value: 'Azzanello',
        label: 'Azzanello'
      },
      {
        value: 'Bagnolo Cremasco',
        label: 'Bagnolo Cremasco'
      },
      {
        value: 'Bonemerse',
        label: 'Bonemerse'
      },
      {
        value: 'Bordolano',
        label: 'Bordolano'
      },
      {
        value: 'Calvatone',
        label: 'Calvatone'
      },
      {
        value: 'Camisano',
        label: 'Camisano'
      },
      {
        value: 'Campagnola Cremasca',
        label: 'Campagnola Cremasca'
      },
      {
        value: 'Capergnanica',
        label: 'Capergnanica'
      },
      {
        value: 'Cappella Cantone',
        label: 'Cappella Cantone'
      },
      {
        value: 'Cappella de\' Picenardi',
        label: 'Cappella de\' Picenardi'
      },
      {
        value: 'Capralba',
        label: 'Capralba'
      },
      {
        value: 'Casalbuttano ed Uniti',
        label: 'Casalbuttano ed Uniti'
      },
      {
        value: 'Casale Cremasco-Vidolasco',
        label: 'Casale Cremasco-Vidolasco'
      },
      {
        value: 'Casaletto Ceredano',
        label: 'Casaletto Ceredano'
      },
      {
        value: 'Casaletto di Sopra',
        label: 'Casaletto di Sopra'
      },
      {
        value: 'Casaletto Vaprio',
        label: 'Casaletto Vaprio'
      },
      {
        value: 'Casalmaggiore',
        label: 'Casalmaggiore'
      },
      {
        value: 'Casalmorano',
        label: 'Casalmorano'
      },
      {
        value: 'Casteldidone',
        label: 'Casteldidone'
      },
      {
        value: 'Castel Gabbiano',
        label: 'Castel Gabbiano'
      },
      {
        value: 'Castelleone',
        label: 'Castelleone'
      },
      {
        value: 'Castelverde',
        label: 'Castelverde'
      },
      {
        value: 'Castelvisconti',
        label: 'Castelvisconti'
      },
      {
        value: 'Cella Dati',
        label: 'Cella Dati'
      },
      {
        value: 'Chieve',
        label: 'Chieve'
      },
      {
        value: 'Cicognolo',
        label: 'Cicognolo'
      },
      {
        value: 'Cingia de\' Botti',
        label: 'Cingia de\' Botti'
      },
      {
        value: 'Corte de\' Cortesi con Cignone',
        label: 'Corte de\' Cortesi con Cignone'
      },
      {
        value: 'Corte de\' Frati',
        label: 'Corte de\' Frati'
      },
      {
        value: 'Credera Rubbiano',
        label: 'Credera Rubbiano'
      },
      {
        value: 'Crema',
        label: 'Crema'
      },
      {
        value: 'Cremona',
        label: 'Cremona'
      },
      {
        value: 'Cremosano',
        label: 'Cremosano'
      },
      {
        value: 'Crotta d\'Adda',
        label: 'Crotta d\'Adda'
      },
      {
        value: 'Cumignano sul Naviglio',
        label: 'Cumignano sul Naviglio'
      },
      {
        value: 'Derovere',
        label: 'Derovere'
      },
      {
        value: 'Dovera',
        label: 'Dovera'
      },
      {
        value: 'Fiesco',
        label: 'Fiesco'
      },
      {
        value: 'Formigara',
        label: 'Formigara'
      },
      {
        value: 'Gabbioneta-Binanuova',
        label: 'Gabbioneta-Binanuova'
      },
      {
        value: 'Gadesco-Pieve Delmona',
        label: 'Gadesco-Pieve Delmona'
      },
      {
        value: 'Genivolta',
        label: 'Genivolta'
      },
      {
        value: 'Gerre de\' Caprioli',
        label: 'Gerre de\' Caprioli'
      },
      {
        value: 'Gombito',
        label: 'Gombito'
      },
      {
        value: 'Grontardo',
        label: 'Grontardo'
      },
      {
        value: 'Grumello Cremonese ed Uniti',
        label: 'Grumello Cremonese ed Uniti'
      },
      {
        value: 'Gussola',
        label: 'Gussola'
      },
      {
        value: 'Isola Dovarese',
        label: 'Isola Dovarese'
      },
      {
        value: 'Izano',
        label: 'Izano'
      },
      {
        value: 'Madignano',
        label: 'Madignano'
      },
      {
        value: 'Malagnino',
        label: 'Malagnino'
      },
      {
        value: 'Martignana di Po',
        label: 'Martignana di Po'
      },
      {
        value: 'Monte Cremasco',
        label: 'Monte Cremasco'
      },
      {
        value: 'Montodine',
        label: 'Montodine'
      },
      {
        value: 'Moscazzano',
        label: 'Moscazzano'
      },
      {
        value: 'Motta Baluffi',
        label: 'Motta Baluffi'
      },
      {
        value: 'Offanengo',
        label: 'Offanengo'
      },
      {
        value: 'Olmeneta',
        label: 'Olmeneta'
      },
      {
        value: 'Ostiano',
        label: 'Ostiano'
      },
      {
        value: 'Paderno Ponchielli',
        label: 'Paderno Ponchielli'
      },
      {
        value: 'Palazzo Pignano',
        label: 'Palazzo Pignano'
      },
      {
        value: 'Pandino',
        label: 'Pandino'
      },
      {
        value: 'Persico Dosimo',
        label: 'Persico Dosimo'
      },
      {
        value: 'Pescarolo ed Uniti',
        label: 'Pescarolo ed Uniti'
      },
      {
        value: 'Pessina Cremonese',
        label: 'Pessina Cremonese'
      },
      {
        value: 'Pianengo',
        label: 'Pianengo'
      },
      {
        value: 'Pieranica',
        label: 'Pieranica'
      },
      {
        value: 'Pieve d\'Olmi',
        label: 'Pieve d\'Olmi'
      },
      {
        value: 'Pieve San Giacomo',
        label: 'Pieve San Giacomo'
      },
      {
        value: 'Pizzighettone',
        label: 'Pizzighettone'
      },
      {
        value: 'Pozzaglio ed Uniti',
        label: 'Pozzaglio ed Uniti'
      },
      {
        value: 'Quintano',
        label: 'Quintano'
      },
      {
        value: 'Ricengo',
        label: 'Ricengo'
      },
      {
        value: 'Ripalta Arpina',
        label: 'Ripalta Arpina'
      },
      {
        value: 'Ripalta Cremasca',
        label: 'Ripalta Cremasca'
      },
      {
        value: 'Ripalta Guerina',
        label: 'Ripalta Guerina'
      },
      {
        value: 'Rivarolo del Re ed Uniti',
        label: 'Rivarolo del Re ed Uniti'
      },
      {
        value: 'Rivolta d\'Adda',
        label: 'Rivolta d\'Adda'
      },
      {
        value: 'Robecco d\'Oglio',
        label: 'Robecco d\'Oglio'
      },
      {
        value: 'Romanengo',
        label: 'Romanengo'
      },
      {
        value: 'Salvirola',
        label: 'Salvirola'
      },
      {
        value: 'San Bassano',
        label: 'San Bassano'
      },
      {
        value: 'San Daniele Po',
        label: 'San Daniele Po'
      },
      {
        value: 'San Giovanni in Croce',
        label: 'San Giovanni in Croce'
      },
      {
        value: 'San Martino del Lago',
        label: 'San Martino del Lago'
      },
      {
        value: 'Scandolara Ravara',
        label: 'Scandolara Ravara'
      },
      {
        value: 'Scandolara Ripa d\'Oglio',
        label: 'Scandolara Ripa d\'Oglio'
      },
      {
        value: 'Sergnano',
        label: 'Sergnano'
      },
      {
        value: 'Sesto ed Uniti',
        label: 'Sesto ed Uniti'
      },
      {
        value: 'Solarolo Rainerio',
        label: 'Solarolo Rainerio'
      },
      {
        value: 'Soncino',
        label: 'Soncino'
      },
      {
        value: 'Soresina',
        label: 'Soresina'
      },
      {
        value: 'Sospiro',
        label: 'Sospiro'
      },
      {
        value: 'Spinadesco',
        label: 'Spinadesco'
      },
      {
        value: 'Spineda',
        label: 'Spineda'
      },
      {
        value: 'Spino d\'Adda',
        label: 'Spino d\'Adda'
      },
      {
        value: 'Stagno Lombardo',
        label: 'Stagno Lombardo'
      },
      {
        value: 'Ticengo',
        label: 'Ticengo'
      },
      {
        value: 'Torlino Vimercati',
        label: 'Torlino Vimercati'
      },
      {
        value: 'Tornata',
        label: 'Tornata'
      },
      {
        value: 'Torre de\' Picenardi',
        label: 'Torre de\' Picenardi'
      },
      {
        value: 'Torricella del Pizzo',
        label: 'Torricella del Pizzo'
      },
      {
        value: 'Trescore Cremasco',
        label: 'Trescore Cremasco'
      },
      {
        value: 'Trigolo',
        label: 'Trigolo'
      },
      {
        value: 'Vaiano Cremasco',
        label: 'Vaiano Cremasco'
      },
      {
        value: 'Vailate',
        label: 'Vailate'
      },
      {
        value: 'Vescovato',
        label: 'Vescovato'
      },
      {
        value: 'Volongo',
        label: 'Volongo'
      },
      {
        value: 'Voltido',
        label: 'Voltido'
      },
      {
        value: 'Piadena Drizzona',
        label: 'Piadena Drizzona'
      },
      {
        value: 'Acquanegra sul Chiese',
        label: 'Acquanegra sul Chiese'
      },
      {
        value: 'Asola',
        label: 'Asola'
      },
      {
        value: 'Bagnolo San Vito',
        label: 'Bagnolo San Vito'
      },
      {
        value: 'Bozzolo',
        label: 'Bozzolo'
      },
      {
        value: 'Canneto sull\'Oglio',
        label: 'Canneto sull\'Oglio'
      },
      {
        value: 'Casalmoro',
        label: 'Casalmoro'
      },
      {
        value: 'Casaloldo',
        label: 'Casaloldo'
      },
      {
        value: 'Casalromano',
        label: 'Casalromano'
      },
      {
        value: 'Castelbelforte',
        label: 'Castelbelforte'
      },
      {
        value: 'Castel d\'Ario',
        label: 'Castel d\'Ario'
      },
      {
        value: 'Castel Goffredo',
        label: 'Castel Goffredo'
      },
      {
        value: 'Castellucchio',
        label: 'Castellucchio'
      },
      {
        value: 'Castiglione delle Stiviere',
        label: 'Castiglione delle Stiviere'
      },
      {
        value: 'Cavriana',
        label: 'Cavriana'
      },
      {
        value: 'Ceresara',
        label: 'Ceresara'
      },
      {
        value: 'Commessaggio',
        label: 'Commessaggio'
      },
      {
        value: 'Curtatone',
        label: 'Curtatone'
      },
      {
        value: 'Dosolo',
        label: 'Dosolo'
      },
      {
        value: 'Gazoldo degli Ippoliti',
        label: 'Gazoldo degli Ippoliti'
      },
      {
        value: 'Gazzuolo',
        label: 'Gazzuolo'
      },
      {
        value: 'Goito',
        label: 'Goito'
      },
      {
        value: 'Gonzaga',
        label: 'Gonzaga'
      },
      {
        value: 'Guidizzolo',
        label: 'Guidizzolo'
      },
      {
        value: 'Magnacavallo',
        label: 'Magnacavallo'
      },
      {
        value: 'Mantova',
        label: 'Mantova'
      },
      {
        value: 'Marcaria',
        label: 'Marcaria'
      },
      {
        value: 'Mariana Mantovana',
        label: 'Mariana Mantovana'
      },
      {
        value: 'Marmirolo',
        label: 'Marmirolo'
      },
      {
        value: 'Medole',
        label: 'Medole'
      },
      {
        value: 'Moglia',
        label: 'Moglia'
      },
      {
        value: 'Monzambano',
        label: 'Monzambano'
      },
      {
        value: 'Motteggiana',
        label: 'Motteggiana'
      },
      {
        value: 'Ostiglia',
        label: 'Ostiglia'
      },
      {
        value: 'Pegognaga',
        label: 'Pegognaga'
      },
      {
        value: 'Piubega',
        label: 'Piubega'
      },
      {
        value: 'Poggio Rusco',
        label: 'Poggio Rusco'
      },
      {
        value: 'Pomponesco',
        label: 'Pomponesco'
      },
      {
        value: 'Ponti sul Mincio',
        label: 'Ponti sul Mincio'
      },
      {
        value: 'Porto Mantovano',
        label: 'Porto Mantovano'
      },
      {
        value: 'Quingentole',
        label: 'Quingentole'
      },
      {
        value: 'Quistello',
        label: 'Quistello'
      },
      {
        value: 'Redondesco',
        label: 'Redondesco'
      },
      {
        value: 'Rivarolo Mantovano',
        label: 'Rivarolo Mantovano'
      },
      {
        value: 'Rodigo',
        label: 'Rodigo'
      },
      {
        value: 'Roncoferraro',
        label: 'Roncoferraro'
      },
      {
        value: 'Roverbella',
        label: 'Roverbella'
      },
      {
        value: 'Sabbioneta',
        label: 'Sabbioneta'
      },
      {
        value: 'San Benedetto Po',
        label: 'San Benedetto Po'
      },
      {
        value: 'San Giacomo delle Segnate',
        label: 'San Giacomo delle Segnate'
      },
      {
        value: 'San Giorgio Bigarello',
        label: 'San Giorgio Bigarello'
      },
      {
        value: 'San Giovanni del Dosso',
        label: 'San Giovanni del Dosso'
      },
      {
        value: 'San Martino dall\'Argine',
        label: 'San Martino dall\'Argine'
      },
      {
        value: 'Schivenoglia',
        label: 'Schivenoglia'
      },
      {
        value: 'Sermide e Felonica',
        label: 'Sermide e Felonica'
      },
      {
        value: 'Serravalle a Po',
        label: 'Serravalle a Po'
      },
      {
        value: 'Solferino',
        label: 'Solferino'
      },
      {
        value: 'Sustinente',
        label: 'Sustinente'
      },
      {
        value: 'Suzzara',
        label: 'Suzzara'
      },
      {
        value: 'Viadana',
        label: 'Viadana'
      },
      {
        value: 'Villimpenta',
        label: 'Villimpenta'
      },
      {
        value: 'Volta Mantovana',
        label: 'Volta Mantovana'
      },
      {
        value: 'Borgo Virgilio',
        label: 'Borgo Virgilio'
      },
      {
        value: 'Borgo Mantovano',
        label: 'Borgo Mantovano'
      },
      {
        value: 'Borgocarbonara',
        label: 'Borgocarbonara'
      },
      {
        value: 'Aldino',
        label: 'Aldino'
      },
      {
        value: 'Andriano',
        label: 'Andriano'
      },
      {
        value: 'Anterivo',
        label: 'Anterivo'
      },
      {
        value: 'Appiano sulla strada del vino',
        label: 'Appiano sulla strada del vino'
      },
      {
        value: 'Avelengo',
        label: 'Avelengo'
      },
      {
        value: 'Badia',
        label: 'Badia'
      },
      {
        value: 'Barbiano',
        label: 'Barbiano'
      },
      {
        value: 'Bolzano',
        label: 'Bolzano'
      },
      {
        value: 'Braies',
        label: 'Braies'
      },
      {
        value: 'Brennero',
        label: 'Brennero'
      },
      {
        value: 'Bressanone',
        label: 'Bressanone'
      },
      {
        value: 'Bronzolo',
        label: 'Bronzolo'
      },
      {
        value: 'Brunico',
        label: 'Brunico'
      },
      {
        value: 'Caines',
        label: 'Caines'
      },
      {
        value: 'Caldaro sulla strada del vino',
        label: 'Caldaro sulla strada del vino'
      },
      {
        value: 'Campo di Trens',
        label: 'Campo di Trens'
      },
      {
        value: 'Campo Tures',
        label: 'Campo Tures'
      },
      {
        value: 'Castelbello-Ciardes',
        label: 'Castelbello-Ciardes'
      },
      {
        value: 'Castelrotto',
        label: 'Castelrotto'
      },
      {
        value: 'Cermes',
        label: 'Cermes'
      },
      {
        value: 'Chienes',
        label: 'Chienes'
      },
      {
        value: 'Chiusa',
        label: 'Chiusa'
      },
      {
        value: 'Cornedo all\'Isarco',
        label: 'Cornedo all\'Isarco'
      },
      {
        value: 'Cortaccia sulla strada del vino',
        label: 'Cortaccia sulla strada del vino'
      },
      {
        value: 'Cortina sulla strada del vino',
        label: 'Cortina sulla strada del vino'
      },
      {
        value: 'Corvara in Badia',
        label: 'Corvara in Badia'
      },
      {
        value: 'Curon Venosta',
        label: 'Curon Venosta'
      },
      {
        value: 'Dobbiaco',
        label: 'Dobbiaco'
      },
      {
        value: 'Egna',
        label: 'Egna'
      },
      {
        value: 'Falzes',
        label: 'Falzes'
      },
      {
        value: 'Fiè allo Sciliar',
        label: 'Fiè allo Sciliar'
      },
      {
        value: 'Fortezza',
        label: 'Fortezza'
      },
      {
        value: 'Funes',
        label: 'Funes'
      },
      {
        value: 'Gais',
        label: 'Gais'
      },
      {
        value: 'Gargazzone',
        label: 'Gargazzone'
      },
      {
        value: 'Glorenza',
        label: 'Glorenza'
      },
      {
        value: 'Laces',
        label: 'Laces'
      },
      {
        value: 'Lagundo',
        label: 'Lagundo'
      },
      {
        value: 'Laion',
        label: 'Laion'
      },
      {
        value: 'Laives',
        label: 'Laives'
      },
      {
        value: 'Lana',
        label: 'Lana'
      },
      {
        value: 'Lasa',
        label: 'Lasa'
      },
      {
        value: 'Lauregno',
        label: 'Lauregno'
      },
      {
        value: 'Luson',
        label: 'Luson'
      },
      {
        value: 'Magrè sulla strada del vino',
        label: 'Magrè sulla strada del vino'
      },
      {
        value: 'Malles Venosta',
        label: 'Malles Venosta'
      },
      {
        value: 'Marebbe',
        label: 'Marebbe'
      },
      {
        value: 'Marlengo',
        label: 'Marlengo'
      },
      {
        value: 'Martello',
        label: 'Martello'
      },
      {
        value: 'Meltina',
        label: 'Meltina'
      },
      {
        value: 'Merano',
        label: 'Merano'
      },
      {
        value: 'Monguelfo-Tesido',
        label: 'Monguelfo-Tesido'
      },
      {
        value: 'Montagna sulla Strada del Vino',
        label: 'Montagna sulla Strada del Vino'
      },
      {
        value: 'Moso in Passiria',
        label: 'Moso in Passiria'
      },
      {
        value: 'Nalles',
        label: 'Nalles'
      },
      {
        value: 'Naturno',
        label: 'Naturno'
      },
      {
        value: 'Naz-Sciaves',
        label: 'Naz-Sciaves'
      },
      {
        value: 'Nova Levante',
        label: 'Nova Levante'
      },
      {
        value: 'Nova Ponente',
        label: 'Nova Ponente'
      },
      {
        value: 'Ora',
        label: 'Ora'
      },
      {
        value: 'Ortisei',
        label: 'Ortisei'
      },
      {
        value: 'Parcines',
        label: 'Parcines'
      },
      {
        value: 'Perca',
        label: 'Perca'
      },
      {
        value: 'Plaus',
        label: 'Plaus'
      },
      {
        value: 'Ponte Gardena',
        label: 'Ponte Gardena'
      },
      {
        value: 'Postal',
        label: 'Postal'
      },
      {
        value: 'Prato allo Stelvio',
        label: 'Prato allo Stelvio'
      },
      {
        value: 'Predoi',
        label: 'Predoi'
      },
      {
        value: 'Proves',
        label: 'Proves'
      },
      {
        value: 'Racines',
        label: 'Racines'
      },
      {
        value: 'Rasun-Anterselva',
        label: 'Rasun-Anterselva'
      },
      {
        value: 'Renon',
        label: 'Renon'
      },
      {
        value: 'Rifiano',
        label: 'Rifiano'
      },
      {
        value: 'Rio di Pusteria',
        label: 'Rio di Pusteria'
      },
      {
        value: 'Rodengo',
        label: 'Rodengo'
      },
      {
        value: 'Salorno sulla strada del vino',
        label: 'Salorno sulla strada del vino'
      },
      {
        value: 'San Candido',
        label: 'San Candido'
      },
      {
        value: 'San Genesio Atesino',
        label: 'San Genesio Atesino'
      },
      {
        value: 'San Leonardo in Passiria',
        label: 'San Leonardo in Passiria'
      },
      {
        value: 'San Lorenzo di Sebato',
        label: 'San Lorenzo di Sebato'
      },
      {
        value: 'San Martino in Badia',
        label: 'San Martino in Badia'
      },
      {
        value: 'San Martino in Passiria',
        label: 'San Martino in Passiria'
      },
      {
        value: 'San Pancrazio',
        label: 'San Pancrazio'
      },
      {
        value: 'Santa Cristina Valgardena',
        label: 'Santa Cristina Valgardena'
      },
      {
        value: 'Sarentino',
        label: 'Sarentino'
      },
      {
        value: 'Scena',
        label: 'Scena'
      },
      {
        value: 'Selva dei Molini',
        label: 'Selva dei Molini'
      },
      {
        value: 'Selva di Val Gardena',
        label: 'Selva di Val Gardena'
      },
      {
        value: 'Senales',
        label: 'Senales'
      },
      {
        value: 'Sesto',
        label: 'Sesto'
      },
      {
        value: 'Silandro',
        label: 'Silandro'
      },
      {
        value: 'Sluderno',
        label: 'Sluderno'
      },
      {
        value: 'Stelvio',
        label: 'Stelvio'
      },
      {
        value: 'Terento',
        label: 'Terento'
      },
      {
        value: 'Terlano',
        label: 'Terlano'
      },
      {
        value: 'Termeno sulla strada del vino',
        label: 'Termeno sulla strada del vino'
      },
      {
        value: 'Tesimo',
        label: 'Tesimo'
      },
      {
        value: 'Tires',
        label: 'Tires'
      },
      {
        value: 'Tirolo',
        label: 'Tirolo'
      },
      {
        value: 'Trodena nel parco naturale',
        label: 'Trodena nel parco naturale'
      },
      {
        value: 'Tubre',
        label: 'Tubre'
      },
      {
        value: 'Ultimo',
        label: 'Ultimo'
      },
      {
        value: 'Vadena',
        label: 'Vadena'
      },
      {
        value: 'Valdaora',
        label: 'Valdaora'
      },
      {
        value: 'Val di Vizze',
        label: 'Val di Vizze'
      },
      {
        value: 'Valle Aurina',
        label: 'Valle Aurina'
      },
      {
        value: 'Valle di Casies',
        label: 'Valle di Casies'
      },
      {
        value: 'Vandoies',
        label: 'Vandoies'
      },
      {
        value: 'Varna',
        label: 'Varna'
      },
      {
        value: 'Verano',
        label: 'Verano'
      },
      {
        value: 'Villabassa',
        label: 'Villabassa'
      },
      {
        value: 'Villandro',
        label: 'Villandro'
      },
      {
        value: 'Vipiteno',
        label: 'Vipiteno'
      },
      {
        value: 'Velturno',
        label: 'Velturno'
      },
      {
        value: 'La Valle',
        label: 'La Valle'
      },
      {
        value: 'Senale-San Felice',
        label: 'Senale-San Felice'
      },
      {
        value: 'Ala',
        label: 'Ala'
      },
      {
        value: 'Albiano',
        label: 'Albiano'
      },
      {
        value: 'Aldeno',
        label: 'Aldeno'
      },
      {
        value: 'Andalo',
        label: 'Andalo'
      },
      {
        value: 'Arco',
        label: 'Arco'
      },
      {
        value: 'Avio',
        label: 'Avio'
      },
      {
        value: 'Baselga di Pinè',
        label: 'Baselga di Pinè'
      },
      {
        value: 'Bedollo',
        label: 'Bedollo'
      },
      {
        value: 'Besenello',
        label: 'Besenello'
      },
      {
        value: 'Bieno',
        label: 'Bieno'
      },
      {
        value: 'Bleggio Superiore',
        label: 'Bleggio Superiore'
      },
      {
        value: 'Bocenago',
        label: 'Bocenago'
      },
      {
        value: 'Bondone',
        label: 'Bondone'
      },
      {
        value: 'Borgo Valsugana',
        label: 'Borgo Valsugana'
      },
      {
        value: 'Brentonico',
        label: 'Brentonico'
      },
      {
        value: 'Bresimo',
        label: 'Bresimo'
      },
      {
        value: 'Caderzone Terme',
        label: 'Caderzone Terme'
      },
      {
        value: 'Calceranica al Lago',
        label: 'Calceranica al Lago'
      },
      {
        value: 'Caldes',
        label: 'Caldes'
      },
      {
        value: 'Caldonazzo',
        label: 'Caldonazzo'
      },
      {
        value: 'Calliano',
        label: 'Calliano'
      },
      {
        value: 'Campitello di Fassa',
        label: 'Campitello di Fassa'
      },
      {
        value: 'Campodenno',
        label: 'Campodenno'
      },
      {
        value: 'Canal San Bovo',
        label: 'Canal San Bovo'
      },
      {
        value: 'Canazei',
        label: 'Canazei'
      },
      {
        value: 'Capriana',
        label: 'Capriana'
      },
      {
        value: 'Carisolo',
        label: 'Carisolo'
      },
      {
        value: 'Carzano',
        label: 'Carzano'
      },
      {
        value: 'Castel Condino',
        label: 'Castel Condino'
      },
      {
        value: 'Castello-Molina di Fiemme',
        label: 'Castello-Molina di Fiemme'
      },
      {
        value: 'Castello Tesino',
        label: 'Castello Tesino'
      },
      {
        value: 'Castelnuovo',
        label: 'Castelnuovo'
      },
      {
        value: 'Cavalese',
        label: 'Cavalese'
      },
      {
        value: 'Cavareno',
        label: 'Cavareno'
      },
      {
        value: 'Cavedago',
        label: 'Cavedago'
      },
      {
        value: 'Cavedine',
        label: 'Cavedine'
      },
      {
        value: 'Cavizzana',
        label: 'Cavizzana'
      },
      {
        value: 'Cimone',
        label: 'Cimone'
      },
      {
        value: 'Cinte Tesino',
        label: 'Cinte Tesino'
      },
      {
        value: 'Cis',
        label: 'Cis'
      },
      {
        value: 'Civezzano',
        label: 'Civezzano'
      },
      {
        value: 'Cles',
        label: 'Cles'
      },
      {
        value: 'Commezzadura',
        label: 'Commezzadura'
      },
      {
        value: 'Croviana',
        label: 'Croviana'
      },
      {
        value: 'Dambel',
        label: 'Dambel'
      },
      {
        value: 'Denno',
        label: 'Denno'
      },
      {
        value: 'Drena',
        label: 'Drena'
      },
      {
        value: 'Dro',
        label: 'Dro'
      },
      {
        value: 'Fai della Paganella',
        label: 'Fai della Paganella'
      },
      {
        value: 'Fiavè',
        label: 'Fiavè'
      },
      {
        value: 'Fierozzo',
        label: 'Fierozzo'
      },
      {
        value: 'Folgaria',
        label: 'Folgaria'
      },
      {
        value: 'Fornace',
        label: 'Fornace'
      },
      {
        value: 'Frassilongo',
        label: 'Frassilongo'
      },
      {
        value: 'Garniga Terme',
        label: 'Garniga Terme'
      },
      {
        value: 'Giovo',
        label: 'Giovo'
      },
      {
        value: 'Giustino',
        label: 'Giustino'
      },
      {
        value: 'Grigno',
        label: 'Grigno'
      },
      {
        value: 'Imer',
        label: 'Imer'
      },
      {
        value: 'Isera',
        label: 'Isera'
      },
      {
        value: 'Lavarone',
        label: 'Lavarone'
      },
      {
        value: 'Lavis',
        label: 'Lavis'
      },
      {
        value: 'Levico Terme',
        label: 'Levico Terme'
      },
      {
        value: 'Lona-Lases',
        label: 'Lona-Lases'
      },
      {
        value: 'Luserna',
        label: 'Luserna'
      },
      {
        value: 'Malé',
        label: 'Malé'
      },
      {
        value: 'Massimeno',
        label: 'Massimeno'
      },
      {
        value: 'Mazzin',
        label: 'Mazzin'
      },
      {
        value: 'Mezzana',
        label: 'Mezzana'
      },
      {
        value: 'Mezzano',
        label: 'Mezzano'
      },
      {
        value: 'Mezzocorona',
        label: 'Mezzocorona'
      },
      {
        value: 'Mezzolombardo',
        label: 'Mezzolombardo'
      },
      {
        value: 'Moena',
        label: 'Moena'
      },
      {
        value: 'Molveno',
        label: 'Molveno'
      },
      {
        value: 'Mori',
        label: 'Mori'
      },
      {
        value: 'Nago-Torbole',
        label: 'Nago-Torbole'
      },
      {
        value: 'Nogaredo',
        label: 'Nogaredo'
      },
      {
        value: 'Nomi',
        label: 'Nomi'
      },
      {
        value: 'Novaledo',
        label: 'Novaledo'
      },
      {
        value: 'Ospedaletto',
        label: 'Ospedaletto'
      },
      {
        value: 'Ossana',
        label: 'Ossana'
      },
      {
        value: 'Palù del Fersina',
        label: 'Palù del Fersina'
      },
      {
        value: 'Panchià',
        label: 'Panchià'
      },
      {
        value: 'Ronzo-Chienis',
        label: 'Ronzo-Chienis'
      },
      {
        value: 'Peio',
        label: 'Peio'
      },
      {
        value: 'Pellizzano',
        label: 'Pellizzano'
      },
      {
        value: 'Pelugo',
        label: 'Pelugo'
      },
      {
        value: 'Pergine Valsugana',
        label: 'Pergine Valsugana'
      },
      {
        value: 'Pieve Tesino',
        label: 'Pieve Tesino'
      },
      {
        value: 'Pinzolo',
        label: 'Pinzolo'
      },
      {
        value: 'Pomarolo',
        label: 'Pomarolo'
      },
      {
        value: 'Predazzo',
        label: 'Predazzo'
      },
      {
        value: 'Rabbi',
        label: 'Rabbi'
      },
      {
        value: 'Riva del Garda',
        label: 'Riva del Garda'
      },
      {
        value: 'Romeno',
        label: 'Romeno'
      },
      {
        value: 'Roncegno Terme',
        label: 'Roncegno Terme'
      },
      {
        value: 'Ronchi Valsugana',
        label: 'Ronchi Valsugana'
      },
      {
        value: 'Ronzone',
        label: 'Ronzone'
      },
      {
        value: 'Roverè della Luna',
        label: 'Roverè della Luna'
      },
      {
        value: 'Rovereto',
        label: 'Rovereto'
      },
      {
        value: 'Ruffrè-Mendola',
        label: 'Ruffrè-Mendola'
      },
      {
        value: 'Rumo',
        label: 'Rumo'
      },
      {
        value: 'Sagron Mis',
        label: 'Sagron Mis'
      },
      {
        value: 'San Michele all\'Adige',
        label: 'San Michele all\'Adige'
      },
      {
        value: 'Sant\'Orsola Terme',
        label: 'Sant\'Orsola Terme'
      },
      {
        value: 'Sanzeno',
        label: 'Sanzeno'
      },
      {
        value: 'Sarnonico',
        label: 'Sarnonico'
      },
      {
        value: 'Scurelle',
        label: 'Scurelle'
      },
      {
        value: 'Segonzano',
        label: 'Segonzano'
      },
      {
        value: 'Sfruz',
        label: 'Sfruz'
      },
      {
        value: 'Soraga di Fassa',
        label: 'Soraga di Fassa'
      },
      {
        value: 'Sover',
        label: 'Sover'
      },
      {
        value: 'Spiazzo',
        label: 'Spiazzo'
      },
      {
        value: 'Spormaggiore',
        label: 'Spormaggiore'
      },
      {
        value: 'Sporminore',
        label: 'Sporminore'
      },
      {
        value: 'Stenico',
        label: 'Stenico'
      },
      {
        value: 'Storo',
        label: 'Storo'
      },
      {
        value: 'Strembo',
        label: 'Strembo'
      },
      {
        value: 'Telve',
        label: 'Telve'
      },
      {
        value: 'Telve di Sopra',
        label: 'Telve di Sopra'
      },
      {
        value: 'Tenna',
        label: 'Tenna'
      },
      {
        value: 'Tenno',
        label: 'Tenno'
      },
      {
        value: 'Terragnolo',
        label: 'Terragnolo'
      },
      {
        value: 'Terzolas',
        label: 'Terzolas'
      },
      {
        value: 'Tesero',
        label: 'Tesero'
      },
      {
        value: 'Tione di Trento',
        label: 'Tione di Trento'
      },
      {
        value: 'Ton',
        label: 'Ton'
      },
      {
        value: 'Torcegno',
        label: 'Torcegno'
      },
      {
        value: 'Trambileno',
        label: 'Trambileno'
      },
      {
        value: 'Trento',
        label: 'Trento'
      },
      {
        value: 'Valfloriana',
        label: 'Valfloriana'
      },
      {
        value: 'Vallarsa',
        label: 'Vallarsa'
      },
      {
        value: 'Vermiglio',
        label: 'Vermiglio'
      },
      {
        value: 'Vignola-Falesina',
        label: 'Vignola-Falesina'
      },
      {
        value: 'Villa Lagarina',
        label: 'Villa Lagarina'
      },
      {
        value: 'Volano',
        label: 'Volano'
      },
      {
        value: 'Ziano di Fiemme',
        label: 'Ziano di Fiemme'
      },
      {
        value: 'Comano Terme',
        label: 'Comano Terme'
      },
      {
        value: 'Ledro',
        label: 'Ledro'
      },
      {
        value: 'Predaia',
        label: 'Predaia'
      },
      {
        value: 'San Lorenzo Dorsino',
        label: 'San Lorenzo Dorsino'
      },
      {
        value: 'Valdaone',
        label: 'Valdaone'
      },
      {
        value: 'Dimaro Folgarida',
        label: 'Dimaro Folgarida'
      },
      {
        value: 'Pieve di Bono-Prezzo',
        label: 'Pieve di Bono-Prezzo'
      },
      {
        value: 'Altavalle',
        label: 'Altavalle'
      },
      {
        value: 'Altopiano della Vigolana',
        label: 'Altopiano della Vigolana'
      },
      {
        value: 'Amblar-Don',
        label: 'Amblar-Don'
      },
      {
        value: 'Borgo Chiese',
        label: 'Borgo Chiese'
      },
      {
        value: 'Borgo Lares',
        label: 'Borgo Lares'
      },
      {
        value: 'Castel Ivano',
        label: 'Castel Ivano'
      },
      {
        value: 'Cembra Lisignago',
        label: 'Cembra Lisignago'
      },
      {
        value: 'Contà',
        label: 'Contà'
      },
      {
        value: 'Madruzzo',
        label: 'Madruzzo'
      },
      {
        value: 'Porte di Rendena',
        label: 'Porte di Rendena'
      },
      {
        value: 'Primiero San Martino di Castrozza',
        label: 'Primiero San Martino di Castrozza'
      },
      {
        value: 'Sella Giudicarie',
        label: 'Sella Giudicarie'
      },
      {
        value: 'Tre Ville',
        label: 'Tre Ville'
      },
      {
        value: 'Vallelaghi',
        label: 'Vallelaghi'
      },
      {
        value: 'Ville d\'Anaunia',
        label: 'Ville d\'Anaunia'
      },
      {
        value: 'San Giovanni di Fassa',
        label: 'San Giovanni di Fassa'
      },
      {
        value: 'Terre d\'Adige',
        label: 'Terre d\'Adige'
      },
      {
        value: 'Borgo d\'Anaunia',
        label: 'Borgo d\'Anaunia'
      },
      {
        value: 'Novella',
        label: 'Novella'
      },
      {
        value: 'Ville di Fiemme',
        label: 'Ville di Fiemme'
      },
      {
        value: 'Affi',
        label: 'Affi'
      },
      {
        value: 'Albaredo d\'Adige',
        label: 'Albaredo d\'Adige'
      },
      {
        value: 'Angiari',
        label: 'Angiari'
      },
      {
        value: 'Arcole',
        label: 'Arcole'
      },
      {
        value: 'Badia Calavena',
        label: 'Badia Calavena'
      },
      {
        value: 'Bardolino',
        label: 'Bardolino'
      },
      {
        value: 'Belfiore',
        label: 'Belfiore'
      },
      {
        value: 'Bevilacqua',
        label: 'Bevilacqua'
      },
      {
        value: 'Bonavigo',
        label: 'Bonavigo'
      },
      {
        value: 'Boschi Sant\'Anna',
        label: 'Boschi Sant\'Anna'
      },
      {
        value: 'Bosco Chiesanuova',
        label: 'Bosco Chiesanuova'
      },
      {
        value: 'Bovolone',
        label: 'Bovolone'
      },
      {
        value: 'Brentino Belluno',
        label: 'Brentino Belluno'
      },
      {
        value: 'Brenzone sul Garda',
        label: 'Brenzone sul Garda'
      },
      {
        value: 'Bussolengo',
        label: 'Bussolengo'
      },
      {
        value: 'Buttapietra',
        label: 'Buttapietra'
      },
      {
        value: 'Caldiero',
        label: 'Caldiero'
      },
      {
        value: 'Caprino Veronese',
        label: 'Caprino Veronese'
      },
      {
        value: 'Casaleone',
        label: 'Casaleone'
      },
      {
        value: 'Castagnaro',
        label: 'Castagnaro'
      },
      {
        value: 'Castel d\'Azzano',
        label: 'Castel d\'Azzano'
      },
      {
        value: 'Castelnuovo del Garda',
        label: 'Castelnuovo del Garda'
      },
      {
        value: 'Cavaion Veronese',
        label: 'Cavaion Veronese'
      },
      {
        value: 'Cazzano di Tramigna',
        label: 'Cazzano di Tramigna'
      },
      {
        value: 'Cerea',
        label: 'Cerea'
      },
      {
        value: 'Cerro Veronese',
        label: 'Cerro Veronese'
      },
      {
        value: 'Cologna Veneta',
        label: 'Cologna Veneta'
      },
      {
        value: 'Colognola ai Colli',
        label: 'Colognola ai Colli'
      },
      {
        value: 'Concamarise',
        label: 'Concamarise'
      },
      {
        value: 'Costermano sul Garda',
        label: 'Costermano sul Garda'
      },
      {
        value: 'Dolcè',
        label: 'Dolcè'
      },
      {
        value: 'Erbè',
        label: 'Erbè'
      },
      {
        value: 'Erbezzo',
        label: 'Erbezzo'
      },
      {
        value: 'Ferrara di Monte Baldo',
        label: 'Ferrara di Monte Baldo'
      },
      {
        value: 'Fumane',
        label: 'Fumane'
      },
      {
        value: 'Garda',
        label: 'Garda'
      },
      {
        value: 'Gazzo Veronese',
        label: 'Gazzo Veronese'
      },
      {
        value: 'Grezzana',
        label: 'Grezzana'
      },
      {
        value: 'Illasi',
        label: 'Illasi'
      },
      {
        value: 'Isola della Scala',
        label: 'Isola della Scala'
      },
      {
        value: 'Isola Rizza',
        label: 'Isola Rizza'
      },
      {
        value: 'Lavagno',
        label: 'Lavagno'
      },
      {
        value: 'Lazise',
        label: 'Lazise'
      },
      {
        value: 'Legnago',
        label: 'Legnago'
      },
      {
        value: 'Malcesine',
        label: 'Malcesine'
      },
      {
        value: 'Marano di Valpolicella',
        label: 'Marano di Valpolicella'
      },
      {
        value: 'Mezzane di Sotto',
        label: 'Mezzane di Sotto'
      },
      {
        value: 'Minerbe',
        label: 'Minerbe'
      },
      {
        value: 'Montecchia di Crosara',
        label: 'Montecchia di Crosara'
      },
      {
        value: 'Monteforte d\'Alpone',
        label: 'Monteforte d\'Alpone'
      },
      {
        value: 'Mozzecane',
        label: 'Mozzecane'
      },
      {
        value: 'Negrar di Valpolicella',
        label: 'Negrar di Valpolicella'
      },
      {
        value: 'Nogara',
        label: 'Nogara'
      },
      {
        value: 'Nogarole Rocca',
        label: 'Nogarole Rocca'
      },
      {
        value: 'Oppeano',
        label: 'Oppeano'
      },
      {
        value: 'Palù',
        label: 'Palù'
      },
      {
        value: 'Pastrengo',
        label: 'Pastrengo'
      },
      {
        value: 'Pescantina',
        label: 'Pescantina'
      },
      {
        value: 'Peschiera del Garda',
        label: 'Peschiera del Garda'
      },
      {
        value: 'Povegliano Veronese',
        label: 'Povegliano Veronese'
      },
      {
        value: 'Pressana',
        label: 'Pressana'
      },
      {
        value: 'Rivoli Veronese',
        label: 'Rivoli Veronese'
      },
      {
        value: 'Roncà',
        label: 'Roncà'
      },
      {
        value: 'Ronco all\'Adige',
        label: 'Ronco all\'Adige'
      },
      {
        value: 'Roverchiara',
        label: 'Roverchiara'
      },
      {
        value: 'Roveredo di Guà',
        label: 'Roveredo di Guà'
      },
      {
        value: 'Roverè Veronese',
        label: 'Roverè Veronese'
      },
      {
        value: 'Salizzole',
        label: 'Salizzole'
      },
      {
        value: 'San Bonifacio',
        label: 'San Bonifacio'
      },
      {
        value: 'San Giovanni Ilarione',
        label: 'San Giovanni Ilarione'
      },
      {
        value: 'San Giovanni Lupatoto',
        label: 'San Giovanni Lupatoto'
      },
      {
        value: 'Sanguinetto',
        label: 'Sanguinetto'
      },
      {
        value: 'San Martino Buon Albergo',
        label: 'San Martino Buon Albergo'
      },
      {
        value: 'San Mauro di Saline',
        label: 'San Mauro di Saline'
      },
      {
        value: 'San Pietro di Morubio',
        label: 'San Pietro di Morubio'
      },
      {
        value: 'San Pietro in Cariano',
        label: 'San Pietro in Cariano'
      },
      {
        value: 'Sant\'Ambrogio di Valpolicella',
        label: 'Sant\'Ambrogio di Valpolicella'
      },
      {
        value: 'Sant\'Anna d\'Alfaedo',
        label: 'Sant\'Anna d\'Alfaedo'
      },
      {
        value: 'San Zeno di Montagna',
        label: 'San Zeno di Montagna'
      },
      {
        value: 'Selva di Progno',
        label: 'Selva di Progno'
      },
      {
        value: 'Soave',
        label: 'Soave'
      },
      {
        value: 'Sommacampagna',
        label: 'Sommacampagna'
      },
      {
        value: 'Sona',
        label: 'Sona'
      },
      {
        value: 'Sorgà',
        label: 'Sorgà'
      },
      {
        value: 'Terrazzo',
        label: 'Terrazzo'
      },
      {
        value: 'Torri del Benaco',
        label: 'Torri del Benaco'
      },
      {
        value: 'Tregnago',
        label: 'Tregnago'
      },
      {
        value: 'Trevenzuolo',
        label: 'Trevenzuolo'
      },
      {
        value: 'Valeggio sul Mincio',
        label: 'Valeggio sul Mincio'
      },
      {
        value: 'Velo Veronese',
        label: 'Velo Veronese'
      },
      {
        value: 'Verona',
        label: 'Verona'
      },
      {
        value: 'Veronella',
        label: 'Veronella'
      },
      {
        value: 'Vestenanova',
        label: 'Vestenanova'
      },
      {
        value: 'Vigasio',
        label: 'Vigasio'
      },
      {
        value: 'Villa Bartolomea',
        label: 'Villa Bartolomea'
      },
      {
        value: 'Villafranca di Verona',
        label: 'Villafranca di Verona'
      },
      {
        value: 'Zevio',
        label: 'Zevio'
      },
      {
        value: 'Zimella',
        label: 'Zimella'
      },
      {
        value: 'Agugliaro',
        label: 'Agugliaro'
      },
      {
        value: 'Albettone',
        label: 'Albettone'
      },
      {
        value: 'Alonte',
        label: 'Alonte'
      },
      {
        value: 'Altavilla Vicentina',
        label: 'Altavilla Vicentina'
      },
      {
        value: 'Altissimo',
        label: 'Altissimo'
      },
      {
        value: 'Arcugnano',
        label: 'Arcugnano'
      },
      {
        value: 'Arsiero',
        label: 'Arsiero'
      },
      {
        value: 'Arzignano',
        label: 'Arzignano'
      },
      {
        value: 'Asiago',
        label: 'Asiago'
      },
      {
        value: 'Asigliano Veneto',
        label: 'Asigliano Veneto'
      },
      {
        value: 'Bassano del Grappa',
        label: 'Bassano del Grappa'
      },
      {
        value: 'Bolzano Vicentino',
        label: 'Bolzano Vicentino'
      },
      {
        value: 'Breganze',
        label: 'Breganze'
      },
      {
        value: 'Brendola',
        label: 'Brendola'
      },
      {
        value: 'Bressanvido',
        label: 'Bressanvido'
      },
      {
        value: 'Brogliano',
        label: 'Brogliano'
      },
      {
        value: 'Caldogno',
        label: 'Caldogno'
      },
      {
        value: 'Caltrano',
        label: 'Caltrano'
      },
      {
        value: 'Calvene',
        label: 'Calvene'
      },
      {
        value: 'Camisano Vicentino',
        label: 'Camisano Vicentino'
      },
      {
        value: 'Campiglia dei Berici',
        label: 'Campiglia dei Berici'
      },
      {
        value: 'Carrè',
        label: 'Carrè'
      },
      {
        value: 'Cartigliano',
        label: 'Cartigliano'
      },
      {
        value: 'Cassola',
        label: 'Cassola'
      },
      {
        value: 'Castegnero',
        label: 'Castegnero'
      },
      {
        value: 'Castelgomberto',
        label: 'Castelgomberto'
      },
      {
        value: 'Chiampo',
        label: 'Chiampo'
      },
      {
        value: 'Chiuppano',
        label: 'Chiuppano'
      },
      {
        value: 'Cogollo del Cengio',
        label: 'Cogollo del Cengio'
      },
      {
        value: 'Cornedo Vicentino',
        label: 'Cornedo Vicentino'
      },
      {
        value: 'Costabissara',
        label: 'Costabissara'
      },
      {
        value: 'Creazzo',
        label: 'Creazzo'
      },
      {
        value: 'Crespadoro',
        label: 'Crespadoro'
      },
      {
        value: 'Dueville',
        label: 'Dueville'
      },
      {
        value: 'Enego',
        label: 'Enego'
      },
      {
        value: 'Fara Vicentino',
        label: 'Fara Vicentino'
      },
      {
        value: 'Foza',
        label: 'Foza'
      },
      {
        value: 'Gallio',
        label: 'Gallio'
      },
      {
        value: 'Gambellara',
        label: 'Gambellara'
      },
      {
        value: 'Gambugliano',
        label: 'Gambugliano'
      },
      {
        value: 'Grisignano di Zocco',
        label: 'Grisignano di Zocco'
      },
      {
        value: 'Grumolo delle Abbadesse',
        label: 'Grumolo delle Abbadesse'
      },
      {
        value: 'Isola Vicentina',
        label: 'Isola Vicentina'
      },
      {
        value: 'Laghi',
        label: 'Laghi'
      },
      {
        value: 'Lastebasse',
        label: 'Lastebasse'
      },
      {
        value: 'Longare',
        label: 'Longare'
      },
      {
        value: 'Lonigo',
        label: 'Lonigo'
      },
      {
        value: 'Lugo di Vicenza',
        label: 'Lugo di Vicenza'
      },
      {
        value: 'Malo',
        label: 'Malo'
      },
      {
        value: 'Marano Vicentino',
        label: 'Marano Vicentino'
      },
      {
        value: 'Marostica',
        label: 'Marostica'
      },
      {
        value: 'Montebello Vicentino',
        label: 'Montebello Vicentino'
      },
      {
        value: 'Montecchio Maggiore',
        label: 'Montecchio Maggiore'
      },
      {
        value: 'Montecchio Precalcino',
        label: 'Montecchio Precalcino'
      },
      {
        value: 'Monte di Malo',
        label: 'Monte di Malo'
      },
      {
        value: 'Montegalda',
        label: 'Montegalda'
      },
      {
        value: 'Montegaldella',
        label: 'Montegaldella'
      },
      {
        value: 'Monteviale',
        label: 'Monteviale'
      },
      {
        value: 'Monticello Conte Otto',
        label: 'Monticello Conte Otto'
      },
      {
        value: 'Montorso Vicentino',
        label: 'Montorso Vicentino'
      },
      {
        value: 'Mussolente',
        label: 'Mussolente'
      },
      {
        value: 'Nanto',
        label: 'Nanto'
      },
      {
        value: 'Nogarole Vicentino',
        label: 'Nogarole Vicentino'
      },
      {
        value: 'Nove',
        label: 'Nove'
      },
      {
        value: 'Noventa Vicentina',
        label: 'Noventa Vicentina'
      },
      {
        value: 'Orgiano',
        label: 'Orgiano'
      },
      {
        value: 'Pedemonte',
        label: 'Pedemonte'
      },
      {
        value: 'Pianezze',
        label: 'Pianezze'
      },
      {
        value: 'Piovene Rocchette',
        label: 'Piovene Rocchette'
      },
      {
        value: 'Pojana Maggiore',
        label: 'Pojana Maggiore'
      },
      {
        value: 'Posina',
        label: 'Posina'
      },
      {
        value: 'Pove del Grappa',
        label: 'Pove del Grappa'
      },
      {
        value: 'Pozzoleone',
        label: 'Pozzoleone'
      },
      {
        value: 'Quinto Vicentino',
        label: 'Quinto Vicentino'
      },
      {
        value: 'Recoaro Terme',
        label: 'Recoaro Terme'
      },
      {
        value: 'Roana',
        label: 'Roana'
      },
      {
        value: 'Romano d\'Ezzelino',
        label: 'Romano d\'Ezzelino'
      },
      {
        value: 'Rosà',
        label: 'Rosà'
      },
      {
        value: 'Rossano Veneto',
        label: 'Rossano Veneto'
      },
      {
        value: 'Rotzo',
        label: 'Rotzo'
      },
      {
        value: 'Salcedo',
        label: 'Salcedo'
      },
      {
        value: 'Sandrigo',
        label: 'Sandrigo'
      },
      {
        value: 'San Pietro Mussolino',
        label: 'San Pietro Mussolino'
      },
      {
        value: 'Santorso',
        label: 'Santorso'
      },
      {
        value: 'San Vito di Leguzzano',
        label: 'San Vito di Leguzzano'
      },
      {
        value: 'Sarcedo',
        label: 'Sarcedo'
      },
      {
        value: 'Sarego',
        label: 'Sarego'
      },
      {
        value: 'Schiavon',
        label: 'Schiavon'
      },
      {
        value: 'Schio',
        label: 'Schio'
      },
      {
        value: 'Solagna',
        label: 'Solagna'
      },
      {
        value: 'Sossano',
        label: 'Sossano'
      },
      {
        value: 'Sovizzo',
        label: 'Sovizzo'
      },
      {
        value: 'Tezze sul Brenta',
        label: 'Tezze sul Brenta'
      },
      {
        value: 'Thiene',
        label: 'Thiene'
      },
      {
        value: 'Tonezza del Cimone',
        label: 'Tonezza del Cimone'
      },
      {
        value: 'Torrebelvicino',
        label: 'Torrebelvicino'
      },
      {
        value: 'Torri di Quartesolo',
        label: 'Torri di Quartesolo'
      },
      {
        value: 'Trissino',
        label: 'Trissino'
      },
      {
        value: 'Valdagno',
        label: 'Valdagno'
      },
      {
        value: 'Valdastico',
        label: 'Valdastico'
      },
      {
        value: 'Valli del Pasubio',
        label: 'Valli del Pasubio'
      },
      {
        value: 'Velo d\'Astico',
        label: 'Velo d\'Astico'
      },
      {
        value: 'Vicenza',
        label: 'Vicenza'
      },
      {
        value: 'Villaga',
        label: 'Villaga'
      },
      {
        value: 'Villaverla',
        label: 'Villaverla'
      },
      {
        value: 'Zanè',
        label: 'Zanè'
      },
      {
        value: 'Zermeghedo',
        label: 'Zermeghedo'
      },
      {
        value: 'Zovencedo',
        label: 'Zovencedo'
      },
      {
        value: 'Zugliano',
        label: 'Zugliano'
      },
      {
        value: 'Val Liona',
        label: 'Val Liona'
      },
      {
        value: 'Barbarano Mossano',
        label: 'Barbarano Mossano'
      },
      {
        value: 'Valbrenta',
        label: 'Valbrenta'
      },
      {
        value: 'Colceresa',
        label: 'Colceresa'
      },
      {
        value: 'Lusiana Conco',
        label: 'Lusiana Conco'
      },
      {
        value: 'Agordo',
        label: 'Agordo'
      },
      {
        value: 'Alano di Piave',
        label: 'Alano di Piave'
      },
      {
        value: 'Alleghe',
        label: 'Alleghe'
      },
      {
        value: 'Arsiè',
        label: 'Arsiè'
      },
      {
        value: 'Auronzo di Cadore',
        label: 'Auronzo di Cadore'
      },
      {
        value: 'Belluno',
        label: 'Belluno'
      },
      {
        value: 'Borca di Cadore',
        label: 'Borca di Cadore'
      },
      {
        value: 'Calalzo di Cadore',
        label: 'Calalzo di Cadore'
      },
      {
        value: 'Cencenighe Agordino',
        label: 'Cencenighe Agordino'
      },
      {
        value: 'Cesiomaggiore',
        label: 'Cesiomaggiore'
      },
      {
        value: 'Chies d\'Alpago',
        label: 'Chies d\'Alpago'
      },
      {
        value: 'Cibiana di Cadore',
        label: 'Cibiana di Cadore'
      },
      {
        value: 'Colle Santa Lucia',
        label: 'Colle Santa Lucia'
      },
      {
        value: 'Comelico Superiore',
        label: 'Comelico Superiore'
      },
      {
        value: 'Cortina d\'Ampezzo',
        label: 'Cortina d\'Ampezzo'
      },
      {
        value: 'Danta di Cadore',
        label: 'Danta di Cadore'
      },
      {
        value: 'Domegge di Cadore',
        label: 'Domegge di Cadore'
      },
      {
        value: 'Falcade',
        label: 'Falcade'
      },
      {
        value: 'Feltre',
        label: 'Feltre'
      },
      {
        value: 'Fonzaso',
        label: 'Fonzaso'
      },
      {
        value: 'Canale d\'Agordo',
        label: 'Canale d\'Agordo'
      },
      {
        value: 'Gosaldo',
        label: 'Gosaldo'
      },
      {
        value: 'Lamon',
        label: 'Lamon'
      },
      {
        value: 'La Valle Agordina',
        label: 'La Valle Agordina'
      },
      {
        value: 'Limana',
        label: 'Limana'
      },
      {
        value: 'Livinallongo del Col di Lana',
        label: 'Livinallongo del Col di Lana'
      },
      {
        value: 'Lorenzago di Cadore',
        label: 'Lorenzago di Cadore'
      },
      {
        value: 'Lozzo di Cadore',
        label: 'Lozzo di Cadore'
      },
      {
        value: 'Ospitale di Cadore',
        label: 'Ospitale di Cadore'
      },
      {
        value: 'Pedavena',
        label: 'Pedavena'
      },
      {
        value: 'Perarolo di Cadore',
        label: 'Perarolo di Cadore'
      },
      {
        value: 'Pieve di Cadore',
        label: 'Pieve di Cadore'
      },
      {
        value: 'Ponte nelle Alpi',
        label: 'Ponte nelle Alpi'
      },
      {
        value: 'Rivamonte Agordino',
        label: 'Rivamonte Agordino'
      },
      {
        value: 'Rocca Pietore',
        label: 'Rocca Pietore'
      },
      {
        value: 'San Gregorio nelle Alpi',
        label: 'San Gregorio nelle Alpi'
      },
      {
        value: 'San Nicolò di Comelico',
        label: 'San Nicolò di Comelico'
      },
      {
        value: 'San Pietro di Cadore',
        label: 'San Pietro di Cadore'
      },
      {
        value: 'Santa Giustina',
        label: 'Santa Giustina'
      },
      {
        value: 'San Tomaso Agordino',
        label: 'San Tomaso Agordino'
      },
      {
        value: 'Santo Stefano di Cadore',
        label: 'Santo Stefano di Cadore'
      },
      {
        value: 'San Vito di Cadore',
        label: 'San Vito di Cadore'
      },
      {
        value: 'Sedico',
        label: 'Sedico'
      },
      {
        value: 'Selva di Cadore',
        label: 'Selva di Cadore'
      },
      {
        value: 'Seren del Grappa',
        label: 'Seren del Grappa'
      },
      {
        value: 'Sospirolo',
        label: 'Sospirolo'
      },
      {
        value: 'Soverzene',
        label: 'Soverzene'
      },
      {
        value: 'Sovramonte',
        label: 'Sovramonte'
      },
      {
        value: 'Taibon Agordino',
        label: 'Taibon Agordino'
      },
      {
        value: 'Tambre',
        label: 'Tambre'
      },
      {
        value: 'Vallada Agordina',
        label: 'Vallada Agordina'
      },
      {
        value: 'Valle di Cadore',
        label: 'Valle di Cadore'
      },
      {
        value: 'Vigo di Cadore',
        label: 'Vigo di Cadore'
      },
      {
        value: 'Vodo Cadore',
        label: 'Vodo Cadore'
      },
      {
        value: 'Voltago Agordino',
        label: 'Voltago Agordino'
      },
      {
        value: 'Zoppè di Cadore',
        label: 'Zoppè di Cadore'
      },
      {
        value: 'Quero Vas',
        label: 'Quero Vas'
      },
      {
        value: 'Longarone',
        label: 'Longarone'
      },
      {
        value: 'Alpago',
        label: 'Alpago'
      },
      {
        value: 'Val di Zoldo',
        label: 'Val di Zoldo'
      },
      {
        value: 'Borgo Valbelluna',
        label: 'Borgo Valbelluna'
      },
      {
        value: 'Altivole',
        label: 'Altivole'
      },
      {
        value: 'Arcade',
        label: 'Arcade'
      },
      {
        value: 'Asolo',
        label: 'Asolo'
      },
      {
        value: 'Borso del Grappa',
        label: 'Borso del Grappa'
      },
      {
        value: 'Breda di Piave',
        label: 'Breda di Piave'
      },
      {
        value: 'Caerano di San Marco',
        label: 'Caerano di San Marco'
      },
      {
        value: 'Cappella Maggiore',
        label: 'Cappella Maggiore'
      },
      {
        value: 'Carbonera',
        label: 'Carbonera'
      },
      {
        value: 'Casale sul Sile',
        label: 'Casale sul Sile'
      },
      {
        value: 'Casier',
        label: 'Casier'
      },
      {
        value: 'Castelcucco',
        label: 'Castelcucco'
      },
      {
        value: 'Castelfranco Veneto',
        label: 'Castelfranco Veneto'
      },
      {
        value: 'Castello di Godego',
        label: 'Castello di Godego'
      },
      {
        value: 'Cavaso del Tomba',
        label: 'Cavaso del Tomba'
      },
      {
        value: 'Cessalto',
        label: 'Cessalto'
      },
      {
        value: 'Chiarano',
        label: 'Chiarano'
      },
      {
        value: 'Cimadolmo',
        label: 'Cimadolmo'
      },
      {
        value: 'Cison di Valmarino',
        label: 'Cison di Valmarino'
      },
      {
        value: 'Codognè',
        label: 'Codognè'
      },
      {
        value: 'Colle Umberto',
        label: 'Colle Umberto'
      },
      {
        value: 'Conegliano',
        label: 'Conegliano'
      },
      {
        value: 'Cordignano',
        label: 'Cordignano'
      },
      {
        value: 'Cornuda',
        label: 'Cornuda'
      },
      {
        value: 'Crocetta del Montello',
        label: 'Crocetta del Montello'
      },
      {
        value: 'Farra di Soligo',
        label: 'Farra di Soligo'
      },
      {
        value: 'Follina',
        label: 'Follina'
      },
      {
        value: 'Fontanelle',
        label: 'Fontanelle'
      },
      {
        value: 'Fonte',
        label: 'Fonte'
      },
      {
        value: 'Fregona',
        label: 'Fregona'
      },
      {
        value: 'Gaiarine',
        label: 'Gaiarine'
      },
      {
        value: 'Giavera del Montello',
        label: 'Giavera del Montello'
      },
      {
        value: 'Godega di Sant\'Urbano',
        label: 'Godega di Sant\'Urbano'
      },
      {
        value: 'Gorgo al Monticano',
        label: 'Gorgo al Monticano'
      },
      {
        value: 'Istrana',
        label: 'Istrana'
      },
      {
        value: 'Loria',
        label: 'Loria'
      },
      {
        value: 'Mansuè',
        label: 'Mansuè'
      },
      {
        value: 'Mareno di Piave',
        label: 'Mareno di Piave'
      },
      {
        value: 'Maser',
        label: 'Maser'
      },
      {
        value: 'Maserada sul Piave',
        label: 'Maserada sul Piave'
      },
      {
        value: 'Meduna di Livenza',
        label: 'Meduna di Livenza'
      },
      {
        value: 'Miane',
        label: 'Miane'
      },
      {
        value: 'Mogliano Veneto',
        label: 'Mogliano Veneto'
      },
      {
        value: 'Monastier di Treviso',
        label: 'Monastier di Treviso'
      },
      {
        value: 'Monfumo',
        label: 'Monfumo'
      },
      {
        value: 'Montebelluna',
        label: 'Montebelluna'
      },
      {
        value: 'Morgano',
        label: 'Morgano'
      },
      {
        value: 'Moriago della Battaglia',
        label: 'Moriago della Battaglia'
      },
      {
        value: 'Motta di Livenza',
        label: 'Motta di Livenza'
      },
      {
        value: 'Nervesa della Battaglia',
        label: 'Nervesa della Battaglia'
      },
      {
        value: 'Oderzo',
        label: 'Oderzo'
      },
      {
        value: 'Ormelle',
        label: 'Ormelle'
      },
      {
        value: 'Orsago',
        label: 'Orsago'
      },
      {
        value: 'Paese',
        label: 'Paese'
      },
      {
        value: 'Pederobba',
        label: 'Pederobba'
      },
      {
        value: 'Pieve di Soligo',
        label: 'Pieve di Soligo'
      },
      {
        value: 'Ponte di Piave',
        label: 'Ponte di Piave'
      },
      {
        value: 'Ponzano Veneto',
        label: 'Ponzano Veneto'
      },
      {
        value: 'Portobuffolè',
        label: 'Portobuffolè'
      },
      {
        value: 'Possagno',
        label: 'Possagno'
      },
      {
        value: 'Povegliano',
        label: 'Povegliano'
      },
      {
        value: 'Preganziol',
        label: 'Preganziol'
      },
      {
        value: 'Quinto di Treviso',
        label: 'Quinto di Treviso'
      },
      {
        value: 'Refrontolo',
        label: 'Refrontolo'
      },
      {
        value: 'Resana',
        label: 'Resana'
      },
      {
        value: 'Revine Lago',
        label: 'Revine Lago'
      },
      {
        value: 'Riese Pio X',
        label: 'Riese Pio X'
      },
      {
        value: 'Roncade',
        label: 'Roncade'
      },
      {
        value: 'Salgareda',
        label: 'Salgareda'
      },
      {
        value: 'San Biagio di Callalta',
        label: 'San Biagio di Callalta'
      },
      {
        value: 'San Fior',
        label: 'San Fior'
      },
      {
        value: 'San Pietro di Feletto',
        label: 'San Pietro di Feletto'
      },
      {
        value: 'San Polo di Piave',
        label: 'San Polo di Piave'
      },
      {
        value: 'Santa Lucia di Piave',
        label: 'Santa Lucia di Piave'
      },
      {
        value: 'San Vendemiano',
        label: 'San Vendemiano'
      },
      {
        value: 'San Zenone degli Ezzelini',
        label: 'San Zenone degli Ezzelini'
      },
      {
        value: 'Sarmede',
        label: 'Sarmede'
      },
      {
        value: 'Segusino',
        label: 'Segusino'
      },
      {
        value: 'Sernaglia della Battaglia',
        label: 'Sernaglia della Battaglia'
      },
      {
        value: 'Silea',
        label: 'Silea'
      },
      {
        value: 'Spresiano',
        label: 'Spresiano'
      },
      {
        value: 'Susegana',
        label: 'Susegana'
      },
      {
        value: 'Tarzo',
        label: 'Tarzo'
      },
      {
        value: 'Trevignano',
        label: 'Trevignano'
      },
      {
        value: 'Treviso',
        label: 'Treviso'
      },
      {
        value: 'Valdobbiadene',
        label: 'Valdobbiadene'
      },
      {
        value: 'Vazzola',
        label: 'Vazzola'
      },
      {
        value: 'Vedelago',
        label: 'Vedelago'
      },
      {
        value: 'Vidor',
        label: 'Vidor'
      },
      {
        value: 'Villorba',
        label: 'Villorba'
      },
      {
        value: 'Vittorio Veneto',
        label: 'Vittorio Veneto'
      },
      {
        value: 'Volpago del Montello',
        label: 'Volpago del Montello'
      },
      {
        value: 'Zenson di Piave',
        label: 'Zenson di Piave'
      },
      {
        value: 'Zero Branco',
        label: 'Zero Branco'
      },
      {
        value: 'Pieve del Grappa',
        label: 'Pieve del Grappa'
      },
      {
        value: 'Annone Veneto',
        label: 'Annone Veneto'
      },
      {
        value: 'Campagna Lupia',
        label: 'Campagna Lupia'
      },
      {
        value: 'Campolongo Maggiore',
        label: 'Campolongo Maggiore'
      },
      {
        value: 'Camponogara',
        label: 'Camponogara'
      },
      {
        value: 'Caorle',
        label: 'Caorle'
      },
      {
        value: 'Cavarzere',
        label: 'Cavarzere'
      },
      {
        value: 'Ceggia',
        label: 'Ceggia'
      },
      {
        value: 'Chioggia',
        label: 'Chioggia'
      },
      {
        value: 'Cinto Caomaggiore',
        label: 'Cinto Caomaggiore'
      },
      {
        value: 'Cona',
        label: 'Cona'
      },
      {
        value: 'Concordia Sagittaria',
        label: 'Concordia Sagittaria'
      },
      {
        value: 'Dolo',
        label: 'Dolo'
      },
      {
        value: 'Eraclea',
        label: 'Eraclea'
      },
      {
        value: 'Fiesso d\'Artico',
        label: 'Fiesso d\'Artico'
      },
      {
        value: 'Fossalta di Piave',
        label: 'Fossalta di Piave'
      },
      {
        value: 'Fossalta di Portogruaro',
        label: 'Fossalta di Portogruaro'
      },
      {
        value: 'Fossò',
        label: 'Fossò'
      },
      {
        value: 'Gruaro',
        label: 'Gruaro'
      },
      {
        value: 'Jesolo',
        label: 'Jesolo'
      },
      {
        value: 'Marcon',
        label: 'Marcon'
      },
      {
        value: 'Martellago',
        label: 'Martellago'
      },
      {
        value: 'Meolo',
        label: 'Meolo'
      },
      {
        value: 'Mira',
        label: 'Mira'
      },
      {
        value: 'Mirano',
        label: 'Mirano'
      },
      {
        value: 'Musile di Piave',
        label: 'Musile di Piave'
      },
      {
        value: 'Noale',
        label: 'Noale'
      },
      {
        value: 'Noventa di Piave',
        label: 'Noventa di Piave'
      },
      {
        value: 'Pianiga',
        label: 'Pianiga'
      },
      {
        value: 'Portogruaro',
        label: 'Portogruaro'
      },
      {
        value: 'Pramaggiore',
        label: 'Pramaggiore'
      },
      {
        value: 'Quarto d\'Altino',
        label: 'Quarto d\'Altino'
      },
      {
        value: 'Salzano',
        label: 'Salzano'
      },
      {
        value: 'San Donà di Piave',
        label: 'San Donà di Piave'
      },
      {
        value: 'San Michele al Tagliamento',
        label: 'San Michele al Tagliamento'
      },
      {
        value: 'Santa Maria di Sala',
        label: 'Santa Maria di Sala'
      },
      {
        value: 'San Stino di Livenza',
        label: 'San Stino di Livenza'
      },
      {
        value: 'Scorzè',
        label: 'Scorzè'
      },
      {
        value: 'Spinea',
        label: 'Spinea'
      },
      {
        value: 'Stra',
        label: 'Stra'
      },
      {
        value: 'Teglio Veneto',
        label: 'Teglio Veneto'
      },
      {
        value: 'Torre di Mosto',
        label: 'Torre di Mosto'
      },
      {
        value: 'Venezia',
        label: 'Venezia'
      },
      {
        value: 'Vigonovo',
        label: 'Vigonovo'
      },
      {
        value: 'Cavallino-Treporti',
        label: 'Cavallino-Treporti'
      },
      {
        value: 'Abano Terme',
        label: 'Abano Terme'
      },
      {
        value: 'Agna',
        label: 'Agna'
      },
      {
        value: 'Albignasego',
        label: 'Albignasego'
      },
      {
        value: 'Anguillara Veneta',
        label: 'Anguillara Veneta'
      },
      {
        value: 'Arquà Petrarca',
        label: 'Arquà Petrarca'
      },
      {
        value: 'Arre',
        label: 'Arre'
      },
      {
        value: 'Arzergrande',
        label: 'Arzergrande'
      },
      {
        value: 'Bagnoli di Sopra',
        label: 'Bagnoli di Sopra'
      },
      {
        value: 'Baone',
        label: 'Baone'
      },
      {
        value: 'Barbona',
        label: 'Barbona'
      },
      {
        value: 'Battaglia Terme',
        label: 'Battaglia Terme'
      },
      {
        value: 'Boara Pisani',
        label: 'Boara Pisani'
      },
      {
        value: 'Borgoricco',
        label: 'Borgoricco'
      },
      {
        value: 'Bovolenta',
        label: 'Bovolenta'
      },
      {
        value: 'Brugine',
        label: 'Brugine'
      },
      {
        value: 'Cadoneghe',
        label: 'Cadoneghe'
      },
      {
        value: 'Campodarsego',
        label: 'Campodarsego'
      },
      {
        value: 'Campodoro',
        label: 'Campodoro'
      },
      {
        value: 'Camposampiero',
        label: 'Camposampiero'
      },
      {
        value: 'Campo San Martino',
        label: 'Campo San Martino'
      },
      {
        value: 'Candiana',
        label: 'Candiana'
      },
      {
        value: 'Carceri',
        label: 'Carceri'
      },
      {
        value: 'Carmignano di Brenta',
        label: 'Carmignano di Brenta'
      },
      {
        value: 'Cartura',
        label: 'Cartura'
      },
      {
        value: 'Casale di Scodosia',
        label: 'Casale di Scodosia'
      },
      {
        value: 'Casalserugo',
        label: 'Casalserugo'
      },
      {
        value: 'Castelbaldo',
        label: 'Castelbaldo'
      },
      {
        value: 'Cervarese Santa Croce',
        label: 'Cervarese Santa Croce'
      },
      {
        value: 'Cinto Euganeo',
        label: 'Cinto Euganeo'
      },
      {
        value: 'Cittadella',
        label: 'Cittadella'
      },
      {
        value: 'Codevigo',
        label: 'Codevigo'
      },
      {
        value: 'Conselve',
        label: 'Conselve'
      },
      {
        value: 'Correzzola',
        label: 'Correzzola'
      },
      {
        value: 'Curtarolo',
        label: 'Curtarolo'
      },
      {
        value: 'Este',
        label: 'Este'
      },
      {
        value: 'Fontaniva',
        label: 'Fontaniva'
      },
      {
        value: 'Galliera Veneta',
        label: 'Galliera Veneta'
      },
      {
        value: 'Galzignano Terme',
        label: 'Galzignano Terme'
      },
      {
        value: 'Gazzo',
        label: 'Gazzo'
      },
      {
        value: 'Grantorto',
        label: 'Grantorto'
      },
      {
        value: 'Granze',
        label: 'Granze'
      },
      {
        value: 'Legnaro',
        label: 'Legnaro'
      },
      {
        value: 'Limena',
        label: 'Limena'
      },
      {
        value: 'Loreggia',
        label: 'Loreggia'
      },
      {
        value: 'Lozzo Atestino',
        label: 'Lozzo Atestino'
      },
      {
        value: 'Maserà di Padova',
        label: 'Maserà di Padova'
      },
      {
        value: 'Masi',
        label: 'Masi'
      },
      {
        value: 'Massanzago',
        label: 'Massanzago'
      },
      {
        value: 'Megliadino San Vitale',
        label: 'Megliadino San Vitale'
      },
      {
        value: 'Merlara',
        label: 'Merlara'
      },
      {
        value: 'Mestrino',
        label: 'Mestrino'
      },
      {
        value: 'Monselice',
        label: 'Monselice'
      },
      {
        value: 'Montagnana',
        label: 'Montagnana'
      },
      {
        value: 'Montegrotto Terme',
        label: 'Montegrotto Terme'
      },
      {
        value: 'Noventa Padovana',
        label: 'Noventa Padovana'
      },
      {
        value: 'Ospedaletto Euganeo',
        label: 'Ospedaletto Euganeo'
      },
      {
        value: 'Padova',
        label: 'Padova'
      },
      {
        value: 'Pernumia',
        label: 'Pernumia'
      },
      {
        value: 'Piacenza d\'Adige',
        label: 'Piacenza d\'Adige'
      },
      {
        value: 'Piazzola sul Brenta',
        label: 'Piazzola sul Brenta'
      },
      {
        value: 'Piombino Dese',
        label: 'Piombino Dese'
      },
      {
        value: 'Piove di Sacco',
        label: 'Piove di Sacco'
      },
      {
        value: 'Polverara',
        label: 'Polverara'
      },
      {
        value: 'Ponso',
        label: 'Ponso'
      },
      {
        value: 'Pontelongo',
        label: 'Pontelongo'
      },
      {
        value: 'Ponte San Nicolò',
        label: 'Ponte San Nicolò'
      },
      {
        value: 'Pozzonovo',
        label: 'Pozzonovo'
      },
      {
        value: 'Rovolon',
        label: 'Rovolon'
      },
      {
        value: 'Rubano',
        label: 'Rubano'
      },
      {
        value: 'Saccolongo',
        label: 'Saccolongo'
      },
      {
        value: 'San Giorgio delle Pertiche',
        label: 'San Giorgio delle Pertiche'
      },
      {
        value: 'San Giorgio in Bosco',
        label: 'San Giorgio in Bosco'
      },
      {
        value: 'San Martino di Lupari',
        label: 'San Martino di Lupari'
      },
      {
        value: 'San Pietro in Gu',
        label: 'San Pietro in Gu'
      },
      {
        value: 'San Pietro Viminario',
        label: 'San Pietro Viminario'
      },
      {
        value: 'Santa Giustina in Colle',
        label: 'Santa Giustina in Colle'
      },
      {
        value: 'Sant\'Angelo di Piove di Sacco',
        label: 'Sant\'Angelo di Piove di Sacco'
      },
      {
        value: 'Sant\'Elena',
        label: 'Sant\'Elena'
      },
      {
        value: 'Sant\'Urbano',
        label: 'Sant\'Urbano'
      },
      {
        value: 'Saonara',
        label: 'Saonara'
      },
      {
        value: 'Selvazzano Dentro',
        label: 'Selvazzano Dentro'
      },
      {
        value: 'Solesino',
        label: 'Solesino'
      },
      {
        value: 'Stanghella',
        label: 'Stanghella'
      },
      {
        value: 'Teolo',
        label: 'Teolo'
      },
      {
        value: 'Terrassa Padovana',
        label: 'Terrassa Padovana'
      },
      {
        value: 'Tombolo',
        label: 'Tombolo'
      },
      {
        value: 'Torreglia',
        label: 'Torreglia'
      },
      {
        value: 'Trebaseleghe',
        label: 'Trebaseleghe'
      },
      {
        value: 'Tribano',
        label: 'Tribano'
      },
      {
        value: 'Urbana',
        label: 'Urbana'
      },
      {
        value: 'Veggiano',
        label: 'Veggiano'
      },
      {
        value: 'Vescovana',
        label: 'Vescovana'
      },
      {
        value: 'Vighizzolo d\'Este',
        label: 'Vighizzolo d\'Este'
      },
      {
        value: 'Vigodarzere',
        label: 'Vigodarzere'
      },
      {
        value: 'Vigonza',
        label: 'Vigonza'
      },
      {
        value: 'Villa del Conte',
        label: 'Villa del Conte'
      },
      {
        value: 'Villa Estense',
        label: 'Villa Estense'
      },
      {
        value: 'Villafranca Padovana',
        label: 'Villafranca Padovana'
      },
      {
        value: 'Villanova di Camposampiero',
        label: 'Villanova di Camposampiero'
      },
      {
        value: 'Vo\'',
        label: 'Vo\''
      },
      {
        value: 'Due Carrare',
        label: 'Due Carrare'
      },
      {
        value: 'Borgo Veneto',
        label: 'Borgo Veneto'
      },
      {
        value: 'Adria',
        label: 'Adria'
      },
      {
        value: 'Ariano nel Polesine',
        label: 'Ariano nel Polesine'
      },
      {
        value: 'Arquà Polesine',
        label: 'Arquà Polesine'
      },
      {
        value: 'Badia Polesine',
        label: 'Badia Polesine'
      },
      {
        value: 'Bagnolo di Po',
        label: 'Bagnolo di Po'
      },
      {
        value: 'Bergantino',
        label: 'Bergantino'
      },
      {
        value: 'Bosaro',
        label: 'Bosaro'
      },
      {
        value: 'Calto',
        label: 'Calto'
      },
      {
        value: 'Canaro',
        label: 'Canaro'
      },
      {
        value: 'Canda',
        label: 'Canda'
      },
      {
        value: 'Castelguglielmo',
        label: 'Castelguglielmo'
      },
      {
        value: 'Castelmassa',
        label: 'Castelmassa'
      },
      {
        value: 'Castelnovo Bariano',
        label: 'Castelnovo Bariano'
      },
      {
        value: 'Ceneselli',
        label: 'Ceneselli'
      },
      {
        value: 'Ceregnano',
        label: 'Ceregnano'
      },
      {
        value: 'Corbola',
        label: 'Corbola'
      },
      {
        value: 'Costa di Rovigo',
        label: 'Costa di Rovigo'
      },
      {
        value: 'Crespino',
        label: 'Crespino'
      },
      {
        value: 'Ficarolo',
        label: 'Ficarolo'
      },
      {
        value: 'Fiesso Umbertiano',
        label: 'Fiesso Umbertiano'
      },
      {
        value: 'Frassinelle Polesine',
        label: 'Frassinelle Polesine'
      },
      {
        value: 'Fratta Polesine',
        label: 'Fratta Polesine'
      },
      {
        value: 'Gaiba',
        label: 'Gaiba'
      },
      {
        value: 'Gavello',
        label: 'Gavello'
      },
      {
        value: 'Giacciano con Baruchella',
        label: 'Giacciano con Baruchella'
      },
      {
        value: 'Guarda Veneta',
        label: 'Guarda Veneta'
      },
      {
        value: 'Lendinara',
        label: 'Lendinara'
      },
      {
        value: 'Loreo',
        label: 'Loreo'
      },
      {
        value: 'Lusia',
        label: 'Lusia'
      },
      {
        value: 'Melara',
        label: 'Melara'
      },
      {
        value: 'Occhiobello',
        label: 'Occhiobello'
      },
      {
        value: 'Papozze',
        label: 'Papozze'
      },
      {
        value: 'Pettorazza Grimani',
        label: 'Pettorazza Grimani'
      },
      {
        value: 'Pincara',
        label: 'Pincara'
      },
      {
        value: 'Polesella',
        label: 'Polesella'
      },
      {
        value: 'Pontecchio Polesine',
        label: 'Pontecchio Polesine'
      },
      {
        value: 'Porto Tolle',
        label: 'Porto Tolle'
      },
      {
        value: 'Rosolina',
        label: 'Rosolina'
      },
      {
        value: 'Rovigo',
        label: 'Rovigo'
      },
      {
        value: 'Salara',
        label: 'Salara'
      },
      {
        value: 'San Bellino',
        label: 'San Bellino'
      },
      {
        value: 'San Martino di Venezze',
        label: 'San Martino di Venezze'
      },
      {
        value: 'Stienta',
        label: 'Stienta'
      },
      {
        value: 'Taglio di Po',
        label: 'Taglio di Po'
      },
      {
        value: 'Trecenta',
        label: 'Trecenta'
      },
      {
        value: 'Villadose',
        label: 'Villadose'
      },
      {
        value: 'Villamarzana',
        label: 'Villamarzana'
      },
      {
        value: 'Villanova del Ghebbo',
        label: 'Villanova del Ghebbo'
      },
      {
        value: 'Villanova Marchesana',
        label: 'Villanova Marchesana'
      },
      {
        value: 'Porto Viro',
        label: 'Porto Viro'
      },
      {
        value: 'Aiello del Friuli',
        label: 'Aiello del Friuli'
      },
      {
        value: 'Amaro',
        label: 'Amaro'
      },
      {
        value: 'Ampezzo',
        label: 'Ampezzo'
      },
      {
        value: 'Aquileia',
        label: 'Aquileia'
      },
      {
        value: 'Arta Terme',
        label: 'Arta Terme'
      },
      {
        value: 'Artegna',
        label: 'Artegna'
      },
      {
        value: 'Attimis',
        label: 'Attimis'
      },
      {
        value: 'Bagnaria Arsa',
        label: 'Bagnaria Arsa'
      },
      {
        value: 'Basiliano',
        label: 'Basiliano'
      },
      {
        value: 'Bertiolo',
        label: 'Bertiolo'
      },
      {
        value: 'Bicinicco',
        label: 'Bicinicco'
      },
      {
        value: 'Bordano',
        label: 'Bordano'
      },
      {
        value: 'Buja',
        label: 'Buja'
      },
      {
        value: 'Buttrio',
        label: 'Buttrio'
      },
      {
        value: 'Camino al Tagliamento',
        label: 'Camino al Tagliamento'
      },
      {
        value: 'Campoformido',
        label: 'Campoformido'
      },
      {
        value: 'Carlino',
        label: 'Carlino'
      },
      {
        value: 'Cassacco',
        label: 'Cassacco'
      },
      {
        value: 'Castions di Strada',
        label: 'Castions di Strada'
      },
      {
        value: 'Cavazzo Carnico',
        label: 'Cavazzo Carnico'
      },
      {
        value: 'Cercivento',
        label: 'Cercivento'
      },
      {
        value: 'Cervignano del Friuli',
        label: 'Cervignano del Friuli'
      },
      {
        value: 'Chiopris-Viscone',
        label: 'Chiopris-Viscone'
      },
      {
        value: 'Chiusaforte',
        label: 'Chiusaforte'
      },
      {
        value: 'Cividale del Friuli',
        label: 'Cividale del Friuli'
      },
      {
        value: 'Codroipo',
        label: 'Codroipo'
      },
      {
        value: 'Colloredo di Monte Albano',
        label: 'Colloredo di Monte Albano'
      },
      {
        value: 'Comeglians',
        label: 'Comeglians'
      },
      {
        value: 'Corno di Rosazzo',
        label: 'Corno di Rosazzo'
      },
      {
        value: 'Coseano',
        label: 'Coseano'
      },
      {
        value: 'Dignano',
        label: 'Dignano'
      },
      {
        value: 'Dogna',
        label: 'Dogna'
      },
      {
        value: 'Drenchia',
        label: 'Drenchia'
      },
      {
        value: 'Enemonzo',
        label: 'Enemonzo'
      },
      {
        value: 'Faedis',
        label: 'Faedis'
      },
      {
        value: 'Fagagna',
        label: 'Fagagna'
      },
      {
        value: 'Flaibano',
        label: 'Flaibano'
      },
      {
        value: 'Forni Avoltri',
        label: 'Forni Avoltri'
      },
      {
        value: 'Forni di Sopra',
        label: 'Forni di Sopra'
      },
      {
        value: 'Forni di Sotto',
        label: 'Forni di Sotto'
      },
      {
        value: 'Gemona del Friuli',
        label: 'Gemona del Friuli'
      },
      {
        value: 'Gonars',
        label: 'Gonars'
      },
      {
        value: 'Grimacco',
        label: 'Grimacco'
      },
      {
        value: 'Latisana',
        label: 'Latisana'
      },
      {
        value: 'Lauco',
        label: 'Lauco'
      },
      {
        value: 'Lestizza',
        label: 'Lestizza'
      },
      {
        value: 'Lignano Sabbiadoro',
        label: 'Lignano Sabbiadoro'
      },
      {
        value: 'Lusevera',
        label: 'Lusevera'
      },
      {
        value: 'Magnano in Riviera',
        label: 'Magnano in Riviera'
      },
      {
        value: 'Majano',
        label: 'Majano'
      },
      {
        value: 'Malborghetto Valbruna',
        label: 'Malborghetto Valbruna'
      },
      {
        value: 'Manzano',
        label: 'Manzano'
      },
      {
        value: 'Marano Lagunare',
        label: 'Marano Lagunare'
      },
      {
        value: 'Martignacco',
        label: 'Martignacco'
      },
      {
        value: 'Mereto di Tomba',
        label: 'Mereto di Tomba'
      },
      {
        value: 'Moggio Udinese',
        label: 'Moggio Udinese'
      },
      {
        value: 'Moimacco',
        label: 'Moimacco'
      },
      {
        value: 'Montenars',
        label: 'Montenars'
      },
      {
        value: 'Mortegliano',
        label: 'Mortegliano'
      },
      {
        value: 'Moruzzo',
        label: 'Moruzzo'
      },
      {
        value: 'Muzzana del Turgnano',
        label: 'Muzzana del Turgnano'
      },
      {
        value: 'Nimis',
        label: 'Nimis'
      },
      {
        value: 'Osoppo',
        label: 'Osoppo'
      },
      {
        value: 'Ovaro',
        label: 'Ovaro'
      },
      {
        value: 'Pagnacco',
        label: 'Pagnacco'
      },
      {
        value: 'Palazzolo dello Stella',
        label: 'Palazzolo dello Stella'
      },
      {
        value: 'Palmanova',
        label: 'Palmanova'
      },
      {
        value: 'Paluzza',
        label: 'Paluzza'
      },
      {
        value: 'Pasian di Prato',
        label: 'Pasian di Prato'
      },
      {
        value: 'Paularo',
        label: 'Paularo'
      },
      {
        value: 'Pavia di Udine',
        label: 'Pavia di Udine'
      },
      {
        value: 'Pocenia',
        label: 'Pocenia'
      },
      {
        value: 'Pontebba',
        label: 'Pontebba'
      },
      {
        value: 'Porpetto',
        label: 'Porpetto'
      },
      {
        value: 'Povoletto',
        label: 'Povoletto'
      },
      {
        value: 'Pozzuolo del Friuli',
        label: 'Pozzuolo del Friuli'
      },
      {
        value: 'Pradamano',
        label: 'Pradamano'
      },
      {
        value: 'Prato Carnico',
        label: 'Prato Carnico'
      },
      {
        value: 'Precenicco',
        label: 'Precenicco'
      },
      {
        value: 'Premariacco',
        label: 'Premariacco'
      },
      {
        value: 'Preone',
        label: 'Preone'
      },
      {
        value: 'Prepotto',
        label: 'Prepotto'
      },
      {
        value: 'Pulfero',
        label: 'Pulfero'
      },
      {
        value: 'Ragogna',
        label: 'Ragogna'
      },
      {
        value: 'Ravascletto',
        label: 'Ravascletto'
      },
      {
        value: 'Raveo',
        label: 'Raveo'
      },
      {
        value: 'Reana del Rojale',
        label: 'Reana del Rojale'
      },
      {
        value: 'Remanzacco',
        label: 'Remanzacco'
      },
      {
        value: 'Resia',
        label: 'Resia'
      },
      {
        value: 'Resiutta',
        label: 'Resiutta'
      },
      {
        value: 'Rigolato',
        label: 'Rigolato'
      },
      {
        value: 'Rive d\'Arcano',
        label: 'Rive d\'Arcano'
      },
      {
        value: 'Ronchis',
        label: 'Ronchis'
      },
      {
        value: 'Ruda',
        label: 'Ruda'
      },
      {
        value: 'San Daniele del Friuli',
        label: 'San Daniele del Friuli'
      },
      {
        value: 'San Giorgio di Nogaro',
        label: 'San Giorgio di Nogaro'
      },
      {
        value: 'San Giovanni al Natisone',
        label: 'San Giovanni al Natisone'
      },
      {
        value: 'San Leonardo',
        label: 'San Leonardo'
      },
      {
        value: 'San Pietro al Natisone',
        label: 'San Pietro al Natisone'
      },
      {
        value: 'Santa Maria la Longa',
        label: 'Santa Maria la Longa'
      },
      {
        value: 'San Vito al Torre',
        label: 'San Vito al Torre'
      },
      {
        value: 'San Vito di Fagagna',
        label: 'San Vito di Fagagna'
      },
      {
        value: 'Sauris',
        label: 'Sauris'
      },
      {
        value: 'Savogna',
        label: 'Savogna'
      },
      {
        value: 'Sedegliano',
        label: 'Sedegliano'
      },
      {
        value: 'Socchieve',
        label: 'Socchieve'
      },
      {
        value: 'Stregna',
        label: 'Stregna'
      },
      {
        value: 'Sutrio',
        label: 'Sutrio'
      },
      {
        value: 'Taipana',
        label: 'Taipana'
      },
      {
        value: 'Talmassons',
        label: 'Talmassons'
      },
      {
        value: 'Tarcento',
        label: 'Tarcento'
      },
      {
        value: 'Tarvisio',
        label: 'Tarvisio'
      },
      {
        value: 'Tavagnacco',
        label: 'Tavagnacco'
      },
      {
        value: 'Terzo d\'Aquileia',
        label: 'Terzo d\'Aquileia'
      },
      {
        value: 'Tolmezzo',
        label: 'Tolmezzo'
      },
      {
        value: 'Torreano',
        label: 'Torreano'
      },
      {
        value: 'Torviscosa',
        label: 'Torviscosa'
      },
      {
        value: 'Trasaghis',
        label: 'Trasaghis'
      },
      {
        value: 'Treppo Grande',
        label: 'Treppo Grande'
      },
      {
        value: 'Tricesimo',
        label: 'Tricesimo'
      },
      {
        value: 'Trivignano Udinese',
        label: 'Trivignano Udinese'
      },
      {
        value: 'Udine',
        label: 'Udine'
      },
      {
        value: 'Varmo',
        label: 'Varmo'
      },
      {
        value: 'Venzone',
        label: 'Venzone'
      },
      {
        value: 'Verzegnis',
        label: 'Verzegnis'
      },
      {
        value: 'Villa Santina',
        label: 'Villa Santina'
      },
      {
        value: 'Visco',
        label: 'Visco'
      },
      {
        value: 'Zuglio',
        label: 'Zuglio'
      },
      {
        value: 'Forgaria nel Friuli',
        label: 'Forgaria nel Friuli'
      },
      {
        value: 'Campolongo Tapogliano',
        label: 'Campolongo Tapogliano'
      },
      {
        value: 'Rivignano Teor',
        label: 'Rivignano Teor'
      },
      {
        value: 'Sappada',
        label: 'Sappada'
      },
      {
        value: 'Fiumicello Villa Vicentina',
        label: 'Fiumicello Villa Vicentina'
      },
      {
        value: 'Treppo Ligosullo',
        label: 'Treppo Ligosullo'
      },
      {
        value: 'Capriva del Friuli',
        label: 'Capriva del Friuli'
      },
      {
        value: 'Cormons',
        label: 'Cormons'
      },
      {
        value: 'Doberdò del Lago',
        label: 'Doberdò del Lago'
      },
      {
        value: 'Dolegna del Collio',
        label: 'Dolegna del Collio'
      },
      {
        value: 'Farra d\'Isonzo',
        label: 'Farra d\'Isonzo'
      },
      {
        value: 'Fogliano Redipuglia',
        label: 'Fogliano Redipuglia'
      },
      {
        value: 'Gorizia',
        label: 'Gorizia'
      },
      {
        value: 'Gradisca d\'Isonzo',
        label: 'Gradisca d\'Isonzo'
      },
      {
        value: 'Grado',
        label: 'Grado'
      },
      {
        value: 'Mariano del Friuli',
        label: 'Mariano del Friuli'
      },
      {
        value: 'Medea',
        label: 'Medea'
      },
      {
        value: 'Monfalcone',
        label: 'Monfalcone'
      },
      {
        value: 'Moraro',
        label: 'Moraro'
      },
      {
        value: 'Mossa',
        label: 'Mossa'
      },
      {
        value: 'Romans d\'Isonzo',
        label: 'Romans d\'Isonzo'
      },
      {
        value: 'Ronchi dei Legionari',
        label: 'Ronchi dei Legionari'
      },
      {
        value: 'Sagrado',
        label: 'Sagrado'
      },
      {
        value: 'San Canzian d\'Isonzo',
        label: 'San Canzian d\'Isonzo'
      },
      {
        value: 'San Floriano del Collio',
        label: 'San Floriano del Collio'
      },
      {
        value: 'San Lorenzo Isontino',
        label: 'San Lorenzo Isontino'
      },
      {
        value: 'San Pier d\'Isonzo',
        label: 'San Pier d\'Isonzo'
      },
      {
        value: 'Savogna d\'Isonzo',
        label: 'Savogna d\'Isonzo'
      },
      {
        value: 'Staranzano',
        label: 'Staranzano'
      },
      {
        value: 'Turriaco',
        label: 'Turriaco'
      },
      {
        value: 'Villesse',
        label: 'Villesse'
      },
      {
        value: 'Duino Aurisina',
        label: 'Duino Aurisina'
      },
      {
        value: 'Monrupino',
        label: 'Monrupino'
      },
      {
        value: 'Muggia',
        label: 'Muggia'
      },
      {
        value: 'San Dorligo della Valle',
        label: 'San Dorligo della Valle'
      },
      {
        value: 'Sgonico',
        label: 'Sgonico'
      },
      {
        value: 'Trieste',
        label: 'Trieste'
      },
      {
        value: 'Agazzano',
        label: 'Agazzano'
      },
      {
        value: 'Alseno',
        label: 'Alseno'
      },
      {
        value: 'Besenzone',
        label: 'Besenzone'
      },
      {
        value: 'Bettola',
        label: 'Bettola'
      },
      {
        value: 'Bobbio',
        label: 'Bobbio'
      },
      {
        value: 'Borgonovo Val Tidone',
        label: 'Borgonovo Val Tidone'
      },
      {
        value: 'Cadeo',
        label: 'Cadeo'
      },
      {
        value: 'Calendasco',
        label: 'Calendasco'
      },
      {
        value: 'Caorso',
        label: 'Caorso'
      },
      {
        value: 'Carpaneto Piacentino',
        label: 'Carpaneto Piacentino'
      },
      {
        value: 'Castell\'Arquato',
        label: 'Castell\'Arquato'
      },
      {
        value: 'Castel San Giovanni',
        label: 'Castel San Giovanni'
      },
      {
        value: 'Castelvetro Piacentino',
        label: 'Castelvetro Piacentino'
      },
      {
        value: 'Cerignale',
        label: 'Cerignale'
      },
      {
        value: 'Coli',
        label: 'Coli'
      },
      {
        value: 'Corte Brugnatella',
        label: 'Corte Brugnatella'
      },
      {
        value: 'Cortemaggiore',
        label: 'Cortemaggiore'
      },
      {
        value: 'Farini',
        label: 'Farini'
      },
      {
        value: 'Ferriere',
        label: 'Ferriere'
      },
      {
        value: 'Fiorenzuola d\'Arda',
        label: 'Fiorenzuola d\'Arda'
      },
      {
        value: 'Gazzola',
        label: 'Gazzola'
      },
      {
        value: 'Gossolengo',
        label: 'Gossolengo'
      },
      {
        value: 'Gragnano Trebbiense',
        label: 'Gragnano Trebbiense'
      },
      {
        value: 'Gropparello',
        label: 'Gropparello'
      },
      {
        value: 'Lugagnano Val d\'Arda',
        label: 'Lugagnano Val d\'Arda'
      },
      {
        value: 'Monticelli d\'Ongina',
        label: 'Monticelli d\'Ongina'
      },
      {
        value: 'Morfasso',
        label: 'Morfasso'
      },
      {
        value: 'Ottone',
        label: 'Ottone'
      },
      {
        value: 'Piacenza',
        label: 'Piacenza'
      },
      {
        value: 'Pianello Val Tidone',
        label: 'Pianello Val Tidone'
      },
      {
        value: 'Piozzano',
        label: 'Piozzano'
      },
      {
        value: 'Podenzano',
        label: 'Podenzano'
      },
      {
        value: 'Ponte dell\'Olio',
        label: 'Ponte dell\'Olio'
      },
      {
        value: 'Pontenure',
        label: 'Pontenure'
      },
      {
        value: 'Rivergaro',
        label: 'Rivergaro'
      },
      {
        value: 'Rottofreno',
        label: 'Rottofreno'
      },
      {
        value: 'San Giorgio Piacentino',
        label: 'San Giorgio Piacentino'
      },
      {
        value: 'San Pietro in Cerro',
        label: 'San Pietro in Cerro'
      },
      {
        value: 'Sarmato',
        label: 'Sarmato'
      },
      {
        value: 'Travo',
        label: 'Travo'
      },
      {
        value: 'Vernasca',
        label: 'Vernasca'
      },
      {
        value: 'Vigolzone',
        label: 'Vigolzone'
      },
      {
        value: 'Villanova sull\'Arda',
        label: 'Villanova sull\'Arda'
      },
      {
        value: 'Zerba',
        label: 'Zerba'
      },
      {
        value: 'Ziano Piacentino',
        label: 'Ziano Piacentino'
      },
      {
        value: 'Alta Val Tidone',
        label: 'Alta Val Tidone'
      },
      {
        value: 'Albareto',
        label: 'Albareto'
      },
      {
        value: 'Bardi',
        label: 'Bardi'
      },
      {
        value: 'Bedonia',
        label: 'Bedonia'
      },
      {
        value: 'Berceto',
        label: 'Berceto'
      },
      {
        value: 'Bore',
        label: 'Bore'
      },
      {
        value: 'Borgo Val di Taro',
        label: 'Borgo Val di Taro'
      },
      {
        value: 'Busseto',
        label: 'Busseto'
      },
      {
        value: 'Calestano',
        label: 'Calestano'
      },
      {
        value: 'Collecchio',
        label: 'Collecchio'
      },
      {
        value: 'Colorno',
        label: 'Colorno'
      },
      {
        value: 'Compiano',
        label: 'Compiano'
      },
      {
        value: 'Corniglio',
        label: 'Corniglio'
      },
      {
        value: 'Felino',
        label: 'Felino'
      },
      {
        value: 'Fidenza',
        label: 'Fidenza'
      },
      {
        value: 'Fontanellato',
        label: 'Fontanellato'
      },
      {
        value: 'Fontevivo',
        label: 'Fontevivo'
      },
      {
        value: 'Fornovo di Taro',
        label: 'Fornovo di Taro'
      },
      {
        value: 'Langhirano',
        label: 'Langhirano'
      },
      {
        value: 'Lesignano de\' Bagni',
        label: 'Lesignano de\' Bagni'
      },
      {
        value: 'Medesano',
        label: 'Medesano'
      },
      {
        value: 'Monchio delle Corti',
        label: 'Monchio delle Corti'
      },
      {
        value: 'Montechiarugolo',
        label: 'Montechiarugolo'
      },
      {
        value: 'Neviano degli Arduini',
        label: 'Neviano degli Arduini'
      },
      {
        value: 'Noceto',
        label: 'Noceto'
      },
      {
        value: 'Palanzano',
        label: 'Palanzano'
      },
      {
        value: 'Parma',
        label: 'Parma'
      },
      {
        value: 'Pellegrino Parmense',
        label: 'Pellegrino Parmense'
      },
      {
        value: 'Roccabianca',
        label: 'Roccabianca'
      },
      {
        value: 'Sala Baganza',
        label: 'Sala Baganza'
      },
      {
        value: 'Salsomaggiore Terme',
        label: 'Salsomaggiore Terme'
      },
      {
        value: 'San Secondo Parmense',
        label: 'San Secondo Parmense'
      },
      {
        value: 'Solignano',
        label: 'Solignano'
      },
      {
        value: 'Soragna',
        label: 'Soragna'
      },
      {
        value: 'Terenzo',
        label: 'Terenzo'
      },
      {
        value: 'Tizzano Val Parma',
        label: 'Tizzano Val Parma'
      },
      {
        value: 'Tornolo',
        label: 'Tornolo'
      },
      {
        value: 'Torrile',
        label: 'Torrile'
      },
      {
        value: 'Traversetolo',
        label: 'Traversetolo'
      },
      {
        value: 'Valmozzola',
        label: 'Valmozzola'
      },
      {
        value: 'Varano de\' Melegari',
        label: 'Varano de\' Melegari'
      },
      {
        value: 'Varsi',
        label: 'Varsi'
      },
      {
        value: 'Sissa Trecasali',
        label: 'Sissa Trecasali'
      },
      {
        value: 'Polesine Zibello',
        label: 'Polesine Zibello'
      },
      {
        value: 'Sorbolo Mezzani',
        label: 'Sorbolo Mezzani'
      },
      {
        value: 'Albinea',
        label: 'Albinea'
      },
      {
        value: 'Bagnolo in Piano',
        label: 'Bagnolo in Piano'
      },
      {
        value: 'Baiso',
        label: 'Baiso'
      },
      {
        value: 'Bibbiano',
        label: 'Bibbiano'
      },
      {
        value: 'Boretto',
        label: 'Boretto'
      },
      {
        value: 'Brescello',
        label: 'Brescello'
      },
      {
        value: 'Cadelbosco di Sopra',
        label: 'Cadelbosco di Sopra'
      },
      {
        value: 'Campagnola Emilia',
        label: 'Campagnola Emilia'
      },
      {
        value: 'Campegine',
        label: 'Campegine'
      },
      {
        value: 'Carpineti',
        label: 'Carpineti'
      },
      {
        value: 'Casalgrande',
        label: 'Casalgrande'
      },
      {
        value: 'Casina',
        label: 'Casina'
      },
      {
        value: 'Castellarano',
        label: 'Castellarano'
      },
      {
        value: 'Castelnovo di Sotto',
        label: 'Castelnovo di Sotto'
      },
      {
        value: 'Castelnovo ne\' Monti',
        label: 'Castelnovo ne\' Monti'
      },
      {
        value: 'Cavriago',
        label: 'Cavriago'
      },
      {
        value: 'Canossa',
        label: 'Canossa'
      },
      {
        value: 'Correggio',
        label: 'Correggio'
      },
      {
        value: 'Fabbrico',
        label: 'Fabbrico'
      },
      {
        value: 'Gattatico',
        label: 'Gattatico'
      },
      {
        value: 'Gualtieri',
        label: 'Gualtieri'
      },
      {
        value: 'Guastalla',
        label: 'Guastalla'
      },
      {
        value: 'Luzzara',
        label: 'Luzzara'
      },
      {
        value: 'Montecchio Emilia',
        label: 'Montecchio Emilia'
      },
      {
        value: 'Novellara',
        label: 'Novellara'
      },
      {
        value: 'Poviglio',
        label: 'Poviglio'
      },
      {
        value: 'Quattro Castella',
        label: 'Quattro Castella'
      },
      {
        value: 'Reggiolo',
        label: 'Reggiolo'
      },
      {
        value: 'Reggio nell\'Emilia',
        label: 'Reggio nell\'Emilia'
      },
      {
        value: 'Rio Saliceto',
        label: 'Rio Saliceto'
      },
      {
        value: 'Rolo',
        label: 'Rolo'
      },
      {
        value: 'Rubiera',
        label: 'Rubiera'
      },
      {
        value: 'San Martino in Rio',
        label: 'San Martino in Rio'
      },
      {
        value: 'San Polo d\'Enza',
        label: 'San Polo d\'Enza'
      },
      {
        value: 'Sant\'Ilario d\'Enza',
        label: 'Sant\'Ilario d\'Enza'
      },
      {
        value: 'Scandiano',
        label: 'Scandiano'
      },
      {
        value: 'Toano',
        label: 'Toano'
      },
      {
        value: 'Vetto',
        label: 'Vetto'
      },
      {
        value: 'Vezzano sul Crostolo',
        label: 'Vezzano sul Crostolo'
      },
      {
        value: 'Viano',
        label: 'Viano'
      },
      {
        value: 'Villa Minozzo',
        label: 'Villa Minozzo'
      },
      {
        value: 'Ventasso',
        label: 'Ventasso'
      },
      {
        value: 'Bastiglia',
        label: 'Bastiglia'
      },
      {
        value: 'Bomporto',
        label: 'Bomporto'
      },
      {
        value: 'Campogalliano',
        label: 'Campogalliano'
      },
      {
        value: 'Camposanto',
        label: 'Camposanto'
      },
      {
        value: 'Carpi',
        label: 'Carpi'
      },
      {
        value: 'Castelfranco Emilia',
        label: 'Castelfranco Emilia'
      },
      {
        value: 'Castelnuovo Rangone',
        label: 'Castelnuovo Rangone'
      },
      {
        value: 'Castelvetro di Modena',
        label: 'Castelvetro di Modena'
      },
      {
        value: 'Cavezzo',
        label: 'Cavezzo'
      },
      {
        value: 'Concordia sulla Secchia',
        label: 'Concordia sulla Secchia'
      },
      {
        value: 'Fanano',
        label: 'Fanano'
      },
      {
        value: 'Finale Emilia',
        label: 'Finale Emilia'
      },
      {
        value: 'Fiorano Modenese',
        label: 'Fiorano Modenese'
      },
      {
        value: 'Fiumalbo',
        label: 'Fiumalbo'
      },
      {
        value: 'Formigine',
        label: 'Formigine'
      },
      {
        value: 'Frassinoro',
        label: 'Frassinoro'
      },
      {
        value: 'Guiglia',
        label: 'Guiglia'
      },
      {
        value: 'Lama Mocogno',
        label: 'Lama Mocogno'
      },
      {
        value: 'Maranello',
        label: 'Maranello'
      },
      {
        value: 'Marano sul Panaro',
        label: 'Marano sul Panaro'
      },
      {
        value: 'Medolla',
        label: 'Medolla'
      },
      {
        value: 'Mirandola',
        label: 'Mirandola'
      },
      {
        value: 'Modena',
        label: 'Modena'
      },
      {
        value: 'Montecreto',
        label: 'Montecreto'
      },
      {
        value: 'Montefiorino',
        label: 'Montefiorino'
      },
      {
        value: 'Montese',
        label: 'Montese'
      },
      {
        value: 'Nonantola',
        label: 'Nonantola'
      },
      {
        value: 'Novi di Modena',
        label: 'Novi di Modena'
      },
      {
        value: 'Palagano',
        label: 'Palagano'
      },
      {
        value: 'Pavullo nel Frignano',
        label: 'Pavullo nel Frignano'
      },
      {
        value: 'Pievepelago',
        label: 'Pievepelago'
      },
      {
        value: 'Polinago',
        label: 'Polinago'
      },
      {
        value: 'Prignano sulla Secchia',
        label: 'Prignano sulla Secchia'
      },
      {
        value: 'Ravarino',
        label: 'Ravarino'
      },
      {
        value: 'Riolunato',
        label: 'Riolunato'
      },
      {
        value: 'San Cesario sul Panaro',
        label: 'San Cesario sul Panaro'
      },
      {
        value: 'San Felice sul Panaro',
        label: 'San Felice sul Panaro'
      },
      {
        value: 'San Possidonio',
        label: 'San Possidonio'
      },
      {
        value: 'San Prospero',
        label: 'San Prospero'
      },
      {
        value: 'Sassuolo',
        label: 'Sassuolo'
      },
      {
        value: 'Savignano sul Panaro',
        label: 'Savignano sul Panaro'
      },
      {
        value: 'Serramazzoni',
        label: 'Serramazzoni'
      },
      {
        value: 'Sestola',
        label: 'Sestola'
      },
      {
        value: 'Soliera',
        label: 'Soliera'
      },
      {
        value: 'Spilamberto',
        label: 'Spilamberto'
      },
      {
        value: 'Vignola',
        label: 'Vignola'
      },
      {
        value: 'Zocca',
        label: 'Zocca'
      },
      {
        value: 'Anzola dell\'Emilia',
        label: 'Anzola dell\'Emilia'
      },
      {
        value: 'Argelato',
        label: 'Argelato'
      },
      {
        value: 'Baricella',
        label: 'Baricella'
      },
      {
        value: 'Bentivoglio',
        label: 'Bentivoglio'
      },
      {
        value: 'Bologna',
        label: 'Bologna'
      },
      {
        value: 'Borgo Tossignano',
        label: 'Borgo Tossignano'
      },
      {
        value: 'Budrio',
        label: 'Budrio'
      },
      {
        value: 'Calderara di Reno',
        label: 'Calderara di Reno'
      },
      {
        value: 'Camugnano',
        label: 'Camugnano'
      },
      {
        value: 'Casalecchio di Reno',
        label: 'Casalecchio di Reno'
      },
      {
        value: 'Casalfiumanese',
        label: 'Casalfiumanese'
      },
      {
        value: 'Castel d\'Aiano',
        label: 'Castel d\'Aiano'
      },
      {
        value: 'Castel del Rio',
        label: 'Castel del Rio'
      },
      {
        value: 'Castel di Casio',
        label: 'Castel di Casio'
      },
      {
        value: 'Castel Guelfo di Bologna',
        label: 'Castel Guelfo di Bologna'
      },
      {
        value: 'Castello d\'Argile',
        label: 'Castello d\'Argile'
      },
      {
        value: 'Castel Maggiore',
        label: 'Castel Maggiore'
      },
      {
        value: 'Castel San Pietro Terme',
        label: 'Castel San Pietro Terme'
      },
      {
        value: 'Castenaso',
        label: 'Castenaso'
      },
      {
        value: 'Castiglione dei Pepoli',
        label: 'Castiglione dei Pepoli'
      },
      {
        value: 'Crevalcore',
        label: 'Crevalcore'
      },
      {
        value: 'Dozza',
        label: 'Dozza'
      },
      {
        value: 'Fontanelice',
        label: 'Fontanelice'
      },
      {
        value: 'Gaggio Montano',
        label: 'Gaggio Montano'
      },
      {
        value: 'Galliera',
        label: 'Galliera'
      },
      {
        value: 'Granarolo dell\'Emilia',
        label: 'Granarolo dell\'Emilia'
      },
      {
        value: 'Grizzana Morandi',
        label: 'Grizzana Morandi'
      },
      {
        value: 'Imola',
        label: 'Imola'
      },
      {
        value: 'Lizzano in Belvedere',
        label: 'Lizzano in Belvedere'
      },
      {
        value: 'Loiano',
        label: 'Loiano'
      },
      {
        value: 'Malalbergo',
        label: 'Malalbergo'
      },
      {
        value: 'Marzabotto',
        label: 'Marzabotto'
      },
      {
        value: 'Medicina',
        label: 'Medicina'
      },
      {
        value: 'Minerbio',
        label: 'Minerbio'
      },
      {
        value: 'Molinella',
        label: 'Molinella'
      },
      {
        value: 'Monghidoro',
        label: 'Monghidoro'
      },
      {
        value: 'Monterenzio',
        label: 'Monterenzio'
      },
      {
        value: 'Monte San Pietro',
        label: 'Monte San Pietro'
      },
      {
        value: 'Monzuno',
        label: 'Monzuno'
      },
      {
        value: 'Mordano',
        label: 'Mordano'
      },
      {
        value: 'Ozzano dell\'Emilia',
        label: 'Ozzano dell\'Emilia'
      },
      {
        value: 'Pianoro',
        label: 'Pianoro'
      },
      {
        value: 'Pieve di Cento',
        label: 'Pieve di Cento'
      },
      {
        value: 'Sala Bolognese',
        label: 'Sala Bolognese'
      },
      {
        value: 'San Benedetto Val di Sambro',
        label: 'San Benedetto Val di Sambro'
      },
      {
        value: 'San Giorgio di Piano',
        label: 'San Giorgio di Piano'
      },
      {
        value: 'San Giovanni in Persiceto',
        label: 'San Giovanni in Persiceto'
      },
      {
        value: 'San Lazzaro di Savena',
        label: 'San Lazzaro di Savena'
      },
      {
        value: 'San Pietro in Casale',
        label: 'San Pietro in Casale'
      },
      {
        value: 'Sant\'Agata Bolognese',
        label: 'Sant\'Agata Bolognese'
      },
      {
        value: 'Sasso Marconi',
        label: 'Sasso Marconi'
      },
      {
        value: 'Vergato',
        label: 'Vergato'
      },
      {
        value: 'Zola Predosa',
        label: 'Zola Predosa'
      },
      {
        value: 'Valsamoggia',
        label: 'Valsamoggia'
      },
      {
        value: 'Alto Reno Terme',
        label: 'Alto Reno Terme'
      },
      {
        value: 'Argenta',
        label: 'Argenta'
      },
      {
        value: 'Bondeno',
        label: 'Bondeno'
      },
      {
        value: 'Cento',
        label: 'Cento'
      },
      {
        value: 'Codigoro',
        label: 'Codigoro'
      },
      {
        value: 'Comacchio',
        label: 'Comacchio'
      },
      {
        value: 'Copparo',
        label: 'Copparo'
      },
      {
        value: 'Ferrara',
        label: 'Ferrara'
      },
      {
        value: 'Jolanda di Savoia',
        label: 'Jolanda di Savoia'
      },
      {
        value: 'Lagosanto',
        label: 'Lagosanto'
      },
      {
        value: 'Masi Torello',
        label: 'Masi Torello'
      },
      {
        value: 'Mesola',
        label: 'Mesola'
      },
      {
        value: 'Ostellato',
        label: 'Ostellato'
      },
      {
        value: 'Poggio Renatico',
        label: 'Poggio Renatico'
      },
      {
        value: 'Portomaggiore',
        label: 'Portomaggiore'
      },
      {
        value: 'Vigarano Mainarda',
        label: 'Vigarano Mainarda'
      },
      {
        value: 'Voghiera',
        label: 'Voghiera'
      },
      {
        value: 'Goro',
        label: 'Goro'
      },
      {
        value: 'Fiscaglia',
        label: 'Fiscaglia'
      },
      {
        value: 'Terre del Reno',
        label: 'Terre del Reno'
      },
      {
        value: 'Riva del Po',
        label: 'Riva del Po'
      },
      {
        value: 'Tresignana',
        label: 'Tresignana'
      },
      {
        value: 'Alfonsine',
        label: 'Alfonsine'
      },
      {
        value: 'Bagnacavallo',
        label: 'Bagnacavallo'
      },
      {
        value: 'Bagnara di Romagna',
        label: 'Bagnara di Romagna'
      },
      {
        value: 'Brisighella',
        label: 'Brisighella'
      },
      {
        value: 'Casola Valsenio',
        label: 'Casola Valsenio'
      },
      {
        value: 'Castel Bolognese',
        label: 'Castel Bolognese'
      },
      {
        value: 'Cervia',
        label: 'Cervia'
      },
      {
        value: 'Conselice',
        label: 'Conselice'
      },
      {
        value: 'Cotignola',
        label: 'Cotignola'
      },
      {
        value: 'Faenza',
        label: 'Faenza'
      },
      {
        value: 'Fusignano',
        label: 'Fusignano'
      },
      {
        value: 'Lugo',
        label: 'Lugo'
      },
      {
        value: 'Massa Lombarda',
        label: 'Massa Lombarda'
      },
      {
        value: 'Ravenna',
        label: 'Ravenna'
      },
      {
        value: 'Riolo Terme',
        label: 'Riolo Terme'
      },
      {
        value: 'Russi',
        label: 'Russi'
      },
      {
        value: 'Sant\'Agata sul Santerno',
        label: 'Sant\'Agata sul Santerno'
      },
      {
        value: 'Solarolo',
        label: 'Solarolo'
      },
      {
        value: 'Bagno di Romagna',
        label: 'Bagno di Romagna'
      },
      {
        value: 'Bertinoro',
        label: 'Bertinoro'
      },
      {
        value: 'Borghi',
        label: 'Borghi'
      },
      {
        value: 'Castrocaro Terme e Terra del Sole',
        label: 'Castrocaro Terme e Terra del Sole'
      },
      {
        value: 'Cesena',
        label: 'Cesena'
      },
      {
        value: 'Cesenatico',
        label: 'Cesenatico'
      },
      {
        value: 'Civitella di Romagna',
        label: 'Civitella di Romagna'
      },
      {
        value: 'Dovadola',
        label: 'Dovadola'
      },
      {
        value: 'Forlì',
        label: 'Forlì'
      },
      {
        value: 'Forlimpopoli',
        label: 'Forlimpopoli'
      },
      {
        value: 'Galeata',
        label: 'Galeata'
      },
      {
        value: 'Gambettola',
        label: 'Gambettola'
      },
      {
        value: 'Gatteo',
        label: 'Gatteo'
      },
      {
        value: 'Longiano',
        label: 'Longiano'
      },
      {
        value: 'Meldola',
        label: 'Meldola'
      },
      {
        value: 'Mercato Saraceno',
        label: 'Mercato Saraceno'
      },
      {
        value: 'Modigliana',
        label: 'Modigliana'
      },
      {
        value: 'Montiano',
        label: 'Montiano'
      },
      {
        value: 'Portico e San Benedetto',
        label: 'Portico e San Benedetto'
      },
      {
        value: 'Predappio',
        label: 'Predappio'
      },
      {
        value: 'Premilcuore',
        label: 'Premilcuore'
      },
      {
        value: 'Rocca San Casciano',
        label: 'Rocca San Casciano'
      },
      {
        value: 'Roncofreddo',
        label: 'Roncofreddo'
      },
      {
        value: 'San Mauro Pascoli',
        label: 'San Mauro Pascoli'
      },
      {
        value: 'Santa Sofia',
        label: 'Santa Sofia'
      },
      {
        value: 'Sarsina',
        label: 'Sarsina'
      },
      {
        value: 'Savignano sul Rubicone',
        label: 'Savignano sul Rubicone'
      },
      {
        value: 'Sogliano al Rubicone',
        label: 'Sogliano al Rubicone'
      },
      {
        value: 'Tredozio',
        label: 'Tredozio'
      },
      {
        value: 'Verghereto',
        label: 'Verghereto'
      },
      {
        value: 'Acqualagna',
        label: 'Acqualagna'
      },
      {
        value: 'Apecchio',
        label: 'Apecchio'
      },
      {
        value: 'Belforte all\'Isauro',
        label: 'Belforte all\'Isauro'
      },
      {
        value: 'Borgo Pace',
        label: 'Borgo Pace'
      },
      {
        value: 'Cagli',
        label: 'Cagli'
      },
      {
        value: 'Cantiano',
        label: 'Cantiano'
      },
      {
        value: 'Carpegna',
        label: 'Carpegna'
      },
      {
        value: 'Cartoceto',
        label: 'Cartoceto'
      },
      {
        value: 'Fano',
        label: 'Fano'
      },
      {
        value: 'Fermignano',
        label: 'Fermignano'
      },
      {
        value: 'Fossombrone',
        label: 'Fossombrone'
      },
      {
        value: 'Fratte Rosa',
        label: 'Fratte Rosa'
      },
      {
        value: 'Frontino',
        label: 'Frontino'
      },
      {
        value: 'Frontone',
        label: 'Frontone'
      },
      {
        value: 'Gabicce Mare',
        label: 'Gabicce Mare'
      },
      {
        value: 'Gradara',
        label: 'Gradara'
      },
      {
        value: 'Isola del Piano',
        label: 'Isola del Piano'
      },
      {
        value: 'Lunano',
        label: 'Lunano'
      },
      {
        value: 'Macerata Feltria',
        label: 'Macerata Feltria'
      },
      {
        value: 'Mercatello sul Metauro',
        label: 'Mercatello sul Metauro'
      },
      {
        value: 'Mercatino Conca',
        label: 'Mercatino Conca'
      },
      {
        value: 'Mombaroccio',
        label: 'Mombaroccio'
      },
      {
        value: 'Mondavio',
        label: 'Mondavio'
      },
      {
        value: 'Mondolfo',
        label: 'Mondolfo'
      },
      {
        value: 'Montecalvo in Foglia',
        label: 'Montecalvo in Foglia'
      },
      {
        value: 'Monte Cerignone',
        label: 'Monte Cerignone'
      },
      {
        value: 'Montefelcino',
        label: 'Montefelcino'
      },
      {
        value: 'Monte Grimano Terme',
        label: 'Monte Grimano Terme'
      },
      {
        value: 'Montelabbate',
        label: 'Montelabbate'
      },
      {
        value: 'Monte Porzio',
        label: 'Monte Porzio'
      },
      {
        value: 'Pergola',
        label: 'Pergola'
      },
      {
        value: 'Pesaro',
        label: 'Pesaro'
      },
      {
        value: 'Petriano',
        label: 'Petriano'
      },
      {
        value: 'Piandimeleto',
        label: 'Piandimeleto'
      },
      {
        value: 'Pietrarubbia',
        label: 'Pietrarubbia'
      },
      {
        value: 'Piobbico',
        label: 'Piobbico'
      },
      {
        value: 'San Costanzo',
        label: 'San Costanzo'
      },
      {
        value: 'San Lorenzo in Campo',
        label: 'San Lorenzo in Campo'
      },
      {
        value: 'Sant\'Angelo in Vado',
        label: 'Sant\'Angelo in Vado'
      },
      {
        value: 'Sant\'Ippolito',
        label: 'Sant\'Ippolito'
      },
      {
        value: 'Serra Sant\'Abbondio',
        label: 'Serra Sant\'Abbondio'
      },
      {
        value: 'Tavoleto',
        label: 'Tavoleto'
      },
      {
        value: 'Tavullia',
        label: 'Tavullia'
      },
      {
        value: 'Urbania',
        label: 'Urbania'
      },
      {
        value: 'Urbino',
        label: 'Urbino'
      },
      {
        value: 'Vallefoglia',
        label: 'Vallefoglia'
      },
      {
        value: 'Colli al Metauro',
        label: 'Colli al Metauro'
      },
      {
        value: 'Terre Roveresche',
        label: 'Terre Roveresche'
      },
      {
        value: 'Sassocorvaro Auditore',
        label: 'Sassocorvaro Auditore'
      },
      {
        value: 'Agugliano',
        label: 'Agugliano'
      },
      {
        value: 'Ancona',
        label: 'Ancona'
      },
      {
        value: 'Arcevia',
        label: 'Arcevia'
      },
      {
        value: 'Barbara',
        label: 'Barbara'
      },
      {
        value: 'Belvedere Ostrense',
        label: 'Belvedere Ostrense'
      },
      {
        value: 'Camerano',
        label: 'Camerano'
      },
      {
        value: 'Camerata Picena',
        label: 'Camerata Picena'
      },
      {
        value: 'Castelbellino',
        label: 'Castelbellino'
      },
      {
        value: 'Castelfidardo',
        label: 'Castelfidardo'
      },
      {
        value: 'Castelleone di Suasa',
        label: 'Castelleone di Suasa'
      },
      {
        value: 'Castelplanio',
        label: 'Castelplanio'
      },
      {
        value: 'Cerreto d\'Esi',
        label: 'Cerreto d\'Esi'
      },
      {
        value: 'Chiaravalle',
        label: 'Chiaravalle'
      },
      {
        value: 'Corinaldo',
        label: 'Corinaldo'
      },
      {
        value: 'Cupramontana',
        label: 'Cupramontana'
      },
      {
        value: 'Fabriano',
        label: 'Fabriano'
      },
      {
        value: 'Falconara Marittima',
        label: 'Falconara Marittima'
      },
      {
        value: 'Filottrano',
        label: 'Filottrano'
      },
      {
        value: 'Genga',
        label: 'Genga'
      },
      {
        value: 'Jesi',
        label: 'Jesi'
      },
      {
        value: 'Loreto',
        label: 'Loreto'
      },
      {
        value: 'Maiolati Spontini',
        label: 'Maiolati Spontini'
      },
      {
        value: 'Mergo',
        label: 'Mergo'
      },
      {
        value: 'Monsano',
        label: 'Monsano'
      },
      {
        value: 'Montecarotto',
        label: 'Montecarotto'
      },
      {
        value: 'Montemarciano',
        label: 'Montemarciano'
      },
      {
        value: 'Monte Roberto',
        label: 'Monte Roberto'
      },
      {
        value: 'Monte San Vito',
        label: 'Monte San Vito'
      },
      {
        value: 'Morro d\'Alba',
        label: 'Morro d\'Alba'
      },
      {
        value: 'Numana',
        label: 'Numana'
      },
      {
        value: 'Offagna',
        label: 'Offagna'
      },
      {
        value: 'Osimo',
        label: 'Osimo'
      },
      {
        value: 'Ostra',
        label: 'Ostra'
      },
      {
        value: 'Ostra Vetere',
        label: 'Ostra Vetere'
      },
      {
        value: 'Poggio San Marcello',
        label: 'Poggio San Marcello'
      },
      {
        value: 'Polverigi',
        label: 'Polverigi'
      },
      {
        value: 'Rosora',
        label: 'Rosora'
      },
      {
        value: 'San Marcello',
        label: 'San Marcello'
      },
      {
        value: 'San Paolo di Jesi',
        label: 'San Paolo di Jesi'
      },
      {
        value: 'Santa Maria Nuova',
        label: 'Santa Maria Nuova'
      },
      {
        value: 'Sassoferrato',
        label: 'Sassoferrato'
      },
      {
        value: 'Senigallia',
        label: 'Senigallia'
      },
      {
        value: 'Serra de\' Conti',
        label: 'Serra de\' Conti'
      },
      {
        value: 'Serra San Quirico',
        label: 'Serra San Quirico'
      },
      {
        value: 'Sirolo',
        label: 'Sirolo'
      },
      {
        value: 'Staffolo',
        label: 'Staffolo'
      },
      {
        value: 'Trecastelli',
        label: 'Trecastelli'
      },
      {
        value: 'Apiro',
        label: 'Apiro'
      },
      {
        value: 'Appignano',
        label: 'Appignano'
      },
      {
        value: 'Belforte del Chienti',
        label: 'Belforte del Chienti'
      },
      {
        value: 'Bolognola',
        label: 'Bolognola'
      },
      {
        value: 'Caldarola',
        label: 'Caldarola'
      },
      {
        value: 'Camerino',
        label: 'Camerino'
      },
      {
        value: 'Camporotondo di Fiastrone',
        label: 'Camporotondo di Fiastrone'
      },
      {
        value: 'Castelraimondo',
        label: 'Castelraimondo'
      },
      {
        value: 'Castelsantangelo sul Nera',
        label: 'Castelsantangelo sul Nera'
      },
      {
        value: 'Cessapalombo',
        label: 'Cessapalombo'
      },
      {
        value: 'Cingoli',
        label: 'Cingoli'
      },
      {
        value: 'Civitanova Marche',
        label: 'Civitanova Marche'
      },
      {
        value: 'Colmurano',
        label: 'Colmurano'
      },
      {
        value: 'Corridonia',
        label: 'Corridonia'
      },
      {
        value: 'Esanatoglia',
        label: 'Esanatoglia'
      },
      {
        value: 'Fiastra',
        label: 'Fiastra'
      },
      {
        value: 'Fiuminata',
        label: 'Fiuminata'
      },
      {
        value: 'Gagliole',
        label: 'Gagliole'
      },
      {
        value: 'Gualdo',
        label: 'Gualdo'
      },
      {
        value: 'Loro Piceno',
        label: 'Loro Piceno'
      },
      {
        value: 'Macerata',
        label: 'Macerata'
      },
      {
        value: 'Matelica',
        label: 'Matelica'
      },
      {
        value: 'Mogliano',
        label: 'Mogliano'
      },
      {
        value: 'Montecassiano',
        label: 'Montecassiano'
      },
      {
        value: 'Monte Cavallo',
        label: 'Monte Cavallo'
      },
      {
        value: 'Montecosaro',
        label: 'Montecosaro'
      },
      {
        value: 'Montefano',
        label: 'Montefano'
      },
      {
        value: 'Montelupone',
        label: 'Montelupone'
      },
      {
        value: 'Monte San Giusto',
        label: 'Monte San Giusto'
      },
      {
        value: 'Monte San Martino',
        label: 'Monte San Martino'
      },
      {
        value: 'Morrovalle',
        label: 'Morrovalle'
      },
      {
        value: 'Muccia',
        label: 'Muccia'
      },
      {
        value: 'Penna San Giovanni',
        label: 'Penna San Giovanni'
      },
      {
        value: 'Petriolo',
        label: 'Petriolo'
      },
      {
        value: 'Pieve Torina',
        label: 'Pieve Torina'
      },
      {
        value: 'Pioraco',
        label: 'Pioraco'
      },
      {
        value: 'Poggio San Vicino',
        label: 'Poggio San Vicino'
      },
      {
        value: 'Pollenza',
        label: 'Pollenza'
      },
      {
        value: 'Porto Recanati',
        label: 'Porto Recanati'
      },
      {
        value: 'Potenza Picena',
        label: 'Potenza Picena'
      },
      {
        value: 'Recanati',
        label: 'Recanati'
      },
      {
        value: 'Ripe San Ginesio',
        label: 'Ripe San Ginesio'
      },
      {
        value: 'San Ginesio',
        label: 'San Ginesio'
      },
      {
        value: 'San Severino Marche',
        label: 'San Severino Marche'
      },
      {
        value: 'Sant\'Angelo in Pontano',
        label: 'Sant\'Angelo in Pontano'
      },
      {
        value: 'Sarnano',
        label: 'Sarnano'
      },
      {
        value: 'Sefro',
        label: 'Sefro'
      },
      {
        value: 'Serrapetrona',
        label: 'Serrapetrona'
      },
      {
        value: 'Serravalle di Chienti',
        label: 'Serravalle di Chienti'
      },
      {
        value: 'Tolentino',
        label: 'Tolentino'
      },
      {
        value: 'Treia',
        label: 'Treia'
      },
      {
        value: 'Urbisaglia',
        label: 'Urbisaglia'
      },
      {
        value: 'Ussita',
        label: 'Ussita'
      },
      {
        value: 'Visso',
        label: 'Visso'
      },
      {
        value: 'Valfornace',
        label: 'Valfornace'
      },
      {
        value: 'Acquasanta Terme',
        label: 'Acquasanta Terme'
      },
      {
        value: 'Acquaviva Picena',
        label: 'Acquaviva Picena'
      },
      {
        value: 'Appignano del Tronto',
        label: 'Appignano del Tronto'
      },
      {
        value: 'Arquata del Tronto',
        label: 'Arquata del Tronto'
      },
      {
        value: 'Ascoli Piceno',
        label: 'Ascoli Piceno'
      },
      {
        value: 'Carassai',
        label: 'Carassai'
      },
      {
        value: 'Castel di Lama',
        label: 'Castel di Lama'
      },
      {
        value: 'Castignano',
        label: 'Castignano'
      },
      {
        value: 'Castorano',
        label: 'Castorano'
      },
      {
        value: 'Colli del Tronto',
        label: 'Colli del Tronto'
      },
      {
        value: 'Comunanza',
        label: 'Comunanza'
      },
      {
        value: 'Cossignano',
        label: 'Cossignano'
      },
      {
        value: 'Cupra Marittima',
        label: 'Cupra Marittima'
      },
      {
        value: 'Folignano',
        label: 'Folignano'
      },
      {
        value: 'Force',
        label: 'Force'
      },
      {
        value: 'Grottammare',
        label: 'Grottammare'
      },
      {
        value: 'Maltignano',
        label: 'Maltignano'
      },
      {
        value: 'Massignano',
        label: 'Massignano'
      },
      {
        value: 'Monsampolo del Tronto',
        label: 'Monsampolo del Tronto'
      },
      {
        value: 'Montalto delle Marche',
        label: 'Montalto delle Marche'
      },
      {
        value: 'Montedinove',
        label: 'Montedinove'
      },
      {
        value: 'Montefiore dell\'Aso',
        label: 'Montefiore dell\'Aso'
      },
      {
        value: 'Montegallo',
        label: 'Montegallo'
      },
      {
        value: 'Montemonaco',
        label: 'Montemonaco'
      },
      {
        value: 'Monteprandone',
        label: 'Monteprandone'
      },
      {
        value: 'Offida',
        label: 'Offida'
      },
      {
        value: 'Palmiano',
        label: 'Palmiano'
      },
      {
        value: 'Ripatransone',
        label: 'Ripatransone'
      },
      {
        value: 'Roccafluvione',
        label: 'Roccafluvione'
      },
      {
        value: 'Rotella',
        label: 'Rotella'
      },
      {
        value: 'San Benedetto del Tronto',
        label: 'San Benedetto del Tronto'
      },
      {
        value: 'Spinetoli',
        label: 'Spinetoli'
      },
      {
        value: 'Venarotta',
        label: 'Venarotta'
      },
      {
        value: 'Aulla',
        label: 'Aulla'
      },
      {
        value: 'Bagnone',
        label: 'Bagnone'
      },
      {
        value: 'Carrara',
        label: 'Carrara'
      },
      {
        value: 'Casola in Lunigiana',
        label: 'Casola in Lunigiana'
      },
      {
        value: 'Comano',
        label: 'Comano'
      },
      {
        value: 'Filattiera',
        label: 'Filattiera'
      },
      {
        value: 'Fivizzano',
        label: 'Fivizzano'
      },
      {
        value: 'Fosdinovo',
        label: 'Fosdinovo'
      },
      {
        value: 'Licciana Nardi',
        label: 'Licciana Nardi'
      },
      {
        value: 'Massa',
        label: 'Massa'
      },
      {
        value: 'Montignoso',
        label: 'Montignoso'
      },
      {
        value: 'Mulazzo',
        label: 'Mulazzo'
      },
      {
        value: 'Podenzana',
        label: 'Podenzana'
      },
      {
        value: 'Pontremoli',
        label: 'Pontremoli'
      },
      {
        value: 'Tresana',
        label: 'Tresana'
      },
      {
        value: 'Villafranca in Lunigiana',
        label: 'Villafranca in Lunigiana'
      },
      {
        value: 'Zeri',
        label: 'Zeri'
      },
      {
        value: 'Altopascio',
        label: 'Altopascio'
      },
      {
        value: 'Bagni di Lucca',
        label: 'Bagni di Lucca'
      },
      {
        value: 'Barga',
        label: 'Barga'
      },
      {
        value: 'Borgo a Mozzano',
        label: 'Borgo a Mozzano'
      },
      {
        value: 'Camaiore',
        label: 'Camaiore'
      },
      {
        value: 'Camporgiano',
        label: 'Camporgiano'
      },
      {
        value: 'Capannori',
        label: 'Capannori'
      },
      {
        value: 'Careggine',
        label: 'Careggine'
      },
      {
        value: 'Castelnuovo di Garfagnana',
        label: 'Castelnuovo di Garfagnana'
      },
      {
        value: 'Castiglione di Garfagnana',
        label: 'Castiglione di Garfagnana'
      },
      {
        value: 'Coreglia Antelminelli',
        label: 'Coreglia Antelminelli'
      },
      {
        value: 'Forte dei Marmi',
        label: 'Forte dei Marmi'
      },
      {
        value: 'Fosciandora',
        label: 'Fosciandora'
      },
      {
        value: 'Gallicano',
        label: 'Gallicano'
      },
      {
        value: 'Lucca',
        label: 'Lucca'
      },
      {
        value: 'Massarosa',
        label: 'Massarosa'
      },
      {
        value: 'Minucciano',
        label: 'Minucciano'
      },
      {
        value: 'Molazzana',
        label: 'Molazzana'
      },
      {
        value: 'Montecarlo',
        label: 'Montecarlo'
      },
      {
        value: 'Pescaglia',
        label: 'Pescaglia'
      },
      {
        value: 'Piazza al Serchio',
        label: 'Piazza al Serchio'
      },
      {
        value: 'Pietrasanta',
        label: 'Pietrasanta'
      },
      {
        value: 'Pieve Fosciana',
        label: 'Pieve Fosciana'
      },
      {
        value: 'Porcari',
        label: 'Porcari'
      },
      {
        value: 'San Romano in Garfagnana',
        label: 'San Romano in Garfagnana'
      },
      {
        value: 'Seravezza',
        label: 'Seravezza'
      },
      {
        value: 'Stazzema',
        label: 'Stazzema'
      },
      {
        value: 'Vagli Sotto',
        label: 'Vagli Sotto'
      },
      {
        value: 'Viareggio',
        label: 'Viareggio'
      },
      {
        value: 'Villa Basilica',
        label: 'Villa Basilica'
      },
      {
        value: 'Villa Collemandina',
        label: 'Villa Collemandina'
      },
      {
        value: 'Fabbriche di Vergemoli',
        label: 'Fabbriche di Vergemoli'
      },
      {
        value: 'Sillano Giuncugnano',
        label: 'Sillano Giuncugnano'
      },
      {
        value: 'Agliana',
        label: 'Agliana'
      },
      {
        value: 'Buggiano',
        label: 'Buggiano'
      },
      {
        value: 'Lamporecchio',
        label: 'Lamporecchio'
      },
      {
        value: 'Larciano',
        label: 'Larciano'
      },
      {
        value: 'Marliana',
        label: 'Marliana'
      },
      {
        value: 'Massa e Cozzile',
        label: 'Massa e Cozzile'
      },
      {
        value: 'Monsummano Terme',
        label: 'Monsummano Terme'
      },
      {
        value: 'Montale',
        label: 'Montale'
      },
      {
        value: 'Montecatini-Terme',
        label: 'Montecatini-Terme'
      },
      {
        value: 'Pescia',
        label: 'Pescia'
      },
      {
        value: 'Pieve a Nievole',
        label: 'Pieve a Nievole'
      },
      {
        value: 'Pistoia',
        label: 'Pistoia'
      },
      {
        value: 'Ponte Buggianese',
        label: 'Ponte Buggianese'
      },
      {
        value: 'Quarrata',
        label: 'Quarrata'
      },
      {
        value: 'Sambuca Pistoiese',
        label: 'Sambuca Pistoiese'
      },
      {
        value: 'Serravalle Pistoiese',
        label: 'Serravalle Pistoiese'
      },
      {
        value: 'Uzzano',
        label: 'Uzzano'
      },
      {
        value: 'Chiesina Uzzanese',
        label: 'Chiesina Uzzanese'
      },
      {
        value: 'Abetone Cutigliano',
        label: 'Abetone Cutigliano'
      },
      {
        value: 'San Marcello Piteglio',
        label: 'San Marcello Piteglio'
      },
      {
        value: 'Bagno a Ripoli',
        label: 'Bagno a Ripoli'
      },
      {
        value: 'Barberino di Mugello',
        label: 'Barberino di Mugello'
      },
      {
        value: 'Borgo San Lorenzo',
        label: 'Borgo San Lorenzo'
      },
      {
        value: 'Calenzano',
        label: 'Calenzano'
      },
      {
        value: 'Campi Bisenzio',
        label: 'Campi Bisenzio'
      },
      {
        value: 'Capraia e Limite',
        label: 'Capraia e Limite'
      },
      {
        value: 'Castelfiorentino',
        label: 'Castelfiorentino'
      },
      {
        value: 'Cerreto Guidi',
        label: 'Cerreto Guidi'
      },
      {
        value: 'Certaldo',
        label: 'Certaldo'
      },
      {
        value: 'Dicomano',
        label: 'Dicomano'
      },
      {
        value: 'Empoli',
        label: 'Empoli'
      },
      {
        value: 'Fiesole',
        label: 'Fiesole'
      },
      {
        value: 'Firenze',
        label: 'Firenze'
      },
      {
        value: 'Firenzuola',
        label: 'Firenzuola'
      },
      {
        value: 'Fucecchio',
        label: 'Fucecchio'
      },
      {
        value: 'Gambassi Terme',
        label: 'Gambassi Terme'
      },
      {
        value: 'Greve in Chianti',
        label: 'Greve in Chianti'
      },
      {
        value: 'Impruneta',
        label: 'Impruneta'
      },
      {
        value: 'Lastra a Signa',
        label: 'Lastra a Signa'
      },
      {
        value: 'Londa',
        label: 'Londa'
      },
      {
        value: 'Marradi',
        label: 'Marradi'
      },
      {
        value: 'Montaione',
        label: 'Montaione'
      },
      {
        value: 'Montelupo Fiorentino',
        label: 'Montelupo Fiorentino'
      },
      {
        value: 'Montespertoli',
        label: 'Montespertoli'
      },
      {
        value: 'Palazzuolo sul Senio',
        label: 'Palazzuolo sul Senio'
      },
      {
        value: 'Pelago',
        label: 'Pelago'
      },
      {
        value: 'Pontassieve',
        label: 'Pontassieve'
      },
      {
        value: 'Reggello',
        label: 'Reggello'
      },
      {
        value: 'Rignano sull\'Arno',
        label: 'Rignano sull\'Arno'
      },
      {
        value: 'Rufina',
        label: 'Rufina'
      },
      {
        value: 'San Casciano in Val di Pesa',
        label: 'San Casciano in Val di Pesa'
      },
      {
        value: 'San Godenzo',
        label: 'San Godenzo'
      },
      {
        value: 'Scandicci',
        label: 'Scandicci'
      },
      {
        value: 'Sesto Fiorentino',
        label: 'Sesto Fiorentino'
      },
      {
        value: 'Signa',
        label: 'Signa'
      },
      {
        value: 'Vaglia',
        label: 'Vaglia'
      },
      {
        value: 'Vicchio',
        label: 'Vicchio'
      },
      {
        value: 'Vinci',
        label: 'Vinci'
      },
      {
        value: 'Figline e Incisa Valdarno',
        label: 'Figline e Incisa Valdarno'
      },
      {
        value: 'Scarperia e San Piero',
        label: 'Scarperia e San Piero'
      },
      {
        value: 'Barberino Tavarnelle',
        label: 'Barberino Tavarnelle'
      },
      {
        value: 'Bibbona',
        label: 'Bibbona'
      },
      {
        value: 'Campiglia Marittima',
        label: 'Campiglia Marittima'
      },
      {
        value: 'Campo nell\'Elba',
        label: 'Campo nell\'Elba'
      },
      {
        value: 'Capoliveri',
        label: 'Capoliveri'
      },
      {
        value: 'Capraia Isola',
        label: 'Capraia Isola'
      },
      {
        value: 'Castagneto Carducci',
        label: 'Castagneto Carducci'
      },
      {
        value: 'Cecina',
        label: 'Cecina'
      },
      {
        value: 'Collesalvetti',
        label: 'Collesalvetti'
      },
      {
        value: 'Livorno',
        label: 'Livorno'
      },
      {
        value: 'Marciana',
        label: 'Marciana'
      },
      {
        value: 'Marciana Marina',
        label: 'Marciana Marina'
      },
      {
        value: 'Piombino',
        label: 'Piombino'
      },
      {
        value: 'Porto Azzurro',
        label: 'Porto Azzurro'
      },
      {
        value: 'Portoferraio',
        label: 'Portoferraio'
      },
      {
        value: 'Rosignano Marittimo',
        label: 'Rosignano Marittimo'
      },
      {
        value: 'San Vincenzo',
        label: 'San Vincenzo'
      },
      {
        value: 'Sassetta',
        label: 'Sassetta'
      },
      {
        value: 'Suvereto',
        label: 'Suvereto'
      },
      {
        value: 'Rio',
        label: 'Rio'
      },
      {
        value: 'Bientina',
        label: 'Bientina'
      },
      {
        value: 'Buti',
        label: 'Buti'
      },
      {
        value: 'Calci',
        label: 'Calci'
      },
      {
        value: 'Calcinaia',
        label: 'Calcinaia'
      },
      {
        value: 'Capannoli',
        label: 'Capannoli'
      },
      {
        value: 'Casale Marittimo',
        label: 'Casale Marittimo'
      },
      {
        value: 'Cascina',
        label: 'Cascina'
      },
      {
        value: 'Castelfranco di Sotto',
        label: 'Castelfranco di Sotto'
      },
      {
        value: 'Castellina Marittima',
        label: 'Castellina Marittima'
      },
      {
        value: 'Castelnuovo di Val di Cecina',
        label: 'Castelnuovo di Val di Cecina'
      },
      {
        value: 'Chianni',
        label: 'Chianni'
      },
      {
        value: 'Fauglia',
        label: 'Fauglia'
      },
      {
        value: 'Guardistallo',
        label: 'Guardistallo'
      },
      {
        value: 'Lajatico',
        label: 'Lajatico'
      },
      {
        value: 'Montecatini Val di Cecina',
        label: 'Montecatini Val di Cecina'
      },
      {
        value: 'Montescudaio',
        label: 'Montescudaio'
      },
      {
        value: 'Monteverdi Marittimo',
        label: 'Monteverdi Marittimo'
      },
      {
        value: 'Montopoli in Val d\'Arno',
        label: 'Montopoli in Val d\'Arno'
      },
      {
        value: 'Orciano Pisano',
        label: 'Orciano Pisano'
      },
      {
        value: 'Palaia',
        label: 'Palaia'
      },
      {
        value: 'Peccioli',
        label: 'Peccioli'
      },
      {
        value: 'Pisa',
        label: 'Pisa'
      },
      {
        value: 'Pomarance',
        label: 'Pomarance'
      },
      {
        value: 'Ponsacco',
        label: 'Ponsacco'
      },
      {
        value: 'Pontedera',
        label: 'Pontedera'
      },
      {
        value: 'Riparbella',
        label: 'Riparbella'
      },
      {
        value: 'San Giuliano Terme',
        label: 'San Giuliano Terme'
      },
      {
        value: 'San Miniato',
        label: 'San Miniato'
      },
      {
        value: 'Santa Croce sull\'Arno',
        label: 'Santa Croce sull\'Arno'
      },
      {
        value: 'Santa Luce',
        label: 'Santa Luce'
      },
      {
        value: 'Santa Maria a Monte',
        label: 'Santa Maria a Monte'
      },
      {
        value: 'Terricciola',
        label: 'Terricciola'
      },
      {
        value: 'Vecchiano',
        label: 'Vecchiano'
      },
      {
        value: 'Vicopisano',
        label: 'Vicopisano'
      },
      {
        value: 'Volterra',
        label: 'Volterra'
      },
      {
        value: 'Casciana Terme Lari',
        label: 'Casciana Terme Lari'
      },
      {
        value: 'Crespina Lorenzana',
        label: 'Crespina Lorenzana'
      },
      {
        value: 'Anghiari',
        label: 'Anghiari'
      },
      {
        value: 'Arezzo',
        label: 'Arezzo'
      },
      {
        value: 'Badia Tedalda',
        label: 'Badia Tedalda'
      },
      {
        value: 'Bibbiena',
        label: 'Bibbiena'
      },
      {
        value: 'Bucine',
        label: 'Bucine'
      },
      {
        value: 'Capolona',
        label: 'Capolona'
      },
      {
        value: 'Caprese Michelangelo',
        label: 'Caprese Michelangelo'
      },
      {
        value: 'Castel Focognano',
        label: 'Castel Focognano'
      },
      {
        value: 'Castel San Niccolò',
        label: 'Castel San Niccolò'
      },
      {
        value: 'Castiglion Fibocchi',
        label: 'Castiglion Fibocchi'
      },
      {
        value: 'Castiglion Fiorentino',
        label: 'Castiglion Fiorentino'
      },
      {
        value: 'Cavriglia',
        label: 'Cavriglia'
      },
      {
        value: 'Chitignano',
        label: 'Chitignano'
      },
      {
        value: 'Chiusi della Verna',
        label: 'Chiusi della Verna'
      },
      {
        value: 'Civitella in Val di Chiana',
        label: 'Civitella in Val di Chiana'
      },
      {
        value: 'Cortona',
        label: 'Cortona'
      },
      {
        value: 'Foiano della Chiana',
        label: 'Foiano della Chiana'
      },
      {
        value: 'Loro Ciuffenna',
        label: 'Loro Ciuffenna'
      },
      {
        value: 'Lucignano',
        label: 'Lucignano'
      },
      {
        value: 'Marciano della Chiana',
        label: 'Marciano della Chiana'
      },
      {
        value: 'Montemignaio',
        label: 'Montemignaio'
      },
      {
        value: 'Monterchi',
        label: 'Monterchi'
      },
      {
        value: 'Monte San Savino',
        label: 'Monte San Savino'
      },
      {
        value: 'Montevarchi',
        label: 'Montevarchi'
      },
      {
        value: 'Ortignano Raggiolo',
        label: 'Ortignano Raggiolo'
      },
      {
        value: 'Pieve Santo Stefano',
        label: 'Pieve Santo Stefano'
      },
      {
        value: 'Poppi',
        label: 'Poppi'
      },
      {
        value: 'San Giovanni Valdarno',
        label: 'San Giovanni Valdarno'
      },
      {
        value: 'Sansepolcro',
        label: 'Sansepolcro'
      },
      {
        value: 'Sestino',
        label: 'Sestino'
      },
      {
        value: 'Subbiano',
        label: 'Subbiano'
      },
      {
        value: 'Talla',
        label: 'Talla'
      },
      {
        value: 'Terranuova Bracciolini',
        label: 'Terranuova Bracciolini'
      },
      {
        value: 'Castelfranco Piandiscò',
        label: 'Castelfranco Piandiscò'
      },
      {
        value: 'Pratovecchio Stia',
        label: 'Pratovecchio Stia'
      },
      {
        value: 'Laterina Pergine Valdarno',
        label: 'Laterina Pergine Valdarno'
      },
      {
        value: 'Abbadia San Salvatore',
        label: 'Abbadia San Salvatore'
      },
      {
        value: 'Asciano',
        label: 'Asciano'
      },
      {
        value: 'Buonconvento',
        label: 'Buonconvento'
      },
      {
        value: 'Casole d\'Elsa',
        label: 'Casole d\'Elsa'
      },
      {
        value: 'Castellina in Chianti',
        label: 'Castellina in Chianti'
      },
      {
        value: 'Castelnuovo Berardenga',
        label: 'Castelnuovo Berardenga'
      },
      {
        value: 'Castiglione d\'Orcia',
        label: 'Castiglione d\'Orcia'
      },
      {
        value: 'Cetona',
        label: 'Cetona'
      },
      {
        value: 'Chianciano Terme',
        label: 'Chianciano Terme'
      },
      {
        value: 'Chiusdino',
        label: 'Chiusdino'
      },
      {
        value: 'Chiusi',
        label: 'Chiusi'
      },
      {
        value: 'Colle di Val d\'Elsa',
        label: 'Colle di Val d\'Elsa'
      },
      {
        value: 'Gaiole in Chianti',
        label: 'Gaiole in Chianti'
      },
      {
        value: 'Montepulciano',
        label: 'Montepulciano'
      },
      {
        value: 'Monteriggioni',
        label: 'Monteriggioni'
      },
      {
        value: 'Monteroni d\'Arbia',
        label: 'Monteroni d\'Arbia'
      },
      {
        value: 'Monticiano',
        label: 'Monticiano'
      },
      {
        value: 'Murlo',
        label: 'Murlo'
      },
      {
        value: 'Piancastagnaio',
        label: 'Piancastagnaio'
      },
      {
        value: 'Pienza',
        label: 'Pienza'
      },
      {
        value: 'Poggibonsi',
        label: 'Poggibonsi'
      },
      {
        value: 'Radda in Chianti',
        label: 'Radda in Chianti'
      },
      {
        value: 'Radicofani',
        label: 'Radicofani'
      },
      {
        value: 'Radicondoli',
        label: 'Radicondoli'
      },
      {
        value: 'Rapolano Terme',
        label: 'Rapolano Terme'
      },
      {
        value: 'San Casciano dei Bagni',
        label: 'San Casciano dei Bagni'
      },
      {
        value: 'San Gimignano',
        label: 'San Gimignano'
      },
      {
        value: 'San Quirico d\'Orcia',
        label: 'San Quirico d\'Orcia'
      },
      {
        value: 'Sarteano',
        label: 'Sarteano'
      },
      {
        value: 'Siena',
        label: 'Siena'
      },
      {
        value: 'Sinalunga',
        label: 'Sinalunga'
      },
      {
        value: 'Sovicille',
        label: 'Sovicille'
      },
      {
        value: 'Torrita di Siena',
        label: 'Torrita di Siena'
      },
      {
        value: 'Trequanda',
        label: 'Trequanda'
      },
      {
        value: 'Montalcino',
        label: 'Montalcino'
      },
      {
        value: 'Arcidosso',
        label: 'Arcidosso'
      },
      {
        value: 'Campagnatico',
        label: 'Campagnatico'
      },
      {
        value: 'Capalbio',
        label: 'Capalbio'
      },
      {
        value: 'Castel del Piano',
        label: 'Castel del Piano'
      },
      {
        value: 'Castell\'Azzara',
        label: 'Castell\'Azzara'
      },
      {
        value: 'Castiglione della Pescaia',
        label: 'Castiglione della Pescaia'
      },
      {
        value: 'Cinigiano',
        label: 'Cinigiano'
      },
      {
        value: 'Civitella Paganico',
        label: 'Civitella Paganico'
      },
      {
        value: 'Follonica',
        label: 'Follonica'
      },
      {
        value: 'Gavorrano',
        label: 'Gavorrano'
      },
      {
        value: 'Grosseto',
        label: 'Grosseto'
      },
      {
        value: 'Isola del Giglio',
        label: 'Isola del Giglio'
      },
      {
        value: 'Magliano in Toscana',
        label: 'Magliano in Toscana'
      },
      {
        value: 'Manciano',
        label: 'Manciano'
      },
      {
        value: 'Massa Marittima',
        label: 'Massa Marittima'
      },
      {
        value: 'Monte Argentario',
        label: 'Monte Argentario'
      },
      {
        value: 'Montieri',
        label: 'Montieri'
      },
      {
        value: 'Orbetello',
        label: 'Orbetello'
      },
      {
        value: 'Pitigliano',
        label: 'Pitigliano'
      },
      {
        value: 'Roccalbegna',
        label: 'Roccalbegna'
      },
      {
        value: 'Roccastrada',
        label: 'Roccastrada'
      },
      {
        value: 'Santa Fiora',
        label: 'Santa Fiora'
      },
      {
        value: 'Scansano',
        label: 'Scansano'
      },
      {
        value: 'Scarlino',
        label: 'Scarlino'
      },
      {
        value: 'Seggiano',
        label: 'Seggiano'
      },
      {
        value: 'Sorano',
        label: 'Sorano'
      },
      {
        value: 'Monterotondo Marittimo',
        label: 'Monterotondo Marittimo'
      },
      {
        value: 'Semproniano',
        label: 'Semproniano'
      },
      {
        value: 'Assisi',
        label: 'Assisi'
      },
      {
        value: 'Bastia Umbra',
        label: 'Bastia Umbra'
      },
      {
        value: 'Bettona',
        label: 'Bettona'
      },
      {
        value: 'Bevagna',
        label: 'Bevagna'
      },
      {
        value: 'Campello sul Clitunno',
        label: 'Campello sul Clitunno'
      },
      {
        value: 'Cannara',
        label: 'Cannara'
      },
      {
        value: 'Cascia',
        label: 'Cascia'
      },
      {
        value: 'Castel Ritaldi',
        label: 'Castel Ritaldi'
      },
      {
        value: 'Castiglione del Lago',
        label: 'Castiglione del Lago'
      },
      {
        value: 'Cerreto di Spoleto',
        label: 'Cerreto di Spoleto'
      },
      {
        value: 'Citerna',
        label: 'Citerna'
      },
      {
        value: 'Città della Pieve',
        label: 'Città della Pieve'
      },
      {
        value: 'Città di Castello',
        label: 'Città di Castello'
      },
      {
        value: 'Collazzone',
        label: 'Collazzone'
      },
      {
        value: 'Corciano',
        label: 'Corciano'
      },
      {
        value: 'Costacciaro',
        label: 'Costacciaro'
      },
      {
        value: 'Deruta',
        label: 'Deruta'
      },
      {
        value: 'Foligno',
        label: 'Foligno'
      },
      {
        value: 'Fossato di Vico',
        label: 'Fossato di Vico'
      },
      {
        value: 'Fratta Todina',
        label: 'Fratta Todina'
      },
      {
        value: 'Giano dell\'Umbria',
        label: 'Giano dell\'Umbria'
      },
      {
        value: 'Gualdo Cattaneo',
        label: 'Gualdo Cattaneo'
      },
      {
        value: 'Gualdo Tadino',
        label: 'Gualdo Tadino'
      },
      {
        value: 'Gubbio',
        label: 'Gubbio'
      },
      {
        value: 'Lisciano Niccone',
        label: 'Lisciano Niccone'
      },
      {
        value: 'Magione',
        label: 'Magione'
      },
      {
        value: 'Marsciano',
        label: 'Marsciano'
      },
      {
        value: 'Massa Martana',
        label: 'Massa Martana'
      },
      {
        value: 'Monte Castello di Vibio',
        label: 'Monte Castello di Vibio'
      },
      {
        value: 'Montefalco',
        label: 'Montefalco'
      },
      {
        value: 'Monteleone di Spoleto',
        label: 'Monteleone di Spoleto'
      },
      {
        value: 'Monte Santa Maria Tiberina',
        label: 'Monte Santa Maria Tiberina'
      },
      {
        value: 'Montone',
        label: 'Montone'
      },
      {
        value: 'Nocera Umbra',
        label: 'Nocera Umbra'
      },
      {
        value: 'Norcia',
        label: 'Norcia'
      },
      {
        value: 'Paciano',
        label: 'Paciano'
      },
      {
        value: 'Panicale',
        label: 'Panicale'
      },
      {
        value: 'Passignano sul Trasimeno',
        label: 'Passignano sul Trasimeno'
      },
      {
        value: 'Perugia',
        label: 'Perugia'
      },
      {
        value: 'Piegaro',
        label: 'Piegaro'
      },
      {
        value: 'Pietralunga',
        label: 'Pietralunga'
      },
      {
        value: 'Poggiodomo',
        label: 'Poggiodomo'
      },
      {
        value: 'Preci',
        label: 'Preci'
      },
      {
        value: 'San Giustino',
        label: 'San Giustino'
      },
      {
        value: 'Sant\'Anatolia di Narco',
        label: 'Sant\'Anatolia di Narco'
      },
      {
        value: 'Scheggia e Pascelupo',
        label: 'Scheggia e Pascelupo'
      },
      {
        value: 'Scheggino',
        label: 'Scheggino'
      },
      {
        value: 'Sellano',
        label: 'Sellano'
      },
      {
        value: 'Sigillo',
        label: 'Sigillo'
      },
      {
        value: 'Spello',
        label: 'Spello'
      },
      {
        value: 'Spoleto',
        label: 'Spoleto'
      },
      {
        value: 'Todi',
        label: 'Todi'
      },
      {
        value: 'Torgiano',
        label: 'Torgiano'
      },
      {
        value: 'Trevi',
        label: 'Trevi'
      },
      {
        value: 'Tuoro sul Trasimeno',
        label: 'Tuoro sul Trasimeno'
      },
      {
        value: 'Umbertide',
        label: 'Umbertide'
      },
      {
        value: 'Valfabbrica',
        label: 'Valfabbrica'
      },
      {
        value: 'Vallo di Nera',
        label: 'Vallo di Nera'
      },
      {
        value: 'Valtopina',
        label: 'Valtopina'
      },
      {
        value: 'Acquasparta',
        label: 'Acquasparta'
      },
      {
        value: 'Allerona',
        label: 'Allerona'
      },
      {
        value: 'Alviano',
        label: 'Alviano'
      },
      {
        value: 'Amelia',
        label: 'Amelia'
      },
      {
        value: 'Arrone',
        label: 'Arrone'
      },
      {
        value: 'Attigliano',
        label: 'Attigliano'
      },
      {
        value: 'Baschi',
        label: 'Baschi'
      },
      {
        value: 'Calvi dell\'Umbria',
        label: 'Calvi dell\'Umbria'
      },
      {
        value: 'Castel Giorgio',
        label: 'Castel Giorgio'
      },
      {
        value: 'Castel Viscardo',
        label: 'Castel Viscardo'
      },
      {
        value: 'Fabro',
        label: 'Fabro'
      },
      {
        value: 'Ferentillo',
        label: 'Ferentillo'
      },
      {
        value: 'Ficulle',
        label: 'Ficulle'
      },
      {
        value: 'Giove',
        label: 'Giove'
      },
      {
        value: 'Guardea',
        label: 'Guardea'
      },
      {
        value: 'Lugnano in Teverina',
        label: 'Lugnano in Teverina'
      },
      {
        value: 'Montecastrilli',
        label: 'Montecastrilli'
      },
      {
        value: 'Montecchio',
        label: 'Montecchio'
      },
      {
        value: 'Montefranco',
        label: 'Montefranco'
      },
      {
        value: 'Montegabbione',
        label: 'Montegabbione'
      },
      {
        value: 'Monteleone d\'Orvieto',
        label: 'Monteleone d\'Orvieto'
      },
      {
        value: 'Narni',
        label: 'Narni'
      },
      {
        value: 'Orvieto',
        label: 'Orvieto'
      },
      {
        value: 'Otricoli',
        label: 'Otricoli'
      },
      {
        value: 'Parrano',
        label: 'Parrano'
      },
      {
        value: 'Penna in Teverina',
        label: 'Penna in Teverina'
      },
      {
        value: 'Polino',
        label: 'Polino'
      },
      {
        value: 'Porano',
        label: 'Porano'
      },
      {
        value: 'San Gemini',
        label: 'San Gemini'
      },
      {
        value: 'San Venanzo',
        label: 'San Venanzo'
      },
      {
        value: 'Stroncone',
        label: 'Stroncone'
      },
      {
        value: 'Terni',
        label: 'Terni'
      },
      {
        value: 'Avigliano Umbro',
        label: 'Avigliano Umbro'
      },
      {
        value: 'Acquapendente',
        label: 'Acquapendente'
      },
      {
        value: 'Arlena di Castro',
        label: 'Arlena di Castro'
      },
      {
        value: 'Bagnoregio',
        label: 'Bagnoregio'
      },
      {
        value: 'Barbarano Romano',
        label: 'Barbarano Romano'
      },
      {
        value: 'Bassano Romano',
        label: 'Bassano Romano'
      },
      {
        value: 'Bassano in Teverina',
        label: 'Bassano in Teverina'
      },
      {
        value: 'Blera',
        label: 'Blera'
      },
      {
        value: 'Bolsena',
        label: 'Bolsena'
      },
      {
        value: 'Bomarzo',
        label: 'Bomarzo'
      },
      {
        value: 'Calcata',
        label: 'Calcata'
      },
      {
        value: 'Canepina',
        label: 'Canepina'
      },
      {
        value: 'Canino',
        label: 'Canino'
      },
      {
        value: 'Capodimonte',
        label: 'Capodimonte'
      },
      {
        value: 'Capranica',
        label: 'Capranica'
      },
      {
        value: 'Caprarola',
        label: 'Caprarola'
      },
      {
        value: 'Carbognano',
        label: 'Carbognano'
      },
      {
        value: 'Castel Sant\'Elia',
        label: 'Castel Sant\'Elia'
      },
      {
        value: 'Castiglione in Teverina',
        label: 'Castiglione in Teverina'
      },
      {
        value: 'Celleno',
        label: 'Celleno'
      },
      {
        value: 'Cellere',
        label: 'Cellere'
      },
      {
        value: 'Civita Castellana',
        label: 'Civita Castellana'
      },
      {
        value: 'Civitella d\'Agliano',
        label: 'Civitella d\'Agliano'
      },
      {
        value: 'Corchiano',
        label: 'Corchiano'
      },
      {
        value: 'Fabrica di Roma',
        label: 'Fabrica di Roma'
      },
      {
        value: 'Faleria',
        label: 'Faleria'
      },
      {
        value: 'Farnese',
        label: 'Farnese'
      },
      {
        value: 'Gallese',
        label: 'Gallese'
      },
      {
        value: 'Gradoli',
        label: 'Gradoli'
      },
      {
        value: 'Graffignano',
        label: 'Graffignano'
      },
      {
        value: 'Grotte di Castro',
        label: 'Grotte di Castro'
      },
      {
        value: 'Ischia di Castro',
        label: 'Ischia di Castro'
      },
      {
        value: 'Latera',
        label: 'Latera'
      },
      {
        value: 'Lubriano',
        label: 'Lubriano'
      },
      {
        value: 'Marta',
        label: 'Marta'
      },
      {
        value: 'Montalto di Castro',
        label: 'Montalto di Castro'
      },
      {
        value: 'Montefiascone',
        label: 'Montefiascone'
      },
      {
        value: 'Monte Romano',
        label: 'Monte Romano'
      },
      {
        value: 'Monterosi',
        label: 'Monterosi'
      },
      {
        value: 'Nepi',
        label: 'Nepi'
      },
      {
        value: 'Onano',
        label: 'Onano'
      },
      {
        value: 'Oriolo Romano',
        label: 'Oriolo Romano'
      },
      {
        value: 'Orte',
        label: 'Orte'
      },
      {
        value: 'Piansano',
        label: 'Piansano'
      },
      {
        value: 'Proceno',
        label: 'Proceno'
      },
      {
        value: 'Ronciglione',
        label: 'Ronciglione'
      },
      {
        value: 'Villa San Giovanni in Tuscia',
        label: 'Villa San Giovanni in Tuscia'
      },
      {
        value: 'San Lorenzo Nuovo',
        label: 'San Lorenzo Nuovo'
      },
      {
        value: 'Soriano nel Cimino',
        label: 'Soriano nel Cimino'
      },
      {
        value: 'Sutri',
        label: 'Sutri'
      },
      {
        value: 'Tarquinia',
        label: 'Tarquinia'
      },
      {
        value: 'Tessennano',
        label: 'Tessennano'
      },
      {
        value: 'Tuscania',
        label: 'Tuscania'
      },
      {
        value: 'Valentano',
        label: 'Valentano'
      },
      {
        value: 'Vallerano',
        label: 'Vallerano'
      },
      {
        value: 'Vasanello',
        label: 'Vasanello'
      },
      {
        value: 'Vejano',
        label: 'Vejano'
      },
      {
        value: 'Vetralla',
        label: 'Vetralla'
      },
      {
        value: 'Vignanello',
        label: 'Vignanello'
      },
      {
        value: 'Viterbo',
        label: 'Viterbo'
      },
      {
        value: 'Vitorchiano',
        label: 'Vitorchiano'
      },
      {
        value: 'Accumoli',
        label: 'Accumoli'
      },
      {
        value: 'Amatrice',
        label: 'Amatrice'
      },
      {
        value: 'Antrodoco',
        label: 'Antrodoco'
      },
      {
        value: 'Ascrea',
        label: 'Ascrea'
      },
      {
        value: 'Belmonte in Sabina',
        label: 'Belmonte in Sabina'
      },
      {
        value: 'Borbona',
        label: 'Borbona'
      },
      {
        value: 'Borgorose',
        label: 'Borgorose'
      },
      {
        value: 'Borgo Velino',
        label: 'Borgo Velino'
      },
      {
        value: 'Cantalice',
        label: 'Cantalice'
      },
      {
        value: 'Cantalupo in Sabina',
        label: 'Cantalupo in Sabina'
      },
      {
        value: 'Casaprota',
        label: 'Casaprota'
      },
      {
        value: 'Casperia',
        label: 'Casperia'
      },
      {
        value: 'Castel di Tora',
        label: 'Castel di Tora'
      },
      {
        value: 'Castelnuovo di Farfa',
        label: 'Castelnuovo di Farfa'
      },
      {
        value: 'Castel Sant\'Angelo',
        label: 'Castel Sant\'Angelo'
      },
      {
        value: 'Cittaducale',
        label: 'Cittaducale'
      },
      {
        value: 'Cittareale',
        label: 'Cittareale'
      },
      {
        value: 'Collalto Sabino',
        label: 'Collalto Sabino'
      },
      {
        value: 'Colle di Tora',
        label: 'Colle di Tora'
      },
      {
        value: 'Collegiove',
        label: 'Collegiove'
      },
      {
        value: 'Collevecchio',
        label: 'Collevecchio'
      },
      {
        value: 'Colli sul Velino',
        label: 'Colli sul Velino'
      },
      {
        value: 'Concerviano',
        label: 'Concerviano'
      },
      {
        value: 'Configni',
        label: 'Configni'
      },
      {
        value: 'Contigliano',
        label: 'Contigliano'
      },
      {
        value: 'Cottanello',
        label: 'Cottanello'
      },
      {
        value: 'Fara in Sabina',
        label: 'Fara in Sabina'
      },
      {
        value: 'Fiamignano',
        label: 'Fiamignano'
      },
      {
        value: 'Forano',
        label: 'Forano'
      },
      {
        value: 'Frasso Sabino',
        label: 'Frasso Sabino'
      },
      {
        value: 'Greccio',
        label: 'Greccio'
      },
      {
        value: 'Labro',
        label: 'Labro'
      },
      {
        value: 'Leonessa',
        label: 'Leonessa'
      },
      {
        value: 'Longone Sabino',
        label: 'Longone Sabino'
      },
      {
        value: 'Magliano Sabina',
        label: 'Magliano Sabina'
      },
      {
        value: 'Marcetelli',
        label: 'Marcetelli'
      },
      {
        value: 'Micigliano',
        label: 'Micigliano'
      },
      {
        value: 'Mompeo',
        label: 'Mompeo'
      },
      {
        value: 'Montasola',
        label: 'Montasola'
      },
      {
        value: 'Montebuono',
        label: 'Montebuono'
      },
      {
        value: 'Monteleone Sabino',
        label: 'Monteleone Sabino'
      },
      {
        value: 'Montenero Sabino',
        label: 'Montenero Sabino'
      },
      {
        value: 'Monte San Giovanni in Sabina',
        label: 'Monte San Giovanni in Sabina'
      },
      {
        value: 'Montopoli di Sabina',
        label: 'Montopoli di Sabina'
      },
      {
        value: 'Morro Reatino',
        label: 'Morro Reatino'
      },
      {
        value: 'Nespolo',
        label: 'Nespolo'
      },
      {
        value: 'Orvinio',
        label: 'Orvinio'
      },
      {
        value: 'Paganico Sabino',
        label: 'Paganico Sabino'
      },
      {
        value: 'Pescorocchiano',
        label: 'Pescorocchiano'
      },
      {
        value: 'Petrella Salto',
        label: 'Petrella Salto'
      },
      {
        value: 'Poggio Bustone',
        label: 'Poggio Bustone'
      },
      {
        value: 'Poggio Catino',
        label: 'Poggio Catino'
      },
      {
        value: 'Poggio Mirteto',
        label: 'Poggio Mirteto'
      },
      {
        value: 'Poggio Moiano',
        label: 'Poggio Moiano'
      },
      {
        value: 'Poggio Nativo',
        label: 'Poggio Nativo'
      },
      {
        value: 'Poggio San Lorenzo',
        label: 'Poggio San Lorenzo'
      },
      {
        value: 'Posta',
        label: 'Posta'
      },
      {
        value: 'Pozzaglia Sabina',
        label: 'Pozzaglia Sabina'
      },
      {
        value: 'Rieti',
        label: 'Rieti'
      },
      {
        value: 'Rivodutri',
        label: 'Rivodutri'
      },
      {
        value: 'Roccantica',
        label: 'Roccantica'
      },
      {
        value: 'Rocca Sinibalda',
        label: 'Rocca Sinibalda'
      },
      {
        value: 'Salisano',
        label: 'Salisano'
      },
      {
        value: 'Scandriglia',
        label: 'Scandriglia'
      },
      {
        value: 'Selci',
        label: 'Selci'
      },
      {
        value: 'Stimigliano',
        label: 'Stimigliano'
      },
      {
        value: 'Tarano',
        label: 'Tarano'
      },
      {
        value: 'Toffia',
        label: 'Toffia'
      },
      {
        value: 'Torricella in Sabina',
        label: 'Torricella in Sabina'
      },
      {
        value: 'Torri in Sabina',
        label: 'Torri in Sabina'
      },
      {
        value: 'Turania',
        label: 'Turania'
      },
      {
        value: 'Vacone',
        label: 'Vacone'
      },
      {
        value: 'Varco Sabino',
        label: 'Varco Sabino'
      },
      {
        value: 'Affile',
        label: 'Affile'
      },
      {
        value: 'Agosta',
        label: 'Agosta'
      },
      {
        value: 'Albano Laziale',
        label: 'Albano Laziale'
      },
      {
        value: 'Allumiere',
        label: 'Allumiere'
      },
      {
        value: 'Anguillara Sabazia',
        label: 'Anguillara Sabazia'
      },
      {
        value: 'Anticoli Corrado',
        label: 'Anticoli Corrado'
      },
      {
        value: 'Anzio',
        label: 'Anzio'
      },
      {
        value: 'Arcinazzo Romano',
        label: 'Arcinazzo Romano'
      },
      {
        value: 'Ariccia',
        label: 'Ariccia'
      },
      {
        value: 'Arsoli',
        label: 'Arsoli'
      },
      {
        value: 'Artena',
        label: 'Artena'
      },
      {
        value: 'Bellegra',
        label: 'Bellegra'
      },
      {
        value: 'Bracciano',
        label: 'Bracciano'
      },
      {
        value: 'Camerata Nuova',
        label: 'Camerata Nuova'
      },
      {
        value: 'Campagnano di Roma',
        label: 'Campagnano di Roma'
      },
      {
        value: 'Canale Monterano',
        label: 'Canale Monterano'
      },
      {
        value: 'Canterano',
        label: 'Canterano'
      },
      {
        value: 'Capena',
        label: 'Capena'
      },
      {
        value: 'Capranica Prenestina',
        label: 'Capranica Prenestina'
      },
      {
        value: 'Carpineto Romano',
        label: 'Carpineto Romano'
      },
      {
        value: 'Casape',
        label: 'Casape'
      },
      {
        value: 'Castel Gandolfo',
        label: 'Castel Gandolfo'
      },
      {
        value: 'Castel Madama',
        label: 'Castel Madama'
      },
      {
        value: 'Castelnuovo di Porto',
        label: 'Castelnuovo di Porto'
      },
      {
        value: 'Castel San Pietro Romano',
        label: 'Castel San Pietro Romano'
      },
      {
        value: 'Cave',
        label: 'Cave'
      },
      {
        value: 'Cerreto Laziale',
        label: 'Cerreto Laziale'
      },
      {
        value: 'Cervara di Roma',
        label: 'Cervara di Roma'
      },
      {
        value: 'Cerveteri',
        label: 'Cerveteri'
      },
      {
        value: 'Ciciliano',
        label: 'Ciciliano'
      },
      {
        value: 'Cineto Romano',
        label: 'Cineto Romano'
      },
      {
        value: 'Civitavecchia',
        label: 'Civitavecchia'
      },
      {
        value: 'Civitella San Paolo',
        label: 'Civitella San Paolo'
      },
      {
        value: 'Colleferro',
        label: 'Colleferro'
      },
      {
        value: 'Colonna',
        label: 'Colonna'
      },
      {
        value: 'Fiano Romano',
        label: 'Fiano Romano'
      },
      {
        value: 'Filacciano',
        label: 'Filacciano'
      },
      {
        value: 'Formello',
        label: 'Formello'
      },
      {
        value: 'Frascati',
        label: 'Frascati'
      },
      {
        value: 'Gallicano nel Lazio',
        label: 'Gallicano nel Lazio'
      },
      {
        value: 'Gavignano',
        label: 'Gavignano'
      },
      {
        value: 'Genazzano',
        label: 'Genazzano'
      },
      {
        value: 'Genzano di Roma',
        label: 'Genzano di Roma'
      },
      {
        value: 'Gerano',
        label: 'Gerano'
      },
      {
        value: 'Gorga',
        label: 'Gorga'
      },
      {
        value: 'Grottaferrata',
        label: 'Grottaferrata'
      },
      {
        value: 'Guidonia Montecelio',
        label: 'Guidonia Montecelio'
      },
      {
        value: 'Jenne',
        label: 'Jenne'
      },
      {
        value: 'Labico',
        label: 'Labico'
      },
      {
        value: 'Lanuvio',
        label: 'Lanuvio'
      },
      {
        value: 'Licenza',
        label: 'Licenza'
      },
      {
        value: 'Magliano Romano',
        label: 'Magliano Romano'
      },
      {
        value: 'Mandela',
        label: 'Mandela'
      },
      {
        value: 'Manziana',
        label: 'Manziana'
      },
      {
        value: 'Marano Equo',
        label: 'Marano Equo'
      },
      {
        value: 'Marcellina',
        label: 'Marcellina'
      },
      {
        value: 'Marino',
        label: 'Marino'
      },
      {
        value: 'Mazzano Romano',
        label: 'Mazzano Romano'
      },
      {
        value: 'Mentana',
        label: 'Mentana'
      },
      {
        value: 'Monte Compatri',
        label: 'Monte Compatri'
      },
      {
        value: 'Monteflavio',
        label: 'Monteflavio'
      },
      {
        value: 'Montelanico',
        label: 'Montelanico'
      },
      {
        value: 'Montelibretti',
        label: 'Montelibretti'
      },
      {
        value: 'Monte Porzio Catone',
        label: 'Monte Porzio Catone'
      },
      {
        value: 'Monterotondo',
        label: 'Monterotondo'
      },
      {
        value: 'Montorio Romano',
        label: 'Montorio Romano'
      },
      {
        value: 'Moricone',
        label: 'Moricone'
      },
      {
        value: 'Morlupo',
        label: 'Morlupo'
      },
      {
        value: 'Nazzano',
        label: 'Nazzano'
      },
      {
        value: 'Nemi',
        label: 'Nemi'
      },
      {
        value: 'Nerola',
        label: 'Nerola'
      },
      {
        value: 'Nettuno',
        label: 'Nettuno'
      },
      {
        value: 'Olevano Romano',
        label: 'Olevano Romano'
      },
      {
        value: 'Palestrina',
        label: 'Palestrina'
      },
      {
        value: 'Palombara Sabina',
        label: 'Palombara Sabina'
      },
      {
        value: 'Percile',
        label: 'Percile'
      },
      {
        value: 'Pisoniano',
        label: 'Pisoniano'
      },
      {
        value: 'Poli',
        label: 'Poli'
      },
      {
        value: 'Pomezia',
        label: 'Pomezia'
      },
      {
        value: 'Ponzano Romano',
        label: 'Ponzano Romano'
      },
      {
        value: 'Riano',
        label: 'Riano'
      },
      {
        value: 'Rignano Flaminio',
        label: 'Rignano Flaminio'
      },
      {
        value: 'Riofreddo',
        label: 'Riofreddo'
      },
      {
        value: 'Rocca Canterano',
        label: 'Rocca Canterano'
      },
      {
        value: 'Rocca di Cave',
        label: 'Rocca di Cave'
      },
      {
        value: 'Rocca di Papa',
        label: 'Rocca di Papa'
      },
      {
        value: 'Roccagiovine',
        label: 'Roccagiovine'
      },
      {
        value: 'Rocca Priora',
        label: 'Rocca Priora'
      },
      {
        value: 'Rocca Santo Stefano',
        label: 'Rocca Santo Stefano'
      },
      {
        value: 'Roiate',
        label: 'Roiate'
      },
      {
        value: 'Roma',
        label: 'Roma'
      },
      {
        value: 'Roviano',
        label: 'Roviano'
      },
      {
        value: 'Sacrofano',
        label: 'Sacrofano'
      },
      {
        value: 'Sambuci',
        label: 'Sambuci'
      },
      {
        value: 'San Gregorio da Sassola',
        label: 'San Gregorio da Sassola'
      },
      {
        value: 'San Polo dei Cavalieri',
        label: 'San Polo dei Cavalieri'
      },
      {
        value: 'Santa Marinella',
        label: 'Santa Marinella'
      },
      {
        value: 'Sant\'Angelo Romano',
        label: 'Sant\'Angelo Romano'
      },
      {
        value: 'Sant\'Oreste',
        label: 'Sant\'Oreste'
      },
      {
        value: 'San Vito Romano',
        label: 'San Vito Romano'
      },
      {
        value: 'Saracinesco',
        label: 'Saracinesco'
      },
      {
        value: 'Segni',
        label: 'Segni'
      },
      {
        value: 'Subiaco',
        label: 'Subiaco'
      },
      {
        value: 'Tivoli',
        label: 'Tivoli'
      },
      {
        value: 'Tolfa',
        label: 'Tolfa'
      },
      {
        value: 'Torrita Tiberina',
        label: 'Torrita Tiberina'
      },
      {
        value: 'Trevignano Romano',
        label: 'Trevignano Romano'
      },
      {
        value: 'Vallepietra',
        label: 'Vallepietra'
      },
      {
        value: 'Vallinfreda',
        label: 'Vallinfreda'
      },
      {
        value: 'Valmontone',
        label: 'Valmontone'
      },
      {
        value: 'Velletri',
        label: 'Velletri'
      },
      {
        value: 'Vicovaro',
        label: 'Vicovaro'
      },
      {
        value: 'Vivaro Romano',
        label: 'Vivaro Romano'
      },
      {
        value: 'Zagarolo',
        label: 'Zagarolo'
      },
      {
        value: 'Lariano',
        label: 'Lariano'
      },
      {
        value: 'Ladispoli',
        label: 'Ladispoli'
      },
      {
        value: 'Ardea',
        label: 'Ardea'
      },
      {
        value: 'Ciampino',
        label: 'Ciampino'
      },
      {
        value: 'San Cesareo',
        label: 'San Cesareo'
      },
      {
        value: 'Fiumicino',
        label: 'Fiumicino'
      },
      {
        value: 'Fonte Nuova',
        label: 'Fonte Nuova'
      },
      {
        value: 'Aprilia',
        label: 'Aprilia'
      },
      {
        value: 'Bassiano',
        label: 'Bassiano'
      },
      {
        value: 'Campodimele',
        label: 'Campodimele'
      },
      {
        value: 'Castelforte',
        label: 'Castelforte'
      },
      {
        value: 'Cisterna di Latina',
        label: 'Cisterna di Latina'
      },
      {
        value: 'Cori',
        label: 'Cori'
      },
      {
        value: 'Fondi',
        label: 'Fondi'
      },
      {
        value: 'Formia',
        label: 'Formia'
      },
      {
        value: 'Gaeta',
        label: 'Gaeta'
      },
      {
        value: 'Itri',
        label: 'Itri'
      },
      {
        value: 'Latina',
        label: 'Latina'
      },
      {
        value: 'Lenola',
        label: 'Lenola'
      },
      {
        value: 'Maenza',
        label: 'Maenza'
      },
      {
        value: 'Minturno',
        label: 'Minturno'
      },
      {
        value: 'Monte San Biagio',
        label: 'Monte San Biagio'
      },
      {
        value: 'Norma',
        label: 'Norma'
      },
      {
        value: 'Pontinia',
        label: 'Pontinia'
      },
      {
        value: 'Ponza',
        label: 'Ponza'
      },
      {
        value: 'Priverno',
        label: 'Priverno'
      },
      {
        value: 'Prossedi',
        label: 'Prossedi'
      },
      {
        value: 'Roccagorga',
        label: 'Roccagorga'
      },
      {
        value: 'Rocca Massima',
        label: 'Rocca Massima'
      },
      {
        value: 'Roccasecca dei Volsci',
        label: 'Roccasecca dei Volsci'
      },
      {
        value: 'Sabaudia',
        label: 'Sabaudia'
      },
      {
        value: 'San Felice Circeo',
        label: 'San Felice Circeo'
      },
      {
        value: 'Santi Cosma e Damiano',
        label: 'Santi Cosma e Damiano'
      },
      {
        value: 'Sermoneta',
        label: 'Sermoneta'
      },
      {
        value: 'Sezze',
        label: 'Sezze'
      },
      {
        value: 'Sonnino',
        label: 'Sonnino'
      },
      {
        value: 'Sperlonga',
        label: 'Sperlonga'
      },
      {
        value: 'Spigno Saturnia',
        label: 'Spigno Saturnia'
      },
      {
        value: 'Terracina',
        label: 'Terracina'
      },
      {
        value: 'Ventotene',
        label: 'Ventotene'
      },
      {
        value: 'Acquafondata',
        label: 'Acquafondata'
      },
      {
        value: 'Acuto',
        label: 'Acuto'
      },
      {
        value: 'Alatri',
        label: 'Alatri'
      },
      {
        value: 'Alvito',
        label: 'Alvito'
      },
      {
        value: 'Amaseno',
        label: 'Amaseno'
      },
      {
        value: 'Anagni',
        label: 'Anagni'
      },
      {
        value: 'Aquino',
        label: 'Aquino'
      },
      {
        value: 'Arce',
        label: 'Arce'
      },
      {
        value: 'Arnara',
        label: 'Arnara'
      },
      {
        value: 'Arpino',
        label: 'Arpino'
      },
      {
        value: 'Atina',
        label: 'Atina'
      },
      {
        value: 'Ausonia',
        label: 'Ausonia'
      },
      {
        value: 'Belmonte Castello',
        label: 'Belmonte Castello'
      },
      {
        value: 'Boville Ernica',
        label: 'Boville Ernica'
      },
      {
        value: 'Broccostella',
        label: 'Broccostella'
      },
      {
        value: 'Campoli Appennino',
        label: 'Campoli Appennino'
      },
      {
        value: 'Casalattico',
        label: 'Casalattico'
      },
      {
        value: 'Casalvieri',
        label: 'Casalvieri'
      },
      {
        value: 'Cassino',
        label: 'Cassino'
      },
      {
        value: 'Castelliri',
        label: 'Castelliri'
      },
      {
        value: 'Castelnuovo Parano',
        label: 'Castelnuovo Parano'
      },
      {
        value: 'Castrocielo',
        label: 'Castrocielo'
      },
      {
        value: 'Castro dei Volsci',
        label: 'Castro dei Volsci'
      },
      {
        value: 'Ceccano',
        label: 'Ceccano'
      },
      {
        value: 'Ceprano',
        label: 'Ceprano'
      },
      {
        value: 'Cervaro',
        label: 'Cervaro'
      },
      {
        value: 'Colfelice',
        label: 'Colfelice'
      },
      {
        value: 'Collepardo',
        label: 'Collepardo'
      },
      {
        value: 'Colle San Magno',
        label: 'Colle San Magno'
      },
      {
        value: 'Coreno Ausonio',
        label: 'Coreno Ausonio'
      },
      {
        value: 'Esperia',
        label: 'Esperia'
      },
      {
        value: 'Falvaterra',
        label: 'Falvaterra'
      },
      {
        value: 'Ferentino',
        label: 'Ferentino'
      },
      {
        value: 'Filettino',
        label: 'Filettino'
      },
      {
        value: 'Fiuggi',
        label: 'Fiuggi'
      },
      {
        value: 'Fontana Liri',
        label: 'Fontana Liri'
      },
      {
        value: 'Fontechiari',
        label: 'Fontechiari'
      },
      {
        value: 'Frosinone',
        label: 'Frosinone'
      },
      {
        value: 'Fumone',
        label: 'Fumone'
      },
      {
        value: 'Gallinaro',
        label: 'Gallinaro'
      },
      {
        value: 'Giuliano di Roma',
        label: 'Giuliano di Roma'
      },
      {
        value: 'Guarcino',
        label: 'Guarcino'
      },
      {
        value: 'Isola del Liri',
        label: 'Isola del Liri'
      },
      {
        value: 'Monte San Giovanni Campano',
        label: 'Monte San Giovanni Campano'
      },
      {
        value: 'Morolo',
        label: 'Morolo'
      },
      {
        value: 'Paliano',
        label: 'Paliano'
      },
      {
        value: 'Pastena',
        label: 'Pastena'
      },
      {
        value: 'Patrica',
        label: 'Patrica'
      },
      {
        value: 'Pescosolido',
        label: 'Pescosolido'
      },
      {
        value: 'Picinisco',
        label: 'Picinisco'
      },
      {
        value: 'Pico',
        label: 'Pico'
      },
      {
        value: 'Piedimonte San Germano',
        label: 'Piedimonte San Germano'
      },
      {
        value: 'Piglio',
        label: 'Piglio'
      },
      {
        value: 'Pignataro Interamna',
        label: 'Pignataro Interamna'
      },
      {
        value: 'Pofi',
        label: 'Pofi'
      },
      {
        value: 'Pontecorvo',
        label: 'Pontecorvo'
      },
      {
        value: 'Posta Fibreno',
        label: 'Posta Fibreno'
      },
      {
        value: 'Ripi',
        label: 'Ripi'
      },
      {
        value: 'Rocca d\'Arce',
        label: 'Rocca d\'Arce'
      },
      {
        value: 'Roccasecca',
        label: 'Roccasecca'
      },
      {
        value: 'San Biagio Saracinisco',
        label: 'San Biagio Saracinisco'
      },
      {
        value: 'San Donato Val di Comino',
        label: 'San Donato Val di Comino'
      },
      {
        value: 'San Giorgio a Liri',
        label: 'San Giorgio a Liri'
      },
      {
        value: 'San Giovanni Incarico',
        label: 'San Giovanni Incarico'
      },
      {
        value: 'Sant\'Ambrogio sul Garigliano',
        label: 'Sant\'Ambrogio sul Garigliano'
      },
      {
        value: 'Sant\'Andrea del Garigliano',
        label: 'Sant\'Andrea del Garigliano'
      },
      {
        value: 'Sant\'Apollinare',
        label: 'Sant\'Apollinare'
      },
      {
        value: 'Sant\'Elia Fiumerapido',
        label: 'Sant\'Elia Fiumerapido'
      },
      {
        value: 'Santopadre',
        label: 'Santopadre'
      },
      {
        value: 'San Vittore del Lazio',
        label: 'San Vittore del Lazio'
      },
      {
        value: 'Serrone',
        label: 'Serrone'
      },
      {
        value: 'Settefrati',
        label: 'Settefrati'
      },
      {
        value: 'Sgurgola',
        label: 'Sgurgola'
      },
      {
        value: 'Sora',
        label: 'Sora'
      },
      {
        value: 'Strangolagalli',
        label: 'Strangolagalli'
      },
      {
        value: 'Supino',
        label: 'Supino'
      },
      {
        value: 'Terelle',
        label: 'Terelle'
      },
      {
        value: 'Torre Cajetani',
        label: 'Torre Cajetani'
      },
      {
        value: 'Torrice',
        label: 'Torrice'
      },
      {
        value: 'Trevi nel Lazio',
        label: 'Trevi nel Lazio'
      },
      {
        value: 'Trivigliano',
        label: 'Trivigliano'
      },
      {
        value: 'Vallecorsa',
        label: 'Vallecorsa'
      },
      {
        value: 'Vallemaio',
        label: 'Vallemaio'
      },
      {
        value: 'Vallerotonda',
        label: 'Vallerotonda'
      },
      {
        value: 'Veroli',
        label: 'Veroli'
      },
      {
        value: 'Vicalvi',
        label: 'Vicalvi'
      },
      {
        value: 'Vico nel Lazio',
        label: 'Vico nel Lazio'
      },
      {
        value: 'Villa Latina',
        label: 'Villa Latina'
      },
      {
        value: 'Villa Santa Lucia',
        label: 'Villa Santa Lucia'
      },
      {
        value: 'Villa Santo Stefano',
        label: 'Villa Santo Stefano'
      },
      {
        value: 'Viticuso',
        label: 'Viticuso'
      },
      {
        value: 'Ailano',
        label: 'Ailano'
      },
      {
        value: 'Alife',
        label: 'Alife'
      },
      {
        value: 'Alvignano',
        label: 'Alvignano'
      },
      {
        value: 'Arienzo',
        label: 'Arienzo'
      },
      {
        value: 'Aversa',
        label: 'Aversa'
      },
      {
        value: 'Baia e Latina',
        label: 'Baia e Latina'
      },
      {
        value: 'Bellona',
        label: 'Bellona'
      },
      {
        value: 'Caianello',
        label: 'Caianello'
      },
      {
        value: 'Caiazzo',
        label: 'Caiazzo'
      },
      {
        value: 'Calvi Risorta',
        label: 'Calvi Risorta'
      },
      {
        value: 'Camigliano',
        label: 'Camigliano'
      },
      {
        value: 'Cancello ed Arnone',
        label: 'Cancello ed Arnone'
      },
      {
        value: 'Capodrise',
        label: 'Capodrise'
      },
      {
        value: 'Capriati a Volturno',
        label: 'Capriati a Volturno'
      },
      {
        value: 'Capua',
        label: 'Capua'
      },
      {
        value: 'Carinaro',
        label: 'Carinaro'
      },
      {
        value: 'Carinola',
        label: 'Carinola'
      },
      {
        value: 'Casagiove',
        label: 'Casagiove'
      },
      {
        value: 'Casal di Principe',
        label: 'Casal di Principe'
      },
      {
        value: 'Casaluce',
        label: 'Casaluce'
      },
      {
        value: 'Casapulla',
        label: 'Casapulla'
      },
      {
        value: 'Caserta',
        label: 'Caserta'
      },
      {
        value: 'Castel Campagnano',
        label: 'Castel Campagnano'
      },
      {
        value: 'Castel di Sasso',
        label: 'Castel di Sasso'
      },
      {
        value: 'Castello del Matese',
        label: 'Castello del Matese'
      },
      {
        value: 'Castel Morrone',
        label: 'Castel Morrone'
      },
      {
        value: 'Castel Volturno',
        label: 'Castel Volturno'
      },
      {
        value: 'Cervino',
        label: 'Cervino'
      },
      {
        value: 'Cesa',
        label: 'Cesa'
      },
      {
        value: 'Ciorlano',
        label: 'Ciorlano'
      },
      {
        value: 'Conca della Campania',
        label: 'Conca della Campania'
      },
      {
        value: 'Curti',
        label: 'Curti'
      },
      {
        value: 'Dragoni',
        label: 'Dragoni'
      },
      {
        value: 'Fontegreca',
        label: 'Fontegreca'
      },
      {
        value: 'Formicola',
        label: 'Formicola'
      },
      {
        value: 'Francolise',
        label: 'Francolise'
      },
      {
        value: 'Frignano',
        label: 'Frignano'
      },
      {
        value: 'Gallo Matese',
        label: 'Gallo Matese'
      },
      {
        value: 'Galluccio',
        label: 'Galluccio'
      },
      {
        value: 'Giano Vetusto',
        label: 'Giano Vetusto'
      },
      {
        value: 'Gioia Sannitica',
        label: 'Gioia Sannitica'
      },
      {
        value: 'Grazzanise',
        label: 'Grazzanise'
      },
      {
        value: 'Gricignano di Aversa',
        label: 'Gricignano di Aversa'
      },
      {
        value: 'Letino',
        label: 'Letino'
      },
      {
        value: 'Liberi',
        label: 'Liberi'
      },
      {
        value: 'Lusciano',
        label: 'Lusciano'
      },
      {
        value: 'Macerata Campania',
        label: 'Macerata Campania'
      },
      {
        value: 'Maddaloni',
        label: 'Maddaloni'
      },
      {
        value: 'Marcianise',
        label: 'Marcianise'
      },
      {
        value: 'Marzano Appio',
        label: 'Marzano Appio'
      },
      {
        value: 'Mignano Monte Lungo',
        label: 'Mignano Monte Lungo'
      },
      {
        value: 'Mondragone',
        label: 'Mondragone'
      },
      {
        value: 'Orta di Atella',
        label: 'Orta di Atella'
      },
      {
        value: 'Parete',
        label: 'Parete'
      },
      {
        value: 'Pastorano',
        label: 'Pastorano'
      },
      {
        value: 'Piana di Monte Verna',
        label: 'Piana di Monte Verna'
      },
      {
        value: 'Piedimonte Matese',
        label: 'Piedimonte Matese'
      },
      {
        value: 'Pietramelara',
        label: 'Pietramelara'
      },
      {
        value: 'Pietravairano',
        label: 'Pietravairano'
      },
      {
        value: 'Pignataro Maggiore',
        label: 'Pignataro Maggiore'
      },
      {
        value: 'Pontelatone',
        label: 'Pontelatone'
      },
      {
        value: 'Portico di Caserta',
        label: 'Portico di Caserta'
      },
      {
        value: 'Prata Sannita',
        label: 'Prata Sannita'
      },
      {
        value: 'Pratella',
        label: 'Pratella'
      },
      {
        value: 'Presenzano',
        label: 'Presenzano'
      },
      {
        value: 'Raviscanina',
        label: 'Raviscanina'
      },
      {
        value: 'Recale',
        label: 'Recale'
      },
      {
        value: 'Riardo',
        label: 'Riardo'
      },
      {
        value: 'Rocca d\'Evandro',
        label: 'Rocca d\'Evandro'
      },
      {
        value: 'Roccamonfina',
        label: 'Roccamonfina'
      },
      {
        value: 'Roccaromana',
        label: 'Roccaromana'
      },
      {
        value: 'Rocchetta e Croce',
        label: 'Rocchetta e Croce'
      },
      {
        value: 'Ruviano',
        label: 'Ruviano'
      },
      {
        value: 'San Cipriano d\'Aversa',
        label: 'San Cipriano d\'Aversa'
      },
      {
        value: 'San Felice a Cancello',
        label: 'San Felice a Cancello'
      },
      {
        value: 'San Gregorio Matese',
        label: 'San Gregorio Matese'
      },
      {
        value: 'San Marcellino',
        label: 'San Marcellino'
      },
      {
        value: 'San Nicola la Strada',
        label: 'San Nicola la Strada'
      },
      {
        value: 'San Pietro Infine',
        label: 'San Pietro Infine'
      },
      {
        value: 'San Potito Sannitico',
        label: 'San Potito Sannitico'
      },
      {
        value: 'San Prisco',
        label: 'San Prisco'
      },
      {
        value: 'Santa Maria a Vico',
        label: 'Santa Maria a Vico'
      },
      {
        value: 'Santa Maria Capua Vetere',
        label: 'Santa Maria Capua Vetere'
      },
      {
        value: 'Santa Maria la Fossa',
        label: 'Santa Maria la Fossa'
      },
      {
        value: 'San Tammaro',
        label: 'San Tammaro'
      },
      {
        value: 'Sant\'Angelo d\'Alife',
        label: 'Sant\'Angelo d\'Alife'
      },
      {
        value: 'Sant\'Arpino',
        label: 'Sant\'Arpino'
      },
      {
        value: 'Sessa Aurunca',
        label: 'Sessa Aurunca'
      },
      {
        value: 'Sparanise',
        label: 'Sparanise'
      },
      {
        value: 'Succivo',
        label: 'Succivo'
      },
      {
        value: 'Teano',
        label: 'Teano'
      },
      {
        value: 'Teverola',
        label: 'Teverola'
      },
      {
        value: 'Tora e Piccilli',
        label: 'Tora e Piccilli'
      },
      {
        value: 'Trentola Ducenta',
        label: 'Trentola Ducenta'
      },
      {
        value: 'Vairano Patenora',
        label: 'Vairano Patenora'
      },
      {
        value: 'Valle Agricola',
        label: 'Valle Agricola'
      },
      {
        value: 'Valle di Maddaloni',
        label: 'Valle di Maddaloni'
      },
      {
        value: 'Villa di Briano',
        label: 'Villa di Briano'
      },
      {
        value: 'Villa Literno',
        label: 'Villa Literno'
      },
      {
        value: 'Vitulazio',
        label: 'Vitulazio'
      },
      {
        value: 'Falciano del Massico',
        label: 'Falciano del Massico'
      },
      {
        value: 'Cellole',
        label: 'Cellole'
      },
      {
        value: 'Casapesenna',
        label: 'Casapesenna'
      },
      {
        value: 'San Marco Evangelista',
        label: 'San Marco Evangelista'
      },
      {
        value: 'Airola',
        label: 'Airola'
      },
      {
        value: 'Amorosi',
        label: 'Amorosi'
      },
      {
        value: 'Apice',
        label: 'Apice'
      },
      {
        value: 'Apollosa',
        label: 'Apollosa'
      },
      {
        value: 'Arpaia',
        label: 'Arpaia'
      },
      {
        value: 'Arpaise',
        label: 'Arpaise'
      },
      {
        value: 'Baselice',
        label: 'Baselice'
      },
      {
        value: 'Benevento',
        label: 'Benevento'
      },
      {
        value: 'Bonea',
        label: 'Bonea'
      },
      {
        value: 'Bucciano',
        label: 'Bucciano'
      },
      {
        value: 'Buonalbergo',
        label: 'Buonalbergo'
      },
      {
        value: 'Calvi',
        label: 'Calvi'
      },
      {
        value: 'Campolattaro',
        label: 'Campolattaro'
      },
      {
        value: 'Campoli del Monte Taburno',
        label: 'Campoli del Monte Taburno'
      },
      {
        value: 'Casalduni',
        label: 'Casalduni'
      },
      {
        value: 'Castelfranco in Miscano',
        label: 'Castelfranco in Miscano'
      },
      {
        value: 'Castelpagano',
        label: 'Castelpagano'
      },
      {
        value: 'Castelpoto',
        label: 'Castelpoto'
      },
      {
        value: 'Castelvenere',
        label: 'Castelvenere'
      },
      {
        value: 'Castelvetere in Val Fortore',
        label: 'Castelvetere in Val Fortore'
      },
      {
        value: 'Cautano',
        label: 'Cautano'
      },
      {
        value: 'Ceppaloni',
        label: 'Ceppaloni'
      },
      {
        value: 'Cerreto Sannita',
        label: 'Cerreto Sannita'
      },
      {
        value: 'Circello',
        label: 'Circello'
      },
      {
        value: 'Colle Sannita',
        label: 'Colle Sannita'
      },
      {
        value: 'Cusano Mutri',
        label: 'Cusano Mutri'
      },
      {
        value: 'Dugenta',
        label: 'Dugenta'
      },
      {
        value: 'Durazzano',
        label: 'Durazzano'
      },
      {
        value: 'Faicchio',
        label: 'Faicchio'
      },
      {
        value: 'Foglianise',
        label: 'Foglianise'
      },
      {
        value: 'Foiano di Val Fortore',
        label: 'Foiano di Val Fortore'
      },
      {
        value: 'Forchia',
        label: 'Forchia'
      },
      {
        value: 'Fragneto l\'Abate',
        label: 'Fragneto l\'Abate'
      },
      {
        value: 'Fragneto Monforte',
        label: 'Fragneto Monforte'
      },
      {
        value: 'Frasso Telesino',
        label: 'Frasso Telesino'
      },
      {
        value: 'Ginestra degli Schiavoni',
        label: 'Ginestra degli Schiavoni'
      },
      {
        value: 'Guardia Sanframondi',
        label: 'Guardia Sanframondi'
      },
      {
        value: 'Limatola',
        label: 'Limatola'
      },
      {
        value: 'Melizzano',
        label: 'Melizzano'
      },
      {
        value: 'Moiano',
        label: 'Moiano'
      },
      {
        value: 'Molinara',
        label: 'Molinara'
      },
      {
        value: 'Montefalcone di Val Fortore',
        label: 'Montefalcone di Val Fortore'
      },
      {
        value: 'Montesarchio',
        label: 'Montesarchio'
      },
      {
        value: 'Morcone',
        label: 'Morcone'
      },
      {
        value: 'Paduli',
        label: 'Paduli'
      },
      {
        value: 'Pago Veiano',
        label: 'Pago Veiano'
      },
      {
        value: 'Pannarano',
        label: 'Pannarano'
      },
      {
        value: 'Paolisi',
        label: 'Paolisi'
      },
      {
        value: 'Paupisi',
        label: 'Paupisi'
      },
      {
        value: 'Pesco Sannita',
        label: 'Pesco Sannita'
      },
      {
        value: 'Pietraroja',
        label: 'Pietraroja'
      },
      {
        value: 'Pietrelcina',
        label: 'Pietrelcina'
      },
      {
        value: 'Ponte',
        label: 'Ponte'
      },
      {
        value: 'Pontelandolfo',
        label: 'Pontelandolfo'
      },
      {
        value: 'Puglianello',
        label: 'Puglianello'
      },
      {
        value: 'Reino',
        label: 'Reino'
      },
      {
        value: 'San Bartolomeo in Galdo',
        label: 'San Bartolomeo in Galdo'
      },
      {
        value: 'San Giorgio del Sannio',
        label: 'San Giorgio del Sannio'
      },
      {
        value: 'San Giorgio La Molara',
        label: 'San Giorgio La Molara'
      },
      {
        value: 'San Leucio del Sannio',
        label: 'San Leucio del Sannio'
      },
      {
        value: 'San Lorenzello',
        label: 'San Lorenzello'
      },
      {
        value: 'San Lorenzo Maggiore',
        label: 'San Lorenzo Maggiore'
      },
      {
        value: 'San Lupo',
        label: 'San Lupo'
      },
      {
        value: 'San Marco dei Cavoti',
        label: 'San Marco dei Cavoti'
      },
      {
        value: 'San Martino Sannita',
        label: 'San Martino Sannita'
      },
      {
        value: 'San Nazzaro',
        label: 'San Nazzaro'
      },
      {
        value: 'San Nicola Manfredi',
        label: 'San Nicola Manfredi'
      },
      {
        value: 'San Salvatore Telesino',
        label: 'San Salvatore Telesino'
      },
      {
        value: 'Santa Croce del Sannio',
        label: 'Santa Croce del Sannio'
      },
      {
        value: 'Sant\'Agata de\' Goti',
        label: 'Sant\'Agata de\' Goti'
      },
      {
        value: 'Sant\'Angelo a Cupolo',
        label: 'Sant\'Angelo a Cupolo'
      },
      {
        value: 'Sassinoro',
        label: 'Sassinoro'
      },
      {
        value: 'Solopaca',
        label: 'Solopaca'
      },
      {
        value: 'Telese Terme',
        label: 'Telese Terme'
      },
      {
        value: 'Tocco Caudio',
        label: 'Tocco Caudio'
      },
      {
        value: 'Torrecuso',
        label: 'Torrecuso'
      },
      {
        value: 'Vitulano',
        label: 'Vitulano'
      },
      {
        value: 'Sant\'Arcangelo Trimonte',
        label: 'Sant\'Arcangelo Trimonte'
      },
      {
        value: 'Acerra',
        label: 'Acerra'
      },
      {
        value: 'Afragola',
        label: 'Afragola'
      },
      {
        value: 'Agerola',
        label: 'Agerola'
      },
      {
        value: 'Anacapri',
        label: 'Anacapri'
      },
      {
        value: 'Arzano',
        label: 'Arzano'
      },
      {
        value: 'Bacoli',
        label: 'Bacoli'
      },
      {
        value: 'Barano d\'Ischia',
        label: 'Barano d\'Ischia'
      },
      {
        value: 'Boscoreale',
        label: 'Boscoreale'
      },
      {
        value: 'Boscotrecase',
        label: 'Boscotrecase'
      },
      {
        value: 'Brusciano',
        label: 'Brusciano'
      },
      {
        value: 'Caivano',
        label: 'Caivano'
      },
      {
        value: 'Calvizzano',
        label: 'Calvizzano'
      },
      {
        value: 'Camposano',
        label: 'Camposano'
      },
      {
        value: 'Capri',
        label: 'Capri'
      },
      {
        value: 'Carbonara di Nola',
        label: 'Carbonara di Nola'
      },
      {
        value: 'Cardito',
        label: 'Cardito'
      },
      {
        value: 'Casalnuovo di Napoli',
        label: 'Casalnuovo di Napoli'
      },
      {
        value: 'Casamarciano',
        label: 'Casamarciano'
      },
      {
        value: 'Casamicciola Terme',
        label: 'Casamicciola Terme'
      },
      {
        value: 'Casandrino',
        label: 'Casandrino'
      },
      {
        value: 'Casavatore',
        label: 'Casavatore'
      },
      {
        value: 'Casola di Napoli',
        label: 'Casola di Napoli'
      },
      {
        value: 'Casoria',
        label: 'Casoria'
      },
      {
        value: 'Castellammare di Stabia',
        label: 'Castellammare di Stabia'
      },
      {
        value: 'Castello di Cisterna',
        label: 'Castello di Cisterna'
      },
      {
        value: 'Cercola',
        label: 'Cercola'
      },
      {
        value: 'Cicciano',
        label: 'Cicciano'
      },
      {
        value: 'Cimitile',
        label: 'Cimitile'
      },
      {
        value: 'Comiziano',
        label: 'Comiziano'
      },
      {
        value: 'Crispano',
        label: 'Crispano'
      },
      {
        value: 'Forio',
        label: 'Forio'
      },
      {
        value: 'Frattamaggiore',
        label: 'Frattamaggiore'
      },
      {
        value: 'Frattaminore',
        label: 'Frattaminore'
      },
      {
        value: 'Giugliano in Campania',
        label: 'Giugliano in Campania'
      },
      {
        value: 'Gragnano',
        label: 'Gragnano'
      },
      {
        value: 'Grumo Nevano',
        label: 'Grumo Nevano'
      },
      {
        value: 'Ischia',
        label: 'Ischia'
      },
      {
        value: 'Lacco Ameno',
        label: 'Lacco Ameno'
      },
      {
        value: 'Lettere',
        label: 'Lettere'
      },
      {
        value: 'Liveri',
        label: 'Liveri'
      },
      {
        value: 'Marano di Napoli',
        label: 'Marano di Napoli'
      },
      {
        value: 'Mariglianella',
        label: 'Mariglianella'
      },
      {
        value: 'Marigliano',
        label: 'Marigliano'
      },
      {
        value: 'Massa Lubrense',
        label: 'Massa Lubrense'
      },
      {
        value: 'Melito di Napoli',
        label: 'Melito di Napoli'
      },
      {
        value: 'Meta',
        label: 'Meta'
      },
      {
        value: 'Monte di Procida',
        label: 'Monte di Procida'
      },
      {
        value: 'Mugnano di Napoli',
        label: 'Mugnano di Napoli'
      },
      {
        value: 'Napoli',
        label: 'Napoli'
      },
      {
        value: 'Nola',
        label: 'Nola'
      },
      {
        value: 'Ottaviano',
        label: 'Ottaviano'
      },
      {
        value: 'Palma Campania',
        label: 'Palma Campania'
      },
      {
        value: 'Piano di Sorrento',
        label: 'Piano di Sorrento'
      },
      {
        value: 'Pimonte',
        label: 'Pimonte'
      },
      {
        value: 'Poggiomarino',
        label: 'Poggiomarino'
      },
      {
        value: 'Pollena Trocchia',
        label: 'Pollena Trocchia'
      },
      {
        value: 'Pomigliano d\'Arco',
        label: 'Pomigliano d\'Arco'
      },
      {
        value: 'Pompei',
        label: 'Pompei'
      },
      {
        value: 'Portici',
        label: 'Portici'
      },
      {
        value: 'Pozzuoli',
        label: 'Pozzuoli'
      },
      {
        value: 'Procida',
        label: 'Procida'
      },
      {
        value: 'Qualiano',
        label: 'Qualiano'
      },
      {
        value: 'Quarto',
        label: 'Quarto'
      },
      {
        value: 'Ercolano',
        label: 'Ercolano'
      },
      {
        value: 'Roccarainola',
        label: 'Roccarainola'
      },
      {
        value: 'San Gennaro Vesuviano',
        label: 'San Gennaro Vesuviano'
      },
      {
        value: 'San Giorgio a Cremano',
        label: 'San Giorgio a Cremano'
      },
      {
        value: 'San Giuseppe Vesuviano',
        label: 'San Giuseppe Vesuviano'
      },
      {
        value: 'San Paolo Bel Sito',
        label: 'San Paolo Bel Sito'
      },
      {
        value: 'San Sebastiano al Vesuvio',
        label: 'San Sebastiano al Vesuvio'
      },
      {
        value: 'Sant\'Agnello',
        label: 'Sant\'Agnello'
      },
      {
        value: 'Sant\'Anastasia',
        label: 'Sant\'Anastasia'
      },
      {
        value: 'Sant\'Antimo',
        label: 'Sant\'Antimo'
      },
      {
        value: 'Sant\'Antonio Abate',
        label: 'Sant\'Antonio Abate'
      },
      {
        value: 'San Vitaliano',
        label: 'San Vitaliano'
      },
      {
        value: 'Saviano',
        label: 'Saviano'
      },
      {
        value: 'Scisciano',
        label: 'Scisciano'
      },
      {
        value: 'Serrara Fontana',
        label: 'Serrara Fontana'
      },
      {
        value: 'Somma Vesuviana',
        label: 'Somma Vesuviana'
      },
      {
        value: 'Sorrento',
        label: 'Sorrento'
      },
      {
        value: 'Striano',
        label: 'Striano'
      },
      {
        value: 'Terzigno',
        label: 'Terzigno'
      },
      {
        value: 'Torre Annunziata',
        label: 'Torre Annunziata'
      },
      {
        value: 'Torre del Greco',
        label: 'Torre del Greco'
      },
      {
        value: 'Tufino',
        label: 'Tufino'
      },
      {
        value: 'Vico Equense',
        label: 'Vico Equense'
      },
      {
        value: 'Villaricca',
        label: 'Villaricca'
      },
      {
        value: 'Visciano',
        label: 'Visciano'
      },
      {
        value: 'Volla',
        label: 'Volla'
      },
      {
        value: 'Santa Maria la Carità',
        label: 'Santa Maria la Carità'
      },
      {
        value: 'Trecase',
        label: 'Trecase'
      },
      {
        value: 'Massa di Somma',
        label: 'Massa di Somma'
      },
      {
        value: 'Aiello del Sabato',
        label: 'Aiello del Sabato'
      },
      {
        value: 'Altavilla Irpina',
        label: 'Altavilla Irpina'
      },
      {
        value: 'Andretta',
        label: 'Andretta'
      },
      {
        value: 'Aquilonia',
        label: 'Aquilonia'
      },
      {
        value: 'Ariano Irpino',
        label: 'Ariano Irpino'
      },
      {
        value: 'Atripalda',
        label: 'Atripalda'
      },
      {
        value: 'Avella',
        label: 'Avella'
      },
      {
        value: 'Avellino',
        label: 'Avellino'
      },
      {
        value: 'Bagnoli Irpino',
        label: 'Bagnoli Irpino'
      },
      {
        value: 'Baiano',
        label: 'Baiano'
      },
      {
        value: 'Bisaccia',
        label: 'Bisaccia'
      },
      {
        value: 'Bonito',
        label: 'Bonito'
      },
      {
        value: 'Cairano',
        label: 'Cairano'
      },
      {
        value: 'Calabritto',
        label: 'Calabritto'
      },
      {
        value: 'Calitri',
        label: 'Calitri'
      },
      {
        value: 'Candida',
        label: 'Candida'
      },
      {
        value: 'Caposele',
        label: 'Caposele'
      },
      {
        value: 'Capriglia Irpina',
        label: 'Capriglia Irpina'
      },
      {
        value: 'Carife',
        label: 'Carife'
      },
      {
        value: 'Casalbore',
        label: 'Casalbore'
      },
      {
        value: 'Cassano Irpino',
        label: 'Cassano Irpino'
      },
      {
        value: 'Castel Baronia',
        label: 'Castel Baronia'
      },
      {
        value: 'Castelfranci',
        label: 'Castelfranci'
      },
      {
        value: 'Castelvetere sul Calore',
        label: 'Castelvetere sul Calore'
      },
      {
        value: 'Cervinara',
        label: 'Cervinara'
      },
      {
        value: 'Cesinali',
        label: 'Cesinali'
      },
      {
        value: 'Chianche',
        label: 'Chianche'
      },
      {
        value: 'Chiusano di San Domenico',
        label: 'Chiusano di San Domenico'
      },
      {
        value: 'Contrada',
        label: 'Contrada'
      },
      {
        value: 'Conza della Campania',
        label: 'Conza della Campania'
      },
      {
        value: 'Domicella',
        label: 'Domicella'
      },
      {
        value: 'Flumeri',
        label: 'Flumeri'
      },
      {
        value: 'Fontanarosa',
        label: 'Fontanarosa'
      },
      {
        value: 'Forino',
        label: 'Forino'
      },
      {
        value: 'Frigento',
        label: 'Frigento'
      },
      {
        value: 'Gesualdo',
        label: 'Gesualdo'
      },
      {
        value: 'Greci',
        label: 'Greci'
      },
      {
        value: 'Grottaminarda',
        label: 'Grottaminarda'
      },
      {
        value: 'Grottolella',
        label: 'Grottolella'
      },
      {
        value: 'Guardia Lombardi',
        label: 'Guardia Lombardi'
      },
      {
        value: 'Lacedonia',
        label: 'Lacedonia'
      },
      {
        value: 'Lapio',
        label: 'Lapio'
      },
      {
        value: 'Lauro',
        label: 'Lauro'
      },
      {
        value: 'Lioni',
        label: 'Lioni'
      },
      {
        value: 'Luogosano',
        label: 'Luogosano'
      },
      {
        value: 'Manocalzati',
        label: 'Manocalzati'
      },
      {
        value: 'Marzano di Nola',
        label: 'Marzano di Nola'
      },
      {
        value: 'Melito Irpino',
        label: 'Melito Irpino'
      },
      {
        value: 'Mercogliano',
        label: 'Mercogliano'
      },
      {
        value: 'Mirabella Eclano',
        label: 'Mirabella Eclano'
      },
      {
        value: 'Montaguto',
        label: 'Montaguto'
      },
      {
        value: 'Montecalvo Irpino',
        label: 'Montecalvo Irpino'
      },
      {
        value: 'Montefalcione',
        label: 'Montefalcione'
      },
      {
        value: 'Monteforte Irpino',
        label: 'Monteforte Irpino'
      },
      {
        value: 'Montefredane',
        label: 'Montefredane'
      },
      {
        value: 'Montefusco',
        label: 'Montefusco'
      },
      {
        value: 'Montella',
        label: 'Montella'
      },
      {
        value: 'Montemarano',
        label: 'Montemarano'
      },
      {
        value: 'Montemiletto',
        label: 'Montemiletto'
      },
      {
        value: 'Monteverde',
        label: 'Monteverde'
      },
      {
        value: 'Morra De Sanctis',
        label: 'Morra De Sanctis'
      },
      {
        value: 'Moschiano',
        label: 'Moschiano'
      },
      {
        value: 'Mugnano del Cardinale',
        label: 'Mugnano del Cardinale'
      },
      {
        value: 'Nusco',
        label: 'Nusco'
      },
      {
        value: 'Ospedaletto d\'Alpinolo',
        label: 'Ospedaletto d\'Alpinolo'
      },
      {
        value: 'Pago del Vallo di Lauro',
        label: 'Pago del Vallo di Lauro'
      },
      {
        value: 'Parolise',
        label: 'Parolise'
      },
      {
        value: 'Paternopoli',
        label: 'Paternopoli'
      },
      {
        value: 'Petruro Irpino',
        label: 'Petruro Irpino'
      },
      {
        value: 'Pietradefusi',
        label: 'Pietradefusi'
      },
      {
        value: 'Pietrastornina',
        label: 'Pietrastornina'
      },
      {
        value: 'Prata di Principato Ultra',
        label: 'Prata di Principato Ultra'
      },
      {
        value: 'Pratola Serra',
        label: 'Pratola Serra'
      },
      {
        value: 'Quadrelle',
        label: 'Quadrelle'
      },
      {
        value: 'Quindici',
        label: 'Quindici'
      },
      {
        value: 'Roccabascerana',
        label: 'Roccabascerana'
      },
      {
        value: 'Rocca San Felice',
        label: 'Rocca San Felice'
      },
      {
        value: 'Rotondi',
        label: 'Rotondi'
      },
      {
        value: 'Salza Irpina',
        label: 'Salza Irpina'
      },
      {
        value: 'San Mango sul Calore',
        label: 'San Mango sul Calore'
      },
      {
        value: 'San Martino Valle Caudina',
        label: 'San Martino Valle Caudina'
      },
      {
        value: 'San Michele di Serino',
        label: 'San Michele di Serino'
      },
      {
        value: 'San Nicola Baronia',
        label: 'San Nicola Baronia'
      },
      {
        value: 'San Potito Ultra',
        label: 'San Potito Ultra'
      },
      {
        value: 'San Sossio Baronia',
        label: 'San Sossio Baronia'
      },
      {
        value: 'Santa Lucia di Serino',
        label: 'Santa Lucia di Serino'
      },
      {
        value: 'Sant\'Andrea di Conza',
        label: 'Sant\'Andrea di Conza'
      },
      {
        value: 'Sant\'Angelo all\'Esca',
        label: 'Sant\'Angelo all\'Esca'
      },
      {
        value: 'Sant\'Angelo a Scala',
        label: 'Sant\'Angelo a Scala'
      },
      {
        value: 'Sant\'Angelo dei Lombardi',
        label: 'Sant\'Angelo dei Lombardi'
      },
      {
        value: 'Santa Paolina',
        label: 'Santa Paolina'
      },
      {
        value: 'Santo Stefano del Sole',
        label: 'Santo Stefano del Sole'
      },
      {
        value: 'Savignano Irpino',
        label: 'Savignano Irpino'
      },
      {
        value: 'Scampitella',
        label: 'Scampitella'
      },
      {
        value: 'Senerchia',
        label: 'Senerchia'
      },
      {
        value: 'Serino',
        label: 'Serino'
      },
      {
        value: 'Sirignano',
        label: 'Sirignano'
      },
      {
        value: 'Solofra',
        label: 'Solofra'
      },
      {
        value: 'Sorbo Serpico',
        label: 'Sorbo Serpico'
      },
      {
        value: 'Sperone',
        label: 'Sperone'
      },
      {
        value: 'Sturno',
        label: 'Sturno'
      },
      {
        value: 'Summonte',
        label: 'Summonte'
      },
      {
        value: 'Taurano',
        label: 'Taurano'
      },
      {
        value: 'Taurasi',
        label: 'Taurasi'
      },
      {
        value: 'Teora',
        label: 'Teora'
      },
      {
        value: 'Torella dei Lombardi',
        label: 'Torella dei Lombardi'
      },
      {
        value: 'Torre Le Nocelle',
        label: 'Torre Le Nocelle'
      },
      {
        value: 'Torrioni',
        label: 'Torrioni'
      },
      {
        value: 'Trevico',
        label: 'Trevico'
      },
      {
        value: 'Tufo',
        label: 'Tufo'
      },
      {
        value: 'Vallata',
        label: 'Vallata'
      },
      {
        value: 'Vallesaccarda',
        label: 'Vallesaccarda'
      },
      {
        value: 'Venticano',
        label: 'Venticano'
      },
      {
        value: 'Villamaina',
        label: 'Villamaina'
      },
      {
        value: 'Villanova del Battista',
        label: 'Villanova del Battista'
      },
      {
        value: 'Volturara Irpina',
        label: 'Volturara Irpina'
      },
      {
        value: 'Zungoli',
        label: 'Zungoli'
      },
      {
        value: 'Montoro',
        label: 'Montoro'
      },
      {
        value: 'Acerno',
        label: 'Acerno'
      },
      {
        value: 'Agropoli',
        label: 'Agropoli'
      },
      {
        value: 'Albanella',
        label: 'Albanella'
      },
      {
        value: 'Alfano',
        label: 'Alfano'
      },
      {
        value: 'Altavilla Silentina',
        label: 'Altavilla Silentina'
      },
      {
        value: 'Amalfi',
        label: 'Amalfi'
      },
      {
        value: 'Angri',
        label: 'Angri'
      },
      {
        value: 'Aquara',
        label: 'Aquara'
      },
      {
        value: 'Ascea',
        label: 'Ascea'
      },
      {
        value: 'Atena Lucana',
        label: 'Atena Lucana'
      },
      {
        value: 'Atrani',
        label: 'Atrani'
      },
      {
        value: 'Auletta',
        label: 'Auletta'
      },
      {
        value: 'Baronissi',
        label: 'Baronissi'
      },
      {
        value: 'Battipaglia',
        label: 'Battipaglia'
      },
      {
        value: 'Bellosguardo',
        label: 'Bellosguardo'
      },
      {
        value: 'Bracigliano',
        label: 'Bracigliano'
      },
      {
        value: 'Buccino',
        label: 'Buccino'
      },
      {
        value: 'Buonabitacolo',
        label: 'Buonabitacolo'
      },
      {
        value: 'Caggiano',
        label: 'Caggiano'
      },
      {
        value: 'Calvanico',
        label: 'Calvanico'
      },
      {
        value: 'Camerota',
        label: 'Camerota'
      },
      {
        value: 'Campagna',
        label: 'Campagna'
      },
      {
        value: 'Campora',
        label: 'Campora'
      },
      {
        value: 'Cannalonga',
        label: 'Cannalonga'
      },
      {
        value: 'Capaccio Paestum',
        label: 'Capaccio Paestum'
      },
      {
        value: 'Casalbuono',
        label: 'Casalbuono'
      },
      {
        value: 'Casaletto Spartano',
        label: 'Casaletto Spartano'
      },
      {
        value: 'Casal Velino',
        label: 'Casal Velino'
      },
      {
        value: 'Caselle in Pittari',
        label: 'Caselle in Pittari'
      },
      {
        value: 'Castelcivita',
        label: 'Castelcivita'
      },
      {
        value: 'Castellabate',
        label: 'Castellabate'
      },
      {
        value: 'Castelnuovo Cilento',
        label: 'Castelnuovo Cilento'
      },
      {
        value: 'Castelnuovo di Conza',
        label: 'Castelnuovo di Conza'
      },
      {
        value: 'Castel San Giorgio',
        label: 'Castel San Giorgio'
      },
      {
        value: 'Castel San Lorenzo',
        label: 'Castel San Lorenzo'
      },
      {
        value: 'Castiglione del Genovesi',
        label: 'Castiglione del Genovesi'
      },
      {
        value: 'Cava de\' Tirreni',
        label: 'Cava de\' Tirreni'
      },
      {
        value: 'Celle di Bulgheria',
        label: 'Celle di Bulgheria'
      },
      {
        value: 'Centola',
        label: 'Centola'
      },
      {
        value: 'Ceraso',
        label: 'Ceraso'
      },
      {
        value: 'Cetara',
        label: 'Cetara'
      },
      {
        value: 'Cicerale',
        label: 'Cicerale'
      },
      {
        value: 'Colliano',
        label: 'Colliano'
      },
      {
        value: 'Conca dei Marini',
        label: 'Conca dei Marini'
      },
      {
        value: 'Controne',
        label: 'Controne'
      },
      {
        value: 'Contursi Terme',
        label: 'Contursi Terme'
      },
      {
        value: 'Corbara',
        label: 'Corbara'
      },
      {
        value: 'Corleto Monforte',
        label: 'Corleto Monforte'
      },
      {
        value: 'Cuccaro Vetere',
        label: 'Cuccaro Vetere'
      },
      {
        value: 'Eboli',
        label: 'Eboli'
      },
      {
        value: 'Felitto',
        label: 'Felitto'
      },
      {
        value: 'Fisciano',
        label: 'Fisciano'
      },
      {
        value: 'Furore',
        label: 'Furore'
      },
      {
        value: 'Futani',
        label: 'Futani'
      },
      {
        value: 'Giffoni Sei Casali',
        label: 'Giffoni Sei Casali'
      },
      {
        value: 'Giffoni Valle Piana',
        label: 'Giffoni Valle Piana'
      },
      {
        value: 'Gioi',
        label: 'Gioi'
      },
      {
        value: 'Giungano',
        label: 'Giungano'
      },
      {
        value: 'Ispani',
        label: 'Ispani'
      },
      {
        value: 'Laureana Cilento',
        label: 'Laureana Cilento'
      },
      {
        value: 'Laurino',
        label: 'Laurino'
      },
      {
        value: 'Laurito',
        label: 'Laurito'
      },
      {
        value: 'Laviano',
        label: 'Laviano'
      },
      {
        value: 'Lustra',
        label: 'Lustra'
      },
      {
        value: 'Magliano Vetere',
        label: 'Magliano Vetere'
      },
      {
        value: 'Maiori',
        label: 'Maiori'
      },
      {
        value: 'Mercato San Severino',
        label: 'Mercato San Severino'
      },
      {
        value: 'Minori',
        label: 'Minori'
      },
      {
        value: 'Moio della Civitella',
        label: 'Moio della Civitella'
      },
      {
        value: 'Montano Antilia',
        label: 'Montano Antilia'
      },
      {
        value: 'Montecorice',
        label: 'Montecorice'
      },
      {
        value: 'Montecorvino Pugliano',
        label: 'Montecorvino Pugliano'
      },
      {
        value: 'Montecorvino Rovella',
        label: 'Montecorvino Rovella'
      },
      {
        value: 'Monteforte Cilento',
        label: 'Monteforte Cilento'
      },
      {
        value: 'Monte San Giacomo',
        label: 'Monte San Giacomo'
      },
      {
        value: 'Montesano sulla Marcellana',
        label: 'Montesano sulla Marcellana'
      },
      {
        value: 'Morigerati',
        label: 'Morigerati'
      },
      {
        value: 'Nocera Inferiore',
        label: 'Nocera Inferiore'
      },
      {
        value: 'Nocera Superiore',
        label: 'Nocera Superiore'
      },
      {
        value: 'Novi Velia',
        label: 'Novi Velia'
      },
      {
        value: 'Ogliastro Cilento',
        label: 'Ogliastro Cilento'
      },
      {
        value: 'Olevano sul Tusciano',
        label: 'Olevano sul Tusciano'
      },
      {
        value: 'Oliveto Citra',
        label: 'Oliveto Citra'
      },
      {
        value: 'Omignano',
        label: 'Omignano'
      },
      {
        value: 'Orria',
        label: 'Orria'
      },
      {
        value: 'Ottati',
        label: 'Ottati'
      },
      {
        value: 'Padula',
        label: 'Padula'
      },
      {
        value: 'Pagani',
        label: 'Pagani'
      },
      {
        value: 'Palomonte',
        label: 'Palomonte'
      },
      {
        value: 'Pellezzano',
        label: 'Pellezzano'
      },
      {
        value: 'Perdifumo',
        label: 'Perdifumo'
      },
      {
        value: 'Perito',
        label: 'Perito'
      },
      {
        value: 'Pertosa',
        label: 'Pertosa'
      },
      {
        value: 'Petina',
        label: 'Petina'
      },
      {
        value: 'Piaggine',
        label: 'Piaggine'
      },
      {
        value: 'Pisciotta',
        label: 'Pisciotta'
      },
      {
        value: 'Polla',
        label: 'Polla'
      },
      {
        value: 'Pollica',
        label: 'Pollica'
      },
      {
        value: 'Pontecagnano Faiano',
        label: 'Pontecagnano Faiano'
      },
      {
        value: 'Positano',
        label: 'Positano'
      },
      {
        value: 'Postiglione',
        label: 'Postiglione'
      },
      {
        value: 'Praiano',
        label: 'Praiano'
      },
      {
        value: 'Prignano Cilento',
        label: 'Prignano Cilento'
      },
      {
        value: 'Ravello',
        label: 'Ravello'
      },
      {
        value: 'Ricigliano',
        label: 'Ricigliano'
      },
      {
        value: 'Roccadaspide',
        label: 'Roccadaspide'
      },
      {
        value: 'Roccagloriosa',
        label: 'Roccagloriosa'
      },
      {
        value: 'Roccapiemonte',
        label: 'Roccapiemonte'
      },
      {
        value: 'Rofrano',
        label: 'Rofrano'
      },
      {
        value: 'Romagnano al Monte',
        label: 'Romagnano al Monte'
      },
      {
        value: 'Roscigno',
        label: 'Roscigno'
      },
      {
        value: 'Rutino',
        label: 'Rutino'
      },
      {
        value: 'Sacco',
        label: 'Sacco'
      },
      {
        value: 'Sala Consilina',
        label: 'Sala Consilina'
      },
      {
        value: 'Salento',
        label: 'Salento'
      },
      {
        value: 'Salerno',
        label: 'Salerno'
      },
      {
        value: 'Salvitelle',
        label: 'Salvitelle'
      },
      {
        value: 'San Cipriano Picentino',
        label: 'San Cipriano Picentino'
      },
      {
        value: 'San Giovanni a Piro',
        label: 'San Giovanni a Piro'
      },
      {
        value: 'San Gregorio Magno',
        label: 'San Gregorio Magno'
      },
      {
        value: 'San Mango Piemonte',
        label: 'San Mango Piemonte'
      },
      {
        value: 'San Marzano sul Sarno',
        label: 'San Marzano sul Sarno'
      },
      {
        value: 'San Mauro Cilento',
        label: 'San Mauro Cilento'
      },
      {
        value: 'San Mauro la Bruca',
        label: 'San Mauro la Bruca'
      },
      {
        value: 'San Pietro al Tanagro',
        label: 'San Pietro al Tanagro'
      },
      {
        value: 'San Rufo',
        label: 'San Rufo'
      },
      {
        value: 'Santa Marina',
        label: 'Santa Marina'
      },
      {
        value: 'Sant\'Angelo a Fasanella',
        label: 'Sant\'Angelo a Fasanella'
      },
      {
        value: 'Sant\'Arsenio',
        label: 'Sant\'Arsenio'
      },
      {
        value: 'Sant\'Egidio del Monte Albino',
        label: 'Sant\'Egidio del Monte Albino'
      },
      {
        value: 'Santomenna',
        label: 'Santomenna'
      },
      {
        value: 'San Valentino Torio',
        label: 'San Valentino Torio'
      },
      {
        value: 'Sanza',
        label: 'Sanza'
      },
      {
        value: 'Sapri',
        label: 'Sapri'
      },
      {
        value: 'Sarno',
        label: 'Sarno'
      },
      {
        value: 'Sassano',
        label: 'Sassano'
      },
      {
        value: 'Scafati',
        label: 'Scafati'
      },
      {
        value: 'Scala',
        label: 'Scala'
      },
      {
        value: 'Serramezzana',
        label: 'Serramezzana'
      },
      {
        value: 'Serre',
        label: 'Serre'
      },
      {
        value: 'Sessa Cilento',
        label: 'Sessa Cilento'
      },
      {
        value: 'Siano',
        label: 'Siano'
      },
      {
        value: 'Sicignano degli Alburni',
        label: 'Sicignano degli Alburni'
      },
      {
        value: 'Stella Cilento',
        label: 'Stella Cilento'
      },
      {
        value: 'Stio',
        label: 'Stio'
      },
      {
        value: 'Teggiano',
        label: 'Teggiano'
      },
      {
        value: 'Torchiara',
        label: 'Torchiara'
      },
      {
        value: 'Torraca',
        label: 'Torraca'
      },
      {
        value: 'Torre Orsaia',
        label: 'Torre Orsaia'
      },
      {
        value: 'Tortorella',
        label: 'Tortorella'
      },
      {
        value: 'Tramonti',
        label: 'Tramonti'
      },
      {
        value: 'Trentinara',
        label: 'Trentinara'
      },
      {
        value: 'Valle dell\'Angelo',
        label: 'Valle dell\'Angelo'
      },
      {
        value: 'Vallo della Lucania',
        label: 'Vallo della Lucania'
      },
      {
        value: 'Valva',
        label: 'Valva'
      },
      {
        value: 'Vibonati',
        label: 'Vibonati'
      },
      {
        value: 'Vietri sul Mare',
        label: 'Vietri sul Mare'
      },
      {
        value: 'Bellizzi',
        label: 'Bellizzi'
      },
      {
        value: 'Acciano',
        label: 'Acciano'
      },
      {
        value: 'Aielli',
        label: 'Aielli'
      },
      {
        value: 'Alfedena',
        label: 'Alfedena'
      },
      {
        value: 'Anversa degli Abruzzi',
        label: 'Anversa degli Abruzzi'
      },
      {
        value: 'Ateleta',
        label: 'Ateleta'
      },
      {
        value: 'Avezzano',
        label: 'Avezzano'
      },
      {
        value: 'Balsorano',
        label: 'Balsorano'
      },
      {
        value: 'Barete',
        label: 'Barete'
      },
      {
        value: 'Barisciano',
        label: 'Barisciano'
      },
      {
        value: 'Barrea',
        label: 'Barrea'
      },
      {
        value: 'Bisegna',
        label: 'Bisegna'
      },
      {
        value: 'Bugnara',
        label: 'Bugnara'
      },
      {
        value: 'Cagnano Amiterno',
        label: 'Cagnano Amiterno'
      },
      {
        value: 'Calascio',
        label: 'Calascio'
      },
      {
        value: 'Campo di Giove',
        label: 'Campo di Giove'
      },
      {
        value: 'Campotosto',
        label: 'Campotosto'
      },
      {
        value: 'Canistro',
        label: 'Canistro'
      },
      {
        value: 'Cansano',
        label: 'Cansano'
      },
      {
        value: 'Capestrano',
        label: 'Capestrano'
      },
      {
        value: 'Capistrello',
        label: 'Capistrello'
      },
      {
        value: 'Capitignano',
        label: 'Capitignano'
      },
      {
        value: 'Caporciano',
        label: 'Caporciano'
      },
      {
        value: 'Cappadocia',
        label: 'Cappadocia'
      },
      {
        value: 'Carapelle Calvisio',
        label: 'Carapelle Calvisio'
      },
      {
        value: 'Carsoli',
        label: 'Carsoli'
      },
      {
        value: 'Castel del Monte',
        label: 'Castel del Monte'
      },
      {
        value: 'Castel di Ieri',
        label: 'Castel di Ieri'
      },
      {
        value: 'Castel di Sangro',
        label: 'Castel di Sangro'
      },
      {
        value: 'Castellafiume',
        label: 'Castellafiume'
      },
      {
        value: 'Castelvecchio Calvisio',
        label: 'Castelvecchio Calvisio'
      },
      {
        value: 'Castelvecchio Subequo',
        label: 'Castelvecchio Subequo'
      },
      {
        value: 'Celano',
        label: 'Celano'
      },
      {
        value: 'Cerchio',
        label: 'Cerchio'
      },
      {
        value: 'Civita d\'Antino',
        label: 'Civita d\'Antino'
      },
      {
        value: 'Civitella Alfedena',
        label: 'Civitella Alfedena'
      },
      {
        value: 'Civitella Roveto',
        label: 'Civitella Roveto'
      },
      {
        value: 'Cocullo',
        label: 'Cocullo'
      },
      {
        value: 'Collarmele',
        label: 'Collarmele'
      },
      {
        value: 'Collelongo',
        label: 'Collelongo'
      },
      {
        value: 'Collepietro',
        label: 'Collepietro'
      },
      {
        value: 'Corfinio',
        label: 'Corfinio'
      },
      {
        value: 'Fagnano Alto',
        label: 'Fagnano Alto'
      },
      {
        value: 'Fontecchio',
        label: 'Fontecchio'
      },
      {
        value: 'Fossa',
        label: 'Fossa'
      },
      {
        value: 'Gagliano Aterno',
        label: 'Gagliano Aterno'
      },
      {
        value: 'Gioia dei Marsi',
        label: 'Gioia dei Marsi'
      },
      {
        value: 'Goriano Sicoli',
        label: 'Goriano Sicoli'
      },
      {
        value: 'Introdacqua',
        label: 'Introdacqua'
      },
      {
        value: 'L\'Aquila',
        label: 'L\'Aquila'
      },
      {
        value: 'Lecce nei Marsi',
        label: 'Lecce nei Marsi'
      },
      {
        value: 'Luco dei Marsi',
        label: 'Luco dei Marsi'
      },
      {
        value: 'Lucoli',
        label: 'Lucoli'
      },
      {
        value: 'Magliano de\' Marsi',
        label: 'Magliano de\' Marsi'
      },
      {
        value: 'Massa d\'Albe',
        label: 'Massa d\'Albe'
      },
      {
        value: 'Molina Aterno',
        label: 'Molina Aterno'
      },
      {
        value: 'Montereale',
        label: 'Montereale'
      },
      {
        value: 'Morino',
        label: 'Morino'
      },
      {
        value: 'Navelli',
        label: 'Navelli'
      },
      {
        value: 'Ocre',
        label: 'Ocre'
      },
      {
        value: 'Ofena',
        label: 'Ofena'
      },
      {
        value: 'Opi',
        label: 'Opi'
      },
      {
        value: 'Oricola',
        label: 'Oricola'
      },
      {
        value: 'Ortona dei Marsi',
        label: 'Ortona dei Marsi'
      },
      {
        value: 'Ortucchio',
        label: 'Ortucchio'
      },
      {
        value: 'Ovindoli',
        label: 'Ovindoli'
      },
      {
        value: 'Pacentro',
        label: 'Pacentro'
      },
      {
        value: 'Pereto',
        label: 'Pereto'
      },
      {
        value: 'Pescasseroli',
        label: 'Pescasseroli'
      },
      {
        value: 'Pescina',
        label: 'Pescina'
      },
      {
        value: 'Pescocostanzo',
        label: 'Pescocostanzo'
      },
      {
        value: 'Pettorano sul Gizio',
        label: 'Pettorano sul Gizio'
      },
      {
        value: 'Pizzoli',
        label: 'Pizzoli'
      },
      {
        value: 'Poggio Picenze',
        label: 'Poggio Picenze'
      },
      {
        value: 'Prata d\'Ansidonia',
        label: 'Prata d\'Ansidonia'
      },
      {
        value: 'Pratola Peligna',
        label: 'Pratola Peligna'
      },
      {
        value: 'Prezza',
        label: 'Prezza'
      },
      {
        value: 'Raiano',
        label: 'Raiano'
      },
      {
        value: 'Rivisondoli',
        label: 'Rivisondoli'
      },
      {
        value: 'Roccacasale',
        label: 'Roccacasale'
      },
      {
        value: 'Rocca di Botte',
        label: 'Rocca di Botte'
      },
      {
        value: 'Rocca di Cambio',
        label: 'Rocca di Cambio'
      },
      {
        value: 'Rocca di Mezzo',
        label: 'Rocca di Mezzo'
      },
      {
        value: 'Rocca Pia',
        label: 'Rocca Pia'
      },
      {
        value: 'Roccaraso',
        label: 'Roccaraso'
      },
      {
        value: 'San Benedetto dei Marsi',
        label: 'San Benedetto dei Marsi'
      },
      {
        value: 'San Benedetto in Perillis',
        label: 'San Benedetto in Perillis'
      },
      {
        value: 'San Demetrio ne\' Vestini',
        label: 'San Demetrio ne\' Vestini'
      },
      {
        value: 'San Pio delle Camere',
        label: 'San Pio delle Camere'
      },
      {
        value: 'Sante Marie',
        label: 'Sante Marie'
      },
      {
        value: 'Sant\'Eusanio Forconese',
        label: 'Sant\'Eusanio Forconese'
      },
      {
        value: 'Santo Stefano di Sessanio',
        label: 'Santo Stefano di Sessanio'
      },
      {
        value: 'San Vincenzo Valle Roveto',
        label: 'San Vincenzo Valle Roveto'
      },
      {
        value: 'Scanno',
        label: 'Scanno'
      },
      {
        value: 'Scontrone',
        label: 'Scontrone'
      },
      {
        value: 'Scoppito',
        label: 'Scoppito'
      },
      {
        value: 'Scurcola Marsicana',
        label: 'Scurcola Marsicana'
      },
      {
        value: 'Secinaro',
        label: 'Secinaro'
      },
      {
        value: 'Sulmona',
        label: 'Sulmona'
      },
      {
        value: 'Tagliacozzo',
        label: 'Tagliacozzo'
      },
      {
        value: 'Tione degli Abruzzi',
        label: 'Tione degli Abruzzi'
      },
      {
        value: 'Tornimparte',
        label: 'Tornimparte'
      },
      {
        value: 'Trasacco',
        label: 'Trasacco'
      },
      {
        value: 'Villalago',
        label: 'Villalago'
      },
      {
        value: 'Villa Santa Lucia degli Abruzzi',
        label: 'Villa Santa Lucia degli Abruzzi'
      },
      {
        value: 'Villa Sant\'Angelo',
        label: 'Villa Sant\'Angelo'
      },
      {
        value: 'Villavallelonga',
        label: 'Villavallelonga'
      },
      {
        value: 'Villetta Barrea',
        label: 'Villetta Barrea'
      },
      {
        value: 'Vittorito',
        label: 'Vittorito'
      },
      {
        value: 'Alba Adriatica',
        label: 'Alba Adriatica'
      },
      {
        value: 'Ancarano',
        label: 'Ancarano'
      },
      {
        value: 'Arsita',
        label: 'Arsita'
      },
      {
        value: 'Atri',
        label: 'Atri'
      },
      {
        value: 'Basciano',
        label: 'Basciano'
      },
      {
        value: 'Bellante',
        label: 'Bellante'
      },
      {
        value: 'Bisenti',
        label: 'Bisenti'
      },
      {
        value: 'Campli',
        label: 'Campli'
      },
      {
        value: 'Canzano',
        label: 'Canzano'
      },
      {
        value: 'Castel Castagna',
        label: 'Castel Castagna'
      },
      {
        value: 'Castellalto',
        label: 'Castellalto'
      },
      {
        value: 'Castelli',
        label: 'Castelli'
      },
      {
        value: 'Castiglione Messer Raimondo',
        label: 'Castiglione Messer Raimondo'
      },
      {
        value: 'Castilenti',
        label: 'Castilenti'
      },
      {
        value: 'Cellino Attanasio',
        label: 'Cellino Attanasio'
      },
      {
        value: 'Cermignano',
        label: 'Cermignano'
      },
      {
        value: 'Civitella del Tronto',
        label: 'Civitella del Tronto'
      },
      {
        value: 'Colledara',
        label: 'Colledara'
      },
      {
        value: 'Colonnella',
        label: 'Colonnella'
      },
      {
        value: 'Controguerra',
        label: 'Controguerra'
      },
      {
        value: 'Corropoli',
        label: 'Corropoli'
      },
      {
        value: 'Cortino',
        label: 'Cortino'
      },
      {
        value: 'Crognaleto',
        label: 'Crognaleto'
      },
      {
        value: 'Fano Adriano',
        label: 'Fano Adriano'
      },
      {
        value: 'Giulianova',
        label: 'Giulianova'
      },
      {
        value: 'Isola del Gran Sasso d\'Italia',
        label: 'Isola del Gran Sasso d\'Italia'
      },
      {
        value: 'Montefino',
        label: 'Montefino'
      },
      {
        value: 'Montorio al Vomano',
        label: 'Montorio al Vomano'
      },
      {
        value: 'Morro d\'Oro',
        label: 'Morro d\'Oro'
      },
      {
        value: 'Mosciano Sant\'Angelo',
        label: 'Mosciano Sant\'Angelo'
      },
      {
        value: 'Nereto',
        label: 'Nereto'
      },
      {
        value: 'Notaresco',
        label: 'Notaresco'
      },
      {
        value: 'Penna Sant\'Andrea',
        label: 'Penna Sant\'Andrea'
      },
      {
        value: 'Pietracamela',
        label: 'Pietracamela'
      },
      {
        value: 'Pineto',
        label: 'Pineto'
      },
      {
        value: 'Rocca Santa Maria',
        label: 'Rocca Santa Maria'
      },
      {
        value: 'Roseto degli Abruzzi',
        label: 'Roseto degli Abruzzi'
      },
      {
        value: 'Sant\'Egidio alla Vibrata',
        label: 'Sant\'Egidio alla Vibrata'
      },
      {
        value: 'Sant\'Omero',
        label: 'Sant\'Omero'
      },
      {
        value: 'Silvi',
        label: 'Silvi'
      },
      {
        value: 'Teramo',
        label: 'Teramo'
      },
      {
        value: 'Torano Nuovo',
        label: 'Torano Nuovo'
      },
      {
        value: 'Torricella Sicura',
        label: 'Torricella Sicura'
      },
      {
        value: 'Tortoreto',
        label: 'Tortoreto'
      },
      {
        value: 'Tossicia',
        label: 'Tossicia'
      },
      {
        value: 'Valle Castellana',
        label: 'Valle Castellana'
      },
      {
        value: 'Martinsicuro',
        label: 'Martinsicuro'
      },
      {
        value: 'Abbateggio',
        label: 'Abbateggio'
      },
      {
        value: 'Alanno',
        label: 'Alanno'
      },
      {
        value: 'Bolognano',
        label: 'Bolognano'
      },
      {
        value: 'Brittoli',
        label: 'Brittoli'
      },
      {
        value: 'Bussi sul Tirino',
        label: 'Bussi sul Tirino'
      },
      {
        value: 'Cappelle sul Tavo',
        label: 'Cappelle sul Tavo'
      },
      {
        value: 'Caramanico Terme',
        label: 'Caramanico Terme'
      },
      {
        value: 'Carpineto della Nora',
        label: 'Carpineto della Nora'
      },
      {
        value: 'Castiglione a Casauria',
        label: 'Castiglione a Casauria'
      },
      {
        value: 'Catignano',
        label: 'Catignano'
      },
      {
        value: 'Cepagatti',
        label: 'Cepagatti'
      },
      {
        value: 'Città Sant\'Angelo',
        label: 'Città Sant\'Angelo'
      },
      {
        value: 'Civitaquana',
        label: 'Civitaquana'
      },
      {
        value: 'Civitella Casanova',
        label: 'Civitella Casanova'
      },
      {
        value: 'Collecorvino',
        label: 'Collecorvino'
      },
      {
        value: 'Corvara',
        label: 'Corvara'
      },
      {
        value: 'Cugnoli',
        label: 'Cugnoli'
      },
      {
        value: 'Elice',
        label: 'Elice'
      },
      {
        value: 'Farindola',
        label: 'Farindola'
      },
      {
        value: 'Lettomanoppello',
        label: 'Lettomanoppello'
      },
      {
        value: 'Loreto Aprutino',
        label: 'Loreto Aprutino'
      },
      {
        value: 'Manoppello',
        label: 'Manoppello'
      },
      {
        value: 'Montebello di Bertona',
        label: 'Montebello di Bertona'
      },
      {
        value: 'Montesilvano',
        label: 'Montesilvano'
      },
      {
        value: 'Moscufo',
        label: 'Moscufo'
      },
      {
        value: 'Nocciano',
        label: 'Nocciano'
      },
      {
        value: 'Penne',
        label: 'Penne'
      },
      {
        value: 'Pescara',
        label: 'Pescara'
      },
      {
        value: 'Pescosansonesco',
        label: 'Pescosansonesco'
      },
      {
        value: 'Pianella',
        label: 'Pianella'
      },
      {
        value: 'Picciano',
        label: 'Picciano'
      },
      {
        value: 'Pietranico',
        label: 'Pietranico'
      },
      {
        value: 'Popoli Terme',
        label: 'Popoli Terme'
      },
      {
        value: 'Roccamorice',
        label: 'Roccamorice'
      },
      {
        value: 'Rosciano',
        label: 'Rosciano'
      },
      {
        value: 'Salle',
        label: 'Salle'
      },
      {
        value: 'Sant\'Eufemia a Maiella',
        label: 'Sant\'Eufemia a Maiella'
      },
      {
        value: 'San Valentino in Abruzzo Citeriore',
        label: 'San Valentino in Abruzzo Citeriore'
      },
      {
        value: 'Scafa',
        label: 'Scafa'
      },
      {
        value: 'Serramonacesca',
        label: 'Serramonacesca'
      },
      {
        value: 'Spoltore',
        label: 'Spoltore'
      },
      {
        value: 'Tocco da Casauria',
        label: 'Tocco da Casauria'
      },
      {
        value: 'Torre de\' Passeri',
        label: 'Torre de\' Passeri'
      },
      {
        value: 'Turrivalignani',
        label: 'Turrivalignani'
      },
      {
        value: 'Vicoli',
        label: 'Vicoli'
      },
      {
        value: 'Villa Celiera',
        label: 'Villa Celiera'
      },
      {
        value: 'Altino',
        label: 'Altino'
      },
      {
        value: 'Archi',
        label: 'Archi'
      },
      {
        value: 'Ari',
        label: 'Ari'
      },
      {
        value: 'Arielli',
        label: 'Arielli'
      },
      {
        value: 'Atessa',
        label: 'Atessa'
      },
      {
        value: 'Bomba',
        label: 'Bomba'
      },
      {
        value: 'Borrello',
        label: 'Borrello'
      },
      {
        value: 'Bucchianico',
        label: 'Bucchianico'
      },
      {
        value: 'Montebello sul Sangro',
        label: 'Montebello sul Sangro'
      },
      {
        value: 'Canosa Sannita',
        label: 'Canosa Sannita'
      },
      {
        value: 'Carpineto Sinello',
        label: 'Carpineto Sinello'
      },
      {
        value: 'Carunchio',
        label: 'Carunchio'
      },
      {
        value: 'Casacanditella',
        label: 'Casacanditella'
      },
      {
        value: 'Casalanguida',
        label: 'Casalanguida'
      },
      {
        value: 'Casalbordino',
        label: 'Casalbordino'
      },
      {
        value: 'Casalincontrada',
        label: 'Casalincontrada'
      },
      {
        value: 'Casoli',
        label: 'Casoli'
      },
      {
        value: 'Castel Frentano',
        label: 'Castel Frentano'
      },
      {
        value: 'Castelguidone',
        label: 'Castelguidone'
      },
      {
        value: 'Castiglione Messer Marino',
        label: 'Castiglione Messer Marino'
      },
      {
        value: 'Celenza sul Trigno',
        label: 'Celenza sul Trigno'
      },
      {
        value: 'Chieti',
        label: 'Chieti'
      },
      {
        value: 'Civitaluparella',
        label: 'Civitaluparella'
      },
      {
        value: 'Civitella Messer Raimondo',
        label: 'Civitella Messer Raimondo'
      },
      {
        value: 'Colledimacine',
        label: 'Colledimacine'
      },
      {
        value: 'Colledimezzo',
        label: 'Colledimezzo'
      },
      {
        value: 'Crecchio',
        label: 'Crecchio'
      },
      {
        value: 'Cupello',
        label: 'Cupello'
      },
      {
        value: 'Dogliola',
        label: 'Dogliola'
      },
      {
        value: 'Fara Filiorum Petri',
        label: 'Fara Filiorum Petri'
      },
      {
        value: 'Fara San Martino',
        label: 'Fara San Martino'
      },
      {
        value: 'Filetto',
        label: 'Filetto'
      },
      {
        value: 'Fossacesia',
        label: 'Fossacesia'
      },
      {
        value: 'Fraine',
        label: 'Fraine'
      },
      {
        value: 'Francavilla al Mare',
        label: 'Francavilla al Mare'
      },
      {
        value: 'Fresagrandinaria',
        label: 'Fresagrandinaria'
      },
      {
        value: 'Frisa',
        label: 'Frisa'
      },
      {
        value: 'Furci',
        label: 'Furci'
      },
      {
        value: 'Gamberale',
        label: 'Gamberale'
      },
      {
        value: 'Gessopalena',
        label: 'Gessopalena'
      },
      {
        value: 'Gissi',
        label: 'Gissi'
      },
      {
        value: 'Giuliano Teatino',
        label: 'Giuliano Teatino'
      },
      {
        value: 'Guardiagrele',
        label: 'Guardiagrele'
      },
      {
        value: 'Guilmi',
        label: 'Guilmi'
      },
      {
        value: 'Lama dei Peligni',
        label: 'Lama dei Peligni'
      },
      {
        value: 'Lanciano',
        label: 'Lanciano'
      },
      {
        value: 'Lentella',
        label: 'Lentella'
      },
      {
        value: 'Lettopalena',
        label: 'Lettopalena'
      },
      {
        value: 'Liscia',
        label: 'Liscia'
      },
      {
        value: 'Miglianico',
        label: 'Miglianico'
      },
      {
        value: 'Montazzoli',
        label: 'Montazzoli'
      },
      {
        value: 'Monteferrante',
        label: 'Monteferrante'
      },
      {
        value: 'Montelapiano',
        label: 'Montelapiano'
      },
      {
        value: 'Montenerodomo',
        label: 'Montenerodomo'
      },
      {
        value: 'Monteodorisio',
        label: 'Monteodorisio'
      },
      {
        value: 'Mozzagrogna',
        label: 'Mozzagrogna'
      },
      {
        value: 'Orsogna',
        label: 'Orsogna'
      },
      {
        value: 'Ortona',
        label: 'Ortona'
      },
      {
        value: 'Paglieta',
        label: 'Paglieta'
      },
      {
        value: 'Palena',
        label: 'Palena'
      },
      {
        value: 'Palmoli',
        label: 'Palmoli'
      },
      {
        value: 'Palombaro',
        label: 'Palombaro'
      },
      {
        value: 'Pennadomo',
        label: 'Pennadomo'
      },
      {
        value: 'Pennapiedimonte',
        label: 'Pennapiedimonte'
      },
      {
        value: 'Perano',
        label: 'Perano'
      },
      {
        value: 'Pizzoferrato',
        label: 'Pizzoferrato'
      },
      {
        value: 'Poggiofiorito',
        label: 'Poggiofiorito'
      },
      {
        value: 'Pollutri',
        label: 'Pollutri'
      },
      {
        value: 'Pretoro',
        label: 'Pretoro'
      },
      {
        value: 'Quadri',
        label: 'Quadri'
      },
      {
        value: 'Rapino',
        label: 'Rapino'
      },
      {
        value: 'Ripa Teatina',
        label: 'Ripa Teatina'
      },
      {
        value: 'Roccamontepiano',
        label: 'Roccamontepiano'
      },
      {
        value: 'Rocca San Giovanni',
        label: 'Rocca San Giovanni'
      },
      {
        value: 'Roccascalegna',
        label: 'Roccascalegna'
      },
      {
        value: 'Roccaspinalveti',
        label: 'Roccaspinalveti'
      },
      {
        value: 'Roio del Sangro',
        label: 'Roio del Sangro'
      },
      {
        value: 'Rosello',
        label: 'Rosello'
      },
      {
        value: 'San Buono',
        label: 'San Buono'
      },
      {
        value: 'San Giovanni Lipioni',
        label: 'San Giovanni Lipioni'
      },
      {
        value: 'San Giovanni Teatino',
        label: 'San Giovanni Teatino'
      },
      {
        value: 'San Martino sulla Marrucina',
        label: 'San Martino sulla Marrucina'
      },
      {
        value: 'San Salvo',
        label: 'San Salvo'
      },
      {
        value: 'Santa Maria Imbaro',
        label: 'Santa Maria Imbaro'
      },
      {
        value: 'Sant\'Eusanio del Sangro',
        label: 'Sant\'Eusanio del Sangro'
      },
      {
        value: 'San Vito Chietino',
        label: 'San Vito Chietino'
      },
      {
        value: 'Scerni',
        label: 'Scerni'
      },
      {
        value: 'Schiavi di Abruzzo',
        label: 'Schiavi di Abruzzo'
      },
      {
        value: 'Taranta Peligna',
        label: 'Taranta Peligna'
      },
      {
        value: 'Tollo',
        label: 'Tollo'
      },
      {
        value: 'Torino di Sangro',
        label: 'Torino di Sangro'
      },
      {
        value: 'Tornareccio',
        label: 'Tornareccio'
      },
      {
        value: 'Torrebruna',
        label: 'Torrebruna'
      },
      {
        value: 'Torrevecchia Teatina',
        label: 'Torrevecchia Teatina'
      },
      {
        value: 'Torricella Peligna',
        label: 'Torricella Peligna'
      },
      {
        value: 'Treglio',
        label: 'Treglio'
      },
      {
        value: 'Tufillo',
        label: 'Tufillo'
      },
      {
        value: 'Vacri',
        label: 'Vacri'
      },
      {
        value: 'Vasto',
        label: 'Vasto'
      },
      {
        value: 'Villalfonsina',
        label: 'Villalfonsina'
      },
      {
        value: 'Villamagna',
        label: 'Villamagna'
      },
      {
        value: 'Villa Santa Maria',
        label: 'Villa Santa Maria'
      },
      {
        value: 'Pietraferrazzana',
        label: 'Pietraferrazzana'
      },
      {
        value: 'Fallo',
        label: 'Fallo'
      },
      {
        value: 'Acquaviva Collecroce',
        label: 'Acquaviva Collecroce'
      },
      {
        value: 'Baranello',
        label: 'Baranello'
      },
      {
        value: 'Bojano',
        label: 'Bojano'
      },
      {
        value: 'Bonefro',
        label: 'Bonefro'
      },
      {
        value: 'Busso',
        label: 'Busso'
      },
      {
        value: 'Campobasso',
        label: 'Campobasso'
      },
      {
        value: 'Campochiaro',
        label: 'Campochiaro'
      },
      {
        value: 'Campodipietra',
        label: 'Campodipietra'
      },
      {
        value: 'Campolieto',
        label: 'Campolieto'
      },
      {
        value: 'Campomarino',
        label: 'Campomarino'
      },
      {
        value: 'Casacalenda',
        label: 'Casacalenda'
      },
      {
        value: 'Casalciprano',
        label: 'Casalciprano'
      },
      {
        value: 'Castelbottaccio',
        label: 'Castelbottaccio'
      },
      {
        value: 'Castellino del Biferno',
        label: 'Castellino del Biferno'
      },
      {
        value: 'Castelmauro',
        label: 'Castelmauro'
      },
      {
        value: 'Castropignano',
        label: 'Castropignano'
      },
      {
        value: 'Cercemaggiore',
        label: 'Cercemaggiore'
      },
      {
        value: 'Cercepiccola',
        label: 'Cercepiccola'
      },
      {
        value: 'Civitacampomarano',
        label: 'Civitacampomarano'
      },
      {
        value: 'Colle d\'Anchise',
        label: 'Colle d\'Anchise'
      },
      {
        value: 'Colletorto',
        label: 'Colletorto'
      },
      {
        value: 'Duronia',
        label: 'Duronia'
      },
      {
        value: 'Ferrazzano',
        label: 'Ferrazzano'
      },
      {
        value: 'Fossalto',
        label: 'Fossalto'
      },
      {
        value: 'Gambatesa',
        label: 'Gambatesa'
      },
      {
        value: 'Gildone',
        label: 'Gildone'
      },
      {
        value: 'Guardialfiera',
        label: 'Guardialfiera'
      },
      {
        value: 'Guardiaregia',
        label: 'Guardiaregia'
      },
      {
        value: 'Guglionesi',
        label: 'Guglionesi'
      },
      {
        value: 'Jelsi',
        label: 'Jelsi'
      },
      {
        value: 'Larino',
        label: 'Larino'
      },
      {
        value: 'Limosano',
        label: 'Limosano'
      },
      {
        value: 'Lucito',
        label: 'Lucito'
      },
      {
        value: 'Lupara',
        label: 'Lupara'
      },
      {
        value: 'Macchia Valfortore',
        label: 'Macchia Valfortore'
      },
      {
        value: 'Mafalda',
        label: 'Mafalda'
      },
      {
        value: 'Matrice',
        label: 'Matrice'
      },
      {
        value: 'Mirabello Sannitico',
        label: 'Mirabello Sannitico'
      },
      {
        value: 'Molise',
        label: 'Molise'
      },
      {
        value: 'Monacilioni',
        label: 'Monacilioni'
      },
      {
        value: 'Montagano',
        label: 'Montagano'
      },
      {
        value: 'Montecilfone',
        label: 'Montecilfone'
      },
      {
        value: 'Montefalcone nel Sannio',
        label: 'Montefalcone nel Sannio'
      },
      {
        value: 'Montelongo',
        label: 'Montelongo'
      },
      {
        value: 'Montemitro',
        label: 'Montemitro'
      },
      {
        value: 'Montenero di Bisaccia',
        label: 'Montenero di Bisaccia'
      },
      {
        value: 'Montorio nei Frentani',
        label: 'Montorio nei Frentani'
      },
      {
        value: 'Morrone del Sannio',
        label: 'Morrone del Sannio'
      },
      {
        value: 'Oratino',
        label: 'Oratino'
      },
      {
        value: 'Palata',
        label: 'Palata'
      },
      {
        value: 'Petacciato',
        label: 'Petacciato'
      },
      {
        value: 'Petrella Tifernina',
        label: 'Petrella Tifernina'
      },
      {
        value: 'Pietracatella',
        label: 'Pietracatella'
      },
      {
        value: 'Pietracupa',
        label: 'Pietracupa'
      },
      {
        value: 'Portocannone',
        label: 'Portocannone'
      },
      {
        value: 'Provvidenti',
        label: 'Provvidenti'
      },
      {
        value: 'Riccia',
        label: 'Riccia'
      },
      {
        value: 'Ripabottoni',
        label: 'Ripabottoni'
      },
      {
        value: 'Ripalimosani',
        label: 'Ripalimosani'
      },
      {
        value: 'Roccavivara',
        label: 'Roccavivara'
      },
      {
        value: 'Rotello',
        label: 'Rotello'
      },
      {
        value: 'Salcito',
        label: 'Salcito'
      },
      {
        value: 'San Biase',
        label: 'San Biase'
      },
      {
        value: 'San Felice del Molise',
        label: 'San Felice del Molise'
      },
      {
        value: 'San Giacomo degli Schiavoni',
        label: 'San Giacomo degli Schiavoni'
      },
      {
        value: 'San Giovanni in Galdo',
        label: 'San Giovanni in Galdo'
      },
      {
        value: 'San Giuliano del Sannio',
        label: 'San Giuliano del Sannio'
      },
      {
        value: 'San Giuliano di Puglia',
        label: 'San Giuliano di Puglia'
      },
      {
        value: 'San Martino in Pensilis',
        label: 'San Martino in Pensilis'
      },
      {
        value: 'San Massimo',
        label: 'San Massimo'
      },
      {
        value: 'San Polo Matese',
        label: 'San Polo Matese'
      },
      {
        value: 'Santa Croce di Magliano',
        label: 'Santa Croce di Magliano'
      },
      {
        value: 'Sant\'Angelo Limosano',
        label: 'Sant\'Angelo Limosano'
      },
      {
        value: 'Sant\'Elia a Pianisi',
        label: 'Sant\'Elia a Pianisi'
      },
      {
        value: 'Sepino',
        label: 'Sepino'
      },
      {
        value: 'Spinete',
        label: 'Spinete'
      },
      {
        value: 'Tavenna',
        label: 'Tavenna'
      },
      {
        value: 'Termoli',
        label: 'Termoli'
      },
      {
        value: 'Torella del Sannio',
        label: 'Torella del Sannio'
      },
      {
        value: 'Toro',
        label: 'Toro'
      },
      {
        value: 'Trivento',
        label: 'Trivento'
      },
      {
        value: 'Tufara',
        label: 'Tufara'
      },
      {
        value: 'Ururi',
        label: 'Ururi'
      },
      {
        value: 'Vinchiaturo',
        label: 'Vinchiaturo'
      },
      {
        value: 'Accadia',
        label: 'Accadia'
      },
      {
        value: 'Alberona',
        label: 'Alberona'
      },
      {
        value: 'Anzano di Puglia',
        label: 'Anzano di Puglia'
      },
      {
        value: 'Apricena',
        label: 'Apricena'
      },
      {
        value: 'Ascoli Satriano',
        label: 'Ascoli Satriano'
      },
      {
        value: 'Biccari',
        label: 'Biccari'
      },
      {
        value: 'Bovino',
        label: 'Bovino'
      },
      {
        value: 'Cagnano Varano',
        label: 'Cagnano Varano'
      },
      {
        value: 'Candela',
        label: 'Candela'
      },
      {
        value: 'Carapelle',
        label: 'Carapelle'
      },
      {
        value: 'Carlantino',
        label: 'Carlantino'
      },
      {
        value: 'Carpino',
        label: 'Carpino'
      },
      {
        value: 'Casalnuovo Monterotaro',
        label: 'Casalnuovo Monterotaro'
      },
      {
        value: 'Casalvecchio di Puglia',
        label: 'Casalvecchio di Puglia'
      },
      {
        value: 'Castelluccio dei Sauri',
        label: 'Castelluccio dei Sauri'
      },
      {
        value: 'Castelluccio Valmaggiore',
        label: 'Castelluccio Valmaggiore'
      },
      {
        value: 'Castelnuovo della Daunia',
        label: 'Castelnuovo della Daunia'
      },
      {
        value: 'Celenza Valfortore',
        label: 'Celenza Valfortore'
      },
      {
        value: 'Celle di San Vito',
        label: 'Celle di San Vito'
      },
      {
        value: 'Cerignola',
        label: 'Cerignola'
      },
      {
        value: 'Chieuti',
        label: 'Chieuti'
      },
      {
        value: 'Deliceto',
        label: 'Deliceto'
      },
      {
        value: 'Faeto',
        label: 'Faeto'
      },
      {
        value: 'Foggia',
        label: 'Foggia'
      },
      {
        value: 'Ischitella',
        label: 'Ischitella'
      },
      {
        value: 'Isole Tremiti',
        label: 'Isole Tremiti'
      },
      {
        value: 'Lesina',
        label: 'Lesina'
      },
      {
        value: 'Lucera',
        label: 'Lucera'
      },
      {
        value: 'Manfredonia',
        label: 'Manfredonia'
      },
      {
        value: 'Mattinata',
        label: 'Mattinata'
      },
      {
        value: 'Monteleone di Puglia',
        label: 'Monteleone di Puglia'
      },
      {
        value: 'Monte Sant\'Angelo',
        label: 'Monte Sant\'Angelo'
      },
      {
        value: 'Motta Montecorvino',
        label: 'Motta Montecorvino'
      },
      {
        value: 'Orsara di Puglia',
        label: 'Orsara di Puglia'
      },
      {
        value: 'Orta Nova',
        label: 'Orta Nova'
      },
      {
        value: 'Panni',
        label: 'Panni'
      },
      {
        value: 'Peschici',
        label: 'Peschici'
      },
      {
        value: 'Pietramontecorvino',
        label: 'Pietramontecorvino'
      },
      {
        value: 'Poggio Imperiale',
        label: 'Poggio Imperiale'
      },
      {
        value: 'Rignano Garganico',
        label: 'Rignano Garganico'
      },
      {
        value: 'Rocchetta Sant\'Antonio',
        label: 'Rocchetta Sant\'Antonio'
      },
      {
        value: 'Rodi Garganico',
        label: 'Rodi Garganico'
      },
      {
        value: 'Roseto Valfortore',
        label: 'Roseto Valfortore'
      },
      {
        value: 'San Giovanni Rotondo',
        label: 'San Giovanni Rotondo'
      },
      {
        value: 'San Marco in Lamis',
        label: 'San Marco in Lamis'
      },
      {
        value: 'San Marco la Catola',
        label: 'San Marco la Catola'
      },
      {
        value: 'San Nicandro Garganico',
        label: 'San Nicandro Garganico'
      },
      {
        value: 'San Paolo di Civitate',
        label: 'San Paolo di Civitate'
      },
      {
        value: 'San Severo',
        label: 'San Severo'
      },
      {
        value: 'Sant\'Agata di Puglia',
        label: 'Sant\'Agata di Puglia'
      },
      {
        value: 'Serracapriola',
        label: 'Serracapriola'
      },
      {
        value: 'Stornara',
        label: 'Stornara'
      },
      {
        value: 'Stornarella',
        label: 'Stornarella'
      },
      {
        value: 'Torremaggiore',
        label: 'Torremaggiore'
      },
      {
        value: 'Troia',
        label: 'Troia'
      },
      {
        value: 'Vico del Gargano',
        label: 'Vico del Gargano'
      },
      {
        value: 'Vieste',
        label: 'Vieste'
      },
      {
        value: 'Volturara Appula',
        label: 'Volturara Appula'
      },
      {
        value: 'Volturino',
        label: 'Volturino'
      },
      {
        value: 'Ordona',
        label: 'Ordona'
      },
      {
        value: 'Zapponeta',
        label: 'Zapponeta'
      },
      {
        value: 'Acquaviva delle Fonti',
        label: 'Acquaviva delle Fonti'
      },
      {
        value: 'Adelfia',
        label: 'Adelfia'
      },
      {
        value: 'Alberobello',
        label: 'Alberobello'
      },
      {
        value: 'Altamura',
        label: 'Altamura'
      },
      {
        value: 'Bari',
        label: 'Bari'
      },
      {
        value: 'Binetto',
        label: 'Binetto'
      },
      {
        value: 'Bitetto',
        label: 'Bitetto'
      },
      {
        value: 'Bitonto',
        label: 'Bitonto'
      },
      {
        value: 'Bitritto',
        label: 'Bitritto'
      },
      {
        value: 'Capurso',
        label: 'Capurso'
      },
      {
        value: 'Casamassima',
        label: 'Casamassima'
      },
      {
        value: 'Cassano delle Murge',
        label: 'Cassano delle Murge'
      },
      {
        value: 'Castellana Grotte',
        label: 'Castellana Grotte'
      },
      {
        value: 'Cellamare',
        label: 'Cellamare'
      },
      {
        value: 'Conversano',
        label: 'Conversano'
      },
      {
        value: 'Corato',
        label: 'Corato'
      },
      {
        value: 'Gioia del Colle',
        label: 'Gioia del Colle'
      },
      {
        value: 'Giovinazzo',
        label: 'Giovinazzo'
      },
      {
        value: 'Gravina in Puglia',
        label: 'Gravina in Puglia'
      },
      {
        value: 'Grumo Appula',
        label: 'Grumo Appula'
      },
      {
        value: 'Locorotondo',
        label: 'Locorotondo'
      },
      {
        value: 'Modugno',
        label: 'Modugno'
      },
      {
        value: 'Mola di Bari',
        label: 'Mola di Bari'
      },
      {
        value: 'Molfetta',
        label: 'Molfetta'
      },
      {
        value: 'Monopoli',
        label: 'Monopoli'
      },
      {
        value: 'Noci',
        label: 'Noci'
      },
      {
        value: 'Noicattaro',
        label: 'Noicattaro'
      },
      {
        value: 'Palo del Colle',
        label: 'Palo del Colle'
      },
      {
        value: 'Poggiorsini',
        label: 'Poggiorsini'
      },
      {
        value: 'Polignano a Mare',
        label: 'Polignano a Mare'
      },
      {
        value: 'Putignano',
        label: 'Putignano'
      },
      {
        value: 'Rutigliano',
        label: 'Rutigliano'
      },
      {
        value: 'Ruvo di Puglia',
        label: 'Ruvo di Puglia'
      },
      {
        value: 'Sammichele di Bari',
        label: 'Sammichele di Bari'
      },
      {
        value: 'Sannicandro di Bari',
        label: 'Sannicandro di Bari'
      },
      {
        value: 'Santeramo in Colle',
        label: 'Santeramo in Colle'
      },
      {
        value: 'Terlizzi',
        label: 'Terlizzi'
      },
      {
        value: 'Toritto',
        label: 'Toritto'
      },
      {
        value: 'Triggiano',
        label: 'Triggiano'
      },
      {
        value: 'Turi',
        label: 'Turi'
      },
      {
        value: 'Valenzano',
        label: 'Valenzano'
      },
      {
        value: 'Avetrana',
        label: 'Avetrana'
      },
      {
        value: 'Carosino',
        label: 'Carosino'
      },
      {
        value: 'Castellaneta',
        label: 'Castellaneta'
      },
      {
        value: 'Crispiano',
        label: 'Crispiano'
      },
      {
        value: 'Faggiano',
        label: 'Faggiano'
      },
      {
        value: 'Fragagnano',
        label: 'Fragagnano'
      },
      {
        value: 'Ginosa',
        label: 'Ginosa'
      },
      {
        value: 'Grottaglie',
        label: 'Grottaglie'
      },
      {
        value: 'Laterza',
        label: 'Laterza'
      },
      {
        value: 'Leporano',
        label: 'Leporano'
      },
      {
        value: 'Lizzano',
        label: 'Lizzano'
      },
      {
        value: 'Manduria',
        label: 'Manduria'
      },
      {
        value: 'Martina Franca',
        label: 'Martina Franca'
      },
      {
        value: 'Maruggio',
        label: 'Maruggio'
      },
      {
        value: 'Massafra',
        label: 'Massafra'
      },
      {
        value: 'Monteiasi',
        label: 'Monteiasi'
      },
      {
        value: 'Montemesola',
        label: 'Montemesola'
      },
      {
        value: 'Monteparano',
        label: 'Monteparano'
      },
      {
        value: 'Mottola',
        label: 'Mottola'
      },
      {
        value: 'Palagianello',
        label: 'Palagianello'
      },
      {
        value: 'Palagiano',
        label: 'Palagiano'
      },
      {
        value: 'Pulsano',
        label: 'Pulsano'
      },
      {
        value: 'Roccaforzata',
        label: 'Roccaforzata'
      },
      {
        value: 'San Giorgio Ionico',
        label: 'San Giorgio Ionico'
      },
      {
        value: 'San Marzano di San Giuseppe',
        label: 'San Marzano di San Giuseppe'
      },
      {
        value: 'Sava',
        label: 'Sava'
      },
      {
        value: 'Taranto',
        label: 'Taranto'
      },
      {
        value: 'Torricella',
        label: 'Torricella'
      },
      {
        value: 'Statte',
        label: 'Statte'
      },
      {
        value: 'Brindisi',
        label: 'Brindisi'
      },
      {
        value: 'Carovigno',
        label: 'Carovigno'
      },
      {
        value: 'Ceglie Messapica',
        label: 'Ceglie Messapica'
      },
      {
        value: 'Cellino San Marco',
        label: 'Cellino San Marco'
      },
      {
        value: 'Cisternino',
        label: 'Cisternino'
      },
      {
        value: 'Erchie',
        label: 'Erchie'
      },
      {
        value: 'Fasano',
        label: 'Fasano'
      },
      {
        value: 'Francavilla Fontana',
        label: 'Francavilla Fontana'
      },
      {
        value: 'Latiano',
        label: 'Latiano'
      },
      {
        value: 'Mesagne',
        label: 'Mesagne'
      },
      {
        value: 'Oria',
        label: 'Oria'
      },
      {
        value: 'Ostuni',
        label: 'Ostuni'
      },
      {
        value: 'San Donaci',
        label: 'San Donaci'
      },
      {
        value: 'San Michele Salentino',
        label: 'San Michele Salentino'
      },
      {
        value: 'San Pancrazio Salentino',
        label: 'San Pancrazio Salentino'
      },
      {
        value: 'San Pietro Vernotico',
        label: 'San Pietro Vernotico'
      },
      {
        value: 'San Vito dei Normanni',
        label: 'San Vito dei Normanni'
      },
      {
        value: 'Torchiarolo',
        label: 'Torchiarolo'
      },
      {
        value: 'Torre Santa Susanna',
        label: 'Torre Santa Susanna'
      },
      {
        value: 'Villa Castelli',
        label: 'Villa Castelli'
      },
      {
        value: 'Alessano',
        label: 'Alessano'
      },
      {
        value: 'Alezio',
        label: 'Alezio'
      },
      {
        value: 'Alliste',
        label: 'Alliste'
      },
      {
        value: 'Andrano',
        label: 'Andrano'
      },
      {
        value: 'Aradeo',
        label: 'Aradeo'
      },
      {
        value: 'Arnesano',
        label: 'Arnesano'
      },
      {
        value: 'Bagnolo del Salento',
        label: 'Bagnolo del Salento'
      },
      {
        value: 'Botrugno',
        label: 'Botrugno'
      },
      {
        value: 'Calimera',
        label: 'Calimera'
      },
      {
        value: 'Campi Salentina',
        label: 'Campi Salentina'
      },
      {
        value: 'Cannole',
        label: 'Cannole'
      },
      {
        value: 'Caprarica di Lecce',
        label: 'Caprarica di Lecce'
      },
      {
        value: 'Carmiano',
        label: 'Carmiano'
      },
      {
        value: 'Carpignano Salentino',
        label: 'Carpignano Salentino'
      },
      {
        value: 'Casarano',
        label: 'Casarano'
      },
      {
        value: 'Castri di Lecce',
        label: 'Castri di Lecce'
      },
      {
        value: 'Castrignano de\' Greci',
        label: 'Castrignano de\' Greci'
      },
      {
        value: 'Castrignano del Capo',
        label: 'Castrignano del Capo'
      },
      {
        value: 'Cavallino',
        label: 'Cavallino'
      },
      {
        value: 'Collepasso',
        label: 'Collepasso'
      },
      {
        value: 'Copertino',
        label: 'Copertino'
      },
      {
        value: 'Corigliano d\'Otranto',
        label: 'Corigliano d\'Otranto'
      },
      {
        value: 'Corsano',
        label: 'Corsano'
      },
      {
        value: 'Cursi',
        label: 'Cursi'
      },
      {
        value: 'Cutrofiano',
        label: 'Cutrofiano'
      },
      {
        value: 'Diso',
        label: 'Diso'
      },
      {
        value: 'Gagliano del Capo',
        label: 'Gagliano del Capo'
      },
      {
        value: 'Galatina',
        label: 'Galatina'
      },
      {
        value: 'Galatone',
        label: 'Galatone'
      },
      {
        value: 'Gallipoli',
        label: 'Gallipoli'
      },
      {
        value: 'Giuggianello',
        label: 'Giuggianello'
      },
      {
        value: 'Giurdignano',
        label: 'Giurdignano'
      },
      {
        value: 'Guagnano',
        label: 'Guagnano'
      },
      {
        value: 'Lecce',
        label: 'Lecce'
      },
      {
        value: 'Lequile',
        label: 'Lequile'
      },
      {
        value: 'Leverano',
        label: 'Leverano'
      },
      {
        value: 'Lizzanello',
        label: 'Lizzanello'
      },
      {
        value: 'Maglie',
        label: 'Maglie'
      },
      {
        value: 'Martano',
        label: 'Martano'
      },
      {
        value: 'Martignano',
        label: 'Martignano'
      },
      {
        value: 'Matino',
        label: 'Matino'
      },
      {
        value: 'Melendugno',
        label: 'Melendugno'
      },
      {
        value: 'Melissano',
        label: 'Melissano'
      },
      {
        value: 'Melpignano',
        label: 'Melpignano'
      },
      {
        value: 'Miggiano',
        label: 'Miggiano'
      },
      {
        value: 'Minervino di Lecce',
        label: 'Minervino di Lecce'
      },
      {
        value: 'Monteroni di Lecce',
        label: 'Monteroni di Lecce'
      },
      {
        value: 'Montesano Salentino',
        label: 'Montesano Salentino'
      },
      {
        value: 'Morciano di Leuca',
        label: 'Morciano di Leuca'
      },
      {
        value: 'Muro Leccese',
        label: 'Muro Leccese'
      },
      {
        value: 'Nardò',
        label: 'Nardò'
      },
      {
        value: 'Neviano',
        label: 'Neviano'
      },
      {
        value: 'Nociglia',
        label: 'Nociglia'
      },
      {
        value: 'Novoli',
        label: 'Novoli'
      },
      {
        value: 'Ortelle',
        label: 'Ortelle'
      },
      {
        value: 'Otranto',
        label: 'Otranto'
      },
      {
        value: 'Palmariggi',
        label: 'Palmariggi'
      },
      {
        value: 'Parabita',
        label: 'Parabita'
      },
      {
        value: 'Patù',
        label: 'Patù'
      },
      {
        value: 'Poggiardo',
        label: 'Poggiardo'
      },
      {
        value: 'Racale',
        label: 'Racale'
      },
      {
        value: 'Ruffano',
        label: 'Ruffano'
      },
      {
        value: 'Salice Salentino',
        label: 'Salice Salentino'
      },
      {
        value: 'Salve',
        label: 'Salve'
      },
      {
        value: 'Sanarica',
        label: 'Sanarica'
      },
      {
        value: 'San Cesario di Lecce',
        label: 'San Cesario di Lecce'
      },
      {
        value: 'San Donato di Lecce',
        label: 'San Donato di Lecce'
      },
      {
        value: 'Sannicola',
        label: 'Sannicola'
      },
      {
        value: 'San Pietro in Lama',
        label: 'San Pietro in Lama'
      },
      {
        value: 'Santa Cesarea Terme',
        label: 'Santa Cesarea Terme'
      },
      {
        value: 'Scorrano',
        label: 'Scorrano'
      },
      {
        value: 'Seclì',
        label: 'Seclì'
      },
      {
        value: 'Sogliano Cavour',
        label: 'Sogliano Cavour'
      },
      {
        value: 'Soleto',
        label: 'Soleto'
      },
      {
        value: 'Specchia',
        label: 'Specchia'
      },
      {
        value: 'Spongano',
        label: 'Spongano'
      },
      {
        value: 'Squinzano',
        label: 'Squinzano'
      },
      {
        value: 'Sternatia',
        label: 'Sternatia'
      },
      {
        value: 'Supersano',
        label: 'Supersano'
      },
      {
        value: 'Surano',
        label: 'Surano'
      },
      {
        value: 'Surbo',
        label: 'Surbo'
      },
      {
        value: 'Taurisano',
        label: 'Taurisano'
      },
      {
        value: 'Taviano',
        label: 'Taviano'
      },
      {
        value: 'Tiggiano',
        label: 'Tiggiano'
      },
      {
        value: 'Trepuzzi',
        label: 'Trepuzzi'
      },
      {
        value: 'Tricase',
        label: 'Tricase'
      },
      {
        value: 'Tuglie',
        label: 'Tuglie'
      },
      {
        value: 'Ugento',
        label: 'Ugento'
      },
      {
        value: 'Uggiano la Chiesa',
        label: 'Uggiano la Chiesa'
      },
      {
        value: 'Veglie',
        label: 'Veglie'
      },
      {
        value: 'Vernole',
        label: 'Vernole'
      },
      {
        value: 'Zollino',
        label: 'Zollino'
      },
      {
        value: 'San Cassiano',
        label: 'San Cassiano'
      },
      {
        value: 'Porto Cesareo',
        label: 'Porto Cesareo'
      },
      {
        value: 'Presicce-Acquarica',
        label: 'Presicce-Acquarica'
      },
      {
        value: 'Abriola',
        label: 'Abriola'
      },
      {
        value: 'Acerenza',
        label: 'Acerenza'
      },
      {
        value: 'Albano di Lucania',
        label: 'Albano di Lucania'
      },
      {
        value: 'Anzi',
        label: 'Anzi'
      },
      {
        value: 'Armento',
        label: 'Armento'
      },
      {
        value: 'Atella',
        label: 'Atella'
      },
      {
        value: 'Avigliano',
        label: 'Avigliano'
      },
      {
        value: 'Balvano',
        label: 'Balvano'
      },
      {
        value: 'Banzi',
        label: 'Banzi'
      },
      {
        value: 'Baragiano',
        label: 'Baragiano'
      },
      {
        value: 'Barile',
        label: 'Barile'
      },
      {
        value: 'Bella',
        label: 'Bella'
      },
      {
        value: 'Brienza',
        label: 'Brienza'
      },
      {
        value: 'Brindisi Montagna',
        label: 'Brindisi Montagna'
      },
      {
        value: 'Calvello',
        label: 'Calvello'
      },
      {
        value: 'Calvera',
        label: 'Calvera'
      },
      {
        value: 'Campomaggiore',
        label: 'Campomaggiore'
      },
      {
        value: 'Cancellara',
        label: 'Cancellara'
      },
      {
        value: 'Carbone',
        label: 'Carbone'
      },
      {
        value: 'San Paolo Albanese',
        label: 'San Paolo Albanese'
      },
      {
        value: 'Castelgrande',
        label: 'Castelgrande'
      },
      {
        value: 'Castelluccio Inferiore',
        label: 'Castelluccio Inferiore'
      },
      {
        value: 'Castelluccio Superiore',
        label: 'Castelluccio Superiore'
      },
      {
        value: 'Castelmezzano',
        label: 'Castelmezzano'
      },
      {
        value: 'Castelsaraceno',
        label: 'Castelsaraceno'
      },
      {
        value: 'Castronuovo di Sant\'Andrea',
        label: 'Castronuovo di Sant\'Andrea'
      },
      {
        value: 'Cersosimo',
        label: 'Cersosimo'
      },
      {
        value: 'Chiaromonte',
        label: 'Chiaromonte'
      },
      {
        value: 'Corleto Perticara',
        label: 'Corleto Perticara'
      },
      {
        value: 'Episcopia',
        label: 'Episcopia'
      },
      {
        value: 'Fardella',
        label: 'Fardella'
      },
      {
        value: 'Filiano',
        label: 'Filiano'
      },
      {
        value: 'Forenza',
        label: 'Forenza'
      },
      {
        value: 'Francavilla in Sinni',
        label: 'Francavilla in Sinni'
      },
      {
        value: 'Gallicchio',
        label: 'Gallicchio'
      },
      {
        value: 'Genzano di Lucania',
        label: 'Genzano di Lucania'
      },
      {
        value: 'Grumento Nova',
        label: 'Grumento Nova'
      },
      {
        value: 'Guardia Perticara',
        label: 'Guardia Perticara'
      },
      {
        value: 'Lagonegro',
        label: 'Lagonegro'
      },
      {
        value: 'Latronico',
        label: 'Latronico'
      },
      {
        value: 'Laurenzana',
        label: 'Laurenzana'
      },
      {
        value: 'Lauria',
        label: 'Lauria'
      },
      {
        value: 'Lavello',
        label: 'Lavello'
      },
      {
        value: 'Maratea',
        label: 'Maratea'
      },
      {
        value: 'Marsico Nuovo',
        label: 'Marsico Nuovo'
      },
      {
        value: 'Marsicovetere',
        label: 'Marsicovetere'
      },
      {
        value: 'Maschito',
        label: 'Maschito'
      },
      {
        value: 'Melfi',
        label: 'Melfi'
      },
      {
        value: 'Missanello',
        label: 'Missanello'
      },
      {
        value: 'Moliterno',
        label: 'Moliterno'
      },
      {
        value: 'Montemilone',
        label: 'Montemilone'
      },
      {
        value: 'Montemurro',
        label: 'Montemurro'
      },
      {
        value: 'Muro Lucano',
        label: 'Muro Lucano'
      },
      {
        value: 'Nemoli',
        label: 'Nemoli'
      },
      {
        value: 'Noepoli',
        label: 'Noepoli'
      },
      {
        value: 'Oppido Lucano',
        label: 'Oppido Lucano'
      },
      {
        value: 'Palazzo San Gervasio',
        label: 'Palazzo San Gervasio'
      },
      {
        value: 'Pescopagano',
        label: 'Pescopagano'
      },
      {
        value: 'Picerno',
        label: 'Picerno'
      },
      {
        value: 'Pietragalla',
        label: 'Pietragalla'
      },
      {
        value: 'Pietrapertosa',
        label: 'Pietrapertosa'
      },
      {
        value: 'Pignola',
        label: 'Pignola'
      },
      {
        value: 'Potenza',
        label: 'Potenza'
      },
      {
        value: 'Rapolla',
        label: 'Rapolla'
      },
      {
        value: 'Rapone',
        label: 'Rapone'
      },
      {
        value: 'Rionero in Vulture',
        label: 'Rionero in Vulture'
      },
      {
        value: 'Ripacandida',
        label: 'Ripacandida'
      },
      {
        value: 'Rivello',
        label: 'Rivello'
      },
      {
        value: 'Roccanova',
        label: 'Roccanova'
      },
      {
        value: 'Rotonda',
        label: 'Rotonda'
      },
      {
        value: 'Ruoti',
        label: 'Ruoti'
      },
      {
        value: 'Ruvo del Monte',
        label: 'Ruvo del Monte'
      },
      {
        value: 'San Chirico Nuovo',
        label: 'San Chirico Nuovo'
      },
      {
        value: 'San Chirico Raparo',
        label: 'San Chirico Raparo'
      },
      {
        value: 'San Costantino Albanese',
        label: 'San Costantino Albanese'
      },
      {
        value: 'San Fele',
        label: 'San Fele'
      },
      {
        value: 'San Martino d\'Agri',
        label: 'San Martino d\'Agri'
      },
      {
        value: 'San Severino Lucano',
        label: 'San Severino Lucano'
      },
      {
        value: 'Sant\'Angelo Le Fratte',
        label: 'Sant\'Angelo Le Fratte'
      },
      {
        value: 'Sant\'Arcangelo',
        label: 'Sant\'Arcangelo'
      },
      {
        value: 'Sarconi',
        label: 'Sarconi'
      },
      {
        value: 'Sasso di Castalda',
        label: 'Sasso di Castalda'
      },
      {
        value: 'Satriano di Lucania',
        label: 'Satriano di Lucania'
      },
      {
        value: 'Savoia di Lucania',
        label: 'Savoia di Lucania'
      },
      {
        value: 'Senise',
        label: 'Senise'
      },
      {
        value: 'Spinoso',
        label: 'Spinoso'
      },
      {
        value: 'Teana',
        label: 'Teana'
      },
      {
        value: 'Terranova di Pollino',
        label: 'Terranova di Pollino'
      },
      {
        value: 'Tito',
        label: 'Tito'
      },
      {
        value: 'Tolve',
        label: 'Tolve'
      },
      {
        value: 'Tramutola',
        label: 'Tramutola'
      },
      {
        value: 'Trecchina',
        label: 'Trecchina'
      },
      {
        value: 'Trivigno',
        label: 'Trivigno'
      },
      {
        value: 'Vaglio Basilicata',
        label: 'Vaglio Basilicata'
      },
      {
        value: 'Venosa',
        label: 'Venosa'
      },
      {
        value: 'Vietri di Potenza',
        label: 'Vietri di Potenza'
      },
      {
        value: 'Viggianello',
        label: 'Viggianello'
      },
      {
        value: 'Viggiano',
        label: 'Viggiano'
      },
      {
        value: 'Ginestra',
        label: 'Ginestra'
      },
      {
        value: 'Paterno',
        label: 'Paterno'
      },
      {
        value: 'Accettura',
        label: 'Accettura'
      },
      {
        value: 'Aliano',
        label: 'Aliano'
      },
      {
        value: 'Bernalda',
        label: 'Bernalda'
      },
      {
        value: 'Calciano',
        label: 'Calciano'
      },
      {
        value: 'Cirigliano',
        label: 'Cirigliano'
      },
      {
        value: 'Colobraro',
        label: 'Colobraro'
      },
      {
        value: 'Craco',
        label: 'Craco'
      },
      {
        value: 'Ferrandina',
        label: 'Ferrandina'
      },
      {
        value: 'Garaguso',
        label: 'Garaguso'
      },
      {
        value: 'Gorgoglione',
        label: 'Gorgoglione'
      },
      {
        value: 'Grassano',
        label: 'Grassano'
      },
      {
        value: 'Grottole',
        label: 'Grottole'
      },
      {
        value: 'Irsina',
        label: 'Irsina'
      },
      {
        value: 'Matera',
        label: 'Matera'
      },
      {
        value: 'Miglionico',
        label: 'Miglionico'
      },
      {
        value: 'Montalbano Jonico',
        label: 'Montalbano Jonico'
      },
      {
        value: 'Montescaglioso',
        label: 'Montescaglioso'
      },
      {
        value: 'Nova Siri',
        label: 'Nova Siri'
      },
      {
        value: 'Oliveto Lucano',
        label: 'Oliveto Lucano'
      },
      {
        value: 'Pisticci',
        label: 'Pisticci'
      },
      {
        value: 'Policoro',
        label: 'Policoro'
      },
      {
        value: 'Pomarico',
        label: 'Pomarico'
      },
      {
        value: 'Rotondella',
        label: 'Rotondella'
      },
      {
        value: 'Salandra',
        label: 'Salandra'
      },
      {
        value: 'San Giorgio Lucano',
        label: 'San Giorgio Lucano'
      },
      {
        value: 'San Mauro Forte',
        label: 'San Mauro Forte'
      },
      {
        value: 'Stigliano',
        label: 'Stigliano'
      },
      {
        value: 'Tricarico',
        label: 'Tricarico'
      },
      {
        value: 'Tursi',
        label: 'Tursi'
      },
      {
        value: 'Valsinni',
        label: 'Valsinni'
      },
      {
        value: 'Scanzano Jonico',
        label: 'Scanzano Jonico'
      },
      {
        value: 'Acquaformosa',
        label: 'Acquaformosa'
      },
      {
        value: 'Acquappesa',
        label: 'Acquappesa'
      },
      {
        value: 'Acri',
        label: 'Acri'
      },
      {
        value: 'Aiello Calabro',
        label: 'Aiello Calabro'
      },
      {
        value: 'Aieta',
        label: 'Aieta'
      },
      {
        value: 'Albidona',
        label: 'Albidona'
      },
      {
        value: 'Alessandria del Carretto',
        label: 'Alessandria del Carretto'
      },
      {
        value: 'Altilia',
        label: 'Altilia'
      },
      {
        value: 'Altomonte',
        label: 'Altomonte'
      },
      {
        value: 'Amantea',
        label: 'Amantea'
      },
      {
        value: 'Amendolara',
        label: 'Amendolara'
      },
      {
        value: 'Aprigliano',
        label: 'Aprigliano'
      },
      {
        value: 'Belmonte Calabro',
        label: 'Belmonte Calabro'
      },
      {
        value: 'Belsito',
        label: 'Belsito'
      },
      {
        value: 'Belvedere Marittimo',
        label: 'Belvedere Marittimo'
      },
      {
        value: 'Bianchi',
        label: 'Bianchi'
      },
      {
        value: 'Bisignano',
        label: 'Bisignano'
      },
      {
        value: 'Bocchigliero',
        label: 'Bocchigliero'
      },
      {
        value: 'Bonifati',
        label: 'Bonifati'
      },
      {
        value: 'Buonvicino',
        label: 'Buonvicino'
      },
      {
        value: 'Calopezzati',
        label: 'Calopezzati'
      },
      {
        value: 'Caloveto',
        label: 'Caloveto'
      },
      {
        value: 'Campana',
        label: 'Campana'
      },
      {
        value: 'Canna',
        label: 'Canna'
      },
      {
        value: 'Cariati',
        label: 'Cariati'
      },
      {
        value: 'Carolei',
        label: 'Carolei'
      },
      {
        value: 'Carpanzano',
        label: 'Carpanzano'
      },
      {
        value: 'Cassano all\'Ionio',
        label: 'Cassano all\'Ionio'
      },
      {
        value: 'Castiglione Cosentino',
        label: 'Castiglione Cosentino'
      },
      {
        value: 'Castrolibero',
        label: 'Castrolibero'
      },
      {
        value: 'Castroregio',
        label: 'Castroregio'
      },
      {
        value: 'Castrovillari',
        label: 'Castrovillari'
      },
      {
        value: 'Celico',
        label: 'Celico'
      },
      {
        value: 'Cellara',
        label: 'Cellara'
      },
      {
        value: 'Cerchiara di Calabria',
        label: 'Cerchiara di Calabria'
      },
      {
        value: 'Cerisano',
        label: 'Cerisano'
      },
      {
        value: 'Cervicati',
        label: 'Cervicati'
      },
      {
        value: 'Cerzeto',
        label: 'Cerzeto'
      },
      {
        value: 'Cetraro',
        label: 'Cetraro'
      },
      {
        value: 'Civita',
        label: 'Civita'
      },
      {
        value: 'Cleto',
        label: 'Cleto'
      },
      {
        value: 'Colosimi',
        label: 'Colosimi'
      },
      {
        value: 'Cosenza',
        label: 'Cosenza'
      },
      {
        value: 'Cropalati',
        label: 'Cropalati'
      },
      {
        value: 'Crosia',
        label: 'Crosia'
      },
      {
        value: 'Diamante',
        label: 'Diamante'
      },
      {
        value: 'Dipignano',
        label: 'Dipignano'
      },
      {
        value: 'Domanico',
        label: 'Domanico'
      },
      {
        value: 'Fagnano Castello',
        label: 'Fagnano Castello'
      },
      {
        value: 'Falconara Albanese',
        label: 'Falconara Albanese'
      },
      {
        value: 'Figline Vegliaturo',
        label: 'Figline Vegliaturo'
      },
      {
        value: 'Firmo',
        label: 'Firmo'
      },
      {
        value: 'Fiumefreddo Bruzio',
        label: 'Fiumefreddo Bruzio'
      },
      {
        value: 'Francavilla Marittima',
        label: 'Francavilla Marittima'
      },
      {
        value: 'Frascineto',
        label: 'Frascineto'
      },
      {
        value: 'Fuscaldo',
        label: 'Fuscaldo'
      },
      {
        value: 'Grimaldi',
        label: 'Grimaldi'
      },
      {
        value: 'Grisolia',
        label: 'Grisolia'
      },
      {
        value: 'Guardia Piemontese',
        label: 'Guardia Piemontese'
      },
      {
        value: 'Lago',
        label: 'Lago'
      },
      {
        value: 'Laino Borgo',
        label: 'Laino Borgo'
      },
      {
        value: 'Laino Castello',
        label: 'Laino Castello'
      },
      {
        value: 'Lappano',
        label: 'Lappano'
      },
      {
        value: 'Lattarico',
        label: 'Lattarico'
      },
      {
        value: 'Longobardi',
        label: 'Longobardi'
      },
      {
        value: 'Longobucco',
        label: 'Longobucco'
      },
      {
        value: 'Lungro',
        label: 'Lungro'
      },
      {
        value: 'Luzzi',
        label: 'Luzzi'
      },
      {
        value: 'Maierà',
        label: 'Maierà'
      },
      {
        value: 'Malito',
        label: 'Malito'
      },
      {
        value: 'Malvito',
        label: 'Malvito'
      },
      {
        value: 'Mandatoriccio',
        label: 'Mandatoriccio'
      },
      {
        value: 'Mangone',
        label: 'Mangone'
      },
      {
        value: 'Marano Marchesato',
        label: 'Marano Marchesato'
      },
      {
        value: 'Marano Principato',
        label: 'Marano Principato'
      },
      {
        value: 'Marzi',
        label: 'Marzi'
      },
      {
        value: 'Mendicino',
        label: 'Mendicino'
      },
      {
        value: 'Mongrassano',
        label: 'Mongrassano'
      },
      {
        value: 'Montalto Uffugo',
        label: 'Montalto Uffugo'
      },
      {
        value: 'Montegiordano',
        label: 'Montegiordano'
      },
      {
        value: 'Morano Calabro',
        label: 'Morano Calabro'
      },
      {
        value: 'Mormanno',
        label: 'Mormanno'
      },
      {
        value: 'Mottafollone',
        label: 'Mottafollone'
      },
      {
        value: 'Nocara',
        label: 'Nocara'
      },
      {
        value: 'Oriolo',
        label: 'Oriolo'
      },
      {
        value: 'Orsomarso',
        label: 'Orsomarso'
      },
      {
        value: 'Paludi',
        label: 'Paludi'
      },
      {
        value: 'Panettieri',
        label: 'Panettieri'
      },
      {
        value: 'Paola',
        label: 'Paola'
      },
      {
        value: 'Papasidero',
        label: 'Papasidero'
      },
      {
        value: 'Parenti',
        label: 'Parenti'
      },
      {
        value: 'Paterno Calabro',
        label: 'Paterno Calabro'
      },
      {
        value: 'Pedivigliano',
        label: 'Pedivigliano'
      },
      {
        value: 'Piane Crati',
        label: 'Piane Crati'
      },
      {
        value: 'Pietrafitta',
        label: 'Pietrafitta'
      },
      {
        value: 'Pietrapaola',
        label: 'Pietrapaola'
      },
      {
        value: 'Plataci',
        label: 'Plataci'
      },
      {
        value: 'Praia a Mare',
        label: 'Praia a Mare'
      },
      {
        value: 'Rende',
        label: 'Rende'
      },
      {
        value: 'Rocca Imperiale',
        label: 'Rocca Imperiale'
      },
      {
        value: 'Roggiano Gravina',
        label: 'Roggiano Gravina'
      },
      {
        value: 'Rogliano',
        label: 'Rogliano'
      },
      {
        value: 'Rose',
        label: 'Rose'
      },
      {
        value: 'Roseto Capo Spulico',
        label: 'Roseto Capo Spulico'
      },
      {
        value: 'Rota Greca',
        label: 'Rota Greca'
      },
      {
        value: 'Rovito',
        label: 'Rovito'
      },
      {
        value: 'San Basile',
        label: 'San Basile'
      },
      {
        value: 'San Benedetto Ullano',
        label: 'San Benedetto Ullano'
      },
      {
        value: 'San Cosmo Albanese',
        label: 'San Cosmo Albanese'
      },
      {
        value: 'San Demetrio Corone',
        label: 'San Demetrio Corone'
      },
      {
        value: 'San Donato di Ninea',
        label: 'San Donato di Ninea'
      },
      {
        value: 'San Fili',
        label: 'San Fili'
      },
      {
        value: 'Sangineto',
        label: 'Sangineto'
      },
      {
        value: 'San Giorgio Albanese',
        label: 'San Giorgio Albanese'
      },
      {
        value: 'San Giovanni in Fiore',
        label: 'San Giovanni in Fiore'
      },
      {
        value: 'San Lorenzo Bellizzi',
        label: 'San Lorenzo Bellizzi'
      },
      {
        value: 'San Lorenzo del Vallo',
        label: 'San Lorenzo del Vallo'
      },
      {
        value: 'San Lucido',
        label: 'San Lucido'
      },
      {
        value: 'San Marco Argentano',
        label: 'San Marco Argentano'
      },
      {
        value: 'San Martino di Finita',
        label: 'San Martino di Finita'
      },
      {
        value: 'San Nicola Arcella',
        label: 'San Nicola Arcella'
      },
      {
        value: 'San Pietro in Amantea',
        label: 'San Pietro in Amantea'
      },
      {
        value: 'San Pietro in Guarano',
        label: 'San Pietro in Guarano'
      },
      {
        value: 'San Sosti',
        label: 'San Sosti'
      },
      {
        value: 'Santa Caterina Albanese',
        label: 'Santa Caterina Albanese'
      },
      {
        value: 'Santa Domenica Talao',
        label: 'Santa Domenica Talao'
      },
      {
        value: 'Sant\'Agata di Esaro',
        label: 'Sant\'Agata di Esaro'
      },
      {
        value: 'Santa Maria del Cedro',
        label: 'Santa Maria del Cedro'
      },
      {
        value: 'Santa Sofia d\'Epiro',
        label: 'Santa Sofia d\'Epiro'
      },
      {
        value: 'Santo Stefano di Rogliano',
        label: 'Santo Stefano di Rogliano'
      },
      {
        value: 'San Vincenzo La Costa',
        label: 'San Vincenzo La Costa'
      },
      {
        value: 'Saracena',
        label: 'Saracena'
      },
      {
        value: 'Scala Coeli',
        label: 'Scala Coeli'
      },
      {
        value: 'Scalea',
        label: 'Scalea'
      },
      {
        value: 'Scigliano',
        label: 'Scigliano'
      },
      {
        value: 'Serra d\'Aiello',
        label: 'Serra d\'Aiello'
      },
      {
        value: 'Spezzano Albanese',
        label: 'Spezzano Albanese'
      },
      {
        value: 'Spezzano della Sila',
        label: 'Spezzano della Sila'
      },
      {
        value: 'Tarsia',
        label: 'Tarsia'
      },
      {
        value: 'Terranova da Sibari',
        label: 'Terranova da Sibari'
      },
      {
        value: 'Terravecchia',
        label: 'Terravecchia'
      },
      {
        value: 'Torano Castello',
        label: 'Torano Castello'
      },
      {
        value: 'Tortora',
        label: 'Tortora'
      },
      {
        value: 'Trebisacce',
        label: 'Trebisacce'
      },
      {
        value: 'Vaccarizzo Albanese',
        label: 'Vaccarizzo Albanese'
      },
      {
        value: 'Verbicaro',
        label: 'Verbicaro'
      },
      {
        value: 'Villapiana',
        label: 'Villapiana'
      },
      {
        value: 'Zumpano',
        label: 'Zumpano'
      },
      {
        value: 'Casali del Manco',
        label: 'Casali del Manco'
      },
      {
        value: 'Corigliano-Rossano',
        label: 'Corigliano-Rossano'
      },
      {
        value: 'Albi',
        label: 'Albi'
      },
      {
        value: 'Amaroni',
        label: 'Amaroni'
      },
      {
        value: 'Amato',
        label: 'Amato'
      },
      {
        value: 'Andali',
        label: 'Andali'
      },
      {
        value: 'Argusto',
        label: 'Argusto'
      },
      {
        value: 'Badolato',
        label: 'Badolato'
      },
      {
        value: 'Belcastro',
        label: 'Belcastro'
      },
      {
        value: 'Borgia',
        label: 'Borgia'
      },
      {
        value: 'Botricello',
        label: 'Botricello'
      },
      {
        value: 'Caraffa di Catanzaro',
        label: 'Caraffa di Catanzaro'
      },
      {
        value: 'Cardinale',
        label: 'Cardinale'
      },
      {
        value: 'Carlopoli',
        label: 'Carlopoli'
      },
      {
        value: 'Catanzaro',
        label: 'Catanzaro'
      },
      {
        value: 'Cenadi',
        label: 'Cenadi'
      },
      {
        value: 'Centrache',
        label: 'Centrache'
      },
      {
        value: 'Cerva',
        label: 'Cerva'
      },
      {
        value: 'Chiaravalle Centrale',
        label: 'Chiaravalle Centrale'
      },
      {
        value: 'Cicala',
        label: 'Cicala'
      },
      {
        value: 'Conflenti',
        label: 'Conflenti'
      },
      {
        value: 'Cortale',
        label: 'Cortale'
      },
      {
        value: 'Cropani',
        label: 'Cropani'
      },
      {
        value: 'Curinga',
        label: 'Curinga'
      },
      {
        value: 'Davoli',
        label: 'Davoli'
      },
      {
        value: 'Decollatura',
        label: 'Decollatura'
      },
      {
        value: 'Falerna',
        label: 'Falerna'
      },
      {
        value: 'Feroleto Antico',
        label: 'Feroleto Antico'
      },
      {
        value: 'Fossato Serralta',
        label: 'Fossato Serralta'
      },
      {
        value: 'Gagliato',
        label: 'Gagliato'
      },
      {
        value: 'Gasperina',
        label: 'Gasperina'
      },
      {
        value: 'Gimigliano',
        label: 'Gimigliano'
      },
      {
        value: 'Girifalco',
        label: 'Girifalco'
      },
      {
        value: 'Gizzeria',
        label: 'Gizzeria'
      },
      {
        value: 'Guardavalle',
        label: 'Guardavalle'
      },
      {
        value: 'Isca sullo Ionio',
        label: 'Isca sullo Ionio'
      },
      {
        value: 'Jacurso',
        label: 'Jacurso'
      },
      {
        value: 'Magisano',
        label: 'Magisano'
      },
      {
        value: 'Maida',
        label: 'Maida'
      },
      {
        value: 'Marcedusa',
        label: 'Marcedusa'
      },
      {
        value: 'Marcellinara',
        label: 'Marcellinara'
      },
      {
        value: 'Martirano',
        label: 'Martirano'
      },
      {
        value: 'Martirano Lombardo',
        label: 'Martirano Lombardo'
      },
      {
        value: 'Miglierina',
        label: 'Miglierina'
      },
      {
        value: 'Montauro',
        label: 'Montauro'
      },
      {
        value: 'Montepaone',
        label: 'Montepaone'
      },
      {
        value: 'Motta Santa Lucia',
        label: 'Motta Santa Lucia'
      },
      {
        value: 'Nocera Terinese',
        label: 'Nocera Terinese'
      },
      {
        value: 'Olivadi',
        label: 'Olivadi'
      },
      {
        value: 'Palermiti',
        label: 'Palermiti'
      },
      {
        value: 'Pentone',
        label: 'Pentone'
      },
      {
        value: 'Petrizzi',
        label: 'Petrizzi'
      },
      {
        value: 'Petronà',
        label: 'Petronà'
      },
      {
        value: 'Pianopoli',
        label: 'Pianopoli'
      },
      {
        value: 'Platania',
        label: 'Platania'
      },
      {
        value: 'San Floro',
        label: 'San Floro'
      },
      {
        value: 'San Mango d\'Aquino',
        label: 'San Mango d\'Aquino'
      },
      {
        value: 'San Pietro a Maida',
        label: 'San Pietro a Maida'
      },
      {
        value: 'San Pietro Apostolo',
        label: 'San Pietro Apostolo'
      },
      {
        value: 'San Sostene',
        label: 'San Sostene'
      },
      {
        value: 'Santa Caterina dello Ionio',
        label: 'Santa Caterina dello Ionio'
      },
      {
        value: 'Sant\'Andrea Apostolo dello Ionio',
        label: 'Sant\'Andrea Apostolo dello Ionio'
      },
      {
        value: 'San Vito sullo Ionio',
        label: 'San Vito sullo Ionio'
      },
      {
        value: 'Satriano',
        label: 'Satriano'
      },
      {
        value: 'Sellia',
        label: 'Sellia'
      },
      {
        value: 'Sellia Marina',
        label: 'Sellia Marina'
      },
      {
        value: 'Serrastretta',
        label: 'Serrastretta'
      },
      {
        value: 'Sersale',
        label: 'Sersale'
      },
      {
        value: 'Settingiano',
        label: 'Settingiano'
      },
      {
        value: 'Simeri Crichi',
        label: 'Simeri Crichi'
      },
      {
        value: 'Sorbo San Basile',
        label: 'Sorbo San Basile'
      },
      {
        value: 'Soverato',
        label: 'Soverato'
      },
      {
        value: 'Soveria Mannelli',
        label: 'Soveria Mannelli'
      },
      {
        value: 'Soveria Simeri',
        label: 'Soveria Simeri'
      },
      {
        value: 'Squillace',
        label: 'Squillace'
      },
      {
        value: 'Stalettì',
        label: 'Stalettì'
      },
      {
        value: 'Taverna',
        label: 'Taverna'
      },
      {
        value: 'Tiriolo',
        label: 'Tiriolo'
      },
      {
        value: 'Torre di Ruggiero',
        label: 'Torre di Ruggiero'
      },
      {
        value: 'Vallefiorita',
        label: 'Vallefiorita'
      },
      {
        value: 'Zagarise',
        label: 'Zagarise'
      },
      {
        value: 'Lamezia Terme',
        label: 'Lamezia Terme'
      },
      {
        value: 'Africo',
        label: 'Africo'
      },
      {
        value: 'Agnana Calabra',
        label: 'Agnana Calabra'
      },
      {
        value: 'Anoia',
        label: 'Anoia'
      },
      {
        value: 'Antonimina',
        label: 'Antonimina'
      },
      {
        value: 'Ardore',
        label: 'Ardore'
      },
      {
        value: 'Bagaladi',
        label: 'Bagaladi'
      },
      {
        value: 'Bagnara Calabra',
        label: 'Bagnara Calabra'
      },
      {
        value: 'Benestare',
        label: 'Benestare'
      },
      {
        value: 'Bianco',
        label: 'Bianco'
      },
      {
        value: 'Bivongi',
        label: 'Bivongi'
      },
      {
        value: 'Bova',
        label: 'Bova'
      },
      {
        value: 'Bovalino',
        label: 'Bovalino'
      },
      {
        value: 'Bova Marina',
        label: 'Bova Marina'
      },
      {
        value: 'Brancaleone',
        label: 'Brancaleone'
      },
      {
        value: 'Bruzzano Zeffirio',
        label: 'Bruzzano Zeffirio'
      },
      {
        value: 'Calanna',
        label: 'Calanna'
      },
      {
        value: 'Camini',
        label: 'Camini'
      },
      {
        value: 'Campo Calabro',
        label: 'Campo Calabro'
      },
      {
        value: 'Candidoni',
        label: 'Candidoni'
      },
      {
        value: 'Canolo',
        label: 'Canolo'
      },
      {
        value: 'Caraffa del Bianco',
        label: 'Caraffa del Bianco'
      },
      {
        value: 'Cardeto',
        label: 'Cardeto'
      },
      {
        value: 'Careri',
        label: 'Careri'
      },
      {
        value: 'Casignana',
        label: 'Casignana'
      },
      {
        value: 'Caulonia',
        label: 'Caulonia'
      },
      {
        value: 'Ciminà',
        label: 'Ciminà'
      },
      {
        value: 'Cinquefrondi',
        label: 'Cinquefrondi'
      },
      {
        value: 'Cittanova',
        label: 'Cittanova'
      },
      {
        value: 'Condofuri',
        label: 'Condofuri'
      },
      {
        value: 'Cosoleto',
        label: 'Cosoleto'
      },
      {
        value: 'Delianuova',
        label: 'Delianuova'
      },
      {
        value: 'Feroleto della Chiesa',
        label: 'Feroleto della Chiesa'
      },
      {
        value: 'Ferruzzano',
        label: 'Ferruzzano'
      },
      {
        value: 'Fiumara',
        label: 'Fiumara'
      },
      {
        value: 'Galatro',
        label: 'Galatro'
      },
      {
        value: 'Gerace',
        label: 'Gerace'
      },
      {
        value: 'Giffone',
        label: 'Giffone'
      },
      {
        value: 'Gioia Tauro',
        label: 'Gioia Tauro'
      },
      {
        value: 'Gioiosa Ionica',
        label: 'Gioiosa Ionica'
      },
      {
        value: 'Grotteria',
        label: 'Grotteria'
      },
      {
        value: 'Laganadi',
        label: 'Laganadi'
      },
      {
        value: 'Laureana di Borrello',
        label: 'Laureana di Borrello'
      },
      {
        value: 'Locri',
        label: 'Locri'
      },
      {
        value: 'Mammola',
        label: 'Mammola'
      },
      {
        value: 'Marina di Gioiosa Ionica',
        label: 'Marina di Gioiosa Ionica'
      },
      {
        value: 'Maropati',
        label: 'Maropati'
      },
      {
        value: 'Martone',
        label: 'Martone'
      },
      {
        value: 'Melicuccà',
        label: 'Melicuccà'
      },
      {
        value: 'Melicucco',
        label: 'Melicucco'
      },
      {
        value: 'Melito di Porto Salvo',
        label: 'Melito di Porto Salvo'
      },
      {
        value: 'Molochio',
        label: 'Molochio'
      },
      {
        value: 'Monasterace',
        label: 'Monasterace'
      },
      {
        value: 'Montebello Jonico',
        label: 'Montebello Jonico'
      },
      {
        value: 'Motta San Giovanni',
        label: 'Motta San Giovanni'
      },
      {
        value: 'Oppido Mamertina',
        label: 'Oppido Mamertina'
      },
      {
        value: 'Palizzi',
        label: 'Palizzi'
      },
      {
        value: 'Palmi',
        label: 'Palmi'
      },
      {
        value: 'Pazzano',
        label: 'Pazzano'
      },
      {
        value: 'Placanica',
        label: 'Placanica'
      },
      {
        value: 'Platì',
        label: 'Platì'
      },
      {
        value: 'Polistena',
        label: 'Polistena'
      },
      {
        value: 'Portigliola',
        label: 'Portigliola'
      },
      {
        value: 'Reggio di Calabria',
        label: 'Reggio di Calabria'
      },
      {
        value: 'Riace',
        label: 'Riace'
      },
      {
        value: 'Rizziconi',
        label: 'Rizziconi'
      },
      {
        value: 'Roccaforte del Greco',
        label: 'Roccaforte del Greco'
      },
      {
        value: 'Roccella Ionica',
        label: 'Roccella Ionica'
      },
      {
        value: 'Roghudi',
        label: 'Roghudi'
      },
      {
        value: 'Rosarno',
        label: 'Rosarno'
      },
      {
        value: 'Samo',
        label: 'Samo'
      },
      {
        value: 'San Giorgio Morgeto',
        label: 'San Giorgio Morgeto'
      },
      {
        value: 'San Giovanni di Gerace',
        label: 'San Giovanni di Gerace'
      },
      {
        value: 'San Lorenzo',
        label: 'San Lorenzo'
      },
      {
        value: 'San Luca',
        label: 'San Luca'
      },
      {
        value: 'San Pietro di Caridà',
        label: 'San Pietro di Caridà'
      },
      {
        value: 'San Procopio',
        label: 'San Procopio'
      },
      {
        value: 'San Roberto',
        label: 'San Roberto'
      },
      {
        value: 'Santa Cristina d\'Aspromonte',
        label: 'Santa Cristina d\'Aspromonte'
      },
      {
        value: 'Sant\'Agata del Bianco',
        label: 'Sant\'Agata del Bianco'
      },
      {
        value: 'Sant\'Alessio in Aspromonte',
        label: 'Sant\'Alessio in Aspromonte'
      },
      {
        value: 'Sant\'Eufemia d\'Aspromonte',
        label: 'Sant\'Eufemia d\'Aspromonte'
      },
      {
        value: 'Sant\'Ilario dello Ionio',
        label: 'Sant\'Ilario dello Ionio'
      },
      {
        value: 'Santo Stefano in Aspromonte',
        label: 'Santo Stefano in Aspromonte'
      },
      {
        value: 'Scido',
        label: 'Scido'
      },
      {
        value: 'Scilla',
        label: 'Scilla'
      },
      {
        value: 'Seminara',
        label: 'Seminara'
      },
      {
        value: 'Serrata',
        label: 'Serrata'
      },
      {
        value: 'Siderno',
        label: 'Siderno'
      },
      {
        value: 'Sinopoli',
        label: 'Sinopoli'
      },
      {
        value: 'Staiti',
        label: 'Staiti'
      },
      {
        value: 'Stignano',
        label: 'Stignano'
      },
      {
        value: 'Stilo',
        label: 'Stilo'
      },
      {
        value: 'Taurianova',
        label: 'Taurianova'
      },
      {
        value: 'Terranova Sappo Minulio',
        label: 'Terranova Sappo Minulio'
      },
      {
        value: 'Varapodio',
        label: 'Varapodio'
      },
      {
        value: 'Villa San Giovanni',
        label: 'Villa San Giovanni'
      },
      {
        value: 'San Ferdinando',
        label: 'San Ferdinando'
      },
      {
        value: 'Alcamo',
        label: 'Alcamo'
      },
      {
        value: 'Buseto Palizzolo',
        label: 'Buseto Palizzolo'
      },
      {
        value: 'Calatafimi-Segesta',
        label: 'Calatafimi-Segesta'
      },
      {
        value: 'Campobello di Mazara',
        label: 'Campobello di Mazara'
      },
      {
        value: 'Castellammare del Golfo',
        label: 'Castellammare del Golfo'
      },
      {
        value: 'Castelvetrano',
        label: 'Castelvetrano'
      },
      {
        value: 'Custonaci',
        label: 'Custonaci'
      },
      {
        value: 'Erice',
        label: 'Erice'
      },
      {
        value: 'Favignana',
        label: 'Favignana'
      },
      {
        value: 'Gibellina',
        label: 'Gibellina'
      },
      {
        value: 'Marsala',
        label: 'Marsala'
      },
      {
        value: 'Mazara del Vallo',
        label: 'Mazara del Vallo'
      },
      {
        value: 'Paceco',
        label: 'Paceco'
      },
      {
        value: 'Pantelleria',
        label: 'Pantelleria'
      },
      {
        value: 'Partanna',
        label: 'Partanna'
      },
      {
        value: 'Poggioreale',
        label: 'Poggioreale'
      },
      {
        value: 'Salaparuta',
        label: 'Salaparuta'
      },
      {
        value: 'Salemi',
        label: 'Salemi'
      },
      {
        value: 'Santa Ninfa',
        label: 'Santa Ninfa'
      },
      {
        value: 'San Vito Lo Capo',
        label: 'San Vito Lo Capo'
      },
      {
        value: 'Trapani',
        label: 'Trapani'
      },
      {
        value: 'Valderice',
        label: 'Valderice'
      },
      {
        value: 'Vita',
        label: 'Vita'
      },
      {
        value: 'Petrosino',
        label: 'Petrosino'
      },
      {
        value: 'Misiliscemi',
        label: 'Misiliscemi'
      },
      {
        value: 'Alia',
        label: 'Alia'
      },
      {
        value: 'Alimena',
        label: 'Alimena'
      },
      {
        value: 'Aliminusa',
        label: 'Aliminusa'
      },
      {
        value: 'Altavilla Milicia',
        label: 'Altavilla Milicia'
      },
      {
        value: 'Altofonte',
        label: 'Altofonte'
      },
      {
        value: 'Bagheria',
        label: 'Bagheria'
      },
      {
        value: 'Balestrate',
        label: 'Balestrate'
      },
      {
        value: 'Baucina',
        label: 'Baucina'
      },
      {
        value: 'Belmonte Mezzagno',
        label: 'Belmonte Mezzagno'
      },
      {
        value: 'Bisacquino',
        label: 'Bisacquino'
      },
      {
        value: 'Bolognetta',
        label: 'Bolognetta'
      },
      {
        value: 'Bompietro',
        label: 'Bompietro'
      },
      {
        value: 'Borgetto',
        label: 'Borgetto'
      },
      {
        value: 'Caccamo',
        label: 'Caccamo'
      },
      {
        value: 'Caltavuturo',
        label: 'Caltavuturo'
      },
      {
        value: 'Campofelice di Fitalia',
        label: 'Campofelice di Fitalia'
      },
      {
        value: 'Campofelice di Roccella',
        label: 'Campofelice di Roccella'
      },
      {
        value: 'Campofiorito',
        label: 'Campofiorito'
      },
      {
        value: 'Camporeale',
        label: 'Camporeale'
      },
      {
        value: 'Capaci',
        label: 'Capaci'
      },
      {
        value: 'Carini',
        label: 'Carini'
      },
      {
        value: 'Castelbuono',
        label: 'Castelbuono'
      },
      {
        value: 'Casteldaccia',
        label: 'Casteldaccia'
      },
      {
        value: 'Castellana Sicula',
        label: 'Castellana Sicula'
      },
      {
        value: 'Castronovo di Sicilia',
        label: 'Castronovo di Sicilia'
      },
      {
        value: 'Cefalà Diana',
        label: 'Cefalà Diana'
      },
      {
        value: 'Cefalù',
        label: 'Cefalù'
      },
      {
        value: 'Cerda',
        label: 'Cerda'
      },
      {
        value: 'Chiusa Sclafani',
        label: 'Chiusa Sclafani'
      },
      {
        value: 'Ciminna',
        label: 'Ciminna'
      },
      {
        value: 'Cinisi',
        label: 'Cinisi'
      },
      {
        value: 'Collesano',
        label: 'Collesano'
      },
      {
        value: 'Contessa Entellina',
        label: 'Contessa Entellina'
      },
      {
        value: 'Corleone',
        label: 'Corleone'
      },
      {
        value: 'Ficarazzi',
        label: 'Ficarazzi'
      },
      {
        value: 'Gangi',
        label: 'Gangi'
      },
      {
        value: 'Geraci Siculo',
        label: 'Geraci Siculo'
      },
      {
        value: 'Giardinello',
        label: 'Giardinello'
      },
      {
        value: 'Giuliana',
        label: 'Giuliana'
      },
      {
        value: 'Godrano',
        label: 'Godrano'
      },
      {
        value: 'Gratteri',
        label: 'Gratteri'
      },
      {
        value: 'Isnello',
        label: 'Isnello'
      },
      {
        value: 'Isola delle Femmine',
        label: 'Isola delle Femmine'
      },
      {
        value: 'Lascari',
        label: 'Lascari'
      },
      {
        value: 'Lercara Friddi',
        label: 'Lercara Friddi'
      },
      {
        value: 'Marineo',
        label: 'Marineo'
      },
      {
        value: 'Mezzojuso',
        label: 'Mezzojuso'
      },
      {
        value: 'Misilmeri',
        label: 'Misilmeri'
      },
      {
        value: 'Monreale',
        label: 'Monreale'
      },
      {
        value: 'Montelepre',
        label: 'Montelepre'
      },
      {
        value: 'Montemaggiore Belsito',
        label: 'Montemaggiore Belsito'
      },
      {
        value: 'Palazzo Adriano',
        label: 'Palazzo Adriano'
      },
      {
        value: 'Palermo',
        label: 'Palermo'
      },
      {
        value: 'Partinico',
        label: 'Partinico'
      },
      {
        value: 'Petralia Soprana',
        label: 'Petralia Soprana'
      },
      {
        value: 'Petralia Sottana',
        label: 'Petralia Sottana'
      },
      {
        value: 'Piana degli Albanesi',
        label: 'Piana degli Albanesi'
      },
      {
        value: 'Polizzi Generosa',
        label: 'Polizzi Generosa'
      },
      {
        value: 'Pollina',
        label: 'Pollina'
      },
      {
        value: 'Prizzi',
        label: 'Prizzi'
      },
      {
        value: 'Roccamena',
        label: 'Roccamena'
      },
      {
        value: 'Roccapalumba',
        label: 'Roccapalumba'
      },
      {
        value: 'San Cipirello',
        label: 'San Cipirello'
      },
      {
        value: 'San Giuseppe Jato',
        label: 'San Giuseppe Jato'
      },
      {
        value: 'San Mauro Castelverde',
        label: 'San Mauro Castelverde'
      },
      {
        value: 'Santa Cristina Gela',
        label: 'Santa Cristina Gela'
      },
      {
        value: 'Santa Flavia',
        label: 'Santa Flavia'
      },
      {
        value: 'Sciara',
        label: 'Sciara'
      },
      {
        value: 'Sclafani Bagni',
        label: 'Sclafani Bagni'
      },
      {
        value: 'Termini Imerese',
        label: 'Termini Imerese'
      },
      {
        value: 'Terrasini',
        label: 'Terrasini'
      },
      {
        value: 'Torretta',
        label: 'Torretta'
      },
      {
        value: 'Trabia',
        label: 'Trabia'
      },
      {
        value: 'Trappeto',
        label: 'Trappeto'
      },
      {
        value: 'Ustica',
        label: 'Ustica'
      },
      {
        value: 'Valledolmo',
        label: 'Valledolmo'
      },
      {
        value: 'Ventimiglia di Sicilia',
        label: 'Ventimiglia di Sicilia'
      },
      {
        value: 'Vicari',
        label: 'Vicari'
      },
      {
        value: 'Villabate',
        label: 'Villabate'
      },
      {
        value: 'Villafrati',
        label: 'Villafrati'
      },
      {
        value: 'Scillato',
        label: 'Scillato'
      },
      {
        value: 'Blufi',
        label: 'Blufi'
      },
      {
        value: 'Alcara li Fusi',
        label: 'Alcara li Fusi'
      },
      {
        value: 'Alì',
        label: 'Alì'
      },
      {
        value: 'Alì Terme',
        label: 'Alì Terme'
      },
      {
        value: 'Antillo',
        label: 'Antillo'
      },
      {
        value: 'Barcellona Pozzo di Gotto',
        label: 'Barcellona Pozzo di Gotto'
      },
      {
        value: 'Basicò',
        label: 'Basicò'
      },
      {
        value: 'Brolo',
        label: 'Brolo'
      },
      {
        value: 'Capizzi',
        label: 'Capizzi'
      },
      {
        value: 'Capo d\'Orlando',
        label: 'Capo d\'Orlando'
      },
      {
        value: 'Capri Leone',
        label: 'Capri Leone'
      },
      {
        value: 'Caronia',
        label: 'Caronia'
      },
      {
        value: 'Casalvecchio Siculo',
        label: 'Casalvecchio Siculo'
      },
      {
        value: 'Castel di Lucio',
        label: 'Castel di Lucio'
      },
      {
        value: 'Castell\'Umberto',
        label: 'Castell\'Umberto'
      },
      {
        value: 'Castelmola',
        label: 'Castelmola'
      },
      {
        value: 'Castroreale',
        label: 'Castroreale'
      },
      {
        value: 'Cesarò',
        label: 'Cesarò'
      },
      {
        value: 'Condrò',
        label: 'Condrò'
      },
      {
        value: 'Falcone',
        label: 'Falcone'
      },
      {
        value: 'Ficarra',
        label: 'Ficarra'
      },
      {
        value: 'Fiumedinisi',
        label: 'Fiumedinisi'
      },
      {
        value: 'Floresta',
        label: 'Floresta'
      },
      {
        value: 'Fondachelli-Fantina',
        label: 'Fondachelli-Fantina'
      },
      {
        value: 'Forza d\'Agrò',
        label: 'Forza d\'Agrò'
      },
      {
        value: 'Francavilla di Sicilia',
        label: 'Francavilla di Sicilia'
      },
      {
        value: 'Frazzanò',
        label: 'Frazzanò'
      },
      {
        value: 'Furci Siculo',
        label: 'Furci Siculo'
      },
      {
        value: 'Furnari',
        label: 'Furnari'
      },
      {
        value: 'Gaggi',
        label: 'Gaggi'
      },
      {
        value: 'Galati Mamertino',
        label: 'Galati Mamertino'
      },
      {
        value: 'Gallodoro',
        label: 'Gallodoro'
      },
      {
        value: 'Giardini-Naxos',
        label: 'Giardini-Naxos'
      },
      {
        value: 'Gioiosa Marea',
        label: 'Gioiosa Marea'
      },
      {
        value: 'Graniti',
        label: 'Graniti'
      },
      {
        value: 'Gualtieri Sicaminò',
        label: 'Gualtieri Sicaminò'
      },
      {
        value: 'Itala',
        label: 'Itala'
      },
      {
        value: 'Leni',
        label: 'Leni'
      },
      {
        value: 'Letojanni',
        label: 'Letojanni'
      },
      {
        value: 'Librizzi',
        label: 'Librizzi'
      },
      {
        value: 'Limina',
        label: 'Limina'
      },
      {
        value: 'Lipari',
        label: 'Lipari'
      },
      {
        value: 'Longi',
        label: 'Longi'
      },
      {
        value: 'Malfa',
        label: 'Malfa'
      },
      {
        value: 'Malvagna',
        label: 'Malvagna'
      },
      {
        value: 'Mandanici',
        label: 'Mandanici'
      },
      {
        value: 'Mazzarrà Sant\'Andrea',
        label: 'Mazzarrà Sant\'Andrea'
      },
      {
        value: 'Merì',
        label: 'Merì'
      },
      {
        value: 'Messina',
        label: 'Messina'
      },
      {
        value: 'Milazzo',
        label: 'Milazzo'
      },
      {
        value: 'Militello Rosmarino',
        label: 'Militello Rosmarino'
      },
      {
        value: 'Mirto',
        label: 'Mirto'
      },
      {
        value: 'Mistretta',
        label: 'Mistretta'
      },
      {
        value: 'Moio Alcantara',
        label: 'Moio Alcantara'
      },
      {
        value: 'Monforte San Giorgio',
        label: 'Monforte San Giorgio'
      },
      {
        value: 'Mongiuffi Melia',
        label: 'Mongiuffi Melia'
      },
      {
        value: 'Montagnareale',
        label: 'Montagnareale'
      },
      {
        value: 'Montalbano Elicona',
        label: 'Montalbano Elicona'
      },
      {
        value: 'Motta Camastra',
        label: 'Motta Camastra'
      },
      {
        value: 'Motta d\'Affermo',
        label: 'Motta d\'Affermo'
      },
      {
        value: 'Naso',
        label: 'Naso'
      },
      {
        value: 'Nizza di Sicilia',
        label: 'Nizza di Sicilia'
      },
      {
        value: 'Novara di Sicilia',
        label: 'Novara di Sicilia'
      },
      {
        value: 'Oliveri',
        label: 'Oliveri'
      },
      {
        value: 'Pace del Mela',
        label: 'Pace del Mela'
      },
      {
        value: 'Pagliara',
        label: 'Pagliara'
      },
      {
        value: 'Patti',
        label: 'Patti'
      },
      {
        value: 'Pettineo',
        label: 'Pettineo'
      },
      {
        value: 'Piraino',
        label: 'Piraino'
      },
      {
        value: 'Raccuja',
        label: 'Raccuja'
      },
      {
        value: 'Reitano',
        label: 'Reitano'
      },
      {
        value: 'Roccafiorita',
        label: 'Roccafiorita'
      },
      {
        value: 'Roccalumera',
        label: 'Roccalumera'
      },
      {
        value: 'Roccavaldina',
        label: 'Roccavaldina'
      },
      {
        value: 'Roccella Valdemone',
        label: 'Roccella Valdemone'
      },
      {
        value: 'Rodì Milici',
        label: 'Rodì Milici'
      },
      {
        value: 'Rometta',
        label: 'Rometta'
      },
      {
        value: 'San Filippo del Mela',
        label: 'San Filippo del Mela'
      },
      {
        value: 'San Fratello',
        label: 'San Fratello'
      },
      {
        value: 'San Marco d\'Alunzio',
        label: 'San Marco d\'Alunzio'
      },
      {
        value: 'San Pier Niceto',
        label: 'San Pier Niceto'
      },
      {
        value: 'San Piero Patti',
        label: 'San Piero Patti'
      },
      {
        value: 'San Salvatore di Fitalia',
        label: 'San Salvatore di Fitalia'
      },
      {
        value: 'Santa Domenica Vittoria',
        label: 'Santa Domenica Vittoria'
      },
      {
        value: 'Sant\'Agata di Militello',
        label: 'Sant\'Agata di Militello'
      },
      {
        value: 'Sant\'Alessio Siculo',
        label: 'Sant\'Alessio Siculo'
      },
      {
        value: 'Santa Lucia del Mela',
        label: 'Santa Lucia del Mela'
      },
      {
        value: 'Santa Marina Salina',
        label: 'Santa Marina Salina'
      },
      {
        value: 'Sant\'Angelo di Brolo',
        label: 'Sant\'Angelo di Brolo'
      },
      {
        value: 'Santa Teresa di Riva',
        label: 'Santa Teresa di Riva'
      },
      {
        value: 'San Teodoro',
        label: 'San Teodoro'
      },
      {
        value: 'Santo Stefano di Camastra',
        label: 'Santo Stefano di Camastra'
      },
      {
        value: 'Saponara',
        label: 'Saponara'
      },
      {
        value: 'Savoca',
        label: 'Savoca'
      },
      {
        value: 'Scaletta Zanclea',
        label: 'Scaletta Zanclea'
      },
      {
        value: 'Sinagra',
        label: 'Sinagra'
      },
      {
        value: 'Spadafora',
        label: 'Spadafora'
      },
      {
        value: 'Taormina',
        label: 'Taormina'
      },
      {
        value: 'Torregrotta',
        label: 'Torregrotta'
      },
      {
        value: 'Tortorici',
        label: 'Tortorici'
      },
      {
        value: 'Tripi',
        label: 'Tripi'
      },
      {
        value: 'Tusa',
        label: 'Tusa'
      },
      {
        value: 'Ucria',
        label: 'Ucria'
      },
      {
        value: 'Valdina',
        label: 'Valdina'
      },
      {
        value: 'Venetico',
        label: 'Venetico'
      },
      {
        value: 'Villafranca Tirrena',
        label: 'Villafranca Tirrena'
      },
      {
        value: 'Terme Vigliatore',
        label: 'Terme Vigliatore'
      },
      {
        value: 'Acquedolci',
        label: 'Acquedolci'
      },
      {
        value: 'Torrenova',
        label: 'Torrenova'
      },
      {
        value: 'Agrigento',
        label: 'Agrigento'
      },
      {
        value: 'Alessandria della Rocca',
        label: 'Alessandria della Rocca'
      },
      {
        value: 'Aragona',
        label: 'Aragona'
      },
      {
        value: 'Bivona',
        label: 'Bivona'
      },
      {
        value: 'Burgio',
        label: 'Burgio'
      },
      {
        value: 'Calamonaci',
        label: 'Calamonaci'
      },
      {
        value: 'Caltabellotta',
        label: 'Caltabellotta'
      },
      {
        value: 'Camastra',
        label: 'Camastra'
      },
      {
        value: 'Cammarata',
        label: 'Cammarata'
      },
      {
        value: 'Campobello di Licata',
        label: 'Campobello di Licata'
      },
      {
        value: 'Canicattì',
        label: 'Canicattì'
      },
      {
        value: 'Casteltermini',
        label: 'Casteltermini'
      },
      {
        value: 'Castrofilippo',
        label: 'Castrofilippo'
      },
      {
        value: 'Cattolica Eraclea',
        label: 'Cattolica Eraclea'
      },
      {
        value: 'Cianciana',
        label: 'Cianciana'
      },
      {
        value: 'Comitini',
        label: 'Comitini'
      },
      {
        value: 'Favara',
        label: 'Favara'
      },
      {
        value: 'Grotte',
        label: 'Grotte'
      },
      {
        value: 'Joppolo Giancaxio',
        label: 'Joppolo Giancaxio'
      },
      {
        value: 'Lampedusa e Linosa',
        label: 'Lampedusa e Linosa'
      },
      {
        value: 'Licata',
        label: 'Licata'
      },
      {
        value: 'Lucca Sicula',
        label: 'Lucca Sicula'
      },
      {
        value: 'Menfi',
        label: 'Menfi'
      },
      {
        value: 'Montallegro',
        label: 'Montallegro'
      },
      {
        value: 'Montevago',
        label: 'Montevago'
      },
      {
        value: 'Naro',
        label: 'Naro'
      },
      {
        value: 'Palma di Montechiaro',
        label: 'Palma di Montechiaro'
      },
      {
        value: 'Porto Empedocle',
        label: 'Porto Empedocle'
      },
      {
        value: 'Racalmuto',
        label: 'Racalmuto'
      },
      {
        value: 'Raffadali',
        label: 'Raffadali'
      },
      {
        value: 'Ravanusa',
        label: 'Ravanusa'
      },
      {
        value: 'Realmonte',
        label: 'Realmonte'
      },
      {
        value: 'Ribera',
        label: 'Ribera'
      },
      {
        value: 'Sambuca di Sicilia',
        label: 'Sambuca di Sicilia'
      },
      {
        value: 'San Biagio Platani',
        label: 'San Biagio Platani'
      },
      {
        value: 'San Giovanni Gemini',
        label: 'San Giovanni Gemini'
      },
      {
        value: 'Santa Elisabetta',
        label: 'Santa Elisabetta'
      },
      {
        value: 'Santa Margherita di Belice',
        label: 'Santa Margherita di Belice'
      },
      {
        value: 'Sant\'Angelo Muxaro',
        label: 'Sant\'Angelo Muxaro'
      },
      {
        value: 'Santo Stefano Quisquina',
        label: 'Santo Stefano Quisquina'
      },
      {
        value: 'Sciacca',
        label: 'Sciacca'
      },
      {
        value: 'Siculiana',
        label: 'Siculiana'
      },
      {
        value: 'Villafranca Sicula',
        label: 'Villafranca Sicula'
      },
      {
        value: 'Acquaviva Platani',
        label: 'Acquaviva Platani'
      },
      {
        value: 'Bompensiere',
        label: 'Bompensiere'
      },
      {
        value: 'Butera',
        label: 'Butera'
      },
      {
        value: 'Caltanissetta',
        label: 'Caltanissetta'
      },
      {
        value: 'Campofranco',
        label: 'Campofranco'
      },
      {
        value: 'Delia',
        label: 'Delia'
      },
      {
        value: 'Gela',
        label: 'Gela'
      },
      {
        value: 'Marianopoli',
        label: 'Marianopoli'
      },
      {
        value: 'Mazzarino',
        label: 'Mazzarino'
      },
      {
        value: 'Milena',
        label: 'Milena'
      },
      {
        value: 'Montedoro',
        label: 'Montedoro'
      },
      {
        value: 'Mussomeli',
        label: 'Mussomeli'
      },
      {
        value: 'Niscemi',
        label: 'Niscemi'
      },
      {
        value: 'Resuttano',
        label: 'Resuttano'
      },
      {
        value: 'Riesi',
        label: 'Riesi'
      },
      {
        value: 'San Cataldo',
        label: 'San Cataldo'
      },
      {
        value: 'Santa Caterina Villarmosa',
        label: 'Santa Caterina Villarmosa'
      },
      {
        value: 'Serradifalco',
        label: 'Serradifalco'
      },
      {
        value: 'Sommatino',
        label: 'Sommatino'
      },
      {
        value: 'Sutera',
        label: 'Sutera'
      },
      {
        value: 'Vallelunga Pratameno',
        label: 'Vallelunga Pratameno'
      },
      {
        value: 'Villalba',
        label: 'Villalba'
      },
      {
        value: 'Agira',
        label: 'Agira'
      },
      {
        value: 'Aidone',
        label: 'Aidone'
      },
      {
        value: 'Assoro',
        label: 'Assoro'
      },
      {
        value: 'Barrafranca',
        label: 'Barrafranca'
      },
      {
        value: 'Calascibetta',
        label: 'Calascibetta'
      },
      {
        value: 'Catenanuova',
        label: 'Catenanuova'
      },
      {
        value: 'Centuripe',
        label: 'Centuripe'
      },
      {
        value: 'Cerami',
        label: 'Cerami'
      },
      {
        value: 'Enna',
        label: 'Enna'
      },
      {
        value: 'Gagliano Castelferrato',
        label: 'Gagliano Castelferrato'
      },
      {
        value: 'Leonforte',
        label: 'Leonforte'
      },
      {
        value: 'Nicosia',
        label: 'Nicosia'
      },
      {
        value: 'Nissoria',
        label: 'Nissoria'
      },
      {
        value: 'Piazza Armerina',
        label: 'Piazza Armerina'
      },
      {
        value: 'Pietraperzia',
        label: 'Pietraperzia'
      },
      {
        value: 'Regalbuto',
        label: 'Regalbuto'
      },
      {
        value: 'Sperlinga',
        label: 'Sperlinga'
      },
      {
        value: 'Troina',
        label: 'Troina'
      },
      {
        value: 'Valguarnera Caropepe',
        label: 'Valguarnera Caropepe'
      },
      {
        value: 'Villarosa',
        label: 'Villarosa'
      },
      {
        value: 'Aci Bonaccorsi',
        label: 'Aci Bonaccorsi'
      },
      {
        value: 'Aci Castello',
        label: 'Aci Castello'
      },
      {
        value: 'Aci Catena',
        label: 'Aci Catena'
      },
      {
        value: 'Acireale',
        label: 'Acireale'
      },
      {
        value: 'Aci Sant\'Antonio',
        label: 'Aci Sant\'Antonio'
      },
      {
        value: 'Adrano',
        label: 'Adrano'
      },
      {
        value: 'Belpasso',
        label: 'Belpasso'
      },
      {
        value: 'Biancavilla',
        label: 'Biancavilla'
      },
      {
        value: 'Bronte',
        label: 'Bronte'
      },
      {
        value: 'Calatabiano',
        label: 'Calatabiano'
      },
      {
        value: 'Caltagirone',
        label: 'Caltagirone'
      },
      {
        value: 'Camporotondo Etneo',
        label: 'Camporotondo Etneo'
      },
      {
        value: 'Castel di Iudica',
        label: 'Castel di Iudica'
      },
      {
        value: 'Castiglione di Sicilia',
        label: 'Castiglione di Sicilia'
      },
      {
        value: 'Catania',
        label: 'Catania'
      },
      {
        value: 'Fiumefreddo di Sicilia',
        label: 'Fiumefreddo di Sicilia'
      },
      {
        value: 'Giarre',
        label: 'Giarre'
      },
      {
        value: 'Grammichele',
        label: 'Grammichele'
      },
      {
        value: 'Gravina di Catania',
        label: 'Gravina di Catania'
      },
      {
        value: 'Licodia Eubea',
        label: 'Licodia Eubea'
      },
      {
        value: 'Linguaglossa',
        label: 'Linguaglossa'
      },
      {
        value: 'Maletto',
        label: 'Maletto'
      },
      {
        value: 'Mascali',
        label: 'Mascali'
      },
      {
        value: 'Mascalucia',
        label: 'Mascalucia'
      },
      {
        value: 'Militello in Val di Catania',
        label: 'Militello in Val di Catania'
      },
      {
        value: 'Milo',
        label: 'Milo'
      },
      {
        value: 'Mineo',
        label: 'Mineo'
      },
      {
        value: 'Mirabella Imbaccari',
        label: 'Mirabella Imbaccari'
      },
      {
        value: 'Misterbianco',
        label: 'Misterbianco'
      },
      {
        value: 'Motta Sant\'Anastasia',
        label: 'Motta Sant\'Anastasia'
      },
      {
        value: 'Nicolosi',
        label: 'Nicolosi'
      },
      {
        value: 'Palagonia',
        label: 'Palagonia'
      },
      {
        value: 'Paternò',
        label: 'Paternò'
      },
      {
        value: 'Pedara',
        label: 'Pedara'
      },
      {
        value: 'Piedimonte Etneo',
        label: 'Piedimonte Etneo'
      },
      {
        value: 'Raddusa',
        label: 'Raddusa'
      },
      {
        value: 'Ramacca',
        label: 'Ramacca'
      },
      {
        value: 'Randazzo',
        label: 'Randazzo'
      },
      {
        value: 'Riposto',
        label: 'Riposto'
      },
      {
        value: 'San Cono',
        label: 'San Cono'
      },
      {
        value: 'San Giovanni la Punta',
        label: 'San Giovanni la Punta'
      },
      {
        value: 'San Gregorio di Catania',
        label: 'San Gregorio di Catania'
      },
      {
        value: 'San Michele di Ganzaria',
        label: 'San Michele di Ganzaria'
      },
      {
        value: 'San Pietro Clarenza',
        label: 'San Pietro Clarenza'
      },
      {
        value: 'Sant\'Agata li Battiati',
        label: 'Sant\'Agata li Battiati'
      },
      {
        value: 'Sant\'Alfio',
        label: 'Sant\'Alfio'
      },
      {
        value: 'Santa Maria di Licodia',
        label: 'Santa Maria di Licodia'
      },
      {
        value: 'Santa Venerina',
        label: 'Santa Venerina'
      },
      {
        value: 'Scordia',
        label: 'Scordia'
      },
      {
        value: 'Trecastagni',
        label: 'Trecastagni'
      },
      {
        value: 'Tremestieri Etneo',
        label: 'Tremestieri Etneo'
      },
      {
        value: 'Valverde',
        label: 'Valverde'
      },
      {
        value: 'Viagrande',
        label: 'Viagrande'
      },
      {
        value: 'Vizzini',
        label: 'Vizzini'
      },
      {
        value: 'Zafferana Etnea',
        label: 'Zafferana Etnea'
      },
      {
        value: 'Mazzarrone',
        label: 'Mazzarrone'
      },
      {
        value: 'Maniace',
        label: 'Maniace'
      },
      {
        value: 'Ragalna',
        label: 'Ragalna'
      },
      {
        value: 'Acate',
        label: 'Acate'
      },
      {
        value: 'Chiaramonte Gulfi',
        label: 'Chiaramonte Gulfi'
      },
      {
        value: 'Comiso',
        label: 'Comiso'
      },
      {
        value: 'Giarratana',
        label: 'Giarratana'
      },
      {
        value: 'Ispica',
        label: 'Ispica'
      },
      {
        value: 'Modica',
        label: 'Modica'
      },
      {
        value: 'Monterosso Almo',
        label: 'Monterosso Almo'
      },
      {
        value: 'Pozzallo',
        label: 'Pozzallo'
      },
      {
        value: 'Ragusa',
        label: 'Ragusa'
      },
      {
        value: 'Santa Croce Camerina',
        label: 'Santa Croce Camerina'
      },
      {
        value: 'Scicli',
        label: 'Scicli'
      },
      {
        value: 'Vittoria',
        label: 'Vittoria'
      },
      {
        value: 'Augusta',
        label: 'Augusta'
      },
      {
        value: 'Avola',
        label: 'Avola'
      },
      {
        value: 'Buccheri',
        label: 'Buccheri'
      },
      {
        value: 'Buscemi',
        label: 'Buscemi'
      },
      {
        value: 'Canicattini Bagni',
        label: 'Canicattini Bagni'
      },
      {
        value: 'Carlentini',
        label: 'Carlentini'
      },
      {
        value: 'Cassaro',
        label: 'Cassaro'
      },
      {
        value: 'Ferla',
        label: 'Ferla'
      },
      {
        value: 'Floridia',
        label: 'Floridia'
      },
      {
        value: 'Francofonte',
        label: 'Francofonte'
      },
      {
        value: 'Lentini',
        label: 'Lentini'
      },
      {
        value: 'Melilli',
        label: 'Melilli'
      },
      {
        value: 'Noto',
        label: 'Noto'
      },
      {
        value: 'Pachino',
        label: 'Pachino'
      },
      {
        value: 'Palazzolo Acreide',
        label: 'Palazzolo Acreide'
      },
      {
        value: 'Rosolini',
        label: 'Rosolini'
      },
      {
        value: 'Siracusa',
        label: 'Siracusa'
      },
      {
        value: 'Solarino',
        label: 'Solarino'
      },
      {
        value: 'Sortino',
        label: 'Sortino'
      },
      {
        value: 'Portopalo di Capo Passero',
        label: 'Portopalo di Capo Passero'
      },
      {
        value: 'Priolo Gargallo',
        label: 'Priolo Gargallo'
      },
      {
        value: 'Aggius',
        label: 'Aggius'
      },
      {
        value: 'Alà dei Sardi',
        label: 'Alà dei Sardi'
      },
      {
        value: 'Alghero',
        label: 'Alghero'
      },
      {
        value: 'Anela',
        label: 'Anela'
      },
      {
        value: 'Ardara',
        label: 'Ardara'
      },
      {
        value: 'Arzachena',
        label: 'Arzachena'
      },
      {
        value: 'Banari',
        label: 'Banari'
      },
      {
        value: 'Benetutti',
        label: 'Benetutti'
      },
      {
        value: 'Berchidda',
        label: 'Berchidda'
      },
      {
        value: 'Bessude',
        label: 'Bessude'
      },
      {
        value: 'Bonnanaro',
        label: 'Bonnanaro'
      },
      {
        value: 'Bono',
        label: 'Bono'
      },
      {
        value: 'Bonorva',
        label: 'Bonorva'
      },
      {
        value: 'Bortigiadas',
        label: 'Bortigiadas'
      },
      {
        value: 'Borutta',
        label: 'Borutta'
      },
      {
        value: 'Bottidda',
        label: 'Bottidda'
      },
      {
        value: 'Buddusò',
        label: 'Buddusò'
      },
      {
        value: 'Bultei',
        label: 'Bultei'
      },
      {
        value: 'Bulzi',
        label: 'Bulzi'
      },
      {
        value: 'Burgos',
        label: 'Burgos'
      },
      {
        value: 'Calangianus',
        label: 'Calangianus'
      },
      {
        value: 'Cargeghe',
        label: 'Cargeghe'
      },
      {
        value: 'Castelsardo',
        label: 'Castelsardo'
      },
      {
        value: 'Cheremule',
        label: 'Cheremule'
      },
      {
        value: 'Chiaramonti',
        label: 'Chiaramonti'
      },
      {
        value: 'Codrongianos',
        label: 'Codrongianos'
      },
      {
        value: 'Cossoine',
        label: 'Cossoine'
      },
      {
        value: 'Esporlatu',
        label: 'Esporlatu'
      },
      {
        value: 'Florinas',
        label: 'Florinas'
      },
      {
        value: 'Giave',
        label: 'Giave'
      },
      {
        value: 'Illorai',
        label: 'Illorai'
      },
      {
        value: 'Ittireddu',
        label: 'Ittireddu'
      },
      {
        value: 'Ittiri',
        label: 'Ittiri'
      },
      {
        value: 'Laerru',
        label: 'Laerru'
      },
      {
        value: 'La Maddalena',
        label: 'La Maddalena'
      },
      {
        value: 'Luogosanto',
        label: 'Luogosanto'
      },
      {
        value: 'Luras',
        label: 'Luras'
      },
      {
        value: 'Mara',
        label: 'Mara'
      },
      {
        value: 'Martis',
        label: 'Martis'
      },
      {
        value: 'Monteleone Rocca Doria',
        label: 'Monteleone Rocca Doria'
      },
      {
        value: 'Monti',
        label: 'Monti'
      },
      {
        value: 'Mores',
        label: 'Mores'
      },
      {
        value: 'Muros',
        label: 'Muros'
      },
      {
        value: 'Nughedu San Nicolò',
        label: 'Nughedu San Nicolò'
      },
      {
        value: 'Nule',
        label: 'Nule'
      },
      {
        value: 'Nulvi',
        label: 'Nulvi'
      },
      {
        value: 'Olbia',
        label: 'Olbia'
      },
      {
        value: 'Olmedo',
        label: 'Olmedo'
      },
      {
        value: 'Oschiri',
        label: 'Oschiri'
      },
      {
        value: 'Osilo',
        label: 'Osilo'
      },
      {
        value: 'Ossi',
        label: 'Ossi'
      },
      {
        value: 'Ozieri',
        label: 'Ozieri'
      },
      {
        value: 'Padria',
        label: 'Padria'
      },
      {
        value: 'Palau',
        label: 'Palau'
      },
      {
        value: 'Pattada',
        label: 'Pattada'
      },
      {
        value: 'Perfugas',
        label: 'Perfugas'
      },
      {
        value: 'Ploaghe',
        label: 'Ploaghe'
      },
      {
        value: 'Porto Torres',
        label: 'Porto Torres'
      },
      {
        value: 'Pozzomaggiore',
        label: 'Pozzomaggiore'
      },
      {
        value: 'Putifigari',
        label: 'Putifigari'
      },
      {
        value: 'Romana',
        label: 'Romana'
      },
      {
        value: 'Aglientu',
        label: 'Aglientu'
      },
      {
        value: 'Santa Teresa Gallura',
        label: 'Santa Teresa Gallura'
      },
      {
        value: 'Sassari',
        label: 'Sassari'
      },
      {
        value: 'Sedini',
        label: 'Sedini'
      },
      {
        value: 'Semestene',
        label: 'Semestene'
      },
      {
        value: 'Sennori',
        label: 'Sennori'
      },
      {
        value: 'Siligo',
        label: 'Siligo'
      },
      {
        value: 'Sorso',
        label: 'Sorso'
      },
      {
        value: 'Tempio Pausania',
        label: 'Tempio Pausania'
      },
      {
        value: 'Thiesi',
        label: 'Thiesi'
      },
      {
        value: 'Tissi',
        label: 'Tissi'
      },
      {
        value: 'Torralba',
        label: 'Torralba'
      },
      {
        value: 'Trinità d\'Agultu e Vignola',
        label: 'Trinità d\'Agultu e Vignola'
      },
      {
        value: 'Tula',
        label: 'Tula'
      },
      {
        value: 'Uri',
        label: 'Uri'
      },
      {
        value: 'Usini',
        label: 'Usini'
      },
      {
        value: 'Villanova Monteleone',
        label: 'Villanova Monteleone'
      },
      {
        value: 'Valledoria',
        label: 'Valledoria'
      },
      {
        value: 'Telti',
        label: 'Telti'
      },
      {
        value: 'Badesi',
        label: 'Badesi'
      },
      {
        value: 'Viddalba',
        label: 'Viddalba'
      },
      {
        value: 'Golfo Aranci',
        label: 'Golfo Aranci'
      },
      {
        value: 'Loiri Porto San Paolo',
        label: 'Loiri Porto San Paolo'
      },
      {
        value: 'Sant\'Antonio di Gallura',
        label: 'Sant\'Antonio di Gallura'
      },
      {
        value: 'Tergu',
        label: 'Tergu'
      },
      {
        value: 'Santa Maria Coghinas',
        label: 'Santa Maria Coghinas'
      },
      {
        value: 'Erula',
        label: 'Erula'
      },
      {
        value: 'Stintino',
        label: 'Stintino'
      },
      {
        value: 'Padru',
        label: 'Padru'
      },
      {
        value: 'Budoni',
        label: 'Budoni'
      },
      {
        value: 'Aritzo',
        label: 'Aritzo'
      },
      {
        value: 'Arzana',
        label: 'Arzana'
      },
      {
        value: 'Atzara',
        label: 'Atzara'
      },
      {
        value: 'Austis',
        label: 'Austis'
      },
      {
        value: 'Bari Sardo',
        label: 'Bari Sardo'
      },
      {
        value: 'Baunei',
        label: 'Baunei'
      },
      {
        value: 'Belvì',
        label: 'Belvì'
      },
      {
        value: 'Birori',
        label: 'Birori'
      },
      {
        value: 'Bitti',
        label: 'Bitti'
      },
      {
        value: 'Bolotana',
        label: 'Bolotana'
      },
      {
        value: 'Borore',
        label: 'Borore'
      },
      {
        value: 'Bortigali',
        label: 'Bortigali'
      },
      {
        value: 'Desulo',
        label: 'Desulo'
      },
      {
        value: 'Dorgali',
        label: 'Dorgali'
      },
      {
        value: 'Dualchi',
        label: 'Dualchi'
      },
      {
        value: 'Elini',
        label: 'Elini'
      },
      {
        value: 'Fonni',
        label: 'Fonni'
      },
      {
        value: 'Gadoni',
        label: 'Gadoni'
      },
      {
        value: 'Gairo',
        label: 'Gairo'
      },
      {
        value: 'Galtellì',
        label: 'Galtellì'
      },
      {
        value: 'Gavoi',
        label: 'Gavoi'
      },
      {
        value: 'Girasole',
        label: 'Girasole'
      },
      {
        value: 'Ilbono',
        label: 'Ilbono'
      },
      {
        value: 'Irgoli',
        label: 'Irgoli'
      },
      {
        value: 'Jerzu',
        label: 'Jerzu'
      },
      {
        value: 'Lanusei',
        label: 'Lanusei'
      },
      {
        value: 'Lei',
        label: 'Lei'
      },
      {
        value: 'Loceri',
        label: 'Loceri'
      },
      {
        value: 'Loculi',
        label: 'Loculi'
      },
      {
        value: 'Lodè',
        label: 'Lodè'
      },
      {
        value: 'Lotzorai',
        label: 'Lotzorai'
      },
      {
        value: 'Lula',
        label: 'Lula'
      },
      {
        value: 'Macomer',
        label: 'Macomer'
      },
      {
        value: 'Mamoiada',
        label: 'Mamoiada'
      },
      {
        value: 'Meana Sardo',
        label: 'Meana Sardo'
      },
      {
        value: 'Noragugume',
        label: 'Noragugume'
      },
      {
        value: 'Nuoro',
        label: 'Nuoro'
      },
      {
        value: 'Oliena',
        label: 'Oliena'
      },
      {
        value: 'Ollolai',
        label: 'Ollolai'
      },
      {
        value: 'Olzai',
        label: 'Olzai'
      },
      {
        value: 'Onanì',
        label: 'Onanì'
      },
      {
        value: 'Onifai',
        label: 'Onifai'
      },
      {
        value: 'Oniferi',
        label: 'Oniferi'
      },
      {
        value: 'Orani',
        label: 'Orani'
      },
      {
        value: 'Orgosolo',
        label: 'Orgosolo'
      },
      {
        value: 'Orosei',
        label: 'Orosei'
      },
      {
        value: 'Orotelli',
        label: 'Orotelli'
      },
      {
        value: 'Ortueri',
        label: 'Ortueri'
      },
      {
        value: 'Orune',
        label: 'Orune'
      },
      {
        value: 'Osidda',
        label: 'Osidda'
      },
      {
        value: 'Osini',
        label: 'Osini'
      },
      {
        value: 'Ottana',
        label: 'Ottana'
      },
      {
        value: 'Ovodda',
        label: 'Ovodda'
      },
      {
        value: 'Perdasdefogu',
        label: 'Perdasdefogu'
      },
      {
        value: 'Posada',
        label: 'Posada'
      },
      {
        value: 'Sarule',
        label: 'Sarule'
      },
      {
        value: 'Silanus',
        label: 'Silanus'
      },
      {
        value: 'Sindia',
        label: 'Sindia'
      },
      {
        value: 'Siniscola',
        label: 'Siniscola'
      },
      {
        value: 'Sorgono',
        label: 'Sorgono'
      },
      {
        value: 'Talana',
        label: 'Talana'
      },
      {
        value: 'Tertenia',
        label: 'Tertenia'
      },
      {
        value: 'Teti',
        label: 'Teti'
      },
      {
        value: 'Tiana',
        label: 'Tiana'
      },
      {
        value: 'Tonara',
        label: 'Tonara'
      },
      {
        value: 'Torpè',
        label: 'Torpè'
      },
      {
        value: 'Tortolì',
        label: 'Tortolì'
      },
      {
        value: 'Triei',
        label: 'Triei'
      },
      {
        value: 'Ulassai',
        label: 'Ulassai'
      },
      {
        value: 'Urzulei',
        label: 'Urzulei'
      },
      {
        value: 'Ussassai',
        label: 'Ussassai'
      },
      {
        value: 'Villagrande Strisaili',
        label: 'Villagrande Strisaili'
      },
      {
        value: 'Cardedu',
        label: 'Cardedu'
      },
      {
        value: 'Lodine',
        label: 'Lodine'
      },
      {
        value: 'Assemini',
        label: 'Assemini'
      },
      {
        value: 'Cagliari',
        label: 'Cagliari'
      },
      {
        value: 'Capoterra',
        label: 'Capoterra'
      },
      {
        value: 'Decimomannu',
        label: 'Decimomannu'
      },
      {
        value: 'Maracalagonis',
        label: 'Maracalagonis'
      },
      {
        value: 'Pula',
        label: 'Pula'
      },
      {
        value: 'Quartu Sant\'Elena',
        label: 'Quartu Sant\'Elena'
      },
      {
        value: 'Sarroch',
        label: 'Sarroch'
      },
      {
        value: 'Selargius',
        label: 'Selargius'
      },
      {
        value: 'Sestu',
        label: 'Sestu'
      },
      {
        value: 'Settimo San Pietro',
        label: 'Settimo San Pietro'
      },
      {
        value: 'Sinnai',
        label: 'Sinnai'
      },
      {
        value: 'Uta',
        label: 'Uta'
      },
      {
        value: 'Villa San Pietro',
        label: 'Villa San Pietro'
      },
      {
        value: 'Quartucciu',
        label: 'Quartucciu'
      },
      {
        value: 'Elmas',
        label: 'Elmas'
      },
      {
        value: 'Monserrato',
        label: 'Monserrato'
      },
      {
        value: 'Andreis',
        label: 'Andreis'
      },
      {
        value: 'Arba',
        label: 'Arba'
      },
      {
        value: 'Aviano',
        label: 'Aviano'
      },
      {
        value: 'Azzano Decimo',
        label: 'Azzano Decimo'
      },
      {
        value: 'Barcis',
        label: 'Barcis'
      },
      {
        value: 'Brugnera',
        label: 'Brugnera'
      },
      {
        value: 'Budoia',
        label: 'Budoia'
      },
      {
        value: 'Caneva',
        label: 'Caneva'
      },
      {
        value: 'Casarsa della Delizia',
        label: 'Casarsa della Delizia'
      },
      {
        value: 'Castelnovo del Friuli',
        label: 'Castelnovo del Friuli'
      },
      {
        value: 'Cavasso Nuovo',
        label: 'Cavasso Nuovo'
      },
      {
        value: 'Chions',
        label: 'Chions'
      },
      {
        value: 'Cimolais',
        label: 'Cimolais'
      },
      {
        value: 'Claut',
        label: 'Claut'
      },
      {
        value: 'Clauzetto',
        label: 'Clauzetto'
      },
      {
        value: 'Cordenons',
        label: 'Cordenons'
      },
      {
        value: 'Cordovado',
        label: 'Cordovado'
      },
      {
        value: 'Erto e Casso',
        label: 'Erto e Casso'
      },
      {
        value: 'Fanna',
        label: 'Fanna'
      },
      {
        value: 'Fiume Veneto',
        label: 'Fiume Veneto'
      },
      {
        value: 'Fontanafredda',
        label: 'Fontanafredda'
      },
      {
        value: 'Frisanco',
        label: 'Frisanco'
      },
      {
        value: 'Maniago',
        label: 'Maniago'
      },
      {
        value: 'Meduno',
        label: 'Meduno'
      },
      {
        value: 'Montereale Valcellina',
        label: 'Montereale Valcellina'
      },
      {
        value: 'Morsano al Tagliamento',
        label: 'Morsano al Tagliamento'
      },
      {
        value: 'Pasiano di Pordenone',
        label: 'Pasiano di Pordenone'
      },
      {
        value: 'Pinzano al Tagliamento',
        label: 'Pinzano al Tagliamento'
      },
      {
        value: 'Polcenigo',
        label: 'Polcenigo'
      },
      {
        value: 'Porcia',
        label: 'Porcia'
      },
      {
        value: 'Pordenone',
        label: 'Pordenone'
      },
      {
        value: 'Prata di Pordenone',
        label: 'Prata di Pordenone'
      },
      {
        value: 'Pravisdomini',
        label: 'Pravisdomini'
      },
      {
        value: 'Roveredo in Piano',
        label: 'Roveredo in Piano'
      },
      {
        value: 'Sacile',
        label: 'Sacile'
      },
      {
        value: 'San Giorgio della Richinvelda',
        label: 'San Giorgio della Richinvelda'
      },
      {
        value: 'San Martino al Tagliamento',
        label: 'San Martino al Tagliamento'
      },
      {
        value: 'San Quirino',
        label: 'San Quirino'
      },
      {
        value: 'San Vito al Tagliamento',
        label: 'San Vito al Tagliamento'
      },
      {
        value: 'Sequals',
        label: 'Sequals'
      },
      {
        value: 'Sesto al Reghena',
        label: 'Sesto al Reghena'
      },
      {
        value: 'Spilimbergo',
        label: 'Spilimbergo'
      },
      {
        value: 'Tramonti di Sopra',
        label: 'Tramonti di Sopra'
      },
      {
        value: 'Tramonti di Sotto',
        label: 'Tramonti di Sotto'
      },
      {
        value: 'Travesio',
        label: 'Travesio'
      },
      {
        value: 'Vito d\'Asio',
        label: 'Vito d\'Asio'
      },
      {
        value: 'Vivaro',
        label: 'Vivaro'
      },
      {
        value: 'Zoppola',
        label: 'Zoppola'
      },
      {
        value: 'Vajont',
        label: 'Vajont'
      },
      {
        value: 'Valvasone Arzene',
        label: 'Valvasone Arzene'
      },
      {
        value: 'Acquaviva d\'Isernia',
        label: 'Acquaviva d\'Isernia'
      },
      {
        value: 'Agnone',
        label: 'Agnone'
      },
      {
        value: 'Bagnoli del Trigno',
        label: 'Bagnoli del Trigno'
      },
      {
        value: 'Belmonte del Sannio',
        label: 'Belmonte del Sannio'
      },
      {
        value: 'Cantalupo nel Sannio',
        label: 'Cantalupo nel Sannio'
      },
      {
        value: 'Capracotta',
        label: 'Capracotta'
      },
      {
        value: 'Carovilli',
        label: 'Carovilli'
      },
      {
        value: 'Carpinone',
        label: 'Carpinone'
      },
      {
        value: 'Castel del Giudice',
        label: 'Castel del Giudice'
      },
      {
        value: 'Castelpetroso',
        label: 'Castelpetroso'
      },
      {
        value: 'Castelpizzuto',
        label: 'Castelpizzuto'
      },
      {
        value: 'Castel San Vincenzo',
        label: 'Castel San Vincenzo'
      },
      {
        value: 'Castelverrino',
        label: 'Castelverrino'
      },
      {
        value: 'Cerro al Volturno',
        label: 'Cerro al Volturno'
      },
      {
        value: 'Chiauci',
        label: 'Chiauci'
      },
      {
        value: 'Civitanova del Sannio',
        label: 'Civitanova del Sannio'
      },
      {
        value: 'Colli a Volturno',
        label: 'Colli a Volturno'
      },
      {
        value: 'Conca Casale',
        label: 'Conca Casale'
      },
      {
        value: 'Filignano',
        label: 'Filignano'
      },
      {
        value: 'Forlì del Sannio',
        label: 'Forlì del Sannio'
      },
      {
        value: 'Fornelli',
        label: 'Fornelli'
      },
      {
        value: 'Frosolone',
        label: 'Frosolone'
      },
      {
        value: 'Isernia',
        label: 'Isernia'
      },
      {
        value: 'Longano',
        label: 'Longano'
      },
      {
        value: 'Macchia d\'Isernia',
        label: 'Macchia d\'Isernia'
      },
      {
        value: 'Macchiagodena',
        label: 'Macchiagodena'
      },
      {
        value: 'Miranda',
        label: 'Miranda'
      },
      {
        value: 'Montaquila',
        label: 'Montaquila'
      },
      {
        value: 'Montenero Val Cocchiara',
        label: 'Montenero Val Cocchiara'
      },
      {
        value: 'Monteroduni',
        label: 'Monteroduni'
      },
      {
        value: 'Pesche',
        label: 'Pesche'
      },
      {
        value: 'Pescolanciano',
        label: 'Pescolanciano'
      },
      {
        value: 'Pescopennataro',
        label: 'Pescopennataro'
      },
      {
        value: 'Pettoranello del Molise',
        label: 'Pettoranello del Molise'
      },
      {
        value: 'Pietrabbondante',
        label: 'Pietrabbondante'
      },
      {
        value: 'Pizzone',
        label: 'Pizzone'
      },
      {
        value: 'Poggio Sannita',
        label: 'Poggio Sannita'
      },
      {
        value: 'Pozzilli',
        label: 'Pozzilli'
      },
      {
        value: 'Rionero Sannitico',
        label: 'Rionero Sannitico'
      },
      {
        value: 'Roccamandolfi',
        label: 'Roccamandolfi'
      },
      {
        value: 'Roccasicura',
        label: 'Roccasicura'
      },
      {
        value: 'Rocchetta a Volturno',
        label: 'Rocchetta a Volturno'
      },
      {
        value: 'San Pietro Avellana',
        label: 'San Pietro Avellana'
      },
      {
        value: 'Sant\'Agapito',
        label: 'Sant\'Agapito'
      },
      {
        value: 'Santa Maria del Molise',
        label: 'Santa Maria del Molise'
      },
      {
        value: 'Sant\'Angelo del Pesco',
        label: 'Sant\'Angelo del Pesco'
      },
      {
        value: 'Sant\'Elena Sannita',
        label: 'Sant\'Elena Sannita'
      },
      {
        value: 'Scapoli',
        label: 'Scapoli'
      },
      {
        value: 'Sessano del Molise',
        label: 'Sessano del Molise'
      },
      {
        value: 'Sesto Campano',
        label: 'Sesto Campano'
      },
      {
        value: 'Vastogirardi',
        label: 'Vastogirardi'
      },
      {
        value: 'Venafro',
        label: 'Venafro'
      },
      {
        value: 'Abbasanta',
        label: 'Abbasanta'
      },
      {
        value: 'Aidomaggiore',
        label: 'Aidomaggiore'
      },
      {
        value: 'Albagiara',
        label: 'Albagiara'
      },
      {
        value: 'Ales',
        label: 'Ales'
      },
      {
        value: 'Allai',
        label: 'Allai'
      },
      {
        value: 'Arborea',
        label: 'Arborea'
      },
      {
        value: 'Ardauli',
        label: 'Ardauli'
      },
      {
        value: 'Assolo',
        label: 'Assolo'
      },
      {
        value: 'Asuni',
        label: 'Asuni'
      },
      {
        value: 'Baradili',
        label: 'Baradili'
      },
      {
        value: 'Baratili San Pietro',
        label: 'Baratili San Pietro'
      },
      {
        value: 'Baressa',
        label: 'Baressa'
      },
      {
        value: 'Bauladu',
        label: 'Bauladu'
      },
      {
        value: 'Bidonì',
        label: 'Bidonì'
      },
      {
        value: 'Bonarcado',
        label: 'Bonarcado'
      },
      {
        value: 'Boroneddu',
        label: 'Boroneddu'
      },
      {
        value: 'Busachi',
        label: 'Busachi'
      },
      {
        value: 'Cabras',
        label: 'Cabras'
      },
      {
        value: 'Cuglieri',
        label: 'Cuglieri'
      },
      {
        value: 'Fordongianus',
        label: 'Fordongianus'
      },
      {
        value: 'Ghilarza',
        label: 'Ghilarza'
      },
      {
        value: 'Gonnoscodina',
        label: 'Gonnoscodina'
      },
      {
        value: 'Gonnosnò',
        label: 'Gonnosnò'
      },
      {
        value: 'Gonnostramatza',
        label: 'Gonnostramatza'
      },
      {
        value: 'Marrubiu',
        label: 'Marrubiu'
      },
      {
        value: 'Masullas',
        label: 'Masullas'
      },
      {
        value: 'Milis',
        label: 'Milis'
      },
      {
        value: 'Mogorella',
        label: 'Mogorella'
      },
      {
        value: 'Mogoro',
        label: 'Mogoro'
      },
      {
        value: 'Morgongiori',
        label: 'Morgongiori'
      },
      {
        value: 'Narbolia',
        label: 'Narbolia'
      },
      {
        value: 'Neoneli',
        label: 'Neoneli'
      },
      {
        value: 'Norbello',
        label: 'Norbello'
      },
      {
        value: 'Nughedu Santa Vittoria',
        label: 'Nughedu Santa Vittoria'
      },
      {
        value: 'Nurachi',
        label: 'Nurachi'
      },
      {
        value: 'Nureci',
        label: 'Nureci'
      },
      {
        value: 'Ollastra',
        label: 'Ollastra'
      },
      {
        value: 'Oristano',
        label: 'Oristano'
      },
      {
        value: 'Palmas Arborea',
        label: 'Palmas Arborea'
      },
      {
        value: 'Pau',
        label: 'Pau'
      },
      {
        value: 'Paulilatino',
        label: 'Paulilatino'
      },
      {
        value: 'Pompu',
        label: 'Pompu'
      },
      {
        value: 'Riola Sardo',
        label: 'Riola Sardo'
      },
      {
        value: 'Ruinas',
        label: 'Ruinas'
      },
      {
        value: 'Samugheo',
        label: 'Samugheo'
      },
      {
        value: 'San Nicolò d\'Arcidano',
        label: 'San Nicolò d\'Arcidano'
      },
      {
        value: 'Santa Giusta',
        label: 'Santa Giusta'
      },
      {
        value: 'Villa Sant\'Antonio',
        label: 'Villa Sant\'Antonio'
      },
      {
        value: 'Santu Lussurgiu',
        label: 'Santu Lussurgiu'
      },
      {
        value: 'San Vero Milis',
        label: 'San Vero Milis'
      },
      {
        value: 'Scano di Montiferro',
        label: 'Scano di Montiferro'
      },
      {
        value: 'Sedilo',
        label: 'Sedilo'
      },
      {
        value: 'Seneghe',
        label: 'Seneghe'
      },
      {
        value: 'Senis',
        label: 'Senis'
      },
      {
        value: 'Sennariolo',
        label: 'Sennariolo'
      },
      {
        value: 'Siamaggiore',
        label: 'Siamaggiore'
      },
      {
        value: 'Siamanna',
        label: 'Siamanna'
      },
      {
        value: 'Simala',
        label: 'Simala'
      },
      {
        value: 'Simaxis',
        label: 'Simaxis'
      },
      {
        value: 'Sini',
        label: 'Sini'
      },
      {
        value: 'Siris',
        label: 'Siris'
      },
      {
        value: 'Solarussa',
        label: 'Solarussa'
      },
      {
        value: 'Sorradile',
        label: 'Sorradile'
      },
      {
        value: 'Tadasuni',
        label: 'Tadasuni'
      },
      {
        value: 'Terralba',
        label: 'Terralba'
      },
      {
        value: 'Tramatza',
        label: 'Tramatza'
      },
      {
        value: 'Tresnuraghes',
        label: 'Tresnuraghes'
      },
      {
        value: 'Ulà Tirso',
        label: 'Ulà Tirso'
      },
      {
        value: 'Uras',
        label: 'Uras'
      },
      {
        value: 'Usellus',
        label: 'Usellus'
      },
      {
        value: 'Villanova Truschedu',
        label: 'Villanova Truschedu'
      },
      {
        value: 'Villaurbana',
        label: 'Villaurbana'
      },
      {
        value: 'Villa Verde',
        label: 'Villa Verde'
      },
      {
        value: 'Zeddiani',
        label: 'Zeddiani'
      },
      {
        value: 'Zerfaliu',
        label: 'Zerfaliu'
      },
      {
        value: 'Siapiccia',
        label: 'Siapiccia'
      },
      {
        value: 'Curcuris',
        label: 'Curcuris'
      },
      {
        value: 'Soddì',
        label: 'Soddì'
      },
      {
        value: 'Bosa',
        label: 'Bosa'
      },
      {
        value: 'Flussio',
        label: 'Flussio'
      },
      {
        value: 'Laconi',
        label: 'Laconi'
      },
      {
        value: 'Magomadas',
        label: 'Magomadas'
      },
      {
        value: 'Modolo',
        label: 'Modolo'
      },
      {
        value: 'Montresta',
        label: 'Montresta'
      },
      {
        value: 'Sagama',
        label: 'Sagama'
      },
      {
        value: 'Suni',
        label: 'Suni'
      },
      {
        value: 'Tinnura',
        label: 'Tinnura'
      },
      {
        value: 'Ailoche',
        label: 'Ailoche'
      },
      {
        value: 'Andorno Micca',
        label: 'Andorno Micca'
      },
      {
        value: 'Benna',
        label: 'Benna'
      },
      {
        value: 'Biella',
        label: 'Biella'
      },
      {
        value: 'Bioglio',
        label: 'Bioglio'
      },
      {
        value: 'Borriana',
        label: 'Borriana'
      },
      {
        value: 'Brusnengo',
        label: 'Brusnengo'
      },
      {
        value: 'Callabiana',
        label: 'Callabiana'
      },
      {
        value: 'Camandona',
        label: 'Camandona'
      },
      {
        value: 'Camburzano',
        label: 'Camburzano'
      },
      {
        value: 'Candelo',
        label: 'Candelo'
      },
      {
        value: 'Caprile',
        label: 'Caprile'
      },
      {
        value: 'Casapinta',
        label: 'Casapinta'
      },
      {
        value: 'Castelletto Cervo',
        label: 'Castelletto Cervo'
      },
      {
        value: 'Cavaglià',
        label: 'Cavaglià'
      },
      {
        value: 'Cerrione',
        label: 'Cerrione'
      },
      {
        value: 'Coggiola',
        label: 'Coggiola'
      },
      {
        value: 'Cossato',
        label: 'Cossato'
      },
      {
        value: 'Crevacuore',
        label: 'Crevacuore'
      },
      {
        value: 'Curino',
        label: 'Curino'
      },
      {
        value: 'Donato',
        label: 'Donato'
      },
      {
        value: 'Dorzano',
        label: 'Dorzano'
      },
      {
        value: 'Gaglianico',
        label: 'Gaglianico'
      },
      {
        value: 'Gifflenga',
        label: 'Gifflenga'
      },
      {
        value: 'Graglia',
        label: 'Graglia'
      },
      {
        value: 'Magnano',
        label: 'Magnano'
      },
      {
        value: 'Massazza',
        label: 'Massazza'
      },
      {
        value: 'Masserano',
        label: 'Masserano'
      },
      {
        value: 'Mezzana Mortigliengo',
        label: 'Mezzana Mortigliengo'
      },
      {
        value: 'Miagliano',
        label: 'Miagliano'
      },
      {
        value: 'Mongrando',
        label: 'Mongrando'
      },
      {
        value: 'Mottalciata',
        label: 'Mottalciata'
      },
      {
        value: 'Muzzano',
        label: 'Muzzano'
      },
      {
        value: 'Netro',
        label: 'Netro'
      },
      {
        value: 'Occhieppo Inferiore',
        label: 'Occhieppo Inferiore'
      },
      {
        value: 'Occhieppo Superiore',
        label: 'Occhieppo Superiore'
      },
      {
        value: 'Pettinengo',
        label: 'Pettinengo'
      },
      {
        value: 'Piatto',
        label: 'Piatto'
      },
      {
        value: 'Piedicavallo',
        label: 'Piedicavallo'
      },
      {
        value: 'Pollone',
        label: 'Pollone'
      },
      {
        value: 'Ponderano',
        label: 'Ponderano'
      },
      {
        value: 'Portula',
        label: 'Portula'
      },
      {
        value: 'Pralungo',
        label: 'Pralungo'
      },
      {
        value: 'Pray',
        label: 'Pray'
      },
      {
        value: 'Ronco Biellese',
        label: 'Ronco Biellese'
      },
      {
        value: 'Roppolo',
        label: 'Roppolo'
      },
      {
        value: 'Rosazza',
        label: 'Rosazza'
      },
      {
        value: 'Sagliano Micca',
        label: 'Sagliano Micca'
      },
      {
        value: 'Sala Biellese',
        label: 'Sala Biellese'
      },
      {
        value: 'Salussola',
        label: 'Salussola'
      },
      {
        value: 'Sandigliano',
        label: 'Sandigliano'
      },
      {
        value: 'Sordevolo',
        label: 'Sordevolo'
      },
      {
        value: 'Sostegno',
        label: 'Sostegno'
      },
      {
        value: 'Strona',
        label: 'Strona'
      },
      {
        value: 'Tavigliano',
        label: 'Tavigliano'
      },
      {
        value: 'Ternengo',
        label: 'Ternengo'
      },
      {
        value: 'Tollegno',
        label: 'Tollegno'
      },
      {
        value: 'Torrazzo',
        label: 'Torrazzo'
      },
      {
        value: 'Valdengo',
        label: 'Valdengo'
      },
      {
        value: 'Vallanzengo',
        label: 'Vallanzengo'
      },
      {
        value: 'Valle San Nicolao',
        label: 'Valle San Nicolao'
      },
      {
        value: 'Veglio',
        label: 'Veglio'
      },
      {
        value: 'Verrone',
        label: 'Verrone'
      },
      {
        value: 'Vigliano Biellese',
        label: 'Vigliano Biellese'
      },
      {
        value: 'Villa del Bosco',
        label: 'Villa del Bosco'
      },
      {
        value: 'Villanova Biellese',
        label: 'Villanova Biellese'
      },
      {
        value: 'Viverone',
        label: 'Viverone'
      },
      {
        value: 'Zimone',
        label: 'Zimone'
      },
      {
        value: 'Zubiena',
        label: 'Zubiena'
      },
      {
        value: 'Zumaglia',
        label: 'Zumaglia'
      },
      {
        value: 'Lessona',
        label: 'Lessona'
      },
      {
        value: 'Campiglia Cervo',
        label: 'Campiglia Cervo'
      },
      {
        value: 'Quaregna Cerreto',
        label: 'Quaregna Cerreto'
      },
      {
        value: 'Valdilana',
        label: 'Valdilana'
      },
      {
        value: 'Abbadia Lariana',
        label: 'Abbadia Lariana'
      },
      {
        value: 'Airuno',
        label: 'Airuno'
      },
      {
        value: 'Annone di Brianza',
        label: 'Annone di Brianza'
      },
      {
        value: 'Ballabio',
        label: 'Ballabio'
      },
      {
        value: 'Barzago',
        label: 'Barzago'
      },
      {
        value: 'Barzanò',
        label: 'Barzanò'
      },
      {
        value: 'Barzio',
        label: 'Barzio'
      },
      {
        value: 'Bellano',
        label: 'Bellano'
      },
      {
        value: 'Bosisio Parini',
        label: 'Bosisio Parini'
      },
      {
        value: 'Brivio',
        label: 'Brivio'
      },
      {
        value: 'Bulciago',
        label: 'Bulciago'
      },
      {
        value: 'Calco',
        label: 'Calco'
      },
      {
        value: 'Calolziocorte',
        label: 'Calolziocorte'
      },
      {
        value: 'Carenno',
        label: 'Carenno'
      },
      {
        value: 'Casargo',
        label: 'Casargo'
      },
      {
        value: 'Casatenovo',
        label: 'Casatenovo'
      },
      {
        value: 'Cassago Brianza',
        label: 'Cassago Brianza'
      },
      {
        value: 'Cassina Valsassina',
        label: 'Cassina Valsassina'
      },
      {
        value: 'Castello di Brianza',
        label: 'Castello di Brianza'
      },
      {
        value: 'Cernusco Lombardone',
        label: 'Cernusco Lombardone'
      },
      {
        value: 'Cesana Brianza',
        label: 'Cesana Brianza'
      },
      {
        value: 'Civate',
        label: 'Civate'
      },
      {
        value: 'Colico',
        label: 'Colico'
      },
      {
        value: 'Colle Brianza',
        label: 'Colle Brianza'
      },
      {
        value: 'Cortenova',
        label: 'Cortenova'
      },
      {
        value: 'Costa Masnaga',
        label: 'Costa Masnaga'
      },
      {
        value: 'Crandola Valsassina',
        label: 'Crandola Valsassina'
      },
      {
        value: 'Cremella',
        label: 'Cremella'
      },
      {
        value: 'Cremeno',
        label: 'Cremeno'
      },
      {
        value: 'Dervio',
        label: 'Dervio'
      },
      {
        value: 'Dolzago',
        label: 'Dolzago'
      },
      {
        value: 'Dorio',
        label: 'Dorio'
      },
      {
        value: 'Ello',
        label: 'Ello'
      },
      {
        value: 'Erve',
        label: 'Erve'
      },
      {
        value: 'Esino Lario',
        label: 'Esino Lario'
      },
      {
        value: 'Galbiate',
        label: 'Galbiate'
      },
      {
        value: 'Garbagnate Monastero',
        label: 'Garbagnate Monastero'
      },
      {
        value: 'Garlate',
        label: 'Garlate'
      },
      {
        value: 'Imbersago',
        label: 'Imbersago'
      },
      {
        value: 'Introbio',
        label: 'Introbio'
      },
      {
        value: 'Lecco',
        label: 'Lecco'
      },
      {
        value: 'Lierna',
        label: 'Lierna'
      },
      {
        value: 'Lomagna',
        label: 'Lomagna'
      },
      {
        value: 'Malgrate',
        label: 'Malgrate'
      },
      {
        value: 'Mandello del Lario',
        label: 'Mandello del Lario'
      },
      {
        value: 'Margno',
        label: 'Margno'
      },
      {
        value: 'Merate',
        label: 'Merate'
      },
      {
        value: 'Missaglia',
        label: 'Missaglia'
      },
      {
        value: 'Moggio',
        label: 'Moggio'
      },
      {
        value: 'Molteno',
        label: 'Molteno'
      },
      {
        value: 'Monte Marenzo',
        label: 'Monte Marenzo'
      },
      {
        value: 'Montevecchia',
        label: 'Montevecchia'
      },
      {
        value: 'Monticello Brianza',
        label: 'Monticello Brianza'
      },
      {
        value: 'Morterone',
        label: 'Morterone'
      },
      {
        value: 'Nibionno',
        label: 'Nibionno'
      },
      {
        value: 'Oggiono',
        label: 'Oggiono'
      },
      {
        value: 'Olgiate Molgora',
        label: 'Olgiate Molgora'
      },
      {
        value: 'Olginate',
        label: 'Olginate'
      },
      {
        value: 'Oliveto Lario',
        label: 'Oliveto Lario'
      },
      {
        value: 'Osnago',
        label: 'Osnago'
      },
      {
        value: 'Paderno d\'Adda',
        label: 'Paderno d\'Adda'
      },
      {
        value: 'Pagnona',
        label: 'Pagnona'
      },
      {
        value: 'Parlasco',
        label: 'Parlasco'
      },
      {
        value: 'Pasturo',
        label: 'Pasturo'
      },
      {
        value: 'Perledo',
        label: 'Perledo'
      },
      {
        value: 'Pescate',
        label: 'Pescate'
      },
      {
        value: 'Premana',
        label: 'Premana'
      },
      {
        value: 'Primaluna',
        label: 'Primaluna'
      },
      {
        value: 'Robbiate',
        label: 'Robbiate'
      },
      {
        value: 'Rogeno',
        label: 'Rogeno'
      },
      {
        value: 'Santa Maria Hoè',
        label: 'Santa Maria Hoè'
      },
      {
        value: 'Sirone',
        label: 'Sirone'
      },
      {
        value: 'Sirtori',
        label: 'Sirtori'
      },
      {
        value: 'Sueglio',
        label: 'Sueglio'
      },
      {
        value: 'Suello',
        label: 'Suello'
      },
      {
        value: 'Taceno',
        label: 'Taceno'
      },
      {
        value: 'Valgreghentino',
        label: 'Valgreghentino'
      },
      {
        value: 'Valmadrera',
        label: 'Valmadrera'
      },
      {
        value: 'Varenna',
        label: 'Varenna'
      },
      {
        value: 'Vercurago',
        label: 'Vercurago'
      },
      {
        value: 'Viganò',
        label: 'Viganò'
      },
      {
        value: 'Verderio',
        label: 'Verderio'
      },
      {
        value: 'La Valletta Brianza',
        label: 'La Valletta Brianza'
      },
      {
        value: 'Valvarrone',
        label: 'Valvarrone'
      },
      {
        value: 'Abbadia Cerreto',
        label: 'Abbadia Cerreto'
      },
      {
        value: 'Bertonico',
        label: 'Bertonico'
      },
      {
        value: 'Boffalora d\'Adda',
        label: 'Boffalora d\'Adda'
      },
      {
        value: 'Borghetto Lodigiano',
        label: 'Borghetto Lodigiano'
      },
      {
        value: 'Borgo San Giovanni',
        label: 'Borgo San Giovanni'
      },
      {
        value: 'Brembio',
        label: 'Brembio'
      },
      {
        value: 'Casaletto Lodigiano',
        label: 'Casaletto Lodigiano'
      },
      {
        value: 'Casalmaiocco',
        label: 'Casalmaiocco'
      },
      {
        value: 'Casalpusterlengo',
        label: 'Casalpusterlengo'
      },
      {
        value: 'Caselle Landi',
        label: 'Caselle Landi'
      },
      {
        value: 'Caselle Lurani',
        label: 'Caselle Lurani'
      },
      {
        value: 'Castelnuovo Bocca d\'Adda',
        label: 'Castelnuovo Bocca d\'Adda'
      },
      {
        value: 'Castiglione d\'Adda',
        label: 'Castiglione d\'Adda'
      },
      {
        value: 'Castiraga Vidardo',
        label: 'Castiraga Vidardo'
      },
      {
        value: 'Cavenago d\'Adda',
        label: 'Cavenago d\'Adda'
      },
      {
        value: 'Cervignano d\'Adda',
        label: 'Cervignano d\'Adda'
      },
      {
        value: 'Codogno',
        label: 'Codogno'
      },
      {
        value: 'Comazzo',
        label: 'Comazzo'
      },
      {
        value: 'Cornegliano Laudense',
        label: 'Cornegliano Laudense'
      },
      {
        value: 'Corno Giovine',
        label: 'Corno Giovine'
      },
      {
        value: 'Cornovecchio',
        label: 'Cornovecchio'
      },
      {
        value: 'Corte Palasio',
        label: 'Corte Palasio'
      },
      {
        value: 'Crespiatica',
        label: 'Crespiatica'
      },
      {
        value: 'Fombio',
        label: 'Fombio'
      },
      {
        value: 'Galgagnano',
        label: 'Galgagnano'
      },
      {
        value: 'Graffignana',
        label: 'Graffignana'
      },
      {
        value: 'Guardamiglio',
        label: 'Guardamiglio'
      },
      {
        value: 'Livraga',
        label: 'Livraga'
      },
      {
        value: 'Lodi',
        label: 'Lodi'
      },
      {
        value: 'Lodi Vecchio',
        label: 'Lodi Vecchio'
      },
      {
        value: 'Maccastorna',
        label: 'Maccastorna'
      },
      {
        value: 'Mairago',
        label: 'Mairago'
      },
      {
        value: 'Maleo',
        label: 'Maleo'
      },
      {
        value: 'Marudo',
        label: 'Marudo'
      },
      {
        value: 'Massalengo',
        label: 'Massalengo'
      },
      {
        value: 'Meleti',
        label: 'Meleti'
      },
      {
        value: 'Merlino',
        label: 'Merlino'
      },
      {
        value: 'Montanaso Lombardo',
        label: 'Montanaso Lombardo'
      },
      {
        value: 'Mulazzano',
        label: 'Mulazzano'
      },
      {
        value: 'Orio Litta',
        label: 'Orio Litta'
      },
      {
        value: 'Ospedaletto Lodigiano',
        label: 'Ospedaletto Lodigiano'
      },
      {
        value: 'Ossago Lodigiano',
        label: 'Ossago Lodigiano'
      },
      {
        value: 'Pieve Fissiraga',
        label: 'Pieve Fissiraga'
      },
      {
        value: 'Salerano sul Lambro',
        label: 'Salerano sul Lambro'
      },
      {
        value: 'San Fiorano',
        label: 'San Fiorano'
      },
      {
        value: 'San Martino in Strada',
        label: 'San Martino in Strada'
      },
      {
        value: 'San Rocco al Porto',
        label: 'San Rocco al Porto'
      },
      {
        value: 'Sant\'Angelo Lodigiano',
        label: 'Sant\'Angelo Lodigiano'
      },
      {
        value: 'Santo Stefano Lodigiano',
        label: 'Santo Stefano Lodigiano'
      },
      {
        value: 'Secugnago',
        label: 'Secugnago'
      },
      {
        value: 'Senna Lodigiana',
        label: 'Senna Lodigiana'
      },
      {
        value: 'Somaglia',
        label: 'Somaglia'
      },
      {
        value: 'Sordio',
        label: 'Sordio'
      },
      {
        value: 'Tavazzano con Villavesco',
        label: 'Tavazzano con Villavesco'
      },
      {
        value: 'Terranova dei Passerini',
        label: 'Terranova dei Passerini'
      },
      {
        value: 'Turano Lodigiano',
        label: 'Turano Lodigiano'
      },
      {
        value: 'Valera Fratta',
        label: 'Valera Fratta'
      },
      {
        value: 'Villanova del Sillaro',
        label: 'Villanova del Sillaro'
      },
      {
        value: 'Zelo Buon Persico',
        label: 'Zelo Buon Persico'
      },
      {
        value: 'Castelgerundo',
        label: 'Castelgerundo'
      },
      {
        value: 'Bellaria-Igea Marina',
        label: 'Bellaria-Igea Marina'
      },
      {
        value: 'Cattolica',
        label: 'Cattolica'
      },
      {
        value: 'Coriano',
        label: 'Coriano'
      },
      {
        value: 'Gemmano',
        label: 'Gemmano'
      },
      {
        value: 'Misano Adriatico',
        label: 'Misano Adriatico'
      },
      {
        value: 'Mondaino',
        label: 'Mondaino'
      },
      {
        value: 'Montefiore Conca',
        label: 'Montefiore Conca'
      },
      {
        value: 'Montegridolfo',
        label: 'Montegridolfo'
      },
      {
        value: 'Morciano di Romagna',
        label: 'Morciano di Romagna'
      },
      {
        value: 'Riccione',
        label: 'Riccione'
      },
      {
        value: 'Rimini',
        label: 'Rimini'
      },
      {
        value: 'Saludecio',
        label: 'Saludecio'
      },
      {
        value: 'San Clemente',
        label: 'San Clemente'
      },
      {
        value: 'San Giovanni in Marignano',
        label: 'San Giovanni in Marignano'
      },
      {
        value: 'Santarcangelo di Romagna',
        label: 'Santarcangelo di Romagna'
      },
      {
        value: 'Verucchio',
        label: 'Verucchio'
      },
      {
        value: 'Casteldelci',
        label: 'Casteldelci'
      },
      {
        value: 'Maiolo',
        label: 'Maiolo'
      },
      {
        value: 'Novafeltria',
        label: 'Novafeltria'
      },
      {
        value: 'Pennabilli',
        label: 'Pennabilli'
      },
      {
        value: 'San Leo',
        label: 'San Leo'
      },
      {
        value: 'Sant\'Agata Feltria',
        label: 'Sant\'Agata Feltria'
      },
      {
        value: 'Talamello',
        label: 'Talamello'
      },
      {
        value: 'Poggio Torriana',
        label: 'Poggio Torriana'
      },
      {
        value: 'Montescudo-Monte Colombo',
        label: 'Montescudo-Monte Colombo'
      },
      {
        value: 'Montecopiolo',
        label: 'Montecopiolo'
      },
      {
        value: 'Sassofeltrio',
        label: 'Sassofeltrio'
      },
      {
        value: 'Cantagallo',
        label: 'Cantagallo'
      },
      {
        value: 'Carmignano',
        label: 'Carmignano'
      },
      {
        value: 'Montemurlo',
        label: 'Montemurlo'
      },
      {
        value: 'Poggio a Caiano',
        label: 'Poggio a Caiano'
      },
      {
        value: 'Prato',
        label: 'Prato'
      },
      {
        value: 'Vaiano',
        label: 'Vaiano'
      },
      {
        value: 'Vernio',
        label: 'Vernio'
      },
      {
        value: 'Belvedere di Spinello',
        label: 'Belvedere di Spinello'
      },
      {
        value: 'Caccuri',
        label: 'Caccuri'
      },
      {
        value: 'Carfizzi',
        label: 'Carfizzi'
      },
      {
        value: 'Casabona',
        label: 'Casabona'
      },
      {
        value: 'Castelsilano',
        label: 'Castelsilano'
      },
      {
        value: 'Cerenzia',
        label: 'Cerenzia'
      },
      {
        value: 'Cirò',
        label: 'Cirò'
      },
      {
        value: 'Cirò Marina',
        label: 'Cirò Marina'
      },
      {
        value: 'Cotronei',
        label: 'Cotronei'
      },
      {
        value: 'Crotone',
        label: 'Crotone'
      },
      {
        value: 'Crucoli',
        label: 'Crucoli'
      },
      {
        value: 'Cutro',
        label: 'Cutro'
      },
      {
        value: 'Isola di Capo Rizzuto',
        label: 'Isola di Capo Rizzuto'
      },
      {
        value: 'Melissa',
        label: 'Melissa'
      },
      {
        value: 'Mesoraca',
        label: 'Mesoraca'
      },
      {
        value: 'Pallagorio',
        label: 'Pallagorio'
      },
      {
        value: 'Petilia Policastro',
        label: 'Petilia Policastro'
      },
      {
        value: 'Roccabernarda',
        label: 'Roccabernarda'
      },
      {
        value: 'Rocca di Neto',
        label: 'Rocca di Neto'
      },
      {
        value: 'San Mauro Marchesato',
        label: 'San Mauro Marchesato'
      },
      {
        value: 'San Nicola dell\'Alto',
        label: 'San Nicola dell\'Alto'
      },
      {
        value: 'Santa Severina',
        label: 'Santa Severina'
      },
      {
        value: 'Savelli',
        label: 'Savelli'
      },
      {
        value: 'Scandale',
        label: 'Scandale'
      },
      {
        value: 'Strongoli',
        label: 'Strongoli'
      },
      {
        value: 'Umbriatico',
        label: 'Umbriatico'
      },
      {
        value: 'Verzino',
        label: 'Verzino'
      },
      {
        value: 'Acquaro',
        label: 'Acquaro'
      },
      {
        value: 'Arena',
        label: 'Arena'
      },
      {
        value: 'Briatico',
        label: 'Briatico'
      },
      {
        value: 'Brognaturo',
        label: 'Brognaturo'
      },
      {
        value: 'Capistrano',
        label: 'Capistrano'
      },
      {
        value: 'Cessaniti',
        label: 'Cessaniti'
      },
      {
        value: 'Dasà',
        label: 'Dasà'
      },
      {
        value: 'Dinami',
        label: 'Dinami'
      },
      {
        value: 'Drapia',
        label: 'Drapia'
      },
      {
        value: 'Fabrizia',
        label: 'Fabrizia'
      },
      {
        value: 'Filadelfia',
        label: 'Filadelfia'
      },
      {
        value: 'Filandari',
        label: 'Filandari'
      },
      {
        value: 'Filogaso',
        label: 'Filogaso'
      },
      {
        value: 'Francavilla Angitola',
        label: 'Francavilla Angitola'
      },
      {
        value: 'Francica',
        label: 'Francica'
      },
      {
        value: 'Gerocarne',
        label: 'Gerocarne'
      },
      {
        value: 'Ionadi',
        label: 'Ionadi'
      },
      {
        value: 'Joppolo',
        label: 'Joppolo'
      },
      {
        value: 'Limbadi',
        label: 'Limbadi'
      },
      {
        value: 'Maierato',
        label: 'Maierato'
      },
      {
        value: 'Mileto',
        label: 'Mileto'
      },
      {
        value: 'Mongiana',
        label: 'Mongiana'
      },
      {
        value: 'Monterosso Calabro',
        label: 'Monterosso Calabro'
      },
      {
        value: 'Nardodipace',
        label: 'Nardodipace'
      },
      {
        value: 'Nicotera',
        label: 'Nicotera'
      },
      {
        value: 'Parghelia',
        label: 'Parghelia'
      },
      {
        value: 'Pizzo',
        label: 'Pizzo'
      },
      {
        value: 'Pizzoni',
        label: 'Pizzoni'
      },
      {
        value: 'Polia',
        label: 'Polia'
      },
      {
        value: 'Ricadi',
        label: 'Ricadi'
      },
      {
        value: 'Rombiolo',
        label: 'Rombiolo'
      },
      {
        value: 'San Calogero',
        label: 'San Calogero'
      },
      {
        value: 'San Costantino Calabro',
        label: 'San Costantino Calabro'
      },
      {
        value: 'San Gregorio d\'Ippona',
        label: 'San Gregorio d\'Ippona'
      },
      {
        value: 'San Nicola da Crissa',
        label: 'San Nicola da Crissa'
      },
      {
        value: 'Sant\'Onofrio',
        label: 'Sant\'Onofrio'
      },
      {
        value: 'Serra San Bruno',
        label: 'Serra San Bruno'
      },
      {
        value: 'Simbario',
        label: 'Simbario'
      },
      {
        value: 'Sorianello',
        label: 'Sorianello'
      },
      {
        value: 'Soriano Calabro',
        label: 'Soriano Calabro'
      },
      {
        value: 'Spadola',
        label: 'Spadola'
      },
      {
        value: 'Spilinga',
        label: 'Spilinga'
      },
      {
        value: 'Stefanaconi',
        label: 'Stefanaconi'
      },
      {
        value: 'Tropea',
        label: 'Tropea'
      },
      {
        value: 'Vallelonga',
        label: 'Vallelonga'
      },
      {
        value: 'Vazzano',
        label: 'Vazzano'
      },
      {
        value: 'Vibo Valentia',
        label: 'Vibo Valentia'
      },
      {
        value: 'Zaccanopoli',
        label: 'Zaccanopoli'
      },
      {
        value: 'Zambrone',
        label: 'Zambrone'
      },
      {
        value: 'Zungri',
        label: 'Zungri'
      },
      {
        value: 'Antrona Schieranco',
        label: 'Antrona Schieranco'
      },
      {
        value: 'Anzola d\'Ossola',
        label: 'Anzola d\'Ossola'
      },
      {
        value: 'Arizzano',
        label: 'Arizzano'
      },
      {
        value: 'Arola',
        label: 'Arola'
      },
      {
        value: 'Aurano',
        label: 'Aurano'
      },
      {
        value: 'Baceno',
        label: 'Baceno'
      },
      {
        value: 'Bannio Anzino',
        label: 'Bannio Anzino'
      },
      {
        value: 'Baveno',
        label: 'Baveno'
      },
      {
        value: 'Bee',
        label: 'Bee'
      },
      {
        value: 'Belgirate',
        label: 'Belgirate'
      },
      {
        value: 'Beura-Cardezza',
        label: 'Beura-Cardezza'
      },
      {
        value: 'Bognanco',
        label: 'Bognanco'
      },
      {
        value: 'Brovello-Carpugnino',
        label: 'Brovello-Carpugnino'
      },
      {
        value: 'Calasca-Castiglione',
        label: 'Calasca-Castiglione'
      },
      {
        value: 'Cambiasca',
        label: 'Cambiasca'
      },
      {
        value: 'Cannero Riviera',
        label: 'Cannero Riviera'
      },
      {
        value: 'Cannobio',
        label: 'Cannobio'
      },
      {
        value: 'Caprezzo',
        label: 'Caprezzo'
      },
      {
        value: 'Casale Corte Cerro',
        label: 'Casale Corte Cerro'
      },
      {
        value: 'Ceppo Morelli',
        label: 'Ceppo Morelli'
      },
      {
        value: 'Cesara',
        label: 'Cesara'
      },
      {
        value: 'Cossogno',
        label: 'Cossogno'
      },
      {
        value: 'Craveggia',
        label: 'Craveggia'
      },
      {
        value: 'Crevoladossola',
        label: 'Crevoladossola'
      },
      {
        value: 'Crodo',
        label: 'Crodo'
      },
      {
        value: 'Domodossola',
        label: 'Domodossola'
      },
      {
        value: 'Druogno',
        label: 'Druogno'
      },
      {
        value: 'Formazza',
        label: 'Formazza'
      },
      {
        value: 'Germagno',
        label: 'Germagno'
      },
      {
        value: 'Ghiffa',
        label: 'Ghiffa'
      },
      {
        value: 'Gignese',
        label: 'Gignese'
      },
      {
        value: 'Gravellona Toce',
        label: 'Gravellona Toce'
      },
      {
        value: 'Gurro',
        label: 'Gurro'
      },
      {
        value: 'Intragna',
        label: 'Intragna'
      },
      {
        value: 'Loreglia',
        label: 'Loreglia'
      },
      {
        value: 'Macugnaga',
        label: 'Macugnaga'
      },
      {
        value: 'Madonna del Sasso',
        label: 'Madonna del Sasso'
      },
      {
        value: 'Malesco',
        label: 'Malesco'
      },
      {
        value: 'Masera',
        label: 'Masera'
      },
      {
        value: 'Massiola',
        label: 'Massiola'
      },
      {
        value: 'Mergozzo',
        label: 'Mergozzo'
      },
      {
        value: 'Miazzina',
        label: 'Miazzina'
      },
      {
        value: 'Montecrestese',
        label: 'Montecrestese'
      },
      {
        value: 'Montescheno',
        label: 'Montescheno'
      },
      {
        value: 'Nonio',
        label: 'Nonio'
      },
      {
        value: 'Oggebbio',
        label: 'Oggebbio'
      },
      {
        value: 'Omegna',
        label: 'Omegna'
      },
      {
        value: 'Ornavasso',
        label: 'Ornavasso'
      },
      {
        value: 'Pallanzeno',
        label: 'Pallanzeno'
      },
      {
        value: 'Piedimulera',
        label: 'Piedimulera'
      },
      {
        value: 'Pieve Vergonte',
        label: 'Pieve Vergonte'
      },
      {
        value: 'Premeno',
        label: 'Premeno'
      },
      {
        value: 'Premia',
        label: 'Premia'
      },
      {
        value: 'Premosello-Chiovenda',
        label: 'Premosello-Chiovenda'
      },
      {
        value: 'Quarna Sopra',
        label: 'Quarna Sopra'
      },
      {
        value: 'Quarna Sotto',
        label: 'Quarna Sotto'
      },
      {
        value: 'Re',
        label: 'Re'
      },
      {
        value: 'San Bernardino Verbano',
        label: 'San Bernardino Verbano'
      },
      {
        value: 'Santa Maria Maggiore',
        label: 'Santa Maria Maggiore'
      },
      {
        value: 'Stresa',
        label: 'Stresa'
      },
      {
        value: 'Toceno',
        label: 'Toceno'
      },
      {
        value: 'Trarego Viggiona',
        label: 'Trarego Viggiona'
      },
      {
        value: 'Trasquera',
        label: 'Trasquera'
      },
      {
        value: 'Trontano',
        label: 'Trontano'
      },
      {
        value: 'Valstrona',
        label: 'Valstrona'
      },
      {
        value: 'Vanzone con San Carlo',
        label: 'Vanzone con San Carlo'
      },
      {
        value: 'Varzo',
        label: 'Varzo'
      },
      {
        value: 'Verbania',
        label: 'Verbania'
      },
      {
        value: 'Vignone',
        label: 'Vignone'
      },
      {
        value: 'Villadossola',
        label: 'Villadossola'
      },
      {
        value: 'Villette',
        label: 'Villette'
      },
      {
        value: 'Vogogna',
        label: 'Vogogna'
      },
      {
        value: 'Borgomezzavalle',
        label: 'Borgomezzavalle'
      },
      {
        value: 'Valle Cannobina',
        label: 'Valle Cannobina'
      },
      {
        value: 'Agrate Brianza',
        label: 'Agrate Brianza'
      },
      {
        value: 'Aicurzio',
        label: 'Aicurzio'
      },
      {
        value: 'Albiate',
        label: 'Albiate'
      },
      {
        value: 'Arcore',
        label: 'Arcore'
      },
      {
        value: 'Barlassina',
        label: 'Barlassina'
      },
      {
        value: 'Bellusco',
        label: 'Bellusco'
      },
      {
        value: 'Bernareggio',
        label: 'Bernareggio'
      },
      {
        value: 'Besana in Brianza',
        label: 'Besana in Brianza'
      },
      {
        value: 'Biassono',
        label: 'Biassono'
      },
      {
        value: 'Bovisio-Masciago',
        label: 'Bovisio-Masciago'
      },
      {
        value: 'Briosco',
        label: 'Briosco'
      },
      {
        value: 'Brugherio',
        label: 'Brugherio'
      },
      {
        value: 'Burago di Molgora',
        label: 'Burago di Molgora'
      },
      {
        value: 'Camparada',
        label: 'Camparada'
      },
      {
        value: 'Carate Brianza',
        label: 'Carate Brianza'
      },
      {
        value: 'Carnate',
        label: 'Carnate'
      },
      {
        value: 'Cavenago di Brianza',
        label: 'Cavenago di Brianza'
      },
      {
        value: 'Ceriano Laghetto',
        label: 'Ceriano Laghetto'
      },
      {
        value: 'Cesano Maderno',
        label: 'Cesano Maderno'
      },
      {
        value: 'Cogliate',
        label: 'Cogliate'
      },
      {
        value: 'Concorezzo',
        label: 'Concorezzo'
      },
      {
        value: 'Correzzana',
        label: 'Correzzana'
      },
      {
        value: 'Desio',
        label: 'Desio'
      },
      {
        value: 'Giussano',
        label: 'Giussano'
      },
      {
        value: 'Lazzate',
        label: 'Lazzate'
      },
      {
        value: 'Lesmo',
        label: 'Lesmo'
      },
      {
        value: 'Limbiate',
        label: 'Limbiate'
      },
      {
        value: 'Lissone',
        label: 'Lissone'
      },
      {
        value: 'Macherio',
        label: 'Macherio'
      },
      {
        value: 'Meda',
        label: 'Meda'
      },
      {
        value: 'Mezzago',
        label: 'Mezzago'
      },
      {
        value: 'Misinto',
        label: 'Misinto'
      },
      {
        value: 'Monza',
        label: 'Monza'
      },
      {
        value: 'Muggiò',
        label: 'Muggiò'
      },
      {
        value: 'Nova Milanese',
        label: 'Nova Milanese'
      },
      {
        value: 'Ornago',
        label: 'Ornago'
      },
      {
        value: 'Renate',
        label: 'Renate'
      },
      {
        value: 'Ronco Briantino',
        label: 'Ronco Briantino'
      },
      {
        value: 'Seregno',
        label: 'Seregno'
      },
      {
        value: 'Seveso',
        label: 'Seveso'
      },
      {
        value: 'Sovico',
        label: 'Sovico'
      },
      {
        value: 'Sulbiate',
        label: 'Sulbiate'
      },
      {
        value: 'Triuggio',
        label: 'Triuggio'
      },
      {
        value: 'Usmate Velate',
        label: 'Usmate Velate'
      },
      {
        value: 'Varedo',
        label: 'Varedo'
      },
      {
        value: 'Vedano al Lambro',
        label: 'Vedano al Lambro'
      },
      {
        value: 'Veduggio con Colzano',
        label: 'Veduggio con Colzano'
      },
      {
        value: 'Verano Brianza',
        label: 'Verano Brianza'
      },
      {
        value: 'Villasanta',
        label: 'Villasanta'
      },
      {
        value: 'Vimercate',
        label: 'Vimercate'
      },
      {
        value: 'Busnago',
        label: 'Busnago'
      },
      {
        value: 'Caponago',
        label: 'Caponago'
      },
      {
        value: 'Cornate d\'Adda',
        label: 'Cornate d\'Adda'
      },
      {
        value: 'Lentate sul Seveso',
        label: 'Lentate sul Seveso'
      },
      {
        value: 'Roncello',
        label: 'Roncello'
      },
      {
        value: 'Altidona',
        label: 'Altidona'
      },
      {
        value: 'Amandola',
        label: 'Amandola'
      },
      {
        value: 'Belmonte Piceno',
        label: 'Belmonte Piceno'
      },
      {
        value: 'Campofilone',
        label: 'Campofilone'
      },
      {
        value: 'Falerone',
        label: 'Falerone'
      },
      {
        value: 'Fermo',
        label: 'Fermo'
      },
      {
        value: 'Francavilla d\'Ete',
        label: 'Francavilla d\'Ete'
      },
      {
        value: 'Grottazzolina',
        label: 'Grottazzolina'
      },
      {
        value: 'Lapedona',
        label: 'Lapedona'
      },
      {
        value: 'Magliano di Tenna',
        label: 'Magliano di Tenna'
      },
      {
        value: 'Massa Fermana',
        label: 'Massa Fermana'
      },
      {
        value: 'Monsampietro Morico',
        label: 'Monsampietro Morico'
      },
      {
        value: 'Montappone',
        label: 'Montappone'
      },
      {
        value: 'Montefalcone Appennino',
        label: 'Montefalcone Appennino'
      },
      {
        value: 'Montefortino',
        label: 'Montefortino'
      },
      {
        value: 'Monte Giberto',
        label: 'Monte Giberto'
      },
      {
        value: 'Montegiorgio',
        label: 'Montegiorgio'
      },
      {
        value: 'Montegranaro',
        label: 'Montegranaro'
      },
      {
        value: 'Monteleone di Fermo',
        label: 'Monteleone di Fermo'
      },
      {
        value: 'Montelparo',
        label: 'Montelparo'
      },
      {
        value: 'Monte Rinaldo',
        label: 'Monte Rinaldo'
      },
      {
        value: 'Monterubbiano',
        label: 'Monterubbiano'
      },
      {
        value: 'Monte San Pietrangeli',
        label: 'Monte San Pietrangeli'
      },
      {
        value: 'Monte Urano',
        label: 'Monte Urano'
      },
      {
        value: 'Monte Vidon Combatte',
        label: 'Monte Vidon Combatte'
      },
      {
        value: 'Monte Vidon Corrado',
        label: 'Monte Vidon Corrado'
      },
      {
        value: 'Montottone',
        label: 'Montottone'
      },
      {
        value: 'Moresco',
        label: 'Moresco'
      },
      {
        value: 'Ortezzano',
        label: 'Ortezzano'
      },
      {
        value: 'Pedaso',
        label: 'Pedaso'
      },
      {
        value: 'Petritoli',
        label: 'Petritoli'
      },
      {
        value: 'Ponzano di Fermo',
        label: 'Ponzano di Fermo'
      },
      {
        value: 'Porto San Giorgio',
        label: 'Porto San Giorgio'
      },
      {
        value: 'Porto Sant\'Elpidio',
        label: 'Porto Sant\'Elpidio'
      },
      {
        value: 'Rapagnano',
        label: 'Rapagnano'
      },
      {
        value: 'Santa Vittoria in Matenano',
        label: 'Santa Vittoria in Matenano'
      },
      {
        value: 'Sant\'Elpidio a Mare',
        label: 'Sant\'Elpidio a Mare'
      },
      {
        value: 'Servigliano',
        label: 'Servigliano'
      },
      {
        value: 'Smerillo',
        label: 'Smerillo'
      },
      {
        value: 'Torre San Patrizio',
        label: 'Torre San Patrizio'
      },
      {
        value: 'Andria',
        label: 'Andria'
      },
      {
        value: 'Barletta',
        label: 'Barletta'
      },
      {
        value: 'Bisceglie',
        label: 'Bisceglie'
      },
      {
        value: 'Canosa di Puglia',
        label: 'Canosa di Puglia'
      },
      {
        value: 'Margherita di Savoia',
        label: 'Margherita di Savoia'
      },
      {
        value: 'Minervino Murge',
        label: 'Minervino Murge'
      },
      {
        value: 'San Ferdinando di Puglia',
        label: 'San Ferdinando di Puglia'
      },
      {
        value: 'Spinazzola',
        label: 'Spinazzola'
      },
      {
        value: 'Trani',
        label: 'Trani'
      },
      {
        value: 'Trinitapoli',
        label: 'Trinitapoli'
      },
      {
        value: 'Arbus',
        label: 'Arbus'
      },
      {
        value: 'Armungia',
        label: 'Armungia'
      },
      {
        value: 'Ballao',
        label: 'Ballao'
      },
      {
        value: 'Barrali',
        label: 'Barrali'
      },
      {
        value: 'Barumini',
        label: 'Barumini'
      },
      {
        value: 'Buggerru',
        label: 'Buggerru'
      },
      {
        value: 'Burcei',
        label: 'Burcei'
      },
      {
        value: 'Calasetta',
        label: 'Calasetta'
      },
      {
        value: 'Carbonia',
        label: 'Carbonia'
      },
      {
        value: 'Carloforte',
        label: 'Carloforte'
      },
      {
        value: 'Castiadas',
        label: 'Castiadas'
      },
      {
        value: 'Collinas',
        label: 'Collinas'
      },
      {
        value: 'Decimoputzu',
        label: 'Decimoputzu'
      },
      {
        value: 'Dolianova',
        label: 'Dolianova'
      },
      {
        value: 'Domus de Maria',
        label: 'Domus de Maria'
      },
      {
        value: 'Domusnovas',
        label: 'Domusnovas'
      },
      {
        value: 'Donori',
        label: 'Donori'
      },
      {
        value: 'Escalaplano',
        label: 'Escalaplano'
      },
      {
        value: 'Escolca',
        label: 'Escolca'
      },
      {
        value: 'Esterzili',
        label: 'Esterzili'
      },
      {
        value: 'Fluminimaggiore',
        label: 'Fluminimaggiore'
      },
      {
        value: 'Furtei',
        label: 'Furtei'
      },
      {
        value: 'Genoni',
        label: 'Genoni'
      },
      {
        value: 'Genuri',
        label: 'Genuri'
      },
      {
        value: 'Gergei',
        label: 'Gergei'
      },
      {
        value: 'Gesico',
        label: 'Gesico'
      },
      {
        value: 'Gesturi',
        label: 'Gesturi'
      },
      {
        value: 'Giba',
        label: 'Giba'
      },
      {
        value: 'Goni',
        label: 'Goni'
      },
      {
        value: 'Gonnesa',
        label: 'Gonnesa'
      },
      {
        value: 'Gonnosfanadiga',
        label: 'Gonnosfanadiga'
      },
      {
        value: 'Guamaggiore',
        label: 'Guamaggiore'
      },
      {
        value: 'Guasila',
        label: 'Guasila'
      },
      {
        value: 'Guspini',
        label: 'Guspini'
      },
      {
        value: 'Iglesias',
        label: 'Iglesias'
      },
      {
        value: 'Isili',
        label: 'Isili'
      },
      {
        value: 'Las Plassas',
        label: 'Las Plassas'
      },
      {
        value: 'Lunamatrona',
        label: 'Lunamatrona'
      },
      {
        value: 'Mandas',
        label: 'Mandas'
      },
      {
        value: 'Masainas',
        label: 'Masainas'
      },
      {
        value: 'Monastir',
        label: 'Monastir'
      },
      {
        value: 'Muravera',
        label: 'Muravera'
      },
      {
        value: 'Musei',
        label: 'Musei'
      },
      {
        value: 'Narcao',
        label: 'Narcao'
      },
      {
        value: 'Nuragus',
        label: 'Nuragus'
      },
      {
        value: 'Nurallao',
        label: 'Nurallao'
      },
      {
        value: 'Nuraminis',
        label: 'Nuraminis'
      },
      {
        value: 'Nurri',
        label: 'Nurri'
      },
      {
        value: 'Nuxis',
        label: 'Nuxis'
      },
      {
        value: 'Orroli',
        label: 'Orroli'
      },
      {
        value: 'Ortacesus',
        label: 'Ortacesus'
      },
      {
        value: 'Pabillonis',
        label: 'Pabillonis'
      },
      {
        value: 'Pauli Arbarei',
        label: 'Pauli Arbarei'
      },
      {
        value: 'Perdaxius',
        label: 'Perdaxius'
      },
      {
        value: 'Pimentel',
        label: 'Pimentel'
      },
      {
        value: 'Piscinas',
        label: 'Piscinas'
      },
      {
        value: 'Portoscuso',
        label: 'Portoscuso'
      },
      {
        value: 'Sadali',
        label: 'Sadali'
      },
      {
        value: 'Samassi',
        label: 'Samassi'
      },
      {
        value: 'Samatzai',
        label: 'Samatzai'
      },
      {
        value: 'San Basilio',
        label: 'San Basilio'
      },
      {
        value: 'San Gavino Monreale',
        label: 'San Gavino Monreale'
      },
      {
        value: 'San Giovanni Suergiu',
        label: 'San Giovanni Suergiu'
      },
      {
        value: 'San Nicolò Gerrei',
        label: 'San Nicolò Gerrei'
      },
      {
        value: 'San Sperate',
        label: 'San Sperate'
      },
      {
        value: 'San Vito',
        label: 'San Vito'
      },
      {
        value: 'Sanluri',
        label: 'Sanluri'
      },
      {
        value: 'Santadi',
        label: 'Santadi'
      },
      {
        value: 'Sant\'Andrea Frius',
        label: 'Sant\'Andrea Frius'
      },
      {
        value: 'Sant\'Anna Arresi',
        label: 'Sant\'Anna Arresi'
      },
      {
        value: 'Sant\'Antioco',
        label: 'Sant\'Antioco'
      },
      {
        value: 'Sardara',
        label: 'Sardara'
      },
      {
        value: 'Segariu',
        label: 'Segariu'
      },
      {
        value: 'Selegas',
        label: 'Selegas'
      },
      {
        value: 'Senorbì',
        label: 'Senorbì'
      },
      {
        value: 'Serdiana',
        label: 'Serdiana'
      },
      {
        value: 'Serramanna',
        label: 'Serramanna'
      },
      {
        value: 'Serrenti',
        label: 'Serrenti'
      },
      {
        value: 'Serri',
        label: 'Serri'
      },
      {
        value: 'Setzu',
        label: 'Setzu'
      },
      {
        value: 'Seui',
        label: 'Seui'
      },
      {
        value: 'Seulo',
        label: 'Seulo'
      },
      {
        value: 'Siddi',
        label: 'Siddi'
      },
      {
        value: 'Siliqua',
        label: 'Siliqua'
      },
      {
        value: 'Silius',
        label: 'Silius'
      },
      {
        value: 'Siurgus Donigala',
        label: 'Siurgus Donigala'
      },
      {
        value: 'Soleminis',
        label: 'Soleminis'
      },
      {
        value: 'Suelli',
        label: 'Suelli'
      },
      {
        value: 'Teulada',
        label: 'Teulada'
      },
      {
        value: 'Tratalias',
        label: 'Tratalias'
      },
      {
        value: 'Tuili',
        label: 'Tuili'
      },
      {
        value: 'Turri',
        label: 'Turri'
      },
      {
        value: 'Ussana',
        label: 'Ussana'
      },
      {
        value: 'Ussaramanna',
        label: 'Ussaramanna'
      },
      {
        value: 'Vallermosa',
        label: 'Vallermosa'
      },
      {
        value: 'Villacidro',
        label: 'Villacidro'
      },
      {
        value: 'Villamar',
        label: 'Villamar'
      },
      {
        value: 'Villamassargia',
        label: 'Villamassargia'
      },
      {
        value: 'Villanova Tulo',
        label: 'Villanova Tulo'
      },
      {
        value: 'Villanovaforru',
        label: 'Villanovaforru'
      },
      {
        value: 'Villanovafranca',
        label: 'Villanovafranca'
      },
      {
        value: 'Villaperuccio',
        label: 'Villaperuccio'
      },
      {
        value: 'Villaputzu',
        label: 'Villaputzu'
      },
      {
        value: 'Villasalto',
        label: 'Villasalto'
      },
      {
        value: 'Villasimius',
        label: 'Villasimius'
      },
      {
        value: 'Villasor',
        label: 'Villasor'
      },
      {
        value: 'Villaspeciosa',
        label: 'Villaspeciosa'
      }
    ],
    loading: false,
    error: null,
    lastLoadTime: 1755613908941
  },
  pricingState: {
    unitPrices: {
      purchase: {
        monosplit: 100,
        dualsplit: 100,
        trialsplit: 150
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
        monosplit: 100,
        dualsplit: 100,
        trialsplit: 150,
        total: 350
      },
      removal: {
        monosplit: 60,
        dualsplit: 0,
        trialsplit: 0,
        total: 60
      },
      cleaning: {
        monosplit: 0,
        dualsplit: 0,
        trialsplit: 220,
        total: 220
      },
      installationTotal: 630,
      productsTotal: 5087.280000000001,
      grandTotal: 5717.280000000001
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
        price: '1607.76',
        currency: '€',
        priceNote: 'IVA inclusa',
        checkboxLabel: 'Scegli questa soluzione',
        detailsLink: 'Visualizza la scheda dettagli del prodotto',
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
        price: '1511.76',
        currency: '€',
        priceNote: 'IVA inclusa',
        checkboxLabel: 'Scegli questa soluzione',
        detailsLink: 'Visualizza la scheda dettagli del prodotto',
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
        price: '2519.76',
        currency: '€',
        priceNote: 'IVA inclusa',
        checkboxLabel: 'Scegli questa soluzione',
        detailsLink: 'Visualizza la scheda dettagli del prodotto',
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
        price: '3671.76',
        currency: '€',
        priceNote: 'IVA inclusa',
        checkboxLabel: 'Scegli questa soluzione',
        detailsLink: 'Visualizza la scheda dettagli del prodotto',
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
        price: '1007.76',
        currency: '€',
        priceNote: 'IVA inclusa',
        checkboxLabel: 'Scegli questa soluzione',
        detailsLink: 'Visualizza la scheda dettagli del prodotto',
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
        price: '959.76',
        currency: '€',
        priceNote: 'IVA inclusa',
        checkboxLabel: 'Scegli questa soluzione',
        detailsLink: 'Visualizza la scheda dettagli del prodotto',
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
        price: '1871.76',
        currency: '€',
        priceNote: 'IVA inclusa',
        checkboxLabel: 'Scegli questa soluzione',
        detailsLink: 'Visualizza la scheda dettagli del prodotto',
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
        price: '2543.71',
        currency: '€',
        priceNote: 'IVA inclusa',
        checkboxLabel: 'Scegli questa soluzione',
        detailsLink: 'Visualizza la scheda dettagli del prodotto',
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
        price: '1223.76',
        currency: '€',
        priceNote: 'IVA inclusa',
        checkboxLabel: 'Scegli questa soluzione',
        detailsLink: 'Visualizza la scheda dettagli del prodotto',
        recommendationLevel: 'half',
        recommendationText: 'Miglio rapporto qualità/prezzo',
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
        price: '983.76',
        currency: '€',
        priceNote: 'IVA inclusa',
        checkboxLabel: 'Scegli questa soluzione',
        detailsLink: 'Visualizza la scheda dettagli del prodotto',
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
        price: '935.76',
        currency: '€',
        priceNote: 'IVA inclusa',
        checkboxLabel: 'Scegli questa soluzione',
        detailsLink: 'Visualizza la scheda dettagli del prodotto',
        showRecommendationBadge: false
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
        price: '935.76',
        currency: '€',
        priceNote: 'IVA inclusa',
        checkboxLabel: 'Scegli questa soluzione',
        detailsLink: 'Visualizza la scheda dettagli del prodotto',
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
        price: '1223.76',
        currency: '€',
        priceNote: 'IVA inclusa',
        checkboxLabel: 'Scegli questa soluzione',
        detailsLink: 'Visualizza la scheda dettagli del prodotto',
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
        price: '983.76',
        currency: '€',
        priceNote: 'IVA inclusa',
        checkboxLabel: 'Scegli questa soluzione',
        detailsLink: 'Visualizza la scheda dettagli del prodotto',
        recommendationLevel: 'empty',
        recommendationText: 'Più conveniente',
        showRecommendationBadge: true
      },
      {
        id: 'comfee-clima-maestrale-abw09a-9000-btu/h-by-midea',
        hash: 'Y29tZmVlLWNsaW1hLW1hZXN0cmFsZS1hYncwOWEtOTAwMC1idHUvaC1ieS1taWRlYQ==',
        productName: 'Comfee Clima Maestrale ABW09A  9000 btu/h by Midea',
        productBrand: 'Comfee',
        productImage: 'https://greenovationdashboard.azurewebsites.net/Content/climatizzatore-comfee-maestrale-abw09a-9000-btu.webp',
        productImageAlt: 'Comfee Clima Maestrale ABW09A  9000 btu/h by Midea',
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
        price: '1079.76',
        currency: '€',
        priceNote: 'IVA inclusa',
        checkboxLabel: 'Scegli questa soluzione',
        detailsLink: 'Visualizza la scheda dettagli del prodotto',
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
        price: '1103.76',
        currency: '€',
        priceNote: 'IVA inclusa',
        checkboxLabel: 'Scegli questa soluzione',
        detailsLink: 'Visualizza la scheda dettagli del prodotto',
        showRecommendationBadge: false
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
        price: '1511.76',
        currency: '€',
        priceNote: 'IVA inclusa',
        checkboxLabel: 'Scegli questa soluzione',
        detailsLink: 'Visualizza la scheda dettagli del prodotto',
        recommendationLevel: 'empty',
        recommendationText: 'Più conveniente',
        showRecommendationBadge: true
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
        price: '1559.76',
        currency: '€',
        priceNote: 'IVA inclusa',
        checkboxLabel: 'Scegli questa soluzione',
        detailsLink: 'Visualizza la scheda dettagli del prodotto',
        showRecommendationBadge: false
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
        price: '1919.76',
        currency: '€',
        priceNote: 'IVA inclusa',
        checkboxLabel: 'Scegli questa soluzione',
        detailsLink: 'Visualizza la scheda dettagli del prodotto',
        recommendationLevel: 'empty',
        recommendationText: 'Più conveniente',
        showRecommendationBadge: true
      }
    ],
    loading: false,
    error: null,
    selectedBrand: null,
    selectedCity: 'Romans d\'Isonzo'
  },
  report: {
    loading: false,
    error: null,
    data: null,
    lastRequestTimestamp: null
  },
  validation: {
    errors: [],
    canProceed: true
  }
}