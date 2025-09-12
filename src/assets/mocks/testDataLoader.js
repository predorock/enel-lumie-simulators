export default {
  _initialized: true,
  currentStep: 3,
  currentPageId: 'lancio-simulazione',
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
  dynamicPages: [],
  formData: {
    userId: '34345678',
    storeLocation: '12345',
    consultantName: '12345',
    storePhone: '12345',
    storeCity: 'Borgofranco d\'Ivrea',
    isEnelCustomer: false,
    airconditioningQuantities: {
      monosplit: 1
    },
    airConditioningConfigs: {
      monosplit_0: {
        installationType: 'nuova_con_predisposizione',
        roomSize: '45',
        selected: 'daikin-clima-siesta-super-plus-12000'
      }
    },
    ductworkQuantities: {
      monosplit: 1,
      dualsplit: 4,
      trialsplit: 2
    },
    needsRemoval: true,
    removalQuantities: {
      monosplit: 1
    }
  },
  cityState: {},
  pricingState: {},
  products: {},
  report: {},
  sidebar: {},
  lead: {},
  validation: {
    errors: [],
    canProceed: true
  },
  testing: {}
}