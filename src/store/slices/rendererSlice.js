import getNestedValue from "../../utils/getNestedValue";

const createRendererSlice = (set, get) => ({

    // Component visibility helpers
    shouldRenderComponent: (conditions) => {
        if (!conditions) return true;

        const state = get();
        // Handle different condition types
        if (conditions.hasValues) {
            // Check if any of the specified state properties have values
            return conditions.hasValues.some(property => {
                const value = getNestedValue(state, property);
                console.log(`Checking property "${property}":`, value);
                if (Array.isArray(value)) return value.length > 0;
                if (typeof value === 'object' && value !== null) {
                    return Object.values(value).some(v => v && v !== 0);
                }
                return value !== undefined && value !== null && value !== '' && value !== 0;
            });
        }

        if (conditions.isDefined) {
            // Check if all specified state properties are defined
            const value = getNestedValue(state, conditions.isDefined);
            return value !== undefined && value !== null && value !== '' && value !== 0;
        }

        if (conditions.hasQuantities) {
            // Check if any quantities are greater than 0
            const quantities = getNestedValue(state, conditions.hasQuantities) || {};
            return Object.values(quantities).some(qty => qty > 0);
        }

        if (conditions.equals) {
            // Check if a state property equals a specific value
            return getNestedValue(state, conditions.equals.property) === conditions.equals.value;
        }

        if (conditions.custom) {
            // Custom function evaluation
            return conditions.custom(getNestedValue(state, conditions.custom.property), state);
        }

        return true;
    },
})


export default createRendererSlice;