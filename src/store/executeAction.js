import getNestedValue from "../utils/getNestedValue";

export function executeAction(state, action) {
    const actions = [].concat(action);
    actions.forEach(act => __executeAction(state, act));
}

function __executeAction(state, action) {
    if (typeof action === 'function') {
        action();
        return;
    }

    if (typeof action !== 'string') {
        console.warn('Action must be a string path');
        return;
    }
    const fn = getNestedValue(state, action);
    if (typeof fn !== 'function') {
        console.warn(`Action is not a valid function: ${action}`);
        return;
    }
    fn();
}