/**
 * Question: 
 * Print a staircase of size n using # symbols and spaces.
 * Note: The last line must have 0 spaces in it.
 */

//solution

// function staircase(n) {
// 	for (let i = 1; i <= n; i++) {
// 		console.log(' '.repeat(n - i) + '#'.repeat(i));
// 	}
// }

function staircase(n, repeat = 1) {
	n -= 1
	if (n === 0) {
		console.log('#'.repeat(repeat));
		return;
	}
	console.log(' '.repeat(n) + '#'.repeat(repeat));
	staircase(n, repeat+1);
}


//testing the solution

staircase(4);