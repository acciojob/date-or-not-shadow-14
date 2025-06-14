var isDate = function (input) {
  //   write your code here
	const dateRegex = /^\d{4}[-/]\d{2}[-/]\d{2}$/;

  if (input instanceof Date) {
    return !isNaN(input.getTime()); // Check if it's a valid Date object
  }

  if (typeof input === 'string' && dateRegex.test(input)) {
    const date = new Date(input);
    return !isNaN(date.getTime()); // Check if it's a real date
  }

  return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
