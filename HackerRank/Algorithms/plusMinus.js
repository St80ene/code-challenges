/**
 * Question:
 * Given an array of integers,
 * calculate the ratios of its elements that are positive,
 * negative, and zero.
 * Print the decimal value of each
 * fraction on a new line with 6 places after the decimal.
 */

/**
 * Solution:
 * Step 1: Define a functionn that accepts array as a parameter
 * Step 2: initialize counts for each
 * positive, negative and zero element
 * Step 3: loop through, identify each element and add to count
 * Step 4: divide each count with the length of the array
 * Step 5: Convert to 6 decimal places and print to console
 * on a new line
 */

let arr = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {
	let arrayLength = arr.length;
	let positiveNumbers = 0;
	let negativeNumbers = 0;
	let zeroNumbers = 0;

	for (let index = 0; index < arrayLength; index++) {
		if (arr[index] > 0) {
			positiveNumbers += 1;
		}
		if (arr[index] < 0) {
			negativeNumbers += 1;
		}
		if (arr[index] === 0) {
			zeroNumbers += 1;
		}
	}

	let decimalOfPositiveNumbers = positiveNumbers / arrayLength;
	let decimalOfNegativeNumbers = negativeNumbers / arrayLength;
	let decimalOfZeroNumbers = zeroNumbers / arrayLength;

	console.log(
		decimalOfPositiveNumbers.toFixed(6) +
			'\n' +
			decimalOfNegativeNumbers.toFixed(6) +
			'\n' +
			decimalOfZeroNumbers.toFixed(6) +
			'\n'
	);
}

//Testing the function

plusMinus(arr);
