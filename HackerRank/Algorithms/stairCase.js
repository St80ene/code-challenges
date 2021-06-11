/**
 * Question: 
 * Print a staircase of size  using # symbols and spaces.
 * Note: The last line must have  spaces in it.
 */

//solution

function staircase(n) {
	for (let i = 1; i <= n; i++) {
		console.log(' '.repeat(n - i) + '#'.repeat(i));
	}
}

//testing the solution

console.log(staircase(4));