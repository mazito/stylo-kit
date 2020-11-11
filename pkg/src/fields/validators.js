
export function validateIf(value, field, validators) {
  /**
   * Validates all error conditions when value changes 
   * and assembles the combined error messages if on error.
   */
  let codes = validators
    .map((validator) => validator(value, field))
    .filter((co) => co!==null)

  const message = codes.join('. '); // will be empty if no errors
  
  field.status = message ? 'error' : field.status;
  field.messages['error'] = message ? message : ''; 

  return field;
}


/**
 * A set of useful validators
 * 
 * @param value: the value to validate 
 * @param field: the field params 
 * @returns: the error code if the error condition is met, Null if not
 */

export function exceedsMaxlength(value, field) {
  if (value.length > field.maxlen) {
    return 'max_length_exceeded';
  }
  return null;
}

export function isEmpty(value, field) {
  if (field.required && (value || '').toString().trim().length === 0) {
    return 'can_not_be_empty';
  }
  return null;
}

export function exceedsMin(value, field) {
  if (field.min && value && value < field.min) {
    return 'lower_than_min_limit';
  }
  return null;
}

export function exceedsMax(value, field) {
  if (field.max && value && value > field.max) {
    return 'bigger_than_max_limit';
  }
  return null;
}

export function notANumber(value, field) {
  if (value && isNaN(value)) {
    return 'not_a_valid_number';
  }
  return null;
}