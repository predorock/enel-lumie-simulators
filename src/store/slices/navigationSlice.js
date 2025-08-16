import pagesConfig from '../../config/pages.json';
import stepsConfig from '../../config/steps.json';

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

    nextStep: () => {
        const state = get();

        // Check if we're completing step 2 and need to generate dynamic pages
        const currentPage = state.getCurrentPage();
        if (currentPage?.id === 'checklist-configuratore') {
            state.generateSplitPages();
        }

        // Validate current page before proceeding
        const validationResult = state.validation.validateCurrentPage();

        if (!validationResult.isValid) {
            // Don't proceed if validation fails
            return false;
        }

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
            return true;
        }
        return false;
    },

    prevStep: () => {
        const state = get();
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
        }
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

        // Insert dynamic pages after 'servizi-manutenzione' (step 2)
        const insertAfterIndex = pagesConfig.pages.findIndex(page => page.id === 'servizi-manutenzione');

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
        const quantities = state.formData?.airconditioningQuantities || {};
        const dynamicPages = [];

        const configToDo = Object.entries(quantities);
        // Generate pages for each split selection
        configToDo.forEach(([splitType, quantity], index) => {
            for (let i = 0; i < quantity; i++) {
                const ac_config = state.formData?.airConditioningConfigs?.[`${splitType}_${i}`] || {};
                const pageId = `scelta-climatizzatore-${splitType}-${i}`;
                const page = {
                    id: pageId,
                    title: "Scegliete insieme il climatizzatore adatto!",
                    step: 3,
                    isDynamic: true,
                    splitType: splitType,
                    splitIndex: i,
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
                                "description": ac_config?.description || "",
                                "icon": splitType,
                                "step": `${index + 1}/${configToDo.length}`,
                                "stepColor": "purple",
                                "layout": "horizontal"
                            }
                        },
                        {
                            "type": "RoomBanner",
                            "props": {
                                "roomSize": ac_config?.roomSize || "0",
                            }
                        },
                        {
                            "type": "BrandSelector",
                            "props": {
                                "title": "Quale brand di climatizzatore preferisce?",
                                "stateProperty": "investmentOption"
                            }
                        },
                        {
                            "type": "OptionSelector",
                            "props": {
                                "title": "Qual è l'investimento più adatto al cliente?",
                                "options": [
                                    {
                                        "id": "conveniente",
                                        "name": "Più conveniente",
                                        "value": "conveniente",
                                        "icon": "empty"
                                    },
                                    {
                                        "id": "qualita_prezzo",
                                        "name": "Miglior rapporto qualità/prezzo",
                                        "value": "qualita_prezzo",
                                        "icon": "half"
                                    },
                                    {
                                        "id": "top_di_gamma",
                                        "name": "Top di gamma",
                                        "value": "top_di_gamma",
                                        "icon": "full"
                                    }
                                ],
                                "stateProperty": "investmentOption"
                            }
                        },
                        {
                            "type": "AcProductDisplayContainer",
                            "props": {
                                "showLoadingStates": true,
                                "maxProducts": 100,
                                "gridClassName": "grid grid-cols-1 md:grid-cols-2 gap-6",
                                "className": "mb-8"
                            }
                        }
                    ]
                };
                dynamicPages.push(page);
            }
        });

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
});
