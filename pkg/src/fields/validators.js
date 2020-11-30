
export function validateIf(value, field, validators) {
  /**
   * Validates all error conditions when value changes 
   * and assembles the combined errors array if on error.
   * @returns: array of error codes, or [] if no errors
   */
  let errors = validators
    .map((validator) => validator(value, field))
    .filter((co) => co !== null)

  return (errors || []);
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
  if (field.required && (valued(value) || '').toString().trim().length === 0) {
    return 'is_empty';
  }
  return null;
}

export function exceedsMin(value, field) {
  if (valued(field.min) && valued(value) && value < field.min) {
    return 'lower_than_min_limit';
  }
  return null;
}

export function exceedsMax(value, field) {
  if (valued(field.max) && valued(value) && value > field.max) {
    return 'bigger_than_max_limit';
  }
  return null;
}

export function notANumber(value, field) {
  if (valued(value) && isNaN(value)) {
    return 'not_a_valid_number';
  }
  return null;
}

export function notATime(value, field) {

  function isATime(value) {
    try {
      let x = value.toString().split('.'); // just two decimals
      const hh = parseInt(x[0]);
      const mm = parseInt(Math.round((value - hh)*100));
      return (hh >= 0 && hh < 24 && mm >= 0 && mm < 60);
    }
    catch (err) {
      return false;
    }
  }

  if (valued(value) && (isNaN(value) || !isATime(value))) {
    return 'not_a_valid_time';
  }
  return null;
}

function valued(val) {
  /**
   * Verifies that the value is not Null and not Undefined.
   * 
   * This is necessary because 0 is a valid value for numbers
   * but is treated as falsy in logical expressions.
   * 
   * @returns: True if it has a valid value, False otherwise
   */
  return !(val === null || val === undefined);
}
