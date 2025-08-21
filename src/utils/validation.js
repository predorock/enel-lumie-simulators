import getNestedValue from "./getNestedValue";

/**
 * Validation utilities for form and page validation
 */

/**
 * Validates required fields (supports nested properties with dot notation)
 * @param {string[]} requiredFields - Array of property names that are required
 * @param {Object} state - The entire application state
 * @returns {Object} Validation result with isValid and errors
 */
export const validateRequiredFields = (requiredFields, state) => {
  const errors = [];

  const fieldLabels = {
    storeLocation: 'Nome punto vendita',
    consultantName: 'Nome e cognome del consulente',
    storePhone: 'Telefono punto vendita',
    storeCity: 'Città',
    'user.profile.email': 'Email profilo utente',
    'user.profile.phone': 'Telefono profilo utente',
    'address.street': 'Via',
    'address.city': 'Città indirizzo'
  };

  for (const field of requiredFields) {
    // Support both nested (dot notation) and regular field access
    const value = field.includes('.') ? getNestedValue(state, field) : state[field];

    if (!value || (typeof value === 'string' && value.trim() === '')) {
      const label = fieldLabels[field] || field;
      errors.push({
        field,
        message: `${label} è obbligatorio`
      });
    }
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

/**
 * Validates minimum quantity for quantity objects
 * @param {string} property - Property name to validate
 * @param {number} minTotal - Minimum total required
 * @param {Object} state - The entire application state
 * @param {string} errorMessage - Custom error message
 * @returns {Object} Validation result
 */
export const validateMinQuantity = (property, minTotal, state, errorMessage) => {
  const quantities = property.includes('.') ? getNestedValue(state, property) : state[property];

  if (!quantities || typeof quantities !== 'object') {
    return {
      isValid: false,
      errors: [{
        field: property,
        message: errorMessage || `Seleziona almeno ${minTotal} elemento`
      }]
    };
  }

  // Calculate total quantities
  const total = Object.values(quantities).reduce((sum, qty) => {
    return sum + (typeof qty === 'number' ? qty : 0);
  }, 0);

  const isValid = total >= minTotal;

  return {
    isValid,
    errors: isValid ? [] : [{
      field: property,
      message: errorMessage || `Seleziona almeno ${minTotal} elemento`
    }]
  };
};

/**
 * Validates air conditioning configuration completeness
 * @param {string} property - Property name for air conditioning configs
 * @param {string} dependsOn - Property name for quantities that trigger this validation
 * @param {Object} state - The entire application state
 * @param {string} errorMessage - Custom error message
 * @returns {Object} Validation result
 */
export const validateAirConditioningConfig = (property, dependsOn, state, errorMessage) => {
  const quantities = dependsOn.includes('.') ? getNestedValue(state, dependsOn) : state[dependsOn] || {};
  const configs = property.includes('.') ? getNestedValue(state, property) : state[property] || {};

  const errors = [];

  // Check each split type that has quantities > 0
  Object.entries(quantities).forEach(([splitType, quantity]) => {
    if (quantity > 0) {
      // For each quantity, we need corresponding configurations
      for (let i = 0; i < quantity; i++) {
        const configKey = `${splitType}_${i}`;
        const config = configs[configKey];

        if (!config || !config.installationType || !config.roomSize) {
          errors.push({
            field: property,
            message: errorMessage || `Configurazione mancante per ${splitType} #${i + 1}`
          });
        }
      }
    }
  });

  return {
    isValid: errors.length === 0,
    errors
  };
};

/**
 * Validates conditional rules
 * @param {Object[]} conditionalRules - Array of conditional validation rules
 * @param {Object} state - The entire application state
 * @returns {Object} Validation result
 */
export const validateConditionalRules = (conditionalRules, state) => {
  const errors = [];

  for (const rule of conditionalRules) {
    const { condition, then } = rule;

    // Check if condition is met
    const conditionValue = condition.property.includes('.') ? getNestedValue(state, condition.property) : state[condition.property];
    const conditionMet = conditionValue === condition.equals;

    if (conditionMet) {
      // Apply the validation rule
      if (then.type === 'minQuantity') {
        const result = validateMinQuantity(
          then.property,
          then.minTotal,
          state,
          then.errorMessage
        );

        if (!result.isValid) {
          errors.push(...result.errors);
        }
      }
    }
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

/**
 * Validates custom rules
 * @param {Object[]} customRules - Array of custom validation rules
 * @param {Object} state - The entire application state
 * @returns {Object} Validation result
 */
export const validateCustomRules = (customRules, state) => {
  const errors = [];

  for (const rule of customRules) {
    if (rule.type === 'minQuantity') {
      const result = validateMinQuantity(
        rule.property,
        rule.minTotal,
        state,
        rule.errorMessage
      );

      if (!result.isValid) {
        errors.push(...result.errors);
      }
    } else if (rule.type === 'airConditioningConfig') {
      const result = validateAirConditioningConfig(
        rule.property,
        rule.dependsOn,
        state,
        rule.errorMessage
      );

      if (!result.isValid) {
        errors.push(...result.errors);
      }
    }
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

/**
 * Validates a page based on its validation rules
 * @param {Object} page - Page configuration from pages.json
 * @param {Object} state - The entire application state
 * @returns {Object} Complete validation result
 */
export const validatePage = (page, state) => {
  if (!page.validationRules) {
    return { isValid: true, errors: [] };
  }

  const allErrors = [];
  const { validationRules } = page;

  // Validate required fields
  if (validationRules.required) {
    const result = validateRequiredFields(validationRules.required, state);
    if (!result.isValid) {
      allErrors.push(...result.errors);
    }
  }

  // Validate custom rules
  if (validationRules.custom) {
    const result = validateCustomRules(validationRules.custom, state);
    if (!result.isValid) {
      allErrors.push(...result.errors);
    }
  }

  // Validate conditional rules
  if (validationRules.conditional) {
    const result = validateConditionalRules(validationRules.conditional, state);
    if (!result.isValid) {
      allErrors.push(...result.errors);
    }
  }

  return {
    isValid: allErrors.length === 0,
    errors: allErrors
  };
};
