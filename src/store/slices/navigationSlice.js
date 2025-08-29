import pagesConfig from '../../config/pages.json';
import stepsConfig from '../../config/steps.json';

import { getInstallationTypeDescription } from './pricingSlice';

export const createNavigationSlice = (set, get) => ({
    // Navigation state
    currentStep: 1, // Start from step 1 instead of 0
    currentPageId: pagesConfig.pages[0]?.id || null, // Track current page by ID
    steps: stepsConfig.steps,
    dynamicPages: [], // Store dynamically generated pages

    // Navigation actions
    setCurrentStep: (step) => set({ currentStep: step }),

    setCurrentPageId: (pageId) => {
        const page = pagesConfig.pages.find(p => p.id === pageId);
        if (page) {
            set({ currentPageId: pageId, currentStep: page.step });
            // Reset and initialize validation for the new page
            const state = get();
            state.validation.clearValidationErrors();
            setTimeout(() => {
                const newState = get();
                newState.validation.validateCurrentPage();
            }, 0);
        }
    },

    nextStep: async () => {
        const state = get();

        // Get current page for hook execution
        const currentPage = state.getCurrentPage();

        // 1. Standard validation before proceeding
        const validationResult = state.validation.validateCurrentPage();
        if (!validationResult.isValid) {
            console.log('❌ Standard validation failed');
            return false;
        }

        // 2. Execute beforeNext hook if configured
        const beforeNextHook = currentPage?.navigationHooks?.beforeNext;
        if (beforeNextHook) {
            try {
                const hookPassed = await state.executeNavigationHook(beforeNextHook, currentPage);
                if (!hookPassed) {
                    console.log(`❌ Navigation hook ${beforeNextHook} failed, blocking next step`);
                    return false;
                }
            } catch (error) {
                console.error(`❌ Error executing beforeNext hook ${beforeNextHook}:`, error);
                return false;
            }
        }

        // 3. Proceed with navigation logic
        const allPages = state.getAllPages();
        const currentPageIndex = allPages.findIndex(p => p.id === state.currentPageId);
        const nextPageIndex = currentPageIndex + 1;

        if (nextPageIndex < allPages.length) {
            const nextPage = allPages[nextPageIndex];

            set({
                currentStep: nextPage.step,
                currentPageId: nextPage.id
            });

            // Reset validation state for the new page
            state.validation.clearValidationErrors();

            // Validate the new page after a short delay
            setTimeout(() => {
                const newState = get();
                newState.validation.validateCurrentPage();
            }, 0);

            // 4. Execute afterNext hook if configured
            const afterNextHook = currentPage?.navigationHooks?.afterNext;
            if (afterNextHook) {
                try {
                    await state.executeNavigationHook(afterNextHook, currentPage);
                } catch (error) {
                    console.error(`❌ Error executing afterNext hook ${afterNextHook}:`, error);
                    // Don't block navigation for afterNext hooks, just log the error
                }
            }

            console.log(`✅ Navigated to step ${nextPage.step}: ${nextPage.id}`);
            return true;
        }

        return false;
    },

    prevStep: async () => {
        const state = get();
        const currentPage = state.getCurrentPage();

        // 1. Execute beforePrevious hook if configured
        const beforePrevHook = currentPage?.navigationHooks?.beforePrevious;
        if (beforePrevHook) {
            try {
                const hookPassed = await state.executeNavigationHook(beforePrevHook, currentPage);
                if (!hookPassed) {
                    console.log(`❌ Navigation hook ${beforePrevHook} failed, blocking previous step`);
                    return false;
                }
            } catch (error) {
                console.error(`❌ Error executing beforePrevious hook ${beforePrevHook}:`, error);
                return false;
            }
        }

        // 2. Proceed with navigation logic
        const allPages = state.getAllPages();
        const currentPageIndex = allPages.findIndex(p => p.id === state.currentPageId);
        const prevPageIndex = currentPageIndex - 1;

        if (prevPageIndex >= 0) {
            const prevPage = allPages[prevPageIndex];

            set({
                currentStep: prevPage.step,
                currentPageId: prevPage.id
            });

            // Reset validation state for the new page
            state.validation.clearValidationErrors();

            // Validate the new page after a short delay
            setTimeout(() => {
                const newState = get();
                newState.validation.validateCurrentPage();
            }, 0);

            // 3. Execute afterPrevious hook if configured
            const afterPrevHook = currentPage?.navigationHooks?.afterPrevious;
            if (afterPrevHook) {
                try {
                    await state.executeNavigationHook(afterPrevHook, currentPage);
                } catch (error) {
                    console.error(`❌ Error executing afterPrevious hook ${afterPrevHook}:`, error);
                    // Don't block navigation for afterPrevious hooks, just log the error
                }
            }

            console.log(`✅ Navigated back to step ${prevPage.step}: ${prevPage.id}`);
            return true;
        }

        return false;
    },

    resetSteps: () => set({
        currentStep: 1,
        currentPageId: pagesConfig.pages[0]?.id || null
    }),

    // Helper getters
    isFirstStep: () => {
        const state = get();
        const allPages = state.getAllPages();
        const currentPageIndex = allPages.findIndex(p => p.id === state.currentPageId);
        return currentPageIndex === 0;
    },

    isLastStep: () => {
        const state = get();
        const allPages = state.getAllPages();
        const currentPageIndex = allPages.findIndex(p => p.id === state.currentPageId);
        return currentPageIndex === allPages.length - 1;
    },

    canGoNext: () => {
        const state = get();
        const allPages = state.getAllPages();
        const currentPageIndex = allPages.findIndex(p => p.id === state.currentPageId);
        const hasNextPage = currentPageIndex < allPages.length - 1;

        // Check if current page is valid
        const canProceed = state.validation.canProceedToNextStep();

        return hasNextPage && canProceed;
    },

    canGoPrev: () => {
        const state = get();
        const allPages = state.getAllPages();
        const currentPageIndex = allPages.findIndex(p => p.id === state.currentPageId);
        return currentPageIndex > 0;
    },

    // Page-related helpers
    getCurrentPage: () => {
        const state = get();
        const allPages = state.getAllPages();
        return allPages.find(page => page.id === state.currentPageId);
    },

    getPageById: (id) => {
        const state = get();
        const allPages = state.getAllPages();
        return allPages.find(page => page.id === id);
    },

    getAllPages: () => {
        const state = get();

        if (state.dynamicPages.length === 0) {
            return pagesConfig.pages; // Return original pages if no dynamic pages
        }

        // Insert dynamic pages after 'canalizzazioni-configuratore' (step 2)
        const insertAfterIndex = pagesConfig.pages.findIndex(page => page.id === 'canalizzazioni-configuratore');

        if (insertAfterIndex === -1) {
            // Fallback: add at the end
            return [...pagesConfig.pages, ...state.dynamicPages];
        }

        // Insert dynamic pages after the specified page
        const result = [
            ...pagesConfig.pages.slice(0, insertAfterIndex + 1),
            ...state.dynamicPages,
            ...pagesConfig.pages.slice(insertAfterIndex + 1)
        ];

        return result;
    },

    // Dynamic page management
    generateSplitPages: () => {
        const state = get();
        // get configuration and qty from state
        const quantities = state.formData?.airconditioningQuantities || {};
        const configs = state.formData?.airConditioningConfigs || {};
        // build informations to loop
        const configsLoop = Object.keys(configs).reduce((acc, k) => {
            const v = configs[k];
            const [_type, _i] = k.split('_')
            acc.push({
                ...v,
                // This is the key of the state where to add in the future the product
                configKey: k,
                type: _type
            })
            return acc;
        }, [])

        const dynamicPages = configsLoop.map((config, index) => dynamicPageTemplate(
            `scelta-climatizzatore-${config.type}-${index}`,
            index,
            configsLoop.length,
            config
        ))

        set({ dynamicPages });
    },

    // Step-related helpers
    getSteps: () => get().steps,

    getStepByIndex: (index) => get().steps[index],

    getCurrentStepInfo: () => get().steps[get().currentStep - 1], // -1 because steps are 0-indexed but currentStep is 1-indexed

    // Helper to get total steps (defined last to avoid circular references)
    getTotalSteps: () => {
        const state = get();
        // Get all pages including dynamic ones
        if (typeof state.getAllPages === 'function') {
            const allPages = state.getAllPages();
            return allPages.length;
        }
        // Fallback to static pages if getAllPages is not available yet
        return pagesConfig.pages.length;
    },

    // Navigation Hook Executor
    executeNavigationHook: async (hookPath, currentPage) => {
        const state = get();

        if (!hookPath) {
            return true; // No hook specified, continue normally
        }

        console.log(`🪝 Executing navigation hook: ${hookPath}`);

        // Parse dot notation path (e.g., "airConditioning.completeSetup")
        const pathParts = hookPath.split('.');
        let hookFunction = state;

        // Navigate through the nested object to find the hook function
        for (const part of pathParts) {
            if (hookFunction && typeof hookFunction === 'object' && part in hookFunction) {
                hookFunction = hookFunction[part];
            } else {
                console.warn(`Navigation hook "${hookPath}" not found in state`);
                return true; // Continue if hook doesn't exist
            }
        }

        if (typeof hookFunction !== 'function') {
            console.warn(`Navigation hook "${hookPath}" is not a function`);
            return true; // Continue if hook is not a function
        }

        try {
            const result = await hookFunction(currentPage);
            return result !== false; // Allow hook to block navigation by returning false
        } catch (error) {
            console.error(`❌ Navigation hook ${hookPath} failed:`, error);

            // You can integrate with error handling slice here if available
            if (state.error?.setError) {
                state.error.setError(`Navigation Error: ${error.message}`);
            }

            throw error; // Re-throw to be handled by caller
        }
    },
});


