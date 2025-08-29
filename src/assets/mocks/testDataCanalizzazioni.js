export default {
    _initialized: false,
    currentStep: 2,
    currentPageId: 'canalizzazioni-configuratore',
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
                        icon: 'monosplit',
                        step: '1/1',
                        stepColor: 'purple',
                        layout: 'horizontal'
                    }
                },
                {
                    type: 'RoomBanner',
                    props: {
                        roomSize: '45'
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
        }
    ],
    formData: {
        storeLocation: '123123',
        consultantName: 'Mario',
        storePhone: '123213',
        storeCity: 'Ala di Stura',
        airconditioningQuantities: {
            monosplit: 1
        },
        airConditioningConfigs: {
            monosplit_0: {
                installationType: 'nuova_senza_predisposizione',
                roomSize: '45'
            }
        }
    },
    cityState: {
        cities: [],
        loading: false,
        error: null,
        lastLoadTime: 1756454287324
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
                trialsplit: 0,
                total: 120
            },
            removal: {
                monosplit: 0,
                dualsplit: 0,
                trialsplit: 0,
                total: 0
            },
            cleaning: {
                monosplit: 0,
                dualsplit: 0,
                trialsplit: 0,
                total: 0
            },
            installationTotal: 120,
            productsTotal: 0,
            grandTotal: 120
        }
    },
    products: {
        items: [],
        loading: false,
        error: null,
        selectedCity: 'Ala di Stura',
        filterBy: null
    },
    report: {
        data: {
            loading: false,
            error: null,
            result: null,
            lastRequestTimestamp: null
        },
        financing: {
            plans: [
                {
                    id: '12months',
                    name: 'Finanziamento a 12 mesi*',
                    duration: 12,
                    monthlyRate: 226.25,
                    currency: '€',
                    frequency: '/mese',
                    tan: 0,
                    taeg: 0,
                    totalToRepay: 2715
                },
                {
                    id: '24months',
                    name: 'Finanziamento a 24 mesi*',
                    duration: 24,
                    monthlyRate: 113.13,
                    currency: '€',
                    frequency: '/mese',
                    tan: 0,
                    taeg: 0,
                    totalToRepay: 2715
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