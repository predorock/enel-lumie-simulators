export default {
    _initialized: true,
    currentStep: 3,
    currentPageId: 'scelta-climatizzatore-monosplit-0',
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
                        containerClassName: 'mt-auto mb-4 self-end w-full'
                    }
                }
            ],
            components: [
                {
                    "type": "StepIndicator",
                    "props": {
                        "acConfigurationKey": "monosplit_0"
                    }
                },
                {
                    type: 'DescriptionBox',
                    props: {
                        title: 'Scelta del Monosplit',
                        description: 'Nuova installazione con predisposizione',
                        icon: 'monosplit',
                        step: '1/3',
                        stepColor: 'purple',
                        layout: 'horizontal'
                    }
                },
                {
                    type: 'InfoBanner',
                    props: {
                        title: 'Questo Monosplit deve climatizzare una stanza di 23 m²',
                        icon: 'room',
                        variant: 'info'
                    }
                },
                {
                    type: 'BrandSelector',
                    props: {
                        title: 'Filtra prodotti per brand o per investimento:',
                        className: 'grid grid-cols-3 gap-4'
                    }
                },
                {
                    type: 'InvestmentSelector',
                    props: {
                        className: 'grid grid-cols-3 gap-4'
                    }
                },
                {
                    type: 'Divider',
                    props: {
                        className: 'py-6'
                    }
                },
                {
                    type: 'AcProductDisplayContainer',
                    props: {
                        showLoadingStates: true,
                        maxProducts: 100,
                        gridClassName: 'grid grid-cols-1 md:grid-cols-2 gap-6',
                        className: '',
                        configKey: 'monosplit_0',
                        stateProperty: 'airConditioningConfigs',
                        filters: ["type", "isAlwaysOn", "brand", "category", "monosplit"],
                        showNoProductsMessage: "Controlla la sezione sotto"
                    }
                },
                {
                    type: 'Divider',
                    props: {
                        className: 'my-12'
                    }
                },
                {
                    type: 'DescriptionBox',
                    props: {
                        title: 'Il prodotto consigliato non soddisfa il cliente?',
                        titleSize: 'lg',
                        description: 'Proponi queste soluzioni alternative del prodotto'
                    }
                },
                {
                    type: 'AcProductDisplayContainer',
                    props: {
                        showLoadingStates: true,
                        maxProducts: 100,
                        gridClassName: 'grid grid-cols-1 md:grid-cols-2 gap-6',
                        className: 'mb-8',
                        showFeatures: false,
                        configKey: 'monosplit_0',
                        stateProperty: 'airConditioningConfigs',
                        filters: ["type", "isNotAlwaysOn"],
                        showNoProductsMessage: "Controlla la sezione always on"
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
                        containerClassName: 'mt-auto mb-4 self-end w-full'
                    }
                }
            ],
            components: [
                {
                    type: 'DescriptionBox',
                    props: {
                        title: 'Scelta del Dualsplit',
                        description: 'Nuova installazione senza predisposizione',
                        icon: 'dualsplit',
                        step: '2/3',
                        stepColor: 'purple',
                        layout: 'horizontal'
                    }
                },
                {
                    type: 'InfoBanner',
                    props: {
                        title: 'Questo Dualsplit deve climatizzare una stanza di 45 m²',
                        icon: 'room',
                        variant: 'info'
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
                    type: 'Divider',
                    props: {
                        className: 'py-6'
                    }
                },
                {
                    type: 'AcProductDisplayContainer',
                    props: {
                        showLoadingStates: true,
                        maxProducts: 100,
                        gridClassName: 'grid grid-cols-1 md:grid-cols-2 gap-6',
                        className: '',
                        configKey: 'dualsplit_0',
                        stateProperty: 'airConditioningConfigs',
                        alwaysOn: true
                    }
                },
                {
                    type: 'Divider',
                    props: {
                        className: 'my-12'
                    }
                },
                {
                    type: 'DescriptionBox',
                    props: {
                        title: 'Il prodotto consigliato non soddisfa il cliente?',
                        titleSize: 'lg',
                        description: 'Proponi queste soluzioni alternative del prodotto'
                    }
                },
                {
                    type: 'AcProductDisplayContainer',
                    props: {
                        showLoadingStates: true,
                        maxProducts: 100,
                        gridClassName: 'grid grid-cols-1 md:grid-cols-2 gap-6',
                        className: 'mb-8',
                        showFeatures: false,
                        configKey: 'dualsplit_0',
                        stateProperty: 'airConditioningConfigs',
                        alwaysOn: false
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
                        containerClassName: 'mt-auto mb-4 self-end w-full'
                    }
                }
            ],
            components: [
                {
                    type: 'DescriptionBox',
                    props: {
                        title: 'Scelta del Trialsplit',
                        description: 'Nuova installazione senza predisposizione',
                        icon: 'trialsplit',
                        step: '3/3',
                        stepColor: 'purple',
                        layout: 'horizontal'
                    }
                },
                {
                    type: 'InfoBanner',
                    props: {
                        title: 'Questo Trialsplit deve climatizzare una stanza di 56 m²',
                        icon: 'room',
                        variant: 'info'
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
                    type: 'Divider',
                    props: {
                        className: 'py-6'
                    }
                },
                {
                    type: 'AcProductDisplayContainer',
                    props: {
                        showLoadingStates: true,
                        maxProducts: 100,
                        gridClassName: 'grid grid-cols-1 md:grid-cols-2 gap-6',
                        className: '',
                        configKey: 'trialsplit_0',
                        stateProperty: 'airConditioningConfigs',
                        alwaysOn: true
                    }
                },
                {
                    type: 'Divider',
                    props: {
                        className: 'my-12'
                    }
                },
                {
                    type: 'DescriptionBox',
                    props: {
                        title: 'Il prodotto consigliato non soddisfa il cliente?',
                        titleSize: 'lg',
                        description: 'Proponi queste soluzioni alternative del prodotto'
                    }
                },
                {
                    type: 'AcProductDisplayContainer',
                    props: {
                        showLoadingStates: true,
                        maxProducts: 100,
                        gridClassName: 'grid grid-cols-1 md:grid-cols-2 gap-6',
                        className: 'mb-8',
                        showFeatures: false,
                        configKey: 'trialsplit_0',
                        stateProperty: 'airConditioningConfigs',
                        alwaysOn: false
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
        storeCity: 'Milano',
        airconditioningQuantities: {
            monosplit: 1,
            dualsplit: 1,
            trialsplit: 1
        },
        airConditioningConfigs: {
            monosplit_0: {
                installationType: 'nuova_con_predisposizione',
                roomSize: '28',
                hasWarning: false,

            },
            dualsplit_0: {
                installationType: 'nuova_senza_predisposizione',
                roomSize: '45',
                hasWarning: false,
            },
            trialsplit_0: {
                installationType: 'nuova_senza_predisposizione',
                roomSize: '56',
                hasWarning: false,
            }
        },
        needsRemoval: true,
        removalQuantities: {
            monosplit: 1
        }
    },
    cityState: {
        cities: [
            {
                value: 'Abano Terme',
                label: 'Abano Terme'
            },
            {
                value: 'Abbadia Cerreto',
                label: 'Abbadia Cerreto'
            },
            {
                value: 'Abbadia Lariana',
                label: 'Abbadia Lariana'
            },
            {
                value: 'Abbadia San Salvatore',
                label: 'Abbadia San Salvatore'
            },
            {
                value: 'Abbasanta',
                label: 'Abbasanta'
            },
            {
                value: 'Abbateggio',
                label: 'Abbateggio'
            },
            {
                value: 'Abbiategrasso',
                label: 'Abbiategrasso'
            },
            {
                value: 'Abetone Cutigliano',
                label: 'Abetone Cutigliano'
            },
            {
                value: 'Abriola',
                label: 'Abriola'
            },
            {
                value: 'Acate',
                label: 'Acate'
            },
            {
                value: 'Accadia',
                label: 'Accadia'
            },
            {
                value: 'Acceglio',
                label: 'Acceglio'
            },
            {
                value: 'Accettura',
                label: 'Accettura'
            },
            {
                value: 'Acciano',
                label: 'Acciano'
            },
            {
                value: 'Accumoli',
                label: 'Accumoli'
            },
            {
                value: 'Acerenza',
                label: 'Acerenza'
            },
            {
                value: 'Acerno',
                label: 'Acerno'
            },
            {
                value: 'Acerra',
                label: 'Acerra'
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
                value: 'Aci Sant\'Antonio',
                label: 'Aci Sant\'Antonio'
            },
            {
                value: 'Acireale',
                label: 'Acireale'
            },
            {
                value: 'Acquafondata',
                label: 'Acquafondata'
            },
            {
                value: 'Acquaformosa',
                label: 'Acquaformosa'
            },
            {
                value: 'Acquafredda',
                label: 'Acquafredda'
            },
            {
                value: 'Acqualagna',
                label: 'Acqualagna'
            },
            {
                value: 'Acquanegra Cremonese',
                label: 'Acquanegra Cremonese'
            },
            {
                value: 'Acquanegra sul Chiese',
                label: 'Acquanegra sul Chiese'
            },
            {
                value: 'Acquapendente',
                label: 'Acquapendente'
            },
            {
                value: 'Acquappesa',
                label: 'Acquappesa'
            },
            {
                value: 'Acquaro',
                label: 'Acquaro'
            },
            {
                value: 'Acquasanta Terme',
                label: 'Acquasanta Terme'
            },
            {
                value: 'Acquasparta',
                label: 'Acquasparta'
            },
            {
                value: 'Acquaviva Collecroce',
                label: 'Acquaviva Collecroce'
            },
            {
                value: 'Acquaviva d\'Isernia',
                label: 'Acquaviva d\'Isernia'
            },
            {
                value: 'Acquaviva delle Fonti',
                label: 'Acquaviva delle Fonti'
            },
            {
                value: 'Acquaviva Picena',
                label: 'Acquaviva Picena'
            },
            {
                value: 'Acquaviva Platani',
                label: 'Acquaviva Platani'
            },
            {
                value: 'Acquedolci',
                label: 'Acquedolci'
            },
            {
                value: 'Acqui Terme',
                label: 'Acqui Terme'
            },
            {
                value: 'Acri',
                label: 'Acri'
            },
            {
                value: 'Acuto',
                label: 'Acuto'
            },
            {
                value: 'Adelfia',
                label: 'Adelfia'
            },
            {
                value: 'Adrano',
                label: 'Adrano'
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
                value: 'Adria',
                label: 'Adria'
            },
            {
                value: 'Adro',
                label: 'Adro'
            },
            {
                value: 'Affi',
                label: 'Affi'
            },
            {
                value: 'Affile',
                label: 'Affile'
            },
            {
                value: 'Afragola',
                label: 'Afragola'
            },
            {
                value: 'Africo',
                label: 'Africo'
            },
            {
                value: 'Agazzano',
                label: 'Agazzano'
            },
            {
                value: 'Agerola',
                label: 'Agerola'
            },
            {
                value: 'Aggius',
                label: 'Aggius'
            },
            {
                value: 'Agira',
                label: 'Agira'
            },
            {
                value: 'Agliana',
                label: 'Agliana'
            },
            {
                value: 'Agliano Terme',
                label: 'Agliano Terme'
            },
            {
                value: 'Agliè',
                label: 'Agliè'
            },
            {
                value: 'Aglientu',
                label: 'Aglientu'
            },
            {
                value: 'Agna',
                label: 'Agna'
            },
            {
                value: 'Agnadello',
                label: 'Agnadello'
            },
            {
                value: 'Agnana Calabra',
                label: 'Agnana Calabra'
            },
            {
                value: 'Agnone',
                label: 'Agnone'
            },
            {
                value: 'Agnosine',
                label: 'Agnosine'
            },
            {
                value: 'Agordo',
                label: 'Agordo'
            },
            {
                value: 'Agosta',
                label: 'Agosta'
            },
            {
                value: 'Agra',
                label: 'Agra'
            },
            {
                value: 'Agrate Brianza',
                label: 'Agrate Brianza'
            },
            {
                value: 'Agrate Conturbia',
                label: 'Agrate Conturbia'
            },
            {
                value: 'Agrigento',
                label: 'Agrigento'
            },
            {
                value: 'Agropoli',
                label: 'Agropoli'
            },
            {
                value: 'Agugliano',
                label: 'Agugliano'
            },
            {
                value: 'Agugliaro',
                label: 'Agugliaro'
            },
            {
                value: 'Aicurzio',
                label: 'Aicurzio'
            },
            {
                value: 'Aidomaggiore',
                label: 'Aidomaggiore'
            },
            {
                value: 'Aidone',
                label: 'Aidone'
            },
            {
                value: 'Aielli',
                label: 'Aielli'
            },
            {
                value: 'Aiello Calabro',
                label: 'Aiello Calabro'
            },
            {
                value: 'Aiello del Friuli',
                label: 'Aiello del Friuli'
            },
            {
                value: 'Aiello del Sabato',
                label: 'Aiello del Sabato'
            },
            {
                value: 'Aieta',
                label: 'Aieta'
            },
            {
                value: 'Ailano',
                label: 'Ailano'
            },
            {
                value: 'Ailoche',
                label: 'Ailoche'
            },
            {
                value: 'Airasca',
                label: 'Airasca'
            },
            {
                value: 'Airola',
                label: 'Airola'
            },
            {
                value: 'Airole',
                label: 'Airole'
            },
            {
                value: 'Airuno',
                label: 'Airuno'
            },
            {
                value: 'Aisone',
                label: 'Aisone'
            },
            {
                value: 'Ala',
                label: 'Ala'
            },
            {
                value: 'Alà dei Sardi',
                label: 'Alà dei Sardi'
            },
            {
                value: 'Ala di Stura',
                label: 'Ala di Stura'
            },
            {
                value: 'Alagna',
                label: 'Alagna'
            },
            {
                value: 'Alagna Valsesia',
                label: 'Alagna Valsesia'
            },
            {
                value: 'Alanno',
                label: 'Alanno'
            },
            {
                value: 'Alano di Piave',
                label: 'Alano di Piave'
            },
            {
                value: 'Alassio',
                label: 'Alassio'
            },
            {
                value: 'Alatri',
                label: 'Alatri'
            },
            {
                value: 'Alba',
                label: 'Alba'
            },
            {
                value: 'Alba Adriatica',
                label: 'Alba Adriatica'
            },
            {
                value: 'Albagiara',
                label: 'Albagiara'
            },
            {
                value: 'Albairate',
                label: 'Albairate'
            },
            {
                value: 'Albanella',
                label: 'Albanella'
            },
            {
                value: 'Albano di Lucania',
                label: 'Albano di Lucania'
            },
            {
                value: 'Albano Laziale',
                label: 'Albano Laziale'
            },
            {
                value: 'Albano Sant\'Alessandro',
                label: 'Albano Sant\'Alessandro'
            },
            {
                value: 'Albano Vercellese',
                label: 'Albano Vercellese'
            },
            {
                value: 'Albaredo d\'Adige',
                label: 'Albaredo d\'Adige'
            },
            {
                value: 'Albaredo per San Marco',
                label: 'Albaredo per San Marco'
            },
            {
                value: 'Albareto',
                label: 'Albareto'
            },
            {
                value: 'Albaretto della Torre',
                label: 'Albaretto della Torre'
            },
            {
                value: 'Albavilla',
                label: 'Albavilla'
            },
            {
                value: 'Albenga',
                label: 'Albenga'
            },
            {
                value: 'Albera Ligure',
                label: 'Albera Ligure'
            },
            {
                value: 'Alberobello',
                label: 'Alberobello'
            },
            {
                value: 'Alberona',
                label: 'Alberona'
            },
            {
                value: 'Albese con Cassano',
                label: 'Albese con Cassano'
            },
            {
                value: 'Albettone',
                label: 'Albettone'
            },
            {
                value: 'Albi',
                label: 'Albi'
            },
            {
                value: 'Albiano',
                label: 'Albiano'
            },
            {
                value: 'Albiano d\'Ivrea',
                label: 'Albiano d\'Ivrea'
            },
            {
                value: 'Albiate',
                label: 'Albiate'
            },
            {
                value: 'Albidona',
                label: 'Albidona'
            },
            {
                value: 'Albignasego',
                label: 'Albignasego'
            },
            {
                value: 'Albinea',
                label: 'Albinea'
            },
            {
                value: 'Albino',
                label: 'Albino'
            },
            {
                value: 'Albiolo',
                label: 'Albiolo'
            },
            {
                value: 'Albisola Superiore',
                label: 'Albisola Superiore'
            },
            {
                value: 'Albissola Marina',
                label: 'Albissola Marina'
            },
            {
                value: 'Albizzate',
                label: 'Albizzate'
            },
            {
                value: 'Albonese',
                label: 'Albonese'
            },
            {
                value: 'Albosaggia',
                label: 'Albosaggia'
            },
            {
                value: 'Albugnano',
                label: 'Albugnano'
            },
            {
                value: 'Albuzzano',
                label: 'Albuzzano'
            },
            {
                value: 'Alcamo',
                label: 'Alcamo'
            },
            {
                value: 'Alcara li Fusi',
                label: 'Alcara li Fusi'
            },
            {
                value: 'Aldeno',
                label: 'Aldeno'
            },
            {
                value: 'Aldino',
                label: 'Aldino'
            },
            {
                value: 'Ales',
                label: 'Ales'
            },
            {
                value: 'Alessandria',
                label: 'Alessandria'
            },
            {
                value: 'Alessandria del Carretto',
                label: 'Alessandria del Carretto'
            },
            {
                value: 'Alessandria della Rocca',
                label: 'Alessandria della Rocca'
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
                value: 'Alfano',
                label: 'Alfano'
            },
            {
                value: 'Alfedena',
                label: 'Alfedena'
            },
            {
                value: 'Alfianello',
                label: 'Alfianello'
            },
            {
                value: 'Alfiano Natta',
                label: 'Alfiano Natta'
            },
            {
                value: 'Alfonsine',
                label: 'Alfonsine'
            },
            {
                value: 'Alghero',
                label: 'Alghero'
            },
            {
                value: 'Algua',
                label: 'Algua'
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
                value: 'Alia',
                label: 'Alia'
            },
            {
                value: 'Aliano',
                label: 'Aliano'
            },
            {
                value: 'Alice Bel Colle',
                label: 'Alice Bel Colle'
            },
            {
                value: 'Alice Castello',
                label: 'Alice Castello'
            },
            {
                value: 'Alife',
                label: 'Alife'
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
                value: 'Allai',
                label: 'Allai'
            },
            {
                value: 'Alleghe',
                label: 'Alleghe'
            },
            {
                value: 'Allein',
                label: 'Allein'
            },
            {
                value: 'Allerona',
                label: 'Allerona'
            },
            {
                value: 'Alliste',
                label: 'Alliste'
            },
            {
                value: 'Allumiere',
                label: 'Allumiere'
            },
            {
                value: 'Alluvioni Piovera',
                label: 'Alluvioni Piovera'
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
                value: 'Almese',
                label: 'Almese'
            },
            {
                value: 'Alonte',
                label: 'Alonte'
            },
            {
                value: 'Alpago',
                label: 'Alpago'
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
                value: 'Alseno',
                label: 'Alseno'
            },
            {
                value: 'Alserio',
                label: 'Alserio'
            },
            {
                value: 'Alta Val Tidone',
                label: 'Alta Val Tidone'
            },
            {
                value: 'Alta Valle Intelvi',
                label: 'Alta Valle Intelvi'
            },
            {
                value: 'Altamura',
                label: 'Altamura'
            },
            {
                value: 'Altare',
                label: 'Altare'
            },
            {
                value: 'Altavalle',
                label: 'Altavalle'
            },
            {
                value: 'Altavilla Irpina',
                label: 'Altavilla Irpina'
            },
            {
                value: 'Altavilla Milicia',
                label: 'Altavilla Milicia'
            },
            {
                value: 'Altavilla Monferrato',
                label: 'Altavilla Monferrato'
            },
            {
                value: 'Altavilla Silentina',
                label: 'Altavilla Silentina'
            },
            {
                value: 'Altavilla Vicentina',
                label: 'Altavilla Vicentina'
            },
            {
                value: 'Altidona',
                label: 'Altidona'
            },
            {
                value: 'Altilia',
                label: 'Altilia'
            },
            {
                value: 'Altino',
                label: 'Altino'
            },
            {
                value: 'Altissimo',
                label: 'Altissimo'
            },
            {
                value: 'Altivole',
                label: 'Altivole'
            },
            {
                value: 'Alto',
                label: 'Alto'
            },
            {
                value: 'Alto Reno Terme',
                label: 'Alto Reno Terme'
            },
            {
                value: 'Alto Sermenza',
                label: 'Alto Sermenza'
            },
            {
                value: 'Altofonte',
                label: 'Altofonte'
            },
            {
                value: 'Altomonte',
                label: 'Altomonte'
            },
            {
                value: 'Altopascio',
                label: 'Altopascio'
            },
            {
                value: 'Altopiano della Vigolana',
                label: 'Altopiano della Vigolana'
            },
            {
                value: 'Alviano',
                label: 'Alviano'
            },
            {
                value: 'Alvignano',
                label: 'Alvignano'
            },
            {
                value: 'Alvito',
                label: 'Alvito'
            },
            {
                value: 'Alzano Lombardo',
                label: 'Alzano Lombardo'
            },
            {
                value: 'Alzano Scrivia',
                label: 'Alzano Scrivia'
            },
            {
                value: 'Alzate Brianza',
                label: 'Alzate Brianza'
            },
            {
                value: 'Amalfi',
                label: 'Amalfi'
            },
            {
                value: 'Amandola',
                label: 'Amandola'
            },
            {
                value: 'Amantea',
                label: 'Amantea'
            },
            {
                value: 'Amaro',
                label: 'Amaro'
            },
            {
                value: 'Amaroni',
                label: 'Amaroni'
            },
            {
                value: 'Amaseno',
                label: 'Amaseno'
            },
            {
                value: 'Amato',
                label: 'Amato'
            },
            {
                value: 'Amatrice',
                label: 'Amatrice'
            },
            {
                value: 'Ambivere',
                label: 'Ambivere'
            },
            {
                value: 'Amblar-Don',
                label: 'Amblar-Don'
            },
            {
                value: 'Ameglia',
                label: 'Ameglia'
            },
            {
                value: 'Amelia',
                label: 'Amelia'
            },
            {
                value: 'Amendolara',
                label: 'Amendolara'
            },
            {
                value: 'Ameno',
                label: 'Ameno'
            },
            {
                value: 'Amorosi',
                label: 'Amorosi'
            },
            {
                value: 'Ampezzo',
                label: 'Ampezzo'
            },
            {
                value: 'Anacapri',
                label: 'Anacapri'
            },
            {
                value: 'Anagni',
                label: 'Anagni'
            },
            {
                value: 'Ancarano',
                label: 'Ancarano'
            },
            {
                value: 'Ancona',
                label: 'Ancona'
            },
            {
                value: 'Andali',
                label: 'Andali'
            },
            {
                value: 'Andalo',
                label: 'Andalo'
            },
            {
                value: 'Andalo Valtellino',
                label: 'Andalo Valtellino'
            },
            {
                value: 'Andezeno',
                label: 'Andezeno'
            },
            {
                value: 'Andora',
                label: 'Andora'
            },
            {
                value: 'Andorno Micca',
                label: 'Andorno Micca'
            },
            {
                value: 'Andrano',
                label: 'Andrano'
            },
            {
                value: 'Andrate',
                label: 'Andrate'
            },
            {
                value: 'Andreis',
                label: 'Andreis'
            },
            {
                value: 'Andretta',
                label: 'Andretta'
            },
            {
                value: 'Andria',
                label: 'Andria'
            },
            {
                value: 'Andriano',
                label: 'Andriano'
            },
            {
                value: 'Anela',
                label: 'Anela'
            },
            {
                value: 'Anfo',
                label: 'Anfo'
            },
            {
                value: 'Angera',
                label: 'Angera'
            },
            {
                value: 'Anghiari',
                label: 'Anghiari'
            },
            {
                value: 'Angiari',
                label: 'Angiari'
            },
            {
                value: 'Angolo Terme',
                label: 'Angolo Terme'
            },
            {
                value: 'Angri',
                label: 'Angri'
            },
            {
                value: 'Angrogna',
                label: 'Angrogna'
            },
            {
                value: 'Anguillara Sabazia',
                label: 'Anguillara Sabazia'
            },
            {
                value: 'Anguillara Veneta',
                label: 'Anguillara Veneta'
            },
            {
                value: 'Annicco',
                label: 'Annicco'
            },
            {
                value: 'Annone di Brianza',
                label: 'Annone di Brianza'
            },
            {
                value: 'Annone Veneto',
                label: 'Annone Veneto'
            },
            {
                value: 'Anoia',
                label: 'Anoia'
            },
            {
                value: 'Antegnate',
                label: 'Antegnate'
            },
            {
                value: 'Anterivo',
                label: 'Anterivo'
            },
            {
                value: 'Antey-Saint-André',
                label: 'Antey-Saint-André'
            },
            {
                value: 'Anticoli Corrado',
                label: 'Anticoli Corrado'
            },
            {
                value: 'Antignano',
                label: 'Antignano'
            },
            {
                value: 'Antillo',
                label: 'Antillo'
            },
            {
                value: 'Antonimina',
                label: 'Antonimina'
            },
            {
                value: 'Antrodoco',
                label: 'Antrodoco'
            },
            {
                value: 'Antrona Schieranco',
                label: 'Antrona Schieranco'
            },
            {
                value: 'Anversa degli Abruzzi',
                label: 'Anversa degli Abruzzi'
            },
            {
                value: 'Anzano del Parco',
                label: 'Anzano del Parco'
            },
            {
                value: 'Anzano di Puglia',
                label: 'Anzano di Puglia'
            },
            {
                value: 'Anzi',
                label: 'Anzi'
            },
            {
                value: 'Anzio',
                label: 'Anzio'
            },
            {
                value: 'Anzola d\'Ossola',
                label: 'Anzola d\'Ossola'
            },
            {
                value: 'Anzola dell\'Emilia',
                label: 'Anzola dell\'Emilia'
            },
            {
                value: 'Aosta',
                label: 'Aosta'
            },
            {
                value: 'Apecchio',
                label: 'Apecchio'
            },
            {
                value: 'Apice',
                label: 'Apice'
            },
            {
                value: 'Apiro',
                label: 'Apiro'
            },
            {
                value: 'Apollosa',
                label: 'Apollosa'
            },
            {
                value: 'Appiano Gentile',
                label: 'Appiano Gentile'
            },
            {
                value: 'Appiano sulla strada del vino',
                label: 'Appiano sulla strada del vino'
            },
            {
                value: 'Appignano',
                label: 'Appignano'
            },
            {
                value: 'Appignano del Tronto',
                label: 'Appignano del Tronto'
            },
            {
                value: 'Aprica',
                label: 'Aprica'
            },
            {
                value: 'Apricale',
                label: 'Apricale'
            },
            {
                value: 'Apricena',
                label: 'Apricena'
            },
            {
                value: 'Aprigliano',
                label: 'Aprigliano'
            },
            {
                value: 'Aprilia',
                label: 'Aprilia'
            },
            {
                value: 'Aquara',
                label: 'Aquara'
            },
            {
                value: 'Aquila d\'Arroscia',
                label: 'Aquila d\'Arroscia'
            },
            {
                value: 'Aquileia',
                label: 'Aquileia'
            },
            {
                value: 'Aquilonia',
                label: 'Aquilonia'
            },
            {
                value: 'Aquino',
                label: 'Aquino'
            },
            {
                value: 'Aradeo',
                label: 'Aradeo'
            },
            {
                value: 'Aragona',
                label: 'Aragona'
            },
            {
                value: 'Aramengo',
                label: 'Aramengo'
            },
            {
                value: 'Arba',
                label: 'Arba'
            },
            {
                value: 'Arborea',
                label: 'Arborea'
            },
            {
                value: 'Arborio',
                label: 'Arborio'
            },
            {
                value: 'Arbus',
                label: 'Arbus'
            },
            {
                value: 'Arcade',
                label: 'Arcade'
            },
            {
                value: 'Arce',
                label: 'Arce'
            },
            {
                value: 'Arcene',
                label: 'Arcene'
            },
            {
                value: 'Arcevia',
                label: 'Arcevia'
            },
            {
                value: 'Archi',
                label: 'Archi'
            },
            {
                value: 'Arcidosso',
                label: 'Arcidosso'
            },
            {
                value: 'Arcinazzo Romano',
                label: 'Arcinazzo Romano'
            },
            {
                value: 'Arcisate',
                label: 'Arcisate'
            },
            {
                value: 'Arco',
                label: 'Arco'
            },
            {
                value: 'Arcola',
                label: 'Arcola'
            },
            {
                value: 'Arcole',
                label: 'Arcole'
            },
            {
                value: 'Arconate',
                label: 'Arconate'
            },
            {
                value: 'Arcore',
                label: 'Arcore'
            },
            {
                value: 'Arcugnano',
                label: 'Arcugnano'
            },
            {
                value: 'Ardara',
                label: 'Ardara'
            },
            {
                value: 'Ardauli',
                label: 'Ardauli'
            },
            {
                value: 'Ardea',
                label: 'Ardea'
            },
            {
                value: 'Ardenno',
                label: 'Ardenno'
            },
            {
                value: 'Ardesio',
                label: 'Ardesio'
            },
            {
                value: 'Ardore',
                label: 'Ardore'
            },
            {
                value: 'Arena',
                label: 'Arena'
            },
            {
                value: 'Arena Po',
                label: 'Arena Po'
            },
            {
                value: 'Arenzano',
                label: 'Arenzano'
            },
            {
                value: 'Arese',
                label: 'Arese'
            },
            {
                value: 'Arezzo',
                label: 'Arezzo'
            },
            {
                value: 'Argegno',
                label: 'Argegno'
            },
            {
                value: 'Argelato',
                label: 'Argelato'
            },
            {
                value: 'Argenta',
                label: 'Argenta'
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
                value: 'Argusto',
                label: 'Argusto'
            },
            {
                value: 'Ari',
                label: 'Ari'
            },
            {
                value: 'Ariano Irpino',
                label: 'Ariano Irpino'
            },
            {
                value: 'Ariano nel Polesine',
                label: 'Ariano nel Polesine'
            },
            {
                value: 'Ariccia',
                label: 'Ariccia'
            },
            {
                value: 'Arielli',
                label: 'Arielli'
            },
            {
                value: 'Arienzo',
                label: 'Arienzo'
            },
            {
                value: 'Arignano',
                label: 'Arignano'
            },
            {
                value: 'Aritzo',
                label: 'Aritzo'
            },
            {
                value: 'Arizzano',
                label: 'Arizzano'
            },
            {
                value: 'Arlena di Castro',
                label: 'Arlena di Castro'
            },
            {
                value: 'Arluno',
                label: 'Arluno'
            },
            {
                value: 'Armeno',
                label: 'Armeno'
            },
            {
                value: 'Armento',
                label: 'Armento'
            },
            {
                value: 'Armo',
                label: 'Armo'
            },
            {
                value: 'Armungia',
                label: 'Armungia'
            },
            {
                value: 'Arnad',
                label: 'Arnad'
            },
            {
                value: 'Arnara',
                label: 'Arnara'
            },
            {
                value: 'Arnasco',
                label: 'Arnasco'
            },
            {
                value: 'Arnesano',
                label: 'Arnesano'
            },
            {
                value: 'Arola',
                label: 'Arola'
            },
            {
                value: 'Arona',
                label: 'Arona'
            },
            {
                value: 'Arosio',
                label: 'Arosio'
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
                value: 'Arpino',
                label: 'Arpino'
            },
            {
                value: 'Arquà Petrarca',
                label: 'Arquà Petrarca'
            },
            {
                value: 'Arquà Polesine',
                label: 'Arquà Polesine'
            },
            {
                value: 'Arquata del Tronto',
                label: 'Arquata del Tronto'
            },
            {
                value: 'Arquata Scrivia',
                label: 'Arquata Scrivia'
            },
            {
                value: 'Arre',
                label: 'Arre'
            },
            {
                value: 'Arrone',
                label: 'Arrone'
            },
            {
                value: 'Arsago Seprio',
                label: 'Arsago Seprio'
            },
            {
                value: 'Arsiè',
                label: 'Arsiè'
            },
            {
                value: 'Arsiero',
                label: 'Arsiero'
            },
            {
                value: 'Arsita',
                label: 'Arsita'
            },
            {
                value: 'Arsoli',
                label: 'Arsoli'
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
                value: 'Artena',
                label: 'Artena'
            },
            {
                value: 'Artogne',
                label: 'Artogne'
            },
            {
                value: 'Arvier',
                label: 'Arvier'
            },
            {
                value: 'Arzachena',
                label: 'Arzachena'
            },
            {
                value: 'Arzago d\'Adda',
                label: 'Arzago d\'Adda'
            },
            {
                value: 'Arzana',
                label: 'Arzana'
            },
            {
                value: 'Arzano',
                label: 'Arzano'
            },
            {
                value: 'Arzergrande',
                label: 'Arzergrande'
            },
            {
                value: 'Arzignano',
                label: 'Arzignano'
            },
            {
                value: 'Ascea',
                label: 'Ascea'
            },
            {
                value: 'Asciano',
                label: 'Asciano'
            },
            {
                value: 'Ascoli Piceno',
                label: 'Ascoli Piceno'
            },
            {
                value: 'Ascoli Satriano',
                label: 'Ascoli Satriano'
            },
            {
                value: 'Ascrea',
                label: 'Ascrea'
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
                value: 'Asigliano Vercellese',
                label: 'Asigliano Vercellese'
            },
            {
                value: 'Asola',
                label: 'Asola'
            },
            {
                value: 'Asolo',
                label: 'Asolo'
            },
            {
                value: 'Assago',
                label: 'Assago'
            },
            {
                value: 'Assemini',
                label: 'Assemini'
            },
            {
                value: 'Assisi',
                label: 'Assisi'
            },
            {
                value: 'Asso',
                label: 'Asso'
            },
            {
                value: 'Assolo',
                label: 'Assolo'
            },
            {
                value: 'Assoro',
                label: 'Assoro'
            },
            {
                value: 'Asti',
                label: 'Asti'
            },
            {
                value: 'Asuni',
                label: 'Asuni'
            },
            {
                value: 'Ateleta',
                label: 'Ateleta'
            },
            {
                value: 'Atella',
                label: 'Atella'
            },
            {
                value: 'Atena Lucana',
                label: 'Atena Lucana'
            },
            {
                value: 'Atessa',
                label: 'Atessa'
            },
            {
                value: 'Atina',
                label: 'Atina'
            },
            {
                value: 'Atrani',
                label: 'Atrani'
            },
            {
                value: 'Atri',
                label: 'Atri'
            },
            {
                value: 'Atripalda',
                label: 'Atripalda'
            },
            {
                value: 'Attigliano',
                label: 'Attigliano'
            },
            {
                value: 'Attimis',
                label: 'Attimis'
            },
            {
                value: 'Atzara',
                label: 'Atzara'
            },
            {
                value: 'Augusta',
                label: 'Augusta'
            },
            {
                value: 'Auletta',
                label: 'Auletta'
            },
            {
                value: 'Aulla',
                label: 'Aulla'
            },
            {
                value: 'Aurano',
                label: 'Aurano'
            },
            {
                value: 'Aurigo',
                label: 'Aurigo'
            },
            {
                value: 'Auronzo di Cadore',
                label: 'Auronzo di Cadore'
            },
            {
                value: 'Ausonia',
                label: 'Ausonia'
            },
            {
                value: 'Austis',
                label: 'Austis'
            },
            {
                value: 'Avegno',
                label: 'Avegno'
            },
            {
                value: 'Avelengo',
                label: 'Avelengo'
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
                value: 'Averara',
                label: 'Averara'
            },
            {
                value: 'Aversa',
                label: 'Aversa'
            },
            {
                value: 'Avetrana',
                label: 'Avetrana'
            },
            {
                value: 'Avezzano',
                label: 'Avezzano'
            },
            {
                value: 'Aviano',
                label: 'Aviano'
            },
            {
                value: 'Aviatico',
                label: 'Aviatico'
            },
            {
                value: 'Avigliana',
                label: 'Avigliana'
            },
            {
                value: 'Avigliano',
                label: 'Avigliano'
            },
            {
                value: 'Avigliano Umbro',
                label: 'Avigliano Umbro'
            },
            {
                value: 'Avio',
                label: 'Avio'
            },
            {
                value: 'Avise',
                label: 'Avise'
            },
            {
                value: 'Avola',
                label: 'Avola'
            },
            {
                value: 'Avolasca',
                label: 'Avolasca'
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
                value: 'Azeglio',
                label: 'Azeglio'
            },
            {
                value: 'Azzanello',
                label: 'Azzanello'
            },
            {
                value: 'Azzano d\'Asti',
                label: 'Azzano d\'Asti'
            },
            {
                value: 'Azzano Decimo',
                label: 'Azzano Decimo'
            },
            {
                value: 'Azzano Mella',
                label: 'Azzano Mella'
            },
            {
                value: 'Azzano San Paolo',
                label: 'Azzano San Paolo'
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
                value: 'Azzone',
                label: 'Azzone'
            },
            {
                value: 'Baceno',
                label: 'Baceno'
            },
            {
                value: 'Bacoli',
                label: 'Bacoli'
            },
            {
                value: 'Badalucco',
                label: 'Badalucco'
            },
            {
                value: 'Badesi',
                label: 'Badesi'
            },
            {
                value: 'Badia',
                label: 'Badia'
            },
            {
                value: 'Badia Calavena',
                label: 'Badia Calavena'
            },
            {
                value: 'Badia Pavese',
                label: 'Badia Pavese'
            },
            {
                value: 'Badia Polesine',
                label: 'Badia Polesine'
            },
            {
                value: 'Badia Tedalda',
                label: 'Badia Tedalda'
            },
            {
                value: 'Badolato',
                label: 'Badolato'
            },
            {
                value: 'Bagaladi',
                label: 'Bagaladi'
            },
            {
                value: 'Bagheria',
                label: 'Bagheria'
            },
            {
                value: 'Bagnacavallo',
                label: 'Bagnacavallo'
            },
            {
                value: 'Bagnara Calabra',
                label: 'Bagnara Calabra'
            },
            {
                value: 'Bagnara di Romagna',
                label: 'Bagnara di Romagna'
            },
            {
                value: 'Bagnaria',
                label: 'Bagnaria'
            },
            {
                value: 'Bagnaria Arsa',
                label: 'Bagnaria Arsa'
            },
            {
                value: 'Bagnasco',
                label: 'Bagnasco'
            },
            {
                value: 'Bagnatica',
                label: 'Bagnatica'
            },
            {
                value: 'Bagni di Lucca',
                label: 'Bagni di Lucca'
            },
            {
                value: 'Bagno a Ripoli',
                label: 'Bagno a Ripoli'
            },
            {
                value: 'Bagno di Romagna',
                label: 'Bagno di Romagna'
            },
            {
                value: 'Bagnoli del Trigno',
                label: 'Bagnoli del Trigno'
            },
            {
                value: 'Bagnoli di Sopra',
                label: 'Bagnoli di Sopra'
            },
            {
                value: 'Bagnoli Irpino',
                label: 'Bagnoli Irpino'
            },
            {
                value: 'Bagnolo Cremasco',
                label: 'Bagnolo Cremasco'
            },
            {
                value: 'Bagnolo del Salento',
                label: 'Bagnolo del Salento'
            },
            {
                value: 'Bagnolo di Po',
                label: 'Bagnolo di Po'
            },
            {
                value: 'Bagnolo in Piano',
                label: 'Bagnolo in Piano'
            },
            {
                value: 'Bagnolo Mella',
                label: 'Bagnolo Mella'
            },
            {
                value: 'Bagnolo Piemonte',
                label: 'Bagnolo Piemonte'
            },
            {
                value: 'Bagnolo San Vito',
                label: 'Bagnolo San Vito'
            },
            {
                value: 'Bagnone',
                label: 'Bagnone'
            },
            {
                value: 'Bagnoregio',
                label: 'Bagnoregio'
            },
            {
                value: 'Bagolino',
                label: 'Bagolino'
            },
            {
                value: 'Baia e Latina',
                label: 'Baia e Latina'
            },
            {
                value: 'Baiano',
                label: 'Baiano'
            },
            {
                value: 'Bairo',
                label: 'Bairo'
            },
            {
                value: 'Baiso',
                label: 'Baiso'
            },
            {
                value: 'Bajardo',
                label: 'Bajardo'
            },
            {
                value: 'Balangero',
                label: 'Balangero'
            },
            {
                value: 'Baldichieri d\'Asti',
                label: 'Baldichieri d\'Asti'
            },
            {
                value: 'Baldissero Canavese',
                label: 'Baldissero Canavese'
            },
            {
                value: 'Baldissero d\'Alba',
                label: 'Baldissero d\'Alba'
            },
            {
                value: 'Baldissero Torinese',
                label: 'Baldissero Torinese'
            },
            {
                value: 'Balestrate',
                label: 'Balestrate'
            },
            {
                value: 'Balestrino',
                label: 'Balestrino'
            },
            {
                value: 'Ballabio',
                label: 'Ballabio'
            },
            {
                value: 'Ballao',
                label: 'Ballao'
            },
            {
                value: 'Balme',
                label: 'Balme'
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
                value: 'Balsorano',
                label: 'Balsorano'
            },
            {
                value: 'Balvano',
                label: 'Balvano'
            },
            {
                value: 'Balzola',
                label: 'Balzola'
            },
            {
                value: 'Banari',
                label: 'Banari'
            },
            {
                value: 'Banchette',
                label: 'Banchette'
            },
            {
                value: 'Bannio Anzino',
                label: 'Bannio Anzino'
            },
            {
                value: 'Banzi',
                label: 'Banzi'
            },
            {
                value: 'Baone',
                label: 'Baone'
            },
            {
                value: 'Baradili',
                label: 'Baradili'
            },
            {
                value: 'Baragiano',
                label: 'Baragiano'
            },
            {
                value: 'Baranello',
                label: 'Baranello'
            },
            {
                value: 'Barano d\'Ischia',
                label: 'Barano d\'Ischia'
            },
            {
                value: 'Baranzate',
                label: 'Baranzate'
            },
            {
                value: 'Barasso',
                label: 'Barasso'
            },
            {
                value: 'Baratili San Pietro',
                label: 'Baratili San Pietro'
            },
            {
                value: 'Barbania',
                label: 'Barbania'
            },
            {
                value: 'Barbara',
                label: 'Barbara'
            },
            {
                value: 'Barbarano Mossano',
                label: 'Barbarano Mossano'
            },
            {
                value: 'Barbarano Romano',
                label: 'Barbarano Romano'
            },
            {
                value: 'Barbaresco',
                label: 'Barbaresco'
            },
            {
                value: 'Barbariga',
                label: 'Barbariga'
            },
            {
                value: 'Barbata',
                label: 'Barbata'
            },
            {
                value: 'Barberino di Mugello',
                label: 'Barberino di Mugello'
            },
            {
                value: 'Barberino Tavarnelle',
                label: 'Barberino Tavarnelle'
            },
            {
                value: 'Barbianello',
                label: 'Barbianello'
            },
            {
                value: 'Barbiano',
                label: 'Barbiano'
            },
            {
                value: 'Barbona',
                label: 'Barbona'
            },
            {
                value: 'Barcellona Pozzo di Gotto',
                label: 'Barcellona Pozzo di Gotto'
            },
            {
                value: 'Barcis',
                label: 'Barcis'
            },
            {
                value: 'Bard',
                label: 'Bard'
            },
            {
                value: 'Bardello con Malgesso e Bregano',
                label: 'Bardello con Malgesso e Bregano'
            },
            {
                value: 'Bardi',
                label: 'Bardi'
            },
            {
                value: 'Bardineto',
                label: 'Bardineto'
            },
            {
                value: 'Bardolino',
                label: 'Bardolino'
            },
            {
                value: 'Bardonecchia',
                label: 'Bardonecchia'
            },
            {
                value: 'Bareggio',
                label: 'Bareggio'
            },
            {
                value: 'Barengo',
                label: 'Barengo'
            },
            {
                value: 'Baressa',
                label: 'Baressa'
            },
            {
                value: 'Barete',
                label: 'Barete'
            },
            {
                value: 'Barga',
                label: 'Barga'
            },
            {
                value: 'Bargagli',
                label: 'Bargagli'
            },
            {
                value: 'Barge',
                label: 'Barge'
            },
            {
                value: 'Barghe',
                label: 'Barghe'
            },
            {
                value: 'Bari',
                label: 'Bari'
            },
            {
                value: 'Bari Sardo',
                label: 'Bari Sardo'
            },
            {
                value: 'Bariano',
                label: 'Bariano'
            },
            {
                value: 'Baricella',
                label: 'Baricella'
            },
            {
                value: 'Barile',
                label: 'Barile'
            },
            {
                value: 'Barisciano',
                label: 'Barisciano'
            },
            {
                value: 'Barlassina',
                label: 'Barlassina'
            },
            {
                value: 'Barletta',
                label: 'Barletta'
            },
            {
                value: 'Barni',
                label: 'Barni'
            },
            {
                value: 'Barolo',
                label: 'Barolo'
            },
            {
                value: 'Barone Canavese',
                label: 'Barone Canavese'
            },
            {
                value: 'Baronissi',
                label: 'Baronissi'
            },
            {
                value: 'Barrafranca',
                label: 'Barrafranca'
            },
            {
                value: 'Barrali',
                label: 'Barrali'
            },
            {
                value: 'Barrea',
                label: 'Barrea'
            },
            {
                value: 'Barumini',
                label: 'Barumini'
            },
            {
                value: 'Barzago',
                label: 'Barzago'
            },
            {
                value: 'Barzana',
                label: 'Barzana'
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
                value: 'Basaluzzo',
                label: 'Basaluzzo'
            },
            {
                value: 'Bascapè',
                label: 'Bascapè'
            },
            {
                value: 'Baschi',
                label: 'Baschi'
            },
            {
                value: 'Basciano',
                label: 'Basciano'
            },
            {
                value: 'Baselga di Pinè',
                label: 'Baselga di Pinè'
            },
            {
                value: 'Baselice',
                label: 'Baselice'
            },
            {
                value: 'Basiano',
                label: 'Basiano'
            },
            {
                value: 'Basicò',
                label: 'Basicò'
            },
            {
                value: 'Basiglio',
                label: 'Basiglio'
            },
            {
                value: 'Basiliano',
                label: 'Basiliano'
            },
            {
                value: 'Bassano Bresciano',
                label: 'Bassano Bresciano'
            },
            {
                value: 'Bassano del Grappa',
                label: 'Bassano del Grappa'
            },
            {
                value: 'Bassano in Teverina',
                label: 'Bassano in Teverina'
            },
            {
                value: 'Bassano Romano',
                label: 'Bassano Romano'
            },
            {
                value: 'Bassiano',
                label: 'Bassiano'
            },
            {
                value: 'Bassignana',
                label: 'Bassignana'
            },
            {
                value: 'Bastia Mondovì',
                label: 'Bastia Mondovì'
            },
            {
                value: 'Bastia Umbra',
                label: 'Bastia Umbra'
            },
            {
                value: 'Bastida Pancarana',
                label: 'Bastida Pancarana'
            },
            {
                value: 'Bastiglia',
                label: 'Bastiglia'
            },
            {
                value: 'Battaglia Terme',
                label: 'Battaglia Terme'
            },
            {
                value: 'Battifollo',
                label: 'Battifollo'
            },
            {
                value: 'Battipaglia',
                label: 'Battipaglia'
            },
            {
                value: 'Battuda',
                label: 'Battuda'
            },
            {
                value: 'Baucina',
                label: 'Baucina'
            },
            {
                value: 'Bauladu',
                label: 'Bauladu'
            },
            {
                value: 'Baunei',
                label: 'Baunei'
            },
            {
                value: 'Baveno',
                label: 'Baveno'
            },
            {
                value: 'Bedero Valcuvia',
                label: 'Bedero Valcuvia'
            },
            {
                value: 'Bedizzole',
                label: 'Bedizzole'
            },
            {
                value: 'Bedollo',
                label: 'Bedollo'
            },
            {
                value: 'Bedonia',
                label: 'Bedonia'
            },
            {
                value: 'Bedulita',
                label: 'Bedulita'
            },
            {
                value: 'Bee',
                label: 'Bee'
            },
            {
                value: 'Beinasco',
                label: 'Beinasco'
            },
            {
                value: 'Beinette',
                label: 'Beinette'
            },
            {
                value: 'Belcastro',
                label: 'Belcastro'
            },
            {
                value: 'Belfiore',
                label: 'Belfiore'
            },
            {
                value: 'Belforte all\'Isauro',
                label: 'Belforte all\'Isauro'
            },
            {
                value: 'Belforte del Chienti',
                label: 'Belforte del Chienti'
            },
            {
                value: 'Belforte Monferrato',
                label: 'Belforte Monferrato'
            },
            {
                value: 'Belgioioso',
                label: 'Belgioioso'
            },
            {
                value: 'Belgirate',
                label: 'Belgirate'
            },
            {
                value: 'Bella',
                label: 'Bella'
            },
            {
                value: 'Bellagio',
                label: 'Bellagio'
            },
            {
                value: 'Bellano',
                label: 'Bellano'
            },
            {
                value: 'Bellante',
                label: 'Bellante'
            },
            {
                value: 'Bellaria-Igea Marina',
                label: 'Bellaria-Igea Marina'
            },
            {
                value: 'Bellegra',
                label: 'Bellegra'
            },
            {
                value: 'Bellino',
                label: 'Bellino'
            },
            {
                value: 'Bellinzago Lombardo',
                label: 'Bellinzago Lombardo'
            },
            {
                value: 'Bellinzago Novarese',
                label: 'Bellinzago Novarese'
            },
            {
                value: 'Bellizzi',
                label: 'Bellizzi'
            },
            {
                value: 'Bellona',
                label: 'Bellona'
            },
            {
                value: 'Bellosguardo',
                label: 'Bellosguardo'
            },
            {
                value: 'Belluno',
                label: 'Belluno'
            },
            {
                value: 'Bellusco',
                label: 'Bellusco'
            },
            {
                value: 'Belmonte Calabro',
                label: 'Belmonte Calabro'
            },
            {
                value: 'Belmonte Castello',
                label: 'Belmonte Castello'
            },
            {
                value: 'Belmonte del Sannio',
                label: 'Belmonte del Sannio'
            },
            {
                value: 'Belmonte in Sabina',
                label: 'Belmonte in Sabina'
            },
            {
                value: 'Belmonte Mezzagno',
                label: 'Belmonte Mezzagno'
            },
            {
                value: 'Belmonte Piceno',
                label: 'Belmonte Piceno'
            },
            {
                value: 'Belpasso',
                label: 'Belpasso'
            },
            {
                value: 'Belsito',
                label: 'Belsito'
            },
            {
                value: 'Belvedere di Spinello',
                label: 'Belvedere di Spinello'
            },
            {
                value: 'Belvedere Langhe',
                label: 'Belvedere Langhe'
            },
            {
                value: 'Belvedere Marittimo',
                label: 'Belvedere Marittimo'
            },
            {
                value: 'Belvedere Ostrense',
                label: 'Belvedere Ostrense'
            },
            {
                value: 'Belveglio',
                label: 'Belveglio'
            },
            {
                value: 'Belvì',
                label: 'Belvì'
            },
            {
                value: 'Bema',
                label: 'Bema'
            },
            {
                value: 'Bene Lario',
                label: 'Bene Lario'
            },
            {
                value: 'Bene Vagienna',
                label: 'Bene Vagienna'
            },
            {
                value: 'Benestare',
                label: 'Benestare'
            },
            {
                value: 'Benetutti',
                label: 'Benetutti'
            },
            {
                value: 'Benevello',
                label: 'Benevello'
            },
            {
                value: 'Benevento',
                label: 'Benevento'
            },
            {
                value: 'Benna',
                label: 'Benna'
            },
            {
                value: 'Bentivoglio',
                label: 'Bentivoglio'
            },
            {
                value: 'Berbenno',
                label: 'Berbenno'
            },
            {
                value: 'Berbenno di Valtellina',
                label: 'Berbenno di Valtellina'
            },
            {
                value: 'Berceto',
                label: 'Berceto'
            },
            {
                value: 'Berchidda',
                label: 'Berchidda'
            },
            {
                value: 'Beregazzo con Figliaro',
                label: 'Beregazzo con Figliaro'
            },
            {
                value: 'Bereguardo',
                label: 'Bereguardo'
            },
            {
                value: 'Bergamasco',
                label: 'Bergamasco'
            },
            {
                value: 'Bergamo',
                label: 'Bergamo'
            },
            {
                value: 'Bergantino',
                label: 'Bergantino'
            },
            {
                value: 'Bergeggi',
                label: 'Bergeggi'
            },
            {
                value: 'Bergolo',
                label: 'Bergolo'
            },
            {
                value: 'Berlingo',
                label: 'Berlingo'
            },
            {
                value: 'Bernalda',
                label: 'Bernalda'
            },
            {
                value: 'Bernareggio',
                label: 'Bernareggio'
            },
            {
                value: 'Bernate Ticino',
                label: 'Bernate Ticino'
            },
            {
                value: 'Bernezzo',
                label: 'Bernezzo'
            },
            {
                value: 'Bertinoro',
                label: 'Bertinoro'
            },
            {
                value: 'Bertiolo',
                label: 'Bertiolo'
            },
            {
                value: 'Bertonico',
                label: 'Bertonico'
            },
            {
                value: 'Berzano di San Pietro',
                label: 'Berzano di San Pietro'
            },
            {
                value: 'Berzano di Tortona',
                label: 'Berzano di Tortona'
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
                value: 'Berzo San Fermo',
                label: 'Berzo San Fermo'
            },
            {
                value: 'Besana in Brianza',
                label: 'Besana in Brianza'
            },
            {
                value: 'Besano',
                label: 'Besano'
            },
            {
                value: 'Besate',
                label: 'Besate'
            },
            {
                value: 'Besenello',
                label: 'Besenello'
            },
            {
                value: 'Besenzone',
                label: 'Besenzone'
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
                value: 'Bessude',
                label: 'Bessude'
            },
            {
                value: 'Bettola',
                label: 'Bettola'
            },
            {
                value: 'Bettona',
                label: 'Bettona'
            },
            {
                value: 'Beura-Cardezza',
                label: 'Beura-Cardezza'
            },
            {
                value: 'Bevagna',
                label: 'Bevagna'
            },
            {
                value: 'Beverino',
                label: 'Beverino'
            },
            {
                value: 'Bevilacqua',
                label: 'Bevilacqua'
            },
            {
                value: 'Biancavilla',
                label: 'Biancavilla'
            },
            {
                value: 'Bianchi',
                label: 'Bianchi'
            },
            {
                value: 'Bianco',
                label: 'Bianco'
            },
            {
                value: 'Biandrate',
                label: 'Biandrate'
            },
            {
                value: 'Biandronno',
                label: 'Biandronno'
            },
            {
                value: 'Bianzano',
                label: 'Bianzano'
            },
            {
                value: 'Bianzè',
                label: 'Bianzè'
            },
            {
                value: 'Bianzone',
                label: 'Bianzone'
            },
            {
                value: 'Biassono',
                label: 'Biassono'
            },
            {
                value: 'Bibbiano',
                label: 'Bibbiano'
            },
            {
                value: 'Bibbiena',
                label: 'Bibbiena'
            },
            {
                value: 'Bibbona',
                label: 'Bibbona'
            },
            {
                value: 'Bibiana',
                label: 'Bibiana'
            },
            {
                value: 'Biccari',
                label: 'Biccari'
            },
            {
                value: 'Bicinicco',
                label: 'Bicinicco'
            },
            {
                value: 'Bidonì',
                label: 'Bidonì'
            },
            {
                value: 'Biella',
                label: 'Biella'
            },
            {
                value: 'Bienno',
                label: 'Bienno'
            },
            {
                value: 'Bieno',
                label: 'Bieno'
            },
            {
                value: 'Bientina',
                label: 'Bientina'
            },
            {
                value: 'Binago',
                label: 'Binago'
            },
            {
                value: 'Binasco',
                label: 'Binasco'
            },
            {
                value: 'Binetto',
                label: 'Binetto'
            },
            {
                value: 'Bioglio',
                label: 'Bioglio'
            },
            {
                value: 'Bionaz',
                label: 'Bionaz'
            },
            {
                value: 'Bione',
                label: 'Bione'
            },
            {
                value: 'Birori',
                label: 'Birori'
            },
            {
                value: 'Bisaccia',
                label: 'Bisaccia'
            },
            {
                value: 'Bisacquino',
                label: 'Bisacquino'
            },
            {
                value: 'Bisceglie',
                label: 'Bisceglie'
            },
            {
                value: 'Bisegna',
                label: 'Bisegna'
            },
            {
                value: 'Bisenti',
                label: 'Bisenti'
            },
            {
                value: 'Bisignano',
                label: 'Bisignano'
            },
            {
                value: 'Bistagno',
                label: 'Bistagno'
            },
            {
                value: 'Bisuschio',
                label: 'Bisuschio'
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
                value: 'Bitti',
                label: 'Bitti'
            },
            {
                value: 'Bivona',
                label: 'Bivona'
            },
            {
                value: 'Bivongi',
                label: 'Bivongi'
            },
            {
                value: 'Bizzarone',
                label: 'Bizzarone'
            },
            {
                value: 'Bleggio Superiore',
                label: 'Bleggio Superiore'
            },
            {
                value: 'Blello',
                label: 'Blello'
            },
            {
                value: 'Blera',
                label: 'Blera'
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
                value: 'Blufi',
                label: 'Blufi'
            },
            {
                value: 'Boara Pisani',
                label: 'Boara Pisani'
            },
            {
                value: 'Bobbio',
                label: 'Bobbio'
            },
            {
                value: 'Bobbio Pellice',
                label: 'Bobbio Pellice'
            },
            {
                value: 'Boca',
                label: 'Boca'
            },
            {
                value: 'Bocchigliero',
                label: 'Bocchigliero'
            },
            {
                value: 'Boccioleto',
                label: 'Boccioleto'
            },
            {
                value: 'Bocenago',
                label: 'Bocenago'
            },
            {
                value: 'Bodio Lomnago',
                label: 'Bodio Lomnago'
            },
            {
                value: 'Boffalora d\'Adda',
                label: 'Boffalora d\'Adda'
            },
            {
                value: 'Boffalora sopra Ticino',
                label: 'Boffalora sopra Ticino'
            },
            {
                value: 'Bogliasco',
                label: 'Bogliasco'
            },
            {
                value: 'Bognanco',
                label: 'Bognanco'
            },
            {
                value: 'Bogogno',
                label: 'Bogogno'
            },
            {
                value: 'Boissano',
                label: 'Boissano'
            },
            {
                value: 'Bojano',
                label: 'Bojano'
            },
            {
                value: 'Bolano',
                label: 'Bolano'
            },
            {
                value: 'Bolgare',
                label: 'Bolgare'
            },
            {
                value: 'Bollate',
                label: 'Bollate'
            },
            {
                value: 'Bollengo',
                label: 'Bollengo'
            },
            {
                value: 'Bologna',
                label: 'Bologna'
            },
            {
                value: 'Bolognano',
                label: 'Bolognano'
            },
            {
                value: 'Bolognetta',
                label: 'Bolognetta'
            },
            {
                value: 'Bolognola',
                label: 'Bolognola'
            },
            {
                value: 'Bolotana',
                label: 'Bolotana'
            },
            {
                value: 'Bolsena',
                label: 'Bolsena'
            },
            {
                value: 'Boltiere',
                label: 'Boltiere'
            },
            {
                value: 'Bolzano',
                label: 'Bolzano'
            },
            {
                value: 'Bolzano Novarese',
                label: 'Bolzano Novarese'
            },
            {
                value: 'Bolzano Vicentino',
                label: 'Bolzano Vicentino'
            },
            {
                value: 'Bomarzo',
                label: 'Bomarzo'
            },
            {
                value: 'Bomba',
                label: 'Bomba'
            },
            {
                value: 'Bompensiere',
                label: 'Bompensiere'
            },
            {
                value: 'Bompietro',
                label: 'Bompietro'
            },
            {
                value: 'Bomporto',
                label: 'Bomporto'
            },
            {
                value: 'Bonarcado',
                label: 'Bonarcado'
            },
            {
                value: 'Bonassola',
                label: 'Bonassola'
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
                value: 'Bonavigo',
                label: 'Bonavigo'
            },
            {
                value: 'Bondeno',
                label: 'Bondeno'
            },
            {
                value: 'Bondone',
                label: 'Bondone'
            },
            {
                value: 'Bonea',
                label: 'Bonea'
            },
            {
                value: 'Bonefro',
                label: 'Bonefro'
            },
            {
                value: 'Bonemerse',
                label: 'Bonemerse'
            },
            {
                value: 'Bonifati',
                label: 'Bonifati'
            },
            {
                value: 'Bonito',
                label: 'Bonito'
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
                value: 'Bonvicino',
                label: 'Bonvicino'
            },
            {
                value: 'Borbona',
                label: 'Borbona'
            },
            {
                value: 'Borca di Cadore',
                label: 'Borca di Cadore'
            },
            {
                value: 'Bordano',
                label: 'Bordano'
            },
            {
                value: 'Bordighera',
                label: 'Bordighera'
            },
            {
                value: 'Bordolano',
                label: 'Bordolano'
            },
            {
                value: 'Bore',
                label: 'Bore'
            },
            {
                value: 'Boretto',
                label: 'Boretto'
            },
            {
                value: 'Borgarello',
                label: 'Borgarello'
            },
            {
                value: 'Borgaro Torinese',
                label: 'Borgaro Torinese'
            },
            {
                value: 'Borgetto',
                label: 'Borgetto'
            },
            {
                value: 'Borghetto d\'Arroscia',
                label: 'Borghetto d\'Arroscia'
            },
            {
                value: 'Borghetto di Borbera',
                label: 'Borghetto di Borbera'
            },
            {
                value: 'Borghetto di Vara',
                label: 'Borghetto di Vara'
            },
            {
                value: 'Borghetto Lodigiano',
                label: 'Borghetto Lodigiano'
            },
            {
                value: 'Borghetto Santo Spirito',
                label: 'Borghetto Santo Spirito'
            },
            {
                value: 'Borghi',
                label: 'Borghi'
            },
            {
                value: 'Borgia',
                label: 'Borgia'
            },
            {
                value: 'Borgiallo',
                label: 'Borgiallo'
            },
            {
                value: 'Borgio Verezzi',
                label: 'Borgio Verezzi'
            },
            {
                value: 'Borgo a Mozzano',
                label: 'Borgo a Mozzano'
            },
            {
                value: 'Borgo Chiese',
                label: 'Borgo Chiese'
            },
            {
                value: 'Borgo d\'Ale',
                label: 'Borgo d\'Ale'
            },
            {
                value: 'Borgo d\'Anaunia',
                label: 'Borgo d\'Anaunia'
            },
            {
                value: 'Borgo di Terzo',
                label: 'Borgo di Terzo'
            },
            {
                value: 'Borgo Lares',
                label: 'Borgo Lares'
            },
            {
                value: 'Borgo Mantovano',
                label: 'Borgo Mantovano'
            },
            {
                value: 'Borgo Pace',
                label: 'Borgo Pace'
            },
            {
                value: 'Borgo Priolo',
                label: 'Borgo Priolo'
            },
            {
                value: 'Borgo San Dalmazzo',
                label: 'Borgo San Dalmazzo'
            },
            {
                value: 'Borgo San Giacomo',
                label: 'Borgo San Giacomo'
            },
            {
                value: 'Borgo San Giovanni',
                label: 'Borgo San Giovanni'
            },
            {
                value: 'Borgo San Lorenzo',
                label: 'Borgo San Lorenzo'
            },
            {
                value: 'Borgo San Martino',
                label: 'Borgo San Martino'
            },
            {
                value: 'Borgo San Siro',
                label: 'Borgo San Siro'
            },
            {
                value: 'Borgo Ticino',
                label: 'Borgo Ticino'
            },
            {
                value: 'Borgo Tossignano',
                label: 'Borgo Tossignano'
            },
            {
                value: 'Borgo Val di Taro',
                label: 'Borgo Val di Taro'
            },
            {
                value: 'Borgo Valbelluna',
                label: 'Borgo Valbelluna'
            },
            {
                value: 'Borgo Valsugana',
                label: 'Borgo Valsugana'
            },
            {
                value: 'Borgo Velino',
                label: 'Borgo Velino'
            },
            {
                value: 'Borgo Veneto',
                label: 'Borgo Veneto'
            },
            {
                value: 'Borgo Vercelli',
                label: 'Borgo Vercelli'
            },
            {
                value: 'Borgo Virgilio',
                label: 'Borgo Virgilio'
            },
            {
                value: 'Borgocarbonara',
                label: 'Borgocarbonara'
            },
            {
                value: 'Borgofranco d\'Ivrea',
                label: 'Borgofranco d\'Ivrea'
            },
            {
                value: 'Borgolavezzaro',
                label: 'Borgolavezzaro'
            },
            {
                value: 'Borgomale',
                label: 'Borgomale'
            },
            {
                value: 'Borgomanero',
                label: 'Borgomanero'
            },
            {
                value: 'Borgomaro',
                label: 'Borgomaro'
            },
            {
                value: 'Borgomasino',
                label: 'Borgomasino'
            },
            {
                value: 'Borgomezzavalle',
                label: 'Borgomezzavalle'
            },
            {
                value: 'Borgone Susa',
                label: 'Borgone Susa'
            },
            {
                value: 'Borgonovo Val Tidone',
                label: 'Borgonovo Val Tidone'
            },
            {
                value: 'Borgoratto Alessandrino',
                label: 'Borgoratto Alessandrino'
            },
            {
                value: 'Borgoratto Mormorolo',
                label: 'Borgoratto Mormorolo'
            },
            {
                value: 'Borgoricco',
                label: 'Borgoricco'
            },
            {
                value: 'Borgorose',
                label: 'Borgorose'
            },
            {
                value: 'Borgosatollo',
                label: 'Borgosatollo'
            },
            {
                value: 'Borgosesia',
                label: 'Borgosesia'
            },
            {
                value: 'Bormida',
                label: 'Bormida'
            },
            {
                value: 'Bormio',
                label: 'Bormio'
            },
            {
                value: 'Bornasco',
                label: 'Bornasco'
            },
            {
                value: 'Borno',
                label: 'Borno'
            },
            {
                value: 'Boroneddu',
                label: 'Boroneddu'
            },
            {
                value: 'Borore',
                label: 'Borore'
            },
            {
                value: 'Borrello',
                label: 'Borrello'
            },
            {
                value: 'Borriana',
                label: 'Borriana'
            },
            {
                value: 'Borso del Grappa',
                label: 'Borso del Grappa'
            },
            {
                value: 'Bortigali',
                label: 'Bortigali'
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
                value: 'Borzonasca',
                label: 'Borzonasca'
            },
            {
                value: 'Bosa',
                label: 'Bosa'
            },
            {
                value: 'Bosaro',
                label: 'Bosaro'
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
                value: 'Bosco Marengo',
                label: 'Bosco Marengo'
            },
            {
                value: 'Bosconero',
                label: 'Bosconero'
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
                value: 'Bosia',
                label: 'Bosia'
            },
            {
                value: 'Bosio',
                label: 'Bosio'
            },
            {
                value: 'Bosisio Parini',
                label: 'Bosisio Parini'
            },
            {
                value: 'Bosnasco',
                label: 'Bosnasco'
            },
            {
                value: 'Bossico',
                label: 'Bossico'
            },
            {
                value: 'Bossolasco',
                label: 'Bossolasco'
            },
            {
                value: 'Botricello',
                label: 'Botricello'
            },
            {
                value: 'Botrugno',
                label: 'Botrugno'
            },
            {
                value: 'Bottanuco',
                label: 'Bottanuco'
            },
            {
                value: 'Botticino',
                label: 'Botticino'
            },
            {
                value: 'Bottidda',
                label: 'Bottidda'
            },
            {
                value: 'Bova',
                label: 'Bova'
            },
            {
                value: 'Bova Marina',
                label: 'Bova Marina'
            },
            {
                value: 'Bovalino',
                label: 'Bovalino'
            },
            {
                value: 'Bovegno',
                label: 'Bovegno'
            },
            {
                value: 'Boves',
                label: 'Boves'
            },
            {
                value: 'Bovezzo',
                label: 'Bovezzo'
            },
            {
                value: 'Boville Ernica',
                label: 'Boville Ernica'
            },
            {
                value: 'Bovino',
                label: 'Bovino'
            },
            {
                value: 'Bovisio-Masciago',
                label: 'Bovisio-Masciago'
            },
            {
                value: 'Bovolenta',
                label: 'Bovolenta'
            },
            {
                value: 'Bovolone',
                label: 'Bovolone'
            },
            {
                value: 'Bozzole',
                label: 'Bozzole'
            },
            {
                value: 'Bozzolo',
                label: 'Bozzolo'
            },
            {
                value: 'Bra',
                label: 'Bra'
            },
            {
                value: 'Bracca',
                label: 'Bracca'
            },
            {
                value: 'Bracciano',
                label: 'Bracciano'
            },
            {
                value: 'Bracigliano',
                label: 'Bracigliano'
            },
            {
                value: 'Braies',
                label: 'Braies'
            },
            {
                value: 'Brallo di Pregola',
                label: 'Brallo di Pregola'
            },
            {
                value: 'Brancaleone',
                label: 'Brancaleone'
            },
            {
                value: 'Brandico',
                label: 'Brandico'
            },
            {
                value: 'Brandizzo',
                label: 'Brandizzo'
            },
            {
                value: 'Branzi',
                label: 'Branzi'
            },
            {
                value: 'Braone',
                label: 'Braone'
            },
            {
                value: 'Brebbia',
                label: 'Brebbia'
            },
            {
                value: 'Breda di Piave',
                label: 'Breda di Piave'
            },
            {
                value: 'Breganze',
                label: 'Breganze'
            },
            {
                value: 'Bregnano',
                label: 'Bregnano'
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
                value: 'Brembio',
                label: 'Brembio'
            },
            {
                value: 'Breme',
                label: 'Breme'
            },
            {
                value: 'Brendola',
                label: 'Brendola'
            },
            {
                value: 'Brenna',
                label: 'Brenna'
            },
            {
                value: 'Brennero',
                label: 'Brennero'
            },
            {
                value: 'Breno',
                label: 'Breno'
            },
            {
                value: 'Brenta',
                label: 'Brenta'
            },
            {
                value: 'Brentino Belluno',
                label: 'Brentino Belluno'
            },
            {
                value: 'Brentonico',
                label: 'Brentonico'
            },
            {
                value: 'Brenzone sul Garda',
                label: 'Brenzone sul Garda'
            },
            {
                value: 'Brescello',
                label: 'Brescello'
            },
            {
                value: 'Brescia',
                label: 'Brescia'
            },
            {
                value: 'Bresimo',
                label: 'Bresimo'
            },
            {
                value: 'Bressana Bottarone',
                label: 'Bressana Bottarone'
            },
            {
                value: 'Bressanone',
                label: 'Bressanone'
            },
            {
                value: 'Bressanvido',
                label: 'Bressanvido'
            },
            {
                value: 'Bresso',
                label: 'Bresso'
            },
            {
                value: 'Brezzo di Bedero',
                label: 'Brezzo di Bedero'
            },
            {
                value: 'Briaglia',
                label: 'Briaglia'
            },
            {
                value: 'Briatico',
                label: 'Briatico'
            },
            {
                value: 'Bricherasio',
                label: 'Bricherasio'
            },
            {
                value: 'Brienno',
                label: 'Brienno'
            },
            {
                value: 'Brienza',
                label: 'Brienza'
            },
            {
                value: 'Briga Alta',
                label: 'Briga Alta'
            },
            {
                value: 'Briga Novarese',
                label: 'Briga Novarese'
            },
            {
                value: 'Brignano Gera d\'Adda',
                label: 'Brignano Gera d\'Adda'
            },
            {
                value: 'Brignano-Frascata',
                label: 'Brignano-Frascata'
            },
            {
                value: 'Brindisi',
                label: 'Brindisi'
            },
            {
                value: 'Brindisi Montagna',
                label: 'Brindisi Montagna'
            },
            {
                value: 'Brinzio',
                label: 'Brinzio'
            },
            {
                value: 'Briona',
                label: 'Briona'
            },
            {
                value: 'Brione',
                label: 'Brione'
            },
            {
                value: 'Briosco',
                label: 'Briosco'
            },
            {
                value: 'Brisighella',
                label: 'Brisighella'
            },
            {
                value: 'Brissago-Valtravaglia',
                label: 'Brissago-Valtravaglia'
            },
            {
                value: 'Brissogne',
                label: 'Brissogne'
            },
            {
                value: 'Brittoli',
                label: 'Brittoli'
            },
            {
                value: 'Brivio',
                label: 'Brivio'
            },
            {
                value: 'Broccostella',
                label: 'Broccostella'
            },
            {
                value: 'Brogliano',
                label: 'Brogliano'
            },
            {
                value: 'Brognaturo',
                label: 'Brognaturo'
            },
            {
                value: 'Brolo',
                label: 'Brolo'
            },
            {
                value: 'Brondello',
                label: 'Brondello'
            },
            {
                value: 'Broni',
                label: 'Broni'
            },
            {
                value: 'Bronte',
                label: 'Bronte'
            },
            {
                value: 'Bronzolo',
                label: 'Bronzolo'
            },
            {
                value: 'Brossasco',
                label: 'Brossasco'
            },
            {
                value: 'Brosso',
                label: 'Brosso'
            },
            {
                value: 'Brovello-Carpugnino',
                label: 'Brovello-Carpugnino'
            },
            {
                value: 'Brozolo',
                label: 'Brozolo'
            },
            {
                value: 'Brugherio',
                label: 'Brugherio'
            },
            {
                value: 'Brugine',
                label: 'Brugine'
            },
            {
                value: 'Brugnato',
                label: 'Brugnato'
            },
            {
                value: 'Brugnera',
                label: 'Brugnera'
            },
            {
                value: 'Bruino',
                label: 'Bruino'
            },
            {
                value: 'Brumano',
                label: 'Brumano'
            },
            {
                value: 'Brunate',
                label: 'Brunate'
            },
            {
                value: 'Brunello',
                label: 'Brunello'
            },
            {
                value: 'Brunico',
                label: 'Brunico'
            },
            {
                value: 'Bruno',
                label: 'Bruno'
            },
            {
                value: 'Brusaporto',
                label: 'Brusaporto'
            },
            {
                value: 'Brusasco',
                label: 'Brusasco'
            },
            {
                value: 'Brusciano',
                label: 'Brusciano'
            },
            {
                value: 'Brusimpiano',
                label: 'Brusimpiano'
            },
            {
                value: 'Brusnengo',
                label: 'Brusnengo'
            },
            {
                value: 'Brusson',
                label: 'Brusson'
            },
            {
                value: 'Bruzolo',
                label: 'Bruzolo'
            },
            {
                value: 'Bruzzano Zeffirio',
                label: 'Bruzzano Zeffirio'
            },
            {
                value: 'Bubbiano',
                label: 'Bubbiano'
            },
            {
                value: 'Bubbio',
                label: 'Bubbio'
            },
            {
                value: 'Buccheri',
                label: 'Buccheri'
            },
            {
                value: 'Bucchianico',
                label: 'Bucchianico'
            },
            {
                value: 'Bucciano',
                label: 'Bucciano'
            },
            {
                value: 'Buccinasco',
                label: 'Buccinasco'
            },
            {
                value: 'Buccino',
                label: 'Buccino'
            },
            {
                value: 'Bucine',
                label: 'Bucine'
            },
            {
                value: 'Buddusò',
                label: 'Buddusò'
            },
            {
                value: 'Budoia',
                label: 'Budoia'
            },
            {
                value: 'Budoni',
                label: 'Budoni'
            },
            {
                value: 'Budrio',
                label: 'Budrio'
            },
            {
                value: 'Buggerru',
                label: 'Buggerru'
            },
            {
                value: 'Buggiano',
                label: 'Buggiano'
            },
            {
                value: 'Buglio in Monte',
                label: 'Buglio in Monte'
            },
            {
                value: 'Bugnara',
                label: 'Bugnara'
            },
            {
                value: 'Buguggiate',
                label: 'Buguggiate'
            },
            {
                value: 'Buja',
                label: 'Buja'
            },
            {
                value: 'Bulciago',
                label: 'Bulciago'
            },
            {
                value: 'Bulgarograsso',
                label: 'Bulgarograsso'
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
                value: 'Buonabitacolo',
                label: 'Buonabitacolo'
            },
            {
                value: 'Buonalbergo',
                label: 'Buonalbergo'
            },
            {
                value: 'Buonconvento',
                label: 'Buonconvento'
            },
            {
                value: 'Buonvicino',
                label: 'Buonvicino'
            },
            {
                value: 'Burago di Molgora',
                label: 'Burago di Molgora'
            },
            {
                value: 'Burcei',
                label: 'Burcei'
            },
            {
                value: 'Burgio',
                label: 'Burgio'
            },
            {
                value: 'Burgos',
                label: 'Burgos'
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
                value: 'Buronzo',
                label: 'Buronzo'
            },
            {
                value: 'Busachi',
                label: 'Busachi'
            },
            {
                value: 'Busalla',
                label: 'Busalla'
            },
            {
                value: 'Busano',
                label: 'Busano'
            },
            {
                value: 'Busca',
                label: 'Busca'
            },
            {
                value: 'Buscate',
                label: 'Buscate'
            },
            {
                value: 'Buscemi',
                label: 'Buscemi'
            },
            {
                value: 'Buseto Palizzolo',
                label: 'Buseto Palizzolo'
            },
            {
                value: 'Busnago',
                label: 'Busnago'
            },
            {
                value: 'Bussero',
                label: 'Bussero'
            },
            {
                value: 'Busseto',
                label: 'Busseto'
            },
            {
                value: 'Bussi sul Tirino',
                label: 'Bussi sul Tirino'
            },
            {
                value: 'Busso',
                label: 'Busso'
            },
            {
                value: 'Bussolengo',
                label: 'Bussolengo'
            },
            {
                value: 'Bussoleno',
                label: 'Bussoleno'
            },
            {
                value: 'Busto Arsizio',
                label: 'Busto Arsizio'
            },
            {
                value: 'Busto Garolfo',
                label: 'Busto Garolfo'
            },
            {
                value: 'Butera',
                label: 'Butera'
            },
            {
                value: 'Buti',
                label: 'Buti'
            },
            {
                value: 'Buttapietra',
                label: 'Buttapietra'
            },
            {
                value: 'Buttigliera Alta',
                label: 'Buttigliera Alta'
            },
            {
                value: 'Buttigliera d\'Asti',
                label: 'Buttigliera d\'Asti'
            },
            {
                value: 'Buttrio',
                label: 'Buttrio'
            },
            {
                value: 'Cabella Ligure',
                label: 'Cabella Ligure'
            },
            {
                value: 'Cabiate',
                label: 'Cabiate'
            },
            {
                value: 'Cabras',
                label: 'Cabras'
            },
            {
                value: 'Caccamo',
                label: 'Caccamo'
            },
            {
                value: 'Caccuri',
                label: 'Caccuri'
            },
            {
                value: 'Cadegliano-Viconago',
                label: 'Cadegliano-Viconago'
            },
            {
                value: 'Cadelbosco di Sopra',
                label: 'Cadelbosco di Sopra'
            },
            {
                value: 'Cadeo',
                label: 'Cadeo'
            },
            {
                value: 'Caderzone Terme',
                label: 'Caderzone Terme'
            },
            {
                value: 'Cadoneghe',
                label: 'Cadoneghe'
            },
            {
                value: 'Cadorago',
                label: 'Cadorago'
            },
            {
                value: 'Cadrezzate con Osmate',
                label: 'Cadrezzate con Osmate'
            },
            {
                value: 'Caerano di San Marco',
                label: 'Caerano di San Marco'
            },
            {
                value: 'Cafasse',
                label: 'Cafasse'
            },
            {
                value: 'Caggiano',
                label: 'Caggiano'
            },
            {
                value: 'Cagli',
                label: 'Cagli'
            },
            {
                value: 'Cagliari',
                label: 'Cagliari'
            },
            {
                value: 'Caglio',
                label: 'Caglio'
            },
            {
                value: 'Cagnano Amiterno',
                label: 'Cagnano Amiterno'
            },
            {
                value: 'Cagnano Varano',
                label: 'Cagnano Varano'
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
                value: 'Caines',
                label: 'Caines'
            },
            {
                value: 'Caino',
                label: 'Caino'
            },
            {
                value: 'Caiolo',
                label: 'Caiolo'
            },
            {
                value: 'Cairano',
                label: 'Cairano'
            },
            {
                value: 'Cairate',
                label: 'Cairate'
            },
            {
                value: 'Cairo Montenotte',
                label: 'Cairo Montenotte'
            },
            {
                value: 'Caivano',
                label: 'Caivano'
            },
            {
                value: 'Calabritto',
                label: 'Calabritto'
            },
            {
                value: 'Calalzo di Cadore',
                label: 'Calalzo di Cadore'
            },
            {
                value: 'Calamandrana',
                label: 'Calamandrana'
            },
            {
                value: 'Calamonaci',
                label: 'Calamonaci'
            },
            {
                value: 'Calangianus',
                label: 'Calangianus'
            },
            {
                value: 'Calanna',
                label: 'Calanna'
            },
            {
                value: 'Calasca-Castiglione',
                label: 'Calasca-Castiglione'
            },
            {
                value: 'Calascibetta',
                label: 'Calascibetta'
            },
            {
                value: 'Calascio',
                label: 'Calascio'
            },
            {
                value: 'Calasetta',
                label: 'Calasetta'
            },
            {
                value: 'Calatabiano',
                label: 'Calatabiano'
            },
            {
                value: 'Calatafimi-Segesta',
                label: 'Calatafimi-Segesta'
            },
            {
                value: 'Calcata',
                label: 'Calcata'
            },
            {
                value: 'Calceranica al Lago',
                label: 'Calceranica al Lago'
            },
            {
                value: 'Calci',
                label: 'Calci'
            },
            {
                value: 'Calciano',
                label: 'Calciano'
            },
            {
                value: 'Calcinaia',
                label: 'Calcinaia'
            },
            {
                value: 'Calcinate',
                label: 'Calcinate'
            },
            {
                value: 'Calcinato',
                label: 'Calcinato'
            },
            {
                value: 'Calcio',
                label: 'Calcio'
            },
            {
                value: 'Calco',
                label: 'Calco'
            },
            {
                value: 'Caldaro sulla strada del vino',
                label: 'Caldaro sulla strada del vino'
            },
            {
                value: 'Caldarola',
                label: 'Caldarola'
            },
            {
                value: 'Calderara di Reno',
                label: 'Calderara di Reno'
            },
            {
                value: 'Caldes',
                label: 'Caldes'
            },
            {
                value: 'Caldiero',
                label: 'Caldiero'
            },
            {
                value: 'Caldogno',
                label: 'Caldogno'
            },
            {
                value: 'Caldonazzo',
                label: 'Caldonazzo'
            },
            {
                value: 'Calendasco',
                label: 'Calendasco'
            },
            {
                value: 'Calenzano',
                label: 'Calenzano'
            },
            {
                value: 'Calestano',
                label: 'Calestano'
            },
            {
                value: 'Calice al Cornoviglio',
                label: 'Calice al Cornoviglio'
            },
            {
                value: 'Calice Ligure',
                label: 'Calice Ligure'
            },
            {
                value: 'Calimera',
                label: 'Calimera'
            },
            {
                value: 'Calitri',
                label: 'Calitri'
            },
            {
                value: 'Calizzano',
                label: 'Calizzano'
            },
            {
                value: 'Callabiana',
                label: 'Callabiana'
            },
            {
                value: 'Calliano',
                label: 'Calliano'
            },
            {
                value: 'Calliano Monferrato',
                label: 'Calliano Monferrato'
            },
            {
                value: 'Calolziocorte',
                label: 'Calolziocorte'
            },
            {
                value: 'Calopezzati',
                label: 'Calopezzati'
            },
            {
                value: 'Calosso',
                label: 'Calosso'
            },
            {
                value: 'Caloveto',
                label: 'Caloveto'
            },
            {
                value: 'Caltabellotta',
                label: 'Caltabellotta'
            },
            {
                value: 'Caltagirone',
                label: 'Caltagirone'
            },
            {
                value: 'Caltanissetta',
                label: 'Caltanissetta'
            },
            {
                value: 'Caltavuturo',
                label: 'Caltavuturo'
            },
            {
                value: 'Caltignaga',
                label: 'Caltignaga'
            },
            {
                value: 'Calto',
                label: 'Calto'
            },
            {
                value: 'Caltrano',
                label: 'Caltrano'
            },
            {
                value: 'Calusco d\'Adda',
                label: 'Calusco d\'Adda'
            },
            {
                value: 'Caluso',
                label: 'Caluso'
            },
            {
                value: 'Calvagese della Riviera',
                label: 'Calvagese della Riviera'
            },
            {
                value: 'Calvanico',
                label: 'Calvanico'
            },
            {
                value: 'Calvatone',
                label: 'Calvatone'
            },
            {
                value: 'Calvello',
                label: 'Calvello'
            },
            {
                value: 'Calvene',
                label: 'Calvene'
            },
            {
                value: 'Calvenzano',
                label: 'Calvenzano'
            },
            {
                value: 'Calvera',
                label: 'Calvera'
            },
            {
                value: 'Calvi',
                label: 'Calvi'
            },
            {
                value: 'Calvi dell\'Umbria',
                label: 'Calvi dell\'Umbria'
            },
            {
                value: 'Calvi Risorta',
                label: 'Calvi Risorta'
            },
            {
                value: 'Calvignano',
                label: 'Calvignano'
            },
            {
                value: 'Calvignasco',
                label: 'Calvignasco'
            },
            {
                value: 'Calvisano',
                label: 'Calvisano'
            },
            {
                value: 'Calvizzano',
                label: 'Calvizzano'
            },
            {
                value: 'Camagna Monferrato',
                label: 'Camagna Monferrato'
            },
            {
                value: 'Camaiore',
                label: 'Camaiore'
            },
            {
                value: 'Camandona',
                label: 'Camandona'
            },
            {
                value: 'Camastra',
                label: 'Camastra'
            },
            {
                value: 'Cambiago',
                label: 'Cambiago'
            },
            {
                value: 'Cambiano',
                label: 'Cambiano'
            },
            {
                value: 'Cambiasca',
                label: 'Cambiasca'
            },
            {
                value: 'Camburzano',
                label: 'Camburzano'
            },
            {
                value: 'Camerana',
                label: 'Camerana'
            },
            {
                value: 'Camerano',
                label: 'Camerano'
            },
            {
                value: 'Camerano Casasco',
                label: 'Camerano Casasco'
            },
            {
                value: 'Camerata Cornello',
                label: 'Camerata Cornello'
            },
            {
                value: 'Camerata Nuova',
                label: 'Camerata Nuova'
            },
            {
                value: 'Camerata Picena',
                label: 'Camerata Picena'
            },
            {
                value: 'Cameri',
                label: 'Cameri'
            },
            {
                value: 'Camerino',
                label: 'Camerino'
            },
            {
                value: 'Camerota',
                label: 'Camerota'
            },
            {
                value: 'Camigliano',
                label: 'Camigliano'
            },
            {
                value: 'Camini',
                label: 'Camini'
            },
            {
                value: 'Camino',
                label: 'Camino'
            },
            {
                value: 'Camino al Tagliamento',
                label: 'Camino al Tagliamento'
            },
            {
                value: 'Camisano',
                label: 'Camisano'
            },
            {
                value: 'Camisano Vicentino',
                label: 'Camisano Vicentino'
            },
            {
                value: 'Cammarata',
                label: 'Cammarata'
            },
            {
                value: 'Camogli',
                label: 'Camogli'
            },
            {
                value: 'Campagna',
                label: 'Campagna'
            },
            {
                value: 'Campagna Lupia',
                label: 'Campagna Lupia'
            },
            {
                value: 'Campagnano di Roma',
                label: 'Campagnano di Roma'
            },
            {
                value: 'Campagnatico',
                label: 'Campagnatico'
            },
            {
                value: 'Campagnola Cremasca',
                label: 'Campagnola Cremasca'
            },
            {
                value: 'Campagnola Emilia',
                label: 'Campagnola Emilia'
            },
            {
                value: 'Campana',
                label: 'Campana'
            },
            {
                value: 'Camparada',
                label: 'Camparada'
            },
            {
                value: 'Campegine',
                label: 'Campegine'
            },
            {
                value: 'Campello sul Clitunno',
                label: 'Campello sul Clitunno'
            },
            {
                value: 'Campertogno',
                label: 'Campertogno'
            },
            {
                value: 'Campi Bisenzio',
                label: 'Campi Bisenzio'
            },
            {
                value: 'Campi Salentina',
                label: 'Campi Salentina'
            },
            {
                value: 'Campiglia Cervo',
                label: 'Campiglia Cervo'
            },
            {
                value: 'Campiglia dei Berici',
                label: 'Campiglia dei Berici'
            },
            {
                value: 'Campiglia Marittima',
                label: 'Campiglia Marittima'
            },
            {
                value: 'Campiglione Fenile',
                label: 'Campiglione Fenile'
            },
            {
                value: 'Campione d\'Italia',
                label: 'Campione d\'Italia'
            },
            {
                value: 'Campitello di Fassa',
                label: 'Campitello di Fassa'
            },
            {
                value: 'Campli',
                label: 'Campli'
            },
            {
                value: 'Campo Calabro',
                label: 'Campo Calabro'
            },
            {
                value: 'Campo di Giove',
                label: 'Campo di Giove'
            },
            {
                value: 'Campo di Trens',
                label: 'Campo di Trens'
            },
            {
                value: 'Campo Ligure',
                label: 'Campo Ligure'
            },
            {
                value: 'Campo nell\'Elba',
                label: 'Campo nell\'Elba'
            },
            {
                value: 'Campo San Martino',
                label: 'Campo San Martino'
            },
            {
                value: 'Campo Tures',
                label: 'Campo Tures'
            },
            {
                value: 'Campobasso',
                label: 'Campobasso'
            },
            {
                value: 'Campobello di Licata',
                label: 'Campobello di Licata'
            },
            {
                value: 'Campobello di Mazara',
                label: 'Campobello di Mazara'
            },
            {
                value: 'Campochiaro',
                label: 'Campochiaro'
            },
            {
                value: 'Campodarsego',
                label: 'Campodarsego'
            },
            {
                value: 'Campodenno',
                label: 'Campodenno'
            },
            {
                value: 'Campodimele',
                label: 'Campodimele'
            },
            {
                value: 'Campodipietra',
                label: 'Campodipietra'
            },
            {
                value: 'Campodolcino',
                label: 'Campodolcino'
            },
            {
                value: 'Campodoro',
                label: 'Campodoro'
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
                value: 'Campofilone',
                label: 'Campofilone'
            },
            {
                value: 'Campofiorito',
                label: 'Campofiorito'
            },
            {
                value: 'Campoformido',
                label: 'Campoformido'
            },
            {
                value: 'Campofranco',
                label: 'Campofranco'
            },
            {
                value: 'Campogalliano',
                label: 'Campogalliano'
            },
            {
                value: 'Campolattaro',
                label: 'Campolattaro'
            },
            {
                value: 'Campoli Appennino',
                label: 'Campoli Appennino'
            },
            {
                value: 'Campoli del Monte Taburno',
                label: 'Campoli del Monte Taburno'
            },
            {
                value: 'Campolieto',
                label: 'Campolieto'
            },
            {
                value: 'Campolongo Maggiore',
                label: 'Campolongo Maggiore'
            },
            {
                value: 'Campolongo Tapogliano',
                label: 'Campolongo Tapogliano'
            },
            {
                value: 'Campomaggiore',
                label: 'Campomaggiore'
            },
            {
                value: 'Campomarino',
                label: 'Campomarino'
            },
            {
                value: 'Campomorone',
                label: 'Campomorone'
            },
            {
                value: 'Camponogara',
                label: 'Camponogara'
            },
            {
                value: 'Campora',
                label: 'Campora'
            },
            {
                value: 'Camporeale',
                label: 'Camporeale'
            },
            {
                value: 'Camporgiano',
                label: 'Camporgiano'
            },
            {
                value: 'Camporosso',
                label: 'Camporosso'
            },
            {
                value: 'Camporotondo di Fiastrone',
                label: 'Camporotondo di Fiastrone'
            },
            {
                value: 'Camporotondo Etneo',
                label: 'Camporotondo Etneo'
            },
            {
                value: 'Camposampiero',
                label: 'Camposampiero'
            },
            {
                value: 'Camposano',
                label: 'Camposano'
            },
            {
                value: 'Camposanto',
                label: 'Camposanto'
            },
            {
                value: 'Campospinoso Albaredo',
                label: 'Campospinoso Albaredo'
            },
            {
                value: 'Campotosto',
                label: 'Campotosto'
            },
            {
                value: 'Camugnano',
                label: 'Camugnano'
            },
            {
                value: 'Canal San Bovo',
                label: 'Canal San Bovo'
            },
            {
                value: 'Canale',
                label: 'Canale'
            },
            {
                value: 'Canale d\'Agordo',
                label: 'Canale d\'Agordo'
            },
            {
                value: 'Canale Monterano',
                label: 'Canale Monterano'
            },
            {
                value: 'Canaro',
                label: 'Canaro'
            },
            {
                value: 'Canazei',
                label: 'Canazei'
            },
            {
                value: 'Cancellara',
                label: 'Cancellara'
            },
            {
                value: 'Cancello ed Arnone',
                label: 'Cancello ed Arnone'
            },
            {
                value: 'Canda',
                label: 'Canda'
            },
            {
                value: 'Candela',
                label: 'Candela'
            },
            {
                value: 'Candelo',
                label: 'Candelo'
            },
            {
                value: 'Candia Canavese',
                label: 'Candia Canavese'
            },
            {
                value: 'Candia Lomellina',
                label: 'Candia Lomellina'
            },
            {
                value: 'Candiana',
                label: 'Candiana'
            },
            {
                value: 'Candida',
                label: 'Candida'
            },
            {
                value: 'Candidoni',
                label: 'Candidoni'
            },
            {
                value: 'Candiolo',
                label: 'Candiolo'
            },
            {
                value: 'Canegrate',
                label: 'Canegrate'
            },
            {
                value: 'Canelli',
                label: 'Canelli'
            },
            {
                value: 'Canepina',
                label: 'Canepina'
            },
            {
                value: 'Caneva',
                label: 'Caneva'
            },
            {
                value: 'Canicattì',
                label: 'Canicattì'
            },
            {
                value: 'Canicattini Bagni',
                label: 'Canicattini Bagni'
            },
            {
                value: 'Canino',
                label: 'Canino'
            },
            {
                value: 'Canischio',
                label: 'Canischio'
            },
            {
                value: 'Canistro',
                label: 'Canistro'
            },
            {
                value: 'Canna',
                label: 'Canna'
            },
            {
                value: 'Cannalonga',
                label: 'Cannalonga'
            },
            {
                value: 'Cannara',
                label: 'Cannara'
            },
            {
                value: 'Cannero Riviera',
                label: 'Cannero Riviera'
            },
            {
                value: 'Canneto Pavese',
                label: 'Canneto Pavese'
            },
            {
                value: 'Canneto sull\'Oglio',
                label: 'Canneto sull\'Oglio'
            },
            {
                value: 'Cannobio',
                label: 'Cannobio'
            },
            {
                value: 'Cannole',
                label: 'Cannole'
            },
            {
                value: 'Canolo',
                label: 'Canolo'
            },
            {
                value: 'Canonica d\'Adda',
                label: 'Canonica d\'Adda'
            },
            {
                value: 'Canosa di Puglia',
                label: 'Canosa di Puglia'
            },
            {
                value: 'Canosa Sannita',
                label: 'Canosa Sannita'
            },
            {
                value: 'Canosio',
                label: 'Canosio'
            },
            {
                value: 'Canossa',
                label: 'Canossa'
            },
            {
                value: 'Cansano',
                label: 'Cansano'
            },
            {
                value: 'Cantagallo',
                label: 'Cantagallo'
            },
            {
                value: 'Cantalice',
                label: 'Cantalice'
            },
            {
                value: 'Cantalupa',
                label: 'Cantalupa'
            },
            {
                value: 'Cantalupo in Sabina',
                label: 'Cantalupo in Sabina'
            },
            {
                value: 'Cantalupo Ligure',
                label: 'Cantalupo Ligure'
            },
            {
                value: 'Cantalupo nel Sannio',
                label: 'Cantalupo nel Sannio'
            },
            {
                value: 'Cantarana',
                label: 'Cantarana'
            },
            {
                value: 'Cantello',
                label: 'Cantello'
            },
            {
                value: 'Canterano',
                label: 'Canterano'
            },
            {
                value: 'Cantiano',
                label: 'Cantiano'
            },
            {
                value: 'Cantoira',
                label: 'Cantoira'
            },
            {
                value: 'Cantù',
                label: 'Cantù'
            },
            {
                value: 'Canzano',
                label: 'Canzano'
            },
            {
                value: 'Canzo',
                label: 'Canzo'
            },
            {
                value: 'Caorle',
                label: 'Caorle'
            },
            {
                value: 'Caorso',
                label: 'Caorso'
            },
            {
                value: 'Capaccio Paestum',
                label: 'Capaccio Paestum'
            },
            {
                value: 'Capaci',
                label: 'Capaci'
            },
            {
                value: 'Capalbio',
                label: 'Capalbio'
            },
            {
                value: 'Capannoli',
                label: 'Capannoli'
            },
            {
                value: 'Capannori',
                label: 'Capannori'
            },
            {
                value: 'Capena',
                label: 'Capena'
            },
            {
                value: 'Capergnanica',
                label: 'Capergnanica'
            },
            {
                value: 'Capestrano',
                label: 'Capestrano'
            },
            {
                value: 'Capiago Intimiano',
                label: 'Capiago Intimiano'
            },
            {
                value: 'Capistrano',
                label: 'Capistrano'
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
                value: 'Capizzi',
                label: 'Capizzi'
            },
            {
                value: 'Capizzone',
                label: 'Capizzone'
            },
            {
                value: 'Capo d\'Orlando',
                label: 'Capo d\'Orlando'
            },
            {
                value: 'Capo di Ponte',
                label: 'Capo di Ponte'
            },
            {
                value: 'Capodimonte',
                label: 'Capodimonte'
            },
            {
                value: 'Capodrise',
                label: 'Capodrise'
            },
            {
                value: 'Capoliveri',
                label: 'Capoliveri'
            },
            {
                value: 'Capolona',
                label: 'Capolona'
            },
            {
                value: 'Caponago',
                label: 'Caponago'
            },
            {
                value: 'Caporciano',
                label: 'Caporciano'
            },
            {
                value: 'Caposele',
                label: 'Caposele'
            },
            {
                value: 'Capoterra',
                label: 'Capoterra'
            },
            {
                value: 'Capovalle',
                label: 'Capovalle'
            },
            {
                value: 'Cappadocia',
                label: 'Cappadocia'
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
                value: 'Cappella Maggiore',
                label: 'Cappella Maggiore'
            },
            {
                value: 'Cappelle sul Tavo',
                label: 'Cappelle sul Tavo'
            },
            {
                value: 'Capracotta',
                label: 'Capracotta'
            },
            {
                value: 'Capraia e Limite',
                label: 'Capraia e Limite'
            },
            {
                value: 'Capraia Isola',
                label: 'Capraia Isola'
            },
            {
                value: 'Capralba',
                label: 'Capralba'
            },
            {
                value: 'Capranica',
                label: 'Capranica'
            },
            {
                value: 'Capranica Prenestina',
                label: 'Capranica Prenestina'
            },
            {
                value: 'Caprarica di Lecce',
                label: 'Caprarica di Lecce'
            },
            {
                value: 'Caprarola',
                label: 'Caprarola'
            },
            {
                value: 'Caprauna',
                label: 'Caprauna'
            },
            {
                value: 'Caprese Michelangelo',
                label: 'Caprese Michelangelo'
            },
            {
                value: 'Caprezzo',
                label: 'Caprezzo'
            },
            {
                value: 'Capri',
                label: 'Capri'
            },
            {
                value: 'Capri Leone',
                label: 'Capri Leone'
            },
            {
                value: 'Capriana',
                label: 'Capriana'
            },
            {
                value: 'Capriano del Colle',
                label: 'Capriano del Colle'
            },
            {
                value: 'Capriata d\'Orba',
                label: 'Capriata d\'Orba'
            },
            {
                value: 'Capriate San Gervasio',
                label: 'Capriate San Gervasio'
            },
            {
                value: 'Capriati a Volturno',
                label: 'Capriati a Volturno'
            },
            {
                value: 'Caprie',
                label: 'Caprie'
            },
            {
                value: 'Capriglia Irpina',
                label: 'Capriglia Irpina'
            },
            {
                value: 'Capriglio',
                label: 'Capriglio'
            },
            {
                value: 'Caprile',
                label: 'Caprile'
            },
            {
                value: 'Caprino Bergamasco',
                label: 'Caprino Bergamasco'
            },
            {
                value: 'Caprino Veronese',
                label: 'Caprino Veronese'
            },
            {
                value: 'Capriolo',
                label: 'Capriolo'
            },
            {
                value: 'Capriva del Friuli',
                label: 'Capriva del Friuli'
            },
            {
                value: 'Capua',
                label: 'Capua'
            },
            {
                value: 'Capurso',
                label: 'Capurso'
            },
            {
                value: 'Caraffa del Bianco',
                label: 'Caraffa del Bianco'
            },
            {
                value: 'Caraffa di Catanzaro',
                label: 'Caraffa di Catanzaro'
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
                value: 'Caramanico Terme',
                label: 'Caramanico Terme'
            },
            {
                value: 'Carapelle',
                label: 'Carapelle'
            },
            {
                value: 'Carapelle Calvisio',
                label: 'Carapelle Calvisio'
            },
            {
                value: 'Carasco',
                label: 'Carasco'
            },
            {
                value: 'Carassai',
                label: 'Carassai'
            },
            {
                value: 'Carate Brianza',
                label: 'Carate Brianza'
            },
            {
                value: 'Carate Urio',
                label: 'Carate Urio'
            },
            {
                value: 'Caravaggio',
                label: 'Caravaggio'
            },
            {
                value: 'Caravate',
                label: 'Caravate'
            },
            {
                value: 'Caravino',
                label: 'Caravino'
            },
            {
                value: 'Caravonica',
                label: 'Caravonica'
            },
            {
                value: 'Carbognano',
                label: 'Carbognano'
            },
            {
                value: 'Carbonara al Ticino',
                label: 'Carbonara al Ticino'
            },
            {
                value: 'Carbonara di Nola',
                label: 'Carbonara di Nola'
            },
            {
                value: 'Carbonara Scrivia',
                label: 'Carbonara Scrivia'
            },
            {
                value: 'Carbonate',
                label: 'Carbonate'
            },
            {
                value: 'Carbone',
                label: 'Carbone'
            },
            {
                value: 'Carbonera',
                label: 'Carbonera'
            },
            {
                value: 'Carbonia',
                label: 'Carbonia'
            },
            {
                value: 'Carcare',
                label: 'Carcare'
            },
            {
                value: 'Carceri',
                label: 'Carceri'
            },
            {
                value: 'Carcoforo',
                label: 'Carcoforo'
            },
            {
                value: 'Cardano al Campo',
                label: 'Cardano al Campo'
            },
            {
                value: 'Cardè',
                label: 'Cardè'
            },
            {
                value: 'Cardedu',
                label: 'Cardedu'
            },
            {
                value: 'Cardeto',
                label: 'Cardeto'
            },
            {
                value: 'Cardinale',
                label: 'Cardinale'
            },
            {
                value: 'Cardito',
                label: 'Cardito'
            },
            {
                value: 'Careggine',
                label: 'Careggine'
            },
            {
                value: 'Carema',
                label: 'Carema'
            },
            {
                value: 'Carenno',
                label: 'Carenno'
            },
            {
                value: 'Carentino',
                label: 'Carentino'
            },
            {
                value: 'Careri',
                label: 'Careri'
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
                value: 'Carezzano',
                label: 'Carezzano'
            },
            {
                value: 'Carfizzi',
                label: 'Carfizzi'
            },
            {
                value: 'Cargeghe',
                label: 'Cargeghe'
            },
            {
                value: 'Cariati',
                label: 'Cariati'
            },
            {
                value: 'Carife',
                label: 'Carife'
            },
            {
                value: 'Carignano',
                label: 'Carignano'
            },
            {
                value: 'Carimate',
                label: 'Carimate'
            },
            {
                value: 'Carinaro',
                label: 'Carinaro'
            },
            {
                value: 'Carini',
                label: 'Carini'
            },
            {
                value: 'Carinola',
                label: 'Carinola'
            },
            {
                value: 'Carisio',
                label: 'Carisio'
            },
            {
                value: 'Carisolo',
                label: 'Carisolo'
            },
            {
                value: 'Carlantino',
                label: 'Carlantino'
            },
            {
                value: 'Carlazzo',
                label: 'Carlazzo'
            },
            {
                value: 'Carlentini',
                label: 'Carlentini'
            },
            {
                value: 'Carlino',
                label: 'Carlino'
            },
            {
                value: 'Carloforte',
                label: 'Carloforte'
            },
            {
                value: 'Carlopoli',
                label: 'Carlopoli'
            },
            {
                value: 'Carmagnola',
                label: 'Carmagnola'
            },
            {
                value: 'Carmiano',
                label: 'Carmiano'
            },
            {
                value: 'Carmignano',
                label: 'Carmignano'
            },
            {
                value: 'Carmignano di Brenta',
                label: 'Carmignano di Brenta'
            },
            {
                value: 'Carnago',
                label: 'Carnago'
            },
            {
                value: 'Carnate',
                label: 'Carnate'
            },
            {
                value: 'Carobbio degli Angeli',
                label: 'Carobbio degli Angeli'
            },
            {
                value: 'Carolei',
                label: 'Carolei'
            },
            {
                value: 'Carona',
                label: 'Carona'
            },
            {
                value: 'Caronia',
                label: 'Caronia'
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
                value: 'Carosino',
                label: 'Carosino'
            },
            {
                value: 'Carovigno',
                label: 'Carovigno'
            },
            {
                value: 'Carovilli',
                label: 'Carovilli'
            },
            {
                value: 'Carpaneto Piacentino',
                label: 'Carpaneto Piacentino'
            },
            {
                value: 'Carpanzano',
                label: 'Carpanzano'
            },
            {
                value: 'Carpegna',
                label: 'Carpegna'
            },
            {
                value: 'Carpenedolo',
                label: 'Carpenedolo'
            },
            {
                value: 'Carpeneto',
                label: 'Carpeneto'
            },
            {
                value: 'Carpi',
                label: 'Carpi'
            },
            {
                value: 'Carpiano',
                label: 'Carpiano'
            },
            {
                value: 'Carpignano Salentino',
                label: 'Carpignano Salentino'
            },
            {
                value: 'Carpignano Sesia',
                label: 'Carpignano Sesia'
            },
            {
                value: 'Carpineti',
                label: 'Carpineti'
            },
            {
                value: 'Carpineto della Nora',
                label: 'Carpineto della Nora'
            },
            {
                value: 'Carpineto Romano',
                label: 'Carpineto Romano'
            },
            {
                value: 'Carpineto Sinello',
                label: 'Carpineto Sinello'
            },
            {
                value: 'Carpino',
                label: 'Carpino'
            },
            {
                value: 'Carpinone',
                label: 'Carpinone'
            },
            {
                value: 'Carrara',
                label: 'Carrara'
            },
            {
                value: 'Carrè',
                label: 'Carrè'
            },
            {
                value: 'Carrega Ligure',
                label: 'Carrega Ligure'
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
                value: 'Carrosio',
                label: 'Carrosio'
            },
            {
                value: 'Carrù',
                label: 'Carrù'
            },
            {
                value: 'Carsoli',
                label: 'Carsoli'
            },
            {
                value: 'Cartigliano',
                label: 'Cartigliano'
            },
            {
                value: 'Cartignano',
                label: 'Cartignano'
            },
            {
                value: 'Cartoceto',
                label: 'Cartoceto'
            },
            {
                value: 'Cartosio',
                label: 'Cartosio'
            },
            {
                value: 'Cartura',
                label: 'Cartura'
            },
            {
                value: 'Carugate',
                label: 'Carugate'
            },
            {
                value: 'Carugo',
                label: 'Carugo'
            },
            {
                value: 'Carunchio',
                label: 'Carunchio'
            },
            {
                value: 'Carvico',
                label: 'Carvico'
            },
            {
                value: 'Carzano',
                label: 'Carzano'
            },
            {
                value: 'Casabona',
                label: 'Casabona'
            },
            {
                value: 'Casacalenda',
                label: 'Casacalenda'
            },
            {
                value: 'Casacanditella',
                label: 'Casacanditella'
            },
            {
                value: 'Casagiove',
                label: 'Casagiove'
            },
            {
                value: 'Casal Cermelli',
                label: 'Casal Cermelli'
            },
            {
                value: 'Casal di Principe',
                label: 'Casal di Principe'
            },
            {
                value: 'Casal Velino',
                label: 'Casal Velino'
            },
            {
                value: 'Casalanguida',
                label: 'Casalanguida'
            },
            {
                value: 'Casalattico',
                label: 'Casalattico'
            },
            {
                value: 'Casalbeltrame',
                label: 'Casalbeltrame'
            },
            {
                value: 'Casalbordino',
                label: 'Casalbordino'
            },
            {
                value: 'Casalbore',
                label: 'Casalbore'
            },
            {
                value: 'Casalborgone',
                label: 'Casalborgone'
            },
            {
                value: 'Casalbuono',
                label: 'Casalbuono'
            },
            {
                value: 'Casalbuttano ed Uniti',
                label: 'Casalbuttano ed Uniti'
            },
            {
                value: 'Casalciprano',
                label: 'Casalciprano'
            },
            {
                value: 'Casalduni',
                label: 'Casalduni'
            },
            {
                value: 'Casale Corte Cerro',
                label: 'Casale Corte Cerro'
            },
            {
                value: 'Casale Cremasco-Vidolasco',
                label: 'Casale Cremasco-Vidolasco'
            },
            {
                value: 'Casale di Scodosia',
                label: 'Casale di Scodosia'
            },
            {
                value: 'Casale Litta',
                label: 'Casale Litta'
            },
            {
                value: 'Casale Marittimo',
                label: 'Casale Marittimo'
            },
            {
                value: 'Casale Monferrato',
                label: 'Casale Monferrato'
            },
            {
                value: 'Casale sul Sile',
                label: 'Casale sul Sile'
            },
            {
                value: 'Casalecchio di Reno',
                label: 'Casalecchio di Reno'
            },
            {
                value: 'Casaleggio Boiro',
                label: 'Casaleggio Boiro'
            },
            {
                value: 'Casaleggio Novara',
                label: 'Casaleggio Novara'
            },
            {
                value: 'Casaleone',
                label: 'Casaleone'
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
                value: 'Casaletto Lodigiano',
                label: 'Casaletto Lodigiano'
            },
            {
                value: 'Casaletto Spartano',
                label: 'Casaletto Spartano'
            },
            {
                value: 'Casaletto Vaprio',
                label: 'Casaletto Vaprio'
            },
            {
                value: 'Casalfiumanese',
                label: 'Casalfiumanese'
            },
            {
                value: 'Casalgrande',
                label: 'Casalgrande'
            },
            {
                value: 'Casalgrasso',
                label: 'Casalgrasso'
            },
            {
                value: 'Casali del Manco',
                label: 'Casali del Manco'
            },
            {
                value: 'Casalincontrada',
                label: 'Casalincontrada'
            },
            {
                value: 'Casalino',
                label: 'Casalino'
            },
            {
                value: 'Casalmaggiore',
                label: 'Casalmaggiore'
            },
            {
                value: 'Casalmaiocco',
                label: 'Casalmaiocco'
            },
            {
                value: 'Casalmorano',
                label: 'Casalmorano'
            },
            {
                value: 'Casalmoro',
                label: 'Casalmoro'
            },
            {
                value: 'Casalnoceto',
                label: 'Casalnoceto'
            },
            {
                value: 'Casalnuovo di Napoli',
                label: 'Casalnuovo di Napoli'
            },
            {
                value: 'Casalnuovo Monterotaro',
                label: 'Casalnuovo Monterotaro'
            },
            {
                value: 'Casaloldo',
                label: 'Casaloldo'
            },
            {
                value: 'Casalpusterlengo',
                label: 'Casalpusterlengo'
            },
            {
                value: 'Casalromano',
                label: 'Casalromano'
            },
            {
                value: 'Casalserugo',
                label: 'Casalserugo'
            },
            {
                value: 'Casaluce',
                label: 'Casaluce'
            },
            {
                value: 'Casalvecchio di Puglia',
                label: 'Casalvecchio di Puglia'
            },
            {
                value: 'Casalvecchio Siculo',
                label: 'Casalvecchio Siculo'
            },
            {
                value: 'Casalvieri',
                label: 'Casalvieri'
            },
            {
                value: 'Casalvolone',
                label: 'Casalvolone'
            },
            {
                value: 'Casalzuigno',
                label: 'Casalzuigno'
            },
            {
                value: 'Casamarciano',
                label: 'Casamarciano'
            },
            {
                value: 'Casamassima',
                label: 'Casamassima'
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
                value: 'Casanova Elvo',
                label: 'Casanova Elvo'
            },
            {
                value: 'Casanova Lerrone',
                label: 'Casanova Lerrone'
            },
            {
                value: 'Casanova Lonati',
                label: 'Casanova Lonati'
            },
            {
                value: 'Casape',
                label: 'Casape'
            },
            {
                value: 'Casapesenna',
                label: 'Casapesenna'
            },
            {
                value: 'Casapinta',
                label: 'Casapinta'
            },
            {
                value: 'Casaprota',
                label: 'Casaprota'
            },
            {
                value: 'Casapulla',
                label: 'Casapulla'
            },
            {
                value: 'Casarano',
                label: 'Casarano'
            },
            {
                value: 'Casargo',
                label: 'Casargo'
            },
            {
                value: 'Casarile',
                label: 'Casarile'
            },
            {
                value: 'Casarsa della Delizia',
                label: 'Casarsa della Delizia'
            },
            {
                value: 'Casarza Ligure',
                label: 'Casarza Ligure'
            },
            {
                value: 'Casasco',
                label: 'Casasco'
            },
            {
                value: 'Casatenovo',
                label: 'Casatenovo'
            },
            {
                value: 'Casatisma',
                label: 'Casatisma'
            },
            {
                value: 'Casavatore',
                label: 'Casavatore'
            },
            {
                value: 'Casazza',
                label: 'Casazza'
            },
            {
                value: 'Cascia',
                label: 'Cascia'
            },
            {
                value: 'Casciago',
                label: 'Casciago'
            },
            {
                value: 'Casciana Terme Lari',
                label: 'Casciana Terme Lari'
            },
            {
                value: 'Cascina',
                label: 'Cascina'
            },
            {
                value: 'Cascinette d\'Ivrea',
                label: 'Cascinette d\'Ivrea'
            },
            {
                value: 'Casei Gerola',
                label: 'Casei Gerola'
            },
            {
                value: 'Caselette',
                label: 'Caselette'
            },
            {
                value: 'Casella',
                label: 'Casella'
            },
            {
                value: 'Caselle in Pittari',
                label: 'Caselle in Pittari'
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
                value: 'Caselle Torinese',
                label: 'Caselle Torinese'
            },
            {
                value: 'Caserta',
                label: 'Caserta'
            },
            {
                value: 'Casier',
                label: 'Casier'
            },
            {
                value: 'Casignana',
                label: 'Casignana'
            },
            {
                value: 'Casina',
                label: 'Casina'
            },
            {
                value: 'Casirate d\'Adda',
                label: 'Casirate d\'Adda'
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
                value: 'Casnigo',
                label: 'Casnigo'
            },
            {
                value: 'Casola di Napoli',
                label: 'Casola di Napoli'
            },
            {
                value: 'Casola in Lunigiana',
                label: 'Casola in Lunigiana'
            },
            {
                value: 'Casola Valsenio',
                label: 'Casola Valsenio'
            },
            {
                value: 'Casole d\'Elsa',
                label: 'Casole d\'Elsa'
            },
            {
                value: 'Casoli',
                label: 'Casoli'
            },
            {
                value: 'Casorate Primo',
                label: 'Casorate Primo'
            },
            {
                value: 'Casorate Sempione',
                label: 'Casorate Sempione'
            },
            {
                value: 'Casorezzo',
                label: 'Casorezzo'
            },
            {
                value: 'Casoria',
                label: 'Casoria'
            },
            {
                value: 'Casorzo Monferrato',
                label: 'Casorzo Monferrato'
            },
            {
                value: 'Casperia',
                label: 'Casperia'
            },
            {
                value: 'Caspoggio',
                label: 'Caspoggio'
            },
            {
                value: 'Cassacco',
                label: 'Cassacco'
            },
            {
                value: 'Cassago Brianza',
                label: 'Cassago Brianza'
            },
            {
                value: 'Cassano all\'Ionio',
                label: 'Cassano all\'Ionio'
            },
            {
                value: 'Cassano d\'Adda',
                label: 'Cassano d\'Adda'
            },
            {
                value: 'Cassano delle Murge',
                label: 'Cassano delle Murge'
            },
            {
                value: 'Cassano Irpino',
                label: 'Cassano Irpino'
            },
            {
                value: 'Cassano Magnago',
                label: 'Cassano Magnago'
            },
            {
                value: 'Cassano Spinola',
                label: 'Cassano Spinola'
            },
            {
                value: 'Cassano Valcuvia',
                label: 'Cassano Valcuvia'
            },
            {
                value: 'Cassaro',
                label: 'Cassaro'
            },
            {
                value: 'Cassiglio',
                label: 'Cassiglio'
            },
            {
                value: 'Cassina de\' Pecchi',
                label: 'Cassina de\' Pecchi'
            },
            {
                value: 'Cassina Rizzardi',
                label: 'Cassina Rizzardi'
            },
            {
                value: 'Cassina Valsassina',
                label: 'Cassina Valsassina'
            },
            {
                value: 'Cassinasco',
                label: 'Cassinasco'
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
                value: 'Cassinetta di Lugagnano',
                label: 'Cassinetta di Lugagnano'
            },
            {
                value: 'Cassino',
                label: 'Cassino'
            },
            {
                value: 'Cassola',
                label: 'Cassola'
            },
            {
                value: 'Cassolnovo',
                label: 'Cassolnovo'
            },
            {
                value: 'Castagnaro',
                label: 'Castagnaro'
            },
            {
                value: 'Castagneto Carducci',
                label: 'Castagneto Carducci'
            },
            {
                value: 'Castagneto Po',
                label: 'Castagneto Po'
            },
            {
                value: 'Castagnito',
                label: 'Castagnito'
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
                value: 'Castagnole Piemonte',
                label: 'Castagnole Piemonte'
            },
            {
                value: 'Castana',
                label: 'Castana'
            },
            {
                value: 'Castano Primo',
                label: 'Castano Primo'
            },
            {
                value: 'Casteggio',
                label: 'Casteggio'
            },
            {
                value: 'Castegnato',
                label: 'Castegnato'
            },
            {
                value: 'Castegnero',
                label: 'Castegnero'
            },
            {
                value: 'Castel Baronia',
                label: 'Castel Baronia'
            },
            {
                value: 'Castel Boglione',
                label: 'Castel Boglione'
            },
            {
                value: 'Castel Bolognese',
                label: 'Castel Bolognese'
            },
            {
                value: 'Castel Campagnano',
                label: 'Castel Campagnano'
            },
            {
                value: 'Castel Castagna',
                label: 'Castel Castagna'
            },
            {
                value: 'Castel Condino',
                label: 'Castel Condino'
            },
            {
                value: 'Castel d\'Aiano',
                label: 'Castel d\'Aiano'
            },
            {
                value: 'Castel d\'Ario',
                label: 'Castel d\'Ario'
            },
            {
                value: 'Castel d\'Azzano',
                label: 'Castel d\'Azzano'
            },
            {
                value: 'Castel del Giudice',
                label: 'Castel del Giudice'
            },
            {
                value: 'Castel del Monte',
                label: 'Castel del Monte'
            },
            {
                value: 'Castel del Piano',
                label: 'Castel del Piano'
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
                value: 'Castel di Ieri',
                label: 'Castel di Ieri'
            },
            {
                value: 'Castel di Iudica',
                label: 'Castel di Iudica'
            },
            {
                value: 'Castel di Lama',
                label: 'Castel di Lama'
            },
            {
                value: 'Castel di Lucio',
                label: 'Castel di Lucio'
            },
            {
                value: 'Castel di Sangro',
                label: 'Castel di Sangro'
            },
            {
                value: 'Castel di Sasso',
                label: 'Castel di Sasso'
            },
            {
                value: 'Castel di Tora',
                label: 'Castel di Tora'
            },
            {
                value: 'Castel Focognano',
                label: 'Castel Focognano'
            },
            {
                value: 'Castel Frentano',
                label: 'Castel Frentano'
            },
            {
                value: 'Castel Gabbiano',
                label: 'Castel Gabbiano'
            },
            {
                value: 'Castel Gandolfo',
                label: 'Castel Gandolfo'
            },
            {
                value: 'Castel Giorgio',
                label: 'Castel Giorgio'
            },
            {
                value: 'Castel Goffredo',
                label: 'Castel Goffredo'
            },
            {
                value: 'Castel Guelfo di Bologna',
                label: 'Castel Guelfo di Bologna'
            },
            {
                value: 'Castel Ivano',
                label: 'Castel Ivano'
            },
            {
                value: 'Castel Madama',
                label: 'Castel Madama'
            },
            {
                value: 'Castel Maggiore',
                label: 'Castel Maggiore'
            },
            {
                value: 'Castel Mella',
                label: 'Castel Mella'
            },
            {
                value: 'Castel Morrone',
                label: 'Castel Morrone'
            },
            {
                value: 'Castel Ritaldi',
                label: 'Castel Ritaldi'
            },
            {
                value: 'Castel Rocchero',
                label: 'Castel Rocchero'
            },
            {
                value: 'Castel Rozzone',
                label: 'Castel Rozzone'
            },
            {
                value: 'Castel San Giorgio',
                label: 'Castel San Giorgio'
            },
            {
                value: 'Castel San Giovanni',
                label: 'Castel San Giovanni'
            },
            {
                value: 'Castel San Lorenzo',
                label: 'Castel San Lorenzo'
            },
            {
                value: 'Castel San Niccolò',
                label: 'Castel San Niccolò'
            },
            {
                value: 'Castel San Pietro Romano',
                label: 'Castel San Pietro Romano'
            },
            {
                value: 'Castel San Pietro Terme',
                label: 'Castel San Pietro Terme'
            },
            {
                value: 'Castel San Vincenzo',
                label: 'Castel San Vincenzo'
            },
            {
                value: 'Castel Sant\'Angelo',
                label: 'Castel Sant\'Angelo'
            },
            {
                value: 'Castel Sant\'Elia',
                label: 'Castel Sant\'Elia'
            },
            {
                value: 'Castel Viscardo',
                label: 'Castel Viscardo'
            },
            {
                value: 'Castel Vittorio',
                label: 'Castel Vittorio'
            },
            {
                value: 'Castel Volturno',
                label: 'Castel Volturno'
            },
            {
                value: 'Castelbaldo',
                label: 'Castelbaldo'
            },
            {
                value: 'Castelbelforte',
                label: 'Castelbelforte'
            },
            {
                value: 'Castelbellino',
                label: 'Castelbellino'
            },
            {
                value: 'Castelbello-Ciardes',
                label: 'Castelbello-Ciardes'
            },
            {
                value: 'Castelbianco',
                label: 'Castelbianco'
            },
            {
                value: 'Castelbottaccio',
                label: 'Castelbottaccio'
            },
            {
                value: 'Castelbuono',
                label: 'Castelbuono'
            },
            {
                value: 'Castelcivita',
                label: 'Castelcivita'
            },
            {
                value: 'Castelcovati',
                label: 'Castelcovati'
            },
            {
                value: 'Castelcucco',
                label: 'Castelcucco'
            },
            {
                value: 'Casteldaccia',
                label: 'Casteldaccia'
            },
            {
                value: 'Casteldelci',
                label: 'Casteldelci'
            },
            {
                value: 'Casteldelfino',
                label: 'Casteldelfino'
            },
            {
                value: 'Casteldidone',
                label: 'Casteldidone'
            },
            {
                value: 'Castelfidardo',
                label: 'Castelfidardo'
            },
            {
                value: 'Castelfiorentino',
                label: 'Castelfiorentino'
            },
            {
                value: 'Castelforte',
                label: 'Castelforte'
            },
            {
                value: 'Castelfranci',
                label: 'Castelfranci'
            },
            {
                value: 'Castelfranco di Sotto',
                label: 'Castelfranco di Sotto'
            },
            {
                value: 'Castelfranco Emilia',
                label: 'Castelfranco Emilia'
            },
            {
                value: 'Castelfranco in Miscano',
                label: 'Castelfranco in Miscano'
            },
            {
                value: 'Castelfranco Piandiscò',
                label: 'Castelfranco Piandiscò'
            },
            {
                value: 'Castelfranco Veneto',
                label: 'Castelfranco Veneto'
            },
            {
                value: 'Castelgerundo',
                label: 'Castelgerundo'
            },
            {
                value: 'Castelgomberto',
                label: 'Castelgomberto'
            },
            {
                value: 'Castelgrande',
                label: 'Castelgrande'
            },
            {
                value: 'Castelguglielmo',
                label: 'Castelguglielmo'
            },
            {
                value: 'Castelguidone',
                label: 'Castelguidone'
            },
            {
                value: 'Castell\'Alfero',
                label: 'Castell\'Alfero'
            },
            {
                value: 'Castell\'Arquato',
                label: 'Castell\'Arquato'
            },
            {
                value: 'Castell\'Azzara',
                label: 'Castell\'Azzara'
            },
            {
                value: 'Castell\'Umberto',
                label: 'Castell\'Umberto'
            },
            {
                value: 'Castellabate',
                label: 'Castellabate'
            },
            {
                value: 'Castellafiume',
                label: 'Castellafiume'
            },
            {
                value: 'Castellalto',
                label: 'Castellalto'
            },
            {
                value: 'Castellammare del Golfo',
                label: 'Castellammare del Golfo'
            },
            {
                value: 'Castellammare di Stabia',
                label: 'Castellammare di Stabia'
            },
            {
                value: 'Castellamonte',
                label: 'Castellamonte'
            },
            {
                value: 'Castellana Grotte',
                label: 'Castellana Grotte'
            },
            {
                value: 'Castellana Sicula',
                label: 'Castellana Sicula'
            },
            {
                value: 'Castellaneta',
                label: 'Castellaneta'
            },
            {
                value: 'Castellania Coppi',
                label: 'Castellania Coppi'
            },
            {
                value: 'Castellanza',
                label: 'Castellanza'
            },
            {
                value: 'Castellar Guidobono',
                label: 'Castellar Guidobono'
            },
            {
                value: 'Castellarano',
                label: 'Castellarano'
            },
            {
                value: 'Castellaro',
                label: 'Castellaro'
            },
            {
                value: 'Castellazzo Bormida',
                label: 'Castellazzo Bormida'
            },
            {
                value: 'Castellazzo Novarese',
                label: 'Castellazzo Novarese'
            },
            {
                value: 'Castelleone',
                label: 'Castelleone'
            },
            {
                value: 'Castelleone di Suasa',
                label: 'Castelleone di Suasa'
            },
            {
                value: 'Castellero',
                label: 'Castellero'
            },
            {
                value: 'Castelletto Cervo',
                label: 'Castelletto Cervo'
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
                value: 'Castelletto di Branduzzo',
                label: 'Castelletto di Branduzzo'
            },
            {
                value: 'Castelletto Merli',
                label: 'Castelletto Merli'
            },
            {
                value: 'Castelletto Molina',
                label: 'Castelletto Molina'
            },
            {
                value: 'Castelletto Monferrato',
                label: 'Castelletto Monferrato'
            },
            {
                value: 'Castelletto sopra Ticino',
                label: 'Castelletto sopra Ticino'
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
                value: 'Castelli',
                label: 'Castelli'
            },
            {
                value: 'Castelli Calepio',
                label: 'Castelli Calepio'
            },
            {
                value: 'Castellina in Chianti',
                label: 'Castellina in Chianti'
            },
            {
                value: 'Castellina Marittima',
                label: 'Castellina Marittima'
            },
            {
                value: 'Castellinaldo d\'Alba',
                label: 'Castellinaldo d\'Alba'
            },
            {
                value: 'Castellino del Biferno',
                label: 'Castellino del Biferno'
            },
            {
                value: 'Castellino Tanaro',
                label: 'Castellino Tanaro'
            },
            {
                value: 'Castelliri',
                label: 'Castelliri'
            },
            {
                value: 'Castello Cabiaglio',
                label: 'Castello Cabiaglio'
            },
            {
                value: 'Castello d\'Agogna',
                label: 'Castello d\'Agogna'
            },
            {
                value: 'Castello d\'Argile',
                label: 'Castello d\'Argile'
            },
            {
                value: 'Castello del Matese',
                label: 'Castello del Matese'
            },
            {
                value: 'Castello dell\'Acqua',
                label: 'Castello dell\'Acqua'
            },
            {
                value: 'Castello di Annone',
                label: 'Castello di Annone'
            },
            {
                value: 'Castello di Brianza',
                label: 'Castello di Brianza'
            },
            {
                value: 'Castello di Cisterna',
                label: 'Castello di Cisterna'
            },
            {
                value: 'Castello di Godego',
                label: 'Castello di Godego'
            },
            {
                value: 'Castello Tesino',
                label: 'Castello Tesino'
            },
            {
                value: 'Castello-Molina di Fiemme',
                label: 'Castello-Molina di Fiemme'
            },
            {
                value: 'Castellucchio',
                label: 'Castellucchio'
            },
            {
                value: 'Castelluccio dei Sauri',
                label: 'Castelluccio dei Sauri'
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
                value: 'Castelluccio Valmaggiore',
                label: 'Castelluccio Valmaggiore'
            },
            {
                value: 'Castelmagno',
                label: 'Castelmagno'
            },
            {
                value: 'Castelmarte',
                label: 'Castelmarte'
            },
            {
                value: 'Castelmassa',
                label: 'Castelmassa'
            },
            {
                value: 'Castelmauro',
                label: 'Castelmauro'
            },
            {
                value: 'Castelmezzano',
                label: 'Castelmezzano'
            },
            {
                value: 'Castelmola',
                label: 'Castelmola'
            },
            {
                value: 'Castelnovetto',
                label: 'Castelnovetto'
            },
            {
                value: 'Castelnovo Bariano',
                label: 'Castelnovo Bariano'
            },
            {
                value: 'Castelnovo del Friuli',
                label: 'Castelnovo del Friuli'
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
                value: 'Castelnuovo',
                label: 'Castelnuovo'
            },
            {
                value: 'Castelnuovo Belbo',
                label: 'Castelnuovo Belbo'
            },
            {
                value: 'Castelnuovo Berardenga',
                label: 'Castelnuovo Berardenga'
            },
            {
                value: 'Castelnuovo Bocca d\'Adda',
                label: 'Castelnuovo Bocca d\'Adda'
            },
            {
                value: 'Castelnuovo Bormida',
                label: 'Castelnuovo Bormida'
            },
            {
                value: 'Castelnuovo Bozzente',
                label: 'Castelnuovo Bozzente'
            },
            {
                value: 'Castelnuovo Calcea',
                label: 'Castelnuovo Calcea'
            },
            {
                value: 'Castelnuovo Cilento',
                label: 'Castelnuovo Cilento'
            },
            {
                value: 'Castelnuovo del Garda',
                label: 'Castelnuovo del Garda'
            },
            {
                value: 'Castelnuovo della Daunia',
                label: 'Castelnuovo della Daunia'
            },
            {
                value: 'Castelnuovo di Ceva',
                label: 'Castelnuovo di Ceva'
            },
            {
                value: 'Castelnuovo di Conza',
                label: 'Castelnuovo di Conza'
            },
            {
                value: 'Castelnuovo di Farfa',
                label: 'Castelnuovo di Farfa'
            },
            {
                value: 'Castelnuovo di Garfagnana',
                label: 'Castelnuovo di Garfagnana'
            },
            {
                value: 'Castelnuovo di Porto',
                label: 'Castelnuovo di Porto'
            },
            {
                value: 'Castelnuovo di Val di Cecina',
                label: 'Castelnuovo di Val di Cecina'
            },
            {
                value: 'Castelnuovo Don Bosco',
                label: 'Castelnuovo Don Bosco'
            },
            {
                value: 'Castelnuovo Magra',
                label: 'Castelnuovo Magra'
            },
            {
                value: 'Castelnuovo Nigra',
                label: 'Castelnuovo Nigra'
            },
            {
                value: 'Castelnuovo Parano',
                label: 'Castelnuovo Parano'
            },
            {
                value: 'Castelnuovo Rangone',
                label: 'Castelnuovo Rangone'
            },
            {
                value: 'Castelnuovo Scrivia',
                label: 'Castelnuovo Scrivia'
            },
            {
                value: 'Castelpagano',
                label: 'Castelpagano'
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
                value: 'Castelplanio',
                label: 'Castelplanio'
            },
            {
                value: 'Castelpoto',
                label: 'Castelpoto'
            },
            {
                value: 'Castelraimondo',
                label: 'Castelraimondo'
            },
            {
                value: 'Castelrotto',
                label: 'Castelrotto'
            },
            {
                value: 'Castelsantangelo sul Nera',
                label: 'Castelsantangelo sul Nera'
            },
            {
                value: 'Castelsaraceno',
                label: 'Castelsaraceno'
            },
            {
                value: 'Castelsardo',
                label: 'Castelsardo'
            },
            {
                value: 'Castelseprio',
                label: 'Castelseprio'
            },
            {
                value: 'Castelsilano',
                label: 'Castelsilano'
            },
            {
                value: 'Castelspina',
                label: 'Castelspina'
            },
            {
                value: 'Casteltermini',
                label: 'Casteltermini'
            },
            {
                value: 'Castelveccana',
                label: 'Castelveccana'
            },
            {
                value: 'Castelvecchio Calvisio',
                label: 'Castelvecchio Calvisio'
            },
            {
                value: 'Castelvecchio di Rocca Barbena',
                label: 'Castelvecchio di Rocca Barbena'
            },
            {
                value: 'Castelvecchio Subequo',
                label: 'Castelvecchio Subequo'
            },
            {
                value: 'Castelvenere',
                label: 'Castelvenere'
            },
            {
                value: 'Castelverde',
                label: 'Castelverde'
            },
            {
                value: 'Castelverrino',
                label: 'Castelverrino'
            },
            {
                value: 'Castelvetere in Val Fortore',
                label: 'Castelvetere in Val Fortore'
            },
            {
                value: 'Castelvetere sul Calore',
                label: 'Castelvetere sul Calore'
            },
            {
                value: 'Castelvetrano',
                label: 'Castelvetrano'
            },
            {
                value: 'Castelvetro di Modena',
                label: 'Castelvetro di Modena'
            },
            {
                value: 'Castelvetro Piacentino',
                label: 'Castelvetro Piacentino'
            },
            {
                value: 'Castelvisconti',
                label: 'Castelvisconti'
            },
            {
                value: 'Castenaso',
                label: 'Castenaso'
            },
            {
                value: 'Castenedolo',
                label: 'Castenedolo'
            },
            {
                value: 'Castiadas',
                label: 'Castiadas'
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
                value: 'Castiglione a Casauria',
                label: 'Castiglione a Casauria'
            },
            {
                value: 'Castiglione Chiavarese',
                label: 'Castiglione Chiavarese'
            },
            {
                value: 'Castiglione Cosentino',
                label: 'Castiglione Cosentino'
            },
            {
                value: 'Castiglione d\'Adda',
                label: 'Castiglione d\'Adda'
            },
            {
                value: 'Castiglione d\'Orcia',
                label: 'Castiglione d\'Orcia'
            },
            {
                value: 'Castiglione dei Pepoli',
                label: 'Castiglione dei Pepoli'
            },
            {
                value: 'Castiglione del Genovesi',
                label: 'Castiglione del Genovesi'
            },
            {
                value: 'Castiglione del Lago',
                label: 'Castiglione del Lago'
            },
            {
                value: 'Castiglione della Pescaia',
                label: 'Castiglione della Pescaia'
            },
            {
                value: 'Castiglione delle Stiviere',
                label: 'Castiglione delle Stiviere'
            },
            {
                value: 'Castiglione di Garfagnana',
                label: 'Castiglione di Garfagnana'
            },
            {
                value: 'Castiglione di Sicilia',
                label: 'Castiglione di Sicilia'
            },
            {
                value: 'Castiglione Falletto',
                label: 'Castiglione Falletto'
            },
            {
                value: 'Castiglione in Teverina',
                label: 'Castiglione in Teverina'
            },
            {
                value: 'Castiglione Messer Marino',
                label: 'Castiglione Messer Marino'
            },
            {
                value: 'Castiglione Messer Raimondo',
                label: 'Castiglione Messer Raimondo'
            },
            {
                value: 'Castiglione Olona',
                label: 'Castiglione Olona'
            },
            {
                value: 'Castiglione Tinella',
                label: 'Castiglione Tinella'
            },
            {
                value: 'Castiglione Torinese',
                label: 'Castiglione Torinese'
            },
            {
                value: 'Castignano',
                label: 'Castignano'
            },
            {
                value: 'Castilenti',
                label: 'Castilenti'
            },
            {
                value: 'Castino',
                label: 'Castino'
            },
            {
                value: 'Castione Andevenno',
                label: 'Castione Andevenno'
            },
            {
                value: 'Castione della Presolana',
                label: 'Castione della Presolana'
            },
            {
                value: 'Castions di Strada',
                label: 'Castions di Strada'
            },
            {
                value: 'Castiraga Vidardo',
                label: 'Castiraga Vidardo'
            },
            {
                value: 'Casto',
                label: 'Casto'
            },
            {
                value: 'Castorano',
                label: 'Castorano'
            },
            {
                value: 'Castrezzato',
                label: 'Castrezzato'
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
                value: 'Castro',
                label: 'Castro'
            },
            {
                value: 'Castro dei Volsci',
                label: 'Castro dei Volsci'
            },
            {
                value: 'Castrocaro Terme e Terra del Sole',
                label: 'Castrocaro Terme e Terra del Sole'
            },
            {
                value: 'Castrocielo',
                label: 'Castrocielo'
            },
            {
                value: 'Castrofilippo',
                label: 'Castrofilippo'
            },
            {
                value: 'Castrolibero',
                label: 'Castrolibero'
            },
            {
                value: 'Castronno',
                label: 'Castronno'
            },
            {
                value: 'Castronovo di Sicilia',
                label: 'Castronovo di Sicilia'
            },
            {
                value: 'Castronuovo di Sant\'Andrea',
                label: 'Castronuovo di Sant\'Andrea'
            },
            {
                value: 'Castropignano',
                label: 'Castropignano'
            },
            {
                value: 'Castroreale',
                label: 'Castroreale'
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
                value: 'Catania',
                label: 'Catania'
            },
            {
                value: 'Catanzaro',
                label: 'Catanzaro'
            },
            {
                value: 'Catenanuova',
                label: 'Catenanuova'
            },
            {
                value: 'Catignano',
                label: 'Catignano'
            },
            {
                value: 'Cattolica',
                label: 'Cattolica'
            },
            {
                value: 'Cattolica Eraclea',
                label: 'Cattolica Eraclea'
            },
            {
                value: 'Caulonia',
                label: 'Caulonia'
            },
            {
                value: 'Cautano',
                label: 'Cautano'
            },
            {
                value: 'Cava de\' Tirreni',
                label: 'Cava de\' Tirreni'
            },
            {
                value: 'Cava Manara',
                label: 'Cava Manara'
            },
            {
                value: 'Cavaglià',
                label: 'Cavaglià'
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
                value: 'Cavagnolo',
                label: 'Cavagnolo'
            },
            {
                value: 'Cavaion Veronese',
                label: 'Cavaion Veronese'
            },
            {
                value: 'Cavalese',
                label: 'Cavalese'
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
                value: 'Cavallino',
                label: 'Cavallino'
            },
            {
                value: 'Cavallino-Treporti',
                label: 'Cavallino-Treporti'
            },
            {
                value: 'Cavallirio',
                label: 'Cavallirio'
            },
            {
                value: 'Cavareno',
                label: 'Cavareno'
            },
            {
                value: 'Cavargna',
                label: 'Cavargna'
            },
            {
                value: 'Cavaria con Premezzo',
                label: 'Cavaria con Premezzo'
            },
            {
                value: 'Cavarzere',
                label: 'Cavarzere'
            },
            {
                value: 'Cavaso del Tomba',
                label: 'Cavaso del Tomba'
            },
            {
                value: 'Cavasso Nuovo',
                label: 'Cavasso Nuovo'
            },
            {
                value: 'Cavatore',
                label: 'Cavatore'
            },
            {
                value: 'Cavazzo Carnico',
                label: 'Cavazzo Carnico'
            },
            {
                value: 'Cave',
                label: 'Cave'
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
                value: 'Cavenago d\'Adda',
                label: 'Cavenago d\'Adda'
            },
            {
                value: 'Cavenago di Brianza',
                label: 'Cavenago di Brianza'
            },
            {
                value: 'Cavernago',
                label: 'Cavernago'
            },
            {
                value: 'Cavezzo',
                label: 'Cavezzo'
            },
            {
                value: 'Cavizzana',
                label: 'Cavizzana'
            },
            {
                value: 'Cavour',
                label: 'Cavour'
            },
            {
                value: 'Cavriago',
                label: 'Cavriago'
            },
            {
                value: 'Cavriana',
                label: 'Cavriana'
            },
            {
                value: 'Cavriglia',
                label: 'Cavriglia'
            },
            {
                value: 'Cazzago Brabbia',
                label: 'Cazzago Brabbia'
            },
            {
                value: 'Cazzago San Martino',
                label: 'Cazzago San Martino'
            },
            {
                value: 'Cazzano di Tramigna',
                label: 'Cazzano di Tramigna'
            },
            {
                value: 'Cazzano Sant\'Andrea',
                label: 'Cazzano Sant\'Andrea'
            },
            {
                value: 'Ceccano',
                label: 'Ceccano'
            },
            {
                value: 'Cecima',
                label: 'Cecima'
            },
            {
                value: 'Cecina',
                label: 'Cecina'
            },
            {
                value: 'Cedegolo',
                label: 'Cedegolo'
            },
            {
                value: 'Cedrasco',
                label: 'Cedrasco'
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
                value: 'Ceggia',
                label: 'Ceggia'
            },
            {
                value: 'Ceglie Messapica',
                label: 'Ceglie Messapica'
            },
            {
                value: 'Celano',
                label: 'Celano'
            },
            {
                value: 'Celenza sul Trigno',
                label: 'Celenza sul Trigno'
            },
            {
                value: 'Celenza Valfortore',
                label: 'Celenza Valfortore'
            },
            {
                value: 'Celico',
                label: 'Celico'
            },
            {
                value: 'Cella Dati',
                label: 'Cella Dati'
            },
            {
                value: 'Cella Monte',
                label: 'Cella Monte'
            },
            {
                value: 'Cellamare',
                label: 'Cellamare'
            },
            {
                value: 'Cellara',
                label: 'Cellara'
            },
            {
                value: 'Cellarengo',
                label: 'Cellarengo'
            },
            {
                value: 'Cellatica',
                label: 'Cellatica'
            },
            {
                value: 'Celle di Bulgheria',
                label: 'Celle di Bulgheria'
            },
            {
                value: 'Celle di Macra',
                label: 'Celle di Macra'
            },
            {
                value: 'Celle di San Vito',
                label: 'Celle di San Vito'
            },
            {
                value: 'Celle Enomondo',
                label: 'Celle Enomondo'
            },
            {
                value: 'Celle Ligure',
                label: 'Celle Ligure'
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
                value: 'Cellino Attanasio',
                label: 'Cellino Attanasio'
            },
            {
                value: 'Cellino San Marco',
                label: 'Cellino San Marco'
            },
            {
                value: 'Cellio con Breia',
                label: 'Cellio con Breia'
            },
            {
                value: 'Cellole',
                label: 'Cellole'
            },
            {
                value: 'Cembra Lisignago',
                label: 'Cembra Lisignago'
            },
            {
                value: 'Cenadi',
                label: 'Cenadi'
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
                value: 'Cencenighe Agordino',
                label: 'Cencenighe Agordino'
            },
            {
                value: 'Cene',
                label: 'Cene'
            },
            {
                value: 'Ceneselli',
                label: 'Ceneselli'
            },
            {
                value: 'Cengio',
                label: 'Cengio'
            },
            {
                value: 'Centallo',
                label: 'Centallo'
            },
            {
                value: 'Cento',
                label: 'Cento'
            },
            {
                value: 'Centola',
                label: 'Centola'
            },
            {
                value: 'Centrache',
                label: 'Centrache'
            },
            {
                value: 'Centro Valle Intelvi',
                label: 'Centro Valle Intelvi'
            },
            {
                value: 'Centuripe',
                label: 'Centuripe'
            },
            {
                value: 'Cepagatti',
                label: 'Cepagatti'
            },
            {
                value: 'Ceppaloni',
                label: 'Ceppaloni'
            },
            {
                value: 'Ceppo Morelli',
                label: 'Ceppo Morelli'
            },
            {
                value: 'Ceprano',
                label: 'Ceprano'
            },
            {
                value: 'Cerami',
                label: 'Cerami'
            },
            {
                value: 'Ceranesi',
                label: 'Ceranesi'
            },
            {
                value: 'Cerano',
                label: 'Cerano'
            },
            {
                value: 'Cerano d\'Intelvi',
                label: 'Cerano d\'Intelvi'
            },
            {
                value: 'Ceranova',
                label: 'Ceranova'
            },
            {
                value: 'Ceraso',
                label: 'Ceraso'
            },
            {
                value: 'Cercemaggiore',
                label: 'Cercemaggiore'
            },
            {
                value: 'Cercenasco',
                label: 'Cercenasco'
            },
            {
                value: 'Cercepiccola',
                label: 'Cercepiccola'
            },
            {
                value: 'Cerchiara di Calabria',
                label: 'Cerchiara di Calabria'
            },
            {
                value: 'Cerchio',
                label: 'Cerchio'
            },
            {
                value: 'Cercino',
                label: 'Cercino'
            },
            {
                value: 'Cercivento',
                label: 'Cercivento'
            },
            {
                value: 'Cercola',
                label: 'Cercola'
            },
            {
                value: 'Cerda',
                label: 'Cerda'
            },
            {
                value: 'Cerea',
                label: 'Cerea'
            },
            {
                value: 'Ceregnano',
                label: 'Ceregnano'
            },
            {
                value: 'Cerenzia',
                label: 'Cerenzia'
            },
            {
                value: 'Ceres',
                label: 'Ceres'
            },
            {
                value: 'Ceresara',
                label: 'Ceresara'
            },
            {
                value: 'Cereseto',
                label: 'Cereseto'
            },
            {
                value: 'Ceresole Alba',
                label: 'Ceresole Alba'
            },
            {
                value: 'Ceresole Reale',
                label: 'Ceresole Reale'
            },
            {
                value: 'Cerete',
                label: 'Cerete'
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
                value: 'Ceriale',
                label: 'Ceriale'
            },
            {
                value: 'Ceriana',
                label: 'Ceriana'
            },
            {
                value: 'Ceriano Laghetto',
                label: 'Ceriano Laghetto'
            },
            {
                value: 'Cerignale',
                label: 'Cerignale'
            },
            {
                value: 'Cerignola',
                label: 'Cerignola'
            },
            {
                value: 'Cerisano',
                label: 'Cerisano'
            },
            {
                value: 'Cermenate',
                label: 'Cermenate'
            },
            {
                value: 'Cermes',
                label: 'Cermes'
            },
            {
                value: 'Cermignano',
                label: 'Cermignano'
            },
            {
                value: 'Cernobbio',
                label: 'Cernobbio'
            },
            {
                value: 'Cernusco Lombardone',
                label: 'Cernusco Lombardone'
            },
            {
                value: 'Cernusco sul Naviglio',
                label: 'Cernusco sul Naviglio'
            },
            {
                value: 'Cerreto d\'Asti',
                label: 'Cerreto d\'Asti'
            },
            {
                value: 'Cerreto d\'Esi',
                label: 'Cerreto d\'Esi'
            },
            {
                value: 'Cerreto di Spoleto',
                label: 'Cerreto di Spoleto'
            },
            {
                value: 'Cerreto Grue',
                label: 'Cerreto Grue'
            },
            {
                value: 'Cerreto Guidi',
                label: 'Cerreto Guidi'
            },
            {
                value: 'Cerreto Laziale',
                label: 'Cerreto Laziale'
            },
            {
                value: 'Cerreto Sannita',
                label: 'Cerreto Sannita'
            },
            {
                value: 'Cerretto Langhe',
                label: 'Cerretto Langhe'
            },
            {
                value: 'Cerrina Monferrato',
                label: 'Cerrina Monferrato'
            },
            {
                value: 'Cerrione',
                label: 'Cerrione'
            },
            {
                value: 'Cerro al Lambro',
                label: 'Cerro al Lambro'
            },
            {
                value: 'Cerro al Volturno',
                label: 'Cerro al Volturno'
            },
            {
                value: 'Cerro Maggiore',
                label: 'Cerro Maggiore'
            },
            {
                value: 'Cerro Tanaro',
                label: 'Cerro Tanaro'
            },
            {
                value: 'Cerro Veronese',
                label: 'Cerro Veronese'
            },
            {
                value: 'Cersosimo',
                label: 'Cersosimo'
            },
            {
                value: 'Certaldo',
                label: 'Certaldo'
            },
            {
                value: 'Certosa di Pavia',
                label: 'Certosa di Pavia'
            },
            {
                value: 'Cerva',
                label: 'Cerva'
            },
            {
                value: 'Cervara di Roma',
                label: 'Cervara di Roma'
            },
            {
                value: 'Cervarese Santa Croce',
                label: 'Cervarese Santa Croce'
            },
            {
                value: 'Cervaro',
                label: 'Cervaro'
            },
            {
                value: 'Cervasca',
                label: 'Cervasca'
            },
            {
                value: 'Cervatto',
                label: 'Cervatto'
            },
            {
                value: 'Cerveno',
                label: 'Cerveno'
            },
            {
                value: 'Cervere',
                label: 'Cervere'
            },
            {
                value: 'Cervesina',
                label: 'Cervesina'
            },
            {
                value: 'Cerveteri',
                label: 'Cerveteri'
            },
            {
                value: 'Cervia',
                label: 'Cervia'
            },
            {
                value: 'Cervicati',
                label: 'Cervicati'
            },
            {
                value: 'Cervignano d\'Adda',
                label: 'Cervignano d\'Adda'
            },
            {
                value: 'Cervignano del Friuli',
                label: 'Cervignano del Friuli'
            },
            {
                value: 'Cervinara',
                label: 'Cervinara'
            },
            {
                value: 'Cervino',
                label: 'Cervino'
            },
            {
                value: 'Cervo',
                label: 'Cervo'
            },
            {
                value: 'Cerzeto',
                label: 'Cerzeto'
            },
            {
                value: 'Cesa',
                label: 'Cesa'
            },
            {
                value: 'Cesana Brianza',
                label: 'Cesana Brianza'
            },
            {
                value: 'Cesana Torinese',
                label: 'Cesana Torinese'
            },
            {
                value: 'Cesano Boscone',
                label: 'Cesano Boscone'
            },
            {
                value: 'Cesano Maderno',
                label: 'Cesano Maderno'
            },
            {
                value: 'Cesara',
                label: 'Cesara'
            },
            {
                value: 'Cesarò',
                label: 'Cesarò'
            },
            {
                value: 'Cesate',
                label: 'Cesate'
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
                value: 'Cesinali',
                label: 'Cesinali'
            },
            {
                value: 'Cesio',
                label: 'Cesio'
            },
            {
                value: 'Cesiomaggiore',
                label: 'Cesiomaggiore'
            },
            {
                value: 'Cessalto',
                label: 'Cessalto'
            },
            {
                value: 'Cessaniti',
                label: 'Cessaniti'
            },
            {
                value: 'Cessapalombo',
                label: 'Cessapalombo'
            },
            {
                value: 'Cessole',
                label: 'Cessole'
            },
            {
                value: 'Cetara',
                label: 'Cetara'
            },
            {
                value: 'Ceto',
                label: 'Ceto'
            },
            {
                value: 'Cetona',
                label: 'Cetona'
            },
            {
                value: 'Cetraro',
                label: 'Cetraro'
            },
            {
                value: 'Ceva',
                label: 'Ceva'
            },
            {
                value: 'Cevo',
                label: 'Cevo'
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
                value: 'Cherasco',
                label: 'Cherasco'
            },
            {
                value: 'Cheremule',
                label: 'Cheremule'
            },
            {
                value: 'Chialamberto',
                label: 'Chialamberto'
            },
            {
                value: 'Chiampo',
                label: 'Chiampo'
            },
            {
                value: 'Chianche',
                label: 'Chianche'
            },
            {
                value: 'Chianciano Terme',
                label: 'Chianciano Terme'
            },
            {
                value: 'Chianni',
                label: 'Chianni'
            },
            {
                value: 'Chianocco',
                label: 'Chianocco'
            },
            {
                value: 'Chiaramonte Gulfi',
                label: 'Chiaramonte Gulfi'
            },
            {
                value: 'Chiaramonti',
                label: 'Chiaramonti'
            },
            {
                value: 'Chiarano',
                label: 'Chiarano'
            },
            {
                value: 'Chiaravalle',
                label: 'Chiaravalle'
            },
            {
                value: 'Chiaravalle Centrale',
                label: 'Chiaravalle Centrale'
            },
            {
                value: 'Chiari',
                label: 'Chiari'
            },
            {
                value: 'Chiaromonte',
                label: 'Chiaromonte'
            },
            {
                value: 'Chiauci',
                label: 'Chiauci'
            },
            {
                value: 'Chiavari',
                label: 'Chiavari'
            },
            {
                value: 'Chiavenna',
                label: 'Chiavenna'
            },
            {
                value: 'Chiaverano',
                label: 'Chiaverano'
            },
            {
                value: 'Chienes',
                label: 'Chienes'
            },
            {
                value: 'Chieri',
                label: 'Chieri'
            },
            {
                value: 'Chies d\'Alpago',
                label: 'Chies d\'Alpago'
            },
            {
                value: 'Chiesa in Valmalenco',
                label: 'Chiesa in Valmalenco'
            },
            {
                value: 'Chiesanuova',
                label: 'Chiesanuova'
            },
            {
                value: 'Chiesina Uzzanese',
                label: 'Chiesina Uzzanese'
            },
            {
                value: 'Chieti',
                label: 'Chieti'
            },
            {
                value: 'Chieuti',
                label: 'Chieuti'
            },
            {
                value: 'Chieve',
                label: 'Chieve'
            },
            {
                value: 'Chignolo d\'Isola',
                label: 'Chignolo d\'Isola'
            },
            {
                value: 'Chignolo Po',
                label: 'Chignolo Po'
            },
            {
                value: 'Chioggia',
                label: 'Chioggia'
            },
            {
                value: 'Chiomonte',
                label: 'Chiomonte'
            },
            {
                value: 'Chions',
                label: 'Chions'
            },
            {
                value: 'Chiopris-Viscone',
                label: 'Chiopris-Viscone'
            },
            {
                value: 'Chitignano',
                label: 'Chitignano'
            },
            {
                value: 'Chiuduno',
                label: 'Chiuduno'
            },
            {
                value: 'Chiuppano',
                label: 'Chiuppano'
            },
            {
                value: 'Chiuro',
                label: 'Chiuro'
            },
            {
                value: 'Chiusa',
                label: 'Chiusa'
            },
            {
                value: 'Chiusa di Pesio',
                label: 'Chiusa di Pesio'
            },
            {
                value: 'Chiusa di San Michele',
                label: 'Chiusa di San Michele'
            },
            {
                value: 'Chiusa Sclafani',
                label: 'Chiusa Sclafani'
            },
            {
                value: 'Chiusaforte',
                label: 'Chiusaforte'
            },
            {
                value: 'Chiusanico',
                label: 'Chiusanico'
            },
            {
                value: 'Chiusano d\'Asti',
                label: 'Chiusano d\'Asti'
            },
            {
                value: 'Chiusano di San Domenico',
                label: 'Chiusano di San Domenico'
            },
            {
                value: 'Chiusavecchia',
                label: 'Chiusavecchia'
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
                value: 'Chiusi della Verna',
                label: 'Chiusi della Verna'
            },
            {
                value: 'Chivasso',
                label: 'Chivasso'
            },
            {
                value: 'Ciampino',
                label: 'Ciampino'
            },
            {
                value: 'Cianciana',
                label: 'Cianciana'
            },
            {
                value: 'Cibiana di Cadore',
                label: 'Cibiana di Cadore'
            },
            {
                value: 'Cicagna',
                label: 'Cicagna'
            },
            {
                value: 'Cicala',
                label: 'Cicala'
            },
            {
                value: 'Cicciano',
                label: 'Cicciano'
            },
            {
                value: 'Cicerale',
                label: 'Cicerale'
            },
            {
                value: 'Ciciliano',
                label: 'Ciciliano'
            },
            {
                value: 'Cicognolo',
                label: 'Cicognolo'
            },
            {
                value: 'Ciconio',
                label: 'Ciconio'
            },
            {
                value: 'Cigliano',
                label: 'Cigliano'
            },
            {
                value: 'Cigliè',
                label: 'Cigliè'
            },
            {
                value: 'Cigognola',
                label: 'Cigognola'
            },
            {
                value: 'Cigole',
                label: 'Cigole'
            },
            {
                value: 'Cilavegna',
                label: 'Cilavegna'
            },
            {
                value: 'Cimadolmo',
                label: 'Cimadolmo'
            },
            {
                value: 'Cimbergo',
                label: 'Cimbergo'
            },
            {
                value: 'Ciminà',
                label: 'Ciminà'
            },
            {
                value: 'Ciminna',
                label: 'Ciminna'
            },
            {
                value: 'Cimitile',
                label: 'Cimitile'
            },
            {
                value: 'Cimolais',
                label: 'Cimolais'
            },
            {
                value: 'Cimone',
                label: 'Cimone'
            },
            {
                value: 'Cinaglio',
                label: 'Cinaglio'
            },
            {
                value: 'Cineto Romano',
                label: 'Cineto Romano'
            },
            {
                value: 'Cingia de\' Botti',
                label: 'Cingia de\' Botti'
            },
            {
                value: 'Cingoli',
                label: 'Cingoli'
            },
            {
                value: 'Cinigiano',
                label: 'Cinigiano'
            },
            {
                value: 'Cinisello Balsamo',
                label: 'Cinisello Balsamo'
            },
            {
                value: 'Cinisi',
                label: 'Cinisi'
            },
            {
                value: 'Cino',
                label: 'Cino'
            },
            {
                value: 'Cinquefrondi',
                label: 'Cinquefrondi'
            },
            {
                value: 'Cintano',
                label: 'Cintano'
            },
            {
                value: 'Cinte Tesino',
                label: 'Cinte Tesino'
            },
            {
                value: 'Cinto Caomaggiore',
                label: 'Cinto Caomaggiore'
            },
            {
                value: 'Cinto Euganeo',
                label: 'Cinto Euganeo'
            },
            {
                value: 'Cinzano',
                label: 'Cinzano'
            },
            {
                value: 'Ciorlano',
                label: 'Ciorlano'
            },
            {
                value: 'Cipressa',
                label: 'Cipressa'
            },
            {
                value: 'Circello',
                label: 'Circello'
            },
            {
                value: 'Ciriè',
                label: 'Ciriè'
            },
            {
                value: 'Cirigliano',
                label: 'Cirigliano'
            },
            {
                value: 'Cirimido',
                label: 'Cirimido'
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
                value: 'Cis',
                label: 'Cis'
            },
            {
                value: 'Cisano Bergamasco',
                label: 'Cisano Bergamasco'
            },
            {
                value: 'Cisano sul Neva',
                label: 'Cisano sul Neva'
            },
            {
                value: 'Ciserano',
                label: 'Ciserano'
            },
            {
                value: 'Cislago',
                label: 'Cislago'
            },
            {
                value: 'Cisliano',
                label: 'Cisliano'
            },
            {
                value: 'Cison di Valmarino',
                label: 'Cison di Valmarino'
            },
            {
                value: 'Cissone',
                label: 'Cissone'
            },
            {
                value: 'Cisterna d\'Asti',
                label: 'Cisterna d\'Asti'
            },
            {
                value: 'Cisterna di Latina',
                label: 'Cisterna di Latina'
            },
            {
                value: 'Cisternino',
                label: 'Cisternino'
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
                value: 'Città Sant\'Angelo',
                label: 'Città Sant\'Angelo'
            },
            {
                value: 'Cittadella',
                label: 'Cittadella'
            },
            {
                value: 'Cittaducale',
                label: 'Cittaducale'
            },
            {
                value: 'Cittanova',
                label: 'Cittanova'
            },
            {
                value: 'Cittareale',
                label: 'Cittareale'
            },
            {
                value: 'Cittiglio',
                label: 'Cittiglio'
            },
            {
                value: 'Civate',
                label: 'Civate'
            },
            {
                value: 'Civezza',
                label: 'Civezza'
            },
            {
                value: 'Civezzano',
                label: 'Civezzano'
            },
            {
                value: 'Civiasco',
                label: 'Civiasco'
            },
            {
                value: 'Cividale del Friuli',
                label: 'Cividale del Friuli'
            },
            {
                value: 'Cividate al Piano',
                label: 'Cividate al Piano'
            },
            {
                value: 'Cividate Camuno',
                label: 'Cividate Camuno'
            },
            {
                value: 'Civita',
                label: 'Civita'
            },
            {
                value: 'Civita Castellana',
                label: 'Civita Castellana'
            },
            {
                value: 'Civita d\'Antino',
                label: 'Civita d\'Antino'
            },
            {
                value: 'Civitacampomarano',
                label: 'Civitacampomarano'
            },
            {
                value: 'Civitaluparella',
                label: 'Civitaluparella'
            },
            {
                value: 'Civitanova del Sannio',
                label: 'Civitanova del Sannio'
            },
            {
                value: 'Civitanova Marche',
                label: 'Civitanova Marche'
            },
            {
                value: 'Civitaquana',
                label: 'Civitaquana'
            },
            {
                value: 'Civitavecchia',
                label: 'Civitavecchia'
            },
            {
                value: 'Civitella Alfedena',
                label: 'Civitella Alfedena'
            },
            {
                value: 'Civitella Casanova',
                label: 'Civitella Casanova'
            },
            {
                value: 'Civitella d\'Agliano',
                label: 'Civitella d\'Agliano'
            },
            {
                value: 'Civitella del Tronto',
                label: 'Civitella del Tronto'
            },
            {
                value: 'Civitella di Romagna',
                label: 'Civitella di Romagna'
            },
            {
                value: 'Civitella in Val di Chiana',
                label: 'Civitella in Val di Chiana'
            },
            {
                value: 'Civitella Messer Raimondo',
                label: 'Civitella Messer Raimondo'
            },
            {
                value: 'Civitella Paganico',
                label: 'Civitella Paganico'
            },
            {
                value: 'Civitella Roveto',
                label: 'Civitella Roveto'
            },
            {
                value: 'Civitella San Paolo',
                label: 'Civitella San Paolo'
            },
            {
                value: 'Civo',
                label: 'Civo'
            },
            {
                value: 'Claino con Osteno',
                label: 'Claino con Osteno'
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
                value: 'Clavesana',
                label: 'Clavesana'
            },
            {
                value: 'Claviere',
                label: 'Claviere'
            },
            {
                value: 'Cles',
                label: 'Cles'
            },
            {
                value: 'Cleto',
                label: 'Cleto'
            },
            {
                value: 'Clivio',
                label: 'Clivio'
            },
            {
                value: 'Clusone',
                label: 'Clusone'
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
                value: 'Coazzolo',
                label: 'Coazzolo'
            },
            {
                value: 'Coccaglio',
                label: 'Coccaglio'
            },
            {
                value: 'Cocconato',
                label: 'Cocconato'
            },
            {
                value: 'Cocquio-Trevisago',
                label: 'Cocquio-Trevisago'
            },
            {
                value: 'Cocullo',
                label: 'Cocullo'
            },
            {
                value: 'Codevigo',
                label: 'Codevigo'
            },
            {
                value: 'Codevilla',
                label: 'Codevilla'
            },
            {
                value: 'Codigoro',
                label: 'Codigoro'
            },
            {
                value: 'Codognè',
                label: 'Codognè'
            },
            {
                value: 'Codogno',
                label: 'Codogno'
            },
            {
                value: 'Codroipo',
                label: 'Codroipo'
            },
            {
                value: 'Codrongianos',
                label: 'Codrongianos'
            },
            {
                value: 'Coggiola',
                label: 'Coggiola'
            },
            {
                value: 'Cogliate',
                label: 'Cogliate'
            },
            {
                value: 'Cogne',
                label: 'Cogne'
            },
            {
                value: 'Cogoleto',
                label: 'Cogoleto'
            },
            {
                value: 'Cogollo del Cengio',
                label: 'Cogollo del Cengio'
            },
            {
                value: 'Cogorno',
                label: 'Cogorno'
            },
            {
                value: 'Colazza',
                label: 'Colazza'
            },
            {
                value: 'Colceresa',
                label: 'Colceresa'
            },
            {
                value: 'Colere',
                label: 'Colere'
            },
            {
                value: 'Colfelice',
                label: 'Colfelice'
            },
            {
                value: 'Coli',
                label: 'Coli'
            },
            {
                value: 'Colico',
                label: 'Colico'
            },
            {
                value: 'Collalto Sabino',
                label: 'Collalto Sabino'
            },
            {
                value: 'Collarmele',
                label: 'Collarmele'
            },
            {
                value: 'Collazzone',
                label: 'Collazzone'
            },
            {
                value: 'Colle Brianza',
                label: 'Colle Brianza'
            },
            {
                value: 'Colle d\'Anchise',
                label: 'Colle d\'Anchise'
            },
            {
                value: 'Colle di Tora',
                label: 'Colle di Tora'
            },
            {
                value: 'Colle di Val d\'Elsa',
                label: 'Colle di Val d\'Elsa'
            },
            {
                value: 'Colle San Magno',
                label: 'Colle San Magno'
            },
            {
                value: 'Colle Sannita',
                label: 'Colle Sannita'
            },
            {
                value: 'Colle Santa Lucia',
                label: 'Colle Santa Lucia'
            },
            {
                value: 'Colle Umberto',
                label: 'Colle Umberto'
            },
            {
                value: 'Collebeato',
                label: 'Collebeato'
            },
            {
                value: 'Collecchio',
                label: 'Collecchio'
            },
            {
                value: 'Collecorvino',
                label: 'Collecorvino'
            },
            {
                value: 'Colledara',
                label: 'Colledara'
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
                value: 'Colleferro',
                label: 'Colleferro'
            },
            {
                value: 'Collegiove',
                label: 'Collegiove'
            },
            {
                value: 'Collegno',
                label: 'Collegno'
            },
            {
                value: 'Collelongo',
                label: 'Collelongo'
            },
            {
                value: 'Collepardo',
                label: 'Collepardo'
            },
            {
                value: 'Collepasso',
                label: 'Collepasso'
            },
            {
                value: 'Collepietro',
                label: 'Collepietro'
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
                value: 'Collesalvetti',
                label: 'Collesalvetti'
            },
            {
                value: 'Collesano',
                label: 'Collesano'
            },
            {
                value: 'Colletorto',
                label: 'Colletorto'
            },
            {
                value: 'Collevecchio',
                label: 'Collevecchio'
            },
            {
                value: 'Colli a Volturno',
                label: 'Colli a Volturno'
            },
            {
                value: 'Colli al Metauro',
                label: 'Colli al Metauro'
            },
            {
                value: 'Colli del Tronto',
                label: 'Colli del Tronto'
            },
            {
                value: 'Colli sul Velino',
                label: 'Colli sul Velino'
            },
            {
                value: 'Colli Verdi',
                label: 'Colli Verdi'
            },
            {
                value: 'Colliano',
                label: 'Colliano'
            },
            {
                value: 'Collinas',
                label: 'Collinas'
            },
            {
                value: 'Collio',
                label: 'Collio'
            },
            {
                value: 'Collobiano',
                label: 'Collobiano'
            },
            {
                value: 'Colloredo di Monte Albano',
                label: 'Colloredo di Monte Albano'
            },
            {
                value: 'Colmurano',
                label: 'Colmurano'
            },
            {
                value: 'Colobraro',
                label: 'Colobraro'
            },
            {
                value: 'Cologna Veneta',
                label: 'Cologna Veneta'
            },
            {
                value: 'Cologne',
                label: 'Cologne'
            },
            {
                value: 'Cologno al Serio',
                label: 'Cologno al Serio'
            },
            {
                value: 'Cologno Monzese',
                label: 'Cologno Monzese'
            },
            {
                value: 'Colognola ai Colli',
                label: 'Colognola ai Colli'
            },
            {
                value: 'Colonna',
                label: 'Colonna'
            },
            {
                value: 'Colonnella',
                label: 'Colonnella'
            },
            {
                value: 'Colonno',
                label: 'Colonno'
            },
            {
                value: 'Colorina',
                label: 'Colorina'
            },
            {
                value: 'Colorno',
                label: 'Colorno'
            },
            {
                value: 'Colosimi',
                label: 'Colosimi'
            },
            {
                value: 'Colturano',
                label: 'Colturano'
            },
            {
                value: 'Colverde',
                label: 'Colverde'
            },
            {
                value: 'Colzate',
                label: 'Colzate'
            },
            {
                value: 'Comabbio',
                label: 'Comabbio'
            },
            {
                value: 'Comacchio',
                label: 'Comacchio'
            },
            {
                value: 'Comano',
                label: 'Comano'
            },
            {
                value: 'Comano Terme',
                label: 'Comano Terme'
            },
            {
                value: 'Comazzo',
                label: 'Comazzo'
            },
            {
                value: 'Comeglians',
                label: 'Comeglians'
            },
            {
                value: 'Comelico Superiore',
                label: 'Comelico Superiore'
            },
            {
                value: 'Comerio',
                label: 'Comerio'
            },
            {
                value: 'Comezzano-Cizzago',
                label: 'Comezzano-Cizzago'
            },
            {
                value: 'Comignago',
                label: 'Comignago'
            },
            {
                value: 'Comiso',
                label: 'Comiso'
            },
            {
                value: 'Comitini',
                label: 'Comitini'
            },
            {
                value: 'Comiziano',
                label: 'Comiziano'
            },
            {
                value: 'Commessaggio',
                label: 'Commessaggio'
            },
            {
                value: 'Commezzadura',
                label: 'Commezzadura'
            },
            {
                value: 'Como',
                label: 'Como'
            },
            {
                value: 'Compiano',
                label: 'Compiano'
            },
            {
                value: 'Comun Nuovo',
                label: 'Comun Nuovo'
            },
            {
                value: 'Comunanza',
                label: 'Comunanza'
            },
            {
                value: 'Cona',
                label: 'Cona'
            },
            {
                value: 'Conca Casale',
                label: 'Conca Casale'
            },
            {
                value: 'Conca dei Marini',
                label: 'Conca dei Marini'
            },
            {
                value: 'Conca della Campania',
                label: 'Conca della Campania'
            },
            {
                value: 'Concamarise',
                label: 'Concamarise'
            },
            {
                value: 'Concerviano',
                label: 'Concerviano'
            },
            {
                value: 'Concesio',
                label: 'Concesio'
            },
            {
                value: 'Concordia Sagittaria',
                label: 'Concordia Sagittaria'
            },
            {
                value: 'Concordia sulla Secchia',
                label: 'Concordia sulla Secchia'
            },
            {
                value: 'Concorezzo',
                label: 'Concorezzo'
            },
            {
                value: 'Condofuri',
                label: 'Condofuri'
            },
            {
                value: 'Condove',
                label: 'Condove'
            },
            {
                value: 'Condrò',
                label: 'Condrò'
            },
            {
                value: 'Conegliano',
                label: 'Conegliano'
            },
            {
                value: 'Confienza',
                label: 'Confienza'
            },
            {
                value: 'Configni',
                label: 'Configni'
            },
            {
                value: 'Conflenti',
                label: 'Conflenti'
            },
            {
                value: 'Coniolo',
                label: 'Coniolo'
            },
            {
                value: 'Conselice',
                label: 'Conselice'
            },
            {
                value: 'Conselve',
                label: 'Conselve'
            },
            {
                value: 'Contà',
                label: 'Contà'
            },
            {
                value: 'Contessa Entellina',
                label: 'Contessa Entellina'
            },
            {
                value: 'Contigliano',
                label: 'Contigliano'
            },
            {
                value: 'Contrada',
                label: 'Contrada'
            },
            {
                value: 'Controguerra',
                label: 'Controguerra'
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
                value: 'Conversano',
                label: 'Conversano'
            },
            {
                value: 'Conza della Campania',
                label: 'Conza della Campania'
            },
            {
                value: 'Conzano',
                label: 'Conzano'
            },
            {
                value: 'Copertino',
                label: 'Copertino'
            },
            {
                value: 'Copiano',
                label: 'Copiano'
            },
            {
                value: 'Copparo',
                label: 'Copparo'
            },
            {
                value: 'Corana',
                label: 'Corana'
            },
            {
                value: 'Corato',
                label: 'Corato'
            },
            {
                value: 'Corbara',
                label: 'Corbara'
            },
            {
                value: 'Corbetta',
                label: 'Corbetta'
            },
            {
                value: 'Corbola',
                label: 'Corbola'
            },
            {
                value: 'Corchiano',
                label: 'Corchiano'
            },
            {
                value: 'Corciano',
                label: 'Corciano'
            },
            {
                value: 'Cordenons',
                label: 'Cordenons'
            },
            {
                value: 'Cordignano',
                label: 'Cordignano'
            },
            {
                value: 'Cordovado',
                label: 'Cordovado'
            },
            {
                value: 'Coreglia Antelminelli',
                label: 'Coreglia Antelminelli'
            },
            {
                value: 'Coreglia Ligure',
                label: 'Coreglia Ligure'
            },
            {
                value: 'Coreno Ausonio',
                label: 'Coreno Ausonio'
            },
            {
                value: 'Corfinio',
                label: 'Corfinio'
            },
            {
                value: 'Cori',
                label: 'Cori'
            },
            {
                value: 'Coriano',
                label: 'Coriano'
            },
            {
                value: 'Corigliano d\'Otranto',
                label: 'Corigliano d\'Otranto'
            },
            {
                value: 'Corigliano-Rossano',
                label: 'Corigliano-Rossano'
            },
            {
                value: 'Corinaldo',
                label: 'Corinaldo'
            },
            {
                value: 'Corio',
                label: 'Corio'
            },
            {
                value: 'Corleone',
                label: 'Corleone'
            },
            {
                value: 'Corleto Monforte',
                label: 'Corleto Monforte'
            },
            {
                value: 'Corleto Perticara',
                label: 'Corleto Perticara'
            },
            {
                value: 'Cormano',
                label: 'Cormano'
            },
            {
                value: 'Cormons',
                label: 'Cormons'
            },
            {
                value: 'Corna Imagna',
                label: 'Corna Imagna'
            },
            {
                value: 'Cornalba',
                label: 'Cornalba'
            },
            {
                value: 'Cornale e Bastida',
                label: 'Cornale e Bastida'
            },
            {
                value: 'Cornaredo',
                label: 'Cornaredo'
            },
            {
                value: 'Cornate d\'Adda',
                label: 'Cornate d\'Adda'
            },
            {
                value: 'Cornedo all\'Isarco',
                label: 'Cornedo all\'Isarco'
            },
            {
                value: 'Cornedo Vicentino',
                label: 'Cornedo Vicentino'
            },
            {
                value: 'Cornegliano Laudense',
                label: 'Cornegliano Laudense'
            },
            {
                value: 'Corneliano d\'Alba',
                label: 'Corneliano d\'Alba'
            },
            {
                value: 'Corniglio',
                label: 'Corniglio'
            },
            {
                value: 'Corno di Rosazzo',
                label: 'Corno di Rosazzo'
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
                value: 'Cornuda',
                label: 'Cornuda'
            },
            {
                value: 'Correggio',
                label: 'Correggio'
            },
            {
                value: 'Correzzana',
                label: 'Correzzana'
            },
            {
                value: 'Correzzola',
                label: 'Correzzola'
            },
            {
                value: 'Corrido',
                label: 'Corrido'
            },
            {
                value: 'Corridonia',
                label: 'Corridonia'
            },
            {
                value: 'Corropoli',
                label: 'Corropoli'
            },
            {
                value: 'Corsano',
                label: 'Corsano'
            },
            {
                value: 'Corsico',
                label: 'Corsico'
            },
            {
                value: 'Corsione',
                label: 'Corsione'
            },
            {
                value: 'Cortaccia sulla strada del vino',
                label: 'Cortaccia sulla strada del vino'
            },
            {
                value: 'Cortale',
                label: 'Cortale'
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
                value: 'Corte Brugnatella',
                label: 'Corte Brugnatella'
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
                value: 'Corte Franca',
                label: 'Corte Franca'
            },
            {
                value: 'Corte Palasio',
                label: 'Corte Palasio'
            },
            {
                value: 'Cortemaggiore',
                label: 'Cortemaggiore'
            },
            {
                value: 'Cortemilia',
                label: 'Cortemilia'
            },
            {
                value: 'Corteno Golgi',
                label: 'Corteno Golgi'
            },
            {
                value: 'Cortenova',
                label: 'Cortenova'
            },
            {
                value: 'Cortenuova',
                label: 'Cortenuova'
            },
            {
                value: 'Corteolona e Genzone',
                label: 'Corteolona e Genzone'
            },
            {
                value: 'Cortiglione',
                label: 'Cortiglione'
            },
            {
                value: 'Cortina d\'Ampezzo',
                label: 'Cortina d\'Ampezzo'
            },
            {
                value: 'Cortina sulla strada del vino',
                label: 'Cortina sulla strada del vino'
            },
            {
                value: 'Cortino',
                label: 'Cortino'
            },
            {
                value: 'Cortona',
                label: 'Cortona'
            },
            {
                value: 'Corvara',
                label: 'Corvara'
            },
            {
                value: 'Corvara in Badia',
                label: 'Corvara in Badia'
            },
            {
                value: 'Corvino San Quirico',
                label: 'Corvino San Quirico'
            },
            {
                value: 'Corzano',
                label: 'Corzano'
            },
            {
                value: 'Coseano',
                label: 'Coseano'
            },
            {
                value: 'Cosenza',
                label: 'Cosenza'
            },
            {
                value: 'Cosio d\'Arroscia',
                label: 'Cosio d\'Arroscia'
            },
            {
                value: 'Cosio Valtellino',
                label: 'Cosio Valtellino'
            },
            {
                value: 'Cosoleto',
                label: 'Cosoleto'
            },
            {
                value: 'Cossano Belbo',
                label: 'Cossano Belbo'
            },
            {
                value: 'Cossano Canavese',
                label: 'Cossano Canavese'
            },
            {
                value: 'Cossato',
                label: 'Cossato'
            },
            {
                value: 'Cosseria',
                label: 'Cosseria'
            },
            {
                value: 'Cossignano',
                label: 'Cossignano'
            },
            {
                value: 'Cossogno',
                label: 'Cossogno'
            },
            {
                value: 'Cossoine',
                label: 'Cossoine'
            },
            {
                value: 'Cossombrato',
                label: 'Cossombrato'
            },
            {
                value: 'Costa de\' Nobili',
                label: 'Costa de\' Nobili'
            },
            {
                value: 'Costa di Mezzate',
                label: 'Costa di Mezzate'
            },
            {
                value: 'Costa di Rovigo',
                label: 'Costa di Rovigo'
            },
            {
                value: 'Costa Masnaga',
                label: 'Costa Masnaga'
            },
            {
                value: 'Costa Serina',
                label: 'Costa Serina'
            },
            {
                value: 'Costa Valle Imagna',
                label: 'Costa Valle Imagna'
            },
            {
                value: 'Costa Vescovato',
                label: 'Costa Vescovato'
            },
            {
                value: 'Costa Volpino',
                label: 'Costa Volpino'
            },
            {
                value: 'Costabissara',
                label: 'Costabissara'
            },
            {
                value: 'Costacciaro',
                label: 'Costacciaro'
            },
            {
                value: 'Costanzana',
                label: 'Costanzana'
            },
            {
                value: 'Costarainera',
                label: 'Costarainera'
            },
            {
                value: 'Costermano sul Garda',
                label: 'Costermano sul Garda'
            },
            {
                value: 'Costigliole d\'Asti',
                label: 'Costigliole d\'Asti'
            },
            {
                value: 'Costigliole Saluzzo',
                label: 'Costigliole Saluzzo'
            },
            {
                value: 'Cotignola',
                label: 'Cotignola'
            },
            {
                value: 'Cotronei',
                label: 'Cotronei'
            },
            {
                value: 'Cottanello',
                label: 'Cottanello'
            },
            {
                value: 'Courmayeur',
                label: 'Courmayeur'
            },
            {
                value: 'Covo',
                label: 'Covo'
            },
            {
                value: 'Cozzo',
                label: 'Cozzo'
            },
            {
                value: 'Craco',
                label: 'Craco'
            },
            {
                value: 'Crandola Valsassina',
                label: 'Crandola Valsassina'
            },
            {
                value: 'Cravagliana',
                label: 'Cravagliana'
            },
            {
                value: 'Cravanzana',
                label: 'Cravanzana'
            },
            {
                value: 'Craveggia',
                label: 'Craveggia'
            },
            {
                value: 'Creazzo',
                label: 'Creazzo'
            },
            {
                value: 'Crecchio',
                label: 'Crecchio'
            },
            {
                value: 'Credaro',
                label: 'Credaro'
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
                value: 'Cremella',
                label: 'Cremella'
            },
            {
                value: 'Cremenaga',
                label: 'Cremenaga'
            },
            {
                value: 'Cremeno',
                label: 'Cremeno'
            },
            {
                value: 'Cremia',
                label: 'Cremia'
            },
            {
                value: 'Cremolino',
                label: 'Cremolino'
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
                value: 'Crescentino',
                label: 'Crescentino'
            },
            {
                value: 'Crespadoro',
                label: 'Crespadoro'
            },
            {
                value: 'Crespiatica',
                label: 'Crespiatica'
            },
            {
                value: 'Crespina Lorenzana',
                label: 'Crespina Lorenzana'
            },
            {
                value: 'Crespino',
                label: 'Crespino'
            },
            {
                value: 'Cressa',
                label: 'Cressa'
            },
            {
                value: 'Crevacuore',
                label: 'Crevacuore'
            },
            {
                value: 'Crevalcore',
                label: 'Crevalcore'
            },
            {
                value: 'Crevoladossola',
                label: 'Crevoladossola'
            },
            {
                value: 'Crispano',
                label: 'Crispano'
            },
            {
                value: 'Crispiano',
                label: 'Crispiano'
            },
            {
                value: 'Crissolo',
                label: 'Crissolo'
            },
            {
                value: 'Crocefieschi',
                label: 'Crocefieschi'
            },
            {
                value: 'Crocetta del Montello',
                label: 'Crocetta del Montello'
            },
            {
                value: 'Crodo',
                label: 'Crodo'
            },
            {
                value: 'Crognaleto',
                label: 'Crognaleto'
            },
            {
                value: 'Cropalati',
                label: 'Cropalati'
            },
            {
                value: 'Cropani',
                label: 'Cropani'
            },
            {
                value: 'Crosia',
                label: 'Crosia'
            },
            {
                value: 'Crosio della Valle',
                label: 'Crosio della Valle'
            },
            {
                value: 'Crotone',
                label: 'Crotone'
            },
            {
                value: 'Crotta d\'Adda',
                label: 'Crotta d\'Adda'
            },
            {
                value: 'Crova',
                label: 'Crova'
            },
            {
                value: 'Croviana',
                label: 'Croviana'
            },
            {
                value: 'Crucoli',
                label: 'Crucoli'
            },
            {
                value: 'Cuasso al Monte',
                label: 'Cuasso al Monte'
            },
            {
                value: 'Cuccaro Vetere',
                label: 'Cuccaro Vetere'
            },
            {
                value: 'Cucciago',
                label: 'Cucciago'
            },
            {
                value: 'Cuceglio',
                label: 'Cuceglio'
            },
            {
                value: 'Cuggiono',
                label: 'Cuggiono'
            },
            {
                value: 'Cugliate-Fabiasco',
                label: 'Cugliate-Fabiasco'
            },
            {
                value: 'Cuglieri',
                label: 'Cuglieri'
            },
            {
                value: 'Cugnoli',
                label: 'Cugnoli'
            },
            {
                value: 'Cumiana',
                label: 'Cumiana'
            },
            {
                value: 'Cumignano sul Naviglio',
                label: 'Cumignano sul Naviglio'
            },
            {
                value: 'Cunardo',
                label: 'Cunardo'
            },
            {
                value: 'Cuneo',
                label: 'Cuneo'
            },
            {
                value: 'Cunico',
                label: 'Cunico'
            },
            {
                value: 'Cuorgnè',
                label: 'Cuorgnè'
            },
            {
                value: 'Cupello',
                label: 'Cupello'
            },
            {
                value: 'Cupra Marittima',
                label: 'Cupra Marittima'
            },
            {
                value: 'Cupramontana',
                label: 'Cupramontana'
            },
            {
                value: 'Cura Carpignano',
                label: 'Cura Carpignano'
            },
            {
                value: 'Curcuris',
                label: 'Curcuris'
            },
            {
                value: 'Cureggio',
                label: 'Cureggio'
            },
            {
                value: 'Curiglia con Monteviasco',
                label: 'Curiglia con Monteviasco'
            },
            {
                value: 'Curinga',
                label: 'Curinga'
            },
            {
                value: 'Curino',
                label: 'Curino'
            },
            {
                value: 'Curno',
                label: 'Curno'
            },
            {
                value: 'Curon Venosta',
                label: 'Curon Venosta'
            },
            {
                value: 'Cursi',
                label: 'Cursi'
            },
            {
                value: 'Curtarolo',
                label: 'Curtarolo'
            },
            {
                value: 'Curtatone',
                label: 'Curtatone'
            },
            {
                value: 'Curti',
                label: 'Curti'
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
                value: 'Cusano Mutri',
                label: 'Cusano Mutri'
            },
            {
                value: 'Cusino',
                label: 'Cusino'
            },
            {
                value: 'Cusio',
                label: 'Cusio'
            },
            {
                value: 'Custonaci',
                label: 'Custonaci'
            },
            {
                value: 'Cutro',
                label: 'Cutro'
            },
            {
                value: 'Cutrofiano',
                label: 'Cutrofiano'
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
                value: 'Dairago',
                label: 'Dairago'
            },
            {
                value: 'Dalmine',
                label: 'Dalmine'
            },
            {
                value: 'Dambel',
                label: 'Dambel'
            },
            {
                value: 'Danta di Cadore',
                label: 'Danta di Cadore'
            },
            {
                value: 'Darfo Boario Terme',
                label: 'Darfo Boario Terme'
            },
            {
                value: 'Dasà',
                label: 'Dasà'
            },
            {
                value: 'Davagna',
                label: 'Davagna'
            },
            {
                value: 'Daverio',
                label: 'Daverio'
            },
            {
                value: 'Davoli',
                label: 'Davoli'
            },
            {
                value: 'Dazio',
                label: 'Dazio'
            },
            {
                value: 'Decimomannu',
                label: 'Decimomannu'
            },
            {
                value: 'Decimoputzu',
                label: 'Decimoputzu'
            },
            {
                value: 'Decollatura',
                label: 'Decollatura'
            },
            {
                value: 'Dego',
                label: 'Dego'
            },
            {
                value: 'Deiva Marina',
                label: 'Deiva Marina'
            },
            {
                value: 'Delebio',
                label: 'Delebio'
            },
            {
                value: 'Delia',
                label: 'Delia'
            },
            {
                value: 'Delianuova',
                label: 'Delianuova'
            },
            {
                value: 'Deliceto',
                label: 'Deliceto'
            },
            {
                value: 'Dello',
                label: 'Dello'
            },
            {
                value: 'Demonte',
                label: 'Demonte'
            },
            {
                value: 'Denice',
                label: 'Denice'
            },
            {
                value: 'Denno',
                label: 'Denno'
            },
            {
                value: 'Dernice',
                label: 'Dernice'
            },
            {
                value: 'Derovere',
                label: 'Derovere'
            },
            {
                value: 'Deruta',
                label: 'Deruta'
            },
            {
                value: 'Dervio',
                label: 'Dervio'
            },
            {
                value: 'Desana',
                label: 'Desana'
            },
            {
                value: 'Desenzano del Garda',
                label: 'Desenzano del Garda'
            },
            {
                value: 'Desio',
                label: 'Desio'
            },
            {
                value: 'Desulo',
                label: 'Desulo'
            },
            {
                value: 'Diamante',
                label: 'Diamante'
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
                value: 'Diano d\'Alba',
                label: 'Diano d\'Alba'
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
                value: 'Dicomano',
                label: 'Dicomano'
            },
            {
                value: 'Dignano',
                label: 'Dignano'
            },
            {
                value: 'Dimaro Folgarida',
                label: 'Dimaro Folgarida'
            },
            {
                value: 'Dinami',
                label: 'Dinami'
            },
            {
                value: 'Dipignano',
                label: 'Dipignano'
            },
            {
                value: 'Diso',
                label: 'Diso'
            },
            {
                value: 'Divignano',
                label: 'Divignano'
            },
            {
                value: 'Dizzasco',
                label: 'Dizzasco'
            },
            {
                value: 'Dobbiaco',
                label: 'Dobbiaco'
            },
            {
                value: 'Doberdò del Lago',
                label: 'Doberdò del Lago'
            },
            {
                value: 'Dogliani',
                label: 'Dogliani'
            },
            {
                value: 'Dogliola',
                label: 'Dogliola'
            },
            {
                value: 'Dogna',
                label: 'Dogna'
            },
            {
                value: 'Dolcè',
                label: 'Dolcè'
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
                value: 'Dolegna del Collio',
                label: 'Dolegna del Collio'
            },
            {
                value: 'Dolianova',
                label: 'Dolianova'
            },
            {
                value: 'Dolo',
                label: 'Dolo'
            },
            {
                value: 'Dolzago',
                label: 'Dolzago'
            },
            {
                value: 'Domanico',
                label: 'Domanico'
            },
            {
                value: 'Domaso',
                label: 'Domaso'
            },
            {
                value: 'Domegge di Cadore',
                label: 'Domegge di Cadore'
            },
            {
                value: 'Domicella',
                label: 'Domicella'
            },
            {
                value: 'Domodossola',
                label: 'Domodossola'
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
                value: 'Donato',
                label: 'Donato'
            },
            {
                value: 'Dongo',
                label: 'Dongo'
            },
            {
                value: 'Donnas',
                label: 'Donnas'
            },
            {
                value: 'Donori',
                label: 'Donori'
            },
            {
                value: 'Dorgali',
                label: 'Dorgali'
            },
            {
                value: 'Dorio',
                label: 'Dorio'
            },
            {
                value: 'Dormelletto',
                label: 'Dormelletto'
            },
            {
                value: 'Dorno',
                label: 'Dorno'
            },
            {
                value: 'Dorzano',
                label: 'Dorzano'
            },
            {
                value: 'Dosolo',
                label: 'Dosolo'
            },
            {
                value: 'Dossena',
                label: 'Dossena'
            },
            {
                value: 'Dosso del Liro',
                label: 'Dosso del Liro'
            },
            {
                value: 'Doues',
                label: 'Doues'
            },
            {
                value: 'Dovadola',
                label: 'Dovadola'
            },
            {
                value: 'Dovera',
                label: 'Dovera'
            },
            {
                value: 'Dozza',
                label: 'Dozza'
            },
            {
                value: 'Dragoni',
                label: 'Dragoni'
            },
            {
                value: 'Drapia',
                label: 'Drapia'
            },
            {
                value: 'Drena',
                label: 'Drena'
            },
            {
                value: 'Drenchia',
                label: 'Drenchia'
            },
            {
                value: 'Dresano',
                label: 'Dresano'
            },
            {
                value: 'Dro',
                label: 'Dro'
            },
            {
                value: 'Dronero',
                label: 'Dronero'
            },
            {
                value: 'Druento',
                label: 'Druento'
            },
            {
                value: 'Druogno',
                label: 'Druogno'
            },
            {
                value: 'Dualchi',
                label: 'Dualchi'
            },
            {
                value: 'Dubino',
                label: 'Dubino'
            },
            {
                value: 'Due Carrare',
                label: 'Due Carrare'
            },
            {
                value: 'Dueville',
                label: 'Dueville'
            },
            {
                value: 'Dugenta',
                label: 'Dugenta'
            },
            {
                value: 'Duino Aurisina',
                label: 'Duino Aurisina'
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
                value: 'Durazzano',
                label: 'Durazzano'
            },
            {
                value: 'Duronia',
                label: 'Duronia'
            },
            {
                value: 'Dusino San Michele',
                label: 'Dusino San Michele'
            },
            {
                value: 'Eboli',
                label: 'Eboli'
            },
            {
                value: 'Edolo',
                label: 'Edolo'
            },
            {
                value: 'Egna',
                label: 'Egna'
            },
            {
                value: 'Elice',
                label: 'Elice'
            },
            {
                value: 'Elini',
                label: 'Elini'
            },
            {
                value: 'Ello',
                label: 'Ello'
            },
            {
                value: 'Elmas',
                label: 'Elmas'
            },
            {
                value: 'Elva',
                label: 'Elva'
            },
            {
                value: 'Emarèse',
                label: 'Emarèse'
            },
            {
                value: 'Empoli',
                label: 'Empoli'
            },
            {
                value: 'Endine Gaiano',
                label: 'Endine Gaiano'
            },
            {
                value: 'Enego',
                label: 'Enego'
            },
            {
                value: 'Enemonzo',
                label: 'Enemonzo'
            },
            {
                value: 'Enna',
                label: 'Enna'
            },
            {
                value: 'Entracque',
                label: 'Entracque'
            },
            {
                value: 'Entratico',
                label: 'Entratico'
            },
            {
                value: 'Envie',
                label: 'Envie'
            },
            {
                value: 'Episcopia',
                label: 'Episcopia'
            },
            {
                value: 'Eraclea',
                label: 'Eraclea'
            },
            {
                value: 'Erba',
                label: 'Erba'
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
                value: 'Erbusco',
                label: 'Erbusco'
            },
            {
                value: 'Erchie',
                label: 'Erchie'
            },
            {
                value: 'Ercolano',
                label: 'Ercolano'
            },
            {
                value: 'Erice',
                label: 'Erice'
            },
            {
                value: 'Erli',
                label: 'Erli'
            },
            {
                value: 'Erto e Casso',
                label: 'Erto e Casso'
            },
            {
                value: 'Erula',
                label: 'Erula'
            },
            {
                value: 'Erve',
                label: 'Erve'
            },
            {
                value: 'Esanatoglia',
                label: 'Esanatoglia'
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
                value: 'Esine',
                label: 'Esine'
            },
            {
                value: 'Esino Lario',
                label: 'Esino Lario'
            },
            {
                value: 'Esperia',
                label: 'Esperia'
            },
            {
                value: 'Esporlatu',
                label: 'Esporlatu'
            },
            {
                value: 'Este',
                label: 'Este'
            },
            {
                value: 'Esterzili',
                label: 'Esterzili'
            },
            {
                value: 'Etroubles',
                label: 'Etroubles'
            },
            {
                value: 'Eupilio',
                label: 'Eupilio'
            },
            {
                value: 'Exilles',
                label: 'Exilles'
            },
            {
                value: 'Fabbrica Curone',
                label: 'Fabbrica Curone'
            },
            {
                value: 'Fabbriche di Vergemoli',
                label: 'Fabbriche di Vergemoli'
            },
            {
                value: 'Fabbrico',
                label: 'Fabbrico'
            },
            {
                value: 'Fabriano',
                label: 'Fabriano'
            },
            {
                value: 'Fabrica di Roma',
                label: 'Fabrica di Roma'
            },
            {
                value: 'Fabrizia',
                label: 'Fabrizia'
            },
            {
                value: 'Fabro',
                label: 'Fabro'
            },
            {
                value: 'Faedis',
                label: 'Faedis'
            },
            {
                value: 'Faedo Valtellino',
                label: 'Faedo Valtellino'
            },
            {
                value: 'Faenza',
                label: 'Faenza'
            },
            {
                value: 'Faeto',
                label: 'Faeto'
            },
            {
                value: 'Fagagna',
                label: 'Fagagna'
            },
            {
                value: 'Faggeto Lario',
                label: 'Faggeto Lario'
            },
            {
                value: 'Faggiano',
                label: 'Faggiano'
            },
            {
                value: 'Fagnano Alto',
                label: 'Fagnano Alto'
            },
            {
                value: 'Fagnano Castello',
                label: 'Fagnano Castello'
            },
            {
                value: 'Fagnano Olona',
                label: 'Fagnano Olona'
            },
            {
                value: 'Fai della Paganella',
                label: 'Fai della Paganella'
            },
            {
                value: 'Faicchio',
                label: 'Faicchio'
            },
            {
                value: 'Falcade',
                label: 'Falcade'
            },
            {
                value: 'Falciano del Massico',
                label: 'Falciano del Massico'
            },
            {
                value: 'Falconara Albanese',
                label: 'Falconara Albanese'
            },
            {
                value: 'Falconara Marittima',
                label: 'Falconara Marittima'
            },
            {
                value: 'Falcone',
                label: 'Falcone'
            },
            {
                value: 'Faleria',
                label: 'Faleria'
            },
            {
                value: 'Falerna',
                label: 'Falerna'
            },
            {
                value: 'Falerone',
                label: 'Falerone'
            },
            {
                value: 'Fallo',
                label: 'Fallo'
            },
            {
                value: 'Faloppio',
                label: 'Faloppio'
            },
            {
                value: 'Falvaterra',
                label: 'Falvaterra'
            },
            {
                value: 'Falzes',
                label: 'Falzes'
            },
            {
                value: 'Fanano',
                label: 'Fanano'
            },
            {
                value: 'Fanna',
                label: 'Fanna'
            },
            {
                value: 'Fano',
                label: 'Fano'
            },
            {
                value: 'Fano Adriano',
                label: 'Fano Adriano'
            },
            {
                value: 'Fara Filiorum Petri',
                label: 'Fara Filiorum Petri'
            },
            {
                value: 'Fara Gera d\'Adda',
                label: 'Fara Gera d\'Adda'
            },
            {
                value: 'Fara in Sabina',
                label: 'Fara in Sabina'
            },
            {
                value: 'Fara Novarese',
                label: 'Fara Novarese'
            },
            {
                value: 'Fara Olivana con Sola',
                label: 'Fara Olivana con Sola'
            },
            {
                value: 'Fara San Martino',
                label: 'Fara San Martino'
            },
            {
                value: 'Fara Vicentino',
                label: 'Fara Vicentino'
            },
            {
                value: 'Fardella',
                label: 'Fardella'
            },
            {
                value: 'Farigliano',
                label: 'Farigliano'
            },
            {
                value: 'Farindola',
                label: 'Farindola'
            },
            {
                value: 'Farini',
                label: 'Farini'
            },
            {
                value: 'Farnese',
                label: 'Farnese'
            },
            {
                value: 'Farra d\'Isonzo',
                label: 'Farra d\'Isonzo'
            },
            {
                value: 'Farra di Soligo',
                label: 'Farra di Soligo'
            },
            {
                value: 'Fasano',
                label: 'Fasano'
            },
            {
                value: 'Fascia',
                label: 'Fascia'
            },
            {
                value: 'Fauglia',
                label: 'Fauglia'
            },
            {
                value: 'Faule',
                label: 'Faule'
            },
            {
                value: 'Favale di Malvaro',
                label: 'Favale di Malvaro'
            },
            {
                value: 'Favara',
                label: 'Favara'
            },
            {
                value: 'Favignana',
                label: 'Favignana'
            },
            {
                value: 'Favria',
                label: 'Favria'
            },
            {
                value: 'Feisoglio',
                label: 'Feisoglio'
            },
            {
                value: 'Feletto',
                label: 'Feletto'
            },
            {
                value: 'Felino',
                label: 'Felino'
            },
            {
                value: 'Felitto',
                label: 'Felitto'
            },
            {
                value: 'Felizzano',
                label: 'Felizzano'
            },
            {
                value: 'Feltre',
                label: 'Feltre'
            },
            {
                value: 'Fenegrò',
                label: 'Fenegrò'
            },
            {
                value: 'Fenestrelle',
                label: 'Fenestrelle'
            },
            {
                value: 'Fénis',
                label: 'Fénis'
            },
            {
                value: 'Ferentillo',
                label: 'Ferentillo'
            },
            {
                value: 'Ferentino',
                label: 'Ferentino'
            },
            {
                value: 'Ferla',
                label: 'Ferla'
            },
            {
                value: 'Fermignano',
                label: 'Fermignano'
            },
            {
                value: 'Fermo',
                label: 'Fermo'
            },
            {
                value: 'Ferno',
                label: 'Ferno'
            },
            {
                value: 'Feroleto Antico',
                label: 'Feroleto Antico'
            },
            {
                value: 'Feroleto della Chiesa',
                label: 'Feroleto della Chiesa'
            },
            {
                value: 'Ferrandina',
                label: 'Ferrandina'
            },
            {
                value: 'Ferrara',
                label: 'Ferrara'
            },
            {
                value: 'Ferrara di Monte Baldo',
                label: 'Ferrara di Monte Baldo'
            },
            {
                value: 'Ferrazzano',
                label: 'Ferrazzano'
            },
            {
                value: 'Ferrera di Varese',
                label: 'Ferrera di Varese'
            },
            {
                value: 'Ferrera Erbognone',
                label: 'Ferrera Erbognone'
            },
            {
                value: 'Ferrere',
                label: 'Ferrere'
            },
            {
                value: 'Ferriere',
                label: 'Ferriere'
            },
            {
                value: 'Ferruzzano',
                label: 'Ferruzzano'
            },
            {
                value: 'Fiamignano',
                label: 'Fiamignano'
            },
            {
                value: 'Fiano',
                label: 'Fiano'
            },
            {
                value: 'Fiano Romano',
                label: 'Fiano Romano'
            },
            {
                value: 'Fiastra',
                label: 'Fiastra'
            },
            {
                value: 'Fiavè',
                label: 'Fiavè'
            },
            {
                value: 'Ficarazzi',
                label: 'Ficarazzi'
            },
            {
                value: 'Ficarolo',
                label: 'Ficarolo'
            },
            {
                value: 'Ficarra',
                label: 'Ficarra'
            },
            {
                value: 'Ficulle',
                label: 'Ficulle'
            },
            {
                value: 'Fidenza',
                label: 'Fidenza'
            },
            {
                value: 'Fiè allo Sciliar',
                label: 'Fiè allo Sciliar'
            },
            {
                value: 'Fierozzo',
                label: 'Fierozzo'
            },
            {
                value: 'Fiesco',
                label: 'Fiesco'
            },
            {
                value: 'Fiesole',
                label: 'Fiesole'
            },
            {
                value: 'Fiesse',
                label: 'Fiesse'
            },
            {
                value: 'Fiesso d\'Artico',
                label: 'Fiesso d\'Artico'
            },
            {
                value: 'Fiesso Umbertiano',
                label: 'Fiesso Umbertiano'
            },
            {
                value: 'Figino Serenza',
                label: 'Figino Serenza'
            },
            {
                value: 'Figline e Incisa Valdarno',
                label: 'Figline e Incisa Valdarno'
            },
            {
                value: 'Figline Vegliaturo',
                label: 'Figline Vegliaturo'
            },
            {
                value: 'Filacciano',
                label: 'Filacciano'
            },
            {
                value: 'Filadelfia',
                label: 'Filadelfia'
            },
            {
                value: 'Filago',
                label: 'Filago'
            },
            {
                value: 'Filandari',
                label: 'Filandari'
            },
            {
                value: 'Filattiera',
                label: 'Filattiera'
            },
            {
                value: 'Filettino',
                label: 'Filettino'
            },
            {
                value: 'Filetto',
                label: 'Filetto'
            },
            {
                value: 'Filiano',
                label: 'Filiano'
            },
            {
                value: 'Filighera',
                label: 'Filighera'
            },
            {
                value: 'Filignano',
                label: 'Filignano'
            },
            {
                value: 'Filogaso',
                label: 'Filogaso'
            },
            {
                value: 'Filottrano',
                label: 'Filottrano'
            },
            {
                value: 'Finale Emilia',
                label: 'Finale Emilia'
            },
            {
                value: 'Finale Ligure',
                label: 'Finale Ligure'
            },
            {
                value: 'Fino del Monte',
                label: 'Fino del Monte'
            },
            {
                value: 'Fino Mornasco',
                label: 'Fino Mornasco'
            },
            {
                value: 'Fiorano al Serio',
                label: 'Fiorano al Serio'
            },
            {
                value: 'Fiorano Canavese',
                label: 'Fiorano Canavese'
            },
            {
                value: 'Fiorano Modenese',
                label: 'Fiorano Modenese'
            },
            {
                value: 'Fiorenzuola d\'Arda',
                label: 'Fiorenzuola d\'Arda'
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
                value: 'Firmo',
                label: 'Firmo'
            },
            {
                value: 'Fiscaglia',
                label: 'Fiscaglia'
            },
            {
                value: 'Fisciano',
                label: 'Fisciano'
            },
            {
                value: 'Fiuggi',
                label: 'Fiuggi'
            },
            {
                value: 'Fiumalbo',
                label: 'Fiumalbo'
            },
            {
                value: 'Fiumara',
                label: 'Fiumara'
            },
            {
                value: 'Fiume Veneto',
                label: 'Fiume Veneto'
            },
            {
                value: 'Fiumedinisi',
                label: 'Fiumedinisi'
            },
            {
                value: 'Fiumefreddo Bruzio',
                label: 'Fiumefreddo Bruzio'
            },
            {
                value: 'Fiumefreddo di Sicilia',
                label: 'Fiumefreddo di Sicilia'
            },
            {
                value: 'Fiumicello Villa Vicentina',
                label: 'Fiumicello Villa Vicentina'
            },
            {
                value: 'Fiumicino',
                label: 'Fiumicino'
            },
            {
                value: 'Fiuminata',
                label: 'Fiuminata'
            },
            {
                value: 'Fivizzano',
                label: 'Fivizzano'
            },
            {
                value: 'Flaibano',
                label: 'Flaibano'
            },
            {
                value: 'Flero',
                label: 'Flero'
            },
            {
                value: 'Floresta',
                label: 'Floresta'
            },
            {
                value: 'Floridia',
                label: 'Floridia'
            },
            {
                value: 'Florinas',
                label: 'Florinas'
            },
            {
                value: 'Flumeri',
                label: 'Flumeri'
            },
            {
                value: 'Fluminimaggiore',
                label: 'Fluminimaggiore'
            },
            {
                value: 'Flussio',
                label: 'Flussio'
            },
            {
                value: 'Fobello',
                label: 'Fobello'
            },
            {
                value: 'Foggia',
                label: 'Foggia'
            },
            {
                value: 'Foglianise',
                label: 'Foglianise'
            },
            {
                value: 'Fogliano Redipuglia',
                label: 'Fogliano Redipuglia'
            },
            {
                value: 'Foglizzo',
                label: 'Foglizzo'
            },
            {
                value: 'Foiano della Chiana',
                label: 'Foiano della Chiana'
            },
            {
                value: 'Foiano di Val Fortore',
                label: 'Foiano di Val Fortore'
            },
            {
                value: 'Folgaria',
                label: 'Folgaria'
            },
            {
                value: 'Folignano',
                label: 'Folignano'
            },
            {
                value: 'Foligno',
                label: 'Foligno'
            },
            {
                value: 'Follina',
                label: 'Follina'
            },
            {
                value: 'Follo',
                label: 'Follo'
            },
            {
                value: 'Follonica',
                label: 'Follonica'
            },
            {
                value: 'Fombio',
                label: 'Fombio'
            },
            {
                value: 'Fondachelli-Fantina',
                label: 'Fondachelli-Fantina'
            },
            {
                value: 'Fondi',
                label: 'Fondi'
            },
            {
                value: 'Fonni',
                label: 'Fonni'
            },
            {
                value: 'Fontainemore',
                label: 'Fontainemore'
            },
            {
                value: 'Fontana Liri',
                label: 'Fontana Liri'
            },
            {
                value: 'Fontanafredda',
                label: 'Fontanafredda'
            },
            {
                value: 'Fontanarosa',
                label: 'Fontanarosa'
            },
            {
                value: 'Fontanelice',
                label: 'Fontanelice'
            },
            {
                value: 'Fontanella',
                label: 'Fontanella'
            },
            {
                value: 'Fontanellato',
                label: 'Fontanellato'
            },
            {
                value: 'Fontanelle',
                label: 'Fontanelle'
            },
            {
                value: 'Fontaneto d\'Agogna',
                label: 'Fontaneto d\'Agogna'
            },
            {
                value: 'Fontanetto Po',
                label: 'Fontanetto Po'
            },
            {
                value: 'Fontanigorda',
                label: 'Fontanigorda'
            },
            {
                value: 'Fontanile',
                label: 'Fontanile'
            },
            {
                value: 'Fontaniva',
                label: 'Fontaniva'
            },
            {
                value: 'Fonte',
                label: 'Fonte'
            },
            {
                value: 'Fonte Nuova',
                label: 'Fonte Nuova'
            },
            {
                value: 'Fontecchio',
                label: 'Fontecchio'
            },
            {
                value: 'Fontechiari',
                label: 'Fontechiari'
            },
            {
                value: 'Fontegreca',
                label: 'Fontegreca'
            },
            {
                value: 'Fonteno',
                label: 'Fonteno'
            },
            {
                value: 'Fontevivo',
                label: 'Fontevivo'
            },
            {
                value: 'Fonzaso',
                label: 'Fonzaso'
            },
            {
                value: 'Foppolo',
                label: 'Foppolo'
            },
            {
                value: 'Forano',
                label: 'Forano'
            },
            {
                value: 'Force',
                label: 'Force'
            },
            {
                value: 'Forchia',
                label: 'Forchia'
            },
            {
                value: 'Forcola',
                label: 'Forcola'
            },
            {
                value: 'Fordongianus',
                label: 'Fordongianus'
            },
            {
                value: 'Forenza',
                label: 'Forenza'
            },
            {
                value: 'Foresto Sparso',
                label: 'Foresto Sparso'
            },
            {
                value: 'Forgaria nel Friuli',
                label: 'Forgaria nel Friuli'
            },
            {
                value: 'Forino',
                label: 'Forino'
            },
            {
                value: 'Forio',
                label: 'Forio'
            },
            {
                value: 'Forlì',
                label: 'Forlì'
            },
            {
                value: 'Forlì del Sannio',
                label: 'Forlì del Sannio'
            },
            {
                value: 'Forlimpopoli',
                label: 'Forlimpopoli'
            },
            {
                value: 'Formazza',
                label: 'Formazza'
            },
            {
                value: 'Formello',
                label: 'Formello'
            },
            {
                value: 'Formia',
                label: 'Formia'
            },
            {
                value: 'Formicola',
                label: 'Formicola'
            },
            {
                value: 'Formigara',
                label: 'Formigara'
            },
            {
                value: 'Formigine',
                label: 'Formigine'
            },
            {
                value: 'Formigliana',
                label: 'Formigliana'
            },
            {
                value: 'Fornace',
                label: 'Fornace'
            },
            {
                value: 'Fornelli',
                label: 'Fornelli'
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
                value: 'Forno Canavese',
                label: 'Forno Canavese'
            },
            {
                value: 'Fornovo di Taro',
                label: 'Fornovo di Taro'
            },
            {
                value: 'Fornovo San Giovanni',
                label: 'Fornovo San Giovanni'
            },
            {
                value: 'Forte dei Marmi',
                label: 'Forte dei Marmi'
            },
            {
                value: 'Fortezza',
                label: 'Fortezza'
            },
            {
                value: 'Fortunago',
                label: 'Fortunago'
            },
            {
                value: 'Forza d\'Agrò',
                label: 'Forza d\'Agrò'
            },
            {
                value: 'Fosciandora',
                label: 'Fosciandora'
            },
            {
                value: 'Fosdinovo',
                label: 'Fosdinovo'
            },
            {
                value: 'Fossa',
                label: 'Fossa'
            },
            {
                value: 'Fossacesia',
                label: 'Fossacesia'
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
                value: 'Fossalto',
                label: 'Fossalto'
            },
            {
                value: 'Fossano',
                label: 'Fossano'
            },
            {
                value: 'Fossato di Vico',
                label: 'Fossato di Vico'
            },
            {
                value: 'Fossato Serralta',
                label: 'Fossato Serralta'
            },
            {
                value: 'Fossò',
                label: 'Fossò'
            },
            {
                value: 'Fossombrone',
                label: 'Fossombrone'
            },
            {
                value: 'Foza',
                label: 'Foza'
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
                value: 'Fraconalto',
                label: 'Fraconalto'
            },
            {
                value: 'Fragagnano',
                label: 'Fragagnano'
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
                value: 'Fraine',
                label: 'Fraine'
            },
            {
                value: 'Framura',
                label: 'Framura'
            },
            {
                value: 'Francavilla al Mare',
                label: 'Francavilla al Mare'
            },
            {
                value: 'Francavilla Angitola',
                label: 'Francavilla Angitola'
            },
            {
                value: 'Francavilla Bisio',
                label: 'Francavilla Bisio'
            },
            {
                value: 'Francavilla d\'Ete',
                label: 'Francavilla d\'Ete'
            },
            {
                value: 'Francavilla di Sicilia',
                label: 'Francavilla di Sicilia'
            },
            {
                value: 'Francavilla Fontana',
                label: 'Francavilla Fontana'
            },
            {
                value: 'Francavilla in Sinni',
                label: 'Francavilla in Sinni'
            },
            {
                value: 'Francavilla Marittima',
                label: 'Francavilla Marittima'
            },
            {
                value: 'Francica',
                label: 'Francica'
            },
            {
                value: 'Francofonte',
                label: 'Francofonte'
            },
            {
                value: 'Francolise',
                label: 'Francolise'
            },
            {
                value: 'Frascaro',
                label: 'Frascaro'
            },
            {
                value: 'Frascarolo',
                label: 'Frascarolo'
            },
            {
                value: 'Frascati',
                label: 'Frascati'
            },
            {
                value: 'Frascineto',
                label: 'Frascineto'
            },
            {
                value: 'Frassilongo',
                label: 'Frassilongo'
            },
            {
                value: 'Frassinelle Polesine',
                label: 'Frassinelle Polesine'
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
                value: 'Frassinetto',
                label: 'Frassinetto'
            },
            {
                value: 'Frassino',
                label: 'Frassino'
            },
            {
                value: 'Frassinoro',
                label: 'Frassinoro'
            },
            {
                value: 'Frasso Sabino',
                label: 'Frasso Sabino'
            },
            {
                value: 'Frasso Telesino',
                label: 'Frasso Telesino'
            },
            {
                value: 'Fratta Polesine',
                label: 'Fratta Polesine'
            },
            {
                value: 'Fratta Todina',
                label: 'Fratta Todina'
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
                value: 'Fratte Rosa',
                label: 'Fratte Rosa'
            },
            {
                value: 'Frazzanò',
                label: 'Frazzanò'
            },
            {
                value: 'Fregona',
                label: 'Fregona'
            },
            {
                value: 'Fresagrandinaria',
                label: 'Fresagrandinaria'
            },
            {
                value: 'Fresonara',
                label: 'Fresonara'
            },
            {
                value: 'Frigento',
                label: 'Frigento'
            },
            {
                value: 'Frignano',
                label: 'Frignano'
            },
            {
                value: 'Frinco',
                label: 'Frinco'
            },
            {
                value: 'Frisa',
                label: 'Frisa'
            },
            {
                value: 'Frisanco',
                label: 'Frisanco'
            },
            {
                value: 'Front',
                label: 'Front'
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
                value: 'Frosinone',
                label: 'Frosinone'
            },
            {
                value: 'Frosolone',
                label: 'Frosolone'
            },
            {
                value: 'Frossasco',
                label: 'Frossasco'
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
                value: 'Fucecchio',
                label: 'Fucecchio'
            },
            {
                value: 'Fuipiano Valle Imagna',
                label: 'Fuipiano Valle Imagna'
            },
            {
                value: 'Fumane',
                label: 'Fumane'
            },
            {
                value: 'Fumone',
                label: 'Fumone'
            },
            {
                value: 'Funes',
                label: 'Funes'
            },
            {
                value: 'Furci',
                label: 'Furci'
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
                value: 'Furore',
                label: 'Furore'
            },
            {
                value: 'Furtei',
                label: 'Furtei'
            },
            {
                value: 'Fuscaldo',
                label: 'Fuscaldo'
            },
            {
                value: 'Fusignano',
                label: 'Fusignano'
            },
            {
                value: 'Fusine',
                label: 'Fusine'
            },
            {
                value: 'Futani',
                label: 'Futani'
            },
            {
                value: 'Gabbioneta-Binanuova',
                label: 'Gabbioneta-Binanuova'
            },
            {
                value: 'Gabiano',
                label: 'Gabiano'
            },
            {
                value: 'Gabicce Mare',
                label: 'Gabicce Mare'
            },
            {
                value: 'Gaby',
                label: 'Gaby'
            },
            {
                value: 'Gadesco-Pieve Delmona',
                label: 'Gadesco-Pieve Delmona'
            },
            {
                value: 'Gadoni',
                label: 'Gadoni'
            },
            {
                value: 'Gaeta',
                label: 'Gaeta'
            },
            {
                value: 'Gaggi',
                label: 'Gaggi'
            },
            {
                value: 'Gaggiano',
                label: 'Gaggiano'
            },
            {
                value: 'Gaggio Montano',
                label: 'Gaggio Montano'
            },
            {
                value: 'Gaglianico',
                label: 'Gaglianico'
            },
            {
                value: 'Gagliano Aterno',
                label: 'Gagliano Aterno'
            },
            {
                value: 'Gagliano Castelferrato',
                label: 'Gagliano Castelferrato'
            },
            {
                value: 'Gagliano del Capo',
                label: 'Gagliano del Capo'
            },
            {
                value: 'Gagliato',
                label: 'Gagliato'
            },
            {
                value: 'Gagliole',
                label: 'Gagliole'
            },
            {
                value: 'Gaiarine',
                label: 'Gaiarine'
            },
            {
                value: 'Gaiba',
                label: 'Gaiba'
            },
            {
                value: 'Gaiola',
                label: 'Gaiola'
            },
            {
                value: 'Gaiole in Chianti',
                label: 'Gaiole in Chianti'
            },
            {
                value: 'Gairo',
                label: 'Gairo'
            },
            {
                value: 'Gais',
                label: 'Gais'
            },
            {
                value: 'Galati Mamertino',
                label: 'Galati Mamertino'
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
                value: 'Galatro',
                label: 'Galatro'
            },
            {
                value: 'Galbiate',
                label: 'Galbiate'
            },
            {
                value: 'Galeata',
                label: 'Galeata'
            },
            {
                value: 'Galgagnano',
                label: 'Galgagnano'
            },
            {
                value: 'Gallarate',
                label: 'Gallarate'
            },
            {
                value: 'Gallese',
                label: 'Gallese'
            },
            {
                value: 'Galliate',
                label: 'Galliate'
            },
            {
                value: 'Galliate Lombardo',
                label: 'Galliate Lombardo'
            },
            {
                value: 'Galliavola',
                label: 'Galliavola'
            },
            {
                value: 'Gallicano',
                label: 'Gallicano'
            },
            {
                value: 'Gallicano nel Lazio',
                label: 'Gallicano nel Lazio'
            },
            {
                value: 'Gallicchio',
                label: 'Gallicchio'
            },
            {
                value: 'Galliera',
                label: 'Galliera'
            },
            {
                value: 'Galliera Veneta',
                label: 'Galliera Veneta'
            },
            {
                value: 'Gallinaro',
                label: 'Gallinaro'
            },
            {
                value: 'Gallio',
                label: 'Gallio'
            },
            {
                value: 'Gallipoli',
                label: 'Gallipoli'
            },
            {
                value: 'Gallo Matese',
                label: 'Gallo Matese'
            },
            {
                value: 'Gallodoro',
                label: 'Gallodoro'
            },
            {
                value: 'Galluccio',
                label: 'Galluccio'
            },
            {
                value: 'Galtellì',
                label: 'Galtellì'
            },
            {
                value: 'Galzignano Terme',
                label: 'Galzignano Terme'
            },
            {
                value: 'Gamalero',
                label: 'Gamalero'
            },
            {
                value: 'Gambara',
                label: 'Gambara'
            },
            {
                value: 'Gambarana',
                label: 'Gambarana'
            },
            {
                value: 'Gambasca',
                label: 'Gambasca'
            },
            {
                value: 'Gambassi Terme',
                label: 'Gambassi Terme'
            },
            {
                value: 'Gambatesa',
                label: 'Gambatesa'
            },
            {
                value: 'Gambellara',
                label: 'Gambellara'
            },
            {
                value: 'Gamberale',
                label: 'Gamberale'
            },
            {
                value: 'Gambettola',
                label: 'Gambettola'
            },
            {
                value: 'Gambolò',
                label: 'Gambolò'
            },
            {
                value: 'Gambugliano',
                label: 'Gambugliano'
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
                value: 'Gangi',
                label: 'Gangi'
            },
            {
                value: 'Garaguso',
                label: 'Garaguso'
            },
            {
                value: 'Garbagna',
                label: 'Garbagna'
            },
            {
                value: 'Garbagna Novarese',
                label: 'Garbagna Novarese'
            },
            {
                value: 'Garbagnate Milanese',
                label: 'Garbagnate Milanese'
            },
            {
                value: 'Garbagnate Monastero',
                label: 'Garbagnate Monastero'
            },
            {
                value: 'Garda',
                label: 'Garda'
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
                value: 'Garessio',
                label: 'Garessio'
            },
            {
                value: 'Gargallo',
                label: 'Gargallo'
            },
            {
                value: 'Gargazzone',
                label: 'Gargazzone'
            },
            {
                value: 'Gargnano',
                label: 'Gargnano'
            },
            {
                value: 'Garlasco',
                label: 'Garlasco'
            },
            {
                value: 'Garlate',
                label: 'Garlate'
            },
            {
                value: 'Garlenda',
                label: 'Garlenda'
            },
            {
                value: 'Garniga Terme',
                label: 'Garniga Terme'
            },
            {
                value: 'Garzeno',
                label: 'Garzeno'
            },
            {
                value: 'Garzigliana',
                label: 'Garzigliana'
            },
            {
                value: 'Gasperina',
                label: 'Gasperina'
            },
            {
                value: 'Gassino Torinese',
                label: 'Gassino Torinese'
            },
            {
                value: 'Gattatico',
                label: 'Gattatico'
            },
            {
                value: 'Gatteo',
                label: 'Gatteo'
            },
            {
                value: 'Gattico-Veruno',
                label: 'Gattico-Veruno'
            },
            {
                value: 'Gattinara',
                label: 'Gattinara'
            },
            {
                value: 'Gavardo',
                label: 'Gavardo'
            },
            {
                value: 'Gavello',
                label: 'Gavello'
            },
            {
                value: 'Gaverina Terme',
                label: 'Gaverina Terme'
            },
            {
                value: 'Gavi',
                label: 'Gavi'
            },
            {
                value: 'Gavignano',
                label: 'Gavignano'
            },
            {
                value: 'Gavirate',
                label: 'Gavirate'
            },
            {
                value: 'Gavoi',
                label: 'Gavoi'
            },
            {
                value: 'Gavorrano',
                label: 'Gavorrano'
            },
            {
                value: 'Gazoldo degli Ippoliti',
                label: 'Gazoldo degli Ippoliti'
            },
            {
                value: 'Gazzada Schianno',
                label: 'Gazzada Schianno'
            },
            {
                value: 'Gazzaniga',
                label: 'Gazzaniga'
            },
            {
                value: 'Gazzo',
                label: 'Gazzo'
            },
            {
                value: 'Gazzo Veronese',
                label: 'Gazzo Veronese'
            },
            {
                value: 'Gazzola',
                label: 'Gazzola'
            },
            {
                value: 'Gazzuolo',
                label: 'Gazzuolo'
            },
            {
                value: 'Gela',
                label: 'Gela'
            },
            {
                value: 'Gemmano',
                label: 'Gemmano'
            },
            {
                value: 'Gemona del Friuli',
                label: 'Gemona del Friuli'
            },
            {
                value: 'Gemonio',
                label: 'Gemonio'
            },
            {
                value: 'Genazzano',
                label: 'Genazzano'
            },
            {
                value: 'Genga',
                label: 'Genga'
            },
            {
                value: 'Genivolta',
                label: 'Genivolta'
            },
            {
                value: 'Genola',
                label: 'Genola'
            },
            {
                value: 'Genoni',
                label: 'Genoni'
            },
            {
                value: 'Genova',
                label: 'Genova'
            },
            {
                value: 'Genuri',
                label: 'Genuri'
            },
            {
                value: 'Genzano di Lucania',
                label: 'Genzano di Lucania'
            },
            {
                value: 'Genzano di Roma',
                label: 'Genzano di Roma'
            },
            {
                value: 'Gera Lario',
                label: 'Gera Lario'
            },
            {
                value: 'Gerace',
                label: 'Gerace'
            },
            {
                value: 'Geraci Siculo',
                label: 'Geraci Siculo'
            },
            {
                value: 'Gerano',
                label: 'Gerano'
            },
            {
                value: 'Gerenzago',
                label: 'Gerenzago'
            },
            {
                value: 'Gerenzano',
                label: 'Gerenzano'
            },
            {
                value: 'Gergei',
                label: 'Gergei'
            },
            {
                value: 'Germagnano',
                label: 'Germagnano'
            },
            {
                value: 'Germagno',
                label: 'Germagno'
            },
            {
                value: 'Germignaga',
                label: 'Germignaga'
            },
            {
                value: 'Gerocarne',
                label: 'Gerocarne'
            },
            {
                value: 'Gerola Alta',
                label: 'Gerola Alta'
            },
            {
                value: 'Gerre de\' Caprioli',
                label: 'Gerre de\' Caprioli'
            },
            {
                value: 'Gesico',
                label: 'Gesico'
            },
            {
                value: 'Gessate',
                label: 'Gessate'
            },
            {
                value: 'Gessopalena',
                label: 'Gessopalena'
            },
            {
                value: 'Gesturi',
                label: 'Gesturi'
            },
            {
                value: 'Gesualdo',
                label: 'Gesualdo'
            },
            {
                value: 'Ghedi',
                label: 'Ghedi'
            },
            {
                value: 'Ghemme',
                label: 'Ghemme'
            },
            {
                value: 'Ghiffa',
                label: 'Ghiffa'
            },
            {
                value: 'Ghilarza',
                label: 'Ghilarza'
            },
            {
                value: 'Ghisalba',
                label: 'Ghisalba'
            },
            {
                value: 'Ghislarengo',
                label: 'Ghislarengo'
            },
            {
                value: 'Giacciano con Baruchella',
                label: 'Giacciano con Baruchella'
            },
            {
                value: 'Giaglione',
                label: 'Giaglione'
            },
            {
                value: 'Gianico',
                label: 'Gianico'
            },
            {
                value: 'Giano dell\'Umbria',
                label: 'Giano dell\'Umbria'
            },
            {
                value: 'Giano Vetusto',
                label: 'Giano Vetusto'
            },
            {
                value: 'Giardinello',
                label: 'Giardinello'
            },
            {
                value: 'Giardini-Naxos',
                label: 'Giardini-Naxos'
            },
            {
                value: 'Giarole',
                label: 'Giarole'
            },
            {
                value: 'Giarratana',
                label: 'Giarratana'
            },
            {
                value: 'Giarre',
                label: 'Giarre'
            },
            {
                value: 'Giave',
                label: 'Giave'
            },
            {
                value: 'Giaveno',
                label: 'Giaveno'
            },
            {
                value: 'Giavera del Montello',
                label: 'Giavera del Montello'
            },
            {
                value: 'Giba',
                label: 'Giba'
            },
            {
                value: 'Gibellina',
                label: 'Gibellina'
            },
            {
                value: 'Gifflenga',
                label: 'Gifflenga'
            },
            {
                value: 'Giffone',
                label: 'Giffone'
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
                value: 'Gignese',
                label: 'Gignese'
            },
            {
                value: 'Gignod',
                label: 'Gignod'
            },
            {
                value: 'Gildone',
                label: 'Gildone'
            },
            {
                value: 'Gimigliano',
                label: 'Gimigliano'
            },
            {
                value: 'Ginestra',
                label: 'Ginestra'
            },
            {
                value: 'Ginestra degli Schiavoni',
                label: 'Ginestra degli Schiavoni'
            },
            {
                value: 'Ginosa',
                label: 'Ginosa'
            },
            {
                value: 'Gioi',
                label: 'Gioi'
            },
            {
                value: 'Gioia dei Marsi',
                label: 'Gioia dei Marsi'
            },
            {
                value: 'Gioia del Colle',
                label: 'Gioia del Colle'
            },
            {
                value: 'Gioia Sannitica',
                label: 'Gioia Sannitica'
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
                value: 'Gioiosa Marea',
                label: 'Gioiosa Marea'
            },
            {
                value: 'Giove',
                label: 'Giove'
            },
            {
                value: 'Giovinazzo',
                label: 'Giovinazzo'
            },
            {
                value: 'Giovo',
                label: 'Giovo'
            },
            {
                value: 'Girasole',
                label: 'Girasole'
            },
            {
                value: 'Girifalco',
                label: 'Girifalco'
            },
            {
                value: 'Gissi',
                label: 'Gissi'
            },
            {
                value: 'Giuggianello',
                label: 'Giuggianello'
            },
            {
                value: 'Giugliano in Campania',
                label: 'Giugliano in Campania'
            },
            {
                value: 'Giuliana',
                label: 'Giuliana'
            },
            {
                value: 'Giuliano di Roma',
                label: 'Giuliano di Roma'
            },
            {
                value: 'Giuliano Teatino',
                label: 'Giuliano Teatino'
            },
            {
                value: 'Giulianova',
                label: 'Giulianova'
            },
            {
                value: 'Giungano',
                label: 'Giungano'
            },
            {
                value: 'Giurdignano',
                label: 'Giurdignano'
            },
            {
                value: 'Giussago',
                label: 'Giussago'
            },
            {
                value: 'Giussano',
                label: 'Giussano'
            },
            {
                value: 'Giustenice',
                label: 'Giustenice'
            },
            {
                value: 'Giustino',
                label: 'Giustino'
            },
            {
                value: 'Giusvalla',
                label: 'Giusvalla'
            },
            {
                value: 'Givoletto',
                label: 'Givoletto'
            },
            {
                value: 'Gizzeria',
                label: 'Gizzeria'
            },
            {
                value: 'Glorenza',
                label: 'Glorenza'
            },
            {
                value: 'Godega di Sant\'Urbano',
                label: 'Godega di Sant\'Urbano'
            },
            {
                value: 'Godiasco Salice Terme',
                label: 'Godiasco Salice Terme'
            },
            {
                value: 'Godrano',
                label: 'Godrano'
            },
            {
                value: 'Goito',
                label: 'Goito'
            },
            {
                value: 'Golasecca',
                label: 'Golasecca'
            },
            {
                value: 'Golferenzo',
                label: 'Golferenzo'
            },
            {
                value: 'Golfo Aranci',
                label: 'Golfo Aranci'
            },
            {
                value: 'Gombito',
                label: 'Gombito'
            },
            {
                value: 'Gonars',
                label: 'Gonars'
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
                value: 'Gonnoscodina',
                label: 'Gonnoscodina'
            },
            {
                value: 'Gonnosfanadiga',
                label: 'Gonnosfanadiga'
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
                value: 'Gonzaga',
                label: 'Gonzaga'
            },
            {
                value: 'Gordona',
                label: 'Gordona'
            },
            {
                value: 'Gorga',
                label: 'Gorga'
            },
            {
                value: 'Gorgo al Monticano',
                label: 'Gorgo al Monticano'
            },
            {
                value: 'Gorgoglione',
                label: 'Gorgoglione'
            },
            {
                value: 'Gorgonzola',
                label: 'Gorgonzola'
            },
            {
                value: 'Goriano Sicoli',
                label: 'Goriano Sicoli'
            },
            {
                value: 'Gorizia',
                label: 'Gorizia'
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
                value: 'Gorlago',
                label: 'Gorlago'
            },
            {
                value: 'Gorle',
                label: 'Gorle'
            },
            {
                value: 'Gornate Olona',
                label: 'Gornate Olona'
            },
            {
                value: 'Gorno',
                label: 'Gorno'
            },
            {
                value: 'Goro',
                label: 'Goro'
            },
            {
                value: 'Gorreto',
                label: 'Gorreto'
            },
            {
                value: 'Gorzegno',
                label: 'Gorzegno'
            },
            {
                value: 'Gosaldo',
                label: 'Gosaldo'
            },
            {
                value: 'Gossolengo',
                label: 'Gossolengo'
            },
            {
                value: 'Gottasecca',
                label: 'Gottasecca'
            },
            {
                value: 'Gottolengo',
                label: 'Gottolengo'
            },
            {
                value: 'Govone',
                label: 'Govone'
            },
            {
                value: 'Gozzano',
                label: 'Gozzano'
            },
            {
                value: 'Gradara',
                label: 'Gradara'
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
                value: 'Gradoli',
                label: 'Gradoli'
            },
            {
                value: 'Graffignana',
                label: 'Graffignana'
            },
            {
                value: 'Graffignano',
                label: 'Graffignano'
            },
            {
                value: 'Graglia',
                label: 'Graglia'
            },
            {
                value: 'Gragnano',
                label: 'Gragnano'
            },
            {
                value: 'Gragnano Trebbiense',
                label: 'Gragnano Trebbiense'
            },
            {
                value: 'Grammichele',
                label: 'Grammichele'
            },
            {
                value: 'Grana Monferrato',
                label: 'Grana Monferrato'
            },
            {
                value: 'Granarolo dell\'Emilia',
                label: 'Granarolo dell\'Emilia'
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
                value: 'Graniti',
                label: 'Graniti'
            },
            {
                value: 'Granozzo con Monticello',
                label: 'Granozzo con Monticello'
            },
            {
                value: 'Grantola',
                label: 'Grantola'
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
                value: 'Grassano',
                label: 'Grassano'
            },
            {
                value: 'Grassobbio',
                label: 'Grassobbio'
            },
            {
                value: 'Gratteri',
                label: 'Gratteri'
            },
            {
                value: 'Gravedona ed Uniti',
                label: 'Gravedona ed Uniti'
            },
            {
                value: 'Gravellona Lomellina',
                label: 'Gravellona Lomellina'
            },
            {
                value: 'Gravellona Toce',
                label: 'Gravellona Toce'
            },
            {
                value: 'Gravere',
                label: 'Gravere'
            },
            {
                value: 'Gravina di Catania',
                label: 'Gravina di Catania'
            },
            {
                value: 'Gravina in Puglia',
                label: 'Gravina in Puglia'
            },
            {
                value: 'Grazzanise',
                label: 'Grazzanise'
            },
            {
                value: 'Grazzano Badoglio',
                label: 'Grazzano Badoglio'
            },
            {
                value: 'Greccio',
                label: 'Greccio'
            },
            {
                value: 'Greci',
                label: 'Greci'
            },
            {
                value: 'Greggio',
                label: 'Greggio'
            },
            {
                value: 'Gremiasco',
                label: 'Gremiasco'
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
                value: 'Greve in Chianti',
                label: 'Greve in Chianti'
            },
            {
                value: 'Grezzago',
                label: 'Grezzago'
            },
            {
                value: 'Grezzana',
                label: 'Grezzana'
            },
            {
                value: 'Griante',
                label: 'Griante'
            },
            {
                value: 'Gricignano di Aversa',
                label: 'Gricignano di Aversa'
            },
            {
                value: 'Grignasco',
                label: 'Grignasco'
            },
            {
                value: 'Grigno',
                label: 'Grigno'
            },
            {
                value: 'Grimacco',
                label: 'Grimacco'
            },
            {
                value: 'Grimaldi',
                label: 'Grimaldi'
            },
            {
                value: 'Grinzane Cavour',
                label: 'Grinzane Cavour'
            },
            {
                value: 'Grisignano di Zocco',
                label: 'Grisignano di Zocco'
            },
            {
                value: 'Grisolia',
                label: 'Grisolia'
            },
            {
                value: 'Grizzana Morandi',
                label: 'Grizzana Morandi'
            },
            {
                value: 'Grognardo',
                label: 'Grognardo'
            },
            {
                value: 'Gromo',
                label: 'Gromo'
            },
            {
                value: 'Grondona',
                label: 'Grondona'
            },
            {
                value: 'Grone',
                label: 'Grone'
            },
            {
                value: 'Grontardo',
                label: 'Grontardo'
            },
            {
                value: 'Gropello Cairoli',
                label: 'Gropello Cairoli'
            },
            {
                value: 'Gropparello',
                label: 'Gropparello'
            },
            {
                value: 'Groscavallo',
                label: 'Groscavallo'
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
                value: 'Grosseto',
                label: 'Grosseto'
            },
            {
                value: 'Grosso',
                label: 'Grosso'
            },
            {
                value: 'Grottaferrata',
                label: 'Grottaferrata'
            },
            {
                value: 'Grottaglie',
                label: 'Grottaglie'
            },
            {
                value: 'Grottaminarda',
                label: 'Grottaminarda'
            },
            {
                value: 'Grottammare',
                label: 'Grottammare'
            },
            {
                value: 'Grottazzolina',
                label: 'Grottazzolina'
            },
            {
                value: 'Grotte',
                label: 'Grotte'
            },
            {
                value: 'Grotte di Castro',
                label: 'Grotte di Castro'
            },
            {
                value: 'Grotteria',
                label: 'Grotteria'
            },
            {
                value: 'Grottole',
                label: 'Grottole'
            },
            {
                value: 'Grottolella',
                label: 'Grottolella'
            },
            {
                value: 'Gruaro',
                label: 'Gruaro'
            },
            {
                value: 'Grugliasco',
                label: 'Grugliasco'
            },
            {
                value: 'Grumello Cremonese ed Uniti',
                label: 'Grumello Cremonese ed Uniti'
            },
            {
                value: 'Grumello del Monte',
                label: 'Grumello del Monte'
            },
            {
                value: 'Grumento Nova',
                label: 'Grumento Nova'
            },
            {
                value: 'Grumo Appula',
                label: 'Grumo Appula'
            },
            {
                value: 'Grumo Nevano',
                label: 'Grumo Nevano'
            },
            {
                value: 'Grumolo delle Abbadesse',
                label: 'Grumolo delle Abbadesse'
            },
            {
                value: 'Guagnano',
                label: 'Guagnano'
            },
            {
                value: 'Gualdo',
                label: 'Gualdo'
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
                value: 'Gualtieri',
                label: 'Gualtieri'
            },
            {
                value: 'Gualtieri Sicaminò',
                label: 'Gualtieri Sicaminò'
            },
            {
                value: 'Guamaggiore',
                label: 'Guamaggiore'
            },
            {
                value: 'Guanzate',
                label: 'Guanzate'
            },
            {
                value: 'Guarcino',
                label: 'Guarcino'
            },
            {
                value: 'Guarda Veneta',
                label: 'Guarda Veneta'
            },
            {
                value: 'Guardabosone',
                label: 'Guardabosone'
            },
            {
                value: 'Guardamiglio',
                label: 'Guardamiglio'
            },
            {
                value: 'Guardavalle',
                label: 'Guardavalle'
            },
            {
                value: 'Guardea',
                label: 'Guardea'
            },
            {
                value: 'Guardia Lombardi',
                label: 'Guardia Lombardi'
            },
            {
                value: 'Guardia Perticara',
                label: 'Guardia Perticara'
            },
            {
                value: 'Guardia Piemontese',
                label: 'Guardia Piemontese'
            },
            {
                value: 'Guardia Sanframondi',
                label: 'Guardia Sanframondi'
            },
            {
                value: 'Guardiagrele',
                label: 'Guardiagrele'
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
                value: 'Guardistallo',
                label: 'Guardistallo'
            },
            {
                value: 'Guarene',
                label: 'Guarene'
            },
            {
                value: 'Guasila',
                label: 'Guasila'
            },
            {
                value: 'Guastalla',
                label: 'Guastalla'
            },
            {
                value: 'Guazzora',
                label: 'Guazzora'
            },
            {
                value: 'Gubbio',
                label: 'Gubbio'
            },
            {
                value: 'Gudo Visconti',
                label: 'Gudo Visconti'
            },
            {
                value: 'Guglionesi',
                label: 'Guglionesi'
            },
            {
                value: 'Guidizzolo',
                label: 'Guidizzolo'
            },
            {
                value: 'Guidonia Montecelio',
                label: 'Guidonia Montecelio'
            },
            {
                value: 'Guiglia',
                label: 'Guiglia'
            },
            {
                value: 'Guilmi',
                label: 'Guilmi'
            },
            {
                value: 'Gurro',
                label: 'Gurro'
            },
            {
                value: 'Guspini',
                label: 'Guspini'
            },
            {
                value: 'Gussago',
                label: 'Gussago'
            },
            {
                value: 'Gussola',
                label: 'Gussola'
            },
            {
                value: 'Hône',
                label: 'Hône'
            },
            {
                value: 'Idro',
                label: 'Idro'
            },
            {
                value: 'Iglesias',
                label: 'Iglesias'
            },
            {
                value: 'Igliano',
                label: 'Igliano'
            },
            {
                value: 'Ilbono',
                label: 'Ilbono'
            },
            {
                value: 'Illasi',
                label: 'Illasi'
            },
            {
                value: 'Illorai',
                label: 'Illorai'
            },
            {
                value: 'Imbersago',
                label: 'Imbersago'
            },
            {
                value: 'Imer',
                label: 'Imer'
            },
            {
                value: 'Imola',
                label: 'Imola'
            },
            {
                value: 'Imperia',
                label: 'Imperia'
            },
            {
                value: 'Impruneta',
                label: 'Impruneta'
            },
            {
                value: 'Inarzo',
                label: 'Inarzo'
            },
            {
                value: 'Incisa Scapaccino',
                label: 'Incisa Scapaccino'
            },
            {
                value: 'Incudine',
                label: 'Incudine'
            },
            {
                value: 'Induno Olona',
                label: 'Induno Olona'
            },
            {
                value: 'Ingria',
                label: 'Ingria'
            },
            {
                value: 'Intragna',
                label: 'Intragna'
            },
            {
                value: 'Introbio',
                label: 'Introbio'
            },
            {
                value: 'Introd',
                label: 'Introd'
            },
            {
                value: 'Introdacqua',
                label: 'Introdacqua'
            },
            {
                value: 'Inverigo',
                label: 'Inverigo'
            },
            {
                value: 'Inverno e Monteleone',
                label: 'Inverno e Monteleone'
            },
            {
                value: 'Inverso Pinasca',
                label: 'Inverso Pinasca'
            },
            {
                value: 'Inveruno',
                label: 'Inveruno'
            },
            {
                value: 'Invorio',
                label: 'Invorio'
            },
            {
                value: 'Inzago',
                label: 'Inzago'
            },
            {
                value: 'Ionadi',
                label: 'Ionadi'
            },
            {
                value: 'Irgoli',
                label: 'Irgoli'
            },
            {
                value: 'Irma',
                label: 'Irma'
            },
            {
                value: 'Irsina',
                label: 'Irsina'
            },
            {
                value: 'Isasca',
                label: 'Isasca'
            },
            {
                value: 'Isca sullo Ionio',
                label: 'Isca sullo Ionio'
            },
            {
                value: 'Ischia',
                label: 'Ischia'
            },
            {
                value: 'Ischia di Castro',
                label: 'Ischia di Castro'
            },
            {
                value: 'Ischitella',
                label: 'Ischitella'
            },
            {
                value: 'Iseo',
                label: 'Iseo'
            },
            {
                value: 'Isera',
                label: 'Isera'
            },
            {
                value: 'Isernia',
                label: 'Isernia'
            },
            {
                value: 'Isili',
                label: 'Isili'
            },
            {
                value: 'Isnello',
                label: 'Isnello'
            },
            {
                value: 'Isola d\'Asti',
                label: 'Isola d\'Asti'
            },
            {
                value: 'Isola del Cantone',
                label: 'Isola del Cantone'
            },
            {
                value: 'Isola del Giglio',
                label: 'Isola del Giglio'
            },
            {
                value: 'Isola del Gran Sasso d\'Italia',
                label: 'Isola del Gran Sasso d\'Italia'
            },
            {
                value: 'Isola del Liri',
                label: 'Isola del Liri'
            },
            {
                value: 'Isola del Piano',
                label: 'Isola del Piano'
            },
            {
                value: 'Isola della Scala',
                label: 'Isola della Scala'
            },
            {
                value: 'Isola delle Femmine',
                label: 'Isola delle Femmine'
            },
            {
                value: 'Isola di Capo Rizzuto',
                label: 'Isola di Capo Rizzuto'
            },
            {
                value: 'Isola di Fondra',
                label: 'Isola di Fondra'
            },
            {
                value: 'Isola Dovarese',
                label: 'Isola Dovarese'
            },
            {
                value: 'Isola Rizza',
                label: 'Isola Rizza'
            },
            {
                value: 'Isola Sant\'Antonio',
                label: 'Isola Sant\'Antonio'
            },
            {
                value: 'Isola Vicentina',
                label: 'Isola Vicentina'
            },
            {
                value: 'Isolabella',
                label: 'Isolabella'
            },
            {
                value: 'Isolabona',
                label: 'Isolabona'
            },
            {
                value: 'Isole Tremiti',
                label: 'Isole Tremiti'
            },
            {
                value: 'Isorella',
                label: 'Isorella'
            },
            {
                value: 'Ispani',
                label: 'Ispani'
            },
            {
                value: 'Ispica',
                label: 'Ispica'
            },
            {
                value: 'Ispra',
                label: 'Ispra'
            },
            {
                value: 'Issiglio',
                label: 'Issiglio'
            },
            {
                value: 'Issime',
                label: 'Issime'
            },
            {
                value: 'Isso',
                label: 'Isso'
            },
            {
                value: 'Issogne',
                label: 'Issogne'
            },
            {
                value: 'Istrana',
                label: 'Istrana'
            },
            {
                value: 'Itala',
                label: 'Itala'
            },
            {
                value: 'Itri',
                label: 'Itri'
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
                value: 'Ivrea',
                label: 'Ivrea'
            },
            {
                value: 'Izano',
                label: 'Izano'
            },
            {
                value: 'Jacurso',
                label: 'Jacurso'
            },
            {
                value: 'Jelsi',
                label: 'Jelsi'
            },
            {
                value: 'Jenne',
                label: 'Jenne'
            },
            {
                value: 'Jerago con Orago',
                label: 'Jerago con Orago'
            },
            {
                value: 'Jerzu',
                label: 'Jerzu'
            },
            {
                value: 'Jesi',
                label: 'Jesi'
            },
            {
                value: 'Jesolo',
                label: 'Jesolo'
            },
            {
                value: 'Jolanda di Savoia',
                label: 'Jolanda di Savoia'
            },
            {
                value: 'Joppolo',
                label: 'Joppolo'
            },
            {
                value: 'Joppolo Giancaxio',
                label: 'Joppolo Giancaxio'
            },
            {
                value: 'Jovençan',
                label: 'Jovençan'
            },
            {
                value: 'L\'Aquila',
                label: 'L\'Aquila'
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
                value: 'La Maddalena',
                label: 'La Maddalena'
            },
            {
                value: 'La Magdeleine',
                label: 'La Magdeleine'
            },
            {
                value: 'La Morra',
                label: 'La Morra'
            },
            {
                value: 'La Salle',
                label: 'La Salle'
            },
            {
                value: 'La Spezia',
                label: 'La Spezia'
            },
            {
                value: 'La Thuile',
                label: 'La Thuile'
            },
            {
                value: 'La Valle',
                label: 'La Valle'
            },
            {
                value: 'La Valle Agordina',
                label: 'La Valle Agordina'
            },
            {
                value: 'La Valletta Brianza',
                label: 'La Valletta Brianza'
            },
            {
                value: 'Labico',
                label: 'Labico'
            },
            {
                value: 'Labro',
                label: 'Labro'
            },
            {
                value: 'Lacchiarella',
                label: 'Lacchiarella'
            },
            {
                value: 'Lacco Ameno',
                label: 'Lacco Ameno'
            },
            {
                value: 'Lacedonia',
                label: 'Lacedonia'
            },
            {
                value: 'Laces',
                label: 'Laces'
            },
            {
                value: 'Laconi',
                label: 'Laconi'
            },
            {
                value: 'Ladispoli',
                label: 'Ladispoli'
            },
            {
                value: 'Laerru',
                label: 'Laerru'
            },
            {
                value: 'Laganadi',
                label: 'Laganadi'
            },
            {
                value: 'Laghi',
                label: 'Laghi'
            },
            {
                value: 'Laglio',
                label: 'Laglio'
            },
            {
                value: 'Lagnasco',
                label: 'Lagnasco'
            },
            {
                value: 'Lago',
                label: 'Lago'
            },
            {
                value: 'Lagonegro',
                label: 'Lagonegro'
            },
            {
                value: 'Lagosanto',
                label: 'Lagosanto'
            },
            {
                value: 'Lagundo',
                label: 'Lagundo'
            },
            {
                value: 'Laigueglia',
                label: 'Laigueglia'
            },
            {
                value: 'Lainate',
                label: 'Lainate'
            },
            {
                value: 'Laino',
                label: 'Laino'
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
                value: 'Laion',
                label: 'Laion'
            },
            {
                value: 'Laives',
                label: 'Laives'
            },
            {
                value: 'Lajatico',
                label: 'Lajatico'
            },
            {
                value: 'Lallio',
                label: 'Lallio'
            },
            {
                value: 'Lama dei Peligni',
                label: 'Lama dei Peligni'
            },
            {
                value: 'Lama Mocogno',
                label: 'Lama Mocogno'
            },
            {
                value: 'Lambrugo',
                label: 'Lambrugo'
            },
            {
                value: 'Lamezia Terme',
                label: 'Lamezia Terme'
            },
            {
                value: 'Lamon',
                label: 'Lamon'
            },
            {
                value: 'Lampedusa e Linosa',
                label: 'Lampedusa e Linosa'
            },
            {
                value: 'Lamporecchio',
                label: 'Lamporecchio'
            },
            {
                value: 'Lamporo',
                label: 'Lamporo'
            },
            {
                value: 'Lana',
                label: 'Lana'
            },
            {
                value: 'Lanciano',
                label: 'Lanciano'
            },
            {
                value: 'Landiona',
                label: 'Landiona'
            },
            {
                value: 'Landriano',
                label: 'Landriano'
            },
            {
                value: 'Langhirano',
                label: 'Langhirano'
            },
            {
                value: 'Langosco',
                label: 'Langosco'
            },
            {
                value: 'Lanusei',
                label: 'Lanusei'
            },
            {
                value: 'Lanuvio',
                label: 'Lanuvio'
            },
            {
                value: 'Lanzada',
                label: 'Lanzada'
            },
            {
                value: 'Lanzo Torinese',
                label: 'Lanzo Torinese'
            },
            {
                value: 'Lapedona',
                label: 'Lapedona'
            },
            {
                value: 'Lapio',
                label: 'Lapio'
            },
            {
                value: 'Lappano',
                label: 'Lappano'
            },
            {
                value: 'Larciano',
                label: 'Larciano'
            },
            {
                value: 'Lardirago',
                label: 'Lardirago'
            },
            {
                value: 'Lariano',
                label: 'Lariano'
            },
            {
                value: 'Larino',
                label: 'Larino'
            },
            {
                value: 'Las Plassas',
                label: 'Las Plassas'
            },
            {
                value: 'Lasa',
                label: 'Lasa'
            },
            {
                value: 'Lascari',
                label: 'Lascari'
            },
            {
                value: 'Lasnigo',
                label: 'Lasnigo'
            },
            {
                value: 'Lastebasse',
                label: 'Lastebasse'
            },
            {
                value: 'Lastra a Signa',
                label: 'Lastra a Signa'
            },
            {
                value: 'Latera',
                label: 'Latera'
            },
            {
                value: 'Laterina Pergine Valdarno',
                label: 'Laterina Pergine Valdarno'
            },
            {
                value: 'Laterza',
                label: 'Laterza'
            },
            {
                value: 'Latiano',
                label: 'Latiano'
            },
            {
                value: 'Latina',
                label: 'Latina'
            },
            {
                value: 'Latisana',
                label: 'Latisana'
            },
            {
                value: 'Latronico',
                label: 'Latronico'
            },
            {
                value: 'Lattarico',
                label: 'Lattarico'
            },
            {
                value: 'Lauco',
                label: 'Lauco'
            },
            {
                value: 'Laureana Cilento',
                label: 'Laureana Cilento'
            },
            {
                value: 'Laureana di Borrello',
                label: 'Laureana di Borrello'
            },
            {
                value: 'Lauregno',
                label: 'Lauregno'
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
                value: 'Lauriano',
                label: 'Lauriano'
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
                value: 'Lauro',
                label: 'Lauro'
            },
            {
                value: 'Lavagna',
                label: 'Lavagna'
            },
            {
                value: 'Lavagno',
                label: 'Lavagno'
            },
            {
                value: 'Lavarone',
                label: 'Lavarone'
            },
            {
                value: 'Lavello',
                label: 'Lavello'
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
                value: 'Lavenone',
                label: 'Lavenone'
            },
            {
                value: 'Laviano',
                label: 'Laviano'
            },
            {
                value: 'Lavis',
                label: 'Lavis'
            },
            {
                value: 'Lazise',
                label: 'Lazise'
            },
            {
                value: 'Lazzate',
                label: 'Lazzate'
            },
            {
                value: 'Lecce',
                label: 'Lecce'
            },
            {
                value: 'Lecce nei Marsi',
                label: 'Lecce nei Marsi'
            },
            {
                value: 'Lecco',
                label: 'Lecco'
            },
            {
                value: 'Ledro',
                label: 'Ledro'
            },
            {
                value: 'Leffe',
                label: 'Leffe'
            },
            {
                value: 'Leggiuno',
                label: 'Leggiuno'
            },
            {
                value: 'Legnago',
                label: 'Legnago'
            },
            {
                value: 'Legnano',
                label: 'Legnano'
            },
            {
                value: 'Legnaro',
                label: 'Legnaro'
            },
            {
                value: 'Lei',
                label: 'Lei'
            },
            {
                value: 'Leini',
                label: 'Leini'
            },
            {
                value: 'Leivi',
                label: 'Leivi'
            },
            {
                value: 'Lemie',
                label: 'Lemie'
            },
            {
                value: 'Lendinara',
                label: 'Lendinara'
            },
            {
                value: 'Leni',
                label: 'Leni'
            },
            {
                value: 'Lenna',
                label: 'Lenna'
            },
            {
                value: 'Leno',
                label: 'Leno'
            },
            {
                value: 'Lenola',
                label: 'Lenola'
            },
            {
                value: 'Lenta',
                label: 'Lenta'
            },
            {
                value: 'Lentate sul Seveso',
                label: 'Lentate sul Seveso'
            },
            {
                value: 'Lentella',
                label: 'Lentella'
            },
            {
                value: 'Lentini',
                label: 'Lentini'
            },
            {
                value: 'Leonessa',
                label: 'Leonessa'
            },
            {
                value: 'Leonforte',
                label: 'Leonforte'
            },
            {
                value: 'Leporano',
                label: 'Leporano'
            },
            {
                value: 'Lequile',
                label: 'Lequile'
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
                value: 'Lercara Friddi',
                label: 'Lercara Friddi'
            },
            {
                value: 'Lerici',
                label: 'Lerici'
            },
            {
                value: 'Lerma',
                label: 'Lerma'
            },
            {
                value: 'Lesa',
                label: 'Lesa'
            },
            {
                value: 'Lesegno',
                label: 'Lesegno'
            },
            {
                value: 'Lesignano de\' Bagni',
                label: 'Lesignano de\' Bagni'
            },
            {
                value: 'Lesina',
                label: 'Lesina'
            },
            {
                value: 'Lesmo',
                label: 'Lesmo'
            },
            {
                value: 'Lessolo',
                label: 'Lessolo'
            },
            {
                value: 'Lessona',
                label: 'Lessona'
            },
            {
                value: 'Lestizza',
                label: 'Lestizza'
            },
            {
                value: 'Letino',
                label: 'Letino'
            },
            {
                value: 'Letojanni',
                label: 'Letojanni'
            },
            {
                value: 'Lettere',
                label: 'Lettere'
            },
            {
                value: 'Lettomanoppello',
                label: 'Lettomanoppello'
            },
            {
                value: 'Lettopalena',
                label: 'Lettopalena'
            },
            {
                value: 'Levanto',
                label: 'Levanto'
            },
            {
                value: 'Levate',
                label: 'Levate'
            },
            {
                value: 'Leverano',
                label: 'Leverano'
            },
            {
                value: 'Levice',
                label: 'Levice'
            },
            {
                value: 'Levico Terme',
                label: 'Levico Terme'
            },
            {
                value: 'Levone',
                label: 'Levone'
            },
            {
                value: 'Lezzeno',
                label: 'Lezzeno'
            },
            {
                value: 'Liberi',
                label: 'Liberi'
            },
            {
                value: 'Librizzi',
                label: 'Librizzi'
            },
            {
                value: 'Licata',
                label: 'Licata'
            },
            {
                value: 'Licciana Nardi',
                label: 'Licciana Nardi'
            },
            {
                value: 'Licenza',
                label: 'Licenza'
            },
            {
                value: 'Licodia Eubea',
                label: 'Licodia Eubea'
            },
            {
                value: 'Lierna',
                label: 'Lierna'
            },
            {
                value: 'Lignana',
                label: 'Lignana'
            },
            {
                value: 'Lignano Sabbiadoro',
                label: 'Lignano Sabbiadoro'
            },
            {
                value: 'Lillianes',
                label: 'Lillianes'
            },
            {
                value: 'Limana',
                label: 'Limana'
            },
            {
                value: 'Limatola',
                label: 'Limatola'
            },
            {
                value: 'Limbadi',
                label: 'Limbadi'
            },
            {
                value: 'Limbiate',
                label: 'Limbiate'
            },
            {
                value: 'Limena',
                label: 'Limena'
            },
            {
                value: 'Limido Comasco',
                label: 'Limido Comasco'
            },
            {
                value: 'Limina',
                label: 'Limina'
            },
            {
                value: 'Limone Piemonte',
                label: 'Limone Piemonte'
            },
            {
                value: 'Limone sul Garda',
                label: 'Limone sul Garda'
            },
            {
                value: 'Limosano',
                label: 'Limosano'
            },
            {
                value: 'Linarolo',
                label: 'Linarolo'
            },
            {
                value: 'Linguaglossa',
                label: 'Linguaglossa'
            },
            {
                value: 'Lioni',
                label: 'Lioni'
            },
            {
                value: 'Lipari',
                label: 'Lipari'
            },
            {
                value: 'Lipomo',
                label: 'Lipomo'
            },
            {
                value: 'Lirio',
                label: 'Lirio'
            },
            {
                value: 'Liscate',
                label: 'Liscate'
            },
            {
                value: 'Liscia',
                label: 'Liscia'
            },
            {
                value: 'Lisciano Niccone',
                label: 'Lisciano Niccone'
            },
            {
                value: 'Lisio',
                label: 'Lisio'
            },
            {
                value: 'Lissone',
                label: 'Lissone'
            },
            {
                value: 'Liveri',
                label: 'Liveri'
            },
            {
                value: 'Livigno',
                label: 'Livigno'
            },
            {
                value: 'Livinallongo del Col di Lana',
                label: 'Livinallongo del Col di Lana'
            },
            {
                value: 'Livo',
                label: 'Livo'
            },
            {
                value: 'Livorno',
                label: 'Livorno'
            },
            {
                value: 'Livorno Ferraris',
                label: 'Livorno Ferraris'
            },
            {
                value: 'Livraga',
                label: 'Livraga'
            },
            {
                value: 'Lizzanello',
                label: 'Lizzanello'
            },
            {
                value: 'Lizzano',
                label: 'Lizzano'
            },
            {
                value: 'Lizzano in Belvedere',
                label: 'Lizzano in Belvedere'
            },
            {
                value: 'Loano',
                label: 'Loano'
            },
            {
                value: 'Loazzolo',
                label: 'Loazzolo'
            },
            {
                value: 'Locana',
                label: 'Locana'
            },
            {
                value: 'Locate di Triulzi',
                label: 'Locate di Triulzi'
            },
            {
                value: 'Locate Varesino',
                label: 'Locate Varesino'
            },
            {
                value: 'Locatello',
                label: 'Locatello'
            },
            {
                value: 'Loceri',
                label: 'Loceri'
            },
            {
                value: 'Locorotondo',
                label: 'Locorotondo'
            },
            {
                value: 'Locri',
                label: 'Locri'
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
                value: 'Lodi',
                label: 'Lodi'
            },
            {
                value: 'Lodi Vecchio',
                label: 'Lodi Vecchio'
            },
            {
                value: 'Lodine',
                label: 'Lodine'
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
                value: 'Loiano',
                label: 'Loiano'
            },
            {
                value: 'Loiri Porto San Paolo',
                label: 'Loiri Porto San Paolo'
            },
            {
                value: 'Lomagna',
                label: 'Lomagna'
            },
            {
                value: 'Lomazzo',
                label: 'Lomazzo'
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
                value: 'Lomello',
                label: 'Lomello'
            },
            {
                value: 'Lona-Lases',
                label: 'Lona-Lases'
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
                value: 'Lonato del Garda',
                label: 'Lonato del Garda'
            },
            {
                value: 'Londa',
                label: 'Londa'
            },
            {
                value: 'Longano',
                label: 'Longano'
            },
            {
                value: 'Longare',
                label: 'Longare'
            },
            {
                value: 'Longarone',
                label: 'Longarone'
            },
            {
                value: 'Longhena',
                label: 'Longhena'
            },
            {
                value: 'Longi',
                label: 'Longi'
            },
            {
                value: 'Longiano',
                label: 'Longiano'
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
                value: 'Longone al Segrino',
                label: 'Longone al Segrino'
            },
            {
                value: 'Longone Sabino',
                label: 'Longone Sabino'
            },
            {
                value: 'Lonigo',
                label: 'Lonigo'
            },
            {
                value: 'Loranzè',
                label: 'Loranzè'
            },
            {
                value: 'Loreggia',
                label: 'Loreggia'
            },
            {
                value: 'Loreglia',
                label: 'Loreglia'
            },
            {
                value: 'Lorenzago di Cadore',
                label: 'Lorenzago di Cadore'
            },
            {
                value: 'Loreo',
                label: 'Loreo'
            },
            {
                value: 'Loreto',
                label: 'Loreto'
            },
            {
                value: 'Loreto Aprutino',
                label: 'Loreto Aprutino'
            },
            {
                value: 'Loria',
                label: 'Loria'
            },
            {
                value: 'Loro Ciuffenna',
                label: 'Loro Ciuffenna'
            },
            {
                value: 'Loro Piceno',
                label: 'Loro Piceno'
            },
            {
                value: 'Lorsica',
                label: 'Lorsica'
            },
            {
                value: 'Losine',
                label: 'Losine'
            },
            {
                value: 'Lotzorai',
                label: 'Lotzorai'
            },
            {
                value: 'Lovere',
                label: 'Lovere'
            },
            {
                value: 'Lovero',
                label: 'Lovero'
            },
            {
                value: 'Lozio',
                label: 'Lozio'
            },
            {
                value: 'Lozza',
                label: 'Lozza'
            },
            {
                value: 'Lozzo Atestino',
                label: 'Lozzo Atestino'
            },
            {
                value: 'Lozzo di Cadore',
                label: 'Lozzo di Cadore'
            },
            {
                value: 'Lozzolo',
                label: 'Lozzolo'
            },
            {
                value: 'Lu e Cuccaro Monferrato',
                label: 'Lu e Cuccaro Monferrato'
            },
            {
                value: 'Lubriano',
                label: 'Lubriano'
            },
            {
                value: 'Lucca',
                label: 'Lucca'
            },
            {
                value: 'Lucca Sicula',
                label: 'Lucca Sicula'
            },
            {
                value: 'Lucera',
                label: 'Lucera'
            },
            {
                value: 'Lucignano',
                label: 'Lucignano'
            },
            {
                value: 'Lucinasco',
                label: 'Lucinasco'
            },
            {
                value: 'Lucito',
                label: 'Lucito'
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
                value: 'Lugagnano Val d\'Arda',
                label: 'Lugagnano Val d\'Arda'
            },
            {
                value: 'Lugnano in Teverina',
                label: 'Lugnano in Teverina'
            },
            {
                value: 'Lugo',
                label: 'Lugo'
            },
            {
                value: 'Lugo di Vicenza',
                label: 'Lugo di Vicenza'
            },
            {
                value: 'Luino',
                label: 'Luino'
            },
            {
                value: 'Luisago',
                label: 'Luisago'
            },
            {
                value: 'Lula',
                label: 'Lula'
            },
            {
                value: 'Lumarzo',
                label: 'Lumarzo'
            },
            {
                value: 'Lumezzane',
                label: 'Lumezzane'
            },
            {
                value: 'Lunamatrona',
                label: 'Lunamatrona'
            },
            {
                value: 'Lunano',
                label: 'Lunano'
            },
            {
                value: 'Lungavilla',
                label: 'Lungavilla'
            },
            {
                value: 'Lungro',
                label: 'Lungro'
            },
            {
                value: 'Luni',
                label: 'Luni'
            },
            {
                value: 'Luogosano',
                label: 'Luogosano'
            },
            {
                value: 'Luogosanto',
                label: 'Luogosanto'
            },
            {
                value: 'Lupara',
                label: 'Lupara'
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
                value: 'Lurano',
                label: 'Lurano'
            },
            {
                value: 'Luras',
                label: 'Luras'
            },
            {
                value: 'Lurate Caccivio',
                label: 'Lurate Caccivio'
            },
            {
                value: 'Lusciano',
                label: 'Lusciano'
            },
            {
                value: 'Luserna',
                label: 'Luserna'
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
                value: 'Lusevera',
                label: 'Lusevera'
            },
            {
                value: 'Lusia',
                label: 'Lusia'
            },
            {
                value: 'Lusiana Conco',
                label: 'Lusiana Conco'
            },
            {
                value: 'Lusigliè',
                label: 'Lusigliè'
            },
            {
                value: 'Luson',
                label: 'Luson'
            },
            {
                value: 'Lustra',
                label: 'Lustra'
            },
            {
                value: 'Luvinate',
                label: 'Luvinate'
            },
            {
                value: 'Luzzana',
                label: 'Luzzana'
            },
            {
                value: 'Luzzara',
                label: 'Luzzara'
            },
            {
                value: 'Luzzi',
                label: 'Luzzi'
            },
            {
                value: 'Maccagno con Pino e Veddasca',
                label: 'Maccagno con Pino e Veddasca'
            },
            {
                value: 'Maccastorna',
                label: 'Maccastorna'
            },
            {
                value: 'Macchia d\'Isernia',
                label: 'Macchia d\'Isernia'
            },
            {
                value: 'Macchia Valfortore',
                label: 'Macchia Valfortore'
            },
            {
                value: 'Macchiagodena',
                label: 'Macchiagodena'
            },
            {
                value: 'Macello',
                label: 'Macello'
            },
            {
                value: 'Macerata',
                label: 'Macerata'
            },
            {
                value: 'Macerata Campania',
                label: 'Macerata Campania'
            },
            {
                value: 'Macerata Feltria',
                label: 'Macerata Feltria'
            },
            {
                value: 'Macherio',
                label: 'Macherio'
            },
            {
                value: 'Maclodio',
                label: 'Maclodio'
            },
            {
                value: 'Macomer',
                label: 'Macomer'
            },
            {
                value: 'Macra',
                label: 'Macra'
            },
            {
                value: 'Macugnaga',
                label: 'Macugnaga'
            },
            {
                value: 'Maddaloni',
                label: 'Maddaloni'
            },
            {
                value: 'Madesimo',
                label: 'Madesimo'
            },
            {
                value: 'Madignano',
                label: 'Madignano'
            },
            {
                value: 'Madone',
                label: 'Madone'
            },
            {
                value: 'Madonna del Sasso',
                label: 'Madonna del Sasso'
            },
            {
                value: 'Madruzzo',
                label: 'Madruzzo'
            },
            {
                value: 'Maenza',
                label: 'Maenza'
            },
            {
                value: 'Mafalda',
                label: 'Mafalda'
            },
            {
                value: 'Magasa',
                label: 'Magasa'
            },
            {
                value: 'Magenta',
                label: 'Magenta'
            },
            {
                value: 'Maggiora',
                label: 'Maggiora'
            },
            {
                value: 'Magherno',
                label: 'Magherno'
            },
            {
                value: 'Magione',
                label: 'Magione'
            },
            {
                value: 'Magisano',
                label: 'Magisano'
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
                value: 'Magliano de\' Marsi',
                label: 'Magliano de\' Marsi'
            },
            {
                value: 'Magliano di Tenna',
                label: 'Magliano di Tenna'
            },
            {
                value: 'Magliano in Toscana',
                label: 'Magliano in Toscana'
            },
            {
                value: 'Magliano Romano',
                label: 'Magliano Romano'
            },
            {
                value: 'Magliano Sabina',
                label: 'Magliano Sabina'
            },
            {
                value: 'Magliano Vetere',
                label: 'Magliano Vetere'
            },
            {
                value: 'Maglie',
                label: 'Maglie'
            },
            {
                value: 'Magliolo',
                label: 'Magliolo'
            },
            {
                value: 'Maglione',
                label: 'Maglione'
            },
            {
                value: 'Magnacavallo',
                label: 'Magnacavallo'
            },
            {
                value: 'Magnago',
                label: 'Magnago'
            },
            {
                value: 'Magnano',
                label: 'Magnano'
            },
            {
                value: 'Magnano in Riviera',
                label: 'Magnano in Riviera'
            },
            {
                value: 'Magomadas',
                label: 'Magomadas'
            },
            {
                value: 'Magrè sulla strada del vino',
                label: 'Magrè sulla strada del vino'
            },
            {
                value: 'Magreglio',
                label: 'Magreglio'
            },
            {
                value: 'Maida',
                label: 'Maida'
            },
            {
                value: 'Maierà',
                label: 'Maierà'
            },
            {
                value: 'Maierato',
                label: 'Maierato'
            },
            {
                value: 'Maiolati Spontini',
                label: 'Maiolati Spontini'
            },
            {
                value: 'Maiolo',
                label: 'Maiolo'
            },
            {
                value: 'Maiori',
                label: 'Maiori'
            },
            {
                value: 'Mairago',
                label: 'Mairago'
            },
            {
                value: 'Mairano',
                label: 'Mairano'
            },
            {
                value: 'Maissana',
                label: 'Maissana'
            },
            {
                value: 'Majano',
                label: 'Majano'
            },
            {
                value: 'Malagnino',
                label: 'Malagnino'
            },
            {
                value: 'Malalbergo',
                label: 'Malalbergo'
            },
            {
                value: 'Malborghetto Valbruna',
                label: 'Malborghetto Valbruna'
            },
            {
                value: 'Malcesine',
                label: 'Malcesine'
            },
            {
                value: 'Malé',
                label: 'Malé'
            },
            {
                value: 'Malegno',
                label: 'Malegno'
            },
            {
                value: 'Maleo',
                label: 'Maleo'
            },
            {
                value: 'Malesco',
                label: 'Malesco'
            },
            {
                value: 'Maletto',
                label: 'Maletto'
            },
            {
                value: 'Malfa',
                label: 'Malfa'
            },
            {
                value: 'Malgrate',
                label: 'Malgrate'
            },
            {
                value: 'Malito',
                label: 'Malito'
            },
            {
                value: 'Mallare',
                label: 'Mallare'
            },
            {
                value: 'Malles Venosta',
                label: 'Malles Venosta'
            },
            {
                value: 'Malnate',
                label: 'Malnate'
            },
            {
                value: 'Malo',
                label: 'Malo'
            },
            {
                value: 'Malonno',
                label: 'Malonno'
            },
            {
                value: 'Maltignano',
                label: 'Maltignano'
            },
            {
                value: 'Malvagna',
                label: 'Malvagna'
            },
            {
                value: 'Malvicino',
                label: 'Malvicino'
            },
            {
                value: 'Malvito',
                label: 'Malvito'
            },
            {
                value: 'Mammola',
                label: 'Mammola'
            },
            {
                value: 'Mamoiada',
                label: 'Mamoiada'
            },
            {
                value: 'Manciano',
                label: 'Manciano'
            },
            {
                value: 'Mandanici',
                label: 'Mandanici'
            },
            {
                value: 'Mandas',
                label: 'Mandas'
            },
            {
                value: 'Mandatoriccio',
                label: 'Mandatoriccio'
            },
            {
                value: 'Mandela',
                label: 'Mandela'
            },
            {
                value: 'Mandello del Lario',
                label: 'Mandello del Lario'
            },
            {
                value: 'Mandello Vitta',
                label: 'Mandello Vitta'
            },
            {
                value: 'Manduria',
                label: 'Manduria'
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
                value: 'Manfredonia',
                label: 'Manfredonia'
            },
            {
                value: 'Mango',
                label: 'Mango'
            },
            {
                value: 'Mangone',
                label: 'Mangone'
            },
            {
                value: 'Maniace',
                label: 'Maniace'
            },
            {
                value: 'Maniago',
                label: 'Maniago'
            },
            {
                value: 'Manocalzati',
                label: 'Manocalzati'
            },
            {
                value: 'Manoppello',
                label: 'Manoppello'
            },
            {
                value: 'Mansuè',
                label: 'Mansuè'
            },
            {
                value: 'Manta',
                label: 'Manta'
            },
            {
                value: 'Mantello',
                label: 'Mantello'
            },
            {
                value: 'Mantova',
                label: 'Mantova'
            },
            {
                value: 'Manzano',
                label: 'Manzano'
            },
            {
                value: 'Manziana',
                label: 'Manziana'
            },
            {
                value: 'Mapello',
                label: 'Mapello'
            },
            {
                value: 'Mappano',
                label: 'Mappano'
            },
            {
                value: 'Mara',
                label: 'Mara'
            },
            {
                value: 'Maracalagonis',
                label: 'Maracalagonis'
            },
            {
                value: 'Maranello',
                label: 'Maranello'
            },
            {
                value: 'Marano di Napoli',
                label: 'Marano di Napoli'
            },
            {
                value: 'Marano di Valpolicella',
                label: 'Marano di Valpolicella'
            },
            {
                value: 'Marano Equo',
                label: 'Marano Equo'
            },
            {
                value: 'Marano Lagunare',
                label: 'Marano Lagunare'
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
                value: 'Marano sul Panaro',
                label: 'Marano sul Panaro'
            },
            {
                value: 'Marano Ticino',
                label: 'Marano Ticino'
            },
            {
                value: 'Marano Vicentino',
                label: 'Marano Vicentino'
            },
            {
                value: 'Maranzana',
                label: 'Maranzana'
            },
            {
                value: 'Maratea',
                label: 'Maratea'
            },
            {
                value: 'Marcallo con Casone',
                label: 'Marcallo con Casone'
            },
            {
                value: 'Marcaria',
                label: 'Marcaria'
            },
            {
                value: 'Marcedusa',
                label: 'Marcedusa'
            },
            {
                value: 'Marcellina',
                label: 'Marcellina'
            },
            {
                value: 'Marcellinara',
                label: 'Marcellinara'
            },
            {
                value: 'Marcetelli',
                label: 'Marcetelli'
            },
            {
                value: 'Marcheno',
                label: 'Marcheno'
            },
            {
                value: 'Marchirolo',
                label: 'Marchirolo'
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
                value: 'Marcianise',
                label: 'Marcianise'
            },
            {
                value: 'Marciano della Chiana',
                label: 'Marciano della Chiana'
            },
            {
                value: 'Marcignago',
                label: 'Marcignago'
            },
            {
                value: 'Marcon',
                label: 'Marcon'
            },
            {
                value: 'Marebbe',
                label: 'Marebbe'
            },
            {
                value: 'Marene',
                label: 'Marene'
            },
            {
                value: 'Mareno di Piave',
                label: 'Mareno di Piave'
            },
            {
                value: 'Marentino',
                label: 'Marentino'
            },
            {
                value: 'Maretto',
                label: 'Maretto'
            },
            {
                value: 'Margarita',
                label: 'Margarita'
            },
            {
                value: 'Margherita di Savoia',
                label: 'Margherita di Savoia'
            },
            {
                value: 'Margno',
                label: 'Margno'
            },
            {
                value: 'Mariana Mantovana',
                label: 'Mariana Mantovana'
            },
            {
                value: 'Mariano Comense',
                label: 'Mariano Comense'
            },
            {
                value: 'Mariano del Friuli',
                label: 'Mariano del Friuli'
            },
            {
                value: 'Marianopoli',
                label: 'Marianopoli'
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
                value: 'Marina di Gioiosa Ionica',
                label: 'Marina di Gioiosa Ionica'
            },
            {
                value: 'Marineo',
                label: 'Marineo'
            },
            {
                value: 'Marino',
                label: 'Marino'
            },
            {
                value: 'Marlengo',
                label: 'Marlengo'
            },
            {
                value: 'Marliana',
                label: 'Marliana'
            },
            {
                value: 'Marmentino',
                label: 'Marmentino'
            },
            {
                value: 'Marmirolo',
                label: 'Marmirolo'
            },
            {
                value: 'Marmora',
                label: 'Marmora'
            },
            {
                value: 'Marnate',
                label: 'Marnate'
            },
            {
                value: 'Marone',
                label: 'Marone'
            },
            {
                value: 'Maropati',
                label: 'Maropati'
            },
            {
                value: 'Marostica',
                label: 'Marostica'
            },
            {
                value: 'Marradi',
                label: 'Marradi'
            },
            {
                value: 'Marrubiu',
                label: 'Marrubiu'
            },
            {
                value: 'Marsaglia',
                label: 'Marsaglia'
            },
            {
                value: 'Marsala',
                label: 'Marsala'
            },
            {
                value: 'Marsciano',
                label: 'Marsciano'
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
                value: 'Marta',
                label: 'Marta'
            },
            {
                value: 'Martano',
                label: 'Martano'
            },
            {
                value: 'Martellago',
                label: 'Martellago'
            },
            {
                value: 'Martello',
                label: 'Martello'
            },
            {
                value: 'Martignacco',
                label: 'Martignacco'
            },
            {
                value: 'Martignana di Po',
                label: 'Martignana di Po'
            },
            {
                value: 'Martignano',
                label: 'Martignano'
            },
            {
                value: 'Martina Franca',
                label: 'Martina Franca'
            },
            {
                value: 'Martinengo',
                label: 'Martinengo'
            },
            {
                value: 'Martiniana Po',
                label: 'Martiniana Po'
            },
            {
                value: 'Martinsicuro',
                label: 'Martinsicuro'
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
                value: 'Martis',
                label: 'Martis'
            },
            {
                value: 'Martone',
                label: 'Martone'
            },
            {
                value: 'Marudo',
                label: 'Marudo'
            },
            {
                value: 'Maruggio',
                label: 'Maruggio'
            },
            {
                value: 'Marzabotto',
                label: 'Marzabotto'
            },
            {
                value: 'Marzano',
                label: 'Marzano'
            },
            {
                value: 'Marzano Appio',
                label: 'Marzano Appio'
            },
            {
                value: 'Marzano di Nola',
                label: 'Marzano di Nola'
            },
            {
                value: 'Marzi',
                label: 'Marzi'
            },
            {
                value: 'Marzio',
                label: 'Marzio'
            },
            {
                value: 'Masainas',
                label: 'Masainas'
            },
            {
                value: 'Masate',
                label: 'Masate'
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
                value: 'Maschito',
                label: 'Maschito'
            },
            {
                value: 'Masciago Primo',
                label: 'Masciago Primo'
            },
            {
                value: 'Maser',
                label: 'Maser'
            },
            {
                value: 'Masera',
                label: 'Masera'
            },
            {
                value: 'Maserà di Padova',
                label: 'Maserà di Padova'
            },
            {
                value: 'Maserada sul Piave',
                label: 'Maserada sul Piave'
            },
            {
                value: 'Masi',
                label: 'Masi'
            },
            {
                value: 'Masi Torello',
                label: 'Masi Torello'
            },
            {
                value: 'Masio',
                label: 'Masio'
            },
            {
                value: 'Maslianico',
                label: 'Maslianico'
            },
            {
                value: 'Masone',
                label: 'Masone'
            },
            {
                value: 'Massa',
                label: 'Massa'
            },
            {
                value: 'Massa d\'Albe',
                label: 'Massa d\'Albe'
            },
            {
                value: 'Massa di Somma',
                label: 'Massa di Somma'
            },
            {
                value: 'Massa e Cozzile',
                label: 'Massa e Cozzile'
            },
            {
                value: 'Massa Fermana',
                label: 'Massa Fermana'
            },
            {
                value: 'Massa Lombarda',
                label: 'Massa Lombarda'
            },
            {
                value: 'Massa Lubrense',
                label: 'Massa Lubrense'
            },
            {
                value: 'Massa Marittima',
                label: 'Massa Marittima'
            },
            {
                value: 'Massa Martana',
                label: 'Massa Martana'
            },
            {
                value: 'Massafra',
                label: 'Massafra'
            },
            {
                value: 'Massalengo',
                label: 'Massalengo'
            },
            {
                value: 'Massanzago',
                label: 'Massanzago'
            },
            {
                value: 'Massarosa',
                label: 'Massarosa'
            },
            {
                value: 'Massazza',
                label: 'Massazza'
            },
            {
                value: 'Massello',
                label: 'Massello'
            },
            {
                value: 'Masserano',
                label: 'Masserano'
            },
            {
                value: 'Massignano',
                label: 'Massignano'
            },
            {
                value: 'Massimeno',
                label: 'Massimeno'
            },
            {
                value: 'Massimino',
                label: 'Massimino'
            },
            {
                value: 'Massino Visconti',
                label: 'Massino Visconti'
            },
            {
                value: 'Massiola',
                label: 'Massiola'
            },
            {
                value: 'Masullas',
                label: 'Masullas'
            },
            {
                value: 'Matelica',
                label: 'Matelica'
            },
            {
                value: 'Matera',
                label: 'Matera'
            },
            {
                value: 'Mathi',
                label: 'Mathi'
            },
            {
                value: 'Matino',
                label: 'Matino'
            },
            {
                value: 'Matrice',
                label: 'Matrice'
            },
            {
                value: 'Mattie',
                label: 'Mattie'
            },
            {
                value: 'Mattinata',
                label: 'Mattinata'
            },
            {
                value: 'Mazara del Vallo',
                label: 'Mazara del Vallo'
            },
            {
                value: 'Mazzano',
                label: 'Mazzano'
            },
            {
                value: 'Mazzano Romano',
                label: 'Mazzano Romano'
            },
            {
                value: 'Mazzarino',
                label: 'Mazzarino'
            },
            {
                value: 'Mazzarrà Sant\'Andrea',
                label: 'Mazzarrà Sant\'Andrea'
            },
            {
                value: 'Mazzarrone',
                label: 'Mazzarrone'
            },
            {
                value: 'Mazzè',
                label: 'Mazzè'
            },
            {
                value: 'Mazzin',
                label: 'Mazzin'
            },
            {
                value: 'Mazzo di Valtellina',
                label: 'Mazzo di Valtellina'
            },
            {
                value: 'Meana di Susa',
                label: 'Meana di Susa'
            },
            {
                value: 'Meana Sardo',
                label: 'Meana Sardo'
            },
            {
                value: 'Meda',
                label: 'Meda'
            },
            {
                value: 'Mede',
                label: 'Mede'
            },
            {
                value: 'Medea',
                label: 'Medea'
            },
            {
                value: 'Medesano',
                label: 'Medesano'
            },
            {
                value: 'Medicina',
                label: 'Medicina'
            },
            {
                value: 'Mediglia',
                label: 'Mediglia'
            },
            {
                value: 'Medolago',
                label: 'Medolago'
            },
            {
                value: 'Medole',
                label: 'Medole'
            },
            {
                value: 'Medolla',
                label: 'Medolla'
            },
            {
                value: 'Meduna di Livenza',
                label: 'Meduna di Livenza'
            },
            {
                value: 'Meduno',
                label: 'Meduno'
            },
            {
                value: 'Megliadino San Vitale',
                label: 'Megliadino San Vitale'
            },
            {
                value: 'Meina',
                label: 'Meina'
            },
            {
                value: 'Melara',
                label: 'Melara'
            },
            {
                value: 'Melazzo',
                label: 'Melazzo'
            },
            {
                value: 'Meldola',
                label: 'Meldola'
            },
            {
                value: 'Mele',
                label: 'Mele'
            },
            {
                value: 'Melegnano',
                label: 'Melegnano'
            },
            {
                value: 'Melendugno',
                label: 'Melendugno'
            },
            {
                value: 'Meleti',
                label: 'Meleti'
            },
            {
                value: 'Melfi',
                label: 'Melfi'
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
                value: 'Melilli',
                label: 'Melilli'
            },
            {
                value: 'Melissa',
                label: 'Melissa'
            },
            {
                value: 'Melissano',
                label: 'Melissano'
            },
            {
                value: 'Melito di Napoli',
                label: 'Melito di Napoli'
            },
            {
                value: 'Melito di Porto Salvo',
                label: 'Melito di Porto Salvo'
            },
            {
                value: 'Melito Irpino',
                label: 'Melito Irpino'
            },
            {
                value: 'Melizzano',
                label: 'Melizzano'
            },
            {
                value: 'Melle',
                label: 'Melle'
            },
            {
                value: 'Mello',
                label: 'Mello'
            },
            {
                value: 'Melpignano',
                label: 'Melpignano'
            },
            {
                value: 'Meltina',
                label: 'Meltina'
            },
            {
                value: 'Melzo',
                label: 'Melzo'
            },
            {
                value: 'Menaggio',
                label: 'Menaggio'
            },
            {
                value: 'Menconico',
                label: 'Menconico'
            },
            {
                value: 'Mendatica',
                label: 'Mendatica'
            },
            {
                value: 'Mendicino',
                label: 'Mendicino'
            },
            {
                value: 'Menfi',
                label: 'Menfi'
            },
            {
                value: 'Mentana',
                label: 'Mentana'
            },
            {
                value: 'Meolo',
                label: 'Meolo'
            },
            {
                value: 'Merana',
                label: 'Merana'
            },
            {
                value: 'Merano',
                label: 'Merano'
            },
            {
                value: 'Merate',
                label: 'Merate'
            },
            {
                value: 'Mercallo',
                label: 'Mercallo'
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
                value: 'Mercato San Severino',
                label: 'Mercato San Severino'
            },
            {
                value: 'Mercato Saraceno',
                label: 'Mercato Saraceno'
            },
            {
                value: 'Mercenasco',
                label: 'Mercenasco'
            },
            {
                value: 'Mercogliano',
                label: 'Mercogliano'
            },
            {
                value: 'Mereto di Tomba',
                label: 'Mereto di Tomba'
            },
            {
                value: 'Mergo',
                label: 'Mergo'
            },
            {
                value: 'Mergozzo',
                label: 'Mergozzo'
            },
            {
                value: 'Merì',
                label: 'Merì'
            },
            {
                value: 'Merlara',
                label: 'Merlara'
            },
            {
                value: 'Merlino',
                label: 'Merlino'
            },
            {
                value: 'Merone',
                label: 'Merone'
            },
            {
                value: 'Mesagne',
                label: 'Mesagne'
            },
            {
                value: 'Mese',
                label: 'Mese'
            },
            {
                value: 'Mesenzana',
                label: 'Mesenzana'
            },
            {
                value: 'Mesero',
                label: 'Mesero'
            },
            {
                value: 'Mesola',
                label: 'Mesola'
            },
            {
                value: 'Mesoraca',
                label: 'Mesoraca'
            },
            {
                value: 'Messina',
                label: 'Messina'
            },
            {
                value: 'Mestrino',
                label: 'Mestrino'
            },
            {
                value: 'Meta',
                label: 'Meta'
            },
            {
                value: 'Mezzago',
                label: 'Mezzago'
            },
            {
                value: 'Mezzana',
                label: 'Mezzana'
            },
            {
                value: 'Mezzana Bigli',
                label: 'Mezzana Bigli'
            },
            {
                value: 'Mezzana Mortigliengo',
                label: 'Mezzana Mortigliengo'
            },
            {
                value: 'Mezzana Rabattone',
                label: 'Mezzana Rabattone'
            },
            {
                value: 'Mezzane di Sotto',
                label: 'Mezzane di Sotto'
            },
            {
                value: 'Mezzanego',
                label: 'Mezzanego'
            },
            {
                value: 'Mezzanino',
                label: 'Mezzanino'
            },
            {
                value: 'Mezzano',
                label: 'Mezzano'
            },
            {
                value: 'Mezzenile',
                label: 'Mezzenile'
            },
            {
                value: 'Mezzocorona',
                label: 'Mezzocorona'
            },
            {
                value: 'Mezzojuso',
                label: 'Mezzojuso'
            },
            {
                value: 'Mezzoldo',
                label: 'Mezzoldo'
            },
            {
                value: 'Mezzolombardo',
                label: 'Mezzolombardo'
            },
            {
                value: 'Mezzomerico',
                label: 'Mezzomerico'
            },
            {
                value: 'Miagliano',
                label: 'Miagliano'
            },
            {
                value: 'Miane',
                label: 'Miane'
            },
            {
                value: 'Miasino',
                label: 'Miasino'
            },
            {
                value: 'Miazzina',
                label: 'Miazzina'
            },
            {
                value: 'Micigliano',
                label: 'Micigliano'
            },
            {
                value: 'Miggiano',
                label: 'Miggiano'
            },
            {
                value: 'Miglianico',
                label: 'Miglianico'
            },
            {
                value: 'Miglierina',
                label: 'Miglierina'
            },
            {
                value: 'Miglionico',
                label: 'Miglionico'
            },
            {
                value: 'Mignanego',
                label: 'Mignanego'
            },
            {
                value: 'Mignano Monte Lungo',
                label: 'Mignano Monte Lungo'
            },
            {
                value: 'Milano',
                label: 'Milano'
            },
            {
                value: 'Milazzo',
                label: 'Milazzo'
            },
            {
                value: 'Milena',
                label: 'Milena'
            },
            {
                value: 'Mileto',
                label: 'Mileto'
            },
            {
                value: 'Milis',
                label: 'Milis'
            },
            {
                value: 'Militello in Val di Catania',
                label: 'Militello in Val di Catania'
            },
            {
                value: 'Militello Rosmarino',
                label: 'Militello Rosmarino'
            },
            {
                value: 'Millesimo',
                label: 'Millesimo'
            },
            {
                value: 'Milo',
                label: 'Milo'
            },
            {
                value: 'Milzano',
                label: 'Milzano'
            },
            {
                value: 'Mineo',
                label: 'Mineo'
            },
            {
                value: 'Minerbe',
                label: 'Minerbe'
            },
            {
                value: 'Minerbio',
                label: 'Minerbio'
            },
            {
                value: 'Minervino di Lecce',
                label: 'Minervino di Lecce'
            },
            {
                value: 'Minervino Murge',
                label: 'Minervino Murge'
            },
            {
                value: 'Minori',
                label: 'Minori'
            },
            {
                value: 'Minturno',
                label: 'Minturno'
            },
            {
                value: 'Minucciano',
                label: 'Minucciano'
            },
            {
                value: 'Mioglia',
                label: 'Mioglia'
            },
            {
                value: 'Mira',
                label: 'Mira'
            },
            {
                value: 'Mirabella Eclano',
                label: 'Mirabella Eclano'
            },
            {
                value: 'Mirabella Imbaccari',
                label: 'Mirabella Imbaccari'
            },
            {
                value: 'Mirabello Monferrato',
                label: 'Mirabello Monferrato'
            },
            {
                value: 'Mirabello Sannitico',
                label: 'Mirabello Sannitico'
            },
            {
                value: 'Miradolo Terme',
                label: 'Miradolo Terme'
            },
            {
                value: 'Miranda',
                label: 'Miranda'
            },
            {
                value: 'Mirandola',
                label: 'Mirandola'
            },
            {
                value: 'Mirano',
                label: 'Mirano'
            },
            {
                value: 'Mirto',
                label: 'Mirto'
            },
            {
                value: 'Misano Adriatico',
                label: 'Misano Adriatico'
            },
            {
                value: 'Misano di Gera d\'Adda',
                label: 'Misano di Gera d\'Adda'
            },
            {
                value: 'Misiliscemi',
                label: 'Misiliscemi'
            },
            {
                value: 'Misilmeri',
                label: 'Misilmeri'
            },
            {
                value: 'Misinto',
                label: 'Misinto'
            },
            {
                value: 'Missaglia',
                label: 'Missaglia'
            },
            {
                value: 'Missanello',
                label: 'Missanello'
            },
            {
                value: 'Misterbianco',
                label: 'Misterbianco'
            },
            {
                value: 'Mistretta',
                label: 'Mistretta'
            },
            {
                value: 'Moasca',
                label: 'Moasca'
            },
            {
                value: 'Moconesi',
                label: 'Moconesi'
            },
            {
                value: 'Modena',
                label: 'Modena'
            },
            {
                value: 'Modica',
                label: 'Modica'
            },
            {
                value: 'Modigliana',
                label: 'Modigliana'
            },
            {
                value: 'Modolo',
                label: 'Modolo'
            },
            {
                value: 'Modugno',
                label: 'Modugno'
            },
            {
                value: 'Moena',
                label: 'Moena'
            },
            {
                value: 'Moggio',
                label: 'Moggio'
            },
            {
                value: 'Moggio Udinese',
                label: 'Moggio Udinese'
            },
            {
                value: 'Moglia',
                label: 'Moglia'
            },
            {
                value: 'Mogliano',
                label: 'Mogliano'
            },
            {
                value: 'Mogliano Veneto',
                label: 'Mogliano Veneto'
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
                value: 'Moiano',
                label: 'Moiano'
            },
            {
                value: 'Moimacco',
                label: 'Moimacco'
            },
            {
                value: 'Moio Alcantara',
                label: 'Moio Alcantara'
            },
            {
                value: 'Moio de\' Calvi',
                label: 'Moio de\' Calvi'
            },
            {
                value: 'Moio della Civitella',
                label: 'Moio della Civitella'
            },
            {
                value: 'Moiola',
                label: 'Moiola'
            },
            {
                value: 'Mola di Bari',
                label: 'Mola di Bari'
            },
            {
                value: 'Molare',
                label: 'Molare'
            },
            {
                value: 'Molazzana',
                label: 'Molazzana'
            },
            {
                value: 'Molfetta',
                label: 'Molfetta'
            },
            {
                value: 'Molina Aterno',
                label: 'Molina Aterno'
            },
            {
                value: 'Molinara',
                label: 'Molinara'
            },
            {
                value: 'Molinella',
                label: 'Molinella'
            },
            {
                value: 'Molini di Triora',
                label: 'Molini di Triora'
            },
            {
                value: 'Molino dei Torti',
                label: 'Molino dei Torti'
            },
            {
                value: 'Molise',
                label: 'Molise'
            },
            {
                value: 'Moliterno',
                label: 'Moliterno'
            },
            {
                value: 'Mollia',
                label: 'Mollia'
            },
            {
                value: 'Molochio',
                label: 'Molochio'
            },
            {
                value: 'Molteno',
                label: 'Molteno'
            },
            {
                value: 'Moltrasio',
                label: 'Moltrasio'
            },
            {
                value: 'Molveno',
                label: 'Molveno'
            },
            {
                value: 'Mombaldone',
                label: 'Mombaldone'
            },
            {
                value: 'Mombarcaro',
                label: 'Mombarcaro'
            },
            {
                value: 'Mombaroccio',
                label: 'Mombaroccio'
            },
            {
                value: 'Mombaruzzo',
                label: 'Mombaruzzo'
            },
            {
                value: 'Mombasiglio',
                label: 'Mombasiglio'
            },
            {
                value: 'Mombello di Torino',
                label: 'Mombello di Torino'
            },
            {
                value: 'Mombello Monferrato',
                label: 'Mombello Monferrato'
            },
            {
                value: 'Mombercelli',
                label: 'Mombercelli'
            },
            {
                value: 'Momo',
                label: 'Momo'
            },
            {
                value: 'Mompantero',
                label: 'Mompantero'
            },
            {
                value: 'Mompeo',
                label: 'Mompeo'
            },
            {
                value: 'Momperone',
                label: 'Momperone'
            },
            {
                value: 'Monacilioni',
                label: 'Monacilioni'
            },
            {
                value: 'Monale',
                label: 'Monale'
            },
            {
                value: 'Monasterace',
                label: 'Monasterace'
            },
            {
                value: 'Monastero Bormida',
                label: 'Monastero Bormida'
            },
            {
                value: 'Monastero di Lanzo',
                label: 'Monastero di Lanzo'
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
                value: 'Monasterolo del Castello',
                label: 'Monasterolo del Castello'
            },
            {
                value: 'Monasterolo di Savigliano',
                label: 'Monasterolo di Savigliano'
            },
            {
                value: 'Monastier di Treviso',
                label: 'Monastier di Treviso'
            },
            {
                value: 'Monastir',
                label: 'Monastir'
            },
            {
                value: 'Moncalieri',
                label: 'Moncalieri'
            },
            {
                value: 'Moncalvo',
                label: 'Moncalvo'
            },
            {
                value: 'Moncenisio',
                label: 'Moncenisio'
            },
            {
                value: 'Moncestino',
                label: 'Moncestino'
            },
            {
                value: 'Monchiero',
                label: 'Monchiero'
            },
            {
                value: 'Monchio delle Corti',
                label: 'Monchio delle Corti'
            },
            {
                value: 'Moncrivello',
                label: 'Moncrivello'
            },
            {
                value: 'Moncucco Torinese',
                label: 'Moncucco Torinese'
            },
            {
                value: 'Mondaino',
                label: 'Mondaino'
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
                value: 'Mondovì',
                label: 'Mondovì'
            },
            {
                value: 'Mondragone',
                label: 'Mondragone'
            },
            {
                value: 'Moneglia',
                label: 'Moneglia'
            },
            {
                value: 'Monesiglio',
                label: 'Monesiglio'
            },
            {
                value: 'Monfalcone',
                label: 'Monfalcone'
            },
            {
                value: 'Monforte d\'Alba',
                label: 'Monforte d\'Alba'
            },
            {
                value: 'Monforte San Giorgio',
                label: 'Monforte San Giorgio'
            },
            {
                value: 'Monfumo',
                label: 'Monfumo'
            },
            {
                value: 'Mongardino',
                label: 'Mongardino'
            },
            {
                value: 'Monghidoro',
                label: 'Monghidoro'
            },
            {
                value: 'Mongiana',
                label: 'Mongiana'
            },
            {
                value: 'Mongiardino Ligure',
                label: 'Mongiardino Ligure'
            },
            {
                value: 'Mongiuffi Melia',
                label: 'Mongiuffi Melia'
            },
            {
                value: 'Mongrando',
                label: 'Mongrando'
            },
            {
                value: 'Mongrassano',
                label: 'Mongrassano'
            },
            {
                value: 'Monguelfo-Tesido',
                label: 'Monguelfo-Tesido'
            },
            {
                value: 'Monguzzo',
                label: 'Monguzzo'
            },
            {
                value: 'Moniga del Garda',
                label: 'Moniga del Garda'
            },
            {
                value: 'Monleale',
                label: 'Monleale'
            },
            {
                value: 'Monno',
                label: 'Monno'
            },
            {
                value: 'Monopoli',
                label: 'Monopoli'
            },
            {
                value: 'Monreale',
                label: 'Monreale'
            },
            {
                value: 'Monrupino',
                label: 'Monrupino'
            },
            {
                value: 'Monsampietro Morico',
                label: 'Monsampietro Morico'
            },
            {
                value: 'Monsampolo del Tronto',
                label: 'Monsampolo del Tronto'
            },
            {
                value: 'Monsano',
                label: 'Monsano'
            },
            {
                value: 'Monselice',
                label: 'Monselice'
            },
            {
                value: 'Monserrato',
                label: 'Monserrato'
            },
            {
                value: 'Monsummano Terme',
                label: 'Monsummano Terme'
            },
            {
                value: 'Montà',
                label: 'Montà'
            },
            {
                value: 'Montabone',
                label: 'Montabone'
            },
            {
                value: 'Montacuto',
                label: 'Montacuto'
            },
            {
                value: 'Montafia',
                label: 'Montafia'
            },
            {
                value: 'Montagano',
                label: 'Montagano'
            },
            {
                value: 'Montagna in Valtellina',
                label: 'Montagna in Valtellina'
            },
            {
                value: 'Montagna sulla Strada del Vino',
                label: 'Montagna sulla Strada del Vino'
            },
            {
                value: 'Montagnana',
                label: 'Montagnana'
            },
            {
                value: 'Montagnareale',
                label: 'Montagnareale'
            },
            {
                value: 'Montaguto',
                label: 'Montaguto'
            },
            {
                value: 'Montaione',
                label: 'Montaione'
            },
            {
                value: 'Montalbano Elicona',
                label: 'Montalbano Elicona'
            },
            {
                value: 'Montalbano Jonico',
                label: 'Montalbano Jonico'
            },
            {
                value: 'Montalcino',
                label: 'Montalcino'
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
                value: 'Montaldo di Mondovì',
                label: 'Montaldo di Mondovì'
            },
            {
                value: 'Montaldo Roero',
                label: 'Montaldo Roero'
            },
            {
                value: 'Montaldo Scarampi',
                label: 'Montaldo Scarampi'
            },
            {
                value: 'Montaldo Torinese',
                label: 'Montaldo Torinese'
            },
            {
                value: 'Montale',
                label: 'Montale'
            },
            {
                value: 'Montalenghe',
                label: 'Montalenghe'
            },
            {
                value: 'Montallegro',
                label: 'Montallegro'
            },
            {
                value: 'Montalto Carpasio',
                label: 'Montalto Carpasio'
            },
            {
                value: 'Montalto delle Marche',
                label: 'Montalto delle Marche'
            },
            {
                value: 'Montalto di Castro',
                label: 'Montalto di Castro'
            },
            {
                value: 'Montalto Dora',
                label: 'Montalto Dora'
            },
            {
                value: 'Montalto Pavese',
                label: 'Montalto Pavese'
            },
            {
                value: 'Montalto Uffugo',
                label: 'Montalto Uffugo'
            },
            {
                value: 'Montanaro',
                label: 'Montanaro'
            },
            {
                value: 'Montanaso Lombardo',
                label: 'Montanaso Lombardo'
            },
            {
                value: 'Montanera',
                label: 'Montanera'
            },
            {
                value: 'Montano Antilia',
                label: 'Montano Antilia'
            },
            {
                value: 'Montano Lucino',
                label: 'Montano Lucino'
            },
            {
                value: 'Montappone',
                label: 'Montappone'
            },
            {
                value: 'Montaquila',
                label: 'Montaquila'
            },
            {
                value: 'Montasola',
                label: 'Montasola'
            },
            {
                value: 'Montauro',
                label: 'Montauro'
            },
            {
                value: 'Montazzoli',
                label: 'Montazzoli'
            },
            {
                value: 'Monte Argentario',
                label: 'Monte Argentario'
            },
            {
                value: 'Monte Castello di Vibio',
                label: 'Monte Castello di Vibio'
            },
            {
                value: 'Monte Cavallo',
                label: 'Monte Cavallo'
            },
            {
                value: 'Monte Cerignone',
                label: 'Monte Cerignone'
            },
            {
                value: 'Monte Compatri',
                label: 'Monte Compatri'
            },
            {
                value: 'Monte Cremasco',
                label: 'Monte Cremasco'
            },
            {
                value: 'Monte di Malo',
                label: 'Monte di Malo'
            },
            {
                value: 'Monte di Procida',
                label: 'Monte di Procida'
            },
            {
                value: 'Monte Giberto',
                label: 'Monte Giberto'
            },
            {
                value: 'Monte Grimano Terme',
                label: 'Monte Grimano Terme'
            },
            {
                value: 'Monte Isola',
                label: 'Monte Isola'
            },
            {
                value: 'Monte Marenzo',
                label: 'Monte Marenzo'
            },
            {
                value: 'Monte Porzio',
                label: 'Monte Porzio'
            },
            {
                value: 'Monte Porzio Catone',
                label: 'Monte Porzio Catone'
            },
            {
                value: 'Monte Rinaldo',
                label: 'Monte Rinaldo'
            },
            {
                value: 'Monte Roberto',
                label: 'Monte Roberto'
            },
            {
                value: 'Monte Romano',
                label: 'Monte Romano'
            },
            {
                value: 'Monte San Biagio',
                label: 'Monte San Biagio'
            },
            {
                value: 'Monte San Giacomo',
                label: 'Monte San Giacomo'
            },
            {
                value: 'Monte San Giovanni Campano',
                label: 'Monte San Giovanni Campano'
            },
            {
                value: 'Monte San Giovanni in Sabina',
                label: 'Monte San Giovanni in Sabina'
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
                value: 'Monte San Pietrangeli',
                label: 'Monte San Pietrangeli'
            },
            {
                value: 'Monte San Pietro',
                label: 'Monte San Pietro'
            },
            {
                value: 'Monte San Savino',
                label: 'Monte San Savino'
            },
            {
                value: 'Monte San Vito',
                label: 'Monte San Vito'
            },
            {
                value: 'Monte Sant\'Angelo',
                label: 'Monte Sant\'Angelo'
            },
            {
                value: 'Monte Santa Maria Tiberina',
                label: 'Monte Santa Maria Tiberina'
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
                value: 'Montebello della Battaglia',
                label: 'Montebello della Battaglia'
            },
            {
                value: 'Montebello di Bertona',
                label: 'Montebello di Bertona'
            },
            {
                value: 'Montebello Jonico',
                label: 'Montebello Jonico'
            },
            {
                value: 'Montebello sul Sangro',
                label: 'Montebello sul Sangro'
            },
            {
                value: 'Montebello Vicentino',
                label: 'Montebello Vicentino'
            },
            {
                value: 'Montebelluna',
                label: 'Montebelluna'
            },
            {
                value: 'Montebruno',
                label: 'Montebruno'
            },
            {
                value: 'Montebuono',
                label: 'Montebuono'
            },
            {
                value: 'Montecalvo in Foglia',
                label: 'Montecalvo in Foglia'
            },
            {
                value: 'Montecalvo Irpino',
                label: 'Montecalvo Irpino'
            },
            {
                value: 'Montecalvo Versiggia',
                label: 'Montecalvo Versiggia'
            },
            {
                value: 'Montecarlo',
                label: 'Montecarlo'
            },
            {
                value: 'Montecarotto',
                label: 'Montecarotto'
            },
            {
                value: 'Montecassiano',
                label: 'Montecassiano'
            },
            {
                value: 'Montecastello',
                label: 'Montecastello'
            },
            {
                value: 'Montecastrilli',
                label: 'Montecastrilli'
            },
            {
                value: 'Montecatini Val di Cecina',
                label: 'Montecatini Val di Cecina'
            },
            {
                value: 'Montecatini-Terme',
                label: 'Montecatini-Terme'
            },
            {
                value: 'Montecchia di Crosara',
                label: 'Montecchia di Crosara'
            },
            {
                value: 'Montecchio',
                label: 'Montecchio'
            },
            {
                value: 'Montecchio Emilia',
                label: 'Montecchio Emilia'
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
                value: 'Montechiaro d\'Acqui',
                label: 'Montechiaro d\'Acqui'
            },
            {
                value: 'Montechiaro d\'Asti',
                label: 'Montechiaro d\'Asti'
            },
            {
                value: 'Montechiarugolo',
                label: 'Montechiarugolo'
            },
            {
                value: 'Montecilfone',
                label: 'Montecilfone'
            },
            {
                value: 'Montecopiolo',
                label: 'Montecopiolo'
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
                value: 'Montecosaro',
                label: 'Montecosaro'
            },
            {
                value: 'Montecrestese',
                label: 'Montecrestese'
            },
            {
                value: 'Montecreto',
                label: 'Montecreto'
            },
            {
                value: 'Montedinove',
                label: 'Montedinove'
            },
            {
                value: 'Montedoro',
                label: 'Montedoro'
            },
            {
                value: 'Montefalcione',
                label: 'Montefalcione'
            },
            {
                value: 'Montefalco',
                label: 'Montefalco'
            },
            {
                value: 'Montefalcone Appennino',
                label: 'Montefalcone Appennino'
            },
            {
                value: 'Montefalcone di Val Fortore',
                label: 'Montefalcone di Val Fortore'
            },
            {
                value: 'Montefalcone nel Sannio',
                label: 'Montefalcone nel Sannio'
            },
            {
                value: 'Montefano',
                label: 'Montefano'
            },
            {
                value: 'Montefelcino',
                label: 'Montefelcino'
            },
            {
                value: 'Monteferrante',
                label: 'Monteferrante'
            },
            {
                value: 'Montefiascone',
                label: 'Montefiascone'
            },
            {
                value: 'Montefino',
                label: 'Montefino'
            },
            {
                value: 'Montefiore Conca',
                label: 'Montefiore Conca'
            },
            {
                value: 'Montefiore dell\'Aso',
                label: 'Montefiore dell\'Aso'
            },
            {
                value: 'Montefiorino',
                label: 'Montefiorino'
            },
            {
                value: 'Monteflavio',
                label: 'Monteflavio'
            },
            {
                value: 'Monteforte Cilento',
                label: 'Monteforte Cilento'
            },
            {
                value: 'Monteforte d\'Alpone',
                label: 'Monteforte d\'Alpone'
            },
            {
                value: 'Monteforte Irpino',
                label: 'Monteforte Irpino'
            },
            {
                value: 'Montefortino',
                label: 'Montefortino'
            },
            {
                value: 'Montefranco',
                label: 'Montefranco'
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
                value: 'Montegabbione',
                label: 'Montegabbione'
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
                value: 'Montegallo',
                label: 'Montegallo'
            },
            {
                value: 'Montegioco',
                label: 'Montegioco'
            },
            {
                value: 'Montegiordano',
                label: 'Montegiordano'
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
                value: 'Montegridolfo',
                label: 'Montegridolfo'
            },
            {
                value: 'Montegrino Valtravaglia',
                label: 'Montegrino Valtravaglia'
            },
            {
                value: 'Montegrosso d\'Asti',
                label: 'Montegrosso d\'Asti'
            },
            {
                value: 'Montegrosso Pian Latte',
                label: 'Montegrosso Pian Latte'
            },
            {
                value: 'Montegrotto Terme',
                label: 'Montegrotto Terme'
            },
            {
                value: 'Monteiasi',
                label: 'Monteiasi'
            },
            {
                value: 'Montelabbate',
                label: 'Montelabbate'
            },
            {
                value: 'Montelanico',
                label: 'Montelanico'
            },
            {
                value: 'Montelapiano',
                label: 'Montelapiano'
            },
            {
                value: 'Monteleone d\'Orvieto',
                label: 'Monteleone d\'Orvieto'
            },
            {
                value: 'Monteleone di Fermo',
                label: 'Monteleone di Fermo'
            },
            {
                value: 'Monteleone di Puglia',
                label: 'Monteleone di Puglia'
            },
            {
                value: 'Monteleone di Spoleto',
                label: 'Monteleone di Spoleto'
            },
            {
                value: 'Monteleone Rocca Doria',
                label: 'Monteleone Rocca Doria'
            },
            {
                value: 'Monteleone Sabino',
                label: 'Monteleone Sabino'
            },
            {
                value: 'Montelepre',
                label: 'Montelepre'
            },
            {
                value: 'Montelibretti',
                label: 'Montelibretti'
            },
            {
                value: 'Montella',
                label: 'Montella'
            },
            {
                value: 'Montello',
                label: 'Montello'
            },
            {
                value: 'Montelongo',
                label: 'Montelongo'
            },
            {
                value: 'Montelparo',
                label: 'Montelparo'
            },
            {
                value: 'Montelupo Albese',
                label: 'Montelupo Albese'
            },
            {
                value: 'Montelupo Fiorentino',
                label: 'Montelupo Fiorentino'
            },
            {
                value: 'Montelupone',
                label: 'Montelupone'
            },
            {
                value: 'Montemaggiore Belsito',
                label: 'Montemaggiore Belsito'
            },
            {
                value: 'Montemagno Monferrato',
                label: 'Montemagno Monferrato'
            },
            {
                value: 'Montemale di Cuneo',
                label: 'Montemale di Cuneo'
            },
            {
                value: 'Montemarano',
                label: 'Montemarano'
            },
            {
                value: 'Montemarciano',
                label: 'Montemarciano'
            },
            {
                value: 'Montemarzino',
                label: 'Montemarzino'
            },
            {
                value: 'Montemesola',
                label: 'Montemesola'
            },
            {
                value: 'Montemezzo',
                label: 'Montemezzo'
            },
            {
                value: 'Montemignaio',
                label: 'Montemignaio'
            },
            {
                value: 'Montemiletto',
                label: 'Montemiletto'
            },
            {
                value: 'Montemilone',
                label: 'Montemilone'
            },
            {
                value: 'Montemitro',
                label: 'Montemitro'
            },
            {
                value: 'Montemonaco',
                label: 'Montemonaco'
            },
            {
                value: 'Montemurlo',
                label: 'Montemurlo'
            },
            {
                value: 'Montemurro',
                label: 'Montemurro'
            },
            {
                value: 'Montenars',
                label: 'Montenars'
            },
            {
                value: 'Montenero di Bisaccia',
                label: 'Montenero di Bisaccia'
            },
            {
                value: 'Montenero Sabino',
                label: 'Montenero Sabino'
            },
            {
                value: 'Montenero Val Cocchiara',
                label: 'Montenero Val Cocchiara'
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
                value: 'Montepaone',
                label: 'Montepaone'
            },
            {
                value: 'Monteparano',
                label: 'Monteparano'
            },
            {
                value: 'Monteprandone',
                label: 'Monteprandone'
            },
            {
                value: 'Montepulciano',
                label: 'Montepulciano'
            },
            {
                value: 'Monterchi',
                label: 'Monterchi'
            },
            {
                value: 'Montereale',
                label: 'Montereale'
            },
            {
                value: 'Montereale Valcellina',
                label: 'Montereale Valcellina'
            },
            {
                value: 'Monterenzio',
                label: 'Monterenzio'
            },
            {
                value: 'Monteriggioni',
                label: 'Monteriggioni'
            },
            {
                value: 'Monteroduni',
                label: 'Monteroduni'
            },
            {
                value: 'Monteroni d\'Arbia',
                label: 'Monteroni d\'Arbia'
            },
            {
                value: 'Monteroni di Lecce',
                label: 'Monteroni di Lecce'
            },
            {
                value: 'Monterosi',
                label: 'Monterosi'
            },
            {
                value: 'Monterosso al Mare',
                label: 'Monterosso al Mare'
            },
            {
                value: 'Monterosso Almo',
                label: 'Monterosso Almo'
            },
            {
                value: 'Monterosso Calabro',
                label: 'Monterosso Calabro'
            },
            {
                value: 'Monterosso Grana',
                label: 'Monterosso Grana'
            },
            {
                value: 'Monterotondo',
                label: 'Monterotondo'
            },
            {
                value: 'Monterotondo Marittimo',
                label: 'Monterotondo Marittimo'
            },
            {
                value: 'Monterubbiano',
                label: 'Monterubbiano'
            },
            {
                value: 'Montesano Salentino',
                label: 'Montesano Salentino'
            },
            {
                value: 'Montesano sulla Marcellana',
                label: 'Montesano sulla Marcellana'
            },
            {
                value: 'Montesarchio',
                label: 'Montesarchio'
            },
            {
                value: 'Montescaglioso',
                label: 'Montescaglioso'
            },
            {
                value: 'Montescano',
                label: 'Montescano'
            },
            {
                value: 'Montescheno',
                label: 'Montescheno'
            },
            {
                value: 'Montescudaio',
                label: 'Montescudaio'
            },
            {
                value: 'Montescudo-Monte Colombo',
                label: 'Montescudo-Monte Colombo'
            },
            {
                value: 'Montese',
                label: 'Montese'
            },
            {
                value: 'Montesegale',
                label: 'Montesegale'
            },
            {
                value: 'Montesilvano',
                label: 'Montesilvano'
            },
            {
                value: 'Montespertoli',
                label: 'Montespertoli'
            },
            {
                value: 'Monteu da Po',
                label: 'Monteu da Po'
            },
            {
                value: 'Monteu Roero',
                label: 'Monteu Roero'
            },
            {
                value: 'Montevago',
                label: 'Montevago'
            },
            {
                value: 'Montevarchi',
                label: 'Montevarchi'
            },
            {
                value: 'Montevecchia',
                label: 'Montevecchia'
            },
            {
                value: 'Monteverde',
                label: 'Monteverde'
            },
            {
                value: 'Monteverdi Marittimo',
                label: 'Monteverdi Marittimo'
            },
            {
                value: 'Monteviale',
                label: 'Monteviale'
            },
            {
                value: 'Montezemolo',
                label: 'Montezemolo'
            },
            {
                value: 'Monti',
                label: 'Monti'
            },
            {
                value: 'Montiano',
                label: 'Montiano'
            },
            {
                value: 'Monticelli Brusati',
                label: 'Monticelli Brusati'
            },
            {
                value: 'Monticelli d\'Ongina',
                label: 'Monticelli d\'Ongina'
            },
            {
                value: 'Monticelli Pavese',
                label: 'Monticelli Pavese'
            },
            {
                value: 'Monticello Brianza',
                label: 'Monticello Brianza'
            },
            {
                value: 'Monticello Conte Otto',
                label: 'Monticello Conte Otto'
            },
            {
                value: 'Monticello d\'Alba',
                label: 'Monticello d\'Alba'
            },
            {
                value: 'Montichiari',
                label: 'Montichiari'
            },
            {
                value: 'Monticiano',
                label: 'Monticiano'
            },
            {
                value: 'Montieri',
                label: 'Montieri'
            },
            {
                value: 'Montiglio Monferrato',
                label: 'Montiglio Monferrato'
            },
            {
                value: 'Montignoso',
                label: 'Montignoso'
            },
            {
                value: 'Montirone',
                label: 'Montirone'
            },
            {
                value: 'Montjovet',
                label: 'Montjovet'
            },
            {
                value: 'Montodine',
                label: 'Montodine'
            },
            {
                value: 'Montoggio',
                label: 'Montoggio'
            },
            {
                value: 'Montone',
                label: 'Montone'
            },
            {
                value: 'Montopoli di Sabina',
                label: 'Montopoli di Sabina'
            },
            {
                value: 'Montopoli in Val d\'Arno',
                label: 'Montopoli in Val d\'Arno'
            },
            {
                value: 'Montorfano',
                label: 'Montorfano'
            },
            {
                value: 'Montorio al Vomano',
                label: 'Montorio al Vomano'
            },
            {
                value: 'Montorio nei Frentani',
                label: 'Montorio nei Frentani'
            },
            {
                value: 'Montorio Romano',
                label: 'Montorio Romano'
            },
            {
                value: 'Montoro',
                label: 'Montoro'
            },
            {
                value: 'Montorso Vicentino',
                label: 'Montorso Vicentino'
            },
            {
                value: 'Montottone',
                label: 'Montottone'
            },
            {
                value: 'Montresta',
                label: 'Montresta'
            },
            {
                value: 'Montù Beccaria',
                label: 'Montù Beccaria'
            },
            {
                value: 'Monvalle',
                label: 'Monvalle'
            },
            {
                value: 'Monza',
                label: 'Monza'
            },
            {
                value: 'Monzambano',
                label: 'Monzambano'
            },
            {
                value: 'Monzuno',
                label: 'Monzuno'
            },
            {
                value: 'Morano Calabro',
                label: 'Morano Calabro'
            },
            {
                value: 'Morano sul Po',
                label: 'Morano sul Po'
            },
            {
                value: 'Moransengo-Tonengo',
                label: 'Moransengo-Tonengo'
            },
            {
                value: 'Moraro',
                label: 'Moraro'
            },
            {
                value: 'Morazzone',
                label: 'Morazzone'
            },
            {
                value: 'Morbegno',
                label: 'Morbegno'
            },
            {
                value: 'Morbello',
                label: 'Morbello'
            },
            {
                value: 'Morciano di Leuca',
                label: 'Morciano di Leuca'
            },
            {
                value: 'Morciano di Romagna',
                label: 'Morciano di Romagna'
            },
            {
                value: 'Morcone',
                label: 'Morcone'
            },
            {
                value: 'Mordano',
                label: 'Mordano'
            },
            {
                value: 'Morengo',
                label: 'Morengo'
            },
            {
                value: 'Mores',
                label: 'Mores'
            },
            {
                value: 'Moresco',
                label: 'Moresco'
            },
            {
                value: 'Moretta',
                label: 'Moretta'
            },
            {
                value: 'Morfasso',
                label: 'Morfasso'
            },
            {
                value: 'Morgano',
                label: 'Morgano'
            },
            {
                value: 'Morgex',
                label: 'Morgex'
            },
            {
                value: 'Morgongiori',
                label: 'Morgongiori'
            },
            {
                value: 'Mori',
                label: 'Mori'
            },
            {
                value: 'Moriago della Battaglia',
                label: 'Moriago della Battaglia'
            },
            {
                value: 'Moricone',
                label: 'Moricone'
            },
            {
                value: 'Morigerati',
                label: 'Morigerati'
            },
            {
                value: 'Morimondo',
                label: 'Morimondo'
            },
            {
                value: 'Morino',
                label: 'Morino'
            },
            {
                value: 'Moriondo Torinese',
                label: 'Moriondo Torinese'
            },
            {
                value: 'Morlupo',
                label: 'Morlupo'
            },
            {
                value: 'Mormanno',
                label: 'Mormanno'
            },
            {
                value: 'Mornago',
                label: 'Mornago'
            },
            {
                value: 'Mornese',
                label: 'Mornese'
            },
            {
                value: 'Mornico al Serio',
                label: 'Mornico al Serio'
            },
            {
                value: 'Mornico Losana',
                label: 'Mornico Losana'
            },
            {
                value: 'Morolo',
                label: 'Morolo'
            },
            {
                value: 'Morozzo',
                label: 'Morozzo'
            },
            {
                value: 'Morra De Sanctis',
                label: 'Morra De Sanctis'
            },
            {
                value: 'Morro d\'Alba',
                label: 'Morro d\'Alba'
            },
            {
                value: 'Morro d\'Oro',
                label: 'Morro d\'Oro'
            },
            {
                value: 'Morro Reatino',
                label: 'Morro Reatino'
            },
            {
                value: 'Morrone del Sannio',
                label: 'Morrone del Sannio'
            },
            {
                value: 'Morrovalle',
                label: 'Morrovalle'
            },
            {
                value: 'Morsano al Tagliamento',
                label: 'Morsano al Tagliamento'
            },
            {
                value: 'Morsasco',
                label: 'Morsasco'
            },
            {
                value: 'Mortara',
                label: 'Mortara'
            },
            {
                value: 'Mortegliano',
                label: 'Mortegliano'
            },
            {
                value: 'Morterone',
                label: 'Morterone'
            },
            {
                value: 'Moruzzo',
                label: 'Moruzzo'
            },
            {
                value: 'Moscazzano',
                label: 'Moscazzano'
            },
            {
                value: 'Moschiano',
                label: 'Moschiano'
            },
            {
                value: 'Mosciano Sant\'Angelo',
                label: 'Mosciano Sant\'Angelo'
            },
            {
                value: 'Moscufo',
                label: 'Moscufo'
            },
            {
                value: 'Moso in Passiria',
                label: 'Moso in Passiria'
            },
            {
                value: 'Mossa',
                label: 'Mossa'
            },
            {
                value: 'Motta Baluffi',
                label: 'Motta Baluffi'
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
                value: 'Motta de\' Conti',
                label: 'Motta de\' Conti'
            },
            {
                value: 'Motta di Livenza',
                label: 'Motta di Livenza'
            },
            {
                value: 'Motta Montecorvino',
                label: 'Motta Montecorvino'
            },
            {
                value: 'Motta San Giovanni',
                label: 'Motta San Giovanni'
            },
            {
                value: 'Motta Sant\'Anastasia',
                label: 'Motta Sant\'Anastasia'
            },
            {
                value: 'Motta Santa Lucia',
                label: 'Motta Santa Lucia'
            },
            {
                value: 'Motta Visconti',
                label: 'Motta Visconti'
            },
            {
                value: 'Mottafollone',
                label: 'Mottafollone'
            },
            {
                value: 'Mottalciata',
                label: 'Mottalciata'
            },
            {
                value: 'Motteggiana',
                label: 'Motteggiana'
            },
            {
                value: 'Mottola',
                label: 'Mottola'
            },
            {
                value: 'Mozzagrogna',
                label: 'Mozzagrogna'
            },
            {
                value: 'Mozzanica',
                label: 'Mozzanica'
            },
            {
                value: 'Mozzate',
                label: 'Mozzate'
            },
            {
                value: 'Mozzecane',
                label: 'Mozzecane'
            },
            {
                value: 'Mozzo',
                label: 'Mozzo'
            },
            {
                value: 'Muccia',
                label: 'Muccia'
            },
            {
                value: 'Muggia',
                label: 'Muggia'
            },
            {
                value: 'Muggiò',
                label: 'Muggiò'
            },
            {
                value: 'Mugnano del Cardinale',
                label: 'Mugnano del Cardinale'
            },
            {
                value: 'Mugnano di Napoli',
                label: 'Mugnano di Napoli'
            },
            {
                value: 'Mulazzano',
                label: 'Mulazzano'
            },
            {
                value: 'Mulazzo',
                label: 'Mulazzo'
            },
            {
                value: 'Mura',
                label: 'Mura'
            },
            {
                value: 'Muravera',
                label: 'Muravera'
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
                value: 'Murialdo',
                label: 'Murialdo'
            },
            {
                value: 'Murisengo',
                label: 'Murisengo'
            },
            {
                value: 'Murlo',
                label: 'Murlo'
            },
            {
                value: 'Muro Leccese',
                label: 'Muro Leccese'
            },
            {
                value: 'Muro Lucano',
                label: 'Muro Lucano'
            },
            {
                value: 'Muros',
                label: 'Muros'
            },
            {
                value: 'Muscoline',
                label: 'Muscoline'
            },
            {
                value: 'Musei',
                label: 'Musei'
            },
            {
                value: 'Musile di Piave',
                label: 'Musile di Piave'
            },
            {
                value: 'Musso',
                label: 'Musso'
            },
            {
                value: 'Mussolente',
                label: 'Mussolente'
            },
            {
                value: 'Mussomeli',
                label: 'Mussomeli'
            },
            {
                value: 'Muzzana del Turgnano',
                label: 'Muzzana del Turgnano'
            },
            {
                value: 'Muzzano',
                label: 'Muzzano'
            },
            {
                value: 'Nago-Torbole',
                label: 'Nago-Torbole'
            },
            {
                value: 'Nalles',
                label: 'Nalles'
            },
            {
                value: 'Nanto',
                label: 'Nanto'
            },
            {
                value: 'Napoli',
                label: 'Napoli'
            },
            {
                value: 'Narbolia',
                label: 'Narbolia'
            },
            {
                value: 'Narcao',
                label: 'Narcao'
            },
            {
                value: 'Nardò',
                label: 'Nardò'
            },
            {
                value: 'Nardodipace',
                label: 'Nardodipace'
            },
            {
                value: 'Narni',
                label: 'Narni'
            },
            {
                value: 'Naro',
                label: 'Naro'
            },
            {
                value: 'Narzole',
                label: 'Narzole'
            },
            {
                value: 'Nasino',
                label: 'Nasino'
            },
            {
                value: 'Naso',
                label: 'Naso'
            },
            {
                value: 'Naturno',
                label: 'Naturno'
            },
            {
                value: 'Nave',
                label: 'Nave'
            },
            {
                value: 'Navelli',
                label: 'Navelli'
            },
            {
                value: 'Naz-Sciaves',
                label: 'Naz-Sciaves'
            },
            {
                value: 'Nazzano',
                label: 'Nazzano'
            },
            {
                value: 'Ne',
                label: 'Ne'
            },
            {
                value: 'Nebbiuno',
                label: 'Nebbiuno'
            },
            {
                value: 'Negrar di Valpolicella',
                label: 'Negrar di Valpolicella'
            },
            {
                value: 'Neirone',
                label: 'Neirone'
            },
            {
                value: 'Neive',
                label: 'Neive'
            },
            {
                value: 'Nembro',
                label: 'Nembro'
            },
            {
                value: 'Nemi',
                label: 'Nemi'
            },
            {
                value: 'Nemoli',
                label: 'Nemoli'
            },
            {
                value: 'Neoneli',
                label: 'Neoneli'
            },
            {
                value: 'Nepi',
                label: 'Nepi'
            },
            {
                value: 'Nereto',
                label: 'Nereto'
            },
            {
                value: 'Nerola',
                label: 'Nerola'
            },
            {
                value: 'Nervesa della Battaglia',
                label: 'Nervesa della Battaglia'
            },
            {
                value: 'Nerviano',
                label: 'Nerviano'
            },
            {
                value: 'Nespolo',
                label: 'Nespolo'
            },
            {
                value: 'Nesso',
                label: 'Nesso'
            },
            {
                value: 'Netro',
                label: 'Netro'
            },
            {
                value: 'Nettuno',
                label: 'Nettuno'
            },
            {
                value: 'Neviano',
                label: 'Neviano'
            },
            {
                value: 'Neviano degli Arduini',
                label: 'Neviano degli Arduini'
            },
            {
                value: 'Neviglie',
                label: 'Neviglie'
            },
            {
                value: 'Niardo',
                label: 'Niardo'
            },
            {
                value: 'Nibbiola',
                label: 'Nibbiola'
            },
            {
                value: 'Nibionno',
                label: 'Nibionno'
            },
            {
                value: 'Nichelino',
                label: 'Nichelino'
            },
            {
                value: 'Nicolosi',
                label: 'Nicolosi'
            },
            {
                value: 'Nicorvo',
                label: 'Nicorvo'
            },
            {
                value: 'Nicosia',
                label: 'Nicosia'
            },
            {
                value: 'Nicotera',
                label: 'Nicotera'
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
                value: 'Nimis',
                label: 'Nimis'
            },
            {
                value: 'Niscemi',
                label: 'Niscemi'
            },
            {
                value: 'Nissoria',
                label: 'Nissoria'
            },
            {
                value: 'Nizza di Sicilia',
                label: 'Nizza di Sicilia'
            },
            {
                value: 'Nizza Monferrato',
                label: 'Nizza Monferrato'
            },
            {
                value: 'Noale',
                label: 'Noale'
            },
            {
                value: 'Noasca',
                label: 'Noasca'
            },
            {
                value: 'Nocara',
                label: 'Nocara'
            },
            {
                value: 'Nocciano',
                label: 'Nocciano'
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
                value: 'Nocera Terinese',
                label: 'Nocera Terinese'
            },
            {
                value: 'Nocera Umbra',
                label: 'Nocera Umbra'
            },
            {
                value: 'Noceto',
                label: 'Noceto'
            },
            {
                value: 'Noci',
                label: 'Noci'
            },
            {
                value: 'Nociglia',
                label: 'Nociglia'
            },
            {
                value: 'Noepoli',
                label: 'Noepoli'
            },
            {
                value: 'Nogara',
                label: 'Nogara'
            },
            {
                value: 'Nogaredo',
                label: 'Nogaredo'
            },
            {
                value: 'Nogarole Rocca',
                label: 'Nogarole Rocca'
            },
            {
                value: 'Nogarole Vicentino',
                label: 'Nogarole Vicentino'
            },
            {
                value: 'Noicattaro',
                label: 'Noicattaro'
            },
            {
                value: 'Nola',
                label: 'Nola'
            },
            {
                value: 'Nole',
                label: 'Nole'
            },
            {
                value: 'Noli',
                label: 'Noli'
            },
            {
                value: 'Nomaglio',
                label: 'Nomaglio'
            },
            {
                value: 'Nomi',
                label: 'Nomi'
            },
            {
                value: 'Nonantola',
                label: 'Nonantola'
            },
            {
                value: 'None',
                label: 'None'
            },
            {
                value: 'Nonio',
                label: 'Nonio'
            },
            {
                value: 'Noragugume',
                label: 'Noragugume'
            },
            {
                value: 'Norbello',
                label: 'Norbello'
            },
            {
                value: 'Norcia',
                label: 'Norcia'
            },
            {
                value: 'Norma',
                label: 'Norma'
            },
            {
                value: 'Nosate',
                label: 'Nosate'
            },
            {
                value: 'Notaresco',
                label: 'Notaresco'
            },
            {
                value: 'Noto',
                label: 'Noto'
            },
            {
                value: 'Nova Levante',
                label: 'Nova Levante'
            },
            {
                value: 'Nova Milanese',
                label: 'Nova Milanese'
            },
            {
                value: 'Nova Ponente',
                label: 'Nova Ponente'
            },
            {
                value: 'Nova Siri',
                label: 'Nova Siri'
            },
            {
                value: 'Novafeltria',
                label: 'Novafeltria'
            },
            {
                value: 'Novaledo',
                label: 'Novaledo'
            },
            {
                value: 'Novalesa',
                label: 'Novalesa'
            },
            {
                value: 'Novara',
                label: 'Novara'
            },
            {
                value: 'Novara di Sicilia',
                label: 'Novara di Sicilia'
            },
            {
                value: 'Novate Mezzola',
                label: 'Novate Mezzola'
            },
            {
                value: 'Novate Milanese',
                label: 'Novate Milanese'
            },
            {
                value: 'Nove',
                label: 'Nove'
            },
            {
                value: 'Novedrate',
                label: 'Novedrate'
            },
            {
                value: 'Novella',
                label: 'Novella'
            },
            {
                value: 'Novellara',
                label: 'Novellara'
            },
            {
                value: 'Novello',
                label: 'Novello'
            },
            {
                value: 'Noventa di Piave',
                label: 'Noventa di Piave'
            },
            {
                value: 'Noventa Padovana',
                label: 'Noventa Padovana'
            },
            {
                value: 'Noventa Vicentina',
                label: 'Noventa Vicentina'
            },
            {
                value: 'Novi di Modena',
                label: 'Novi di Modena'
            },
            {
                value: 'Novi Ligure',
                label: 'Novi Ligure'
            },
            {
                value: 'Novi Velia',
                label: 'Novi Velia'
            },
            {
                value: 'Noviglio',
                label: 'Noviglio'
            },
            {
                value: 'Novoli',
                label: 'Novoli'
            },
            {
                value: 'Nucetto',
                label: 'Nucetto'
            },
            {
                value: 'Nughedu San Nicolò',
                label: 'Nughedu San Nicolò'
            },
            {
                value: 'Nughedu Santa Vittoria',
                label: 'Nughedu Santa Vittoria'
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
                value: 'Numana',
                label: 'Numana'
            },
            {
                value: 'Nuoro',
                label: 'Nuoro'
            },
            {
                value: 'Nurachi',
                label: 'Nurachi'
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
                value: 'Nureci',
                label: 'Nureci'
            },
            {
                value: 'Nurri',
                label: 'Nurri'
            },
            {
                value: 'Nus',
                label: 'Nus'
            },
            {
                value: 'Nusco',
                label: 'Nusco'
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
                value: 'Nuxis',
                label: 'Nuxis'
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
                value: 'Occhiobello',
                label: 'Occhiobello'
            },
            {
                value: 'Occimiano',
                label: 'Occimiano'
            },
            {
                value: 'Ocre',
                label: 'Ocre'
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
                value: 'Oderzo',
                label: 'Oderzo'
            },
            {
                value: 'Odolo',
                label: 'Odolo'
            },
            {
                value: 'Ofena',
                label: 'Ofena'
            },
            {
                value: 'Offagna',
                label: 'Offagna'
            },
            {
                value: 'Offanengo',
                label: 'Offanengo'
            },
            {
                value: 'Offida',
                label: 'Offida'
            },
            {
                value: 'Offlaga',
                label: 'Offlaga'
            },
            {
                value: 'Oggebbio',
                label: 'Oggebbio'
            },
            {
                value: 'Oggiona con Santo Stefano',
                label: 'Oggiona con Santo Stefano'
            },
            {
                value: 'Oggiono',
                label: 'Oggiono'
            },
            {
                value: 'Oglianico',
                label: 'Oglianico'
            },
            {
                value: 'Ogliastro Cilento',
                label: 'Ogliastro Cilento'
            },
            {
                value: 'Olbia',
                label: 'Olbia'
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
                value: 'Oleggio',
                label: 'Oleggio'
            },
            {
                value: 'Oleggio Castello',
                label: 'Oleggio Castello'
            },
            {
                value: 'Olevano di Lomellina',
                label: 'Olevano di Lomellina'
            },
            {
                value: 'Olevano Romano',
                label: 'Olevano Romano'
            },
            {
                value: 'Olevano sul Tusciano',
                label: 'Olevano sul Tusciano'
            },
            {
                value: 'Olgiate Comasco',
                label: 'Olgiate Comasco'
            },
            {
                value: 'Olgiate Molgora',
                label: 'Olgiate Molgora'
            },
            {
                value: 'Olgiate Olona',
                label: 'Olgiate Olona'
            },
            {
                value: 'Olginate',
                label: 'Olginate'
            },
            {
                value: 'Oliena',
                label: 'Oliena'
            },
            {
                value: 'Oliva Gessi',
                label: 'Oliva Gessi'
            },
            {
                value: 'Olivadi',
                label: 'Olivadi'
            },
            {
                value: 'Oliveri',
                label: 'Oliveri'
            },
            {
                value: 'Oliveto Citra',
                label: 'Oliveto Citra'
            },
            {
                value: 'Oliveto Lario',
                label: 'Oliveto Lario'
            },
            {
                value: 'Oliveto Lucano',
                label: 'Oliveto Lucano'
            },
            {
                value: 'Olivetta San Michele',
                label: 'Olivetta San Michele'
            },
            {
                value: 'Olivola',
                label: 'Olivola'
            },
            {
                value: 'Ollastra',
                label: 'Ollastra'
            },
            {
                value: 'Ollolai',
                label: 'Ollolai'
            },
            {
                value: 'Ollomont',
                label: 'Ollomont'
            },
            {
                value: 'Olmedo',
                label: 'Olmedo'
            },
            {
                value: 'Olmeneta',
                label: 'Olmeneta'
            },
            {
                value: 'Olmo al Brembo',
                label: 'Olmo al Brembo'
            },
            {
                value: 'Olmo Gentile',
                label: 'Olmo Gentile'
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
                value: 'Oltrona di San Mamette',
                label: 'Oltrona di San Mamette'
            },
            {
                value: 'Olzai',
                label: 'Olzai'
            },
            {
                value: 'Ome',
                label: 'Ome'
            },
            {
                value: 'Omegna',
                label: 'Omegna'
            },
            {
                value: 'Omignano',
                label: 'Omignano'
            },
            {
                value: 'Onanì',
                label: 'Onanì'
            },
            {
                value: 'Onano',
                label: 'Onano'
            },
            {
                value: 'Oncino',
                label: 'Oncino'
            },
            {
                value: 'Oneta',
                label: 'Oneta'
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
                value: 'Ono San Pietro',
                label: 'Ono San Pietro'
            },
            {
                value: 'Onore',
                label: 'Onore'
            },
            {
                value: 'Onzo',
                label: 'Onzo'
            },
            {
                value: 'Opera',
                label: 'Opera'
            },
            {
                value: 'Opi',
                label: 'Opi'
            },
            {
                value: 'Oppeano',
                label: 'Oppeano'
            },
            {
                value: 'Oppido Lucano',
                label: 'Oppido Lucano'
            },
            {
                value: 'Oppido Mamertina',
                label: 'Oppido Mamertina'
            },
            {
                value: 'Ora',
                label: 'Ora'
            },
            {
                value: 'Orani',
                label: 'Orani'
            },
            {
                value: 'Oratino',
                label: 'Oratino'
            },
            {
                value: 'Orbassano',
                label: 'Orbassano'
            },
            {
                value: 'Orbetello',
                label: 'Orbetello'
            },
            {
                value: 'Orciano Pisano',
                label: 'Orciano Pisano'
            },
            {
                value: 'Orco Feglino',
                label: 'Orco Feglino'
            },
            {
                value: 'Ordona',
                label: 'Ordona'
            },
            {
                value: 'Orero',
                label: 'Orero'
            },
            {
                value: 'Orgiano',
                label: 'Orgiano'
            },
            {
                value: 'Orgosolo',
                label: 'Orgosolo'
            },
            {
                value: 'Oria',
                label: 'Oria'
            },
            {
                value: 'Oricola',
                label: 'Oricola'
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
                value: 'Orio al Serio',
                label: 'Orio al Serio'
            },
            {
                value: 'Orio Canavese',
                label: 'Orio Canavese'
            },
            {
                value: 'Orio Litta',
                label: 'Orio Litta'
            },
            {
                value: 'Oriolo',
                label: 'Oriolo'
            },
            {
                value: 'Oriolo Romano',
                label: 'Oriolo Romano'
            },
            {
                value: 'Oristano',
                label: 'Oristano'
            },
            {
                value: 'Ormea',
                label: 'Ormea'
            },
            {
                value: 'Ormelle',
                label: 'Ormelle'
            },
            {
                value: 'Ornago',
                label: 'Ornago'
            },
            {
                value: 'Ornavasso',
                label: 'Ornavasso'
            },
            {
                value: 'Ornica',
                label: 'Ornica'
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
                value: 'Orria',
                label: 'Orria'
            },
            {
                value: 'Orroli',
                label: 'Orroli'
            },
            {
                value: 'Orsago',
                label: 'Orsago'
            },
            {
                value: 'Orsara Bormida',
                label: 'Orsara Bormida'
            },
            {
                value: 'Orsara di Puglia',
                label: 'Orsara di Puglia'
            },
            {
                value: 'Orsenigo',
                label: 'Orsenigo'
            },
            {
                value: 'Orsogna',
                label: 'Orsogna'
            },
            {
                value: 'Orsomarso',
                label: 'Orsomarso'
            },
            {
                value: 'Orta di Atella',
                label: 'Orta di Atella'
            },
            {
                value: 'Orta Nova',
                label: 'Orta Nova'
            },
            {
                value: 'Orta San Giulio',
                label: 'Orta San Giulio'
            },
            {
                value: 'Ortacesus',
                label: 'Ortacesus'
            },
            {
                value: 'Orte',
                label: 'Orte'
            },
            {
                value: 'Ortelle',
                label: 'Ortelle'
            },
            {
                value: 'Ortezzano',
                label: 'Ortezzano'
            },
            {
                value: 'Ortignano Raggiolo',
                label: 'Ortignano Raggiolo'
            },
            {
                value: 'Ortisei',
                label: 'Ortisei'
            },
            {
                value: 'Ortona',
                label: 'Ortona'
            },
            {
                value: 'Ortona dei Marsi',
                label: 'Ortona dei Marsi'
            },
            {
                value: 'Ortovero',
                label: 'Ortovero'
            },
            {
                value: 'Ortucchio',
                label: 'Ortucchio'
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
                value: 'Orvieto',
                label: 'Orvieto'
            },
            {
                value: 'Orvinio',
                label: 'Orvinio'
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
                value: 'Osasco',
                label: 'Osasco'
            },
            {
                value: 'Osasio',
                label: 'Osasio'
            },
            {
                value: 'Oschiri',
                label: 'Oschiri'
            },
            {
                value: 'Osidda',
                label: 'Osidda'
            },
            {
                value: 'Osiglia',
                label: 'Osiglia'
            },
            {
                value: 'Osilo',
                label: 'Osilo'
            },
            {
                value: 'Osimo',
                label: 'Osimo'
            },
            {
                value: 'Osini',
                label: 'Osini'
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
                value: 'Osnago',
                label: 'Osnago'
            },
            {
                value: 'Osoppo',
                label: 'Osoppo'
            },
            {
                value: 'Ospedaletti',
                label: 'Ospedaletti'
            },
            {
                value: 'Ospedaletto',
                label: 'Ospedaletto'
            },
            {
                value: 'Ospedaletto d\'Alpinolo',
                label: 'Ospedaletto d\'Alpinolo'
            },
            {
                value: 'Ospedaletto Euganeo',
                label: 'Ospedaletto Euganeo'
            },
            {
                value: 'Ospedaletto Lodigiano',
                label: 'Ospedaletto Lodigiano'
            },
            {
                value: 'Ospitale di Cadore',
                label: 'Ospitale di Cadore'
            },
            {
                value: 'Ospitaletto',
                label: 'Ospitaletto'
            },
            {
                value: 'Ossago Lodigiano',
                label: 'Ossago Lodigiano'
            },
            {
                value: 'Ossana',
                label: 'Ossana'
            },
            {
                value: 'Ossi',
                label: 'Ossi'
            },
            {
                value: 'Ossimo',
                label: 'Ossimo'
            },
            {
                value: 'Ossona',
                label: 'Ossona'
            },
            {
                value: 'Ostana',
                label: 'Ostana'
            },
            {
                value: 'Ostellato',
                label: 'Ostellato'
            },
            {
                value: 'Ostiano',
                label: 'Ostiano'
            },
            {
                value: 'Ostiglia',
                label: 'Ostiglia'
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
                value: 'Ostuni',
                label: 'Ostuni'
            },
            {
                value: 'Otranto',
                label: 'Otranto'
            },
            {
                value: 'Otricoli',
                label: 'Otricoli'
            },
            {
                value: 'Ottana',
                label: 'Ottana'
            },
            {
                value: 'Ottati',
                label: 'Ottati'
            },
            {
                value: 'Ottaviano',
                label: 'Ottaviano'
            },
            {
                value: 'Ottiglio',
                label: 'Ottiglio'
            },
            {
                value: 'Ottobiano',
                label: 'Ottobiano'
            },
            {
                value: 'Ottone',
                label: 'Ottone'
            },
            {
                value: 'Oulx',
                label: 'Oulx'
            },
            {
                value: 'Ovada',
                label: 'Ovada'
            },
            {
                value: 'Ovaro',
                label: 'Ovaro'
            },
            {
                value: 'Oviglio',
                label: 'Oviglio'
            },
            {
                value: 'Ovindoli',
                label: 'Ovindoli'
            },
            {
                value: 'Ovodda',
                label: 'Ovodda'
            },
            {
                value: 'Oyace',
                label: 'Oyace'
            },
            {
                value: 'Ozegna',
                label: 'Ozegna'
            },
            {
                value: 'Ozieri',
                label: 'Ozieri'
            },
            {
                value: 'Ozzano dell\'Emilia',
                label: 'Ozzano dell\'Emilia'
            },
            {
                value: 'Ozzano Monferrato',
                label: 'Ozzano Monferrato'
            },
            {
                value: 'Ozzero',
                label: 'Ozzero'
            },
            {
                value: 'Pabillonis',
                label: 'Pabillonis'
            },
            {
                value: 'Pace del Mela',
                label: 'Pace del Mela'
            },
            {
                value: 'Paceco',
                label: 'Paceco'
            },
            {
                value: 'Pacentro',
                label: 'Pacentro'
            },
            {
                value: 'Pachino',
                label: 'Pachino'
            },
            {
                value: 'Paciano',
                label: 'Paciano'
            },
            {
                value: 'Padenghe sul Garda',
                label: 'Padenghe sul Garda'
            },
            {
                value: 'Paderna',
                label: 'Paderna'
            },
            {
                value: 'Paderno d\'Adda',
                label: 'Paderno d\'Adda'
            },
            {
                value: 'Paderno Dugnano',
                label: 'Paderno Dugnano'
            },
            {
                value: 'Paderno Franciacorta',
                label: 'Paderno Franciacorta'
            },
            {
                value: 'Paderno Ponchielli',
                label: 'Paderno Ponchielli'
            },
            {
                value: 'Padova',
                label: 'Padova'
            },
            {
                value: 'Padria',
                label: 'Padria'
            },
            {
                value: 'Padru',
                label: 'Padru'
            },
            {
                value: 'Padula',
                label: 'Padula'
            },
            {
                value: 'Paduli',
                label: 'Paduli'
            },
            {
                value: 'Paesana',
                label: 'Paesana'
            },
            {
                value: 'Paese',
                label: 'Paese'
            },
            {
                value: 'Pagani',
                label: 'Pagani'
            },
            {
                value: 'Paganico Sabino',
                label: 'Paganico Sabino'
            },
            {
                value: 'Pagazzano',
                label: 'Pagazzano'
            },
            {
                value: 'Pagliara',
                label: 'Pagliara'
            },
            {
                value: 'Paglieta',
                label: 'Paglieta'
            },
            {
                value: 'Pagnacco',
                label: 'Pagnacco'
            },
            {
                value: 'Pagno',
                label: 'Pagno'
            },
            {
                value: 'Pagnona',
                label: 'Pagnona'
            },
            {
                value: 'Pago del Vallo di Lauro',
                label: 'Pago del Vallo di Lauro'
            },
            {
                value: 'Pago Veiano',
                label: 'Pago Veiano'
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
                value: 'Paladina',
                label: 'Paladina'
            },
            {
                value: 'Palagano',
                label: 'Palagano'
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
                value: 'Palagonia',
                label: 'Palagonia'
            },
            {
                value: 'Palaia',
                label: 'Palaia'
            },
            {
                value: 'Palanzano',
                label: 'Palanzano'
            },
            {
                value: 'Palata',
                label: 'Palata'
            },
            {
                value: 'Palau',
                label: 'Palau'
            },
            {
                value: 'Palazzago',
                label: 'Palazzago'
            },
            {
                value: 'Palazzo Adriano',
                label: 'Palazzo Adriano'
            },
            {
                value: 'Palazzo Canavese',
                label: 'Palazzo Canavese'
            },
            {
                value: 'Palazzo Pignano',
                label: 'Palazzo Pignano'
            },
            {
                value: 'Palazzo San Gervasio',
                label: 'Palazzo San Gervasio'
            },
            {
                value: 'Palazzolo Acreide',
                label: 'Palazzolo Acreide'
            },
            {
                value: 'Palazzolo dello Stella',
                label: 'Palazzolo dello Stella'
            },
            {
                value: 'Palazzolo sull\'Oglio',
                label: 'Palazzolo sull\'Oglio'
            },
            {
                value: 'Palazzolo Vercellese',
                label: 'Palazzolo Vercellese'
            },
            {
                value: 'Palazzuolo sul Senio',
                label: 'Palazzuolo sul Senio'
            },
            {
                value: 'Palena',
                label: 'Palena'
            },
            {
                value: 'Palermiti',
                label: 'Palermiti'
            },
            {
                value: 'Palermo',
                label: 'Palermo'
            },
            {
                value: 'Palestrina',
                label: 'Palestrina'
            },
            {
                value: 'Palestro',
                label: 'Palestro'
            },
            {
                value: 'Paliano',
                label: 'Paliano'
            },
            {
                value: 'Palizzi',
                label: 'Palizzi'
            },
            {
                value: 'Pallagorio',
                label: 'Pallagorio'
            },
            {
                value: 'Pallanzeno',
                label: 'Pallanzeno'
            },
            {
                value: 'Pallare',
                label: 'Pallare'
            },
            {
                value: 'Palma Campania',
                label: 'Palma Campania'
            },
            {
                value: 'Palma di Montechiaro',
                label: 'Palma di Montechiaro'
            },
            {
                value: 'Palmanova',
                label: 'Palmanova'
            },
            {
                value: 'Palmariggi',
                label: 'Palmariggi'
            },
            {
                value: 'Palmas Arborea',
                label: 'Palmas Arborea'
            },
            {
                value: 'Palmi',
                label: 'Palmi'
            },
            {
                value: 'Palmiano',
                label: 'Palmiano'
            },
            {
                value: 'Palmoli',
                label: 'Palmoli'
            },
            {
                value: 'Palo del Colle',
                label: 'Palo del Colle'
            },
            {
                value: 'Palombara Sabina',
                label: 'Palombara Sabina'
            },
            {
                value: 'Palombaro',
                label: 'Palombaro'
            },
            {
                value: 'Palomonte',
                label: 'Palomonte'
            },
            {
                value: 'Palosco',
                label: 'Palosco'
            },
            {
                value: 'Palù',
                label: 'Palù'
            },
            {
                value: 'Palù del Fersina',
                label: 'Palù del Fersina'
            },
            {
                value: 'Paludi',
                label: 'Paludi'
            },
            {
                value: 'Paluzza',
                label: 'Paluzza'
            },
            {
                value: 'Pamparato',
                label: 'Pamparato'
            },
            {
                value: 'Pancalieri',
                label: 'Pancalieri'
            },
            {
                value: 'Pancarana',
                label: 'Pancarana'
            },
            {
                value: 'Panchià',
                label: 'Panchià'
            },
            {
                value: 'Pandino',
                label: 'Pandino'
            },
            {
                value: 'Panettieri',
                label: 'Panettieri'
            },
            {
                value: 'Panicale',
                label: 'Panicale'
            },
            {
                value: 'Pannarano',
                label: 'Pannarano'
            },
            {
                value: 'Panni',
                label: 'Panni'
            },
            {
                value: 'Pantelleria',
                label: 'Pantelleria'
            },
            {
                value: 'Pantigliate',
                label: 'Pantigliate'
            },
            {
                value: 'Paola',
                label: 'Paola'
            },
            {
                value: 'Paolisi',
                label: 'Paolisi'
            },
            {
                value: 'Papasidero',
                label: 'Papasidero'
            },
            {
                value: 'Papozze',
                label: 'Papozze'
            },
            {
                value: 'Parabiago',
                label: 'Parabiago'
            },
            {
                value: 'Parabita',
                label: 'Parabita'
            },
            {
                value: 'Paratico',
                label: 'Paratico'
            },
            {
                value: 'Parcines',
                label: 'Parcines'
            },
            {
                value: 'Parella',
                label: 'Parella'
            },
            {
                value: 'Parenti',
                label: 'Parenti'
            },
            {
                value: 'Parete',
                label: 'Parete'
            },
            {
                value: 'Pareto',
                label: 'Pareto'
            },
            {
                value: 'Parghelia',
                label: 'Parghelia'
            },
            {
                value: 'Parlasco',
                label: 'Parlasco'
            },
            {
                value: 'Parma',
                label: 'Parma'
            },
            {
                value: 'Parodi Ligure',
                label: 'Parodi Ligure'
            },
            {
                value: 'Paroldo',
                label: 'Paroldo'
            },
            {
                value: 'Parolise',
                label: 'Parolise'
            },
            {
                value: 'Parona',
                label: 'Parona'
            },
            {
                value: 'Parrano',
                label: 'Parrano'
            },
            {
                value: 'Parre',
                label: 'Parre'
            },
            {
                value: 'Partanna',
                label: 'Partanna'
            },
            {
                value: 'Partinico',
                label: 'Partinico'
            },
            {
                value: 'Paruzzaro',
                label: 'Paruzzaro'
            },
            {
                value: 'Parzanica',
                label: 'Parzanica'
            },
            {
                value: 'Pasian di Prato',
                label: 'Pasian di Prato'
            },
            {
                value: 'Pasiano di Pordenone',
                label: 'Pasiano di Pordenone'
            },
            {
                value: 'Paspardo',
                label: 'Paspardo'
            },
            {
                value: 'Passerano Marmorito',
                label: 'Passerano Marmorito'
            },
            {
                value: 'Passignano sul Trasimeno',
                label: 'Passignano sul Trasimeno'
            },
            {
                value: 'Passirano',
                label: 'Passirano'
            },
            {
                value: 'Pastena',
                label: 'Pastena'
            },
            {
                value: 'Pastorano',
                label: 'Pastorano'
            },
            {
                value: 'Pastrengo',
                label: 'Pastrengo'
            },
            {
                value: 'Pasturana',
                label: 'Pasturana'
            },
            {
                value: 'Pasturo',
                label: 'Pasturo'
            },
            {
                value: 'Paterno',
                label: 'Paterno'
            },
            {
                value: 'Paternò',
                label: 'Paternò'
            },
            {
                value: 'Paterno Calabro',
                label: 'Paterno Calabro'
            },
            {
                value: 'Paternopoli',
                label: 'Paternopoli'
            },
            {
                value: 'Patrica',
                label: 'Patrica'
            },
            {
                value: 'Pattada',
                label: 'Pattada'
            },
            {
                value: 'Patti',
                label: 'Patti'
            },
            {
                value: 'Patù',
                label: 'Patù'
            },
            {
                value: 'Pau',
                label: 'Pau'
            },
            {
                value: 'Paularo',
                label: 'Paularo'
            },
            {
                value: 'Pauli Arbarei',
                label: 'Pauli Arbarei'
            },
            {
                value: 'Paulilatino',
                label: 'Paulilatino'
            },
            {
                value: 'Paullo',
                label: 'Paullo'
            },
            {
                value: 'Paupisi',
                label: 'Paupisi'
            },
            {
                value: 'Pavarolo',
                label: 'Pavarolo'
            },
            {
                value: 'Pavia',
                label: 'Pavia'
            },
            {
                value: 'Pavia di Udine',
                label: 'Pavia di Udine'
            },
            {
                value: 'Pavone Canavese',
                label: 'Pavone Canavese'
            },
            {
                value: 'Pavone del Mella',
                label: 'Pavone del Mella'
            },
            {
                value: 'Pavullo nel Frignano',
                label: 'Pavullo nel Frignano'
            },
            {
                value: 'Pazzano',
                label: 'Pazzano'
            },
            {
                value: 'Peccioli',
                label: 'Peccioli'
            },
            {
                value: 'Pecetto di Valenza',
                label: 'Pecetto di Valenza'
            },
            {
                value: 'Pecetto Torinese',
                label: 'Pecetto Torinese'
            },
            {
                value: 'Pedara',
                label: 'Pedara'
            },
            {
                value: 'Pedaso',
                label: 'Pedaso'
            },
            {
                value: 'Pedavena',
                label: 'Pedavena'
            },
            {
                value: 'Pedemonte',
                label: 'Pedemonte'
            },
            {
                value: 'Pederobba',
                label: 'Pederobba'
            },
            {
                value: 'Pedesina',
                label: 'Pedesina'
            },
            {
                value: 'Pedivigliano',
                label: 'Pedivigliano'
            },
            {
                value: 'Pedrengo',
                label: 'Pedrengo'
            },
            {
                value: 'Peglio',
                label: 'Peglio'
            },
            {
                value: 'Pegognaga',
                label: 'Pegognaga'
            },
            {
                value: 'Peia',
                label: 'Peia'
            },
            {
                value: 'Peio',
                label: 'Peio'
            },
            {
                value: 'Pelago',
                label: 'Pelago'
            },
            {
                value: 'Pella',
                label: 'Pella'
            },
            {
                value: 'Pellegrino Parmense',
                label: 'Pellegrino Parmense'
            },
            {
                value: 'Pellezzano',
                label: 'Pellezzano'
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
                value: 'Penango',
                label: 'Penango'
            },
            {
                value: 'Penna in Teverina',
                label: 'Penna in Teverina'
            },
            {
                value: 'Penna San Giovanni',
                label: 'Penna San Giovanni'
            },
            {
                value: 'Penna Sant\'Andrea',
                label: 'Penna Sant\'Andrea'
            },
            {
                value: 'Pennabilli',
                label: 'Pennabilli'
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
                value: 'Penne',
                label: 'Penne'
            },
            {
                value: 'Pentone',
                label: 'Pentone'
            },
            {
                value: 'Perano',
                label: 'Perano'
            },
            {
                value: 'Perarolo di Cadore',
                label: 'Perarolo di Cadore'
            },
            {
                value: 'Perca',
                label: 'Perca'
            },
            {
                value: 'Percile',
                label: 'Percile'
            },
            {
                value: 'Perdasdefogu',
                label: 'Perdasdefogu'
            },
            {
                value: 'Perdaxius',
                label: 'Perdaxius'
            },
            {
                value: 'Perdifumo',
                label: 'Perdifumo'
            },
            {
                value: 'Pereto',
                label: 'Pereto'
            },
            {
                value: 'Perfugas',
                label: 'Perfugas'
            },
            {
                value: 'Pergine Valsugana',
                label: 'Pergine Valsugana'
            },
            {
                value: 'Pergola',
                label: 'Pergola'
            },
            {
                value: 'Perinaldo',
                label: 'Perinaldo'
            },
            {
                value: 'Perito',
                label: 'Perito'
            },
            {
                value: 'Perledo',
                label: 'Perledo'
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
                value: 'Perloz',
                label: 'Perloz'
            },
            {
                value: 'Pernumia',
                label: 'Pernumia'
            },
            {
                value: 'Pero',
                label: 'Pero'
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
                value: 'Persico Dosimo',
                label: 'Persico Dosimo'
            },
            {
                value: 'Pertengo',
                label: 'Pertengo'
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
                value: 'Pertosa',
                label: 'Pertosa'
            },
            {
                value: 'Pertusio',
                label: 'Pertusio'
            },
            {
                value: 'Perugia',
                label: 'Perugia'
            },
            {
                value: 'Pesaro',
                label: 'Pesaro'
            },
            {
                value: 'Pescaglia',
                label: 'Pescaglia'
            },
            {
                value: 'Pescantina',
                label: 'Pescantina'
            },
            {
                value: 'Pescara',
                label: 'Pescara'
            },
            {
                value: 'Pescarolo ed Uniti',
                label: 'Pescarolo ed Uniti'
            },
            {
                value: 'Pescasseroli',
                label: 'Pescasseroli'
            },
            {
                value: 'Pescate',
                label: 'Pescate'
            },
            {
                value: 'Pesche',
                label: 'Pesche'
            },
            {
                value: 'Peschici',
                label: 'Peschici'
            },
            {
                value: 'Peschiera Borromeo',
                label: 'Peschiera Borromeo'
            },
            {
                value: 'Peschiera del Garda',
                label: 'Peschiera del Garda'
            },
            {
                value: 'Pescia',
                label: 'Pescia'
            },
            {
                value: 'Pescina',
                label: 'Pescina'
            },
            {
                value: 'Pesco Sannita',
                label: 'Pesco Sannita'
            },
            {
                value: 'Pescocostanzo',
                label: 'Pescocostanzo'
            },
            {
                value: 'Pescolanciano',
                label: 'Pescolanciano'
            },
            {
                value: 'Pescopagano',
                label: 'Pescopagano'
            },
            {
                value: 'Pescopennataro',
                label: 'Pescopennataro'
            },
            {
                value: 'Pescorocchiano',
                label: 'Pescorocchiano'
            },
            {
                value: 'Pescosansonesco',
                label: 'Pescosansonesco'
            },
            {
                value: 'Pescosolido',
                label: 'Pescosolido'
            },
            {
                value: 'Pessano con Bornago',
                label: 'Pessano con Bornago'
            },
            {
                value: 'Pessina Cremonese',
                label: 'Pessina Cremonese'
            },
            {
                value: 'Pessinetto',
                label: 'Pessinetto'
            },
            {
                value: 'Petacciato',
                label: 'Petacciato'
            },
            {
                value: 'Petilia Policastro',
                label: 'Petilia Policastro'
            },
            {
                value: 'Petina',
                label: 'Petina'
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
                value: 'Petrella Salto',
                label: 'Petrella Salto'
            },
            {
                value: 'Petrella Tifernina',
                label: 'Petrella Tifernina'
            },
            {
                value: 'Petriano',
                label: 'Petriano'
            },
            {
                value: 'Petriolo',
                label: 'Petriolo'
            },
            {
                value: 'Petritoli',
                label: 'Petritoli'
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
                value: 'Petrosino',
                label: 'Petrosino'
            },
            {
                value: 'Petruro Irpino',
                label: 'Petruro Irpino'
            },
            {
                value: 'Pettenasco',
                label: 'Pettenasco'
            },
            {
                value: 'Pettinengo',
                label: 'Pettinengo'
            },
            {
                value: 'Pettineo',
                label: 'Pettineo'
            },
            {
                value: 'Pettoranello del Molise',
                label: 'Pettoranello del Molise'
            },
            {
                value: 'Pettorano sul Gizio',
                label: 'Pettorano sul Gizio'
            },
            {
                value: 'Pettorazza Grimani',
                label: 'Pettorazza Grimani'
            },
            {
                value: 'Peveragno',
                label: 'Peveragno'
            },
            {
                value: 'Pezzana',
                label: 'Pezzana'
            },
            {
                value: 'Pezzaze',
                label: 'Pezzaze'
            },
            {
                value: 'Pezzolo Valle Uzzone',
                label: 'Pezzolo Valle Uzzone'
            },
            {
                value: 'Piacenza',
                label: 'Piacenza'
            },
            {
                value: 'Piacenza d\'Adige',
                label: 'Piacenza d\'Adige'
            },
            {
                value: 'Piadena Drizzona',
                label: 'Piadena Drizzona'
            },
            {
                value: 'Piaggine',
                label: 'Piaggine'
            },
            {
                value: 'Pian Camuno',
                label: 'Pian Camuno'
            },
            {
                value: 'Piana Crixia',
                label: 'Piana Crixia'
            },
            {
                value: 'Piana degli Albanesi',
                label: 'Piana degli Albanesi'
            },
            {
                value: 'Piana di Monte Verna',
                label: 'Piana di Monte Verna'
            },
            {
                value: 'Piancastagnaio',
                label: 'Piancastagnaio'
            },
            {
                value: 'Piancogno',
                label: 'Piancogno'
            },
            {
                value: 'Piandimeleto',
                label: 'Piandimeleto'
            },
            {
                value: 'Piane Crati',
                label: 'Piane Crati'
            },
            {
                value: 'Pianella',
                label: 'Pianella'
            },
            {
                value: 'Pianello del Lario',
                label: 'Pianello del Lario'
            },
            {
                value: 'Pianello Val Tidone',
                label: 'Pianello Val Tidone'
            },
            {
                value: 'Pianengo',
                label: 'Pianengo'
            },
            {
                value: 'Pianezza',
                label: 'Pianezza'
            },
            {
                value: 'Pianezze',
                label: 'Pianezze'
            },
            {
                value: 'Pianfei',
                label: 'Pianfei'
            },
            {
                value: 'Pianico',
                label: 'Pianico'
            },
            {
                value: 'Pianiga',
                label: 'Pianiga'
            },
            {
                value: 'Piano di Sorrento',
                label: 'Piano di Sorrento'
            },
            {
                value: 'Pianopoli',
                label: 'Pianopoli'
            },
            {
                value: 'Pianoro',
                label: 'Pianoro'
            },
            {
                value: 'Piansano',
                label: 'Piansano'
            },
            {
                value: 'Piantedo',
                label: 'Piantedo'
            },
            {
                value: 'Piario',
                label: 'Piario'
            },
            {
                value: 'Piasco',
                label: 'Piasco'
            },
            {
                value: 'Piateda',
                label: 'Piateda'
            },
            {
                value: 'Piatto',
                label: 'Piatto'
            },
            {
                value: 'Piazza al Serchio',
                label: 'Piazza al Serchio'
            },
            {
                value: 'Piazza Armerina',
                label: 'Piazza Armerina'
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
                value: 'Piazzola sul Brenta',
                label: 'Piazzola sul Brenta'
            },
            {
                value: 'Piazzolo',
                label: 'Piazzolo'
            },
            {
                value: 'Picciano',
                label: 'Picciano'
            },
            {
                value: 'Picerno',
                label: 'Picerno'
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
                value: 'Piea',
                label: 'Piea'
            },
            {
                value: 'Piedicavallo',
                label: 'Piedicavallo'
            },
            {
                value: 'Piedimonte Etneo',
                label: 'Piedimonte Etneo'
            },
            {
                value: 'Piedimonte Matese',
                label: 'Piedimonte Matese'
            },
            {
                value: 'Piedimonte San Germano',
                label: 'Piedimonte San Germano'
            },
            {
                value: 'Piedimulera',
                label: 'Piedimulera'
            },
            {
                value: 'Piegaro',
                label: 'Piegaro'
            },
            {
                value: 'Pienza',
                label: 'Pienza'
            },
            {
                value: 'Pieranica',
                label: 'Pieranica'
            },
            {
                value: 'Pietra de\' Giorgi',
                label: 'Pietra de\' Giorgi'
            },
            {
                value: 'Pietra Ligure',
                label: 'Pietra Ligure'
            },
            {
                value: 'Pietra Marazzi',
                label: 'Pietra Marazzi'
            },
            {
                value: 'Pietrabbondante',
                label: 'Pietrabbondante'
            },
            {
                value: 'Pietrabruna',
                label: 'Pietrabruna'
            },
            {
                value: 'Pietracamela',
                label: 'Pietracamela'
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
                value: 'Pietradefusi',
                label: 'Pietradefusi'
            },
            {
                value: 'Pietraferrazzana',
                label: 'Pietraferrazzana'
            },
            {
                value: 'Pietrafitta',
                label: 'Pietrafitta'
            },
            {
                value: 'Pietragalla',
                label: 'Pietragalla'
            },
            {
                value: 'Pietralunga',
                label: 'Pietralunga'
            },
            {
                value: 'Pietramelara',
                label: 'Pietramelara'
            },
            {
                value: 'Pietramontecorvino',
                label: 'Pietramontecorvino'
            },
            {
                value: 'Pietranico',
                label: 'Pietranico'
            },
            {
                value: 'Pietrapaola',
                label: 'Pietrapaola'
            },
            {
                value: 'Pietrapertosa',
                label: 'Pietrapertosa'
            },
            {
                value: 'Pietraperzia',
                label: 'Pietraperzia'
            },
            {
                value: 'Pietraporzio',
                label: 'Pietraporzio'
            },
            {
                value: 'Pietraroja',
                label: 'Pietraroja'
            },
            {
                value: 'Pietrarubbia',
                label: 'Pietrarubbia'
            },
            {
                value: 'Pietrasanta',
                label: 'Pietrasanta'
            },
            {
                value: 'Pietrastornina',
                label: 'Pietrastornina'
            },
            {
                value: 'Pietravairano',
                label: 'Pietravairano'
            },
            {
                value: 'Pietrelcina',
                label: 'Pietrelcina'
            },
            {
                value: 'Pieve a Nievole',
                label: 'Pieve a Nievole'
            },
            {
                value: 'Pieve Albignola',
                label: 'Pieve Albignola'
            },
            {
                value: 'Pieve d\'Olmi',
                label: 'Pieve d\'Olmi'
            },
            {
                value: 'Pieve del Cairo',
                label: 'Pieve del Cairo'
            },
            {
                value: 'Pieve del Grappa',
                label: 'Pieve del Grappa'
            },
            {
                value: 'Pieve di Bono-Prezzo',
                label: 'Pieve di Bono-Prezzo'
            },
            {
                value: 'Pieve di Cadore',
                label: 'Pieve di Cadore'
            },
            {
                value: 'Pieve di Cento',
                label: 'Pieve di Cento'
            },
            {
                value: 'Pieve di Soligo',
                label: 'Pieve di Soligo'
            },
            {
                value: 'Pieve di Teco',
                label: 'Pieve di Teco'
            },
            {
                value: 'Pieve Emanuele',
                label: 'Pieve Emanuele'
            },
            {
                value: 'Pieve Fissiraga',
                label: 'Pieve Fissiraga'
            },
            {
                value: 'Pieve Fosciana',
                label: 'Pieve Fosciana'
            },
            {
                value: 'Pieve Ligure',
                label: 'Pieve Ligure'
            },
            {
                value: 'Pieve Porto Morone',
                label: 'Pieve Porto Morone'
            },
            {
                value: 'Pieve San Giacomo',
                label: 'Pieve San Giacomo'
            },
            {
                value: 'Pieve Santo Stefano',
                label: 'Pieve Santo Stefano'
            },
            {
                value: 'Pieve Tesino',
                label: 'Pieve Tesino'
            },
            {
                value: 'Pieve Torina',
                label: 'Pieve Torina'
            },
            {
                value: 'Pieve Vergonte',
                label: 'Pieve Vergonte'
            },
            {
                value: 'Pievepelago',
                label: 'Pievepelago'
            },
            {
                value: 'Piglio',
                label: 'Piglio'
            },
            {
                value: 'Pigna',
                label: 'Pigna'
            },
            {
                value: 'Pignataro Interamna',
                label: 'Pignataro Interamna'
            },
            {
                value: 'Pignataro Maggiore',
                label: 'Pignataro Maggiore'
            },
            {
                value: 'Pignola',
                label: 'Pignola'
            },
            {
                value: 'Pignone',
                label: 'Pignone'
            },
            {
                value: 'Pigra',
                label: 'Pigra'
            },
            {
                value: 'Pila',
                label: 'Pila'
            },
            {
                value: 'Pimentel',
                label: 'Pimentel'
            },
            {
                value: 'Pimonte',
                label: 'Pimonte'
            },
            {
                value: 'Pinarolo Po',
                label: 'Pinarolo Po'
            },
            {
                value: 'Pinasca',
                label: 'Pinasca'
            },
            {
                value: 'Pincara',
                label: 'Pincara'
            },
            {
                value: 'Pinerolo',
                label: 'Pinerolo'
            },
            {
                value: 'Pineto',
                label: 'Pineto'
            },
            {
                value: 'Pino d\'Asti',
                label: 'Pino d\'Asti'
            },
            {
                value: 'Pino Torinese',
                label: 'Pino Torinese'
            },
            {
                value: 'Pinzano al Tagliamento',
                label: 'Pinzano al Tagliamento'
            },
            {
                value: 'Pinzolo',
                label: 'Pinzolo'
            },
            {
                value: 'Piobbico',
                label: 'Piobbico'
            },
            {
                value: 'Piobesi d\'Alba',
                label: 'Piobesi d\'Alba'
            },
            {
                value: 'Piobesi Torinese',
                label: 'Piobesi Torinese'
            },
            {
                value: 'Piode',
                label: 'Piode'
            },
            {
                value: 'Pioltello',
                label: 'Pioltello'
            },
            {
                value: 'Piombino',
                label: 'Piombino'
            },
            {
                value: 'Piombino Dese',
                label: 'Piombino Dese'
            },
            {
                value: 'Pioraco',
                label: 'Pioraco'
            },
            {
                value: 'Piossasco',
                label: 'Piossasco'
            },
            {
                value: 'Piovà Massaia',
                label: 'Piovà Massaia'
            },
            {
                value: 'Piove di Sacco',
                label: 'Piove di Sacco'
            },
            {
                value: 'Piovene Rocchette',
                label: 'Piovene Rocchette'
            },
            {
                value: 'Piozzano',
                label: 'Piozzano'
            },
            {
                value: 'Piozzo',
                label: 'Piozzo'
            },
            {
                value: 'Piraino',
                label: 'Piraino'
            },
            {
                value: 'Pisa',
                label: 'Pisa'
            },
            {
                value: 'Pisano',
                label: 'Pisano'
            },
            {
                value: 'Piscina',
                label: 'Piscina'
            },
            {
                value: 'Piscinas',
                label: 'Piscinas'
            },
            {
                value: 'Pisciotta',
                label: 'Pisciotta'
            },
            {
                value: 'Pisogne',
                label: 'Pisogne'
            },
            {
                value: 'Pisoniano',
                label: 'Pisoniano'
            },
            {
                value: 'Pisticci',
                label: 'Pisticci'
            },
            {
                value: 'Pistoia',
                label: 'Pistoia'
            },
            {
                value: 'Pitigliano',
                label: 'Pitigliano'
            },
            {
                value: 'Piubega',
                label: 'Piubega'
            },
            {
                value: 'Piuro',
                label: 'Piuro'
            },
            {
                value: 'Piverone',
                label: 'Piverone'
            },
            {
                value: 'Pizzale',
                label: 'Pizzale'
            },
            {
                value: 'Pizzighettone',
                label: 'Pizzighettone'
            },
            {
                value: 'Pizzo',
                label: 'Pizzo'
            },
            {
                value: 'Pizzoferrato',
                label: 'Pizzoferrato'
            },
            {
                value: 'Pizzoli',
                label: 'Pizzoli'
            },
            {
                value: 'Pizzone',
                label: 'Pizzone'
            },
            {
                value: 'Pizzoni',
                label: 'Pizzoni'
            },
            {
                value: 'Placanica',
                label: 'Placanica'
            },
            {
                value: 'Plataci',
                label: 'Plataci'
            },
            {
                value: 'Platania',
                label: 'Platania'
            },
            {
                value: 'Platì',
                label: 'Platì'
            },
            {
                value: 'Plaus',
                label: 'Plaus'
            },
            {
                value: 'Plesio',
                label: 'Plesio'
            },
            {
                value: 'Ploaghe',
                label: 'Ploaghe'
            },
            {
                value: 'Plodio',
                label: 'Plodio'
            },
            {
                value: 'Pocapaglia',
                label: 'Pocapaglia'
            },
            {
                value: 'Pocenia',
                label: 'Pocenia'
            },
            {
                value: 'Podenzana',
                label: 'Podenzana'
            },
            {
                value: 'Podenzano',
                label: 'Podenzano'
            },
            {
                value: 'Pofi',
                label: 'Pofi'
            },
            {
                value: 'Poggiardo',
                label: 'Poggiardo'
            },
            {
                value: 'Poggibonsi',
                label: 'Poggibonsi'
            },
            {
                value: 'Poggio a Caiano',
                label: 'Poggio a Caiano'
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
                value: 'Poggio Imperiale',
                label: 'Poggio Imperiale'
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
                value: 'Poggio Picenze',
                label: 'Poggio Picenze'
            },
            {
                value: 'Poggio Renatico',
                label: 'Poggio Renatico'
            },
            {
                value: 'Poggio Rusco',
                label: 'Poggio Rusco'
            },
            {
                value: 'Poggio San Lorenzo',
                label: 'Poggio San Lorenzo'
            },
            {
                value: 'Poggio San Marcello',
                label: 'Poggio San Marcello'
            },
            {
                value: 'Poggio San Vicino',
                label: 'Poggio San Vicino'
            },
            {
                value: 'Poggio Sannita',
                label: 'Poggio Sannita'
            },
            {
                value: 'Poggio Torriana',
                label: 'Poggio Torriana'
            },
            {
                value: 'Poggiodomo',
                label: 'Poggiodomo'
            },
            {
                value: 'Poggiofiorito',
                label: 'Poggiofiorito'
            },
            {
                value: 'Poggiomarino',
                label: 'Poggiomarino'
            },
            {
                value: 'Poggioreale',
                label: 'Poggioreale'
            },
            {
                value: 'Poggiorsini',
                label: 'Poggiorsini'
            },
            {
                value: 'Poggiridenti',
                label: 'Poggiridenti'
            },
            {
                value: 'Pogliano Milanese',
                label: 'Pogliano Milanese'
            },
            {
                value: 'Pognana Lario',
                label: 'Pognana Lario'
            },
            {
                value: 'Pognano',
                label: 'Pognano'
            },
            {
                value: 'Pogno',
                label: 'Pogno'
            },
            {
                value: 'Poirino',
                label: 'Poirino'
            },
            {
                value: 'Pojana Maggiore',
                label: 'Pojana Maggiore'
            },
            {
                value: 'Polaveno',
                label: 'Polaveno'
            },
            {
                value: 'Polcenigo',
                label: 'Polcenigo'
            },
            {
                value: 'Polesella',
                label: 'Polesella'
            },
            {
                value: 'Polesine Zibello',
                label: 'Polesine Zibello'
            },
            {
                value: 'Poli',
                label: 'Poli'
            },
            {
                value: 'Polia',
                label: 'Polia'
            },
            {
                value: 'Policoro',
                label: 'Policoro'
            },
            {
                value: 'Polignano a Mare',
                label: 'Polignano a Mare'
            },
            {
                value: 'Polinago',
                label: 'Polinago'
            },
            {
                value: 'Polino',
                label: 'Polino'
            },
            {
                value: 'Polistena',
                label: 'Polistena'
            },
            {
                value: 'Polizzi Generosa',
                label: 'Polizzi Generosa'
            },
            {
                value: 'Polla',
                label: 'Polla'
            },
            {
                value: 'Pollein',
                label: 'Pollein'
            },
            {
                value: 'Pollena Trocchia',
                label: 'Pollena Trocchia'
            },
            {
                value: 'Pollenza',
                label: 'Pollenza'
            },
            {
                value: 'Pollica',
                label: 'Pollica'
            },
            {
                value: 'Pollina',
                label: 'Pollina'
            },
            {
                value: 'Pollone',
                label: 'Pollone'
            },
            {
                value: 'Pollutri',
                label: 'Pollutri'
            },
            {
                value: 'Polonghera',
                label: 'Polonghera'
            },
            {
                value: 'Polpenazze del Garda',
                label: 'Polpenazze del Garda'
            },
            {
                value: 'Polverara',
                label: 'Polverara'
            },
            {
                value: 'Polverigi',
                label: 'Polverigi'
            },
            {
                value: 'Pomarance',
                label: 'Pomarance'
            },
            {
                value: 'Pomaretto',
                label: 'Pomaretto'
            },
            {
                value: 'Pomarico',
                label: 'Pomarico'
            },
            {
                value: 'Pomaro Monferrato',
                label: 'Pomaro Monferrato'
            },
            {
                value: 'Pomarolo',
                label: 'Pomarolo'
            },
            {
                value: 'Pombia',
                label: 'Pombia'
            },
            {
                value: 'Pomezia',
                label: 'Pomezia'
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
                value: 'Pompeiana',
                label: 'Pompeiana'
            },
            {
                value: 'Pompiano',
                label: 'Pompiano'
            },
            {
                value: 'Pomponesco',
                label: 'Pomponesco'
            },
            {
                value: 'Pompu',
                label: 'Pompu'
            },
            {
                value: 'Poncarale',
                label: 'Poncarale'
            },
            {
                value: 'Ponderano',
                label: 'Ponderano'
            },
            {
                value: 'Ponna',
                label: 'Ponna'
            },
            {
                value: 'Ponsacco',
                label: 'Ponsacco'
            },
            {
                value: 'Ponso',
                label: 'Ponso'
            },
            {
                value: 'Pont Canavese',
                label: 'Pont Canavese'
            },
            {
                value: 'Pont-Saint-Martin',
                label: 'Pont-Saint-Martin'
            },
            {
                value: 'Pontassieve',
                label: 'Pontassieve'
            },
            {
                value: 'Pontboset',
                label: 'Pontboset'
            },
            {
                value: 'Ponte',
                label: 'Ponte'
            },
            {
                value: 'Ponte Buggianese',
                label: 'Ponte Buggianese'
            },
            {
                value: 'Ponte dell\'Olio',
                label: 'Ponte dell\'Olio'
            },
            {
                value: 'Ponte di Legno',
                label: 'Ponte di Legno'
            },
            {
                value: 'Ponte di Piave',
                label: 'Ponte di Piave'
            },
            {
                value: 'Ponte Gardena',
                label: 'Ponte Gardena'
            },
            {
                value: 'Ponte in Valtellina',
                label: 'Ponte in Valtellina'
            },
            {
                value: 'Ponte Lambro',
                label: 'Ponte Lambro'
            },
            {
                value: 'Ponte nelle Alpi',
                label: 'Ponte nelle Alpi'
            },
            {
                value: 'Ponte Nizza',
                label: 'Ponte Nizza'
            },
            {
                value: 'Ponte Nossa',
                label: 'Ponte Nossa'
            },
            {
                value: 'Ponte San Nicolò',
                label: 'Ponte San Nicolò'
            },
            {
                value: 'Ponte San Pietro',
                label: 'Ponte San Pietro'
            },
            {
                value: 'Pontebba',
                label: 'Pontebba'
            },
            {
                value: 'Pontecagnano Faiano',
                label: 'Pontecagnano Faiano'
            },
            {
                value: 'Pontecchio Polesine',
                label: 'Pontecchio Polesine'
            },
            {
                value: 'Pontechianale',
                label: 'Pontechianale'
            },
            {
                value: 'Pontecorvo',
                label: 'Pontecorvo'
            },
            {
                value: 'Pontecurone',
                label: 'Pontecurone'
            },
            {
                value: 'Pontedassio',
                label: 'Pontedassio'
            },
            {
                value: 'Pontedera',
                label: 'Pontedera'
            },
            {
                value: 'Pontelandolfo',
                label: 'Pontelandolfo'
            },
            {
                value: 'Pontelatone',
                label: 'Pontelatone'
            },
            {
                value: 'Pontelongo',
                label: 'Pontelongo'
            },
            {
                value: 'Pontenure',
                label: 'Pontenure'
            },
            {
                value: 'Ponteranica',
                label: 'Ponteranica'
            },
            {
                value: 'Pontestura',
                label: 'Pontestura'
            },
            {
                value: 'Pontevico',
                label: 'Pontevico'
            },
            {
                value: 'Pontey',
                label: 'Pontey'
            },
            {
                value: 'Ponti',
                label: 'Ponti'
            },
            {
                value: 'Ponti sul Mincio',
                label: 'Ponti sul Mincio'
            },
            {
                value: 'Pontida',
                label: 'Pontida'
            },
            {
                value: 'Pontinia',
                label: 'Pontinia'
            },
            {
                value: 'Pontinvrea',
                label: 'Pontinvrea'
            },
            {
                value: 'Pontirolo Nuovo',
                label: 'Pontirolo Nuovo'
            },
            {
                value: 'Pontoglio',
                label: 'Pontoglio'
            },
            {
                value: 'Pontremoli',
                label: 'Pontremoli'
            },
            {
                value: 'Ponza',
                label: 'Ponza'
            },
            {
                value: 'Ponzano di Fermo',
                label: 'Ponzano di Fermo'
            },
            {
                value: 'Ponzano Monferrato',
                label: 'Ponzano Monferrato'
            },
            {
                value: 'Ponzano Romano',
                label: 'Ponzano Romano'
            },
            {
                value: 'Ponzano Veneto',
                label: 'Ponzano Veneto'
            },
            {
                value: 'Ponzone',
                label: 'Ponzone'
            },
            {
                value: 'Popoli Terme',
                label: 'Popoli Terme'
            },
            {
                value: 'Poppi',
                label: 'Poppi'
            },
            {
                value: 'Porano',
                label: 'Porano'
            },
            {
                value: 'Porcari',
                label: 'Porcari'
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
                value: 'Porlezza',
                label: 'Porlezza'
            },
            {
                value: 'Pornassio',
                label: 'Pornassio'
            },
            {
                value: 'Porpetto',
                label: 'Porpetto'
            },
            {
                value: 'Portacomaro',
                label: 'Portacomaro'
            },
            {
                value: 'Portalbera',
                label: 'Portalbera'
            },
            {
                value: 'Porte',
                label: 'Porte'
            },
            {
                value: 'Porte di Rendena',
                label: 'Porte di Rendena'
            },
            {
                value: 'Portici',
                label: 'Portici'
            },
            {
                value: 'Portico di Caserta',
                label: 'Portico di Caserta'
            },
            {
                value: 'Portico e San Benedetto',
                label: 'Portico e San Benedetto'
            },
            {
                value: 'Portigliola',
                label: 'Portigliola'
            },
            {
                value: 'Porto Azzurro',
                label: 'Porto Azzurro'
            },
            {
                value: 'Porto Ceresio',
                label: 'Porto Ceresio'
            },
            {
                value: 'Porto Cesareo',
                label: 'Porto Cesareo'
            },
            {
                value: 'Porto Empedocle',
                label: 'Porto Empedocle'
            },
            {
                value: 'Porto Mantovano',
                label: 'Porto Mantovano'
            },
            {
                value: 'Porto Recanati',
                label: 'Porto Recanati'
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
                value: 'Porto Tolle',
                label: 'Porto Tolle'
            },
            {
                value: 'Porto Torres',
                label: 'Porto Torres'
            },
            {
                value: 'Porto Valtravaglia',
                label: 'Porto Valtravaglia'
            },
            {
                value: 'Porto Viro',
                label: 'Porto Viro'
            },
            {
                value: 'Portobuffolè',
                label: 'Portobuffolè'
            },
            {
                value: 'Portocannone',
                label: 'Portocannone'
            },
            {
                value: 'Portoferraio',
                label: 'Portoferraio'
            },
            {
                value: 'Portofino',
                label: 'Portofino'
            },
            {
                value: 'Portogruaro',
                label: 'Portogruaro'
            },
            {
                value: 'Portomaggiore',
                label: 'Portomaggiore'
            },
            {
                value: 'Portopalo di Capo Passero',
                label: 'Portopalo di Capo Passero'
            },
            {
                value: 'Portoscuso',
                label: 'Portoscuso'
            },
            {
                value: 'Portovenere',
                label: 'Portovenere'
            },
            {
                value: 'Portula',
                label: 'Portula'
            },
            {
                value: 'Posada',
                label: 'Posada'
            },
            {
                value: 'Posina',
                label: 'Posina'
            },
            {
                value: 'Positano',
                label: 'Positano'
            },
            {
                value: 'Possagno',
                label: 'Possagno'
            },
            {
                value: 'Posta',
                label: 'Posta'
            },
            {
                value: 'Posta Fibreno',
                label: 'Posta Fibreno'
            },
            {
                value: 'Postal',
                label: 'Postal'
            },
            {
                value: 'Postalesio',
                label: 'Postalesio'
            },
            {
                value: 'Postiglione',
                label: 'Postiglione'
            },
            {
                value: 'Postua',
                label: 'Postua'
            },
            {
                value: 'Potenza',
                label: 'Potenza'
            },
            {
                value: 'Potenza Picena',
                label: 'Potenza Picena'
            },
            {
                value: 'Pove del Grappa',
                label: 'Pove del Grappa'
            },
            {
                value: 'Povegliano',
                label: 'Povegliano'
            },
            {
                value: 'Povegliano Veronese',
                label: 'Povegliano Veronese'
            },
            {
                value: 'Poviglio',
                label: 'Poviglio'
            },
            {
                value: 'Povoletto',
                label: 'Povoletto'
            },
            {
                value: 'Pozzaglia Sabina',
                label: 'Pozzaglia Sabina'
            },
            {
                value: 'Pozzaglio ed Uniti',
                label: 'Pozzaglio ed Uniti'
            },
            {
                value: 'Pozzallo',
                label: 'Pozzallo'
            },
            {
                value: 'Pozzilli',
                label: 'Pozzilli'
            },
            {
                value: 'Pozzo d\'Adda',
                label: 'Pozzo d\'Adda'
            },
            {
                value: 'Pozzol Groppo',
                label: 'Pozzol Groppo'
            },
            {
                value: 'Pozzolengo',
                label: 'Pozzolengo'
            },
            {
                value: 'Pozzoleone',
                label: 'Pozzoleone'
            },
            {
                value: 'Pozzolo Formigaro',
                label: 'Pozzolo Formigaro'
            },
            {
                value: 'Pozzomaggiore',
                label: 'Pozzomaggiore'
            },
            {
                value: 'Pozzonovo',
                label: 'Pozzonovo'
            },
            {
                value: 'Pozzuoli',
                label: 'Pozzuoli'
            },
            {
                value: 'Pozzuolo del Friuli',
                label: 'Pozzuolo del Friuli'
            },
            {
                value: 'Pozzuolo Martesana',
                label: 'Pozzuolo Martesana'
            },
            {
                value: 'Pradalunga',
                label: 'Pradalunga'
            },
            {
                value: 'Pradamano',
                label: 'Pradamano'
            },
            {
                value: 'Pradleves',
                label: 'Pradleves'
            },
            {
                value: 'Pragelato',
                label: 'Pragelato'
            },
            {
                value: 'Praia a Mare',
                label: 'Praia a Mare'
            },
            {
                value: 'Praiano',
                label: 'Praiano'
            },
            {
                value: 'Pralboino',
                label: 'Pralboino'
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
                value: 'Pralungo',
                label: 'Pralungo'
            },
            {
                value: 'Pramaggiore',
                label: 'Pramaggiore'
            },
            {
                value: 'Pramollo',
                label: 'Pramollo'
            },
            {
                value: 'Prarolo',
                label: 'Prarolo'
            },
            {
                value: 'Prarostino',
                label: 'Prarostino'
            },
            {
                value: 'Prasco',
                label: 'Prasco'
            },
            {
                value: 'Prascorsano',
                label: 'Prascorsano'
            },
            {
                value: 'Prata Camportaccio',
                label: 'Prata Camportaccio'
            },
            {
                value: 'Prata d\'Ansidonia',
                label: 'Prata d\'Ansidonia'
            },
            {
                value: 'Prata di Pordenone',
                label: 'Prata di Pordenone'
            },
            {
                value: 'Prata di Principato Ultra',
                label: 'Prata di Principato Ultra'
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
                value: 'Pratiglione',
                label: 'Pratiglione'
            },
            {
                value: 'Prato',
                label: 'Prato'
            },
            {
                value: 'Prato allo Stelvio',
                label: 'Prato allo Stelvio'
            },
            {
                value: 'Prato Carnico',
                label: 'Prato Carnico'
            },
            {
                value: 'Prato Sesia',
                label: 'Prato Sesia'
            },
            {
                value: 'Pratola Peligna',
                label: 'Pratola Peligna'
            },
            {
                value: 'Pratola Serra',
                label: 'Pratola Serra'
            },
            {
                value: 'Pratovecchio Stia',
                label: 'Pratovecchio Stia'
            },
            {
                value: 'Pravisdomini',
                label: 'Pravisdomini'
            },
            {
                value: 'Pray',
                label: 'Pray'
            },
            {
                value: 'Prazzo',
                label: 'Prazzo'
            },
            {
                value: 'Pré-Saint-Didier',
                label: 'Pré-Saint-Didier'
            },
            {
                value: 'Precenicco',
                label: 'Precenicco'
            },
            {
                value: 'Preci',
                label: 'Preci'
            },
            {
                value: 'Predaia',
                label: 'Predaia'
            },
            {
                value: 'Predappio',
                label: 'Predappio'
            },
            {
                value: 'Predazzo',
                label: 'Predazzo'
            },
            {
                value: 'Predoi',
                label: 'Predoi'
            },
            {
                value: 'Predore',
                label: 'Predore'
            },
            {
                value: 'Predosa',
                label: 'Predosa'
            },
            {
                value: 'Preganziol',
                label: 'Preganziol'
            },
            {
                value: 'Pregnana Milanese',
                label: 'Pregnana Milanese'
            },
            {
                value: 'Prelà',
                label: 'Prelà'
            },
            {
                value: 'Premana',
                label: 'Premana'
            },
            {
                value: 'Premariacco',
                label: 'Premariacco'
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
                value: 'Premilcuore',
                label: 'Premilcuore'
            },
            {
                value: 'Premolo',
                label: 'Premolo'
            },
            {
                value: 'Premosello-Chiovenda',
                label: 'Premosello-Chiovenda'
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
                value: 'Preseglie',
                label: 'Preseglie'
            },
            {
                value: 'Presenzano',
                label: 'Presenzano'
            },
            {
                value: 'Presezzo',
                label: 'Presezzo'
            },
            {
                value: 'Presicce-Acquarica',
                label: 'Presicce-Acquarica'
            },
            {
                value: 'Pressana',
                label: 'Pressana'
            },
            {
                value: 'Pretoro',
                label: 'Pretoro'
            },
            {
                value: 'Prevalle',
                label: 'Prevalle'
            },
            {
                value: 'Prezza',
                label: 'Prezza'
            },
            {
                value: 'Priero',
                label: 'Priero'
            },
            {
                value: 'Prignano Cilento',
                label: 'Prignano Cilento'
            },
            {
                value: 'Prignano sulla Secchia',
                label: 'Prignano sulla Secchia'
            },
            {
                value: 'Primaluna',
                label: 'Primaluna'
            },
            {
                value: 'Primiero San Martino di Castrozza',
                label: 'Primiero San Martino di Castrozza'
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
                value: 'Priolo Gargallo',
                label: 'Priolo Gargallo'
            },
            {
                value: 'Priverno',
                label: 'Priverno'
            },
            {
                value: 'Prizzi',
                label: 'Prizzi'
            },
            {
                value: 'Proceno',
                label: 'Proceno'
            },
            {
                value: 'Procida',
                label: 'Procida'
            },
            {
                value: 'Propata',
                label: 'Propata'
            },
            {
                value: 'Proserpio',
                label: 'Proserpio'
            },
            {
                value: 'Prossedi',
                label: 'Prossedi'
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
                value: 'Proves',
                label: 'Proves'
            },
            {
                value: 'Provvidenti',
                label: 'Provvidenti'
            },
            {
                value: 'Prunetto',
                label: 'Prunetto'
            },
            {
                value: 'Puegnago del Garda',
                label: 'Puegnago del Garda'
            },
            {
                value: 'Puglianello',
                label: 'Puglianello'
            },
            {
                value: 'Pula',
                label: 'Pula'
            },
            {
                value: 'Pulfero',
                label: 'Pulfero'
            },
            {
                value: 'Pulsano',
                label: 'Pulsano'
            },
            {
                value: 'Pumenengo',
                label: 'Pumenengo'
            },
            {
                value: 'Pusiano',
                label: 'Pusiano'
            },
            {
                value: 'Putifigari',
                label: 'Putifigari'
            },
            {
                value: 'Putignano',
                label: 'Putignano'
            },
            {
                value: 'Quadrelle',
                label: 'Quadrelle'
            },
            {
                value: 'Quadri',
                label: 'Quadri'
            },
            {
                value: 'Quagliuzzo',
                label: 'Quagliuzzo'
            },
            {
                value: 'Qualiano',
                label: 'Qualiano'
            },
            {
                value: 'Quaranti',
                label: 'Quaranti'
            },
            {
                value: 'Quaregna Cerreto',
                label: 'Quaregna Cerreto'
            },
            {
                value: 'Quargnento',
                label: 'Quargnento'
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
                value: 'Quarona',
                label: 'Quarona'
            },
            {
                value: 'Quarrata',
                label: 'Quarrata'
            },
            {
                value: 'Quart',
                label: 'Quart'
            },
            {
                value: 'Quarto',
                label: 'Quarto'
            },
            {
                value: 'Quarto d\'Altino',
                label: 'Quarto d\'Altino'
            },
            {
                value: 'Quartu Sant\'Elena',
                label: 'Quartu Sant\'Elena'
            },
            {
                value: 'Quartucciu',
                label: 'Quartucciu'
            },
            {
                value: 'Quassolo',
                label: 'Quassolo'
            },
            {
                value: 'Quattordio',
                label: 'Quattordio'
            },
            {
                value: 'Quattro Castella',
                label: 'Quattro Castella'
            },
            {
                value: 'Quero Vas',
                label: 'Quero Vas'
            },
            {
                value: 'Quiliano',
                label: 'Quiliano'
            },
            {
                value: 'Quincinetto',
                label: 'Quincinetto'
            },
            {
                value: 'Quindici',
                label: 'Quindici'
            },
            {
                value: 'Quingentole',
                label: 'Quingentole'
            },
            {
                value: 'Quintano',
                label: 'Quintano'
            },
            {
                value: 'Quinto di Treviso',
                label: 'Quinto di Treviso'
            },
            {
                value: 'Quinto Vercellese',
                label: 'Quinto Vercellese'
            },
            {
                value: 'Quinto Vicentino',
                label: 'Quinto Vicentino'
            },
            {
                value: 'Quinzano d\'Oglio',
                label: 'Quinzano d\'Oglio'
            },
            {
                value: 'Quistello',
                label: 'Quistello'
            },
            {
                value: 'Rabbi',
                label: 'Rabbi'
            },
            {
                value: 'Racale',
                label: 'Racale'
            },
            {
                value: 'Racalmuto',
                label: 'Racalmuto'
            },
            {
                value: 'Racconigi',
                label: 'Racconigi'
            },
            {
                value: 'Raccuja',
                label: 'Raccuja'
            },
            {
                value: 'Racines',
                label: 'Racines'
            },
            {
                value: 'Radda in Chianti',
                label: 'Radda in Chianti'
            },
            {
                value: 'Raddusa',
                label: 'Raddusa'
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
                value: 'Raffadali',
                label: 'Raffadali'
            },
            {
                value: 'Ragalna',
                label: 'Ragalna'
            },
            {
                value: 'Ragogna',
                label: 'Ragogna'
            },
            {
                value: 'Ragusa',
                label: 'Ragusa'
            },
            {
                value: 'Raiano',
                label: 'Raiano'
            },
            {
                value: 'Ramacca',
                label: 'Ramacca'
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
                value: 'Randazzo',
                label: 'Randazzo'
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
                value: 'Ranzo',
                label: 'Ranzo'
            },
            {
                value: 'Rapagnano',
                label: 'Rapagnano'
            },
            {
                value: 'Rapallo',
                label: 'Rapallo'
            },
            {
                value: 'Rapino',
                label: 'Rapino'
            },
            {
                value: 'Rapolano Terme',
                label: 'Rapolano Terme'
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
                value: 'Rassa',
                label: 'Rassa'
            },
            {
                value: 'Rasun-Anterselva',
                label: 'Rasun-Anterselva'
            },
            {
                value: 'Rasura',
                label: 'Rasura'
            },
            {
                value: 'Ravanusa',
                label: 'Ravanusa'
            },
            {
                value: 'Ravarino',
                label: 'Ravarino'
            },
            {
                value: 'Ravascletto',
                label: 'Ravascletto'
            },
            {
                value: 'Ravello',
                label: 'Ravello'
            },
            {
                value: 'Ravenna',
                label: 'Ravenna'
            },
            {
                value: 'Raveo',
                label: 'Raveo'
            },
            {
                value: 'Raviscanina',
                label: 'Raviscanina'
            },
            {
                value: 'Re',
                label: 'Re'
            },
            {
                value: 'Rea',
                label: 'Rea'
            },
            {
                value: 'Realmonte',
                label: 'Realmonte'
            },
            {
                value: 'Reana del Rojale',
                label: 'Reana del Rojale'
            },
            {
                value: 'Reano',
                label: 'Reano'
            },
            {
                value: 'Recale',
                label: 'Recale'
            },
            {
                value: 'Recanati',
                label: 'Recanati'
            },
            {
                value: 'Recco',
                label: 'Recco'
            },
            {
                value: 'Recetto',
                label: 'Recetto'
            },
            {
                value: 'Recoaro Terme',
                label: 'Recoaro Terme'
            },
            {
                value: 'Redavalle',
                label: 'Redavalle'
            },
            {
                value: 'Redondesco',
                label: 'Redondesco'
            },
            {
                value: 'Refrancore',
                label: 'Refrancore'
            },
            {
                value: 'Refrontolo',
                label: 'Refrontolo'
            },
            {
                value: 'Regalbuto',
                label: 'Regalbuto'
            },
            {
                value: 'Reggello',
                label: 'Reggello'
            },
            {
                value: 'Reggio di Calabria',
                label: 'Reggio di Calabria'
            },
            {
                value: 'Reggio nell\'Emilia',
                label: 'Reggio nell\'Emilia'
            },
            {
                value: 'Reggiolo',
                label: 'Reggiolo'
            },
            {
                value: 'Reino',
                label: 'Reino'
            },
            {
                value: 'Reitano',
                label: 'Reitano'
            },
            {
                value: 'Remanzacco',
                label: 'Remanzacco'
            },
            {
                value: 'Remedello',
                label: 'Remedello'
            },
            {
                value: 'Renate',
                label: 'Renate'
            },
            {
                value: 'Rende',
                label: 'Rende'
            },
            {
                value: 'Renon',
                label: 'Renon'
            },
            {
                value: 'Resana',
                label: 'Resana'
            },
            {
                value: 'Rescaldina',
                label: 'Rescaldina'
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
                value: 'Resuttano',
                label: 'Resuttano'
            },
            {
                value: 'Retorbido',
                label: 'Retorbido'
            },
            {
                value: 'Revello',
                label: 'Revello'
            },
            {
                value: 'Revigliasco d\'Asti',
                label: 'Revigliasco d\'Asti'
            },
            {
                value: 'Revine Lago',
                label: 'Revine Lago'
            },
            {
                value: 'Rezzago',
                label: 'Rezzago'
            },
            {
                value: 'Rezzato',
                label: 'Rezzato'
            },
            {
                value: 'Rezzo',
                label: 'Rezzo'
            },
            {
                value: 'Rezzoaglio',
                label: 'Rezzoaglio'
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
                value: 'Rho',
                label: 'Rho'
            },
            {
                value: 'Riace',
                label: 'Riace'
            },
            {
                value: 'Rialto',
                label: 'Rialto'
            },
            {
                value: 'Riano',
                label: 'Riano'
            },
            {
                value: 'Riardo',
                label: 'Riardo'
            },
            {
                value: 'Ribera',
                label: 'Ribera'
            },
            {
                value: 'Ribordone',
                label: 'Ribordone'
            },
            {
                value: 'Ricadi',
                label: 'Ricadi'
            },
            {
                value: 'Ricaldone',
                label: 'Ricaldone'
            },
            {
                value: 'Riccia',
                label: 'Riccia'
            },
            {
                value: 'Riccione',
                label: 'Riccione'
            },
            {
                value: 'Riccò del Golfo di Spezia',
                label: 'Riccò del Golfo di Spezia'
            },
            {
                value: 'Ricengo',
                label: 'Ricengo'
            },
            {
                value: 'Ricigliano',
                label: 'Ricigliano'
            },
            {
                value: 'Riese Pio X',
                label: 'Riese Pio X'
            },
            {
                value: 'Riesi',
                label: 'Riesi'
            },
            {
                value: 'Rieti',
                label: 'Rieti'
            },
            {
                value: 'Rifiano',
                label: 'Rifiano'
            },
            {
                value: 'Rifreddo',
                label: 'Rifreddo'
            },
            {
                value: 'Rignano Flaminio',
                label: 'Rignano Flaminio'
            },
            {
                value: 'Rignano Garganico',
                label: 'Rignano Garganico'
            },
            {
                value: 'Rignano sull\'Arno',
                label: 'Rignano sull\'Arno'
            },
            {
                value: 'Rigolato',
                label: 'Rigolato'
            },
            {
                value: 'Rimella',
                label: 'Rimella'
            },
            {
                value: 'Rimini',
                label: 'Rimini'
            },
            {
                value: 'Rio',
                label: 'Rio'
            },
            {
                value: 'Rio di Pusteria',
                label: 'Rio di Pusteria'
            },
            {
                value: 'Rio Saliceto',
                label: 'Rio Saliceto'
            },
            {
                value: 'Riofreddo',
                label: 'Riofreddo'
            },
            {
                value: 'Riola Sardo',
                label: 'Riola Sardo'
            },
            {
                value: 'Riolo Terme',
                label: 'Riolo Terme'
            },
            {
                value: 'Riolunato',
                label: 'Riolunato'
            },
            {
                value: 'Riomaggiore',
                label: 'Riomaggiore'
            },
            {
                value: 'Rionero in Vulture',
                label: 'Rionero in Vulture'
            },
            {
                value: 'Rionero Sannitico',
                label: 'Rionero Sannitico'
            },
            {
                value: 'Ripa Teatina',
                label: 'Ripa Teatina'
            },
            {
                value: 'Ripabottoni',
                label: 'Ripabottoni'
            },
            {
                value: 'Ripacandida',
                label: 'Ripacandida'
            },
            {
                value: 'Ripalimosani',
                label: 'Ripalimosani'
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
                value: 'Riparbella',
                label: 'Riparbella'
            },
            {
                value: 'Ripatransone',
                label: 'Ripatransone'
            },
            {
                value: 'Ripe San Ginesio',
                label: 'Ripe San Ginesio'
            },
            {
                value: 'Ripi',
                label: 'Ripi'
            },
            {
                value: 'Riposto',
                label: 'Riposto'
            },
            {
                value: 'Rittana',
                label: 'Rittana'
            },
            {
                value: 'Riva del Garda',
                label: 'Riva del Garda'
            },
            {
                value: 'Riva del Po',
                label: 'Riva del Po'
            },
            {
                value: 'Riva di Solto',
                label: 'Riva di Solto'
            },
            {
                value: 'Riva Ligure',
                label: 'Riva Ligure'
            },
            {
                value: 'Riva presso Chieri',
                label: 'Riva presso Chieri'
            },
            {
                value: 'Rivalba',
                label: 'Rivalba'
            },
            {
                value: 'Rivalta Bormida',
                label: 'Rivalta Bormida'
            },
            {
                value: 'Rivalta di Torino',
                label: 'Rivalta di Torino'
            },
            {
                value: 'Rivamonte Agordino',
                label: 'Rivamonte Agordino'
            },
            {
                value: 'Rivanazzano Terme',
                label: 'Rivanazzano Terme'
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
                value: 'Rivarolo del Re ed Uniti',
                label: 'Rivarolo del Re ed Uniti'
            },
            {
                value: 'Rivarolo Mantovano',
                label: 'Rivarolo Mantovano'
            },
            {
                value: 'Rivarone',
                label: 'Rivarone'
            },
            {
                value: 'Rivarossa',
                label: 'Rivarossa'
            },
            {
                value: 'Rive',
                label: 'Rive'
            },
            {
                value: 'Rive d\'Arcano',
                label: 'Rive d\'Arcano'
            },
            {
                value: 'Rivello',
                label: 'Rivello'
            },
            {
                value: 'Rivergaro',
                label: 'Rivergaro'
            },
            {
                value: 'Rivignano Teor',
                label: 'Rivignano Teor'
            },
            {
                value: 'Rivisondoli',
                label: 'Rivisondoli'
            },
            {
                value: 'Rivodutri',
                label: 'Rivodutri'
            },
            {
                value: 'Rivoli',
                label: 'Rivoli'
            },
            {
                value: 'Rivoli Veronese',
                label: 'Rivoli Veronese'
            },
            {
                value: 'Rivolta d\'Adda',
                label: 'Rivolta d\'Adda'
            },
            {
                value: 'Rizziconi',
                label: 'Rizziconi'
            },
            {
                value: 'Roana',
                label: 'Roana'
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
                value: 'Roasio',
                label: 'Roasio'
            },
            {
                value: 'Roatto',
                label: 'Roatto'
            },
            {
                value: 'Robassomero',
                label: 'Robassomero'
            },
            {
                value: 'Robbiate',
                label: 'Robbiate'
            },
            {
                value: 'Robbio',
                label: 'Robbio'
            },
            {
                value: 'Robecchetto con Induno',
                label: 'Robecchetto con Induno'
            },
            {
                value: 'Robecco d\'Oglio',
                label: 'Robecco d\'Oglio'
            },
            {
                value: 'Robecco Pavese',
                label: 'Robecco Pavese'
            },
            {
                value: 'Robecco sul Naviglio',
                label: 'Robecco sul Naviglio'
            },
            {
                value: 'Robella',
                label: 'Robella'
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
                value: 'Rocca Canavese',
                label: 'Rocca Canavese'
            },
            {
                value: 'Rocca Canterano',
                label: 'Rocca Canterano'
            },
            {
                value: 'Rocca Cigliè',
                label: 'Rocca Cigliè'
            },
            {
                value: 'Rocca d\'Arazzo',
                label: 'Rocca d\'Arazzo'
            },
            {
                value: 'Rocca d\'Arce',
                label: 'Rocca d\'Arce'
            },
            {
                value: 'Rocca d\'Evandro',
                label: 'Rocca d\'Evandro'
            },
            {
                value: 'Rocca de\' Baldi',
                label: 'Rocca de\' Baldi'
            },
            {
                value: 'Rocca de\' Giorgi',
                label: 'Rocca de\' Giorgi'
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
                value: 'Rocca di Cave',
                label: 'Rocca di Cave'
            },
            {
                value: 'Rocca di Mezzo',
                label: 'Rocca di Mezzo'
            },
            {
                value: 'Rocca di Neto',
                label: 'Rocca di Neto'
            },
            {
                value: 'Rocca di Papa',
                label: 'Rocca di Papa'
            },
            {
                value: 'Rocca Grimalda',
                label: 'Rocca Grimalda'
            },
            {
                value: 'Rocca Imperiale',
                label: 'Rocca Imperiale'
            },
            {
                value: 'Rocca Massima',
                label: 'Rocca Massima'
            },
            {
                value: 'Rocca Pia',
                label: 'Rocca Pia'
            },
            {
                value: 'Rocca Pietore',
                label: 'Rocca Pietore'
            },
            {
                value: 'Rocca Priora',
                label: 'Rocca Priora'
            },
            {
                value: 'Rocca San Casciano',
                label: 'Rocca San Casciano'
            },
            {
                value: 'Rocca San Felice',
                label: 'Rocca San Felice'
            },
            {
                value: 'Rocca San Giovanni',
                label: 'Rocca San Giovanni'
            },
            {
                value: 'Rocca Santa Maria',
                label: 'Rocca Santa Maria'
            },
            {
                value: 'Rocca Santo Stefano',
                label: 'Rocca Santo Stefano'
            },
            {
                value: 'Rocca Sinibalda',
                label: 'Rocca Sinibalda'
            },
            {
                value: 'Rocca Susella',
                label: 'Rocca Susella'
            },
            {
                value: 'Roccabascerana',
                label: 'Roccabascerana'
            },
            {
                value: 'Roccabernarda',
                label: 'Roccabernarda'
            },
            {
                value: 'Roccabianca',
                label: 'Roccabianca'
            },
            {
                value: 'Roccabruna',
                label: 'Roccabruna'
            },
            {
                value: 'Roccacasale',
                label: 'Roccacasale'
            },
            {
                value: 'Roccadaspide',
                label: 'Roccadaspide'
            },
            {
                value: 'Roccafiorita',
                label: 'Roccafiorita'
            },
            {
                value: 'Roccafluvione',
                label: 'Roccafluvione'
            },
            {
                value: 'Roccaforte del Greco',
                label: 'Roccaforte del Greco'
            },
            {
                value: 'Roccaforte Ligure',
                label: 'Roccaforte Ligure'
            },
            {
                value: 'Roccaforte Mondovì',
                label: 'Roccaforte Mondovì'
            },
            {
                value: 'Roccaforzata',
                label: 'Roccaforzata'
            },
            {
                value: 'Roccafranca',
                label: 'Roccafranca'
            },
            {
                value: 'Roccagiovine',
                label: 'Roccagiovine'
            },
            {
                value: 'Roccagloriosa',
                label: 'Roccagloriosa'
            },
            {
                value: 'Roccagorga',
                label: 'Roccagorga'
            },
            {
                value: 'Roccalbegna',
                label: 'Roccalbegna'
            },
            {
                value: 'Roccalumera',
                label: 'Roccalumera'
            },
            {
                value: 'Roccamandolfi',
                label: 'Roccamandolfi'
            },
            {
                value: 'Roccamena',
                label: 'Roccamena'
            },
            {
                value: 'Roccamonfina',
                label: 'Roccamonfina'
            },
            {
                value: 'Roccamontepiano',
                label: 'Roccamontepiano'
            },
            {
                value: 'Roccamorice',
                label: 'Roccamorice'
            },
            {
                value: 'Roccanova',
                label: 'Roccanova'
            },
            {
                value: 'Roccantica',
                label: 'Roccantica'
            },
            {
                value: 'Roccapalumba',
                label: 'Roccapalumba'
            },
            {
                value: 'Roccapiemonte',
                label: 'Roccapiemonte'
            },
            {
                value: 'Roccarainola',
                label: 'Roccarainola'
            },
            {
                value: 'Roccaraso',
                label: 'Roccaraso'
            },
            {
                value: 'Roccaromana',
                label: 'Roccaromana'
            },
            {
                value: 'Roccascalegna',
                label: 'Roccascalegna'
            },
            {
                value: 'Roccasecca',
                label: 'Roccasecca'
            },
            {
                value: 'Roccasecca dei Volsci',
                label: 'Roccasecca dei Volsci'
            },
            {
                value: 'Roccasicura',
                label: 'Roccasicura'
            },
            {
                value: 'Roccasparvera',
                label: 'Roccasparvera'
            },
            {
                value: 'Roccaspinalveti',
                label: 'Roccaspinalveti'
            },
            {
                value: 'Roccastrada',
                label: 'Roccastrada'
            },
            {
                value: 'Roccavaldina',
                label: 'Roccavaldina'
            },
            {
                value: 'Roccaverano',
                label: 'Roccaverano'
            },
            {
                value: 'Roccavignale',
                label: 'Roccavignale'
            },
            {
                value: 'Roccavione',
                label: 'Roccavione'
            },
            {
                value: 'Roccavivara',
                label: 'Roccavivara'
            },
            {
                value: 'Roccella Ionica',
                label: 'Roccella Ionica'
            },
            {
                value: 'Roccella Valdemone',
                label: 'Roccella Valdemone'
            },
            {
                value: 'Rocchetta a Volturno',
                label: 'Rocchetta a Volturno'
            },
            {
                value: 'Rocchetta Belbo',
                label: 'Rocchetta Belbo'
            },
            {
                value: 'Rocchetta di Vara',
                label: 'Rocchetta di Vara'
            },
            {
                value: 'Rocchetta e Croce',
                label: 'Rocchetta e Croce'
            },
            {
                value: 'Rocchetta Ligure',
                label: 'Rocchetta Ligure'
            },
            {
                value: 'Rocchetta Nervina',
                label: 'Rocchetta Nervina'
            },
            {
                value: 'Rocchetta Palafea',
                label: 'Rocchetta Palafea'
            },
            {
                value: 'Rocchetta Sant\'Antonio',
                label: 'Rocchetta Sant\'Antonio'
            },
            {
                value: 'Rocchetta Tanaro',
                label: 'Rocchetta Tanaro'
            },
            {
                value: 'Rodano',
                label: 'Rodano'
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
                value: 'Rodengo',
                label: 'Rodengo'
            },
            {
                value: 'Rodengo Saiano',
                label: 'Rodengo Saiano'
            },
            {
                value: 'Rodero',
                label: 'Rodero'
            },
            {
                value: 'Rodi Garganico',
                label: 'Rodi Garganico'
            },
            {
                value: 'Rodì Milici',
                label: 'Rodì Milici'
            },
            {
                value: 'Rodigo',
                label: 'Rodigo'
            },
            {
                value: 'Roè Volciano',
                label: 'Roè Volciano'
            },
            {
                value: 'Rofrano',
                label: 'Rofrano'
            },
            {
                value: 'Rogeno',
                label: 'Rogeno'
            },
            {
                value: 'Roggiano Gravina',
                label: 'Roggiano Gravina'
            },
            {
                value: 'Roghudi',
                label: 'Roghudi'
            },
            {
                value: 'Rogliano',
                label: 'Rogliano'
            },
            {
                value: 'Rognano',
                label: 'Rognano'
            },
            {
                value: 'Rogno',
                label: 'Rogno'
            },
            {
                value: 'Rogolo',
                label: 'Rogolo'
            },
            {
                value: 'Roiate',
                label: 'Roiate'
            },
            {
                value: 'Roio del Sangro',
                label: 'Roio del Sangro'
            },
            {
                value: 'Roisan',
                label: 'Roisan'
            },
            {
                value: 'Roletto',
                label: 'Roletto'
            },
            {
                value: 'Rolo',
                label: 'Rolo'
            },
            {
                value: 'Roma',
                label: 'Roma'
            },
            {
                value: 'Romagnano al Monte',
                label: 'Romagnano al Monte'
            },
            {
                value: 'Romagnano Sesia',
                label: 'Romagnano Sesia'
            },
            {
                value: 'Romagnese',
                label: 'Romagnese'
            },
            {
                value: 'Romana',
                label: 'Romana'
            },
            {
                value: 'Romanengo',
                label: 'Romanengo'
            },
            {
                value: 'Romano Canavese',
                label: 'Romano Canavese'
            },
            {
                value: 'Romano d\'Ezzelino',
                label: 'Romano d\'Ezzelino'
            },
            {
                value: 'Romano di Lombardia',
                label: 'Romano di Lombardia'
            },
            {
                value: 'Romans d\'Isonzo',
                label: 'Romans d\'Isonzo'
            },
            {
                value: 'Rombiolo',
                label: 'Rombiolo'
            },
            {
                value: 'Romeno',
                label: 'Romeno'
            },
            {
                value: 'Romentino',
                label: 'Romentino'
            },
            {
                value: 'Rometta',
                label: 'Rometta'
            },
            {
                value: 'Ronago',
                label: 'Ronago'
            },
            {
                value: 'Roncà',
                label: 'Roncà'
            },
            {
                value: 'Roncade',
                label: 'Roncade'
            },
            {
                value: 'Roncadelle',
                label: 'Roncadelle'
            },
            {
                value: 'Roncaro',
                label: 'Roncaro'
            },
            {
                value: 'Roncegno Terme',
                label: 'Roncegno Terme'
            },
            {
                value: 'Roncello',
                label: 'Roncello'
            },
            {
                value: 'Ronchi dei Legionari',
                label: 'Ronchi dei Legionari'
            },
            {
                value: 'Ronchi Valsugana',
                label: 'Ronchi Valsugana'
            },
            {
                value: 'Ronchis',
                label: 'Ronchis'
            },
            {
                value: 'Ronciglione',
                label: 'Ronciglione'
            },
            {
                value: 'Ronco all\'Adige',
                label: 'Ronco all\'Adige'
            },
            {
                value: 'Ronco Biellese',
                label: 'Ronco Biellese'
            },
            {
                value: 'Ronco Briantino',
                label: 'Ronco Briantino'
            },
            {
                value: 'Ronco Canavese',
                label: 'Ronco Canavese'
            },
            {
                value: 'Ronco Scrivia',
                label: 'Ronco Scrivia'
            },
            {
                value: 'Roncobello',
                label: 'Roncobello'
            },
            {
                value: 'Roncoferraro',
                label: 'Roncoferraro'
            },
            {
                value: 'Roncofreddo',
                label: 'Roncofreddo'
            },
            {
                value: 'Roncola',
                label: 'Roncola'
            },
            {
                value: 'Rondanina',
                label: 'Rondanina'
            },
            {
                value: 'Rondissone',
                label: 'Rondissone'
            },
            {
                value: 'Ronsecco',
                label: 'Ronsecco'
            },
            {
                value: 'Ronzo-Chienis',
                label: 'Ronzo-Chienis'
            },
            {
                value: 'Ronzone',
                label: 'Ronzone'
            },
            {
                value: 'Roppolo',
                label: 'Roppolo'
            },
            {
                value: 'Rorà',
                label: 'Rorà'
            },
            {
                value: 'Rosà',
                label: 'Rosà'
            },
            {
                value: 'Rosarno',
                label: 'Rosarno'
            },
            {
                value: 'Rosasco',
                label: 'Rosasco'
            },
            {
                value: 'Rosate',
                label: 'Rosate'
            },
            {
                value: 'Rosazza',
                label: 'Rosazza'
            },
            {
                value: 'Rosciano',
                label: 'Rosciano'
            },
            {
                value: 'Roscigno',
                label: 'Roscigno'
            },
            {
                value: 'Rose',
                label: 'Rose'
            },
            {
                value: 'Rosello',
                label: 'Rosello'
            },
            {
                value: 'Roseto Capo Spulico',
                label: 'Roseto Capo Spulico'
            },
            {
                value: 'Roseto degli Abruzzi',
                label: 'Roseto degli Abruzzi'
            },
            {
                value: 'Roseto Valfortore',
                label: 'Roseto Valfortore'
            },
            {
                value: 'Rosignano Marittimo',
                label: 'Rosignano Marittimo'
            },
            {
                value: 'Rosignano Monferrato',
                label: 'Rosignano Monferrato'
            },
            {
                value: 'Rosolina',
                label: 'Rosolina'
            },
            {
                value: 'Rosolini',
                label: 'Rosolini'
            },
            {
                value: 'Rosora',
                label: 'Rosora'
            },
            {
                value: 'Rossa',
                label: 'Rossa'
            },
            {
                value: 'Rossana',
                label: 'Rossana'
            },
            {
                value: 'Rossano Veneto',
                label: 'Rossano Veneto'
            },
            {
                value: 'Rossiglione',
                label: 'Rossiglione'
            },
            {
                value: 'Rosta',
                label: 'Rosta'
            },
            {
                value: 'Rota d\'Imagna',
                label: 'Rota d\'Imagna'
            },
            {
                value: 'Rota Greca',
                label: 'Rota Greca'
            },
            {
                value: 'Rotella',
                label: 'Rotella'
            },
            {
                value: 'Rotello',
                label: 'Rotello'
            },
            {
                value: 'Rotonda',
                label: 'Rotonda'
            },
            {
                value: 'Rotondella',
                label: 'Rotondella'
            },
            {
                value: 'Rotondi',
                label: 'Rotondi'
            },
            {
                value: 'Rottofreno',
                label: 'Rottofreno'
            },
            {
                value: 'Rotzo',
                label: 'Rotzo'
            },
            {
                value: 'Roure',
                label: 'Roure'
            },
            {
                value: 'Rovasenda',
                label: 'Rovasenda'
            },
            {
                value: 'Rovato',
                label: 'Rovato'
            },
            {
                value: 'Rovegno',
                label: 'Rovegno'
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
                value: 'Roverbella',
                label: 'Roverbella'
            },
            {
                value: 'Roverchiara',
                label: 'Roverchiara'
            },
            {
                value: 'Roverè della Luna',
                label: 'Roverè della Luna'
            },
            {
                value: 'Roverè Veronese',
                label: 'Roverè Veronese'
            },
            {
                value: 'Roveredo di Guà',
                label: 'Roveredo di Guà'
            },
            {
                value: 'Roveredo in Piano',
                label: 'Roveredo in Piano'
            },
            {
                value: 'Rovereto',
                label: 'Rovereto'
            },
            {
                value: 'Rovescala',
                label: 'Rovescala'
            },
            {
                value: 'Rovetta',
                label: 'Rovetta'
            },
            {
                value: 'Roviano',
                label: 'Roviano'
            },
            {
                value: 'Rovigo',
                label: 'Rovigo'
            },
            {
                value: 'Rovito',
                label: 'Rovito'
            },
            {
                value: 'Rovolon',
                label: 'Rovolon'
            },
            {
                value: 'Rozzano',
                label: 'Rozzano'
            },
            {
                value: 'Rubano',
                label: 'Rubano'
            },
            {
                value: 'Rubiana',
                label: 'Rubiana'
            },
            {
                value: 'Rubiera',
                label: 'Rubiera'
            },
            {
                value: 'Ruda',
                label: 'Ruda'
            },
            {
                value: 'Rudiano',
                label: 'Rudiano'
            },
            {
                value: 'Rueglio',
                label: 'Rueglio'
            },
            {
                value: 'Ruffano',
                label: 'Ruffano'
            },
            {
                value: 'Ruffia',
                label: 'Ruffia'
            },
            {
                value: 'Ruffrè-Mendola',
                label: 'Ruffrè-Mendola'
            },
            {
                value: 'Rufina',
                label: 'Rufina'
            },
            {
                value: 'Ruinas',
                label: 'Ruinas'
            },
            {
                value: 'Rumo',
                label: 'Rumo'
            },
            {
                value: 'Ruoti',
                label: 'Ruoti'
            },
            {
                value: 'Russi',
                label: 'Russi'
            },
            {
                value: 'Rutigliano',
                label: 'Rutigliano'
            },
            {
                value: 'Rutino',
                label: 'Rutino'
            },
            {
                value: 'Ruviano',
                label: 'Ruviano'
            },
            {
                value: 'Ruvo del Monte',
                label: 'Ruvo del Monte'
            },
            {
                value: 'Ruvo di Puglia',
                label: 'Ruvo di Puglia'
            },
            {
                value: 'Sabaudia',
                label: 'Sabaudia'
            },
            {
                value: 'Sabbio Chiese',
                label: 'Sabbio Chiese'
            },
            {
                value: 'Sabbioneta',
                label: 'Sabbioneta'
            },
            {
                value: 'Sacco',
                label: 'Sacco'
            },
            {
                value: 'Saccolongo',
                label: 'Saccolongo'
            },
            {
                value: 'Sacile',
                label: 'Sacile'
            },
            {
                value: 'Sacrofano',
                label: 'Sacrofano'
            },
            {
                value: 'Sadali',
                label: 'Sadali'
            },
            {
                value: 'Sagama',
                label: 'Sagama'
            },
            {
                value: 'Sagliano Micca',
                label: 'Sagliano Micca'
            },
            {
                value: 'Sagrado',
                label: 'Sagrado'
            },
            {
                value: 'Sagron Mis',
                label: 'Sagron Mis'
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
                value: 'Sala Baganza',
                label: 'Sala Baganza'
            },
            {
                value: 'Sala Biellese',
                label: 'Sala Biellese'
            },
            {
                value: 'Sala Bolognese',
                label: 'Sala Bolognese'
            },
            {
                value: 'Sala Comacina',
                label: 'Sala Comacina'
            },
            {
                value: 'Sala Consilina',
                label: 'Sala Consilina'
            },
            {
                value: 'Sala Monferrato',
                label: 'Sala Monferrato'
            },
            {
                value: 'Salandra',
                label: 'Salandra'
            },
            {
                value: 'Salaparuta',
                label: 'Salaparuta'
            },
            {
                value: 'Salara',
                label: 'Salara'
            },
            {
                value: 'Salasco',
                label: 'Salasco'
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
                value: 'Salcedo',
                label: 'Salcedo'
            },
            {
                value: 'Salcito',
                label: 'Salcito'
            },
            {
                value: 'Sale',
                label: 'Sale'
            },
            {
                value: 'Sale delle Langhe',
                label: 'Sale delle Langhe'
            },
            {
                value: 'Sale Marasino',
                label: 'Sale Marasino'
            },
            {
                value: 'Sale San Giovanni',
                label: 'Sale San Giovanni'
            },
            {
                value: 'Salemi',
                label: 'Salemi'
            },
            {
                value: 'Salento',
                label: 'Salento'
            },
            {
                value: 'Salerano Canavese',
                label: 'Salerano Canavese'
            },
            {
                value: 'Salerano sul Lambro',
                label: 'Salerano sul Lambro'
            },
            {
                value: 'Salerno',
                label: 'Salerno'
            },
            {
                value: 'Salgareda',
                label: 'Salgareda'
            },
            {
                value: 'Sali Vercellese',
                label: 'Sali Vercellese'
            },
            {
                value: 'Salice Salentino',
                label: 'Salice Salentino'
            },
            {
                value: 'Saliceto',
                label: 'Saliceto'
            },
            {
                value: 'Salisano',
                label: 'Salisano'
            },
            {
                value: 'Salizzole',
                label: 'Salizzole'
            },
            {
                value: 'Salle',
                label: 'Salle'
            },
            {
                value: 'Salmour',
                label: 'Salmour'
            },
            {
                value: 'Salò',
                label: 'Salò'
            },
            {
                value: 'Salorno sulla strada del vino',
                label: 'Salorno sulla strada del vino'
            },
            {
                value: 'Salsomaggiore Terme',
                label: 'Salsomaggiore Terme'
            },
            {
                value: 'Saltrio',
                label: 'Saltrio'
            },
            {
                value: 'Saludecio',
                label: 'Saludecio'
            },
            {
                value: 'Saluggia',
                label: 'Saluggia'
            },
            {
                value: 'Salussola',
                label: 'Salussola'
            },
            {
                value: 'Saluzzo',
                label: 'Saluzzo'
            },
            {
                value: 'Salve',
                label: 'Salve'
            },
            {
                value: 'Salvirola',
                label: 'Salvirola'
            },
            {
                value: 'Salvitelle',
                label: 'Salvitelle'
            },
            {
                value: 'Salza di Pinerolo',
                label: 'Salza di Pinerolo'
            },
            {
                value: 'Salza Irpina',
                label: 'Salza Irpina'
            },
            {
                value: 'Salzano',
                label: 'Salzano'
            },
            {
                value: 'Samarate',
                label: 'Samarate'
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
                value: 'Sambuca di Sicilia',
                label: 'Sambuca di Sicilia'
            },
            {
                value: 'Sambuca Pistoiese',
                label: 'Sambuca Pistoiese'
            },
            {
                value: 'Sambuci',
                label: 'Sambuci'
            },
            {
                value: 'Sambuco',
                label: 'Sambuco'
            },
            {
                value: 'Sammichele di Bari',
                label: 'Sammichele di Bari'
            },
            {
                value: 'Samo',
                label: 'Samo'
            },
            {
                value: 'Samolaco',
                label: 'Samolaco'
            },
            {
                value: 'Samone',
                label: 'Samone'
            },
            {
                value: 'Sampeyre',
                label: 'Sampeyre'
            },
            {
                value: 'Samugheo',
                label: 'Samugheo'
            },
            {
                value: 'San Bartolomeo al Mare',
                label: 'San Bartolomeo al Mare'
            },
            {
                value: 'San Bartolomeo in Galdo',
                label: 'San Bartolomeo in Galdo'
            },
            {
                value: 'San Bartolomeo Val Cavargna',
                label: 'San Bartolomeo Val Cavargna'
            },
            {
                value: 'San Basile',
                label: 'San Basile'
            },
            {
                value: 'San Basilio',
                label: 'San Basilio'
            },
            {
                value: 'San Bassano',
                label: 'San Bassano'
            },
            {
                value: 'San Bellino',
                label: 'San Bellino'
            },
            {
                value: 'San Benedetto Belbo',
                label: 'San Benedetto Belbo'
            },
            {
                value: 'San Benedetto dei Marsi',
                label: 'San Benedetto dei Marsi'
            },
            {
                value: 'San Benedetto del Tronto',
                label: 'San Benedetto del Tronto'
            },
            {
                value: 'San Benedetto in Perillis',
                label: 'San Benedetto in Perillis'
            },
            {
                value: 'San Benedetto Po',
                label: 'San Benedetto Po'
            },
            {
                value: 'San Benedetto Ullano',
                label: 'San Benedetto Ullano'
            },
            {
                value: 'San Benedetto Val di Sambro',
                label: 'San Benedetto Val di Sambro'
            },
            {
                value: 'San Benigno Canavese',
                label: 'San Benigno Canavese'
            },
            {
                value: 'San Bernardino Verbano',
                label: 'San Bernardino Verbano'
            },
            {
                value: 'San Biagio della Cima',
                label: 'San Biagio della Cima'
            },
            {
                value: 'San Biagio di Callalta',
                label: 'San Biagio di Callalta'
            },
            {
                value: 'San Biagio Platani',
                label: 'San Biagio Platani'
            },
            {
                value: 'San Biagio Saracinisco',
                label: 'San Biagio Saracinisco'
            },
            {
                value: 'San Biase',
                label: 'San Biase'
            },
            {
                value: 'San Bonifacio',
                label: 'San Bonifacio'
            },
            {
                value: 'San Buono',
                label: 'San Buono'
            },
            {
                value: 'San Calogero',
                label: 'San Calogero'
            },
            {
                value: 'San Candido',
                label: 'San Candido'
            },
            {
                value: 'San Canzian d\'Isonzo',
                label: 'San Canzian d\'Isonzo'
            },
            {
                value: 'San Carlo Canavese',
                label: 'San Carlo Canavese'
            },
            {
                value: 'San Casciano dei Bagni',
                label: 'San Casciano dei Bagni'
            },
            {
                value: 'San Casciano in Val di Pesa',
                label: 'San Casciano in Val di Pesa'
            },
            {
                value: 'San Cassiano',
                label: 'San Cassiano'
            },
            {
                value: 'San Cataldo',
                label: 'San Cataldo'
            },
            {
                value: 'San Cesareo',
                label: 'San Cesareo'
            },
            {
                value: 'San Cesario di Lecce',
                label: 'San Cesario di Lecce'
            },
            {
                value: 'San Cesario sul Panaro',
                label: 'San Cesario sul Panaro'
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
                value: 'San Cipirello',
                label: 'San Cipirello'
            },
            {
                value: 'San Cipriano d\'Aversa',
                label: 'San Cipriano d\'Aversa'
            },
            {
                value: 'San Cipriano Picentino',
                label: 'San Cipriano Picentino'
            },
            {
                value: 'San Cipriano Po',
                label: 'San Cipriano Po'
            },
            {
                value: 'San Clemente',
                label: 'San Clemente'
            },
            {
                value: 'San Colombano al Lambro',
                label: 'San Colombano al Lambro'
            },
            {
                value: 'San Colombano Belmonte',
                label: 'San Colombano Belmonte'
            },
            {
                value: 'San Colombano Certenoli',
                label: 'San Colombano Certenoli'
            },
            {
                value: 'San Cono',
                label: 'San Cono'
            },
            {
                value: 'San Cosmo Albanese',
                label: 'San Cosmo Albanese'
            },
            {
                value: 'San Costantino Albanese',
                label: 'San Costantino Albanese'
            },
            {
                value: 'San Costantino Calabro',
                label: 'San Costantino Calabro'
            },
            {
                value: 'San Costanzo',
                label: 'San Costanzo'
            },
            {
                value: 'San Cristoforo',
                label: 'San Cristoforo'
            },
            {
                value: 'San Damiano al Colle',
                label: 'San Damiano al Colle'
            },
            {
                value: 'San Damiano d\'Asti',
                label: 'San Damiano d\'Asti'
            },
            {
                value: 'San Damiano Macra',
                label: 'San Damiano Macra'
            },
            {
                value: 'San Daniele del Friuli',
                label: 'San Daniele del Friuli'
            },
            {
                value: 'San Daniele Po',
                label: 'San Daniele Po'
            },
            {
                value: 'San Demetrio Corone',
                label: 'San Demetrio Corone'
            },
            {
                value: 'San Demetrio ne\' Vestini',
                label: 'San Demetrio ne\' Vestini'
            },
            {
                value: 'San Didero',
                label: 'San Didero'
            },
            {
                value: 'San Donà di Piave',
                label: 'San Donà di Piave'
            },
            {
                value: 'San Donaci',
                label: 'San Donaci'
            },
            {
                value: 'San Donato di Lecce',
                label: 'San Donato di Lecce'
            },
            {
                value: 'San Donato di Ninea',
                label: 'San Donato di Ninea'
            },
            {
                value: 'San Donato Milanese',
                label: 'San Donato Milanese'
            },
            {
                value: 'San Donato Val di Comino',
                label: 'San Donato Val di Comino'
            },
            {
                value: 'San Dorligo della Valle',
                label: 'San Dorligo della Valle'
            },
            {
                value: 'San Fele',
                label: 'San Fele'
            },
            {
                value: 'San Felice a Cancello',
                label: 'San Felice a Cancello'
            },
            {
                value: 'San Felice Circeo',
                label: 'San Felice Circeo'
            },
            {
                value: 'San Felice del Benaco',
                label: 'San Felice del Benaco'
            },
            {
                value: 'San Felice del Molise',
                label: 'San Felice del Molise'
            },
            {
                value: 'San Felice sul Panaro',
                label: 'San Felice sul Panaro'
            },
            {
                value: 'San Ferdinando',
                label: 'San Ferdinando'
            },
            {
                value: 'San Ferdinando di Puglia',
                label: 'San Ferdinando di Puglia'
            },
            {
                value: 'San Fermo della Battaglia',
                label: 'San Fermo della Battaglia'
            },
            {
                value: 'San Fili',
                label: 'San Fili'
            },
            {
                value: 'San Filippo del Mela',
                label: 'San Filippo del Mela'
            },
            {
                value: 'San Fior',
                label: 'San Fior'
            },
            {
                value: 'San Fiorano',
                label: 'San Fiorano'
            },
            {
                value: 'San Floriano del Collio',
                label: 'San Floriano del Collio'
            },
            {
                value: 'San Floro',
                label: 'San Floro'
            },
            {
                value: 'San Francesco al Campo',
                label: 'San Francesco al Campo'
            },
            {
                value: 'San Fratello',
                label: 'San Fratello'
            },
            {
                value: 'San Gavino Monreale',
                label: 'San Gavino Monreale'
            },
            {
                value: 'San Gemini',
                label: 'San Gemini'
            },
            {
                value: 'San Genesio Atesino',
                label: 'San Genesio Atesino'
            },
            {
                value: 'San Genesio ed Uniti',
                label: 'San Genesio ed Uniti'
            },
            {
                value: 'San Gennaro Vesuviano',
                label: 'San Gennaro Vesuviano'
            },
            {
                value: 'San Germano Chisone',
                label: 'San Germano Chisone'
            },
            {
                value: 'San Germano Vercellese',
                label: 'San Germano Vercellese'
            },
            {
                value: 'San Gervasio Bresciano',
                label: 'San Gervasio Bresciano'
            },
            {
                value: 'San Giacomo degli Schiavoni',
                label: 'San Giacomo degli Schiavoni'
            },
            {
                value: 'San Giacomo delle Segnate',
                label: 'San Giacomo delle Segnate'
            },
            {
                value: 'San Giacomo Filippo',
                label: 'San Giacomo Filippo'
            },
            {
                value: 'San Giacomo Vercellese',
                label: 'San Giacomo Vercellese'
            },
            {
                value: 'San Gillio',
                label: 'San Gillio'
            },
            {
                value: 'San Gimignano',
                label: 'San Gimignano'
            },
            {
                value: 'San Ginesio',
                label: 'San Ginesio'
            },
            {
                value: 'San Giorgio a Cremano',
                label: 'San Giorgio a Cremano'
            },
            {
                value: 'San Giorgio a Liri',
                label: 'San Giorgio a Liri'
            },
            {
                value: 'San Giorgio Albanese',
                label: 'San Giorgio Albanese'
            },
            {
                value: 'San Giorgio Bigarello',
                label: 'San Giorgio Bigarello'
            },
            {
                value: 'San Giorgio Canavese',
                label: 'San Giorgio Canavese'
            },
            {
                value: 'San Giorgio del Sannio',
                label: 'San Giorgio del Sannio'
            },
            {
                value: 'San Giorgio della Richinvelda',
                label: 'San Giorgio della Richinvelda'
            },
            {
                value: 'San Giorgio delle Pertiche',
                label: 'San Giorgio delle Pertiche'
            },
            {
                value: 'San Giorgio di Lomellina',
                label: 'San Giorgio di Lomellina'
            },
            {
                value: 'San Giorgio di Nogaro',
                label: 'San Giorgio di Nogaro'
            },
            {
                value: 'San Giorgio di Piano',
                label: 'San Giorgio di Piano'
            },
            {
                value: 'San Giorgio in Bosco',
                label: 'San Giorgio in Bosco'
            },
            {
                value: 'San Giorgio Ionico',
                label: 'San Giorgio Ionico'
            },
            {
                value: 'San Giorgio La Molara',
                label: 'San Giorgio La Molara'
            },
            {
                value: 'San Giorgio Lucano',
                label: 'San Giorgio Lucano'
            },
            {
                value: 'San Giorgio Monferrato',
                label: 'San Giorgio Monferrato'
            },
            {
                value: 'San Giorgio Morgeto',
                label: 'San Giorgio Morgeto'
            },
            {
                value: 'San Giorgio Piacentino',
                label: 'San Giorgio Piacentino'
            },
            {
                value: 'San Giorgio Scarampi',
                label: 'San Giorgio Scarampi'
            },
            {
                value: 'San Giorgio su Legnano',
                label: 'San Giorgio su Legnano'
            },
            {
                value: 'San Giorio di Susa',
                label: 'San Giorio di Susa'
            },
            {
                value: 'San Giovanni a Piro',
                label: 'San Giovanni a Piro'
            },
            {
                value: 'San Giovanni al Natisone',
                label: 'San Giovanni al Natisone'
            },
            {
                value: 'San Giovanni Bianco',
                label: 'San Giovanni Bianco'
            },
            {
                value: 'San Giovanni del Dosso',
                label: 'San Giovanni del Dosso'
            },
            {
                value: 'San Giovanni di Fassa',
                label: 'San Giovanni di Fassa'
            },
            {
                value: 'San Giovanni di Gerace',
                label: 'San Giovanni di Gerace'
            },
            {
                value: 'San Giovanni Gemini',
                label: 'San Giovanni Gemini'
            },
            {
                value: 'San Giovanni Ilarione',
                label: 'San Giovanni Ilarione'
            },
            {
                value: 'San Giovanni in Croce',
                label: 'San Giovanni in Croce'
            },
            {
                value: 'San Giovanni in Fiore',
                label: 'San Giovanni in Fiore'
            },
            {
                value: 'San Giovanni in Galdo',
                label: 'San Giovanni in Galdo'
            },
            {
                value: 'San Giovanni in Marignano',
                label: 'San Giovanni in Marignano'
            },
            {
                value: 'San Giovanni in Persiceto',
                label: 'San Giovanni in Persiceto'
            },
            {
                value: 'San Giovanni Incarico',
                label: 'San Giovanni Incarico'
            },
            {
                value: 'San Giovanni la Punta',
                label: 'San Giovanni la Punta'
            },
            {
                value: 'San Giovanni Lipioni',
                label: 'San Giovanni Lipioni'
            },
            {
                value: 'San Giovanni Lupatoto',
                label: 'San Giovanni Lupatoto'
            },
            {
                value: 'San Giovanni Rotondo',
                label: 'San Giovanni Rotondo'
            },
            {
                value: 'San Giovanni Suergiu',
                label: 'San Giovanni Suergiu'
            },
            {
                value: 'San Giovanni Teatino',
                label: 'San Giovanni Teatino'
            },
            {
                value: 'San Giovanni Valdarno',
                label: 'San Giovanni Valdarno'
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
                value: 'San Giuliano Milanese',
                label: 'San Giuliano Milanese'
            },
            {
                value: 'San Giuliano Terme',
                label: 'San Giuliano Terme'
            },
            {
                value: 'San Giuseppe Jato',
                label: 'San Giuseppe Jato'
            },
            {
                value: 'San Giuseppe Vesuviano',
                label: 'San Giuseppe Vesuviano'
            },
            {
                value: 'San Giustino',
                label: 'San Giustino'
            },
            {
                value: 'San Giusto Canavese',
                label: 'San Giusto Canavese'
            },
            {
                value: 'San Godenzo',
                label: 'San Godenzo'
            },
            {
                value: 'San Gregorio d\'Ippona',
                label: 'San Gregorio d\'Ippona'
            },
            {
                value: 'San Gregorio da Sassola',
                label: 'San Gregorio da Sassola'
            },
            {
                value: 'San Gregorio di Catania',
                label: 'San Gregorio di Catania'
            },
            {
                value: 'San Gregorio Magno',
                label: 'San Gregorio Magno'
            },
            {
                value: 'San Gregorio Matese',
                label: 'San Gregorio Matese'
            },
            {
                value: 'San Gregorio nelle Alpi',
                label: 'San Gregorio nelle Alpi'
            },
            {
                value: 'San Lazzaro di Savena',
                label: 'San Lazzaro di Savena'
            },
            {
                value: 'San Leo',
                label: 'San Leo'
            },
            {
                value: 'San Leonardo',
                label: 'San Leonardo'
            },
            {
                value: 'San Leonardo in Passiria',
                label: 'San Leonardo in Passiria'
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
                value: 'San Lorenzo',
                label: 'San Lorenzo'
            },
            {
                value: 'San Lorenzo al Mare',
                label: 'San Lorenzo al Mare'
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
                value: 'San Lorenzo di Sebato',
                label: 'San Lorenzo di Sebato'
            },
            {
                value: 'San Lorenzo Dorsino',
                label: 'San Lorenzo Dorsino'
            },
            {
                value: 'San Lorenzo in Campo',
                label: 'San Lorenzo in Campo'
            },
            {
                value: 'San Lorenzo Isontino',
                label: 'San Lorenzo Isontino'
            },
            {
                value: 'San Lorenzo Maggiore',
                label: 'San Lorenzo Maggiore'
            },
            {
                value: 'San Lorenzo Nuovo',
                label: 'San Lorenzo Nuovo'
            },
            {
                value: 'San Luca',
                label: 'San Luca'
            },
            {
                value: 'San Lucido',
                label: 'San Lucido'
            },
            {
                value: 'San Lupo',
                label: 'San Lupo'
            },
            {
                value: 'San Mango d\'Aquino',
                label: 'San Mango d\'Aquino'
            },
            {
                value: 'San Mango Piemonte',
                label: 'San Mango Piemonte'
            },
            {
                value: 'San Mango sul Calore',
                label: 'San Mango sul Calore'
            },
            {
                value: 'San Marcellino',
                label: 'San Marcellino'
            },
            {
                value: 'San Marcello',
                label: 'San Marcello'
            },
            {
                value: 'San Marcello Piteglio',
                label: 'San Marcello Piteglio'
            },
            {
                value: 'San Marco Argentano',
                label: 'San Marco Argentano'
            },
            {
                value: 'San Marco d\'Alunzio',
                label: 'San Marco d\'Alunzio'
            },
            {
                value: 'San Marco dei Cavoti',
                label: 'San Marco dei Cavoti'
            },
            {
                value: 'San Marco Evangelista',
                label: 'San Marco Evangelista'
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
                value: 'San Martino al Tagliamento',
                label: 'San Martino al Tagliamento'
            },
            {
                value: 'San Martino Alfieri',
                label: 'San Martino Alfieri'
            },
            {
                value: 'San Martino Buon Albergo',
                label: 'San Martino Buon Albergo'
            },
            {
                value: 'San Martino Canavese',
                label: 'San Martino Canavese'
            },
            {
                value: 'San Martino d\'Agri',
                label: 'San Martino d\'Agri'
            },
            {
                value: 'San Martino dall\'Argine',
                label: 'San Martino dall\'Argine'
            },
            {
                value: 'San Martino del Lago',
                label: 'San Martino del Lago'
            },
            {
                value: 'San Martino di Finita',
                label: 'San Martino di Finita'
            },
            {
                value: 'San Martino di Lupari',
                label: 'San Martino di Lupari'
            },
            {
                value: 'San Martino di Venezze',
                label: 'San Martino di Venezze'
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
                value: 'San Martino in Pensilis',
                label: 'San Martino in Pensilis'
            },
            {
                value: 'San Martino in Rio',
                label: 'San Martino in Rio'
            },
            {
                value: 'San Martino in Strada',
                label: 'San Martino in Strada'
            },
            {
                value: 'San Martino Sannita',
                label: 'San Martino Sannita'
            },
            {
                value: 'San Martino Siccomario',
                label: 'San Martino Siccomario'
            },
            {
                value: 'San Martino sulla Marrucina',
                label: 'San Martino sulla Marrucina'
            },
            {
                value: 'San Martino Valle Caudina',
                label: 'San Martino Valle Caudina'
            },
            {
                value: 'San Marzano di San Giuseppe',
                label: 'San Marzano di San Giuseppe'
            },
            {
                value: 'San Marzano Oliveto',
                label: 'San Marzano Oliveto'
            },
            {
                value: 'San Marzano sul Sarno',
                label: 'San Marzano sul Sarno'
            },
            {
                value: 'San Massimo',
                label: 'San Massimo'
            },
            {
                value: 'San Maurizio Canavese',
                label: 'San Maurizio Canavese'
            },
            {
                value: 'San Maurizio d\'Opaglio',
                label: 'San Maurizio d\'Opaglio'
            },
            {
                value: 'San Mauro Castelverde',
                label: 'San Mauro Castelverde'
            },
            {
                value: 'San Mauro Cilento',
                label: 'San Mauro Cilento'
            },
            {
                value: 'San Mauro di Saline',
                label: 'San Mauro di Saline'
            },
            {
                value: 'San Mauro Forte',
                label: 'San Mauro Forte'
            },
            {
                value: 'San Mauro la Bruca',
                label: 'San Mauro la Bruca'
            },
            {
                value: 'San Mauro Marchesato',
                label: 'San Mauro Marchesato'
            },
            {
                value: 'San Mauro Pascoli',
                label: 'San Mauro Pascoli'
            },
            {
                value: 'San Mauro Torinese',
                label: 'San Mauro Torinese'
            },
            {
                value: 'San Michele al Tagliamento',
                label: 'San Michele al Tagliamento'
            },
            {
                value: 'San Michele all\'Adige',
                label: 'San Michele all\'Adige'
            },
            {
                value: 'San Michele di Ganzaria',
                label: 'San Michele di Ganzaria'
            },
            {
                value: 'San Michele di Serino',
                label: 'San Michele di Serino'
            },
            {
                value: 'San Michele Mondovì',
                label: 'San Michele Mondovì'
            },
            {
                value: 'San Michele Salentino',
                label: 'San Michele Salentino'
            },
            {
                value: 'San Miniato',
                label: 'San Miniato'
            },
            {
                value: 'San Nazzaro',
                label: 'San Nazzaro'
            },
            {
                value: 'San Nazzaro Sesia',
                label: 'San Nazzaro Sesia'
            },
            {
                value: 'San Nazzaro Val Cavargna',
                label: 'San Nazzaro Val Cavargna'
            },
            {
                value: 'San Nicandro Garganico',
                label: 'San Nicandro Garganico'
            },
            {
                value: 'San Nicola Arcella',
                label: 'San Nicola Arcella'
            },
            {
                value: 'San Nicola Baronia',
                label: 'San Nicola Baronia'
            },
            {
                value: 'San Nicola da Crissa',
                label: 'San Nicola da Crissa'
            },
            {
                value: 'San Nicola dell\'Alto',
                label: 'San Nicola dell\'Alto'
            },
            {
                value: 'San Nicola la Strada',
                label: 'San Nicola la Strada'
            },
            {
                value: 'San Nicola Manfredi',
                label: 'San Nicola Manfredi'
            },
            {
                value: 'San Nicolò d\'Arcidano',
                label: 'San Nicolò d\'Arcidano'
            },
            {
                value: 'San Nicolò di Comelico',
                label: 'San Nicolò di Comelico'
            },
            {
                value: 'San Nicolò Gerrei',
                label: 'San Nicolò Gerrei'
            },
            {
                value: 'San Pancrazio',
                label: 'San Pancrazio'
            },
            {
                value: 'San Pancrazio Salentino',
                label: 'San Pancrazio Salentino'
            },
            {
                value: 'San Paolo',
                label: 'San Paolo'
            },
            {
                value: 'San Paolo Albanese',
                label: 'San Paolo Albanese'
            },
            {
                value: 'San Paolo Bel Sito',
                label: 'San Paolo Bel Sito'
            },
            {
                value: 'San Paolo d\'Argon',
                label: 'San Paolo d\'Argon'
            },
            {
                value: 'San Paolo di Civitate',
                label: 'San Paolo di Civitate'
            },
            {
                value: 'San Paolo di Jesi',
                label: 'San Paolo di Jesi'
            },
            {
                value: 'San Paolo Solbrito',
                label: 'San Paolo Solbrito'
            },
            {
                value: 'San Pellegrino Terme',
                label: 'San Pellegrino Terme'
            },
            {
                value: 'San Pier d\'Isonzo',
                label: 'San Pier d\'Isonzo'
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
                value: 'San Pietro a Maida',
                label: 'San Pietro a Maida'
            },
            {
                value: 'San Pietro al Natisone',
                label: 'San Pietro al Natisone'
            },
            {
                value: 'San Pietro al Tanagro',
                label: 'San Pietro al Tanagro'
            },
            {
                value: 'San Pietro Apostolo',
                label: 'San Pietro Apostolo'
            },
            {
                value: 'San Pietro Avellana',
                label: 'San Pietro Avellana'
            },
            {
                value: 'San Pietro Clarenza',
                label: 'San Pietro Clarenza'
            },
            {
                value: 'San Pietro di Cadore',
                label: 'San Pietro di Cadore'
            },
            {
                value: 'San Pietro di Caridà',
                label: 'San Pietro di Caridà'
            },
            {
                value: 'San Pietro di Feletto',
                label: 'San Pietro di Feletto'
            },
            {
                value: 'San Pietro di Morubio',
                label: 'San Pietro di Morubio'
            },
            {
                value: 'San Pietro in Amantea',
                label: 'San Pietro in Amantea'
            },
            {
                value: 'San Pietro in Cariano',
                label: 'San Pietro in Cariano'
            },
            {
                value: 'San Pietro in Casale',
                label: 'San Pietro in Casale'
            },
            {
                value: 'San Pietro in Cerro',
                label: 'San Pietro in Cerro'
            },
            {
                value: 'San Pietro in Gu',
                label: 'San Pietro in Gu'
            },
            {
                value: 'San Pietro in Guarano',
                label: 'San Pietro in Guarano'
            },
            {
                value: 'San Pietro in Lama',
                label: 'San Pietro in Lama'
            },
            {
                value: 'San Pietro Infine',
                label: 'San Pietro Infine'
            },
            {
                value: 'San Pietro Mosezzo',
                label: 'San Pietro Mosezzo'
            },
            {
                value: 'San Pietro Mussolino',
                label: 'San Pietro Mussolino'
            },
            {
                value: 'San Pietro Val Lemina',
                label: 'San Pietro Val Lemina'
            },
            {
                value: 'San Pietro Vernotico',
                label: 'San Pietro Vernotico'
            },
            {
                value: 'San Pietro Viminario',
                label: 'San Pietro Viminario'
            },
            {
                value: 'San Pio delle Camere',
                label: 'San Pio delle Camere'
            },
            {
                value: 'San Polo d\'Enza',
                label: 'San Polo d\'Enza'
            },
            {
                value: 'San Polo dei Cavalieri',
                label: 'San Polo dei Cavalieri'
            },
            {
                value: 'San Polo di Piave',
                label: 'San Polo di Piave'
            },
            {
                value: 'San Polo Matese',
                label: 'San Polo Matese'
            },
            {
                value: 'San Ponso',
                label: 'San Ponso'
            },
            {
                value: 'San Possidonio',
                label: 'San Possidonio'
            },
            {
                value: 'San Potito Sannitico',
                label: 'San Potito Sannitico'
            },
            {
                value: 'San Potito Ultra',
                label: 'San Potito Ultra'
            },
            {
                value: 'San Prisco',
                label: 'San Prisco'
            },
            {
                value: 'San Procopio',
                label: 'San Procopio'
            },
            {
                value: 'San Prospero',
                label: 'San Prospero'
            },
            {
                value: 'San Quirico d\'Orcia',
                label: 'San Quirico d\'Orcia'
            },
            {
                value: 'San Quirino',
                label: 'San Quirino'
            },
            {
                value: 'San Raffaele Cimena',
                label: 'San Raffaele Cimena'
            },
            {
                value: 'San Roberto',
                label: 'San Roberto'
            },
            {
                value: 'San Rocco al Porto',
                label: 'San Rocco al Porto'
            },
            {
                value: 'San Romano in Garfagnana',
                label: 'San Romano in Garfagnana'
            },
            {
                value: 'San Rufo',
                label: 'San Rufo'
            },
            {
                value: 'San Salvatore di Fitalia',
                label: 'San Salvatore di Fitalia'
            },
            {
                value: 'San Salvatore Monferrato',
                label: 'San Salvatore Monferrato'
            },
            {
                value: 'San Salvatore Telesino',
                label: 'San Salvatore Telesino'
            },
            {
                value: 'San Salvo',
                label: 'San Salvo'
            },
            {
                value: 'San Sebastiano al Vesuvio',
                label: 'San Sebastiano al Vesuvio'
            },
            {
                value: 'San Sebastiano Curone',
                label: 'San Sebastiano Curone'
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
                value: 'San Secondo Parmense',
                label: 'San Secondo Parmense'
            },
            {
                value: 'San Severino Lucano',
                label: 'San Severino Lucano'
            },
            {
                value: 'San Severino Marche',
                label: 'San Severino Marche'
            },
            {
                value: 'San Severo',
                label: 'San Severo'
            },
            {
                value: 'San Siro',
                label: 'San Siro'
            },
            {
                value: 'San Sossio Baronia',
                label: 'San Sossio Baronia'
            },
            {
                value: 'San Sostene',
                label: 'San Sostene'
            },
            {
                value: 'San Sosti',
                label: 'San Sosti'
            },
            {
                value: 'San Sperate',
                label: 'San Sperate'
            },
            {
                value: 'San Stino di Livenza',
                label: 'San Stino di Livenza'
            },
            {
                value: 'San Tammaro',
                label: 'San Tammaro'
            },
            {
                value: 'San Teodoro',
                label: 'San Teodoro'
            },
            {
                value: 'San Tomaso Agordino',
                label: 'San Tomaso Agordino'
            },
            {
                value: 'San Valentino in Abruzzo Citeriore',
                label: 'San Valentino in Abruzzo Citeriore'
            },
            {
                value: 'San Valentino Torio',
                label: 'San Valentino Torio'
            },
            {
                value: 'San Venanzo',
                label: 'San Venanzo'
            },
            {
                value: 'San Vendemiano',
                label: 'San Vendemiano'
            },
            {
                value: 'San Vero Milis',
                label: 'San Vero Milis'
            },
            {
                value: 'San Vincenzo',
                label: 'San Vincenzo'
            },
            {
                value: 'San Vincenzo La Costa',
                label: 'San Vincenzo La Costa'
            },
            {
                value: 'San Vincenzo Valle Roveto',
                label: 'San Vincenzo Valle Roveto'
            },
            {
                value: 'San Vitaliano',
                label: 'San Vitaliano'
            },
            {
                value: 'San Vito',
                label: 'San Vito'
            },
            {
                value: 'San Vito al Tagliamento',
                label: 'San Vito al Tagliamento'
            },
            {
                value: 'San Vito al Torre',
                label: 'San Vito al Torre'
            },
            {
                value: 'San Vito Chietino',
                label: 'San Vito Chietino'
            },
            {
                value: 'San Vito dei Normanni',
                label: 'San Vito dei Normanni'
            },
            {
                value: 'San Vito di Cadore',
                label: 'San Vito di Cadore'
            },
            {
                value: 'San Vito di Fagagna',
                label: 'San Vito di Fagagna'
            },
            {
                value: 'San Vito di Leguzzano',
                label: 'San Vito di Leguzzano'
            },
            {
                value: 'San Vito Lo Capo',
                label: 'San Vito Lo Capo'
            },
            {
                value: 'San Vito Romano',
                label: 'San Vito Romano'
            },
            {
                value: 'San Vito sullo Ionio',
                label: 'San Vito sullo Ionio'
            },
            {
                value: 'San Vittore del Lazio',
                label: 'San Vittore del Lazio'
            },
            {
                value: 'San Vittore Olona',
                label: 'San Vittore Olona'
            },
            {
                value: 'San Zeno di Montagna',
                label: 'San Zeno di Montagna'
            },
            {
                value: 'San Zeno Naviglio',
                label: 'San Zeno Naviglio'
            },
            {
                value: 'San Zenone al Lambro',
                label: 'San Zenone al Lambro'
            },
            {
                value: 'San Zenone al Po',
                label: 'San Zenone al Po'
            },
            {
                value: 'San Zenone degli Ezzelini',
                label: 'San Zenone degli Ezzelini'
            },
            {
                value: 'Sanarica',
                label: 'Sanarica'
            },
            {
                value: 'Sandigliano',
                label: 'Sandigliano'
            },
            {
                value: 'Sandrigo',
                label: 'Sandrigo'
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
                value: 'Sangano',
                label: 'Sangano'
            },
            {
                value: 'Sangiano',
                label: 'Sangiano'
            },
            {
                value: 'Sangineto',
                label: 'Sangineto'
            },
            {
                value: 'Sanguinetto',
                label: 'Sanguinetto'
            },
            {
                value: 'Sanluri',
                label: 'Sanluri'
            },
            {
                value: 'Sannazzaro de\' Burgondi',
                label: 'Sannazzaro de\' Burgondi'
            },
            {
                value: 'Sannicandro di Bari',
                label: 'Sannicandro di Bari'
            },
            {
                value: 'Sannicola',
                label: 'Sannicola'
            },
            {
                value: 'Sanremo',
                label: 'Sanremo'
            },
            {
                value: 'Sansepolcro',
                label: 'Sansepolcro'
            },
            {
                value: 'Sant\'Agapito',
                label: 'Sant\'Agapito'
            },
            {
                value: 'Sant\'Agata Bolognese',
                label: 'Sant\'Agata Bolognese'
            },
            {
                value: 'Sant\'Agata de\' Goti',
                label: 'Sant\'Agata de\' Goti'
            },
            {
                value: 'Sant\'Agata del Bianco',
                label: 'Sant\'Agata del Bianco'
            },
            {
                value: 'Sant\'Agata di Esaro',
                label: 'Sant\'Agata di Esaro'
            },
            {
                value: 'Sant\'Agata di Militello',
                label: 'Sant\'Agata di Militello'
            },
            {
                value: 'Sant\'Agata di Puglia',
                label: 'Sant\'Agata di Puglia'
            },
            {
                value: 'Sant\'Agata Feltria',
                label: 'Sant\'Agata Feltria'
            },
            {
                value: 'Sant\'Agata Fossili',
                label: 'Sant\'Agata Fossili'
            },
            {
                value: 'Sant\'Agata li Battiati',
                label: 'Sant\'Agata li Battiati'
            },
            {
                value: 'Sant\'Agata sul Santerno',
                label: 'Sant\'Agata sul Santerno'
            },
            {
                value: 'Sant\'Agnello',
                label: 'Sant\'Agnello'
            },
            {
                value: 'Sant\'Albano Stura',
                label: 'Sant\'Albano Stura'
            },
            {
                value: 'Sant\'Alessio con Vialone',
                label: 'Sant\'Alessio con Vialone'
            },
            {
                value: 'Sant\'Alessio in Aspromonte',
                label: 'Sant\'Alessio in Aspromonte'
            },
            {
                value: 'Sant\'Alessio Siculo',
                label: 'Sant\'Alessio Siculo'
            },
            {
                value: 'Sant\'Alfio',
                label: 'Sant\'Alfio'
            },
            {
                value: 'Sant\'Ambrogio di Torino',
                label: 'Sant\'Ambrogio di Torino'
            },
            {
                value: 'Sant\'Ambrogio di Valpolicella',
                label: 'Sant\'Ambrogio di Valpolicella'
            },
            {
                value: 'Sant\'Ambrogio sul Garigliano',
                label: 'Sant\'Ambrogio sul Garigliano'
            },
            {
                value: 'Sant\'Anastasia',
                label: 'Sant\'Anastasia'
            },
            {
                value: 'Sant\'Anatolia di Narco',
                label: 'Sant\'Anatolia di Narco'
            },
            {
                value: 'Sant\'Andrea Apostolo dello Ionio',
                label: 'Sant\'Andrea Apostolo dello Ionio'
            },
            {
                value: 'Sant\'Andrea del Garigliano',
                label: 'Sant\'Andrea del Garigliano'
            },
            {
                value: 'Sant\'Andrea di Conza',
                label: 'Sant\'Andrea di Conza'
            },
            {
                value: 'Sant\'Andrea Frius',
                label: 'Sant\'Andrea Frius'
            },
            {
                value: 'Sant\'Angelo a Cupolo',
                label: 'Sant\'Angelo a Cupolo'
            },
            {
                value: 'Sant\'Angelo a Fasanella',
                label: 'Sant\'Angelo a Fasanella'
            },
            {
                value: 'Sant\'Angelo a Scala',
                label: 'Sant\'Angelo a Scala'
            },
            {
                value: 'Sant\'Angelo all\'Esca',
                label: 'Sant\'Angelo all\'Esca'
            },
            {
                value: 'Sant\'Angelo d\'Alife',
                label: 'Sant\'Angelo d\'Alife'
            },
            {
                value: 'Sant\'Angelo dei Lombardi',
                label: 'Sant\'Angelo dei Lombardi'
            },
            {
                value: 'Sant\'Angelo del Pesco',
                label: 'Sant\'Angelo del Pesco'
            },
            {
                value: 'Sant\'Angelo di Brolo',
                label: 'Sant\'Angelo di Brolo'
            },
            {
                value: 'Sant\'Angelo di Piove di Sacco',
                label: 'Sant\'Angelo di Piove di Sacco'
            },
            {
                value: 'Sant\'Angelo in Pontano',
                label: 'Sant\'Angelo in Pontano'
            },
            {
                value: 'Sant\'Angelo in Vado',
                label: 'Sant\'Angelo in Vado'
            },
            {
                value: 'Sant\'Angelo Le Fratte',
                label: 'Sant\'Angelo Le Fratte'
            },
            {
                value: 'Sant\'Angelo Limosano',
                label: 'Sant\'Angelo Limosano'
            },
            {
                value: 'Sant\'Angelo Lodigiano',
                label: 'Sant\'Angelo Lodigiano'
            },
            {
                value: 'Sant\'Angelo Lomellina',
                label: 'Sant\'Angelo Lomellina'
            },
            {
                value: 'Sant\'Angelo Muxaro',
                label: 'Sant\'Angelo Muxaro'
            },
            {
                value: 'Sant\'Angelo Romano',
                label: 'Sant\'Angelo Romano'
            },
            {
                value: 'Sant\'Anna Arresi',
                label: 'Sant\'Anna Arresi'
            },
            {
                value: 'Sant\'Anna d\'Alfaedo',
                label: 'Sant\'Anna d\'Alfaedo'
            },
            {
                value: 'Sant\'Antimo',
                label: 'Sant\'Antimo'
            },
            {
                value: 'Sant\'Antioco',
                label: 'Sant\'Antioco'
            },
            {
                value: 'Sant\'Antonino di Susa',
                label: 'Sant\'Antonino di Susa'
            },
            {
                value: 'Sant\'Antonio Abate',
                label: 'Sant\'Antonio Abate'
            },
            {
                value: 'Sant\'Antonio di Gallura',
                label: 'Sant\'Antonio di Gallura'
            },
            {
                value: 'Sant\'Apollinare',
                label: 'Sant\'Apollinare'
            },
            {
                value: 'Sant\'Arcangelo',
                label: 'Sant\'Arcangelo'
            },
            {
                value: 'Sant\'Arcangelo Trimonte',
                label: 'Sant\'Arcangelo Trimonte'
            },
            {
                value: 'Sant\'Arpino',
                label: 'Sant\'Arpino'
            },
            {
                value: 'Sant\'Arsenio',
                label: 'Sant\'Arsenio'
            },
            {
                value: 'Sant\'Egidio alla Vibrata',
                label: 'Sant\'Egidio alla Vibrata'
            },
            {
                value: 'Sant\'Egidio del Monte Albino',
                label: 'Sant\'Egidio del Monte Albino'
            },
            {
                value: 'Sant\'Elena',
                label: 'Sant\'Elena'
            },
            {
                value: 'Sant\'Elena Sannita',
                label: 'Sant\'Elena Sannita'
            },
            {
                value: 'Sant\'Elia a Pianisi',
                label: 'Sant\'Elia a Pianisi'
            },
            {
                value: 'Sant\'Elia Fiumerapido',
                label: 'Sant\'Elia Fiumerapido'
            },
            {
                value: 'Sant\'Elpidio a Mare',
                label: 'Sant\'Elpidio a Mare'
            },
            {
                value: 'Sant\'Eufemia a Maiella',
                label: 'Sant\'Eufemia a Maiella'
            },
            {
                value: 'Sant\'Eufemia d\'Aspromonte',
                label: 'Sant\'Eufemia d\'Aspromonte'
            },
            {
                value: 'Sant\'Eusanio del Sangro',
                label: 'Sant\'Eusanio del Sangro'
            },
            {
                value: 'Sant\'Eusanio Forconese',
                label: 'Sant\'Eusanio Forconese'
            },
            {
                value: 'Sant\'Ilario d\'Enza',
                label: 'Sant\'Ilario d\'Enza'
            },
            {
                value: 'Sant\'Ilario dello Ionio',
                label: 'Sant\'Ilario dello Ionio'
            },
            {
                value: 'Sant\'Ippolito',
                label: 'Sant\'Ippolito'
            },
            {
                value: 'Sant\'Olcese',
                label: 'Sant\'Olcese'
            },
            {
                value: 'Sant\'Omero',
                label: 'Sant\'Omero'
            },
            {
                value: 'Sant\'Omobono Terme',
                label: 'Sant\'Omobono Terme'
            },
            {
                value: 'Sant\'Onofrio',
                label: 'Sant\'Onofrio'
            },
            {
                value: 'Sant\'Oreste',
                label: 'Sant\'Oreste'
            },
            {
                value: 'Sant\'Orsola Terme',
                label: 'Sant\'Orsola Terme'
            },
            {
                value: 'Sant\'Urbano',
                label: 'Sant\'Urbano'
            },
            {
                value: 'Santa Brigida',
                label: 'Santa Brigida'
            },
            {
                value: 'Santa Caterina Albanese',
                label: 'Santa Caterina Albanese'
            },
            {
                value: 'Santa Caterina dello Ionio',
                label: 'Santa Caterina dello Ionio'
            },
            {
                value: 'Santa Caterina Villarmosa',
                label: 'Santa Caterina Villarmosa'
            },
            {
                value: 'Santa Cesarea Terme',
                label: 'Santa Cesarea Terme'
            },
            {
                value: 'Santa Cristina d\'Aspromonte',
                label: 'Santa Cristina d\'Aspromonte'
            },
            {
                value: 'Santa Cristina e Bissone',
                label: 'Santa Cristina e Bissone'
            },
            {
                value: 'Santa Cristina Gela',
                label: 'Santa Cristina Gela'
            },
            {
                value: 'Santa Cristina Valgardena',
                label: 'Santa Cristina Valgardena'
            },
            {
                value: 'Santa Croce Camerina',
                label: 'Santa Croce Camerina'
            },
            {
                value: 'Santa Croce del Sannio',
                label: 'Santa Croce del Sannio'
            },
            {
                value: 'Santa Croce di Magliano',
                label: 'Santa Croce di Magliano'
            },
            {
                value: 'Santa Croce sull\'Arno',
                label: 'Santa Croce sull\'Arno'
            },
            {
                value: 'Santa Domenica Talao',
                label: 'Santa Domenica Talao'
            },
            {
                value: 'Santa Domenica Vittoria',
                label: 'Santa Domenica Vittoria'
            },
            {
                value: 'Santa Elisabetta',
                label: 'Santa Elisabetta'
            },
            {
                value: 'Santa Fiora',
                label: 'Santa Fiora'
            },
            {
                value: 'Santa Flavia',
                label: 'Santa Flavia'
            },
            {
                value: 'Santa Giuletta',
                label: 'Santa Giuletta'
            },
            {
                value: 'Santa Giusta',
                label: 'Santa Giusta'
            },
            {
                value: 'Santa Giustina',
                label: 'Santa Giustina'
            },
            {
                value: 'Santa Giustina in Colle',
                label: 'Santa Giustina in Colle'
            },
            {
                value: 'Santa Luce',
                label: 'Santa Luce'
            },
            {
                value: 'Santa Lucia del Mela',
                label: 'Santa Lucia del Mela'
            },
            {
                value: 'Santa Lucia di Piave',
                label: 'Santa Lucia di Piave'
            },
            {
                value: 'Santa Lucia di Serino',
                label: 'Santa Lucia di Serino'
            },
            {
                value: 'Santa Margherita di Belice',
                label: 'Santa Margherita di Belice'
            },
            {
                value: 'Santa Margherita di Staffora',
                label: 'Santa Margherita di Staffora'
            },
            {
                value: 'Santa Margherita Ligure',
                label: 'Santa Margherita Ligure'
            },
            {
                value: 'Santa Maria a Monte',
                label: 'Santa Maria a Monte'
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
                value: 'Santa Maria Coghinas',
                label: 'Santa Maria Coghinas'
            },
            {
                value: 'Santa Maria del Cedro',
                label: 'Santa Maria del Cedro'
            },
            {
                value: 'Santa Maria del Molise',
                label: 'Santa Maria del Molise'
            },
            {
                value: 'Santa Maria della Versa',
                label: 'Santa Maria della Versa'
            },
            {
                value: 'Santa Maria di Licodia',
                label: 'Santa Maria di Licodia'
            },
            {
                value: 'Santa Maria di Sala',
                label: 'Santa Maria di Sala'
            },
            {
                value: 'Santa Maria Hoè',
                label: 'Santa Maria Hoè'
            },
            {
                value: 'Santa Maria Imbaro',
                label: 'Santa Maria Imbaro'
            },
            {
                value: 'Santa Maria la Carità',
                label: 'Santa Maria la Carità'
            },
            {
                value: 'Santa Maria la Fossa',
                label: 'Santa Maria la Fossa'
            },
            {
                value: 'Santa Maria la Longa',
                label: 'Santa Maria la Longa'
            },
            {
                value: 'Santa Maria Maggiore',
                label: 'Santa Maria Maggiore'
            },
            {
                value: 'Santa Maria Nuova',
                label: 'Santa Maria Nuova'
            },
            {
                value: 'Santa Marina',
                label: 'Santa Marina'
            },
            {
                value: 'Santa Marina Salina',
                label: 'Santa Marina Salina'
            },
            {
                value: 'Santa Marinella',
                label: 'Santa Marinella'
            },
            {
                value: 'Santa Ninfa',
                label: 'Santa Ninfa'
            },
            {
                value: 'Santa Paolina',
                label: 'Santa Paolina'
            },
            {
                value: 'Santa Severina',
                label: 'Santa Severina'
            },
            {
                value: 'Santa Sofia',
                label: 'Santa Sofia'
            },
            {
                value: 'Santa Sofia d\'Epiro',
                label: 'Santa Sofia d\'Epiro'
            },
            {
                value: 'Santa Teresa di Riva',
                label: 'Santa Teresa di Riva'
            },
            {
                value: 'Santa Teresa Gallura',
                label: 'Santa Teresa Gallura'
            },
            {
                value: 'Santa Venerina',
                label: 'Santa Venerina'
            },
            {
                value: 'Santa Vittoria d\'Alba',
                label: 'Santa Vittoria d\'Alba'
            },
            {
                value: 'Santa Vittoria in Matenano',
                label: 'Santa Vittoria in Matenano'
            },
            {
                value: 'Santadi',
                label: 'Santadi'
            },
            {
                value: 'Santarcangelo di Romagna',
                label: 'Santarcangelo di Romagna'
            },
            {
                value: 'Sante Marie',
                label: 'Sante Marie'
            },
            {
                value: 'Santena',
                label: 'Santena'
            },
            {
                value: 'Santeramo in Colle',
                label: 'Santeramo in Colle'
            },
            {
                value: 'Santhià',
                label: 'Santhià'
            },
            {
                value: 'Santi Cosma e Damiano',
                label: 'Santi Cosma e Damiano'
            },
            {
                value: 'Santo Stefano al Mare',
                label: 'Santo Stefano al Mare'
            },
            {
                value: 'Santo Stefano Belbo',
                label: 'Santo Stefano Belbo'
            },
            {
                value: 'Santo Stefano d\'Aveto',
                label: 'Santo Stefano d\'Aveto'
            },
            {
                value: 'Santo Stefano del Sole',
                label: 'Santo Stefano del Sole'
            },
            {
                value: 'Santo Stefano di Cadore',
                label: 'Santo Stefano di Cadore'
            },
            {
                value: 'Santo Stefano di Camastra',
                label: 'Santo Stefano di Camastra'
            },
            {
                value: 'Santo Stefano di Magra',
                label: 'Santo Stefano di Magra'
            },
            {
                value: 'Santo Stefano di Rogliano',
                label: 'Santo Stefano di Rogliano'
            },
            {
                value: 'Santo Stefano di Sessanio',
                label: 'Santo Stefano di Sessanio'
            },
            {
                value: 'Santo Stefano in Aspromonte',
                label: 'Santo Stefano in Aspromonte'
            },
            {
                value: 'Santo Stefano Lodigiano',
                label: 'Santo Stefano Lodigiano'
            },
            {
                value: 'Santo Stefano Quisquina',
                label: 'Santo Stefano Quisquina'
            },
            {
                value: 'Santo Stefano Roero',
                label: 'Santo Stefano Roero'
            },
            {
                value: 'Santo Stefano Ticino',
                label: 'Santo Stefano Ticino'
            },
            {
                value: 'Santomenna',
                label: 'Santomenna'
            },
            {
                value: 'Santopadre',
                label: 'Santopadre'
            },
            {
                value: 'Santorso',
                label: 'Santorso'
            },
            {
                value: 'Santu Lussurgiu',
                label: 'Santu Lussurgiu'
            },
            {
                value: 'Sanza',
                label: 'Sanza'
            },
            {
                value: 'Sanzeno',
                label: 'Sanzeno'
            },
            {
                value: 'Saonara',
                label: 'Saonara'
            },
            {
                value: 'Saponara',
                label: 'Saponara'
            },
            {
                value: 'Sappada',
                label: 'Sappada'
            },
            {
                value: 'Sapri',
                label: 'Sapri'
            },
            {
                value: 'Saracena',
                label: 'Saracena'
            },
            {
                value: 'Saracinesco',
                label: 'Saracinesco'
            },
            {
                value: 'Sarcedo',
                label: 'Sarcedo'
            },
            {
                value: 'Sarconi',
                label: 'Sarconi'
            },
            {
                value: 'Sardara',
                label: 'Sardara'
            },
            {
                value: 'Sardigliano',
                label: 'Sardigliano'
            },
            {
                value: 'Sarego',
                label: 'Sarego'
            },
            {
                value: 'Sarentino',
                label: 'Sarentino'
            },
            {
                value: 'Sarezzano',
                label: 'Sarezzano'
            },
            {
                value: 'Sarezzo',
                label: 'Sarezzo'
            },
            {
                value: 'Sarmato',
                label: 'Sarmato'
            },
            {
                value: 'Sarmede',
                label: 'Sarmede'
            },
            {
                value: 'Sarnano',
                label: 'Sarnano'
            },
            {
                value: 'Sarnico',
                label: 'Sarnico'
            },
            {
                value: 'Sarno',
                label: 'Sarno'
            },
            {
                value: 'Sarnonico',
                label: 'Sarnonico'
            },
            {
                value: 'Saronno',
                label: 'Saronno'
            },
            {
                value: 'Sarre',
                label: 'Sarre'
            },
            {
                value: 'Sarroch',
                label: 'Sarroch'
            },
            {
                value: 'Sarsina',
                label: 'Sarsina'
            },
            {
                value: 'Sarteano',
                label: 'Sarteano'
            },
            {
                value: 'Sartirana Lomellina',
                label: 'Sartirana Lomellina'
            },
            {
                value: 'Sarule',
                label: 'Sarule'
            },
            {
                value: 'Sarzana',
                label: 'Sarzana'
            },
            {
                value: 'Sassano',
                label: 'Sassano'
            },
            {
                value: 'Sassari',
                label: 'Sassari'
            },
            {
                value: 'Sassello',
                label: 'Sassello'
            },
            {
                value: 'Sassetta',
                label: 'Sassetta'
            },
            {
                value: 'Sassinoro',
                label: 'Sassinoro'
            },
            {
                value: 'Sasso di Castalda',
                label: 'Sasso di Castalda'
            },
            {
                value: 'Sasso Marconi',
                label: 'Sasso Marconi'
            },
            {
                value: 'Sassocorvaro Auditore',
                label: 'Sassocorvaro Auditore'
            },
            {
                value: 'Sassofeltrio',
                label: 'Sassofeltrio'
            },
            {
                value: 'Sassoferrato',
                label: 'Sassoferrato'
            },
            {
                value: 'Sassuolo',
                label: 'Sassuolo'
            },
            {
                value: 'Satriano',
                label: 'Satriano'
            },
            {
                value: 'Satriano di Lucania',
                label: 'Satriano di Lucania'
            },
            {
                value: 'Sauris',
                label: 'Sauris'
            },
            {
                value: 'Sauze d\'Oulx',
                label: 'Sauze d\'Oulx'
            },
            {
                value: 'Sauze di Cesana',
                label: 'Sauze di Cesana'
            },
            {
                value: 'Sava',
                label: 'Sava'
            },
            {
                value: 'Savelli',
                label: 'Savelli'
            },
            {
                value: 'Saviano',
                label: 'Saviano'
            },
            {
                value: 'Savigliano',
                label: 'Savigliano'
            },
            {
                value: 'Savignano Irpino',
                label: 'Savignano Irpino'
            },
            {
                value: 'Savignano sul Panaro',
                label: 'Savignano sul Panaro'
            },
            {
                value: 'Savignano sul Rubicone',
                label: 'Savignano sul Rubicone'
            },
            {
                value: 'Savignone',
                label: 'Savignone'
            },
            {
                value: 'Saviore dell\'Adamello',
                label: 'Saviore dell\'Adamello'
            },
            {
                value: 'Savoca',
                label: 'Savoca'
            },
            {
                value: 'Savogna',
                label: 'Savogna'
            },
            {
                value: 'Savogna d\'Isonzo',
                label: 'Savogna d\'Isonzo'
            },
            {
                value: 'Savoia di Lucania',
                label: 'Savoia di Lucania'
            },
            {
                value: 'Savona',
                label: 'Savona'
            },
            {
                value: 'Scafa',
                label: 'Scafa'
            },
            {
                value: 'Scafati',
                label: 'Scafati'
            },
            {
                value: 'Scagnello',
                label: 'Scagnello'
            },
            {
                value: 'Scala',
                label: 'Scala'
            },
            {
                value: 'Scala Coeli',
                label: 'Scala Coeli'
            },
            {
                value: 'Scaldasole',
                label: 'Scaldasole'
            },
            {
                value: 'Scalea',
                label: 'Scalea'
            },
            {
                value: 'Scalenghe',
                label: 'Scalenghe'
            },
            {
                value: 'Scaletta Zanclea',
                label: 'Scaletta Zanclea'
            },
            {
                value: 'Scampitella',
                label: 'Scampitella'
            },
            {
                value: 'Scandale',
                label: 'Scandale'
            },
            {
                value: 'Scandiano',
                label: 'Scandiano'
            },
            {
                value: 'Scandicci',
                label: 'Scandicci'
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
                value: 'Scandriglia',
                label: 'Scandriglia'
            },
            {
                value: 'Scanno',
                label: 'Scanno'
            },
            {
                value: 'Scano di Montiferro',
                label: 'Scano di Montiferro'
            },
            {
                value: 'Scansano',
                label: 'Scansano'
            },
            {
                value: 'Scanzano Jonico',
                label: 'Scanzano Jonico'
            },
            {
                value: 'Scanzorosciate',
                label: 'Scanzorosciate'
            },
            {
                value: 'Scapoli',
                label: 'Scapoli'
            },
            {
                value: 'Scarlino',
                label: 'Scarlino'
            },
            {
                value: 'Scarmagno',
                label: 'Scarmagno'
            },
            {
                value: 'Scarnafigi',
                label: 'Scarnafigi'
            },
            {
                value: 'Scarperia e San Piero',
                label: 'Scarperia e San Piero'
            },
            {
                value: 'Scena',
                label: 'Scena'
            },
            {
                value: 'Scerni',
                label: 'Scerni'
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
                value: 'Schiavi di Abruzzo',
                label: 'Schiavi di Abruzzo'
            },
            {
                value: 'Schiavon',
                label: 'Schiavon'
            },
            {
                value: 'Schignano',
                label: 'Schignano'
            },
            {
                value: 'Schilpario',
                label: 'Schilpario'
            },
            {
                value: 'Schio',
                label: 'Schio'
            },
            {
                value: 'Schivenoglia',
                label: 'Schivenoglia'
            },
            {
                value: 'Sciacca',
                label: 'Sciacca'
            },
            {
                value: 'Sciara',
                label: 'Sciara'
            },
            {
                value: 'Scicli',
                label: 'Scicli'
            },
            {
                value: 'Scido',
                label: 'Scido'
            },
            {
                value: 'Scigliano',
                label: 'Scigliano'
            },
            {
                value: 'Scilla',
                label: 'Scilla'
            },
            {
                value: 'Scillato',
                label: 'Scillato'
            },
            {
                value: 'Sciolze',
                label: 'Sciolze'
            },
            {
                value: 'Scisciano',
                label: 'Scisciano'
            },
            {
                value: 'Sclafani Bagni',
                label: 'Sclafani Bagni'
            },
            {
                value: 'Scontrone',
                label: 'Scontrone'
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
                value: 'Scoppito',
                label: 'Scoppito'
            },
            {
                value: 'Scordia',
                label: 'Scordia'
            },
            {
                value: 'Scorrano',
                label: 'Scorrano'
            },
            {
                value: 'Scorzè',
                label: 'Scorzè'
            },
            {
                value: 'Scurcola Marsicana',
                label: 'Scurcola Marsicana'
            },
            {
                value: 'Scurelle',
                label: 'Scurelle'
            },
            {
                value: 'Scurzolengo',
                label: 'Scurzolengo'
            },
            {
                value: 'Seborga',
                label: 'Seborga'
            },
            {
                value: 'Secinaro',
                label: 'Secinaro'
            },
            {
                value: 'Seclì',
                label: 'Seclì'
            },
            {
                value: 'Secugnago',
                label: 'Secugnago'
            },
            {
                value: 'Sedegliano',
                label: 'Sedegliano'
            },
            {
                value: 'Sedico',
                label: 'Sedico'
            },
            {
                value: 'Sedilo',
                label: 'Sedilo'
            },
            {
                value: 'Sedini',
                label: 'Sedini'
            },
            {
                value: 'Sedriano',
                label: 'Sedriano'
            },
            {
                value: 'Sedrina',
                label: 'Sedrina'
            },
            {
                value: 'Sefro',
                label: 'Sefro'
            },
            {
                value: 'Segariu',
                label: 'Segariu'
            },
            {
                value: 'Seggiano',
                label: 'Seggiano'
            },
            {
                value: 'Segni',
                label: 'Segni'
            },
            {
                value: 'Segonzano',
                label: 'Segonzano'
            },
            {
                value: 'Segrate',
                label: 'Segrate'
            },
            {
                value: 'Segusino',
                label: 'Segusino'
            },
            {
                value: 'Selargius',
                label: 'Selargius'
            },
            {
                value: 'Selci',
                label: 'Selci'
            },
            {
                value: 'Selegas',
                label: 'Selegas'
            },
            {
                value: 'Sella Giudicarie',
                label: 'Sella Giudicarie'
            },
            {
                value: 'Sellano',
                label: 'Sellano'
            },
            {
                value: 'Sellero',
                label: 'Sellero'
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
                value: 'Selva dei Molini',
                label: 'Selva dei Molini'
            },
            {
                value: 'Selva di Cadore',
                label: 'Selva di Cadore'
            },
            {
                value: 'Selva di Progno',
                label: 'Selva di Progno'
            },
            {
                value: 'Selva di Val Gardena',
                label: 'Selva di Val Gardena'
            },
            {
                value: 'Selvazzano Dentro',
                label: 'Selvazzano Dentro'
            },
            {
                value: 'Selvino',
                label: 'Selvino'
            },
            {
                value: 'Semestene',
                label: 'Semestene'
            },
            {
                value: 'Semiana',
                label: 'Semiana'
            },
            {
                value: 'Seminara',
                label: 'Seminara'
            },
            {
                value: 'Semproniano',
                label: 'Semproniano'
            },
            {
                value: 'Senago',
                label: 'Senago'
            },
            {
                value: 'Senale-San Felice',
                label: 'Senale-San Felice'
            },
            {
                value: 'Senales',
                label: 'Senales'
            },
            {
                value: 'Seneghe',
                label: 'Seneghe'
            },
            {
                value: 'Senerchia',
                label: 'Senerchia'
            },
            {
                value: 'Seniga',
                label: 'Seniga'
            },
            {
                value: 'Senigallia',
                label: 'Senigallia'
            },
            {
                value: 'Senis',
                label: 'Senis'
            },
            {
                value: 'Senise',
                label: 'Senise'
            },
            {
                value: 'Senna Comasco',
                label: 'Senna Comasco'
            },
            {
                value: 'Senna Lodigiana',
                label: 'Senna Lodigiana'
            },
            {
                value: 'Sennariolo',
                label: 'Sennariolo'
            },
            {
                value: 'Sennori',
                label: 'Sennori'
            },
            {
                value: 'Senorbì',
                label: 'Senorbì'
            },
            {
                value: 'Sepino',
                label: 'Sepino'
            },
            {
                value: 'Sequals',
                label: 'Sequals'
            },
            {
                value: 'Seravezza',
                label: 'Seravezza'
            },
            {
                value: 'Serdiana',
                label: 'Serdiana'
            },
            {
                value: 'Seregno',
                label: 'Seregno'
            },
            {
                value: 'Seren del Grappa',
                label: 'Seren del Grappa'
            },
            {
                value: 'Sergnano',
                label: 'Sergnano'
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
                value: 'Serino',
                label: 'Serino'
            },
            {
                value: 'Serle',
                label: 'Serle'
            },
            {
                value: 'Sermide e Felonica',
                label: 'Sermide e Felonica'
            },
            {
                value: 'Sermoneta',
                label: 'Sermoneta'
            },
            {
                value: 'Sernaglia della Battaglia',
                label: 'Sernaglia della Battaglia'
            },
            {
                value: 'Sernio',
                label: 'Sernio'
            },
            {
                value: 'Serole',
                label: 'Serole'
            },
            {
                value: 'Serra d\'Aiello',
                label: 'Serra d\'Aiello'
            },
            {
                value: 'Serra de\' Conti',
                label: 'Serra de\' Conti'
            },
            {
                value: 'Serra Riccò',
                label: 'Serra Riccò'
            },
            {
                value: 'Serra San Bruno',
                label: 'Serra San Bruno'
            },
            {
                value: 'Serra San Quirico',
                label: 'Serra San Quirico'
            },
            {
                value: 'Serra Sant\'Abbondio',
                label: 'Serra Sant\'Abbondio'
            },
            {
                value: 'Serracapriola',
                label: 'Serracapriola'
            },
            {
                value: 'Serradifalco',
                label: 'Serradifalco'
            },
            {
                value: 'Serralunga d\'Alba',
                label: 'Serralunga d\'Alba'
            },
            {
                value: 'Serralunga di Crea',
                label: 'Serralunga di Crea'
            },
            {
                value: 'Serramanna',
                label: 'Serramanna'
            },
            {
                value: 'Serramazzoni',
                label: 'Serramazzoni'
            },
            {
                value: 'Serramezzana',
                label: 'Serramezzana'
            },
            {
                value: 'Serramonacesca',
                label: 'Serramonacesca'
            },
            {
                value: 'Serrapetrona',
                label: 'Serrapetrona'
            },
            {
                value: 'Serrara Fontana',
                label: 'Serrara Fontana'
            },
            {
                value: 'Serrastretta',
                label: 'Serrastretta'
            },
            {
                value: 'Serrata',
                label: 'Serrata'
            },
            {
                value: 'Serravalle a Po',
                label: 'Serravalle a Po'
            },
            {
                value: 'Serravalle di Chienti',
                label: 'Serravalle di Chienti'
            },
            {
                value: 'Serravalle Langhe',
                label: 'Serravalle Langhe'
            },
            {
                value: 'Serravalle Pistoiese',
                label: 'Serravalle Pistoiese'
            },
            {
                value: 'Serravalle Scrivia',
                label: 'Serravalle Scrivia'
            },
            {
                value: 'Serravalle Sesia',
                label: 'Serravalle Sesia'
            },
            {
                value: 'Serre',
                label: 'Serre'
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
                value: 'Serrone',
                label: 'Serrone'
            },
            {
                value: 'Sersale',
                label: 'Sersale'
            },
            {
                value: 'Servigliano',
                label: 'Servigliano'
            },
            {
                value: 'Sessa Aurunca',
                label: 'Sessa Aurunca'
            },
            {
                value: 'Sessa Cilento',
                label: 'Sessa Cilento'
            },
            {
                value: 'Sessame',
                label: 'Sessame'
            },
            {
                value: 'Sessano del Molise',
                label: 'Sessano del Molise'
            },
            {
                value: 'Sesta Godano',
                label: 'Sesta Godano'
            },
            {
                value: 'Sestino',
                label: 'Sestino'
            },
            {
                value: 'Sesto',
                label: 'Sesto'
            },
            {
                value: 'Sesto al Reghena',
                label: 'Sesto al Reghena'
            },
            {
                value: 'Sesto Calende',
                label: 'Sesto Calende'
            },
            {
                value: 'Sesto Campano',
                label: 'Sesto Campano'
            },
            {
                value: 'Sesto ed Uniti',
                label: 'Sesto ed Uniti'
            },
            {
                value: 'Sesto Fiorentino',
                label: 'Sesto Fiorentino'
            },
            {
                value: 'Sesto San Giovanni',
                label: 'Sesto San Giovanni'
            },
            {
                value: 'Sestola',
                label: 'Sestola'
            },
            {
                value: 'Sestri Levante',
                label: 'Sestri Levante'
            },
            {
                value: 'Sestriere',
                label: 'Sestriere'
            },
            {
                value: 'Sestu',
                label: 'Sestu'
            },
            {
                value: 'Settala',
                label: 'Settala'
            },
            {
                value: 'Settefrati',
                label: 'Settefrati'
            },
            {
                value: 'Settime',
                label: 'Settime'
            },
            {
                value: 'Settimo Milanese',
                label: 'Settimo Milanese'
            },
            {
                value: 'Settimo Rottaro',
                label: 'Settimo Rottaro'
            },
            {
                value: 'Settimo San Pietro',
                label: 'Settimo San Pietro'
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
                value: 'Settingiano',
                label: 'Settingiano'
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
                value: 'Seveso',
                label: 'Seveso'
            },
            {
                value: 'Sezzadio',
                label: 'Sezzadio'
            },
            {
                value: 'Sezze',
                label: 'Sezze'
            },
            {
                value: 'Sfruz',
                label: 'Sfruz'
            },
            {
                value: 'Sgonico',
                label: 'Sgonico'
            },
            {
                value: 'Sgurgola',
                label: 'Sgurgola'
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
                value: 'Siano',
                label: 'Siano'
            },
            {
                value: 'Siapiccia',
                label: 'Siapiccia'
            },
            {
                value: 'Sicignano degli Alburni',
                label: 'Sicignano degli Alburni'
            },
            {
                value: 'Siculiana',
                label: 'Siculiana'
            },
            {
                value: 'Siddi',
                label: 'Siddi'
            },
            {
                value: 'Siderno',
                label: 'Siderno'
            },
            {
                value: 'Siena',
                label: 'Siena'
            },
            {
                value: 'Sigillo',
                label: 'Sigillo'
            },
            {
                value: 'Signa',
                label: 'Signa'
            },
            {
                value: 'Silandro',
                label: 'Silandro'
            },
            {
                value: 'Silanus',
                label: 'Silanus'
            },
            {
                value: 'Silea',
                label: 'Silea'
            },
            {
                value: 'Siligo',
                label: 'Siligo'
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
                value: 'Sillano Giuncugnano',
                label: 'Sillano Giuncugnano'
            },
            {
                value: 'Sillavengo',
                label: 'Sillavengo'
            },
            {
                value: 'Silvano d\'Orba',
                label: 'Silvano d\'Orba'
            },
            {
                value: 'Silvano Pietra',
                label: 'Silvano Pietra'
            },
            {
                value: 'Silvi',
                label: 'Silvi'
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
                value: 'Simbario',
                label: 'Simbario'
            },
            {
                value: 'Simeri Crichi',
                label: 'Simeri Crichi'
            },
            {
                value: 'Sinagra',
                label: 'Sinagra'
            },
            {
                value: 'Sinalunga',
                label: 'Sinalunga'
            },
            {
                value: 'Sindia',
                label: 'Sindia'
            },
            {
                value: 'Sini',
                label: 'Sini'
            },
            {
                value: 'Sinio',
                label: 'Sinio'
            },
            {
                value: 'Siniscola',
                label: 'Siniscola'
            },
            {
                value: 'Sinnai',
                label: 'Sinnai'
            },
            {
                value: 'Sinopoli',
                label: 'Sinopoli'
            },
            {
                value: 'Siracusa',
                label: 'Siracusa'
            },
            {
                value: 'Sirignano',
                label: 'Sirignano'
            },
            {
                value: 'Siris',
                label: 'Siris'
            },
            {
                value: 'Sirmione',
                label: 'Sirmione'
            },
            {
                value: 'Sirolo',
                label: 'Sirolo'
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
                value: 'Sissa Trecasali',
                label: 'Sissa Trecasali'
            },
            {
                value: 'Siurgus Donigala',
                label: 'Siurgus Donigala'
            },
            {
                value: 'Siziano',
                label: 'Siziano'
            },
            {
                value: 'Sizzano',
                label: 'Sizzano'
            },
            {
                value: 'Sluderno',
                label: 'Sluderno'
            },
            {
                value: 'Smerillo',
                label: 'Smerillo'
            },
            {
                value: 'Soave',
                label: 'Soave'
            },
            {
                value: 'Socchieve',
                label: 'Socchieve'
            },
            {
                value: 'Soddì',
                label: 'Soddì'
            },
            {
                value: 'Sogliano al Rubicone',
                label: 'Sogliano al Rubicone'
            },
            {
                value: 'Sogliano Cavour',
                label: 'Sogliano Cavour'
            },
            {
                value: 'Soglio',
                label: 'Soglio'
            },
            {
                value: 'Soiano del Lago',
                label: 'Soiano del Lago'
            },
            {
                value: 'Solagna',
                label: 'Solagna'
            },
            {
                value: 'Solarino',
                label: 'Solarino'
            },
            {
                value: 'Solaro',
                label: 'Solaro'
            },
            {
                value: 'Solarolo',
                label: 'Solarolo'
            },
            {
                value: 'Solarolo Rainerio',
                label: 'Solarolo Rainerio'
            },
            {
                value: 'Solarussa',
                label: 'Solarussa'
            },
            {
                value: 'Solbiate Arno',
                label: 'Solbiate Arno'
            },
            {
                value: 'Solbiate con Cagno',
                label: 'Solbiate con Cagno'
            },
            {
                value: 'Solbiate Olona',
                label: 'Solbiate Olona'
            },
            {
                value: 'Soldano',
                label: 'Soldano'
            },
            {
                value: 'Soleminis',
                label: 'Soleminis'
            },
            {
                value: 'Solero',
                label: 'Solero'
            },
            {
                value: 'Solesino',
                label: 'Solesino'
            },
            {
                value: 'Soleto',
                label: 'Soleto'
            },
            {
                value: 'Solferino',
                label: 'Solferino'
            },
            {
                value: 'Soliera',
                label: 'Soliera'
            },
            {
                value: 'Solignano',
                label: 'Solignano'
            },
            {
                value: 'Solofra',
                label: 'Solofra'
            },
            {
                value: 'Solonghello',
                label: 'Solonghello'
            },
            {
                value: 'Solopaca',
                label: 'Solopaca'
            },
            {
                value: 'Solto Collina',
                label: 'Solto Collina'
            },
            {
                value: 'Solza',
                label: 'Solza'
            },
            {
                value: 'Somaglia',
                label: 'Somaglia'
            },
            {
                value: 'Somano',
                label: 'Somano'
            },
            {
                value: 'Somma Lombardo',
                label: 'Somma Lombardo'
            },
            {
                value: 'Somma Vesuviana',
                label: 'Somma Vesuviana'
            },
            {
                value: 'Sommacampagna',
                label: 'Sommacampagna'
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
                value: 'Sommatino',
                label: 'Sommatino'
            },
            {
                value: 'Sommo',
                label: 'Sommo'
            },
            {
                value: 'Sona',
                label: 'Sona'
            },
            {
                value: 'Soncino',
                label: 'Soncino'
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
                value: 'Songavazzo',
                label: 'Songavazzo'
            },
            {
                value: 'Sonico',
                label: 'Sonico'
            },
            {
                value: 'Sonnino',
                label: 'Sonnino'
            },
            {
                value: 'Sora',
                label: 'Sora'
            },
            {
                value: 'Soraga di Fassa',
                label: 'Soraga di Fassa'
            },
            {
                value: 'Soragna',
                label: 'Soragna'
            },
            {
                value: 'Sorano',
                label: 'Sorano'
            },
            {
                value: 'Sorbo San Basile',
                label: 'Sorbo San Basile'
            },
            {
                value: 'Sorbo Serpico',
                label: 'Sorbo Serpico'
            },
            {
                value: 'Sorbolo Mezzani',
                label: 'Sorbolo Mezzani'
            },
            {
                value: 'Sordevolo',
                label: 'Sordevolo'
            },
            {
                value: 'Sordio',
                label: 'Sordio'
            },
            {
                value: 'Soresina',
                label: 'Soresina'
            },
            {
                value: 'Sorgà',
                label: 'Sorgà'
            },
            {
                value: 'Sorgono',
                label: 'Sorgono'
            },
            {
                value: 'Sori',
                label: 'Sori'
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
                value: 'Soriano nel Cimino',
                label: 'Soriano nel Cimino'
            },
            {
                value: 'Sorico',
                label: 'Sorico'
            },
            {
                value: 'Soriso',
                label: 'Soriso'
            },
            {
                value: 'Sorisole',
                label: 'Sorisole'
            },
            {
                value: 'Sormano',
                label: 'Sormano'
            },
            {
                value: 'Sorradile',
                label: 'Sorradile'
            },
            {
                value: 'Sorrento',
                label: 'Sorrento'
            },
            {
                value: 'Sorso',
                label: 'Sorso'
            },
            {
                value: 'Sortino',
                label: 'Sortino'
            },
            {
                value: 'Sospiro',
                label: 'Sospiro'
            },
            {
                value: 'Sospirolo',
                label: 'Sospirolo'
            },
            {
                value: 'Sossano',
                label: 'Sossano'
            },
            {
                value: 'Sostegno',
                label: 'Sostegno'
            },
            {
                value: 'Sotto il Monte Giovanni XXIII',
                label: 'Sotto il Monte Giovanni XXIII'
            },
            {
                value: 'Sover',
                label: 'Sover'
            },
            {
                value: 'Soverato',
                label: 'Soverato'
            },
            {
                value: 'Sovere',
                label: 'Sovere'
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
                value: 'Soverzene',
                label: 'Soverzene'
            },
            {
                value: 'Sovicille',
                label: 'Sovicille'
            },
            {
                value: 'Sovico',
                label: 'Sovico'
            },
            {
                value: 'Sovizzo',
                label: 'Sovizzo'
            },
            {
                value: 'Sovramonte',
                label: 'Sovramonte'
            },
            {
                value: 'Sozzago',
                label: 'Sozzago'
            },
            {
                value: 'Spadafora',
                label: 'Spadafora'
            },
            {
                value: 'Spadola',
                label: 'Spadola'
            },
            {
                value: 'Sparanise',
                label: 'Sparanise'
            },
            {
                value: 'Sparone',
                label: 'Sparone'
            },
            {
                value: 'Specchia',
                label: 'Specchia'
            },
            {
                value: 'Spello',
                label: 'Spello'
            },
            {
                value: 'Sperlinga',
                label: 'Sperlinga'
            },
            {
                value: 'Sperlonga',
                label: 'Sperlonga'
            },
            {
                value: 'Sperone',
                label: 'Sperone'
            },
            {
                value: 'Spessa',
                label: 'Spessa'
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
                value: 'Spiazzo',
                label: 'Spiazzo'
            },
            {
                value: 'Spigno Monferrato',
                label: 'Spigno Monferrato'
            },
            {
                value: 'Spigno Saturnia',
                label: 'Spigno Saturnia'
            },
            {
                value: 'Spilamberto',
                label: 'Spilamberto'
            },
            {
                value: 'Spilimbergo',
                label: 'Spilimbergo'
            },
            {
                value: 'Spilinga',
                label: 'Spilinga'
            },
            {
                value: 'Spinadesco',
                label: 'Spinadesco'
            },
            {
                value: 'Spinazzola',
                label: 'Spinazzola'
            },
            {
                value: 'Spinea',
                label: 'Spinea'
            },
            {
                value: 'Spineda',
                label: 'Spineda'
            },
            {
                value: 'Spinete',
                label: 'Spinete'
            },
            {
                value: 'Spineto Scrivia',
                label: 'Spineto Scrivia'
            },
            {
                value: 'Spinetoli',
                label: 'Spinetoli'
            },
            {
                value: 'Spino d\'Adda',
                label: 'Spino d\'Adda'
            },
            {
                value: 'Spinone al Lago',
                label: 'Spinone al Lago'
            },
            {
                value: 'Spinoso',
                label: 'Spinoso'
            },
            {
                value: 'Spirano',
                label: 'Spirano'
            },
            {
                value: 'Spoleto',
                label: 'Spoleto'
            },
            {
                value: 'Spoltore',
                label: 'Spoltore'
            },
            {
                value: 'Spongano',
                label: 'Spongano'
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
                value: 'Spotorno',
                label: 'Spotorno'
            },
            {
                value: 'Spresiano',
                label: 'Spresiano'
            },
            {
                value: 'Spriana',
                label: 'Spriana'
            },
            {
                value: 'Squillace',
                label: 'Squillace'
            },
            {
                value: 'Squinzano',
                label: 'Squinzano'
            },
            {
                value: 'Staffolo',
                label: 'Staffolo'
            },
            {
                value: 'Stagno Lombardo',
                label: 'Stagno Lombardo'
            },
            {
                value: 'Staiti',
                label: 'Staiti'
            },
            {
                value: 'Stalettì',
                label: 'Stalettì'
            },
            {
                value: 'Stanghella',
                label: 'Stanghella'
            },
            {
                value: 'Staranzano',
                label: 'Staranzano'
            },
            {
                value: 'Statte',
                label: 'Statte'
            },
            {
                value: 'Stazzano',
                label: 'Stazzano'
            },
            {
                value: 'Stazzema',
                label: 'Stazzema'
            },
            {
                value: 'Stazzona',
                label: 'Stazzona'
            },
            {
                value: 'Stefanaconi',
                label: 'Stefanaconi'
            },
            {
                value: 'Stella',
                label: 'Stella'
            },
            {
                value: 'Stella Cilento',
                label: 'Stella Cilento'
            },
            {
                value: 'Stellanello',
                label: 'Stellanello'
            },
            {
                value: 'Stelvio',
                label: 'Stelvio'
            },
            {
                value: 'Stenico',
                label: 'Stenico'
            },
            {
                value: 'Sternatia',
                label: 'Sternatia'
            },
            {
                value: 'Stezzano',
                label: 'Stezzano'
            },
            {
                value: 'Stienta',
                label: 'Stienta'
            },
            {
                value: 'Stigliano',
                label: 'Stigliano'
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
                value: 'Stimigliano',
                label: 'Stimigliano'
            },
            {
                value: 'Stintino',
                label: 'Stintino'
            },
            {
                value: 'Stio',
                label: 'Stio'
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
                value: 'Storo',
                label: 'Storo'
            },
            {
                value: 'Stra',
                label: 'Stra'
            },
            {
                value: 'Stradella',
                label: 'Stradella'
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
                value: 'Strangolagalli',
                label: 'Strangolagalli'
            },
            {
                value: 'Stregna',
                label: 'Stregna'
            },
            {
                value: 'Strembo',
                label: 'Strembo'
            },
            {
                value: 'Stresa',
                label: 'Stresa'
            },
            {
                value: 'Strevi',
                label: 'Strevi'
            },
            {
                value: 'Striano',
                label: 'Striano'
            },
            {
                value: 'Strona',
                label: 'Strona'
            },
            {
                value: 'Stroncone',
                label: 'Stroncone'
            },
            {
                value: 'Strongoli',
                label: 'Strongoli'
            },
            {
                value: 'Stroppiana',
                label: 'Stroppiana'
            },
            {
                value: 'Stroppo',
                label: 'Stroppo'
            },
            {
                value: 'Strozza',
                label: 'Strozza'
            },
            {
                value: 'Sturno',
                label: 'Sturno'
            },
            {
                value: 'Suardi',
                label: 'Suardi'
            },
            {
                value: 'Subbiano',
                label: 'Subbiano'
            },
            {
                value: 'Subiaco',
                label: 'Subiaco'
            },
            {
                value: 'Succivo',
                label: 'Succivo'
            },
            {
                value: 'Sueglio',
                label: 'Sueglio'
            },
            {
                value: 'Suelli',
                label: 'Suelli'
            },
            {
                value: 'Suello',
                label: 'Suello'
            },
            {
                value: 'Suisio',
                label: 'Suisio'
            },
            {
                value: 'Sulbiate',
                label: 'Sulbiate'
            },
            {
                value: 'Sulmona',
                label: 'Sulmona'
            },
            {
                value: 'Sulzano',
                label: 'Sulzano'
            },
            {
                value: 'Sumirago',
                label: 'Sumirago'
            },
            {
                value: 'Summonte',
                label: 'Summonte'
            },
            {
                value: 'Suni',
                label: 'Suni'
            },
            {
                value: 'Suno',
                label: 'Suno'
            },
            {
                value: 'Supersano',
                label: 'Supersano'
            },
            {
                value: 'Supino',
                label: 'Supino'
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
                value: 'Susa',
                label: 'Susa'
            },
            {
                value: 'Susegana',
                label: 'Susegana'
            },
            {
                value: 'Sustinente',
                label: 'Sustinente'
            },
            {
                value: 'Sutera',
                label: 'Sutera'
            },
            {
                value: 'Sutri',
                label: 'Sutri'
            },
            {
                value: 'Sutrio',
                label: 'Sutrio'
            },
            {
                value: 'Suvereto',
                label: 'Suvereto'
            },
            {
                value: 'Suzzara',
                label: 'Suzzara'
            },
            {
                value: 'Taceno',
                label: 'Taceno'
            },
            {
                value: 'Tadasuni',
                label: 'Tadasuni'
            },
            {
                value: 'Taggia',
                label: 'Taggia'
            },
            {
                value: 'Tagliacozzo',
                label: 'Tagliacozzo'
            },
            {
                value: 'Taglio di Po',
                label: 'Taglio di Po'
            },
            {
                value: 'Tagliolo Monferrato',
                label: 'Tagliolo Monferrato'
            },
            {
                value: 'Taibon Agordino',
                label: 'Taibon Agordino'
            },
            {
                value: 'Taino',
                label: 'Taino'
            },
            {
                value: 'Taipana',
                label: 'Taipana'
            },
            {
                value: 'Talamello',
                label: 'Talamello'
            },
            {
                value: 'Talamona',
                label: 'Talamona'
            },
            {
                value: 'Talana',
                label: 'Talana'
            },
            {
                value: 'Taleggio',
                label: 'Taleggio'
            },
            {
                value: 'Talla',
                label: 'Talla'
            },
            {
                value: 'Talmassons',
                label: 'Talmassons'
            },
            {
                value: 'Tambre',
                label: 'Tambre'
            },
            {
                value: 'Taormina',
                label: 'Taormina'
            },
            {
                value: 'Tarano',
                label: 'Tarano'
            },
            {
                value: 'Taranta Peligna',
                label: 'Taranta Peligna'
            },
            {
                value: 'Tarantasca',
                label: 'Tarantasca'
            },
            {
                value: 'Taranto',
                label: 'Taranto'
            },
            {
                value: 'Tarcento',
                label: 'Tarcento'
            },
            {
                value: 'Tarquinia',
                label: 'Tarquinia'
            },
            {
                value: 'Tarsia',
                label: 'Tarsia'
            },
            {
                value: 'Tartano',
                label: 'Tartano'
            },
            {
                value: 'Tarvisio',
                label: 'Tarvisio'
            },
            {
                value: 'Tarzo',
                label: 'Tarzo'
            },
            {
                value: 'Tassarolo',
                label: 'Tassarolo'
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
                value: 'Taurianova',
                label: 'Taurianova'
            },
            {
                value: 'Taurisano',
                label: 'Taurisano'
            },
            {
                value: 'Tavagnacco',
                label: 'Tavagnacco'
            },
            {
                value: 'Tavagnasco',
                label: 'Tavagnasco'
            },
            {
                value: 'Tavazzano con Villavesco',
                label: 'Tavazzano con Villavesco'
            },
            {
                value: 'Tavenna',
                label: 'Tavenna'
            },
            {
                value: 'Taverna',
                label: 'Taverna'
            },
            {
                value: 'Tavernerio',
                label: 'Tavernerio'
            },
            {
                value: 'Tavernola Bergamasca',
                label: 'Tavernola Bergamasca'
            },
            {
                value: 'Tavernole sul Mella',
                label: 'Tavernole sul Mella'
            },
            {
                value: 'Taviano',
                label: 'Taviano'
            },
            {
                value: 'Tavigliano',
                label: 'Tavigliano'
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
                value: 'Teana',
                label: 'Teana'
            },
            {
                value: 'Teano',
                label: 'Teano'
            },
            {
                value: 'Teggiano',
                label: 'Teggiano'
            },
            {
                value: 'Teglio',
                label: 'Teglio'
            },
            {
                value: 'Teglio Veneto',
                label: 'Teglio Veneto'
            },
            {
                value: 'Telese Terme',
                label: 'Telese Terme'
            },
            {
                value: 'Telgate',
                label: 'Telgate'
            },
            {
                value: 'Telti',
                label: 'Telti'
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
                value: 'Tempio Pausania',
                label: 'Tempio Pausania'
            },
            {
                value: 'Temù',
                label: 'Temù'
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
                value: 'Teolo',
                label: 'Teolo'
            },
            {
                value: 'Teora',
                label: 'Teora'
            },
            {
                value: 'Teramo',
                label: 'Teramo'
            },
            {
                value: 'Terdobbiate',
                label: 'Terdobbiate'
            },
            {
                value: 'Terelle',
                label: 'Terelle'
            },
            {
                value: 'Terento',
                label: 'Terento'
            },
            {
                value: 'Terenzo',
                label: 'Terenzo'
            },
            {
                value: 'Tergu',
                label: 'Tergu'
            },
            {
                value: 'Terlano',
                label: 'Terlano'
            },
            {
                value: 'Terlizzi',
                label: 'Terlizzi'
            },
            {
                value: 'Terme Vigliatore',
                label: 'Terme Vigliatore'
            },
            {
                value: 'Termeno sulla strada del vino',
                label: 'Termeno sulla strada del vino'
            },
            {
                value: 'Termini Imerese',
                label: 'Termini Imerese'
            },
            {
                value: 'Termoli',
                label: 'Termoli'
            },
            {
                value: 'Ternate',
                label: 'Ternate'
            },
            {
                value: 'Ternengo',
                label: 'Ternengo'
            },
            {
                value: 'Terni',
                label: 'Terni'
            },
            {
                value: 'Terno d\'Isola',
                label: 'Terno d\'Isola'
            },
            {
                value: 'Terracina',
                label: 'Terracina'
            },
            {
                value: 'Terragnolo',
                label: 'Terragnolo'
            },
            {
                value: 'Terralba',
                label: 'Terralba'
            },
            {
                value: 'Terranova da Sibari',
                label: 'Terranova da Sibari'
            },
            {
                value: 'Terranova dei Passerini',
                label: 'Terranova dei Passerini'
            },
            {
                value: 'Terranova di Pollino',
                label: 'Terranova di Pollino'
            },
            {
                value: 'Terranova Sappo Minulio',
                label: 'Terranova Sappo Minulio'
            },
            {
                value: 'Terranuova Bracciolini',
                label: 'Terranuova Bracciolini'
            },
            {
                value: 'Terrasini',
                label: 'Terrasini'
            },
            {
                value: 'Terrassa Padovana',
                label: 'Terrassa Padovana'
            },
            {
                value: 'Terravecchia',
                label: 'Terravecchia'
            },
            {
                value: 'Terrazzo',
                label: 'Terrazzo'
            },
            {
                value: 'Terre d\'Adige',
                label: 'Terre d\'Adige'
            },
            {
                value: 'Terre del Reno',
                label: 'Terre del Reno'
            },
            {
                value: 'Terre Roveresche',
                label: 'Terre Roveresche'
            },
            {
                value: 'Terricciola',
                label: 'Terricciola'
            },
            {
                value: 'Terruggia',
                label: 'Terruggia'
            },
            {
                value: 'Tertenia',
                label: 'Tertenia'
            },
            {
                value: 'Terzigno',
                label: 'Terzigno'
            },
            {
                value: 'Terzo',
                label: 'Terzo'
            },
            {
                value: 'Terzo d\'Aquileia',
                label: 'Terzo d\'Aquileia'
            },
            {
                value: 'Terzolas',
                label: 'Terzolas'
            },
            {
                value: 'Terzorio',
                label: 'Terzorio'
            },
            {
                value: 'Tesero',
                label: 'Tesero'
            },
            {
                value: 'Tesimo',
                label: 'Tesimo'
            },
            {
                value: 'Tessennano',
                label: 'Tessennano'
            },
            {
                value: 'Testico',
                label: 'Testico'
            },
            {
                value: 'Teti',
                label: 'Teti'
            },
            {
                value: 'Teulada',
                label: 'Teulada'
            },
            {
                value: 'Teverola',
                label: 'Teverola'
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
                value: 'Thiesi',
                label: 'Thiesi'
            },
            {
                value: 'Tiana',
                label: 'Tiana'
            },
            {
                value: 'Ticengo',
                label: 'Ticengo'
            },
            {
                value: 'Ticineto',
                label: 'Ticineto'
            },
            {
                value: 'Tiggiano',
                label: 'Tiggiano'
            },
            {
                value: 'Tiglieto',
                label: 'Tiglieto'
            },
            {
                value: 'Tigliole',
                label: 'Tigliole'
            },
            {
                value: 'Tignale',
                label: 'Tignale'
            },
            {
                value: 'Tinnura',
                label: 'Tinnura'
            },
            {
                value: 'Tione degli Abruzzi',
                label: 'Tione degli Abruzzi'
            },
            {
                value: 'Tione di Trento',
                label: 'Tione di Trento'
            },
            {
                value: 'Tirano',
                label: 'Tirano'
            },
            {
                value: 'Tires',
                label: 'Tires'
            },
            {
                value: 'Tiriolo',
                label: 'Tiriolo'
            },
            {
                value: 'Tirolo',
                label: 'Tirolo'
            },
            {
                value: 'Tissi',
                label: 'Tissi'
            },
            {
                value: 'Tito',
                label: 'Tito'
            },
            {
                value: 'Tivoli',
                label: 'Tivoli'
            },
            {
                value: 'Tizzano Val Parma',
                label: 'Tizzano Val Parma'
            },
            {
                value: 'Toano',
                label: 'Toano'
            },
            {
                value: 'Tocco Caudio',
                label: 'Tocco Caudio'
            },
            {
                value: 'Tocco da Casauria',
                label: 'Tocco da Casauria'
            },
            {
                value: 'Toceno',
                label: 'Toceno'
            },
            {
                value: 'Todi',
                label: 'Todi'
            },
            {
                value: 'Toffia',
                label: 'Toffia'
            },
            {
                value: 'Toirano',
                label: 'Toirano'
            },
            {
                value: 'Tolentino',
                label: 'Tolentino'
            },
            {
                value: 'Tolfa',
                label: 'Tolfa'
            },
            {
                value: 'Tollegno',
                label: 'Tollegno'
            },
            {
                value: 'Tollo',
                label: 'Tollo'
            },
            {
                value: 'Tolmezzo',
                label: 'Tolmezzo'
            },
            {
                value: 'Tolve',
                label: 'Tolve'
            },
            {
                value: 'Tombolo',
                label: 'Tombolo'
            },
            {
                value: 'Ton',
                label: 'Ton'
            },
            {
                value: 'Tonara',
                label: 'Tonara'
            },
            {
                value: 'Tonco',
                label: 'Tonco'
            },
            {
                value: 'Tonezza del Cimone',
                label: 'Tonezza del Cimone'
            },
            {
                value: 'Tora e Piccilli',
                label: 'Tora e Piccilli'
            },
            {
                value: 'Torano Castello',
                label: 'Torano Castello'
            },
            {
                value: 'Torano Nuovo',
                label: 'Torano Nuovo'
            },
            {
                value: 'Torbole Casaglia',
                label: 'Torbole Casaglia'
            },
            {
                value: 'Torcegno',
                label: 'Torcegno'
            },
            {
                value: 'Torchiara',
                label: 'Torchiara'
            },
            {
                value: 'Torchiarolo',
                label: 'Torchiarolo'
            },
            {
                value: 'Torella dei Lombardi',
                label: 'Torella dei Lombardi'
            },
            {
                value: 'Torella del Sannio',
                label: 'Torella del Sannio'
            },
            {
                value: 'Torgiano',
                label: 'Torgiano'
            },
            {
                value: 'Torgnon',
                label: 'Torgnon'
            },
            {
                value: 'Torino',
                label: 'Torino'
            },
            {
                value: 'Torino di Sangro',
                label: 'Torino di Sangro'
            },
            {
                value: 'Toritto',
                label: 'Toritto'
            },
            {
                value: 'Torlino Vimercati',
                label: 'Torlino Vimercati'
            },
            {
                value: 'Tornaco',
                label: 'Tornaco'
            },
            {
                value: 'Tornareccio',
                label: 'Tornareccio'
            },
            {
                value: 'Tornata',
                label: 'Tornata'
            },
            {
                value: 'Tornimparte',
                label: 'Tornimparte'
            },
            {
                value: 'Torno',
                label: 'Torno'
            },
            {
                value: 'Tornolo',
                label: 'Tornolo'
            },
            {
                value: 'Toro',
                label: 'Toro'
            },
            {
                value: 'Torpè',
                label: 'Torpè'
            },
            {
                value: 'Torraca',
                label: 'Torraca'
            },
            {
                value: 'Torralba',
                label: 'Torralba'
            },
            {
                value: 'Torrazza Coste',
                label: 'Torrazza Coste'
            },
            {
                value: 'Torrazza Piemonte',
                label: 'Torrazza Piemonte'
            },
            {
                value: 'Torrazzo',
                label: 'Torrazzo'
            },
            {
                value: 'Torre Annunziata',
                label: 'Torre Annunziata'
            },
            {
                value: 'Torre Beretti e Castellaro',
                label: 'Torre Beretti e Castellaro'
            },
            {
                value: 'Torre Boldone',
                label: 'Torre Boldone'
            },
            {
                value: 'Torre Bormida',
                label: 'Torre Bormida'
            },
            {
                value: 'Torre Cajetani',
                label: 'Torre Cajetani'
            },
            {
                value: 'Torre Canavese',
                label: 'Torre Canavese'
            },
            {
                value: 'Torre d\'Arese',
                label: 'Torre d\'Arese'
            },
            {
                value: 'Torre d\'Isola',
                label: 'Torre d\'Isola'
            },
            {
                value: 'Torre de\' Busi',
                label: 'Torre de\' Busi'
            },
            {
                value: 'Torre de\' Negri',
                label: 'Torre de\' Negri'
            },
            {
                value: 'Torre de\' Passeri',
                label: 'Torre de\' Passeri'
            },
            {
                value: 'Torre de\' Picenardi',
                label: 'Torre de\' Picenardi'
            },
            {
                value: 'Torre de\' Roveri',
                label: 'Torre de\' Roveri'
            },
            {
                value: 'Torre del Greco',
                label: 'Torre del Greco'
            },
            {
                value: 'Torre di Mosto',
                label: 'Torre di Mosto'
            },
            {
                value: 'Torre di Ruggiero',
                label: 'Torre di Ruggiero'
            },
            {
                value: 'Torre di Santa Maria',
                label: 'Torre di Santa Maria'
            },
            {
                value: 'Torre Le Nocelle',
                label: 'Torre Le Nocelle'
            },
            {
                value: 'Torre Mondovì',
                label: 'Torre Mondovì'
            },
            {
                value: 'Torre Orsaia',
                label: 'Torre Orsaia'
            },
            {
                value: 'Torre Pallavicina',
                label: 'Torre Pallavicina'
            },
            {
                value: 'Torre Pellice',
                label: 'Torre Pellice'
            },
            {
                value: 'Torre San Giorgio',
                label: 'Torre San Giorgio'
            },
            {
                value: 'Torre San Patrizio',
                label: 'Torre San Patrizio'
            },
            {
                value: 'Torre Santa Susanna',
                label: 'Torre Santa Susanna'
            },
            {
                value: 'Torreano',
                label: 'Torreano'
            },
            {
                value: 'Torrebelvicino',
                label: 'Torrebelvicino'
            },
            {
                value: 'Torrebruna',
                label: 'Torrebruna'
            },
            {
                value: 'Torrecuso',
                label: 'Torrecuso'
            },
            {
                value: 'Torreglia',
                label: 'Torreglia'
            },
            {
                value: 'Torregrotta',
                label: 'Torregrotta'
            },
            {
                value: 'Torremaggiore',
                label: 'Torremaggiore'
            },
            {
                value: 'Torrenova',
                label: 'Torrenova'
            },
            {
                value: 'Torresina',
                label: 'Torresina'
            },
            {
                value: 'Torretta',
                label: 'Torretta'
            },
            {
                value: 'Torrevecchia Pia',
                label: 'Torrevecchia Pia'
            },
            {
                value: 'Torrevecchia Teatina',
                label: 'Torrevecchia Teatina'
            },
            {
                value: 'Torri del Benaco',
                label: 'Torri del Benaco'
            },
            {
                value: 'Torri di Quartesolo',
                label: 'Torri di Quartesolo'
            },
            {
                value: 'Torri in Sabina',
                label: 'Torri in Sabina'
            },
            {
                value: 'Torrice',
                label: 'Torrice'
            },
            {
                value: 'Torricella',
                label: 'Torricella'
            },
            {
                value: 'Torricella del Pizzo',
                label: 'Torricella del Pizzo'
            },
            {
                value: 'Torricella in Sabina',
                label: 'Torricella in Sabina'
            },
            {
                value: 'Torricella Peligna',
                label: 'Torricella Peligna'
            },
            {
                value: 'Torricella Sicura',
                label: 'Torricella Sicura'
            },
            {
                value: 'Torricella Verzate',
                label: 'Torricella Verzate'
            },
            {
                value: 'Torriglia',
                label: 'Torriglia'
            },
            {
                value: 'Torrile',
                label: 'Torrile'
            },
            {
                value: 'Torrioni',
                label: 'Torrioni'
            },
            {
                value: 'Torrita di Siena',
                label: 'Torrita di Siena'
            },
            {
                value: 'Torrita Tiberina',
                label: 'Torrita Tiberina'
            },
            {
                value: 'Tortolì',
                label: 'Tortolì'
            },
            {
                value: 'Tortona',
                label: 'Tortona'
            },
            {
                value: 'Tortora',
                label: 'Tortora'
            },
            {
                value: 'Tortorella',
                label: 'Tortorella'
            },
            {
                value: 'Tortoreto',
                label: 'Tortoreto'
            },
            {
                value: 'Tortorici',
                label: 'Tortorici'
            },
            {
                value: 'Torviscosa',
                label: 'Torviscosa'
            },
            {
                value: 'Toscolano-Maderno',
                label: 'Toscolano-Maderno'
            },
            {
                value: 'Tossicia',
                label: 'Tossicia'
            },
            {
                value: 'Tovo di Sant\'Agata',
                label: 'Tovo di Sant\'Agata'
            },
            {
                value: 'Tovo San Giacomo',
                label: 'Tovo San Giacomo'
            },
            {
                value: 'Trabia',
                label: 'Trabia'
            },
            {
                value: 'Tradate',
                label: 'Tradate'
            },
            {
                value: 'Tramatza',
                label: 'Tramatza'
            },
            {
                value: 'Trambileno',
                label: 'Trambileno'
            },
            {
                value: 'Tramonti',
                label: 'Tramonti'
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
                value: 'Tramutola',
                label: 'Tramutola'
            },
            {
                value: 'Trana',
                label: 'Trana'
            },
            {
                value: 'Trani',
                label: 'Trani'
            },
            {
                value: 'Traona',
                label: 'Traona'
            },
            {
                value: 'Trapani',
                label: 'Trapani'
            },
            {
                value: 'Trappeto',
                label: 'Trappeto'
            },
            {
                value: 'Trarego Viggiona',
                label: 'Trarego Viggiona'
            },
            {
                value: 'Trasacco',
                label: 'Trasacco'
            },
            {
                value: 'Trasaghis',
                label: 'Trasaghis'
            },
            {
                value: 'Trasquera',
                label: 'Trasquera'
            },
            {
                value: 'Tratalias',
                label: 'Tratalias'
            },
            {
                value: 'Travacò Siccomario',
                label: 'Travacò Siccomario'
            },
            {
                value: 'Travagliato',
                label: 'Travagliato'
            },
            {
                value: 'Travedona-Monate',
                label: 'Travedona-Monate'
            },
            {
                value: 'Traversella',
                label: 'Traversella'
            },
            {
                value: 'Traversetolo',
                label: 'Traversetolo'
            },
            {
                value: 'Traves',
                label: 'Traves'
            },
            {
                value: 'Travesio',
                label: 'Travesio'
            },
            {
                value: 'Travo',
                label: 'Travo'
            },
            {
                value: 'Tre Ville',
                label: 'Tre Ville'
            },
            {
                value: 'Trebaseleghe',
                label: 'Trebaseleghe'
            },
            {
                value: 'Trebisacce',
                label: 'Trebisacce'
            },
            {
                value: 'Trecase',
                label: 'Trecase'
            },
            {
                value: 'Trecastagni',
                label: 'Trecastagni'
            },
            {
                value: 'Trecastelli',
                label: 'Trecastelli'
            },
            {
                value: 'Trecate',
                label: 'Trecate'
            },
            {
                value: 'Trecchina',
                label: 'Trecchina'
            },
            {
                value: 'Trecenta',
                label: 'Trecenta'
            },
            {
                value: 'Tredozio',
                label: 'Tredozio'
            },
            {
                value: 'Treglio',
                label: 'Treglio'
            },
            {
                value: 'Tregnago',
                label: 'Tregnago'
            },
            {
                value: 'Treia',
                label: 'Treia'
            },
            {
                value: 'Treiso',
                label: 'Treiso'
            },
            {
                value: 'Tremestieri Etneo',
                label: 'Tremestieri Etneo'
            },
            {
                value: 'Tremezzina',
                label: 'Tremezzina'
            },
            {
                value: 'Tremosine sul Garda',
                label: 'Tremosine sul Garda'
            },
            {
                value: 'Trentinara',
                label: 'Trentinara'
            },
            {
                value: 'Trento',
                label: 'Trento'
            },
            {
                value: 'Trentola Ducenta',
                label: 'Trentola Ducenta'
            },
            {
                value: 'Trenzano',
                label: 'Trenzano'
            },
            {
                value: 'Treppo Grande',
                label: 'Treppo Grande'
            },
            {
                value: 'Treppo Ligosullo',
                label: 'Treppo Ligosullo'
            },
            {
                value: 'Trepuzzi',
                label: 'Trepuzzi'
            },
            {
                value: 'Trequanda',
                label: 'Trequanda'
            },
            {
                value: 'Tresana',
                label: 'Tresana'
            },
            {
                value: 'Trescore Balneario',
                label: 'Trescore Balneario'
            },
            {
                value: 'Trescore Cremasco',
                label: 'Trescore Cremasco'
            },
            {
                value: 'Tresignana',
                label: 'Tresignana'
            },
            {
                value: 'Tresivio',
                label: 'Tresivio'
            },
            {
                value: 'Tresnuraghes',
                label: 'Tresnuraghes'
            },
            {
                value: 'Trevenzuolo',
                label: 'Trevenzuolo'
            },
            {
                value: 'Trevi',
                label: 'Trevi'
            },
            {
                value: 'Trevi nel Lazio',
                label: 'Trevi nel Lazio'
            },
            {
                value: 'Trevico',
                label: 'Trevico'
            },
            {
                value: 'Treviglio',
                label: 'Treviglio'
            },
            {
                value: 'Trevignano',
                label: 'Trevignano'
            },
            {
                value: 'Trevignano Romano',
                label: 'Trevignano Romano'
            },
            {
                value: 'Treville',
                label: 'Treville'
            },
            {
                value: 'Treviolo',
                label: 'Treviolo'
            },
            {
                value: 'Treviso',
                label: 'Treviso'
            },
            {
                value: 'Treviso Bresciano',
                label: 'Treviso Bresciano'
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
                value: 'Trezzo Tinella',
                label: 'Trezzo Tinella'
            },
            {
                value: 'Trezzone',
                label: 'Trezzone'
            },
            {
                value: 'Tribano',
                label: 'Tribano'
            },
            {
                value: 'Tribiano',
                label: 'Tribiano'
            },
            {
                value: 'Tribogna',
                label: 'Tribogna'
            },
            {
                value: 'Tricarico',
                label: 'Tricarico'
            },
            {
                value: 'Tricase',
                label: 'Tricase'
            },
            {
                value: 'Tricerro',
                label: 'Tricerro'
            },
            {
                value: 'Tricesimo',
                label: 'Tricesimo'
            },
            {
                value: 'Triei',
                label: 'Triei'
            },
            {
                value: 'Trieste',
                label: 'Trieste'
            },
            {
                value: 'Triggiano',
                label: 'Triggiano'
            },
            {
                value: 'Trigolo',
                label: 'Trigolo'
            },
            {
                value: 'Trinità',
                label: 'Trinità'
            },
            {
                value: 'Trinità d\'Agultu e Vignola',
                label: 'Trinità d\'Agultu e Vignola'
            },
            {
                value: 'Trinitapoli',
                label: 'Trinitapoli'
            },
            {
                value: 'Trino',
                label: 'Trino'
            },
            {
                value: 'Triora',
                label: 'Triora'
            },
            {
                value: 'Tripi',
                label: 'Tripi'
            },
            {
                value: 'Trisobbio',
                label: 'Trisobbio'
            },
            {
                value: 'Trissino',
                label: 'Trissino'
            },
            {
                value: 'Triuggio',
                label: 'Triuggio'
            },
            {
                value: 'Trivento',
                label: 'Trivento'
            },
            {
                value: 'Trivigliano',
                label: 'Trivigliano'
            },
            {
                value: 'Trivignano Udinese',
                label: 'Trivignano Udinese'
            },
            {
                value: 'Trivigno',
                label: 'Trivigno'
            },
            {
                value: 'Trivolzio',
                label: 'Trivolzio'
            },
            {
                value: 'Trodena nel parco naturale',
                label: 'Trodena nel parco naturale'
            },
            {
                value: 'Trofarello',
                label: 'Trofarello'
            },
            {
                value: 'Troia',
                label: 'Troia'
            },
            {
                value: 'Troina',
                label: 'Troina'
            },
            {
                value: 'Tromello',
                label: 'Tromello'
            },
            {
                value: 'Trontano',
                label: 'Trontano'
            },
            {
                value: 'Tronzano Lago Maggiore',
                label: 'Tronzano Lago Maggiore'
            },
            {
                value: 'Tronzano Vercellese',
                label: 'Tronzano Vercellese'
            },
            {
                value: 'Tropea',
                label: 'Tropea'
            },
            {
                value: 'Trovo',
                label: 'Trovo'
            },
            {
                value: 'Truccazzano',
                label: 'Truccazzano'
            },
            {
                value: 'Tubre',
                label: 'Tubre'
            },
            {
                value: 'Tufara',
                label: 'Tufara'
            },
            {
                value: 'Tufillo',
                label: 'Tufillo'
            },
            {
                value: 'Tufino',
                label: 'Tufino'
            },
            {
                value: 'Tufo',
                label: 'Tufo'
            },
            {
                value: 'Tuglie',
                label: 'Tuglie'
            },
            {
                value: 'Tuili',
                label: 'Tuili'
            },
            {
                value: 'Tula',
                label: 'Tula'
            },
            {
                value: 'Tuoro sul Trasimeno',
                label: 'Tuoro sul Trasimeno'
            },
            {
                value: 'Turania',
                label: 'Turania'
            },
            {
                value: 'Turano Lodigiano',
                label: 'Turano Lodigiano'
            },
            {
                value: 'Turate',
                label: 'Turate'
            },
            {
                value: 'Turbigo',
                label: 'Turbigo'
            },
            {
                value: 'Turi',
                label: 'Turi'
            },
            {
                value: 'Turri',
                label: 'Turri'
            },
            {
                value: 'Turriaco',
                label: 'Turriaco'
            },
            {
                value: 'Turrivalignani',
                label: 'Turrivalignani'
            },
            {
                value: 'Tursi',
                label: 'Tursi'
            },
            {
                value: 'Tusa',
                label: 'Tusa'
            },
            {
                value: 'Tuscania',
                label: 'Tuscania'
            },
            {
                value: 'Ubiale Clanezzo',
                label: 'Ubiale Clanezzo'
            },
            {
                value: 'Uboldo',
                label: 'Uboldo'
            },
            {
                value: 'Ucria',
                label: 'Ucria'
            },
            {
                value: 'Udine',
                label: 'Udine'
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
                value: 'Uggiate-Trevano',
                label: 'Uggiate-Trevano'
            },
            {
                value: 'Ulà Tirso',
                label: 'Ulà Tirso'
            },
            {
                value: 'Ulassai',
                label: 'Ulassai'
            },
            {
                value: 'Ultimo',
                label: 'Ultimo'
            },
            {
                value: 'Umbertide',
                label: 'Umbertide'
            },
            {
                value: 'Umbriatico',
                label: 'Umbriatico'
            },
            {
                value: 'Urago d\'Oglio',
                label: 'Urago d\'Oglio'
            },
            {
                value: 'Uras',
                label: 'Uras'
            },
            {
                value: 'Urbana',
                label: 'Urbana'
            },
            {
                value: 'Urbania',
                label: 'Urbania'
            },
            {
                value: 'Urbe',
                label: 'Urbe'
            },
            {
                value: 'Urbino',
                label: 'Urbino'
            },
            {
                value: 'Urbisaglia',
                label: 'Urbisaglia'
            },
            {
                value: 'Urgnano',
                label: 'Urgnano'
            },
            {
                value: 'Uri',
                label: 'Uri'
            },
            {
                value: 'Ururi',
                label: 'Ururi'
            },
            {
                value: 'Urzulei',
                label: 'Urzulei'
            },
            {
                value: 'Uscio',
                label: 'Uscio'
            },
            {
                value: 'Usellus',
                label: 'Usellus'
            },
            {
                value: 'Usini',
                label: 'Usini'
            },
            {
                value: 'Usmate Velate',
                label: 'Usmate Velate'
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
                value: 'Ussassai',
                label: 'Ussassai'
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
                value: 'Ussita',
                label: 'Ussita'
            },
            {
                value: 'Ustica',
                label: 'Ustica'
            },
            {
                value: 'Uta',
                label: 'Uta'
            },
            {
                value: 'Uzzano',
                label: 'Uzzano'
            },
            {
                value: 'Vaccarizzo Albanese',
                label: 'Vaccarizzo Albanese'
            },
            {
                value: 'Vacone',
                label: 'Vacone'
            },
            {
                value: 'Vacri',
                label: 'Vacri'
            },
            {
                value: 'Vadena',
                label: 'Vadena'
            },
            {
                value: 'Vado Ligure',
                label: 'Vado Ligure'
            },
            {
                value: 'Vagli Sotto',
                label: 'Vagli Sotto'
            },
            {
                value: 'Vaglia',
                label: 'Vaglia'
            },
            {
                value: 'Vaglio Basilicata',
                label: 'Vaglio Basilicata'
            },
            {
                value: 'Vaglio Serra',
                label: 'Vaglio Serra'
            },
            {
                value: 'Vaiano',
                label: 'Vaiano'
            },
            {
                value: 'Vaiano Cremasco',
                label: 'Vaiano Cremasco'
            },
            {
                value: 'Vaie',
                label: 'Vaie'
            },
            {
                value: 'Vailate',
                label: 'Vailate'
            },
            {
                value: 'Vairano Patenora',
                label: 'Vairano Patenora'
            },
            {
                value: 'Vajont',
                label: 'Vajont'
            },
            {
                value: 'Val Brembilla',
                label: 'Val Brembilla'
            },
            {
                value: 'Val della Torre',
                label: 'Val della Torre'
            },
            {
                value: 'Val di Chy',
                label: 'Val di Chy'
            },
            {
                value: 'Val di Nizza',
                label: 'Val di Nizza'
            },
            {
                value: 'Val di Vizze',
                label: 'Val di Vizze'
            },
            {
                value: 'Val di Zoldo',
                label: 'Val di Zoldo'
            },
            {
                value: 'Val Liona',
                label: 'Val Liona'
            },
            {
                value: 'Val Masino',
                label: 'Val Masino'
            },
            {
                value: 'Val Rezzo',
                label: 'Val Rezzo'
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
                value: 'Valbrenta',
                label: 'Valbrenta'
            },
            {
                value: 'Valbrevenna',
                label: 'Valbrevenna'
            },
            {
                value: 'Valbrona',
                label: 'Valbrona'
            },
            {
                value: 'Valchiusa',
                label: 'Valchiusa'
            },
            {
                value: 'Valdagno',
                label: 'Valdagno'
            },
            {
                value: 'Valdaone',
                label: 'Valdaone'
            },
            {
                value: 'Valdaora',
                label: 'Valdaora'
            },
            {
                value: 'Valdastico',
                label: 'Valdastico'
            },
            {
                value: 'Valdengo',
                label: 'Valdengo'
            },
            {
                value: 'Valderice',
                label: 'Valderice'
            },
            {
                value: 'Valdidentro',
                label: 'Valdidentro'
            },
            {
                value: 'Valdieri',
                label: 'Valdieri'
            },
            {
                value: 'Valdilana',
                label: 'Valdilana'
            },
            {
                value: 'Valdina',
                label: 'Valdina'
            },
            {
                value: 'Valdisotto',
                label: 'Valdisotto'
            },
            {
                value: 'Valdobbiadene',
                label: 'Valdobbiadene'
            },
            {
                value: 'Valduggia',
                label: 'Valduggia'
            },
            {
                value: 'Valeggio',
                label: 'Valeggio'
            },
            {
                value: 'Valeggio sul Mincio',
                label: 'Valeggio sul Mincio'
            },
            {
                value: 'Valentano',
                label: 'Valentano'
            },
            {
                value: 'Valenza',
                label: 'Valenza'
            },
            {
                value: 'Valenzano',
                label: 'Valenzano'
            },
            {
                value: 'Valera Fratta',
                label: 'Valera Fratta'
            },
            {
                value: 'Valfabbrica',
                label: 'Valfabbrica'
            },
            {
                value: 'Valfenera',
                label: 'Valfenera'
            },
            {
                value: 'Valfloriana',
                label: 'Valfloriana'
            },
            {
                value: 'Valfornace',
                label: 'Valfornace'
            },
            {
                value: 'Valfurva',
                label: 'Valfurva'
            },
            {
                value: 'Valganna',
                label: 'Valganna'
            },
            {
                value: 'Valgioie',
                label: 'Valgioie'
            },
            {
                value: 'Valgoglio',
                label: 'Valgoglio'
            },
            {
                value: 'Valgrana',
                label: 'Valgrana'
            },
            {
                value: 'Valgreghentino',
                label: 'Valgreghentino'
            },
            {
                value: 'Valgrisenche',
                label: 'Valgrisenche'
            },
            {
                value: 'Valguarnera Caropepe',
                label: 'Valguarnera Caropepe'
            },
            {
                value: 'Vallada Agordina',
                label: 'Vallada Agordina'
            },
            {
                value: 'Vallanzengo',
                label: 'Vallanzengo'
            },
            {
                value: 'Vallarsa',
                label: 'Vallarsa'
            },
            {
                value: 'Vallata',
                label: 'Vallata'
            },
            {
                value: 'Valle Agricola',
                label: 'Valle Agricola'
            },
            {
                value: 'Valle Aurina',
                label: 'Valle Aurina'
            },
            {
                value: 'Valle Cannobina',
                label: 'Valle Cannobina'
            },
            {
                value: 'Valle Castellana',
                label: 'Valle Castellana'
            },
            {
                value: 'Valle dell\'Angelo',
                label: 'Valle dell\'Angelo'
            },
            {
                value: 'Valle di Cadore',
                label: 'Valle di Cadore'
            },
            {
                value: 'Valle di Casies',
                label: 'Valle di Casies'
            },
            {
                value: 'Valle di Maddaloni',
                label: 'Valle di Maddaloni'
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
                value: 'Valle San Nicolao',
                label: 'Valle San Nicolao'
            },
            {
                value: 'Vallebona',
                label: 'Vallebona'
            },
            {
                value: 'Vallecorsa',
                label: 'Vallecorsa'
            },
            {
                value: 'Vallecrosia',
                label: 'Vallecrosia'
            },
            {
                value: 'Valledolmo',
                label: 'Valledolmo'
            },
            {
                value: 'Valledoria',
                label: 'Valledoria'
            },
            {
                value: 'Vallefiorita',
                label: 'Vallefiorita'
            },
            {
                value: 'Vallefoglia',
                label: 'Vallefoglia'
            },
            {
                value: 'Vallelaghi',
                label: 'Vallelaghi'
            },
            {
                value: 'Vallelonga',
                label: 'Vallelonga'
            },
            {
                value: 'Vallelunga Pratameno',
                label: 'Vallelunga Pratameno'
            },
            {
                value: 'Vallemaio',
                label: 'Vallemaio'
            },
            {
                value: 'Vallepietra',
                label: 'Vallepietra'
            },
            {
                value: 'Vallerano',
                label: 'Vallerano'
            },
            {
                value: 'Vallermosa',
                label: 'Vallermosa'
            },
            {
                value: 'Vallerotonda',
                label: 'Vallerotonda'
            },
            {
                value: 'Vallesaccarda',
                label: 'Vallesaccarda'
            },
            {
                value: 'Valleve',
                label: 'Valleve'
            },
            {
                value: 'Valli del Pasubio',
                label: 'Valli del Pasubio'
            },
            {
                value: 'Vallinfreda',
                label: 'Vallinfreda'
            },
            {
                value: 'Vallio Terme',
                label: 'Vallio Terme'
            },
            {
                value: 'Vallo della Lucania',
                label: 'Vallo della Lucania'
            },
            {
                value: 'Vallo di Nera',
                label: 'Vallo di Nera'
            },
            {
                value: 'Vallo Torinese',
                label: 'Vallo Torinese'
            },
            {
                value: 'Valloriate',
                label: 'Valloriate'
            },
            {
                value: 'Valmacca',
                label: 'Valmacca'
            },
            {
                value: 'Valmadrera',
                label: 'Valmadrera'
            },
            {
                value: 'Valmontone',
                label: 'Valmontone'
            },
            {
                value: 'Valmorea',
                label: 'Valmorea'
            },
            {
                value: 'Valmozzola',
                label: 'Valmozzola'
            },
            {
                value: 'Valnegra',
                label: 'Valnegra'
            },
            {
                value: 'Valpelline',
                label: 'Valpelline'
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
                value: 'Valsamoggia',
                label: 'Valsamoggia'
            },
            {
                value: 'Valsavarenche',
                label: 'Valsavarenche'
            },
            {
                value: 'Valsinni',
                label: 'Valsinni'
            },
            {
                value: 'Valsolda',
                label: 'Valsolda'
            },
            {
                value: 'Valstrona',
                label: 'Valstrona'
            },
            {
                value: 'Valtopina',
                label: 'Valtopina'
            },
            {
                value: 'Valtorta',
                label: 'Valtorta'
            },
            {
                value: 'Valtournenche',
                label: 'Valtournenche'
            },
            {
                value: 'Valva',
                label: 'Valva'
            },
            {
                value: 'Valvarrone',
                label: 'Valvarrone'
            },
            {
                value: 'Valvasone Arzene',
                label: 'Valvasone Arzene'
            },
            {
                value: 'Valverde',
                label: 'Valverde'
            },
            {
                value: 'Valvestino',
                label: 'Valvestino'
            },
            {
                value: 'Vandoies',
                label: 'Vandoies'
            },
            {
                value: 'Vanzaghello',
                label: 'Vanzaghello'
            },
            {
                value: 'Vanzago',
                label: 'Vanzago'
            },
            {
                value: 'Vanzone con San Carlo',
                label: 'Vanzone con San Carlo'
            },
            {
                value: 'Vaprio d\'Adda',
                label: 'Vaprio d\'Adda'
            },
            {
                value: 'Vaprio d\'Agogna',
                label: 'Vaprio d\'Agogna'
            },
            {
                value: 'Varallo',
                label: 'Varallo'
            },
            {
                value: 'Varallo Pombia',
                label: 'Varallo Pombia'
            },
            {
                value: 'Varano Borghi',
                label: 'Varano Borghi'
            },
            {
                value: 'Varano de\' Melegari',
                label: 'Varano de\' Melegari'
            },
            {
                value: 'Varapodio',
                label: 'Varapodio'
            },
            {
                value: 'Varazze',
                label: 'Varazze'
            },
            {
                value: 'Varco Sabino',
                label: 'Varco Sabino'
            },
            {
                value: 'Varedo',
                label: 'Varedo'
            },
            {
                value: 'Varenna',
                label: 'Varenna'
            },
            {
                value: 'Varese',
                label: 'Varese'
            },
            {
                value: 'Varese Ligure',
                label: 'Varese Ligure'
            },
            {
                value: 'Varisella',
                label: 'Varisella'
            },
            {
                value: 'Varmo',
                label: 'Varmo'
            },
            {
                value: 'Varna',
                label: 'Varna'
            },
            {
                value: 'Varsi',
                label: 'Varsi'
            },
            {
                value: 'Varzi',
                label: 'Varzi'
            },
            {
                value: 'Varzo',
                label: 'Varzo'
            },
            {
                value: 'Vasanello',
                label: 'Vasanello'
            },
            {
                value: 'Vasia',
                label: 'Vasia'
            },
            {
                value: 'Vasto',
                label: 'Vasto'
            },
            {
                value: 'Vastogirardi',
                label: 'Vastogirardi'
            },
            {
                value: 'Vauda Canavese',
                label: 'Vauda Canavese'
            },
            {
                value: 'Vazzano',
                label: 'Vazzano'
            },
            {
                value: 'Vazzola',
                label: 'Vazzola'
            },
            {
                value: 'Vecchiano',
                label: 'Vecchiano'
            },
            {
                value: 'Vedano al Lambro',
                label: 'Vedano al Lambro'
            },
            {
                value: 'Vedano Olona',
                label: 'Vedano Olona'
            },
            {
                value: 'Vedelago',
                label: 'Vedelago'
            },
            {
                value: 'Vedeseta',
                label: 'Vedeseta'
            },
            {
                value: 'Veduggio con Colzano',
                label: 'Veduggio con Colzano'
            },
            {
                value: 'Veggiano',
                label: 'Veggiano'
            },
            {
                value: 'Veglie',
                label: 'Veglie'
            },
            {
                value: 'Veglio',
                label: 'Veglio'
            },
            {
                value: 'Vejano',
                label: 'Vejano'
            },
            {
                value: 'Veleso',
                label: 'Veleso'
            },
            {
                value: 'Velezzo Lomellina',
                label: 'Velezzo Lomellina'
            },
            {
                value: 'Velletri',
                label: 'Velletri'
            },
            {
                value: 'Vellezzo Bellini',
                label: 'Vellezzo Bellini'
            },
            {
                value: 'Velo d\'Astico',
                label: 'Velo d\'Astico'
            },
            {
                value: 'Velo Veronese',
                label: 'Velo Veronese'
            },
            {
                value: 'Velturno',
                label: 'Velturno'
            },
            {
                value: 'Venafro',
                label: 'Venafro'
            },
            {
                value: 'Venaria Reale',
                label: 'Venaria Reale'
            },
            {
                value: 'Venarotta',
                label: 'Venarotta'
            },
            {
                value: 'Venasca',
                label: 'Venasca'
            },
            {
                value: 'Venaus',
                label: 'Venaus'
            },
            {
                value: 'Vendone',
                label: 'Vendone'
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
                value: 'Venetico',
                label: 'Venetico'
            },
            {
                value: 'Venezia',
                label: 'Venezia'
            },
            {
                value: 'Veniano',
                label: 'Veniano'
            },
            {
                value: 'Venosa',
                label: 'Venosa'
            },
            {
                value: 'Ventasso',
                label: 'Ventasso'
            },
            {
                value: 'Venticano',
                label: 'Venticano'
            },
            {
                value: 'Ventimiglia',
                label: 'Ventimiglia'
            },
            {
                value: 'Ventimiglia di Sicilia',
                label: 'Ventimiglia di Sicilia'
            },
            {
                value: 'Ventotene',
                label: 'Ventotene'
            },
            {
                value: 'Venzone',
                label: 'Venzone'
            },
            {
                value: 'Verano',
                label: 'Verano'
            },
            {
                value: 'Verano Brianza',
                label: 'Verano Brianza'
            },
            {
                value: 'Verbania',
                label: 'Verbania'
            },
            {
                value: 'Verbicaro',
                label: 'Verbicaro'
            },
            {
                value: 'Vercana',
                label: 'Vercana'
            },
            {
                value: 'Verceia',
                label: 'Verceia'
            },
            {
                value: 'Vercelli',
                label: 'Vercelli'
            },
            {
                value: 'Vercurago',
                label: 'Vercurago'
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
                value: 'Verderio',
                label: 'Verderio'
            },
            {
                value: 'Verduno',
                label: 'Verduno'
            },
            {
                value: 'Vergato',
                label: 'Vergato'
            },
            {
                value: 'Verghereto',
                label: 'Verghereto'
            },
            {
                value: 'Vergiate',
                label: 'Vergiate'
            },
            {
                value: 'Vermezzo con Zelo',
                label: 'Vermezzo con Zelo'
            },
            {
                value: 'Vermiglio',
                label: 'Vermiglio'
            },
            {
                value: 'Vernante',
                label: 'Vernante'
            },
            {
                value: 'Vernasca',
                label: 'Vernasca'
            },
            {
                value: 'Vernate',
                label: 'Vernate'
            },
            {
                value: 'Vernazza',
                label: 'Vernazza'
            },
            {
                value: 'Vernio',
                label: 'Vernio'
            },
            {
                value: 'Vernole',
                label: 'Vernole'
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
                value: 'Verolengo',
                label: 'Verolengo'
            },
            {
                value: 'Veroli',
                label: 'Veroli'
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
                value: 'Verrayes',
                label: 'Verrayes'
            },
            {
                value: 'Verrès',
                label: 'Verrès'
            },
            {
                value: 'Verretto',
                label: 'Verretto'
            },
            {
                value: 'Verrone',
                label: 'Verrone'
            },
            {
                value: 'Verrua Po',
                label: 'Verrua Po'
            },
            {
                value: 'Verrua Savoia',
                label: 'Verrua Savoia'
            },
            {
                value: 'Vertemate con Minoprio',
                label: 'Vertemate con Minoprio'
            },
            {
                value: 'Vertova',
                label: 'Vertova'
            },
            {
                value: 'Verucchio',
                label: 'Verucchio'
            },
            {
                value: 'Vervio',
                label: 'Vervio'
            },
            {
                value: 'Verzegnis',
                label: 'Verzegnis'
            },
            {
                value: 'Verzino',
                label: 'Verzino'
            },
            {
                value: 'Verzuolo',
                label: 'Verzuolo'
            },
            {
                value: 'Vescovana',
                label: 'Vescovana'
            },
            {
                value: 'Vescovato',
                label: 'Vescovato'
            },
            {
                value: 'Vesime',
                label: 'Vesime'
            },
            {
                value: 'Vespolate',
                label: 'Vespolate'
            },
            {
                value: 'Vessalico',
                label: 'Vessalico'
            },
            {
                value: 'Vestenanova',
                label: 'Vestenanova'
            },
            {
                value: 'Vestignè',
                label: 'Vestignè'
            },
            {
                value: 'Vestone',
                label: 'Vestone'
            },
            {
                value: 'Vetralla',
                label: 'Vetralla'
            },
            {
                value: 'Vetto',
                label: 'Vetto'
            },
            {
                value: 'Vezza d\'Alba',
                label: 'Vezza d\'Alba'
            },
            {
                value: 'Vezza d\'Oglio',
                label: 'Vezza d\'Oglio'
            },
            {
                value: 'Vezzano Ligure',
                label: 'Vezzano Ligure'
            },
            {
                value: 'Vezzano sul Crostolo',
                label: 'Vezzano sul Crostolo'
            },
            {
                value: 'Vezzi Portio',
                label: 'Vezzi Portio'
            },
            {
                value: 'Viadana',
                label: 'Viadana'
            },
            {
                value: 'Viadanica',
                label: 'Viadanica'
            },
            {
                value: 'Viagrande',
                label: 'Viagrande'
            },
            {
                value: 'Viale',
                label: 'Viale'
            },
            {
                value: 'Vialfrè',
                label: 'Vialfrè'
            },
            {
                value: 'Viano',
                label: 'Viano'
            },
            {
                value: 'Viareggio',
                label: 'Viareggio'
            },
            {
                value: 'Viarigi',
                label: 'Viarigi'
            },
            {
                value: 'Vibo Valentia',
                label: 'Vibo Valentia'
            },
            {
                value: 'Vibonati',
                label: 'Vibonati'
            },
            {
                value: 'Vicalvi',
                label: 'Vicalvi'
            },
            {
                value: 'Vicari',
                label: 'Vicari'
            },
            {
                value: 'Vicchio',
                label: 'Vicchio'
            },
            {
                value: 'Vicenza',
                label: 'Vicenza'
            },
            {
                value: 'Vico del Gargano',
                label: 'Vico del Gargano'
            },
            {
                value: 'Vico Equense',
                label: 'Vico Equense'
            },
            {
                value: 'Vico nel Lazio',
                label: 'Vico nel Lazio'
            },
            {
                value: 'Vicoforte',
                label: 'Vicoforte'
            },
            {
                value: 'Vicoli',
                label: 'Vicoli'
            },
            {
                value: 'Vicolungo',
                label: 'Vicolungo'
            },
            {
                value: 'Vicopisano',
                label: 'Vicopisano'
            },
            {
                value: 'Vicovaro',
                label: 'Vicovaro'
            },
            {
                value: 'Viddalba',
                label: 'Viddalba'
            },
            {
                value: 'Vidigulfo',
                label: 'Vidigulfo'
            },
            {
                value: 'Vidor',
                label: 'Vidor'
            },
            {
                value: 'Vidracco',
                label: 'Vidracco'
            },
            {
                value: 'Vieste',
                label: 'Vieste'
            },
            {
                value: 'Vietri di Potenza',
                label: 'Vietri di Potenza'
            },
            {
                value: 'Vietri sul Mare',
                label: 'Vietri sul Mare'
            },
            {
                value: 'Viganò',
                label: 'Viganò'
            },
            {
                value: 'Vigano San Martino',
                label: 'Vigano San Martino'
            },
            {
                value: 'Vigarano Mainarda',
                label: 'Vigarano Mainarda'
            },
            {
                value: 'Vigasio',
                label: 'Vigasio'
            },
            {
                value: 'Vigevano',
                label: 'Vigevano'
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
                value: 'Viggiù',
                label: 'Viggiù'
            },
            {
                value: 'Vighizzolo d\'Este',
                label: 'Vighizzolo d\'Este'
            },
            {
                value: 'Vigliano Biellese',
                label: 'Vigliano Biellese'
            },
            {
                value: 'Vigliano d\'Asti',
                label: 'Vigliano d\'Asti'
            },
            {
                value: 'Vignale Monferrato',
                label: 'Vignale Monferrato'
            },
            {
                value: 'Vignanello',
                label: 'Vignanello'
            },
            {
                value: 'Vignate',
                label: 'Vignate'
            },
            {
                value: 'Vignola',
                label: 'Vignola'
            },
            {
                value: 'Vignola-Falesina',
                label: 'Vignola-Falesina'
            },
            {
                value: 'Vignole Borbera',
                label: 'Vignole Borbera'
            },
            {
                value: 'Vignolo',
                label: 'Vignolo'
            },
            {
                value: 'Vignone',
                label: 'Vignone'
            },
            {
                value: 'Vigo di Cadore',
                label: 'Vigo di Cadore'
            },
            {
                value: 'Vigodarzere',
                label: 'Vigodarzere'
            },
            {
                value: 'Vigolo',
                label: 'Vigolo'
            },
            {
                value: 'Vigolzone',
                label: 'Vigolzone'
            },
            {
                value: 'Vigone',
                label: 'Vigone'
            },
            {
                value: 'Vigonovo',
                label: 'Vigonovo'
            },
            {
                value: 'Vigonza',
                label: 'Vigonza'
            },
            {
                value: 'Viguzzolo',
                label: 'Viguzzolo'
            },
            {
                value: 'Villa Bartolomea',
                label: 'Villa Bartolomea'
            },
            {
                value: 'Villa Basilica',
                label: 'Villa Basilica'
            },
            {
                value: 'Villa Biscossi',
                label: 'Villa Biscossi'
            },
            {
                value: 'Villa Carcina',
                label: 'Villa Carcina'
            },
            {
                value: 'Villa Castelli',
                label: 'Villa Castelli'
            },
            {
                value: 'Villa Celiera',
                label: 'Villa Celiera'
            },
            {
                value: 'Villa Collemandina',
                label: 'Villa Collemandina'
            },
            {
                value: 'Villa Cortese',
                label: 'Villa Cortese'
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
                value: 'Villa d\'Ogna',
                label: 'Villa d\'Ogna'
            },
            {
                value: 'Villa del Bosco',
                label: 'Villa del Bosco'
            },
            {
                value: 'Villa del Conte',
                label: 'Villa del Conte'
            },
            {
                value: 'Villa di Briano',
                label: 'Villa di Briano'
            },
            {
                value: 'Villa di Chiavenna',
                label: 'Villa di Chiavenna'
            },
            {
                value: 'Villa di Serio',
                label: 'Villa di Serio'
            },
            {
                value: 'Villa di Tirano',
                label: 'Villa di Tirano'
            },
            {
                value: 'Villa Estense',
                label: 'Villa Estense'
            },
            {
                value: 'Villa Faraldi',
                label: 'Villa Faraldi'
            },
            {
                value: 'Villa Guardia',
                label: 'Villa Guardia'
            },
            {
                value: 'Villa Lagarina',
                label: 'Villa Lagarina'
            },
            {
                value: 'Villa Latina',
                label: 'Villa Latina'
            },
            {
                value: 'Villa Literno',
                label: 'Villa Literno'
            },
            {
                value: 'Villa Minozzo',
                label: 'Villa Minozzo'
            },
            {
                value: 'Villa San Giovanni',
                label: 'Villa San Giovanni'
            },
            {
                value: 'Villa San Giovanni in Tuscia',
                label: 'Villa San Giovanni in Tuscia'
            },
            {
                value: 'Villa San Pietro',
                label: 'Villa San Pietro'
            },
            {
                value: 'Villa San Secondo',
                label: 'Villa San Secondo'
            },
            {
                value: 'Villa Sant\'Angelo',
                label: 'Villa Sant\'Angelo'
            },
            {
                value: 'Villa Sant\'Antonio',
                label: 'Villa Sant\'Antonio'
            },
            {
                value: 'Villa Santa Lucia',
                label: 'Villa Santa Lucia'
            },
            {
                value: 'Villa Santa Lucia degli Abruzzi',
                label: 'Villa Santa Lucia degli Abruzzi'
            },
            {
                value: 'Villa Santa Maria',
                label: 'Villa Santa Maria'
            },
            {
                value: 'Villa Santina',
                label: 'Villa Santina'
            },
            {
                value: 'Villa Santo Stefano',
                label: 'Villa Santo Stefano'
            },
            {
                value: 'Villa Verde',
                label: 'Villa Verde'
            },
            {
                value: 'Villabassa',
                label: 'Villabassa'
            },
            {
                value: 'Villabate',
                label: 'Villabate'
            },
            {
                value: 'Villachiara',
                label: 'Villachiara'
            },
            {
                value: 'Villacidro',
                label: 'Villacidro'
            },
            {
                value: 'Villadeati',
                label: 'Villadeati'
            },
            {
                value: 'Villadose',
                label: 'Villadose'
            },
            {
                value: 'Villadossola',
                label: 'Villadossola'
            },
            {
                value: 'Villafalletto',
                label: 'Villafalletto'
            },
            {
                value: 'Villafranca d\'Asti',
                label: 'Villafranca d\'Asti'
            },
            {
                value: 'Villafranca di Verona',
                label: 'Villafranca di Verona'
            },
            {
                value: 'Villafranca in Lunigiana',
                label: 'Villafranca in Lunigiana'
            },
            {
                value: 'Villafranca Padovana',
                label: 'Villafranca Padovana'
            },
            {
                value: 'Villafranca Piemonte',
                label: 'Villafranca Piemonte'
            },
            {
                value: 'Villafranca Sicula',
                label: 'Villafranca Sicula'
            },
            {
                value: 'Villafranca Tirrena',
                label: 'Villafranca Tirrena'
            },
            {
                value: 'Villafrati',
                label: 'Villafrati'
            },
            {
                value: 'Villaga',
                label: 'Villaga'
            },
            {
                value: 'Villagrande Strisaili',
                label: 'Villagrande Strisaili'
            },
            {
                value: 'Villalago',
                label: 'Villalago'
            },
            {
                value: 'Villalba',
                label: 'Villalba'
            },
            {
                value: 'Villalfonsina',
                label: 'Villalfonsina'
            },
            {
                value: 'Villalvernia',
                label: 'Villalvernia'
            },
            {
                value: 'Villamagna',
                label: 'Villamagna'
            },
            {
                value: 'Villamaina',
                label: 'Villamaina'
            },
            {
                value: 'Villamar',
                label: 'Villamar'
            },
            {
                value: 'Villamarzana',
                label: 'Villamarzana'
            },
            {
                value: 'Villamassargia',
                label: 'Villamassargia'
            },
            {
                value: 'Villamiroglio',
                label: 'Villamiroglio'
            },
            {
                value: 'Villandro',
                label: 'Villandro'
            },
            {
                value: 'Villanova Biellese',
                label: 'Villanova Biellese'
            },
            {
                value: 'Villanova Canavese',
                label: 'Villanova Canavese'
            },
            {
                value: 'Villanova d\'Albenga',
                label: 'Villanova d\'Albenga'
            },
            {
                value: 'Villanova d\'Ardenghi',
                label: 'Villanova d\'Ardenghi'
            },
            {
                value: 'Villanova d\'Asti',
                label: 'Villanova d\'Asti'
            },
            {
                value: 'Villanova del Battista',
                label: 'Villanova del Battista'
            },
            {
                value: 'Villanova del Ghebbo',
                label: 'Villanova del Ghebbo'
            },
            {
                value: 'Villanova del Sillaro',
                label: 'Villanova del Sillaro'
            },
            {
                value: 'Villanova di Camposampiero',
                label: 'Villanova di Camposampiero'
            },
            {
                value: 'Villanova Marchesana',
                label: 'Villanova Marchesana'
            },
            {
                value: 'Villanova Mondovì',
                label: 'Villanova Mondovì'
            },
            {
                value: 'Villanova Monferrato',
                label: 'Villanova Monferrato'
            },
            {
                value: 'Villanova Monteleone',
                label: 'Villanova Monteleone'
            },
            {
                value: 'Villanova Solaro',
                label: 'Villanova Solaro'
            },
            {
                value: 'Villanova sull\'Arda',
                label: 'Villanova sull\'Arda'
            },
            {
                value: 'Villanova Truschedu',
                label: 'Villanova Truschedu'
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
                value: 'Villanterio',
                label: 'Villanterio'
            },
            {
                value: 'Villanuova sul Clisi',
                label: 'Villanuova sul Clisi'
            },
            {
                value: 'Villaperuccio',
                label: 'Villaperuccio'
            },
            {
                value: 'Villapiana',
                label: 'Villapiana'
            },
            {
                value: 'Villaputzu',
                label: 'Villaputzu'
            },
            {
                value: 'Villar Dora',
                label: 'Villar Dora'
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
                value: 'Villar San Costanzo',
                label: 'Villar San Costanzo'
            },
            {
                value: 'Villarbasse',
                label: 'Villarbasse'
            },
            {
                value: 'Villarboit',
                label: 'Villarboit'
            },
            {
                value: 'Villareggia',
                label: 'Villareggia'
            },
            {
                value: 'Villaricca',
                label: 'Villaricca'
            },
            {
                value: 'Villaromagnano',
                label: 'Villaromagnano'
            },
            {
                value: 'Villarosa',
                label: 'Villarosa'
            },
            {
                value: 'Villasalto',
                label: 'Villasalto'
            },
            {
                value: 'Villasanta',
                label: 'Villasanta'
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
            },
            {
                value: 'Villastellone',
                label: 'Villastellone'
            },
            {
                value: 'Villata',
                label: 'Villata'
            },
            {
                value: 'Villaurbana',
                label: 'Villaurbana'
            },
            {
                value: 'Villavallelonga',
                label: 'Villavallelonga'
            },
            {
                value: 'Villaverla',
                label: 'Villaverla'
            },
            {
                value: 'Ville d\'Anaunia',
                label: 'Ville d\'Anaunia'
            },
            {
                value: 'Ville di Fiemme',
                label: 'Ville di Fiemme'
            },
            {
                value: 'Villeneuve',
                label: 'Villeneuve'
            },
            {
                value: 'Villesse',
                label: 'Villesse'
            },
            {
                value: 'Villetta Barrea',
                label: 'Villetta Barrea'
            },
            {
                value: 'Villette',
                label: 'Villette'
            },
            {
                value: 'Villimpenta',
                label: 'Villimpenta'
            },
            {
                value: 'Villongo',
                label: 'Villongo'
            },
            {
                value: 'Villorba',
                label: 'Villorba'
            },
            {
                value: 'Vilminore di Scalve',
                label: 'Vilminore di Scalve'
            },
            {
                value: 'Vimercate',
                label: 'Vimercate'
            },
            {
                value: 'Vimodrone',
                label: 'Vimodrone'
            },
            {
                value: 'Vinadio',
                label: 'Vinadio'
            },
            {
                value: 'Vinchiaturo',
                label: 'Vinchiaturo'
            },
            {
                value: 'Vinchio',
                label: 'Vinchio'
            },
            {
                value: 'Vinci',
                label: 'Vinci'
            },
            {
                value: 'Vinovo',
                label: 'Vinovo'
            },
            {
                value: 'Vinzaglio',
                label: 'Vinzaglio'
            },
            {
                value: 'Viola',
                label: 'Viola'
            },
            {
                value: 'Vione',
                label: 'Vione'
            },
            {
                value: 'Vipiteno',
                label: 'Vipiteno'
            },
            {
                value: 'Virle Piemonte',
                label: 'Virle Piemonte'
            },
            {
                value: 'Visano',
                label: 'Visano'
            },
            {
                value: 'Vische',
                label: 'Vische'
            },
            {
                value: 'Visciano',
                label: 'Visciano'
            },
            {
                value: 'Visco',
                label: 'Visco'
            },
            {
                value: 'Visone',
                label: 'Visone'
            },
            {
                value: 'Visso',
                label: 'Visso'
            },
            {
                value: 'Vistarino',
                label: 'Vistarino'
            },
            {
                value: 'Vistrorio',
                label: 'Vistrorio'
            },
            {
                value: 'Vita',
                label: 'Vita'
            },
            {
                value: 'Viterbo',
                label: 'Viterbo'
            },
            {
                value: 'Viticuso',
                label: 'Viticuso'
            },
            {
                value: 'Vito d\'Asio',
                label: 'Vito d\'Asio'
            },
            {
                value: 'Vitorchiano',
                label: 'Vitorchiano'
            },
            {
                value: 'Vittoria',
                label: 'Vittoria'
            },
            {
                value: 'Vittorio Veneto',
                label: 'Vittorio Veneto'
            },
            {
                value: 'Vittorito',
                label: 'Vittorito'
            },
            {
                value: 'Vittuone',
                label: 'Vittuone'
            },
            {
                value: 'Vitulano',
                label: 'Vitulano'
            },
            {
                value: 'Vitulazio',
                label: 'Vitulazio'
            },
            {
                value: 'Viù',
                label: 'Viù'
            },
            {
                value: 'Vivaro',
                label: 'Vivaro'
            },
            {
                value: 'Vivaro Romano',
                label: 'Vivaro Romano'
            },
            {
                value: 'Viverone',
                label: 'Viverone'
            },
            {
                value: 'Vizzini',
                label: 'Vizzini'
            },
            {
                value: 'Vizzola Ticino',
                label: 'Vizzola Ticino'
            },
            {
                value: 'Vizzolo Predabissi',
                label: 'Vizzolo Predabissi'
            },
            {
                value: 'Vo\'',
                label: 'Vo\''
            },
            {
                value: 'Vobarno',
                label: 'Vobarno'
            },
            {
                value: 'Vobbia',
                label: 'Vobbia'
            },
            {
                value: 'Vocca',
                label: 'Vocca'
            },
            {
                value: 'Vodo Cadore',
                label: 'Vodo Cadore'
            },
            {
                value: 'Voghera',
                label: 'Voghera'
            },
            {
                value: 'Voghiera',
                label: 'Voghiera'
            },
            {
                value: 'Vogogna',
                label: 'Vogogna'
            },
            {
                value: 'Volano',
                label: 'Volano'
            },
            {
                value: 'Volla',
                label: 'Volla'
            },
            {
                value: 'Volongo',
                label: 'Volongo'
            },
            {
                value: 'Volpago del Montello',
                label: 'Volpago del Montello'
            },
            {
                value: 'Volpara',
                label: 'Volpara'
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
                value: 'Volpiano',
                label: 'Volpiano'
            },
            {
                value: 'Volta Mantovana',
                label: 'Volta Mantovana'
            },
            {
                value: 'Voltaggio',
                label: 'Voltaggio'
            },
            {
                value: 'Voltago Agordino',
                label: 'Voltago Agordino'
            },
            {
                value: 'Volterra',
                label: 'Volterra'
            },
            {
                value: 'Voltido',
                label: 'Voltido'
            },
            {
                value: 'Volturara Appula',
                label: 'Volturara Appula'
            },
            {
                value: 'Volturara Irpina',
                label: 'Volturara Irpina'
            },
            {
                value: 'Volturino',
                label: 'Volturino'
            },
            {
                value: 'Volvera',
                label: 'Volvera'
            },
            {
                value: 'Vottignasco',
                label: 'Vottignasco'
            },
            {
                value: 'Zaccanopoli',
                label: 'Zaccanopoli'
            },
            {
                value: 'Zafferana Etnea',
                label: 'Zafferana Etnea'
            },
            {
                value: 'Zagarise',
                label: 'Zagarise'
            },
            {
                value: 'Zagarolo',
                label: 'Zagarolo'
            },
            {
                value: 'Zambrone',
                label: 'Zambrone'
            },
            {
                value: 'Zandobbio',
                label: 'Zandobbio'
            },
            {
                value: 'Zanè',
                label: 'Zanè'
            },
            {
                value: 'Zanica',
                label: 'Zanica'
            },
            {
                value: 'Zapponeta',
                label: 'Zapponeta'
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
                value: 'Zeddiani',
                label: 'Zeddiani'
            },
            {
                value: 'Zelbio',
                label: 'Zelbio'
            },
            {
                value: 'Zelo Buon Persico',
                label: 'Zelo Buon Persico'
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
                value: 'Zenson di Piave',
                label: 'Zenson di Piave'
            },
            {
                value: 'Zerba',
                label: 'Zerba'
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
                value: 'Zerfaliu',
                label: 'Zerfaliu'
            },
            {
                value: 'Zeri',
                label: 'Zeri'
            },
            {
                value: 'Zermeghedo',
                label: 'Zermeghedo'
            },
            {
                value: 'Zero Branco',
                label: 'Zero Branco'
            },
            {
                value: 'Zevio',
                label: 'Zevio'
            },
            {
                value: 'Ziano di Fiemme',
                label: 'Ziano di Fiemme'
            },
            {
                value: 'Ziano Piacentino',
                label: 'Ziano Piacentino'
            },
            {
                value: 'Zibido San Giacomo',
                label: 'Zibido San Giacomo'
            },
            {
                value: 'Zignago',
                label: 'Zignago'
            },
            {
                value: 'Zimella',
                label: 'Zimella'
            },
            {
                value: 'Zimone',
                label: 'Zimone'
            },
            {
                value: 'Zinasco',
                label: 'Zinasco'
            },
            {
                value: 'Zoagli',
                label: 'Zoagli'
            },
            {
                value: 'Zocca',
                label: 'Zocca'
            },
            {
                value: 'Zogno',
                label: 'Zogno'
            },
            {
                value: 'Zola Predosa',
                label: 'Zola Predosa'
            },
            {
                value: 'Zollino',
                label: 'Zollino'
            },
            {
                value: 'Zone',
                label: 'Zone'
            },
            {
                value: 'Zoppè di Cadore',
                label: 'Zoppè di Cadore'
            },
            {
                value: 'Zoppola',
                label: 'Zoppola'
            },
            {
                value: 'Zovencedo',
                label: 'Zovencedo'
            },
            {
                value: 'Zubiena',
                label: 'Zubiena'
            },
            {
                value: 'Zuccarello',
                label: 'Zuccarello'
            },
            {
                value: 'Zugliano',
                label: 'Zugliano'
            },
            {
                value: 'Zuglio',
                label: 'Zuglio'
            },
            {
                value: 'Zumaglia',
                label: 'Zumaglia'
            },
            {
                value: 'Zumpano',
                label: 'Zumpano'
            },
            {
                value: 'Zungoli',
                label: 'Zungoli'
            },
            {
                value: 'Zungri',
                label: 'Zungri'
            }
        ],
        loading: false,
        error: null,
        lastLoadTime: 1757688328169
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
            },
            ductwork: {
                monosplit: 129,
                dualsplit: 129,
                trialsplit: 129
            }
        },
        calculations: {
            purchase: {
                monosplit: 0,
                dualsplit: 190,
                trialsplit: 290,
                total: 480
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
                trialsplit: 0,
                total: 0
            },
            ductwork: {
                monosplit: 0,
                dualsplit: 0,
                trialsplit: 0,
                total: 0
            },
            installationTotal: 540,
            productsTotal: 7055.280000000001,
            grandTotal: 7595.280000000001
        }
    },
    products: {
        items: [],
        loading: false,
        error: null,
        selectedCity: 'Milano',
        rawProducts: [],
        filterValues: {}
    },
    report: {
        data: {
            loading: false,
            error: null,
            result: {
                success: true,
                message: 'Completed',
                timestamp: '2025-09-12T14:46:28.4494537Z',
                body: {
                    Comune: 'Milano',
                    Numero_Macchine: 3,
                    Clima1: 'Daikin Clima Siesta Super Plus 9000',
                    Clima2: 'LG Libero SMART  9+12 btu/h',
                    Clima3: 'Daikin Clima Siesta Trial Classic - 9000+9000+12000',
                    Stanza1_mq: 23,
                    Stanza2_mq: 45,
                    Stanza3_mq: 56,
                    Numero_Predisposizioni_Mono: 1,
                    Numero_Predisposizioni_Dual: 1,
                    Numero_Predisposizioni_Trial: 1,
                    Numero_Predisposizioni_Canalizzazione: 0,
                    Numero_Smontaggi_Mono: 1,
                    Numero_Smontaggi_Dual: 0,
                    Numero_Smontaggi_Trial: 0,
                    Numero_Lavaggi_Mono: 0,
                    Numero_Lavaggi_Dual: 0,
                    Numero_Lavaggi_Trial: 0,
                    ProjectUrl: 'https://greenovation.blob.core.windows.net/enelclima/d6413dee-7cfe-4410-b075-f3949d2280d2.pdf',
                    Id: 'd6413dee-7cfe-4410-b075-f3949d2280d2',
                    Warning: '',
                    Products: [
                        {
                            Name: 'Daikin Clima Siesta Super Plus 9000',
                            Brand: 'Daikin',
                            Price: 1511.76,
                            Image: 'https://greenovationdashboard.azurewebsites.net/Content/climatizzatore-daikin-siesta-super-plus-9000-btu.webp',
                            Url: 'https://www.enel.it/it-it/condizionatori/daikin-siesta-super-plus-9000-btu',
                            NumSplit: 1,
                            Category: 'Premium',
                            Qty: 0,
                            m2: 32,
                            Features: {
                                Led: true,
                                Wifi: false,
                                Voice: false,
                                RispEn: true,
                                ProgGiorn: true,
                                ProgSett: false,
                                Sleep: true,
                                Turbo: true,
                                Muffa: false,
                                Ionizzazione: false,
                                Autodiagnosi: true,
                                AlwaysOn: true
                            }
                        },
                        {
                            Name: 'LG Libero SMART  9+12 btu/h',
                            Brand: 'LG',
                            Price: 1871.76,
                            Image: 'https://greenovationdashboard.azurewebsites.net/Content/climatizzatore-lg-libero-smart-dual-9000-12000-btu.webp',
                            Url: 'https://www.enel.it/it-it/condizionatori/lg-libero-smart-dual-9000-12000-btu',
                            NumSplit: 2,
                            Category: 'Medium',
                            Qty: 0,
                            m2: 45,
                            Features: {
                                Led: true,
                                Wifi: true,
                                Voice: true,
                                RispEn: true,
                                ProgGiorn: true,
                                ProgSett: true,
                                Sleep: true,
                                Turbo: true,
                                Muffa: true,
                                Ionizzazione: false,
                                Autodiagnosi: true,
                                AlwaysOn: true
                            }
                        },
                        {
                            Name: 'Daikin Clima Siesta Trial Classic - 9000+9000+12000',
                            Brand: 'Daikin',
                            Price: 3671.76,
                            Image: 'https://greenovationdashboard.azurewebsites.net/Content/climatizzatore-daikin-siesta-classic-trial-9000-9000-12000-btu.webp',
                            Url: 'https://www.enel.it/it-it/condizionatori/daikin-siesta-classic-trial-9000-12000-btu',
                            NumSplit: 3,
                            Category: 'Premium',
                            Qty: 0,
                            m2: 57,
                            Features: {
                                Led: true,
                                Wifi: false,
                                Voice: false,
                                RispEn: true,
                                ProgGiorn: true,
                                ProgSett: false,
                                Sleep: true,
                                Turbo: true,
                                Muffa: false,
                                Ionizzazione: false,
                                Autodiagnosi: true,
                                AlwaysOn: true
                            }
                        }
                    ],
                    Configurations: [
                        {
                            Name: 'Nuova installazione senza predisposizione x2',
                            Brand: null,
                            Price: 480,
                            Image: null,
                            Url: null,
                            NumSplit: 0,
                            Category: null,
                            Qty: 0,
                            m2: 0,
                            Features: {}
                        },
                        {
                            Name: 'Smontaggio clima mono x1',
                            Brand: null,
                            Price: 60,
                            Image: null,
                            Url: null,
                            NumSplit: 0,
                            Category: null,
                            Qty: 0,
                            m2: 0,
                            Features: {}
                        }
                    ]
                }
            },
            lastRequestTimestamp: 1757688388418
        },
        financing: {
            plans: [
                {
                    id: '6months',
                    name: 'Finanziamento a 6 mesi*',
                    duration: 6,
                    monthlyRate: 1291.7012065670908,
                    currency: '€',
                    frequency: '/mese',
                    tan: 6.75,
                    taeg: 6.96,
                    totalToRepay: 7750.207239402545
                },
                {
                    id: '120months',
                    name: 'Finanziamento a 120 mesi*',
                    duration: 120,
                    monthlyRate: 88.03114025356662,
                    currency: '€',
                    frequency: '/mese',
                    tan: 6.75,
                    taeg: 6.96,
                    totalToRepay: 10563.736830427993
                }
            ]
        }
    },
    sidebar: {
        isOpen: false,
        customerData: {
            cap: '',
            nome: '',
            cognome: '',
            telefono: '',
            email: ''
        }
    },
    lead: {
        isLoading: false,
        error: null,
        data: null
    },
    validation: {
        errors: [],
        canProceed: true
    },
    testing: {}
}