function dynamicPageTemplate(
    pageId,
    splitIndex,
    splitTotal,
    acConfig,
) {
    return {
        id: pageId,
        title: "Scegliete insieme il climatizzatore adatto!",
        step: 3,
        isDynamic: true,
        validationRules: {
            required: [
                `formData.airConditioningConfigs.${acConfig?.configKey}.selected` // Use configKey to access the correct configuration
            ]
        },
        navigationHooks: {
            beforeNext: "",
            afterNext: splitIndex === splitTotal - 1 ? "report.submitSimulation" : "",
            beforePrevious: "",
            afterPrevious: ""
        },
        leftPanelComponents: [
            {
                type: "Image",
                props: {
                    src: "cubo-condizionatore",
                    alt: "Condizionatore Cubo",
                    className: "z-10 relative w-auto h-auto max-w-[325px] mt-8",
                    containerClassName: "flex justify-center items-center flex-1"
                }
            },
            {
                type: "CostSummary",
                props: {
                    containerClassName: "mt-auto mb-4 self-end"
                }
            }
        ],
        components: [
            {
                "type": "DescriptionBox",
                "props": {
                    "title": "Scelta del clima",
                    "description": getInstallationTypeDescription(acConfig?.installationType),
                    "icon": acConfig?.type || "",
                    "step": `${splitIndex + 1}/${splitTotal}`,
                    "stepColor": "purple",
                    "layout": "horizontal"
                }
            },
            {
                "type": "RoomBanner",
                "props": {
                    "roomSize": acConfig?.roomSize || "0",
                }
            },
            {
                type: 'BrandSelector',
                props: {
                    title: 'Quale brand di climatizzatore preferisce?',
                }
            },
            {
                type: 'InvestmentSelector',
                props: {
                    title: 'Qual è l\'investimento più adatto al cliente?',
                }
            },
            {
                "type": "AcProductDisplayContainer",
                "props": {
                    "showLoadingStates": true,
                    "maxProducts": 100,
                    "gridClassName": "grid grid-cols-1 md:grid-cols-2 gap-6",
                    "className": "mb-8",
                    /**
                     * This configuration is done to add the selected product inside the config
                     * ex:
                     * airConditioningConfigs: {
                            monosplit_0: {
                                installationType: 'nuova_con_predisposizione',
                                roomSize: '35',
                                selected: 'daikin-clima-siesta-12000'
                            },
                            dualsplit_0: {
                                installationType: 'nuova_senza_predisposizione',
                                roomSize: '41',
                                selected: 'daikin-clima-siesta-12000'
                            },
                            trialsplit_0: {
                                installationType: 'sostituzione_trialsplit',
                                roomSize: '53',
                                selected: 'daikin-clima-siesta-12000'
                            }
                        },
                     */
                    "configKey": `${acConfig.configKey}`,
                    "stateProperty": "airConditioningConfigs"
                }
            },
            {
                "type": "DisclaimerContainer",
                "props": {
                    "className": "mt-6 mb-4",
                    "sections": [
                        "<b>* Il prezzo visualizzato può variare in base alla regione in cui si trova la tua casa.</b> Non preoccuparti, il sopralluogo tecnico-commerciale (per la verifica di fattibilità dell’installazione) e l'installazione sono inclusi nel prezzo.",
                        "<b>**Sono disponibili diverse modalità di finanziamento.</b> Assicurati di informare il cliente sui requisiti di accesso alle agevolazioni, il periodo di validità e le spese ammissibili. Consulta la normativa di riferimento o offrigli un supporto diretto, fornendogli tutte le informazioni necessarie, INCLUSI EVENTUALI TAN E TAEG APPLICATI AL FINANZIAMENTO. Ricorda di suggerire al cliente di richiedere il documento 'Informazioni europee di base sul credito ai consumatori' (SECCI) e una copia del contratto, così potrà avere tutto il necessario per prendere una decisione informata sui costi e sulle condizioni."
                    ]
                }
            }
        ]
    };
}