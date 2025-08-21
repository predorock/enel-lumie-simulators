/**
 * Gets nested property value from object using dot notation
 * @param {Object} obj - Object to traverse
 * @param {string} path - Dot notation path (e.g., 'user.profile.email')
 * @returns {any} Value at the path or undefined if not found
 */
const getNestedValue = (obj, path) => {
    return path.split('.').reduce((current, key) => {
        return current && current[key] !== undefined ? current[key] : undefined;
    }, obj);
};

export default getNestedValue;