var isDate = function (input) {
  if (input instanceof Date) {
    // It's a Date object – check if it's valid
    return !isNaN(input.getTime());
  }

  if (typeof input === 'string' || typeof input === 'number') {
    // Try to parse strings and numbers into a Date
    const parsed = new Date(input);
    return !isNaN(parsed.getTime());
  }

  // Any other type (object, boolean, null, undefined, etc.)
  return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
