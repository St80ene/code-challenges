/**
 * Question:
 * Given an array of integers, 
 * find the sum of its elements.
 */

//Solution

function simpleArraySum(ar) {
	return ar.reduce((prev, current) => prev + current);
}

//Testing the function

console.log(simpleArraySum([1, 2, 3, 4, 10, 11]));