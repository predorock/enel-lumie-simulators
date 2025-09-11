import getNestedValue from "../../utils/getNestedValue";

export const createRendererSlice = (set, get) => ({

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
        // Assuming that the atLeastOneOf.items is an array or an object
        // atLeastOneOf.value is the value to check against
        // If items in array check if any item equals value
        // If atLeastOneOf.prop is defined check if the item's property equals value
        // If items is an object loop through its values and check if any value equals atLeastOneOf.value
        // IfatLeastOneOf.prop is defined and item is object check if the item's property equals value
        if (conditions.atLeastOneOf) {
            const { items, property, value } = conditions.atLeastOneOf;
            const stateItems = getNestedValue(state, items);
            if (!stateItems) return false;
            if (Array.isArray(stateItems)) {
                return stateItems.some(item => item === value || (property && item[property] === value));
            } else if (typeof stateItems === 'object' && stateItems !== null) {
                return Object.values(stateItems).some(itemValue => itemValue === value || (property && itemValue[property] === value));
            }
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