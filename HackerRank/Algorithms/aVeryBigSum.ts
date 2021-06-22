/**
 * Question: Complete the aVeryBigSum function 
 * in the editor below. It must return the 
 * sum of all array elements.
 */

//Solution

function aVeryBigSum(ar: Array<number>): bigint {
	let count: number = 0;

	for (let index = 0; index < ar.length; index++) {
		count += ar[index];
	}
	return BigInt(count);
}

//Testing the function

console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]));
