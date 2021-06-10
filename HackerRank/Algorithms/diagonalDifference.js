/**
 * Question:
 * Calculate the absolute difference of sums
 * across the two diagonals of a square matrix
 */

/**
 * Solution:
 * Step 1:
 * What is a matrix?
 * It is a collection of numbers
 * arranged in a fixed number
 * of columns and rows
 * Step 2: Arrange the numbers into array of numbers
 * Step 3: Find the diagonal sums
 * Step 3: Find the difference between them
 */

let matrix = [
	[2, 3, 4],
	[5, 3, -1],
	[9, 8, -2],
];

function diagonalDifference(array) {
	let result;
	let sum1 = 0;
	let sum2 = 0;
	for (let index = 0; index < array.length; index++) {
		for (let j = 0; j < array.length; j++) {
			if (index === j) {
				sum1 += array[index][j];
			}
			if (index + j === array.length - 1) {
				sum2 += array[index][j];
			}
		}
	}
	result = sum1 - sum2;
	return Math.abs(result);
}

//Testing the function

console.log(diagonalDifference(matrix));
