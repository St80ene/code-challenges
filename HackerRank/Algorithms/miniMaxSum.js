/**
 * Question:
 *
 * Given five positive integers,
 * find the minimum and maximum
 * values that can be calculated
 * by summing exactly four of the
 * five integers. Then print the respective
 * minimum and maximum values as a single line
 * of two space-separated long integers.
 */

//Solution:

function miniMax(array) {
	const sortedArray = array.sort((a, b) => a - b);

	let minValue = 0;
	let maxValue = 0;

    for (let index = 0; index < sortedArray.length - 1; index++) {
        minValue += sortedArray[index];
	}

	for (let index = 1; index < sortedArray.length; index++) {
        maxValue += sortedArray[index];
	}

    console.log(minValue, maxValue);
}

miniMax([9, 3, 5, 7, 1]);
