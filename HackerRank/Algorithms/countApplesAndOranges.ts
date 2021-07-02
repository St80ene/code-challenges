/**
 * Question: 
 * Complete the countApplesAndOranges 
 * function in the editor below. It 
 * should print the number of apples 
 * and oranges that land on Sam's house, 
 * each on a separate line.
 * where s = start point
 * t = end point
 * a = location of the apple tree
 * b = location of the oranges tree
 * apples = array of apples
 * oranges = array of oranges
 */


//Solution
function countApplesAndOranges(
	s: number,
	t: number,
	a: number,
	b: number,
	apples: Array<number>,
	oranges: Array<number>
) {
	// Write your code here
    const appleDistance = apples.map((index) => a + index)
	const orangesDistance = oranges.map((index) => b + index);
	let appleCount = 0
	let orangeCount = 0;
	
	for (let index = 0; index < appleDistance.length; index++) {
		if (appleDistance[index] >= s && appleDistance[index] <= t) {
			appleCount++;
		}
	}

	for (let index = 0; index < orangesDistance.length; index++) {
		
		if (orangesDistance[index] >= s && orangesDistance[index] <= t) {
			orangeCount++;
		}
	}
	console.log(appleCount);
	console.log(orangeCount);
	
}

//testing the solution
countApplesAndOranges(7, 11,5, 15, [-2, 2, 1], [5,-6])
